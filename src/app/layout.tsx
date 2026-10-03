import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
});

const kantumruyPro = localFont({
  src: [
    {
      path: '../../public/assets/fonts/kantumruy_pro/Kantumruy-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/kantumruy_pro/Kantumruy-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/kantumruy_pro/Kantumruy-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-kantumruy',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bncfootball.club'),
  title: 'BNC Football Club | Official Website & Match Kits',
  description: 'Official portal of BNC Football Club. Explore the 2025/2026 Home & Away Match Kits, First Team Squad, Club Heritage, and direct Telegram Contact.',
  keywords: ['BNC Football Club', 'BNC FC', 'Cambodia Football', 'Soccer Jerseys', 'Football Squad', 'Match Kits'],
  openGraph: {
    title: 'BNC Football Club | Official Portal',
    description: 'Precision. Passion. Glory. The official digital portal of BNC Football Club.',
    url: 'https://bncfootball.club',
    siteName: 'BNC Football Club',
    images: [
      {
        url: '/assets/images/logo/BNC-FC.png',
        width: 800,
        height: 800,
        alt: 'BNC Football Club Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/assets/images/logo/BNC-FC.png' },
      { url: '/icon.png' },
    ],
    apple: [
      { url: '/assets/images/logo/BNC-FC.png' },
      { url: '/apple-icon.png' },
    ],
    shortcut: '/assets/images/logo/BNC-FC.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} ${kantumruyPro.variable} antialiased bg-white text-[#06152e]`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
