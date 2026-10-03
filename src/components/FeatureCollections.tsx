'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export function FeatureCollections() {
  const { lang, t } = useLanguage();

  const kits = [
    {
      id: 'home-kit',
      name: lang === 'en' ? 'HOME KIT' : 'អាវប្រកួតក្នុងដី',
      sub: '2025/2026 MATCH EDITION',
      image: '/assets/images/jerseys/home.PNG',
    },
    {
      id: 'away-kit',
      name: lang === 'en' ? 'AWAY KIT' : 'អាវប្រកួតក្រៅដី',
      sub: '2025/2026 MATCH EDITION',
      image: '/assets/images/jerseys/away.jpg',
    },
  ];

  return (
    <section
      id="collections"
      className="relative py-16 sm:py-20 bg-white border-t border-[#0c2b5e]/15 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 pb-5 sm:pb-6 border-b border-[#0c2b5e]/20 text-center sm:text-left">
          <div className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#1665a5] uppercase mb-1.5 leading-relaxed">
            {t.collections.tag}
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0c2b5e] uppercase tracking-tight leading-snug sm:leading-tight">
            {t.collections.title}
          </h2>
        </div>

        {/* 2 CARDS IN A 2-COLUMN GRID (2 CARDS PER ROW EVEN ON MOBILE) */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-12">
          {kits.map((kit, idx) => (
            <motion.div
              key={kit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative bg-slate-900 border sm:border-2 border-[#0c2b5e] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 aspect-square cursor-pointer"
            >
              {/* 1. DEFAULT: ONLY JERSEY IMAGE FULL OF CARD */}
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={kit.image}
                  alt={kit.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 40vw"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
                  priority
                />
              </div>

              {/* 2. ON HOVER: REVEAL HOME KIT / AWAY KIT NAME */}
              <div className="absolute inset-x-0 bottom-0 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-[#0c2b5e] text-white p-3 sm:p-6 border-t sm:border-t-2 border-[#1665a5] text-center">
                <span className="text-[7px] sm:text-[10px] font-mono tracking-widest text-sky-300 uppercase block leading-tight mb-0.5 sm:mb-1">
                  {kit.sub}
                </span>
                <h3 className="text-xs sm:text-2xl md:text-3xl font-black uppercase tracking-wider font-sans leading-tight">
                  {kit.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
