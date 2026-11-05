// Konfigurasi chain Corvid: Robinhood Chain (L2 EVM). Satu chain aktif, dipilih lewat CHAIN_ENV / NEXT_PUBLIC_CHAIN_ENV.
// Pindah testnet → mainnet = ubah env itu (dan RPC berkunci), tanpa mengubah kode.
// Sumber nilai: https://docs.robinhood.com/chain/connecting dan https://docs.robinhood.com/chain/add-network-to-wallet
// (diverifikasi 2026-11-05). Jangan menambah nilai di sini tanpa sumber resmi.

export type ChainEnv = "testnet" | "mainnet";

export type ChainConfig = {
  env: ChainEnv;
  id: number;
  name: string;
  /** RPC publik (dibatasi laju, bukan untuk produksi). Untuk produksi override lewat env RPC_URL. */
  publicRpcUrl: string;
  explorerUrl: string;
  nativeSymbol: "ETH";
  nativeDecimals: 18;
  /** Alamat WETH (lowercase), diverifikasi on-chain via eth_call symbol(). Kosong = belum diverifikasi. */
  wrappedNative: string;
  /** Kontrak Uniswap v3 (lowercase). null = belum diverifikasi di chain ini → swap dimatikan. */
  uniswapV3: { factory: string; quoterV2: string; swapRouter02: string } | null;
};

export const CHAINS: Record<ChainEnv, ChainConfig> = {
  testnet: {
    env: "testnet",
    id: 46630,
    name: "Robinhood Chain Testnet",
    publicRpcUrl: "https://rpc.testnet.chain.robinhood.com",
    explorerUrl: "https://explorer.testnet.chain.robinhood.com",
    nativeSymbol: "ETH",
    nativeDecimals: 18,
    wrappedNative: "", // belum diverifikasi di testnet
    uniswapV3: null, // Uniswap belum tercantum/diverifikasi di testnet
  },
  mainnet: {
    env: "mainnet",
    id: 4663,
    name: "Robinhood Chain",
    publicRpcUrl: "https://rpc.mainnet.chain.robinhood.com",
    explorerUrl: "https://robinhoodchain.blockscout.com",
    nativeSymbol: "ETH",
    nativeDecimals: 18,
    wrappedNative: "0x0bd7d308f8e1639fab988df18a8011f41eacad73",
    // Sumber: developers.uniswap.org/docs/protocols/v3/deployments/v3-robinhood-chain-deployments. Diverifikasi 2026-11-05 lewat RPC:
    // semua berisi bytecode, factory.getPool(WETH, CASHCAT, 3000) = pool GeckoTerminal, dan QuoterV2 memberi kuotasi yang cocok dengan harga pasar.
    uniswapV3: {
      factory: "0x1f7d7550b1b028f7571e69a784071f0205fd2efa",
      quoterV2: "0x33e885ed0ec9bf04ecfb19341582aadcb4c8a9e7",
      swapRouter02: "0xcaf681a66d020601342297493863e78c959e5cb2",
    },
  },
};

/** Env tak dikenal / kosong → testnet (aman: tidak pernah jatuh ke mainnet tanpa sengaja). */
export function parseChainEnv(v: string | undefined | null): ChainEnv {
  return v === "mainnet" ? "mainnet" : "testnet";
}

export function getChain(env: string | undefined | null): ChainConfig {
  return CHAINS[parseChainEnv(env)];
}

export const explorerTx = (c: ChainConfig, hash: string) => `${c.explorerUrl.replace(/\/$/, "")}/tx/${hash}`;
export const explorerAddress = (c: ChainConfig, addr: string) => `${c.explorerUrl.replace(/\/$/, "")}/address/${addr}`;
