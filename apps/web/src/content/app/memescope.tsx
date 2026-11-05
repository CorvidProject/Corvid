"use client";
import { useMemo, useState } from "react";
import { ArrowSquareOut, Fire, Robot, Rocket, GraduationCap } from "@phosphor-icons/react";
import { useApi } from "@/lib/api";
import { money } from "@/components/app/token-board";

// Memescope: peluncuran token di launchpad Pons V2 (Robinhood Chain), dari kurva sampai DEX. Progres = ETH terkumpul di kurva / ambang
// kelulusan (perkiraan, lihat apps/worker/src/sources/pons.ts). Data dari GET /api/solana/memescope (nama rute lama dipertahankan;
// fixture atau backend, lihat src/lib/api.ts).
type Coin = {
  mint: string;
  name: string;
  symbol: string;
  image: string | null;
  progress: number;
  marketCapUsd: number;
  createdAt: number;
  complete: boolean;
  dex?: string;
};
type Sort = "new" | "mc";
// "uniswap-v3-robinhood" → "Uniswap v3"
const dexLabel = (d: string) => d.replace(/-robinhood$/i, "").replace(/-v(\d)$/i, " v$1").replace(/^\w/, (c) => c.toUpperCase());

const MINT = /^0x[0-9a-fA-F]{40}$/;
type RawCoin = { [K in keyof Coin]: Coin[K] | null };
const pick = (a: { coins: RawCoin[] } | null): Coin[] =>
  (a?.coins ?? [])
    .filter((c) => c.mint && MINT.test(c.mint))
    .map((c) => ({
      ...c,
      mint: c.mint as string,
      name: c.name ?? "",
      symbol: c.symbol ?? "",
      progress: c.progress ?? 0,
      marketCapUsd: c.marketCapUsd ?? 0,
      createdAt: c.createdAt ?? 0,
      complete: !!c.complete,
      dex: c.dex ? dexLabel(c.dex) : undefined,
    }));

function age(ts: number, now: number) {
  const s = Math.max(0, Math.floor(now / 1000 - ts));
  if (s < 60) return s + "s ago";
  if (s < 3600) return Math.floor(s / 60) + "m ago";
  if (s < 86400) return Math.floor(s / 3600) + "h ago";
  return Math.floor(s / 86400) + "d ago";
}

function Column({
  title,
  hint,
  icon,
  coins,
  q,
  now,
  showDex,
  emptyText,
}: {
  title: string;
  hint: string;
  icon: React.ReactNode;
  coins: Coin[];
  q: string;
  now: number;
  showDex?: boolean;
  emptyText?: string;
}) {
  const [sort, setSort] = useState<Sort>("new");
  const rows = useMemo(() => {
    const s = q.trim().toLowerCase();
    return coins
      .filter((c) => !s || c.name.toLowerCase().includes(s) || c.symbol.toLowerCase().includes(s) || c.mint.toLowerCase().startsWith(s))
      .sort((a, b) => (sort === "new" ? b.createdAt - a.createdAt : (b.marketCapUsd ?? 0) - (a.marketCapUsd ?? 0)));
  }, [coins, q, sort]);

  return (
    <section
      className="rounded-2xl flex flex-col lg:h-[calc(100vh-180px)]"
      style={{ background: "var(--v2-bg-1)", border: "1px solid var(--v2-line-1)" }}
    >
      <div className="flex items-center gap-2 px-4 h-12 shrink-0" style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
        <span style={{ color: "var(--v2-accent-text)", display: "inline-flex" }}>{icon}</span>
        <span className="text-[14px] font-semibold" style={{ color: "var(--v2-t-1)" }}>
          {title}
        </span>
        <span className="text-[12px] hidden xl:inline" style={{ color: "var(--v2-t-4)" }}>
          {hint}
        </span>
        <span className="ml-auto flex items-center gap-2">
          <button
            onClick={() => setSort((s) => (s === "new" ? "mc" : "new"))}
            className="text-[11px] px-2 py-0.5 rounded-sm transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ color: "var(--v2-t-3)", border: "1px solid var(--v2-line-1)" }}
            title="Toggle sort"
          >
            {sort === "new" ? "Newest" : "Top MC"}
          </button>
          <span className="num text-[11px]" style={{ color: "var(--v2-t-4)" }}>
            {rows.length}
          </span>
        </span>
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto token-col-scroll">
        {rows.length === 0 && (
          <p className="px-4 py-10 text-center text-[13px]" style={{ color: "var(--v2-t-4)" }}>
            {q ? `No match for “${q}”` : (emptyText ?? "Nothing here yet")}
          </p>
        )}
        {rows.map((c, i) => (
          <div
            key={c.mint}
            className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: i ? "1px solid var(--v2-line-1)" : undefined }}
          >
            <a className="flex gap-3" href={`/application/tokens/${c.mint}?chain=robinhood`}>
              <span className="relative shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt=""
                  width={48}
                  height={48}
                  className="rounded-sm object-cover shrink-0"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  src={c.image ?? ""}
                  style={{ width: 48, height: 48, background: "var(--v2-bg-2)" }}
                />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-baseline gap-2">
                  <span className="text-[14px] font-semibold truncate" style={{ color: "var(--v2-t-1)" }}>
                    {c.symbol}
                  </span>
                  <span className="text-[12px] truncate" style={{ color: "var(--v2-t-4)" }}>
                    {c.name}
                  </span>
                </span>
                <span className="flex items-center gap-2.5 mt-0.5 text-[12px]" style={{ color: "var(--v2-t-4)" }}>
                  <span className="num">{age(c.createdAt, now)}</span>
                  {showDex && c.dex && (
                    <span className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded" style={{ color: "var(--v2-t-3)", background: "var(--v2-bg-2)" }}>
                      {c.dex}
                    </span>
                  )}
                </span>
                {!showDex && (
                  <span className="flex items-center gap-2 mt-2">
                    <span className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "var(--v2-bg-3, rgba(255,255,255,0.06))" }}>
                      <span
                        className="block h-full rounded-full"
                        style={{ width: `${Math.min(100, Math.max(0, c.progress))}%`, background: "linear-gradient(90deg, #0024a7, var(--v2-accent))" }}
                      ></span>
                    </span>
                    <span className="num text-[11px] w-10 text-right" style={{ color: "var(--v2-t-3)" }}>
                      ~{Math.round(c.progress)}%
                    </span>
                  </span>
                )}
              </span>
              <span className="text-right shrink-0">
                <span className="block text-[11px]" style={{ color: "var(--v2-t-4)" }}>
                  MC
                </span>
                <span className="block num text-[14px] font-semibold" style={{ color: "var(--v2-t-1)" }}>
                  {money(c.marketCapUsd)}
                </span>
              </span>
            </a>
            <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity">
              <a
                title={`Deploy an agent on $${c.symbol}`}
                aria-label={`Deploy an agent on $${c.symbol}`}
                href={`/application/agents/new?token=${c.mint}`}
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)]"
                style={{ color: "var(--v2-accent-text)", border: "1px solid rgba(var(--v2-accent-rgb),0.4)", background: "var(--v2-bg-1)" }}
              >
                <Robot size={14} />
              </a>
              <a
                href={`https://dexscreener.com/robinhood/${c.mint}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open on DexScreener"
                className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                style={{ color: "var(--v2-t-3)" }}
              >
                <ArrowSquareOut size={12} />
              </a>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ApplicationMemescopeContent() {
  const [q, setQ] = useState("");
  const [now] = useState(() => Date.now());
  // Sumber: kurva launchpad Pons V2 (worker membaca saldo ETH kontrak kurva). Tahap lain dari API apa adanya.
  const n = useApi<{ coins: RawCoin[] }>("/api/solana/memescope?stage=new");
  const st = useApi<{ coins: RawCoin[] }>("/api/solana/memescope?stage=stretch");
  const mg = useApi<{ coins: RawCoin[] }>("/api/solana/memescope?stage=migrated");
  const cols = useMemo(() => ({ n: pick(n.data), s: pick(st.data), m: pick(mg.data) }), [n.data, st.data, mg.data]);

  return (
    <div className="max-w-[1700px] mx-auto">
      <div className="flex items-center gap-3 mb-5 flex-wrap">
        <div>
          <h1 className="text-[22px] font-semibold leading-tight" style={{ color: "var(--v2-t-1)" }}>
            Memescope
          </h1>
          <p className="text-[13px]" style={{ color: "var(--v2-t-3)" }}>
            New token launches, from first trade to the DEX
          </p>
        </div>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search name, symbol or mint"
          aria-label="Search memescope"
          className="input-v2 h-8 w-full sm:w-64 text-[13px] sm:ml-6 order-3 sm:order-none"
        />
        <span className="ml-auto flex items-center gap-1.5 eyebrow" style={{ color: "var(--v2-pos)" }}>
          <span className="dot dot-pos dot-pulse"></span> LIVE
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <Column title="New" hint="Early on the curve" icon={<Rocket size={16} />} coins={cols.n} q={q} now={now} />
        <Column title="Final Stretch" hint="Past halfway to graduating" icon={<Fire size={16} />} coins={cols.s} q={q} now={now} />
        <Column title="Migrated" hint="Now trading on a DEX" icon={<GraduationCap size={16} />} coins={cols.m} q={q} now={now} showDex />
      </div>
    </div>
  );
}
