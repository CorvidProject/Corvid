"use client";
import { useEffect, useState, type CSSProperties } from "react";

// Token logos with canonical and on-demand fallback resolution.
// If a token image is missing from the database, it resolves against known canonical tokens
// or performs an on-demand lookup against GeckoTerminal/DexScreener before displaying the initial letter badge.

const EVM_ADDR = /^0x[0-9a-fA-F]{40}$/;
const logoCache = new Map<string, string | null>();

const KNOWN_LOGOS: Record<string, string> = {
  weth: "/brand/eth.svg",
  eth: "/brand/eth.svg",
  usdg: "/brand/usdg.svg",
  usdc: "/brand/usdc.svg",
  usdt: "/brand/usdt.svg",
  virtual: "/brand/virtual.png",
  pons: "/brand/pons.png",
  cashcat: "/brand/cashcat.png",
  "0x5fc5360d0400a0fd4f2af552add042d716f1d168": "/brand/usdg.svg",
  "0x0bd7d308f8e1639fab988df18a8011f41eacad73": "/brand/eth.svg",
  "0xc6911796042b15d7fa4f6cde69e245ddcd3d9c31": "/brand/virtual.png",
  "0x39dbed3a2bd333467115de45665cc57f813c4571": "/brand/pons.png",
  "0x020bfc650a365f8bb26819deaabf3e21291018b4": "/brand/cashcat.png",
};

function hash(str: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h >>> 0;
}

/** Fallback styling from seed (mint or symbol). */
export function tokenFallbackStyle(seed: string): CSSProperties {
  const h = 195 + (hash(seed.toLowerCase()) % 31);
  return {
    background: `linear-gradient(135deg, hsl(${h} 32% 34%), hsl(${h} 30% 20%))`,
    border: `1px solid hsl(${h} 35% 58% / 0.4)`,
    color: `hsl(${h} 45% 88%)`,
  };
}

export function TokenAvatar({
  src,
  symbol,
  size,
  radius = "50%",
  seed,
}: {
  src: string | null | undefined;
  symbol: string | null | undefined;
  size: number;
  radius?: string;
  seed?: string;
}) {
  const [bad, setBad] = useState(false);
  const [resolved, setResolved] = useState<string | null>(null);

  const symKey = (symbol ?? "").replace(/^\$/, "").toLowerCase().trim();
  const seedKey = (seed ?? "").toLowerCase().trim();
  const known = KNOWN_LOGOS[seedKey] ?? KNOWN_LOGOS[symKey] ?? null;

  const effectiveSrc = (!bad && src) ? src : (known ?? resolved);

  useEffect(() => {
    if (effectiveSrc || !seed || !EVM_ADDR.test(seed)) return;
    const key = seed.toLowerCase();
    const cached = logoCache.get(key);
    if (cached !== undefined) {
      if (cached) setResolved(cached);
      return;
    }

    let active = true;
    (async () => {
      // 1. Try GeckoTerminal
      try {
        const gtRes = await fetch(`https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/${key}`, {
          headers: { Accept: "application/json;version=20230302" },
        });
        if (gtRes.ok) {
          const data = (await gtRes.json()) as { data?: { attributes?: { image_url?: string | null } } };
          const img = data.data?.attributes?.image_url;
          if (img && !/missing/i.test(img)) {
            logoCache.set(key, img);
            if (active) setResolved(img);
            return;
          }
        }
      } catch {}

      // 2. Try DexScreener
      try {
        const dsRes = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${key}`);
        if (dsRes.ok) {
          const data = (await dsRes.json()) as { pairs?: Array<{ info?: { imageUrl?: string } }> };
          const img = data.pairs?.[0]?.info?.imageUrl;
          if (img) {
            logoCache.set(key, img);
            if (active) setResolved(img);
            return;
          }
        }
      } catch {}

      logoCache.set(key, null);
    })();

    return () => {
      active = false;
    };
  }, [effectiveSrc, seed]);

  const box = { width: size, height: size, borderRadius: radius, flexShrink: 0 } as const;
  if (effectiveSrc && !bad) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        alt=""
        width={size}
        height={size}
        src={effectiveSrc}
        referrerPolicy="no-referrer"
        loading="lazy"
        onError={() => setBad(true)}
        style={{ ...box, objectFit: "cover", background: "var(--v2-bg-2)" }}
      />
    );
  }

  const letter = (symbol ?? "").replace(/^\$/, "").slice(0, 1).toUpperCase() || "?";
  return (
    <span
      aria-hidden
      style={{
        ...box,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: Math.round(size * 0.38),
        fontWeight: 600,
        ...tokenFallbackStyle(seed ?? symbol ?? "?"),
      }}
    >
      {letter}
    </span>
  );
}
