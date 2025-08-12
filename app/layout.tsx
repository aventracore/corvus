import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';
import SkipLink from '@/components/SkipLink';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const SEO = dynamic(() => import('@/components/SEO'), { ssr: false });
const ClientTransition = dynamic(() => import('@/components/transitions/ClientTransition'), { ssr: false });

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-[color:var(--surface)] text-[color:var(--text)]`}>
        <SkipLink />
        <SEO />
        <Navbar />
        <div id="content">
          <ClientTransition>{children}</ClientTransition>
        </div>
        <Footer />
      </body>
    </html>
  );
}