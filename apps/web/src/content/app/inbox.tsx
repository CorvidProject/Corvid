"use client";
import { useEffect, useMemo, useState } from "react";
import { Bell, Coins, Wallet, Robot, ArrowsClockwise, CheckCircle } from "@phosphor-icons/react";
import inbox from "@/data/inbox.json";
import signals from "@/data/signals.json";
import { SignInGate, useSigned } from "@/components/auth/signed";
import { apiGet, apiSend, USE_API } from "@/lib/api";

// Inbox: tab Signals/Tokens/Wallets + filter. Mode fixture: data contoh. Mode API: GET /api/signals (publik)
// dan GET /api/inbox + POST /api/inbox/read-all (butuh login).
type Item = { id: string; tab: "Signals" | "Tokens" | "Wallets"; cat: string; title: string; body: string; at: number; mint?: string; read: boolean };

const TABS = [
  { k: "Signals", icon: Bell },
  { k: "Tokens", icon: Coins },
  { k: "Wallets", icon: Wallet },
] as const;
const CHIPS = ["All", "Trades", "Wallets", "Clusters", "AI", "Alerts", "System"] as const;

const TYPE: Record<string, { tab: Item["tab"]; cat: string; label: string }> = {
  wallet_buy: { tab: "Wallets", cat: "Wallets", label: "Smart wallet bought" },
  new_token: { tab: "Tokens", cat: "Trades", label: "New token" },
  risk_flag: { tab: "Tokens", cat: "Alerts", label: "Risk flag on" },
};

type Sig = { id: number; type: string; symbol: string | null; mint: string; score: number; at: number };
type Inb = { id: number; kind: string; title: string; body: string | null; at: number; read: boolean };
const sigBody = (s: Sig, api: boolean) =>
  !api ? `Risk score ${s.score}. Fixture signal.` : s.type === "new_token" ? "First seen on-chain. Run a rugcheck before buying." : `Risk score ${s.score}.`;

function build(sigs: Sig[] = signals.signals as Sig[], inb: Inb[] = inbox.items as Inb[], api = false): Item[] {
  const a: Item[] = sigs.map((s) => {
    const t = TYPE[s.type] ?? { tab: "Signals" as const, cat: "AI", label: s.type };
    return { id: "sig" + s.id, tab: t.tab, cat: t.cat, title: `${t.label} ${s.symbol ?? s.mint.slice(0, 4)}`, body: sigBody(s, api), at: s.at, mint: s.mint, read: false };
  });
  const b: Item[] = inb.map((i) => ({
    id: "inb" + i.id,
    tab: "Signals",
    cat: i.kind === "system" ? "System" : "AI",
    title: i.title,
    body: i.body ?? "",
    at: i.at,
    read: i.read,
  }));
  return [...a, ...b].sort((x, y) => y.at - x.at);
}

function ago(ts: number) {
  const s = Math.max(0, Math.floor(Date.now() / 1000 - ts));
  if (s < 3600) return Math.max(1, Math.floor(s / 60)) + "m ago";
  if (s < 86400) return Math.floor(s / 3600) + "h ago";
  return Math.floor(s / 86400) + "d ago";
}

export function ApplicationInboxContent() {
  const signed = useSigned();
  const [tab, setTab] = useState<Item["tab"]>("Signals");
  const [chip, setChip] = useState<(typeof CHIPS)[number]>("All");
  const [items, setItems] = useState<Item[]>(() => (USE_API ? [] : build()));
  const [loadErr, setLoadErr] = useState(false);
  const loadApi = () => {
    if (!USE_API) return Promise.resolve();
    return Promise.all([apiGet<{ signals: Sig[] }>("/api/signals"), signed ? apiGet<{ items: Inb[] }>("/api/inbox") : Promise.resolve({ items: [] as Inb[] })])
      .then(([s, i]) => {
        setItems(build(s.signals, i.items, true));
        setLoadErr(false);
      })
      .catch(() => setLoadErr(true));
  };
  useEffect(() => {
    void loadApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signed]);
  const [spin, setSpin] = useState(false);

  const list = useMemo(
    () => (signed ? items : []).filter((i) => (tab === "Signals" ? true : i.tab === tab)).filter((i) => chip === "All" || i.cat === chip),
    [items, tab, chip, signed],
  );

  const refresh = () => {
    setSpin(true);
    void loadApi().finally(() => setTimeout(() => setSpin(false), 600));
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-5">
      {loadErr && (
        <p className="text-[12px] pt-3" style={{ color: "var(--v2-neg)" }} role="status">
          Could not load your inbox. Use refresh to try again.
        </p>
      )}
      <div className="flex items-end justify-between gap-3 flex-wrap mt-4">
        <div className="flex gap-5 shrink-0" role="tablist">
          {TABS.map(({ k, icon: I }) => {
            const on = tab === k;
            return (
              <button
                key={k}
                role="tab"
                aria-selected={on}
                onClick={() => setTab(k)}
                className="relative flex items-center gap-2 pb-2.5 text-[12px] transition-colors whitespace-nowrap"
                style={{ color: on ? "var(--v2-t-1)" : "var(--v2-t-4)" }}
              >
                <I size={13} />
                <span className="eyebrow">{k}</span>
                {on && <span className="absolute bottom-[-1px] left-0 right-0 h-px" style={{ background: "var(--v2-accent)" }}></span>}
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-1">
        <div className="flex items-center gap-3 flex-wrap py-3">
          <div className="flex items-center gap-1.5 flex-wrap flex-1 min-w-0">
            {CHIPS.map((c) => {
              const on = chip === c;
              return (
                <button
                  key={c}
                  onClick={() => setChip(c)}
                  aria-pressed={on}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm transition-colors text-[11px]"
                  style={{
                    border: `1px solid ${on ? "var(--v2-accent)" : "var(--v2-line-1)"}`,
                    background: on ? "var(--v2-accent-bg, rgba(var(--v2-accent-rgb),0.08))" : "transparent",
                    color: on ? "var(--v2-t-1)" : "var(--v2-t-3)",
                  }}
                >
                  <span className="eyebrow">{c}</span>
                </button>
              );
            })}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span
              className="inline-flex items-center gap-2 px-2.5 h-7 rounded-sm shrink-0"
              title={signed ? "Fixture feed" : "Listening for activity. Signals appear when sources are connected"}
              style={{ border: "1px solid var(--v2-line-1)", background: "var(--v2-bg-0)" }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: signed ? "var(--v2-pos)" : "var(--v2-t-4)" }}></span>
              <span className="num text-[11px] tracking-wider" style={{ color: signed ? "var(--v2-t-2)" : "var(--v2-t-4)" }}>
                {signed ? "LIVE" : "LISTENING"}
              </span>
            </span>
            {signed && (
              <button
                className="btn-v2 btn-v2-ghost btn-v2-sm"
                onClick={() => {
                  setItems((p) => p.map((i) => ({ ...i, read: true })));
                  if (USE_API) void apiSend("POST", "/api/inbox/read-all").catch(() => void loadApi());
                }}
                title="Mark all as read"
                aria-label="Mark all as read"
              >
                <CheckCircle size={12} />
              </button>
            )}
            <button className="btn-v2 btn-v2-ghost btn-v2-sm" onClick={refresh} style={{ opacity: 0.7 }} aria-label="Refresh">
              <ArrowsClockwise size={12} className={spin ? "animate-spin" : ""} />
            </button>
          </div>
        </div>

        {signed && list.length > 0 ? (
          <div className="rounded-2xl overflow-hidden" style={{ background: "var(--v2-bg-1)", border: "1px solid var(--v2-line-1)" }}>
            {list.map((i, n) => (
              <div
                key={i.id}
                className="flex items-start gap-3 px-4 py-3 hover:bg-[var(--v2-bg-2)] transition-colors"
                style={{ borderTop: n ? "1px solid var(--v2-line-1)" : undefined }}
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: i.read ? "transparent" : "var(--v2-accent)" }}></span>
                <div className="min-w-0 flex-1">
                  <p className="text-[14px] font-medium" style={{ color: "var(--v2-t-1)" }}>
                    {i.mint ? (
                      <a href={`/application/tokens/${i.mint}?chain=robinhood`} className="hover:underline">
                        {i.title}
                      </a>
                    ) : (
                      i.title
                    )}
                  </p>
                  <p className="text-[12px]" style={{ color: "var(--v2-t-3)" }}>
                    {i.body}
                  </p>
                </div>
                {i.mint && /^0x[0-9a-fA-F]{40}$/.test(i.mint) && (
                  <a
                    href={`/application/swap?mint=${i.mint}`}
                    title="Opens Swap with this token. Your wallet signs; nothing is sent in dry mode."
                    className="shrink-0 h-7 px-3 rounded-sm text-[12px] font-medium inline-flex items-center transition-colors hover:bg-[var(--v2-bg-3)]"
                    style={{ color: "var(--v2-accent-text)", border: "1px solid var(--v2-line-2)" }}
                  >
                    Execute
                  </a>
                )}
                <span className="eyebrow shrink-0" style={{ color: "var(--v2-t-4)" }}>
                  {i.cat} · {ago(i.at)}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="pt-4">
            <div className="text-center pb-8">
              <Bell size={28} className="mx-auto mb-3" style={{ color: "var(--v2-t-4)" }} />
              <p className="text-sm font-semibold mb-1.5" style={{ color: "var(--v2-t-2)" }}>
                No {tab.toLowerCase()} yet
              </p>
              <p className="text-[12px] max-w-md mx-auto" style={{ color: "var(--v2-t-3)" }}>
                {signed && chip !== "All" ? `Nothing in ${chip} right now.` : "Start tracking wallets, tokens or agents to receive real-time alpha"}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { href: "/application/alpha", icon: Wallet, t: "Wallet signals", d: "Follow smart wallets and get notified when they trade", cta: "Track wallets", accent: true },
                { href: "/application/terminal", icon: Coins, t: "Token alerts", d: "Watch tokens for price, liquidity and risk changes", cta: "Browse tokens" },
                { href: "/application/agents/new", icon: Robot, t: "Agent signals", d: "Let agents monitor markets and notify you when something matters", cta: "Create agent" },
              ].map((c) => (
                <a
                  key={c.t}
                  href={c.href}
                  className="group block p-5 rounded-sm transition-colors hover:bg-[var(--v2-bg-1)]"
                  style={{ border: `1px solid ${c.accent ? "var(--v2-accent)" : "var(--v2-line-1)"}` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <c.icon size={16} style={{ color: c.accent ? "var(--v2-accent-text)" : "var(--v2-t-4)" }} />
                  </div>
                  <p className="text-[14px] font-medium" style={{ color: "var(--v2-t-1)" }}>
                    {c.t}
                  </p>
                  <p className="text-[12px] mt-1.5 leading-relaxed" style={{ color: "var(--v2-t-3)" }}>
                    {c.d}
                  </p>
                  <span className="text-[11px] eyebrow inline-flex items-center gap-1.5 mt-4" style={{ color: "var(--v2-t-3)" }}>
                    {c.cta} →
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function ApplicationInboxContentExtra() {
  return <SignInGate title="Your Inbox is one step away" sub="Sign in to stream signals, watch tokens and track smart wallets in real time" />;
}
