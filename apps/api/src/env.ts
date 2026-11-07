import { z } from "zod";

// Variabel kosong di .env (mis. `LLM_API_KEY=`) dianggap tidak diisi.
const opt = <T extends z.ZodTypeAny>(t: T) => z.preprocess((v) => (v === "" ? undefined : v), t.optional());

const envSchema = z.object({
  DATABASE_URL: z.string().min(1),
  PORT: z.coerce.number().int().default(8787),
  HOST: z.string().default("0.0.0.0"),
  WEB_ORIGIN: z.string().default("http://localhost:3000"),
  /** URL project Supabase (mis. https://<ref>.supabase.co). Kosong = endpoint ber-auth menjawab 503. */
  SUPABASE_URL: z.string().url().optional(),
  /** Hanya untuk project lama dengan JWT HS256; project baru memakai JWKS. */
  SUPABASE_JWT_SECRET: z.string().optional(),
  /** Chat LLM: penyedia lewat env, tidak ada bawaan. Semua kosong = chat menjawab 503. Lihat docs/infrastructure.md. */
  LLM_PROVIDER: opt(z.enum(["anthropic", "openai"])),
  /** Penyedia kompatibel OpenAI (OpenRouter, Groq, Ollama lokal, dll.). */
  LLM_BASE_URL: opt(z.string().url()),
  LLM_API_KEY: opt(z.string().min(1)),
  ANTHROPIC_API_KEY: opt(z.string().min(1)),
  LLM_MODEL: opt(z.string().min(1)),
  /** Jumlah proxy tepercaya di depan API (Railway = 1). */
  TRUST_PROXY_HOPS: z.coerce.number().int().min(0).max(5).default(0),
  /** Pengaman tagihan: maksimal jawaban chat per 24 jam untuk semua pengguna. */
  CHAT_DAILY_CAP: z.coerce.number().int().min(0).default(3000),
  /** Username bot Telegram tanpa @ (untuk tautan Connect). Kosong = tombol Connect menjawab 503. Token bot hanya di worker. */
  TELEGRAM_BOT_USERNAME: opt(z.string().regex(/^[A-Za-z0-9_]{5,32}$/)),
  TRADE_MODE: z.enum(["dry", "live"]).default("dry"),
  /** Pembelian kredit/Pro. Mati sampai pemilik menyalakannya (juga butuh PAYMENT_RECIPIENT). */
  PAID_FEATURES_ENABLED: z.preprocess((v) => v === "true" || v === "1", z.boolean()).default(false),
  /** Alamat publik penerima pembayaran (milik pemilik, bukan private key). */
  PAYMENT_RECIPIENT: opt(z.string().regex(/^0x[0-9a-fA-F]{40}$/)),
  /** Token pembayaran. Kosong = USDG resmi dari chains.ts (hanya ada di mainnet); testnet wajib mengisi alamat tUSDG. */
  PAYMENT_TOKEN_ADDRESS: opt(z.string().regex(/^0x[0-9a-fA-F]{40}$/)),
  PAYMENT_TOKEN_DECIMALS: z.coerce.number().int().min(0).max(18).default(6),
  /** Konfirmasi blok sebelum pembayaran dianggap sah. */
  PAYMENT_CONFIRMATIONS: z.coerce.number().int().min(1).max(100).default(2),
  /** testnet (bawaan) atau mainnet; parameter chain ada di packages/shared/src/chains.ts. */
  CHAIN_ENV: z.string().default("testnet"),
  /** RPC berkunci (Alchemy). Kosong = RPC publik chain. */
  RPC_URL: opt(z.string().url()),
  /** RPC mainnet untuk membaca PoolKey Uniswap v4 (data pasar selalu mainnet; RPC_URL bisa testnet). Kosong = RPC publik. */
  MAINNET_RPC_URL: opt(z.string().url()),
});
export type Env = z.infer<typeof envSchema>;

export function loadEnv(source: NodeJS.ProcessEnv = process.env): Env {
  return envSchema.parse(source);
}
