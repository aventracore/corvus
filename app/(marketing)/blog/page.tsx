import Link from 'next/link';
import { posts } from '@/content/blog/registry';

export const metadata = { title: 'Blog' };

export default function BlogIndex() {
  return (
    <main className="container container-gutter py-16 md:py-24">
      <h1 className="font-semibold">PulseTrack blog</h1>
      <p className="mt-2 max-w-2xl text-black/70 dark:text-white/70">Tactical how-tos and strategic perspectives on building social growth engines.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <article key={p.slug} className="rounded-2xl border p-6">
            <h3 className="font-semibold"><Link href={`/blog/${p.slug}`}>{p.title}</Link></h3>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">{p.excerpt}</p>
            <div className="mt-3 text-xs text-black/60 dark:text-white/60">{p.date} • {p.tags.join(', ')}</div>
          </article>
        ))}
      </div>
    </main>
  );
}