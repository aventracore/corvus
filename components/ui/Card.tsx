import React from 'react';
import clsx from 'clsx';

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={clsx(
        'relative rounded-2xl p-[1px] bg-gradient-to-br from-brand-500/50 to-cyan-400/40',
        className,
      )}
    >
      <div className="rounded-2xl bg-white/60 dark:bg-black/30 backdrop-blur border border-white/20 dark:border-white/10">
        {children}
      </div>
    </div>
  );
}