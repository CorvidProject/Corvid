"use client";
// Swap via Uniswap v3 (SwapRouter02 + QuoterV2) or Uniswap v4 (Universal Router + V4Quoter, see swap-v4.ts) from user wallet.
// Private keys are never handled on the server.
// Project rule: trading remains in `dry` mode (simulation) until the owner explicitly enables `live`
// (NEXT_PUBLIC_TRADE_MODE=live). In dry mode no transaction is sent: only quotes + gas estimation.
// Contracts are retrieved from @corvid/shared/chains (verified on-chain); unsupported testnets have swaps disabled.
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
import { candidateRoutes, encodeUniversalRouterSwap, permit2Abi, permit2ApproveData, quoteRoute, type Hop, type PoolKey } from "./swap-v4";

export const NATIVE: Address = "0x0000000000000000000000000000000000000000";
const ROUTER_SELF: Address = "0x0000000000000000000000000000000000000002"; // ADDRESS_THIS in SwapRouter02
const FEES = [100, 500, 3000, 10000] as const;
const V3_HOP_FEES = [500, 3000, 10000] as const;

const packV3Path = (a: Address, feeAB: number, b: Address, feeBC: number, c: Address): Hex =>
  `0x${a.slice(2)}${feeAB.toString(16).padStart(6, "0")}${b.slice(2)}${feeBC.toString(16).padStart(6, "0")}${c.slice(2)}`.toLowerCase() as Hex;

/** Slippage from Settings (persisted locally by Settings page); default 1%, clamped between 0.01% and 50%. */
export function slippageBps(): number {
  try {
    const raw = localStorage.getItem("corvid.trading-prefs.v1");
    const v = raw ? Number((JSON.parse(raw) as { slippageBps?: number }).slippageBps) : NaN;
    if (Number.isFinite(v) && v >= 1 && v <= 5000) return Math.round(v);
  } catch {
    /* storage unavailable */
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
  {
    type: "function",
    name: "quoteExactInput",
    stateMutability: "nonpayable",
    inputs: [
      { name: "path", type: "bytes" },
      { name: "amountIn", type: "uint256" },
    ],
    outputs: [
      { name: "amountOut", type: "uint256" },
      { name: "sqrtPriceX96AfterList", type: "uint160[]" },
      { name: "initializedTicksCrossedList", type: "uint32[]" },
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
    name: "exactInput",
    stateMutability: "payable",
    inputs: [
      {
        name: "params",
        type: "tuple",
        components: [
          { name: "path", type: "bytes" },
          { name: "recipient", type: "address" },
          { name: "amountIn", type: "uint256" },
          { name: "amountOutMinimum", type: "uint256" },
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
  { type: "function", name: "symbol", stateMutability: "view", inputs: [], outputs: [{ type: "string" }] },
  { type: "function", name: "name", stateMutability: "view", inputs: [], outputs: [{ type: "string" }] },
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
  /** Uniswap v4 contracts (null if unverified on this chain). */
  v4: NonNullable<ChainConfig["uniswapV4"]> | null;
  usdg: Address | null;
};

let cached: SwapSetup | null | undefined;
/** null = swap unavailable on active chain (e.g. testnet, unverified contracts). */
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
    v4: chain.uniswapV4,
    usdg: (chain.usdg?.address as Address | undefined) ?? null,
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

/** Fetch external token image from public DexScreener API */
export async function fetchExternalTokenLogo(address: string): Promise<string | null> {
  const addr = address.toLowerCase();

  // 1. GeckoTerminal: indexes Robinhood Chain tokens with logo URLs
  try {
    const res = await fetch(`https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/${addr}`, {
      headers: { Accept: "application/json;version=20230302" },
    });
    if (res.ok) {
      const data = (await res.json()) as { data?: { attributes?: { image_url?: string | null } } };
      const img = data.data?.attributes?.image_url;
      if (img) return img;
    }
  } catch { /* fall through */ }

  // 2. DexScreener: broad EVM coverage, fallback
  try {
    const res = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${addr}`);
    if (res.ok) {
      const data = (await res.json()) as { pairs?: { info?: { imageUrl?: string } }[] };
      const img = data.pairs?.[0]?.info?.imageUrl;
      if (img) return img;
    }
  } catch { /* fall through */ }

  return null;
}

export async function readTokenMeta(
  s: SwapSetup,
  token: Address,
): Promise<{ symbol: string; name: string; image: string | null; decimals: number } | null> {
  if (token === NATIVE) return { symbol: "ETH", name: "Ether", image: "/brand/eth.svg", decimals: 18 };
  try {
    const [symbol, name, decimals] = await Promise.all([
      s.client.readContract({ address: token, abi: erc20Abi, functionName: "symbol" }).catch(() => ""),
      s.client.readContract({ address: token, abi: erc20Abi, functionName: "name" }).catch(() => ""),
      s.client.readContract({ address: token, abi: erc20Abi, functionName: "decimals" }).catch(() => 18),
    ]);
    const sym = String(symbol ?? "").trim();
    const nm = String(name ?? "").trim();
    if (!sym) return null;

    let image: string | null = null;
    const upper = sym.toUpperCase();
    if (upper === "USDG") image = "/brand/usdg.svg";
    else if (upper === "USDC") image = "/brand/usdc.svg";
    else if (upper === "USDT") image = "/brand/usdt.svg";
    else if (upper === "WETH" || upper === "ETH") image = "/brand/eth.svg";
    else if (upper === "VIRTUAL") image = "/brand/virtual.svg";

    return { symbol: sym, name: nm || sym, image, decimals: Number(decimals) };
  } catch {
    return null;
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
  /** Sequential approval transactions required before swap (empty if not needed). */
  approvalTxs: { to: Address; data: Hex }[];
  venue: "v3" | "v4";
  /** Route display label, e.g. "ETH → USDG → token". */
  route?: string;
  tx: { to: Address; data: Hex; value: bigint };
  /** Preformatted display text. */
  outText: string;
  minText: string;
};

/**
 * Build swap execution plan: best quote across fee tiers 0.05% / 0.3% / 1%, minimum amount with slippage, and transaction calldata.
 * Primarily handles ETH <-> token pairs (via direct WETH or USDG hops). Returns readable error if no pool is available.
 */
export async function planSwap(args: { account: Address | null; sell: Address; buy: Address; amount: string; slippageBps: number; v4Key?: PoolKey | null }): Promise<Plan> {
  const s = swapSetup();
  if (!s) throw new Error("Swaps are not available on this network yet");
  if (args.v4Key) return planSwapV4(s, { ...args, v4Key: args.v4Key });
  const sellNative = args.sell === NATIVE;
  const buyNative = args.buy === NATIVE;
  if (sellNative === buyNative) throw new Error("Pick ETH on one side and a token on the other");
  const decIn = await tokenDecimals(s, args.sell);
  const decOut = await tokenDecimals(s, args.buy);
  const amountIn = parseUnits(args.amount, decIn);
  if (amountIn <= 0n) throw new Error("Enter an amount");
  const tokenIn = sellNative ? s.weth : args.sell;
  const tokenOut = buyNative ? s.weth : args.buy;

  let best: { fee: number; out: bigint; path?: Hex; route?: string } | null = null;
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
        /* no pool in this fee tier */
      }
    }),
  );
  // If there is no direct v3 pool with WETH, attempt a 2-hop route via USDG (WETH <-> USDG 0.3% <-> token).
  if (!best && s.usdg && tokenIn.toLowerCase() !== s.usdg.toLowerCase() && tokenOut.toLowerCase() !== s.usdg.toLowerCase()) {
    await Promise.all(
      V3_HOP_FEES.map(async (fee) => {
        try {
          const path = sellNative ? packV3Path(tokenIn, 3000, s.usdg!, fee, tokenOut) : packV3Path(tokenIn, fee, s.usdg!, 3000, tokenOut);
          const { result } = await s.client.simulateContract({
            address: s.quoter,
            abi: quoterAbi,
            functionName: "quoteExactInput",
            args: [path, amountIn],
          });
          const out = result[0];
          if (out > 0n && (!best || out > best.out)) {
            best = { fee, out, path, route: `${sellNative ? "ETH" : "token"} → ${buyNative ? "ETH" : "token"} via USDG` };
          }
        } catch {
          /* no 2-hop route in this tier */
        }
      }),
    );
  }
  const found = best as { fee: number; out: bigint; path?: Hex; route?: string } | null;
  if (!found) {
    // If the token is USDG and v3 quotes fail, fall back to the Uniswap v4 ETH/USDG pool.
    const isUsdg = !!s.usdg && (args.sell.toLowerCase() === s.usdg.toLowerCase() || args.buy.toLowerCase() === s.usdg.toLowerCase());
    if (isUsdg && s.v4?.ethUsdgPools[0]) {
      const b = s.v4.ethUsdgPools[0];
      return planSwapV4(s, { ...args, v4Key: { currency0: NATIVE, currency1: s.usdg!, fee: b.fee, tickSpacing: b.tickSpacing, hooks: b.hooks as Address } });
    }
    throw new Error("No Uniswap v3 pool with liquidity for this pair");
  }

  const minOut = (found.out * BigInt(10_000 - args.slippageBps)) / 10_000n;
  const swapCall = (recipient: Address) =>
    found.path
      ? encodeFunctionData({
          abi: routerAbi,
          functionName: "exactInput",
          args: [{ path: found.path, recipient, amountIn, amountOutMinimum: buyNative ? 0n : minOut }],
        })
      : encodeFunctionData({
          abi: routerAbi,
          functionName: "exactInputSingle",
          args: [{ tokenIn, tokenOut, fee: found.fee, recipient, amountIn, amountOutMinimum: buyNative ? 0n : minOut, sqrtPriceLimitX96: 0n }],
        });

  let tx: Plan["tx"];
  let needsApproval = false;
  if (!buyNative) {
    // ETH -> token: router wraps ETH sent with the transaction.
    tx = { to: s.router, data: swapCall(args.account ?? NATIVE), value: amountIn };
  } else {
    // token -> ETH: swap to WETH in router then unwrap to user wallet (minimum amount enforced on unwrap).
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
    approvalTxs: needsApproval ? [{ to: args.sell, data: encodeFunctionData({ abi: erc20Abi, functionName: "approve", args: [s.router, amountIn] }) }] : [],
    venue: "v3",
    ...(found.route ? { route: found.route } : {}),
    tx,
    outText: formatUnits(found.out, decOut),
    minText: formatUnits(minOut, decOut),
  };
}

/**
 * Swap lewat Uniswap v4 untuk token yang pool utamanya v4 (`v4Key` dari API). ETH <-> token lewat satu lompatan (pasangan ETH)
 * atau dua lompatan lewat pool ETH/USDG (pasangan USDG); semua rute dikuotasi dan yang terbaik dipilih. Menjual token ERC-20
 * butuh dua persetujuan: token -> Permit2, lalu Permit2 -> Universal Router.
 */
async function planSwapV4(s: SwapSetup, args: { account: Address | null; sell: Address; buy: Address; amount: string; slippageBps: number; v4Key: PoolKey }): Promise<Plan> {
  const v4 = s.v4;
  if (!v4) throw new Error("Uniswap v4 is not available on this network yet");
  const sellNative = args.sell === NATIVE;
  const buyNative = args.buy === NATIVE;
  if (sellNative === buyNative) throw new Error("Pick ETH on one side and a token on the other");
  const token = sellNative ? args.buy : args.sell;
  const decIn = await tokenDecimals(s, args.sell);
  const decOut = await tokenDecimals(s, args.buy);
  const amountIn = parseUnits(args.amount, decIn);
  if (amountIn <= 0n) throw new Error("Enter an amount");

  const routes = candidateRoutes({
    buy: sellNative,
    token,
    pool: args.v4Key,
    usdg: s.usdg,
    bridges: v4.ethUsdgPools.map((b) => ({ fee: b.fee, tickSpacing: b.tickSpacing, hooks: b.hooks as Address })),
  });
  if (routes.length === 0) throw new Error("This token's Uniswap v4 pool is not paired with ETH or USDG, so Corvid cannot route it yet");
  const quoted = await Promise.all(routes.map(async (hops) => ({ hops, out: await quoteRoute(s.client, v4.quoter as Address, args.sell, hops, amountIn) })));
  let best: { hops: Hop[]; out: bigint } | null = null;
  for (const q of quoted) if (q.out !== null && (!best || q.out > best.out)) best = { hops: q.hops, out: q.out };
  if (!best) throw new Error("No Uniswap v4 route with liquidity for this pair");

  const minOut = (best.out * BigInt(10_000 - args.slippageBps)) / 10_000n;
  const deadline = BigInt(Math.floor(Date.now() / 1000) + 20 * 60);
  const enc = encodeUniversalRouterSwap({ currencyIn: args.sell, hops: best.hops, amountIn, minOut, deadline });
  const router = v4.universalRouter as Address;
  const permit2 = v4.permit2 as Address;

  const approvalTxs: Plan["approvalTxs"] = [];
  if (!sellNative && args.account) {
    const erc20Allowance = await s.client.readContract({ address: args.sell, abi: erc20Abi, functionName: "allowance", args: [args.account, permit2] });
    if (erc20Allowance < amountIn) approvalTxs.push({ to: args.sell, data: encodeFunctionData({ abi: erc20Abi, functionName: "approve", args: [permit2, amountIn] }) });
    const [p2amount, p2exp] = await s.client.readContract({ address: permit2, abi: permit2Abi, functionName: "allowance", args: [args.account, args.sell, router] });
    const now = Math.floor(Date.now() / 1000);
    if (p2amount < amountIn || p2exp <= now + 120) approvalTxs.push({ to: permit2, data: permit2ApproveData(args.sell, router, amountIn, now + 30 * 60) });
  }
  const via = best.hops.length > 1 ? " via USDG" : "";
  return {
    sell: args.sell,
    buy: args.buy,
    amountIn,
    amountOut: best.out,
    minOut,
    fee: 0,
    decIn,
    decOut,
    needsApproval: approvalTxs.length > 0,
    approvalTxs,
    venue: "v4",
    route: `${sellNative ? "ETH" : "token"} → ${buyNative ? "ETH" : "token"}${via}`,
    tx: { to: router, data: enc.data, value: enc.value },
    outText: formatUnits(best.out, decOut),
    minText: formatUnits(minOut, decOut),
  };
}

/** Simulate without dispatching transactions (eth_estimateGas from user account). Safe in dry mode. */
export async function simulatePlan(plan: Plan, account: Address): Promise<{ ok: boolean; gas?: bigint; note?: string }> {
  const s = swapSetup();
  if (!s) return { ok: false, note: "Swaps are not available on this network yet" };
  if (plan.needsApproval) return { ok: true, note: "Token approval is required before the swap can be simulated" };
  try {
    const gas = await s.client.estimateGas({ account, to: plan.tx.to, data: plan.tx.data, value: plan.tx.value });
    return { ok: true, gas };
  } catch (e) {
    return { ok: false, note: swapErrorText(e).text ?? "Cancelled" };
  }
}

/** User-friendly error message; raw errors from viem/ethers are never displayed directly. `rejected` = user cancelled. */
export function swapErrorText(e: unknown): { text: string | null; rejected: boolean } {
  const x = e as { code?: number; shortMessage?: string; message?: string };
  const raw = `${x?.shortMessage ?? ""} ${x?.message ?? ""}`;
  if (x?.code === 4001 || /user (rejected|denied)|rejected the request|denied transaction/i.test(raw)) return { text: null, rejected: true };
  if (x?.code === -32002) return { text: "A request is already open in your wallet. Finish or close it first.", rejected: false };
  if (/insufficient funds|exceeds the balance|insufficient balance/i.test(raw)) return { text: "Not enough ETH to cover the amount and network fee.", rejected: false };
  if (/revert|slippage|too little received|execution reverted/i.test(raw)) return { text: "The swap would fail at the current price. Try a smaller amount or get a new quote.", rejected: false };
  if (/network|chain|fetch|timeout|429|rate/i.test(raw)) return { text: "Network problem. Please try again in a moment.", rejected: false };
  return { text: "Swap failed. Please try again.", rejected: false };
}

const hex = (n: bigint) => `0x${n.toString(16)}`;

/** Execute live transactions. Only invoked when tradeMode() === "live"; otherwise rejected. */
export async function executePlan(plan: Plan, account: Address, provider: Eip1193Provider, onStep?: (label: string) => void): Promise<Hex> {
  if (tradeMode() !== "live") throw new Error("Trading is in dry mode: transactions are not sent");
  const s = swapSetup();
  if (!s) throw new Error("Swaps are not available on this network yet");
  const send = async (to: Address, data: Hex, value: bigint) =>
    (await provider.request({ method: "eth_sendTransaction", params: [{ from: account, to, data, value: hex(value) }] })) as Hex;
  // Approvals for the exact swap amount only (not infinite), sent sequentially; each waits for block inclusion.
  const total = plan.approvalTxs.length + 1;
  let n = 0;
  for (const a of plan.approvalTxs) {
    onStep?.(`Step ${++n} of ${total}: approve in your wallet`);
    const h = await send(a.to, a.data, 0n);
    onStep?.(`Step ${n} of ${total}: waiting for approval to confirm`);
    await s.client.waitForTransactionReceipt({ hash: h });
  }
  onStep?.(`Step ${total} of ${total}: confirm the swap in your wallet`);
  const hash = await send(plan.tx.to, plan.tx.data, plan.tx.value);
  await s.client.waitForTransactionReceipt({ hash });
  return hash;
}
