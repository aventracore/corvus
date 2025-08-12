"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Post, Platform } from '@/lib/mockApi';

export default function DataTable({ posts }: { posts: Post[] }) {
  const [sortKey, setSortKey] = React.useState<keyof Post>('impressions');
  const [direction, setDirection] = React.useState<'asc' | 'desc'>('desc');
  const [platform, setPlatform] = React.useState<Platform | 'All'>('All');
  const [query, setQuery] = React.useState('');

  const filtered = posts.filter((p) => (platform === 'All' ? true : p.platform === platform));
  const searched = filtered.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()));
  const sorted = [...searched].sort((a, b) => {
    const v = a[sortKey] as number as any;
    const w = b[sortKey] as number as any;
    if (v < w) return direction === 'asc' ? -1 : 1;
    if (v > w) return direction === 'asc' ? 1 : -1;
    return 0;
  });

  function changeSort(k: keyof Post) {
    if (k === sortKey) setDirection((d) => (d === 'asc' ? 'desc' : 'asc'));
    else {
      setSortKey(k);
      setDirection('desc');
    }
  }

  return (
    <div className="rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/30 backdrop-blur p-4">
      <div className="flex flex-wrap items-center gap-3">
        <select className="rounded-md border bg-white/80 dark:bg-black/20 px-3 py-2" value={platform} onChange={(e) => setPlatform(e.target.value as any)} aria-label="Filter by platform">
          {['All', 'X', 'Instagram', 'LinkedIn', 'TikTok', 'YouTube'].map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
        <input
          aria-label="Search posts"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search posts..."
          className="rounded-md border bg-white/80 dark:bg-black/20 px-3 py-2 flex-1 min-w-[200px]"
        />
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left">
              <Th onClick={() => changeSort('title')} label="Title" active={sortKey === 'title'} direction={direction} />
              <Th onClick={() => changeSort('platform')} label="Platform" active={sortKey === 'platform'} direction={direction} />
              <Th onClick={() => changeSort('impressions')} label="Impressions" active={sortKey === 'impressions'} direction={direction} />
              <Th onClick={() => changeSort('clicks')} label="Clicks" active={sortKey === 'clicks'} direction={direction} />
              <Th onClick={() => changeSort('ctr')} label="CTR %" active={sortKey === 'ctr'} direction={direction} />
              <Th onClick={() => changeSort('date')} label="Date" active={sortKey === 'date'} direction={direction} />
            </tr>
          </thead>
          <tbody>
            <AnimatePresence initial={false}>
              {sorted.map((p) => (
                <motion.tr
                  key={p.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="border-t border-black/10 dark:border-white/10"
                >
                  <td className="py-3 pr-4 font-medium">{p.title}</td>
                  <td className="py-3 pr-4">{p.platform}</td>
                  <td className="py-3 pr-4 tabular-nums">{p.impressions.toLocaleString()}</td>
                  <td className="py-3 pr-4 tabular-nums">{p.clicks.toLocaleString()}</td>
                  <td className="py-3 pr-4 tabular-nums">{p.ctr}%</td>
                  <td className="py-3 pr-4 tabular-nums">{p.date}</td>
                </motion.tr>
              ))}
            </AnimatePresence>
            {sorted.length === 0 && (
              <tr>
                <td className="py-6 text-center text-black/60 dark:text-white/60" colSpan={6}>No posts match your filters.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Th({ label, onClick, active, direction }: { label: string; onClick: () => void; active: boolean; direction: 'asc' | 'desc' }) {
  return (
    <th className="py-2 pr-4">
      <button onClick={onClick} className="inline-flex items-center gap-1 font-semibold">
        {label}
        {active && <span aria-hidden>{direction === 'asc' ? '▲' : '▼'}</span>}
      </button>
    </th>
  );
}