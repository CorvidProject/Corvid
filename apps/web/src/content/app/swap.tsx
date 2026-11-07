"use client";
import { useEffect, useMemo, useState } from "react";
import { DotBackdrop } from "@/components/app/dot-backdrop";
import trending from "@/data/tokens-trending.json";
import memescope from "@/data/memescope.json";
import { formatUnits, type Address } from "viem";
import { USE_API, useApi } from "@/lib/api";
import { switchToAppChain, useWallet } from "@/lib/wallet";
import { NATIVE as NATIVE_ADDR, balanceOf, executePlan, planSwap, simulatePlan, slippageBps, swapSetup, tokenDecimals, tradeMode, type Plan } from "@/lib/swap";

const EVM = /^0x[0-9a-fA-F]{40}$/;
const GAS_RESERVE = 500_000_000_000_000n; // 0,0005 ETH disisakan saat memilih Max
const fmt = (t: string) => Number(t).toLocaleString("en-US", { maximumFractionDigits: 6 });

type SwapToken = {
  mint: string;
  symbol: string;
  name: string;
  image: string | null;
  /** Id pool utama dari API. 66 karakter (32 byte) = pool Uniswap v4; 42 karakter = pool v2/v3. */
  poolId?: string | null;
  price?: number;
  marketCap?: number;
  change24h?: number;
};

// Aset native Robinhood Chain adalah ETH (alamat nol = penanda aset native, bukan kontrak).
const NATIVE: SwapToken = {
  mint: "0x0000000000000000000000000000000000000000",
  symbol: "ETH",
  name: "Ether",
  image: "/brand/eth.svg",
};

function allTokens(): SwapToken[] {
  const seen = new Set<string>([NATIVE.mint]);
  const out: SwapToken[] = [];
  const push = (t: SwapToken) => {
    if (!t.mint || seen.has(t.mint)) return;
    seen.add(t.mint);
    out.push(t);
  };
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
    <span className="rounded-full shrink-0 inline-flex items-center justify-center text-[11px] font-semibold" style={{ width: size, height: size, background: "var(--v2-bg-3)", color: "var(--v2-t-2)" }}>
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
  const api = useApi<{ tokens: { mint: string; symbol: string | null; name: string | null; image: string | null; price: number | null; marketCap: number | null; change24h: number | null }[] }>(
    USE_API ? "/api/tokens/trending?tab=trending&limit=100" : null,
  );
  const list = useMemo<SwapToken[]>(
    () =>
      USE_API
        ? (api.data?.tokens ?? []).map((t) => ({ mint: t.mint, symbol: t.symbol ?? "?", name: t.name ?? "", image: t.image, price: t.price ?? undefined, marketCap: t.marketCap ?? undefined, change24h: t.change24h ?? undefined }))
        : allTokens(),
    [api.data],
  );
  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open, onClose]);
  if (!open) return null;
  const term = q.trim().toLowerCase();
  const shown = term ? list.filter((t) => t.symbol.toLowerCase().includes(term) || t.name.toLowerCase().includes(term) || t.mint.toLowerCase().startsWith(term)) : list;
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
        <div className="px-2 pb-3 overflow-y-auto" style={{ minHeight: 0 }}>
          <div className="px-3 pb-1 text-[12px]" style={{ color: "var(--v2-t-4)" }}>{shown.length} tokens on Robinhood Chain</div>
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
          {EVM.test(term) && !list.some((t) => t.mint.toLowerCase() === term) && (
            <button
              onClick={() => onPick({ mint: term, symbol: `${term.slice(0, 6)}…${term.slice(-4)}`, name: "Custom token", image: null })}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl text-left transition-colors hover:bg-[var(--v2-bg-2)]"
            >
              <span className="text-[14px]" style={{ color: "var(--v2-t-1)" }}>Use token at {term.slice(0, 6)}…{term.slice(-4)}</span>
            </button>
          )}
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
  const [busy, setBusy] = useState(false);
  const [slip, setSlip] = useState(100);
  useEffect(() => setSlip(slippageBps()), []);
  // Tautan dari Inbox/tabel token: /application/swap?mint=0x…  (&side=sell untuk menjual)
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const m = (q.get("mint") ?? "").trim();
    if (EVM.test(m)) {
      setToken({ mint: m.toLowerCase(), symbol: `${m.slice(0, 6)}…${m.slice(-4)}`, name: "Token from link", image: null });
      if (q.get("side") === "sell") setFlipped(true);
    }
  }, []);
  const isEvm = !!token && EVM.test(token.mint);
  // Token dari tautan/alamat bebas belum punya nama, simbol, dan logo: ambil dari API (token yang sudah terindeks).
  const meta = useApi<{ token: { mint: string; symbol: string | null; name: string | null; image: string | null; poolId: string | null } }>(token && isEvm ? `/api/tokens/${token.mint}` : null);
  useEffect(() => {
    const d = meta.data?.token;
    if (!d) return;
    setToken((t) => (t && t.poolId === undefined && t.mint === d.mint.toLowerCase() ? { ...t, symbol: d.symbol?.trim() || t.symbol, name: d.name?.trim() || t.name, image: d.image ?? t.image, poolId: d.poolId } : t));
  }, [meta.data]);
  const v4Only = !!token?.poolId && token.poolId.length === 66;
  const V4_MSG = "This token trades only on Uniswap v4. Corvid swaps support Uniswap v3 pools for now.";
  const sellAddr = (flipped ? token?.mint : NATIVE_ADDR) as Address;
  const buyAddr = (flipped ? NATIVE_ADDR : token?.mint) as Address;

  useEffect(() => {
    setPlan(null);
    setErr(null);
    setMsg(null);
    if (!setup || !token || !isEvm || !(Number(amount) > 0)) return;
    let alive = true;
    const t = setTimeout(() => {
      planSwap({ account: (w.address as Address | null) ?? null, sell: sellAddr, buy: buyAddr, amount, slippageBps: slip })
        .then((p) => alive && setPlan(p))
        .catch((e: unknown) => alive && setErr(e instanceof Error ? e.message.split("\n")[0] : "Could not get a quote"));
    }, 450);
    return () => {
      alive = false;
      clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount, token, flipped, w.address, slip]);

  const pct = async (p: number) => {
    if (!setup || !w.address || !token || !isEvm) return;
    try {
      const bal = await balanceOf(setup, sellAddr, w.address as Address);
      const dec = await tokenDecimals(setup, sellAddr);
      let v = (bal * BigInt(p)) / 100n;
      if (sellAddr === NATIVE_ADDR && p === 100) v = bal > GAS_RESERVE ? bal - GAS_RESERVE : 0n;
      setAmount(formatUnits(v, dec));
    } catch {
      /* saldo tidak terbaca */
    }
  };

  const act = async () => {
    setBusy(true);
    setErr(null);
    setMsg(null);
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
        const hash = await executePlan(plan, acct, provider);
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
                ~$0
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
              Uniswap v3 · fee {(plan.fee / 10000).toString()}% · slippage {slip / 100}% · minimum received {fmt(plan.minText)}
              {tradeMode() === "dry" ? " · dry mode: no transactions are sent" : ""}
            </p>
          )}
          {err && (
            <p className="px-3 pt-1 text-[12px]" style={{ color: "var(--v2-neg)" }}>{v4Only && err.startsWith("No Uniswap v3 pool") ? V4_MSG : err}</p>
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
