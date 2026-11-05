import { CHAINS } from "@corvid/shared/chains";
import type { FetchLike } from "../http";

// Launchpad Pons V2 di Robinhood Chain (kurva ETH). Pool GeckoTerminal dex "pons-v2": alamat pool = kontrak kurva,
// dan saldo ETH kontrak itu = ETH yang terkumpul. Progres = terkumpul / ambang kelulusan.
//
// Verifikasi (5 Nov 2026, on-chain, mainnet 4663):
//  - 60 kurva terbaca: kode kontrak identik (10229 byte), tidak ada yang saldonya melewati 4,2 ETH (tertinggi 3,65 ETH).
//  - Kurva lulus (saldo 0) dan masih punya FDV: mengumpul di ~$47–51 ribu, cocok dengan ekstrapolasi kurva ke 4,2 ETH.
//  - Sumber sekunder menyebut ambang 4,2 ETH "pada pengaturan saat ini"; dokumentasi resmi belum ditemukan. Karena itu
//    nilainya dapat disetel lewat env PONS_GRADUATION_ETH dan UI menyebut progres sebagai perkiraan.
export const PONS_DEX = "pons-v2";
export const GRADUATION_ETH_DEFAULT = 4.2;
/** Mulai "Final Stretch" pada progres ini (persen). */
export const STRETCH_FROM_PCT = 50;

export type MemescopeStage = "new" | "stretch" | "migrated";
export interface Classified {
  stage: MemescopeStage;
  /** 0–100 */
  progress: number;
  complete: boolean;
}

/**
 * Tentukan tahap sebuah kurva Pons.
 *  - ethRaised > 0: masih di kurva ("new" bila < STRETCH_FROM_PCT, selain itu "stretch"; progres dibatasi 100).
 *  - ethRaised = 0: kurva kosong. Bila token sudah punya pasangan aktif di DEX lain (migratedDex) → "migrated";
 *    bila tidak, peluncuran mati/tidak pernah terisi → null (tidak ditampilkan).
 */
export function classifyPons(a: { ethRaised: number; graduationEth: number; migratedDex: string | null }): Classified | null {
  if (a.ethRaised > 0) {
    const progress = Math.min(100, Math.round((a.ethRaised / a.graduationEth) * 10_000) / 100);
    return { stage: progress >= STRETCH_FROM_PCT ? "stretch" : "new", progress, complete: false };
  }
  if (a.migratedDex) return { stage: "migrated", progress: 100, complete: true };
  return null;
}

/** Pasangan DexScreener yang dianggap "sudah pindah": bukan DEX Pons dan punya likuiditas. */
export const migratedDexOf = (dex: string | null | undefined, liquidityUsd: string | null | undefined): string | null =>
  dex && !/^pons/i.test(dex) && Number(liquidityUsd ?? 0) > 0 ? dex : null;

const BATCH = 50;
/** Klien JSON-RPC minimal: saldo ETH banyak alamat sekaligus (batch). Selalu ke RPC mainnet (data pasar dari mainnet). */
export function createRpc(opts: { url?: string; fetch?: FetchLike } = {}) {
  const url = opts.url || CHAINS.mainnet.publicRpcUrl;
  const doFetch: FetchLike = opts.fetch ?? ((u, i) => fetch(u, i));
  return {
    /** Saldo ETH (satuan ETH) per alamat lowercase. Alamat yang gagal dibaca dihilangkan dari hasil, tidak diisi 0. */
    async balances(addresses: string[]): Promise<Map<string, number>> {
      const out = new Map<string, number>();
      for (let i = 0; i < addresses.length; i += BATCH) {
        const chunk = addresses.slice(i, i + BATCH);
        const body = chunk.map((a, k) => ({ jsonrpc: "2.0", id: k, method: "eth_getBalance", params: [a, "latest"] }));
        const res = await doFetch(url, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body), signal: AbortSignal.timeout(15_000) });
        if (!res.ok) throw new Error(`RPC HTTP ${res.status}`);
        const json = (await res.json()) as unknown;
        if (!Array.isArray(json)) throw new Error("RPC: respons batch tidak valid");
        for (const r of json as { id: number; result?: string }[]) {
          if (typeof r.result === "string" && /^0x[0-9a-fA-F]+$/.test(r.result)) out.set(chunk[r.id].toLowerCase(), Number(BigInt(r.result)) / 1e18);
        }
      }
      return out;
    },
  };
}
export type Rpc = ReturnType<typeof createRpc>;
