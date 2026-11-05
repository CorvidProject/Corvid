"use client";
// Connect wallet untuk chain EVM (Robinhood Chain). Tanpa library wallet: penemuan wallet lewat EIP-6963,
// koneksi lewat EIP-1193. Kunci privat tidak pernah meninggalkan wallet pengguna.
// Parameter chain: packages/shared/src/chains.ts (testnet/mainnet).
import { useSyncExternalStore } from "react";
import { getAddress } from "viem/utils";
import { getChain } from "@corvid/shared/chains";
import { authConfigured, saveSession, type AuthSession } from "./auth";

export type Eip1193Provider = {
  request: (args: { method: string; params?: unknown[] | object }) => Promise<unknown>;
  on?: (event: string, fn: (...a: never[]) => void) => void;
  removeListener?: (event: string, fn: (...a: never[]) => void) => void;
};
export type WalletInfo = { id: string; name: string; icon?: string; provider: Eip1193Provider };
type State = { wallets: WalletInfo[]; walletId: string | null; address: string | null; chainId: number | null; busy: boolean };

const SAVED_KEY = "corvid.wallet.last";
let state: State = { wallets: [], walletId: null, address: null, chainId: null, busy: false };
const listeners = new Set<() => void>();
const set = (p: Partial<State>) => {
  state = { ...state, ...p };
  listeners.forEach((l) => l());
};

// ---- Konfigurasi chain (env, tanpa nilai bawaan) -------------------------------------------------
// Testnet/mainnet dipilih lewat NEXT_PUBLIC_CHAIN_ENV (bawaan testnet); parameter ada di @corvid/shared/chains.
export const appChain = () => {
  const c = getChain(process.env.NEXT_PUBLIC_CHAIN_ENV);
  return {
    id: c.id,
    env: c.env,
    name: c.name,
    rpcUrl: process.env.NEXT_PUBLIC_RPC_URL || c.publicRpcUrl,
    explorerUrl: c.explorerUrl,
    symbol: c.nativeSymbol,
  };
};

export const shortAddress = (a: string) => `${a.slice(0, 6)}…${a.slice(-4)}`;
const hexToNum = (h: unknown) => (typeof h === "string" ? parseInt(h, 16) : null);

// ---- Penemuan wallet (EIP-6963) -----------------------------------------------------------------
let started = false;
type Announce = CustomEvent<{ info: { uuid: string; name: string; icon: string; rdns: string }; provider: Eip1193Provider }>;

function addWallet(w: WalletInfo) {
  if (state.wallets.some((x) => x.id === w.id)) return;
  set({ wallets: [...state.wallets, w] });
}

export function initWallet() {
  if (started || typeof window === "undefined") return;
  started = true;
  window.addEventListener("eip6963:announceProvider", ((e: Announce) => {
    const { info, provider } = e.detail;
    addWallet({ id: info.rdns || info.uuid, name: info.name, icon: info.icon, provider });
    void restoreIfSaved();
  }) as EventListener);
  window.dispatchEvent(new Event("eip6963:requestProvider"));
  // Wallet lama tanpa EIP-6963: pakai window.ethereum bila tidak ada yang mengumumkan diri.
  setTimeout(() => {
    const eth = (window as unknown as { ethereum?: Eip1193Provider }).ethereum;
    if (eth && state.wallets.length === 0) {
      addWallet({ id: "injected", name: "Browser wallet", provider: eth });
      void restoreIfSaved();
    }
  }, 400);
}

let boundProvider: Eip1193Provider | null = null;
const onAccounts = (...a: never[]) => {
  const list = (a as unknown[])[0] as string[] | undefined;
  if (!list || list.length === 0) return clearConnection();
  set({ address: getAddress(list[0]) });
  void import("./auth").then((m) => {
    // Ganti akun di wallet: sesi login wallet lama tidak lagi cocok dengan akun aktif.
    if (loadWalletSessionOwner() && loadWalletSessionOwner() !== list[0].toLowerCase()) void m.signOut();
  });
};
const onChain = (...a: never[]) => set({ chainId: hexToNum((a as unknown[])[0]) });
function bind(p: Eip1193Provider) {
  unbind();
  p.on?.("accountsChanged", onAccounts);
  p.on?.("chainChanged", onChain);
  boundProvider = p;
}
function unbind() {
  boundProvider?.removeListener?.("accountsChanged", onAccounts);
  boundProvider?.removeListener?.("chainChanged", onChain);
  boundProvider = null;
}
function clearConnection() {
  unbind();
  set({ walletId: null, address: null, chainId: null });
  try {
    localStorage.removeItem(SAVED_KEY);
  } catch {
    /* abaikan */
  }
}

async function restoreIfSaved() {
  if (state.address) return;
  let id: string | null = null;
  try {
    id = localStorage.getItem(SAVED_KEY);
  } catch {
    /* abaikan */
  }
  const w = id ? state.wallets.find((x) => x.id === id) : null;
  if (!w) return;
  try {
    // eth_accounts tidak memunculkan popup: hanya pulih bila situs ini sudah diizinkan sebelumnya.
    const accs = (await w.provider.request({ method: "eth_accounts" })) as string[];
    if (!accs[0]) return;
    bind(w.provider);
    set({ walletId: w.id, address: getAddress(accs[0]), chainId: hexToNum(await w.provider.request({ method: "eth_chainId" })) });
  } catch {
    /* abaikan */
  }
}

// ---- Aksi ---------------------------------------------------------------------------------------
export function errMsg(e: unknown, fallback: string): string {
  const x = e as { code?: number; message?: string };
  if (x?.code === 4001) return "Request rejected in your wallet";
  if (x?.code === -32002) return "A request is already pending in your wallet. Open it to continue";
  return fallback;
}

export async function connectWallet(id: string): Promise<{ error: string | null }> {
  const w = state.wallets.find((x) => x.id === id);
  if (!w) return { error: "Wallet not found" };
  set({ busy: true });
  try {
    const accs = (await w.provider.request({ method: "eth_requestAccounts" })) as string[];
    if (!accs[0]) return { error: "No account available in this wallet" };
    bind(w.provider);
    set({ walletId: w.id, address: getAddress(accs[0]), chainId: hexToNum(await w.provider.request({ method: "eth_chainId" })) });
    try {
      localStorage.setItem(SAVED_KEY, w.id);
    } catch {
      /* abaikan */
    }
    return { error: null };
  } catch (e) {
    return { error: errMsg(e, "Could not connect to the wallet") };
  } finally {
    set({ busy: false });
  }
}

/**
 * Putuskan wallet. Selain menghapus status lokal, minta wallet mencabut izin situs ini (wallet_revokePermissions,
 * didukung MetaMask) supaya MetaMask ikut menampilkan "tidak terhubung". Wallet yang tidak mendukungnya cukup
 * terputus di sisi aplikasi; pencabutan izin bersifat best-effort dan tidak pernah menggagalkan disconnect.
 */
export function disconnectWallet() {
  const provider = state.wallets.find((x) => x.id === state.walletId)?.provider ?? boundProvider;
  clearConnection();
  if (provider) {
    void provider
      .request({ method: "wallet_revokePermissions", params: [{ eth_accounts: {} }] })
      .catch(() => {
        /* tidak didukung / ditolak: abaikan */
      });
  }
}

/** Pindahkan wallet ke chain aplikasi (menambahkannya bila belum dikenal). Tidak berbuat apa pun bila chain belum dikonfigurasi. */
export async function switchToAppChain(): Promise<{ error: string | null }> {
  const c = appChain();
  const w = state.wallets.find((x) => x.id === state.walletId);
  if (!w) return { error: null };
  const hex = `0x${c.id.toString(16)}`;
  try {
    await w.provider.request({ method: "wallet_switchEthereumChain", params: [{ chainId: hex }] });
    return { error: null };
  } catch (e) {
    if ((e as { code?: number })?.code === 4902) {
      try {
        await w.provider.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: hex,
              chainName: c.name,
              rpcUrls: [c.rpcUrl],
              nativeCurrency: { name: c.symbol, symbol: c.symbol, decimals: 18 },
              ...(c.explorerUrl ? { blockExplorerUrls: [c.explorerUrl] } : {}),
            },
          ],
        });
        return { error: null };
      } catch (e2) {
        return { error: errMsg(e2, "Could not add the network to your wallet") };
      }
    }
    return { error: errMsg(e, "Could not switch network") };
  }
}

// ---- Login dengan wallet (EIP-4361 / SIWE → Supabase Web3 auth) ---------------------------------
const OWNER_KEY = "corvid.wallet.session-owner";
const loadWalletSessionOwner = () => {
  try {
    return localStorage.getItem(OWNER_KEY);
  } catch {
    return null;
  }
};

function siweMessage(address: string, chainId: number) {
  const nonce = Array.from(crypto.getRandomValues(new Uint8Array(12)), (b) => b.toString(16).padStart(2, "0")).join("");
  return [
    `${window.location.host} wants you to sign in with your Ethereum account:`,
    address,
    "",
    "Sign in to Corvid. This does not send a transaction or cost gas.",
    "",
    `URI: ${window.location.origin}`,
    "Version: 1",
    `Chain ID: ${chainId}`,
    `Nonce: ${nonce}`,
    `Issued At: ${new Date().toISOString()}`,
  ].join("\n");
}

export async function signInWithWallet(): Promise<{ error: string | null; session?: AuthSession }> {
  if (!authConfigured()) return { error: "Authentication is not configured yet" };
  const w = state.wallets.find((x) => x.id === state.walletId);
  if (!w || !state.address) return { error: "Connect a wallet first" };
  const chainId = appChain().id;
  const message = siweMessage(state.address, chainId);
  set({ busy: true });
  try {
    const signature = (await w.provider.request({ method: "personal_sign", params: [message, state.address] })) as string;
    const base = (process.env.NEXT_PUBLIC_SUPABASE_URL ?? "").replace(/\/$/, "");
    const res = await fetch(`${base}/auth/v1/token?grant_type=web3`, {
      method: "POST",
      headers: { "Content-Type": "application/json", apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "" },
      body: JSON.stringify({ chain: "ethereum", message, signature }),
    });
    const data = (await res.json().catch(() => ({}))) as Record<string, unknown>;
    if (!res.ok || typeof data.access_token !== "string") {
      return { error: String(data.error_description ?? data.msg ?? data.message ?? "Wallet sign-in failed") };
    }
    const session = data as unknown as AuthSession;
    saveSession(session);
    try {
      localStorage.setItem(OWNER_KEY, state.address.toLowerCase());
    } catch {
      /* abaikan */
    }
    void import("./api").then((m) => m.logLogin());
    return { error: null, session };
  } catch (e) {
    return { error: errMsg(e, "Wallet sign-in failed") };
  } finally {
    set({ busy: false });
  }
}

// ---- Hook ---------------------------------------------------------------------------------------
const subscribe = (l: () => void) => {
  listeners.add(l);
  initWallet();
  return () => listeners.delete(l);
};
const SERVER: State = { wallets: [], walletId: null, address: null, chainId: null, busy: false };
export function useWallet() {
  const s = useSyncExternalStore(subscribe, () => state, () => SERVER);
  const chain = appChain();
  return { ...s, appChain: chain, wrongChain: s.chainId !== null && s.chainId !== chain.id };
}
