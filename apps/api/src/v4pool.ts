// Pencari PoolKey Uniswap v4 (Robinhood Chain mainnet) lewat JSON-RPC polos, tanpa dependensi.
// Id pool v4 hanyalah hash dari PoolKey (currency0, currency1, fee, tickSpacing, hooks); untuk menukar token diperlukan PoolKey
// aslinya, yang hanya ada di event `Initialize` PoolManager. RPC publik membatasi rentang getLogs, jadi blok pembuatan pool
// dicari dari waktu pembuatannya (DexScreener) dengan interpolasi kecepatan blok, lalu event dibaca di jendela sempit.
export interface V4PoolKey {
  poolId: string;
  currency0: string;
  currency1: string;
  fee: number;
  tickSpacing: number;
  hooks: string;
}
export type V4PoolResolver = (poolId: string) => Promise<V4PoolKey | null>;

// keccak256("Initialize(bytes32,address,address,uint24,int24,address,uint160,int24)")
export const INITIALIZE_TOPIC = "0xdd466e674ea557f56295e2d0218a125ea4b4f0f6f3307b95f85e6110838d6438";
const WINDOWS = [20_000n, 400_000n, 4_000_000n];
const MAX_CACHE = 2000;

const hex = (n: bigint) => `0x${n.toString(16)}`;
const clamp = (n: bigint, lo: bigint, hi: bigint) => (n < lo ? lo : n > hi ? hi : n);

/** Decode int24 yang di-sign-extend ke 256 bit. */
export function int24(word: string): number {
  const v = BigInt(`0x${word}`);
  const low = v & 0xffffffn;
  return Number(low >= 0x800000n ? low - 0x1000000n : low);
}

type Log = { topics: string[]; data: string };

export function createV4PoolResolver(opts: { rpcUrl: string; poolManager: string; fetchFn?: typeof fetch }): V4PoolResolver {
  const f = opts.fetchFn ?? fetch;
  const cache = new Map<string, V4PoolKey>();
  let rpcId = 0;
  async function rpc<T>(method: string, params: unknown[]): Promise<T> {
    const res = await f(opts.rpcUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ jsonrpc: "2.0", id: ++rpcId, method, params }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`rpc_http_${res.status}`);
    const j = (await res.json()) as { result?: T; error?: { message?: string } };
    if (j.error) throw new Error(`rpc_error: ${j.error.message ?? "?"}`);
    return j.result as T;
  }
  const blockTs = async (n: bigint) => {
    const b = await rpc<{ timestamp: string } | null>("eth_getBlockByNumber", [hex(n), false]);
    if (!b) throw new Error("rpc_no_block");
    return Number(BigInt(b.timestamp));
  };

  /** Perkiraan nomor blok pada waktu `t` (detik): kecepatan blok dari dua sampel, lalu empat langkah koreksi. */
  async function blockAt(t: number, head: bigint): Promise<bigint> {
    const sample = clamp(head - 5_000_000n, 1n, head);
    const [headTs, sampleTs] = await Promise.all([blockTs(head), blockTs(sample)]);
    const rate = (headTs - sampleTs) / Number(head - sample) || 0.25; // detik per blok
    let g = clamp(head - BigInt(Math.round((headTs - t) / rate)), 1n, head);
    for (let i = 0; i < 4; i++) {
      const x = await blockTs(g);
      g = clamp(g + BigInt(Math.round((t - x) / rate)), 1n, head);
    }
    return g;
  }

  async function createdAtSec(poolId: string): Promise<number | null> {
    const res = await f(`https://api.dexscreener.com/latest/dex/pairs/robinhood/${poolId}`, { signal: AbortSignal.timeout(10_000) });
    if (!res.ok) return null;
    const j = (await res.json()) as { pair?: { pairCreatedAt?: number } | null; pairs?: { pairCreatedAt?: number }[] | null };
    const ms = (j.pair ?? j.pairs?.[0])?.pairCreatedAt;
    return typeof ms === "number" && ms > 0 ? Math.floor(ms / 1000) : null;
  }

  return async (rawId) => {
    const poolId = rawId.toLowerCase();
    const hit = cache.get(poolId);
    if (hit) return hit;
    const created = await createdAtSec(poolId);
    if (created === null) return null;
    const head = BigInt(await rpc<string>("eth_blockNumber", []));
    const center = await blockAt(created, head);
    for (const span of WINDOWS) {
      const logs = await rpc<Log[]>("eth_getLogs", [
        { address: opts.poolManager, topics: [INITIALIZE_TOPIC, poolId], fromBlock: hex(clamp(center - span, 0n, head)), toBlock: hex(clamp(center + span, 0n, head)) },
      ]).catch(() => [] as Log[]);
      const l = logs[0];
      if (!l || l.topics.length < 4) continue;
      const d = l.data.slice(2);
      const word = (i: number) => d.slice(i * 64, (i + 1) * 64);
      const key: V4PoolKey = {
        poolId,
        currency0: `0x${l.topics[2].slice(26)}`.toLowerCase(),
        currency1: `0x${l.topics[3].slice(26)}`.toLowerCase(),
        fee: Number(BigInt(`0x${word(0)}`) & 0xffffffn),
        tickSpacing: int24(word(1)),
        hooks: `0x${word(2).slice(24)}`.toLowerCase(),
      };
      if (cache.size >= MAX_CACHE) cache.delete(cache.keys().next().value as string);
      cache.set(poolId, key);
      return key;
    }
    return null;
  };
}
