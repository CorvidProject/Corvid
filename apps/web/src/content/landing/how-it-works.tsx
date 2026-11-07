export function HowItWorks() {
  return (
    <>
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--v2-section-bg, #e8e8eb)" }}
      >
        <svg width="0" height="0" className="absolute" aria-hidden="true">
          <defs>
            <filter id="cap-grain">
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
          className="absolute inset-0 pointer-events-none z-0"
          style={{ filter: "url(#cap-grain)", opacity: "0.3" }}
        ></div>
        <div
          className="relative z-10 flex items-center justify-between px-6 lg:px-12 py-5"
          style={{
            borderBottom:
              "1px solid rgba(var(--v2-section-fg-rgb, 10,10,15), 0.08)",
          }}
        >
          <span
            className="font-mono text-[10px] tracking-[0.12em] uppercase"
            style={{ color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.65)" }}
          >
            [ HOW IT WORKS ]
          </span>
          <span
            className="font-mono text-[10px] tracking-[0.12em] uppercase"
            style={{ color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.65)" }}
          >
            2 STEPS
          </span>
        </div>
        <div
          className="relative overflow-hidden"
          style={{ minHeight: "clamp(280px, 38vh, 480px)" }}
        >
          <div
            className="scroll-marq-wrap absolute inset-x-0 pointer-events-none z-0"
            style={{ bottom: "8px", display: "none" }}
          >
            <div className="scroll-marq-track flex whitespace-nowrap">
              <span
                aria-hidden="false"
                className="font-mono font-medium uppercase leading-none shrink-0 flex items-center gap-10 pr-10"
                style={{
                  fontSize: "clamp(0.95rem, 1.3vw, 1.25rem)",
                  color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.55)",
                  letterSpacing: "0.28em",
                }}
              >
                <span className="flex items-center gap-10">
                  <span>ANALYZE · TRADE · EARN</span>
                  <span
                    style={{
                      color: "var(--v2-section-accent, var(--v2-accent))",
                    }}
                  >
                    ◆
                  </span>
                </span>
                <span className="flex items-center gap-10">
                  <span>ANALYZE · TRADE · EARN</span>
                  <span
                    style={{
                      color: "var(--v2-section-accent, var(--v2-accent))",
                    }}
                  >
                    ◆
                  </span>
                </span>
                <span className="flex items-center gap-10">
                  <span>ANALYZE · TRADE · EARN</span>
                  <span
                    style={{
                      color: "var(--v2-section-accent, var(--v2-accent))",
                    }}
                  >
                    ◆
                  </span>
                </span>
                <span className="flex items-center gap-10">
                  <span>ANALYZE · TRADE · EARN</span>
                  <span
                    style={{
                      color: "var(--v2-section-accent, var(--v2-accent))",
                    }}
                  >
                    ◆
                  </span>
                </span>
                <span className="flex items-center gap-10">
                  <span>ANALYZE · TRADE · EARN</span>
                  <span
                    style={{
                      color: "var(--v2-section-accent, var(--v2-accent))",
                    }}
                  >
                    ◆
                  </span>
                </span>
                <span className="flex items-center gap-10">
                  <span>ANALYZE · TRADE · EARN</span>
                  <span
                    style={{
                      color: "var(--v2-section-accent, var(--v2-accent))",
                    }}
                  >
                    ◆
                  </span>
                </span>
                <span className="flex items-center gap-10">
                  <span>ANALYZE · TRADE · EARN</span>
                  <span
                    style={{
                      color: "var(--v2-section-accent, var(--v2-accent))",
                    }}
                  >
                    ◆
                  </span>
                </span>
                <span className="flex items-center gap-10">
                  <span>ANALYZE · TRADE · EARN</span>
                  <span
                    style={{
                      color: "var(--v2-section-accent, var(--v2-accent))",
                    }}
                  >
                    ◆
                  </span>
                </span>
                <span className="flex items-center gap-10">
                  <span>ANALYZE · TRADE · EARN</span>
                  <span
                    style={{
                      color: "var(--v2-section-accent, var(--v2-accent))",
                    }}
                  >
                    ◆
                  </span>
                </span>
                <span className="flex items-center gap-10">
                  <span>ANALYZE · TRADE · EARN</span>
                  <span
                    style={{
                      color: "var(--v2-section-accent, var(--v2-accent))",
                    }}
                  >
                    ◆
                  </span>
                </span>
                <span className="flex items-center gap-10">
                  <span>ANALYZE · TRADE · EARN</span>
                  <span
                    style={{
                      color: "var(--v2-section-accent, var(--v2-accent))",
                    }}
                  >
                    ◆
                  </span>
                </span>
                <span className="flex items-center gap-10">
                  <span>ANALYZE · TRADE · EARN</span>
                  <span
                    style={{
                      color: "var(--v2-section-accent, var(--v2-accent))",
                    }}
                  >
                    ◆
                  </span>
                </span>
                <span className="flex items-center gap-10">
                  <span>ANALYZE · TRADE · EARN</span>
                  <span
                    style={{
                      color: "var(--v2-section-accent, var(--v2-accent))",
                    }}
                  >
                    ◆
                  </span>
                </span>
                <span className="flex items-center gap-10">
                  <span>ANALYZE · TRADE · EARN</span>
                  <span
                    style={{
                      color: "var(--v2-section-accent, var(--v2-accent))",
                    }}
                  >
                    ◆
                  </span>
                </span>
              </span>
              <span
                aria-hidden="true"
                className="font-mono font-medium uppercase leading-none shrink-0 flex items-center gap-10 pr-10"
                style={{
                  fontSize: "clamp(0.95rem, 1.3vw, 1.25rem)",
                  color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.55)",
                  letterSpacing: "0.28em",
                }}
              >
                <span className="flex items-center gap-10">
                  <span>ANALYZE · TRADE · EARN</span>
                  <span
                    style={{
                      color: "var(--v2-section-accent, var(--v2-accent))",
                    }}
                  >
                    ◆
                  </span>
                </span>
                <span className="flex items-center gap-10">
                  <span>ANALYZE · TRADE · EARN</span>
                  <span
                    style={{
                      color: "var(--v2-section-accent, var(--v2-accent))",
                    }}
                  >
                    ◆
                  </span>
                </span>
                <span className="flex items-center gap-10">
                  <span>ANALYZE · TRADE · EARN</span>
                  <span
                    style={{
                      color: "var(--v2-section-accent, var(--v2-accent))",
                    }}
                  >
                    ◆
                  </span>
                </span>
                <span className="flex items-center gap-10">
                  <span>ANALYZE · TRADE · EARN</span>
                  <span
                    style={{
                      color: "var(--v2-section-accent, var(--v2-accent))",
                    }}
                  >
                    ◆
                  </span>
                </span>
                <span className="flex items-center gap-10">
                  <span>ANALYZE · TRADE · EARN</span>
                  <span
                    style={{
                      color: "var(--v2-section-accent, var(--v2-accent))",
                    }}
                  >
                    ◆
                  </span>
                </span>
                <span className="flex items-center gap-10">
                  <span>ANALYZE · TRADE · EARN</span>
                  <span
                    style={{
                      color: "var(--v2-section-accent, var(--v2-accent))",
                    }}
                  >
                    ◆
                  </span>
                </span>
                <span className="flex items-center gap-10">
                  <span>ANALYZE · TRADE · EARN</span>
                  <span
                    style={{
                      color: "var(--v2-section-accent, var(--v2-accent))",
                    }}
                  >
                    ◆
                  </span>
                </span>
                <span className="flex items-center gap-10">
                  <span>ANALYZE · TRADE · EARN</span>
                  <span
                    style={{
                      color: "var(--v2-section-accent, var(--v2-accent))",
                    }}
                  >
                    ◆
                  </span>
                </span>
                <span className="flex items-center gap-10">
                  <span>ANALYZE · TRADE · EARN</span>
                  <span
                    style={{
                      color: "var(--v2-section-accent, var(--v2-accent))",
                    }}
                  >
                    ◆
                  </span>
                </span>
                <span className="flex items-center gap-10">
                  <span>ANALYZE · TRADE · EARN</span>
                  <span
                    style={{
                      color: "var(--v2-section-accent, var(--v2-accent))",
                    }}
                  >
                    ◆
                  </span>
                </span>
                <span className="flex items-center gap-10">
                  <span>ANALYZE · TRADE · EARN</span>
                  <span
                    style={{
                      color: "var(--v2-section-accent, var(--v2-accent))",
                    }}
                  >
                    ◆
                  </span>
                </span>
                <span className="flex items-center gap-10">
                  <span>ANALYZE · TRADE · EARN</span>
                  <span
                    style={{
                      color: "var(--v2-section-accent, var(--v2-accent))",
                    }}
                  >
                    ◆
                  </span>
                </span>
                <span className="flex items-center gap-10">
                  <span>ANALYZE · TRADE · EARN</span>
                  <span
                    style={{
                      color: "var(--v2-section-accent, var(--v2-accent))",
                    }}
                  >
                    ◆
                  </span>
                </span>
                <span className="flex items-center gap-10">
                  <span>ANALYZE · TRADE · EARN</span>
                  <span
                    style={{
                      color: "var(--v2-section-accent, var(--v2-accent))",
                    }}
                  >
                    ◆
                  </span>
                </span>
              </span>
            </div>
          </div>
          <div className="relative z-20 px-6 lg:px-12 pt-16 pb-20 lg:pt-24 lg:pb-28 max-w-6xl mx-auto">
            <div
              className="text-center mb-14 lg:mb-20"
              data-reveal
              style={{ "--rv-t": "translateY(12px)" }}
            >
              <span
                className="font-mono text-[11px] tracking-[0.12em] uppercase mb-5 inline-block"
                style={{ color: "var(--v2-section-accent, var(--v2-accent))" }}
              >
                ◆ TWO STEPS
              </span>
              <h2
                className="font-heading font-extrabold leading-[0.95] tracking-[-0.04em] mx-auto"
                style={{
                  fontSize: "clamp(2.2rem, 4.6vw, 4.2rem)",
                  color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 1)",
                  maxWidth: "880px",
                }}
              >
                From signal to fill,{" "}
                <span
                  style={{
                    color: "var(--v2-section-accent, var(--v2-accent))",
                  }}
                >
                  on autopilot
                </span>
              </h2>
              <p
                className="mt-6 font-sans text-base lg:text-lg leading-relaxed font-medium mx-auto"
                style={{
                  color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.70)",
                  maxWidth: "560px",
                }}
              >
                Read the chain. Set the rule. The agent runs it while you are
                offline
              </p>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
              <div
                aria-hidden="true"
                className="hidden md:block absolute pointer-events-none"
                style={{
                  top: "38px",
                  left: "calc(25% + 30px)",
                  right: "calc(25% + 30px)",
                  height: "1.5px",
                  background:
                    "linear-gradient(90deg, rgba(var(--v2-section-accent-rgb, var(--v2-accent-rgb)),0.15) 0%, rgba(var(--v2-section-accent-rgb, var(--v2-accent-rgb)),0.55) 50%, rgba(var(--v2-section-accent-rgb, var(--v2-accent-rgb)),0.15) 100%)",
                }}
              ></div>
              <div
                className="relative group"
                data-reveal
                style={{ "--rv-t": "translateY(20px)" }}
              >
                <div className="relative z-10 flex flex-col items-center">
                  <div
                    className="flex items-center justify-center mb-6 rounded-full"
                    style={{
                      width: "76px",
                      height: "76px",
                      background:
                        "rgba(var(--v2-section-accent-rgb, var(--v2-accent-rgb)),0.10)",
                      backdropFilter: "blur(14px) saturate(140%)",
                      WebkitBackdropFilter: "blur(14px) saturate(140%)",
                      border:
                        "1px solid rgba(var(--v2-section-accent-rgb, var(--v2-accent-rgb)),0.40)",
                      boxShadow:
                        "0 8px 28px -8px rgba(var(--v2-section-accent-rgb, var(--v2-accent-rgb)),0.35)",
                    }}
                  >
                    <span
                      className="font-heading font-extrabold tracking-[-0.04em]"
                      style={{
                        fontSize: "28px",
                        color: "var(--v2-section-accent, var(--v2-accent))",
                      }}
                    >
                      01
                    </span>
                  </div>
                </div>
                <div
                  className="relative rounded-2xl p-7 lg:p-8 transition-all"
                  style={{
                    background:
                      "rgba(var(--v2-section-fg-rgb, 10,10,15),0.025)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    border:
                      "1px solid rgba(var(--v2-section-fg-rgb, 10,10,15),0.10)",
                  }}
                >
                  <span
                    className="font-mono text-[10px] tracking-[0.12em] uppercase block mb-4"
                    style={{
                      color: "var(--v2-section-accent, var(--v2-accent))",
                    }}
                  >
                    / ANALYZE
                  </span>
                  <h3
                    className="font-heading font-extrabold leading-[1.08] tracking-[-0.02em] mb-3"
                    style={{
                      fontSize: "clamp(1.4rem, 1.9vw, 1.8rem)",
                      color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 1)",
                    }}
                  >
                    Paste a wallet or token address.{" "}
                    <span
                      style={{
                        color: "var(--v2-section-accent, var(--v2-accent))",
                      }}
                    >
                      Get the verdict
                    </span>
                  </h3>
                  <p
                    className="font-sans text-[14px] leading-relaxed font-medium mb-5"
                    style={{
                      color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.72)",
                    }}
                  >
                    Risk score, holder map, dev flags, liquidity depth. On-chain
                    signals, never Twitter noise
                  </p>
                  <div
                    className="flex items-center gap-2.5 font-mono text-[10px] tracking-[0.18em] uppercase"
                    style={{
                      color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.55)",
                    }}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="flex items-center gap-1.5">
                        <span
                          className="w-1 h-1 rounded-full"
                          style={{
                            background:
                              "var(--v2-section-accent, var(--v2-accent))",
                          }}
                        ></span>
                        LIQUIDITY
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span
                        className="w-px h-3"
                        style={{
                          background:
                            "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.20)",
                        }}
                      ></span>
                      <span className="flex items-center gap-1.5">HOLDERS</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span
                        className="w-px h-3"
                        style={{
                          background:
                            "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.20)",
                        }}
                      ></span>
                      <span className="flex items-center gap-1.5">
                        {"<"} 3S
                      </span>
                    </div>
                  </div>
                  <div
                    className="mt-6 rounded-xl overflow-hidden"
                    style={{
                      aspectRatio: "16 / 9",
                      background: "#0A0A0F",
                      border:
                        "1px solid rgba(var(--v2-section-fg-rgb, 10,10,15),0.12)",
                      boxShadow: "0 24px 48px -24px rgba(10,10,15,0.45)",
                    }}
                  >
                    <video
                      src="/corvid/how-analyze.mp4"
                      poster="/corvid/how-analyze.jpg"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label="Paste a wallet or token address, recorded in the app"
                      className="w-full h-full object-cover"
                    ></video>
                  </div>
                </div>
              </div>
              <div
                className="relative group"
                data-reveal
                style={{ "--rv-t": "translateY(20px)" }}
              >
                <div className="relative z-10 flex flex-col items-center">
                  <div
                    className="flex items-center justify-center mb-6 rounded-full"
                    style={{
                      width: "76px",
                      height: "76px",
                      background:
                        "rgba(var(--v2-section-accent-rgb, var(--v2-accent-rgb)),0.10)",
                      backdropFilter: "blur(14px) saturate(140%)",
                      WebkitBackdropFilter: "blur(14px) saturate(140%)",
                      border:
                        "1px solid rgba(var(--v2-section-accent-rgb, var(--v2-accent-rgb)),0.40)",
                      boxShadow:
                        "0 8px 28px -8px rgba(var(--v2-section-accent-rgb, var(--v2-accent-rgb)),0.35)",
                    }}
                  >
                    <span
                      className="font-heading font-extrabold tracking-[-0.04em]"
                      style={{
                        fontSize: "28px",
                        color: "var(--v2-section-accent, var(--v2-accent))",
                      }}
                    >
                      02
                    </span>
                  </div>
                </div>
                <div
                  className="relative rounded-2xl p-7 lg:p-8 transition-all"
                  style={{
                    background:
                      "rgba(var(--v2-section-fg-rgb, 10,10,15),0.025)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    border:
                      "1px solid rgba(var(--v2-section-fg-rgb, 10,10,15),0.10)",
                  }}
                >
                  <span
                    className="font-mono text-[10px] tracking-[0.12em] uppercase block mb-4"
                    style={{
                      color: "var(--v2-section-accent, var(--v2-accent))",
                    }}
                  >
                    / AUTOMATE
                  </span>
                  <h3
                    className="font-heading font-extrabold leading-[1.08] tracking-[-0.02em] mb-3"
                    style={{
                      fontSize: "clamp(1.4rem, 1.9vw, 1.8rem)",
                      color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 1)",
                    }}
                  >
                    Set the rule.{" "}
                    <span
                      style={{
                        color: "var(--v2-section-accent, var(--v2-accent))",
                      }}
                    >
                      Walk away
                    </span>
                  </h3>
                  <p
                    className="font-sans text-[14px] leading-relaxed font-medium mb-5"
                    style={{
                      color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.72)",
                    }}
                  >
                    Triggers fire and the agent takes the best route on Robinhood Chain through Uniswap.
                    Approvals only when you want them
                  </p>
                  <div
                    className="flex items-center gap-2.5 font-mono text-[10px] tracking-[0.18em] uppercase"
                    style={{
                      color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.55)",
                    }}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="flex items-center gap-1.5">
                        <span
                          className="w-1 h-1 rounded-full"
                          style={{
                            background:
                              "var(--v2-section-accent, var(--v2-accent))",
                          }}
                        ></span>
                        UNISWAP
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span
                        className="w-px h-3"
                        style={{
                          background:
                            "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.20)",
                        }}
                      ></span>
                      <span className="flex items-center gap-1.5">24/7</span>
                    </div>
                  </div>
                  <div
                    className="mt-6 rounded-xl overflow-hidden"
                    style={{
                      aspectRatio: "16 / 9",
                      background: "#0A0A0F",
                      border:
                        "1px solid rgba(var(--v2-section-fg-rgb, 10,10,15),0.12)",
                      boxShadow: "0 24px 48px -24px rgba(10,10,15,0.45)",
                    }}
                  >
                    <video
                      src="/corvid/how-automate.mp4"
                      poster="/corvid/how-automate.jpg"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label="Set the rule, recorded in the app"
                      className="w-full h-full object-cover"
                    ></video>
                  </div>
                </div>
              </div>
            </div>
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
