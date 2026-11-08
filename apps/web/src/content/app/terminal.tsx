"use client";
import { Suspense, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Trenches } from "@/components/app/trenches";
import { useApi } from "@/lib/api";
import { cleanTokens, EMPTY_FILTERS, FilterBar, IntervalControls, TrendingRows, useFiltered, useNow, type Filters, type Interval } from "@/components/app/trending-table";

// Data pasar diambil ulang tiap 20 detik (worker memperbarui sumbernya tiap menit).
const REFRESH_MS = 45_000;
const fmtMcap = (n: number | null) => (n === null ? "-" : n >= 1e6 ? `${(n / 1e6).toFixed(2)}M` : n >= 1e3 ? `${(n / 1e3).toFixed(2)}K` : `${n.toFixed(0)}`);

function TerminalInner() {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [interval, setInterval_] = useState<Interval>("24h");
  const [filters, setFilters] = useState<Filters>({ ...EMPTY_FILTERS, signals: { ...EMPTY_FILTERS.signals } });
  const [spinning, setSpinning] = useState(false);
  const [now, bump] = useNow();
  const { data } = useApi<{ tokens: Parameters<typeof cleanTokens>[0] }>("/api/tokens/trending?tab=trending&limit=200", REFRESH_MS);
  const tokens = useMemo(() => cleanTokens(data?.tokens), [data]);
  const TICKER = useMemo(() => tokens.slice(0, 10), [tokens]);
  const rows = useFiltered(tokens, filters, now);
  const refresh = () => {
    setSpinning(true);
    bump();
    setTimeout(() => setSpinning(false), 700);
  };
  const mode: "trending" | "trenches" = params.get("mode") === "trenches" ? "trenches" : "trending";
  const setMode = (m: "trending" | "trenches") => {
    const q = new URLSearchParams(params.toString());
    if (m === "trending") q.delete("mode");
    else q.set("mode", m);
    const qs = q.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };
  return (
    <>
      <div className="mb-2">
        <div className="crv-ticker" role="region" aria-label="Trending tokens">
          <span className="crv-ticker__label">Trending</span>
          <div className="crv-ticker__viewport">
            <div className="crv-ticker__track" style={{ animationDuration: "96s" }}>
              {[0, 1].map((dup) =>
                TICKER.map((t) => (
                  <a key={dup + t.mint} className="crv-ticker__item" aria-hidden={dup === 1} tabIndex={dup === 1 ? -1 : undefined} href={`/application/tokens/${t.mint}?chain=robinhood`}>
                    {t.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img alt="" width="16" height="16" className="crv-ticker__icon" src={t.image} />
                    ) : null}
                    <span className="crv-ticker__sym">{t.symbol}</span>
                    <span className="crv-ticker__mcap">{fmtMcap(t.marketCap)}</span>
                    <span className="crv-ticker__chg" style={{ color: (t.change24h ?? 0) >= 0 ? "var(--v2-pos)" : "var(--v2-neg)" }}>
                      {(t.change24h ?? 0) >= 0 ? "↗" : "↘"} {Math.abs(t.change24h ?? 0).toFixed(1)}%
                    </span>
                  </a>
                )),
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1800px] mx-auto">
        <div
          className="flex items-center justify-between gap-3 sm:gap-6 px-4 sm:px-8"
          style={{ borderBottom: "1px solid var(--v2-line-1)" }}
        >
          <div className="crv-tabs flex items-center">
            {(["trending", "trenches"] as const).map((k) => {
              const active = mode === k;
              return (
                <button
                  key={k}
                  onClick={() => setMode(k)}
                  aria-pressed={active}
                  className="relative py-3.5 text-[14px] sm:text-[15px] tracking-wide transition-colors"
                  style={{
                    color: active ? "var(--v2-t-1)" : "var(--v2-t-4)",
                    fontWeight: active ? "600" : "400",
                  }}
                >
                  {k === "trending" ? "Trending" : "Trenches"}
                  {active && (
                    <span
                      className="absolute left-0 right-0"
                      style={{ bottom: "-1px", height: "2px", background: "var(--v2-accent)" }}
                    ></span>
                  )}
                </button>
              );
            })}
          </div>
          {mode === "trending" && (
            <IntervalControls value={interval} onChange={setInterval_} onRefresh={refresh} spinning={spinning} />
          )}
        </div>
        {mode === "trending" ? (
        <>
          <FilterBar filters={filters} onChange={setFilters} />
          <TrendingRows tokens={rows} interval={interval} now={now} reset={() => setFilters({ ...EMPTY_FILTERS, signals: { ...EMPTY_FILTERS.signals } })} />
        </>
        ) : (
          <div className="px-5 sm:px-8 pt-4">
            <Trenches />
          </div>
        )}
      </div>
    </>
  );
}


export function ApplicationTerminalContent() {
  return (
    <Suspense fallback={null}>
      <TerminalInner />
    </Suspense>
  );
}
