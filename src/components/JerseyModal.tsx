'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { X, Check, ShoppingBag, ShieldCheck, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface JerseyItem {
  id: string;
  title: string;
  season: string;
  price: string;
  image: string;
  type: 'HOME' | 'AWAY';
  description: string;
  features: string[];
}

interface JerseyModalProps {
  jersey: JerseyItem | null;
  onClose: () => void;
}

export function JerseyModal({ jersey, onClose }: JerseyModalProps) {
  const { t } = useLanguage();
  const [selectedSize, setSelectedSize] = useState<'S' | 'M' | 'L' | 'XL' | '2XL'>('M');
  const [customName, setCustomName] = useState('');
  const [customNumber, setCustomNumber] = useState('');

  if (!jersey) return null;

  const handleOrderTelegram = () => {
    const text = encodeURIComponent(
      `⚽ Official Order Inquiry for BNC FC Jersey:\n- Item: ${jersey.title}\n- Size: ${selectedSize}\n- Price: ${jersey.price}${customName ? `\n- Custom Name: ${customName}` : ''}${customNumber ? `\n- Custom Number: #${customNumber}` : ''}`
    );
    window.open(`https://t.me/bncfootballclub?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#06152e]/75 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto border-2 border-[#0c2b5e] shadow-2xl z-10 grid grid-cols-1 md:grid-cols-2"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-white border border-[#0c2b5e] text-[#0c2b5e] hover:bg-[#0c2b5e] hover:text-white transition-colors"
            id="close-jersey-modal-btn"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Column: Image Showcase */}
          <div className="relative bg-slate-100 p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#0c2b5e]/20 min-h-[360px] md:min-h-full">
            <div className="relative w-full h-[380px] sm:h-[450px]">
              <Image
                src={jersey.image}
                alt={jersey.title}
                fill
                className="object-contain p-2"
              />
            </div>
            <div className="absolute top-4 left-4 bg-[#0c2b5e] text-white px-3 py-1 text-xs font-mono font-bold tracking-widest uppercase">
              {jersey.type} KIT
            </div>
          </div>

          {/* Right Column: Jersey Details & Order Configurator */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-[#1665a5] uppercase tracking-widest mb-1">
                {jersey.season}
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0c2b5e] uppercase tracking-tight">
                {jersey.title}
              </h2>
              <div className="mt-2 text-2xl font-black text-[#1665a5]">
                {jersey.price} <span className="text-xs font-normal text-slate-500 font-mono">USD</span>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {jersey.description}
              </p>

              {/* Technical Specifications */}
              <div className="mt-6 border-t border-b border-[#0c2b5e]/15 py-4 space-y-2">
                <span className="text-[10px] font-bold tracking-widest text-[#0c2b5e] uppercase block font-mono">
                  {t.collections.modal.specifications}
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-slate-400 block">{t.collections.modal.fabric}:</span>
                    <span className="font-semibold text-slate-800">{t.collections.modal.fabricVal}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">{t.collections.modal.fit}:</span>
                    <span className="font-semibold text-slate-800">{t.collections.modal.fitVal}</span>
                  </div>
                </div>
              </div>

              {/* Size Selector */}
              <div className="mt-6">
                <label className="text-xs font-bold text-[#0c2b5e] uppercase tracking-wider block mb-2 font-mono">
                  {t.collections.modal.selectSize}:
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {(['S', 'M', 'L', 'XL', '2XL'] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 text-xs font-bold font-mono transition-all border ${
                        selectedSize === size
                          ? 'bg-[#0c2b5e] text-white border-[#0c2b5e]'
                          : 'bg-white text-slate-700 border-slate-300 hover:border-[#0c2b5e]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Name & Number Optional Input */}
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] font-bold text-slate-600 uppercase block mb-1">
                    Custom Name (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. VANCE"
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    className="w-full text-xs p-2 border border-slate-300 focus:border-[#0c2b5e] outline-none uppercase font-mono"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-600 uppercase block mb-1">
                    Number (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 9"
                    maxLength={2}
                    value={customNumber}
                    onChange={(e) => setCustomNumber(e.target.value)}
                    className="w-full text-xs p-2 border border-slate-300 focus:border-[#0c2b5e] outline-none uppercase font-mono"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-4 border-t border-[#0c2b5e]/15">
              <button
                onClick={handleOrderTelegram}
                className="w-full py-3.5 bg-[#0c2b5e] text-white hover:bg-[#1665a5] transition-colors flex items-center justify-center gap-2 font-bold text-xs sm:text-sm tracking-widest uppercase shadow-md active:translate-y-0.5"
                id="order-jersey-telegram-btn"
              >
                <Send className="w-4 h-4" />
                <span>{t.collections.modal.addToCart}</span>
              </button>
              <p className="mt-2 text-[10px] text-slate-400 text-center font-mono">
                {t.collections.modal.preorderNote}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
