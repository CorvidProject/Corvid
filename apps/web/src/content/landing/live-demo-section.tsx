import { LiveDemo } from "@/components/landing/live-demo";

export function LiveDemoSection() {
  return (
    <>
      <section
        className="relative px-4 lg:px-10 py-20"
        style={{ background: "#0A0A0F" }}
      >
        <div className="max-w-[1400px] mx-auto">
          <div
            className="flex items-center justify-between mb-5 font-mono text-[12px] uppercase tracking-[0.12em]"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            <span className="flex items-center gap-2">
              <span className="dot dot-pos dot-pulse"></span> [ live ]
            </span>
            <span>right now on corvid</span>
          </div>
          <h2
            className="font-heading font-extrabold tracking-[-0.04em] leading-[0.95]"
            style={{ color: "#ffffff", fontSize: "clamp(2.2rem, 4.6vw, 4rem)" }}
          >
            Not a demo.{" "}
            <span style={{ color: "var(--v2-accent-text)" }}>
              This is the product, running.
            </span>
          </h2>
          <p
            className="mt-4 max-w-[620px] text-[16px]"
            style={{ color: "var(--v2-t-3)" }}
          >
            A real agent working its token, a real safety check on what is
            trending, real launches as they land. Grab the core and turn it.
          </p>
          <LiveDemo />
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              className="hud-btn hud-btn-on"
              style={{
                fontFamily: "var(--font-dotmatrix), ui-monospace, monospace",
                letterSpacing: "0.02em",
                fontSize: "18px",
                padding: "6px 16px",
              }}
              href="/application"
            >
              launch app ›
            </a>
          </div>
        </div>
      </section>
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
