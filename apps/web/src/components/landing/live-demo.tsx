"use client";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import live from "@/data/live-agent.json";
import trending from "@/data/tokens-trending.json";
import security from "@/data/token-security.json";
import memescope from "@/data/memescope.json";

// Panel demo "Not a demo. This is the product, running." — data dari fixture (bentuk sama dengan API).
const DOT = {
  fontFamily: "var(--font-dotmatrix), ui-monospace, monospace",
  letterSpacing: "0.02em",
} as const;
const GREEN = "#3DD68C";
const RED = "#FF5C5C";
const MUTE = "#8E9AA8";

function Panel({
  title,
  sub,
  badge,
  badgeColor = MUTE,
  extra,
  children,
  className = "",
}: {
  title: string;
  sub: string;
  badge?: string;
  badgeColor?: string;
  extra?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`relative min-w-0 flex flex-col ${className}`}
      style={{
        background: "#13171B",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <header
        className="flex items-center gap-2 px-2.5 h-7 shrink-0 min-w-0 overflow-hidden"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        <span style={{ ...DOT, color: "var(--v2-accent-text)", fontSize: 13 }}>
          ◆
        </span>
        <span
          className="uppercase shrink-0"
          style={{ ...DOT, color: "#fff", fontSize: 17 }}
        >
          {title}
        </span>
        <span
          className="uppercase truncate"
          style={{ ...DOT, color: MUTE, fontSize: 14 }}
        >
          · {sub}
        </span>
        <span className="ml-auto flex items-center gap-2 shrink-0">
          {extra}
          {badge && (
            <span
              className="uppercase px-1.5"
              style={{
                ...DOT,
                fontSize: 13,
                color: badgeColor,
                border: `1px solid ${badgeColor}`,
                lineHeight: "16px",
              }}
            >
              {badge}
            </span>
          )}
        </span>
      </header>
      {children}
    </section>
  );
}

type Step = {
  step: string;
  outcome: string;
  detail?: string;
  values: Record<string, unknown>;
};
type Run = { n: number; ended: string; at?: string; steps: Step[] };

const ORDER = [
  "market",
  "safety",
  "position",
  "decision",
  "risk",
  "router",
  "sign",
  "chain",
] as const;
// Warna langkah: turunan palet Corvid (Casper) + hijau/merah semantik.
const RGB: Record<string, number[]> = {
  market: [170, 187, 197],
  safety: [192, 205, 213],
  position: [238, 241, 243],
  decision: [61, 214, 140],
  risk: [201, 211, 217],
  router: [170, 187, 197],
  sign: [192, 205, 213],
  chain: [238, 241, 243],
};
const BAD = [255, 92, 92];
const GOLD = [255, 194, 77];
const rgba = (c: number[], a: number) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;
const DIM = "#8E979B";
const MID = "#AABBC5";
const TXT = "#EEF1F3";

function Torus({
  boxes,
  lit,
  running,
  acted,
  getRight,
}: {
  boxes: { current: (HTMLElement | null)[] };
  lit: string[];
  running: boolean;
  acted: boolean;
  getRight: () => HTMLElement | null;
}) {
  const ref = useRef<HTMLCanvasElement>(null);
  const st = useRef({ lit, running, acted, burstAt: -1e9 });
  st.current.lit = lit;
  st.current.running = running;
  st.current.acted = acted;
  const iv = useRef({
    yaw: 0,
    tilt: 0,
    vYaw: 0,
    px: -1e4,
    py: -1e4,
    down: false,
    lx: 0,
    ly: 0,
    moved: 0,
  });
  useEffect(() => {
    const cv = ref.current;
    const wrap = cv?.parentElement;
    if (!cv || !wrap) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const pts: { u: number; v: number; seed: number }[] = [];
    for (let i = 0; i < 150; i++)
      for (let j = 0; j < 46; j++) {
        const seed =
          Math.abs(43758.5453 * Math.sin(12.9898 * i + 78.233 * j)) % 1;
        pts.push({
          u: (i / 150) * Math.PI * 2 + (j % 2) * (Math.PI / 150),
          v: (j / 46) * Math.PI * 2,
          seed,
        });
      }
    let w = 0,
      h = 0,
      raf = 0,
      visible = true;
    let anchors: { x: number; y: number }[] = [];
    let right: { x: number; y: number } | null = null;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const t0 = performance.now();
    const measure = () => {
      const d = Math.min(window.devicePixelRatio || 1, 2);
      const b = cv.getBoundingClientRect();
      w = b.width;
      h = b.height;
      cv.width = Math.round(w * d);
      cv.height = Math.round(h * d);
      ctx.setTransform(d, 0, 0, d, 0, 0);
      anchors = boxes.current.map((e) => {
        if (!e) return { x: 0, y: 0 };
        const r = e.getBoundingClientRect();
        return { x: r.right - b.left, y: r.top - b.top + 11 };
      });
      const r = getRight()?.getBoundingClientRect();
      right = r ? { x: r.left - b.left, y: r.top - b.top + 40 } : null;
    };
    const draw = (now: number) => {
      const t = (now - t0) / 1000;
      const s = st.current;
      const i = iv.current;
      ctx.clearRect(0, 0, w, h);
      const bx = anchors.some((a) => a.x)
        ? Math.max(...anchors.map((a) => a.x))
        : 0;
      const fx = right?.x ?? w;
      const cx = (bx + fx) / 2;
      const cy = (h - 40) * 0.54;
      const sc = Math.min((fx - bx) * 0.3, (h - 40) * 0.36);
      if (!i.down && Math.abs(i.vYaw) > 5e-4) {
        i.yaw += i.vYaw;
        i.vYaw *= 0.95;
      }
      const tilt = 0.98 + i.tilt;
      const rot = (s.running ? 0.14 * t : 0.03 * t) + i.yaw;
      const cT = Math.cos(tilt),
        sT = Math.sin(tilt);
      const burst = Math.max(0, 1 - (now - s.burstAt) / 2600);
      const proj = (u: number, v: number, extra = 0) => {
        const r = 0.46 + extra;
        const x = (1 + r * Math.cos(v)) * Math.cos(u);
        const y = (1 + r * Math.cos(v)) * Math.sin(u);
        const z = r * Math.sin(v);
        const zz = y * sT + z * cT;
        const p = 3.4 / (3.4 - zz);
        return {
          x: cx + x * sc * p,
          y: cy + (y * cT - z * sT) * sc * p,
          z: zz,
          p,
        };
      };
      for (const q of pts) {
        const u = q.u + rot;
        const P = proj(u, q.v);
        const depth = (P.z + 1.4) / 2.8;
        const wave =
          Math.sin(3 * u + 0.6 * t) * Math.sin(2 * q.v - 0.45 * t) +
          (s.acted ? 0.25 : 0);
        const hot = wave > (s.running ? 0.55 : 0.85);
        const green =
          !hot &&
          Math.sin(2 * u - 0.3 * t + 1.7) * Math.cos(3 * q.v + 0.2 * t) > 0.82;
        const tw = 0.75 + 0.25 * Math.sin(2 * t + 40 * q.seed);
        const size = (0.8 + 1.2 * depth) * P.p;
        let col = [205, 215, 222];
        let a = (0.12 + 0.62 * depth) * tw;
        if (hot) {
          col = wave > 0.85 ? [238, 241, 243] : [170, 187, 197];
          a = (0.35 + 0.6 * depth) * tw;
        } else if (green) {
          col = [61, 214, 140];
          a = (0.25 + 0.55 * depth) * tw;
        }
        const dx = P.x - i.px,
          dy = P.y - i.py;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 80) {
          const k = 1 - dist / 80;
          col = col.map((c, n) => Math.round(c + (GOLD[n] - c) * k));
          a = Math.min(1, a + 0.7 * k);
          const push = (k * k * 10) / Math.max(dist, 1);
          P.x += dx * push;
          P.y += dy * push;
        }
        ctx.fillStyle = rgba(col, a);
        ctx.fillRect(P.x - size / 2, P.y - size / 2, size, size);
        if (
          ((hot && wave > 0.8 && q.seed > 0.55) ||
            (burst > 0 && q.seed > 1 - 0.22 * burst)) &&
          Math.cos(q.v) > 0.1
        ) {
          const ex =
            0.1 + 0.08 * Math.sin(3 * t + 9 * q.seed) + 0.35 * burst * q.seed;
          const E = proj(u, q.v, ex);
          ctx.strokeStyle = rgba(col, (0.18 + 0.35 * burst) * depth);
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(P.x, P.y);
          ctx.lineTo(E.x, E.y);
          ctx.stroke();
        }
      }
      anchors.forEach((an, k) => {
        if (!an.x) return;
        const state = s.lit[k];
        const col = state === "stopped" ? BAD : RGB[ORDER[k]];
        const T = proj(Math.PI - (k - 3.5) * 0.26, 0.15 * Math.PI);
        const mx = an.x + (T.x - an.x) * 0.45;
        for (let o = -1; o <= 1; o++) {
          const off = 6 * o;
          ctx.strokeStyle =
            state === "absent"
              ? "rgba(255,255,255,0.06)"
              : rgba(col, o === 0 ? 0.6 : 0.18);
          ctx.lineWidth = o === 0 ? 1.1 : 0.7;
          ctx.beginPath();
          ctx.moveTo(an.x + 6, an.y);
          ctx.bezierCurveTo(mx, an.y + off, mx, T.y + 2 * off, T.x, T.y + off);
          ctx.stroke();
        }
        if (state !== "absent") {
          ctx.fillStyle = rgba(col, 1);
          ctx.shadowColor = rgba(col, 0.9);
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.arc(T.x, T.y, 2.6, 0, Math.PI * 2);
          ctx.fill();
          if (s.running) {
            const f = (0.45 * t + 0.137 * k) % 1,
              g = 1 - f;
            const px =
              g * g * g * (an.x + 6) + 3 * g * g * f * mx + 3 * g * f * f * mx + f * f * f * T.x;
            const py =
              g * g * g * an.y + 3 * g * g * f * an.y + 3 * g * f * f * T.y + f * f * f * T.y;
            ctx.beginPath();
            ctx.arc(px, py, 2.2, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.shadowBlur = 0;
        }
      });
      if (right) {
        const E = proj(0, 0.15 * Math.PI);
        const mx = E.x + (right.x - E.x) * 0.5;
        ctx.strokeStyle = s.acted ? rgba(GOLD, 0.85) : rgba([170, 187, 197], 0.35);
        ctx.lineWidth = s.acted ? 1.8 : 1;
        if (s.acted) {
          ctx.shadowColor = rgba(GOLD, 0.9);
          ctx.shadowBlur = 10;
        }
        ctx.beginPath();
        ctx.moveTo(E.x, E.y);
        ctx.bezierCurveTo(mx, E.y, mx, right.y, right.x - 4, right.y);
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
    };
    const loop = (t: number) => {
      if (visible && !document.hidden) draw(t);
      raf = requestAnimationFrame(loop);
    };
    measure();
    if (reduced) draw(t0 + 4000);
    else raf = requestAnimationFrame(loop);
    const ro = new ResizeObserver(() => {
      measure();
      if (reduced) draw(t0 + 4000);
    });
    ro.observe(wrap);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(cv);
    const down = (e: PointerEvent) => {
      const s = iv.current;
      s.down = true;
      s.moved = 0;
      s.lx = e.clientX;
      s.ly = e.clientY;
      s.vYaw = 0;
    };
    const move = (e: PointerEvent) => {
      const s = iv.current;
      const b = cv.getBoundingClientRect();
      s.px = e.clientX - b.left;
      s.py = e.clientY - b.top;
      if (!s.down) return;
      const dx = e.clientX - s.lx,
        dy = e.clientY - s.ly;
      s.lx = e.clientX;
      s.ly = e.clientY;
      s.moved += Math.abs(dx) + Math.abs(dy);
      s.yaw += 0.012 * dx;
      s.vYaw = 0.012 * dx;
      s.tilt = Math.max(-0.55, Math.min(0.45, s.tilt + 0.006 * dy));
    };
    const up = () => {
      const s = iv.current;
      if (s.down && s.moved < 4) st.current.burstAt = performance.now();
      s.down = false;
    };
    const leave = () => {
      const s = iv.current;
      s.down = false;
      s.px = -1e4;
      s.py = -1e4;
    };
    wrap.addEventListener("pointerdown", down);
    wrap.addEventListener("pointermove", move);
    wrap.addEventListener("pointerup", up);
    wrap.addEventListener("pointerleave", leave);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      wrap.removeEventListener("pointerdown", down);
      wrap.removeEventListener("pointermove", move);
      wrap.removeEventListener("pointerup", up);
      wrap.removeEventListener("pointerleave", leave);
    };
  }, [boxes, getRight]);
  return (
    <canvas
      ref={ref}
      className="absolute left-0 right-0 top-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

function Spark({ values, color }: { values: number[]; color: string }) {
  const a = values.filter((v) => Number.isFinite(v));
  if (a.length < 2)
    return <div style={{ height: 14, borderBottom: "1px dashed #3A3D3E" }} />;
  const lo = Math.min(...a);
  const sp = Math.max(...a) - lo || 1;
  const d = a
    .map(
      (v, i) =>
        `${i ? "L" : "M"}${(i / (a.length - 1)) * 100},${12 - ((v - lo) / sp) * 10}`,
    )
    .join(" ");
  return (
    <svg
      viewBox="0 0 100 14"
      preserveAspectRatio="none"
      className="w-full block"
      style={{ height: 14 }}
    >
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={1.3}
        vectorEffect="non-scaling-stroke"
        style={{ filter: `drop-shadow(0 0 2px ${color})` }}
      />
    </svg>
  );
}

function stepMain(s?: Step): { main: string; sub?: string } {
  if (!s) return { main: "not reached" };
  const v = s.values as Record<string, string | number>;
  switch (s.step) {
    case "market":
      return {
        main: v.price !== undefined ? `$${Number(v.price).toFixed(4)}` : "read",
        sub:
          v.move_pct !== undefined
            ? `${Number(v.move_pct) >= 0 ? "+" : ""}${v.move_pct}%`
            : undefined,
      };
    case "safety":
      return {
        main: v.checked === "no" ? "unchecked" : "checked",
        sub: v.mint ? `mint ${v.mint}` : undefined,
      };
    case "position":
      return { main: String(v.holding ?? "none") };
    case "decision":
      return {
        main: `${v.conviction} / ${v.floor ?? "?"}`,
        sub: v.verdict ? String(v.verdict) : undefined,
      };
    case "risk":
      return v.reason !== undefined
        ? { main: "blocked", sub: String(v.reason).slice(0, 18) }
        : { main: "cleared", sub: "size" };
    case "router":
      return {
        main: v.impact_pct !== undefined ? `${v.impact_pct}% impact` : "routed",
        sub: v.slippage_bps !== undefined ? `${v.slippage_bps} bps` : undefined,
      };
    case "sign":
      return { main: String(v.wallet ?? "signed") };
    case "chain":
      return { main: v.size !== undefined ? `${v.size} sent` : "landed" };
    default:
      return { main: s.step };
  }
}

const HINT: Record<string, string> = {
  market: "Reads the token's price, liquidity and volume every minute.",
  safety: "Checks the contract: mint and freeze authority, transfer hooks, fees.",
  position: "Looks at what the agent already holds, so it does not double up.",
  decision: "Scores the setup and buys only when conviction clears the floor.",
  risk: "Holds the trade to its per-trade and daily limits.",
  router: "Finds the best route for the swap and checks the price impact.",
  sign: "Signs the swap with the agent's own wallet.",
  chain: "Sends it on-chain and waits for it to land.",
};

const CYCLE = 14; // tick (700 ms) per pass
function buildRun(base: Run, n: number, buy: boolean, upto: number): Run {
  const j = Math.sin(n * 12.9898) * 0.02;
  const mk = (step: string, values: Record<string, unknown>): Step => ({
    step,
    detail: "",
    values,
    outcome: "passed",
  });
  const m = base.steps[0].values as { price: number; move_pct: number };
  const dv = base.steps[3].values as Record<string, unknown>;
  const all: Step[] = [
    mk("market", {
      ...m,
      price: +(m.price * (1 + j)).toFixed(6),
      move_pct: +(j * 100).toFixed(2),
    }),
    base.steps[1],
    base.steps[2],
    {
      ...base.steps[3],
      values: { ...dv, conviction: buy ? 100 : 96 + (n % 5) },
    },
    buy ? mk("risk", { mode: "dry", requested: 0.5 }) : { ...base.steps[4] },
    ...(buy
      ? [
          mk("router", { impact_pct: 0.12, slippage_bps: 50 }),
          mk("sign", { wallet: "agent wallet" }),
          mk("chain", { size: "0.5 SOL" }),
        ]
      : []),
  ];
  return { n, ended: buy ? "bought" : "blocked", steps: all.slice(0, upto) };
}

function AgentPanel() {
  const a = live.agent;
  const base = a.lastRun as unknown as Run;
  const history = a.recentRuns as unknown as Run[];
  const boxes = useRef<(HTMLElement | null)[]>([]);
  const rightRef = useRef<HTMLDivElement | null>(null);
  const getRight = useCallback(() => rightRef.current, []);
  const [hover, setHover] = useState<{ i: number; top: number } | null>(null);
  const [tick, setTick] = useState(-1);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setTick((x) => x + 1), 700);
    return () => clearInterval(id);
  }, []);
  const isLive = tick >= 0;
  const cyc = isLive ? Math.floor(tick / CYCLE) : 0;
  const pos = isLive ? tick % CYCLE : 0;
  const isBuy = (c: number) => c % 3 === 2;
  const curN = base.n + 1 + cyc;
  const buy = isBuy(cyc);
  const total = buy ? 8 : 5;
  const revealed = Math.min(pos + 1, total);
  const done = pos + 1 >= total;
  const running = isLive && !done;
  const acted = isLive && buy && done && pos < total + 4;
  const finished: Run[] = [];
  for (let c = 0; c < cyc; c++)
    finished.push(buildRun(base, base.n + 1 + c, isBuy(c), isBuy(c) ? 8 : 5));
  const last: Run = isLive ? buildRun(base, curN, buy, revealed) : base;
  const recent = [
    ...history,
    base,
    ...finished,
    ...(isLive && done ? [last] : []),
  ];
  const lit = ORDER.map(
    (k) => last.steps.find((s) => s.step === k)?.outcome ?? "absent",
  );
  const dec = last.steps.find((s) => s.step === "decision")?.values as
    | { conviction?: number; floor?: number }
    | undefined;
  const conv = dec?.conviction ?? 0;
  const floor = dec?.floor ?? a.floor;
  const edge = conv - floor;
  const nextIn = Math.round(Math.max(0, CYCLE - 1 - pos) * 0.7);
  const badge = !isLive
    ? `paused · pass ${last.n} blocked`
    : running
      ? `running · pass ${last.n}`
      : `${last.ended} · pass ${last.n}`;
  const badgeColor =
    isLive && (running || last.ended === "bought") ? GREEN : "#FFC24D";
  const newest = [...recent].reverse().slice(0, 11);
  const bars = recent.slice(-28);
  return (
    <Panel
      title="agent"
      sub={`${a.name.toLowerCase()} · $${a.tokenSymbol.toLowerCase()}`}
      badge={badge}
      badgeColor={badgeColor}
      className="lg:h-full cv-agent-panel"
    >
      <div
        className="relative flex-1 cv-agent-body overflow-hidden select-none cursor-grab active:cursor-grabbing"
        style={{
          background:
            "radial-gradient(ellipse 55% 60% at 50% 55%, rgba(var(--v2-accent-rgb),0.26) 0%, rgba(var(--v2-accent-rgb),0.08) 45%, transparent 72%), #13171B",
          touchAction: "pan-y",
        }}
      >
        <Torus
          boxes={boxes}
          lit={lit}
          running={running}
          acted={acted}
          getRight={getRight}
        />
        {isLive && (
          <div
            className="absolute z-10 uppercase"
            style={{ ...DOT, fontSize: 14, color: DIM, right: 230, top: 48 }}
          >
            {running
              ? `watching $${a.tokenSymbol.toLowerCase()} · t-${Math.round((total - revealed) * 0.7)}s`
              : `next pass in ${nextIn}s`}
          </div>
        )}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-3 z-10 uppercase whitespace-nowrap"
          style={{ ...DOT, fontSize: 16, color: MID }}
        >
          conviction <span style={{ color: TXT }}>{conv}</span> · floor{" "}
          <span style={{ color: TXT }}>{floor}</span> · edge{" "}
          <span style={{ color: edge >= 0 ? GREEN : RED }}>
            {edge >= 0 ? "+" : ""}
            {edge}
          </span>
        </div>
        <div className="absolute left-0 top-0 bottom-10 cv-agent-left flex flex-col justify-between py-3 pl-3 z-10">
          <div
            className="uppercase"
            style={{ ...DOT, fontSize: 14, color: DIM }}
          >
            Model inputs · 8 steps
          </div>
          {ORDER.map((k, i) => {
            const s = last.steps.find((x) => x.step === k);
            const state = lit[i];
            const col = state === "stopped" ? BAD : RGB[k];
            const m = stepMain(s);
            const series = recent.map((r) => {
              const f = r.steps.find((x) => x.step === k);
              if (!f) return 0;
              const v = f.values as Record<string, number | string>;
              if (k === "market") return Number(v.price);
              if (k === "decision") return Number(v.conviction);
              if (k === "safety") return v.checked === "no" ? 0.5 : 1;
              if (k === "position")
                return v.holding && v.holding !== "none" ? 1 : 0.5;
              return 1;
            });
            return (
              <div
                key={k}
                ref={(e) => {
                  boxes.current[i] = e;
                }}
                className="pr-2 min-w-0 relative cursor-default"
                onMouseEnter={(e) =>
                  setHover({ i, top: e.currentTarget.offsetTop })
                }
                onMouseLeave={() => setHover(null)}
              >
                <div className="flex items-baseline gap-2 min-w-0">
                  <span
                    className="uppercase px-1 shrink-0"
                    style={{
                      ...DOT,
                      fontSize: 13,
                      color: state === "absent" ? DIM : "#1B1B1B",
                      background:
                        state === "absent" ? "transparent" : rgba(col, 0.95),
                      border:
                        state === "absent" ? "1px solid #3A3D3E" : undefined,
                    }}
                  >
                    {k}
                  </span>
                  <span
                    className="truncate"
                    style={{
                      ...DOT,
                      fontSize: 16,
                      color: state === "absent" ? DIM : rgba(col, 1),
                    }}
                  >
                    {m.main}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="flex-1 min-w-0"
                    style={{ opacity: state === "absent" ? 0.3 : 1 }}
                  >
                    <Spark values={series} color={rgba(col, 1)} />
                  </div>
                  {m.sub && (
                    <span
                      className="truncate cv-sub"
                      style={{ ...DOT, fontSize: 12.5, color: DIM }}
                    >
                      {m.sub}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {hover && (
          <div
            className="absolute z-20 cv-agent-hint px-3 py-2 pointer-events-none"
            style={{
              top: Math.max(8, hover.top - 6),
              background: "rgba(27,27,27,0.96)",
              border: `1px solid ${rgba(RGB[ORDER[hover.i]], 0.7)}`,
            }}
          >
            <div
              className="uppercase"
              style={{ ...DOT, fontSize: 15, color: MID }}
            >
              {ORDER[hover.i]} ·{" "}
              {lit[hover.i] === "absent" ? "not reached" : lit[hover.i]}
            </div>
            <div
              className="mt-1 text-[11.5px] leading-snug"
              style={{ color: MID }}
            >
              {last.steps.find((s) => s.step === ORDER[hover.i])?.detail ||
                HINT[ORDER[hover.i]]}
            </div>
          </div>
        )}
        <div
          ref={rightRef}
          className="absolute right-0 top-0 bottom-10 cv-agent-right py-3 pr-3 z-10 flex flex-col min-h-0"
        >
          <div
            className="flex items-center uppercase mb-1.5"
            style={{ ...DOT, fontSize: 14, color: DIM }}
          >
            <span>Passes</span>
            <span className="ml-auto">newest first</span>
          </div>
          <div className="space-y-1 overflow-hidden flex-1 min-h-0">
            {newest.map((r) => {
              const c = r.ended === "blocked" ? RED : GREEN;
              const cv = (
                r.steps.find((s) => s.step === "decision")?.values as
                  | { conviction?: number }
                  | undefined
              )?.conviction;
              return (
                <div
                  key={r.n}
                  className="px-2 py-1"
                  style={{
                    border: `1px solid ${c}`,
                    background: "rgba(255,255,255,0.02)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="uppercase px-1"
                      style={{
                        ...DOT,
                        fontSize: 13,
                        color: "#1B1B1B",
                        background: c,
                      }}
                    >
                      {r.ended}
                    </span>
                    <span
                      className="ml-auto"
                      style={{ ...DOT, fontSize: 17, color: c }}
                    >
                      #{r.n}
                    </span>
                  </div>
                  <div style={{ ...DOT, fontSize: 13, color: DIM }}>
                    {r.steps.length}/8 steps · conv {cv ?? 0}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="absolute left-0 right-0 bottom-0 h-10 flex items-end gap-3 px-3 pb-1 z-10"
          style={{ borderTop: "1px solid #3A3D3E" }}
        >
          <span
            className="uppercase shrink-0 self-center cv-agent-foot-hint"
            style={{ ...DOT, fontSize: 13, color: DIM }}
          >
            drag to turn · click for needles · hover a step
          </span>
          <div className="flex items-end cv-bars h-full flex-1 min-w-0 justify-end pt-1.5">
            {bars.map((r) => (
              <span
                key={r.n}
                title={`#${r.n} ${r.ended} · ${r.steps.length}/8`}
                className="cv-bar"
                style={{
                  height: `${Math.max(12, (r.steps.length / 8) * 100)}%`,
                  background:
                    r.ended === "blocked"
                      ? "rgba(255,92,92,0.9)"
                      : "rgba(61,214,140,0.9)",
                }}
              />
            ))}
          </div>
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
  const checks: { label: string; state: string; value?: string }[] =
    security.groups.flatMap(
      (g) => g.checks as { label: string; state: string; value?: string }[],
    );
  const shown = checks.filter((c) => c.state !== "unknown").slice(0, 10);
  return (
    <Panel
      title="rugcheck"
      sub={`$${tk.symbol.toLowerCase()} · trending on solana`}
      badge={`${security.passed}/${security.total} passed`}
      badgeColor="#FFC24D"
      extra={
        <button
          className="uppercase px-1.5"
          style={{
            ...DOT,
            fontSize: 13,
            color: "#fff",
            border: "1px solid #fff",
            lineHeight: "16px",
          }}
          onClick={() => setI((x) => (x + 1) % list.length)}
        >
          next ›
        </button>
      }
    >
      <div className="p-3 font-sans text-[13px]">
        <div className="flex items-center gap-3 mb-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={tk.image ?? ""}
            alt=""
            width={32}
            height={32}
            className="rounded-full bg-[#161616]"
          />
          <div className="min-w-0">
            <div className="font-semibold text-white">{tk.symbol}</div>
            <div className="font-mono text-[10px]" style={{ color: MUTE }}>
              MCAP ${(tk.marketCap / 1e6).toFixed(2)}M · LIQ $
              {(tk.liquidity / 1e3).toFixed(1)}K
            </div>
          </div>
          <span
            className="ml-auto font-mono text-[12px]"
            style={{ color: tk.change24h >= 0 ? GREEN : RED }}
          >
            {tk.change24h >= 0 ? "+" : ""}
            {tk.change24h}%
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 cv-rug-grid">
          {shown.map((c) => (
            <div key={c.label} className="flex items-center gap-2 min-w-0">
              <span style={{ color: c.state === "pass" ? GREEN : RED }}>
                {c.state === "pass" ? "✓" : "✕"}
              </span>
              <span className="truncate" style={{ color: "#c9c9c9" }}>
                {c.label}
              </span>
              {"value" in c && c.value ? (
                <span
                  className="ml-auto font-mono text-[12px]"
                  style={{ color: c.state === "pass" ? GREEN : RED }}
                >
                  {c.value}
                </span>
              ) : null}
            </div>
          ))}
        </div>
        <a
          href="/application/rugcheck"
          className="inline-block mt-3 uppercase"
          style={{ ...DOT, fontSize: 14, color: "var(--v2-accent)" }}
        >
          full report ›
        </a>
      </div>
    </Panel>
  );
}

function MemePanel() {
  const items = memescope.new.slice(0, 6);
  return (
    <Panel
      title="memescope"
      sub="newest pump.fun launches"
      badge="live"
      badgeColor={GREEN}
      className="cv-meme-panel"
    >
      <div className="flex-1 min-h-0 overflow-hidden p-1.5">
        {items.map((m) => (
          <div key={m.mint} className="flex items-center gap-3 px-1.5 py-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={m.image ?? ""}
              alt=""
              width={26}
              height={26}
              className="rounded-full bg-[#161616] shrink-0"
            />
            <div className="min-w-0 flex-1">
              <div
                className="uppercase truncate"
                style={{ ...DOT, fontSize: 15, color: "#fff" }}
              >
                {m.symbol}
              </div>
              <div className="h-[3px] mt-1.5" style={{ background: "#161616" }}>
                <div
                  style={{
                    width: `${Math.min(100, Math.max(2, m.progress))}%`,
                    height: "100%",
                    background: "var(--v2-accent)",
                  }}
                />
              </div>
            </div>
            <div
              className="text-right font-mono text-[12px]"
              style={{ color: "#fff" }}
            >
              $
              {m.marketCapUsd >= 1000
                ? (m.marketCapUsd / 1000).toFixed(1) + "K"
                : m.marketCapUsd.toFixed(2)}
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
    <div className="mt-10 cv-demo-grid">
      <AgentPanel />
      <div className="grid gap-2 grid-rows-[auto_minmax(0,1fr)] min-w-0 min-h-0">
        <RugPanel />
        <MemePanel />
      </div>
    </div>
  );
}
