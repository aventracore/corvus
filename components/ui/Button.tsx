"use client";
import React from 'react';
import clsx from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
};

const base = 'inline-flex items-center justify-center rounded-md transition will-change-transform select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 active:scale-[0.98]';
const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
};
const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-brand-600 text-white hover:bg-brand-500 shadow-[0_10px_30px_-10px_rgba(59,130,246,0.6)]',
  secondary:
    'bg-white/80 dark:bg-elev1 text-black dark:text-white border border-black/10 dark:border-white/10 hover:bg-white dark:hover:bg-white/10',
  ghost:
    'bg-transparent text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, loading = false, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(base, sizes[size], variants[variant], 'relative overflow-hidden', className)}
        {...props}
      >
        {/* subtle sweep underline */}
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.15), transparent 40%)',
          }}
        />
      </button>
    );
  },
);
Button.displayName = 'Button';

// Helper: attach pointer position for glow
export function withPointerGlow<T extends HTMLElement>(el: T | null) {
  if (!el) return;
  const handler = (e: MouseEvent) => {
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };
  el.addEventListener('pointermove', handler);
}