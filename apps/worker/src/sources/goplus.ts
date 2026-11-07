import { z } from "zod";
import { evmAddress } from "@corvid/shared";
import { CHAINS } from "@corvid/shared/chains";
import { createHttp, type FetchLike } from "../http";

// GoPlus Token Security API (publik tanpa key, batas laju terbatas). Mendukung Robinhood Chain mainnet (chain ID 4663,
// diverifikasi lewat /supported_chains). Semua respons divalidasi zod; field yang tidak ada = "tidak diketahui", bukan aman.
const BASE = `https://api.gopluslabs.io/api/v1/token_security/${CHAINS.mainnet.id}`;
export const SECURITY_BATCH = 30;

const flag = z.union([z.string(), z.number()]).nullable().optional();
const holderSchema = z.object({ percent: flag, is_locked: flag }).passthrough();
const entrySchema = z
  .object({
    is_honeypot: flag,
    cannot_buy: flag,
    cannot_sell_all: flag,
    buy_tax: flag,
    sell_tax: flag,
    is_open_source: flag,
    is_proxy: flag,
    is_mintable: flag,
    hidden_owner: flag,
    can_take_back_ownership: flag,
    owner_change_balance: flag,
    selfdestruct: flag,
    external_call: flag,
    transfer_pausable: flag,
    is_blacklisted: flag,
    slippage_modifiable: flag,
    trading_cooldown: flag,
    creator_address: z.string().nullable().optional(),
    creator_percent: flag,
    holder_count: flag,
    total_supply: flag,
    holders: z.array(holderSchema).nullable().optional(),
    lp_holders: z.array(holderSchema).nullable().optional(),
  })
  .passthrough();
const responseSchema = z.object({ code: z.number(), result: z.record(z.string(), entrySchema).nullable().optional() });

export type CheckState = "pass" | "warn" | "fail" | "unknown";
export interface SecCheck {
  label: string;
  state: CheckState;
  value: string | null;
  hint: string | null;
}
export interface SecGroup {
  title: string;
  checks: SecCheck[];
}
export interface SecurityInfo {
  address: string;
  /** 0 (aman) .. 100 (berbahaya). */
  riskScore: number;
  rugged: boolean;
  top10Pct: number | null;
  devPct: number | null;
  holders: number | null;
  lockedLpPct: number | null;
  /** Pajak tertinggi dari beli/jual dalam basis poin (5% = 500); null bila GoPlus tidak melaporkannya. */
  taxBps: number | null;
  creator: string | null;
  groups: SecGroup[];
  passed: number;
  total: number;
}

const num = (v: string | number | null | undefined): number | null => {
  if (v === null || v === undefined || v === "") return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
};
const is1 = (v: string | number | null | undefined): boolean | null => (v === null || v === undefined || v === "" ? null : String(v) === "1");
const pct = (n: number | null) => (n === null ? null : `${(n * 100).toFixed(2)}%`);

/** Bobot skor risiko per pemeriksaan gagal/peringatan (dijumlah, maksimum 100). Bobot adalah penilaian Corvid, bukan angka GoPlus. */
export function parseSecurity(json: unknown): SecurityInfo[] {
  const out: SecurityInfo[] = [];
  const res = responseSchema.parse(json).result ?? {};
  for (const [rawAddr, e] of Object.entries(res)) {
    const addr = rawAddr.toLowerCase();
    if (!evmAddress.safeParse(addr).success) continue;
    let score = 0;
    const flagCheck = (label: string, v: string | number | null | undefined, bad: CheckState, weight: number, hint: string, invert = false): SecCheck => {
      const b = is1(v);
      if (b === null) return { label, state: "unknown", value: null, hint: null };
      const risky = invert ? !b : b;
      if (risky) score += weight;
      return { label, state: risky ? bad : "pass", value: b ? "Yes" : "No", hint: risky ? hint : null };
    };
    const taxCheck = (label: string, v: string | number | null | undefined): SecCheck => {
      const t = num(v);
      if (t === null) return { label, state: "unknown", value: null, hint: null };
      const state: CheckState = t >= 0.2 ? "fail" : t > 0.05 ? "warn" : "pass";
      score += state === "fail" ? 30 : state === "warn" ? 10 : 0;
      return { label, state, value: pct(t), hint: state === "pass" ? null : "Tax is taken from every swap" };
    };

    const honeypot = is1(e.is_honeypot) === true;
    const contract: SecGroup = {
      title: "Contract",
      checks: [
        flagCheck("Source code verified", e.is_open_source, "warn", 15, "Contract source is not published", true),
        flagCheck("Upgradeable proxy", e.is_proxy, "warn", 10, "Owner can change the contract logic"),
        flagCheck("Mintable", e.is_mintable, "warn", 15, "Owner can create new tokens"),
        flagCheck("Hidden owner", e.hidden_owner, "fail", 25, "Ownership is concealed"),
        flagCheck("Owner can reclaim ownership", e.can_take_back_ownership, "fail", 25, "Renounced ownership can be taken back"),
        flagCheck("Owner can change balances", e.owner_change_balance, "fail", 25, "Owner can edit holder balances"),
        flagCheck("Self-destruct", e.selfdestruct, "fail", 20, "Contract can destroy itself"),
        flagCheck("External calls", e.external_call, "warn", 5, "Contract calls other contracts during transfers"),
      ],
    };
    const trading: SecGroup = {
      title: "Trading",
      checks: [
        flagCheck("Honeypot", e.is_honeypot, "fail", 100, "Buyers cannot sell"),
        flagCheck("Buying blocked", e.cannot_buy, "fail", 40, "Buyers are prevented from buying"),
        flagCheck("Selling full balance blocked", e.cannot_sell_all, "fail", 40, "Holders cannot sell their whole balance"),
        taxCheck("Buy tax", e.buy_tax),
        taxCheck("Sell tax", e.sell_tax),
        flagCheck("Transfers can be paused", e.transfer_pausable, "warn", 15, "Owner can freeze trading"),
        flagCheck("Blacklist function", e.is_blacklisted, "warn", 10, "Owner can block addresses"),
        flagCheck("Slippage modifiable", e.slippage_modifiable, "warn", 10, "Owner can change taxes after launch"),
      ],
    };

    const holders = e.holders ?? [];
    const top10 = holders.length ? holders.slice(0, 10).reduce((a, h) => a + (num(h.percent) ?? 0), 0) : null;
    const creatorPct = num(e.creator_percent);
    const lp = e.lp_holders ?? [];
    const lockedLp = lp.length ? lp.reduce((a, h) => a + (is1(h.is_locked) ? num(h.percent) ?? 0 : 0), 0) : null;

    const dist: SecGroup = { title: "Holders & liquidity", checks: [] };
    if (top10 === null) dist.checks.push({ label: "Top 10 holders", state: "unknown", value: null, hint: null });
    else {
      const st: CheckState = top10 >= 0.8 ? "fail" : top10 >= 0.5 ? "warn" : "pass";
      score += st === "fail" ? 20 : st === "warn" ? 10 : 0;
      dist.checks.push({ label: "Top 10 holders", state: st, value: pct(top10), hint: st === "pass" ? null : "Supply is concentrated" });
    }
    if (creatorPct === null) dist.checks.push({ label: "Creator holdings", state: "unknown", value: null, hint: null });
    else {
      const st: CheckState = creatorPct >= 0.1 ? "warn" : "pass";
      score += st === "warn" ? 10 : 0;
      dist.checks.push({ label: "Creator holdings", state: st, value: pct(creatorPct), hint: st === "warn" ? "Creator holds a large share" : null });
    }
    if (lockedLp === null) dist.checks.push({ label: "Liquidity locked or burned", state: "unknown", value: null, hint: null });
    else {
      const st: CheckState = lockedLp >= 0.5 ? "pass" : "warn";
      score += lockedLp < 0.2 ? 10 : lockedLp < 0.5 ? 5 : 0;
      dist.checks.push({ label: "Liquidity locked or burned", state: st, value: pct(lockedLp), hint: st === "pass" ? null : "Liquidity can be withdrawn" });
    }

    const groups = [contract, trading, dist];
    const all = groups.flatMap((g) => g.checks);
    out.push({
      address: addr,
      riskScore: honeypot ? 100 : Math.min(100, score),
      rugged: honeypot,
      top10Pct: top10 === null ? null : top10 * 100,
      devPct: creatorPct === null ? null : creatorPct * 100,
      holders: num(e.holder_count) === null ? null : Math.round(num(e.holder_count)!),
      lockedLpPct: lockedLp === null ? null : lockedLp * 100,
      taxBps: (() => {
        const b = num(e.buy_tax);
        const s = num(e.sell_tax);
        if (b === null && s === null) return null;
        return Math.round(Math.max(b ?? 0, s ?? 0) * 10_000);
      })(),
      creator: e.creator_address ? e.creator_address.toLowerCase() : null,
      groups,
      passed: all.filter((c) => c.state === "pass").length,
      total: all.length,
    });
  }
  return out;
}

const respCode = z.object({ code: z.number() }).passthrough();

export function createGoPlus(opts: { fetch?: FetchLike; minIntervalMs?: number; sleep?: (ms: number) => Promise<void>; throttleWaitMs?: number } = {}) {
  const http = createHttp({ fetch: opts.fetch, sleep: opts.sleep, minIntervalMs: opts.minIntervalMs ?? 4000 });
  const sleep = opts.sleep ?? ((ms: number) => new Promise<void>((r) => setTimeout(r, ms)));
  const throttleWaitMs = opts.throttleWaitMs ?? 20_000;
  return {
    /**
     * Satu alamat per request: untuk Robinhood Chain GoPlus hanya menjawab alamat PERTAMA bila diminta beberapa sekaligus
     * (diuji langsung), jadi batch tidak berguna. Kode non-1 (mis. 4029 = terlalu sering) dicoba ulang sekali setelah jeda;
     * bila masih ditolak, berhenti. `attempted` hanya berisi alamat yang benar-benar dijawab GoPlus (ada atau tidak ada
     * datanya), supaya yang belum sempat dicoba tidak dianggap tidak dikenal.
     */
    async lookup(addresses: string[]): Promise<{ infos: SecurityInfo[]; attempted: string[]; throttled: boolean }> {
      const valid = [...new Set(addresses.map((a) => a.toLowerCase()))].filter((a) => evmAddress.safeParse(a).success);
      const infos: SecurityInfo[] = [];
      const attempted: string[] = [];
      for (const addr of valid) {
        let json = await http.getJson(`${BASE}?contract_addresses=${addr}`);
        if (respCode.parse(json).code !== 1) {
          await sleep(throttleWaitMs);
          json = await http.getJson(`${BASE}?contract_addresses=${addr}`);
          if (respCode.parse(json).code !== 1) return { infos, attempted, throttled: true };
        }
        infos.push(...parseSecurity(json));
        attempted.push(addr);
      }
      return { infos, attempted, throttled: false };
    },
    async tokens(addresses: string[]): Promise<SecurityInfo[]> {
      return (await this.lookup(addresses)).infos;
    },
  };
}
export type GoPlus = ReturnType<typeof createGoPlus>;
