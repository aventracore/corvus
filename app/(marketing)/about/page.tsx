import Image from 'next/image';

export const metadata = { title: 'About' };

const team = [
  { name: 'Maya Patel', role: 'CEO', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=320&auto=format&fit=crop', bio: 'Former PM at a top analytics company. Built teams that love customers.' },
  { name: 'Leo Martins', role: 'CTO', img: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=320&auto=format&fit=crop', bio: 'Scaled data systems to billions of events/day. Believes in fast feedback.' },
  { name: 'Amelia Sanchez', role: 'Head of Design', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=320&auto=format&fit=crop', bio: 'Design leader obsessed with clarity, craft, and accessibility.' },
  { name: 'Kenji Nakamura', role: 'Head of Success', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=320&auto=format&fit=crop', bio: 'Helps teams go from setup to value in days, not months.' },
];

export default function AboutPage() {
  return (
    <main className="container container-gutter py-16 md:py-24">
      <h1 className="font-semibold">Our story</h1>
      <p className="mt-3 max-w-2xl text-black/70 dark:text-white/70">We started PulseTrack after years watching social teams drown in tabs and screenshots. Our mission: make performance obvious and action effortless.</p>

      <ol className="mt-8 space-y-4 text-sm">
        <li><strong>2019:</strong> Sketch on a whiteboard after a failed reporting sprint.</li>
        <li><strong>2021:</strong> First enterprise rollout; cut reporting time 50%.</li>
        <li><strong>2023:</strong> Launch insights engine. Teams ship better creative 2× faster.</li>
      </ol>

      <section className="mt-10">
        <h2 className="font-semibold">Team</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div key={m.name} className="group overflow-hidden rounded-2xl border p-4">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image src={m.img} alt="" fill className="object-cover transition group-hover:scale-105" />
              </div>
              <div className="mt-3">
                <div className="font-semibold">{m.name}</div>
                <div className="text-sm text-black/60 dark:text-white/60">{m.role}</div>
                <p className="mt-2 text-sm">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}