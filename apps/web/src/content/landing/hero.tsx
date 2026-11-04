import { PixelGlow } from "@/components/landing/pixel-glow";
import { HeroComposer, HeroPill } from "@/components/landing/hero-composer";

export function Hero() {
  return (
    <>
      <section
        className="relative overflow-hidden flex flex-col"
        style={{ background: "#14191d", minHeight: "100vh" }}
      >
        <div className="absolute inset-0 z-0 pointer-events-none">
          <PixelGlow />
        </div>
        <svg width="0" height="0" className="absolute" aria-hidden="true">
          <defs>
            <filter id="v2-grain">
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
          className="absolute inset-0 z-0 pointer-events-none mix-blend-overlay"
          style={{ filter: "url(#v2-grain)", opacity: "0.18" }}
        ></div>
        <div style={{ paddingTop: "110px" }}></div>
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 lg:px-12 pb-16">
          <h1
            className="font-heading font-extrabold text-center leading-[0.98] tracking-[-0.045em]"
            style={{
              color: "#ffffff",
              fontSize: "clamp(2.4rem, 5.4vw, 5.4rem)",
              maxWidth: "980px",
            }}
          >
            <span className="inline">
              <span className="inline-block">
                <span
                  className="inline-block overflow-hidden"
                  style={{ verticalAlign: "bottom" }}
                >
                  <span
                    className="inline-block"
                    data-reveal
                    style={{
                      paddingRight: "0.22em",
                      "--rv-t": "translateY(110%)",
                    }}
                  >
                    What's
                  </span>
                </span>
                <span
                  className="inline-block overflow-hidden"
                  style={{ verticalAlign: "bottom" }}
                >
                  <span
                    className="inline-block"
                    data-reveal
                    style={{
                      paddingRight: "0.22em",
                      "--rv-t": "translateY(110%)",
                    }}
                  >
                    the
                  </span>
                </span>
                <span
                  className="inline-block overflow-hidden"
                  style={{ verticalAlign: "bottom" }}
                >
                  <span
                    className="inline-block"
                    data-reveal
                    style={{
                      paddingRight: "0.22em",
                      "--rv-t": "translateY(110%)",
                    }}
                  >
                    trade
                  </span>
                </span>
                <span
                  className="inline-block overflow-hidden"
                  style={{ verticalAlign: "bottom" }}
                >
                  <span
                    className="inline-block"
                    data-reveal
                    style={{
                      paddingRight: "0.22em",
                      "--rv-t": "translateY(110%)",
                    }}
                  >
                    today?
                  </span>
                </span>
              </span>
            </span>
          </h1>
          <p
            className="font-heading font-medium mt-8 text-center"
            data-reveal
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "clamp(1.15rem, 1.6vw, 1.55rem)",
              maxWidth: "720px",
              lineHeight: "1.35",
              letterSpacing: "-0.01em",
              textShadow: "0 0 14px #14191d, 0 0 4px #14191d, 0 1px 2px #000",
              "--rv-t": "translateY(10px)",
            }}
          >
            Agents analyze, decide and trade on-chain
          </p>
          <HeroComposer />
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8 max-w-[720px]">
            <HeroPill
              prefill="Analyze "
              className="hero-chip group relative inline-flex items-center gap-2 px-4 py-2.5 crv-hero-chip"
              style={{
                borderRadius: "999px",
                color: "rgba(255,255,255,0.82)",
                fontSize: "13px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="opacity-75 group-hover:opacity-100 relative z-10"
              >
                <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z"></path>
              </svg>
              <span className="relative z-10">Analyze a token</span>
            </HeroPill>
            <HeroPill
              prefill="Find smart wallets that bought "
              className="hero-chip group relative inline-flex items-center gap-2 px-4 py-2.5 crv-hero-chip"
              style={{
                borderRadius: "999px",
                color: "rgba(255,255,255,0.82)",
                fontSize: "13px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="opacity-75 group-hover:opacity-100 relative z-10"
              >
                <path d="M216,64H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24,24,0,0,0,32,56V184a24,24,0,0,0,24,24H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64Zm0,128H56a8,8,0,0,1-8-8V78.63A23.84,23.84,0,0,0,56,80H216Zm-48-60a12,12,0,1,1,12,12A12,12,0,0,1,168,132Z"></path>
              </svg>
              <span className="relative z-10">Find smart wallets</span>
            </HeroPill>
            <HeroPill
              prefill="Build an agent that "
              className="hero-chip group relative inline-flex items-center gap-2 px-4 py-2.5 crv-hero-chip"
              style={{
                borderRadius: "999px",
                color: "rgba(255,255,255,0.82)",
                fontSize: "13px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="opacity-75 group-hover:opacity-100 relative z-10"
              >
                <path d="M152,96H104a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V104A8,8,0,0,0,152,96Zm-8,48H112V112h32Zm88,0H216V112h16a8,8,0,0,0,0-16H216V56a16,16,0,0,0-16-16H160V24a8,8,0,0,0-16,0V40H112V24a8,8,0,0,0-16,0V40H56A16,16,0,0,0,40,56V96H24a8,8,0,0,0,0,16H40v32H24a8,8,0,0,0,0,16H40v40a16,16,0,0,0,16,16H96v16a8,8,0,0,0,16,0V216h32v16a8,8,0,0,0,16,0V216h40a16,16,0,0,0,16-16V160h16a8,8,0,0,0,0-16Zm-32,56H56V56H200v95.87s0,.09,0,.13,0,.09,0,.13V200Z"></path>
              </svg>
              <span className="relative z-10">Build an agent</span>
            </HeroPill>
            <HeroPill
              submitnow="Show today's top signals"
              className="hero-chip group relative inline-flex items-center gap-2 px-4 py-2.5 crv-hero-chip"
              style={{
                borderRadius: "999px",
                color: "rgba(255,255,255,0.82)",
                fontSize: "13px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="opacity-75 group-hover:opacity-100 relative z-10"
              >
                <path d="M240,56v64a8,8,0,0,1-16,0V75.31l-82.34,82.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,212.69,64H168a8,8,0,0,1,0-16h64A8,8,0,0,1,240,56Z"></path>
              </svg>
              <span className="relative z-10">Today's signals</span>
            </HeroPill>
          </div>
          <div
            className="flex flex-col items-center gap-4 mt-14"
            data-reveal
            style={{
              textShadow: "0 0 12px #14191d, 0 0 4px #14191d, 0 1px 2px #000",
              "--rv-t": "translateY(6px)",
            }}
          >
            <span
              className="flex items-center gap-2 text-[14px]"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{
                  background: "#22C55E",
                  boxShadow: "0 0 10px #22C55E",
                  animation: "hero-live-pulse 2s ease-in-out infinite",
                }}
              ></span>
              Live on mainnet. Trades route through Jupiter, data from Helius.
            </span>
            <div className="flex items-center gap-7">
              <a
                href="https://jup.ag"
                target="_blank"
                rel="noopener noreferrer"
                className="crv-hero-logo inline-flex items-center gap-2 font-heading font-bold text-[15px] tracking-[-0.02em]"
              >
                <img
                  src="/shared/jupiter.png"
                  alt=""
                  width="20"
                  height="20"
                  className="rounded-[6px]"
                />
                Jupiter
              </a>
              <a
                href="https://helius.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="crv-hero-logo inline-flex items-center gap-2 font-heading font-bold text-[15px] tracking-[-0.02em]"
              >
                <img
                  src="/shared/helius.png"
                  alt=""
                  width="20"
                  height="20"
                  className="rounded-[6px]"
                />
                Helius
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
