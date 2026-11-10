"use client";
import { useEffect, useMemo, useState } from "react";
import { DotBackdrop } from "@/components/app/dot-backdrop";
import trending from "@/data/tokens-trending.json";
import memescope from "@/data/memescope.json";
import { formatUnits, type Address } from "viem";
import { USE_API, useApi } from "@/lib/api";
import { tokenFallbackStyle } from "@/components/app/token-avatar";
import { switchToAppChain, useWallet } from "@/lib/wallet";
import { NATIVE as NATIVE_ADDR, balanceOf, executePlan, planSwap, simulatePlan, swapErrorText, slippageBps, swapSetup, tokenDecimals, tradeMode, readTokenMeta, fetchExternalTokenLogo, type Plan } from "@/lib/swap";

const EVM = /^0x[0-9a-fA-F]{40}$/;
const GAS_RESERVE = 500_000_000_000_000n; // 0.0005 ETH reserved when selecting Max
const fmt = (t: string) => Number(t).toLocaleString("en-US", { maximumFractionDigits: 6 });

type SwapToken = {
  mint: string;
  symbol: string;
  name: string;
  image: string | null;
  /** Primary pool ID from API. 66 characters (32 bytes) = Uniswap v4 pool; 42 characters = v2/v3 pool. */
  poolId?: string | null;
  price?: number;
  marketCap?: number;
  change24h?: number;
};

// Native asset on Robinhood Chain is ETH (zero address is a native asset marker, not a contract).
const NATIVE: SwapToken = {
  mint: "0x0000000000000000000000000000000000000000",
  symbol: "ETH",
  name: "Ether",
  image: "/brand/eth.svg",
};

/**
 * Curated canonical tokens on Robinhood Chain with official metadata and logos.
 * USDG (Global Dollar) is the official native stablecoin on Robinhood Chain issued by Paxos.
 */
export const CURATED_TOKENS: SwapToken[] = [
  {
    mint: "0x5fc5360d0400a0fd4f2af552add042d716f1d168",
    symbol: "USDG",
    name: "Global Dollar",
    image: "/brand/usdg.png",
    price: 1.0,
    poolId: null,
  },
  {
    mint: "0x0bd7d308f8e1639fab988df18a8011f41eacad73",
    symbol: "WETH",
    name: "Wrapped Ether",
    image: "/brand/eth.svg",
    poolId: null,
  },
  {
    mint: "0xc6911796042b15d7fa4f6cde69e245ddcd3d9c31",
    symbol: "VIRTUAL",
    name: "Virtuals Protocol",
    image: "/brand/virtual.png",
    poolId: null,
  },
  {
    mint: "0x020bfc650a365f8bb26819deaabf3e21291018b4",
    symbol: "CASHCAT",
    name: "Cash Cat",
    image: "https://cdn.dexscreener.com/cms/images/Lq7a3pS9Wn8EuGp0?width=800&height=800&quality=95&format=auto",
    poolId: null,
  },
  {
    mint: "0x39dbed3a2bd333467115de45665cc57f813c4571",
    symbol: "PONS",
    name: "Pons",
    image: "https://cdn.dexscreener.com/cms/images/dkmXs8KYMyMXjuU1?width=800&height=800&quality=95&format=auto",
    poolId: "0x4041a6b0c2a07d2c38f2b7194f488ddf01e7498c0b5dc642c679af20f7813c45",
  },
];

/** Lookup well-known token by contract address */
export function findKnownToken(mint: string): SwapToken | null {
  const m = mint.toLowerCase();
  for (const t of CURATED_TOKENS) {
    if (t.mint.toLowerCase() === m) return t;
  }
  return null;
}

function allTokens(): SwapToken[] {
  const seen = new Set<string>([NATIVE.mint.toLowerCase()]);
  const out: SwapToken[] = [];
  const push = (t: SwapToken) => {
    const k = t.mint?.toLowerCase();
    if (!k || seen.has(k)) return;
    seen.add(k);
    out.push({ ...t, mint: k });
  };
  // Curated tokens are prioritized first (USDG, WETH, etc.)
  for (const c of CURATED_TOKENS) push(c);
  for (const t of trending.tokens)
    push({ mint: t.mint, symbol: t.symbol, name: t.name, image: t.image ?? null, price: t.price, marketCap: t.marketCap, change24h: t.change24h });
  const m = memescope as unknown as Record<string, { mint: string; symbol: string; name: string; image?: string | null; marketCapUsd?: number }[]>;
  for (const list of [m.new, m.stretch, m.migrated])
    for (const t of list ?? [])
      push({ mint: t.mint, symbol: t.symbol, name: t.name, image: t.image ?? null, marketCap: t.marketCapUsd });
  return out;
}

function Avatar({ t, size = 28 }: { t: SwapToken; size?: number }) {
  return t.image ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt="" width={size} height={size} src={t.image} className="rounded-full object-cover shrink-0" style={{ width: size, height: size, background: "var(--v2-bg-2)" }} />
  ) : (
    <span className="rounded-full shrink-0 inline-flex items-center justify-center text-[11px] font-semibold" style={{ width: size, height: size, ...tokenFallbackStyle(t.mint || t.symbol) }}>
      {t.symbol.slice(0, 1)}
    </span>
  );
}

function TokenChip({ token }: { token: SwapToken }) {
  return (
    <span className="shrink-0 flex items-center gap-2 h-11 pl-1.5 pr-4 rounded-full" style={{ background: "var(--v2-bg-2)" }}>
      <Avatar t={token} />
      <span className="text-[16px] font-semibold max-w-[110px] truncate" style={{ color: "var(--v2-t-1)" }}>
        {token.symbol}
      </span>
    </span>
  );
}

function TokenButton({ token, onClick }: { token: SwapToken | null; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="shrink-0 flex items-center gap-2 h-11 pl-1.5 pr-3 rounded-full transition-colors hover:brightness-110"
      style={{ background: token ? "var(--v2-bg-2)" : "var(--v2-accent)" }}
    >
      {token && <Avatar t={token} />}
      <span className="text-[15px] font-semibold px-1" style={{ color: token ? "var(--v2-t-1)" : "#ffffff" }}>
        {token ? token.symbol : "Select token"}
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256" style={{ color: token ? "var(--v2-t-3)" : "#ffffff" }}>
        <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
      </svg>
    </button>
  );
}

function TokenModal({ open, onClose, onPick }: { open: boolean; onClose: () => void; onPick: (t: SwapToken) => void }) {
  const [q, setQ] = useState("");
  const setup = swapSetup();
  const [resolvedCustom, setResolvedCustom] = useState<{ mint: string; symbol: string; name: string; image: string | null } | null>(null);
  const api = useApi<{ tokens: { mint: string; symbol: string | null; name: string | null; image: string | null; price: number | null; marketCap: number | null; change24h: number | null }[] }>(
    USE_API ? "/api/tokens/trending?tab=trending&limit=100" : null,
    30_000,
  );
  const list = useMemo<SwapToken[]>(
    () => {
      const seen = new Set<string>([NATIVE.mint.toLowerCase()]);
      const out: SwapToken[] = [];
      const push = (t: SwapToken) => {
        const k = t.mint?.toLowerCase();
        if (!k || seen.has(k)) return;
        seen.add(k);
        out.push({ ...t, mint: k });
      };
      // Always include curated tokens first (USDG, WETH, etc.)
      for (const c of CURATED_TOKENS) push(c);

      if (USE_API && api.data?.tokens) {
        for (const t of api.data.tokens) {
          push({
            mint: t.mint,
            symbol: t.symbol ?? "?",
            name: t.name ?? "",
            image: t.image,
            price: t.price ?? undefined,
            marketCap: t.marketCap ?? undefined,
            change24h: t.change24h ?? undefined,
          });
        }
      } else {
        for (const t of allTokens()) push(t);
      }
      return out;
    },
    [api.data],
  );
  const term = q.trim().toLowerCase();

  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open, onClose]);

  useEffect(() => {
    if (!open || !setup || !EVM.test(term)) {
      setResolvedCustom(null);
      return;
    }
    const known = findKnownToken(term);
    if (known) {
      setResolvedCustom({ mint: known.mint, symbol: known.symbol, name: known.name, image: known.image });
      return;
    }
    let alive = true;
    readTokenMeta(setup, term as Address).then(async (m) => {
      if (!alive) return;
      if (m) {
        let img = m.image;
        if (!img) {
          img = await fetchExternalTokenLogo(term);
        }
        if (alive) {
          setResolvedCustom({ mint: term, symbol: m.symbol, name: m.name, image: img });
        }
      } else {
        const ext = await fetchExternalTokenLogo(term);
        if (alive && ext) {
          setResolvedCustom({ mint: term, symbol: `${term.slice(0, 6)}…${term.slice(-4)}`, name: "Token", image: ext });
        } else if (alive) {
          setResolvedCustom(null);
        }
      }
    });
    return () => {
      alive = false;
    };
  }, [term, setup, open]);

  if (!open) return null;

  const matches = (t: SwapToken) => {
    if (t.symbol.toLowerCase().includes(term)) return true;
    if (t.name.toLowerCase().includes(term)) return true;
    if (t.mint.toLowerCase().startsWith(term)) return true;
    // Allow searching "usdt", "tether", "usdc", "usd", "dollar", "stable" to find USDG (Robinhood Chain's canonical USD stablecoin)
    if (
      (term === "usdc" ||
        term === "usdt" ||
        term === "tether" ||
        term === "usd" ||
        term === "dollar" ||
        term === "stable") &&
      t.symbol === "USDG"
    )
      return true;
    return false;
  };
  const shown = term ? list.filter(matches) : list;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" style={{ background: "rgba(0,0,0,0.6)" }} onClick={onClose}>
      <div
        role="dialog"
        aria-label="Select a token"
        onClick={(e) => e.stopPropagation()}
        className="w-full flex flex-col"
        style={{ maxWidth: 440, maxHeight: "78vh", background: "var(--v2-bg-1)", border: "1px solid var(--v2-line-1)", borderRadius: 24, boxShadow: "rgba(0,0,0,0.6) 0 30px 80px -30px" }}
      >
        <div className="flex items-center justify-between px-5 pt-4 pb-3">
          <span className="text-[17px] font-semibold" style={{ color: "var(--v2-t-1)" }}>Select a token</span>
          <button onClick={onClose} aria-label="Close" className="w-8 h-8 rounded-full" style={{ color: "var(--v2-t-3)", border: "1px solid var(--v2-line-1)" }}>✕</button>
        </div>
        <div className="px-5 pb-3">
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search name, symbol or mint"
            className="w-full h-11 px-4 rounded-full bg-transparent outline-none text-[14px]"
            style={{ border: "1px solid var(--v2-line-1)", color: "var(--v2-t-1)" }}
          />
        </div>
        {/* Quick select popular tokens */}
        <div className="flex flex-wrap gap-2 px-5 pb-3">
          {CURATED_TOKENS.map((pt) => (
            <button
              key={pt.mint}
              onClick={() => onPick(pt)}
              className="flex items-center gap-1.5 h-8 px-2.5 rounded-full text-[13px] font-medium transition-colors hover:brightness-110"
              style={{ background: "var(--v2-bg-2)", border: "1px solid var(--v2-line-1)", color: "var(--v2-t-1)" }}
            >
              <Avatar t={pt} size={18} />
              <span>{pt.symbol}</span>
            </button>
          ))}
        </div>
        <div className="px-2 pb-3 overflow-y-auto" style={{ minHeight: 0 }}>
          <div className="px-3 pb-1 text-[12px]" style={{ color: "var(--v2-t-4)" }}>{shown.length} tokens on Robinhood Chain</div>
          {(term === "usdt" || term === "usdc" || term === "tether") && (
            <div className="mx-3 my-2 px-3 py-2 rounded-xl text-[12px] flex items-center gap-2" style={{ background: "rgba(105, 184, 33, 0.12)", border: "1px solid rgba(105, 184, 33, 0.3)", color: "var(--v2-t-2)" }}>
              <span>💡</span>
              <span>Robinhood Chain uses <strong>USDG (Global Dollar)</strong> as its canonical USD stablecoin.</span>
            </div>
          )}
          {shown.map((t) => (
            <button key={t.mint} onClick={() => onPick(t)} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl text-left transition-colors hover:bg-[var(--v2-bg-2)]">
              <Avatar t={t} size={34} />
              <span className="min-w-0 flex-1">
                <span className="block text-[15px] font-semibold truncate" style={{ color: "var(--v2-t-1)" }}>{t.symbol}</span>
                <span className="block text-[12px] truncate" style={{ color: "var(--v2-t-4)" }}>{t.name} · {t.mint.slice(0, 4)}…{t.mint.slice(-4)}</span>
              </span>
              <span className="text-right shrink-0">
                {t.price ? (
                  <span className="block num text-[13px]" style={{ color: "var(--v2-t-2)" }}>
                    ${t.price >= 1 ? t.price.toFixed(2) : Number(t.price.toPrecision(4))}
                  </span>
                ) : t.marketCap ? (
                  <span className="block num text-[13px]" style={{ color: "var(--v2-t-2)" }}>
                    MC ${t.marketCap >= 1e6 ? (t.marketCap / 1e6).toFixed(2) + "M" : t.marketCap >= 1e3 ? (t.marketCap / 1e3).toFixed(1) + "K" : t.marketCap.toFixed(0)}
                  </span>
                ) : null}
                {typeof t.change24h === "number" && (
                  <span className="block num text-[11px]" style={{ color: t.change24h >= 0 ? "var(--v2-pos)" : "var(--v2-neg)" }}>
                    {t.change24h >= 0 ? "+" : ""}
                    {t.change24h.toFixed(1)}%
                  </span>
                )}
              </span>
            </button>
          ))}
          {EVM.test(term) && !list.some((t) => t.mint.toLowerCase() === term) && (() => {
            const known = findKnownToken(term);
            const cand: SwapToken = known ?? {
              mint: term,
              symbol: resolvedCustom?.symbol || `${term.slice(0, 6)}…${term.slice(-4)}`,
              name: resolvedCustom?.name || (resolvedCustom === null ? "Searching token on-chain…" : "Custom token"),
              image: resolvedCustom?.image ?? null,
            };
            return (
              <button
                onClick={() => onPick(cand)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl text-left transition-colors hover:bg-[var(--v2-bg-2)]"
              >
                <Avatar t={cand} size={34} />
                <span className="min-w-0 flex-1">
                  <span className="block text-[15px] font-semibold truncate" style={{ color: "var(--v2-t-1)" }}>{cand.symbol}</span>
                  <span className="block text-[12px] truncate" style={{ color: "var(--v2-t-4)" }}>{cand.name} · {term.slice(0, 6)}…{term.slice(-4)}</span>
                </span>
              </button>
            );
          })()}
          {shown.length === 0 && !EVM.test(term) && <div className="px-3 py-6 text-[14px]" style={{ color: "var(--v2-t-3)" }}>No token found</div>}
        </div>
      </div>
    </div>
  );
}

export function ApplicationSwapContent() {
  const [flipped, setFlipped] = useState(false);
  const [amount, setAmount] = useState("");
  const [token, setToken] = useState<SwapToken | null>(null);
  const [open, setOpen] = useState(false);
  const w = useWallet();
  const setup = swapSetup();
  const [plan, setPlan] = useState<Plan | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [step, setStep] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [slip, setSlip] = useState(100);
  useEffect(() => setSlip(slippageBps()), []);
  // Check URL parameters: /application/swap?mint=0x… (&side=sell to sell)
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const m = (q.get("mint") ?? "").trim();
    if (EVM.test(m)) {
      const known = findKnownToken(m);
      setToken(known ?? { mint: m.toLowerCase(), symbol: `${m.slice(0, 6)}…${m.slice(-4)}`, name: "Token from link", image: null });
      if (q.get("side") === "sell") setFlipped(true);
    }
  }, []);
  const isEvm = !!token && EVM.test(token.mint);

  // Retrieve token metadata from the API if indexed
  const meta = useApi<{ token: { mint: string; symbol: string | null; name: string | null; image: string | null; poolId: string | null } }>(token && isEvm ? `/api/tokens/${token.mint}` : null);
  useEffect(() => {
    const d = meta.data?.token;
    if (!d) return;
    const known = findKnownToken(d.mint);
    setToken((t) =>
      t && t.mint === d.mint.toLowerCase()
        ? {
            ...t,
            symbol: known?.symbol || d.symbol?.trim() || t.symbol,
            name: known?.name || d.name?.trim() || t.name,
            image: known?.image ?? d.image ?? t.image,
            poolId: t.poolId !== undefined ? t.poolId : d.poolId,
          }
        : t,
    );
  }, [meta.data]);

  // Resolve on-chain token name, symbol, and logo via RPC and DexScreener if token is custom or loaded from an external link
  useEffect(() => {
    if (!token || !setup || !isEvm) return;
    if (!token.symbol.includes("…") && token.name !== "Token from link" && token.name !== "Custom token" && token.image) return;
    const known = findKnownToken(token.mint);
    if (known) {
      setToken((t) => (t && t.mint.toLowerCase() === known.mint.toLowerCase() ? { ...t, ...known } : t));
      return;
    }
    let alive = true;
    readTokenMeta(setup, token.mint as Address).then(async (m) => {
      if (!alive) return;
      if (m) {
        let img = m.image;
        if (!img) {
          img = await fetchExternalTokenLogo(token.mint);
        }
        if (alive) {
          setToken((t) =>
            t && t.mint.toLowerCase() === token.mint.toLowerCase()
              ? { ...t, symbol: m.symbol, name: m.name, image: img ?? t.image }
              : t,
          );
        }
      }
    });
    return () => {
      alive = false;
    };
  }, [token, setup, isEvm]);

  // 32-byte main pool = Uniswap v4: fetch PoolKey from event logs via API, then quote and swap via v4 path
  const isV4 = !!token?.poolId && token.poolId.length === 66;
  const poolKeyApi = useApi<{ currency0: string; currency1: string; fee: number; tickSpacing: number; hooks: string }>(isV4 && token ? `/api/v4/pool-key?poolId=${token.poolId}` : null);
  const v4Key = isV4 && poolKeyApi.data ? { ...poolKeyApi.data, currency0: poolKeyApi.data.currency0 as Address, currency1: poolKeyApi.data.currency1 as Address, hooks: poolKeyApi.data.hooks as Address } : null;
  const metaPending = !!token && isEvm && token.poolId === undefined && meta.loading;
  const sellAddr = (flipped ? token?.mint : NATIVE_ADDR) as Address;
  const buyAddr = (flipped ? NATIVE_ADDR : token?.mint) as Address;

  useEffect(() => {
    setPlan(null);
    setErr(null);
    setMsg(null);
    setInfo(null);
    setStep(null);
    if (!setup || !token || !isEvm || !(Number(amount) > 0)) return;
    if (metaPending) return; // Pool type is not determined yet: wait to prevent picking the wrong route
    if (isV4 && !v4Key) {
      if (poolKeyApi.error) setErr("Could not load this token's Uniswap v4 pool. Try again shortly.");
      return;
    }
    let alive = true;
    const t = setTimeout(() => {
      planSwap({ account: (w.address as Address | null) ?? null, sell: sellAddr, buy: buyAddr, amount, slippageBps: slip, v4Key })
        .then((p) => alive && setPlan(p))
        .catch((e: unknown) => alive && setErr(e instanceof Error ? e.message.split("\n")[0] : "Could not get a quote"));
    }, 450);
    return () => {
      alive = false;
      clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount, token, flipped, w.address, slip, metaPending, isV4, poolKeyApi.data, poolKeyApi.error]);

  const pct = async (p: number) => {
    if (!setup || !w.address || !token || !isEvm) return;
    try {
      const bal = await balanceOf(setup, sellAddr, w.address as Address);
      const dec = await tokenDecimals(setup, sellAddr);
      let v = (bal * BigInt(p)) / 100n;
      if (sellAddr === NATIVE_ADDR && p === 100) v = bal > GAS_RESERVE ? bal - GAS_RESERVE : 0n;
      setAmount(formatUnits(v, dec));
    } catch {
      /* balance could not be read */
    }
  };

  const act = async () => {
    setBusy(true);
    setErr(null);
    setMsg(null);
    setInfo(null);
    setStep(null);
    try {
      if (w.wrongChain) {
        const r = await switchToAppChain();
        if (r.error) setErr(r.error);
        return;
      }
      if (!plan || !w.address) return;
      const acct = w.address as Address;
      if (tradeMode() === "dry") {
        const r = await simulatePlan(plan, acct);
        if (!r.ok) setErr(r.note ?? "Simulation failed");
        else setMsg(`Dry run OK: you would receive about ${fmt(plan.outText)} (minimum ${fmt(plan.minText)})${r.gas ? `, gas about ${r.gas.toString()}` : ""}${r.note ? `. ${r.note}` : ""}. No transaction was sent (dry mode).`);
      } else {
        const provider = w.wallets.find((x) => x.id === w.walletId)?.provider;
        if (!provider) throw new Error("Connect a wallet first");
        const hash = await executePlan(plan, acct, provider, setStep);
        setMsg(`Swap confirmed: ${hash}`);
      }
    } catch (e) {
      const x = e as { code?: number; shortMessage?: string; message?: string };
      setErr(x.code === 4001 ? "Request rejected in your wallet" : (x.shortMessage ?? x.message ?? "Swap failed").split("\n")[0]);
    } finally {
      setBusy(false);
    }
  };

  const cta: { label: string; disabled: boolean; signin?: boolean } = !setup
    ? { label: "Swaps are available on mainnet only", disabled: true }
    : !token
      ? { label: "Select a token", disabled: true }
      : !isEvm
        ? { label: "Select an EVM token", disabled: true }
        : !(Number(amount) > 0)
          ? { label: "Enter an amount", disabled: true }
          : !w.address
            ? { label: "Connect wallet", disabled: false, signin: true }
            : w.wrongChain
              ? { label: `Switch to ${w.appChain.name}`, disabled: false }
              : !plan
                ? { label: err ? "No route" : "Getting quote…", disabled: true }
                : tradeMode() === "dry"
                  ? { label: "Simulate swap (dry mode)", disabled: false }
                  : { label: plan.needsApproval ? "Approve & swap" : "Swap", disabled: false };

  const usd = token?.price && flipped && amount ? Number(amount) * token.price : 0;
  const buyUsd = plan && !flipped && token?.price ? Number(plan.outText) * token.price : 0;
  const sellPill = flipped ? (
    <TokenButton token={token} onClick={() => setOpen(true)} />
  ) : (
    <TokenChip token={NATIVE} />
  );
  const buyPill = flipped ? (
    <TokenChip token={NATIVE} />
  ) : (
    <TokenButton token={token} onClick={() => setOpen(true)} />
  );
  return (
    <>
      <DotBackdrop variant="rings" />
      <div className="relative z-10 mx-auto w-full max-w-[480px]">
        <div className="flex items-center justify-between mb-3">
          <h1
            className="text-[22px] font-semibold"
            style={{ color: "var(--v2-t-1)" }}
          >
            Swap
          </h1>
          <div className="flex items-center gap-2">
            <div className="relative"></div>
            <button
              aria-label="Settings"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-[var(--v2-bg-2)]"
              style={{
                color: "var(--v2-t-3)",
                border: "1px solid var(--v2-line-1)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A112.1,112.1,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.62a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.08,8.08,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8.08,8.08,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          className="relative rounded-[28px] p-2"
          style={{
            background: "var(--v2-bg-1)",
            border: "1px solid var(--v2-line-1)",
            boxShadow: "rgba(12, 14, 17, 0.9) 0px 30px 80px -40px",
          }}
        >
          <div
            className="rounded-[22px] px-5 pt-4 pb-4"
            style={{
              background: "var(--v2-bg-0)",
              border: "1px solid var(--v2-line-1)",
            }}
          >
            <div className="flex items-center justify-between mb-1.5 text-[13px]">
              <span style={{ color: "var(--v2-t-3)" }}>Selling</span>
            </div>
            <div className="flex items-center gap-3">
              <input
                inputMode="decimal"
                placeholder="0.0"
                className="flex-1 min-w-0 bg-transparent outline-none num text-[38px] font-medium"
                value={amount}
                onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ""))}
                style={{ color: "var(--v2-t-1)" }}
              />
              {sellPill}
            </div>
            <div className="flex items-center justify-between mt-2">
              <span
                className="num text-[13px]"
                style={{ color: "var(--v2-t-4)" }}
              >
                {usd ? `~$${usd.toLocaleString("en-US", { maximumFractionDigits: 2 })}` : "~$0"}
              </span>
              <div className="flex gap-3">
                <button
                  onClick={() => pct(25)}
                  className="num text-[13px] transition-colors hover:text-[var(--v2-t-1)] disabled:opacity-40"
                  style={{ color: "var(--v2-t-3)" }}
                >
                  25%
                </button>
                <button
                  onClick={() => pct(50)}
                  className="num text-[13px] transition-colors hover:text-[var(--v2-t-1)] disabled:opacity-40"
                  style={{ color: "var(--v2-t-3)" }}
                >
                  50%
                </button>
                <button
                  onClick={() => pct(75)}
                  className="num text-[13px] transition-colors hover:text-[var(--v2-t-1)] disabled:opacity-40"
                  style={{ color: "var(--v2-t-3)" }}
                >
                  75%
                </button>
                <button
                  onClick={() => pct(100)}
                  className="num text-[13px] transition-colors hover:text-[var(--v2-t-1)] disabled:opacity-40"
                  style={{ color: "var(--v2-t-3)" }}
                >
                  Max
                </button>
              </div>
            </div>
          </div>
          <div className="relative h-2 z-10">
            <button
              aria-label="Flip direction"
              onClick={() => setFlipped((f) => !f)}
              className="crv-swap-flip absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M208.49,152.49l-72,72a12,12,0,0,1-17,0l-72-72a12,12,0,0,1,17-17L116,187V40a12,12,0,0,1,24,0V187l51.51-51.52a12,12,0,0,1,17,17Z"></path>
              </svg>
            </button>
          </div>
          <div
            className="rounded-[22px] px-5 pt-4 pb-4"
            style={{
              background: "var(--v2-bg-0)",
              border: "1px solid var(--v2-line-1)",
            }}
          >
            <div className="flex items-center justify-between mb-1.5 text-[13px]">
              <span style={{ color: "var(--v2-t-3)" }}>Buying</span>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="flex-1 min-w-0 num text-[38px] font-medium truncate"
                style={{ color: plan ? "var(--v2-t-1)" : "var(--v2-t-4)" }}
              >
                {plan ? fmt(plan.outText) : "0.0"}
              </div>
              {buyPill}
            </div>
            <div className="flex items-center justify-between mt-2">
              <span
                className="num text-[13px]"
                style={{ color: "var(--v2-t-4)" }}
              >
                {buyUsd ? `~$${buyUsd.toLocaleString("en-US", { maximumFractionDigits: 2 })}` : "~$0"}
              </span>
            </div>
          </div>
          <button
            {...(cta.signin ? { "data-auth-open": "signin" } : { onClick: act })}
            disabled={cta.disabled || busy}
            className="crv-swap-cta mt-2 w-full h-14 rounded-[20px] text-[16px] font-semibold flex items-center justify-center gap-2 disabled:cursor-not-allowed"
          >
            {busy ? "Working…" : cta.label}
          </button>
          {plan && (
            <p className="px-3 pt-2 text-[12px]" style={{ color: "var(--v2-t-4)" }}>
              {plan.venue === "v4" ? `Uniswap v4 · ${(plan.route ?? "").replace("token", token?.symbol ?? "token")} · pool fee is dynamic` : `Uniswap v3 · fee ${(plan.fee / 10000).toString()}%`} · slippage {slip / 100}% · minimum received {fmt(plan.minText)}
              {tradeMode() === "dry" ? " · dry mode: no transactions are sent" : ""}
            </p>
          )}
          {err && (
            <p className="px-3 pt-1 text-[12px]" style={{ color: "var(--v2-neg)" }}>{err}</p>
          )}
          {step && (
            <p className="px-3 pt-1 text-[12px]" style={{ color: "var(--v2-t-2)" }} role="status">{step}</p>
          )}
          {info && (
            <p className="px-3 pt-1 text-[12px]" style={{ color: "var(--v2-t-3)" }}>{info}</p>
          )}
          {msg && (
            <p className="px-3 pt-1 text-[12px]" style={{ color: "var(--v2-pos)" }}>{msg}</p>
          )}
          <TokenModal open={open} onClose={() => setOpen(false)} onPick={(t) => { setToken(t); setOpen(false); }} />
        </div>
      </div>
    </>
  );
}
