// Paket, kuota, dan produk yang dijual. Satu sumber untuk API dan web.
// Harga paket 3 dan 12 bulan disetujui pemilik (2026-11-07); ubah di sini saja.

export type UsageKind = "chat" | "deep";

export type PlanLimits = { chat: number; deep: number };
export type PlanLimitsByPlan = { free: PlanLimits; pro: PlanLimits };

/** Kuota per bulan kalender UTC. Setelah habis dipakai kredit (1 kredit per jawaban). */
export const PLAN_LIMITS: PlanLimitsByPlan = {
  free: { chat: 20, deep: 5 },
  pro: { chat: 2000, deep: 500 },
};

export const USDG_DECIMALS = 6;

export type ProductId = "credits_50" | "credits_300" | "pro_1m" | "pro_3m" | "pro_12m";
export type Product =
  | { id: ProductId; type: "credits"; label: string; usd: number; credits: number }
  | { id: ProductId; type: "pro"; label: string; usd: number; days: number };

export const PRODUCTS: Record<ProductId, Product> = {
  credits_50: { id: "credits_50", type: "credits", label: "50 credits", usd: 1, credits: 50 },
  credits_300: { id: "credits_300", type: "credits", label: "300 credits", usd: 5, credits: 300 },
  pro_1m: { id: "pro_1m", type: "pro", label: "Pro, 1 month", usd: 9, days: 30 },
  pro_3m: { id: "pro_3m", type: "pro", label: "Pro, 3 months", usd: 24, days: 90 },
  pro_12m: { id: "pro_12m", type: "pro", label: "Pro, 12 months", usd: 90, days: 365 },
};
export const PRODUCT_IDS = Object.keys(PRODUCTS) as [ProductId, ...ProductId[]];

/** Harga dasar dalam unit terkecil USDG (USD * 10^6). */
export const productBaseUnits = (p: Product): bigint => BigInt(p.usd) * 10n ** BigInt(USDG_DECIMALS);

/** Awal bulan UTC (inklusif) dan awal bulan berikutnya untuk waktu `at`. */
export const monthWindow = (at: Date) => ({
  start: new Date(Date.UTC(at.getUTCFullYear(), at.getUTCMonth(), 1)),
  next: new Date(Date.UTC(at.getUTCFullYear(), at.getUTCMonth() + 1, 1)),
});
