"use client";
import { useEffect, useState, type ReactNode } from "react";
import { CaretDown, CaretLeft, Funnel, List, Rows } from "@phosphor-icons/react";

// Tab "Live feed" dan "My lists" di /application/alpha. Filter dan kontrol mengikuti referensi;
// umpan transaksi dan daftar kosong sampai API (/alpha/activity, /alpha/watchlists) tersambung di Tahap 2.

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

type Since = "1h" | "6h" | "24h" | "all";
type Side = "all" | "buy" | "sell";

export function AlphaLive() {
  const [open, setOpen] = useState(true);
  const [since, setSince] = useState<Since>("all");
  const [side, setSide] = useState<Side>("all");
  const [minSize, setMinSize] = useState(0);
  const [tier, setTier] = useState<"all" | "S" | "SA">("all");
  const [mc, setMc] = useState("all");
  const [compact, setCompact] = useState(false);
  const [updated, setUpdated] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setUpdated((s) => s + 1), 1000);
    const poll = setInterval(() => setUpdated(0), 8000);
    return () => {
      clearInterval(id);
      clearInterval(poll);
    };
  }, []);
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
              {[0, 10, 100, 1000].map((n) => (
                <Pill key={n} active={minSize === n} onClick={() => setMinSize(n)}>{n === 0 ? "Any" : `$${n}+`}</Pill>
              ))}
            </div>
          </Section>
          <Section title="Wallet tier">
            <div className="flex flex-wrap gap-1.5">
              <Pill active={tier === "all"} onClick={() => setTier("all")}>All tiers</Pill>
              <Pill active={tier === "S"} onClick={() => setTier("S")} color="#F5C451">S only</Pill>
              <Pill active={tier === "SA"} onClick={() => setTier("SA")} color="#8FB3FF">S + A</Pill>
            </div>
          </Section>
          <Section title="Market cap" defaultOpen={false}>
            <div className="flex flex-wrap gap-1.5">
              {[
                ["all", "Any"],
                ["micro", "<100k"],
                ["small", "100k–1M"],
                ["mid", "1M–10M"],
                ["large", ">10M"],
              ].map(([k, l]) => (
                <Pill key={k} active={mc === k} onClick={() => setMc(k)}>{l}</Pill>
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
        <EmptyState title="No recent activity" hint="Tracked wallets may simply not have traded in the last few seconds. Feed refreshes every 8s" />
      </div>
    </div>
  );
}

export function AlphaMyLists() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex-1 min-h-0 lg:flex lg:gap-3">
      {open && (
        <Sidebar onCollapse={() => setOpen(false)}>
          <div className="px-4 py-6 text-[12px]" style={{ color: "var(--v2-t-4)" }}>No filters for this view</div>
        </Sidebar>
      )}
      <div className="flex-1 min-w-0 overflow-y-auto pr-5 sm:pr-8 lg:pr-0">
        <div className="pt-6">
          <EmptyState title="No watchlists yet" hint="Star a wallet anywhere on the platform and a list is built for you automatically" />
        </div>
      </div>
    </div>
  );
}
