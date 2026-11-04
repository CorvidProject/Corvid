// Harga SOL/USD dari CoinGecko (publik, tanpa key) dengan cache 60 detik. Gagal = null (nilai USD swap simulasi kosong).
export function cachedSolUsd(fetchImpl: typeof fetch = fetch, ttlMs = 60_000) {
  let cache: { usd: number; at: number } | null = null;
  return async (): Promise<number | null> => {
    if (cache && Date.now() - cache.at < ttlMs) return cache.usd;
    try {
      const res = await fetchImpl("https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd", { signal: AbortSignal.timeout(5000), headers: { accept: "application/json" } });
      if (!res.ok) return cache?.usd ?? null;
      const usd = ((await res.json()) as { solana?: { usd?: number } }).solana?.usd;
      if (typeof usd === "number" && isFinite(usd) && usd > 0) {
        cache = { usd, at: Date.now() };
        return usd;
      }
    } catch {
      /* jaringan */
    }
    return cache?.usd ?? null;
  };
}
