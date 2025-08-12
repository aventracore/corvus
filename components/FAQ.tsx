"use client";
import React from 'react';

const faqs = [
  {
    q: 'How does PulseTrack connect to my social accounts?',
    a: 'We use secure OAuth to connect to platforms like X, Instagram, LinkedIn, TikTok, and YouTube. You can revoke at any time.',
  },
  {
    q: 'Will this replace my current reports?',
    a: 'Most teams use PulseTrack as their source of truth. Export branded PDFs or sync metrics to Sheets, BigQuery, or your BI tool.',
  },
  { q: 'Do you support agencies?', a: 'Yes. Manage unlimited clients with folders, roles, and usage-based billing.' },
  {
    q: 'Is my data secure?',
    a: 'Yes. We support SSO/SAML, encryption at rest and in transit, and granular permissions. Read more on our Trust page.',
  },
];

export default function FAQ() {
  const [open, setOpen] = React.useState<number | null>(0);
  return (
    <section className="container container-gutter py-16 md:py-24">
      <h2 className="text-center font-semibold">Frequently asked questions</h2>
      <div className="mx-auto mt-8 max-w-2xl divide-y divide-black/10 dark:divide-white/10">
        {faqs.map((f, i) => (
          <div key={f.q}>
            <button
              className="flex w-full items-center justify-between py-4 text-left"
              aria-expanded={open === i}
              aria-controls={`faq-${i}`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="font-medium">{f.q}</span>
              <span aria-hidden>{open === i ? '–' : '+'}</span>
            </button>
            <div id={`faq-${i}`} role="region" hidden={open !== i} className="pb-4 text-sm text-black/70 dark:text-white/70">
              {f.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}