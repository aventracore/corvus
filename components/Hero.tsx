"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const words = [
    'Turn',
    'social',
    'signals',
    'into',
    'revenue',
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -inset-40 bg-gradient-to-br from-brand-500/20 via-sky-300/20 to-cyan-300/10 blur-3xl animate-pulse-glow" />
      </div>
      <div className="container container-gutter pt-16 md:pt-24 pb-12">
        <motion.h1
          className="max-w-3xl font-semibold leading-tight"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {words.map((w, i) => (
            <motion.span
              key={i}
              className="inline-block mr-2"
              variants={{ hidden: { y: 16, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {w}
            </motion.span>
          ))}
        </motion.h1>
        <p className="mt-6 max-w-2xl text-lg text-black/70 dark:text-white/70">
          PulseTrack reveals what content drives conversions across platforms. Cut reporting time 60%,
          find winning posts 2× faster, and prove social ROI with confidence.
        </p>
        <div className="mt-8 flex gap-3">
          <Link href="/dashboard" className="inline-flex items-center rounded-md bg-brand-600 px-6 py-3 text-white hover:bg-brand-500 active:scale-[0.98] transition">
            Try the live demo
          </Link>
          <Link href="/pricing" className="inline-flex items-center rounded-md border border-black/10 dark:border-white/10 px-6 py-3 hover:bg-black/5 dark:hover:bg-white/5">
            View pricing
          </Link>
        </div>
        <div className="mt-14 rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/30 backdrop-blur p-4 shadow-glow">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1551281044-8b63d0f7b216?q=80&w=1920&auto=format&fit=crop"
              alt="Product preview"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}