"use client";
import React from 'react';

type Item = { id: string; text: string; level: number };

export default function BlogTOC() {
  const [items, setItems] = React.useState<Item[]>([]);
  React.useEffect(() => {
    const headings = Array.from(document.querySelectorAll('article h2, article h3')) as HTMLElement[];
    const list: Item[] = headings.map((el) => {
      if (!el.id) el.id = el.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, '-') ?? '';
      return { id: el.id, text: el.textContent || '', level: el.tagName === 'H3' ? 3 : 2 };
    });
    setItems(list);
  }, []);
  if (items.length === 0) return null;
  return (
    <nav aria-label="Table of contents" className="sticky top-24 hidden lg:block">
      <div className="rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/20 p-4 backdrop-blur">
        <div className="text-sm font-semibold mb-2">On this page</div>
        <ul className="space-y-2 text-sm">
          {items.map((it) => (
            <li key={it.id} className={it.level === 3 ? 'pl-3' : ''}>
              <a href={`#${it.id}`} className="hover:underline">
                {it.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}