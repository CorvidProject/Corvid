"use client";
// Swap lewat Uniswap v3 (SwapRouter02 + QuoterV2) dari wallet pengguna. Kunci tidak pernah di server.
// Aturan proyek: trade tetap `dry` (simulasi) sampai pemilik mengizinkan `live` secara eksplisit
// (NEXT_PUBLIC_TRADE_MODE=live). Pada mode dry tidak ada transaksi yang dikirim: hanya kuotasi + estimasi gas.
// Kontrak diambil dari @corvid/shared/chains (diverifikasi on-chain); testnet belum punya → swap dimatikan di sana.
import {
  createPublicClient,
  defineChain,
  encodeFunctionData,
  formatUnits,
  http,
  parseUnits,
  type Address,
  type Hex,
  type PublicClient,
} from "viem";
import { getChain, type ChainConfig } from "@corvid/shared/chains";
import type { Eip1193Provider } from "./wallet";

export const NATIVE: Address = "0x0000000000000000000000000000000000000000";
const ROUTER_SELF: Address = "0x0000000000000000000000000000000000000002"; // ADDRESS_THIS di SwapRouter02
const FEES = [500, 3000, 10000] as const;

/** Slippage dari Settings (disimpan lokal oleh halaman Settings); bawaan 1%, dibatasi 0,01% sampai 50%. */
export function slippageBps(): number {
  try {
    const raw = localStorage.getItem("corvid.trading-prefs.v1");
    const v = raw ? Number((JSON.parse(raw) as { slippageBps?: number }).slippageBps) : NaN;
    if (Number.isFinite(v) && v >= 1 && v <= 5000) return Math.round(v);
  } catch {
    /* penyimpanan tidak tersedia */
  }
  return 100;
}

export const tradeMode = (): "dry" | "live" => (process.env.NEXT_PUBLIC_TRADE_MODE === "live" ? "live" : "dry");

const quoterAbi = [
  {
    type: "function",
    name: "quoteExactInputSingle",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "params",
        type: "tuple",
        components: [
          { name: "tokenIn", type: "address" },
          { name: "tokenOut", type: "address" },
          { name: "amountIn", type: "uint256" },
          { name: "fee", type: "uint24" },
          { name: "sqrtPriceLimitX96", type: "uint160" },
        ],
      },
    ],
    outputs: [
      { name: "amountOut", type: "uint256" },
      { name: "sqrtPriceX96After", type: "uint160" },
      { name: "initializedTicksCrossed", type: "uint32" },
      { name: "gasEstimate", type: "uint256" },
    ],
  },
] as const;

const routerAbi = [
  {
    type: "function",
    name: "exactInputSingle",
    stateMutability: "payable",
    inputs: [
      {
        name: "params",
        type: "tuple",
        components: [
          { name: "tokenIn", type: "address" },
          { name: "tokenOut", type: "address" },
          { name: "fee", type: "uint24" },
          { name: "recipient", type: "address" },
          { name: "amountIn", type: "uint256" },
          { name: "amountOutMinimum", type: "uint256" },
          { name: "sqrtPriceLimitX96", type: "uint160" },
        ],
      },
    ],
    outputs: [{ name: "amountOut", type: "uint256" }],
  },
  {
    type: "function",
    name: "unwrapWETH9",
    stateMutability: "payable",
    inputs: [
      { name: "amountMinimum", type: "uint256" },
      { name: "recipient", type: "address" },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "multicall",
    stateMutability: "payable",
    inputs: [{ name: "data", type: "bytes[]" }],
    outputs: [{ name: "results", type: "bytes[]" }],
  },
] as const;

const erc20Abi = [
  { type: "function", name: "decimals", stateMutability: "view", inputs: [], outputs: [{ type: "uint8" }] },
  { type: "function", name: "balanceOf", stateMutability: "view", inputs: [{ name: "a", type: "address" }], outputs: [{ type: "uint256" }] },
  {
    type: "function",
    name: "allowance",
    stateMutability: "view",
    inputs: [
      { name: "o", type: "address" },
      { name: "s", type: "address" },
    ],
    outputs: [{ type: "uint256" }],
  },
  {
    type: "function",
    name: "approve",
    stateMutability: "nonpayable",
    inputs: [
      { name: "s", type: "address" },
      { name: "v", type: "uint256" },
    ],
    outputs: [{ type: "bool" }],
  },
] as const;

export type SwapSetup = {
  chain: ChainConfig;
  weth: Address;
  quoter: Address;
  router: Address;
  client: PublicClient;
};

let cached: SwapSetup | null | undefined;
/** null = swap tidak tersedia di chain aktif (mis. testnet, kontrak belum diverifikasi). */
export function swapSetup(): SwapSetup | null {
  if (cached !== undefined) return cached;
  const chain = getChain(process.env.NEXT_PUBLIC_CHAIN_ENV);
  if (!chain.uniswapV3 || !chain.wrappedNative) return (cached = null);
  const rpc = process.env.NEXT_PUBLIC_RPC_URL || chain.publicRpcUrl;
  const def = defineChain({
    id: chain.id,
    name: chain.name,
    nativeCurrency: { name: "Ether", symbol: chain.nativeSymbol, decimals: chain.nativeDecimals },
    rpcUrls: { default: { http: [rpc] } },
  });
  return (cached = {
    chain,
    weth: chain.wrappedNative as Address,
    quoter: chain.uniswapV3.quoterV2 as Address,
    router: chain.uniswapV3.swapRouter02 as Address,
    client: createPublicClient({ chain: def, transport: http(rpc) }) as PublicClient,
  });
}

export async function tokenDecimals(s: SwapSetup, token: Address): Promise<number> {
  if (token === NATIVE) return 18;
  try {
    return Number(await s.client.readContract({ address: token, abi: erc20Abi, functionName: "decimals" }));
  } catch {
    throw new Error("That address is not a token contract on this network");
  }
}

export async function balanceOf(s: SwapSetup, token: Address, owner: Address): Promise<bigint> {
  if (token === NATIVE) return s.client.getBalance({ address: owner });
  return s.client.readContract({ address: token, abi: erc20Abi, functionName: "balanceOf", args: [owner] });
}

export type Plan = {
  sell: Address;
  buy: Address;
  amountIn: bigint;
  amountOut: bigint;
  minOut: bigint;
  fee: number;
  decIn: number;
  decOut: number;
  needsApproval: boolean;
  tx: { to: Address; data: Hex; value: bigint };
  /** Teks siap tampil. */
  outText: string;
  minText: string;
};

/**
 * Susun rencana swap: kuotasi terbaik di antara tier fee 0,05% / 0,3% / 1%, batas minimum sesuai slippage, dan data transaksi.
 * Hanya pasangan ETH <-> token (lewat WETH, pool v3 langsung). Mengembalikan galat yang bisa dibaca bila tidak ada pool.
 */
export async function planSwap(args: { account: Address | null; sell: Address; buy: Address; amount: string; slippageBps: number }): Promise<Plan> {
  const s = swapSetup();
  if (!s) throw new Error("Swaps are not available on this network yet");
  const sellNative = args.sell === NATIVE;
  const buyNative = args.buy === NATIVE;
  if (sellNative === buyNative) throw new Error("Pick ETH on one side and a token on the other");
  const decIn = await tokenDecimals(s, args.sell);
  const decOut = await tokenDecimals(s, args.buy);
  const amountIn = parseUnits(args.amount, decIn);
  if (amountIn <= 0n) throw new Error("Enter an amount");
  const tokenIn = sellNative ? s.weth : args.sell;
  const tokenOut = buyNative ? s.weth : args.buy;

  let best: { fee: number; out: bigint } | null = null;
  await Promise.all(
    FEES.map(async (fee) => {
      try {
        const { result } = await s.client.simulateContract({
          address: s.quoter,
          abi: quoterAbi,
          functionName: "quoteExactInputSingle",
          args: [{ tokenIn, tokenOut, amountIn, fee, sqrtPriceLimitX96: 0n }],
        });
        const out = result[0];
        if (out > 0n && (!best || out > best.out)) best = { fee, out };
      } catch {
        /* tidak ada pool di tier ini */
      }
    }),
  );
  const found = best as { fee: number; out: bigint } | null;
  if (!found) throw new Error("No Uniswap v3 pool with liquidity for this pair");

  const minOut = (found.out * BigInt(10_000 - args.slippageBps)) / 10_000n;
  const swapCall = (recipient: Address) =>
    encodeFunctionData({
      abi: routerAbi,
      functionName: "exactInputSingle",
      args: [{ tokenIn, tokenOut, fee: found.fee, recipient, amountIn, amountOutMinimum: buyNative ? 0n : minOut, sqrtPriceLimitX96: 0n }],
    });

  let tx: Plan["tx"];
  let needsApproval = false;
  if (!buyNative) {
    // ETH -> token: router membungkus ETH yang dikirim bersama transaksi.
    tx = { to: s.router, data: swapCall(args.account ?? NATIVE), value: amountIn };
  } else {
    // token -> ETH: tukar ke WETH di router lalu buka bungkusnya ke wallet pengguna (batas minimum diterapkan di unwrap).
    const acct = args.account ?? NATIVE;
    const data = encodeFunctionData({
      abi: routerAbi,
      functionName: "multicall",
      args: [[swapCall(ROUTER_SELF), encodeFunctionData({ abi: routerAbi, functionName: "unwrapWETH9", args: [minOut, acct] })]],
    });
    tx = { to: s.router, data, value: 0n };
    if (args.account) {
      const allowance = await s.client.readContract({ address: args.sell, abi: erc20Abi, functionName: "allowance", args: [args.account, s.router] });
      needsApproval = allowance < amountIn;
    }
  }
  return {
    sell: args.sell,
    buy: args.buy,
    amountIn,
    amountOut: found.out,
    minOut,
    fee: found.fee,
    decIn,
    decOut,
    needsApproval,
    tx,
    outText: formatUnits(found.out, decOut),
    minText: formatUnits(minOut, decOut),
  };
}

/** Simulasi tanpa mengirim apa pun (eth_estimateGas dari akun pengguna). Aman dipakai di mode dry. */
export async function simulatePlan(plan: Plan, account: Address): Promise<{ ok: boolean; gas?: bigint; note?: string }> {
  const s = swapSetup();
  if (!s) return { ok: false, note: "Swaps are not available on this network yet" };
  if (plan.needsApproval) return { ok: true, note: "Token approval is required before the swap can be simulated" };
  try {
    const gas = await s.client.estimateGas({ account, to: plan.tx.to, data: plan.tx.data, value: plan.tx.value });
    return { ok: true, gas };
  } catch (e) {
    const m = (e as { shortMessage?: string }).shortMessage ?? "Simulation failed";
    return { ok: false, note: m };
  }
}

const hex = (n: bigint) => `0x${n.toString(16)}`;

/** Kirim transaksi nyata. Hanya dipanggil bila tradeMode() === "live"; selain itu menolak. */
export async function executePlan(plan: Plan, account: Address, provider: Eip1193Provider): Promise<Hex> {
  if (tradeMode() !== "live") throw new Error("Trading is in dry mode: transactions are not sent");
  const s = swapSetup();
  if (!s) throw new Error("Swaps are not available on this network yet");
  const send = async (to: Address, data: Hex, value: bigint) =>
    (await provider.request({ method: "eth_sendTransaction", params: [{ from: account, to, data, value: hex(value) }] })) as Hex;
  if (plan.needsApproval) {
    // Persetujuan sebesar jumlah swap saja (bukan tak terbatas).
    const approveData = encodeFunctionData({ abi: erc20Abi, functionName: "approve", args: [s.router, plan.amountIn] });
    const h = await send(plan.sell, approveData, 0n);
    await s.client.waitForTransactionReceipt({ hash: h });
  }
  const hash = await send(plan.tx.to, plan.tx.data, plan.tx.value);
  await s.client.waitForTransactionReceipt({ hash });
  return hash;
}
