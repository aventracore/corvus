import Image from 'next/image';

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
  return (
    <section className="container container-gutter py-16 md:py-24">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.name} className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/30 p-6 backdrop-blur">
            <blockquote className="text-sm">“{t.quote}”</blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <Image src={t.avatar} alt="" width={40} height={40} className="rounded-full object-cover" />
              <div>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-black/60 dark:text-white/60">{t.title}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}