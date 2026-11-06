"use client";
import { useState } from "react";
import { useApi } from "@/lib/api";
import { money, price } from "@/components/app/token-board";

// Detail token Robinhood Chain: harga, statistik, chart candle, rugcheck, dan trade terbaru.
// Data: GET /api/tokens/:mint, /security, /chart, /trades (fixture atau backend, lihat src/lib/api.ts).

type Detail = {
  token: {
    name: string | null;
    symbol: string | null;
    mint: string;
    image: string | null;
    description?: string;
    price: number | null;
    marketCap: number | null;
    liquidity: number | null;
    volume: number | null;
    lpBurn: number | null;
    buys: number | null;
    sells: number | null;
    txns: number | null;
    change5m: number | null;
    change1h: number | null;
    change6h: number | null;
    change24h: number | null;
    totalSupply: number | null;
    topHoldersPercent: number | null;
    devHoldingsPercent: number | null;
    holdersCount?: number | null;
    risk: { score: number | null; rugged: boolean; risks: { name: string; level: string; score: number }[] };
    security: { freezeAuthority: string | null; mintAuthority: string | null };
    market?: string | null;
  };
};
type Security = {
  checked: boolean;
  passed: number;
  total: number;
  groups: { title: string; checks: { label: string; state: "pass" | "warn" | "fail" | "unknown"; value?: string; hint?: string }[] }[];
};
type Candle = { time: number; open: number; high: number; low: number; close: number; volume: number };
type Chart = { candles: Candle[] };
type Trades = { trades: { txHash: string; wallet: string; type: "buy" | "sell"; tokenAmount: number; ethAmount: number | null; priceUsd: number | null; timestamp: number }[] };

const INTERVALS = ["5m", "15m", "1h", "4h", "1d"] as const;
const PERIODS = [
  ["change5m", "5m"],
  ["change1h", "1h"],
  ["change6h", "6h"],
  ["change24h", "24h"],
] as const;

const short = (a: string) => `${a.slice(0, 4)}…${a.slice(-4)}`;
const pctText = (v: number | null | undefined) => (v == null || !isFinite(v) ? "·" : `${v > 0 ? "+" : ""}${v.toFixed(2)}%`);
const pctColor = (v: number | null | undefined) =>
  v == null || !isFinite(v) || v === 0 ? "var(--v2-t-3)" : v > 0 ? "var(--v2-pos)" : "var(--v2-neg)";

function ago(ms: number, now: number) {
  const s = Math.max(0, Math.floor((now - ms) / 1000));
  if (s < 60) return `${s}s ago`;
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  return `${Math.floor(s / 86400)}d ago`;
}

function Card({ title, children, right }: { title: string; children: React.ReactNode; right?: React.ReactNode }) {
  return (
    <section className="rounded-2xl overflow-hidden" style={{ background: "var(--v2-bg-1)", border: "1px solid var(--v2-line-1)" }}>
      <div className="flex items-center px-4 h-11" style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
        <h2 className="eyebrow">{title}</h2>
        <div className="ml-auto">{right}</div>
      </div>
      {children}
    </section>
  );
}

function CandleChart({ candles }: { candles: Candle[] }) {
  const W = 800;
  const H = 280;
  const pad = { l: 8, r: 64, t: 12, b: 20 };
  const hi = Math.max(...candles.map((c) => c.high));
  const lo = Math.min(...candles.map((c) => c.low));
  const span = hi - lo || hi || 1;
  const x = (i: number) => pad.l + ((i + 0.5) / candles.length) * (W - pad.l - pad.r);
  const y = (v: number) => pad.t + (1 - (v - lo) / span) * (H - pad.t - pad.b);
  const bw = Math.max(1.5, ((W - pad.l - pad.r) / candles.length) * 0.65);
  const ticks = [0, 0.25, 0.5, 0.75, 1].map((f) => lo + span * f);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto block" role="img" aria-label="Price chart">
      {ticks.map((t) => (
        <g key={t}>
          <line x1={pad.l} x2={W - pad.r} y1={y(t)} y2={y(t)} stroke="var(--v2-line-1)" strokeWidth="1" />
          <text x={W - pad.r + 6} y={y(t) + 4} fontSize="10" fill="var(--v2-t-4)">
            {price(t)}
          </text>
        </g>
      ))}
      {candles.map((c, i) => {
        const up = c.close >= c.open;
        const col = up ? "var(--v2-pos)" : "var(--v2-neg)";
        const top = y(Math.max(c.open, c.close));
        const h = Math.max(1, Math.abs(y(c.open) - y(c.close)));
        return (
          <g key={c.time}>
            <line x1={x(i)} x2={x(i)} y1={y(c.high)} y2={y(c.low)} stroke={col} strokeWidth="1" />
            <rect x={x(i) - bw / 2} y={top} width={bw} height={h} fill={col} />
          </g>
        );
      })}
    </svg>
  );
}

const STATE_COLOR = { pass: "var(--v2-pos)", warn: "var(--v2-warn, #d9a441)", fail: "var(--v2-neg)", unknown: "var(--v2-t-4)" } as const;
const STATE_LABEL = { pass: "Pass", warn: "Warn", fail: "Fail", unknown: "Unknown" } as const;

export function TokenDetailContent({ mint }: { mint: string }) {
  const [interval, setIntervalKey] = useState<(typeof INTERVALS)[number]>("15m");
  const [period, setPeriod] = useState<(typeof PERIODS)[number][0]>("change24h");
  const [now] = useState(() => Date.now());
  const detail = useApi<Detail>(`/api/tokens/${mint}`);
  const security = useApi<Security>(`/api/tokens/${mint}/security`);
  const trades = useApi<Trades>(`/api/tokens/trades?mint=${mint}&limit=30`);
  const chart = useApi<Chart>(`/api/tokens/chart?mint=${mint}&type=${interval}`);

  if (detail.loading)
    return (
      <div className="max-w-[1400px] mx-auto py-24 text-center text-[13px]" style={{ color: "var(--v2-t-3)" }}>
        Loading token…
      </div>
    );
  if (detail.error || !detail.data)
    return (
      <div className="max-w-[1400px] mx-auto py-24 text-center">
        <h1 className="text-[20px] font-semibold" style={{ color: "var(--v2-t-1)" }}>
          Token not found
        </h1>
        <p className="mt-2 text-[13px]" style={{ color: "var(--v2-t-3)" }}>
          Corvid has not indexed <span className="font-mono">{short(mint)}</span> yet. Only tokens seen on-chain are listed.
        </p>
        <a href="/application/latest" className="inline-block mt-5 text-[13px] underline" style={{ color: "var(--v2-accent-text)" }}>
          Browse latest tokens
        </a>
      </div>
    );

  const t = detail.data.token;
  const sym = (t.symbol ?? "").trim() || short(mint);
  const sec = security.data;
  const stats: [string, string][] = [
    ["Market cap", money(t.marketCap)],
    ["Liquidity", money(t.liquidity)],
    ["Volume 24h", money(t.volume)],
    ["Holders", t.holdersCount != null ? t.holdersCount.toLocaleString("en-US") : "·"],
    ["Buys / Sells", t.buys != null && t.sells != null ? `${t.buys.toLocaleString("en-US")} / ${t.sells.toLocaleString("en-US")}` : "·"],
    ["LP burned", t.lpBurn != null ? `${t.lpBurn.toFixed(1)}%` : "·"],
    ["Top 10 holders", t.topHoldersPercent != null ? `${t.topHoldersPercent.toFixed(1)}%` : "·"],
    ["Dev holds", t.devHoldingsPercent != null ? `${t.devHoldingsPercent.toFixed(1)}%` : "·"],
  ];

  return (
    <div className="max-w-[1400px] mx-auto space-y-3">
      <div className="flex items-center gap-4 flex-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          width={48}
          height={48}
          referrerPolicy="no-referrer"
          src={t.image ?? ""}
          className="rounded-full object-cover shrink-0"
          style={{ width: 48, height: 48, background: "var(--v2-bg-2)" }}
        />
        <div className="min-w-0">
          <h1 className="text-[22px] font-semibold leading-tight truncate" style={{ color: "var(--v2-t-1)" }}>
            {sym} <span className="text-[14px] font-normal" style={{ color: "var(--v2-t-4)" }}>{(t.name ?? "").trim()}</span>
          </h1>
          <p className="font-mono text-[12px]" style={{ color: "var(--v2-t-4)" }}>
            {short(mint)} · Robinhood Chain{t.market ? ` · ${t.market}` : ""}
            {t.risk.rugged ? " · RUGGED" : ""}
          </p>
        </div>
        <div className="ml-auto text-right">
          <div className="num text-[26px] font-semibold" style={{ color: "var(--v2-t-1)" }}>
            {price(t.price ?? 0)}
          </div>
          <div className="num text-[13px]" style={{ color: pctColor(t[period]) }}>
            {pctText(t[period])}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {stats.map(([k, v]) => (
          <div key={k} className="rounded-xl px-3 py-2.5" style={{ background: "var(--v2-bg-1)", border: "1px solid var(--v2-line-1)" }}>
            <div className="eyebrow">{k}</div>
            <div className="num text-[15px] mt-0.5" style={{ color: "var(--v2-t-1)" }}>
              {v}
            </div>
          </div>
        ))}
      </div>

      <Card
        title="Chart"
        right={
          <div className="flex gap-1">
            {INTERVALS.map((i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIntervalKey(i)}
                className="h-7 px-2.5 rounded-full text-[12px]"
                style={{
                  background: i === interval ? "rgba(var(--v2-accent-rgb),0.12)" : "transparent",
                  color: i === interval ? "var(--v2-accent-text)" : "var(--v2-t-3)",
                }}
              >
                {i}
              </button>
            ))}
          </div>
        }
      >
        <div className="p-3">
          {chart.loading ? (
            <div className="py-16 text-center text-[13px]" style={{ color: "var(--v2-t-3)" }}>
              Loading chart…
            </div>
          ) : chart.data && chart.data.candles.length > 1 ? (
            <CandleChart candles={chart.data.candles} />
          ) : (
            <div className="py-16 text-center text-[13px]" style={{ color: "var(--v2-t-3)" }}>
              No chart data for this interval yet.
            </div>
          )}
          <div className="flex gap-1 mt-2">
            {PERIODS.map(([k, label]) => (
              <button
                key={k}
                type="button"
                onClick={() => setPeriod(k)}
                className="h-7 px-2.5 rounded-full text-[12px] num"
                style={{ background: k === period ? "var(--v2-bg-2)" : "transparent", color: pctColor(t[k]) }}
              >
                {label} {pctText(t[k])}
              </button>
            ))}
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <Card
          title="Rugcheck"
          right={sec?.checked ? <span className="num text-[12px]" style={{ color: "var(--v2-t-3)" }}>{sec.passed}/{sec.total} passed</span> : null}
        >
          {!sec || !sec.checked ? (
            <div className="px-4 py-10 text-center text-[13px]" style={{ color: "var(--v2-t-3)" }}>
              {security.loading ? "Loading checks…" : "Not checked yet."}
            </div>
          ) : (
            sec.groups.map((g) => (
              <div key={g.title} style={{ borderTop: "1px solid var(--v2-line-1)" }}>
                <div className="px-4 pt-3 pb-1 eyebrow">{g.title}</div>
                {g.checks.map((c) => (
                  <div key={c.label} className="flex items-start gap-3 px-4 py-1.5">
                    <span className="text-[11px] font-mono uppercase w-14 shrink-0 pt-0.5" style={{ color: STATE_COLOR[c.state] }}>
                      {STATE_LABEL[c.state]}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[13px]" style={{ color: "var(--v2-t-2)" }}>
                        {c.label}
                        {c.value ? <span style={{ color: "var(--v2-t-4)" }}> · {c.value}</span> : null}
                      </span>
                      {c.hint ? (
                        <span className="block text-[11.5px]" style={{ color: "var(--v2-t-4)" }}>
                          {c.hint}
                        </span>
                      ) : null}
                    </span>
                  </div>
                ))}
              </div>
            ))
          )}
        </Card>

        <Card title="Recent trades">
          {!trades.data || trades.data.trades.length === 0 ? (
            <div className="px-4 py-10 text-center text-[13px]" style={{ color: "var(--v2-t-3)" }}>
              {trades.loading ? "Loading trades…" : "No trades recorded yet."}
            </div>
          ) : (
            <div>
              {trades.data.trades.map((tr, i) => (
                <div
                  key={tr.txHash}
                  className="grid gap-2 px-4 py-2 text-[12.5px] items-center"
                  style={{ gridTemplateColumns: "56px 1fr 1fr 72px", borderTop: i ? "1px solid var(--v2-line-1)" : undefined }}
                >
                  <span className="uppercase font-mono text-[11px]" style={{ color: tr.type === "buy" ? "var(--v2-pos)" : "var(--v2-neg)" }}>
                    {tr.type}
                  </span>
                  <span className="num" style={{ color: "var(--v2-t-2)" }}>
                    {tr.ethAmount != null ? `${tr.ethAmount} ETH` : "·"}
                  </span>
                  <span className="font-mono" style={{ color: "var(--v2-t-4)" }}>
                    {short(tr.wallet)}
                  </span>
                  <span className="text-right" style={{ color: "var(--v2-t-4)" }}>
                    {ago(tr.timestamp, now)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>

      {t.risk.risks.length > 0 && (
        <p className="text-[12px]" style={{ color: "var(--v2-t-4)" }}>
          Flags: {t.risk.risks.map((r) => r.name).join(" · ")}
        </p>
      )}
    </div>
  );
}
