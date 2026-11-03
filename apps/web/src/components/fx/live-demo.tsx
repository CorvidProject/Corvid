"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import live from "@fixtures/live-agent.json";
import trending from "@fixtures/tokens-trending.json";
import security from "@fixtures/token-security.json";
import memescope from "@fixtures/memescope.json";

// Panel demo "Not a demo. This is the product, running." — data dari fixture (bentuk sama dengan API).
const DOT = { fontFamily: "var(--font-dotmatrix), ui-monospace, monospace", letterSpacing: "0.02em" } as const;
const GREEN = "#3DD68C";
const RED = "#FF5C5C";
const MUTE = "#8E9AA8";

function Panel({ title, sub, badge, badgeColor = MUTE, extra, children, className = "" }: { title: string; sub: string; badge?: string; badgeColor?: string; extra?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <section className={`relative min-w-0 flex flex-col ${className}`} style={{ background: "#13171B", border: "1px solid rgba(255,255,255,0.08)" }}>
      <header className="flex items-center gap-2 px-2.5 h-7 shrink-0 min-w-0 overflow-hidden" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <span style={{ ...DOT, color: "var(--v2-accent-text)", fontSize: 13 }}>◆</span>
        <span className="uppercase shrink-0" style={{ ...DOT, color: "#fff", fontSize: 17 }}>{title}</span>
        <span className="uppercase truncate" style={{ ...DOT, color: MUTE, fontSize: 14 }}>· {sub}</span>
        <span className="ml-auto flex items-center gap-2 shrink-0">
          {extra}
          {badge && (
            <span className="uppercase px-1.5" style={{ ...DOT, fontSize: 13, color: badgeColor, border: `1px solid ${badgeColor}`, lineHeight: "16px" }}>
              {badge}
            </span>
          )}
        </span>
      </header>
      {children}
    </section>
  );
}

function Torus() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const pts: number[][] = [];
    const R = 1, r = 0.46;
    for (let i = 0; i < 70; i++)
      for (let j = 0; j < 34; j++) {
        const u = (i / 70) * Math.PI * 2, v = (j / 34) * Math.PI * 2;
        pts.push([(R + r * Math.cos(v)) * Math.cos(u), (R + r * Math.cos(v)) * Math.sin(u), r * Math.sin(v)]);
      }
    let raf = 0, visible = true, w = 0, h = 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const resize = () => {
      const b = cv.getBoundingClientRect();
      const d = Math.min(window.devicePixelRatio || 1, 2);
      w = b.width; h = b.height;
      cv.width = Math.max(1, w * d); cv.height = Math.max(1, h * d);
      ctx.setTransform(d, 0, 0, d, 0, 0);
    };
    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      const ax = 1.1, ay = t * 0.0003;
      const cx = Math.cos(ax), sx = Math.sin(ax), cy = Math.cos(ay), sy = Math.sin(ay);
      const s = Math.min(w, h) * 0.3;
      for (const [x, y, z] of pts) {
        const x1 = x * cy - y * sy, y0 = x * sy + y * cy;
        const y1 = y0 * cx - z * sx, z1 = y0 * sx + z * cx;
        const x2 = x1, z2 = z1;
        const k = (z2 + 1.6) / 3.2;
        ctx.fillStyle = `rgba(255,255,255,${0.15 + 0.75 * k})`;
        ctx.fillRect(w / 2 + x2 * s, h / 2 + y1 * s, 1.4, 1.4);
      }
    };
    const loop = (t: number) => {
      if (visible && !document.hidden) draw(t);
      raf = requestAnimationFrame(loop);
    };
    resize();
    if (reduced) draw(4000);
    else raf = requestAnimationFrame(loop);
    const ro = new ResizeObserver(() => { resize(); if (reduced) draw(4000); });
    ro.observe(cv);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(cv);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full" aria-hidden="true" />;
}

const STEP_COLOR: Record<string, string> = { market: "#fff", safety: "#fff", position: "#fff", decision: GREEN, risk: RED, router: MUTE, sign: MUTE };
function stepText(s: { step: string; values: Record<string, unknown> }) {
  const v = s.values as Record<string, string | number>;
  switch (s.step) {
    case "market": return `$${v.price}`;
    case "safety": return String(v.checked ?? "checked");
    case "position": return String(v.holding ?? "none");
    case "decision": return `${v.conviction} / ${v.floor}`;
    case "risk": return "blocked";
    default: return "";
  }
}

function AgentPanel() {
  const a = live.agent;
  const steps = a.lastRun.steps as { step: string; outcome: string; values: Record<string, unknown> }[];
  const all = [...steps.map((s) => s.step), "router", "sign"].slice(0, 7);
  return (
    <Panel title="agent" sub={`${a.name.toLowerCase()} · $${a.tokenSymbol.toLowerCase()}`} badge={`paused · pass ${a.lastRun.n} blocked`} badgeColor="#FFC24D" className="lg:h-full min-h-[420px]">
      <div className="relative flex-1 min-h-0 demo-agent-grid">
        <div className="relative z-10 p-3 flex flex-col gap-3 uppercase" style={DOT}>
          <span style={{ color: MUTE, fontSize: 12 }}>model inputs · {all.length + 1} steps</span>
          {all.map((k, i) => {
            const st = steps.find((s) => s.step === k);
            const reached = !!st;
            const c = STEP_COLOR[k] ?? "#fff";
            return (
              <div key={k} className="flex flex-col gap-1">
                <div className="flex items-center gap-2" style={{ fontSize: 14 }}>
                  <span className="px-1.5" style={{ background: reached ? c : "transparent", color: reached ? "#13171B" : MUTE, border: reached ? "none" : "1px solid #3a3d3e", fontSize: 12, lineHeight: "16px" }}>{k}</span>
                  <span style={{ color: reached ? "#fff" : MUTE }}>{reached && st ? stepText(st) : "not reached"}</span>
                </div>
                <div style={{ height: 2, background: reached ? c : "#3a3d3e", opacity: reached ? 0.9 : 0.5, width: `${60 + ((i * 17) % 40)}%` }} />
              </div>
            );
          })}
        </div>
        <div className="relative min-h-[300px]">
          <div className="absolute top-3 left-0 right-0 text-center uppercase" style={{ ...DOT, fontSize: 14, color: "#fff" }}>
            conviction {a.lastRun.steps[3] ? (a.lastRun.steps[3].values as { conviction: number }).conviction : 0} · floor {a.floor} · edge +30
          </div>
          <Torus />
        </div>
        <div className="relative z-10 p-3 flex flex-col gap-2 uppercase" style={DOT}>
          <div className="flex justify-between" style={{ color: MUTE, fontSize: 12 }}><span>passes</span><span>newest first</span></div>
          {a.recentRuns.slice(0, 4).map((r: { n: number; ended: string; steps?: unknown[] }) => (
            <div key={r.n} className="px-2 py-1.5" style={{ border: `1px solid ${r.ended === "blocked" ? RED : "#3a3d3e"}` }}>
              <div className="flex justify-between items-center">
                <span className="px-1.5" style={{ background: RED, color: "#000", fontSize: 12 }}>{r.ended}</span>
                <span style={{ color: RED, fontSize: 15 }}>#{r.n}</span>
              </div>
              <div style={{ color: MUTE, fontSize: 12, marginTop: 4 }}>5/8 steps · conv 100</div>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}

function RugPanel() {
  const list = trending.tokens.slice(0, 5);
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % list.length), 7000);
    return () => clearInterval(t);
  }, [list.length]);
  const tk = list[i];
  const checks: { label: string; state: string; value?: string }[] = security.groups.flatMap((g) => g.checks as { label: string; state: string; value?: string }[]);
  const shown = checks.filter((c) => c.state !== "unknown").slice(0, 10);
  return (
    <Panel
      title="rugcheck"
      sub={`$${tk.symbol.toLowerCase()} · trending on solana`}
      badge={`${security.passed}/${security.total} passed`}
      badgeColor="#FFC24D"
      extra={
        <button className="uppercase px-1.5" style={{ ...DOT, fontSize: 13, color: "#fff", border: "1px solid #fff", lineHeight: "16px" }} onClick={() => setI((x) => (x + 1) % list.length)}>
          next ›
        </button>
      }
    >
      <div className="p-3 font-sans text-[13px]">
        <div className="flex items-center gap-3 mb-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={tk.image ?? ""} alt="" width={32} height={32} className="rounded-full bg-[#161616]" />
          <div className="min-w-0">
            <div className="font-semibold text-white">{tk.symbol}</div>
            <div className="font-mono text-[10px]" style={{ color: MUTE }}>MCAP ${(tk.marketCap / 1e6).toFixed(2)}M · LIQ ${(tk.liquidity / 1e3).toFixed(1)}K</div>
          </div>
          <span className="ml-auto font-mono text-[12px]" style={{ color: tk.change24h >= 0 ? GREEN : RED }}>{tk.change24h >= 0 ? "+" : ""}{tk.change24h}%</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 min-h-[150px]">
          {shown.map((c) => (
            <div key={c.label} className="flex items-center gap-2 min-w-0">
              <span style={{ color: c.state === "pass" ? GREEN : RED }}>{c.state === "pass" ? "✓" : "✕"}</span>
              <span className="truncate" style={{ color: "#c9c9c9" }}>{c.label}</span>
              {"value" in c && c.value ? <span className="ml-auto font-mono text-[12px]" style={{ color: c.state === "pass" ? GREEN : RED }}>{c.value}</span> : null}
            </div>
          ))}
        </div>
        <a href="/application/rugcheck" className="inline-block mt-3 uppercase" style={{ ...DOT, fontSize: 14, color: "var(--v2-accent)" }}>full report ›</a>
      </div>
    </Panel>
  );
}

function MemePanel() {
  const items = memescope.new.slice(0, 6);
  return (
    <Panel title="memescope" sub="newest pump.fun launches" badge="live" badgeColor={GREEN} className="min-h-[260px]">
      <div className="flex-1 min-h-0 overflow-hidden p-1.5">
        {items.map((m) => (
          <div key={m.mint} className="flex items-center gap-3 px-1.5 py-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={m.image ?? ""} alt="" width={26} height={26} className="rounded-full bg-[#161616] shrink-0" />
            <div className="min-w-0 flex-1">
              <div className="uppercase truncate" style={{ ...DOT, fontSize: 15, color: "#fff" }}>{m.symbol}</div>
              <div className="h-[3px] mt-1.5" style={{ background: "#161616" }}>
                <div style={{ width: `${Math.min(100, Math.max(2, m.progress))}%`, height: "100%", background: "var(--v2-accent)" }} />
              </div>
            </div>
            <div className="text-right font-mono text-[12px]" style={{ color: "#fff" }}>
              ${m.marketCapUsd >= 1000 ? (m.marketCapUsd / 1000).toFixed(1) + "K" : m.marketCapUsd.toFixed(2)}
              <div style={{ color: MUTE, fontSize: 10 }}>1d</div>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

export function LiveDemo() {
  return (
    <div className="mt-10 grid gap-2 grid-cols-1 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:h-[640px]">
      <AgentPanel />
      <div className="grid gap-2 grid-rows-[auto_minmax(0,1fr)] min-w-0 min-h-0">
        <RugPanel />
        <MemePanel />
      </div>
    </div>
  );
}
