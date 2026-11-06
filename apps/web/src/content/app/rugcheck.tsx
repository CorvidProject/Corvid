"use client";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { DotBackdrop } from "@/components/app/dot-backdrop";
import { USE_API, apiGet, useApi } from "@/lib/api";

type Hit = { mint: string; symbol: string | null; name: string | null };
const EVM = /^0x[0-9a-fA-F]{40}$/;
const open = (mint: string) => `/application/tokens/${mint.toLowerCase()}`;

// Rugcheck: alamat 0x langsung ke halaman detail token (laporan keamanan ada di sana); nama/simbol dicari lewat /api/search.
export function ApplicationRugcheckContent() {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [hits, setHits] = useState<Hit[]>([]);
  // Contoh diambil dari token yang benar-benar terindeks; diutamakan yang sudah punya laporan keamanan.
  const trending = useApi<{ tokens: (Hit & { riskChecked?: boolean })[] }>(USE_API ? "/api/tokens/trending?limit=20" : null);
  const examples = [...(trending.data?.tokens ?? [])].sort((a, b) => Number(!!b.riskChecked) - Number(!!a.riskChecked)).slice(0, 2);

  async function submit(e: FormEvent) {
    e.preventDefault();
    const term = q.trim().replace(/^\$/, "");
    setMsg(null);
    setHits([]);
    if (!term) return;
    if (EVM.test(term)) return router.push(open(term));
    if (!USE_API) return setMsg("Search needs the live API. Paste a 0x contract address instead.");
    setBusy(true);
    try {
      const r = await apiGet<{ tokens: Hit[] }>(`/api/search?q=${encodeURIComponent(term.slice(0, 100))}`);
      if (r.tokens.length === 1) return router.push(open(r.tokens[0].mint));
      if (r.tokens.length === 0) setMsg("No indexed token matches that. Try the full 0x contract address.");
      setHits(r.tokens.slice(0, 8));
    } catch {
      setMsg("Search failed. Try again in a moment.");
    } finally {
      setBusy(false);
    }
  }
  return (
    <>
      <section className="relative overflow-hidden min-h-[88vh] flex items-center justify-center px-4 pt-20 pb-16">
        <DotBackdrop variant="scan" />
        <div
          className="absolute inset-x-0 top-0 h-24 pointer-events-none"
          style={{
            background: "linear-gradient(rgb(20, 25, 29), transparent)",
          }}
        ></div>
        <div
          className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
          style={{
            background: "linear-gradient(0deg, rgb(20, 25, 29), transparent)",
          }}
        ></div>
        <div className="relative z-10 w-full max-w-[680px] text-center">
          <h1
            className="font-heading font-extrabold tracking-[-0.045em] leading-none"
            style={{
              color: "rgb(244, 244, 250)",
              fontSize: "clamp(3rem, 8vw, 6.5rem)",
            }}
          >
            Rugcheck
          </h1>
          <p
            className="mt-6 text-[18px] sm:text-[20px] leading-snug"
            style={{
              color: "rgba(255, 255, 255, 0.75)",
              textShadow: "rgb(20, 25, 29) 0px 0px 14px",
            }}
          >
            Contract, holder and liquidity checks on any Robinhood Chain token. A score before you trade.
          </p>
          <form className="relative mt-10" onSubmit={(e) => void submit(e)}>
            <div
              className="flex items-center gap-2 h-16 pl-6 pr-2 rounded-full"
              style={{
                background: "rgb(26, 32, 37)",
                boxShadow:
                  "rgba(255, 255, 255, 0.12) 0px 0px 0px 1px inset, rgba(12, 14, 17, 0.9) 0px 20px 50px -20px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 256 256"
                style={{ color: "var(--v2-t-4)" }}
              >
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
              <input
                placeholder="Token name, ticker or address"
                className="flex-1 min-w-0 bg-transparent outline-none text-[16px]"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                style={{ color: "var(--v2-t-1)" }}
              />
              <button
                type="submit"
                disabled={busy}
                className="crv-swap-cta h-12 px-7 rounded-full text-[15px] font-semibold disabled:opacity-60"
              >
                {busy ? "Searching…" : "Analyze"}
              </button>
            </div>
          </form>
          <div
            className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 mt-8 text-[14px]"
            style={{ color: "rgba(255, 255, 255, 0.65)" }}
          >
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="currentColor"
                viewBox="0 0 256 256"
                style={{ color: "var(--v2-pos)" }}
              >
                <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
              </svg>
              Any token, one search
            </span>
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="currentColor"
                viewBox="0 0 256 256"
                style={{ color: "var(--v2-pos)" }}
              >
                <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
              </svg>
              Honeypot, tax and ownership checks
            </span>
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="currentColor"
                viewBox="0 0 256 256"
                style={{ color: "var(--v2-pos)" }}
              >
                <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
              </svg>
              Holder and liquidity spread
            </span>
          </div>
          {msg && (
            <p role="status" className="mt-6 text-[14px]" style={{ color: "var(--v2-t-3)" }}>
              {msg}
            </p>
          )}
          {hits.length > 0 && (
            <ul className="mt-6 m-0 p-0 list-none flex flex-col gap-2 text-left">
              {hits.map((h) => (
                <li key={h.mint}>
                  <button type="button" onClick={() => router.push(open(h.mint))} className="w-full flex items-center justify-between gap-3 h-11 px-4 rounded-[12px] text-[14px]" style={{ background: "rgb(26, 32, 37)", border: "1px solid rgba(255, 255, 255, 0.1)", color: "var(--v2-t-1)" }}>
                    <span className="font-semibold">{h.symbol ?? "?"} <span style={{ color: "var(--v2-t-4)", fontWeight: 400 }}>{h.name}</span></span>
                    <span className="font-mono text-[12px]" style={{ color: "var(--v2-t-4)" }}>{h.mint.slice(0, 6)}…{h.mint.slice(-4)}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
          {examples.length > 0 && (
            <div className="mt-8">
              <div className="text-[12px] uppercase tracking-[0.12em] mb-3" style={{ color: "rgba(255, 255, 255, 0.4)" }}>
                Try one
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {examples.map((t) => (
                  <button
                    key={t.mint}
                    type="button"
                    onClick={() => router.push(open(t.mint))}
                    className="flex items-center gap-2 h-9 pl-1.5 pr-3.5 rounded-full text-[13px] transition-colors hover:bg-[#1A1A20]"
                    style={{ background: "rgb(26, 32, 37)", border: "1px solid rgba(255, 255, 255, 0.1)", color: "var(--v2-t-2)" }}
                  >
                    <span aria-hidden className="inline-block rounded-full shrink-0" style={{ width: 22, height: 22, background: "var(--v2-accent)" }} />
                    <span className="font-semibold" style={{ color: "var(--v2-t-1)" }}>
                      {t.symbol ?? t.mint.slice(0, 6)}
                    </span>
                    <span style={{ color: "var(--v2-t-4)" }}>Robinhood Chain</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      <div className="max-w-[760px] mx-auto px-4 pb-20 scroll-mt-20"></div>
    </>
  );
}
