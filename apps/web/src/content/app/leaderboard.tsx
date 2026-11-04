"use client";
import { useMemo, useState } from "react";
import data from "@/data/leaderboard-wallets.json";

// PnL Leaderboard. Data fixture (7 wallet Solana terlacak); diganti /alpha/curated di Tahap 2.
type Row = { w: string; tier: string | null; kind: string | null; pnl: number | null; win: string | null; closed: string | null };
type Key = "pnl" | "win" | "closed";

const ROWS = data as Row[];
const num = (s: string | null) => (s == null ? 0 : parseFloat(s));
const short = (w: string) => `${w.slice(0, 4)}...${w.slice(-4)}`;
const MEDAL = ["rgb(245, 196, 81)", "rgb(201, 209, 217)", "rgb(205, 127, 50)"];

export function ApplicationLeaderboardContent() {
  const [tier, setTier] = useState<"All" | "A" | "B">("All");
  const [sort, setSort] = useState<Key>("pnl");
  const [dir, setDir] = useState<1 | -1>(-1);
  const [q, setQ] = useState("");

  const rows = useMemo(() => {
    const s = q.trim().toLowerCase();
    const v = (r: Row) => (sort === "pnl" ? (r.pnl ?? 0) : sort === "win" ? num(r.win) : num(r.closed));
    return ROWS.filter((r) => tier === "All" || r.tier === tier)
      .filter((r) => !s || r.w.toLowerCase().includes(s))
      .sort((a, b) => (v(a) - v(b)) * dir);
  }, [tier, sort, dir, q]);

  const head = (k: Key, label: string, cls = "") => (
    <button
      type="button"
      onClick={() => {
        if (sort === k) setDir((d) => (d === 1 ? -1 : 1));
        else {
          setSort(k);
          setDir(-1);
        }
      }}
      className={`text-right hover:text-[var(--v2-t-1)] transition-colors ${cls}`}
      style={{ color: sort === k ? "var(--v2-t-1)" : undefined }}
    >
      {label}
      {sort === k ? (dir === -1 ? " ↓" : " ↑") : ""}
    </button>
  );

  return (
    <div className="max-w-[1000px] mx-auto">
      <div className="flex items-center gap-3 mb-5 flex-wrap">
        <div>
          <h1 className="text-[22px] font-semibold leading-tight" style={{ color: "var(--v2-t-1)" }}>
            PnL Leaderboard
          </h1>
          <p className="text-[13px]" style={{ color: "var(--v2-t-3)" }}>
            Tracked wallets by realized profit, last 30 days · sample data
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-1.5 mb-3">
        {(["All", "A", "B"] as const).map((t) => {
          const on = tier === t;
          return (
            <button
              key={t}
              onClick={() => setTier(t)}
              aria-pressed={on}
              className="h-8 px-3 rounded-full text-[13px] transition-colors"
              style={{
                background: on ? "rgba(var(--v2-accent-rgb),0.12)" : "transparent",
                color: on ? "var(--v2-accent-text)" : "var(--v2-t-3)",
                border: `1px solid ${on ? "rgba(var(--v2-accent-rgb),0.45)" : "var(--v2-line-1)"}`,
              }}
            >
              {t === "All" ? "All tiers" : `Tier ${t}`}
            </button>
          );
        })}
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search wallet"
          aria-label="Search wallet"
          className="input-v2 h-8 w-full sm:w-56 text-[13px] sm:ml-2"
        />
      </div>
      <div className="rounded-2xl overflow-hidden" style={{ background: "var(--v2-bg-1)", border: "1px solid var(--v2-line-1)" }}>
        <div className="hidden sm:grid grid-cols-[56px_1fr_120px_90px_90px] gap-3 px-4 h-10 items-center eyebrow" style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
          <span>Rank</span>
          <span>Wallet</span>
          {head("pnl", "Realized PnL")}
          {head("win", "Win rate")}
          {head("closed", "Closed")}
        </div>
        {rows.length === 0 && (
          <p className="px-4 py-10 text-center text-[13px]" style={{ color: "var(--v2-t-3)" }}>
            No wallets match.
          </p>
        )}
        {rows.map((r, i) => (
          <a
            key={r.w}
            href={`/application/alpha/wallet/${r.w}`}
            className="grid grid-cols-[44px_1fr_auto] sm:grid-cols-[56px_1fr_120px_90px_90px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: i ? "1px solid var(--v2-line-1)" : undefined }}
          >
            <span
              className="num text-[14px] font-bold w-8 h-8 rounded-full flex items-center justify-center"
              style={i < 3 ? { color: "rgb(20, 25, 29)", background: MEDAL[i] } : { color: "var(--v2-t-3)", background: "var(--v2-bg-2)" }}
            >
              {i + 1}
            </span>
            <span className="min-w-0">
              <span className="flex items-center gap-2">
                <span className="num text-[14px]" style={{ color: "var(--v2-t-1)" }}>
                  {short(r.w)}
                </span>
                {r.tier && (
                  <span className="font-mono text-[10px] px-1.5 py-0.5 rounded" style={{ color: "var(--v2-accent-text)", background: "rgba(var(--v2-accent-rgb),0.12)" }}>
                    Tier {r.tier}
                  </span>
                )}
              </span>
              {r.kind && (
                <span className="block text-[12px] capitalize" style={{ color: "var(--v2-t-4)" }}>
                  {r.kind}
                </span>
              )}
            </span>
            <span className="text-right num text-[14px] font-semibold" style={{ color: (r.pnl ?? 0) >= 0 ? "var(--v2-pos)" : "var(--v2-neg)" }}>
              {r.pnl == null ? "·" : `${r.pnl >= 0 ? "+" : ""}${r.pnl.toFixed(2)} SOL`}
            </span>
            <span className="hidden sm:block text-right num text-[13px]" style={{ color: "var(--v2-t-2)" }}>
              {r.win ?? "·"}
            </span>
            <span className="hidden sm:block text-right num text-[13px]" style={{ color: "var(--v2-t-3)" }}>
              {r.closed ?? "·"}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
