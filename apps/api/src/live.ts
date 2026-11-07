import { inArray, sql } from "drizzle-orm";
import { tokenPricePoints, tokens, tokenWatch } from "@corvid/db";
import type { Db } from "./app";

// Pembantu data pasar "hidup": penanda token yang sedang dibuka (worker menyegarkannya tiap beberapa detik)
// dan sparkline asli dari titik harga yang dicatat worker.

const WATCH_EVERY_MS = 15_000;
const lastMarked = new Map<string, number>();

/**
 * Tandai token sebagai sedang dibuka. Dibatasi sekali per token tiap 15 detik per proses, tidak menunggu hasilnya,
 * dan kegagalan diabaikan (penyegaran cepat hanya pelengkap, bukan syarat jawaban API).
 */
export function markWatched(db: Db, mints: string[]): void {
  const now = Date.now();
  const due = [...new Set(mints)].filter((m) => now - (lastMarked.get(m) ?? 0) > WATCH_EVERY_MS).slice(0, 50);
  if (due.length === 0) return;
  for (const m of due) lastMarked.set(m, now);
  if (lastMarked.size > 5000) for (const [k, t] of lastMarked) if (now - t > WATCH_EVERY_MS) lastMarked.delete(k);
  void (async () => {
    const rows = await db.select({ id: tokens.id }).from(tokens).where(inArray(tokens.mint, due));
    if (rows.length === 0) return;
    const at = new Date();
    await db
      .insert(tokenWatch)
      .values(rows.map((r) => ({ tokenId: r.id, lastViewedAt: at })))
      .onConflictDoUpdate({ target: tokenWatch.tokenId, set: { lastViewedAt: sql`excluded.last_viewed_at` } });
  })().catch(() => {});
}

const SPARK_BUCKET_S = 1800; // rata-rata per 30 menit => maksimal 48 titik untuk 24 jam
const SPARK_MIN_POINTS = 3;
const SPARK_TTL_MS = 15_000;
const sparkCache = new Map<string, { at: number; data: Map<number, number[]> }>();

/** Sparkline 24 jam per token id (lama ke baru). Token dengan titik kurang dari 3 tidak ada di hasil. */
export async function loadSparks(db: Db, ids: number[]): Promise<Map<number, number[]>> {
  if (ids.length === 0) return new Map();
  const key = ids.join(",");
  const hit = sparkCache.get(key);
  if (hit && Date.now() - hit.at < SPARK_TTL_MS) return hit.data;
  // Sparkline hanya pelengkap: bila tabel belum termigrasi atau query gagal, daftar token tetap dilayani tanpa sparkline.
  const rows = await db
    .select({
      tokenId: tokenPricePoints.tokenId,
      b: sql<number>`floor(extract(epoch from ${tokenPricePoints.at}) / ${SPARK_BUCKET_S})`,
      p: sql<number>`avg(${tokenPricePoints.priceUsd})::float8`,
    })
    .from(tokenPricePoints)
    .where(sql`${inArray(tokenPricePoints.tokenId, ids)} and ${tokenPricePoints.at} > now() - interval '24 hours'`)
    .groupBy(tokenPricePoints.tokenId, sql`2`)
    .orderBy(tokenPricePoints.tokenId, sql`2`)
    .catch(() => []);
  const data = new Map<number, number[]>();
  for (const r of rows) {
    const p = Number(r.p);
    if (!Number.isFinite(p) || p <= 0) continue;
    const list = data.get(r.tokenId) ?? [];
    list.push(p);
    data.set(r.tokenId, list);
  }
  for (const [id, list] of data) if (list.length < SPARK_MIN_POINTS) data.delete(id);
  if (sparkCache.size > 200) sparkCache.clear();
  sparkCache.set(key, { at: Date.now(), data });
  return data;
}
