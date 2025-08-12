"use client";
import React from 'react';
import clsx from 'clsx';

export type TabItem = { key: string; label: string };

export function Tabs({
  items,
  value,
  onChange,
  className,
}: {
  items: TabItem[];
  value: string;
  onChange: (key: string) => void;
  className?: string;
}) {
  const listRef = React.useRef<HTMLDivElement | null>(null);
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!listRef.current) return;
    const currentIndex = items.findIndex((i) => i.key === value);
    let next = currentIndex;
    if (e.key === 'ArrowRight') next = (currentIndex + 1) % items.length;
    if (e.key === 'ArrowLeft') next = (currentIndex - 1 + items.length) % items.length;
    if (next !== currentIndex) {
      e.preventDefault();
      onChange(items[next].key);
    }
  };
  return (
    <div className={clsx('w-full', className)}>
      <div
        ref={listRef}
        role="tablist"
        aria-label="Sections"
        className="relative flex gap-2 rounded-xl bg-white/60 dark:bg-black/30 p-1 backdrop-blur border border-black/10 dark:border-white/10"
        onKeyDown={onKeyDown}
      >
        {items.map((it) => {
          const active = it.key === value;
          return (
            <button
              key={it.key}
              role="tab"
              aria-selected={active}
              aria-controls={`panel-${it.key}`}
              id={`tab-${it.key}`}
              className={clsx(
                'relative z-10 flex-1 rounded-lg px-4 py-2 text-sm transition',
                active
                  ? 'text-black dark:text-white'
                  : 'text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white',
              )}
              onClick={() => onChange(it.key)}
            >
              {it.label}
            </button>
          );
        })}
        <div
          className="absolute top-1 bottom-1 rounded-lg bg-white dark:bg-elev1 shadow border border-black/10 dark:border-white/10 transition-transform"
          style={{
            width: `calc(${100 / items.length}% - 0.5rem)`,
            transform: `translateX(calc(${items.findIndex((i) => i.key === value)} * (100% + 0.5rem)))`,
          }}
          aria-hidden
        />
      </div>
    </div>
  );
}