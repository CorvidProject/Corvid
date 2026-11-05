"use client";
import { useMemo, useState } from "react";
import { Wallet } from "@phosphor-icons/react";
import portfolio from "@/data/portfolio.json";
import { SignInGate, useSigned } from "@/components/auth/signed";

// Portfolio: saat masuk menampilkan fixture (/portfolio/aggregated); diganti API di Tahap 3.
type Key = "valueUsd" | "pnlUsd" | "pnlPct";
const usd = (n: number) => "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const sign = (n: number) => (n > 0 ? "+" : n < 0 ? "-" : "");
const col = (n: number) => (n > 0 ? "var(--v2-pos)" : n < 0 ? "var(--v2-neg)" : "var(--v2-t-3)");

export function ApplicationPortfolioContent() {
  const signed = useSigned();
  const [sort, setSort] = useState<Key>("valueUsd");
  const [dir, setDir] = useState<1 | -1>(-1);
  const rows = useMemo(() => [...portfolio.positions].sort((a, b) => (a[sort] - b[sort]) * dir), [sort, dir]);

  if (!signed) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center max-w-md mx-auto">
        <div className="flex h-16 w-16 items-center justify-center rounded-full mb-5" style={{ background: "var(--v2-bg-2)" }}>
          <Wallet size={28} style={{ color: "var(--v2-t-4)" }} />
        </div>
        <h3 className="text-lg font-semibold mb-1" style={{ color: "var(--v2-t-2)" }}>
          Your portfolio lives here
        </h3>
        <p className="text-[13px] mb-5" style={{ color: "var(--v2-t-4)" }}>
          Sign in and a wallet is set up for you: balances, positions and every trade in one place.
        </p>
        <button data-auth-open="signin" className="btn-v2 btn-v2-primary">
          Sign in
        </button>
      </div>
    );
  }

  const head = (k: Key, label: string) => (
    <button
      onClick={() => {
        if (sort === k) setDir((d) => (d === 1 ? -1 : 1));
        else {
          setSort(k);
          setDir(-1);
        }
      }}
      className="text-right hover:text-[var(--v2-t-1)]"
      style={{ color: sort === k ? "var(--v2-t-1)" : undefined }}
    >
      {label}
      {sort === k ? (dir === -1 ? " ↓" : " ↑") : ""}
    </button>
  );

  return (
    <div className="max-w-[1000px] mx-auto">
      <h1 className="text-[22px] font-semibold leading-tight mb-1" style={{ color: "var(--v2-t-1)" }}>
        Portfolio
      </h1>
      <p className="text-[13px] mb-5" style={{ color: "var(--v2-t-3)" }}>
        Balances and positions across your wallet · sample data
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
        {[
          { l: "Total value", v: usd(portfolio.totalUsd), c: "var(--v2-t-1)" },
          { l: "Unrealized PnL", v: `${sign(portfolio.pnlUsd)}${usd(Math.abs(portfolio.pnlUsd))}`, c: col(portfolio.pnlUsd) },
          { l: "PnL %", v: `${sign(portfolio.pnlPct)}${Math.abs(portfolio.pnlPct).toFixed(2)}%`, c: col(portfolio.pnlPct) },
        ].map((s) => (
          <div key={s.l} className="rounded-2xl p-4" style={{ background: "var(--v2-bg-1)", border: "1px solid var(--v2-line-1)" }}>
            <div className="eyebrow mb-1">{s.l}</div>
            <div className="num text-[22px] font-semibold" style={{ color: s.c }}>
              {s.v}
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-2xl overflow-hidden" style={{ background: "var(--v2-bg-1)", border: "1px solid var(--v2-line-1)" }}>
        <div className="grid grid-cols-[1fr_auto_auto] sm:grid-cols-[1fr_110px_110px_90px] gap-3 px-4 h-10 items-center eyebrow" style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
          <span>Position</span>
          {head("valueUsd", "Value")}
          {head("pnlUsd", "PnL")}
          <span className="hidden sm:block text-right">
            {/* kolom persen */}
            {head("pnlPct", "%")}
          </span>
        </div>
        {rows.map((p, i) => (
          <a
            key={p.mint}
            href={`/application/tokens/${p.mint}?chain=robinhood`}
            className="grid grid-cols-[1fr_auto_auto] sm:grid-cols-[1fr_110px_110px_90px] gap-3 px-4 py-3 items-center hover:bg-[var(--v2-bg-2)] transition-colors"
            style={{ borderTop: i ? "1px solid var(--v2-line-1)" : undefined }}
          >
            <span className="min-w-0">
              <span className="block text-[14px] font-semibold" style={{ color: "var(--v2-t-1)" }}>
                {p.symbol}
              </span>
              <span className="block num text-[12px]" style={{ color: "var(--v2-t-4)" }}>
                {p.amount.toLocaleString("en-US")} tokens
              </span>
            </span>
            <span className="text-right num text-[13px]" style={{ color: "var(--v2-t-1)" }}>
              {usd(p.valueUsd)}
            </span>
            <span className="text-right num text-[13px]" style={{ color: col(p.pnlUsd) }}>
              {sign(p.pnlUsd)}
              {usd(Math.abs(p.pnlUsd))}
            </span>
            <span className="hidden sm:block text-right num text-[13px]" style={{ color: col(p.pnlPct) }}>
              {sign(p.pnlPct)}
              {Math.abs(p.pnlPct)}%
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export function ApplicationPortfolioContentExtra() {
  return <SignInGate title="Your Portfolio — one step away" sub="Sign in to see balances, agents and PnL across your wallet" />;
}
