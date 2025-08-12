export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'PulseTrack',
  url: 'https://pulsetrack.example.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://pulsetrack.example.com/blog?query={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export function productJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'PulseTrack',
    operatingSystem: 'Any',
    applicationCategory: 'BusinessApplication',
    offers: {
      '@type': 'Offer',
      price: '29',
      priceCurrency: 'USD',
    },
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}