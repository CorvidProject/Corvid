"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useApi } from "@/lib/api";
import { tokenFallbackStyle } from "@/components/app/token-avatar";

// Mode "Trenches" di /application/terminal: tiga kolom (New / Trending / High Volume).
// Data dari GET /api/tokens/trending, diambil ulang berkala.
type Risk = { name: string; level: string; score: number };
type Tok = {
  name: string;
  symbol: string;
  mint: string;
  image: string | null;
  marketCap: number;
  liquidity: number;
  volume: number;
  change24h: number;
  buys: number;
  sells: number;
  holders: number;
  riskScore: number;
  riskChecked: boolean;
  risks: Risk[] | null;
  lpBurn: number;
  createdAt: number;
};

const EVM_ADDR = /^0x[0-9a-fA-F]{40}$/;
type Raw = { [K in keyof Tok]: Tok[K] | null };
const clean = (list: Raw[] | undefined): Tok[] =>
  (list ?? [])
    .filter((t) => t.mint && EVM_ADDR.test(t.mint))
    .map((t) => ({
      ...t,
      name: t.name ?? "",
      symbol: t.symbol ?? "",
      mint: t.mint as string,
      risks: t.risks ?? null,
      riskChecked: !!t.riskChecked,
      marketCap: t.marketCap ?? 0,
      liquidity: t.liquidity ?? 0,
      volume: t.volume ?? 0,
      change24h: t.change24h ?? 0,
      buys: t.buys ?? 0,
      sells: t.sells ?? 0,
      holders: t.holders ?? 0,
      riskScore: t.riskScore ?? 0,
      lpBurn: t.lpBurn ?? 0,
      createdAt: t.createdAt ?? 0,
    }));

const money = (n: number) =>
  !n
    ? "-"
    : n >= 1e9
      ? `$${(n / 1e9).toFixed(2)}B`
      : n >= 1e6
        ? `$${(n / 1e6).toFixed(2)}M`
        : n >= 1e3
          ? `$${(n / 1e3).toFixed(2)}K`
          : `$${n.toFixed(2)}`;

function ago(ts: number, now: number) {
  if (!ts || !now) return "-";
  const s = Math.max(0, now / 1000 - ts);
  if (s < 60) return `${Math.floor(s)}s ago`;
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  return `${Math.floor(s / 86400)}d ago`;
}

const POS = "var(--v2-pos)";
const NEG = "var(--v2-neg)";
const WARN = "var(--v2-warn)";

function Chip({ children, tone }: { children: React.ReactNode; tone: "pos" | "warn" | "neg" }) {
  const c = tone === "pos" ? POS : tone === "warn" ? WARN : NEG;
  return (
    <span
      className="num px-1.5 py-0.5 rounded-sm shrink-0"
      style={{
        fontSize: 11,
        color: c,
        border: `1px solid color-mix(in srgb, ${c} 35%, transparent)`,
        background: `color-mix(in srgb, ${c} 8%, transparent)`,
      }}
    >
      {children}
    </span>
  );
}

function RiskChips({ t }: { t: Tok }) {
  if (t.riskChecked === false) return null;
  const tone = t.riskScore <= 30 ? "pos" : t.riskScore <= 60 ? "warn" : "neg";
  const top = t.risks?.find((r) => r.name);
  return (
    <div className="mt-1.5 flex items-center gap-1.5 flex-wrap">
      <Chip tone={tone}>Risk {t.riskScore}</Chip>
      {top ? (
        <Chip tone={top.level === "danger" ? "neg" : "warn"}>
          {top.name.replace("concentration", "").replace("Top holder ", "Top holder ").trim()} +{top.score}
        </Chip>
      ) : (
        <Chip tone="pos">Flags Clean</Chip>
      )}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="eyebrow" style={{ fontSize: 11 }}>
      {children}
    </span>
  );
}

function Row({ t, kind, now }: { t: Tok; kind: "new" | "trending" | "volume"; now: number }) {
  const dot = t.riskChecked === false ? "var(--v2-t-4)" : t.riskScore <= 30 ? POS : t.riskScore <= 60 ? WARN : NEG;
  const net = t.buys - t.sells;
  const [imgFailed, setImgFailed] = useState(false);
  return (
    <div className="relative flex gap-3 py-3 px-1 hover:bg-[var(--v2-bg-2)] transition-colors group">
      <Link href={`/application/tokens/${t.mint}?chain=robinhood`} prefetch={false} className="flex gap-3 flex-1 min-w-0">
        <div className="relative shrink-0">
          {t.image && !imgFailed ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={t.image}
              alt=""
              width={36}
              height={36}
              onError={() => setImgFailed(true)}
              className="rounded-full object-cover"
              style={{ width: 36, height: 36, background: "var(--v2-bg-2)" }}
            />
          ) : (
            <div
              className="h-9 w-9 rounded-full flex items-center justify-center num text-[11px] font-semibold"
              style={tokenFallbackStyle(t.mint || t.symbol)}
            >
              {t.symbol.trim().slice(0, 2)}
            </div>
          )}
          <span
            className="absolute rounded-full"
            style={{ bottom: -2, right: -2, width: 6, height: 6, background: dot, boxShadow: "0 0 0 2px var(--v2-bg-1)" }}
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="num text-[13px] font-semibold truncate group-hover:text-[var(--v2-accent-text)] transition-colors" style={{ color: "var(--v2-t-1)" }}>
              {t.symbol.trim()}
            </span>
            <span className="text-[11px] truncate" style={{ color: "var(--v2-t-4)" }}>
              {t.name.trim()}
            </span>
            <span className="num text-[11px] ml-auto shrink-0" style={{ color: "var(--v2-t-3)" }} suppressHydrationWarning>
              {ago(t.createdAt, now)}
            </span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className="num text-[12px] font-medium" style={{ color: "var(--v2-t-1)" }}>
              {money(t.marketCap)}
            </span>
            <span className="num text-[11px]" style={{ color: t.change24h >= 0 ? POS : NEG }}>
              {t.change24h >= 0 ? "+" : ""}
              {t.change24h.toFixed(1)}%
            </span>
            <Label>24h</Label>
          </div>
          <RiskChips t={t} />
          <div className="flex items-center gap-3 num text-[11px] mt-1.5" style={{ color: "var(--v2-t-4)" }}>
            {kind === "new" ? (
              <>
                <span>
                  <Label>LP </Label>
                  <span style={{ color: t.lpBurn >= 95 ? POS : t.lpBurn >= 50 ? "var(--v2-t-3)" : NEG }}>
                    {t.lpBurn ? `${Math.round(t.lpBurn)}%` : "-"}
                  </span>
                </span>
                <span>
                  <Label>LIQ </Label>
                  <span style={{ color: "var(--v2-t-2)" }}>{money(t.liquidity)}</span>
                </span>
              </>
            ) : kind === "trending" ? (
              <>
                <span>
                  <span style={{ color: POS }}>{t.buys}</span>
                  <span className="mx-0.5">·</span>
                  <span style={{ color: NEG }}>{t.sells}</span>
                </span>
                <span>
                  <Label>VOL </Label>
                  <span style={{ color: "var(--v2-pos)" }}>{money(t.volume)}</span>
                </span>
              </>
            ) : (
              <>
                <span>
                  <Label>NET </Label>
                  <span style={{ color: net >= 0 ? POS : NEG }}>
                    {net >= 0 ? "+" : ""}
                    {net}
                  </span>
                </span>
                <span>
                  <Label>VOL </Label>
                  <span style={{ color: "var(--v2-pos)" }}>{money(t.volume)}</span>
                </span>
              </>
            )}
            <span>
              <Label>HOLD </Label>
              <span style={{ color: "var(--v2-t-3)" }}>{t.holders || "-"}</span>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

function Column({ title, hint, kind, tokens, now }: { title: string; hint: string; kind: "new" | "trending" | "volume"; tokens: Tok[]; now: number }) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-3">
        <h3 className="font-heading font-semibold text-[14px]" style={{ color: "var(--v2-t-1)" }}>
          {title}
        </h3>
        <div className="flex items-center gap-2">
          <span className="eyebrow flex items-center gap-1" style={{ color: POS, fontSize: 11 }}>
            <span className="dot dot-pos dot-pulse"></span>LIVE
          </span>
          <span className="eyebrow" style={{ color: "var(--v2-t-4)" }}>
            {hint}
          </span>
        </div>
      </div>
      <div style={{ borderTop: "1px solid var(--v2-line-1)" }}>
        {tokens.length === 0 ? (
          <div className="py-6 text-center eyebrow" style={{ color: "var(--v2-t-4)" }}>
            No tokens
          </div>
        ) : (
          tokens.map((t) => <Row key={t.mint} t={t} kind={kind} now={now} />)
        )}
      </div>
    </div>
  );
}

export function Trenches() {
  const [now, setNow] = useState(0);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 30000);
    return () => clearInterval(id);
  }, []);
  const newData = useApi<{ tokens: Raw[] }>("/api/tokens/trending?tab=new&limit=200", 20_000).data;
  const trendData = useApi<{ tokens: Raw[] }>("/api/tokens/trending?tab=trending&limit=200", 20_000).data;
  const cols = useMemo(() => {
    const fresh = clean(newData?.tokens).sort((a, b) => b.createdAt - a.createdAt).slice(0, 12);
    const all = clean(trendData?.tokens);
    const trend = all.slice(0, 12);
    const vol = [...all].sort((a, b) => b.volume - a.volume).slice(0, 12);
    return { fresh, trend, vol };
  }, [newData, trendData]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" style={{ paddingBottom: 40 }}>
      <Column title="New" hint="Fresh pools · Robinhood Chain" kind="new" tokens={cols.fresh} now={now} />
      <Column title="Trending" hint="Most trades, 24h · Robinhood Chain" kind="trending" tokens={cols.trend} now={now} />
      <Column title="High Volume" hint="Top 24h volume · Robinhood Chain" kind="volume" tokens={cols.vol} now={now} />
    </div>
  );
}
