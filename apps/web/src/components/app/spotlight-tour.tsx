"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "@phosphor-icons/react";

// Panduan "spotlight" di builder agent (port dari referensi): menyorot elemen bertanda data-tour.
export type TourStep = {
  targetSelector: string;
  title: string;
  description: string;
  position: "right" | "bottom" | "top" | "left";
};

export const BUILDER_TOUR: TourStep[] = [
  {
    targetSelector: '[data-tour="pipeline-select"]',
    title: "Choose your pipeline",
    description: "Select the type of agent: wallet tracker, token scanner, or AI trader",
    position: "right",
  },
  {
    targetSelector: '[data-tour="canvas"]',
    title: "Visual pipeline",
    description: "Your agent's logic flow, from data source to notifications. Click any node to configure it",
    position: "bottom",
  },
  {
    targetSelector: '[data-tour="mode-toggle"]',
    title: "Signal or Trading",
    description: "Signal mode sends alerts only. Trading mode executes real swaps with ETH",
    position: "bottom",
  },
  {
    targetSelector: '[data-tour="deploy-btn"]',
    title: "Deploy",
    description: "Save and activate your agent. It starts running immediately",
    position: "bottom",
  },
];

export const TOUR_KEY = "builder_tour_seen";

export function SpotlightTour({ steps, active, onComplete, onSkip }: { steps: TourStep[]; active: boolean; onComplete: () => void; onSkip: () => void }) {
  const [i, setI] = useState(0);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [vp, setVp] = useState({ w: 0, h: 0 });
  const raf = useRef<number | null>(null);

  const track = useCallback(() => {
    const step = steps[i];
    if (!step) return;
    const el = document.querySelector(step.targetSelector);
    setRect(el ? el.getBoundingClientRect() : null);
    raf.current = requestAnimationFrame(track);
  }, [i, steps]);

  useEffect(() => {
    if (!active) return;
    const size = () => setVp({ w: window.innerWidth, h: window.innerHeight });
    size();
    window.addEventListener("resize", size);
    raf.current = requestAnimationFrame(track);
    return () => {
      window.removeEventListener("resize", size);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [active, track]);

  useEffect(() => {
    if (active) setI(0);
  }, [active]);

  const step = steps[i];
  if (!active || !step) return null;
  const last = i === steps.length - 1;
  const { w, h } = vp;
  const x = rect ? rect.left - 10 : w / 2 - 100;
  const y = rect ? rect.top - 10 : h / 2 - 40;
  const rw = rect ? rect.width + 20 : 200;
  const rh = rect ? rect.height + 20 : 80;
  const pos =
    step.position === "bottom"
      ? { top: y + rh + 16, left: x + rw / 2 - 160 }
      : step.position === "top"
        ? { top: y - 16 - 140, left: x + rw / 2 - 160 }
        : step.position === "right"
          ? { top: y + rh / 2 - 70, left: x + rw + 16 }
          : { top: y + rh / 2 - 70, left: x - 340 - 16 };
  pos.left = Math.max(12, Math.min(pos.left, w - 332));
  pos.top = Math.max(12, Math.min(pos.top, h - 180));

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="spotlight-tour"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0"
          style={{ pointerEvents: "none", zIndex: 200 }}
        >
          <svg width={w} height={h} className="absolute inset-0" style={{ pointerEvents: "none" }}>
            <defs>
              <mask id="spotlight-mask">
                <rect width={w} height={h} fill="white" />
                <rect x={x} y={y} width={rw} height={rh} rx={10} ry={10} fill="black" />
              </mask>
            </defs>
            <rect width={w} height={h} fill="rgba(8,10,12,0.78)" mask="url(#spotlight-mask)" />
            <rect x={x - 1} y={y - 1} width={rw + 2} height={rh + 2} rx={11} ry={11} fill="none" stroke="rgba(var(--v2-accent-rgb),0.6)" strokeWidth={1.5} />
          </svg>
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-label={step.title}
            className="absolute p-5"
            style={{ ...pos, width: 320, background: "var(--v2-bg-1)", border: "1px solid var(--v2-line-2)", borderRadius: "var(--v2-r-2, 12px)", pointerEvents: "auto" }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5">
                {steps.map((_, n) => (
                  <div
                    key={n}
                    className="transition-all duration-300"
                    style={{ width: n === i ? 20 : 6, height: 2, background: n === i ? "var(--v2-accent)" : n < i ? "var(--v2-line-3, var(--v2-line-2))" : "var(--v2-line-1)" }}
                  />
                ))}
              </div>
              <button
                onClick={onSkip}
                aria-label="Close guide"
                className="flex h-6 w-6 items-center justify-center rounded-full transition-colors hover:bg-white/5"
                style={{ color: "var(--v2-t-4)" }}
              >
                <X size={12} weight="bold" />
              </button>
            </div>
            <h3 className="text-sm font-semibold mb-1.5" style={{ color: "var(--v2-t-1)" }}>{step.title}</h3>
            <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--v2-t-3)" }}>{step.description}</p>
            <div className="flex items-center justify-between">
              <button onClick={onSkip} className="text-xs transition-colors hover:text-[var(--v2-t-2)]" style={{ color: "var(--v2-t-4)" }}>
                Skip tour
              </button>
              <button onClick={() => (i < steps.length - 1 ? setI((n) => n + 1) : onComplete())} className="btn-v2 btn-v2-primary btn-v2-sm">
                {last ? "Done" : "Next"}
                {!last && <ArrowRight size={12} weight="bold" />}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
