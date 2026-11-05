export function SocialContent() {
  return (
    <>
      <section className="relative" style={{ background: "var(--v2-bg-0)" }}>
        <div className="relative px-6 lg:px-12 pt-24 lg:pt-32 pb-16 lg:pb-20">
          <div className="max-w-6xl mx-auto">
            <h1
              className="font-heading font-extrabold leading-[0.92] tracking-[-0.045em]"
              data-reveal
              style={{
                fontSize: "clamp(2.6rem, 7vw, 6rem)",
                color: "#fff",
                "--rv-t": "translateY(24px)",
              }}
            >
              EVERY CHANNEL
              <br />
              <span style={{ color: "var(--v2-accent-text)" }}>ONE PAGE</span>
            </h1>
            <p
              className="mt-7 font-sans leading-relaxed"
              data-reveal
              style={{
                fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
                color: "rgba(255,255,255,0.65)",
                maxWidth: "560px",
                "--rv-t": "translateY(12px)",
              }}
            >
              Telegram for questions and announcements, X for release notes
            </p>
          </div>
        </div>
      </section>
      <section
        className="relative"
        style={{ background: "var(--v2-section-bg, #e8e8eb)" }}
      >
        <div
          className="flex items-center justify-between px-6 lg:px-12 py-5"
          style={{
            borderBottom:
              "1px solid rgba(var(--v2-section-fg-rgb, 10,10,15), 0.08)",
          }}
        >
          <span
            className="font-mono text-[11px] tracking-[0.12em] uppercase"
            style={{ color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.65)" }}
          >
            [ CHANNELS ]
          </span>
          <span
            className="font-mono text-[11px] tracking-[0.12em] uppercase"
            style={{ color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.45)" }}
          >
            OPENS IN A NEW TAB
          </span>
        </div>
        <div className="px-6 lg:px-12 py-10 lg:py-14">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
            <a
              href="https://t.me/PLACEHOLDER"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
              data-reveal
              style={{
                background: "rgba(255,255,255,0.55)",
                border:
                  "1px solid rgba(var(--v2-section-fg-rgb, 10,10,15), 0.12)",
                "--rv-t": "translateY(18px)",
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 14 14"
                fill="none"
                className="absolute top-0 left-0 pointer-events-none z-10"
              >
                <path
                  d="M 12 2 L 2 2 L 2 12"
                  stroke="var(--v2-accent)"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                ></path>
              </svg>
              <svg
                width="12"
                height="12"
                viewBox="0 0 14 14"
                fill="none"
                className="absolute top-0 right-0 pointer-events-none z-10"
              >
                <path
                  d="M 2 2 L 12 2 L 12 12"
                  stroke="var(--v2-accent)"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                ></path>
              </svg>
              <svg
                width="12"
                height="12"
                viewBox="0 0 14 14"
                fill="none"
                className="absolute bottom-0 left-0 pointer-events-none z-10"
              >
                <path
                  d="M 2 2 L 2 12 L 12 12"
                  stroke="var(--v2-accent)"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                ></path>
              </svg>
              <svg
                width="12"
                height="12"
                viewBox="0 0 14 14"
                fill="none"
                className="absolute bottom-0 right-0 pointer-events-none z-10"
              >
                <path
                  d="M 12 2 L 12 12 L 2 12"
                  stroke="var(--v2-accent)"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                ></path>
              </svg>
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px] pointer-events-none"
                style={{ background: "var(--v2-accent)" }}
              ></div>
              <div className="relative z-[1] p-7 lg:p-8 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="font-mono text-[11px] tracking-[0.12em]"
                    style={{
                      color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.30)",
                    }}
                  >
                    [ 01 ]
                  </span>
                  <span
                    className="font-mono text-[11px] tracking-[0.12em] px-2 py-1"
                    style={{
                      color: "var(--v2-accent-text)",
                      border: "1px solid rgba(var(--v2-accent-rgb),0.45)",
                    }}
                  >
                    PRIMARY
                  </span>
                </div>
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className="shrink-0 transition-colors duration-200"
                    style={{
                      color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.55)",
                    }}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"></path>
                    </svg>
                  </div>
                  <h3
                    className="font-heading font-extrabold tracking-[-0.02em] transition-colors duration-200"
                    style={{
                      fontSize: "clamp(1.25rem, 1.8vw, 1.6rem)",
                      color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.92)",
                      lineHeight: "1",
                    }}
                  >
                    TELEGRAM
                  </h3>
                </div>
                <p
                  className="font-mono text-[11px] tracking-[0.10em] mb-4"
                  style={{
                    color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.65)",
                  }}
                >
                  t.me/PLACEHOLDER
                </p>
                <p
                  className="font-sans text-sm leading-relaxed mb-7"
                  style={{
                    color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.62)",
                  }}
                >
                  Community chat, questions and announcements
                </p>
                <div
                  className="mt-auto pt-5 flex items-center justify-between"
                  style={{
                    borderTop:
                      "1px dashed rgba(var(--v2-section-fg-rgb, 10,10,15), 0.10)",
                  }}
                >
                  <span
                    className="font-mono text-[11px] tracking-[0.12em] uppercase transition-colors duration-200"
                    style={{
                      color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.40)",
                    }}
                  >
                    Open external
                  </span>
                  <span
                    className="font-mono text-base"
                    style={{
                      color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.40)",
                    }}
                  >
                    ▶
                  </span>
                </div>
              </div>
            </a>
            <a
              href="https://x.com/PLACEHOLDER"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
              data-reveal
              style={{
                background: "rgba(255,255,255,0.55)",
                border:
                  "1px solid rgba(var(--v2-section-fg-rgb, 10,10,15), 0.12)",
                "--rv-t": "translateY(18px)",
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 14 14"
                fill="none"
                className="absolute top-0 left-0 pointer-events-none z-10"
              >
                <path
                  d="M 12 2 L 2 2 L 2 12"
                  stroke="var(--v2-accent)"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                ></path>
              </svg>
              <svg
                width="12"
                height="12"
                viewBox="0 0 14 14"
                fill="none"
                className="absolute top-0 right-0 pointer-events-none z-10"
              >
                <path
                  d="M 2 2 L 12 2 L 12 12"
                  stroke="var(--v2-accent)"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                ></path>
              </svg>
              <svg
                width="12"
                height="12"
                viewBox="0 0 14 14"
                fill="none"
                className="absolute bottom-0 left-0 pointer-events-none z-10"
              >
                <path
                  d="M 2 2 L 2 12 L 12 12"
                  stroke="var(--v2-accent)"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                ></path>
              </svg>
              <svg
                width="12"
                height="12"
                viewBox="0 0 14 14"
                fill="none"
                className="absolute bottom-0 right-0 pointer-events-none z-10"
              >
                <path
                  d="M 12 2 L 12 12 L 2 12"
                  stroke="var(--v2-accent)"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                ></path>
              </svg>
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px] pointer-events-none"
                style={{ background: "var(--v2-accent)" }}
              ></div>
              <div className="relative z-[1] p-7 lg:p-8 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="font-mono text-[11px] tracking-[0.12em]"
                    style={{
                      color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.30)",
                    }}
                  >
                    [ 02 ]
                  </span>
                </div>
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className="shrink-0 transition-colors duration-200"
                    style={{
                      color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.55)",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </svg>
                  </div>
                  <h3
                    className="font-heading font-extrabold tracking-[-0.02em] transition-colors duration-200"
                    style={{
                      fontSize: "clamp(1.25rem, 1.8vw, 1.6rem)",
                      color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.92)",
                      lineHeight: "1",
                    }}
                  >
                    TWITTER / X
                  </h3>
                </div>
                <p
                  className="font-mono text-[11px] tracking-[0.10em] mb-4"
                  style={{
                    color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.65)",
                  }}
                >
                  @PLACEHOLDER
                </p>
                <p
                  className="font-sans text-sm leading-relaxed mb-7"
                  style={{
                    color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.62)",
                  }}
                >
                  Release notes and what shipped this week
                </p>
                <div
                  className="mt-auto pt-5 flex items-center justify-between"
                  style={{
                    borderTop:
                      "1px dashed rgba(var(--v2-section-fg-rgb, 10,10,15), 0.10)",
                  }}
                >
                  <span
                    className="font-mono text-[11px] tracking-[0.12em] uppercase transition-colors duration-200"
                    style={{
                      color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.40)",
                    }}
                  >
                    Open external
                  </span>
                  <span
                    className="font-mono text-base"
                    style={{
                      color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.40)",
                    }}
                  >
                    ▶
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--v2-bg-0, #0A0A0F)" }}
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
            ROBINHOOD CHAIN · GECKOTERMINAL · GOPLUS
          </span>
          <span
            className="font-mono text-[11px] tracking-[0.18em] uppercase"
            style={{ color: "rgba(255,255,255,0.50)" }}
          >
            EST. 2026
          </span>
        </div>
      </section>
    </>
  );
}
