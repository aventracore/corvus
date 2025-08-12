export type Platform = 'All' | 'X' | 'Instagram' | 'LinkedIn' | 'TikTok' | 'YouTube';

export type Kpis = {
  followers: number;
  engagement: number;
  ctr: number;
  conversions: number;
};

export type TimeseriesPoint = { date: string; value: number };
export type Post = { id: string; platform: Platform; title: string; impressions: number; clicks: number; ctr: number; date: string };

function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seeded(seed: number) {
  const rand = mulberry32(seed);
  return {
    int(min: number, max: number) {
      return Math.floor(rand() * (max - min + 1)) + min;
    },
    float(min: number, max: number) {
      return rand() * (max - min) + min;
    },
  };
}

const platforms: Platform[] = ['X', 'Instagram', 'LinkedIn', 'TikTok', 'YouTube'];

export function getKpis(seed = 42): Kpis {
  const r = seeded(seed);
  return {
    followers: r.int(12000, 18000),
    engagement: parseFloat(r.float(2.1, 4.6).toFixed(2)),
    ctr: parseFloat(r.float(1.1, 3.8).toFixed(2)),
    conversions: r.int(240, 520),
  };
}

export function getTimeseries(platform: Platform | 'All' = 'All', range: '30d' | '90d' = '30d', seed = 7): TimeseriesPoint[] {
  const r = seeded(seed + (platform === 'All' ? 0 : platforms.indexOf(platform) + 1));
  const days = range === '30d' ? 30 : 90;
  const base = r.float(50, 120);
  return Array.from({ length: days }).map((_, i) => {
    const noise = Math.sin(i / 4) * r.float(4, 12) + r.float(-6, 6);
    return { date: new Date(Date.now() - (days - i) * 86400000).toISOString().slice(0, 10), value: Math.max(0, parseFloat((base + noise).toFixed(2))) };
  });
}

export function getTopPosts(seed = 101): Post[] {
  const r = seeded(seed);
  const posts: Post[] = Array.from({ length: 20 }).map((_, i) => {
    const p = platforms[r.int(0, platforms.length - 1)];
    const impressions = r.int(2000, 20000);
    const clicks = r.int(200, Math.max(400, Math.floor(impressions * 0.2)));
    const ctr = parseFloat(((clicks / impressions) * 100).toFixed(2));
    return {
      id: `p_${i}`,
      platform: p,
      title: `${p} Post ${i + 1} — ${['Launch', 'Behind the scenes', 'Tutorial', 'Customer story'][r.int(0, 3)]}`,
      impressions,
      clicks,
      ctr,
      date: new Date(Date.now() - r.int(0, 20) * 86400000).toISOString().slice(0, 10),
    };
  });
  return posts;
}

export function subscribeKpis(callback: (k: Kpis) => void): () => void {
  let alive = true;
  let seed = 42;
  function tick() {
    if (!alive) return;
    seed += 1;
    callback(getKpis(seed));
  }
  const id = setInterval(tick, 5000);
  return () => {
    alive = false;
    clearInterval(id);
  };
}