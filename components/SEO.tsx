"use client";
import { DefaultSeo } from 'next-seo';

export default function SEO() {
  return (
    <DefaultSeo
      titleTemplate="%s – PulseTrack"
      defaultTitle="PulseTrack – Social analytics that drive revenue"
      description="PulseTrack turns noisy social metrics into clear growth signals. Cut reporting time 60% and spot content that converts 2× faster."
      openGraph={{
        type: 'website',
        url: 'https://pulsetrack.example.com',
        siteName: 'PulseTrack',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop',
            width: 1200,
            height: 630,
            alt: 'PulseTrack dashboard preview',
          },
        ],
      }}
      twitter={{ cardType: 'summary_large_image' }}
      additionalLinkTags={[{ rel: 'manifest', href: '/manifest.json' }]}
    />
  );
}