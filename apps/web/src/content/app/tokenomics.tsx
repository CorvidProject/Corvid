"use client";
import { useState } from "react";
import { Flame } from "@phosphor-icons/react";
import { WindowTabs } from "@/components/app/window-tabs";
import data from "@/data/tokenomics.json";

// Your fees: ringkasan fee 1% swap. Token $CRVD belum diluncurkan (status not_launched), jadi tidak ada
// pembakaran/pembagian yang bisa ditampilkan. Diganti /tokenomics/summary di Tahap 2.
export function ApplicationTokenomicsContent() {
  const [w, setW] = useState("7d");
  const launched = data.status !== "not_launched";
  const stats = [
    { l: "Fees paid", v: "$0.00" },
    { l: "Burned", v: `${data.burned} ${data.token}` },
    { l: "Burn events", v: String(data.burnEvents.length) },
  ];

  return (
    <div className="mx-auto px-6 lg:px-12 pt-24 pb-16" style={{ maxWidth: "1200px" }}>
      <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Flame size={28} style={{ color: "var(--v2-accent-text)" }} />
            <h1 className="font-heading font-semibold text-[24px] tracking-[-0.02em] m-0" style={{ color: "var(--v2-t-0)" }}>
              Your fees
            </h1>
          </div>
          <p className="text-[14px] m-0" style={{ color: "var(--v2-t-3)" }}>
            Where the 1% fee on your swaps goes
          </p>
        </div>
        <div className="flex gap-1 p-1 rounded-md" style={{ background: "var(--v2-bg-1)", border: "1px solid var(--v2-line-2)" }}>
          <WindowTabs initial="7d" onChange={setW} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        {stats.map((s) => (
          <div key={s.l} className="rounded-2xl p-4" style={{ background: "var(--v2-bg-1)", border: "1px solid var(--v2-line-1)" }}>
            <div className="eyebrow mb-1">
              {s.l} · {w}
            </div>
            <div className="num text-[22px] font-semibold" style={{ color: "var(--v2-t-1)" }}>
              {s.v}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl p-5 text-[13px]" style={{ background: "var(--v2-bg-1)", border: "1px solid var(--v2-line-1)", color: "var(--v2-t-3)" }}>
        {launched
          ? "Burn events appear here as they happen."
          : `$${data.token} has not launched yet. Swap fees are not collected during testing, and no burns have taken place.`}
      </div>
    </div>
  );
}
