"use client";
import { useEffect, useState } from "react";
import { Plus, Robot, Play, Pause, Trash } from "@phosphor-icons/react";
import fixture from "@/data/agents.json";
import { useSigned } from "@/components/auth/signed";

// My agents: daftar fixture saat masuk (status jalan/jeda dan hapus disimpan di localStorage).
// Diganti /agents di Tahap 3.
type A = { id: number; name: string; type: string; chain: string; running: boolean; tokenSymbol: string | null; winRate: number | null; runs: number; createdAt: string };
const KEY = "corvid.agents.v1";
const TYPE: Record<string, string> = { auto_trader: "Auto trader", wallet_monitor: "Wallet monitor", signal_bot: "Signal bot", token_analyst: "Token analyst" };

export function ApplicationAgentsContent() {
  const signed = useSigned();
  const [list, setList] = useState<A[]>(fixture.agents as A[]);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setList(JSON.parse(raw) as A[]);
    } catch {}
    setReady(true);
  }, []);
  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(list));
    } catch {}
  }, [list, ready]);

  const shown = signed ? list : [];
  const toggle = (id: number) => setList((p) => p.map((a) => (a.id === id ? { ...a, running: !a.running } : a)));
  const remove = (id: number) => setList((p) => p.filter((a) => a.id !== id));

  return (
    <div className="max-w-7xl mx-auto">
      <div
        className="mb-4 flex items-start gap-2.5 rounded-lg px-3.5 py-2.5 text-[13px] leading-relaxed"
        style={{ color: "var(--v2-t-2, rgba(255,255,255,0.7))", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.10)" }}
      >
        <span
          className="shrink-0 font-mono text-[9.5px] uppercase tracking-[0.08em] px-1.5 py-0.5 mt-0.5 rounded-md"
          style={{ color: "var(--v2-accent-text)", background: "rgba(var(--v2-accent-rgb),0.10)", border: "1px solid rgba(var(--v2-accent-rgb),0.25)" }}
        >
          Beta
        </span>
        <span>Agents are in beta. They run today and change every week as we build them out. Trade small and set limits you are comfortable with.</span>
      </div>
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="eyebrow">Automation</div>
            <h2 className="font-heading font-semibold text-[24px] tracking-[-0.02em]" style={{ color: "var(--v2-t-1)" }}>
              My agents
            </h2>
            <p className="text-sm mt-0.5" style={{ color: "var(--v2-t-3)" }}>
              {shown.length} {shown.length === 1 ? "agent" : "agents"}
            </p>
          </div>
          <a className="btn-v2 btn-v2-primary" href="/application/agents/new">
            <Plus size={14} /> New Agent
          </a>
        </div>

        {shown.length > 0 ? (
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {shown.map((a) => (
              <div key={a.id} className="panel rounded-sm p-4 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <div className="text-[14px] font-semibold truncate" style={{ color: "var(--v2-t-1)" }}>
                      {a.name}
                    </div>
                    <div className="text-[12px]" style={{ color: "var(--v2-t-4)" }}>
                      {TYPE[a.type] ?? a.type} · Solana{a.tokenSymbol ? ` · $${a.tokenSymbol}` : ""}
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 eyebrow shrink-0" style={{ color: a.running ? "var(--v2-pos)" : "var(--v2-t-4)" }}>
                    <span className={`dot ${a.running ? "dot-pos dot-pulse" : ""}`} style={a.running ? undefined : { background: "var(--v2-t-4)" }}></span>
                    {a.running ? "RUNNING" : "PAUSED"}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[12px]">
                  <div>
                    <div style={{ color: "var(--v2-t-4)" }}>Win rate</div>
                    <div className="num text-[14px]" style={{ color: "var(--v2-t-1)" }}>
                      {a.winRate == null ? "·" : a.winRate + "%"}
                    </div>
                  </div>
                  <div>
                    <div style={{ color: "var(--v2-t-4)" }}>Runs</div>
                    <div className="num text-[14px]" style={{ color: "var(--v2-t-1)" }}>
                      {a.runs.toLocaleString("en-US")}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 mt-auto">
                  <button className="btn-v2 btn-v2-ghost btn-v2-sm" onClick={() => toggle(a.id)}>
                    {a.running ? <Pause size={12} /> : <Play size={12} />} {a.running ? "Pause" : "Resume"}
                  </button>
                  <button className="btn-v2 btn-v2-ghost btn-v2-sm" onClick={() => remove(a.id)} aria-label={`Delete ${a.name}`}>
                    <Trash size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="panel rounded-sm p-10 max-w-2xl mx-auto">
            <div className="flex h-10 w-10 items-center justify-center rounded-sm mb-4" style={{ background: "var(--v2-bg-2)" }}>
              <Robot size={20} style={{ color: "var(--v2-t-2)" }} />
            </div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--v2-t-1)" }}>
              {signed ? "No agents yet" : "Your AI agents will live here"}
            </h3>
            <p className="text-sm mb-5" style={{ color: "var(--v2-t-3)" }}>
              Create autonomous agents that:
            </p>
            <ul className="space-y-2 mb-6 text-sm" style={{ color: "var(--v2-t-2)" }}>
              {[
                "Copy any wallet's trades automatically",
                "Snipe new token launches based on safety filters",
                "Auto-trade on price, volume, or liquidity triggers",
                "Send signals to your inbox and your Telegram bot",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <span style={{ color: "var(--v2-accent-text)" }}>→</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-3 flex-wrap">
              <a className="btn-v2 btn-v2-primary" href="/application/agents/new">
                <Plus size={14} /> Create your first agent
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
