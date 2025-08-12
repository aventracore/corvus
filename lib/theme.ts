export type ThemeMode = 'light' | 'dark' | 'system';

const STORAGE_KEY = 'pt_theme_mode';

export function getStoredTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'system';
  const v = window.localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
  return v ?? 'system';
}

export function applyTheme(mode: ThemeMode) {
  if (typeof window === 'undefined') return;
  const root = document.documentElement;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = mode === 'dark' || (mode === 'system' && prefersDark);
  root.classList.toggle('dark', isDark);
}

export function setTheme(mode: ThemeMode) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, mode);
  applyTheme(mode);
}

export function initTheme() {
  if (typeof window === 'undefined') return;
  applyTheme(getStoredTheme());
}