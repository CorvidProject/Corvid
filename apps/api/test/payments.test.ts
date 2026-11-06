import { afterAll, beforeAll, describe, expect, it } from "vitest";
import fs from "node:fs";
import { generateKeyPair, SignJWT, type KeyLike } from "jose";
import EmbeddedPostgres from "embedded-postgres";
import { eq, sql } from "drizzle-orm";
import { applyMigrations, createDb, profiles } from "@corvid/db";
import { buildApp } from "../src/app";
import { createVerifier } from "../src/auth";
import { rpcChainReader, type ChainReader, type TxReceipt } from "../src/chain";
import type { PaymentsConfig } from "../src/routes/payments";

const dir = "D:/.dev/tmp/pgtest-payments";
const port = 54341;
const url = `postgres://corvid:corvid-dev@localhost:${port}/corvid`;
const ISS = "https://example-ref.supabase.co/auth/v1";
const U1 = "11111111-1111-4111-8111-111111111111";
const U2 = "22222222-2222-4222-8222-222222222222";
const TOKEN = "0x5fc5360d0400a0fd4f2af552add042d716f1d168";
const OTHER_TOKEN = "0x1111111111111111111111111111111111111111";
const TREASURY = "0x00000000000000000000000000000000000a11ce";
const PAYER = "0x0000000000000000000000000000000000000b0b";
const tx = (n: number) => `0x${n.toString(16).padStart(64, "0")}`;

let pgServer: EmbeddedPostgres;
let created: ReturnType<typeof createDb>;
let app: Awaited<ReturnType<typeof buildApp>>;
let appOff: Awaited<ReturnType<typeof buildApp>>;
let key: KeyLike;
const receipts = new Map<string, TxReceipt | null>();
let rpcDown = false;
const reader: ChainReader = {
  async getReceipt(h) {
    if (rpcDown) throw new Error("rpc_http_500");
    return receipts.get(h) ?? null;
  },
};
const config: PaymentsConfig = { chainId: 4663, token: TOKEN, decimals: 6, recipient: TREASURY, confirmations: 2, reader };

const tok = (sub: string) =>
  new SignJWT({ email: `${sub.slice(0, 4)}@x.io` }).setProtectedHeader({ alg: "ES256" }).setSubject(sub).setIssuer(ISS).setAudience("authenticated").setIssuedAt().setExpirationTime("1h").sign(key);
const call = async (method: "GET" | "POST", u: string, sub: string, payload?: unknown, a = app) =>
  a.inject({ method, url: u, headers: { authorization: `Bearer ${await tok(sub)}` }, payload: payload as never });
const order = async (sub: string, product: string) => (await call("POST", "/api/payments/orders", sub, { product })).json();
const pay = (o: { amountUnits: string }, over: Partial<{ token: string; to: string; value: bigint; success: boolean; confirmations: number }> = {}): TxReceipt => ({
  success: over.success ?? true,
  confirmations: over.confirmations ?? 5,
  transfers: [{ token: over.token ?? TOKEN, from: PAYER, to: over.to ?? TREASURY, value: over.value ?? BigInt(o.amountUnits) }],
});
const credits = async (id: string) => Number((await created.db.execute(sql`select coalesce(sum(delta),0)::int as n from credits where profile_id = ${id}`)).rows[0].n);

beforeAll(async () => {
  const kp = await generateKeyPair("ES256");
  key = kp.privateKey;
  fs.rmSync(dir, { recursive: true, force: true });
  pgServer = new EmbeddedPostgres({ databaseDir: dir, user: "corvid", password: "corvid-dev", port, persistent: false, initdbFlags: ["--encoding=UTF8", "--locale=C"] });
  await pgServer.initialise();
  await pgServer.start();
  await pgServer.createDatabase("corvid");
  await applyMigrations(url);
  created = createDb(url);
  const verifier = createVerifier({ issuer: ISS, key: kp.publicKey });
  app = await buildApp({ db: created.db, verifier, payments: config });
  appOff = await buildApp({ db: created.db, verifier });
  await app.ready();
  await appOff.ready();
}, 120_000);

afterAll(async () => {
  await app?.close();
  await appOff?.close();
  await created?.pool.end();
  await pgServer?.stop();
});

describe("pembayaran USDG", () => {
  it("dimatikan: 403 payments_disabled dan /plan melaporkan paymentsEnabled=false", async () => {
    const r = await call("POST", "/api/payments/orders", U1, { product: "credits_50" }, appOff);
    expect(r.statusCode).toBe(403);
    expect(r.json().error).toBe("payments_disabled");
    expect((await call("GET", "/api/plan", U1, undefined, appOff)).json().paymentsEnabled).toBe(false);
  });

  it("butuh login; produk tidak dikenal 400", async () => {
    expect((await app.inject({ method: "POST", url: "/api/payments/orders", payload: { product: "credits_50" } })).statusCode).toBe(401);
    expect((await call("POST", "/api/payments/orders", U1, { product: "nope" })).statusCode).toBe(400);
  });

  it("pesanan: jumlah = harga + tambahan unik < 0,01 USD, penerima dan token dari konfigurasi", async () => {
    const o = await order(U1, "credits_50");
    expect(o).toMatchObject({ status: "pending", product: "credits_50", token: TOKEN, recipient: TREASURY, chainId: 4663, decimals: 6 });
    const units = BigInt(o.amountUnits);
    expect(units).toBeGreaterThan(1_000_000n);
    expect(units).toBeLessThanOrEqual(1_009_999n);
    expect(o.amount).toMatch(/^1\.00\d{4}$/);
    const o2 = await order(U2, "credits_50");
    expect(o2.amountUnits).not.toBe(o.amountUnits); // unik antar pesanan pending
    expect((await call("GET", "/api/plan", U1)).json().paymentsEnabled).toBe(true);
  });

  it("tx belum ada: 409 tx_not_found; belum cukup konfirmasi: 409 not_confirmed", async () => {
    const o = await order(U1, "credits_50");
    expect((await call("POST", `/api/payments/orders/${o.id}/verify`, U1, { txHash: tx(1) })).json().error).toBe("tx_not_found");
    receipts.set(tx(1), pay(o, { confirmations: 1 }));
    expect((await call("POST", `/api/payments/orders/${o.id}/verify`, U1, { txHash: tx(1) })).json().error).toBe("not_confirmed");
  });

  it("pembayaran tidak cocok ditolak: jumlah, token, penerima, tx gagal", async () => {
    const o = await order(U1, "credits_50");
    const v = (h: number) => call("POST", `/api/payments/orders/${o.id}/verify`, U1, { txHash: tx(h) });
    receipts.set(tx(10), pay(o, { value: BigInt(o.amountUnits) - 1n }));
    receipts.set(tx(11), pay(o, { token: OTHER_TOKEN }));
    receipts.set(tx(12), pay(o, { to: PAYER }));
    receipts.set(tx(13), pay(o, { success: false }));
    for (const h of [10, 11, 12]) {
      const r = await v(h);
      expect([r.statusCode, r.json().error]).toEqual([422, "payment_mismatch"]);
    }
    const f = await v(13);
    expect([f.statusCode, f.json().error]).toEqual([422, "tx_failed"]);
    expect((await call("GET", "/api/payments/orders", U1)).json().orders.find((x: { id: number }) => x.id === o.id).status).toBe("pending");
  });

  it("pembayaran benar: 50 kredit masuk sekali; verifikasi ulang idempoten", async () => {
    const before = await credits(U1);
    const o = await order(U1, "credits_50");
    receipts.set(tx(20), pay(o));
    const r = await call("POST", `/api/payments/orders/${o.id}/verify`, U1, { txHash: tx(20) });
    expect(r.statusCode).toBe(200);
    expect(r.json()).toMatchObject({ status: "paid", txHash: tx(20) });
    expect(await credits(U1)).toBe(before + 50);
    const again = await call("POST", `/api/payments/orders/${o.id}/verify`, U1, { txHash: tx(20) });
    expect(again.statusCode).toBe(200);
    expect(await credits(U1)).toBe(before + 50);
    const other = await call("POST", `/api/payments/orders/${o.id}/verify`, U1, { txHash: tx(21) });
    expect(other.statusCode).toBe(409);
  });

  it("tx yang sama tidak bisa dipakai pesanan lain atau akun lain", async () => {
    const a = await order(U1, "credits_300");
    receipts.set(tx(30), pay(a));
    expect((await call("POST", `/api/payments/orders/${a.id}/verify`, U1, { txHash: tx(30) })).statusCode).toBe(200);
    // U2 membuat pesanan dengan harga sama; jumlahnya pasti berbeda sehingga tx U1 tidak cocok.
    const b = await order(U2, "credits_300");
    const steal = await call("POST", `/api/payments/orders/${b.id}/verify`, U2, { txHash: tx(30) });
    expect([steal.statusCode, steal.json().error]).toEqual([422, "payment_mismatch"]);
    // dan pesanan milik akun lain tidak terlihat
    expect((await call("POST", `/api/payments/orders/${a.id}/verify`, U2, { txHash: tx(30) })).statusCode).toBe(404);
  });

  it("Pro: 1 bulan memberi 30 hari; pembelian lagi memperpanjang dari tanggal berakhir", async () => {
    const o1 = await order(U2, "pro_1m");
    receipts.set(tx(40), pay(o1));
    expect((await call("POST", `/api/payments/orders/${o1.id}/verify`, U2, { txHash: tx(40) })).statusCode).toBe(200);
    const [p1] = await created.db.select().from(profiles).where(eq(profiles.id, U2));
    const d1 = (p1.proUntil!.getTime() - Date.now()) / 86_400_000;
    expect(d1).toBeGreaterThan(29.9);
    expect(d1).toBeLessThan(30.1);
    const o2 = await order(U2, "pro_3m");
    receipts.set(tx(41), pay(o2));
    await call("POST", `/api/payments/orders/${o2.id}/verify`, U2, { txHash: tx(41) });
    const [p2] = await created.db.select().from(profiles).where(eq(profiles.id, U2));
    expect((p2.proUntil!.getTime() - p1.proUntil!.getTime()) / 86_400_000).toBeCloseTo(90, 1);
    const plan = (await call("GET", "/api/plan", U2)).json();
    expect(plan).toMatchObject({ plan: "pro", limits: { chat: 2000, deep: 500 } });
  });

  it("RPC bermasalah: 502 dan tidak ada yang berubah; pesanan kedaluwarsa: 410", async () => {
    const o = await order(U1, "credits_50");
    rpcDown = true;
    const r = await call("POST", `/api/payments/orders/${o.id}/verify`, U1, { txHash: tx(50) });
    rpcDown = false;
    expect([r.statusCode, r.json().error]).toEqual([502, "rpc_unavailable"]);
    await created.db.execute(sql`update payment_orders set expires_at = now() - interval '1 minute' where id = ${o.id}`);
    await order(U1, "credits_50"); // memicu penandaan kedaluwarsa
    receipts.set(tx(51), pay(o));
    const late = await call("POST", `/api/payments/orders/${o.id}/verify`, U1, { txHash: tx(51) });
    expect([late.statusCode, late.json().error]).toEqual([410, "order_expired"]);
  });

  it("maksimal 5 pesanan pending per pengguna", async () => {
    const U3 = "33333333-3333-4333-8333-333333333333";
    const codes: number[] = [];
    for (let i = 0; i < 6; i++) codes.push((await call("POST", "/api/payments/orders", U3, { product: "credits_50" })).statusCode);
    expect(codes).toEqual([200, 200, 200, 200, 200, 409]);
  });
});

describe("pembaca RPC", () => {
  const TRANSFER = "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef";
  const pad = (a: string) => `0x${a.slice(2).padStart(64, "0")}`;
  it("mengurai receipt eth_getTransactionReceipt dan menghitung konfirmasi", async () => {
    const fakeFetch = (async (_u: unknown, init: { body: string }) => {
      const { method, id } = JSON.parse(init.body);
      const result =
        method === "eth_blockNumber"
          ? "0x70"
          : { status: "0x1", blockNumber: "0x6f", logs: [{ address: TOKEN.toUpperCase().replace("0X", "0x"), topics: [TRANSFER, pad(PAYER), pad(TREASURY)], data: "0x" + (1_000_123).toString(16) }, { address: TOKEN, topics: ["0xabc"], data: "0x" }] };
      return { ok: true, json: async () => ({ jsonrpc: "2.0", id, result }) };
    }) as unknown as typeof fetch;
    const r = await rpcChainReader("http://rpc.test", fakeFetch).getReceipt(tx(1));
    expect(r).toEqual({ success: true, confirmations: 2, transfers: [{ token: TOKEN, from: PAYER, to: TREASURY, value: 1_000_123n }] });
  });
  it("receipt null = belum ada", async () => {
    const f = (async () => ({ ok: true, json: async () => ({ result: null }) })) as unknown as typeof fetch;
    expect(await rpcChainReader("http://rpc.test", f).getReceipt(tx(1))).toBeNull();
  });
});
