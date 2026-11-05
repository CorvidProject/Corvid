"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowSquareOut, ArrowsClockwise, Check, Copy } from "@phosphor-icons/react";
import { explorerAddress, getChain } from "@corvid/shared/chains";
import { SignInGate, useSigned } from "@/components/auth/signed";
import { apiGet } from "@/lib/api";
import { readHoldings } from "@/lib/holdings";
import { appChain, shortAddress, useWallet } from "@/lib/wallet";

// Portfolio: saldo wallet terhubung dibaca on-chain (lib/holdings.ts), harga dari API Corvid. Tanpa PnL (belum ada riwayat biaya).
// Gaya memakai kelas `pf-*` di app/corvid.css: CSS utilitas situs bersifat statis, kelas Tailwind baru tidak tersedia.
type Tok = { mint: string; symbol: string | null; name: string | null; image: string | null; price: number | null; change24h: number | null };
type Row = { key: string; mint: string | null; symbol: string; name: string; image: string | null; amount: number; priceUsd: number | null; change24h: number | null; valueUsd: number | null };
type Sort = "value" | "change";

const usd = (n: number) => "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const usdPrice = (n: number) => (n >= 1 ? usd(n) : "$" + n.toPrecision(3));
const qty = (n: number) => n.toLocaleString("en-US", { maximumFractionDigits: n >= 1000 ? 0 : 4 });
const pct = (n: number) => `${n > 0 ? "+" : n < 0 ? "-" : ""}${Math.abs(n).toFixed(2)}%`;
const toneCls = (n: number | null) => (n === null || n === 0 ? "pf-flat" : n > 0 ? "pf-pos" : "pf-neg");
// Opasitas aksen untuk batang alokasi (satu hue, hanya beda tingkat terang).
const SHADES = [1, 0.75, 0.55, 0.4, 0.28];

function Avatar({ row }: { row: Row }) {
  const [bad, setBad] = useState(false);
  if (row.image && !bad) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={row.image} alt="" onError={() => setBad(true)} className="pf-av" />;
  }
  return <span className="pf-av">{row.symbol.slice(0, 1).toUpperCase()}</span>;
}

function Skeleton() {
  return (
    <div aria-hidden>
      <div className="pf-skel" style={{ height: 160, marginBottom: 16 }} />
      <div className="pf-skel" style={{ height: 280 }} />
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
  // Testnet hanya ditawarkan bila app berjalan di testnet. Saat NEXT_PUBLIC_CHAIN_ENV=mainnet, pilihan ini tidak ada sama sekali.
  const testnetAllowed = appChain().env !== "mainnet";
  const [net, setNet] = useState<"mainnet" | "testnet">("mainnet");
  const env = testnetAllowed ? net : "mainnet";
  const explorerChain = getChain(env);

  useEffect(() => {
    if (!signed || !address) {
      setRows(null);
      return;
    }
    let alive = true;
    setError(null);
    setLoading(true);
    (async () => {
      if (env === "testnet") {
        const { eth } = await readHoldings(address, [], "testnet");
        if (!alive) return;
        // ETH testnet tidak bernilai: tanpa harga dan tanpa nilai USD.
        setRows([{ key: "eth", mint: null, symbol: "ETH", name: "Ether (testnet)", image: null, amount: eth, priceUsd: null, change24h: null, valueUsd: null }]);
        return;
      }
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
  }, [signed, address, tick, env]);

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
      <div className="pf">
        <div className="pf-state" style={{ maxWidth: 440, margin: "48px auto" }}>
          <p>Your portfolio lives here</p>
          <small>Sign in with your wallet to see its balances in one place.</small>
          <div style={{ marginTop: 20 }}>
            <button data-auth-open="signin" className="btn-v2 btn-v2-primary">
              Sign in
            </button>
          </div>
        </div>
      </div>
    );
  }

  const sortBtn = (k: Sort, label: string) => (
    <button onClick={() => setSort(k)} aria-pressed={sort === k}>
      {label}
    </button>
  );
  const share = (v: number | null) => (((v ?? 0) / total) * 100).toFixed(1);

  return (
    <div className="pf">
      <div className="pf-top">
        <div>
          <h1>Portfolio</h1>
          <p>ETH and the tokens Corvid tracks, read on-chain from your wallet</p>
        </div>
        {address && (
          <div className="pf-tools">
            {testnetAllowed && (
              <span className="pf-sorts" role="group" aria-label="Network">
                <button onClick={() => setNet("mainnet")} aria-pressed={env === "mainnet"}>
                  Mainnet
                </button>
                <button onClick={() => setNet("testnet")} aria-pressed={env === "testnet"}>
                  Testnet
                </button>
              </span>
            )}
            <span className="pf-chip num">
              {shortAddress(address)}
              <button onClick={copy} aria-label="Copy address" className="pf-icon">
                {copied ? <Check size={13} /> : <Copy size={13} />}
              </button>
              <a href={explorerAddress(explorerChain, address)} target="_blank" rel="noopener noreferrer" aria-label="Open in explorer" className="pf-icon">
                <ArrowSquareOut size={13} />
              </a>
            </span>
            <button onClick={() => setTick((t) => t + 1)} disabled={loading} aria-label="Refresh balances" className="pf-round">
              <ArrowsClockwise size={14} className={loading ? "animate-spin" : ""} />
            </button>
          </div>
        )}
      </div>

      {!address ? (
        <div className="pf-state">
          <p>Connect your wallet</p>
          <small>Use the wallet button in the header to see your balances.</small>
        </div>
      ) : error ? (
        <div className="pf-state">
          <p className="pf-neg">{error}</p>
          <div style={{ marginTop: 12 }}>
            <button className="btn-v2" onClick={() => setTick((t) => t + 1)}>
              Try again
            </button>
          </div>
        </div>
      ) : rows === null ? (
        <Skeleton />
      ) : (
        <>
          <div className="pf-hero">
            <div className="pf-label">Total value</div>
            <div className="pf-total num">{env === "testnet" ? `${qty(rows[0].amount)} ETH` : usd(total)}</div>
            <div className="pf-sub num">
              {env === "testnet" ? "Testnet ETH has no market value" : `${rows.length - 1} token${rows.length - 1 === 1 ? "" : "s"} · ${qty(rows[0].amount)} ETH`}
            </div>
            {total > 0 && (
              <>
                <div className="pf-bar" role="img" aria-label="Allocation by value">
                  {shown.map((r, i) => (
                    <span key={r.key} title={`${r.symbol} ${share(r.valueUsd)}%`} style={{ width: `${share(r.valueUsd)}%`, opacity: SHADES[i] }} />
                  ))}
                  {otherValue > 0 && <span title="Other" style={{ width: `${share(otherValue)}%`, opacity: 0.18 }} />}
                </div>
                <div className="pf-legend">
                  {shown.map((r, i) => (
                    <span key={r.key}>
                      <i style={{ opacity: SHADES[i] }} />
                      {r.symbol} <b className="num">{share(r.valueUsd)}%</b>
                    </span>
                  ))}
                  {otherValue > 0 && (
                    <span>
                      <i style={{ opacity: 0.18 }} />
                      Other <b className="num">{share(otherValue)}%</b>
                    </span>
                  )}
                </div>
              </>
            )}
          </div>

          <div className="pf-panel">
            <div className="pf-ph">
              <strong>Assets</strong>
              <span className="pf-sorts">
                {sortBtn("value", "Value")}
                {sortBtn("change", "24h")}
              </span>
            </div>
            <div className="pf-cols">
              <span>Asset</span>
              <span className="pf-hide pf-r">Price</span>
              <span className="pf-hide pf-r">24h</span>
              <span className="pf-r">Value</span>
            </div>
            {sorted.map((r) => {
              const inner = (
                <>
                  <span className="pf-asset">
                    <Avatar row={r} />
                    <span style={{ minWidth: 0 }}>
                      <span className="pf-sym">{r.symbol}</span>
                      <span className="pf-amt num">
                        {qty(r.amount)}
                        {r.name ? ` · ${r.name}` : ""}
                      </span>
                    </span>
                  </span>
                  <span className="pf-hide pf-r num" style={{ fontSize: 13, color: "var(--v2-t-2)" }}>
                    {r.priceUsd === null ? "—" : usdPrice(r.priceUsd)}
                  </span>
                  <span className={`pf-hide pf-r num ${toneCls(r.change24h)}`} style={{ fontSize: 13 }}>
                    {r.change24h === null ? "—" : pct(r.change24h)}
                  </span>
                  <span className="pf-r">
                    <span className="pf-val num">{r.valueUsd === null ? "—" : usd(r.valueUsd)}</span>
                    {r.change24h !== null && (
                      <span className={`pf-mob num ${toneCls(r.change24h)}`} style={{ display: "block", fontSize: 12 }}>
                        {pct(r.change24h)}
                      </span>
                    )}
                  </span>
                </>
              );
              return r.mint ? (
                <a key={r.key} href={`/application/tokens/${r.mint}?chain=robinhood`} className="pf-row">
                  {inner}
                </a>
              ) : (
                <div key={r.key} className="pf-row">
                  {inner}
                </div>
              );
            })}
            {sorted.length === 1 && env === "mainnet" && <p className="pf-empty">No tracked tokens in this wallet yet.</p>}
          </div>
          <p className="pf-note">
            {env === "testnet"
              ? "Robinhood Chain testnet: only the ETH balance is shown. Tracked tokens and prices exist on mainnet."
              : "Balances from Robinhood Chain mainnet. Tokens Corvid does not track are not listed, and PnL needs trade history so it is not shown."}
          </p>
        </>
      )}
    </div>
  );
}

export function ApplicationPortfolioContentExtra() {
  return <SignInGate title="Your Portfolio — one step away" sub="Sign in to see balances, agents and PnL across your wallet" />;
}
