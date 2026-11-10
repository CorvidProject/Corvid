"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowSquareOut, ArrowsClockwise, Check, Copy } from "@phosphor-icons/react";
import { explorerAddress, getChain } from "@corvid/shared/chains";
import { TokenAvatar } from "@/components/app/token-avatar";
import { SignInGate, useSigned } from "@/components/auth/signed";
import { apiGet } from "@/lib/api";
import { readHoldings } from "@/lib/holdings";
import { appChain, shortAddress, useWallet } from "@/lib/wallet";

// Portfolio: saldo wallet terhubung dibaca on-chain (lib/holdings.ts), harga dari API Corvid. Tanpa PnL (belum ada riwayat biaya).
// Gaya memakai kelas `pf-*` di app/corvid.css: CSS utilitas situs bersifat statis, kelas Tailwind baru tidak tersedia.
type Tok = { mint: string; symbol: string | null; name: string | null; image: string | null; price: number | null; change24h: number | null };
type Row = { key: string; mint: string | null; symbol: string; name: string; image: string | null; amount: number; priceUsd: number | null; change24h: number | null; valueUsd: number | null };
type Sort = "value" | "change";

const CANONICAL_TOKENS: Tok[] = [
  {
    mint: "0x5fc5360d0400a0fd4f2af552add042d716f1d168",
    symbol: "USDG",
    name: "Global Dollar",
    image: "/brand/usdg.png",
    price: 1.0,
    change24h: 0,
  },
  {
    mint: "0x0bd7d308f8e1639fab988df18a8011f41eacad73",
    symbol: "WETH",
    name: "Wrapped Ether",
    image: "/brand/eth.svg",
    price: null,
    change24h: null,
  },
  {
    mint: "0xc6911796042b15d7fa4f6cde69e245ddcd3d9c31",
    symbol: "VIRTUAL",
    name: "Virtuals Protocol",
    image: "/brand/virtual.png",
    price: null,
    change24h: null,
  },
  {
    mint: "0x39dbed3a2bd333467115de45665cc57f813c4571",
    symbol: "PONS",
    name: "Pons",
    image: "/brand/pons.png",
    price: null,
    change24h: null,
  },
  {
    mint: "0x020bfc650a365f8bb26819deaabf3e21291018b4",
    symbol: "CASHCAT",
    name: "Cash Cat",
    image: "/brand/cashcat.png",
    price: null,
    change24h: null,
  },
];

async function fetchBlockscoutTokens(owner: string): Promise<Tok[]> {
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 3500);
    const res = await fetch(`https://robinhoodchain.blockscout.com/api/v2/addresses/${owner}/token-balances`, {
      signal: ctrl.signal,
      headers: { Accept: "application/json" },
    });
    clearTimeout(timer);
    if (!res.ok) return [];
    const data = (await res.json()) as Array<{
      token?: { address?: string; symbol?: string; name?: string; icon_url?: string };
      value?: string;
    }>;
    if (!Array.isArray(data)) return [];
    const out: Tok[] = [];
    for (const item of data) {
      const addr = item.token?.address;
      if (!addr || !/^0x[0-9a-fA-F]{40}$/.test(addr)) continue;
      if (!item.value || item.value === "0") continue;
      out.push({
        mint: addr,
        symbol: item.token?.symbol ?? null,
        name: item.token?.name ?? null,
        image: item.token?.icon_url ?? null,
        price: null,
        change24h: null,
      });
    }
    return out;
  } catch {
    return [];
  }
}

async function resolveTokenPrice(mint: string): Promise<{ price: number | null; change24h: number | null; image: string | null }> {
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 3000);
    const res = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${mint}`, { signal: ctrl.signal });
    clearTimeout(timer);
    if (!res.ok) return { price: null, change24h: null, image: null };
    const data = (await res.json()) as { pairs?: Array<{ priceUsd?: string; priceChange?: { h24?: number }; info?: { imageUrl?: string } }> };
    const p = data.pairs?.[0];
    if (!p) return { price: null, change24h: null, image: null };
    return {
      price: p.priceUsd ? Number(p.priceUsd) : null,
      change24h: p.priceChange?.h24 ?? null,
      image: p.info?.imageUrl ?? null,
    };
  } catch {
    return { price: null, change24h: null, image: null };
  }
}

let cachedEthData = { usd: 2080, change24h: null as number | null };

async function fetchEthPrice(): Promise<{ usd: number; change24h: number | null }> {
  try {
    const res = await apiGet<{ usd?: number; change24h?: number }>("/api/prices/native");
    if (res && typeof res.usd === "number" && res.usd > 0) {
      cachedEthData.usd = res.usd;
      if (typeof res.change24h === "number") cachedEthData.change24h = res.change24h;
      return cachedEthData;
    }
  } catch {}

  try {
    const dsRes = await fetch("https://api.dexscreener.com/latest/dex/tokens/0x0bd7d308f8e1639fab988df18a8011f41eacad73");
    if (dsRes.ok) {
      const j = (await dsRes.json()) as { pairs?: Array<{ priceUsd?: string; priceChange?: { h24?: number } }> };
      const p = Number(j.pairs?.[0]?.priceUsd);
      if (p > 0) {
        cachedEthData.usd = p;
        if (typeof j.pairs?.[0]?.priceChange?.h24 === "number") {
          cachedEthData.change24h = j.pairs[0].priceChange.h24;
        }
        return cachedEthData;
      }
    }
  } catch {}

  try {
    const bRes = await fetch("https://api.binance.com/api/v3/ticker/24hr?symbol=ETHUSDT");
    if (bRes.ok) {
      const j = (await bRes.json()) as { lastPrice?: string; priceChangePercent?: string };
      const p = Number(j.lastPrice);
      if (p > 0) {
        cachedEthData.usd = p;
        if (j.priceChangePercent) {
          cachedEthData.change24h = Number(j.priceChangePercent);
        }
        return cachedEthData;
      }
    }
  } catch {}

  return cachedEthData;
}

const usd = (n: number) => {
  if (n > 0 && n < 0.01) return "<$0.01";
  return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};
const usdPrice = (n: number) => {
  if (n >= 1) return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  if (n >= 0.0001) return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 4 });
  return "$" + n.toPrecision(3);
};
const qty = (n: number) => {
  if (n >= 1000) return n.toLocaleString("en-US", { maximumFractionDigits: 2 });
  if (n >= 1) return n.toLocaleString("en-US", { maximumFractionDigits: 4 });
  return n.toLocaleString("en-US", { maximumFractionDigits: 6 });
};
const pct = (n: number) => `${n > 0 ? "+" : n < 0 ? "-" : ""}${Math.abs(n).toFixed(2)}%`;
const toneCls = (n: number | null) => (n === null || n === 0 ? "pf-flat" : n > 0 ? "pf-pos" : "pf-neg");
// Opasitas aksen untuk batang alokasi (satu hue, hanya beda tingkat terang).
const SHADES = [1, 0.75, 0.55, 0.4, 0.28];

function Avatar({ row }: { row: Row }) {
  return (
    <TokenAvatar
      src={row.image}
      symbol={row.symbol}
      size={36}
      seed={row.mint ?? row.symbol}
    />
  );
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
    const timer = setInterval(() => {
      if (typeof document !== "undefined" && !document.hidden) setTick((t) => t + 1);
    }, 60_000);
    return () => clearInterval(timer);
  }, []);

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
        setRows([
          {
            key: "eth",
            mint: null,
            symbol: "ETH",
            name: "Ether (testnet)",
            image: "/brand/eth.svg",
            amount: eth,
            priceUsd: null,
            change24h: null,
            valueUsd: null,
          },
        ]);
        return;
      }

      const [list, ethPx, bsTokens] = await Promise.all([
        apiGet<{ tokens: Tok[] }>("/api/tokens/trending?limit=200").catch(() => ({ tokens: [] as Tok[] })),
        fetchEthPrice(),
        fetchBlockscoutTokens(address),
      ]);

      const tokenMap = new Map<string, Tok>();
      for (const t of CANONICAL_TOKENS) {
        tokenMap.set(t.mint.toLowerCase(), t);
      }
      for (const t of list.tokens) {
        if (!t.mint) continue;
        const k = t.mint.toLowerCase();
        const cur = tokenMap.get(k);
        if (cur) {
          tokenMap.set(k, {
            ...cur,
            ...t,
            image: cur.image || t.image,
            price: t.price ?? cur.price,
            change24h: t.change24h ?? cur.change24h,
          });
        } else {
          tokenMap.set(k, t);
        }
      }
      for (const t of bsTokens) {
        const k = t.mint.toLowerCase();
        if (!tokenMap.has(k)) {
          tokenMap.set(k, t);
        }
      }

      const allTokens = Array.from(tokenMap.values());
      const { eth, holdings } = await readHoldings(address, allTokens);
      if (!alive) return;

      const resolvedHoldings = await Promise.all(
        holdings.map(async ({ token: t, amount }) => {
          let price = t.price;
          let change24h = t.change24h;
          let image = t.image;
          const sym = (t.symbol ?? "").toUpperCase();
          const lowerMint = t.mint.toLowerCase();

          if (lowerMint === "0x5fc5360d0400a0fd4f2af552add042d716f1d168" || sym === "USDG") {
            price = 1.0;
            change24h = 0;
            image = image || "/brand/usdg.png";
          } else if (lowerMint === "0x0bd7d308f8e1639fab988df18a8011f41eacad73" || sym === "WETH") {
            price = ethPx.usd;
            change24h = ethPx.change24h;
            image = image || "/brand/eth.svg";
          } else if (sym.includes("USDC") || sym.includes("USDT")) {
            price = price ?? 1.0;
            image = image || (sym.includes("USDC") ? "/brand/usdc.svg" : "/brand/usdt.svg");
          } else if (price === null) {
            const extra = await resolveTokenPrice(t.mint);
            if (extra.price !== null) price = extra.price;
            if (extra.change24h !== null) change24h = extra.change24h;
            if (extra.image && !image) image = extra.image;
          }

          const valueUsd = price === null ? null : price * amount;
          return {
            key: t.mint,
            mint: t.mint,
            symbol: t.symbol ?? shortAddress(t.mint),
            name: t.name ?? "",
            image,
            amount,
            priceUsd: price,
            change24h,
            valueUsd,
          };
        }),
      );

      if (!alive) return;
      setRows([
        {
          key: "eth",
          mint: null,
          symbol: "ETH",
          name: "Ether",
          image: "/brand/eth.svg",
          amount: eth,
          priceUsd: ethPx.usd,
          change24h: ethPx.change24h,
          valueUsd: eth * ethPx.usd,
        },
        ...resolvedHoldings,
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
                    {r.priceUsd === null ? "-" : usdPrice(r.priceUsd)}
                  </span>
                  <span className={`pf-hide pf-r num ${toneCls(r.change24h)}`} style={{ fontSize: 13 }}>
                    {r.change24h === null ? "-" : pct(r.change24h)}
                  </span>
                  <span className="pf-r">
                    <span className="pf-val num">{r.valueUsd === null ? "-" : usd(r.valueUsd)}</span>
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
              : "Balances read directly on-chain from your wallet on Robinhood Chain across canonical, indexed, and wallet-held tokens."}
          </p>
        </>
      )}
    </div>
  );
}

export function ApplicationPortfolioContentExtra() {
  return <SignInGate title="Your Portfolio is one step away" sub="Sign in to see balances, agents and PnL across your wallet" />;
}
