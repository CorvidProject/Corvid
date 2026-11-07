"use client";
import { useState, type CSSProperties } from "react";

// Logo token. Banyak token (terutama tiruan/baru) tidak punya gambar di sumber mana pun (DexScreener/GeckoTerminal/CoinGecko),
// jadi tanpa gambar atau saat gagal dimuat ditampilkan lingkaran gradasi dengan inisial simbol: warnanya tetap untuk token
// yang sama dan bervariasi antar token (keluarga abu-biru palet Corvid), bukan kotak kosong.

function hash(str: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h >>> 0;
}

/** Gaya pengganti logo (gradasi + garis tepi + warna huruf) dari benih (mint atau simbol). */
export function tokenFallbackStyle(seed: string): CSSProperties {
  const h = 195 + (hash(seed.toLowerCase()) % 31); // 195–225
  return {
    background: `linear-gradient(135deg, hsl(${h} 32% 34%), hsl(${h} 30% 20%))`,
    border: `1px solid hsl(${h} 35% 58% / 0.4)`,
    color: `hsl(${h} 45% 88%)`,
  };
}

export function TokenAvatar({ src, symbol, size, radius = "50%", seed }: { src: string | null | undefined; symbol: string | null | undefined; size: number; radius?: string; seed?: string }) {
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
      style={{ ...box, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: Math.round(size * 0.38), fontWeight: 600, ...tokenFallbackStyle(seed ?? symbol ?? "?") }}
    >
      {letter}
    </span>
  );
}
