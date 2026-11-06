"use client";
import { useState, type ReactNode } from "react";
import { Star } from "@phosphor-icons/react";
import { explorerAddress, getChain } from "@corvid/shared/chains";
import { useApi } from "@/lib/api";
import { AlphaLive, AlphaMyLists } from "@/components/app/alpha-views";

const TIERS = ["all", "S", "A", "B", "C"] as const;
const WINS = [0, 40, 50, 60, 70];
const MINTR = [0, 10, 50, 100];
const SORT_ON = { background: "var(--v2-bg-2)", color: "var(--v2-t-1)", border: "1px solid var(--v2-line-3)" } as const;
const SORT_OFF = { background: "transparent", color: "var(--v2-t-4)", border: "1px solid var(--v2-line-1)" } as const;

function Chip({ on, onClick, big, children }: { on: boolean; onClick: () => void; big?: boolean; children: ReactNode }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={on}
      className={`num rounded-sm transition-colors font-medium ${big ? "text-[13px] px-3 py-1.5" : "text-[12px] px-2.5 py-1.5"}`}
      style={{
        background: on ? "var(--v2-bg-2)" : "transparent",
        color: on ? "var(--v2-t-1)" : "var(--v2-t-4)",
        border: on ? "1px solid var(--v2-accent)" : "1px solid var(--v2-line-1)",
      }}
    >
      {children}
    </button>
  );
}

// Data dari GET /api/alpha/curated: wallet yang ditemukan worker dari trade yang diindeks (ESTIMASI pada jendela windowHours, bukan riwayat penuh).
type ApiWallet = {
  address: string;
  label: string | null;
  tier: "S" | "A" | "B" | "C" | null;
  winRate: number | null;
  pnlEth: number;
  trades: number;
  closedTokens: number;
  tokensTraded: number;
  avgHoldHours: number | null;
  lastActive: number | null;
};
type Curated = { wallets: ApiWallet[]; windowHours: number };

const MAINNET = getChain("mainnet"); // data pasar selalu dari mainnet
const short = (a: string) => `${a.slice(0, 6)}…${a.slice(-4)}`;
const eth = (n: number) => `${n > 0 ? "+" : n < 0 ? "−" : ""}${Math.abs(n).toFixed(Math.abs(n) >= 10 ? 1 : 2)} ETH`;
function agoText(ts: number | null, now: number) {
  if (!ts) return "—";
  const s = Math.max(0, Math.floor(now / 1000 - ts));
  if (s < 60) return `${s}s`;
  if (s < 3600) return `${Math.floor(s / 60)}m`;
  if (s < 86400) return `${Math.floor(s / 3600)}h`;
  return `${Math.floor(s / 86400)}d`;
}
const TIER_COLOR: Record<string, string> = { S: "var(--v2-accent-text)", A: "var(--v2-pos)", B: "var(--v2-t-2)", C: "var(--v2-t-4)" };

function WalletRow({ w, now }: { w: ApiWallet; now: number }) {
  const tier = w.tier ?? "C";
  return (
    <tr className="transition-colors group">
      <td className="canvas-td" style={{ textAlign: "left" }}></td>
      <td className="canvas-td" style={{ textAlign: "left" }}>
        <a
          className="hover:underline decoration-dotted underline-offset-4"
          href={explorerAddress(MAINNET, w.address)}
          target="_blank"
          rel="noopener noreferrer"
          title="Open on the Robinhood Chain explorer"
        >
          <div className="flex items-center gap-3 min-w-0">
            <span
              className="eyebrow num shrink-0 flex items-center justify-center font-bold rounded-sm w-7 h-7"
              style={{ background: "var(--v2-bg-2)", color: TIER_COLOR[tier], fontSize: "14px", lineHeight: "1" }}
            >
              {tier}
            </span>
            <div className="min-w-0 flex flex-col">
              <span className="truncate text-[15px] font-medium num" style={{ color: "var(--v2-t-1)" }}>
                {short(w.address)}
              </span>
              <span className="text-[12px] truncate mt-0.5" style={{ color: "var(--v2-t-4)" }}>
                {w.label ?? "Discovered"}
              </span>
            </div>
          </div>
        </a>
      </td>
      <td className="canvas-td num tabular-nums" style={{ textAlign: "right" }}>
        {w.winRate === null ? (
          <span style={{ color: "var(--v2-t-4)" }}>—</span>
        ) : (
          <span className="font-semibold" style={{ color: w.winRate >= 50 ? "var(--v2-pos)" : "var(--v2-neg)" }}>
            {Math.round(w.winRate)}%
          </span>
        )}
      </td>
      <td className="canvas-td num tabular-nums" style={{ textAlign: "right" }}>
        <span className="font-semibold" style={{ color: w.pnlEth >= 0 ? "var(--v2-pos)" : "var(--v2-neg)" }}>
          {eth(w.pnlEth)}
        </span>
      </td>
      <td className="canvas-td num tabular-nums hidden md:table-cell" style={{ textAlign: "right", color: "var(--v2-t-2)" }}>
        {w.trades}
      </td>
      <td className="canvas-td num tabular-nums hidden lg:table-cell" style={{ textAlign: "right", color: "var(--v2-t-2)" }}>
        {w.tokensTraded}
      </td>
      <td className="canvas-td num tabular-nums hidden lg:table-cell" style={{ textAlign: "right", color: "var(--v2-t-3)" }}>
        {w.avgHoldHours === null ? "—" : w.avgHoldHours < 1 ? `${Math.round(w.avgHoldHours * 60)}m` : `${w.avgHoldHours.toFixed(1)}h`}
      </td>
      <td className="canvas-td num tabular-nums hidden sm:table-cell" style={{ textAlign: "right", color: "var(--v2-t-4)" }}>
        {agoText(w.lastActive, now)}
      </td>
      <td className="canvas-td" style={{ textAlign: "right" }}>
        <div className="flex gap-1.5 justify-end opacity-60 group-hover:opacity-100 transition-opacity">
          <a
            className="px-2.5 py-1 rounded-sm inline-flex items-center gap-1 whitespace-nowrap text-[12px] font-semibold uppercase tracking-wide"
            href={`/application/agents/new?template=follow_wallet&wallet=${w.address}&start=1`}
            style={{ border: "1px solid var(--v2-accent)", background: "transparent", color: "var(--v2-accent-text)" }}
          >
            Copy
          </a>
        </div>
      </td>
    </tr>
  );
}

export function ApplicationAlphaContent() {
  const [tab, setTab] = useState<"wallets" | "live" | "my">("wallets");
  const [tier, setTier] = useState<(typeof TIERS)[number]>("all");
  const [minWin, setMinWin] = useState(0);
  const [minTr, setMinTr] = useState(0);
  const [sort, setSort] = useState<"top" | "trending">("top");
  const [compact, setCompact] = useState(false);
  const { data, loading, error } = useApi<Curated>("/api/alpha/curated?limit=200");
  const [now] = useState(() => Date.now());
  const all = data?.wallets ?? [];
  const windowHours = data?.windowHours ?? 48;
  const shown = all
    .filter(
      (r) =>
        (tier === "all" || r.tier === tier) &&
        (minWin === 0 || (r.winRate !== null && r.winRate > minWin)) &&
        r.trades >= minTr,
    )
    .sort((a, b) => (sort === "top" ? b.pnlEth - a.pnlEth : (b.lastActive ?? 0) - (a.lastActive ?? 0)));
  return (
    <>
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col h-[calc(100vh-56px)] overflow-hidden">
          <div className="shrink-0">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div className="py-3">
                <h2
                  className="font-heading font-semibold text-[24px] tracking-[-0.02em]"
                  style={{ color: "var(--v2-t-1)" }}
                >
                  Smart Wallets
                </h2>
                <p
                  className="text-[13px] mt-0.5"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  Wallets with profitable trades on Robinhood Chain
                </p>
              </div>
            </div>
            <div
              className="flex items-center gap-5 mb-6 overflow-x-auto"
              style={{ borderBottom: "1px solid var(--v2-line-1)" }}
            >
              {(
                [
                  ["wallets", "Wallets"],
                  ["live", "Live feed"],
                  ["my", "My lists"],
                ] as const
              ).map(([k, label]) => {
                const on = tab === k;
                return (
                  <button
                    key={k}
                    onClick={() => setTab(k)}
                    aria-pressed={on}
                    className="relative py-3 text-[15px] transition-colors whitespace-nowrap"
                    style={{ color: on ? "var(--v2-t-1)" : "var(--v2-t-4)", fontWeight: on ? "500" : "400" }}
                  >
                    <span className="flex items-center gap-2">
                      {k === "my" && <Star size={14} weight={on ? "fill" : "regular"} />}
                      {label}
                    </span>
                    {on && (
                      <span
                        className="absolute left-0 right-0"
                        style={{ bottom: "-1px", height: "2px", background: "var(--v2-accent)" }}
                      ></span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
          {tab === "wallets" ? (
          <div className="flex-1 min-h-0 lg:flex lg:gap-3">
            <div
              className="hidden lg:block shrink-0 overflow-y-auto sidebar-no-scrollbar"
              style={{ width: "260px" }}
            >
              <aside
                className="hidden lg:block"
                style={{ background: "var(--v2-bg-0)" }}
              >
                <div className="flex items-center justify-between px-4 h-[44px]">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      style={{ color: "var(--v2-t-3)" }}
                    >
                      <path d="M234.29,47.91A20,20,0,0,0,216,36H40A20,20,0,0,0,25.2,69.45l.12.14L92,140.75V216a20,20,0,0,0,31.1,16.64l32-21.33A20,20,0,0,0,164,194.66V140.75l66.67-71.16.12-.14A20,20,0,0,0,234.29,47.91Zm-91,79.89A12,12,0,0,0,140,136v56.52l-24,16V136a12,12,0,0,0-3.25-8.2L49.23,60H206.77Z"></path>
                    </svg>
                    <span
                      className="text-[13px] font-semibold"
                      style={{ color: "var(--v2-t-2)" }}
                    >
                      Filters
                    </span>
                  </div>
                  <button
                    className="text-[11px] font-medium transition-colors hover:text-[var(--v2-t-1)]"
                    style={{ color: "var(--v2-t-4)" }}
                    title="Collapse filters"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      style={{ transform: "rotate(90deg)" }}
                    >
                      <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
                    </svg>
                  </button>
                </div>
                <div style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
                  <button
                    className="flex items-center justify-between w-full px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.06em] transition-colors hover:bg-[var(--v2-bg-1)]"
                    style={{ color: "var(--v2-t-2)" }}
                  >
                    Tier
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      style={{
                        color: "var(--v2-t-4)",
                        transform: "rotate(0)",
                        transition: "transform 150ms",
                      }}
                    >
                      <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
                    </svg>
                  </button>
                  <div className="px-4 pb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {TIERS.map((k) => (
                        <Chip key={k} on={tier === k} onClick={() => setTier(k)}>
                          {k === "all" ? "All" : k}<span className="ml-1 opacity-60">{k === "all" ? all.length : all.filter((r) => r.tier === k).length}</span>
                        </Chip>
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
                  <button
                    className="flex items-center justify-between w-full px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.06em] transition-colors hover:bg-[var(--v2-bg-1)]"
                    style={{ color: "var(--v2-t-2)" }}
                  >
                    Win rate
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      style={{
                        color: "var(--v2-t-4)",
                        transform: "rotate(0)",
                        transition: "transform 150ms",
                      }}
                    >
                      <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
                    </svg>
                  </button>
                  <div className="px-4 pb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {WINS.map((n) => (
                        <Chip key={n} on={minWin === n} onClick={() => setMinWin(n)}>
                          {n === 0 ? "Any" : ">" + n + "%"}
                        </Chip>
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
                  <button
                    className="flex items-center justify-between w-full px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.06em] transition-colors hover:bg-[var(--v2-bg-1)]"
                    style={{ color: "var(--v2-t-2)" }}
                  >
                    Min trades ({windowHours}h)
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      style={{
                        color: "var(--v2-t-4)",
                        transform: "rotate(0)",
                        transition: "transform 150ms",
                      }}
                    >
                      <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
                    </svg>
                  </button>
                  <div className="px-4 pb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {MINTR.map((n) => (
                        <Chip key={n} on={minTr === n} onClick={() => setMinTr(n)}>
                          {n === 0 ? "Any" : n + "+"}
                        </Chip>
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
                  <button
                    className="flex items-center justify-between w-full px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.06em] transition-colors hover:bg-[var(--v2-bg-1)]"
                    style={{ color: "var(--v2-t-2)" }}
                  >
                    Last active
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      style={{
                        color: "var(--v2-t-4)",
                        transform: "rotate(-90deg)",
                        transition: "transform 150ms",
                      }}
                    >
                      <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
                    </svg>
                  </button>
                </div>
              </aside>
            </div>
            <div className="flex-1 min-w-0 flex flex-col px-3 lg:px-0">
              <div className="lg:hidden flex items-center gap-4 mb-4 overflow-x-auto pb-1 flex-nowrap">
                <div className="flex gap-1.5 shrink-0">
                  {TIERS.map((k) => (
                    <Chip key={k} on={tier === k} onClick={() => setTier(k)} big>
                      {k === "all" ? "All" : k}
                    </Chip>
                  ))}
                </div>
              </div>
              <div className="shrink-0">
                <div className="flex items-center gap-2 h-[44px] overflow-x-auto">
                  <button
                    className="hidden lg:flex items-center justify-center shrink-0 w-8 h-8 rounded-sm transition-colors hover:bg-[var(--v2-bg-2)] mr-2"
                    style={{
                      color: "var(--v2-t-3)",
                      border: "1px solid var(--v2-line-1)",
                    }}
                    title="Collapse filters"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      style={{
                        transform: "rotate(90deg)",
                        transition: "transform 150ms",
                      }}
                    >
                      <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
                    </svg>
                  </button>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setSort("top")}
                      aria-pressed={sort === "top"}
                      className="flex items-center gap-1.5 text-[12px] font-semibold px-3 py-1.5 rounded-sm transition-colors whitespace-nowrap"
                      style={sort === "top" ? SORT_ON : SORT_OFF}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M232,64H208V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V64H24A16,16,0,0,0,8,80V96a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,191.61V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.58c31.94-3.23,58.44-25.64,68.08-55.58H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,120A24,24,0,0,1,24,96V80H48v32q0,4,.39,8ZM232,96a24,24,0,0,1-24,24h-.5a81.81,81.81,0,0,0,.5-8.9V80h24Z"></path>
                      </svg>{" "}
                      Top
                    </button>
                    <button
                      onClick={() => setSort("trending")}
                      aria-pressed={sort === "trending"}
                      className="flex items-center gap-1.5 text-[12px] font-semibold px-3 py-1.5 rounded-sm transition-colors whitespace-nowrap"
                      style={sort === "trending" ? SORT_ON : SORT_OFF}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M244,56v64a12,12,0,0,1-24,0V85l-75.51,75.52a12,12,0,0,1-17,0L96,129,32.49,192.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0L136,135l67-67H168a12,12,0,0,1,0-24h64A12,12,0,0,1,244,56Z"></path>
                      </svg>{" "}
                      Trending
                    </button>
                  </div>
                  <div className="flex-1"></div>
                  <div className="flex items-center shrink-0 ml-1 gap-0.5">
                    <button
                      onClick={() => setCompact(false)}
                      aria-pressed={!compact}
                      className="p-1.5 rounded-sm transition-colors"
                      style={{
                        color: !compact ? "var(--v2-t-1)" : "var(--v2-t-4)",
                        background: !compact ? "var(--v2-bg-2)" : "transparent",
                      }}
                      title="Default view"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M208,136H48a20,20,0,0,0-20,20v36a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V156A20,20,0,0,0,208,136Zm-4,52H52V160H204Zm4-144H48A20,20,0,0,0,28,64v36a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V64A20,20,0,0,0,208,44Zm-4,52H52V68H204Z"></path>
                      </svg>
                    </button>
                    <button
                      onClick={() => setCompact(true)}
                      aria-pressed={compact}
                      className="p-1.5 rounded-sm transition-colors"
                      style={{
                        color: compact ? "var(--v2-t-1)" : "var(--v2-t-4)",
                        background: compact ? "var(--v2-bg-2)" : "transparent",
                      }}
                      title="Compact view"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M76,64A12,12,0,0,1,88,52H216a12,12,0,0,1,0,24H88A12,12,0,0,1,76,64Zm140,52H88a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm0,64H88a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24ZM44,112a16,16,0,1,0,16,16A16,16,0,0,0,44,112Zm0-64A16,16,0,1,0,60,64,16,16,0,0,0,44,48Zm0,128a16,16,0,1,0,16,16A16,16,0,0,0,44,176Z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1 min-h-0 overflow-y-auto">
                <div className="-mx-3 sm:mx-0">
                  <div className="overflow-x-auto">
                    <table className={`w-full text-[14px] canvas-hover-rows ${compact ? "cv-compact" : ""}`}>
                      <thead
                        className="sticky top-0 z-10"
                        style={{
                          background: "var(--v2-bg-0)",
                          boxShadow: "0 1px 0 var(--v2-line-1)",
                        }}
                      >
                        <tr
                          className="text-left"
                          style={{ color: "var(--v2-t-4)" }}
                        >
                          <th
                            className="font-normal text-[12px] uppercase tracking-[0.08em] canvas-th w-8"
                            style={{ textAlign: "left" }}
                          >
                            {" "}
                          </th>
                          <th
                            className="font-normal text-[12px] uppercase tracking-[0.08em] canvas-th"
                            style={{ textAlign: "left" }}
                          >
                            Wallet
                          </th>
                          <th
                            className="font-normal text-[12px] uppercase tracking-[0.08em] canvas-th"
                            style={{ textAlign: "right" }}
                          >
                            <button
                              className="transition-colors hover:text-[var(--v2-t-1)] cursor-pointer select-none"
                              style={{ color: "inherit" }}
                            >
                              Win rate
                            </button>
                          </th>
                          <th
                            className="font-normal text-[12px] uppercase tracking-[0.08em] canvas-th"
                            style={{ textAlign: "right" }}
                          >
                            <button
                              className="transition-colors hover:text-[var(--v2-t-1)] cursor-pointer select-none"
                              style={{ color: "inherit" }}
                            >
                              PnL
                            </button>
                          </th>
                          <th
                            className="font-normal text-[12px] uppercase tracking-[0.08em] canvas-th hidden md:table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <button
                              className="transition-colors hover:text-[var(--v2-t-1)] cursor-pointer select-none"
                              style={{ color: "inherit" }}
                            >
                              Trades
                            </button>
                          </th>
                          <th
                            className="font-normal text-[12px] uppercase tracking-[0.08em] canvas-th hidden lg:table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <button
                              className="transition-colors hover:text-[var(--v2-t-1)] cursor-pointer select-none"
                              style={{ color: "inherit" }}
                            >
                              Tokens
                            </button>
                          </th>
                          <th
                            className="font-normal text-[12px] uppercase tracking-[0.08em] canvas-th hidden lg:table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <button
                              className="transition-colors hover:text-[var(--v2-t-1)] cursor-pointer select-none"
                              style={{ color: "inherit" }}
                            >
                              Avg hold
                            </button>
                          </th>
                          <th
                            className="font-normal text-[12px] uppercase tracking-[0.08em] canvas-th hidden sm:table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <button
                              className="transition-colors hover:text-[var(--v2-t-1)] cursor-pointer select-none"
                              style={{ color: "inherit" }}
                            >
                              Last active
                            </button>
                          </th>
                          <th
                            className="font-normal text-[12px] uppercase tracking-[0.08em] canvas-th"
                            style={{ textAlign: "right" }}
                          >
                            {" "}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {shown.map((r) => (
                          <WalletRow key={r.address} w={r} now={now} />
                        ))}
                      </tbody>
                    </table>
                    {shown.length === 0 && (
                      <p className="px-6 py-14 text-center text-[13px] mx-auto max-w-[460px] leading-relaxed" style={{ color: "var(--v2-t-3)" }}>
                        {loading
                          ? "Loading wallets…"
                          : error
                            ? "Could not load wallets. Try again shortly."
                            : all.length > 0
                              ? "No wallets match these filters."
                              : "No smart wallets yet. Wallets show up once the indexer sees profitable trades."}
                      </p>
                    )}
                    <p className="px-3 py-4 text-[12px] leading-relaxed" style={{ color: "var(--v2-t-4)" }}>
                      Estimates from trades Corvid has indexed in the last {windowHours} hours (ETH-paired pools only). This is not a full wallet history: positions opened before the window are not counted.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ) : tab === "live" ? (
            <AlphaLive />
          ) : (
            <AlphaMyLists />
          )}
        </div>
      </div>
    </>
  );
}
