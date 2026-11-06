"use client";
// Pembayaran kredit/Pro dengan USDG dari wallet pengguna sendiri (non-kustodian).
// Alur: POST /api/payments/orders -> wallet mengirim token -> POST /api/payments/orders/:id/verify sampai sah.
// Kunci privat tidak pernah meninggalkan wallet; frontend hanya meminta wallet menandatangani transfer ERC-20.
import { encodeFunctionData, erc20Abi, getAddress, type Address, type Hex } from "viem";
import { apiGet, apiSend, ApiError } from "./api";
import type { Eip1193Provider } from "./wallet";

export type Order = {
  id: number;
  product: string;
  label: string;
  status: "pending" | "paid" | "expired";
  amountUnits: string;
  amount: string;
  decimals: number;
  token: string;
  recipient: string;
  chainId: number;
  expiresAt: string;
  txHash: string | null;
};

export type Plan = {
  plan: "free" | "pro";
  proUntil: string | null;
  limits: { chat: number; deep: number };
  used: { chat: number; deep: number };
  resetsAt: string;
  credits: number;
  paymentsEnabled: boolean;
};

export const getPlan = () => apiGet<Plan>("/api/plan");
export const createOrder = (product: string) => apiSend<Order>("POST", "/api/payments/orders", { product });
export const verifyOrder = (id: number, txHash: string) => apiSend<Order>("POST", `/api/payments/orders/${id}/verify`, { txHash });

/** Minta wallet mengirim `units` token ke `to`. Mengembalikan hash transaksi. */
export async function sendToken(provider: Eip1193Provider, from: string, token: string, to: string, units: bigint): Promise<Hex> {
  const data = encodeFunctionData({ abi: erc20Abi, functionName: "transfer", args: [getAddress(to) as Address, units] });
  return (await provider.request({ method: "eth_sendTransaction", params: [{ from, to: getAddress(token), data }] })) as Hex;
}

const WAITING = new Set(["tx_not_found", "not_confirmed"]);
export const payError = (e: unknown): string => {
  const m = e instanceof ApiError ? e.message : (e as { message?: string })?.message ?? "";
  const map: Record<string, string> = {
    payments_disabled: "Payments are not enabled yet.",
    too_many_pending_orders: "You have too many unpaid orders. Finish or wait for them to expire.",
    payment_mismatch: "The transaction does not match this order (amount, token or recipient).",
    tx_failed: "The transaction failed on-chain.",
    order_expired: "This order has expired. Start a new one.",
    order_already_paid: "This order is already paid.",
    tx_already_used: "This transaction was already used for another order.",
    rpc_unavailable: "The network is busy. Try again in a moment.",
  };
  return map[m] ?? "Payment could not be completed.";
};

/** Verifikasi berulang sampai sah. Berhenti saat sah, galat pasti, atau waktu habis. */
export async function waitForPayment(order: Order, txHash: string, opts: { everyMs?: number; timeoutMs?: number; onTick?: (msg: string) => void } = {}): Promise<Order> {
  const every = opts.everyMs ?? 4000;
  const end = Date.now() + (opts.timeoutMs ?? 180_000);
  for (;;) {
    try {
      return await verifyOrder(order.id, txHash);
    } catch (e) {
      const m = e instanceof ApiError ? e.message : "";
      if (!WAITING.has(m) && m !== "rpc_unavailable") throw e;
      opts.onTick?.(m === "not_confirmed" ? "Waiting for confirmations…" : "Waiting for the transaction to be mined…");
      if (Date.now() > end) throw new ApiError(408, "timeout");
      await new Promise((r) => setTimeout(r, every));
    }
  }
}
