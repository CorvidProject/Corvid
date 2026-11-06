"use client";
import { DotBackdrop } from "@/components/app/dot-backdrop";
import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from "react";
import {
  BookOpen,
  Bell,
  CaretDown,
  ChartLineUp,
  Crosshair,
  Eye,
  FileText,
  Funnel,
  Lightning,
  MagnifyingGlass,
  Plus,
  Question,
  SidebarSimple,
  Sliders,
  UserCircle,
  Warning,
  X,
  XLogo,
} from "@phosphor-icons/react";
import {
  PIPELINES,
  PRESETS,
  buildConfig,
  getPipeline,
  isEvmAddress,
  nodeSubtitle,
  summarize,
  type Config,
  type Field,
  type Mode,
  type PipelineKey,
  type Preset,
  type Step,
} from "@/lib/builder-defs";
import { loadSession } from "@/lib/auth";
import { apiSend, ApiError, USE_API } from "@/lib/api";

// Builder pipeline agent (sidebar quick start, kanvas node, panel konfigurasi, mode Signal/Trading,
// ringkasan Saved/Draft). Deploy butuh akun dan backend agent (Tahap 3).
const PIPE_ICON: Record<PipelineKey, typeof Eye> = { follow_wallet: Eye, new_tokens: Crosshair, token_trading: ChartLineUp };
const STEP_ICON: Record<string, typeof Eye> = { monitor: Eye, scan: Crosshair, filter: Funnel, execute: Lightning, notify: Bell, persona: UserCircle, knowledge: BookOpen };
const TOKEN_PIPE = "token_trading" as const;
// Eksekusi nyata hanya bila diizinkan pemilik (NEXT_PUBLIC_TRADE_MODE=live). Selain itu agent hanya mensimulasikan swap.
const LIVE = process.env.NEXT_PUBLIC_TRADE_MODE === "live";

type NodeDef = { id: string; label: string; sub: string; sub2?: string; x: number; y: number; w: number; size: number; kind: "config" | "network" | "trigger" | "step" };

function useSigned() {
  const [signed, setSigned] = useState(false);
  useEffect(() => {
    const read = () => setSigned(!!loadSession());
    read();
    window.addEventListener("storage", read);
    window.addEventListener("corvid-auth", read);
    return () => {
      window.removeEventListener("storage", read);
      window.removeEventListener("corvid-auth", read);
    };
  }, []);
  return signed;
}

function FieldInput({ f, value, onChange }: { f: Field; value: string; onChange: (v: string) => void }) {
  const invalid = f.required && value && (f.key === "wallet_address" || f.key === "token_mint") && !isEvmAddress(value);
  const base = { color: "var(--v2-t-1)", border: `1px solid ${invalid ? "var(--v2-neg)" : "var(--v2-line-2)"}`, background: "var(--v2-bg-0)" } as const;
  return (
    <div className="py-2.5">
      {f.type === "toggle" ? (
        <button onClick={() => onChange(value === "true" ? "false" : "true")} role="switch" aria-checked={value === "true"} aria-label={f.label} className="flex items-center justify-between gap-4 w-full text-left">
          <span>
            <span className="block text-[13px] font-medium" style={{ color: "var(--v2-t-1)" }}>{f.label}</span>
            {f.hint && <span className="block text-[11px] mt-0.5" style={{ color: "var(--v2-t-4)" }}>{f.hint}</span>}
          </span>
          <span className="relative shrink-0 rounded-full transition-colors" style={{ width: 34, height: 19, background: value === "true" ? "var(--v2-accent)" : "var(--v2-bg-3)" }}>
            <span className="absolute rounded-full bg-white transition-all" style={{ top: 2, left: value === "true" ? 17 : 2, width: 15, height: 15 }} />
          </span>
        </button>
      ) : (
        <label className="block">
          <span className="block text-[13px] font-medium" style={{ color: "var(--v2-t-1)" }}>
            {f.label}
            {f.required && <span style={{ color: "var(--v2-neg)" }}> *</span>}
          </span>
          {f.hint && <span className="block text-[11px] mt-0.5 mb-1.5" style={{ color: "var(--v2-t-4)" }}>{f.hint}</span>}
          {f.type === "select" ? (
            <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full h-9 px-2 rounded-sm text-[13px] outline-none" style={base}>
              {f.options!.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          ) : (
            <input
              type={f.type === "number" ? "number" : "text"}
              inputMode={f.type === "number" ? "decimal" : undefined}
              min={f.type === "number" ? 0 : undefined}
              step={f.type === "number" ? "any" : undefined}
              value={value}
              placeholder={f.placeholder || (f.type === "text" ? "Paste address" : "")}
              onChange={(e) => onChange(e.target.value)}
              className="w-full h-9 px-2 rounded-sm text-[13px] outline-none num"
              style={base}
            />
          )}
          {invalid && <span className="block text-[11px] mt-1" style={{ color: "var(--v2-neg)" }}>Enter a valid address (0x…)</span>}
        </label>
      )}
    </div>
  );
}

function Panel({ title, prompt, onClose, children }: { title: string; prompt: string; onClose: () => void; children: ReactNode }) {
  return (
    <div role="dialog" aria-label={`${title} settings`} className="flex flex-col w-full h-full overflow-hidden" style={{ background: "var(--v2-bg-1)", borderLeft: "1px solid var(--v2-line-1)" }}>
      <div className="flex items-start justify-between gap-3 px-4 pt-4 pb-3" style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
        <div>
          <h3 className="text-[15px] font-semibold" style={{ color: "var(--v2-t-1)" }}>{title}</h3>
          <p className="text-[12px] mt-0.5" style={{ color: "var(--v2-t-3)" }}>{prompt}</p>
        </div>
        <button onClick={onClose} aria-label="Close" className="h-7 w-7 flex items-center justify-center rounded-sm hover:bg-[var(--v2-bg-2)]" style={{ color: "var(--v2-t-3)" }}>
          <X size={14} />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-2">{children}</div>
    </div>
  );
}

export function AgentBuilder() {
  const signed = useSigned();
  const [pipe, setPipe] = useState<PipelineKey>("follow_wallet");
  const [preset, setPreset] = useState<Preset | null>("balanced");
  const [mode, setMode] = useState<Mode>("signal");
  const [cfg, setCfg] = useState<Config>(() => buildConfig("follow_wallet", "balanced"));
  const [name, setName] = useState("My Pipeline");
  const [persona, setPersona] = useState("");
  const [knowledge, setKnowledge] = useState("");
  const [telegram, setTelegram] = useState(true);
  const [selected, setSelected] = useState<string | null>(null);
  const [adv, setAdv] = useState(false);
  const [sidebar, setSidebar] = useState(true);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const f = () => setMobile(window.innerWidth < 768);
    f();
    if (window.innerWidth < 768) setSidebar(false);
    window.addEventListener("resize", f);
    return () => window.removeEventListener("resize", f);
  }, []);
  const [dirty, setDirty] = useState(false);
  const [limitsOpen, setLimitsOpen] = useState(false);
  const [limits, setLimits] = useState({ perTrade: "", daily: "", allowed: "" });
  const [toast, setToast] = useState<string | null>(null);
  const [summaryOpen, setSummaryOpen] = useState(true);
  const [savedOpen, setSavedOpen] = useState(true);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [view, setView] = useState({ tx: 0, ty: 0, k: 0.68 });

  const pipeline = getPipeline(pipe);
  const say = useCallback((m: string) => {
    setToast(m);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 3800);
  }, []);

  // Parameter URL dari tombol "Deploy an agent on $X": ?template=&token_mint=&wallet=&symbol=&start=1
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    // Alias tautan lama: type=copy_trader (wallet) dan ?token= (token) tetap dikenali.
    const t = q.get("template") ?? (q.get("type") === "copy_trader" ? "follow_wallet" : q.get("token") ? "token_trading" : null);
    const key: PipelineKey | null = t === "follow_wallet" || t === "new_tokens" || t === "token_trading" ? t : null;
    if (!key) return;
    const c = buildConfig(key, "balanced");
    const mint = q.get("token_mint") || q.get("token");
    const wallet = q.get("wallet") || q.get("wallet_address");
    if (key === "token_trading" && mint) c.token_mint = mint;
    if (key === "follow_wallet" && wallet) c.wallet_address = wallet;
    setPipe(key);
    setCfg(c);
    if (q.get("symbol")) setName(`${q.get("symbol")} Trader`);
    if (q.get("start") === "1" || (!q.get("template") && (mint || wallet))) setSelected(key === "new_tokens" ? "scan" : "monitor");
  }, []);

  const pickPipeline = (key: PipelineKey, p: Preset) => {
    setPipe(key);
    setPreset(p);
    setCfg(buildConfig(key, p));
    setSelected(null);
    setDirty(false);
  };
  const reset = () => {
    pickPipeline("follow_wallet", "balanced");
    setMode("signal");
    setName("My Pipeline");
    setPersona("");
    setKnowledge("");
    setTelegram(true);
    setLimits({ perTrade: "", daily: "", allowed: "" });
  };
  const edit = (k: string, v: string) => {
    setCfg((c) => ({ ...c, [k]: v }));
    setPreset(null);
    setDirty(true);
  };
  const touch = () => setDirty(true);

  // ---- node kanvas ----
  const nodes: NodeDef[] = useMemo(() => {
    const first = pipeline.steps[0].id;
    const n: NodeDef[] = [
      { id: "persona", label: "Identity", sub: persona ? persona.slice(0, 18) : "Define identity", x: 60, y: 10, w: 76, size: 76, kind: "config" },
      { id: "knowledge", label: "Knowledge", sub: knowledge ? `${knowledge.length} chars` : "No knowledge", x: 60, y: 200, w: 76, size: 76, kind: "config" },
      { id: "network", label: "Robinhood Chain", sub: "tap to change", x: 300, y: 200, w: 92, size: 92, kind: "network" },
      { id: first, label: first === "scan" ? "Scan" : "Watch", sub: nodeSubtitle(first, pipe, mode, cfg), x: 560, y: 200, w: 92, size: 92, kind: "trigger" },
      { id: "filter", label: pipe === TOKEN_PIPE ? "Trigger" : "Filter", sub: nodeSubtitle("filter", pipe, mode, cfg), x: 780, y: 200, w: 116, size: 92, kind: "step" },
      { id: "execute", label: "Execute", sub: nodeSubtitle("execute", pipe, mode, cfg), sub2: mode === "signal" ? "No trades executed" : cfg.take_profit_pct ? `TP ${cfg.take_profit_pct}% · SL ${cfg.stop_loss_pct || "—"}%` : undefined, x: 1000, y: 200, w: 99, size: 92, kind: "step" },
      { id: "notify", label: "Notify", sub: telegram ? "In-App + Telegram" : "In-App", x: 1220, y: 200, w: 92, size: 92, kind: "step" },
    ];
    return n;
  }, [pipeline, pipe, mode, cfg, persona, knowledge, telegram]);

  useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const fit = () => {
      const W = el.clientWidth, H = el.clientHeight;
      if (!W || !H) return;
      const x0 = 60, x1 = 1220 + 92, y0 = 10, y1 = 200 + 155;
      const pad = 0.15;
      const k = Math.min(Math.max(Math.min(W / ((x1 - x0) * (1 + pad * 2)), H / ((y1 - y0) * (1 + pad * 2))), 0.4), 1.5);
      setView({ k, tx: W / 2 - ((x0 + x1) / 2) * k, ty: H / 2 - ((y0 + y1) / 2) * k });
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, [sidebar, selected]);

  const byId = (id: string) => nodes.find((n) => n.id === id)!;
  const edgePath = (a: string, b: string) => {
    const A = byId(a), B = byId(b);
    const x1 = A.x + A.w / 2 + A.size / 2, y1 = A.y + A.size / 2;
    const x2 = B.x + B.w / 2 - B.size / 2, y2 = B.y + B.size / 2;
    const m = (x1 + x2) / 2;
    return `M${x1},${y1} C${m},${y1} ${m},${y2} ${x2},${y2}`;
  };
  const first = pipeline.steps[0].id;
  const edges: { a: string; b: string; on: boolean }[] = [
    { a: "persona", b: "network", on: false },
    { a: "knowledge", b: "network", on: false },
    { a: "network", b: first, on: false },
    { a: first, b: "filter", on: true },
    { a: "filter", b: "execute", on: false },
    { a: "execute", b: "notify", on: true },
  ];

  const step: Step | undefined = pipeline.steps.find((s) => s.id === selected);
  const visible = step ? step.fields.filter((f) => !f.showInMode || f.showInMode === mode) : [];
  const main = visible.filter((f) => !f.advanced);
  const advanced = visible.filter((f) => f.advanced);

  const summary = summarize(pipe, mode, cfg);
  const maxLive = limits.perTrade || cfg.max_sol_per_copy || cfg.max_sol_per_trade;

  const deploy = () => {
    const req = pipeline.steps.flatMap((s) => s.fields).filter((f) => f.required);
    for (const f of req) {
      const v = cfg[f.key] ?? "";
      if (!v) {
        setSelected(pipeline.steps[0].id);
        return say(`${f.label} is required before you can deploy`);
      }
      if (!isEvmAddress(v)) {
        setSelected(pipeline.steps[0].id);
        return say(`${f.label} is not a valid address (0x…)`);
      }
    }
    if (mode === "trading" && !limits.perTrade) {
      setLimitsOpen(true);
      return say("Set a per-trade limit before trading");
    }
    if (!USE_API) return say("Agent service is not connected yet. Your pipeline is ready to deploy once it is live.");
    const body = { name: name.trim() || pipeline.name, pipeline: pipe, mode, config: cfg, limits: { ...limits } };
    apiSend<{ id: number }>("POST", "/api/agents", body)
      .then(() => {
        say("Agent created. Open My agents to manage it.");
        window.location.href = "/application/agents";
      })
      .catch((e: unknown) =>
        say(e instanceof ApiError ? (e.status === 409 ? "You reached the limit of 20 agents. Delete one first." : e.status === 400 ? "Some settings are not valid. Check the required fields and limits." : "Could not create the agent. Try again.") : "Could not create the agent. Try again."),
      );
  };
  const share = () => {
    const t = `I'm building a ${pipeline.name} agent on Corvid: ${summary.title}. ${mode === "signal" ? "Signal mode" : LIVE ? "Live trading" : "Simulated trading"} on Robinhood Chain.`;
    window.open(`https://x.com/intent/tweet?text=${encodeURIComponent(t)}&url=${encodeURIComponent(window.location.origin)}`, "_blank", "noopener,noreferrer");
  };

  const isTrading = mode === "trading";
  const stepIcon = (id: string) => STEP_ICON[id] ?? Eye;

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: "var(--v2-bg-0)" }}>
      {sidebar && (
        <aside className="flex flex-col shrink-0 overflow-hidden max-md:absolute max-md:inset-y-0 max-md:left-0 max-md:z-40" style={{ width: 260, background: "var(--v2-bg-1)", borderRight: "1px solid var(--v2-line-1)" }}>
          <div className="flex items-center gap-2 px-4 h-12 shrink-0" style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
            <Link className="flex items-center gap-2 min-w-0" href="/application">
              <span className="text-[13px] font-semibold truncate" style={{ color: "var(--v2-t-1)" }}>Corvid</span>
            </Link>
            <div className="flex-1"></div>
            <button onClick={reset} className="h-7 w-7 flex items-center justify-center rounded-sm transition-colors hover:bg-[var(--v2-bg-2)]" title="New pipeline" aria-label="New pipeline" style={{ color: "var(--v2-accent-text)" }}>
              <Plus size={14} weight="bold" />
            </button>
          </div>
          <div className="shrink-0 px-3 py-2 flex gap-1" style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
            <Link className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm text-[12px] font-medium transition-colors hover:bg-[var(--v2-bg-2)]" href="/application/marketplace" style={{ color: "var(--v2-t-2)" }}>
              <MagnifyingGlass size={13} /> Discover
            </Link>
            <Link className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm text-[12px] font-medium transition-colors hover:bg-[var(--v2-bg-2)]" href="/docs" style={{ color: "var(--v2-t-2)" }}>
              <FileText size={13} /> Docs
            </Link>
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="px-3 pt-3">
              <p className="text-[13px] px-2 py-3" style={{ color: "var(--v2-t-3)" }}>No pipelines yet — pick a quick start below</p>
            </div>
            <div className="mx-4 my-3 h-px" style={{ background: "var(--v2-line-1)" }}></div>
            <div className="px-3 pb-4">
              <p className="text-[12px] font-semibold uppercase tracking-wider px-2 mb-2" data-tour="pipeline-select" style={{ color: "var(--v2-t-3)" }}>Quick Start</p>
              {PIPELINES.map((p) => {
                const Icon = PIPE_ICON[p.key];
                return (
                  <div key={p.key} className="mb-3">
                    <div className="flex items-center gap-2 px-2.5 py-1.5">
                      <Icon size={16} weight="duotone" style={{ color: "var(--v2-accent-text)" }} />
                      <span className="text-[14px] font-medium" style={{ color: "var(--v2-t-1)" }}>{p.name}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1 px-2.5">
                      {PRESETS.map((pr) => {
                        const on = pipe === p.key && preset === pr.preset;
                        return (
                          <button
                            key={pr.preset}
                            onClick={() => pickPipeline(p.key, pr.preset)}
                            aria-pressed={on}
                            title={pr.hint}
                            className="h-7 px-1 rounded-sm text-[11px] font-medium transition-colors"
                            style={{ background: on ? "rgba(var(--v2-accent-rgb),0.12)" : "var(--v2-bg-2)", border: `1px solid ${on ? "rgba(var(--v2-accent-rgb),0.35)" : "var(--v2-line-1)"}`, color: on ? "var(--v2-accent-text)" : "var(--v2-t-3)" }}
                          >
                            {pr.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>
      )}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex items-center gap-2 px-3 h-12 shrink-0" style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
          <button onClick={() => setSidebar((s) => !s)} className="h-8 w-8 flex items-center justify-center rounded-sm transition-colors hover:bg-[var(--v2-bg-2)] shrink-0" title={sidebar ? "Hide sidebar" : "Show sidebar"} aria-label={sidebar ? "Hide sidebar" : "Show sidebar"} style={{ color: "var(--v2-t-3)" }}>
            <SidebarSimple size={14} style={{ transform: sidebar ? "none" : "rotate(180deg)" }} />
          </button>
          <input type="text" value={name} onChange={(e) => { setName(e.target.value); touch(); }} placeholder="Pipeline name" className="bg-transparent border-none outline-none text-[15px] font-semibold min-w-[120px] max-w-[200px]" style={{ color: "var(--v2-t-1)" }} />
          <span className="hidden md:flex items-center gap-1.5 px-2 py-1 text-[13px] shrink-0" style={{ color: "var(--v2-t-3)" }}>
            {(() => {
              const I = PIPE_ICON[pipe];
              return <I size={16} weight="duotone" style={{ color: "var(--v2-accent-text)" }} />;
            })()}
            {pipeline.name}
          </span>
          <div className="flex-1"></div>
          <div className="relative group/mode shrink-0" data-tour="mode-toggle">
            <button
              onClick={() => { setMode((m) => (m === "signal" ? "trading" : "signal")); touch(); }}
              aria-pressed={isTrading}
              className="flex items-center gap-1.5 h-8 px-3 rounded-sm text-[13px] font-semibold transition-colors"
              style={{ background: isTrading ? "rgba(var(--v2-accent-rgb),0.12)" : "var(--v2-bg-2)", color: isTrading ? "var(--v2-accent-text)" : "var(--v2-t-3)", border: isTrading ? "1px solid rgba(var(--v2-accent-rgb),0.3)" : "1px solid var(--v2-line-1)" }}
            >
              {isTrading ? (<><Lightning size={14} weight="bold" /> Trading</>) : (<><Bell size={14} /> Signal</>)}
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 rounded-lg text-[13px] leading-relaxed whitespace-nowrap opacity-0 pointer-events-none group-hover/mode:opacity-100 transition-opacity z-50" style={{ background: "var(--v2-bg-1)", border: "1px solid var(--v2-line-2)", boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}>
              {isTrading ? (
                <span style={{ color: "var(--v2-t-2)" }}><strong style={{ color: "var(--v2-accent-text)" }}>Trading mode</strong> — {LIVE ? "executes real trades with ETH" : "simulated trades only (live trading is locked)"}<br />Click to switch to signal-only</span>
              ) : (
                <span style={{ color: "var(--v2-t-2)" }}><strong style={{ color: "var(--v2-t-1)" }}>Signal mode</strong> — alerts only, no trades executed<br />Click to switch to auto-trading</span>
              )}
            </div>
          </div>
          {isTrading && (
            <div className="relative shrink-0">
              <button type="button" onClick={() => setLimitsOpen((o) => !o)} aria-expanded={limitsOpen} className="flex items-center gap-1.5 h-8 px-3 rounded-sm text-[13px] font-medium transition-colors hover:bg-[var(--v2-bg-2)]" style={{ color: limits.perTrade ? "var(--v2-t-2)" : "var(--v2-warn)", border: "1px solid var(--v2-line-1)" }}>
                <Sliders size={14} /> {limits.perTrade ? "Limits" : "Set limits"}
              </button>
              {limitsOpen && (
                <div className="absolute top-full right-0 mt-2 w-[min(320px,calc(100vw-24px))] p-3 z-50 rounded-sm space-y-3" style={{ background: "var(--v2-bg-1)", border: "1px solid var(--v2-line-2)", boxShadow: "0 12px 32px rgba(0,0,0,0.45)" }}>
                  {[
                    ["perTrade", "Per trade (ETH) required before trading", "Example: 0.05", "number"],
                    ["daily", "Daily limit (ETH)", "Optional", "number"],
                    ["allowed", "Allowed token addresses (optional)", "One per line or comma separated", "text"],
                  ].map(([k, label, ph, type]) => (
                    <label key={k} className="block">
                      <span className="block text-[11px] mb-1" style={{ color: "var(--v2-t-3)" }}>{label}</span>
                      <input type={type} min={type === "number" ? "0" : undefined} step="any" value={limits[k as keyof typeof limits]} placeholder={ph} onChange={(e) => { setLimits((l) => ({ ...l, [k]: e.target.value })); touch(); }} className="w-full h-9 px-2 rounded-sm bg-transparent text-[13px] outline-none" style={{ color: "var(--v2-t-1)", border: "1px solid var(--v2-line-2)" }} />
                    </label>
                  ))}
                  <button onClick={() => setLimitsOpen(false)} className="btn-v2 btn-v2-primary w-full h-9 text-[13px]">Done</button>
                </div>
              )}
            </div>
          )}
          <button onClick={() => window.dispatchEvent(new Event("builder-open-tour"))} className="h-8 w-8 flex items-center justify-center rounded-lg transition-colors hover:bg-[var(--v2-bg-2)] shrink-0" title="Show guide" aria-label="Show guide" style={{ color: "var(--v2-t-4)" }}>
            <Question size={14} />
          </button>
          <button onClick={() => setSummaryOpen((v) => !v)} aria-pressed={summaryOpen} className="h-8 w-8 flex items-center justify-center rounded-lg transition-colors hover:bg-[var(--v2-bg-2)] shrink-0" title={summaryOpen ? "Hide summary" : "Show summary"} aria-label={summaryOpen ? "Hide summary" : "Show summary"} style={{ color: "var(--v2-accent-text)" }}>
            <CaretDown size={14} style={{ transform: summaryOpen ? "none" : "rotate(180deg)", transition: "transform 0.15s" }} />
          </button>
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              data-tour="deploy-btn"
              {...(signed ? { onClick: deploy } : { "data-auth-open": "signin" })}
              className="flex items-center gap-1.5 h-8 px-3 md:px-5 rounded-sm text-[13px] font-semibold transition-all disabled:opacity-50"
              style={{ background: "var(--v2-pos)", color: "#0A0A0F" }}
            >
              <Lightning size={13} weight="fill" /> {signed ? "Deploy Pipeline" : "Sign In to Deploy"}
            </button>
            <button onClick={share} className="hidden md:flex items-center gap-1.5 h-8 px-3 rounded-sm text-[13px] font-medium transition-colors hover:bg-[var(--v2-bg-2)]" style={{ color: "var(--v2-t-2)", border: "1px solid var(--v2-line-1)" }}>
              <XLogo size={13} weight="bold" /> Share
            </button>
          </div>
        </div>

        <div className="flex-1 min-h-0 relative flex flex-col" data-tour="canvas">
          <div className="flex flex-1 min-h-0 h-full">
            {mobile && (
              <div className="flex-1 relative h-full overflow-y-auto px-4 py-4" style={{ background: "var(--v2-bg-0)" }}>
                <p className="text-[11px] font-semibold uppercase tracking-wider mb-2 px-1" style={{ color: "var(--v2-t-4)" }}>Configuration</p>
                {nodes
                  .filter((n) => n.kind !== "network")
                  .map((n, i, arr) => {
                    const Icon = stepIcon(n.id);
                    const dim = n.id === "execute" && mode === "signal";
                    const tint = n.kind === "trigger" ? "rgba(var(--v2-accent-rgb),0.07)" : n.id === "execute" ? "rgba(61,214,140,0.06)" : "var(--v2-bg-1)";
                    const sub = [n.sub, n.sub2].filter(Boolean).join(" · ");
                    const divider = n.kind === "trigger";
                    return (
                      <div key={n.id}>
                        {divider && (
                          <div className="flex items-center gap-2 my-3 px-1">
                            <div className="flex-1 h-px" style={{ background: "var(--v2-line-1)" }} />
                            <p className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: "var(--v2-t-4)" }}>Pipeline</p>
                            <div className="flex-1 h-px" style={{ background: "var(--v2-line-1)" }} />
                          </div>
                        )}
                        <button
                          onClick={() => { setSelected(n.id); setAdv(false); }}
                          aria-label={`${n.label} settings`}
                          className="w-full flex items-center gap-3 px-4 py-4 rounded-xl text-left"
                          style={{ background: tint, border: `1px solid ${selected === n.id ? "rgba(var(--v2-accent-rgb),0.6)" : "var(--v2-line-1)"}`, opacity: dim ? 0.85 : 1 }}
                        >
                          <span className="h-10 w-10 shrink-0 rounded-lg flex items-center justify-center" style={{ background: "var(--v2-bg-2)", border: "1px solid var(--v2-line-1)" }}>
                            <Icon size={20} weight="duotone" style={{ color: n.kind === "trigger" ? "var(--v2-accent-text)" : "var(--v2-t-3)" }} />
                          </span>
                          <span className="flex-1 min-w-0">
                            <span className="block text-[15px] font-semibold" style={{ color: "var(--v2-t-1)" }}>{n.label}</span>
                            <span className="block text-[13px] truncate" style={{ color: "var(--v2-t-3)" }}>{sub}</span>
                          </span>
                          <CaretDown size={14} style={{ transform: "rotate(-90deg)", color: "var(--v2-t-4)" }} />
                        </button>
                        {i < arr.length - 1 && arr[i + 1].kind !== "trigger" && <div className="mx-auto w-px h-3" style={{ background: "var(--v2-line-2)" }} />}
                      </div>
                    );
                  })}
                <div className="h-40" />
              </div>
            )}
            <div ref={wrapRef} className={mobile ? "hidden" : "flex-1 relative h-full overflow-hidden"} style={{ minHeight: 320, background: "var(--v2-bg-0)" }} onClick={() => setSelected(null)}>
              {/* Latar WebGL yang sama dengan halaman Rugcheck: titik menyala mengikuti sinar pindai dan cincin yang menjalar. */}
              <DotBackdrop variant="scan" className="absolute inset-0 w-full h-full pointer-events-none" />
              <div className="absolute left-0 top-0" style={{ transform: `translate(${view.tx}px, ${view.ty}px) scale(${view.k})`, transformOrigin: "0 0" }}>
                <svg style={{ position: "absolute", left: 0, top: 0, width: 1, height: 1, overflow: "visible" }} aria-hidden="true">
                  {edges.map((e) => {
                    const d = edgePath(e.a, e.b);
                    return (
                      <g key={`${e.a}-${e.b}`}>
                        <path d={d} fill="none" stroke={e.on ? "var(--v2-accent)" : "rgba(255,255,255,0.18)"} strokeWidth={e.on ? 1.6 : 1.2} strokeDasharray={e.on ? undefined : "5 5"} />
                        {/* Animasi aliran biru: titik-titik mengalir di semua garis, "komet" di garis aktif. */}
                        <path d={d} className="crv-flow" />
                        {e.on && <path d={d} pathLength={100} className="crv-comet" />}
                      </g>
                    );
                  })}
                </svg>
                {nodes.map((n) => {
                  const Icon = n.id === "network" ? null : stepIcon(n.id);
                  const on = selected === n.id;
                  const dim = n.id === "execute" && mode === "signal";
                  return (
                    <div key={n.id} className="absolute flex flex-col items-center" style={{ left: n.x, top: n.y, width: n.w }}>
                      <button
                        onClick={(e) => { e.stopPropagation(); setSelected(n.id); setAdv(false); }}
                        aria-label={`${n.label} settings`}
                        aria-pressed={on}
                        className="relative flex items-center justify-center cursor-pointer transition-all duration-200"
                        style={{
                          width: n.size, height: n.size, borderRadius: 20,
                          background: on ? "linear-gradient(145deg, rgba(var(--v2-accent-rgb),0.16), rgba(var(--v2-accent-rgb),0.04))" : "linear-gradient(145deg, rgba(255, 255, 255, 0.035), rgba(255, 255, 255, 0.008))",
                          border: `1px solid ${on ? "rgba(var(--v2-accent-rgb),0.6)" : "rgba(255, 255, 255, 0.06)"}`,
                          boxShadow: "rgba(12, 14, 17, 0.25) 0px 4px 20px, rgba(255, 255, 255, 0.03) 0px 1px 0px inset",
                          opacity: dim ? 0.85 : 1,
                        }}
                      >
                        {n.kind === "trigger" && (
                          <span className="absolute -top-2 -left-2 z-10 h-5 w-5 rounded-full flex items-center justify-center" style={{ background: "var(--v2-accent)", boxShadow: "0 0 12px rgba(var(--v2-accent-rgb),0.5), 0 2px 6px rgba(12,14,17,0.3)" }}>
                            <Lightning size={10} weight="fill" style={{ color: "#fff" }} />
                          </span>
                        )}
                        {Icon ? (
                          <Icon size={n.size === 76 ? 26 : 32} weight="duotone" style={{ color: on ? "var(--v2-accent-text)" : "rgba(255,255,255,0.45)", transition: "0.2s" }} />
                        ) : (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src="/brand/robinhood-chain-symbol.png" alt="" aria-hidden width={44} height={44} className="shrink-0" style={{ width: 44, height: 44, borderRadius: 11 }} />
                        )}
                      </button>
                      <span className="mt-2.5 text-center whitespace-nowrap" style={{ fontSize: 14, fontWeight: 600, color: on ? "var(--v2-t-1)" : "rgba(255,255,255,0.8)" }}>{n.label}</span>
                      <span className="mt-0.5 text-center max-w-[160px] leading-snug" style={{ fontSize: 10.5, color: "rgba(255,255,255,0.35)" }}>{n.sub}</span>
                      {n.sub2 && <span className="text-center max-w-[160px] leading-snug" style={{ fontSize: 10.5, color: "rgba(255,255,255,0.35)" }}>{n.sub2}</span>}
                    </div>
                  );
                })}
              </div>

            </div>
            {selected && (
              <div className={mobile ? "absolute inset-0 z-50 flex" : "shrink-0 flex"} style={mobile ? undefined : { width: 340, maxWidth: "45%" }}>
                  {step ? (
                    <Panel title={step.label} prompt={step.prompt} onClose={() => setSelected(null)}>
                      {step.alwaysOn && step.fields.length === 0 && <p className="text-[13px] py-3" style={{ color: "var(--v2-t-3)" }}>Nothing to configure. This step runs automatically.</p>}
                      {step.id === "notify" && (
                        <div className="py-2">
                          <div className="flex items-center justify-between py-2.5"><span className="text-[13px]" style={{ color: "var(--v2-t-1)" }}>In-App inbox</span><span className="text-[11px]" style={{ color: "var(--v2-t-4)" }}>Always on</span></div>
                          <FieldInput f={{ key: "tg", label: "Telegram alerts", hint: "Send every signal to your Telegram", type: "toggle" }} value={telegram ? "true" : "false"} onChange={(v) => { setTelegram(v === "true"); touch(); }} />
                        </div>
                      )}
                      {main.map((f) => <FieldInput key={f.key} f={f} value={cfg[f.key] ?? ""} onChange={(v) => edit(f.key, v)} />)}
                      {advanced.length > 0 && (
                        <>
                          <button onClick={() => setAdv((a) => !a)} aria-expanded={adv} className="flex items-center gap-1.5 text-[12px] py-2" style={{ color: "var(--v2-t-3)" }}>
                            <CaretDown size={11} style={{ transform: adv ? "none" : "rotate(-90deg)" }} /> Advanced
                          </button>
                          {adv && advanced.map((f) => <FieldInput key={f.key} f={f} value={cfg[f.key] ?? ""} onChange={(v) => edit(f.key, v)} />)}
                        </>
                      )}
                      {step.id === "execute" && mode === "signal" && (
                        <p className="text-[12px] py-3 flex gap-2" style={{ color: "var(--v2-t-3)" }}>
                          <Bell size={14} className="shrink-0 mt-0.5" /> Signal mode: no trades are executed. Switch to Trading to set size, slippage and exits.
                        </p>
                      )}
                    </Panel>
                  ) : selected === "persona" ? (
                    <Panel title="Identity" prompt="Give your agent a personality" onClose={() => setSelected(null)}>
                      <div className="py-2.5">
                        <label className="block">
                          <span className="block text-[13px] font-medium" style={{ color: "var(--v2-t-1)" }}>Persona</span>
                          <span className="block text-[11px] mt-0.5 mb-1.5" style={{ color: "var(--v2-t-4)" }}>How the agent writes its alerts and explains its decisions</span>
                          <textarea rows={6} value={persona} onChange={(e) => { setPersona(e.target.value); touch(); }} placeholder="e.g. A calm, data-first analyst. Short sentences. Always mention risk." className="w-full px-2 py-2 rounded-sm text-[13px] outline-none resize-none" style={{ color: "var(--v2-t-1)", border: "1px solid var(--v2-line-2)", background: "var(--v2-bg-0)" }} />
                        </label>
                      </div>
                    </Panel>
                  ) : selected === "knowledge" ? (
                    <Panel title="Knowledge" prompt="Notes the agent should keep in mind" onClose={() => setSelected(null)}>
                      <div className="py-2.5">
                        <label className="block">
                          <span className="block text-[13px] font-medium" style={{ color: "var(--v2-t-1)" }}>Notes</span>
                          <span className="block text-[11px] mt-0.5 mb-1.5" style={{ color: "var(--v2-t-4)" }}>Rules, watchlists, or research. File upload is available after deploy.</span>
                          <textarea rows={8} value={knowledge} onChange={(e) => { setKnowledge(e.target.value); touch(); }} placeholder="Paste text here" className="w-full px-2 py-2 rounded-sm text-[13px] outline-none resize-none" style={{ color: "var(--v2-t-1)", border: "1px solid var(--v2-line-2)", background: "var(--v2-bg-0)" }} />
                        </label>
                      </div>
                    </Panel>
                  ) : (
                    <Panel title="Network" prompt="Where the agent runs" onClose={() => setSelected(null)}>
                      <div className="flex items-center gap-3 py-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/brand/robinhood-chain-symbol.png" alt="" aria-hidden width={32} height={32} className="shrink-0" style={{ width: 32, height: 32, borderRadius: 8 }} />
                        <div>
                          <p className="text-[14px] font-semibold" style={{ color: "var(--v2-t-1)" }}>Robinhood Chain</p>
                          <p className="text-[12px]" style={{ color: "var(--v2-t-4)" }}>Corvid agents run on Robinhood Chain only</p>
                        </div>
                        <span className="ml-auto text-[11px]" style={{ color: "var(--v2-pos)" }}>Selected</span>
                      </div>
                    </Panel>
                  )}
              </div>
            )}
          </div>

          {summaryOpen && (
            <div className="absolute z-10 bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[520px] max-h-[45vh] flex flex-col" style={{ pointerEvents: "none", marginLeft: selected && !mobile ? -170 : 0 }}>
              <div className="rounded-2xl overflow-y-auto min-h-0" style={{ pointerEvents: "auto", background: "linear-gradient(145deg, rgba(28, 34, 40, 0.95), rgba(23, 28, 33, 0.98))", border: "1px solid rgba(255, 255, 255, 0.06)", boxShadow: "rgba(12, 14, 17, 0.4) 0px 8px 40px, rgba(255, 255, 255, 0.02) 0px 0px 0px 1px inset", backdropFilter: "blur(20px)" }}>
                <div className="flex items-center justify-between px-4 py-2.5 select-none shrink-0" style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.04)" }}>
                  <span className="flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider" style={{ color: "rgba(255, 255, 255, 0.35)" }}>
                    <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: dirty ? "rgba(255,255,255,0.35)" : "var(--v2-warn)" }}></span>
                    {dirty ? "Draft" : "Saved"}
                  </span>
                  <button onClick={() => setSavedOpen((v) => !v)} aria-expanded={savedOpen} aria-label={savedOpen ? "Collapse summary" : "Expand summary"} className="h-5 w-5 flex items-center justify-center rounded transition-colors hover:bg-[rgba(255,255,255,0.08)]" style={{ color: "rgba(255, 255, 255, 0.65)" }}>
                    <CaretDown size={10} style={{ transform: savedOpen ? "none" : "rotate(180deg)" }} />
                  </button>
                </div>
                {savedOpen && (
                  <div className="px-4 py-3">
                    <p className="text-[14px] font-semibold mb-2.5" style={{ color: "rgba(255, 255, 255, 0.85)" }}>{summary.title}</p>
                    <div className="space-y-1.5">
                      {summary.lines.map((l) => (
                        <div key={l} className="flex items-start gap-2 text-[13px]" style={{ color: "rgba(255, 255, 255, 0.55)" }}>
                          <span className="h-1 w-1 rounded-full mt-[7px] shrink-0" style={{ background: "var(--v2-accent)" }}></span>
                          <span>{l}</span>
                        </div>
                      ))}
                      {isTrading && (
                        <div className="flex items-center gap-1.5 text-[12px] pt-1" style={{ color: "var(--v2-accent-text)" }}>
                          <Warning size={12} weight="fill" />
                          {LIVE ? "Live trading" : "Simulated trading (live is locked)"} — {maxLive ? `up to ${maxLive} ETH per trade${LIVE ? " from your wallet" : ""}` : "set a per-trade limit before you deploy"}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          {toast && (
            <div role="status" className="absolute z-30 left-1/2 -translate-x-1/2 top-4 px-4 py-2.5 rounded-lg text-[13px]" style={{ background: "var(--v2-bg-1)", border: "1px solid var(--v2-line-2)", color: "var(--v2-t-1)", boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}>
              {toast}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
