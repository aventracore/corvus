"use client";
import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { motion, useScroll, useTransform } from 'framer-motion';

const navLinks = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/customers', label: 'Customers' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const height = useTransform(scrollY, [0, 120], [80, 56]);
  const bgOpacity = useTransform(scrollY, [0, 120], [0.4, 0.9]);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return (
    <motion.header
      style={{ height }}
      className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-black/30"
      aria-label="Primary"
    >
      <div className="container container-gutter flex h-full items-center justify-between">
        <Link href="/" aria-label="Go home" className="shrink-0">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((l) => (
            <Link key={l.href} className="link-underline text-sm" href={l.href}>
              {l.label}
            </Link>
          ))}
          <Link href="/dashboard" className="ml-2 inline-flex items-center rounded-md bg-brand-600 px-4 py-2 text-white hover:bg-brand-500 active:scale-[0.98] transition">
            Try demo
          </Link>
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-brand-100 dark:hover:bg-elev1"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/10 dark:border-white/10">
          <div className="container container-gutter py-4 grid gap-3">
            {navLinks.map((l) => (
              <Link key={l.href} className="text-base py-2" href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link href="/dashboard" className="inline-flex items-center rounded-md bg-brand-600 px-4 py-2 text-white hover:bg-brand-500 active:scale-[0.98] transition">
              Try demo
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
}