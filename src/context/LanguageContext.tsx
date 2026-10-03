'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, TranslationContent, translations } from '@/lib/translations';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: TranslationContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('en');

  useEffect(() => {
    // Check saved language preference from localStorage
    const saved = localStorage.getItem('bnc_lang') as Language;
    if (saved && (saved === 'en' || saved === 'kh')) {
      setLangState(saved);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang === 'kh' ? 'km' : 'en';
      if (lang === 'kh') {
        document.documentElement.classList.add('font-khmer');
      } else {
        document.documentElement.classList.remove('font-khmer');
      }
    }
  }, [lang]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('bnc_lang', newLang);
  };

  const toggleLang = () => {
    const nextLang: Language = lang === 'en' ? 'kh' : 'en';
    setLang(nextLang);
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
