import dynamic from 'next/dynamic';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import { faqJsonLd, productJsonLd, websiteJsonLd } from '@/lib/seo';

const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const FeatureCards = dynamic(() => import('@/components/FeatureCards'), { ssr: false });

export default function HomePage() {
  const faqs = [
    { q: 'How does PulseTrack connect to my social accounts?', a: 'We use secure OAuth to connect to platforms like X, Instagram, LinkedIn, TikTok, and YouTube. You can revoke at any time.' },
    { q: 'Will this replace my current reports?', a: 'Most teams use PulseTrack as their source of truth. Export branded PDFs or sync metrics to Sheets, BigQuery, or your BI tool.' },
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />
      <Hero />
      <FeatureCards />
      <section className="container container-gutter py-16 md:py-24">
        <h2 className="font-semibold">Live product glimpse</h2>
        <p className="mt-2 text-black/70 dark:text-white/70 max-w-2xl">Animated KPIs and a lightweight chart hint at the full dashboard you will unlock in the demo.</p>
        {/* Simple inline demo */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-black/10 dark:border-white/10 p-4">
            <div className="text-sm text-black/60 dark:text-white/60">Followers</div>
            <div className="mt-1 text-2xl font-semibold">15,482</div>
          </div>
          <div className="rounded-xl border border-black/10 dark:border-white/10 p-4">
            <div className="text-sm text-black/60 dark:text-white/60">Avg. CTR</div>
            <div className="mt-1 text-2xl font-semibold">2.9%</div>
          </div>
        </div>
      </section>
      <Testimonials />
      <section className="container container-gutter py-8">
        <div className="rounded-2xl bg-gradient-to-r from-brand-500 to-cyan-500 p-8 text-white">
          <h3 className="text-xl font-semibold">See plans that fit your team</h3>
          <p className="mt-2 opacity-90">Simple pricing that scales with seats. Annual billing saves 2 months.</p>
          <a href="/pricing" className="mt-4 inline-flex rounded-md bg-white/20 px-4 py-2 hover:bg-white/30">View pricing</a>
        </div>
      </section>
      <FAQ />
    </main>
  );
}