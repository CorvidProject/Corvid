import { PlatformStats } from "@/components/landing/platform-stats";
export function Agents() {
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
          id="agents"
          className="relative overflow-hidden"
          style={{ background: "#0A0A0F" }}
        >
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              opacity: "0.25",
            }}
          ></div>
          <div
            className="relative z-10 flex items-center justify-between px-6 lg:px-12 py-5"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          >
            <span
              className="font-mono text-[10px] tracking-[0.12em] uppercase"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              [ AGENTS ]
            </span>
            <span
              className="font-mono text-[10px] tracking-[0.12em] uppercase"
              style={{ color: "rgba(255,255,255, 0.65)" }}
            >
              BETA · 4 TEMPLATES
            </span>
          </div>
          <div
            className="relative z-10 px-6 lg:px-12 py-10 lg:py-14 flex items-center justify-between gap-8"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="flex-1 min-w-0">
              <h2
                className="sz-chromatic-title font-heading font-extrabold leading-[1.0] tracking-[-0.04em] pb-1"
                data-reveal
                style={{
                  fontSize: "clamp(2rem, 4vw, 4rem)",
                  color: "#fff",
                  "--rv-t": "translateY(30px)",
                }}
              >
                Four templates. Every trade flow you run today
              </h2>
              <p
                className="font-sans text-lg font-medium mt-4 leading-relaxed"
                data-reveal
                style={{
                  color: "rgba(255,255,255,0.70)",
                  maxWidth: "560px",
                  "--rv-t": "translateY(10px)",
                }}
              >
                Build once. Agents monitor, react, execute continuously
              </p>
              <p
                className="font-mono text-xs font-semibold tracking-[0.14em] uppercase mt-5"
                data-reveal
                style={{
                  color: "var(--v2-accent-text)",
                  "--rv-t": "translateY(10px)",
                }}
              >
                Each template replaces hours of manual ops
              </p>
              <p
                className="font-sans text-sm mt-4 leading-relaxed"
                data-reveal
                style={{
                  color: "rgba(255,255,255,0.55)",
                  maxWidth: "560px",
                  "--rv-t": "translateY(10px)",
                }}
              >
                Agents are in beta: they run today and get better every week.
                Start with small amounts and limits you are comfortable with.
              </p>
            </div>
          </div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2">
            <div
              className="cv-agent-card relative p-6 lg:p-8 cursor-default flex flex-col overflow-hidden"
              data-reveal
              style={{
                borderRight: "1px solid rgba(255,255,255,0.08)",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                "--rv-t": "translateY(24px)",
              }}
            >
              <div
                className="mb-5 flex items-stretch overflow-hidden sm:min-h-[210px]"
                style={{ minHeight: "150px" }}
              >
                <div className="w-full min-w-0 self-start">
                  <div
                    className="rounded-lg overflow-hidden"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div
                      className="grid gap-3 px-3 py-2"
                      style={{
                        gridTemplateColumns: "auto 1fr auto auto",
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                      }}
                    >
                      <span
                        className="text-[9px] uppercase tracking-wider"
                        style={{ color: "rgba(255,255,255,0.65)" }}
                      >
                        Source
                      </span>
                      <span
                        className="text-[9px] uppercase tracking-wider"
                        style={{ color: "rgba(255,255,255,0.65)" }}
                      >
                        Wallet
                      </span>
                      <span
                        className="text-[9px] uppercase tracking-wider"
                        style={{ color: "rgba(255,255,255,0.65)" }}
                      >
                        PnL 30d
                      </span>
                      <span
                        className="text-[9px] uppercase tracking-wider"
                        style={{ color: "rgba(255,255,255,0.65)" }}
                      >
                        Tier
                      </span>
                    </div>
                    <div
                      className="px-3 py-6 text-center font-mono text-[10px] uppercase tracking-wider"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                    >
                      loading smart wallets…
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mb-4">
                <div
                  className="cv-agent-dot w-4 h-4 rounded-full flex items-center justify-center"
                  style={{ border: "1.5px solid rgba(255,255,255,0.15)" }}
                >
                  <div className="cv-agent-dot-in w-1 h-1 rounded-full"></div>
                </div>
              </div>
              <h3 className="font-heading font-bold text-xl lg:text-2xl leading-tight mb-2">
                Copy trader
              </h3>
              <p className="font-sans text-[15px] leading-relaxed">
                Mirror smart wallets in real time
              </p>
              <div
                className="cv-agent-bar absolute bottom-0 left-0"
                style={{ height: "2px", background: "var(--v2-accent)" }}
              ></div>
            </div>
            <div
              className="cv-agent-card relative p-6 lg:p-8 cursor-default flex flex-col overflow-hidden"
              data-reveal
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                "--rv-t": "translateY(24px)",
              }}
            >
              <div
                className="mb-5 flex items-stretch overflow-hidden sm:min-h-[210px]"
                style={{ minHeight: "150px" }}
              >
                <div className="w-full min-w-0 self-start">
                  <div
                    className="rounded-lg overflow-hidden"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div
                      className="grid gap-3 px-3 py-2"
                      style={{
                        gridTemplateColumns: "1fr auto auto",
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                      }}
                    >
                      <span
                        className="text-[9px] uppercase tracking-wider"
                        style={{ color: "rgba(255,255,255,0.65)" }}
                      >
                        Token
                      </span>
                      <span
                        className="text-[9px] uppercase tracking-wider"
                        style={{ color: "rgba(255,255,255,0.65)" }}
                      >
                        Safety
                      </span>
                      <span
                        className="text-[9px] uppercase tracking-wider"
                        style={{ color: "rgba(255,255,255,0.65)" }}
                      >
                        Liq
                      </span>
                    </div>
                    <div
                      className="px-3 py-6 text-center font-mono text-[10px] uppercase tracking-wider"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                    >
                      loading new launches…
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mb-4">
                <div
                  className="cv-agent-dot w-4 h-4 rounded-full flex items-center justify-center"
                  style={{ border: "1.5px solid rgba(255,255,255,0.15)" }}
                >
                  <div className="cv-agent-dot-in w-1 h-1 rounded-full"></div>
                </div>
              </div>
              <h3 className="font-heading font-bold text-xl lg:text-2xl leading-tight mb-2">
                Token scanner
              </h3>
              <p className="font-sans text-[15px] leading-relaxed">
                Safety verdict on every new launch
              </p>
              <div
                className="cv-agent-bar absolute bottom-0 left-0"
                style={{ height: "2px", background: "var(--v2-accent)" }}
              ></div>
            </div>
            <div
              className="cv-agent-card relative p-6 lg:p-8 cursor-default flex flex-col overflow-hidden"
              data-reveal
              style={{
                borderRight: "1px solid rgba(255,255,255,0.08)",
                "--rv-t": "translateY(24px)",
              }}
            >
              <div
                className="mb-5 flex items-stretch overflow-hidden sm:min-h-[210px]"
                style={{ minHeight: "150px" }}
              >
                <div className="w-full min-w-0 self-start">
                  <div
                    className="rounded-lg overflow-hidden"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div
                      className="flex items-center justify-between px-3 py-2.5"
                      style={{
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                      }}
                    >
                      <span
                        className="font-mono text-[11px] truncate"
                        style={{ color: "rgba(255,255,255,0.70)" }}
                      >
                        platform
                      </span>
                      <span
                        className="font-mono text-[9px] font-bold tracking-[0.12em] px-1.5 py-0.5 rounded"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          color: "rgba(255,255,255,0.5)",
                        }}
                      >
                        LIVE
                      </span>
                    </div>
                    <PlatformStats />
                  </div>
                </div>
              </div>
              <div className="flex justify-center mb-4">
                <div
                  className="cv-agent-dot w-4 h-4 rounded-full flex items-center justify-center"
                  style={{ border: "1.5px solid rgba(255,255,255,0.15)" }}
                >
                  <div className="cv-agent-dot-in w-1 h-1 rounded-full"></div>
                </div>
              </div>
              <h3 className="font-heading font-bold text-xl lg:text-2xl leading-tight mb-2">
                Auto trader
              </h3>
              <p className="font-sans text-[15px] leading-relaxed">
                Fire strategies the moment triggers hit
              </p>
              <div
                className="cv-agent-bar absolute bottom-0 left-0"
                style={{ height: "2px", background: "var(--v2-accent)" }}
              ></div>
            </div>
            <div
              className="cv-agent-card relative p-6 lg:p-8 cursor-default flex flex-col overflow-hidden"
              data-reveal
              style={{ "--rv-t": "translateY(24px)" }}
            >
              <div
                className="mb-5 flex items-stretch overflow-hidden sm:min-h-[210px]"
                style={{ minHeight: "150px" }}
              >
                <div className="w-full min-w-0 self-start">
                  <div
                    className="rounded-lg overflow-hidden p-3.5"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="min-w-0">
                        <div
                          className="text-[9px] uppercase tracking-wider"
                          style={{ color: "rgba(255,255,255,0.65)" }}
                        >
                          Public agent
                        </div>
                        <div
                          className="font-heading font-bold text-[14px] mt-0.5 leading-tight truncate"
                          style={{ color: "#ffffff" }}
                        >
                          …
                        </div>
                      </div>
                      <span
                        className="font-mono text-[8.5px] font-bold tracking-[0.12em] px-1.5 py-0.5 rounded"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          color: "rgba(255,255,255,0.45)",
                        }}
                      >
                        PUBLISHED
                      </span>
                    </div>
                    <div
                      className="text-[8px] uppercase tracking-[0.16em] mb-1"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                      Conviction, last 0 passes
                    </div>
                    <div
                      className="flex items-center justify-center font-mono text-[10px] uppercase tracking-wider"
                      style={{
                        height: "56px",
                        color: "rgba(255,255,255,0.45)",
                      }}
                    >
                      no scored pass yet
                    </div>
                    <div
                      className="grid grid-cols-3 gap-2 mt-3 pt-3"
                      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
                    >
                      <div>
                        <div
                          className="text-[8px] uppercase tracking-[0.16em]"
                          style={{ color: "rgba(255,255,255,0.55)" }}
                        >
                          Public agents
                        </div>
                        <div
                          className="font-mono text-[12.5px] font-semibold tabular-nums mt-0.5"
                          style={{ color: "#ffffff" }}
                        >
                          -
                        </div>
                      </div>
                      <div>
                        <div
                          className="text-[8px] uppercase tracking-[0.16em]"
                          style={{ color: "rgba(255,255,255,0.55)" }}
                        >
                          Running
                        </div>
                        <div
                          className="font-mono text-[12.5px] font-semibold tabular-nums mt-0.5"
                          style={{ color: "#ffffff" }}
                        >
                          -
                        </div>
                      </div>
                      <div>
                        <div
                          className="text-[8px] uppercase tracking-[0.16em]"
                          style={{ color: "rgba(255,255,255,0.55)" }}
                        >
                          Smart wallets
                        </div>
                        <div
                          className="font-mono text-[12.5px] font-semibold tabular-nums mt-0.5"
                          style={{ color: "#ffffff" }}
                        >
                          -
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mb-4">
                <div
                  className="cv-agent-dot w-4 h-4 rounded-full flex items-center justify-center"
                  style={{ border: "1.5px solid rgba(255,255,255,0.15)" }}
                >
                  <div className="cv-agent-dot-in w-1 h-1 rounded-full"></div>
                </div>
              </div>
              <h3 className="font-heading font-bold text-xl lg:text-2xl leading-tight mb-2">
                Signal publisher
              </h3>
              <p className="font-sans text-[15px] leading-relaxed">
                Publish your agent. Earn when others clone it
              </p>
              <div
                className="cv-agent-bar absolute bottom-0 left-0"
                style={{ height: "2px", background: "var(--v2-accent)" }}
              ></div>
            </div>
          </div>
          <div
            className="relative z-10 px-6 lg:px-12 py-7"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 max-w-4xl">
              <span
                className="font-mono text-[10px] font-semibold tracking-[0.12em] uppercase shrink-0 pt-1"
                style={{ color: "var(--v2-accent-text)" }}
              >
                ※ AUTONOMY
              </span>
              <p
                className="font-sans text-[14px] leading-relaxed m-0"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Corvid is non-custodial: your wallet, your keys. Agents watch the chain{" "}
                <span style={{ color: "#fff", fontWeight: "600" }}>
                  around the clock
                </span>
                {" "}and alert you. In trading mode they record simulated buys and send no transactions, and every real swap is signed by you.
              </p>
            </div>
          </div>
          <div
            className="relative z-10 flex items-center justify-between px-6 lg:px-12 py-5"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            <span
              className="font-mono text-[10px] tracking-[0.12em] uppercase"
              style={{ color: "rgba(255,255,255, 0.65)" }}
            >
              BUILD · DEPLOY · EARN
            </span>
            <a
              href="/application/agents"
              className="font-mono text-[10px] tracking-[0.14em] uppercase transition-opacity hover:opacity-70 py-3 -my-3"
              style={{ color: "var(--v2-accent-text)" }}
            >
              [ EXPLORE AGENTS → ]
            </a>
          </div>
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
