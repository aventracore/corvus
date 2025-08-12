"use client";
import React from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

export default function KPIStat({ label, value, suffix = '' }: { label: string; value: number; suffix?: string }) {
  const spring = useSpring(0, { stiffness: 60, damping: 20 });
  const rounded = useTransform(spring, (v) => Math.round(v));
  const display = useTransform(rounded, (v) => `${v}`);

  React.useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  return (
    <div className="rounded-xl border border-black/10 dark:border-white/10 p-4 bg-white/60 dark:bg-black/30 backdrop-blur">
      <div className="text-sm text-black/60 dark:text-white/60">{label}</div>
      <motion.div className="mt-1 text-2xl font-semibold tabular-nums">
        <motion.span>{display}</motion.span> {suffix}
      </motion.div>
    </div>
  );
}