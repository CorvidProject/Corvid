import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().min(1),
  PORT: z.coerce.number().int().default(8787),
  HOST: z.string().default("0.0.0.0"),
  WEB_ORIGIN: z.string().default("http://localhost:3000"),
  /** URL project Supabase (mis. https://<ref>.supabase.co). Kosong = endpoint ber-auth menjawab 503. */
  SUPABASE_URL: z.string().url().optional(),
  /** Hanya untuk project lama dengan JWT HS256; project baru memakai JWKS. */
  SUPABASE_JWT_SECRET: z.string().optional(),
  /** Kunci penyedia LLM untuk chat. Kosong = chat menjawab 503. */
  ANTHROPIC_API_KEY: z.string().min(1).optional(),
  LLM_MODEL: z.string().default("claude-haiku-5-5"),
  TRADE_MODE: z.enum(["dry", "live"]).default("dry"),
});
export type Env = z.infer<typeof envSchema>;

export function loadEnv(source: NodeJS.ProcessEnv = process.env): Env {
  return envSchema.parse(source);
}
