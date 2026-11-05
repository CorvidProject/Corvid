import { getChain } from "@corvid/shared/chains";

// Saldo wallet pengguna dibaca langsung dari RPC mainnet (hanya baca; data pasar selalu mainnet).
// Cakupan: ETH + token yang diindeks Corvid. Token lain di wallet tidak terlihat. Tanpa basis biaya, jadi tanpa PnL.
export type Holding = { mint: string; symbol: string | null; amount: number; priceUsd: number | null };
type Rpc = { jsonrpc: "2.0"; id: number; method: string; params: unknown[] };
type RpcRes = { id: number; result?: string; error?: unknown };

const pad = (a: string) => a.toLowerCase().replace(/^0x/, "").padStart(64, "0");
const BALANCE_OF = "0x70a08231";
const DECIMALS = "0x313ce567";

async function batch(url: string, calls: Rpc[]): Promise<Map<number, string | null>> {
  const out = new Map<number, string | null>();
  for (let i = 0; i < calls.length; i += 100) {
    const res = await fetch(url, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(calls.slice(i, i + 100)) });
    if (!res.ok) throw new Error(`rpc_${res.status}`);
    const json = (await res.json()) as RpcRes[] | RpcRes;
    if (!Array.isArray(json)) throw new Error("rpc_batch_unsupported");
    for (const r of json) out.set(r.id, r.error || !r.result ? null : r.result);
  }
  return out;
}

const toBig = (hex: string | null | undefined) => (hex && hex !== "0x" ? BigInt(hex) : 0n);
const scale = (v: bigint, dec: number) => Number(v) / 10 ** dec;

export async function readHoldings(
  owner: string,
  tokens: { mint: string; symbol: string | null; price: number | null }[],
): Promise<{ eth: number; holdings: Holding[] }> {
  const rpc = getChain("mainnet").publicRpcUrl;
  const calls: Rpc[] = [{ jsonrpc: "2.0", id: 0, method: "eth_getBalance", params: [owner, "latest"] }];
  tokens.forEach((t, i) =>
    calls.push({ jsonrpc: "2.0", id: i + 1, method: "eth_call", params: [{ to: t.mint, data: BALANCE_OF + pad(owner) }, "latest"] }),
  );
  const res = await batch(rpc, calls);
  const eth = scale(toBig(res.get(0)), 18);
  const held = tokens.map((t, i) => ({ t, raw: toBig(res.get(i + 1)) })).filter((x) => x.raw > 0n);
  if (held.length === 0) return { eth, holdings: [] };
  const dRes = await batch(
    rpc,
    held.map((x, i) => ({ jsonrpc: "2.0" as const, id: i, method: "eth_call", params: [{ to: x.t.mint, data: DECIMALS }, "latest"] })),
  );
  const holdings = held.map((x, i) => {
    const d = dRes.get(i);
    const dec = d && d !== "0x" ? Number(BigInt(d)) : 18;
    return { mint: x.t.mint, symbol: x.t.symbol, amount: scale(x.raw, dec > 36 ? 18 : dec), priceUsd: x.t.price };
  });
  return { eth, holdings };
}
