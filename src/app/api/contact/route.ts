import { NextRequest, NextResponse } from 'next/server';

// In-memory sliding window rate limiter
// Limits each IP to max 5 requests per 10-minute window
interface RateLimitRecord {
  timestamps: number[];
}

const rateLimitMap = new Map<string, RateLimitRecord>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX_REQUESTS = 5;

// Clean up stale rate limit entries periodically (every 15 minutes)
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    const validTimestamps = record.timestamps.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);
    if (validTimestamps.length === 0) {
      rateLimitMap.delete(ip);
    } else {
      record.timestamps = validTimestamps;
    }
  }
}, 15 * 60 * 1000);

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  return (
    req.headers.get('x-real-ip') ||
    req.headers.get('cf-connecting-ip') ||
    '127.0.0.1'
  );
}

function checkRateLimit(ip: string): { allowed: boolean; remaining: number; retryAfterSec: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip) || { timestamps: [] };

  // Filter timestamps within current sliding window
  record.timestamps = record.timestamps.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);

  if (record.timestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    const oldest = record.timestamps[0];
    const retryAfterSec = Math.ceil((oldest + RATE_LIMIT_WINDOW_MS - now) / 1000);
    return { allowed: false, remaining: 0, retryAfterSec: Math.max(retryAfterSec, 1) };
  }

  record.timestamps.push(now);
  rateLimitMap.set(ip, record);

  return {
    allowed: true,
    remaining: RATE_LIMIT_MAX_REQUESTS - record.timestamps.length,
    retryAfterSec: 0,
  };
}

// Sanitization: Strip invisible control characters & CRLF
function sanitizeSingleLine(text: unknown, maxLen: number): string {
  if (typeof text !== 'string') return '';
  return text
    .replace(/[\u0000-\u0008\u000B-\u000C\u000E-\u001F\u007F]/g, '')
    .replace(/[\r\n\t]/g, ' ')
    .trim()
    .slice(0, maxLen);
}

function sanitizeMultiLine(text: unknown, maxLen: number): string {
  if (typeof text !== 'string') return '';
  return text
    .replace(/[\u0000-\u0008\u000B-\u000C\u000E-\u001F\u007F]/g, '')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/\n{4,}/g, '\n\n\n') // Max 3 consecutive line breaks
    .trim()
    .slice(0, maxLen);
}

// HTML-escape for Telegram HTML format mode
function escapeTelegramHtml(text: string): string {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// RFC 5322 standard email regex
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
const PHONE_REGEX = /^[+\d\s().-]{6,25}$/;

export async function POST(req: NextRequest) {
  try {
    const clientIp = getClientIp(req);

    // 1. IP-based Rate Limiting Guard
    const rateCheck = checkRateLimit(clientIp);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: `Rate limit exceeded. Please wait ${rateCheck.retryAfterSec} seconds before submitting again.`,
          retryAfter: rateCheck.retryAfterSec,
        },
        {
          status: 429,
          headers: {
            'Retry-After': String(rateCheck.retryAfterSec),
            'X-Content-Type-Options': 'nosniff',
            'Cache-Control': 'no-store',
          },
        }
      );
    }

    // 2. Parse request JSON safely
    let body: Record<string, unknown>;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid JSON request payload.' },
        { status: 400 }
      );
    }

    const {
      name: rawName,
      email: rawEmail,
      phone: rawPhone,
      subject: rawSubject,
      message: rawMessage,
      bot_trap: botTrap,
      formLoadedAt,
    } = body;

    // 3. Honeypot Anti-Spam Trap: If filled, silently drop with fake success
    if (typeof botTrap === 'string' && botTrap.trim().length > 0) {
      console.warn(`[Security Alert] Bot trap triggered by IP: ${clientIp}`);
      return NextResponse.json(
        {
          success: true,
          message: 'Inquiry processed successfully.',
        },
        { status: 200 }
      );
    }

    // 4. Anti-Instant Script Submission Guard: Verify submission time
    if (typeof formLoadedAt === 'number') {
      const durationMs = Date.now() - formLoadedAt;
      if (durationMs < 1200) {
        console.warn(`[Security Alert] Instant submission (< 1.2s) rejected from IP: ${clientIp}`);
        return NextResponse.json(
          {
            success: false,
            error: 'Submission was completed unnaturally fast. Please submit normally.',
          },
          { status: 400 }
        );
      }
    }

    // 5. Deep Input Sanitization
    const name = sanitizeSingleLine(rawName, 80);
    const email = sanitizeSingleLine(rawEmail, 100);
    const phone = sanitizeSingleLine(rawPhone, 25);
    const subject = sanitizeSingleLine(rawSubject, 120);
    const message = sanitizeMultiLine(rawMessage, 3000);

    // 6. Strict Validation Checks
    if (!name || name.length < 2) {
      return NextResponse.json(
        { success: false, error: 'Name must be at least 2 characters long (max 80).' },
        { status: 422 }
      );
    }

    if (!email || !EMAIL_REGEX.test(email) || email.length > 100) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 422 }
      );
    }

    if (phone && !PHONE_REGEX.test(phone)) {
      return NextResponse.json(
        { success: false, error: 'Phone number format is invalid (digits, +, -, () only).' },
        { status: 422 }
      );
    }

    if (!subject || subject.length < 3) {
      return NextResponse.json(
        { success: false, error: 'Subject must be at least 3 characters long (max 120).' },
        { status: 422 }
      );
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        { success: false, error: 'Message must be at least 10 characters long (max 3,000).' },
        { status: 422 }
      );
    }

    // 7. Secure Formatting for Telegram HTML Mode
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    const nowUtc = new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC';

    const telegramMessage = `
⚽ <b>NEW INQUIRY: BNC FOOTBALL CLUB</b>
━━━━━━━━━━━━━━━━━━━━━━
👤 <b>From:</b> ${escapeTelegramHtml(name)}
📧 <b>Email:</b> <code>${escapeTelegramHtml(email)}</code>
📱 <b>Phone/Telegram:</b> <code>${escapeTelegramHtml(phone || 'Not specified')}</code>
📋 <b>Subject:</b> <b>${escapeTelegramHtml(subject)}</b>
━━━━━━━━━━━━━━━━━━━━━━
💬 <b>Message:</b>
${escapeTelegramHtml(message)}
━━━━━━━━━━━━━━━━━━━━━━
⏰ <b>Time:</b> ${nowUtc} (Phnom Penh)
🌐 <b>Origin:</b> BNC FC Official Web Portal
🛡️ <b>Security Status:</b> Verified & Sanitized
`.trim();

    // 8. Simulation fallback if Telegram bot credentials are not yet set
    if (!botToken || !chatId) {
      console.warn(
        '⚠️ Telegram Bot notification simulated: TELEGRAM_BOT_TOKEN and/or TELEGRAM_CHAT_ID not configured in .env.local'
      );
      console.log('Incoming Contact Message:\n', telegramMessage);

      return NextResponse.json(
        {
          success: true,
          simulated: true,
          message: 'Message processed (Demo Mode). Configure TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in .env.local for live dispatch.',
          data: { name, email, subject, time: nowUtc },
        },
        {
          headers: {
            'X-Content-Type-Options': 'nosniff',
            'Cache-Control': 'no-store',
          },
        }
      );
    }

    // 9. Dispatch directly to Telegram Bot API with 8-second Timeout
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    try {
      const response = await fetch(telegramUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: 'HTML',
          disable_web_page_preview: true,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      const result = await response.json();

      if (!response.ok || !result.ok) {
        console.error('Telegram API error:', result);
        return NextResponse.json(
          {
            success: false,
            error: result.description || 'Failed to dispatch message to Telegram Bot.',
          },
          { status: 502 }
        );
      }

      return NextResponse.json(
        {
          success: true,
          deliveredToTelegram: true,
          message: 'Inquiry successfully transmitted to BNC Football Club Telegram Channel!',
          telegramMessageId: result.result?.message_id,
        },
        {
          headers: {
            'X-Content-Type-Options': 'nosniff',
            'Cache-Control': 'no-store',
          },
        }
      );
    } catch (fetchErr: unknown) {
      clearTimeout(timeoutId);
      if (fetchErr instanceof Error && fetchErr.name === 'AbortError') {
        return NextResponse.json(
          { success: false, error: 'Telegram dispatch timed out. Please try again.' },
          { status: 504 }
        );
      }
      throw fetchErr;
    }
  } catch (error: unknown) {
    console.error('Contact API Internal Error:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected internal error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
