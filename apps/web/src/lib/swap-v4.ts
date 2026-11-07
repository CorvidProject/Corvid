// Swap lewat Uniswap v4 (Universal Router + V4Quoter + Permit2) di Robinhood Chain. Bagian murni: pemilihan rute, kuotasi,
// dan penyusunan calldata. Tidak mengirim apa pun. Alamat kontrak dari @corvid/shared/chains (diverifikasi lewat RPC).
//
// Rute: pool utama token (PoolKey dibaca dari event Initialize oleh API) berpasangan ETH native atau USDG.
//  - pasangan ETH native : satu lompatan.
//  - pasangan USDG       : dua lompatan lewat pool ETH/USDG v4 (dikuotasi semua, dipilih yang terbaik).
// Semua lompatan dieksekusi atomik dalam satu transaksi `execute` Universal Router (perintah V4_SWAP).
import { encodeAbiParameters, encodeFunctionData, parseAbi, type Address, type Hex, type PublicClient } from "viem";

export const ZERO: Address = "0x0000000000000000000000000000000000000000";

export type PoolKeyLike = { fee: number; tickSpacing: number; hooks: Address };
export type PoolKey = PoolKeyLike & { currency0: Address; currency1: Address };
/** Satu lompatan: pool yang dipakai dan mata uang keluarannya. */
export type Hop = PoolKeyLike & { to: Address };

// Universal Router: command V4_SWAP. v4-periphery Actions: SWAP_EXACT_IN, SETTLE_ALL, TAKE_ALL.
const CMD_V4_SWAP = "0x10" as const;
const ACT_SWAP_EXACT_IN = 0x07;
const ACT_SETTLE_ALL = 0x0c;
const ACT_TAKE_ALL = 0x0f;

const pathKeyComponents = [
  { name: "intermediateCurrency", type: "address" },
  { name: "fee", type: "uint24" },
  { name: "tickSpacing", type: "int24" },
  { name: "hooks", type: "address" },
  { name: "hookData", type: "bytes" },
] as const;

export const v4QuoterAbi = parseAbi([
  "function quoteExactInput((address exactCurrency,(address intermediateCurrency,uint24 fee,int24 tickSpacing,address hooks,bytes hookData)[] path,uint128 exactAmount) params) returns (uint256 amountOut,uint256 gasEstimate)",
]);
export const universalRouterAbi = parseAbi(["function execute(bytes commands, bytes[] inputs, uint256 deadline) payable"]);
export const permit2Abi = parseAbi([
  "function allowance(address owner, address token, address spender) view returns (uint160 amount, uint48 expiration, uint48 nonce)",
  "function approve(address token, address spender, uint160 amount, uint48 expiration)",
]);

const same = (a: string, b: string) => a.toLowerCase() === b.toLowerCase();

/**
 * Rute kandidat dari mata uang masuk. `buy` = ETH -> token; selain itu token -> ETH.
 * Kosong bila pasangan pool token tidak didukung (bukan ETH native dan bukan USDG).
 */
export function candidateRoutes(args: { buy: boolean; token: Address; pool: PoolKey; usdg: Address | null; bridges: PoolKeyLike[] }): Hop[][] {
  const { buy, token, pool, usdg, bridges } = args;
  if (!same(pool.currency0, token) && !same(pool.currency1, token)) return [];
  const partner = same(pool.currency0, token) ? pool.currency1 : pool.currency0;
  const tokenPool: PoolKeyLike = { fee: pool.fee, tickSpacing: pool.tickSpacing, hooks: pool.hooks };
  if (same(partner, ZERO)) return [buy ? [{ to: token, ...tokenPool }] : [{ to: ZERO, ...tokenPool }]];
  if (usdg && same(partner, usdg)) {
    return bridges.map((b) =>
      buy ? [{ to: usdg, ...b }, { to: token, ...tokenPool }] : [{ to: usdg, ...tokenPool }, { to: ZERO, ...b }],
    );
  }
  return [];
}

/** Kuotasi satu rute lewat V4Quoter (eth_call, tanpa transaksi). null = rute gagal (mis. hook menolak, tidak ada likuiditas). */
export async function quoteRoute(client: PublicClient, quoter: Address, currencyIn: Address, hops: Hop[], amountIn: bigint): Promise<bigint | null> {
  try {
    const { result } = await client.simulateContract({
      address: quoter,
      abi: v4QuoterAbi,
      functionName: "quoteExactInput",
      args: [
        {
          exactCurrency: currencyIn,
          path: hops.map((h) => ({ intermediateCurrency: h.to, fee: h.fee, tickSpacing: h.tickSpacing, hooks: h.hooks, hookData: "0x" as Hex })),
          exactAmount: amountIn,
        },
      ],
    });
    return result[0] > 0n ? result[0] : null;
  } catch {
    return null;
  }
}

/** Calldata `execute` Universal Router untuk satu swap exact-in (SWAP_EXACT_IN + SETTLE_ALL + TAKE_ALL). */
export function encodeUniversalRouterSwap(args: { currencyIn: Address; hops: Hop[]; amountIn: bigint; minOut: bigint; deadline: bigint }): { data: Hex; value: bigint } {
  const { currencyIn, hops, amountIn, minOut, deadline } = args;
  const currencyOut = hops[hops.length - 1].to;
  const actions = `0x${[ACT_SWAP_EXACT_IN, ACT_SETTLE_ALL, ACT_TAKE_ALL].map((a) => a.toString(16).padStart(2, "0")).join("")}` as Hex;
  const swap = encodeAbiParameters(
    [
      {
        type: "tuple",
        components: [
          { name: "currencyIn", type: "address" },
          { name: "path", type: "tuple[]", components: pathKeyComponents },
          // Struktur v4-periphery terbaru memuat batas slippage per lompatan; array kosong = tanpa batas per lompatan
          // (batas keseluruhan tetap dari amountOutMinimum). Tanpa field ini calldata ditolak (revert tanpa pesan).
          { name: "maxHopSlippage", type: "uint256[]" },
          { name: "amountIn", type: "uint128" },
          { name: "amountOutMinimum", type: "uint128" },
        ],
      },
    ],
    [
      {
        currencyIn,
        path: hops.map((h) => ({ intermediateCurrency: h.to, fee: h.fee, tickSpacing: h.tickSpacing, hooks: h.hooks, hookData: "0x" as Hex })),
        maxHopSlippage: [] as bigint[],
        amountIn,
        amountOutMinimum: minOut,
      },
    ],
  );
  const settle = encodeAbiParameters([{ type: "address" }, { type: "uint256" }], [currencyIn, amountIn]);
  const take = encodeAbiParameters([{ type: "address" }, { type: "uint256" }], [currencyOut, minOut]);
  const v4Input = encodeAbiParameters([{ type: "bytes" }, { type: "bytes[]" }], [actions, [swap, settle, take]]);
  const data = encodeFunctionData({ abi: universalRouterAbi, functionName: "execute", args: [CMD_V4_SWAP, [v4Input], deadline] });
  return { data, value: currencyIn === ZERO ? amountIn : 0n };
}

/** Data persetujuan Permit2 untuk menjual token ERC-20: approve token ke Permit2, lalu Permit2.approve ke Universal Router. */
export function permit2ApproveData(token: Address, router: Address, amount: bigint, expiration: number): Hex {
  return encodeFunctionData({ abi: permit2Abi, functionName: "approve", args: [token, router, amount, expiration] });
}
