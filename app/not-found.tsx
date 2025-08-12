"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <main className="container container-gutter grid place-items-center py-24 text-center">
      <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }} className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-500/20 text-brand-700 dark:text-brand-300">
        404
      </motion.div>
      <h1 className="mt-4 font-semibold">Page not found</h1>
      <p className="mt-2 text-black/70 dark:text-white/70">The page you are looking for doesn’t exist.</p>
      <Link href="/" className="mt-4 inline-flex rounded-md bg-brand-600 px-4 py-2 text-white">Back home</Link>
    </main>
  );
}