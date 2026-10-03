'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Logo } from '@/components/Logo';
import { Send, ArrowUp } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t-2 border-[#0c2b5e] text-[#0c2b5e] py-12 relative overflow-hidden">

      {/* Background Subtle Grid */}
      <div className="absolute inset-0 pointer-events-none tactical-grid opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#0c2b5e]/15">

          {/* LEFT: Logo & Club Tagline */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <Logo size={52} showText={true} />
            <div className="sm:border-l sm:border-[#0c2b5e]/20 sm:pl-4">
              <p className="text-xs text-slate-600 max-w-sm font-medium">
                {t.footer.tagline}
              </p>
              <div className="text-[10px] font-mono font-bold text-[#1665a5] uppercase mt-1">
                EXCELLENCE • PRECISION • VICTORY
              </div>
            </div>
          </div>

          {/* RIGHT: Square Social Icons [ Facebook ], [ TikTok ], [ Telegram ] */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest hidden sm:inline-block mr-2">
              {t.footer.socials}:
            </span>

            {/* Facebook [] */}
            <a
              href="https://www.facebook.com/share/1JCeVC8puF/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="group relative flex items-center justify-center px-4 py-2.5 bg-white border-2 border-[#0c2b5e] text-[#0c2b5e] hover:bg-[#0c2b5e] hover:text-white transition-all duration-200 font-mono text-xs font-black shadow-sm active:translate-y-0.5"
              id="footer-facebook-link"
            >
              <span className="opacity-40 group-hover:opacity-100 mr-1">[</span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>FACEBOOK</span>
              </span>
              <span className="opacity-40 group-hover:opacity-100 ml-1">]</span>
            </a>

            {/* TikTok [] */}
            <a
              href="https://www.tiktok.com/@bncfc8?_r=1&_t=ZS-9AEwCrfXCvR"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="group relative flex items-center justify-center px-4 py-2.5 bg-white border-2 border-[#0c2b5e] text-[#0c2b5e] hover:bg-[#0c2b5e] hover:text-white transition-all duration-200 font-mono text-xs font-black shadow-sm active:translate-y-0.5"
              id="footer-tiktok-link"
            >
              <span className="opacity-40 group-hover:opacity-100 mr-1">[</span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.27 1.76-.23.99-.04 2.09.6 2.89.6.78 1.56 1.25 2.56 1.25 1.05.02 2.09-.45 2.71-1.3.36-.53.54-1.17.55-1.81V.02z" />
                </svg>
                <span>TIKTOK</span>
              </span>
              <span className="opacity-40 group-hover:opacity-100 ml-1">]</span>
            </a>

            {/* Telegram [] */}
            <a
              href="https://t.me/bncfootballclub"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              className="group relative flex items-center justify-center px-4 py-2.5 bg-[#0c2b5e] text-white hover:bg-[#1665a5] transition-all duration-200 font-mono text-xs font-black shadow-sm active:translate-y-0.5"
              id="footer-telegram-link"
            >
              <span className="opacity-40 group-hover:opacity-100 mr-1">[</span>
              <span className="flex items-center gap-1.5">
                <Send className="w-4 h-4 text-sky-300" />
                <span>TELEGRAM</span>
              </span>
              <span className="opacity-40 group-hover:opacity-100 ml-1">]</span>
            </a>

          </div>

        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
          <div>
            {t.footer.rights}
          </div>

          <div className="flex items-center gap-4">
            <span>DEVELOPED BY ALEJANDRO DAVID</span>
            <button
              onClick={scrollToTop}
              className="p-2 border border-[#0c2b5e]/20 text-[#0c2b5e] hover:bg-[#0c2b5e] hover:text-white transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
