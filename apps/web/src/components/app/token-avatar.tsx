"use client";
import { useState } from "react";

// Logo token. Banyak token baru tidak punya gambar di sumber mana pun (DexScreener/GeckoTerminal), jadi tanpa gambar
// atau saat gagal dimuat ditampilkan inisial simbol, bukan kotak kosong.
export function TokenAvatar({ src, symbol, size, radius = "50%" }: { src: string | null | undefined; symbol: string | null | undefined; size: number; radius?: string }) {
  const [bad, setBad] = useState(false);
  const box = { width: size, height: size, borderRadius: radius, flexShrink: 0 } as const;
  if (src && !bad) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt="" width={size} height={size} src={src} referrerPolicy="no-referrer" loading="lazy" onError={() => setBad(true)} style={{ ...box, objectFit: "cover", background: "var(--v2-bg-2)" }} />;
  }
  const letter = (symbol ?? "").replace(/^\$/, "").slice(0, 1).toUpperCase() || "?";
  return (
    <span
      aria-hidden
      style={{ ...box, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: Math.round(size * 0.38), fontWeight: 600, background: "rgba(var(--v2-accent-rgb), 0.18)", color: "var(--v2-accent-text)", border: "1px solid rgba(var(--v2-accent-rgb), 0.3)" }}
    >
      {letter}
    </span>
  );
}
