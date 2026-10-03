'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Trophy, ShieldCheck, Compass, Zap, Target, Award, MapPin } from 'lucide-react';
import { Logo } from '@/components/Logo';

export function AboutUs() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative py-24 bg-white border-t border-[#0c2b5e]/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#0c2b5e]/20">
          <div>
            <div className="text-xs font-mono font-bold tracking-widest text-[#1665a5] uppercase mb-2">
              {t.about.tag}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0c2b5e] uppercase tracking-tight">
              {t.about.title}
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-slate-600 text-xs sm:text-sm max-w-md">
            {t.about.subtitle}
          </p>
        </div>

        {/* Top Story & Heritage Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 bg-slate-50 border-2 border-[#0c2b5e] p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0c2b5e] text-white text-[10px] font-mono tracking-widest uppercase mb-4">
                <Compass className="w-3.5 h-3.5 text-sky-400" />
                FOUNDATION & IDENTITY
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0c2b5e] uppercase tracking-tight mb-4">
                {t.about.storyTitle}
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                {t.about.storyP1}
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {t.about.storyP2}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#0c2b5e]/15 flex items-center gap-4">
              <Logo size={48} showText={false} />
              <div>
                <div className="text-xs font-mono font-bold text-[#0c2b5e] uppercase">
                  BNC FOOTBALL CLUB EMBLEM
                </div>
                <div className="text-[11px] text-slate-500">
                  Six-Point Star of Excellence • Tactical Pitch Matrix • Deep Navy & White
                </div>
              </div>
            </div>
          </div>

          {/* Right Stadium & Fortress Block */}
          <div className="lg:col-span-5 bg-[#0c2b5e] text-white p-8 sm:p-10 border-2 border-[#0c2b5e] flex flex-col justify-between tactical-grid-dark">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-sky-300 text-[10px] font-mono tracking-widest uppercase mb-4 border border-white/20">
                <MapPin className="w-3.5 h-3.5" />
                HOME FORTRESS
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4">
                {t.about.stadiumTitle}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                {t.about.stadiumDesc}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-6 border-t border-white/15 text-xs font-mono">
              <div className="bg-white/10 p-3 border border-white/10">
                <span className="text-slate-400 block text-[10px]">CAPACITY</span>
                <span className="text-lg font-black text-white">45,000</span>
              </div>
              <div className="bg-white/10 p-3 border border-white/10">
                <span className="text-slate-400 block text-[10px]">SURFACE</span>
                <span className="text-lg font-black text-sky-300">HYBRID GRASS</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="mb-16">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold text-[#1665a5] uppercase tracking-widest">
              CORE FOUNDATIONS
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0c2b5e] uppercase">
              {t.about.pillarsTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.about.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-[#0c2b5e] p-6 hover:bg-[#0c2b5e] hover:text-white transition-all duration-300 group shadow-sm hover:shadow-xl"
              >
                <div className="text-xs font-mono font-black text-[#1665a5] group-hover:text-sky-300 mb-3">
                  0{idx + 1} //
                </div>
                <h4 className="text-lg font-black text-[#0c2b5e] group-hover:text-white uppercase mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-600 group-hover:text-slate-200 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Honours & Trophies Showcase */}
        <div>
          <div className="mb-6 pb-2 border-b border-[#0c2b5e]/15">
            <span className="text-xs font-mono font-bold text-[#1665a5] uppercase tracking-widest">
              SILVERWARE CABINET
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0c2b5e] uppercase">
              {t.about.honoursTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.about.honours.map((honour, idx) => (
              <div
                key={idx}
                className="p-5 border-l-4 border-[#0c2b5e] bg-slate-50 flex items-start gap-4"
              >
                <div className="p-3 bg-[#0c2b5e] text-amber-300 flex-shrink-0">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-[#0c2b5e] font-mono leading-none">
                    {honour.count}
                  </div>
                  <div className="text-xs font-bold text-slate-800 uppercase mt-1 leading-snug">
                    {honour.title}
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono mt-1">
                    {honour.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
