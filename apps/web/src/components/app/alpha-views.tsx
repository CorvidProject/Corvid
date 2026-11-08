"use client";
import { useEffect, useState, type ReactNode } from "react";
import { CaretDown, CaretLeft, Funnel, List, Rows, Star } from "@phosphor-icons/react";
import { explorerAddress, getChain } from "@corvid/shared/chains";
import { USE_API, apiGet, apiSend } from "@/lib/api";
import { useSigned } from "@/components/auth/signed";
import { WalletAvatar } from "@/components/app/wallet-avatar";

// Tab "Live feed" dan "My lists" di /application/alpha. Live feed: GET /api/alpha/activity (trade wallet bertier yang diindeks worker,
// disegarkan tiap 8 dtk). My lists: GET/PUT/DELETE /api/alpha/watchlists (daftar bawaan "Starred", butuh login; hanya mode API).

function Pill({ active, onClick, children, color }: { active: boolean; onClick: () => void; children: ReactNode; color?: string }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className="num text-[12px] px-2.5 py-1.5 rounded-sm transition-colors font-medium"
      style={{
        background: active ? "var(--v2-bg-2)" : "transparent",
        color: active ? (color ?? "var(--v2-t-1)") : "var(--v2-t-4)",
        border: `1px solid ${active ? (color ?? "var(--v2-accent)") : "var(--v2-line-1)"}`,
      }}
    >
      {children}
    </button>
  );
}

function Section({ title, defaultOpen = true, children }: { title: string; defaultOpen?: boolean; children: ReactNode }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex items-center justify-between w-full px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.06em] transition-colors hover:text-[var(--v2-t-1)]"
        style={{ color: "var(--v2-t-2)" }}
      >
        {title}
        <CaretDown size={12} style={{ color: "var(--v2-t-4)", transform: open ? "rotate(0)" : "rotate(-90deg)", transition: "transform 150ms" }} />
      </button>
      {open && <div className="px-4 pb-4">{children}</div>}
    </div>
  );
}

function Sidebar({ onCollapse, children }: { onCollapse: () => void; children: ReactNode }) {
  return (
    <div className="hidden lg:block shrink-0 overflow-y-auto sidebar-no-scrollbar" style={{ width: 260 }}>
      <aside className="hidden lg:block" style={{ background: "var(--v2-bg-0)" }}>
        <div className="flex items-center justify-between px-4 h-[44px]">
          <div className="flex items-center gap-2">
            <Funnel size={14} style={{ color: "var(--v2-t-3)" }} />
            <span className="text-[13px] font-semibold" style={{ color: "var(--v2-t-2)" }}>Filters</span>
          </div>
          <button onClick={onCollapse} title="Collapse filters" className="transition-colors hover:text-[var(--v2-t-1)]" style={{ color: "var(--v2-t-4)" }}>
            <CaretLeft size={12} />
          </button>
        </div>
        {children}
      </aside>
    </div>
  );
}

function EmptyState({ title, hint }: { title: string; hint: string }) {
  return (
    <div className="px-6 py-16 text-center" style={{ borderTop: "1px dashed var(--v2-line-2)", borderBottom: "1px dashed var(--v2-line-2)" }}>
      <p className="text-[16px] font-medium" style={{ color: "var(--v2-t-1)" }}>{title}</p>
      <p className="text-[13px] mt-2 mx-auto max-w-[420px] leading-relaxed" style={{ color: "var(--v2-t-3)" }}>{hint}</p>
    </div>
  );
}

type WatchedWallet = { address: string; label: string | null; tier: "S" | "A" | "B" | "C" | null; pnlEth: number | null; winRate: number | null; lastActive: number | null };

// Daftar wallet berbintang milik pengguna. Tanpa sesi atau tanpa backend: kosong dan `enabled` false.
function useWatched() {
  const signed = useSigned();
  const enabled = signed && USE_API;
  const [wallets, setWallets] = useState<WatchedWallet[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const reload = () =>
    apiGet<{ lists: { wallets: WatchedWallet[] }[] }>("/api/alpha/watchlists")
      .then((r) => setWallets(r.lists.flatMap((l) => l.wallets)))
      .catch(() => setError("Could not load your lists"));
  useEffect(() => {
    if (enabled) void reload();
    else setWallets(null);
  }, [enabled]);
  const toggle = async (address: string) => {
    const on = wallets?.some((w) => w.address === address.toLowerCase());
    setError(null);
    try {
      await apiSend(on ? "DELETE" : "PUT", `/api/alpha/watchlists/wallets/${address}`);
      await reload();
    } catch (e) {
      setError(e instanceof Error && e.message === "watchlist_full" ? "Your list is full" : "Could not update your list");
    }
  };
  return { enabled, wallets, error, toggle, has: (a: string) => !!wallets?.some((w) => w.address === a.toLowerCase()) };
}

function StarButton({ on, onClick }: { on: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} aria-pressed={on} aria-label={on ? "Remove wallet from list" : "Add wallet to list"} className="transition-colors hover:text-[var(--v2-t-1)]" style={{ color: on ? "var(--v2-accent)" : "var(--v2-t-4)" }}>
      <Star size={15} weight={on ? "fill" : "regular"} />
    </button>
  );
}

type Since = "1h" | "6h" | "24h" | "all";
type Activity = { wallet: string; side: "buy" | "sell"; symbol: string | null; mint: string; eth: number | null; at: number };
const MAINNET = getChain("mainnet");
const ago = (ts: number, now: number) => {
  const s = Math.max(0, Math.floor(now / 1000 - ts));
  return s < 60 ? `${s}s` : s < 3600 ? `${Math.floor(s / 60)}m` : s < 86400 ? `${Math.floor(s / 3600)}h` : `${Math.floor(s / 86400)}d`;
};
type Side = "all" | "buy" | "sell";

export function AlphaLive() {
  const watched = useWatched();
  const [open, setOpen] = useState(true);
  const [since, setSince] = useState<Since>("all");
  const [side, setSide] = useState<Side>("all");
  const [minSize, setMinSize] = useState(0);
  const [compact, setCompact] = useState(false);
  const [updated, setUpdated] = useState(0);
  const [items, setItems] = useState<Activity[] | null>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    let alive = true;
    const load = () =>
      apiGet<{ activity: Activity[] }>("/api/alpha/activity?limit=100")
        .then((r) => alive && (setItems(r.activity), setFailed(false), setUpdated(0)))
        .catch(() => alive && setFailed(true));
    void load();
    const poll = setInterval(load, 20_000);
    const tick = setInterval(() => setUpdated((s) => s + 1), 1000);
    return () => {
      alive = false;
      clearInterval(poll);
      clearInterval(tick);
    };
  }, []);
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 15_000);
    return () => clearInterval(id);
  }, []);
  const sinceSecs = since === "1h" ? 3600 : since === "6h" ? 21600 : since === "24h" ? 86400 : Infinity;
  const feed = (items ?? []).filter((a) => (side === "all" || a.side === side) && now / 1000 - a.at <= sinceSecs && (a.eth ?? 0) >= minSize);
  const seg = (k: Side, label: string, color?: string) => (
    <button
      key={k}
      onClick={() => setSide(k)}
      aria-pressed={side === k}
      className="flex items-center gap-1.5 text-[12px] font-semibold px-3 py-1.5 rounded-sm transition-colors whitespace-nowrap"
      style={{
        background: side === k ? (color ? `color-mix(in srgb, ${color} 15%, transparent)` : "var(--v2-bg-3)") : "transparent",
        color: side === k ? (color ?? "var(--v2-t-1)") : "var(--v2-t-3)",
        border: `1px solid ${side === k ? (color ?? "var(--v2-line-2)") : "var(--v2-line-1)"}`,
      }}
    >
      {label}
    </button>
  );
  const time = (k: Since, label: string) => (
    <button
      key={k}
      onClick={() => setSince(k)}
      aria-pressed={since === k}
      className="num text-[12px] px-2.5 py-1.5 rounded-sm transition-colors"
      style={{
        color: since === k ? "var(--v2-t-1)" : "var(--v2-t-4)",
        background: since === k ? "var(--v2-bg-3)" : "transparent",
        fontWeight: since === k ? 600 : 400,
      }}
    >
      {label}
    </button>
  );
  return (
    <div className="flex-1 min-h-0 lg:flex lg:gap-3">
      {open && (
        <Sidebar onCollapse={() => setOpen(false)}>
          <Section title="Time window">
            <div className="flex flex-wrap gap-1.5">
              {(["1h", "6h", "24h", "all"] as const).map((k) => (
                <Pill key={k} active={since === k} onClick={() => setSince(k)}>{k === "all" ? "All time" : k}</Pill>
              ))}
            </div>
          </Section>
          <Section title="Side">
            <div className="flex flex-wrap gap-1.5">
              <Pill active={side === "all"} onClick={() => setSide("all")}>All</Pill>
              <Pill active={side === "buy"} onClick={() => setSide("buy")} color="var(--v2-pos)">Buys</Pill>
              <Pill active={side === "sell"} onClick={() => setSide("sell")} color="var(--v2-neg)">Sells</Pill>
            </div>
          </Section>
          <Section title="Min trade size">
            <div className="flex flex-wrap gap-1.5">
              {[0, 0.1, 0.5, 1].map((n) => (
                <Pill key={n} active={minSize === n} onClick={() => setMinSize(n)}>{n === 0 ? "Any" : `${n}+ ETH`}</Pill>
              ))}
            </div>
          </Section>
        </Sidebar>
      )}
      <div className="flex-1 min-w-0 overflow-y-auto pr-5 sm:pr-8 lg:pr-0">
        <div className="flex items-center justify-between gap-3 py-3 flex-wrap">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Hide filters" : "Show filters"}
              className="hidden lg:inline-flex items-center justify-center h-8 w-8 rounded-sm transition-colors hover:bg-[var(--v2-bg-2)]"
              style={{ color: "var(--v2-t-3)", border: "1px solid var(--v2-line-1)" }}
            >
              <CaretLeft size={13} style={{ transform: open ? "none" : "rotate(180deg)" }} />
            </button>
            <div className="flex items-center gap-1.5">
              {seg("all", "All")}
              {seg("buy", "Buys", "var(--v2-pos)")}
              {seg("sell", "Sells", "var(--v2-neg)")}
            </div>
          </div>
          <div className="flex items-center gap-1">
            {time("1h", "1h")}
            {time("6h", "6h")}
            {time("24h", "24h")}
            {time("all", "All")}
            <div className="flex items-center ml-2 rounded-sm" style={{ border: "1px solid var(--v2-line-1)" }}>
              <button onClick={() => setCompact(false)} aria-label="Card view" aria-pressed={!compact} className="h-7 w-8 inline-flex items-center justify-center" style={{ color: !compact ? "var(--v2-t-1)" : "var(--v2-t-4)", background: !compact ? "var(--v2-bg-3)" : "transparent" }}>
                <Rows size={14} />
              </button>
              <button onClick={() => setCompact(true)} aria-label="Compact view" aria-pressed={compact} className="h-7 w-8 inline-flex items-center justify-center" style={{ color: compact ? "var(--v2-t-1)" : "var(--v2-t-4)", background: compact ? "var(--v2-bg-3)" : "transparent" }}>
                <List size={14} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 pb-3">
          <span className="dot dot-pos dot-pulse"></span>
          <span className="text-[11px] font-mono uppercase tracking-[0.06em] font-semibold" style={{ color: "var(--v2-pos)" }}>Live</span>
          <span className="text-[11px]" style={{ color: "var(--v2-t-4)" }}>· updated {updated}s ago</span>
        </div>
        {feed.length === 0 ? (
          <EmptyState
            title={failed && items === null ? "Could not load activity" : items === null ? "Loading activity…" : "No recent activity"}
            hint={failed && items === null ? "Try again shortly." : "Only wallets that Corvid scores as smart appear here. The feed refreshes every 8s"}
          />
        ) : (
          <div style={{ borderTop: "1px solid var(--v2-line-1)" }}>
            {feed.map((a) => (
              <div key={`${a.wallet}${a.mint}${a.at}${a.side}`} className={`flex items-center gap-3 px-3 ${compact ? "py-1.5" : "py-3"}`} style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
                <span
                  className="num text-[11px] font-semibold uppercase w-10 text-center py-0.5 rounded-sm"
                  style={{ color: a.side === "buy" ? "var(--v2-pos)" : "var(--v2-neg)", background: "var(--v2-bg-2)" }}
                >
                  {a.side}
                </span>
                <a className="text-[14px] font-semibold hover:underline min-w-0 truncate" style={{ color: "var(--v2-t-1)" }} href={`/application/tokens/${a.mint}?chain=robinhood`}>
                  {a.symbol ?? `${a.mint.slice(0, 6)}…`}
                </a>
                {watched.enabled && <StarButton on={watched.has(a.wallet)} onClick={() => void watched.toggle(a.wallet)} />}
                <a
                  className="num text-[12px] hover:underline"
                  style={{ color: "var(--v2-t-4)" }}
                  href={explorerAddress(MAINNET, a.wallet)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {a.wallet.slice(0, 6)}…{a.wallet.slice(-4)}
                </a>
                <span className="ml-auto num text-[13px]" style={{ color: "var(--v2-t-2)" }}>
                  {a.eth === null ? "-" : `${a.eth.toFixed(a.eth >= 1 ? 2 : 3)} ETH`}
                </span>
                <span className="num text-[12px] w-10 text-right" style={{ color: "var(--v2-t-4)" }}>
                  {ago(a.at, now)}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function AlphaMyLists() {
  const [open, setOpen] = useState(true);
  const watched = useWatched();
  const list = watched.wallets ?? [];
  return (
    <div className="flex-1 min-h-0 lg:flex lg:gap-3">
      {open && (
        <Sidebar onCollapse={() => setOpen(false)}>
          <div className="px-4 py-6 text-[12px]" style={{ color: "var(--v2-t-4)" }}>No filters for this view</div>
        </Sidebar>
      )}
      <div className="flex-1 min-w-0 overflow-y-auto pr-5 sm:pr-8 lg:pr-0">
        <div className="pt-6">
          {!watched.enabled ? (
            <EmptyState title="Sign in to keep lists" hint="Your starred wallets are saved to your account once you sign in" />
          ) : watched.error && watched.wallets === null ? (
            <EmptyState title={watched.error} hint="Try again shortly." />
          ) : watched.wallets === null ? (
            <EmptyState title="Loading lists…" hint="" />
          ) : list.length === 0 ? (
            <EmptyState title="No watchlists yet" hint="Star a wallet in the Live feed and it is added to your Starred list" />
          ) : (
            <div style={{ borderTop: "1px solid var(--v2-line-1)" }}>
              {watched.error && <p style={{ padding: "8px 12px", fontSize: 12, color: "var(--v2-neg)" }}>{watched.error}</p>}
              {list.map((w) => (
                <div key={w.address} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px", borderBottom: "1px solid var(--v2-line-1)" }}>
                  <StarButton on onClick={() => void watched.toggle(w.address)} />
                  <WalletAvatar address={w.address} size={24} />
                  <a className="num text-[13px] hover:underline" style={{ color: "var(--v2-t-1)" }} href={explorerAddress(MAINNET, w.address)} target="_blank" rel="noopener noreferrer">
                    {w.label ?? `${w.address.slice(0, 6)}…${w.address.slice(-4)}`}
                  </a>
                  {w.tier && <span className="num text-[11px] px-1.5 py-0.5 rounded-sm" style={{ background: "var(--v2-bg-2)", color: "var(--v2-t-2)" }}>Tier {w.tier}</span>}
                  <span className="ml-auto num text-[12px]" style={{ color: "var(--v2-t-3)" }}>
                    {w.pnlEth === null ? "No scored activity" : `${w.pnlEth >= 0 ? "+" : ""}${w.pnlEth.toFixed(2)} ETH`}
                    {w.winRate !== null && ` · ${Math.round(w.winRate)}% win`}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
