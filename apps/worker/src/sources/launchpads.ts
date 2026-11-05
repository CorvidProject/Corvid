import { CHAINS } from "@corvid/shared/chains";
import type { FetchLike } from "../http";

// Launchpad dengan bonding curve di Robinhood Chain. Kontrak pool di GeckoTerminal = kontrak kurva; progres = aset kuotasi
// yang terkumpul di kontrak / ambang kelulusan. Hanya launchpad yang kurvanya terbukti on-chain dan ambangnya terverifikasi
// yang ada di sini. Launchpad lain (Clanker, Bankr, Frontier, Clank.trade, Long.xyz, o1, EasyA, Giga) langsung membuat pool
// AMM (Uniswap v3/v4) tanpa kurva, jadi tidak punya progres dan tetap tampil di Latest Tokens.
//
// Survei on-chain 5 Nov 2026 (mainnet 4663), data lengkap di docs/DECISIONS.md.

export type LaunchpadId = "pons" | "virtuals";
export type Quote = { kind: "eth" } | { kind: "erc20"; token: string };
export interface Launchpad {
  id: LaunchpadId;
  /** id dex di GeckoTerminal */
  dex: string;
  quote: Quote;
  /** Ambang kelulusan dalam satuan aset kuotasi (ETH atau token). */
  graduation: number;
  /** Pool tanpa pembelian tetap ditampilkan sebagai "new" (0%) bila hampir seluruh supply token masih di kontrak kurva. */
  showFresh: boolean;
}

/**
 * Pons V2: kurva ETH. Ambang 4,2 ETH didukung sumber sekunder + bukti on-chain (60 kurva: kode identik, maksimum 3,65 ETH;
 * kurva lulus ber-FDV ~$47–51 ribu cocok dengan ekstrapolasi ke 4,2 ETH). Dokumentasi resmi belum ditemukan.
 */
export const PONS: Launchpad = { id: "pons", dex: "pons-v2", quote: { kind: "eth" }, graduation: 4.2, showFresh: false };
/**
 * Virtuals: kurva dengan kuotasi VIRTUAL (token 0xc691…3c31, simbol "VIRTUAL", 18 desimal: diverifikasi eth_call).
 * Ambang 42.000 VIRTUAL: sumber resmi Virtuals (panduan Robinhood Chain + whitepaper); on-chain: 60 pool, maksimum 12.155 VIRTUAL.
 * Pool baru berisi 0 VIRTUAL dan ~100% supply agent, jadi "fresh" ditampilkan sebagai 0%.
 */
export const VIRTUAL_TOKEN = "0xc6911796042b15d7fa4f6cde69e245ddcd3d9c31";
export const VIRTUALS: Launchpad = { id: "virtuals", dex: "virtuals-robinhood", quote: { kind: "erc20", token: VIRTUAL_TOKEN }, graduation: 42_000, showFresh: true };
export const LAUNCHPADS: Launchpad[] = [PONS, VIRTUALS];

/** Kompatibilitas: ambang Pons bawaan. */
export const GRADUATION_ETH_DEFAULT = PONS.graduation;
/** Mulai "Final Stretch" pada progres ini (persen). */
export const STRETCH_FROM_PCT = 50;
/** Pool "fresh": pangsa supply token di kontrak kurva minimal ini. */
export const FRESH_MIN_SHARE = 0.99;

export type MemescopeStage = "new" | "stretch" | "migrated";
export interface Classified {
  stage: MemescopeStage;
  /** 0–100 */
  progress: number;
  complete: boolean;
}

/**
 * Tentukan tahap sebuah kurva.
 *  - raised > 0: masih di kurva ("new" bila < STRETCH_FROM_PCT, selain itu "stretch"; progres dibatasi 100).
 *  - raised = 0: bila token sudah punya pasangan aktif di DEX lain (migratedDex) → "migrated"; bila pool masih "fresh"
 *    (belum ada pembelian, supply masih di kurva) → "new" 0%; selain itu peluncuran mati/tidak jelas → null (tidak ditampilkan).
 */
export function classifyCurve(a: { raised: number; graduation: number; migratedDex: string | null; fresh?: boolean }): Classified | null {
  if (a.raised > 0) {
    const progress = Math.min(100, Math.round((a.raised / a.graduation) * 10_000) / 100);
    return { stage: progress >= STRETCH_FROM_PCT ? "stretch" : "new", progress, complete: false };
  }
  if (a.migratedDex) return { stage: "migrated", progress: 100, complete: true };
  if (a.fresh) return { stage: "new", progress: 0, complete: false };
  return null;
}
/** Pons (kompatibilitas tes lama): parameter bernama `ethRaised`. */
export const classifyPons = (a: { ethRaised: number; graduationEth: number; migratedDex: string | null }) =>
  classifyCurve({ raised: a.ethRaised, graduation: a.graduationEth, migratedDex: a.migratedDex });

/** Pasangan DexScreener yang dianggap "sudah pindah": bukan DEX launchpad sumber dan punya likuiditas. */
export const migratedDexOf = (dex: string | null | undefined, liquidityUsd: string | null | undefined): string | null =>
  dex && !/^(pons|virtuals)/i.test(dex) && Number(liquidityUsd ?? 0) > 0 ? dex : null;

const BATCH = 50;
const pad = (a: string) => a.toLowerCase().replace(/^0x/, "").padStart(64, "0");
const BALANCE_OF = "0x70a08231";
const TOTAL_SUPPLY = "0x18160ddd";

/** Klien JSON-RPC minimal (batch). Selalu ke RPC mainnet: data pasar berasal dari mainnet. */
export function createRpc(opts: { url?: string; fetch?: FetchLike } = {}) {
  const url = opts.url || CHAINS.mainnet.publicRpcUrl;
  const doFetch: FetchLike = opts.fetch ?? ((u, i) => fetch(u, i));

  /** Jalankan banyak request sekaligus; hasil sejajar dengan input (null = gagal). */
  async function batch(reqs: { method: string; params: unknown[] }[]): Promise<(string | null)[]> {
    const out: (string | null)[] = new Array(reqs.length).fill(null);
    for (let i = 0; i < reqs.length; i += BATCH) {
      const chunk = reqs.slice(i, i + BATCH);
      const body = chunk.map((r, k) => ({ jsonrpc: "2.0", id: k, method: r.method, params: r.params }));
      const res = await doFetch(url, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body), signal: AbortSignal.timeout(15_000) });
      if (!res.ok) throw new Error(`RPC HTTP ${res.status}`);
      const json = (await res.json()) as unknown;
      if (!Array.isArray(json)) throw new Error("RPC: respons batch tidak valid");
      for (const r of json as { id: number; result?: string }[]) {
        if (typeof r.result === "string" && /^0x[0-9a-fA-F]*$/.test(r.result) && r.result !== "0x") out[i + r.id] = r.result;
      }
    }
    return out;
  }
  const toNum = (hex: string) => Number(BigInt(hex)) / 1e18;

  return {
    /** Saldo ETH per alamat (lowercase). Alamat yang gagal dibaca dihilangkan, tidak diisi 0. */
    async balances(addresses: string[]): Promise<Map<string, number>> {
      const res = await batch(addresses.map((a) => ({ method: "eth_getBalance", params: [a, "latest"] })));
      const out = new Map<string, number>();
      res.forEach((r, i) => r !== null && out.set(addresses[i].toLowerCase(), toNum(r)));
      return out;
    },
    /** Saldo token ERC-20 (18 desimal) milik tiap alamat. */
    async erc20Balances(token: string, holders: string[]): Promise<Map<string, number>> {
      const res = await batch(holders.map((h) => ({ method: "eth_call", params: [{ to: token, data: BALANCE_OF + pad(h) }, "latest"] })));
      const out = new Map<string, number>();
      res.forEach((r, i) => r !== null && out.set(holders[i].toLowerCase(), toNum(r)));
      return out;
    },
    /** Pangsa (0–1) dari total supply token yang dipegang `holder`, untuk pasangan [token, holder]. Kunci hasil: alamat holder. */
    async erc20Share(pairs: { token: string; holder: string }[]): Promise<Map<string, number>> {
      const reqs = pairs.flatMap((p) => [
        { method: "eth_call", params: [{ to: p.token, data: BALANCE_OF + pad(p.holder) }, "latest"] },
        { method: "eth_call", params: [{ to: p.token, data: TOTAL_SUPPLY }, "latest"] },
      ]);
      const res = await batch(reqs);
      const out = new Map<string, number>();
      pairs.forEach((p, i) => {
        const bal = res[i * 2];
        const sup = res[i * 2 + 1];
        if (bal === null || sup === null || BigInt(sup) === 0n) return;
        out.set(p.holder.toLowerCase(), Number((BigInt(bal) * 1_000_000n) / BigInt(sup)) / 1_000_000);
      });
      return out;
    },
  };
}
export type Rpc = ReturnType<typeof createRpc>;
