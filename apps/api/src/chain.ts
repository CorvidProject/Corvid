// Pembaca chain minimal lewat JSON-RPC (tanpa dependensi). Dipakai memverifikasi pembayaran token ERC-20.
const TRANSFER_TOPIC = "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef";

export interface TransferLog {
  token: string; // lowercase
  from: string;
  to: string;
  value: bigint;
}
export interface TxReceipt {
  success: boolean;
  confirmations: number;
  transfers: TransferLog[];
}
export interface ChainReader {
  /** null = transaksi belum ada/belum masuk blok. */
  getReceipt(txHash: string): Promise<TxReceipt | null>;
}

const topicAddr = (t: string) => `0x${t.slice(26)}`.toLowerCase();

export function rpcChainReader(rpcUrl: string, fetchFn: typeof fetch = fetch): ChainReader {
  let id = 0;
  async function rpc<T>(method: string, params: unknown[]): Promise<T> {
    const res = await fetchFn(rpcUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ jsonrpc: "2.0", id: ++id, method, params }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`rpc_http_${res.status}`);
    const j = (await res.json()) as { result?: T; error?: { message: string } };
    if (j.error) throw new Error(`rpc_${j.error.message}`);
    return j.result as T;
  }
  return {
    async getReceipt(txHash) {
      const r = await rpc<{ status: string; blockNumber: string; logs: { address: string; topics: string[]; data: string }[] } | null>("eth_getTransactionReceipt", [txHash]);
      if (!r) return null;
      const head = BigInt(await rpc<string>("eth_blockNumber", []));
      const confirmations = Number(head - BigInt(r.blockNumber) + 1n);
      const transfers: TransferLog[] = r.logs
        .filter((l) => l.topics.length === 3 && l.topics[0].toLowerCase() === TRANSFER_TOPIC)
        .map((l) => ({ token: l.address.toLowerCase(), from: topicAddr(l.topics[1]), to: topicAddr(l.topics[2]), value: BigInt(l.data) }));
      return { success: r.status === "0x1", confirmations: Math.max(confirmations, 0), transfers };
    },
  };
}
