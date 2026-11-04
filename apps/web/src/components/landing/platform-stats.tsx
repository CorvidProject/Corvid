"use client";
import stats from "@/server/data/stats.json";
import live from "@/data/live-agent.json";

// Panel "platform" di kartu Agents (landing): angka dari fixture /stats dan langkah eksekusi terakhir
// dari fixture /public/live-agent. Diganti API di Tahap 2.
const STEPS = (live.agent.lastRun?.steps ?? []) as { step: string; outcome: string }[];
const CELLS: [string, number][] = [
  ["Agents", stats.activeAgents],
  ["Swaps", stats.swapsExecuted],
  ["Wallets", stats.smartWallets],
  ["Public", stats.publishedAgents],
];

export function PlatformStats() {
  return (
    <>
      <div className="grid grid-cols-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        {CELLS.map(([l, v]) => (
          <div key={l} className="px-3 py-2">
            <div className="text-[8px] uppercase tracking-[0.16em]" style={{ color: "rgba(255,255,255,0.55)" }}>
              {l}
            </div>
            <div className="font-mono text-[13px] font-semibold tabular-nums mt-0.5" style={{ color: "#ffffff" }}>
              {v.toLocaleString("en-US")}
            </div>
          </div>
        ))}
      </div>
      <div className="px-3 pt-2 pb-1 text-[8px] uppercase tracking-[0.16em]" style={{ color: "rgba(255,255,255,0.55)" }}>
        Recent passes
      </div>
      <div>
        {STEPS.slice(0, 4).map((s) => (
          <div key={s.step} className="flex items-center justify-between px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
            <span style={{ color: "rgba(255,255,255,0.7)" }}>{s.step}</span>
            <span style={{ color: s.outcome === "passed" ? "var(--v2-pos)" : "rgba(255,255,255,0.5)" }}>{s.outcome}</span>
          </div>
        ))}
      </div>
    </>
  );
}
