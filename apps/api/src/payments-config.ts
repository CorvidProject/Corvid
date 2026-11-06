import { getChain } from "@corvid/shared/chains";
import { rpcChainReader } from "./chain";
import type { Env } from "./env";
import type { PaymentsConfig } from "./routes/payments";

/** null = pembelian dimatikan (flag mati, atau penerima/token belum diisi). Tidak pernah menebak alamat. */
export function paymentsFromEnv(env: Env): PaymentsConfig | null {
  if (!env.PAID_FEATURES_ENABLED || !env.PAYMENT_RECIPIENT) return null;
  const chain = getChain(env.CHAIN_ENV);
  const token = env.PAYMENT_TOKEN_ADDRESS ?? chain.usdg?.address;
  if (!token) return null;
  return {
    chainId: chain.id,
    token: token.toLowerCase(),
    decimals: env.PAYMENT_TOKEN_ADDRESS ? env.PAYMENT_TOKEN_DECIMALS : (chain.usdg?.decimals ?? env.PAYMENT_TOKEN_DECIMALS),
    recipient: env.PAYMENT_RECIPIENT.toLowerCase(),
    confirmations: env.PAYMENT_CONFIRMATIONS,
    reader: rpcChainReader(env.RPC_URL ?? chain.publicRpcUrl),
  };
}
