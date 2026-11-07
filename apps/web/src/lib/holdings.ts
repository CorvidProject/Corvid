import { decodeFunctionResult, encodeFunctionData, type Hex, parseAbi } from "viem";
import { getChain } from "@corvid/shared/chains";

// Saldo wallet pengguna dibaca langsung dari RPC mainnet (hanya baca; data pasar selalu mainnet).
// Cakupan: ETH + token yang diindeks Corvid. Token lain di wallet tidak terlihat. Tanpa basis biaya, jadi tanpa PnL.
export type Holding<T> = { token: T; amount: number };
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

const MULTICALL3 = "0xcA11bde05977b3631167028862bE2a173976CA11";
const MC_ABI = parseAbi(["function aggregate3((address target, bool allowFailure, bytes callData)[] calls) payable returns ((bool success, bytes returnData)[] returnData)"]);
const MC_CHUNK = 100;

/** Satu eth_call per MC_CHUNK panggilan; hasil gagal menjadi null. */
async function multicall(url: string, calls: { target: string; data: Hex }[]): Promise<(string | null)[]> {
  const out: (string | null)[] = [];
  for (let i = 0; i < calls.length; i += MC_CHUNK) {
    const part = calls.slice(i, i + MC_CHUNK);
    const data = encodeFunctionData({ abi: MC_ABI, functionName: "aggregate3", args: [part.map((c) => ({ target: c.target as Hex, allowFailure: true, callData: c.data }))] });
    const res = await fetch(url, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "eth_call", params: [{ to: MULTICALL3, data }, "latest"] }) });
    if (!res.ok) throw new Error(`rpc_${res.status}`);
    const json = (await res.json()) as { result?: Hex; error?: unknown };
    if (!json.result) throw new Error("rpc_multicall_failed");
    const rows = decodeFunctionResult({ abi: MC_ABI, functionName: "aggregate3", data: json.result });
    for (const r of rows) out.push(r.success && r.returnData !== "0x" ? r.returnData : null);
  }
  return out;
}

const toBig = (hex: string | null | undefined) => (hex && hex !== "0x" ? BigInt(hex) : 0n);
const scale = (v: bigint, dec: number) => Number(v) / 10 ** dec;

/**
 * `env` "testnet": hanya saldo ETH (token yang diindeks Corvid ada di mainnet, alamatnya tidak berlaku di testnet).
 * Testnet hanya boleh dipakai bila NEXT_PUBLIC_CHAIN_ENV bukan mainnet; pemanggil yang memastikan.
 */
export async function readHoldings<T extends { mint: string }>(owner: string, tokens: T[], env: "mainnet" | "testnet" = "mainnet"): Promise<{ eth: number; holdings: Holding<T>[] }> {
  const rpc = getChain(env).publicRpcUrl;
  if (env === "testnet") {
    const r = await batch(rpc, [{ jsonrpc: "2.0", id: 0, method: "eth_getBalance", params: [owner, "latest"] }]);
    return { eth: scale(toBig(r.get(0)), 18), holdings: [] };
  }
  const ethRes = await batch(rpc, [{ jsonrpc: "2.0", id: 0, method: "eth_getBalance", params: [owner, "latest"] }]);
  const eth = scale(toBig(ethRes.get(0)), 18);
  // RPC publik menolak batch JSON-RPC besar (429 sekitar 50 permintaan), jadi saldo token dibaca lewat Multicall3.
  const bal = await multicall(rpc, tokens.map((t) => ({ target: t.mint, data: (BALANCE_OF + pad(owner)) as Hex })));
  const held = tokens.map((t, i) => ({ t, raw: toBig(bal[i]) })).filter((x) => x.raw > 0n);
  if (held.length === 0) return { eth, holdings: [] };
  const dRes = await multicall(rpc, held.map((x) => ({ target: x.t.mint, data: DECIMALS as Hex })));
  const holdings = held.map((x, i) => {
    const d = dRes[i];
    const dec = d && d !== "0x" ? Number(BigInt(d)) : 18;
    return { token: x.t, amount: scale(x.raw, dec > 36 ? 18 : dec) };
  });
  return { eth, holdings };
}
