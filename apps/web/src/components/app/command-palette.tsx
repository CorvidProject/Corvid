"use client";
import { useRouter } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight,
  BookOpen,
  Brain,
  ChartLineUp,
  Checks,
  Coins,
  Fire,
  Gear,
  Keyboard,
  MagnifyingGlass,
  Plus,
  Robot,
  SignOut,
  Storefront,
  Tray,
  Wallet,
  X,
  type Icon,
} from "@phosphor-icons/react";
import trending from "@/server/data/trending-robinhood-trending.json";
import fresh from "@/server/data/trending-robinhood-new.json";
import memescope from "@/data/memescope.json";
import market from "@/data/marketplace-feed.json";
import { explorerAddress, getChain } from "@corvid/shared/chains";
import { useAuthModal } from "@/components/auth/auth-modal";
import { isChainAddress } from "@/lib/builder-defs";
import { loadSession, signOut } from "@/lib/auth";
import { apiGet, USE_API } from "@/lib/api";

// Command palette (⌘K / Ctrl+K), port dari referensi: perintah navigasi + pencarian token, wallet,
// agent. Pintasan "g" lalu huruf (g i, g c, ...). Mode fixture: indeks lokal. Mode API (NEXT_PUBLIC_USE_FIXTURES=false): GET /api/search.
type Cmd = { kind: "command"; id: string; label: string; icon: Icon; hotkey?: string; hint?: string; keywords: string[]; authRequired?: boolean; run: (c: Ctx) => void | Promise<void> };
type TokenRow = { kind: "token"; mint: string; symbol: string; name: string; image: string | null; price: number; marketCap: number; volume: number; change24h: number };
type AgentRow = { kind: "agent"; id: string | number; name: string; status: string; type: string; signals_count: number };
type WalletRow = { kind: "wallet"; address: string };
type Row = Cmd | TokenRow | AgentRow | WalletRow;
type Ctx = { push: (href: string) => void; signOut: () => void };

type SearchResponse = {
  tokens: { mint: string; symbol: string | null; name: string | null; image: string | null; price: number | null; marketCap: number | null; volume: number | null; change24h: number | null }[];
  agents: { id: number; name: string; type: string }[];
  wallets: { address: string }[];
  notice?: string;
};
type Remote = { tokens: TokenRow[]; agents: AgentRow[]; wallets: WalletRow[]; notice: string | null; loading: boolean; failed: boolean };
const NO_REMOTE: Remote = { tokens: [], agents: [], wallets: [], notice: null, loading: false, failed: false };

type PaletteCtx = { open: boolean; openPalette: () => void; closePalette: () => void };
const PCtx = createContext<PaletteCtx>({ open: false, openPalette: () => {}, closePalette: () => {} });
export const useCommandPalette = () => useContext(PCtx);

const nav = (id: string, label: string, icon: Icon, href: string, keywords: string[], hotkey?: string): Cmd => ({ kind: "command", id, label, icon, hotkey, keywords, run: (c) => c.push(href) });
const COMMANDS: Cmd[] = [
  nav("nav-inbox", "Inbox", Tray, "/application/inbox", ["inbox", "notifications", "signals", "alerts"], "g i"),
  nav("nav-chat", "Chat", Brain, "/application/chat", ["chat", "ai", "intelligence"], "g c"),
  nav("nav-terminal", "Terminal", ChartLineUp, "/application/terminal", ["terminal", "trending", "trenches", "tokens"], "g t"),
  nav("nav-wallets", "Smart Wallets", Fire, "/application/alpha", ["smart", "alpha", "wallets", "tracked"], "g w"),
  nav("nav-agents", "Agents", Robot, "/application/agents", ["agents", "automation"], "g a"),
  nav("nav-portfolio", "Portfolio", Wallet, "/application/portfolio", ["portfolio", "wallet", "holdings", "balance"], "g p"),
  nav("nav-marketplace", "Marketplace", Storefront, "/application/marketplace", ["marketplace", "agents", "buy"], "g m"),
  nav("nav-credits", "Credits", Coins, "/docs/credits", ["credits", "billing", "topup"], "g b"),
  nav("nav-crvd", "$CRVD", Fire, "/application/tokenomics", ["crvd", "corvid", "token", "stake", "tokenomics"]),
  nav("nav-settings", "Settings", Gear, "/application/settings", ["settings", "preferences", "account"]),
  nav("nav-docs", "Docs", BookOpen, "/docs", ["docs", "documentation", "help"]),
  { kind: "command", id: "act-new-agent", label: "New Agent", icon: Plus, hint: "Create a new automation", keywords: ["new", "create", "agent", "build"], authRequired: true, run: (c) => c.push("/application/agents/new") },
  { kind: "command", id: "act-mark-read", label: "Mark all signals read", icon: Checks, keywords: ["mark", "read", "clear", "inbox", "signals"], authRequired: true, run: (c) => c.push("/application/inbox") },
  { kind: "command", id: "act-topup", label: "Top up credits", icon: Coins, keywords: ["buy", "credits", "topup", "deposit"], authRequired: true, run: (c) => c.push("/docs/credits") },
  { kind: "command", id: "act-shortcuts", label: "Show keyboard shortcuts", icon: Keyboard, keywords: ["help", "hotkeys", "shortcuts", "keyboard"], run: () => void window.dispatchEvent(new CustomEvent("corvid:show-shortcuts")) },
  { kind: "command", id: "act-signout", label: "Sign Out", icon: SignOut, keywords: ["logout", "signout", "exit"], authRequired: true, run: (c) => c.signOut() },
];
const CHORDS = Object.fromEntries(COMMANDS.filter((c) => c.hotkey).map((c) => [c.hotkey!.split(" ")[1], c]));

// ---- sumber data (fixture) ----
type Src = { mint?: string; symbol: string; name: string; image?: string | null; price?: number; marketCap?: number; marketCapUsd?: number; volume?: number; change24h?: number };
let TOKEN_INDEX: TokenRow[] | null = null;
function tokenIndex(): TokenRow[] {
  if (TOKEN_INDEX) return TOKEN_INDEX;
  const seen = new Set<string>();
  const out: TokenRow[] = [];
  const add = (t: Src) => {
    if (!t.mint || seen.has(t.mint)) return;
    seen.add(t.mint);
    out.push({ kind: "token", mint: t.mint, symbol: (t.symbol ?? "").trim(), name: (t.name ?? "").trim(), image: t.image ?? null, price: t.price ?? 0, marketCap: t.marketCap ?? t.marketCapUsd ?? 0, volume: t.volume ?? 0, change24h: t.change24h ?? 0 });
  };
  for (const t of trending.tokens as unknown as Src[]) add(t);
  for (const t of fresh.tokens as unknown as Src[]) add(t);
  const m = memescope as unknown as Record<string, Src[]>;
  for (const l of [m.new, m.stretch, m.migrated]) for (const t of l ?? []) add(t);
  TOKEN_INDEX = out;
  return out;
}
function searchTokens(q: string): TokenRow[] {
  const s = q.toLowerCase();
  const rank = (t: TokenRow) => (t.symbol.toLowerCase() === s ? 0 : t.symbol.toLowerCase().startsWith(s) ? 1 : t.name.toLowerCase().startsWith(s) ? 2 : t.symbol.toLowerCase().includes(s) || t.name.toLowerCase().includes(s) ? 3 : t.mint.toLowerCase().startsWith(s) ? 4 : 99);
  return tokenIndex()
    .map((t) => [rank(t), t] as const)
    .filter(([r]) => r < 99)
    .sort((a, b) => a[0] - b[0] || b[1].marketCap - a[1].marketCap)
    .slice(0, 6)
    .map(([, t]) => t);
}
function searchAgents(q: string): AgentRow[] {
  const s = q.toLowerCase();
  return (market.agents as unknown as { id: number; name: string; type: string; status?: string; signals_count: number }[])
    .filter((a) => a.name.toLowerCase().includes(s))
    .slice(0, 4)
    .map((a) => ({ kind: "agent" as const, id: a.id, name: a.name, status: a.status ?? "idle", type: a.type, signals_count: a.signals_count }));
}

const RECENT_KEY = "corvid_recent_searches_v2";
type Recent = { label: string; kind: "token" | "wallet" | "agent"; query: string };
const money = (n: number) => (n >= 1e9 ? `$${(n / 1e9).toFixed(1)}B` : n >= 1e6 ? `$${(n / 1e6).toFixed(1)}M` : n >= 1e3 ? `$${(n / 1e3).toFixed(1)}K` : n > 0 ? `$${n.toFixed(0)}` : "");
const price = (n: number) => (n >= 1 ? `$${n.toFixed(2)}` : n >= 0.01 ? `$${n.toFixed(4)}` : `$${Number(n.toPrecision(3))}`);
const shortAddr = (a: string, n = 6) => `${a.slice(0, n)}…${a.slice(-4)}`;
const STATUS: Record<string, string> = { active: "var(--v2-pos)", idle: "var(--v2-t-3)", paused: "var(--v2-warn)", error: "var(--v2-neg)" };
const rankCmd = (c: Cmd, q: string) => {
  if (!q) return 100;
  const r = q.toLowerCase(), l = c.label.toLowerCase();
  return l === r ? 0 : l.startsWith(r) ? 1 : l.includes(r) ? 2 : c.keywords.some((k) => k === r) ? 3 : c.keywords.some((k) => k.startsWith(r)) ? 4 : 5;
};

export function CommandPaletteProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [shortcuts, setShortcuts] = useState(false);
  const router = useRouter();
  const openPalette = useCallback(() => setOpen(true), []);
  const closePalette = useCallback(() => setOpen(false), []);

  useEffect(() => {
    let chord = 0;
    const typing = (t: EventTarget | null) => {
      const el = t as HTMLElement | null;
      return !!el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.tagName === "SELECT" || el.isContentEditable);
    };
    const key = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.code === "KeyK") {
        e.preventDefault();
        setOpen(true);
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey || typing(e.target) || document.querySelector('[role="dialog"]')) return;
      if (e.key === "?") return setShortcuts(true);
      if (chord && Date.now() - chord < 1200) {
        chord = 0;
        const c = CHORDS[e.key.toLowerCase()];
        if (c) {
          e.preventDefault();
          void c.run({ push: router.push, signOut: () => {} });
        }
        return;
      }
      if (e.key.toLowerCase() === "g") chord = Date.now();
    };
    const click = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-palette-open]");
      if (!el) return;
      e.preventDefault();
      setOpen(true);
    };
    const sc = () => setShortcuts(true);
    window.addEventListener("keydown", key);
    document.addEventListener("click", click, true);
    window.addEventListener("corvid:show-shortcuts", sc);
    return () => {
      window.removeEventListener("keydown", key);
      document.removeEventListener("click", click, true);
      window.removeEventListener("corvid:show-shortcuts", sc);
    };
  }, [router]);

  const value = useMemo(() => ({ open, openPalette, closePalette }), [open, openPalette, closePalette]);
  return (
    <PCtx.Provider value={value}>
      {children}
      {open && <Palette onClose={closePalette} />}
      {shortcuts && <Shortcuts onClose={() => setShortcuts(false)} />}
    </PCtx.Provider>
  );
}

function Shortcuts({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [onClose]);
  return (
    <div className="fixed inset-0 flex items-start justify-center pt-[18vh] px-4" style={{ zIndex: 95 }}>
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)" }} onClick={onClose} />
      <div role="dialog" aria-label="Keyboard shortcuts" className="relative w-full max-w-sm rounded-sm p-4" style={{ background: "var(--v2-bg-1)", border: "1px solid var(--v2-line-2)", boxShadow: "0 20px 60px rgba(0,0,0,0.6)" }}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[14px] font-semibold" style={{ color: "var(--v2-t-1)" }}>Keyboard shortcuts</h3>
          <button onClick={onClose} aria-label="Close" style={{ color: "var(--v2-t-3)" }}><X size={14} /></button>
        </div>
        <div className="flex items-center justify-between h-8 text-[13px]" style={{ color: "var(--v2-t-2)" }}>Open command palette <Keys value="Ctrl K" /></div>
        {COMMANDS.filter((c) => c.hotkey).map((c) => (
          <div key={c.id} className="flex items-center justify-between h-8 text-[13px]" style={{ color: "var(--v2-t-2)" }}>{c.label}<Keys value={c.hotkey!} /></div>
        ))}
      </div>
    </div>
  );
}

function Keys({ value }: { value: string }) {
  const parts = value.split(" ").filter(Boolean);
  return (
    <span className="flex items-center gap-1 shrink-0">
      {parts.map((p, i) => (
        <span key={i} className="flex items-center gap-1">
          {i > 0 && <span className="num text-[11px]" style={{ color: "var(--v2-t-4)" }}>→</span>}
          <kbd className="num text-[11px] tracking-wider" style={{ background: "var(--v2-bg-2)", border: "1px solid var(--v2-line-2)", color: "var(--v2-t-3)", padding: "1px 6px", borderRadius: 3, minWidth: 18, textAlign: "center", display: "inline-block" }}>{p}</kbd>
        </span>
      ))}
    </span>
  );
}

function Palette({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const { openAuthModal } = useAuthModal();
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const [recent, setRecent] = useState<Recent[]>([]);
  const [signed, setSigned] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSigned(!!loadSession());
    try {
      const r = JSON.parse(localStorage.getItem(RECENT_KEY) ?? "[]");
      if (Array.isArray(r)) setRecent(r.slice(0, 5));
    } catch {
      /* abaikan */
    }
    const t = setTimeout(() => inputRef.current?.focus(), 30);
    const k = (e: KeyboardEvent) => e.code === "Escape" && onClose();
    window.addEventListener("keydown", k);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", k);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const term = q.trim();
  const isAddr = isChainAddress(term);
  const [remote, setRemote] = useState<Remote>(NO_REMOTE);
  useEffect(() => {
    if (!USE_API || !term) {
      setRemote(NO_REMOTE);
      return;
    }
    const ctl = new AbortController();
    setRemote((r) => ({ ...r, loading: true, failed: false }));
    const timer = setTimeout(() => {
      apiGet<SearchResponse>(`/api/search?q=${encodeURIComponent(term.slice(0, 100))}`, ctl.signal)
        .then((d) =>
          setRemote({
            tokens: d.tokens.map((t) => ({ kind: "token", mint: t.mint, symbol: (t.symbol ?? "").trim() || shortAddr(t.mint, 4), name: (t.name ?? "").trim(), image: t.image, price: t.price ?? 0, marketCap: t.marketCap ?? 0, volume: t.volume ?? 0, change24h: t.change24h ?? 0 })),
            agents: d.agents.map((a) => ({ kind: "agent", id: a.id, name: a.name, status: "active", type: a.type, signals_count: 0 })),
            wallets: d.wallets.map((w) => ({ kind: "wallet", address: w.address })),
            notice: d.notice ?? null,
            loading: false,
            failed: false,
          }),
        )
        .catch(() => {
          if (!ctl.signal.aborted) setRemote({ ...NO_REMOTE, failed: true });
        });
    }, 220);
    return () => {
      clearTimeout(timer);
      ctl.abort();
    };
  }, [term]);
  const cmds = useMemo(
    () =>
      COMMANDS.filter((c) => (!c.authRequired || signed) && (!term || c.label.toLowerCase().includes(term.toLowerCase()) || c.keywords.some((k) => k.includes(term.toLowerCase()))))
        .sort((a, b) => rankCmd(a, term) - rankCmd(b, term))
        .slice(0, term ? 5 : 8),
    [term, signed],
  );
  const tokens = useMemo(() => {
    if (!term) return [] as TokenRow[];
    const found = USE_API ? [...remote.tokens] : searchTokens(term);
    if (isAddr && USE_API && remote.loading) return found;
    if (isAddr && !found.some((t) => t.mint === term)) found.unshift({ kind: "token", mint: term, symbol: shortAddr(term, 4), name: "Open token by address", image: null, price: 0, marketCap: 0, volume: 0, change24h: 0 });
    return found;
  }, [term, isAddr, remote.tokens, remote.loading]);
  const agents = useMemo(() => (term ? (USE_API ? remote.agents : searchAgents(term)) : []), [term, remote.agents]);
  const wallets: WalletRow[] = useMemo(() => {
    const out: WalletRow[] = isAddr ? [{ kind: "wallet", address: term }] : [];
    for (const w of remote.wallets) if (!out.some((x) => x.address === w.address)) out.push(w);
    return out;
  }, [isAddr, term, remote.wallets]);

  const rows: Row[] = useMemo(() => (isAddr ? [...tokens, ...wallets, ...cmds, ...agents] : [...cmds, ...agents, ...tokens, ...wallets]), [isAddr, tokens, wallets, cmds, agents]);
  useEffect(() => setActive((a) => Math.min(a, Math.max(0, rows.length - 1))), [rows.length]);
  useEffect(() => {
    listRef.current?.querySelector(`[data-row-idx="${active}"]`)?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const remember = (r: Recent) => {
    const next = [r, ...recent.filter((x) => x.query !== r.query)].slice(0, 5);
    setRecent(next);
    try {
      localStorage.setItem(RECENT_KEY, JSON.stringify(next));
    } catch {
      /* abaikan */
    }
  };
  const select = async (r: Row) => {
    if (r.kind === "command") {
      onClose();
      await r.run({ push: router.push, signOut: () => { void signOut(); setSigned(false); } });
      return;
    }
    if (r.kind === "token") {
      remember({ label: `$${r.symbol}`, kind: "token", query: r.mint });
      onClose();
      router.push(`/application/tokens/${r.mint}?chain=robinhood`);
    } else if (r.kind === "agent") {
      remember({ label: r.name, kind: "agent", query: r.name });
      onClose();
      router.push(`/application/agents/${r.id}`);
    } else {
      remember({ label: shortAddr(r.address), kind: "wallet", query: r.address });
      onClose();
      window.open(explorerAddress(getChain("mainnet"), r.address), "_blank", "noopener,noreferrer");
    }
  };

  const groups: { label: string; rows: { row: Row; idx: number }[] }[] = [];
  const names: Record<string, string> = { command: "Commands", agent: "Agents", token: "Tokens", wallet: "Wallets" };
  let last = "";
  rows.forEach((row, idx) => {
    if (row.kind !== last) {
      last = row.kind;
      groups.push({ label: names[row.kind], rows: [] });
    }
    groups[groups.length - 1].rows.push({ row, idx });
  });

  const rowCls = "flex items-center gap-3 px-4 cursor-pointer transition-colors";
  return (
    <div className="fixed inset-0 flex items-start justify-center pt-[18vh] px-4" style={{ zIndex: 90 }}>
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)" }} onClick={onClose} />
      <div role="dialog" aria-modal="true" aria-label="Command palette" className="relative w-full max-w-xl rounded-sm overflow-hidden flex flex-col" style={{ background: "var(--v2-bg-1)", border: "1px solid var(--v2-line-2)", boxShadow: "0 20px 60px rgba(0,0,0,0.6)", maxHeight: "70vh" }}>
        <div className="flex items-center gap-3 px-4 h-12 shrink-0" style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
          <MagnifyingGlass size={16} style={{ color: "var(--v2-t-3)" }} />
          <input
            ref={inputRef}
            type="text"
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setActive(0);
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActive((a) => Math.min(a + 1, rows.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActive((a) => Math.max(a - 1, 0));
              } else if (e.key === "Enter") {
                e.preventDefault();
                if (rows[active]) void select(rows[active]);
              }
            }}
            placeholder="Type a command, token, wallet or agent…"
            className="flex-1 bg-transparent text-[14px] focus:outline-none"
            style={{ color: "var(--v2-t-1)" }}
          />
          <button onClick={onClose} aria-label="Close" className="flex items-center justify-center h-6 w-6 rounded-sm transition-colors hover:bg-[var(--v2-bg-2)]" style={{ color: "var(--v2-t-3)" }}>
            <X size={14} />
          </button>
        </div>
        <div ref={listRef} className="flex-1 overflow-y-auto">
          {USE_API && term && !remote.loading && remote.notice && rows.length > 0 && (
            <p className="px-4 py-2 text-[12px]" style={{ color: "var(--v2-t-3)", borderBottom: "1px solid var(--v2-line-1)" }}>
              {remote.notice}
            </p>
          )}
          {groups.map((g) => (
            <div key={g.label} className="py-2" style={{ borderTop: "1px solid var(--v2-line-1)" }}>
              <p className="eyebrow px-4 pt-1 pb-1.5" style={{ color: "var(--v2-t-4)", fontSize: 11, letterSpacing: "0.1em" }}>{g.label}</p>
              {g.rows.map(({ row, idx }) => {
                const on = active === idx;
                const base = { background: on ? "var(--v2-bg-2)" : "transparent" };
                const common = { "data-row-idx": idx, onClick: () => void select(row), onMouseEnter: () => setActive(idx) };
                if (row.kind === "command") {
                  const I = row.icon;
                  return (
                    <div key={row.id} {...common} className={`${rowCls} h-10`} style={base}>
                      <I size={15} style={{ color: on ? "var(--v2-accent-text)" : "var(--v2-t-3)" }} />
                      <span className="text-[13px] flex-1" style={{ color: "var(--v2-t-1)" }}>{row.label}</span>
                      {row.hint && <span className="text-[11px]" style={{ color: "var(--v2-t-4)" }}>{row.hint}</span>}
                      {row.hotkey && <Keys value={row.hotkey} />}
                    </div>
                  );
                }
                if (row.kind === "token") {
                  const mc = money(row.marketCap), vol = money(row.volume);
                  return (
                    <div key={`${row.mint}-${idx}`} {...common} className={`${rowCls} h-11`} style={base}>
                      {row.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={row.image} alt="" width={20} height={20} className="rounded-sm object-cover shrink-0" style={{ height: 20, width: 20, background: "var(--v2-bg-2)" }} onError={(e) => ((e.currentTarget as HTMLImageElement).style.visibility = "hidden")} />
                      ) : (
                        <div className="flex items-center justify-center rounded-sm shrink-0" style={{ height: 20, width: 20, background: "var(--v2-bg-2)" }}><Coins size={12} style={{ color: "var(--v2-t-3)" }} /></div>
                      )}
                      <div className="flex-1 min-w-0 flex flex-col justify-center gap-0.5">
                        <div className="flex items-center gap-2">
                          <span className="text-[13px] font-medium truncate" style={{ color: "var(--v2-t-1)" }}>${row.symbol}</span>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <span aria-hidden className="inline-block rounded-full shrink-0" style={{ width: 12, height: 12, background: "var(--v2-accent)" }} />
                          <span className="text-[11px] truncate" style={{ color: "var(--v2-t-3)" }}>{row.name}</span>
                        </div>
                        {(mc || vol) && (
                          <div className="flex items-center gap-3">
                            {mc && <span className="num text-[11px]" style={{ color: "var(--v2-t-4)" }}>MC {mc}</span>}
                            {vol && <span className="num text-[11px]" style={{ color: "var(--v2-t-4)" }}>Vol {vol}</span>}
                          </div>
                        )}
                      </div>
                      {row.price > 0 && <span className="num text-[11px] tabular-nums" style={{ color: "var(--v2-t-2)" }}>{price(row.price)}</span>}
                      {row.change24h !== 0 && <span className="num text-[11px] tabular-nums w-14 text-right" style={{ color: row.change24h >= 0 ? "var(--v2-pos)" : "var(--v2-neg)" }}>{row.change24h >= 0 ? "+" : ""}{row.change24h.toFixed(1)}%</span>}
                    </div>
                  );
                }
                if (row.kind === "agent") {
                  return (
                    <div key={row.id} {...common} className={`${rowCls} h-11`} style={base}>
                      <Robot size={16} style={{ color: "var(--v2-t-3)" }} />
                      <div className="flex-1 min-w-0 flex flex-col justify-center gap-0.5">
                        <div className="flex items-center gap-2">
                          <span className="text-[13px] truncate" style={{ color: "var(--v2-t-1)" }}>{row.name}</span>
                          <span className="num text-[11px] tracking-wider uppercase" style={{ color: STATUS[row.status] ?? "var(--v2-t-3)" }}>{row.status}</span>
                        </div>
                        <span className="num text-[11px]" style={{ color: "var(--v2-t-4)" }}>{row.type}{row.signals_count > 0 ? ` · ${row.signals_count} signals` : ""}</span>
                      </div>
                      <ArrowRight size={12} style={{ color: "var(--v2-t-4)" }} />
                    </div>
                  );
                }
                return (
                  <div key={`${row.address}-${idx}`} {...common} className={`${rowCls} h-10`} style={base}>
                    <Wallet size={15} style={{ color: "var(--v2-t-3)" }} />
                    <span className="num text-[12px] truncate flex-1" style={{ color: "var(--v2-t-1)" }}>{shortAddr(row.address)}</span>
                    <span className="num text-[11px] uppercase tracking-wider" style={{ color: "var(--v2-t-4)" }}>Wallet</span>
                    <ArrowRight size={12} style={{ color: "var(--v2-t-4)" }} />
                  </div>
                );
              })}
            </div>
          ))}
          {!term && recent.length > 0 && (
            <div className="py-2" style={{ borderTop: "1px solid var(--v2-line-1)" }}>
              <p className="eyebrow px-4 pt-1.5 pb-1" style={{ color: "var(--v2-t-4)", fontSize: 11, letterSpacing: "0.1em" }}>Recent</p>
              {recent.map((r, i) => (
                <button key={`${r.kind}-${r.query}-${i}`} onClick={() => setQ(r.query)} className="flex items-center gap-3 px-4 h-9 w-full transition-colors text-left hover:bg-[var(--v2-bg-2)]">
                  {r.kind === "token" ? <Coins size={13} style={{ color: "var(--v2-t-3)" }} /> : r.kind === "wallet" ? <Wallet size={13} style={{ color: "var(--v2-t-3)" }} /> : <Robot size={13} style={{ color: "var(--v2-t-3)" }} />}
                  <span className="text-[12px] flex-1 truncate" style={{ color: "var(--v2-t-2)" }}>{r.label}</span>
                  <span className="num text-[11px] uppercase tracking-wider" style={{ color: "var(--v2-t-4)" }}>{r.kind}</span>
                </button>
              ))}
            </div>
          )}
          {term && rows.length === 0 && (
            <div className="px-6 py-10">
              <p className="text-[13px] mb-3" style={{ color: "var(--v2-t-2)" }}>
                {USE_API && remote.loading ? "Searching…" : USE_API && remote.failed ? "Search is unavailable right now. Try again shortly." : <>No results for &quot;{q}&quot;</>}
              </p>
              {USE_API && remote.notice && (
                <p className="text-[12px] mb-3" style={{ color: "var(--v2-t-3)" }}>{remote.notice}</p>
              )}
              <p className="eyebrow mb-2" style={{ color: "var(--v2-t-4)", fontSize: 11 }}>Try</p>
              <ul className="text-[12px] space-y-1" style={{ color: "var(--v2-t-3)" }}>
                <li>· token symbol or name</li>
                <li>· wallet or token address (0x…)</li>
                <li>· agent name</li>
                <li>· command (open inbox, new agent)</li>
              </ul>
            </div>
          )}
        </div>
        <div className="flex items-center gap-4 px-4 h-9 shrink-0 num text-[11px] tracking-wider" style={{ borderTop: "1px solid var(--v2-line-1)", color: "var(--v2-t-4)" }}>
          <span>↑↓ navigate</span>
          <span>↵ select</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
}
