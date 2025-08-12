"use client";
import Image from 'next/image';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote:
      'PulseTrack trimmed our weekly reporting from half a day to under an hour, and we finally see what content actually moves pipeline.',
    name: 'Renee Curtis',
    title: 'Head of Growth, LumaCloud',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop',
  },
  {
    quote:
      'Our team catches breakouts earlier and reallocates spend in real time. CTR improved 31% in the first month.',
    name: 'David Wong',
    title: 'Performance Lead, Northpeak',
    avatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=256&auto=format&fit=crop',
  },
  {
    quote:
      'The insights read like a coach. We ship better creative faster and defend the budget with hard data.',
    name: 'Amelia Sanchez',
    title: 'Brand Director, Solace Studio',
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=256&auto=format&fit=crop',
  },
];

export default function Testimonials() {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(id);
  }, []);
  const current = testimonials[index];
  return (
    <section className="container container-gutter py-16 md:py-24" aria-label="Testimonials">
      <div className="mx-auto max-w-3xl">
        <AnimatePresence mode="wait" initial={false}>
          <motion.figure
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/30 p-6 backdrop-blur"
          >
            <blockquote className="text-lg leading-relaxed">“{current.quote}”</blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <Image src={current.avatar} alt="" width={48} height={48} className="rounded-full object-cover" />
              <div>
                <div className="text-sm font-semibold">{current.name}</div>
                <div className="text-xs text-black/60 dark:text-white/60">{current.title}</div>
              </div>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
        <div className="mt-4 flex items-center justify-center gap-2" role="tablist" aria-label="Testimonial selector">
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={index === i}
              className={`h-2 w-2 rounded-full ${index === i ? 'bg-brand-600' : 'bg-black/20 dark:bg-white/20'}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}