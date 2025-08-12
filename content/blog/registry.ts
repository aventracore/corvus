export const posts = [
  {
    slug: 'utm-attribution-that-marketers-actually-use',
    title: 'UTM attribution that marketers actually use',
    date: '2025-05-10',
    tags: ['Attribution', 'Analytics'],
    excerpt: 'A practical framework for designing UTMs that keep your reports clean and trustworthy.',
    component: () => import('./utm-attribution.mdx'),
  },
  {
    slug: 'designing-a-social-insights-engine',
    title: 'Designing a social insights engine',
    date: '2025-05-02',
    tags: ['Strategy', 'Product'],
    excerpt: 'How to turn noisy social data into crisp, explainable insights your team trusts.',
    component: () => import('./insights-engine.mdx'),
  },
] as const;