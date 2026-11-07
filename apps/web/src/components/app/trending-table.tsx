"use client";
import { useEffect, useId, useMemo, useRef, useState, type ReactNode } from "react";
import { ArrowsClockwise, CaretDown, Check, Funnel, Star, X } from "@phosphor-icons/react";

// Tab "Trending" di /application/terminal: interval, filter, dan tabel. Data dari GET /api/tokens/trending
// (diambil di terminal.tsx dan diperbarui berkala). Logika filter mengikuti referensi.
export type Interval = "5m" | "1h" | "6h" | "24h";
export type Risk = { name: string; level: string; score: number };
export type Tok = {
  name: string;
  symbol: string;
  mint: string;
  image: string | null;
  price: number;
  marketCap: number;
  liquidity: number;
  volume: number;
  change5m: number;
  change1h: number;
  change6h: number;
  change24h: number;
  buys: number;
  sells: number;
  txns: number;
  riskScore: number;
  riskChecked: boolean;
  risks: Risk[] | null;
  top10: number | null;
  devPct: number | null;
  buyTax: number;
  sellTax: number;
  dex: string;
  lpBurn: number;
  createdAt: number;
  holders: number;
};

const EVM_ADDR = /^0x[0-9a-fA-F]{40}$/;
type RawTok = { [K in keyof Tok]: Tok[K] | null };
/** Respons API boleh berisi null; tabel butuh angka. Hanya alamat EVM yang ditampilkan. */
export function cleanTokens(list: RawTok[] | undefined | null): Tok[] {
  return (list ?? [])
    .filter((t) => t.mint && EVM_ADDR.test(t.mint))
    .map((t) => ({
      ...t,
      name: t.name ?? "",
      symbol: t.symbol ?? "",
      mint: t.mint as string,
      dex: t.dex ?? "",
      risks: t.risks ?? null,
      riskChecked: !!t.riskChecked,
      top10: t.top10 ?? null,
      devPct: t.devPct ?? null,
      price: t.price ?? 0,
      marketCap: t.marketCap ?? 0,
      liquidity: t.liquidity ?? 0,
      volume: t.volume ?? 0,
      change5m: t.change5m ?? 0,
      change1h: t.change1h ?? 0,
      change6h: t.change6h ?? 0,
      change24h: t.change24h ?? 0,
      buys: t.buys ?? 0,
      sells: t.sells ?? 0,
      txns: t.txns ?? 0,
      riskScore: t.riskScore ?? 0,
      buyTax: t.buyTax ?? 0,
      sellTax: t.sellTax ?? 0,
      lpBurn: t.lpBurn ?? 0,
      createdAt: t.createdAt ?? 0,
      holders: t.holders ?? 0,
    }));
}

export type Filters = {
  marketCap: [number, number] | null;
  liquidity: [number, number] | null;
  volume: number | null;
  age: string | null;
  holders: number | null;
  risk: string | null;
  signals: { lpBurned: boolean; notMintable: boolean; verifiedSource: boolean; noTax: boolean };
};
export const EMPTY_FILTERS: Filters = {
  marketCap: null,
  liquidity: null,
  volume: null,
  age: null,
  holders: null,
  risk: null,
  signals: { lpBurned: false, notMintable: false, verifiedSource: false, noTax: false },
};
const INF = Number.POSITIVE_INFINITY;
const MCAP = [
  { label: "< $25K", value: [0, 25e3] },
  { label: "$25K – $100K", value: [25e3, 1e5] },
  { label: "$100K – $500K", value: [1e5, 5e5] },
  { label: "$500K – $1M", value: [5e5, 1e6] },
  { label: "$1M – $10M", value: [1e6, 1e7] },
  { label: "$10M+", value: [1e7, INF] },
];
const LIQ = [
  { label: "< $5K", value: [0, 5e3] },
  { label: "$5K – $25K", value: [5e3, 25e3] },
  { label: "$25K – $100K", value: [25e3, 1e5] },
  { label: "$100K+", value: [1e5, INF] },
];
const AGE = [
  { label: "< 1h", value: "1h" },
  { label: "1 – 6h", value: "6h" },
  { label: "6 – 24h", value: "24h" },
  { label: "1 – 7d", value: "7d" },
  { label: "7d+", value: "30d" },
];
const VOL = [
  { label: "> $1K", value: 1e3 },
  { label: "> $10K", value: 1e4 },
  { label: "> $50K", value: 5e4 },
  { label: "> $100K", value: 1e5 },
];
const HOLD = [
  { label: "> 50", value: 50 },
  { label: "> 100", value: 100 },
  { label: "> 500", value: 500 },
  { label: "> 1,000", value: 1e3 },
];
const RISK = [
  { label: "Safe", value: "safe" },
  { label: "Caution", value: "caution" },
  { label: "Danger", value: "danger" },
];
const RISK_DOT: Record<string, string> = { safe: "#22C55E", caution: "#EAB308", danger: "#EF4444" };

export function activeCount(f: Filters) {
  let n = 0;
  if (f.marketCap) n++;
  if (f.liquidity) n++;
  if (f.volume !== null) n++;
  if (f.age) n++;
  if (f.holders !== null) n++;
  if (f.risk) n++;
  n += Object.values(f.signals).filter(Boolean).length;
  return n;
}

export function applyFilters(list: Tok[], f: Filters, now: number) {
  return list.filter((e) => {
    if (f.marketCap) {
      const [lo, hi] = f.marketCap;
      if (e.marketCap < lo || (hi < INF && e.marketCap >= hi)) return false;
    }
    if (f.liquidity) {
      const [lo, hi] = f.liquidity;
      if (e.liquidity < lo || (hi < INF && e.liquidity >= hi)) return false;
    }
    if (f.volume !== null && e.volume < f.volume) return false;
    if (f.age) {
      const t = now / 1000 - e.createdAt;
      if (
        (f.age === "1h" && t >= 3600) ||
        (f.age === "6h" && (t < 3600 || t >= 21600)) ||
        (f.age === "24h" && (t < 21600 || t >= 86400)) ||
        (f.age === "7d" && (t < 86400 || t >= 604800)) ||
        (f.age === "30d" && t < 604800)
      )
        return false;
    }
    if (f.holders !== null && e.holders < f.holders) return false;
    if (f.risk) {
      if (f.risk === "safe" && (e.riskScore > 30 || e.riskChecked === false)) return false;
      if (f.risk === "caution" && (e.riskScore <= 30 || e.riskScore > 60)) return false;
      if (f.risk === "danger" && e.riskScore <= 60) return false;
    }
    if (f.signals.lpBurned && e.lpBurn < 95) return false;
    const has = (re: RegExp) => !!e.risks?.some((r) => re.test(r.name));
    if (f.signals.notMintable && has(/^Mintable/i)) return false;
    if (f.signals.verifiedSource && has(/^Unverified/i)) return false;
    if (f.signals.noTax && has(/tax/i)) return false;
    return true;
  });
}

/* ---------- format ---------- */
const money = (n: number) =>
  !n ? "—" : n >= 1e9 ? `$${(n / 1e9).toFixed(2)}B` : n >= 1e6 ? `$${(n / 1e6).toFixed(2)}M` : n >= 1e3 ? `$${(n / 1e3).toFixed(2)}K` : `$${n.toFixed(2)}`;
const price = (n: number) => (n >= 1 ? `$${n.toFixed(2)}` : n >= 0.01 ? `$${n.toFixed(4)}` : `$${Number(n.toPrecision(4)).toString().includes("e") ? n.toFixed(8) : Number(n.toPrecision(4))}`);
function ago(ts: number, now: number) {
  if (!ts || !now) return "—";
  const s = Math.max(0, now / 1000 - ts);
  if (s < 60) return `${Math.floor(s)}s ago`;
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  return `${Math.floor(s / 86400)}d ago`;
}
const chg = (t: Tok, i: Interval) => (i === "5m" ? t.change5m : i === "1h" ? t.change1h : i === "6h" ? t.change6h : t.change24h) ?? 0;
// "uniswap-v3-robinhood" → "Uniswap v3"; "ramses-v3-robinhood" → "Ramses v3"; "uniswap" → "Uniswap".
const dexName = (d: string) =>
  d
    .replace(/-robinhood$/i, "")
    .replace(/-v(\d)$/i, " v$1")
    .replace(/^\w/, (c) => c.toUpperCase());
const riskTone = (s: number, checked: boolean) => (!checked ? "mute" : s <= 30 ? "pos" : s <= 60 ? "warn" : "neg");
const shortRisk = (n: string) => n.replace(/ concentration$/i, "").replace(/^Top holder$/i, "Top holder").replace(/^Balance control$/i, "Balance ctrl");

function ChgText({ v }: { v: number }) {
  const flat = Math.abs(v) < 0.01;
  return (
    <span className="num text-right text-[11px] tabular-nums" style={{ color: flat ? "var(--v2-t-4)" : v >= 0 ? "var(--v2-pos)" : "var(--v2-neg)" }}>
      {flat ? "0%" : `${v >= 0 ? "+" : ""}${v.toFixed(v >= 100 || v <= -100 ? 0 : 1)}%`}
    </span>
  );
}

function Spark({ t, id }: { t: Tok; id: string }) {
  const p = t.price || 1;
  const pts = [t.change24h, t.change6h, t.change1h, t.change5m].map((c) => p / (1 + (c ?? 0) / 100)).concat([p]);
  const lo = Math.min(...pts), hi = Math.max(...pts), sp = hi - lo || 1;
  const xy = pts.map((v, i) => [(i / (pts.length - 1)) * 72, 24 - ((v - lo) / sp) * 20] as const);
  const line = xy.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const color = pts[pts.length - 1] >= pts[0] ? "#34D399" : "#F87171";
  return (
    <svg width="72" height="28" viewBox="0 0 72 28" preserveAspectRatio="none">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.25" />
          <stop offset="100%" stopColor={color} stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <path d={`${line} L72,28 L0,28 Z`} fill={`url(#${id})`} />
      <path d={line} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const CHIP: Record<string, string> = {
  pos: "text-[var(--v2-pos)] border-[rgba(34,197,94,0.18)] bg-[rgba(34,197,94,0.08)]",
  warn: "text-[var(--v2-warn)] border-[rgba(234,179,8,0.20)] bg-[rgba(234,179,8,0.08)]",
  neg: "text-[var(--v2-neg)] border-[rgba(239,68,68,0.20)] bg-[rgba(239,68,68,0.08)]",
  mute: "text-[var(--v2-t-3)] border-[var(--v2-line-1)]",
};
function Chip({ tone, label, value }: { tone: string; label: string; value: string | number }) {
  return (
    <span className={`num inline-flex items-center gap-1 px-1.5 py-0.5 rounded-sm text-[11px] font-medium border leading-none ${CHIP[tone]}`}>
      <span className="opacity-60 font-normal">{label}</span>
      <span className="font-semibold tabular-nums">{value}</span>
    </span>
  );
}
function Signals({ t }: { t: Tok }) {
  const risks = [...(t.risks ?? [])].sort((a, b) => b.score - a.score);
  const first = risks[0];
  const rest = risks.slice(1);
  return (
    <div className="flex flex-wrap gap-1">
      {t.riskChecked !== false && <Chip tone={riskTone(t.riskScore, t.riskChecked)} label="Risk" value={t.riskScore} />}
      {first && <Chip tone={first.level === "danger" ? "neg" : "warn"} label={shortRisk(first.name)} value={`+${first.score}`} />}
      {rest.length > 0 && (
        <span
          className="inline-flex items-center px-1.5 h-[18px] rounded-sm text-[10px] font-mono"
          title={risks.map((r) => `${r.name} (+${r.score})`).join("\n")}
          style={{ color: "var(--v2-t-3)", border: "1px solid var(--v2-line-1)" }}
        >
          +{rest.length}
        </span>
      )}
    </div>
  );
}

/* ---------- interval ---------- */
const INTERVALS: { key: Interval; label: string }[] = [
  { key: "5m", label: "5M" },
  { key: "1h", label: "1H" },
  { key: "6h", label: "6H" },
  { key: "24h", label: "24H" },
];
export function IntervalControls({ value, onChange, onRefresh, spinning }: { value: Interval; onChange: (i: Interval) => void; onRefresh: () => void; spinning: boolean }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center" style={{ border: "1px solid var(--v2-line-1)", borderRadius: 4 }}>
        {INTERVALS.map((i) => {
          const on = value === i.key;
          return (
            <button
              key={i.key}
              onClick={() => onChange(i.key)}
              aria-pressed={on}
              className="num text-[11px] px-3 py-1.5 transition-colors"
              style={{ color: on ? "#ffffff" : "var(--v2-t-3)", background: on ? "var(--v2-accent)" : "transparent", fontWeight: on ? 600 : 400 }}
            >
              {i.label}
            </button>
          );
        })}
      </div>
      <span className="eyebrow flex items-center gap-1.5" style={{ color: "var(--v2-pos)" }}>
        <span className="dot dot-pos dot-pulse"></span>LIVE
      </span>
      <button className="btn-v2 btn-v2-ghost btn-v2-sm" onClick={onRefresh} aria-label="Refresh" disabled={spinning}>
        <ArrowsClockwise size={13} weight="regular" className={spinning ? "animate-spin" : ""} />
      </button>
    </div>
  );
}

/* ---------- filter bar ---------- */
function Pill({ label, value, open, onToggle, onClear, children }: { label: string; value: string | null; open: boolean; onToggle: () => void; onClear: () => void; children: ReactNode }) {
  const on = value !== null;
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className={`group inline-flex items-center gap-1.5 h-8 pl-3 ${on ? "pr-1.5" : "pr-2.5"} rounded-full text-[12.5px] transition-all duration-150 ${on ? "" : "hover:text-[var(--v2-t-1)] hover:border-[var(--v2-line-2)]"}`}
        style={{
          color: on ? "var(--v2-accent-text)" : "var(--v2-t-3)",
          background: on ? "rgba(var(--v2-accent-rgb),0.10)" : open ? "var(--v2-bg-2)" : "var(--v2-bg-1)",
          border: `1px solid ${on ? "rgba(var(--v2-accent-rgb),0.45)" : open ? "var(--v2-line-2)" : "var(--v2-line-1)"}`,
        }}
      >
        <span style={{ color: on ? "var(--v2-t-2)" : undefined }}>{label}</span>
        {on ? (
          <>
            <span className="num font-semibold">{value}</span>
            <span
              role="button"
              aria-label={`Clear ${label}`}
              onClick={(e) => {
                e.stopPropagation();
                onClear();
              }}
              className="ml-0.5 w-5 h-5 inline-flex items-center justify-center rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.2)]"
            >
              <X size={10} weight="bold" />
            </span>
          </>
        ) : (
          <CaretDown size={11} className="transition-transform duration-200" style={{ transform: open ? "rotate(180deg)" : "none" }} />
        )}
      </button>
      {open && (
        <div className="absolute left-0 z-40 min-w-[200px] p-1.5 rounded-xl" style={{ top: "calc(100% + 6px)", background: "var(--v2-bg-1)", border: "1px solid var(--v2-line-2)", boxShadow: "0 18px 40px -12px rgba(0,0,0,0.7)" }}>
          {children}
        </div>
      )}
    </div>
  );
}
function Options<T>({ options, value, onPick, dots }: { options: { label: string; value: T }[]; value: T | null; onPick: (v: T | null) => void; dots?: Record<string, string> }) {
  return (
    <div className="flex flex-col">
      {options.map((o) => {
        const sel = value !== null && JSON.stringify(value) === JSON.stringify(o.value);
        const dot = dots?.[String(o.value)];
        return (
          <button
            key={o.label}
            onClick={() => onPick(sel ? null : o.value)}
            className="num flex items-center gap-2 px-2.5 py-2 rounded-lg text-[12.5px] text-left transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ color: sel ? "var(--v2-accent-text)" : "var(--v2-t-2)", fontWeight: sel ? 600 : 400 }}
          >
            {dot && <span className="w-1.5 h-1.5 rounded-full" style={{ background: dot, boxShadow: `0 0 6px ${dot}` }} />}
            {o.label}
            {sel && <Check size={12} weight="bold" className="ml-auto" />}
          </button>
        );
      })}
    </div>
  );
}
function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button onClick={() => onChange(!checked)} role="switch" aria-checked={checked} className="flex items-center justify-between gap-4 w-full px-2.5 py-2 rounded-lg text-left transition-colors hover:bg-[var(--v2-bg-2)]">
      <span className="text-[12.5px]" style={{ color: checked ? "var(--v2-t-1)" : "var(--v2-t-3)" }}>{label}</span>
      <span className="relative shrink-0 rounded-full transition-colors duration-200" style={{ width: 32, height: 18, background: checked ? "var(--v2-accent)" : "var(--v2-bg-3)" }}>
        <span className="absolute rounded-full bg-white transition-all duration-200" style={{ top: 2, left: checked ? 16 : 2, width: 14, height: 14 }} />
      </span>
    </button>
  );
}
const labelOf = <T,>(opts: { label: string; value: T }[], v: T | null) => (v === null ? null : (opts.find((o) => JSON.stringify(o.value) === JSON.stringify(v))?.label ?? null));

export function FilterBar({ filters: f, onChange }: { filters: Filters; onChange: (f: Filters) => void }) {
  const [open, setOpen] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const n = activeCount(f);
  useEffect(() => {
    if (!open) return;
    const down = (e: MouseEvent) => !ref.current?.contains(e.target as Node) && setOpen(null);
    const key = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    document.addEventListener("mousedown", down);
    document.addEventListener("keydown", key);
    return () => {
      document.removeEventListener("mousedown", down);
      document.removeEventListener("keydown", key);
    };
  }, [open]);
  const set = <K extends keyof Filters>(k: K, v: Filters[K]) => {
    onChange({ ...f, [k]: v });
    setOpen(null);
  };
  const sigOn = Object.values(f.signals).filter(Boolean).length;
  const pill = (id: string, label: string, value: string | null, clear: () => void, body: ReactNode) => (
    <Pill label={label} value={value} open={open === id} onToggle={() => setOpen((o) => (o === id ? null : id))} onClear={clear}>
      {body}
    </Pill>
  );
  return (
    <div ref={ref} className="flex flex-wrap items-center gap-2 px-5 sm:px-8 py-3" style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
      <span className="inline-flex items-center gap-1.5 mr-1 text-[12px]" style={{ color: "var(--v2-t-4)" }}>
        <Funnel size={13} />
        Filters
      </span>
      {pill("marketCap", "MCap", labelOf(MCAP, f.marketCap), () => set("marketCap", null), <Options options={MCAP} value={f.marketCap} onPick={(v) => set("marketCap", v as [number, number] | null)} />)}
      {pill("liquidity", "Liquidity", labelOf(LIQ, f.liquidity), () => set("liquidity", null), <Options options={LIQ} value={f.liquidity} onPick={(v) => set("liquidity", v as [number, number] | null)} />)}
      {pill("age", "Age", labelOf(AGE, f.age), () => set("age", null), <Options options={AGE} value={f.age} onPick={(v) => set("age", v)} />)}
      {pill("volume", "Volume", labelOf(VOL, f.volume), () => set("volume", null), <Options options={VOL} value={f.volume} onPick={(v) => set("volume", v)} />)}
      {pill("holders", "Holders", labelOf(HOLD, f.holders), () => set("holders", null), <Options options={HOLD} value={f.holders} onPick={(v) => set("holders", v)} />)}
      {pill("risk", "Risk", labelOf(RISK, f.risk), () => set("risk", null), <Options options={RISK} value={f.risk} onPick={(v) => set("risk", v)} dots={RISK_DOT} />)}
      {pill(
        "signals",
        "Signals",
        sigOn > 0 ? `${sigOn} on` : null,
        () => onChange({ ...f, signals: { ...EMPTY_FILTERS.signals } }),
        <div className="min-w-[230px]">
          <Toggle label="LP burned" checked={f.signals.lpBurned} onChange={(v) => onChange({ ...f, signals: { ...f.signals, lpBurned: v } })} />
          <Toggle label="Not mintable" checked={f.signals.notMintable} onChange={(v) => onChange({ ...f, signals: { ...f.signals, notMintable: v } })} />
          <Toggle label="Verified source" checked={f.signals.verifiedSource} onChange={(v) => onChange({ ...f, signals: { ...f.signals, verifiedSource: v } })} />
          <Toggle label="No buy/sell tax" checked={f.signals.noTax} onChange={(v) => onChange({ ...f, signals: { ...f.signals, noTax: v } })} />
        </div>,
      )}
      {n > 0 && (
        <button
          onClick={() => {
            onChange({ ...EMPTY_FILTERS, signals: { ...EMPTY_FILTERS.signals } });
            setOpen(null);
          }}
          className="ml-1 text-[12px] px-2 h-8 transition-colors hover:text-[var(--v2-t-1)]"
          style={{ color: "var(--v2-t-3)" }}
        >
          Reset all
        </button>
      )}
    </div>
  );
}

/* ---------- baris ---------- */
const GRID =
  "grid grid-cols-[28px_minmax(170px,1.4fr)_minmax(70px,0.6fr)_minmax(90px,0.8fr)_72px_minmax(85px,0.7fr)_minmax(90px,0.8fr)_minmax(85px,0.7fr)_minmax(60px,0.5fr)_minmax(55px,0.5fr)_minmax(60px,0.5fr)_minmax(65px,0.5fr)_minmax(140px,1fr)_minmax(190px,0.9fr)] gap-3";

function Avatar({ t, size, round = true }: { t: Tok; size: number; round?: boolean }) {
  const [bad, setBad] = useState(false);
  const cls = `${round ? "rounded-full" : "rounded-sm"} object-cover shrink-0`;
  return t.image && !bad ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt="" width={size} height={size} className={cls} referrerPolicy="no-referrer" loading="lazy" src={t.image} onError={() => setBad(true)} style={{ width: size, height: size, background: "var(--v2-bg-2)" }} />
  ) : (
    <div className={`${round ? "rounded-full" : "rounded-sm"} shrink-0 flex items-center justify-center num text-[11px] font-semibold`} style={{ width: size, height: size, background: "var(--v2-bg-2)", border: "1px solid var(--v2-line-1)", color: "var(--v2-t-1)" }}>
      {t.symbol.trim().slice(0, 2)}
    </div>
  );
}
const dotCls = (t: Tok) => (t.riskChecked === false ? "bg-[var(--v2-t-4)]" : t.riskScore <= 30 ? "bg-[var(--v2-pos)]" : t.riskScore <= 60 ? "bg-[var(--v2-warn)]" : "bg-[var(--v2-neg)]");
/** Salin alamat kontrak token tanpa membuka halaman detail (baris tabel adalah tautan). */
function CopyAddr({ address }: { address: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      title={done ? "Copied" : `Copy address ${address}`}
      aria-label="Copy token address"
      onClick={async (e) => {
        e.preventDefault();
        e.stopPropagation();
        try {
          await navigator.clipboard.writeText(address);
          setDone(true);
          setTimeout(() => setDone(false), 1400);
        } catch {}
      }}
      className="num shrink-0"
      style={{ fontSize: 10, lineHeight: "16px", padding: "0 5px", borderRadius: 4, cursor: "pointer", color: done ? "var(--v2-pos)" : "var(--v2-t-4)", border: "1px solid var(--v2-line-1)", background: "transparent" }}
    >
      {done ? "Copied" : `${address.slice(0, 6)}…${address.slice(-4)}`}
    </button>
  );
}

const href = (t: Tok) => `/application/tokens/${t.mint}?chain=robinhood`;

function DesktopRow({ t, interval, now, watched, onWatch }: { t: Tok; interval: Interval; now: number; watched: boolean; onWatch: () => void }) {
  const uid = useId().replace(/:/g, "");
  const c = chg(t, interval);
  return (
    <div className={`relative ${GRID} items-center px-4 py-3 cursor-pointer hover:bg-[var(--v2-bg-3)] transition-colors group`}>
      <a aria-label={`Open ${t.symbol.trim()}`} tabIndex={-1} className="absolute inset-0" href={href(t)}></a>
      <span className="relative z-[1]">
        <button
          title={watched ? "Remove from watchlist" : "Add to watchlist"}
          onClick={onWatch}
          className="inline-flex items-center justify-center h-9 w-9 rounded-sm transition-colors hover:bg-[var(--v2-bg-2)]"
          style={{ color: watched ? "var(--v2-warn)" : "var(--v2-t-4)" }}
        >
          <Star size={18} weight={watched ? "fill" : "regular"} />
        </button>
      </span>
      <a className="relative z-[1] flex items-center gap-2.5 min-w-0" href={href(t)}>
        <div className="relative shrink-0">
          <Avatar t={t} size={30} />
          <span className={`absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 rounded-full ${dotCls(t)}`} style={{ boxShadow: "0 0 0 2px var(--v2-bg-1)" }}></span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="num text-[14px] font-semibold group-hover:text-[var(--v2-accent-text)] transition-colors truncate" style={{ color: "var(--v2-t-1)" }}>
              {t.symbol.trim()}
            </span>
            <CopyAddr address={t.mint} />
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="inline-flex items-center gap-1.5 shrink-0" title="Trades on Robinhood Chain">
              <span className="inline-flex items-center justify-center rounded-full font-semibold shrink-0" style={{ width: 11, height: 11, fontSize: 7, background: "var(--v2-bg-3)", color: "var(--v2-t-2)" }}>S</span>
            </span>
            <span className="num text-[11px]" style={{ color: "var(--v2-t-4)" }} suppressHydrationWarning>{ago(t.createdAt, now)}</span>
            <span className="text-[11px] truncate" style={{ color: "var(--v2-t-4)" }}>{t.name.trim()}</span>
          </div>
        </div>
      </a>
      <div className="text-[11px] num truncate" title={dexName(t.dex)} style={{ color: "var(--v2-t-3)" }}>{dexName(t.dex)}</div>
      <div className="text-right">
        <div className="num text-[13px] font-medium" style={{ color: "var(--v2-t-1)" }}>
          <span className="inline-block px-1 -mx-1 rounded-sm">{money(t.marketCap)}</span>
        </div>
        <div className="mt-0.5"><ChgText v={c} /></div>
      </div>
      <div className="relative z-[1] pointer-events-none">
        <div className="w-[72px] h-7"><Spark t={t} id={`spark-${uid}`} /></div>
      </div>
      <div className="num text-right text-[13px]" style={{ color: t.liquidity >= 1e5 ? "var(--v2-pos)" : t.liquidity >= 1e4 ? "var(--v2-t-2)" : "var(--v2-neg)" }}>
        <span className="inline-block px-1 -mx-1 rounded-sm">{money(t.liquidity)}</span>
      </div>
      <div className="num text-right text-[13px]" style={{ color: t.volume >= 1e5 ? "var(--v2-pos)" : "var(--v2-t-2)" }}>
        <span className="inline-block px-1 -mx-1 rounded-sm">{money(t.volume)}</span>
      </div>
      <div className="text-right">
        <div className="num text-[13px]" style={{ color: "var(--v2-t-2)" }}>
          <span className="inline-block px-1 -mx-1 rounded-sm">{t.txns.toLocaleString("en-US")}</span>
        </div>
        <div className="num text-[11px] mt-0.5 whitespace-nowrap">
          <span style={{ color: "var(--v2-pos)" }}>{t.buys}</span>
          <span style={{ color: "var(--v2-t-4)" }}> / </span>
          <span style={{ color: "var(--v2-neg)" }}>{t.sells}</span>
        </div>
      </div>
      <div className="num text-right text-[12px]" style={{ color: (t.top10 ?? 0) >= 50 ? "var(--v2-neg)" : (t.top10 ?? 0) >= 30 ? "var(--v2-warn)" : "var(--v2-t-2)" }}>
        {t.top10 == null ? "—" : `${Math.round(t.top10)}%`}
      </div>
      <div className="num text-right text-[12px]" style={{ color: (t.devPct ?? 0) >= 10 ? "var(--v2-neg)" : "var(--v2-t-2)" }}>
        {t.devPct == null ? "—" : `${Math.round(t.devPct)}%`}
      </div>
      <div className="num text-right text-[12px]" style={{ color: "var(--v2-t-2)" }}>{t.buyTax}/{t.sellTax}</div>
      <span className="num text-right text-[13px]" style={{ color: "var(--v2-t-2)" }}>{t.holders ? t.holders.toLocaleString("en-US") : "—"}</span>
      <span className="relative z-[1] min-w-0"><Signals t={t} /></span>
      <span className="relative z-[1]">
        <div className="flex items-center gap-1.5 justify-end">
          <a className="px-2.5 py-1.5 rounded-sm text-[11px] transition-colors hover:bg-[var(--v2-bg-2)]" href={`/application/agents/new?template=token_trading&token_mint=${t.mint}&symbol=${encodeURIComponent(t.symbol.trim())}&start=1`} style={{ color: "var(--v2-t-3)", border: "1px solid var(--v2-line-1)" }}>Watch</a>
          <a className="px-2.5 py-1.5 rounded-sm text-[11px] transition-colors hover:bg-[var(--v2-bg-2)]" href={`/application/chat?q=${t.mint}`} style={{ color: "var(--v2-t-3)", border: "1px solid var(--v2-line-1)" }}>AI</a>
          <span className="w-px h-4 mx-0.5" style={{ background: "var(--v2-line-1)" }}></span>
          <a className="px-2.5 py-1.5 rounded-sm text-[11px] transition-colors hover:bg-[var(--v2-bg-2)]" href={href(t)} style={{ color: "var(--v2-t-1)", border: "1px solid var(--v2-line-2)" }}>Analyze →</a>
        </div>
      </span>
    </div>
  );
}

function MobileCard({ t, interval, now }: { t: Tok; interval: Interval; now: number }) {
  const c = chg(t, interval);
  return (
    <div className="relative block panel p-3 hover:bg-[var(--v2-bg-2)] transition-colors">
      <a aria-label={`Open ${t.symbol.trim()}`} tabIndex={-1} className="absolute inset-0" href={href(t)}></a>
      <div className="flex items-center gap-2.5 pointer-events-none">
        <Avatar t={t} size={36} round={false} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-medium text-[var(--v2-t-1)] truncate">{t.symbol.trim()}</span>
            <span className={`dot shrink-0 ${t.riskScore <= 30 ? "dot-pos" : ""}`}></span>
            <span className="relative z-[1] pointer-events-auto"><CopyAddr address={t.mint} /></span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-[var(--v2-t-3)]">
            <span className="num">{t.name.trim()}</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <span aria-hidden className="inline-block rounded-full shrink-0" style={{ width: 11, height: 11, background: "var(--v2-accent)" }} />
            <span className="text-[var(--v2-t-4)] num" suppressHydrationWarning>{ago(t.createdAt, now)}</span>
          </div>
        </div>
        <div className="text-right shrink-0">
          <p className="num text-sm text-[var(--v2-t-1)]">{price(t.price)}</p>
          <span className="num text-[11px] flex items-center gap-0.5 justify-end" style={{ color: c >= 0 ? "var(--v2-pos)" : "var(--v2-neg)" }}>
            {c >= 0 ? "+" : ""}{c.toFixed(2)}%
            <span className="text-[var(--v2-t-4)] ml-0.5 uppercase">{interval}</span>
          </span>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2 text-center border-t hairline pt-2.5 pointer-events-none">
        <div><p className="eyebrow">MCap</p><p className="num text-[11px] text-[var(--v2-t-2)] mt-0.5">{money(t.marketCap)}</p></div>
        <div><p className="eyebrow">Liq</p><p className="num text-[11px] text-[var(--v2-t-2)] mt-0.5">{money(t.liquidity)}</p></div>
        <div><p className="eyebrow">Vol</p><p className="num text-[11px] text-[var(--v2-t-2)] mt-0.5">{money(t.volume)}</p></div>
        <div>
          <p className="eyebrow">B / S</p>
          <p className="num text-[11px] mt-0.5">
            <span className="text-[var(--v2-pos)]">{t.buys}</span>
            <span className="text-[var(--v2-t-4)]">/</span>
            <span className="text-[var(--v2-neg)]">{t.sells}</span>
          </p>
        </div>
      </div>
      <div className="mt-2.5 flex items-center gap-x-3 gap-y-1 flex-wrap border-t hairline pt-2.5 text-[11px] pointer-events-none" style={{ color: "var(--v2-t-3)" }}>
        <Signals t={t} />
        <span className="num">Top 10 {t.top10 == null ? "—" : `${Math.round(t.top10)}%`}</span>
        <span className="num">Tax {t.buyTax}/{t.sellTax}</span>
        <span className="num">{t.holders ? t.holders.toLocaleString("en-US") : "—"} holders</span>
      </div>
      <div className="relative z-[1] mt-2.5 flex items-center gap-1.5 border-t hairline pt-2.5">
        <a className="px-2.5 py-1.5 rounded-sm text-[11px]" href={`/application/agents/new?template=token_trading&token_mint=${t.mint}&symbol=${encodeURIComponent(t.symbol.trim())}&start=1`} style={{ color: "var(--v2-t-3)", border: "1px solid var(--v2-line-1)" }}>Watch</a>
        <a className="px-2.5 py-1.5 rounded-sm text-[11px]" href={`/application/chat?q=${t.mint}`} style={{ color: "var(--v2-t-3)", border: "1px solid var(--v2-line-1)" }}>AI</a>
        <span className="flex-1"></span>
        <a className="px-2.5 py-1.5 rounded-sm text-[11px]" href={href(t)} style={{ color: "var(--v2-t-1)", border: "1px solid var(--v2-line-2)" }}>Analyze →</a>
      </div>
    </div>
  );
}

export function TrendingRows({ tokens, interval, now, reset }: { tokens: Tok[]; interval: Interval; now: number; reset: () => void }) {
  const [watch, setWatch] = useState<Set<string>>(new Set());
  const toggle = (m: string) =>
    setWatch((s) => {
      const n = new Set(s);
      if (n.has(m)) n.delete(m);
      else n.add(m);
      return n;
    });
  const empty = tokens.length === 0;
  return (
    <div className="flex">
      <div className="flex-1 min-w-0">
        {empty ? (
          <div className="py-16 text-center">
            <p className="text-[14px]" style={{ color: "var(--v2-t-3)" }}>No tokens match these filters</p>
            <button onClick={reset} className="mt-3 text-[12px] px-3 h-8 rounded-sm transition-colors hover:bg-[var(--v2-bg-2)]" style={{ color: "var(--v2-t-1)", border: "1px solid var(--v2-line-2)" }}>
              Reset all
            </button>
          </div>
        ) : (
          <>
            <div className="hidden lg:block overflow-x-auto">
              <div className="min-w-[1324px]" style={{ borderTop: "1px solid var(--v2-line-1)" }}>
                <div className={`${GRID} px-4 h-8 items-center eyebrow sticky top-0 z-10`} style={{ borderBottom: "1px solid var(--v2-line-1)", background: "var(--v2-bg-0)" }}>
                  <span></span>
                  <span>Token · Age</span>
                  <span>Dex</span>
                  <span className="text-right">MC</span>
                  <span title="Price across the 24h, 6h, 1h and 5m change windows">Trend</span>
                  <span className="text-right">Liq</span>
                  <span className="text-right">24H Vol</span>
                  <span className="text-right">24H TXs</span>
                  <span className="text-right" title="Share held by the top 10 wallets">Top 10</span>
                  <span className="text-right" title="Share held by the deployer">Dev</span>
                  <span className="text-right" title="Buy / sell tax charged by the contract">Tax</span>
                  <span className="text-right">Holders</span>
                  <span>Signals</span>
                  <span className="text-right pr-1">Action</span>
                </div>
                {tokens.map((t) => (
                  <DesktopRow key={t.mint} t={t} interval={interval} now={now} watched={watch.has(t.mint)} onWatch={() => toggle(t.mint)} />
                ))}
              </div>
            </div>
            <div className="lg:hidden space-y-2 px-3">
              {tokens.map((t) => (
                <MobileCard key={t.mint} t={t} interval={interval} now={now} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export function useNow() {
  const [now, setNow] = useState(0);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 30000);
    return () => clearInterval(id);
  }, []);
  return [now, () => setNow(Date.now())] as const;
}

export function useFiltered(tokens: Tok[], filters: Filters, now: number) {
  return useMemo(() => applyFilters(tokens, filters, now || Date.now()), [tokens, filters, now]);
}
