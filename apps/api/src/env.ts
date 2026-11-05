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
  TRADE_MODE: z.enum(["dry", "live"]).default("dry"),
});
export type Env = z.infer<typeof envSchema>;

export function loadEnv(source: NodeJS.ProcessEnv = process.env): Env {
  return envSchema.parse(source);
}
