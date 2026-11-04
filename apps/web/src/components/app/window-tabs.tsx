"use client";
import { useState } from "react";

// Pilihan jangka waktu (24h / 7d / 30d / All). Statistik tokenomics baru berubah sesuai jendela
// setelah /tokenomics/summary tersambung di Tahap 2; sekarang hanya status aktif.
const WINDOWS = ["24h", "7d", "30d", "All"] as const;

export function WindowTabs({ initial = "7d", onChange }: { initial?: (typeof WINDOWS)[number]; onChange?: (w: string) => void }) {
  const [w, setW] = useState<string>(initial);
  return (
    <>
      {WINDOWS.map((k) => {
        const on = w === k;
        return (
          <button
            key={k}
            onClick={() => {
              setW(k);
              onChange?.(k);
            }}
            aria-pressed={on}
            className="px-3 py-1.5 rounded-sm font-mono text-[11px] tracking-[0.1em] uppercase transition-colors"
            style={{ background: on ? "var(--v2-accent)" : "transparent", color: on ? "#ffffff" : "var(--v2-t-3)" }}
          >
            {k}
          </button>
        );
      })}
    </>
  );
}
