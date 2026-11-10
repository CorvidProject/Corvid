"use client";
import { useMemo, useState } from "react";
import { TokenAvatar } from "@/components/app/token-avatar";
import { useApi } from "@/lib/api";

// Tabel token untuk /application/latest, /gainers, /volume. Data dari GET /api/tokens/trending
// (fixture atau backend, lihat src/lib/api.ts). Hanya alamat token EVM (0x…) yang ditampilkan.

type T = {
  name: string;
  symbol: string;
  mint: string;
  image: string | null;
  price: number;
  marketCap: number;
  liquidity: number;
  volume: number;
  change1h: number;
  change24h: number;
  createdAt: number;
};

export type BoardMode = "latest" | "gainers" | "volume";
type SortKey = "price" | "change1h" | "change24h" | "marketCap" | "liquidity" | "volume" | "age";

const EVM_ADDR = /^0x[0-9a-fA-F]{40}$/;
type Raw = { [K in keyof T]: T[K] | null };
const clean = (list: Raw[]): T[] =>
  list
    .filter((t) => t.mint && EVM_ADDR.test(t.mint))
    .map((t) => ({
      ...t,
      name: t.name ?? "",
      symbol: t.symbol ?? "",
      mint: t.mint as string,
      price: t.price ?? 0,
      marketCap: t.marketCap ?? 0,
      liquidity: t.liquidity ?? 0,
      volume: t.volume ?? 0,
      change1h: t.change1h ?? 0,
      change24h: t.change24h ?? 0,
      createdAt: t.createdAt ?? 0,
    }));

/** logoOnly: hanya token yang punya logo asli. Top Gainers memakainya karena banyak token baru tanpa logo yang identitasnya tidak jelas. */
const CFG: Record<BoardMode, { title: string; sub: string; sort: SortKey; dir: 1 | -1; minLiq: number; logoOnly?: boolean }> = {
  latest: { title: "Latest Tokens", sub: "New pools, newest first · Robinhood Chain", sort: "age", dir: -1, minLiq: 0 },
  gainers: { title: "Top Gainers", sub: "Up the most in 24 hours, with real liquidity and a logo · Robinhood Chain", sort: "change24h", dir: -1, minLiq: 10000, logoOnly: true },
  volume: { title: "High Volume", sub: "Most traded in 24 hours · Robinhood Chain", sort: "volume", dir: -1, minLiq: 0 },
};

export function money(n: number | null | undefined) {
  if (n == null || !isFinite(n) || n <= 0) return "·";
  if (n >= 1e9) return "$" + (n / 1e9).toFixed(2) + "B";
  if (n >= 1e6) return "$" + (n / 1e6).toFixed(2) + "M";
  if (n >= 1e3) return "$" + (n / 1e3).toFixed(2) + "K";
  return "$" + n.toFixed(2);
}
const SUB = "₀₁₂₃₄₅₆₇₈₉";
export function price(p: number) {
  if (!isFinite(p) || p <= 0) return "·";
  if (p >= 1) return "$" + p.toFixed(p >= 100 ? 2 : 3);
  if (p >= 0.01) return "$" + p.toFixed(4);
  const z = Math.floor(-Math.log10(p)) - 1;
  if (z >= 3) {
    const digits = Math.round(p * Math.pow(10, z + 1 + 3)).toString().slice(0, 4);
    return "$0.0" + String(z).split("").map((c) => SUB[+c]).join("") + digits;
  }
  return "$" + p.toFixed(z + 4);
}
function pct(v: number | null | undefined) {
  if (v == null || !isFinite(v)) return { t: "·", c: "var(--v2-t-4)" };
  return { t: (v > 0 ? "+" : "") + v.toFixed(2) + "%", c: v > 0 ? "var(--v2-pos)" : v < 0 ? "var(--v2-neg)" : "var(--v2-t-3)" };
}
function age(ts: number, now: number) {
  const s = Math.max(0, Math.floor(now / 1000 - ts));
  if (s < 60) return s + "s ago";
  if (s < 3600) return Math.floor(s / 60) + "m ago";
  if (s < 86400) return Math.floor(s / 3600) + "h ago";
  return Math.floor(s / 86400) + "d ago";
}

const COLS = "grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px]";
const PAGE = 25;

export function TokenBoard({ mode }: { mode: BoardMode }) {
  const cfg = CFG[mode];
  const { data, loading, error } = useApi<{ tokens: Raw[] }>(
    `/api/tokens/trending?tab=${mode === "latest" ? "new" : "trending"}&limit=200`,
    30_000,
  );
  const base = useMemo(() => clean(data?.tokens ?? []), [data]);
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<SortKey>(cfg.sort);
  const [dir, setDir] = useState<1 | -1>(cfg.dir);
  const [shown, setShown] = useState(PAGE);
  const [now] = useState(() => Date.now());

  const rows = useMemo(() => {
    const s = q.trim().toLowerCase();
    const val = (t: T) => (sort === "age" ? t.createdAt : (t[sort] as number));
    return base
      .filter((t) => t.liquidity >= cfg.minLiq)
      .filter((t) => !cfg.logoOnly || !!t.image)
      .filter((t) => !s || t.name.toLowerCase().includes(s) || t.symbol.toLowerCase().includes(s) || t.mint.toLowerCase().startsWith(s))
      .sort((a, b) => ((val(a) ?? 0) - (val(b) ?? 0)) * dir);
  }, [base, q, sort, dir, cfg.minLiq, cfg.logoOnly]);

  const head = (k: SortKey, label: string) => (
    <button
      type="button"
      onClick={() => {
        if (sort === k) setDir((d) => (d === 1 ? -1 : 1));
        else {
          setSort(k);
          setDir(-1);
        }
      }}
      className="text-right hover:text-[var(--v2-t-1)] transition-colors"
      style={{ color: sort === k ? "var(--v2-t-1)" : undefined }}
    >
      {label}
      {sort === k ? (dir === -1 ? " ↓" : " ↑") : ""}
    </button>
  );

  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="flex items-center gap-3 mb-5">
        <div className="min-w-0">
          <h1 className="text-[22px] font-semibold leading-tight" style={{ color: "var(--v2-t-1)" }}>
            {cfg.title}
          </h1>
          <p className="text-[13px]" style={{ color: "var(--v2-t-3)" }}>
            {cfg.sub}
          </p>
        </div>
        <span className="ml-auto flex items-center gap-1.5 eyebrow" style={{ color: "var(--v2-pos)" }}>
          <span className="dot dot-pos dot-pulse"></span> LIVE
        </span>
      </div>
      <div className="flex flex-wrap gap-2 mb-3 items-center">
        <span
          className="h-8 px-3 rounded-full text-[13px] flex items-center gap-1.5"
          style={{ background: "rgba(var(--v2-accent-rgb),0.12)", color: "var(--v2-accent-text)", border: "1px solid rgba(var(--v2-accent-rgb),0.45)" }}
        >
          Robinhood Chain<span className="num text-[11px] opacity-70">{rows.length}</span>
        </span>
        <input
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setShown(PAGE);
          }}
          placeholder="Search name, symbol or mint"
          aria-label="Search tokens"
          className="input-v2 h-8 w-full sm:w-64 text-[13px]"
        />
      </div>
      <div className="rounded-2xl overflow-hidden" style={{ background: "var(--v2-bg-1)", border: "1px solid var(--v2-line-1)" }}>
        <div className={`hidden md:grid ${COLS} gap-3 px-4 h-10 items-center eyebrow`} style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
          <span>#</span>
          <span>Token</span>
          {head("price", "Price")}
          {head("change1h", "1h")}
          {head("change24h", "24h")}
          {head("marketCap", "Market cap")}
          {head("liquidity", "Liquidity")}
          {head("volume", "Volume")}
          {head("age", "Age")}
          <span></span>
        </div>
        {rows.length === 0 && (
          <div className="px-4 py-12 text-center text-[13px]" style={{ color: "var(--v2-t-3)" }}>
            {loading ? "Loading tokens…" : error ? "Could not load tokens. Try again shortly." : q ? `No tokens match “${q}”.` : "No tokens yet."}
          </div>
        )}
        {rows.slice(0, shown).map((t, i) => {
          const c1 = pct(t.change1h);
          const c24 = pct(t.change24h);
          return (
            <div
              key={t.mint}
              className={`group grid ${COLS} gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]`}
              style={{ borderTop: i ? "1px solid var(--v2-line-1)" : undefined }}
            >
              <span className="num text-[13px]" style={{ color: "var(--v2-t-4)" }}>
                {i + 1}
              </span>
              <a className="flex items-center gap-3 min-w-0" href={`/application/tokens/${t.mint}?chain=robinhood`}>
                <TokenAvatar src={t.image} symbol={t.symbol} seed={t.mint} size={36} />
                <span className="min-w-0">
                  <span className="flex items-center gap-2">
                    <span className="text-[14px] font-semibold truncate" style={{ color: "var(--v2-t-1)" }}>
                      {t.symbol.trim()}
                    </span>
                    <span className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded" style={{ color: "var(--v2-t-3)", background: "var(--v2-bg-2)" }}>
                      Robinhood Chain
                    </span>
                  </span>
                  <span className="block text-[12px] truncate" style={{ color: "var(--v2-t-4)" }}>
                    {t.name.trim()}
                  </span>
                </span>
              </a>
              <span className="md:hidden text-right">
                <span className="block num text-[13px]" style={{ color: "var(--v2-t-1)" }}>
                  {price(t.price)}
                </span>
                <span className="block num text-[12px]" style={{ color: c24.c }}>
                  {c24.t}
                </span>
              </span>
              <span className="hidden md:block text-right num text-[13px]" style={{ color: "var(--v2-t-1)" }}>
                {price(t.price)}
              </span>
              <span className="hidden md:block text-right num text-[13px]" style={{ color: c1.c }}>
                {c1.t}
              </span>
              <span className="hidden md:block text-right num text-[13px] font-semibold" style={{ color: c24.c }}>
                {c24.t}
              </span>
              <span className="hidden md:block text-right num text-[13px]" style={{ color: "var(--v2-t-2)" }}>
                {money(t.marketCap)}
              </span>
              <span className="hidden md:block text-right num text-[13px]" style={{ color: "var(--v2-t-2)" }}>
                {money(t.liquidity)}
              </span>
              <span className="hidden md:block text-right num text-[13px]" style={{ color: "var(--v2-t-2)" }}>
                {money(t.volume)}
              </span>
              <span className="hidden md:block text-right num text-[12px]" style={{ color: "var(--v2-t-3)" }}>
                {t.createdAt ? age(t.createdAt, now) : "·"}
              </span>
              <span className="hidden md:flex justify-end gap-1.5 items-center">
                <a
                  title={`Deploy an agent on $${t.symbol.trim()}`}
                  aria-label={`Deploy an agent on $${t.symbol.trim()}`}
                  href={`/application/agents/new?token=${t.mint}`}
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                  style={{ color: "var(--v2-accent-text)", border: "1px solid rgba(var(--v2-accent-rgb),0.4)" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Z"></path>
                  </svg>
                </a>
                <a
                  className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                  href={`/application/swap?mint=${t.mint}&chain=robinhood`}
                  style={{ color: "#ffffff", background: "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)" }}
                >
                  Swap
                </a>
              </span>
            </div>
          );
        })}
      </div>
      {shown < rows.length && (
        <div className="flex justify-center mt-4">
          <button className="btn-v2 btn-v2-ghost" onClick={() => setShown((n) => n + PAGE)}>
            Show more ({rows.length - shown})
          </button>
        </div>
      )}
    </div>
  );
}
