'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Logo } from '@/components/Logo';
import { FlagIcon } from '@/components/FlagIcon';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const { lang, toggleLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'collections', 'players', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', id: 'home', label: t.nav.home },
    { href: '#collections', id: 'collections', label: t.nav.collections },
    { href: '#players', id: 'players', label: t.nav.players },
    { href: '#contact', id: 'contact', label: t.nav.contact },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-[#0c2b5e]/15 py-2.5'
            : 'bg-white border-b border-[#0c2b5e]/10 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* LEFT: Icon Menu & ONLY Team Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-[#0c2b5e]/20 bg-slate-50 text-[#0c2b5e] hover:bg-[#0c2b5e] hover:text-white transition-colors flex items-center justify-center cursor-pointer group"
              aria-label="Toggle navigation menu"
              id="nav-menu-toggle-btn"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 transition-transform group-hover:rotate-90" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

            <Link
              href="#home"
              className="flex items-center focus:outline-none"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Logo size={46} showText={false} withBorder={false} />
            </Link>
          </div>

          {/* CENTER: Text Menu (Home, Feature Collection, Player, Contact Us) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-xs xl:text-sm font-bold tracking-wider uppercase transition-colors duration-200 ${
                    isActive
                      ? 'text-[#0c2b5e] bg-[#eaf3fb]'
                      : 'text-slate-600 hover:text-[#0c2b5e] hover:bg-slate-100/80'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0c2b5e]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT: ONLY Sponsor Logo & Switch Languages (Khmer/English) */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Sponsor: ONLY Logo (No border, clean image) */}
            <div className="flex items-center justify-center px-1 sm:px-2 h-8 sm:h-9">
              <div className="w-14 sm:w-20 h-5 sm:h-7 relative flex-shrink-0">
                <Image
                  src="/assets/images/sponsors/bnc.png"
                  alt="BNC Sponsor"
                  fill
                  sizes="(max-width: 640px) 56px, 80px"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Language Switcher with Flag Image */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 border border-[#0c2b5e] bg-[#0c2b5e] text-white hover:bg-[#1665a5] transition-all text-xs font-bold cursor-pointer shadow-sm active:translate-y-0.5 h-8 sm:h-9"
              id="language-switch-btn"
              title="Switch Language"
            >
              <FlagIcon country={lang === 'en' ? 'kh' : 'en'} width={20} height={14} />
              <span className="text-xs font-bold leading-none">{lang === 'en' ? 'ភាសាខ្មែរ' : 'EN'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer / Slide-out Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#06152e]/60 z-40 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 border-r border-[#0c2b5e]/20 p-6 flex flex-col justify-between overflow-y-auto lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#0c2b5e]/15">
                  <Logo size={46} showText={false} withBorder={false} />
                  
                  {/* Sponsor Logo in mobile header (No border, clean image) */}
                  <div className="flex items-center justify-center px-2 py-1">
                    <div className="w-16 h-6 relative flex-shrink-0">
                      <Image
                        src="/assets/images/sponsors/bnc.png"
                        alt="BNC Sponsor"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 border border-slate-300 text-slate-700 hover:bg-slate-100 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Links */}
                <div className="mt-8 flex flex-col space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-2">
                    NAVIGATION MENU
                  </span>
                  {navLinks.map((link, idx) => (
                    <Link
                      key={link.id}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-3 border border-[#0c2b5e]/10 bg-slate-50 hover:bg-[#0c2b5e] hover:text-white transition-all text-sm font-bold tracking-wider uppercase text-[#0c2b5e]"
                    >
                      <span>{link.label}</span>
                      <span className="text-xs font-mono opacity-50">0{idx + 1}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Bottom Language & Socials */}
              <div className="pt-6 border-t border-[#0c2b5e]/15">
                <button
                  onClick={toggleLang}
                  className="w-full flex items-center justify-center gap-2.5 py-3 bg-[#0c2b5e] text-white font-bold text-xs tracking-widest uppercase cursor-pointer shadow-sm active:translate-y-0.5"
                >
                  <FlagIcon country={lang === 'en' ? 'kh' : 'en'} width={24} height={16} />
                  <span>{lang === 'en' ? 'ប្តូរជា ភាសាខ្មែរ' : 'Switch to English'}</span>
                </button>
                <div className="mt-3 text-center text-[10px] text-slate-400 uppercase tracking-widest font-mono">
                  BNC FOOTBALL CLUB 2026
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
