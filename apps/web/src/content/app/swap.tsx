"use client";
import { useEffect, useMemo, useState } from "react";
import { DotBackdrop } from "@/components/app/dot-backdrop";
import trending from "@/data/tokens-trending.json";
import memescope from "@/data/memescope.json";

type SwapToken = {
  mint: string;
  symbol: string;
  name: string;
  image: string | null;
  price?: number;
  marketCap?: number;
  change24h?: number;
};

// Solana saja: aset native adalah SOL.
const SOL: SwapToken = {
  mint: "So11111111111111111111111111111111111111112",
  symbol: "SOL",
  name: "Solana",
  image: "/chains/solana.png",
};

function allTokens(): SwapToken[] {
  const seen = new Set<string>([SOL.mint]);
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
  const list = useMemo(() => allTokens(), []);
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
          <div className="px-3 pb-1 text-[12px]" style={{ color: "var(--v2-t-4)" }}>{shown.length} tokens on Solana</div>
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
          {shown.length === 0 && <div className="px-3 py-6 text-[14px]" style={{ color: "var(--v2-t-3)" }}>No token found</div>}
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
  const usd = token?.price && flipped && amount ? Number(amount) * token.price : 0;
  const sellPill = flipped ? (
    <TokenButton token={token} onClick={() => setOpen(true)} />
  ) : (
    <TokenChip token={SOL} />
  );
  const buyPill = flipped ? (
    <TokenChip token={SOL} />
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
                  className="num text-[13px] transition-colors hover:text-[var(--v2-t-1)] disabled:opacity-40"
                  style={{ color: "var(--v2-t-3)" }}
                >
                  25%
                </button>
                <button
                  className="num text-[13px] transition-colors hover:text-[var(--v2-t-1)] disabled:opacity-40"
                  style={{ color: "var(--v2-t-3)" }}
                >
                  50%
                </button>
                <button
                  className="num text-[13px] transition-colors hover:text-[var(--v2-t-1)] disabled:opacity-40"
                  style={{ color: "var(--v2-t-3)" }}
                >
                  75%
                </button>
                <button
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
                style={{ color: "var(--v2-t-4)" }}
              >
                0.0
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
          <button data-auth-open="signin" className="crv-swap-cta mt-2 w-full h-14 rounded-[20px] text-[16px] font-semibold flex items-center justify-center gap-2 disabled:cursor-not-allowed">
            Sign in to swap
          </button>
          <TokenModal open={open} onClose={() => setOpen(false)} onPick={(t) => { setToken(t); setOpen(false); }} />
        </div>
      </div>
    </>
  );
}
