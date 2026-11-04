"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowDown, ArrowUp, ArrowsDownUp, MagnifyingGlass, Robot, Rows, SquaresFour } from "@phosphor-icons/react";
import feed from "@/data/marketplace-feed.json";
import { useAuthModal } from "@/components/auth/auth-modal";

// Daftar agent publik di /application/marketplace. Filter, tab, jangka waktu, tampilan grid/list,
// urutan kolom, dan follow mengikuti referensi. Data dari fixture (bentuk sama dengan
// /marketplace/feed); kosong sampai API tersambung di Tahap 3.
export type MarketAgent = {
  id: number | string;
  name: string;
  type: string;
  description?: string | null;
  chain?: string;
  config?: { _pipeline?: string; _mode?: string } | null;
  creator?: { display_name?: string | null; avatar_url?: string | null } | null;
  published_at: string;
  last_run_at?: string | null;
  trades_count: number;
  runs_count: number;
  signals_count: number;
  closed_trades_count: number;
  subscriber_count: number;
  avg_pnl_pct: number | null;
  win_rate: number | null;
  per_action_cost?: number;
  clones_count?: number;
};

const AGENTS = (feed as { agents: MarketAgent[] }).agents;

const TYPE_FILTERS = [
  { label: "All", value: "" },
  { label: "Follow Wallet", value: "wallet_monitor,copy_trader" },
  { label: "New Tokens", value: "token_scanner" },
  { label: "Token Trading", value: "auto_trader,ai_trader,custom" },
];
const MODE_FILTERS = [
  { label: "All", value: "" },
  { label: "Signal", value: "signal" },
  { label: "Trading", value: "trading" },
];
const TABS = ["top", "trending", "following"] as const;
const WINDOWS = ["1d", "7d", "30d", "all"] as const;
type Tab = (typeof TABS)[number];
type Win = (typeof WINDOWS)[number];
type View = "grid" | "list";
type SortKey = "subscriber_count" | "signals_count" | "trades_count" | "avg_pnl_pct" | "runs_count" | "per_action_cost";

function kind(a: MarketAgent) {
  const p = a.config?._pipeline;
  const trading = a.config?._mode === "trading" || a.type === "copy_trader";
  if (p === "follow_wallet" || a.type === "wallet_monitor" || a.type === "copy_trader") return { label: trading ? "Copy Trade" : "Wallet Tracker", isTrading: trading };
  if (p === "new_tokens" || a.type === "token_scanner") return { label: trading ? "Sniper" : "Token Scanner", isTrading: trading };
  return { label: "Auto Trader", isTrading: true };
}
const compact = (n: number) => (n >= 1e6 ? `${(n / 1e6).toFixed(1)}M` : n >= 1e3 ? `${(n / 1e3).toFixed(1)}k` : String(n ?? 0));
const dayAge = (iso: string, now: number) => {
  const d = Math.floor((now - new Date(iso).getTime()) / 864e5);
  return d <= 0 ? "today" : d === 1 ? "1d" : `${d}d`;
};
const WIN_MS: Record<Win, number> = { "1d": 864e5, "7d": 6048e5, "30d": 2592e6, all: Infinity };

function Group({ title, items, value, onChange }: { title: string; items: { label: string; value: string }[]; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <h4 className="text-[11px] font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--v2-t-4)" }}>{title}</h4>
      <div className="space-y-0.5">
        {items.map((i) => (
          <button
            key={i.value}
            onClick={() => onChange(i.value)}
            aria-pressed={value === i.value}
            className="w-full text-left px-3 py-2 rounded-sm text-[13px] transition-colors"
            style={{ background: value === i.value ? "var(--v2-bg-2)" : "transparent", color: value === i.value ? "var(--v2-t-1)" : "var(--v2-t-3)" }}
          >
            {i.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function SearchBox({ q, onQ, className }: { q: string; onQ: (v: string) => void; className: string }) {
  return (
    <div className={className}>
      <MagnifyingGlass size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--v2-t-4)" }} />
      <input
        type="text"
        placeholder="Search agents"
        value={q}
        onChange={(e) => onQ(e.target.value)}
        className="w-full pl-8 pr-3 py-2.5 rounded-sm text-sm outline-none"
        style={{ background: "var(--v2-bg-1)", border: "1px solid var(--v2-line-1)", color: "var(--v2-t-1)" }}
      />
    </div>
  );
}

function FollowBtn({ followed, onClick }: { followed: boolean; onClick: () => void }) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
      className={`btn-v2 ${followed ? "btn-v2-ghost" : "btn-v2-primary"} text-[11px] py-1 px-2.5`}
    >
      {followed ? "Unfollow" : "Follow"}
    </button>
  );
}

function Card({ a, followed, onFollow, now }: { a: MarketAgent; followed: boolean; onFollow: () => void; now: number }) {
  const k = kind(a);
  const has = a.closed_trades_count > 0 && a.avg_pnl_pct !== null;
  const pnl = a.avg_pnl_pct ?? 0;
  const active = a.trades_count > 0 || a.runs_count > 0 || a.signals_count > 0;
  const color = has ? (pnl >= 0 ? "var(--v2-pos)" : "var(--v2-neg)") : "var(--v2-t-4)";
  return (
    <Link
      href={`/application/agents/${a.id}`}
      className="relative flex flex-col transition-colors hover:border-[rgba(var(--v2-accent-rgb),0.55)]"
      style={{ background: "var(--v2-bg-1)", border: `1px solid ${has && pnl > 0 ? "rgba(61,214,140,0.45)" : "var(--v2-line-1)"}`, opacity: active ? 1 : 0.8 }}
    >
      <header className="flex items-center gap-2 px-2.5 h-8 min-w-0" style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
        <span style={{ color: "var(--v2-accent-text)", fontSize: 13 }}>◆</span>
        <span className="uppercase truncate text-[15px] font-semibold" style={{ color: "var(--v2-t-1)" }}>{a.name}</span>
        <span className="ml-auto uppercase px-1.5 text-[11px] shrink-0" style={{ lineHeight: "16px", color: k.isTrading ? "var(--v2-accent-text)" : "var(--v2-t-3)", border: `1px solid ${k.isTrading ? "var(--v2-accent-text)" : "var(--v2-line-2)"}` }}>
          {k.isTrading ? "trade" : "signal"}
        </span>
      </header>
      <div className="px-3 pt-3">
        <div className="flex items-center gap-2">
          <span className="h-6 w-6 rounded-sm flex items-center justify-center" style={{ background: "var(--v2-bg-2)", color: "var(--v2-t-3)" }}><Robot size={14} /></span>
          <span className="uppercase truncate text-[12px]" style={{ color: "var(--v2-t-2)" }}>{k.label}</span>
        </div>
        <div className="uppercase mt-2 text-[11px]" style={{ color: "var(--v2-t-4)" }}>avg pnl · closed trades</div>
        <div className="leading-none num" style={{ fontSize: has ? 30 : 18, color }}>
          {has ? `${pnl >= 0 ? "+" : ""}${pnl.toFixed(2)}% avg` : <span className="uppercase">no closed trades yet</span>}
        </div>
        <div className="uppercase truncate mt-1.5 text-[11.5px]" style={{ color: "var(--v2-t-4)" }}>
          {compact(a.trades_count)} trades · {compact(a.runs_count)} checks · {compact(a.signals_count)} signals
        </div>
      </div>
      {a.description && <p className="px-3 pt-2 text-[12px] line-clamp-2" style={{ color: "var(--v2-t-2)" }}>{a.description}</p>}
      <div className="grid grid-cols-3 gap-3 px-3 py-3">
        {[
          ["win rate", has ? `${Math.round((a.win_rate ?? 0) * 100)}% win` : "?"],
          ["closed", `${compact(a.closed_trades_count)} closed`],
          ["followers", compact(a.subscriber_count)],
        ].map(([l, v]) => (
          <div key={l} className="min-w-0" style={{ borderLeft: "2px solid var(--v2-line-2)", paddingLeft: 7 }}>
            <div className="uppercase truncate text-[11px]" style={{ color: "var(--v2-t-4)" }}>{l}</div>
            <div className="truncate leading-none num text-[16px]" style={{ color: "var(--v2-t-1)" }}>{v}</div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between px-3 py-2.5 mt-auto" style={{ borderTop: "1px solid var(--v2-line-1)" }}>
        <span className="text-[11px] truncate" style={{ color: "var(--v2-t-4)" }}>
          {a.creator?.display_name || "anon"} · {dayAge(a.published_at, now)}
        </span>
        <FollowBtn followed={followed} onClick={onFollow} />
      </div>
    </Link>
  );
}

const COLS = "32px 1.4fr 90px 80px 72px 72px 80px 72px 72px 60px 72px 84px";
function SortHead({ label, col, cur, dir, onSort }: { label: string; col: SortKey; cur: SortKey | null; dir: "asc" | "desc"; onSort: (c: SortKey) => void }) {
  const on = cur === col;
  return (
    <button onClick={() => onSort(col)} className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider w-full justify-end" style={{ color: on ? "var(--v2-t-1)" : "var(--v2-t-4)" }}>
      {label}
      {on ? dir === "desc" ? <ArrowDown size={10} weight="bold" /> : <ArrowUp size={10} weight="bold" /> : <ArrowsDownUp size={10} />}
    </button>
  );
}
const HEAD = "text-[11px] font-semibold uppercase tracking-wider";

function Row({ a, rank, last, followed, onFollow, now }: { a: MarketAgent; rank: number; last: boolean; followed: boolean; onFollow: () => void; now: number }) {
  const k = kind(a);
  const has = a.closed_trades_count > 0 && a.avg_pnl_pct !== null;
  const pnl = a.avg_pnl_pct ?? 0;
  return (
    <Link href={`/application/agents/${a.id}`} className="grid items-center gap-3 px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]" style={{ gridTemplateColumns: COLS, borderBottom: last ? undefined : "1px solid var(--v2-line-1)" }}>
      <span className="num text-[13px] tabular-nums" style={{ color: "var(--v2-t-4)" }}>{rank}</span>
      <div className="min-w-0">
        <span className="text-[13px] font-semibold truncate block" style={{ color: "var(--v2-t-1)" }}>{a.name}</span>
        <span className="text-[11px]" style={{ color: "var(--v2-t-4)" }}>{a.creator?.display_name || "anon"}</span>
      </div>
      <div className="flex justify-center">
        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-sm" style={{ background: k.isTrading ? "rgba(var(--v2-accent-rgb),0.12)" : "var(--v2-bg-2)", color: k.isTrading ? "var(--v2-accent-text)" : "var(--v2-t-4)" }}>
          {k.isTrading ? "TRADE" : "SIGNAL"}
        </span>
      </div>
      <div className="text-right num text-[13px]" style={{ color: "var(--v2-t-1)" }}>{compact(a.subscriber_count)}</div>
      <div className="text-right num text-[13px]" style={{ color: "var(--v2-t-1)" }}>{compact(a.signals_count)}</div>
      <div className="text-right num text-[13px]" style={{ color: "var(--v2-t-1)" }}>{compact(a.trades_count)}</div>
      <div className="text-right num text-[13px] font-semibold" style={{ color: has ? (pnl >= 0 ? "var(--v2-pos)" : "var(--v2-neg)") : "var(--v2-t-4)" }}>
        {has ? `${pnl >= 0 ? "+" : ""}${pnl.toFixed(2)}%` : "—"}
      </div>
      <div className="text-right num text-[13px]" style={{ color: "var(--v2-t-3)" }}>{compact(a.runs_count)}</div>
      <div className="text-right num text-[13px]" style={{ color: "var(--v2-t-3)" }}>{compact(a.clones_count ?? 0)}</div>
      <div className="text-right num text-[12px]" style={{ color: "var(--v2-t-3)" }}>{a.per_action_cost ? `${a.per_action_cost} cr` : "Free"}</div>
      <div className="text-right num text-[12px]" style={{ color: "var(--v2-t-4)" }}>{dayAge(a.published_at, now)}</div>
      <div className="text-right"><FollowBtn followed={followed} onClick={onFollow} /></div>
    </Link>
  );
}

export function MarketplaceBoard() {
  const { openAuthModal } = useAuthModal();
  const [tab, setTab] = useState<Tab>("top");
  const [win, setWin] = useState<Win>("all");
  const [type, setType] = useState("");
  const [mode, setMode] = useState("");
  const [q, setQ] = useState("");
  const [view, setView] = useState<View>("grid");
  const [sort, setSort] = useState<SortKey | null>(null);
  const [dir, setDir] = useState<"asc" | "desc">("desc");
  const [followed, setFollowed] = useState<Set<string>>(new Set());
  const [now, setNow] = useState(0);
  useEffect(() => setNow(Date.now()), []);

  // Follow butuh akun: tanpa sesi, buka modal masuk (perilaku referensi untuk pengguna anonim).
  const onFollow = (id: string) => {
    let signedIn = false;
    try {
      signedIn = !!localStorage.getItem("corvid.auth.session");
    } catch {
      /* abaikan */
    }
    if (!signedIn) return openAuthModal("signin");
    setFollowed((s) => {
      const n = new Set(s);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });
  };
  const onSort = (c: SortKey) => {
    if (sort === c) setDir((d) => (d === "desc" ? "asc" : "desc"));
    else {
      setSort(c);
      setDir("desc");
    }
  };

  const items = useMemo(() => {
    const term = q.trim().toLowerCase();
    const types = type ? type.split(",") : null;
    let list = AGENTS.filter((a) => {
      if (tab === "following") return followed.has(String(a.id));
      // tab Top/Trending hanya menampilkan agent yang punya aktivitas atau deskripsi memadai (seperti referensi)
      return a.runs_count > 0 || a.signals_count > 0 || a.subscriber_count > 0 || !!(a.description && a.description.trim().length >= 20);
    })
      .filter((a) => !types || types.includes(a.type))
      .filter((a) => !mode || (mode === "trading") === kind(a).isTrading)
      .filter((a) => !term || a.name.toLowerCase().includes(term) || (a.description ?? "").toLowerCase().includes(term) || (a.creator?.display_name ?? "").toLowerCase().includes(term))
      .filter((a) => win === "all" || !now || (!!a.last_run_at && now - new Date(a.last_run_at).getTime() <= WIN_MS[win]));
    if (!sort) {
      list = [...list].sort((a, b) =>
        tab === "trending"
          ? b.signals_count + b.trades_count - (a.signals_count + a.trades_count)
          : (b.avg_pnl_pct ?? -Infinity) - (a.avg_pnl_pct ?? -Infinity),
      );
    } else {
      list = [...list].sort((a, b) => {
        const x = (a[sort] as number | undefined) ?? 0;
        const y = (b[sort] as number | undefined) ?? 0;
        return dir === "desc" ? y - x : x - y;
      });
    }
    return list;
  }, [tab, type, mode, q, win, sort, dir, followed, now]);

  const following = tab === "following";
  return (
    <div className="flex gap-5">
      <aside className="hidden lg:block w-[220px] shrink-0 space-y-5">
        <SearchBox q={q} onQ={setQ} className="relative" />
        <Group title="Agent Type" items={TYPE_FILTERS} value={type} onChange={setType} />
        <Group title="Mode" items={MODE_FILTERS} value={mode} onChange={setMode} />
      </aside>
      <div className="flex-1 min-w-0 space-y-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-0" style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                aria-pressed={tab === t}
                className="px-5 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px capitalize"
                style={{ color: tab === t ? "var(--v2-t-1)" : "var(--v2-t-4)", borderColor: tab === t ? "var(--v2-accent)" : "transparent" }}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {WINDOWS.map((w) => (
                <button
                  key={w}
                  onClick={() => setWin(w)}
                  aria-pressed={win === w}
                  className="px-3 py-1.5 text-xs font-medium rounded-sm transition-colors uppercase"
                  style={{ background: win === w ? "var(--v2-bg-2)" : "transparent", color: win === w ? "var(--v2-t-1)" : "var(--v2-t-4)" }}
                >
                  {w}
                </button>
              ))}
            </div>
            <div className="flex rounded-sm overflow-hidden" style={{ border: "1px solid var(--v2-line-1)" }}>
              <button onClick={() => setView("grid")} title="Grid view" aria-pressed={view === "grid"} className="p-2 transition-colors" style={{ background: view === "grid" ? "var(--v2-bg-2)" : "var(--v2-bg-1)", color: view === "grid" ? "var(--v2-t-1)" : "var(--v2-t-4)" }}>
                <SquaresFour size={16} weight={view === "grid" ? "fill" : "regular"} />
              </button>
              <button onClick={() => setView("list")} title="List view" aria-pressed={view === "list"} className="p-2 transition-colors" style={{ background: view === "list" ? "var(--v2-bg-2)" : "var(--v2-bg-1)", color: view === "list" ? "var(--v2-t-1)" : "var(--v2-t-4)", borderLeft: "1px solid var(--v2-line-1)" }}>
                <Rows size={16} weight={view === "list" ? "bold" : "regular"} />
              </button>
            </div>
          </div>
        </div>
        <SearchBox q={q} onQ={setQ} className="relative lg:hidden" />
        {items.length === 0 ? (
          <div className="rounded-sm p-10 text-center" style={{ background: "var(--v2-bg-1)", border: "1px solid var(--v2-line-1)" }}>
            <div className="flex h-14 w-14 items-center justify-center rounded-sm mx-auto mb-4" style={{ background: "var(--v2-bg-2)" }}>
              <Robot size={24} style={{ color: "var(--v2-t-4)" }} />
            </div>
            <h3 className="font-heading font-semibold text-[16px]" style={{ color: "var(--v2-t-1)" }}>
              {following ? "You're not following any agents yet" : AGENTS.length && (q || type || mode || win !== "all") ? "No agents match these filters" : "No agents published yet"}
            </h3>
            <p className="text-[13px] mt-1 max-w-md mx-auto" style={{ color: "var(--v2-t-3)" }}>
              {following ? "Follow agents from the Top or Trending tabs to see them here" : AGENTS.length && (q || type || mode || win !== "all") ? "Try clearing the search or a filter" : "Be the first — build an agent, run it, then publish to the marketplace"}
            </p>
            {!following && !AGENTS.length && (
              <Link href="/application/agents/new" className="btn-v2 btn-v2-primary btn-v2-sm inline-block mt-4">Create an agent</Link>
            )}
            {!following && AGENTS.length > 0 && (q || type || mode || win !== "all") && (
              <button
                onClick={() => {
                  setQ("");
                  setType("");
                  setMode("");
                  setWin("all");
                }}
                className="btn-v2 btn-v2-ghost btn-v2-sm inline-block mt-4"
              >
                Clear filters
              </button>
            )}
          </div>
        ) : view === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
            {items.map((a) => (
              <Card key={a.id} a={a} now={now} followed={followed.has(String(a.id))} onFollow={() => onFollow(String(a.id))} />
            ))}
          </div>
        ) : (
          <div className="rounded-sm overflow-x-auto" style={{ border: "1px solid var(--v2-line-1)" }}>
            <div style={{ minWidth: 1060 }}>
              <div className="grid items-center gap-3 px-4 py-2.5" style={{ gridTemplateColumns: COLS, borderBottom: "1px solid var(--v2-line-1)", background: "var(--v2-bg-0)" }}>
                <span className={HEAD} style={{ color: "var(--v2-t-4)" }}>#</span>
                <span className={HEAD} style={{ color: "var(--v2-t-4)" }}>Agent</span>
                <span className={`${HEAD} text-center`} style={{ color: "var(--v2-t-4)" }}>Type</span>
                <SortHead label="Followers" col="subscriber_count" cur={sort} dir={dir} onSort={onSort} />
                <SortHead label="Signals" col="signals_count" cur={sort} dir={dir} onSort={onSort} />
                <SortHead label="Trades" col="trades_count" cur={sort} dir={dir} onSort={onSort} />
                <SortHead label="Avg PnL" col="avg_pnl_pct" cur={sort} dir={dir} onSort={onSort} />
                <SortHead label="Checks" col="runs_count" cur={sort} dir={dir} onSort={onSort} />
                <span className={`${HEAD} text-right`} style={{ color: "var(--v2-t-4)" }}>Clones</span>
                <SortHead label="Cost" col="per_action_cost" cur={sort} dir={dir} onSort={onSort} />
                <span className={`${HEAD} text-right`} style={{ color: "var(--v2-t-4)" }}>Age</span>
                <span></span>
              </div>
              {items.map((a, i) => (
                <Row key={a.id} a={a} rank={i + 1} last={i === items.length - 1} now={now} followed={followed.has(String(a.id))} onFollow={() => onFollow(String(a.id))} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
