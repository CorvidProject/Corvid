import type { FastifyPluginAsync, FastifyReply, FastifyRequest } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { and, desc, eq, sql } from "drizzle-orm";
import { credits, paymentOrders, profiles } from "@corvid/db";
import {
  errorSchema,
  orderCreateBodySchema,
  orderIdParamSchema,
  orderSchema,
  orderVerifyBodySchema,
  ordersResponseSchema,
  PRODUCTS,
  productBaseUnits,
  USDG_DECIMALS,
  type ProductId,
} from "@corvid/shared";
import type { Db } from "../app";
import type { ChainReader } from "../chain";

export interface PaymentsConfig {
  chainId: number;
  /** Alamat token pembayaran (USDG di mainnet, tUSDG di testnet), lowercase. */
  token: string;
  decimals: number;
  /** Alamat publik penerima (milik pemilik), lowercase. */
  recipient: string;
  /** Konfirmasi blok minimum sebelum kredit diberikan. */
  confirmations: number;
  reader: ChainReader;
}

const ORDER_TTL_MS = 24 * 3600_000;
const MAX_PENDING_PER_USER = 5;
const authErrors = { 401: errorSchema, 503: errorSchema };

const fmt = (units: bigint, decimals: number) => {
  const s = units.toString().padStart(decimals + 1, "0");
  return `${s.slice(0, -decimals)}.${s.slice(-decimals)}`;
};

type OrderRow = typeof paymentOrders.$inferSelect;
const toOrder = (o: OrderRow, decimals: number) => ({
  id: o.id,
  product: o.product,
  label: PRODUCTS[o.product as ProductId]?.label ?? o.product,
  status: o.status as "pending" | "paid" | "expired",
  amountUnits: o.amountUnits,
  amount: fmt(BigInt(o.amountUnits), decimals),
  decimals,
  token: o.tokenAddress,
  recipient: o.recipient,
  chainId: o.chainId,
  expiresAt: o.expiresAt.toISOString(),
  txHash: o.txHash,
});

const isUniqueViolation = (e: unknown) => {
  const x = e as { code?: string; cause?: { code?: string } };
  return x.code === "23505" || x.cause?.code === "23505";
};

export const paymentRoutes =
  ({ db, requireAuth, config }: { db: Db; requireAuth: (req: FastifyRequest, reply: FastifyReply) => Promise<unknown>; config: PaymentsConfig | null }): FastifyPluginAsync =>
  async (instance) => {
    const app = instance.withTypeProvider<ZodTypeProvider>();
    const auth = { preHandler: requireAuth };
    const me = (req: FastifyRequest) => req.user!.id;
    const off = (reply: FastifyReply) => reply.code(403).send({ error: "payments_disabled" });

    app.get("/payments/orders", { ...auth, schema: { tags: ["payments"], response: { 200: ordersResponseSchema, ...authErrors } } }, async (req) => {
      const rows = await db.select().from(paymentOrders).where(eq(paymentOrders.profileId, me(req))).orderBy(desc(paymentOrders.createdAt)).limit(20);
      return { orders: rows.map((o) => toOrder(o, config?.decimals ?? USDG_DECIMALS)) };
    });

    app.post(
      "/payments/orders",
      { ...auth, schema: { tags: ["payments"], body: orderCreateBodySchema, response: { 200: orderSchema, 403: errorSchema, 409: errorSchema, 500: errorSchema, ...authErrors } } },
      async (req, reply) => {
        if (!config) return off(reply);
        const cfg = config;
        const uid = me(req);
        const product = PRODUCTS[req.body.product];
        const now = new Date();
        await db.update(paymentOrders).set({ status: "expired" }).where(and(eq(paymentOrders.status, "pending"), sql`${paymentOrders.expiresAt} < ${now.toISOString()}`));
        const [{ n }] = await db.select({ n: sql<number>`count(*)::int` }).from(paymentOrders).where(and(eq(paymentOrders.profileId, uid), eq(paymentOrders.status, "pending")));
        if (n >= MAX_PENDING_PER_USER) return reply.code(409).send({ error: "too_many_pending_orders" });
        const base = productBaseUnits(product);
        // Jumlah dibuat unik di antara pesanan pending (tambahan 1..9999 unit, di bawah 0,01 USD),
        // sehingga satu transaksi hanya cocok dengan satu pesanan dan tidak bisa diklaim akun lain.
        for (let i = 0; i < 8; i++) {
          const amount = base + BigInt(1 + Math.floor(Math.random() * 9999));
          try {
            const [o] = await db
              .insert(paymentOrders)
              .values({ profileId: uid, product: product.id, amountUnits: amount.toString(), tokenAddress: cfg.token, recipient: cfg.recipient, chainId: cfg.chainId, expiresAt: new Date(now.getTime() + ORDER_TTL_MS) })
              .returning();
            return toOrder(o, cfg.decimals);
          } catch (e) {
            if (isUniqueViolation(e)) continue;
            throw e;
          }
        }
        return reply.code(500).send({ error: "order_unavailable" });
      },
    );

    app.post(
      "/payments/orders/:id/verify",
      {
        ...auth,
        schema: {
          tags: ["payments"],
          params: orderIdParamSchema,
          body: orderVerifyBodySchema,
          response: { 200: orderSchema, 403: errorSchema, 404: errorSchema, 409: errorSchema, 410: errorSchema, 422: errorSchema, 502: errorSchema, ...authErrors },
        },
      },
      async (req, reply) => {
        if (!config) return off(reply);
        const cfg = config;
        const uid = me(req);
        const txHash = req.body.txHash.toLowerCase();
        const [order] = await db.select().from(paymentOrders).where(and(eq(paymentOrders.id, req.params.id), eq(paymentOrders.profileId, uid))).limit(1);
        if (!order) return reply.code(404).send({ error: "not_found" });
        if (order.status === "paid") return order.txHash === txHash ? toOrder(order, cfg.decimals) : reply.code(409).send({ error: "order_already_paid" });
        if (order.status === "expired") return reply.code(410).send({ error: "order_expired" });

        let receipt;
        try {
          receipt = await cfg.reader.getReceipt(txHash);
        } catch (e) {
          req.log.warn({ err: (e as Error).message }, "payment rpc error");
          return reply.code(502).send({ error: "rpc_unavailable" });
        }
        if (!receipt) return reply.code(409).send({ error: "tx_not_found" });
        if (!receipt.success) return reply.code(422).send({ error: "tx_failed" });
        if (receipt.confirmations < cfg.confirmations) return reply.code(409).send({ error: "not_confirmed" });
        const want = BigInt(order.amountUnits);
        const match = receipt.transfers.find((t) => t.token === order.tokenAddress && t.to === order.recipient && t.value === want);
        if (!match) return reply.code(422).send({ error: "payment_mismatch" });
        const payer = match.from;

        const product = PRODUCTS[order.product as ProductId];
        const out: { order: OrderRow } | { error: string } = await db.transaction(async (tx) => {
          await tx.execute(sql`select 1 from ${profiles} where ${profiles.id} = ${uid} for update`);
          const [cur] = await tx.select().from(paymentOrders).where(eq(paymentOrders.id, order.id)).for("update");
          if (cur.status !== "pending") return { error: cur.status === "paid" ? "order_already_paid" : "order_expired" } as const;
          const [used] = await tx.select({ id: paymentOrders.id }).from(paymentOrders).where(eq(paymentOrders.txHash, txHash)).limit(1);
          if (used) return { error: "tx_already_used" } as const;
          const [paid] = await tx.update(paymentOrders).set({ status: "paid", txHash, payer, paidAt: new Date() }).where(eq(paymentOrders.id, order.id)).returning();
          if (!paid) return { error: "order_expired" } as const;
          if (product.type === "credits") {
            await tx.insert(credits).values({ profileId: uid, delta: product.credits, reason: "purchase" });
          } else {
            const [p] = await tx.select({ proUntil: profiles.proUntil }).from(profiles).where(eq(profiles.id, uid));
            const from = p?.proUntil && p.proUntil.getTime() > Date.now() ? p.proUntil.getTime() : Date.now();
            await tx.update(profiles).set({ proUntil: new Date(from + product.days * 86_400_000), plan: "pro" }).where(eq(profiles.id, uid));
          }
          return { order: paid } as const;
        });
        if (!("order" in out)) return reply.code(out.error === "order_expired" ? 410 : 409).send({ error: out.error });
        return toOrder(out.order, cfg.decimals);
      },
    );
  };
