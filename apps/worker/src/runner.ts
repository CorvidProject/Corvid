import { and, desc, eq, gt as gtOp, sql } from "drizzle-orm";
import { agentRunSteps, agentRuns, agents, notifications, subscriptions, swaps, tokens, walletActivity, wallets } from "@corvid/db";
import type { Deps } from "./ingest";

// Runner agent (SIMULASI). Satu siklus: untuk tiap agent berstatus running, cari kandidat token menurut
// pipeline, lalu evaluasi lima langkah (market, safety, position, decision, risk) dan catat sebagai satu run.
// Tidak pernah mengirim transaksi: mode trading hanya menulis swap `dry` (simulasi). Eksekusi `live`
// belum diimplementasikan dan hanya akan diaktifkan atas izin eksplisit pemilik.

export type AgentRow = typeof agents.$inferSelect;
export type TokenRow = typeof tokens.$inferSelect;
export type Outcome = "passed" | "blocked" | "stopped" | "failed";
export type StepName = "market" | "safety" | "position" | "decision" | "risk";
export interface StepRecord {
  step: StepName;
  detail: string;
  values: Record<string, unknown>;
  outcome: Outcome;
}

export interface Decision {
  verdict: "buy" | "skip";
  conviction: number;
  /** Alasan singkat, dipisah " · ". */
  for: string;
}
export interface DecisionInput {
  agent: AgentRow;
  token: TokenRow;
}
/** Pemutus keputusan. Bawaan: aturan deterministik. Penyedia LLM dapat dipasang lewat antarmuka yang sama. */
export type Decider = (input: DecisionInput) => Promise<Decision>;

const num = (v: string | number | null | undefined) => (v === null || v === undefined ? null : Number(v));
const clamp = (n: number, lo = 0, hi = 100) => Math.max(lo, Math.min(hi, n));
const cfgNum = (c: Record<string, string>, k: string) => {
  const v = Number(c[k]);
  return c[k] !== undefined && c[k] !== "" && isFinite(v) ? v : null;
};
const usd = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

/** Pemutus berbasis aturan: skor 0..100 dari likuiditas, aktivitas, holders, dan skor risiko. */
export const ruleDecider: Decider = async ({ agent, token }) => {
  let score = 50;
  const why: string[] = [];
  const liq = num(token.liquidityUsd);
  const vol = num(token.volumeUsd);
  const risk = token.riskScore;
  if (liq !== null && liq >= 50_000) (score += 20), why.push("deep liquidity");
  else if (liq !== null && liq < 5_000) (score -= 10), why.push("thin liquidity");
  if (liq && vol && vol / liq >= 1) (score += 10), why.push(`traded ${(vol / liq).toFixed(1)}× its own liquidity`);
  if (token.holders !== null && token.holders >= 1000) (score += 10), why.push(`${token.holders.toLocaleString("en-US")} holders`);
  if (risk === null) (score -= 20), why.push("no security data yet");
  else if (risk <= 10) (score += 10), why.push("low risk score");
  else if (risk >= 40) (score -= 30), why.push("elevated risk score");
  const conviction = clamp(Math.round(score));
  const floor = agent.floor ?? 70;
  return { verdict: conviction >= floor ? "buy" : "skip", conviction, for: why.join(" · ") || "no strong signals" };
};

export interface RunnerDeps extends Deps {
  decider?: Decider;
  /** Harga ETH dalam USD untuk mencatat nilai swap simulasi; null bila tidak tersedia. */
  ethUsd?: () => Promise<number | null>;
}

const MAX_CANDIDATES = 3;
const HEARTBEAT_MS = 15 * 60_000;

interface Candidate {
  token: TokenRow | null;
  mint: string;
  /** Penjelasan pemicu (untuk detail langkah market). */
  note: string;
  /** Ambang yang tidak lolos langkah market (mis. likuiditas), bila ada. */
  marketBlock?: string;
  /** Pemicu tidak terpenuhi: run berhenti di langkah market. */
  notTriggered?: string;
  extra?: Record<string, unknown>;
}

function marketValues(t: TokenRow | null) {
  return {
    price: num(t?.priceUsd),
    volume: num(t?.volumeUsd),
    holders: t?.holders ?? null,
    move_pct: num(t?.change1hPct),
    liquidity: num(t?.liquidityUsd),
  };
}

/** Evaluasi keamanan. `strict`: tanpa data keamanan = diblokir (penemuan otomatis); selain itu hanya peringatan. */
function checkSafety(t: TokenRow, cfg: Record<string, string>, strict: boolean): { outcome: Outcome; detail: string; values: Record<string, unknown> } {
  const known = t.riskScore !== null;
  const values: Record<string, unknown> = {
    mint: !known ? "unknown" : t.mintAuthority ? "active" : "renounced",
    freeze: !known ? "unknown" : t.freezeAuthority ? "possible" : "impossible",
    checked: known ? "yes" : "no",
  };
  if (t.rugged) return { outcome: "blocked", detail: "marked as rugged", values };
  if (!known) return strict ? { outcome: "blocked", detail: "no security data yet, cannot verify", values } : { outcome: "passed", detail: "no security data yet (not blocking for a chosen token)", values };
  if (cfg.no_mint_authority === "true" && t.mintAuthority) return { outcome: "blocked", detail: "mint authority is not revoked", values };
  if (cfg.no_freeze_authority === "true" && t.freezeAuthority) return { outcome: "blocked", detail: "freeze authority is not revoked", values };
  const maxDev = cfgNum(cfg, "max_dev_wallet_pct");
  const dev = num(t.devPct);
  if (maxDev !== null && dev !== null && dev > maxDev) return { outcome: "blocked", detail: `dev holds ${dev}% (max ${maxDev}%)`, values: { ...values, dev_pct: dev } };
  const minBurn = cfgNum(cfg, "lp_burn_pct_min");
  const burn = num(t.lpBurnPct);
  if (minBurn !== null && minBurn > 0 && burn !== null && burn < minBurn) return { outcome: "blocked", detail: `LP burned ${burn}% (min ${minBurn}%)`, values: { ...values, lp_burn_pct: burn } };
  if (t.riskScore! >= 60) return { outcome: "blocked", detail: `risk score ${t.riskScore} is too high`, values };
  return { outcome: "passed", detail: "", values };
}

async function evaluatedMints(deps: Deps, agentId: number, since: Date): Promise<Set<string>> {
  const rows = await deps.db
    .selectDistinct({ mint: sql<string>`${agentRunSteps.stepValues}->>'mint'` })
    .from(agentRunSteps)
    .innerJoin(agentRuns, eq(agentRuns.id, agentRunSteps.runId))
    .where(and(eq(agentRuns.agentId, agentId), eq(agentRunSteps.stepName, "market"), gtOp(agentRuns.ranAt, since)));
  return new Set(rows.map((r) => r.mint).filter(Boolean));
}

async function findCandidates(deps: Deps, a: AgentRow, now: Date): Promise<Candidate[]> {
  const cfg = a.config as Record<string, string>;
  const ago = (ms: number) => new Date(now.getTime() - ms);

  if (a.pipeline === "new_tokens") {
    const seen = await evaluatedMints(deps, a.id, ago(24 * 3600_000));
    const rows = await deps.db
      .select()
      .from(tokens)
      .where(and(gtOp(tokens.createdAtChain, ago(60 * 60_000)), gtOp(tokens.lastSeenAt, ago(30 * 60_000))))
      .orderBy(desc(tokens.createdAtChain))
      .limit(30);
    const minLp = cfgNum(cfg, "min_lp_usd") ?? 0;
    const markets = (cfg.markets ?? "").split(",").map((m) => m.trim().toLowerCase()).filter(Boolean);
    return rows
      .filter((t) => !seen.has(t.mint))
      .slice(0, MAX_CANDIDATES)
      .map((t) => {
        const liq = num(t.liquidityUsd) ?? 0;
        const block = liq < minLp ? `liquidity ${usd(liq)} is below the ${usd(minLp)} minimum` : markets.length && !markets.includes((t.dex ?? "").toLowerCase()) ? `market ${t.dex ?? "unknown"} is not in your list` : undefined;
        return { token: t, mint: t.mint, note: "new token", marketBlock: block };
      });
  }

  if (a.pipeline === "token_trading") {
    const mint = (cfg.token_mint ?? "").trim();
    if (!mint) return [];
    const seen = await evaluatedMints(deps, a.id, ago(60 * 60_000));
    if (seen.has(mint)) return [];
    const [t] = await deps.db.select().from(tokens).where(eq(tokens.mint, mint)).limit(1);
    if (!t) return [{ token: null, mint, note: "token not indexed yet", notTriggered: "token is not indexed yet" }];
    const threshold = cfgNum(cfg, "trigger_threshold") ?? 5;
    const move = num(t.change1hPct) ?? 0;
    return [{ token: t, mint, note: `1h move ${move}%`, notTriggered: move >= threshold ? undefined : `1h move ${move}% is below the ${threshold}% trigger` }];
  }

  if (a.pipeline === "follow_wallet") {
    const addr = (cfg.wallet_address ?? "").trim();
    if (!addr) return [];
    const seen = await evaluatedMints(deps, a.id, ago(24 * 3600_000));
    const onlyBuys = cfg.only_buys !== "false";
    const minEth = cfgNum(cfg, "min_source_trade_eth") ?? 0;
    const acts = await deps.db
      .select({ act: walletActivity })
      .from(walletActivity)
      .innerJoin(wallets, eq(wallets.id, walletActivity.walletId))
      .where(and(eq(wallets.address, addr), gtOp(walletActivity.at, ago(15 * 60_000))))
      .orderBy(desc(walletActivity.at))
      .limit(20);
    const out: Candidate[] = [];
    for (const { act } of acts) {
      if (seen.has(act.mint) || (onlyBuys && act.side !== "buy")) continue;
      const [t] = await deps.db.select().from(tokens).where(eq(tokens.mint, act.mint)).limit(1);
      const sol = num(act.amountEth) ?? 0;
      out.push({
        token: t ?? null,
        mint: act.mint,
        note: `wallet ${act.side} ${sol} SOL`,
        notTriggered: !t ? "token is not indexed yet" : sol < minEth ? `source trade ${sol} SOL is below the ${minEth} SOL minimum` : undefined,
        extra: { source_wallet: addr, source_eth: sol },
      });
      if (out.length >= MAX_CANDIDATES) break;
    }
    return out;
  }
  return [];
}

/** Jalankan lima langkah untuk satu kandidat. Berhenti di langkah pertama yang tidak lolos. */
async function evaluate(deps: RunnerDeps, a: AgentRow, c: Candidate): Promise<{ steps: StepRecord[]; ended: Outcome; sol: number | null; decision?: Decision }> {
  const cfg = a.config as Record<string, string>;
  const limits = a.limits as Record<string, string>;
  const steps: StepRecord[] = [];
  const done = (ended: Outcome, sol: number | null = null, decision?: Decision) => ({ steps, ended, sol, decision });
  const t = c.token;

  // 1. market
  const mv = { mint: c.mint, ...marketValues(t), ...(c.extra ?? {}) };
  const marketOutcome: Outcome = !t ? "stopped" : c.notTriggered ? "stopped" : c.marketBlock ? "blocked" : "passed";
  steps.push({ step: "market", detail: c.notTriggered ?? c.marketBlock ?? c.note, values: mv, outcome: marketOutcome });
  if (marketOutcome !== "passed" || !t) return done(marketOutcome);

  // 2. safety (penemuan otomatis = ketat)
  const safety = checkSafety(t, cfg, a.pipeline === "new_tokens");
  steps.push({ step: "safety", detail: safety.detail, values: safety.values, outcome: safety.outcome });
  if (safety.outcome !== "passed") return done(safety.outcome);

  // 3. position: jangan beli lagi token yang sudah dipegang agent ini (dari swap simulasi)
  const [pos] = await deps.db
    .select({ net: sql<number>`coalesce(sum(case when ${swaps.side} = 'buy' then 1 else -1 end), 0)::int` })
    .from(swaps)
    .where(and(eq(swaps.agentId, a.id), eq(swaps.tokenId, t.id)));
  const holding = (pos?.net ?? 0) > 0;
  steps.push({ step: "position", detail: holding ? "already holding this token" : "", values: { holding: holding ? "yes" : "none" }, outcome: holding ? "stopped" : "passed" });
  if (holding) return done("stopped");

  // 4. decision
  const decider = deps.decider ?? ruleDecider;
  const d = await decider({ agent: a, token: t });
  const floor = a.floor ?? 70;
  steps.push({ step: "decision", detail: d.for, values: { for: d.for, floor, verdict: d.verdict, conviction: d.conviction }, outcome: d.verdict === "buy" ? "passed" : "stopped" });
  if (d.verdict !== "buy") return done("stopped", null, d);

  // 5. risk: ukuran posisi dibatasi batas per trade
  const want = cfgNum(cfg, "max_eth_per_trade") ?? cfgNum(cfg, "max_eth_per_copy");
  const cap = cfgNum(limits, "perTrade");
  if (a.mode === "trading") {
    if (!cap || cap <= 0) {
      steps.push({ step: "risk", detail: "no per-trade limit set", values: { reason: "no per-trade limit set" }, outcome: "blocked" });
      return done("blocked", null, d);
    }
    const sol = Math.min(want ?? cap, cap);
    steps.push({ step: "risk", detail: "", values: { size_eth: sol, cap_eth: cap, mode: "dry" }, outcome: "passed" });
    return done("passed", sol, d);
  }
  steps.push({ step: "risk", detail: "signal mode: notify only", values: { mode: "signal" }, outcome: "passed" });
  return done("passed", null, d);
}

async function recordRun(deps: RunnerDeps, a: AgentRow, c: Candidate, r: Awaited<ReturnType<typeof evaluate>>, now: Date) {
  const ethUsd = r.sol !== null && deps.ethUsd ? await deps.ethUsd() : null;
  await deps.db.transaction(async (tx) => {
    const [last] = await tx.select({ n: sql<number>`coalesce(max(${agentRuns.runNumber}), 0)::int` }).from(agentRuns).where(eq(agentRuns.agentId, a.id));
    const [run] = await tx.insert(agentRuns).values({ agentId: a.id, runNumber: (last?.n ?? 0) + 1, ranAt: now, ended: r.ended }).returning({ id: agentRuns.id });
    await tx.insert(agentRunSteps).values(r.steps.map((s, i) => ({ runId: run.id, stepName: s.step, detail: s.detail, outcome: s.outcome, stepValues: s.values, sortOrder: i })));
    const sym = c.token?.symbol?.trim() || c.mint.slice(0, 4);
    if (r.ended === "passed" && r.sol !== null && c.token) {
      // Simulasi: tidak ada transaksi on-chain.
      const price = num(c.token.priceUsd);
      await tx.insert(swaps).values({
        agentId: a.id,
        tokenId: c.token.id,
        side: "buy",
        amountUsd: ethUsd !== null ? String(+(r.sol * ethUsd).toFixed(2)) : null,
        mode: "dry",
        report: { simulated: true, sol: r.sol, token_price_usd: price, eth_usd: ethUsd, conviction: r.decision?.conviction ?? null },
        executedAt: now,
      });
      await tx.insert(notifications).values({ profileId: a.ownerId, kind: "trade", title: `${a.name}: simulated buy of ${sym}`, body: `Dry run, ${r.sol} SOL. ${r.decision?.for ?? ""}`.trim(), at: now });
    } else if (r.ended === "passed") {
      await tx.insert(notifications).values({ profileId: a.ownerId, kind: "signal", title: `${a.name}: ${sym} matches your pipeline`, body: r.decision?.for ?? c.note, at: now });
    }
    // Pengikut agent yang dipublikasikan menerima sinyal yang sama (tanpa detail simulasi trade). Hanya saat run lolos.
    if (a.published && r.ended === "passed") {
      const followers = await tx.select({ id: subscriptions.profileId }).from(subscriptions).where(and(eq(subscriptions.agentId, a.id), eq(subscriptions.status, "active")));
      const rows = followers.filter((f) => f.id !== a.ownerId).map((f) => ({ profileId: f.id, kind: "signal", title: `${a.name}: ${sym} matches this agent's pipeline`, body: r.decision?.for ?? c.note, at: now }));
      if (rows.length) await tx.insert(notifications).values(rows);
    }
  });
}

export interface CycleResult {
  agents: number;
  runs: number;
  passed: number;
  failed: number;
}

/** Satu siklus untuk semua agent berstatus running. Kegagalan satu agent tidak menghentikan yang lain. */
export async function runAgentCycle(deps: RunnerDeps): Promise<CycleResult> {
  const now = (deps.now ?? (() => new Date()))();
  const running = await deps.db.select().from(agents).where(eq(agents.running, true));
  const res: CycleResult = { agents: running.length, runs: 0, passed: 0, failed: 0 };

  for (const a of running) {
    try {
      const cands = await findCandidates(deps, a, now);
      if (cands.length === 0) {
        // Detak jantung: catat run "tidak ada yang dievaluasi" paling banyak sekali per 15 menit agar daftar tidak penuh.
        const [last] = await deps.db.select({ at: agentRuns.ranAt }).from(agentRuns).where(eq(agentRuns.agentId, a.id)).orderBy(desc(agentRuns.ranAt)).limit(1);
        if (!last || now.getTime() - last.at.getTime() >= HEARTBEAT_MS) {
          const hb: Candidate = { token: null, mint: "", note: "nothing to evaluate", notTriggered: "nothing new to evaluate" };
          await recordRun(deps, a, hb, { steps: [{ step: "market", detail: "nothing new to evaluate", values: {}, outcome: "stopped" }], ended: "stopped", sol: null }, now);
          res.runs++;
        }
        continue;
      }
      for (const c of cands) {
        let r: Awaited<ReturnType<typeof evaluate>>;
        try {
          r = await evaluate(deps, a, c);
        } catch (e) {
          const msg = (e as Error).message.slice(0, 200);
          deps.log?.(`agent ${a.id} gagal: ${msg}`);
          r = { steps: [{ step: "decision", detail: "agent step failed", values: { error: msg, mint: c.mint }, outcome: "failed" }], ended: "failed", sol: null };
          res.failed++;
        }
        await recordRun(deps, a, c, r, now);
        res.runs++;
        if (r.ended === "passed") res.passed++;
      }
    } catch (e) {
      res.failed++;
      deps.log?.(`agent ${a.id}: siklus gagal: ${(e as Error).message}`);
    }
  }
  return res;
}

