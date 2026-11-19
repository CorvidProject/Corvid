// Pons V2 bonding curve (Robinhood Chain). Kontrak "pool" token Pons = kurva itu sendiri.
// Antarmuka diverifikasi 2026-11-19 lewat bytecode + simulasi eth_call di mainnet (kontrak belum terverifikasi di explorer):
//   buy(amountIn, minTokensOut, recipient) payable  -> tokensOut   (amountIn harus sama dengan msg.value; tanpa approve)
//   sell(tokenAmount, minEthOut, recipient)         -> ethOut      (token harus di-approve ke kurva)
//   token(), isNativeQuote(), graduated()           -> dipakai memastikan kurva ini milik token dan masih aktif
// Harga dikuotasi lewat eth_call (ada beberapa fee, jadi tidak dihitung dengan rumus sendiri).
import { encodeAbiParameters, formatEther, encodeFunctionData, keccak256, pad, parseAbi, parseEther, toHex, type Address, type PublicClient } from "viem";

const curveAbi = parseAbi([
  "function token() view returns (address)",
  "function isNativeQuote() view returns (bool)",
  "function graduated() view returns (bool)",
  "function sellableTokens() view returns (uint256)",
  "function graduationThreshold() view returns (uint256)",
  "function realQuoteReserve() view returns (uint256)",
  "function buy(uint256 amountIn, uint256 minTokensOut, address recipient) payable returns (uint256)",
  "function sell(uint256 tokenAmount, uint256 minEthOut, address recipient) returns (uint256)",
]);

/** Alamat 20 byte (pool Pons), bukan id pool Uniswap v4 (32 byte). */
export const isCurveAddress = (poolId: string | null | undefined): poolId is Address => !!poolId && /^0x[0-9a-fA-F]{40}$/.test(poolId);

/** Pengirim palsu untuk kuotasi tanpa wallet; saldo ETH-nya ditimpa saat eth_call. */
const QUOTE_SENDER: Address = "0x1111111111111111111111111111111111111111";

export const CURVE_REJECTED = "This Pons curve rejected the order. Try a smaller amount or get a new quote.";

/** True hanya bila `pool` adalah kurva Pons V2 aktif (belum lulus, kuotasi ETH) untuk `token`. */
export async function isActiveCurve(client: PublicClient, pool: Address, token: Address): Promise<boolean> {
  try {
    const [t, native, graduated] = await Promise.all([
      client.readContract({ address: pool, abi: curveAbi, functionName: "token" }),
      client.readContract({ address: pool, abi: curveAbi, functionName: "isNativeQuote" }),
      client.readContract({ address: pool, abi: curveAbi, functionName: "graduated" }),
    ]);
    return t.toLowerCase() === token.toLowerCase() && native && !graduated;
  } catch {
    return false;
  }
}

export const buyData = (amountIn: bigint, minOut: bigint, recipient: Address) =>
  encodeFunctionData({ abi: curveAbi, functionName: "buy", args: [amountIn, minOut, recipient] });
export const sellData = (amount: bigint, minOut: bigint, recipient: Address) =>
  encodeFunctionData({ abi: curveAbi, functionName: "sell", args: [amount, minOut, recipient] });

/** Kuota beli: token yang diterima untuk `amountIn` ETH. */
export async function quoteBuy(client: PublicClient, pool: Address, amountIn: bigint, account: Address | null): Promise<bigint> {
  const from = account ?? QUOTE_SENDER;
  try {
    const r = await client.call({
      to: pool,
      data: buyData(amountIn, 0n, from),
      value: amountIn,
      account: from,
      stateOverride: [{ address: from, balance: amountIn + parseEther("1") }],
    });
    const out = r.data ? BigInt(r.data) : 0n;
    if (out <= 0n) throw new Error(CURVE_REJECTED);
    // Order melebihi sisa kapasitas kurva: hasilnya mentok di `sellableTokens` dan nasib ETH berlebih tidak terverifikasi, jadi ditolak.
    const [sellable, threshold, real] = await Promise.all([
      client.readContract({ address: pool, abi: curveAbi, functionName: "sellableTokens" }),
      client.readContract({ address: pool, abi: curveAbi, functionName: "graduationThreshold" }),
      client.readContract({ address: pool, abi: curveAbi, functionName: "realQuoteReserve" }),
    ]);
    if (out >= sellable) {
      const left = threshold > real ? threshold - real : 0n;
      throw new Error(`This buy would pass the curve's graduation limit. About ${Number(formatEther(left)).toFixed(3)} ETH is left on the curve, so try a smaller amount.`);
    }
    return out;
  } catch (e) {
    if (e instanceof Error && e.message.startsWith("This buy would pass")) throw e;
    throw new Error(CURVE_REJECTED);
  }
}

/** Kuota jual: ETH yang diterima untuk `amount` token (allowance ditimpa supaya bisa dikuotasi sebelum approve). */
export async function quoteSell(client: PublicClient, pool: Address, token: Address, amount: bigint, account: Address | null): Promise<bigint> {
  if (!account) throw new Error("Connect your wallet to get a sell quote");
  // Allowance ERC-20 standar (OpenZeppelin): mapping _allowances di slot 1 -> [owner][spender].
  const inner = keccak256(encodeAbiParameters([{ type: "address" }, { type: "uint256" }], [account, 1n]));
  const slot = keccak256(encodeAbiParameters([{ type: "address" }, { type: "bytes32" }], [pool, inner]));
  try {
    const r = await client.call({
      to: pool,
      data: sellData(amount, 0n, account),
      account,
      stateOverride: [{ address: token, stateDiff: [{ slot, value: pad(toHex(amount), { size: 32 }) }] }],
    });
    const out = r.data ? BigInt(r.data) : 0n;
    if (out <= 0n) throw new Error(CURVE_REJECTED);
    return out;
  } catch {
    throw new Error(CURVE_REJECTED);
  }
}
