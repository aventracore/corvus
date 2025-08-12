import React from 'react';

export default function Logo({ className = 'h-6 w-auto' }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`} aria-label="PulseTrack logo">
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="22" stroke="url(#g)" strokeWidth="2.5" fill="none" />
        <path d="M8 26h6l4-10 6 20 5-12h11" stroke="url(#g)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="text-xl font-semibold tracking-tight">PulseTrack</span>
    </div>
  );
}