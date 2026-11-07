import { afterAll, beforeAll, describe, expect, it } from "vitest";
import fs from "node:fs";
import EmbeddedPostgres from "embedded-postgres";
import { asc, eq } from "drizzle-orm";
import { agentRunSteps, agentRuns, agents, applyMigrations, createDb, notifications, profiles, subscriptions, swaps, tokens, wallets, walletActivity } from "@corvid/db";
import { runAgentCycle, ruleDecider, type Decider, type RunnerDeps } from "../src/runner";

const dir = "D:/.dev/tmp/pgtest-runner";
const port = 54335;
const url = `postgres://corvid:corvid-dev@localhost:${port}/corvid`;
const OWNER = "cccccccc-cccc-4ccc-8ccc-cccccccccccc";
const WALLET = "9XeBxpUMTnpaJC5csiS4dkBTvXsChbaZ5ysTSp2ZeiuQ";
const M = {
  good: "G7vQWurMkMMm2dU3iZpXYFTHT9Biio4F4gZCrwFpKNwG",
  risky: "GexThZHgaswpAQ7Fi8QrHFubjPimUNSYhJiAA7XZpump",
  unknown: "CWZ6BsdnjkDVTGkmL6bGbJXXig6ceefRiNYmVgDypump",
  thin: "5LLWCop7jWScMJQQf76pJ6p3itJH6pjBYCfBo7ktpump",
  old: "B8G87xPYnSTCrf52mjPHywWPmTYXHBRWtPKmoqtkpump",
  flat: "3PjsaQKi2uLYAxXwMW7pDAtyxAp1aKHwZMRWCsu7pump",
};
const min = (m: number) => new Date(Date.now() - m * 60_000);

let pgServer: EmbeddedPostgres;
let created: ReturnType<typeof createDb>;
const db = () => created.db;
const deps = (over: Partial<RunnerDeps> = {}): RunnerDeps => ({ db: db(), gt: null as never, ds: null as never, ethUsd: async () => 100, ...over });

async function mkAgent(v: Partial<typeof agents.$inferInsert>) {
  const [a] = await db()
    .insert(agents)
    .values({ ownerId: OWNER, name: "Agent", type: "signal_bot", pipeline: "new_tokens", mode: "signal", config: {}, limits: {}, running: true, ...v })
    .returning();
  return a;
}
const stop = (id: number) => db().update(agents).set({ running: false }).where(eq(agents.id, id));
async function runsOf(agentId: number) {
  const runs = await db().select().from(agentRuns).where(eq(agentRuns.agentId, agentId)).orderBy(asc(agentRuns.runNumber));
  const out = [];
  for (const r of runs) {
    const steps = await db().select().from(agentRunSteps).where(eq(agentRunSteps.runId, r.id)).orderBy(asc(agentRunSteps.sortOrder));
    out.push({ ...r, steps });
  }
  return out;
}

beforeAll(async () => {
  fs.rmSync(dir, { recursive: true, force: true });
  pgServer = new EmbeddedPostgres({ databaseDir: dir, user: "corvid", password: "corvid-dev", port, persistent: false, initdbFlags: ["--encoding=UTF8", "--locale=C"] });
  await pgServer.initialise();
  await pgServer.start();
  await pgServer.createDatabase("corvid");
  await applyMigrations(url);
  created = createDb(url);
  await db().insert(profiles).values({ id: OWNER, email: "owner@x.io", displayName: "owner" });
  const base = { lastSeenAt: new Date(), decimals: 9 };
  await db().insert(tokens).values([
    { ...base, mint: M.good, symbol: "GOOD", liquidityUsd: "80000", volumeUsd: "100000", holders: 5000, riskScore: 5, devPct: "2", lpBurnPct: "100", dex: "pumpswap", priceUsd: "0.01", change1hPct: "12", createdAtChain: min(5) },
    { ...base, mint: M.risky, symbol: "RISKY", liquidityUsd: "60000", volumeUsd: "10000", riskScore: 70, dex: "pumpswap", priceUsd: "0.02", createdAtChain: min(6) },
    { ...base, mint: M.unknown, symbol: "UNK", liquidityUsd: "20000", volumeUsd: "5000", riskScore: null, dex: "pumpswap", priceUsd: "0.03", createdAtChain: min(7) },
    { ...base, mint: M.thin, symbol: "THIN", liquidityUsd: "1000", volumeUsd: "300", riskScore: 5, dex: "pumpswap", priceUsd: "0.04", createdAtChain: min(8) },
    { ...base, mint: M.old, symbol: "OLD", liquidityUsd: "90000", riskScore: 5, dex: "pumpswap", priceUsd: "0.05", createdAtChain: min(300) },
    { ...base, mint: M.flat, symbol: "FLAT", liquidityUsd: "30000", volumeUsd: "30000", riskScore: 5, dex: "pumpswap", priceUsd: "0.06", change1hPct: "1" },
  ]);
}, 120_000);

afterAll(async () => {
  await created?.pool.end();
  await pgServer?.stop();
});

describe("ruleDecider", () => {
  it("skor deterministik dengan alasan, dan tahap floor", async () => {
    const [good] = await db().select().from(tokens).where(eq(tokens.mint, M.good));
    const [unk] = await db().select().from(tokens).where(eq(tokens.mint, M.unknown));
    const a = { floor: 70 } as typeof agents.$inferSelect;
    const g = await ruleDecider({ agent: a, token: good });
    expect(g).toMatchObject({ verdict: "buy", conviction: 100 });
    expect(g.for).toContain("deep liquidity");
    const u = await ruleDecider({ agent: a, token: unk });
    expect(u.verdict).toBe("skip"); // tanpa data keamanan tidak mencapai floor 70
    expect(u.for).toContain("no security data yet");
    expect((await ruleDecider({ agent: { floor: 40 } as never, token: unk })).conviction).toBe(u.conviction); // skor sama, floor berbeda
  });
});

describe("pipeline new_tokens (sinyal)", () => {
  it("mengevaluasi kandidat baru: lolos, diblokir di safety, tanpa data keamanan; mengabaikan token lama", async () => {
    const a = await mkAgent({ name: "Scanner", config: { min_lp_usd: "5000", no_mint_authority: "true", no_freeze_authority: "true", max_dev_wallet_pct: "10", markets: "" } });
    const r = await runAgentCycle(deps());
    expect(r).toMatchObject({ runs: 3, passed: 1, failed: 0 });
    const runs = await runsOf(a.id);
    expect(runs.map((x) => x.runNumber)).toEqual([1, 2, 3]);
    const by = Object.fromEntries(runs.map((x) => [x.steps[0].stepValues && (x.steps[0].stepValues as { mint: string }).mint, x]));

    const good = by[M.good];
    expect(good.ended).toBe("passed");
    expect(good.steps.map((s) => s.stepName)).toEqual(["market", "safety", "position", "decision", "risk"]);
    expect(good.steps.every((s) => s.outcome === "passed")).toBe(true);
    expect(good.steps[3].stepValues).toMatchObject({ verdict: "buy", conviction: 100, floor: 70 });
    expect(good.steps[1].stepValues).toMatchObject({ mint: "renounced", freeze: "impossible", checked: "yes" });

    const risky = by[M.risky];
    expect(risky.ended).toBe("blocked");
    expect(risky.steps.map((s) => [s.stepName, s.outcome])).toEqual([["market", "passed"], ["safety", "blocked"]]); // berhenti di safety
    expect(risky.steps[1].detail).toMatch(/risk score 70/);

    const unk = by[M.unknown];
    expect(unk.ended).toBe("blocked");
    expect(unk.steps[1].detail).toMatch(/no security data/);
    expect(by[M.old]).toBeUndefined(); // dibuat 5 jam lalu

    const n = await db().select().from(notifications).where(eq(notifications.kind, "signal"));
    expect(n).toHaveLength(1);
    expect(n[0].title).toContain("GOOD");
    expect((await db().select().from(swaps)).length).toBe(0); // mode sinyal: tidak ada swap
    await stop(a.id);
  });

  it("siklus berikutnya: token sudah dievaluasi tidak diulang; sisa (THIN) diblokir di market", async () => {
    const a = (await db().select().from(agents).where(eq(agents.name, "Scanner")))[0];
    await db().update(agents).set({ running: true }).where(eq(agents.id, a.id));
    expect((await runAgentCycle(deps())).runs).toBe(1);
    const runs = await runsOf(a.id);
    expect(runs).toHaveLength(4);
    const thin = runs[3];
    expect(thin.ended).toBe("blocked");
    expect(thin.steps).toHaveLength(1);
    expect(thin.steps[0].detail).toMatch(/liquidity \$1,000 is below the \$5,000 minimum/);
    expect((await runAgentCycle(deps())).runs).toBe(0); // tidak ada lagi; detak jantung belum jatuh tempo
    await stop(a.id);
  });
});

describe("pipeline token_trading (trading, simulasi)", () => {
  it("memicu, menulis swap dry dengan nilai USD, lalu menolak beli lagi karena sudah memegang", async () => {
    const a = await mkAgent({ name: "Trader", pipeline: "token_trading", mode: "trading", type: "auto_trader", config: { token_mint: M.good, trigger_threshold: "5", max_eth_per_trade: "0.2" }, limits: { perTrade: "0.05" } });
    const r = await runAgentCycle(deps());
    expect(r.passed).toBe(1);
    const [run] = await runsOf(a.id);
    expect(run.ended).toBe("passed");
    expect(run.steps[4].stepValues).toMatchObject({ size_eth: 0.05, cap_eth: 0.05, mode: "dry" }); // dibatasi batas per trade
    const sw = await db().select().from(swaps).where(eq(swaps.agentId, a.id));
    expect(sw).toHaveLength(1);
    expect(sw[0]).toMatchObject({ side: "buy", mode: "dry", amountUsd: "5.00" });
    expect(sw[0].report).toMatchObject({ simulated: true, sol: 0.05, eth_usd: 100 });
    expect(sw[0].txHash).toBeNull(); // tidak ada transaksi on-chain
    expect((await db().select().from(notifications).where(eq(notifications.kind, "trade")))[0].title).toMatch(/simulated buy of GOOD/);

    // dua jam kemudian (di luar jendela dedupe 60 menit): posisi sudah dipegang
    await runAgentCycle(deps({ now: () => new Date(Date.now() + 2 * 3600_000) }));
    const runs = await runsOf(a.id);
    expect(runs).toHaveLength(2);
    expect(runs[1].ended).toBe("stopped");
    expect(runs[1].steps.at(-1)).toMatchObject({ stepName: "position", detail: "already holding this token" });
    expect(await db().select().from(swaps).where(eq(swaps.agentId, a.id))).toHaveLength(1); // tidak beli lagi
    await stop(a.id);
  });

  it("di bawah ambang pemicu: berhenti di market tanpa swap", async () => {
    const a = await mkAgent({ name: "Flat", pipeline: "token_trading", mode: "trading", config: { token_mint: M.flat, trigger_threshold: "5" }, limits: { perTrade: "0.1" } });
    await runAgentCycle(deps());
    const [run] = await runsOf(a.id);
    expect(run.ended).toBe("stopped");
    expect(run.steps).toHaveLength(1);
    expect(run.steps[0].detail).toMatch(/1h move 1% is below the 5% trigger/);
    expect(await db().select().from(swaps).where(eq(swaps.agentId, a.id))).toHaveLength(0);
    await stop(a.id);
  });

  it("mode trading tanpa batas per trade diblokir di langkah risk", async () => {
    const a = await mkAgent({ name: "NoCap", pipeline: "token_trading", mode: "trading", config: { token_mint: M.good, trigger_threshold: "1" }, limits: {} });
    await runAgentCycle(deps({ now: () => new Date(Date.now() + 5 * 3600_000) }));
    const [run] = await runsOf(a.id);
    expect(run.ended).toBe("blocked");
    expect(run.steps.at(-1)).toMatchObject({ stepName: "risk", outcome: "blocked", detail: "no per-trade limit set" });
    await stop(a.id);
  });

  it("token belum terindeks: berhenti, tidak error", async () => {
    const a = await mkAgent({ name: "Ghost", pipeline: "token_trading", config: { token_mint: "11111111111111111111111111111111" } });
    await runAgentCycle(deps());
    const [run] = await runsOf(a.id);
    expect(run.ended).toBe("stopped");
    expect(run.steps[0].detail).toMatch(/not indexed/);
    await stop(a.id);
  });
});

describe("pipeline follow_wallet", () => {
  it("meniru beli wallet sumber; mengabaikan sell, aktivitas lama, dan trade di bawah minimum", async () => {
    const [w] = await db().insert(wallets).values({ address: WALLET, curatedTier: "A" }).returning();
    await db().insert(walletActivity).values([
      { walletId: w.id, mint: M.good, side: "buy", amountEth: "0.5", txHash: "tx-buy", at: min(3) },
      { walletId: w.id, mint: M.risky, side: "sell", amountEth: "2", txHash: "tx-sell", at: min(2) },
      { walletId: w.id, mint: M.thin, side: "buy", amountEth: "0.5", txHash: "tx-old", at: min(60) },
    ]);
    const ok = await mkAgent({ name: "Follower", pipeline: "follow_wallet", config: { wallet_address: WALLET, only_buys: "true", min_source_trade_eth: "0.1" } });
    const big = await mkAgent({ name: "Picky", pipeline: "follow_wallet", config: { wallet_address: WALLET, only_buys: "true", min_source_trade_eth: "1" } });
    await runAgentCycle(deps());
    const r1 = await runsOf(ok.id);
    expect(r1).toHaveLength(1); // hanya beli GOOD (sell dan aktivitas lama diabaikan)
    expect(r1[0].ended).toBe("passed");
    expect(r1[0].steps[0].stepValues).toMatchObject({ mint: M.good, source_wallet: WALLET, source_eth: 0.5 });
    const r2 = await runsOf(big.id);
    expect(r2[0].ended).toBe("stopped");
    expect(r2[0].steps[0].detail).toMatch(/source trade 0.5 SOL is below the 1 SOL minimum/);
    await stop(ok.id);
    await stop(big.id);
  });
});

describe("ketahanan dan kontrol", () => {
  it("agent yang tidak running tidak disentuh", async () => {
    const a = await mkAgent({ name: "Paused", running: false });
    await runAgentCycle(deps());
    expect(await runsOf(a.id)).toHaveLength(0);
  });

  it("pemutus mengembalikan skip: run stopped di decision, tanpa notifikasi atau swap", async () => {
    const before = (await db().select().from(notifications)).length;
    const a = await mkAgent({ name: "Skipper", pipeline: "token_trading", mode: "trading", config: { token_mint: M.good, trigger_threshold: "1" }, limits: { perTrade: "0.1" } });
    const skip: Decider = async () => ({ verdict: "skip", conviction: 12, for: "mock says no" });
    await runAgentCycle(deps({ decider: skip, now: () => new Date(Date.now() + 9 * 3600_000) }));
    const [run] = await runsOf(a.id);
    expect(run.ended).toBe("stopped");
    expect(run.steps.at(-1)).toMatchObject({ stepName: "decision", outcome: "stopped" });
    expect(run.steps.at(-1)!.stepValues).toMatchObject({ verdict: "skip", conviction: 12 });
    expect((await db().select().from(notifications)).length).toBe(before);
    await stop(a.id);
  });

  it("pemutus yang melempar error: run failed dicatat, agent lain tetap diproses", async () => {
    const bad = await mkAgent({ name: "Crashy", pipeline: "token_trading", config: { token_mint: M.good, trigger_threshold: "1" } });
    const fine = await mkAgent({ name: "Fine", pipeline: "token_trading", config: { token_mint: M.flat, trigger_threshold: "5" } });
    const boom: Decider = async ({ token }) => {
      if (token.mint === M.good) throw new Error("llm timeout");
      return { verdict: "skip", conviction: 0, for: "n/a" };
    };
    const r = await runAgentCycle(deps({ decider: boom, now: () => new Date(Date.now() + 20 * 3600_000) }));
    expect(r.failed).toBe(1);
    const [badRun] = await runsOf(bad.id);
    expect(badRun.ended).toBe("failed");
    expect(badRun.steps.at(-1)).toMatchObject({ outcome: "failed" });
    expect(badRun.steps.at(-1)!.stepValues).toMatchObject({ error: "llm timeout" });
    expect((await runsOf(fine.id)).length).toBe(1); // agent lain tetap berjalan
    await stop(bad.id);
    await stop(fine.id);
  });

  it("detak jantung: satu run 'tidak ada yang dievaluasi' per 15 menit saat tidak ada kandidat", async () => {
    const a = await mkAgent({ name: "Idle", pipeline: "follow_wallet", config: { wallet_address: "11111111111111111111111111111111" } });
    await runAgentCycle(deps());
    await runAgentCycle(deps()); // segera: tidak menambah
    expect(await runsOf(a.id)).toHaveLength(1);
    const [hb] = await runsOf(a.id);
    expect(hb).toMatchObject({ ended: "stopped" });
    expect(hb.steps[0]).toMatchObject({ stepName: "market", detail: "nothing new to evaluate" });
    await runAgentCycle(deps({ now: () => new Date(Date.now() + 16 * 60_000) }));
    expect(await runsOf(a.id)).toHaveLength(2);
    await stop(a.id);
  });
});

describe("pengikut agent marketplace", () => {
  it("agent publik: pengikut aktif menerima sinyal; pemilik tidak ganda; agent tidak publik tidak mengirim ke pengikut", async () => {
    const FOLLOWER = "dddddddd-dddd-4ddd-8ddd-dddddddddddd";
    const GONE = "eeeeeeee-eeee-4eee-8eee-eeeeeeeeeeee";
    await db().insert(profiles).values([{ id: FOLLOWER, email: "f@x.io", displayName: "f" }, { id: GONE, email: "g@x.io", displayName: "g" }]);
    const cfg = { min_lp_usd: "5000", no_mint_authority: "true", no_freeze_authority: "true", max_dev_wallet_pct: "10", markets: "" };
    const pub = await mkAgent({ name: "Public scanner", published: true, config: cfg });
    await db().insert(subscriptions).values([
      { profileId: FOLLOWER, agentId: pub.id },
      { profileId: GONE, agentId: pub.id, status: "paused" },
      { profileId: OWNER, agentId: pub.id },
    ]);
    await runAgentCycle(deps());
    await stop(pub.id);
    const got = await db().select().from(notifications).where(eq(notifications.profileId, FOLLOWER));
    expect(got).toHaveLength(1);
    expect(got[0]).toMatchObject({ kind: "signal" });
    expect(got[0].title).toContain("Public scanner");
    expect(got[0].title).toContain("GOOD");
    expect(await db().select().from(notifications).where(eq(notifications.profileId, GONE))).toHaveLength(0);

    const priv = await mkAgent({ name: "Private scanner", published: false, config: cfg });
    await db().insert(subscriptions).values({ profileId: GONE, agentId: priv.id });
    await runAgentCycle(deps());
    await stop(priv.id);
    expect(await db().select().from(notifications).where(eq(notifications.profileId, GONE))).toHaveLength(0);
  });
});

describe("trigger_type token_trading", () => {
  const T = { drop: "0x00000000000000000000000000000000000000d1", spike: "0x00000000000000000000000000000000000000d2", lp: "0x00000000000000000000000000000000000000d3" };
  const mk = (cfg: Record<string, string>) => mkAgent({ name: "Trig", pipeline: "token_trading", mode: "signal", config: cfg });
  const first = async (id: number) => (await runsOf(id))[0];

  beforeAll(async () => {
    const base = { lastSeenAt: new Date(), decimals: 18, dex: "uniswap", priceUsd: "1", riskScore: 5 };
    await db().insert(tokens).values([
      { ...base, mint: T.drop, symbol: "DROP", liquidityUsd: "50000", volumeUsd: "24000", volume1hUsd: "1000", change1hPct: "-8" },
      { ...base, mint: T.spike, symbol: "SPIKE", liquidityUsd: "50000", volumeUsd: "24000", volume1hUsd: "6000", change1hPct: "0.5" },
      { ...base, mint: T.lp, symbol: "LPD", liquidityUsd: "200000", volumeUsd: "24000", volume1hUsd: "1000", change1hPct: "0" },
    ]);
  });

  it("price_drop memicu pada penurunan, bukan pada kenaikan", async () => {
    const hit = await mk({ token_mint: T.drop, trigger_type: "price_drop", trigger_threshold: "5" });
    const miss = await mk({ token_mint: M.good, trigger_type: "price_drop", trigger_threshold: "5" }); // GOOD naik 12%
    await runAgentCycle(deps());
    expect((await first(hit.id)).ended).toBe("passed");
    const r = await first(miss.id);
    expect(r.ended).toBe("stopped");
    expect(r.steps[0].detail).toMatch(/has not dropped 5%/);
    await stop(hit.id);
    await stop(miss.id);
  });

  it("price_surge tidak memicu pada penurunan; percent_change memicu pada keduanya", async () => {
    const surge = await mk({ token_mint: T.drop, trigger_type: "price_surge", trigger_threshold: "5" });
    const pct = await mk({ token_mint: T.drop, trigger_type: "percent_change", trigger_threshold: "5" });
    await runAgentCycle(deps({ now: () => new Date(Date.now() + 3 * 3600_000) }));
    expect((await first(surge.id)).ended).toBe("stopped");
    expect((await first(pct.id)).ended).toBe("passed");
    await stop(surge.id);
    await stop(pct.id);
  });

  it("volume_spike membandingkan volume 1 jam dengan rata-rata per jam", async () => {
    const hit = await mk({ token_mint: T.spike, trigger_type: "volume_spike", volume_multiplier: "5" }); // 6000 / (24000/24) = 6x
    const miss = await mk({ token_mint: T.spike, trigger_type: "volume_spike", volume_multiplier: "10" });
    await runAgentCycle(deps({ now: () => new Date(Date.now() + 6 * 3600_000) }));
    expect((await first(hit.id)).ended).toBe("passed");
    const r = await first(miss.id);
    expect(r.ended).toBe("stopped");
    expect(r.steps[0].detail).toMatch(/below the 10× trigger/);
    await stop(hit.id);
    await stop(miss.id);
  });

  it("lp_drop: run pertama hanya mencatat pembanding; run berikutnya memicu bila likuiditas turun cukup", async () => {
    const a = await mk({ token_mint: T.lp, trigger_type: "lp_drop", lp_drop_threshold: "30" });
    await runAgentCycle(deps({ now: () => new Date(Date.now() + 9 * 3600_000) }));
    expect((await first(a.id)).steps[0].detail).toMatch(/no earlier liquidity reading/);
    await db().update(tokens).set({ liquidityUsd: "100000" }).where(eq(tokens.mint, T.lp)); // turun 50%
    await runAgentCycle(deps({ now: () => new Date(Date.now() + 11 * 3600_000) }));
    const runs = await runsOf(a.id);
    expect(runs).toHaveLength(2);
    expect(runs[1].ended).toBe("passed");
    expect(runs[1].steps[0].detail).toMatch(/liquidity down 50%/);
    await stop(a.id);
  });
});
