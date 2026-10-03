'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Send, CheckCircle2, AlertCircle, AlertTriangle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
const PHONE_REGEX = /^[+\d\s().-]{6,25}$/;

export function ContactUs() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    bot_trap: '', // Invisible honeypot field
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');
  const [isSimulated, setIsSimulated] = useState(false);
  const [formLoadedAt, setFormLoadedAt] = useState<number>(0);

  // Initialize form load timestamp for anti-bot validation
  useEffect(() => {
    setFormLoadedAt(Date.now());
  }, []);

  // Validate fields dynamically
  const validateField = (fieldName: string, value: string): string | undefined => {
    switch (fieldName) {
      case 'name':
        if (!value.trim()) return t.contact.nameLabel + ' is required';
        if (value.trim().length < 2) return t.contact.validation.nameMin;
        if (value.trim().length > 80) return 'Name must be under 80 characters';
        return undefined;

      case 'email':
        if (!value.trim()) return t.contact.emailLabel + ' is required';
        if (!EMAIL_REGEX.test(value.trim())) return t.contact.validation.emailInvalid;
        return undefined;

      case 'phone':
        if (value.trim() && !PHONE_REGEX.test(value.trim())) {
          return t.contact.validation.phoneInvalid;
        }
        return undefined;

      case 'subject':
        if (!value.trim()) return t.contact.subjectLabel + ' is required';
        if (value.trim().length < 3) return t.contact.validation.subjectMin;
        if (value.trim().length > 120) return 'Subject must be under 120 characters';
        return undefined;

      case 'message':
        if (!value.trim()) return t.contact.messageLabel + ' is required';
        if (value.trim().length < 10) return t.contact.validation.messageMin;
        if (value.trim().length > 3000) return 'Message must be under 3,000 characters';
        return undefined;

      default:
        return undefined;
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const fieldError = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: fieldError }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const fieldError = validateField(field, formData[field as keyof typeof formData]);
    setErrors((prev) => ({ ...prev, [field]: fieldError }));
  };

  const validateAll = (): boolean => {
    const newErrors: FormErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message),
    };

    setTouched({
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    });

    setErrors(newErrors);

    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Run client-side validation first
    const isValid = validateAll();
    if (!isValid) {
      setStatus('error');
      setResponseMsg('Please correct the highlighted fields before submitting.');
      return;
    }

    setStatus('loading');
    setResponseMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          formLoadedAt,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setIsSimulated(Boolean(data.simulated));
        setResponseMsg(data.simulated ? `${t.contact.successMsg} (Demo / Simulation Mode)` : t.contact.successMsg);

        // Fire celebration confetti
        try {
          confetti({
            particleCount: 60,
            spread: 70,
            origin: { y: 0.7 },
            colors: ['#0c2b5e', '#1665a5', '#38bdf8', '#ffffff'],
          });
        } catch {
          // ignore confetti error
        }

        // Reset form & state
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          bot_trap: '',
        });
        setTouched({});
        setErrors({});
        setFormLoadedAt(Date.now());
      } else {
        setStatus('error');
        if (res.status === 429) {
          setResponseMsg(t.contact.validation.rateLimit);
        } else {
          setResponseMsg(data.error || t.contact.errorMsg);
        }
      }
    } catch {
      setStatus('error');
      setResponseMsg(t.contact.errorMsg);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-white border-t border-[#0c2b5e]/15 overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none tactical-grid opacity-30" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-8 pb-5 sm:pb-6 border-b border-[#0c2b5e]/20 text-center sm:text-left">
          <div className="text-xs font-mono font-bold tracking-widest text-[#1665a5] uppercase mb-1.5 leading-relaxed">
            {t.contact.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0c2b5e] uppercase tracking-tight leading-snug sm:leading-tight">
            {t.contact.title}
          </h2>
        </div>

        {/* Contact Form Card */}
        <div className="bg-white border-2 border-[#0c2b5e] p-6 sm:p-10 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            
            {/* Hidden Honeypot Anti-Bot Field (Invisible to human users) */}
            <div className="opacity-0 absolute -left-[9999px] -top-[9999px] h-0 w-0 pointer-events-none" aria-hidden="true">
              <label htmlFor="bot_trap">Do not fill this field</label>
              <input
                type="text"
                id="bot_trap"
                name="bot_trap"
                tabIndex={-1}
                autoComplete="off"
                value={formData.bot_trap}
                onChange={(e) => setFormData({ ...formData, bot_trap: e.target.value })}
              />
            </div>

            {/* Name & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="text-xs font-mono font-bold text-[#0c2b5e] uppercase block mb-1.5">
                  {t.contact.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  maxLength={80}
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  onBlur={() => handleBlur('name')}
                  placeholder={t.contact.namePlaceholder}
                  className={`w-full text-xs sm:text-sm p-3 border-2 outline-none transition-colors font-medium ${
                    touched.name && errors.name
                      ? 'border-red-500 bg-red-50/40 focus:border-red-600'
                      : 'border-slate-200 bg-slate-50 focus:bg-white focus:border-[#0c2b5e]'
                  }`}
                  id="contact-form-name"
                />
                {touched.name && errors.name && (
                  <p className="mt-1 text-[11px] text-red-600 font-medium flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3 flex-shrink-0" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              <div>
                <label className="text-xs font-mono font-bold text-[#0c2b5e] uppercase block mb-1.5">
                  {t.contact.emailLabel}
                </label>
                <input
                  type="email"
                  required
                  maxLength={100}
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  onBlur={() => handleBlur('email')}
                  placeholder={t.contact.emailPlaceholder}
                  className={`w-full text-xs sm:text-sm p-3 border-2 outline-none transition-colors font-medium ${
                    touched.email && errors.email
                      ? 'border-red-500 bg-red-50/40 focus:border-red-600'
                      : 'border-slate-200 bg-slate-50 focus:bg-white focus:border-[#0c2b5e]'
                  }`}
                  id="contact-form-email"
                />
                {touched.email && errors.email && (
                  <p className="mt-1 text-[11px] text-red-600 font-medium flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3 flex-shrink-0" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Phone & Subject Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="text-xs font-mono font-bold text-[#0c2b5e] uppercase block mb-1.5">
                  {t.contact.phoneLabel}
                </label>
                <input
                  type="tel"
                  maxLength={25}
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  onBlur={() => handleBlur('phone')}
                  placeholder={t.contact.phonePlaceholder}
                  className={`w-full text-xs sm:text-sm p-3 border-2 outline-none transition-colors font-medium font-mono ${
                    touched.phone && errors.phone
                      ? 'border-red-500 bg-red-50/40 focus:border-red-600'
                      : 'border-slate-200 bg-slate-50 focus:bg-white focus:border-[#0c2b5e]'
                  }`}
                  id="contact-form-phone"
                />
                {touched.phone && errors.phone && (
                  <p className="mt-1 text-[11px] text-red-600 font-medium flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3 flex-shrink-0" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              <div>
                <label className="text-xs font-mono font-bold text-[#0c2b5e] uppercase block mb-1.5">
                  {t.contact.subjectLabel}
                </label>
                <input
                  type="text"
                  required
                  maxLength={120}
                  value={formData.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  onBlur={() => handleBlur('subject')}
                  placeholder={t.contact.subjectPlaceholder}
                  className={`w-full text-xs sm:text-sm p-3 border-2 outline-none transition-colors font-medium ${
                    touched.subject && errors.subject
                      ? 'border-red-500 bg-red-50/40 focus:border-red-600'
                      : 'border-slate-200 bg-slate-50 focus:bg-white focus:border-[#0c2b5e]'
                  }`}
                  id="contact-form-subject"
                />
                {touched.subject && errors.subject && (
                  <p className="mt-1 text-[11px] text-red-600 font-medium flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3 flex-shrink-0" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Message Box */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-mono font-bold text-[#0c2b5e] uppercase">
                  {t.contact.messageLabel}
                </label>
                <span className="text-[11px] font-mono text-slate-400">
                  {formData.message.length} / 3000
                </span>
              </div>
              <textarea
                required
                rows={5}
                maxLength={3000}
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                onBlur={() => handleBlur('message')}
                placeholder={t.contact.messagePlaceholder}
                className={`w-full text-xs sm:text-sm p-3 border-2 outline-none transition-colors font-medium resize-none ${
                  touched.message && errors.message
                    ? 'border-red-500 bg-red-50/40 focus:border-red-600'
                    : 'border-slate-200 bg-slate-50 focus:bg-white focus:border-[#0c2b5e]'
                }`}
                id="contact-form-message"
              />
              {touched.message && errors.message && (
                <p className="mt-1 text-[11px] text-red-600 font-medium flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3 flex-shrink-0" />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            {/* Status Alert Banner */}
            {status === 'success' && (
              <div className="p-3.5 bg-emerald-50 border-2 border-emerald-500 text-emerald-800 text-xs flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-bold">{responseMsg}</span>
              </div>
            )}

            {status === 'error' && (
              <div className="p-3.5 bg-red-50 border-2 border-red-500 text-red-800 text-xs flex items-center gap-2.5">
                <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                <span className="font-medium">{responseMsg}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 bg-[#0c2b5e] text-white hover:bg-[#1665a5] disabled:bg-slate-400 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md active:translate-y-0.5"
              id="contact-submit-btn"
            >
              {status === 'loading' ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent animate-spin inline-block" />
                  <span>{t.contact.sendingBtn}</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>{t.contact.submitBtn}</span>
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
