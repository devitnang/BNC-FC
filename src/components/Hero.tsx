'use client';

import React from 'react';
import Image from 'next/image';

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full pt-[68px] sm:pt-[76px] bg-white overflow-hidden"
    >
      {/* FULL WIDTH COVER IMAGE */}
      <div className="relative w-full block">
        <Image
          src="/assets/images/Cover.png"
          alt="BNC Football Club Squad Cover"
          width={2400}
          height={900}
          priority
          className="w-full h-auto object-cover object-center block shadow-md"
          quality={95}
        />
      </div>
    </section>
  );
}
