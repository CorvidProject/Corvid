import { createHash } from "node:crypto";
import { and, eq, gt, lt } from "drizzle-orm";
import { profiles, telegramLinkCodes } from "@corvid/db";
import type { Deps } from "./ingest";

// Notifikasi Telegram. Bot dimiliki pemilik (TELEGRAM_BOT_TOKEN lewat env; tidak pernah dicatat).
// Mode polling (getUpdates): tanpa webhook publik. Pesan teks polos (tanpa parse_mode) agar nama token
// dari luar tidak bisa menyisipkan format/tautan. Kegagalan kirim dicatat dan tidak menghentikan run.

export const hashCode = (code: string) => createHash("sha256").update(code.trim().toUpperCase()).digest("hex");

export interface TelegramApi {
  sendMessage(chatId: string, text: string): Promise<void>;
  getUpdates(offset: number | undefined, timeoutSec: number): Promise<Update[]>;
}
export interface Update {
  update_id: number;
  message?: { text?: string; chat: { id: number; type: string } };
}

export function createTelegramApi(token: string, fetchFn: typeof fetch = fetch): TelegramApi {
  const call = async <T>(method: string, body: Record<string, unknown>): Promise<T> => {
    const res = await fetchFn(`https://api.telegram.org/bot${token}/${method}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    });
    const j = (await res.json().catch(() => null)) as { ok?: boolean; result?: T; description?: string } | null;
    // Pesan galat tidak menyertakan URL (berisi token).
    if (!res.ok || !j?.ok) throw new Error(`telegram ${method}: ${res.status} ${j?.description ?? ""}`.trim());
    return j.result as T;
  };
  return {
    sendMessage: async (chatId, text) => void (await call("sendMessage", { chat_id: chatId, text: text.slice(0, 4000), disable_web_page_preview: true })),
    getUpdates: (offset, timeoutSec) => call<Update[]>("getUpdates", { offset, timeout: timeoutSec, allowed_updates: ["message"] }),
  };
}

/** Proses satu pesan masuk: tautkan akun dengan kode, atau putuskan dengan /stop. */
export async function handleMessage(deps: Deps, tg: TelegramApi, chat: { id: number; type: string }, text: string, now = new Date()): Promise<void> {
  if (chat.type !== "private") return;
  const chatId = String(chat.id);
  const t = text.trim();
  if (/^\/stop\b/i.test(t)) {
    const r = await deps.db.update(profiles).set({ telegramChatId: null }).where(eq(profiles.telegramChatId, chatId)).returning({ id: profiles.id });
    await tg.sendMessage(chatId, r.length ? "Telegram alerts are off for your Corvid account." : "This chat is not linked to a Corvid account.");
    return;
  }
  const m = t.match(/^(?:\/start\s+)?([A-Za-z0-9]{8})$/);
  if (!m) {
    await tg.sendMessage(chatId, "Corvid alerts. Open Settings in the Corvid app, press Connect Telegram, then send me the 8-character code you see there. Send /stop to unlink.");
    return;
  }
  const linked = await deps.db.transaction(async (tx) => {
    const [row] = await tx
      .delete(telegramLinkCodes)
      .where(and(eq(telegramLinkCodes.codeHash, hashCode(m[1])), gt(telegramLinkCodes.expiresAt, now)))
      .returning({ profileId: telegramLinkCodes.profileId });
    if (!row) return false;
    // Satu chat hanya untuk satu akun: lepas dari akun lain lebih dulu.
    await tx.update(profiles).set({ telegramChatId: null }).where(eq(profiles.telegramChatId, chatId));
    await tx.update(profiles).set({ telegramChatId: chatId }).where(eq(profiles.id, row.profileId));
    return true;
  });
  await tg.sendMessage(chatId, linked ? "Connected. You will get alerts from agents that have Telegram alerts turned on. Send /stop to unlink." : "That code is not valid or has expired. Press Connect Telegram in Settings to get a new one.");
}

/** Satu putaran polling. Mengembalikan offset berikutnya. Kegagalan satu pesan tidak menghentikan yang lain. */
export async function pollOnce(deps: Deps, tg: TelegramApi, offset: number | undefined, timeoutSec = 0): Promise<{ next: number | undefined; handled: number }> {
  const updates = await tg.getUpdates(offset, timeoutSec);
  let next = offset;
  let handled = 0;
  for (const u of updates) {
    next = u.update_id + 1;
    const msg = u.message;
    if (!msg?.text) continue;
    try {
      await handleMessage(deps, tg, msg.chat, msg.text);
      handled++;
    } catch (e) {
      deps.log?.(`telegram pesan gagal: ${(e as Error).message}`);
    }
  }
  await deps.db.delete(telegramLinkCodes).where(lt(telegramLinkCodes.expiresAt, new Date()));
  return { next, handled };
}

export interface Notifier {
  (profileId: string, text: string): Promise<boolean>;
}

/** Pengirim ke pemilik akun. Batas laju per pengguna (jendela 1 jam) agar tidak spam. */
export function createNotifier(deps: Deps, tg: TelegramApi, opts: { perHour?: number; now?: () => number } = {}): Notifier {
  const limit = opts.perHour ?? 20;
  const clock = opts.now ?? Date.now;
  const sent = new Map<string, number[]>();
  return async (profileId, text) => {
    try {
      const [p] = await deps.db.select({ chat: profiles.telegramChatId }).from(profiles).where(eq(profiles.id, profileId)).limit(1);
      if (!p?.chat) return false;
      const t = clock();
      const recent = (sent.get(profileId) ?? []).filter((x) => t - x < 3_600_000);
      if (recent.length >= limit) return false;
      await tg.sendMessage(p.chat, text);
      sent.set(profileId, [...recent, t]);
      return true;
    } catch (e) {
      deps.log?.(`telegram kirim gagal: ${(e as Error).message}`);
      return false;
    }
  };
}
