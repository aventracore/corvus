export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function safeMatchMedia(query: string): MediaQueryList | null {
  if (typeof window === 'undefined') return null;
  return window.matchMedia(query);
}