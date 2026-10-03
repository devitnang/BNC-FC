'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { playersList } from '@/lib/playersData';
import { motion, AnimatePresence } from 'framer-motion';

export function PlayerList() {
  const { lang, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'FW' | 'MF' | 'DF' | 'GK'>('ALL');

  const filteredPlayers = playersList.filter((player) => {
    if (activeFilter === 'ALL') return true;
    return player.position === activeFilter;
  });

  const filterTabs = [
    { id: 'ALL', label: t.players.filterAll },
    { id: 'FW', label: t.players.filterFwd },
    { id: 'MF', label: t.players.filterMid },
    { id: 'DF', label: t.players.filterDef },
    { id: 'GK', label: t.players.filterGk },
  ] as const;

  return (
    <section
      id="players"
      className="relative py-16 sm:py-20 bg-slate-50 border-t border-[#0c2b5e]/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 pb-5 sm:pb-6 border-b border-[#0c2b5e]/20 text-center sm:text-left">
          <div className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#1665a5] uppercase mb-1.5 leading-relaxed">
            {t.players.tag}
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#0c2b5e] uppercase tracking-tight leading-snug sm:leading-tight">
            {t.players.title}
          </h2>
        </div>

        {/* Position Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-8 sm:mb-10">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 sm:px-5 sm:py-2.5 text-[10px] sm:text-xs font-bold font-mono tracking-wider uppercase transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#0c2b5e] text-white border-[#0c2b5e] shadow-md'
                    : 'bg-white text-[#0c2b5e] border-[#0c2b5e]/25 hover:border-[#0c2b5e] hover:bg-slate-100'
                }`}
                id={`filter-player-btn-${tab.id}`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Squad Grid: 2 COLUMNS ON MOBILE, 3 COLUMNS ON LARGE SCREENS */}
        <motion.div
          layout
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredPlayers.map((player) => (
              <motion.div
                layout
                key={player.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white border sm:border-2 border-[#0c2b5e] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 h-[260px] xs:h-[300px] sm:h-[440px] md:h-[500px] cursor-pointer"
              >
                {/* 1. DEFAULT VIEW: ONLY Player Image + Squad Number */}
                <div className="relative w-full h-full bg-slate-200 flex items-center justify-center overflow-hidden">
                  <Image
                    src={player.image || '/assets/images/players/default-avatar.svg'}
                    alt={`Player #${player.number} - ${player.name}`}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient Shadow for Number Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06152e]/85 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Squad Number */}
                  <div className="absolute bottom-2 left-3 sm:bottom-4 sm:left-6 z-10">
                    <span className="text-4xl sm:text-7xl md:text-8xl font-black text-white leading-none font-mono tracking-tighter drop-shadow-lg group-hover:opacity-20 group-hover:scale-75 transition-all duration-500 origin-bottom-left block">
                      #{player.number}
                    </span>
                  </div>
                </div>

                {/* 2. HOVER OVERLAY: SHOWS ONLY NAME AND POSITION */}
                <div className="absolute inset-x-0 bottom-0 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-[#0c2b5e] text-white p-3 sm:p-6 border-t sm:border-t-2 border-[#1665a5]">
                  <div className="space-y-0.5 sm:space-y-1">
                    <div className="text-[9px] sm:text-xs font-mono font-bold text-sky-300 tracking-wider uppercase leading-tight">
                      {lang === 'en' ? player.roleEn : player.roleKh}
                    </div>
                    <h3 className="text-xs sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-white font-sans leading-tight">
                      {player.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
