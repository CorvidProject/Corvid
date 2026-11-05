import type { FastifyPluginAsync, FastifyReply, FastifyRequest } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { and, desc, eq, sql } from "drizzle-orm";
import { z } from "zod";
import { chatMessages, chats, credits, profiles } from "@corvid/db";
import {
  chatDetailSchema,
  chatIdParamSchema,
  chatSchema,
  chatSendBodySchema,
  chatSendResponseSchema,
  chatsResponseSchema,
  errorSchema,
} from "@corvid/shared";
import type { Db } from "../app";
import { buildContext, SYSTEM_PROMPT } from "../chat-context";
import { LlmError, type LlmClient } from "../llm";

export const CHAT_COST_CREDITS = 1;
export const MAX_CHATS_PER_USER = 100;
export const MAX_MESSAGES_PER_CHAT = 200;
const HISTORY = 10;
const authErrors = { 401: errorSchema, 503: errorSchema };

type ChatRow = typeof chats.$inferSelect;
const toChat = (c: ChatRow): z.infer<typeof chatSchema> => ({
  id: c.id,
  title: c.title,
  kind: c.tokenMint ? "token" : "chat",
  tokenMint: c.tokenMint,
  updatedAt: c.updatedAt.toISOString(),
});
const toMsg = (m: typeof chatMessages.$inferSelect) => ({ id: m.id, role: m.role as "user" | "assistant", content: m.content, createdAt: m.createdAt.toISOString() });

export const chatRoutes =
  ({ db, requireAuth, llm }: { db: Db; requireAuth: (req: FastifyRequest, reply: FastifyReply) => Promise<unknown>; llm: LlmClient | null }): FastifyPluginAsync =>
  async (instance) => {
    const app = instance.withTypeProvider<ZodTypeProvider>();
    const auth = { preHandler: requireAuth };
    const me = (req: FastifyRequest) => req.user!.id;
    const own = async (req: FastifyRequest, id: number) => {
      const [c] = await db.select().from(chats).where(and(eq(chats.id, id), eq(chats.profileId, me(req)))).limit(1);
      return c ?? null;
    };

    app.get("/chats", { ...auth, schema: { tags: ["chat"], response: { 200: chatsResponseSchema, ...authErrors } } }, async (req) => {
      const rows = await db.select().from(chats).where(eq(chats.profileId, me(req))).orderBy(desc(chats.updatedAt)).limit(MAX_CHATS_PER_USER);
      return { chats: rows.map(toChat) };
    });

    app.post("/chats", { ...auth, schema: { tags: ["chat"], response: { 200: chatSchema, 409: errorSchema, ...authErrors } } }, async (req, reply) => {
      const [{ n }] = await db.select({ n: sql<number>`count(*)::int` }).from(chats).where(eq(chats.profileId, me(req)));
      if (n >= MAX_CHATS_PER_USER) return reply.code(409).send({ error: "too_many_chats" });
      const [c] = await db.insert(chats).values({ profileId: me(req) }).returning();
      return toChat(c);
    });

    app.get(
      "/chats/:id",
      { ...auth, schema: { tags: ["chat"], params: chatIdParamSchema, response: { 200: chatDetailSchema, 404: errorSchema, ...authErrors } } },
      async (req, reply) => {
        const c = await own(req, req.params.id);
        if (!c) return reply.code(404).send({ error: "not_found" });
        const msgs = await db.select().from(chatMessages).where(eq(chatMessages.chatId, c.id)).orderBy(chatMessages.id).limit(MAX_MESSAGES_PER_CHAT);
        return { chat: toChat(c), messages: msgs.map(toMsg) };
      },
    );

    app.delete(
      "/chats/:id",
      { ...auth, schema: { tags: ["chat"], params: chatIdParamSchema, response: { 200: z.object({ ok: z.literal(true) }), ...authErrors } } },
      async (req) => {
        await db.delete(chats).where(and(eq(chats.id, req.params.id), eq(chats.profileId, me(req))));
        return { ok: true as const };
      },
    );

    app.post(
      "/chats/:id/messages",
      {
        ...auth,
        schema: {
          tags: ["chat"],
          params: chatIdParamSchema,
          body: chatSendBodySchema,
          response: { 200: chatSendResponseSchema, 402: errorSchema, 404: errorSchema, 409: errorSchema, 502: errorSchema, ...authErrors },
        },
      },
      async (req, reply) => {
        if (!llm) return reply.code(503).send({ error: "llm_unavailable" });
        const chat = await own(req, req.params.id);
        if (!chat) return reply.code(404).send({ error: "not_found" });
        const balance = async (profileId: string) => {
          const [b] = await db.select({ n: sql<number>`coalesce(sum(${credits.delta}), 0)::int` }).from(credits).where(eq(credits.profileId, profileId));
          return b?.n ?? 0;
        };
        if ((await balance(me(req))) < CHAT_COST_CREDITS) return reply.code(402).send({ error: "no_credits" });

        const prior = await db.select().from(chatMessages).where(eq(chatMessages.chatId, chat.id)).orderBy(desc(chatMessages.id)).limit(HISTORY);
        const [{ n: count }] = await db.select({ n: sql<number>`count(*)::int` }).from(chatMessages).where(eq(chatMessages.chatId, chat.id));
        if (count >= MAX_MESSAGES_PER_CHAT) return reply.code(409).send({ error: "chat_full" });

        const content = req.body.content;
        const ctx = await buildContext(db, content, chat.tokenMint);
        let answer: string;
        try {
          answer = await llm.complete(`${SYSTEM_PROMPT}\n\nDATA:\n${ctx.data}`, [
            ...prior.reverse().map((m) => ({ role: m.role as "user" | "assistant", content: m.content })),
            { role: "user", content },
          ]);
        } catch (e) {
          req.log.warn({ err: e instanceof LlmError ? e.message : "llm_failed" }, "chat llm error");
          return reply.code(502).send({ error: "llm_error" });
        }

        // Kredit dipotong hanya setelah jawaban ada; saldo diperiksa ulang di dalam transaksi (kunci baris profil).
        const out = await db.transaction(async (tx) => {
          await tx.execute(sql`select 1 from ${profiles} where ${profiles.id} = ${me(req)} for update`);
          const [b] = await tx.select({ n: sql<number>`coalesce(sum(${credits.delta}), 0)::int` }).from(credits).where(eq(credits.profileId, me(req)));
          if ((b?.n ?? 0) < CHAT_COST_CREDITS) return null;
          const [u] = await tx.insert(chatMessages).values({ chatId: chat.id, role: "user", content }).returning();
          const [a] = await tx.insert(chatMessages).values({ chatId: chat.id, role: "assistant", content: answer }).returning();
          await tx.insert(credits).values({ profileId: me(req), delta: -CHAT_COST_CREDITS, reason: "chat" });
          await tx
            .update(chats)
            .set({
              updatedAt: new Date(),
              title: count === 0 && chat.title === "New chat" ? content.slice(0, 40) : chat.title,
              tokenMint: chat.tokenMint ?? ctx.mint,
            })
            .where(eq(chats.id, chat.id));
          return { messages: [toMsg(u), toMsg(a)] as [ReturnType<typeof toMsg>, ReturnType<typeof toMsg>], credits: (b?.n ?? 0) - CHAT_COST_CREDITS };
        });
        if (!out) return reply.code(402).send({ error: "no_credits" });
        return out;
      },
    );
  };
