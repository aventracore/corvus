"use client";
import { motion } from 'framer-motion';
import React from 'react';

const features = [
  {
    title: 'Analytics that matter',
    desc: 'Unified KPIs across platforms with auto-normalized metrics so reports are apples-to-apples.',
    icon: AnalyticsIcon,
  },
  {
    title: 'AI insights',
    desc: 'Explain performance spikes in plain English and flag content patterns that convert.',
    icon: InsightsIcon,
  },
  {
    title: 'Workflow automation',
    desc: 'Auto-tag campaigns, schedule exports, and nudge teammates when posts are trending.',
    icon: AutomationIcon,
  },
  {
    title: 'Secure by design',
    desc: 'SAML SSO, granular roles, and field-level encryption keep your data safe.',
    icon: SecurityIcon,
  },
  {
    title: 'Blazing fast',
    desc: 'Under 200ms queries on millions of rows. Your reports, without the spinner.',
    icon: SpeedIcon,
  },
];

export default function FeatureCards() {
  return (
    <section className="container container-gutter py-16 md:py-24">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <Tilt key={f.title} delay={i * 0.05}>
            <f.icon />
            <h3 className="mt-4 font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">{f.desc}</p>
          </Tilt>
        ))}
      </div>
    </section>
  );
}

function Tilt({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = React.useState<{ transform?: string }>({});
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - y) * 6;
    const ry = (x - 0.5) * 6;
    setStyle({ transform: `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)` });
  };
  const onLeave = () => setStyle({ transform: 'perspective(800px) rotateX(0deg) rotateY(0deg)' });
  return (
    <motion.div
      ref={ref}
      className="group rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/30 backdrop-blur p-6 hover:shadow-glow transition will-change-transform"
      style={style}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function baseIcon(path: React.ReactNode) {
  return (
    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-cyan-400/20">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-700 dark:text-brand-300">
        {path}
      </svg>
    </div>
  );
}

function AnalyticsIcon() {
  return baseIcon(<path d="M3 3v18h18M7 15v3M12 9v9M17 12v6" />);
}
function InsightsIcon() {
  return baseIcon(<><circle cx="12" cy="12" r="4" /><path d="M2 12h4M18 12h4M12 2v4M12 18v4" /></>);
}
function AutomationIcon() {
  return baseIcon(<><path d="M4 12h4l2-3 3 6 2-4h5" /><circle cx="5" cy="12" r="2" /></>);
}
function SecurityIcon() {
  return baseIcon(<><path d="M12 22s8-3 8-10V7l-8-4-8 4v5c0 7 8 10 8 10z" /></>);
}
function SpeedIcon() {
  return baseIcon(<><path d="M21 12a9 9 0 1 1-3-6.7" /><path d="M21 3l-6 9" /></>);
}