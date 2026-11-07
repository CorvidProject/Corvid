import type { FastifyPluginAsync } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { tokens } from "@corvid/db";
import { errorSchema } from "@corvid/shared";
import type { Db } from "../app";
import type { V4PoolResolver } from "../v4pool";

const querySchema = z.object({ poolId: z.string().regex(/^0x[0-9a-fA-F]{64}$/, "poolId harus 32 byte hex") });
const keySchema = z.object({
  poolId: z.string(),
  currency0: z.string(),
  currency1: z.string(),
  fee: z.number().int(),
  tickSpacing: z.number().int(),
  hooks: z.string(),
});

/**
 * PoolKey Uniswap v4 untuk pool yang sudah kita indeks. Hanya id pool yang ada di tabel tokens yang dilayani, supaya endpoint
 * publik ini tidak bisa dipakai memicu pencarian RPC untuk id sembarang.
 */
export const v4Routes =
  (db: Db, resolver: V4PoolResolver | null): FastifyPluginAsync =>
  async (instance) => {
    const app = instance.withTypeProvider<ZodTypeProvider>();
    app.get(
      "/v4/pool-key",
      { schema: { tags: ["market"], querystring: querySchema, response: { 200: keySchema, 404: errorSchema, 502: errorSchema, 503: errorSchema } } },
      async (req, reply) => {
        if (!resolver) return reply.code(503).send({ error: "v4_unavailable" });
        const poolId = req.query.poolId.toLowerCase();
        const [row] = await db.select({ id: tokens.id }).from(tokens).where(eq(tokens.poolId, poolId)).limit(1);
        if (!row) return reply.code(404).send({ error: "pool_not_found" });
        try {
          const key = await resolver(poolId);
          return key ?? reply.code(404).send({ error: "pool_key_not_found" });
        } catch {
          return reply.code(502).send({ error: "chain_lookup_failed" });
        }
      },
    );
  };
