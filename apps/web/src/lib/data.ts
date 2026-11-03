// Lapisan data: fixture (NEXT_PUBLIC_USE_FIXTURES != "false") atau API Fastify (Tahap 2).
// Bentuk fixture identik dengan response API; lihat packages/api-client/fixtures dan docs/api/fixtures.
const loaders = {
  stats: () => import("@fixtures/stats.json"),
  "tokens-trending": () => import("@fixtures/tokens-trending.json"),
  "tokens-new": () => import("@fixtures/tokens-new.json"),
  "token-detail": () => import("@fixtures/token-detail.json"),
  "token-security": () => import("@fixtures/token-security.json"),
  "token-trades": () => import("@fixtures/token-trades.json"),
  memescope: () => import("@fixtures/memescope.json"),
  "alpha-curated": () => import("@fixtures/alpha-curated.json"),
  "alpha-activity": () => import("@fixtures/alpha-activity.json"),
  agents: () => import("@fixtures/agents.json"),
  "marketplace-feed": () => import("@fixtures/marketplace-feed.json"),
  portfolio: () => import("@fixtures/portfolio.json"),
  inbox: () => import("@fixtures/inbox.json"),
  chats: () => import("@fixtures/chats.json"),
  signals: () => import("@fixtures/signals.json"),
  leaderboard: () => import("@fixtures/leaderboard.json"),
  tokenomics: () => import("@fixtures/tokenomics.json"),
  profile: () => import("@fixtures/profile.json"),
  "trading-prefs": () => import("@fixtures/trading-prefs.json"),
} as const;

export type FixtureName = keyof typeof loaders;
type Loaded<K extends FixtureName> = Awaited<ReturnType<(typeof loaders)[K]>>["default"];

// Rute API untuk mode non-fixture (diisi saat integrasi Tahap 2).
const routes: Record<FixtureName, string> = {
  stats: "/stats",
  "tokens-trending": "/tokens/trending",
  "tokens-new": "/tokens/trending?sort=new",
  "token-detail": "/tokens/:mint",
  "token-security": "/tokens/:mint/security",
  "token-trades": "/tokens/:mint/trades",
  memescope: "/solana/memescope",
  "alpha-curated": "/alpha/curated",
  "alpha-activity": "/alpha/activity",
  agents: "/agents",
  "marketplace-feed": "/marketplace/feed",
  portfolio: "/portfolio/aggregated",
  inbox: "/profile/activity",
  chats: "/chats",
  signals: "/signals",
  leaderboard: "/alpha/curated?rank=agents",
  tokenomics: "/tokenomics/summary",
  profile: "/profile",
  "trading-prefs": "/user/trading-prefs",
};

export const useFixtures = process.env.NEXT_PUBLIC_USE_FIXTURES !== "false";

export async function getData<K extends FixtureName>(name: K): Promise<Loaded<K>> {
  if (useFixtures) return (await loaders[name]()).default as Loaded<K>;
  const base = process.env.NEXT_PUBLIC_API_URL;
  if (!base) throw new Error("NEXT_PUBLIC_API_URL belum diatur");
  const res = await fetch(base + routes[name], { cache: "no-store" });
  if (!res.ok) throw new Error(`API ${routes[name]} -> ${res.status}`);
  return (await res.json()) as Loaded<K>;
}

export const usd = (n: number | null | undefined, d = 2) =>
  n == null ? "—" : n >= 1 ? n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: d }) : "$" + n.toPrecision(3);
export const compact = (n: number | null | undefined) =>
  n == null ? "—" : Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 2 }).format(n);
export const pct = (n: number | null | undefined) => (n == null ? "—" : (n > 0 ? "+" : "") + n.toFixed(2) + "%");
export const short = (a: string | null | undefined) => (a ? a.slice(0, 4) + "…" + a.slice(-4) : "—");
export const ago = (epochSec: number, ref = 1793600000) => {
  const s = Math.max(0, ref - epochSec);
  return s < 3600 ? Math.round(s / 60) + "m" : s < 86400 ? Math.round(s / 3600) + "h" : Math.round(s / 86400) + "d";
};
