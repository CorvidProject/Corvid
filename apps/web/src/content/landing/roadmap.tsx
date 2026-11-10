import { AccordionList } from "@/components/landing/accordion-list";
import { roadmapItems } from "./accordion-data";

export function Roadmap() {
  return (
    <>
      <div data-reveal style={{ "--rv-clip": "inset(100% 0% 0% 0%)" }}>
        <section
          id="roadmap"
          className="relative overflow-hidden"
          style={{ background: "var(--v2-section-bg, #e8e8eb)" }}
        >
          <svg width="0" height="0" className="absolute" aria-hidden="true">
            <defs>
              <filter id="roadmap-grain">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.65"
                  numOctaves="3"
                  stitchTiles="stitch"
                ></feTurbulence>
                <feColorMatrix type="saturate" values="0"></feColorMatrix>
                <feBlend in="SourceGraphic" mode="multiply"></feBlend>
              </filter>
            </defs>
          </svg>
          <div
            className="grain-overlay absolute inset-0 pointer-events-none z-0"
            style={{ filter: "url(#roadmap-grain)", opacity: "0.4" }}
          ></div>
          <div
            className="relative z-10 flex items-center justify-between px-6 lg:px-12 py-5"
            style={{
              borderBottom:
                "1px solid rgba(var(--v2-section-fg-rgb, 10,10,15), 0.08)",
            }}
          >
            <span
              className="font-mono text-[11px] tracking-[0.12em] uppercase"
              style={{
                color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.65)",
              }}
            >
              [ ROADMAP ]
            </span>
            <span
              className="font-mono text-[11px] tracking-[0.12em] uppercase"
              style={{
                color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.65)",
              }}
            >
              4 PHASES
            </span>
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[400px_1fr]">
            <div
              className="px-6 lg:px-12 py-12 lg:sticky lg:top-16 self-start"
              style={{
                borderRight:
                  "1px solid rgba(var(--v2-section-fg-rgb, 10,10,15), 0.08)",
              }}
            >
              <div data-reveal style={{ "--rv-t": "translateY(16px)" }}>
                <span
                  className="font-mono text-xs font-semibold tracking-[0.12em] uppercase block mb-5"
                  style={{
                    color: "var(--v2-section-accent, var(--v2-accent))",
                  }}
                >
                  BUILDING
                </span>
                <h2
                  className="sz-chromatic-title-dark font-heading font-extrabold leading-[1.0] tracking-[-0.04em] pb-1 mb-5"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 4rem)",
                    color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 1)",
                  }}
                >
                  WHAT'S
                  <br />
                  AHEAD
                </h2>
                <p
                  className="font-sans text-lg font-medium leading-relaxed"
                  style={{
                    color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.75)",
                    maxWidth: "320px",
                  }}
                >
                  An AI trading platform built on Robinhood Chain, shipped piece by piece
                </p>
              </div>
            </div>
            <div>
              <AccordionList
                items={roadmapItems}
                variant="roadmap"
                initialOpen={2}
              />
            </div>
          </div>
          <div
            className="relative z-10"
            style={{
              borderTop:
                "1px solid rgba(var(--v2-section-fg-rgb, 10,10,15), 0.08)",
            }}
          ></div>
        </section>
      </div>
      <div className="relative w-full px-6 lg:px-14 max-w-7xl mx-auto">
        <div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.08) 70%, transparent)",
          }}
        ></div>
        <div
          className="absolute left-1/2 top-0 h-8 w-1/3 -translate-x-1/2 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(167,139,250,0.25) 0%, transparent 70%)",
            filter: "blur(8px)",
          }}
        ></div>
      </div>
    </>
  );
}
