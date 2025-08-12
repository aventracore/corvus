"use client";
export default function SkipLink() {
  return (
    <a
      href="#content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 z-[100] rounded bg-brand-600 px-3 py-2 text-white"
    >
      Skip to content
    </a>
  );
}