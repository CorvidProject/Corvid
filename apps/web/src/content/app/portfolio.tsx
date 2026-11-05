"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowSquareOut, ArrowsClockwise, Copy, Check, Wallet } from "@phosphor-icons/react";
import { explorerAddress, getChain } from "@corvid/shared/chains";
import { SignInGate, useSigned } from "@/components/auth/signed";
import { apiGet } from "@/lib/api";
import { readHoldings } from "@/lib/holdings";
import { shortAddress, useWallet } from "@/lib/wallet";

// Portfolio: saldo wallet terhubung dibaca on-chain (lib/holdings.ts), harga dari API Corvid. Tanpa PnL (belum ada riwayat biaya).
type Tok = { mint: string; symbol: string | null; name: string | null; image: string | null; price: number | null; change24h: number | null };
type Row = { key: string; mint: string | null; symbol: string; name: string; image: string | null; amount: number; priceUsd: number | null; change24h: number | null; valueUsd: number | null };
type Sort = "value" | "change";

const MAINNET = getChain("mainnet");
const usd = (n: number) => "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const usdPrice = (n: number) => (n >= 1 ? usd(n) : "$" + n.toPrecision(3));
const qty = (n: number) => n.toLocaleString("en-US", { maximumFractionDigits: n >= 1000 ? 0 : 4 });
const pct = (n: number) => `${n > 0 ? "+" : n < 0 ? "-" : ""}${Math.abs(n).toFixed(2)}%`;
const tone = (n: number | null) => (n === null || n === 0 ? "var(--v2-t-3)" : n > 0 ? "var(--v2-pos)" : "var(--v2-neg)");
// Skala aksen untuk batang alokasi (satu hue, hanya beda tingkat terang).
const SHADES = [1, 0.75, 0.55, 0.4, 0.28];

const card = { background: "var(--v2-bg-1)", border: "1px solid var(--v2-line-1)" } as const;

function Avatar({ row }: { row: Row }) {
  const [bad, setBad] = useState(false);
  const base = { width: 36, height: 36, background: "var(--v2-bg-3)", color: "var(--v2-t-2)" };
  if (row.image && !bad) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={row.image} alt="" onError={() => setBad(true)} className="rounded-full object-cover shrink-0" style={base} />;
  }
  return (
    <span className="rounded-full shrink-0 flex items-center justify-center text-[13px] font-semibold" style={base}>
      {row.symbol.slice(0, 1).toUpperCase()}
    </span>
  );
}

function Skeleton() {
  return (
    <div className="animate-pulse space-y-3" aria-hidden>
      <div className="rounded-2xl h-40" style={card} />
      <div className="rounded-2xl h-72" style={card} />
    </div>
  );
}

export function ApplicationPortfolioContent() {
  const signed = useSigned();
  const w = useWallet();
  const [rows, setRows] = useState<Row[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState<Sort>("value");
  const [copied, setCopied] = useState(false);
  const [tick, setTick] = useState(0);
  const address = w.address;

  useEffect(() => {
    if (!signed || !address) {
      setRows(null);
      return;
    }
    let alive = true;
    setError(null);
    setLoading(true);
    (async () => {
      const [list, px] = await Promise.all([apiGet<{ tokens: Tok[] }>("/api/tokens/trending?limit=200"), apiGet<{ usd: number }>("/api/prices/native")]);
      const { eth, holdings } = await readHoldings(address, list.tokens);
      if (!alive) return;
      setRows([
        { key: "eth", mint: null, symbol: "ETH", name: "Ether", image: null, amount: eth, priceUsd: px.usd, change24h: null, valueUsd: eth * px.usd },
        ...holdings.map(({ token: t, amount }) => ({
          key: t.mint,
          mint: t.mint,
          symbol: t.symbol ?? shortAddress(t.mint),
          name: t.name ?? "",
          image: t.image,
          amount,
          priceUsd: t.price,
          change24h: t.change24h,
          valueUsd: t.price === null ? null : t.price * amount,
        })),
      ]);
    })()
      .catch(() => alive && setError("Could not read balances. Try again shortly."))
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, [signed, address, tick]);

  const total = (rows ?? []).reduce((n, r) => n + (r.valueUsd ?? 0), 0);
  const sorted = useMemo(
    () => [...(rows ?? [])].sort((a, b) => (sort === "value" ? (b.valueUsd ?? -1) - (a.valueUsd ?? -1) : (b.change24h ?? -Infinity) - (a.change24h ?? -Infinity))),
    [rows, sort],
  );
  const top = useMemo(() => [...(rows ?? [])].filter((r) => (r.valueUsd ?? 0) > 0).sort((a, b) => (b.valueUsd ?? 0) - (a.valueUsd ?? 0)), [rows]);
  const shown = top.slice(0, SHADES.length);
  const otherValue = top.slice(SHADES.length).reduce((n, r) => n + (r.valueUsd ?? 0), 0);

  const copy = useCallback(() => {
    if (!address) return;
    void navigator.clipboard?.writeText(address).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }, [address]);

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

  const sortBtn = (k: Sort, label: string) => (
    <button
      onClick={() => setSort(k)}
      aria-pressed={sort === k}
      className="text-[12px] px-2.5 h-7 rounded-full transition-colors"
      style={{
        background: sort === k ? "var(--v2-bg-3)" : "transparent",
        color: sort === k ? "var(--v2-t-1)" : "var(--v2-t-4)",
        border: `1px solid ${sort === k ? "var(--v2-line-2)" : "var(--v2-line-1)"}`,
      }}
    >
      {label}
    </button>
  );

  return (
    <div className="max-w-[1000px] mx-auto">
      <div className="flex items-start gap-3 mb-5 flex-wrap">
        <div className="min-w-0">
          <h1 className="text-[22px] font-semibold leading-tight" style={{ color: "var(--v2-t-1)" }}>
            Portfolio
          </h1>
          <p className="text-[13px]" style={{ color: "var(--v2-t-3)" }}>
            ETH and the tokens Corvid tracks, read on-chain from your wallet
          </p>
        </div>
        {address && (
          <div className="ml-auto flex items-center gap-2">
            <span className="flex items-center gap-1.5 h-8 pl-3 pr-1.5 rounded-full num text-[12px]" style={{ ...card, color: "var(--v2-t-2)" }}>
              {shortAddress(address)}
              <button onClick={copy} aria-label="Copy address" className="h-6 w-6 rounded-full flex items-center justify-center hover:bg-[var(--v2-bg-3)]" style={{ color: "var(--v2-t-3)" }}>
                {copied ? <Check size={13} /> : <Copy size={13} />}
              </button>
              <a href={explorerAddress(MAINNET, address)} target="_blank" rel="noopener noreferrer" aria-label="Open in explorer" className="h-6 w-6 rounded-full flex items-center justify-center hover:bg-[var(--v2-bg-3)]" style={{ color: "var(--v2-t-3)" }}>
                <ArrowSquareOut size={13} />
              </a>
            </span>
            <button onClick={() => setTick((t) => t + 1)} disabled={loading} aria-label="Refresh balances" className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-[var(--v2-bg-2)] disabled:opacity-50" style={{ ...card, color: "var(--v2-t-3)" }}>
              <ArrowsClockwise size={14} className={loading ? "animate-spin" : ""} />
            </button>
          </div>
        )}
      </div>

      {!address ? (
        <div className="rounded-2xl px-6 py-14 text-center" style={card}>
          <p className="text-[15px] font-medium mb-1" style={{ color: "var(--v2-t-1)" }}>
            Connect your wallet
          </p>
          <p className="text-[13px]" style={{ color: "var(--v2-t-3)" }}>
            Use the wallet button in the header to see your balances.
          </p>
        </div>
      ) : error ? (
        <div className="rounded-2xl px-6 py-14 text-center" style={card}>
          <p className="text-[14px] mb-3" style={{ color: "var(--v2-neg)" }}>
            {error}
          </p>
          <button className="btn-v2" onClick={() => setTick((t) => t + 1)}>
            Try again
          </button>
        </div>
      ) : rows === null ? (
        <Skeleton />
      ) : (
        <>
          <div className="rounded-2xl p-5 sm:p-6 mb-4" style={card}>
            <div className="eyebrow mb-1">Total value</div>
            <div className="num text-[34px] sm:text-[40px] font-semibold leading-none" style={{ color: "var(--v2-t-1)" }}>
              {usd(total)}
            </div>
            <div className="num text-[12px] mt-2" style={{ color: "var(--v2-t-4)" }}>
              {rows.length - 1} token{rows.length - 1 === 1 ? "" : "s"} · {qty(rows[0].amount)} ETH
            </div>
            {total > 0 && (
              <div className="mt-5">
                <div className="flex h-2 rounded-full overflow-hidden gap-px" style={{ background: "var(--v2-bg-3)" }} role="img" aria-label="Allocation by value">
                  {shown.map((r, i) => (
                    <span key={r.key} title={`${r.symbol} ${(((r.valueUsd ?? 0) / total) * 100).toFixed(1)}%`} style={{ width: `${((r.valueUsd ?? 0) / total) * 100}%`, background: "var(--v2-accent)", opacity: SHADES[i] }} />
                  ))}
                  {otherValue > 0 && <span title="Other" style={{ width: `${(otherValue / total) * 100}%`, background: "var(--v2-line-3, var(--v2-line-2))" }} />}
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
                  {shown.map((r, i) => (
                    <span key={r.key} className="flex items-center gap-1.5 text-[12px]" style={{ color: "var(--v2-t-3)" }}>
                      <span className="h-2 w-2 rounded-full" style={{ background: "var(--v2-accent)", opacity: SHADES[i] }} />
                      {r.symbol}
                      <span className="num" style={{ color: "var(--v2-t-2)" }}>
                        {(((r.valueUsd ?? 0) / total) * 100).toFixed(1)}%
                      </span>
                    </span>
                  ))}
                  {otherValue > 0 && (
                    <span className="flex items-center gap-1.5 text-[12px]" style={{ color: "var(--v2-t-3)" }}>
                      <span className="h-2 w-2 rounded-full" style={{ background: "var(--v2-line-2)" }} />
                      Other
                      <span className="num" style={{ color: "var(--v2-t-2)" }}>
                        {((otherValue / total) * 100).toFixed(1)}%
                      </span>
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="rounded-2xl overflow-hidden" style={card}>
            <div className="flex items-center gap-2 px-4 h-12" style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
              <span className="text-[14px] font-semibold" style={{ color: "var(--v2-t-1)" }}>
                Assets
              </span>
              <span className="ml-auto flex items-center gap-1.5">
                {sortBtn("value", "Value")}
                {sortBtn("change", "24h")}
              </span>
            </div>
            <div className="hidden sm:grid grid-cols-[1fr_120px_100px_130px] gap-3 px-4 h-9 items-center eyebrow" style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
              <span>Asset</span>
              <span className="text-right">Price</span>
              <span className="text-right">24h</span>
              <span className="text-right">Value</span>
            </div>
            {sorted.map((r, i) => {
              const inner = (
                <>
                  <span className="flex items-center gap-3 min-w-0">
                    <Avatar row={r} />
                    <span className="min-w-0">
                      <span className="block text-[14px] font-semibold truncate" style={{ color: "var(--v2-t-1)" }}>
                        {r.symbol}
                      </span>
                      <span className="block num text-[12px] truncate" style={{ color: "var(--v2-t-4)" }}>
                        {qty(r.amount)}
                        {r.name ? ` · ${r.name}` : ""}
                      </span>
                    </span>
                  </span>
                  <span className="hidden sm:block text-right num text-[13px]" style={{ color: "var(--v2-t-2)" }}>
                    {r.priceUsd === null ? "—" : usdPrice(r.priceUsd)}
                  </span>
                  <span className="hidden sm:block text-right num text-[13px]" style={{ color: tone(r.change24h) }}>
                    {r.change24h === null ? "—" : pct(r.change24h)}
                  </span>
                  <span className="text-right">
                    <span className="block num text-[14px] font-medium" style={{ color: "var(--v2-t-1)" }}>
                      {r.valueUsd === null ? "—" : usd(r.valueUsd)}
                    </span>
                    {r.change24h !== null && (
                      <span className="sm:hidden block num text-[12px]" style={{ color: tone(r.change24h) }}>
                        {pct(r.change24h)}
                      </span>
                    )}
                  </span>
                </>
              );
              const cls = "grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_120px_100px_130px] gap-3 px-4 py-3 items-center";
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
            {sorted.length === 1 && (
              <p className="px-4 py-6 text-center text-[13px]" style={{ color: "var(--v2-t-4)", borderTop: "1px solid var(--v2-line-1)" }}>
                No tracked tokens in this wallet yet.
              </p>
            )}
          </div>
          <p className="text-[12px] mt-3" style={{ color: "var(--v2-t-4)" }}>
            Balances from Robinhood Chain mainnet. Tokens Corvid does not track are not listed, and PnL needs trade history so it is not shown.
          </p>
        </>
      )}
    </div>
  );
}

export function ApplicationPortfolioContentExtra() {
  return <SignInGate title="Your Portfolio — one step away" sub="Sign in to see balances, agents and PnL across your wallet" />;
}
