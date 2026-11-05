"use client";
import { useEffect, useMemo, useState } from "react";
import { Wallet } from "@phosphor-icons/react";
import { SignInGate, useSigned } from "@/components/auth/signed";
import { apiGet } from "@/lib/api";
import { readHoldings } from "@/lib/holdings";
import { shortAddress, useWallet } from "@/lib/wallet";

// Portfolio: saldo wallet terhubung dibaca on-chain (lib/holdings.ts), harga dari API Corvid. Tanpa PnL (belum ada riwayat biaya).
const usd = (n: number) => "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const qty = (n: number) => n.toLocaleString("en-US", { maximumFractionDigits: n >= 1000 ? 0 : 4 });
type Row = { key: string; mint: string | null; symbol: string; amount: number; valueUsd: number | null };

export function ApplicationPortfolioContent() {
  const signed = useSigned();
  const w = useWallet();
  const [rows, setRows] = useState<Row[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [dir, setDir] = useState<1 | -1>(-1);

  useEffect(() => {
    if (!signed || !w.address) {
      setRows(null);
      return;
    }
    let alive = true;
    setError(null);
    (async () => {
      const [list, px] = await Promise.all([
        apiGet<{ tokens: { mint: string; symbol: string | null; price: number | null }[] }>("/api/tokens/trending?limit=200"),
        apiGet<{ usd: number }>("/api/prices/native"),
      ]);
      const { eth, holdings } = await readHoldings(w.address!, list.tokens);
      if (!alive) return;
      setRows([
        { key: "eth", mint: null, symbol: "ETH", amount: eth, valueUsd: eth * px.usd },
        ...holdings.map((h) => ({
          key: h.mint,
          mint: h.mint,
          symbol: h.symbol ?? shortAddress(h.mint),
          amount: h.amount,
          valueUsd: h.priceUsd === null ? null : h.priceUsd * h.amount,
        })),
      ]);
    })().catch(() => alive && setError("Could not read balances. Try again shortly."));
    return () => {
      alive = false;
    };
  }, [signed, w.address]);

  const sorted = useMemo(() => [...(rows ?? [])].sort((a, b) => ((a.valueUsd ?? -1) - (b.valueUsd ?? -1)) * dir), [rows, dir]);
  const total = (rows ?? []).reduce((n, r) => n + (r.valueUsd ?? 0), 0);

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
          Sign in with your wallet to see its balances in one place.
        </p>
        <button data-auth-open="signin" className="btn-v2 btn-v2-primary">
          Sign in
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-[1000px] mx-auto">
      <h1 className="text-[22px] font-semibold leading-tight mb-1" style={{ color: "var(--v2-t-1)" }}>
        Portfolio
      </h1>
      <p className="text-[13px] mb-5" style={{ color: "var(--v2-t-3)" }}>
        {w.address
          ? `Balances for ${shortAddress(w.address)} on Robinhood Chain mainnet. Shows ETH and tokens Corvid tracks; PnL needs trade history and is not shown.`
          : "Connect your wallet to see balances."}
      </p>
      {!w.address ? (
        <p className="text-[13px]" style={{ color: "var(--v2-t-4)" }}>
          Use the wallet button in the header to connect.
        </p>
      ) : error ? (
        <p className="text-[13px]" style={{ color: "var(--v2-neg)" }}>
          {error}
        </p>
      ) : rows === null ? (
        <p className="text-[13px]" style={{ color: "var(--v2-t-4)" }}>
          Loading balances…
        </p>
      ) : (
        <>
          <div className="rounded-2xl p-4 mb-5 max-w-xs" style={{ background: "var(--v2-bg-1)", border: "1px solid var(--v2-line-1)" }}>
            <div className="eyebrow mb-1">Total value</div>
            <div className="num text-[22px] font-semibold" style={{ color: "var(--v2-t-1)" }}>
              {usd(total)}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden" style={{ background: "var(--v2-bg-1)", border: "1px solid var(--v2-line-1)" }}>
            <div className="grid grid-cols-[1fr_auto] gap-3 px-4 h-10 items-center eyebrow" style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
              <span>Asset</span>
              <button onClick={() => setDir((d) => (d === 1 ? -1 : 1))} className="text-right hover:text-[var(--v2-t-1)]">
                Value {dir === -1 ? "↓" : "↑"}
              </button>
            </div>
            {sorted.map((r, i) => {
              const inner = (
                <>
                  <span className="min-w-0">
                    <span className="block text-[14px] font-semibold" style={{ color: "var(--v2-t-1)" }}>
                      {r.symbol}
                    </span>
                    <span className="block num text-[12px]" style={{ color: "var(--v2-t-4)" }}>
                      {qty(r.amount)}
                    </span>
                  </span>
                  <span className="text-right num text-[13px]" style={{ color: "var(--v2-t-1)" }}>
                    {r.valueUsd === null ? "—" : usd(r.valueUsd)}
                  </span>
                </>
              );
              const cls = "grid grid-cols-[1fr_auto] gap-3 px-4 py-3 items-center";
              const style = { borderTop: i ? "1px solid var(--v2-line-1)" : undefined };
              return r.mint ? (
                <a key={r.key} href={`/application/tokens/${r.mint}?chain=robinhood`} className={`${cls} hover:bg-[var(--v2-bg-2)] transition-colors`} style={style}>
                  {inner}
                </a>
              ) : (
                <div key={r.key} className={cls} style={style}>
                  {inner}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export function ApplicationPortfolioContentExtra() {
  return <SignInGate title="Your Portfolio — one step away" sub="Sign in to see balances, agents and PnL across your wallet" />;
}
