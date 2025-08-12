"use client";
import React from 'react';

const logos = [
  'Orbital',
  'Northpeak',
  'LumaCloud',
  'Solace',
  'Nimbus',
  'Auric',
  'Voyage',
  'Atlas',
];

export default function LogoRow() {
  const trackRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf = 0;
    let offset = 0;
    const speed = 0.3;
    const step = () => {
      offset = (offset + speed) % el.scrollWidth;
      el.style.transform = `translateX(${-offset}px)`;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    const onEnter = () => cancelAnimationFrame(raf);
    const onLeave = () => (raf = requestAnimationFrame(step));
    el.addEventListener('pointerenter', onEnter);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('pointerenter', onEnter);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <section className="container container-gutter py-10" aria-label="Trusted by">
      <div className="text-center text-sm text-black/60 dark:text-white/60">Trusted by fast-growing brands</div>
      <div className="relative mt-4 overflow-hidden">
        <div ref={trackRef} className="flex gap-10 will-change-transform">
          {Array.from({ length: 2 }).map((_, loop) => (
            <div key={loop} className="flex gap-10">
              {logos.map((name) => (
                <div key={name} className="shrink-0 text-black/60 dark:text-white/60">
                  {name}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}