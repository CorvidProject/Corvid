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
  /** Stablecoin pembayaran USDG (Global Dollar, Paxos). null = belum diverifikasi di chain ini → bayar USDG dimatikan. */
  usdg: { address: string; decimals: number } | null;
  /** Kontrak Uniswap v3 (lowercase). null = belum diverifikasi di chain ini → swap dimatikan. */
  uniswapV3: { factory: string; quoterV2: string; swapRouter02: string } | null;
  /**
   * Kontrak Uniswap v4 (lowercase, Permit2 apa adanya). HANYA DICATAT: belum dipakai oleh kode swap mana pun (swap baru mendukung v3).
   * null = belum diverifikasi di chain ini.
   */
  uniswapV4: {
    poolManager: string;
    universalRouter: string;
    positionManager: string;
    stateView: string;
    quoter: string;
    permit2: string;
  } | null;
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
    usdg: null, // belum diverifikasi di testnet; uji alur bayar dengan ETH testnet
    uniswapV3: null, // Uniswap belum tercantum/diverifikasi di testnet
    uniswapV4: null,
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
    // Sumber: docs.paxos.com/stablecoin/usdg/mainnet (bagian "Robinhood Mainnet"). Diverifikasi 2026-11-06 lewat RPC mainnet:
    // chainId 4663, ada bytecode, symbol() = USDG, name() = Global Dollar, decimals() = 6.
    usdg: { address: "0x5fc5360d0400a0fd4f2af552add042d716f1d168", decimals: 6 },
    // Sumber: developers.uniswap.org/docs/protocols/v3/deployments/v3-robinhood-chain-deployments. Diverifikasi 2026-11-05 lewat RPC:
    // semua berisi bytecode, factory.getPool(WETH, CASHCAT, 3000) = pool GeckoTerminal, dan QuoterV2 memberi kuotasi yang cocok dengan harga pasar.
    uniswapV3: {
      factory: "0x1f7d7550b1b028f7571e69a784071f0205fd2efa",
      quoterV2: "0x33e885ed0ec9bf04ecfb19341582aadcb4c8a9e7",
      swapRouter02: "0xcaf681a66d020601342297493863e78c959e5cb2",
    },
    // Sumber: developers.uniswap.org/docs/protocols/v4/deployments (bagian Robinhood Chain, 4663). Diverifikasi 2026-11-07 lewat RPC mainnet:
    // semua berisi bytecode; poolManager() pada UniversalRouter, PositionManager, StateView, dan V4Quoter sama dengan PoolManager di bawah;
    // Permit2 punya DOMAIN_SEPARATOR. Ada juga UniversalRouter 2.1.2 (0x204faca1764b154221e35c0d20abb3c525710498), belum dipilih.
    uniswapV4: {
      poolManager: "0x8366a39cc670b4001a1121b8f6a443a643e40951",
      universalRouter: "0x8876789976decbfcbbbe364623c63652db8c0904",
      positionManager: "0x58daec3116aae6d93017baaea7749052e8a04fa7",
      stateView: "0xf3334192d15450cdd385c8b70e03f9a6bd9e673b",
      quoter: "0x8dc178efb8111bb0973dd9d722ebeff267c98f94",
      permit2: "0x000000000022D473030F116dDEE9F6B43aC78BA3",
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
