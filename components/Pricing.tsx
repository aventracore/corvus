"use client";
import React from 'react';
import { motion, useSpring, useTransform, MotionValue } from 'framer-motion';

const tiers = [
  {
    name: 'Starter',
    baseMonthly: 29,
    features: ['Up to 3 social accounts', '30-day history', 'Email export', 'Community support'],
  },
  {
    name: 'Growth',
    baseMonthly: 99,
    features: ['Unlimited accounts', '1-year history', 'Automations', 'Priority support'],
    highlight: true,
  },
  {
    name: 'Pro',
    baseMonthly: 299,
    features: ['All Growth features', 'Advanced insights', 'SSO & roles', 'Dedicated CSM'],
  },
];

function computePrice(baseMonthly: number, seats: number, annual: boolean) {
  const perSeat = baseMonthly * (annual ? 10 : 1); // 2 months free annually
  const total = perSeat + Math.max(0, seats - 3) * (annual ? 8 : 10);
  return total;
}

export default function Pricing() {
  const [annual, setAnnual] = React.useState(true);
  const [seats, setSeats] = React.useState(5);

  return (
    <section className="container container-gutter py-16 md:py-24">
      <div className="flex items-center justify-center gap-4" role="group" aria-label="Billing frequency">
        <span className={!annual ? 'font-semibold' : ''}>Monthly</span>
        <label className="inline-flex cursor-pointer items-center">
          <input type="checkbox" className="sr-only" checked={annual} onChange={(e) => setAnnual(e.target.checked)} aria-label="Toggle annual billing" />
          <span className="relative h-6 w-11 rounded-full bg-black/20 dark:bg-white/20">
            <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition ${annual ? 'left-6' : 'left-0.5'}`} />
          </span>
        </label>
        <span className={annual ? 'font-semibold' : ''}>Annual (2 months free)</span>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4" aria-live="polite">
        <label htmlFor="seats" className="text-sm">Seats</label>
        <input
          id="seats"
          type="range"
          min={1}
          max={50}
          value={seats}
          onChange={(e) => setSeats(parseInt(e.target.value))}
          aria-valuemin={1}
          aria-valuemax={50}
          aria-valuenow={seats}
          aria-label="Seats"
        />
        <span className="text-sm font-semibold tabular-nums">{seats}</span>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <PricingCard key={t.name} tier={t} seats={seats} annual={annual} />
        ))}
      </div>

      <div className="mt-10 text-center text-sm text-black/70 dark:text-white/70">
        <p>All plans include GDPR compliance and secure OAuth connections. Cancel anytime.</p>
      </div>
    </section>
  );
}

function AnimatedNumber({ value }: { value: MotionValue<number> }) {
  return <motion.span>{useTransform(value, (v) => Math.round(v)).get()}</motion.span>;
}

function PricingCard({ tier, seats, annual }: { tier: typeof tiers[number]; seats: number; annual: boolean }) {
  const price = computePrice(tier.baseMonthly, seats, annual);
  const spring = useSpring(price, { stiffness: 60, damping: 20 });
  React.useEffect(() => {
    spring.set(price);
  }, [price, spring]);

  return (
    <div className={`rounded-2xl border p-6 ${tier.highlight ? 'border-brand-500 shadow-glow bg-white' : 'border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/30 backdrop-blur'}`}>
      <h3 className="text-lg font-semibold">{tier.name}</h3>
      <p className="mt-6 text-3xl font-bold tabular-nums">
        $<AnimatedNumber value={spring} />
        <span className="text-base font-normal text-black/60 dark:text-white/60">/{annual ? 'yr' : 'mo'}</span>
      </p>
      <ul className="mt-6 space-y-2 text-sm">
        {tier.features.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-700">✓</span>
            {f}
          </li>
        ))}
      </ul>
      <button className="mt-6 w-full rounded-md bg-brand-600 px-4 py-2 text-white hover:bg-brand-500 active:scale-[0.98]">Start free trial</button>
    </div>
  );
}