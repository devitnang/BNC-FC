'use client';

import React from 'react';
import Image from 'next/image';

interface LogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
  withBorder?: boolean;
}

export function Logo({ size = 48, className = '', showText = false, withBorder = false }: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div 
        className={`relative flex items-center justify-center overflow-hidden flex-shrink-0 ${
          withBorder ? 'bg-white border border-[#1665a5]/30 shadow-sm' : 'bg-transparent'
        }`}
        style={{ width: size, height: size }}
      >
        <Image
          src="/assets/images/logo/BNC-FC.png"
          alt="BNC Football Club Official Crest"
          width={size}
          height={size}
          className="object-contain w-full h-full"
          priority
        />
      </div>
      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-extrabold tracking-widest text-[#0c2b5e] text-lg leading-tight uppercase font-mono">
            BNC FC
          </span>
          <span className="text-[10px] font-bold tracking-widest text-[#1665a5] uppercase">
            FOOTBALL CLUB
          </span>
        </div>
      )}
    </div>
  );
}
