'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { FeatureCollections } from '@/components/FeatureCollections';
import { PlayerList } from '@/components/PlayerList';
import { ContactUs } from '@/components/ContactUs';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[#06152e] flex flex-col selection:bg-[#0c2b5e] selection:text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Feature Collections: Only 2 Cards for 2 Jerseys */}
        <FeatureCollections />

        {/* Player List: Only Image + Number until Hover reveals Name & Position */}
        <PlayerList />

        {/* Contact Us with Telegram Bot Integration */}
        <ContactUs />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
