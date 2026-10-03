'use client';

import React from 'react';
import Image from 'next/image';

interface FlagIconProps {
  country: 'kh' | 'en';
  className?: string;
  width?: number;
  height?: number;
}

export function FlagIcon({ country, className = '', width = 20, height = 14 }: FlagIconProps) {
  const isKh = country === 'kh';
  const src = isKh ? '/assets/images/flags/cambodia.svg' : '/assets/images/flags/uk.svg';
  const alt = isKh ? 'Cambodia Flag' : 'United Kingdom Flag';

  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden border border-white/20 shadow-xs flex-shrink-0 ${className}`}
      style={{ width, height }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="24px"
        className="object-cover"
        priority
      />
    </div>
  );
}
