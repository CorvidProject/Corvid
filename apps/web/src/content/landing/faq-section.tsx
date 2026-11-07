import { site } from "@/lib/site";
import { AccordionList } from "@/components/landing/accordion-list";
import { faqItems } from "./accordion-data";

export function FaqSection() {
  return (
    <>
      <div data-reveal style={{ "--rv-t": "translateY(40px)" }}>
        <section
          id="faq"
          className="relative overflow-hidden"
          style={{ background: "var(--v2-section-bg, #e8e8eb)" }}
        >
          <svg width="0" height="0" className="absolute" aria-hidden="true">
            <defs>
              <filter id="faq-grain">
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
            style={{ filter: "url(#faq-grain)", opacity: "0.4" }}
          ></div>
          <div
            className="relative z-10 flex items-center justify-between px-6 lg:px-12 py-5"
            style={{
              borderBottom:
                "1px solid rgba(var(--v2-section-fg-rgb, 10,10,15), 0.08)",
              position: "relative",
            }}
          >
            <span
              className="font-mono text-[11px] tracking-[0.12em] uppercase"
              style={{
                color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.65)",
              }}
            >
              [ FAQ ]
            </span>
            <span
              className="font-mono text-[11px] tracking-[0.12em] uppercase"
              style={{
                color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.65)",
              }}
            >
              9 QUESTIONS
            </span>
            <div
              style={{
                transformOrigin: "left",
                position: "absolute",
                bottom: "0",
                left: "0",
                right: "0",
                height: "1px",
                background: "rgba(var(--v2-section-fg-rgb, 10,10,15),0.08)",
              }}
            ></div>
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[460px_1fr] overflow-hidden">
            <div
              className="px-6 lg:px-10 py-12 lg:sticky lg:top-16 self-start overflow-hidden"
              style={{
                borderRight:
                  "1px solid rgba(var(--v2-section-fg-rgb, 10,10,15), 0.08)",
              }}
            >
              <h2
                className="sz-chromatic-title-dark font-heading font-extrabold leading-[1.0] tracking-[-0.04em] pb-1 mb-5"
                data-reveal
                style={{
                  fontSize: "clamp(2rem, 4vw, 4rem)",
                  color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 1)",
                  "--rv-t": "translateY(30px)",
                }}
              >
                COMMON
                <br />
                QUESTIONS
              </h2>
              <p
                className="font-sans text-lg font-medium leading-relaxed mb-8"
                data-reveal
                style={{
                  color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.75)",
                  maxWidth: "320px",
                  "--rv-t": "translateY(12px)",
                }}
              >
                Answers to what traders ask us most about Corvid
              </p>
              <div className="mb-8" data-reveal style={{}}>
                <p
                  className="font-heading font-extrabold text-4xl tracking-[-0.04em]"
                  style={{
                    color: "var(--v2-section-accent, var(--v2-accent))",
                  }}
                >
                  9
                </p>
                <p
                  className="font-mono text-xs font-semibold tracking-[0.12em] uppercase"
                  style={{
                    color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.65)",
                  }}
                >
                  QUESTIONS ANSWERED
                </p>
              </div>
              {site.socialLinks.telegram && (
                <a
                  href={site.socialLinks.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-semibold tracking-[0.12em] uppercase inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white hover:brightness-110 crv-chrome-btn"
                  tabIndex={0}
                  data-reveal
                  style={{ "--rv-t": "translateY(8px)" }}
                >
                  ASK IN TELEGRAM<span aria-hidden="true">▶</span>
                </a>
              )}
            </div>
            <div>
              <AccordionList items={faqItems} variant="faq" initialOpen={0} />
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
