"use client";
import React from 'react';
import { getKpis, getTimeseries, getTopPosts, subscribeKpis, type Platform } from '@/lib/mockApi';
import KPIStat from '@/components/KPIStat';
import { LineChartCard, BarChartCard } from '@/components/ChartCard';
import DataTable from '@/components/DataTable';
import { getStoredTheme, setTheme, initTheme, type ThemeMode } from '@/lib/theme';

function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = React.useState<T>(() => {
    if (typeof window === 'undefined') return initial;
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : initial;
  });
  React.useEffect(() => {
    if (typeof window !== 'undefined') window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue] as const;
}

export default function DashboardPage() {
  const [logged, setLogged] = useLocalStorage('pt_demo_logged_in', false);

  React.useEffect(() => { initTheme(); }, []);

  if (!logged) return <Login onLogin={() => setLogged(true)} />;
  return <Dashboard />;
}

function Login({ onLogin }: { onLogin: () => void }) {
  const [name, setName] = React.useState('');
  return (
    <main className="container container-gutter py-16">
      <div className="mx-auto max-w-md rounded-2xl border p-6">
        <h1 className="font-semibold">Welcome to PulseTrack</h1>
        <p className="mt-2 text-sm text-black/70 dark:text-white/70">Enter a display name to explore the live demo.</p>
        <form
          className="mt-6 grid gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            onLogin();
          }}
        >
          <label className="text-sm">
            Display name
            <input className="mt-1 w-full rounded-md border px-3 py-2" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <button className="mt-2 rounded-md bg-brand-600 px-4 py-2 text-white">Enter dashboard</button>
        </form>
      </div>
    </main>
  );
}

function Dashboard() {
  const [kpis, setKpis] = React.useState(getKpis());
  const [platform, setPlatform] = React.useState<Platform | 'All'>('All');
  const [timeseries, setTimeseries] = React.useState(getTimeseries(platform));
  const [posts] = React.useState(getTopPosts());

  React.useEffect(() => setTimeseries(getTimeseries(platform)), [platform]);
  React.useEffect(() => {
    const unsub = subscribeKpis(setKpis);
    return () => unsub();
  }, []);

  const barData = [
    { name: 'X', value: 64 },
    { name: 'Instagram', value: 82 },
    { name: 'LinkedIn', value: 58 },
    { name: 'TikTok', value: 71 },
    { name: 'YouTube', value: 49 },
  ];

  return (
    <main className="container container-gutter py-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KPIStat label="Followers" value={kpis.followers} />
        <KPIStat label="Engagement" value={kpis.engagement} suffix="%" />
        <KPIStat label="CTR" value={kpis.ctr} suffix="%" />
        <KPIStat label="Conversions" value={kpis.conversions} />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-3 flex items-center gap-3">
            <h2 className="font-semibold">Engagement over time</h2>
            <select className="rounded border px-2 py-1 text-sm" value={platform} onChange={(e) => setPlatform(e.target.value as any)}>
              {['All', 'X', 'Instagram', 'LinkedIn', 'TikTok', 'YouTube'].map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </div>
          <LineChartCard data={timeseries} />
        </div>
        <div>
          <h2 className="mb-3 font-semibold">Platform comparison</h2>
          <BarChartCard data={barData} />
        </div>
      </div>

      <div className="mt-6">
        <h2 className="mb-3 font-semibold">Top posts</h2>
        <DataTable posts={posts} />
      </div>

      <Settings />
    </main>
  );
}

function Settings() {
  const [mode, setMode] = React.useState<ThemeMode>(getStoredTheme());
  React.useEffect(() => setTheme(mode), [mode]);

  return (
    <section className="mt-8">
      <h2 className="font-semibold">Settings</h2>
      <div className="mt-3 grid max-w-xl gap-4 rounded-2xl border p-4">
        <div>
          <label className="text-sm font-medium">Theme</label>
          <div className="mt-2 flex gap-2">
            {(['light', 'dark', 'system'] as ThemeMode[]).map((m) => (
              <button
                key={m}
                className={`rounded-md border px-3 py-2 text-sm ${mode === m ? 'border-brand-500' : ''}`}
                onClick={() => setMode(m)}
                aria-pressed={mode === m}
              >
                {m[0].toUpperCase() + m.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm">Display name<input className="mt-1 w-full rounded-md border px-3 py-2" defaultValue="Demo user" /></label>
          <label className="text-sm">Handle<input className="mt-1 w-full rounded-md border px-3 py-2" defaultValue="@pulsetrack" /></label>
          <label className="text-sm">Timezone<select className="mt-1 w-full rounded-md border px-3 py-2"><option>UTC</option><option>EST</option><option>PST</option></select></label>
        </div>
      </div>
    </section>
  );
}