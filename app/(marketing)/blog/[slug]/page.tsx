import { notFound } from 'next/navigation';
import { posts } from '@/content/blog/registry';
import dynamic from 'next/dynamic';

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt }; 
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();
  const MDX = dynamic(post?.component as any);
  return (
    <main className="container container-gutter py-16 md:py-24">
      <article className="prose prose-slate dark:prose-invert max-w-3xl">
        <h1>{post!.title}</h1>
        <p className="text-sm text-black/60 dark:text-white/60">{post!.date} • {post!.tags.join(', ')}</p>
        {/* Simple ToC via headings inside MDX is out of scope; we keep content clean */}
        <MDX />
      </article>
    </main>
  );
}