import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const SEO = dynamic(() => import('@/components/SEO'), { ssr: false });

export const metadata: Metadata = {
  metadataBase: new URL('https://pulsetrack.example.com'),
  title: {
    default: 'PulseTrack – Social analytics that drive revenue',
    template: '%s – PulseTrack',
  },
  description:
    'PulseTrack turns noisy social metrics into clear growth signals. Cut reporting time 60% and spot content that converts 2× faster.',
  icons: {
    icon: [{ url: '/favicon.ico', sizes: '64x64' }],
  },
};

function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 8, filter: 'blur(2px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: -6, filter: 'blur(2px)' }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-[color:var(--surface)] text-[color:var(--text)]`}>
        <SEO />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}