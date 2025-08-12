import Image from 'next/image';

export const metadata = { title: 'Features' };

export default function FeaturesPage() {
  return (
    <main className="container container-gutter py-16 md:py-24">
      <h1 className="font-semibold">Why teams switch to PulseTrack</h1>
      <p className="mt-3 max-w-2xl text-black/70 dark:text-white/70">From raw metrics to board-ready narratives. PulseTrack combines data, context, and workflow in one place.</p>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <section>
          <h2 className="font-semibold">A single view of performance</h2>
          <p className="mt-2 text-sm text-black/70 dark:text-white/70">We normalize metrics across platforms so engagement, CTR, and conversions mean the same thing everywhere. Compare like-for-like without spreadsheets.</p>
          <div className="mt-4 rounded-xl border p-4">
            <svg viewBox="0 0 600 220" className="w-full" aria-hidden>
              <defs>
                <linearGradient id="lg" x1="0" x2="1">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
              <rect x="20" y="20" width="560" height="180" rx="12" fill="none" stroke="#e5e7eb" />
              <path d="M40 150 Q 120 60 200 120 T 360 130 T 520 90" fill="none" stroke="url(#lg)" strokeWidth="4" />
            </svg>
          </div>
        </section>
        <section>
          <h2 className="font-semibold">Explain the why, not just the what</h2>
          <p className="mt-2 text-sm text-black/70 dark:text-white/70">Narratives auto-generate from real spikes and anomalies. Share context with stakeholders without digging through comments and DMs.</p>
          <div className="mt-4 rounded-xl border p-4">
            <Image src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop" alt="Insights UI" width={1200} height={800} />
          </div>
        </section>
      </div>

      <section className="mt-12">
        <h2 className="font-semibold">Comparison</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left">
                <th className="py-2 pr-4">Capability</th>
                <th className="py-2 pr-4">PulseTrack</th>
                <th className="py-2 pr-4">Generic tools</th>
              </tr>
            </thead>
            <tbody>
              {[['Normalized metrics', 'Yes', 'Partial'], ['Narrative insights', 'Yes', 'No'], ['Automations', 'Yes', 'Limited'], ['Security & SSO', 'Enterprise-grade', 'Varies']].map((row) => (
                <tr key={row[0]} className="border-t">
                  <td className="py-3 pr-4 font-medium">{row[0]}</td>
                  <td className="py-3 pr-4">{row[1]}</td>
                  <td className="py-3 pr-4">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}