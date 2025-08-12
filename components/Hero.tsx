"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Button } from './ui/Button';
import { prefersReducedMotion } from '@/lib/a11y';

function Particles() {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  React.useEffect(() => {
    if (prefersReducedMotion()) return; // respect users
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let raf = 0;
    let w = (canvas.width = canvas.offsetWidth * devicePixelRatio);
    let h = (canvas.height = canvas.offsetHeight * devicePixelRatio);
    const particles = Array.from({ length: 60 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      r: Math.random() * 1.8 + 0.4,
    }));
    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = 'rgba(99, 102, 241, 0.6)';
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * devicePixelRatio, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    const onResize = () => {
      w = canvas.width = canvas.offsetWidth * devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * devicePixelRatio;
    };
    window.addEventListener('resize', onResize);
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 -z-10 opacity-40" aria-hidden />;
}

export default function Hero() {
  const words = ['Turn', 'social', 'signals', 'into', 'revenue'];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -inset-40 bg-gradient-to-br from-brand-500/20 via-sky-300/20 to-cyan-300/10 blur-3xl animate-pulse-glow" />
        <Particles />
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
          <Link href="/dashboard">
            <Button className="group" onMouseMove={(e) => {}}>
              Try the live demo
            </Button>
          </Link>
          <Link href="/pricing">
            <Button variant="secondary">View pricing</Button>
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