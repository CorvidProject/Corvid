export function FooterCta() {
  return (
    <>
      <div
        data-reveal
        style={{
          willChange: "transform, opacity",
          "--rv-t": "translateY(24px) scale(0.985)",
        }}
      >
        <section
          className="relative overflow-hidden"
          style={{ background: "var(--v2-bg-0, #14191d)" }}
        >
          <div
            className="relative z-30 flex items-center justify-between px-6 lg:px-12 py-5"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          >
            <span
              className="font-mono text-[11px] tracking-[0.12em] uppercase"
              style={{ color: "rgba(255,255,255,0.70)" }}
            >
              [ GET STARTED ]
            </span>
            <span
              className="font-mono text-[11px] tracking-[0.12em] uppercase"
              style={{ color: "rgba(255,255,255,0.50)" }}
            >
              FREE · NO CARD NEEDED
            </span>
          </div>
          <div></div>
          <div className="relative z-10 px-6 lg:px-12 py-16 lg:py-20">
            <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
              <div
                className="inline-flex items-center gap-2 mb-8 px-3.5 py-1.5"
                data-reveal
                style={{
                  border: "1px solid rgba(var(--v2-accent-rgb),0.30)",
                  background: "rgba(var(--v2-accent-rgb),0.04)",
                  backdropFilter: "blur(10px)",
                  "--rv-t": "translateY(-8px)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: "var(--v2-accent)",
                    boxShadow: "0 0 10px var(--v2-accent)",
                    animation: "hero-live-pulse 2s ease-in-out infinite",
                  }}
                ></span>
                <span
                  className="font-mono text-[11px] tracking-[0.12em] uppercase"
                  style={{ color: "var(--v2-accent-text)" }}
                >
                  READY TO LAUNCH
                </span>
              </div>
              <h2
                className="sz-chromatic-title font-heading font-extrabold leading-[0.95] tracking-[-0.045em] mb-6 whitespace-nowrap"
                data-reveal
                style={{
                  fontSize: "clamp(1.6rem, 3.6vw, 3.2rem)",
                  color: "#fff",
                  "--rv-t": "translateY(24px)",
                }}
              >
                START YOUR{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(180deg, var(--v2-accent) 0%, var(--v2-accent-hover, var(--v2-accent)) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter:
                      "drop-shadow(0 0 24px rgba(var(--v2-accent-rgb),0.35))",
                  }}
                >
                  FIRST TRADING SYSTEM
                </span>
              </h2>
              <p
                className="font-sans text-lg lg:text-xl font-medium leading-relaxed mb-12 max-w-xl"
                data-reveal
                style={{
                  color: "rgba(255,255,255,0.78)",
                  "--rv-t": "translateY(10px)",
                }}
              >
                Sign up, fund the wallet, deploy an agent
              </p>
              <div
                className="relative group"
                data-reveal
                style={{ "--rv-t": "translateY(14px) scale(0.96)" }}
              >
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, rgba(var(--v2-accent-rgb),0.40) 0%, transparent 70%)",
                    filter: "blur(20px)",
                  }}
                ></div>
                <a
                  className="relative inline-flex items-center gap-2.5 font-heading font-semibold tracking-[0.02em] uppercase px-6 py-3 rounded-full transition-all duration-300 crv-chrome-btn"
                  style={{ fontSize: "0.9rem", letterSpacing: "0.06em" }}
                  href="/application"
                >
                  <span className="relative">LAUNCH APP</span>
                  <span className="relative inline-flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path>
                    </svg>
                  </span>
                </a>
              </div>
              <div
                className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[11px] tracking-[0.12em] uppercase"
                data-reveal
                style={{ color: "rgba(255,255,255,0.70)" }}
              >
                <span className="flex items-center gap-1.5">
                  <span style={{ color: "var(--v2-accent-text)" }}>✓</span> 25
                  free AI analyses, then 5 a month
                </span>
                <span style={{ color: "rgba(255,255,255, 0.65)" }}>·</span>
                <span className="flex items-center gap-1.5">
                  <span style={{ color: "var(--v2-accent-text)" }}>✓</span> No
                  credit card
                </span>
                <span style={{ color: "rgba(255,255,255, 0.65)" }}>·</span>
                <span className="flex items-center gap-1.5">
                  <span style={{ color: "var(--v2-accent-text)" }}>✓</span>{" "}
                  Self-custody export
                </span>
              </div>
            </div>
          </div>
          <div
            className="relative z-30 flex items-center justify-between px-6 lg:px-12 py-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            <span
              className="font-mono text-[11px] tracking-[0.18em] uppercase"
              style={{ color: "rgba(255,255,255,0.50)" }}
            >
              SOLANA · JUPITER · HELIUS
            </span>
            <span
              className="font-mono text-[11px] tracking-[0.18em] uppercase"
              style={{ color: "rgba(255,255,255,0.50)" }}
            >
              EST. 2026
            </span>
          </div>
        </section>
      </div>
    </>
  );
}
