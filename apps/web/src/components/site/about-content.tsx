export function AboutContent() {
  return (
    <>
      <main
        className="relative min-h-screen pt-28 pb-24"
        style={{ background: "#14191d" }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0030cf 1px, transparent 1px), linear-gradient(to bottom, #0030cf 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 60% 50% at 50% 0%, #000 0%, transparent 80%)",
          }}
        ></div>
        <div
          aria-hidden="true"
          className="fixed left-0 top-0 z-30 h-full w-[2px] pointer-events-none"
          style={{ background: "rgba(0,48,207,0.06)" }}
        >
          <div
            className="w-full"
            style={{
              height: "0%",
              background: "#0030cf",
              transition: "height 100ms linear",
            }}
          ></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div
            className="flex items-center justify-between border-y border-white/[0.08] py-3 mb-16"
            style={{
              color: "#A9B5C2",
              fontFamily: "var(--font-jetbrains-mono,ui-monospace,monospace)",
              fontSize: "10px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            <span>
              <span style={{ color: "#0030cf" }}>●</span> DOC.ABT.v2026.09
            </span>
            <span className="hidden sm:inline">CORVID · LEGAL SERIES</span>
            <span>LAST REV · SEPTEMBER 30, 2026</span>
          </div>
          <header className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <span
                className="inline-block font-mono text-[10px] tracking-[0.06em] uppercase mb-8"
                style={{ color: "#0030cf" }}
              >
                [ DOCUMENT · 03 / ABOUT ]
              </span>
              <h1 className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl tracking-[-0.04em] leading-[0.92] text-white">
                <span className="inline-block mr-3">About</span>
                <span className="inline-block mr-3">Corvid</span>
              </h1>
              <p
                className="mt-8 max-w-xl text-base leading-relaxed"
                style={{ color: "#A9B5C2" }}
              >
                Who operates this service, how to reach a human, and which
                accounts speak for us
              </p>
            </div>
            <aside className="lg:col-span-4 lg:pt-2">
              <div
                className="relative rounded-sm border border-white/[0.08] p-5"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <span
                  className="absolute -top-2 left-4 px-2 font-mono text-[9px] tracking-[0.06em] uppercase"
                  style={{ color: "#A9B5C2", background: "#14191d" }}
                >
                  SUMMARY
                </span>
                <ul
                  className="space-y-2.5 text-[13px]"
                  style={{ color: "#A9B5C2" }}
                >
                  <li className="flex gap-2">
                    <span style={{ color: "#0030cf" }}>→</span> Plain English
                    where possible
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: "#0030cf" }}>→</span> Scroll or jump
                    via the left index
                  </li>
                </ul>
                <div
                  className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between"
                  style={{
                    color: "#A9B5C2",
                    fontFamily:
                      "var(--font-jetbrains-mono,ui-monospace,monospace)",
                    fontSize: "9px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  <span>BINDING</span>
                  <span>JURISDICTION · INTL.</span>
                </div>
              </div>
            </aside>
          </header>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <nav className="lg:col-span-3 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
              <div
                className="font-mono text-[9px] tracking-[0.06em] uppercase mb-4"
                style={{ color: "#A9B5C2" }}
              >
                // INDEX
              </div>
              <ul className="space-y-0.5">
                <li>
                  <a
                    href="#company"
                    className="group flex items-center gap-3 py-2 pl-3 pr-2 border-l-2 transition-colors"
                    style={{
                      borderColor: "#0030cf",
                      color: "#FFFFFF",
                      background: "rgba(0,48,207,0.04)",
                      fontFamily:
                        "var(--font-jetbrains-mono,ui-monospace,monospace)",
                      fontSize: "11px",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    <span style={{ color: "#0030cf" }}>01</span>
                    <span>Company</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#product"
                    className="group flex items-center gap-3 py-2 pl-3 pr-2 border-l-2 transition-colors"
                    style={{
                      borderColor: "rgba(255,255,255,0.06)",
                      color: "#A9B5C2",
                      background: "transparent",
                      fontFamily:
                        "var(--font-jetbrains-mono,ui-monospace,monospace)",
                      fontSize: "11px",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    <span style={{ color: "#A9B5C2" }}>02</span>
                    <span>What We Build</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="group flex items-center gap-3 py-2 pl-3 pr-2 border-l-2 transition-colors"
                    style={{
                      borderColor: "rgba(255,255,255,0.06)",
                      color: "#A9B5C2",
                      background: "transparent",
                      fontFamily:
                        "var(--font-jetbrains-mono,ui-monospace,monospace)",
                      fontSize: "11px",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    <span style={{ color: "#A9B5C2" }}>03</span>
                    <span>Contact</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#official"
                    className="group flex items-center gap-3 py-2 pl-3 pr-2 border-l-2 transition-colors"
                    style={{
                      borderColor: "rgba(255,255,255,0.06)",
                      color: "#A9B5C2",
                      background: "transparent",
                      fontFamily:
                        "var(--font-jetbrains-mono,ui-monospace,monospace)",
                      fontSize: "11px",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    <span style={{ color: "#A9B5C2" }}>04</span>
                    <span>Official Accounts</span>
                  </a>
                </li>
              </ul>
              <div
                className="mt-8 pt-6 border-t border-white/[0.06] space-y-2"
                style={{
                  color: "#A9B5C2",
                  fontFamily:
                    "var(--font-jetbrains-mono,ui-monospace,monospace)",
                  fontSize: "9px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                <a
                  className="flex items-center justify-between hover:text-white transition-colors"
                  href="/privacy"
                >
                  <span>PRIVACY</span>
                  <span>↗</span>
                </a>
                <a
                  className="flex items-center justify-between hover:text-white transition-colors"
                  href="/docs"
                >
                  <span>DOCS</span>
                  <span>↗</span>
                </a>
              </div>
            </nav>
            <div className="lg:col-span-9 legal-prose">
              <section id="company" className="scroll-mt-28 mb-14">
                <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
                  <span
                    className="font-mono text-[11px] tracking-[0.2em]"
                    style={{ color: "#0030cf" }}
                  >
                    [ 01 ]
                  </span>
                  <h2 className="font-heading text-[28px] sm:text-[34px] tracking-[-0.01em] text-white leading-tight">
                    Company
                  </h2>
                </div>
                <div className="max-w-[70ch]">
                  <p>
                    Corvid is a trading technology platform. Operated by the
                    Corvid team, which operates the service at corvid.example.
                  </p>
                  <p>
                    We are a small engineering team. The product is built and
                    run by the people who write it, and the address below
                    reaches them rather than a queue.
                  </p>
                </div>
              </section>
              <section id="product" className="scroll-mt-28 mb-14">
                <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
                  <span
                    className="font-mono text-[11px] tracking-[0.2em]"
                    style={{ color: "#0030cf" }}
                  >
                    [ 02 ]
                  </span>
                  <h2 className="font-heading text-[28px] sm:text-[34px] tracking-[-0.01em] text-white leading-tight">
                    What We Build
                  </h2>
                </div>
                <div className="max-w-[70ch]">
                  <p>
                    Autonomous on-chain trading agents and analysis tools for
                    Solana. The platform lets you assess a token before touching
                    it, follow wallets that trade well, and run automated
                    strategies from a wallet you control.
                  </p>
                  <p>
                    Agents execute from their own wallets, funded by you and
                    withdrawable by you at any time. We do not take custody of
                    funds beyond what you deliberately move into an agent.
                  </p>
                </div>
              </section>
              <section id="contact" className="scroll-mt-28 mb-14">
                <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
                  <span
                    className="font-mono text-[11px] tracking-[0.2em]"
                    style={{ color: "#0030cf" }}
                  >
                    [ 03 ]
                  </span>
                  <h2 className="font-heading text-[28px] sm:text-[34px] tracking-[-0.01em] text-white leading-tight">
                    Contact
                  </h2>
                </div>
                <div className="max-w-[70ch]">
                  <p>
                    General and business enquiries:{" "}
                    <a href="mailto:contact@corvid.example">
                      contact@corvid.example
                    </a>
                  </p>
                  <p>
                    Account or trading support:{" "}
                    <a href="mailto:contact@corvid.example">
                      contact@corvid.example
                    </a>
                  </p>
                  <p>
                    We answer email. It is the fastest way to reach us about
                    anything that involves your account, and the only channel
                    where we will discuss it.
                  </p>
                </div>
              </section>
              <section id="official" className="scroll-mt-28 mb-14">
                <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
                  <span
                    className="font-mono text-[11px] tracking-[0.2em]"
                    style={{ color: "#0030cf" }}
                  >
                    [ 04 ]
                  </span>
                  <h2 className="font-heading text-[28px] sm:text-[34px] tracking-[-0.01em] text-white leading-tight">
                    Official Accounts
                  </h2>
                </div>
                <div className="max-w-[70ch]">
                  <p>
                    These are the only accounts that speak for Corvid. Anything
                    else claiming to be us is not.
                  </p>
                  <ul>
                    <li>
                      Website:{" "}
                      <a href="https://corvid.example">corvid.example</a>
                    </li>
                    <li>
                      X:{" "}
                      <a
                        href="https://x.com/PLACEHOLDER"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        @PLACEHOLDER
                      </a>
                    </li>
                    <li>
                      Telegram:{" "}
                      <a
                        href="https://t.me/PLACEHOLDER"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        t.me/PLACEHOLDER
                      </a>
                    </li>
                    <li>
                      Email:{" "}
                      <a href="mailto:contact@corvid.example">
                        contact@corvid.example
                      </a>
                    </li>
                  </ul>
                  <div
                    className="my-5 pl-4 py-3 pr-4 relative"
                    style={{
                      background: "rgba(0,48,207,0.05)",
                      borderLeft: "2px solid #0030cf",
                    }}
                  >
                    <div
                      className="font-mono text-[10px] tracking-[0.2em] uppercase mb-1.5"
                      style={{ color: "#0030cf" }}
                    >
                      ※ We will never ask for a seed phrase
                    </div>
                    <div style={{ color: "#A9B5C2" }}>
                      No member of our team will ever ask for your seed phrase,
                      private key, or to send funds to an address for any
                      reason. Anyone who does is impersonating us, whatever
                      account they are writing from.
                    </div>
                  </div>
                </div>
              </section>
              <div
                className="mt-20 pt-8 border-t border-white/[0.08] flex flex-wrap items-center gap-6"
                style={{
                  color: "#A9B5C2",
                  fontFamily:
                    "var(--font-jetbrains-mono,ui-monospace,monospace)",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                <span style={{ color: "#0030cf" }}>● END OF DOCUMENT</span>
                <span>·</span>
                <span>DOC.ABT.v2026.09</span>
                <span>·</span>
                <a
                  href="#top"
                  className="ml-auto inline-flex items-center gap-1.5 transition-all duration-200 hover:brightness-110"
                  style={{
                    color: "#fff",
                    background: "rgba(0,48,207,0.10)",
                    backdropFilter: "blur(14px) saturate(160%)",
                    WebkitBackdropFilter: "blur(14px) saturate(160%)",
                    border: "1px solid rgba(0,48,207,0.32)",
                    borderRadius: "999px",
                    padding: "5px 12px",
                    fontFamily:
                      "var(--font-jetbrains-mono,ui-monospace,monospace)",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    boxShadow:
                      "0 4px 16px -4px rgba(0,48,207,0.30), inset 0 1px 0 rgba(255,255,255,0.10)",
                  }}
                >
                  ↑ TOP
                </a>
              </div>
            </div>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n        .legal-prose { color: rgba(255,255,255,0.70); font-size: 15px; line-height: 1.75; }\n        .legal-prose p { margin: 0 0 1rem; }\n        .legal-prose ul { margin: 0.5rem 0 1.25rem 0; padding: 0; list-style: none; }\n        .legal-prose ul li { position: relative; padding: 0.25rem 0 0.25rem 1.5rem; margin: 0 0 0.35rem; }\n        .legal-prose ul li::before {\n          content: "\u2192";\n          position: absolute; left: 0;\n          color: #0030cf;\n          font-family: var(--font-jetbrains-mono), ui-monospace, monospace;\n        }\n        .legal-prose a { color: #0030cf; text-decoration: none; border-bottom: 1px dotted rgba(0,48,207,0.5); transition: color 120ms, border-color 120ms; }\n        .legal-prose a:hover { color: #fff; border-bottom-color: #fff; }\n        .legal-prose strong { color: #fff; font-weight: 600; }\n        .legal-prose .legal-caps { font-family: var(--font-jetbrains-mono), ui-monospace, monospace; font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(255,255,255,0.55); }\n        \n      ',
          }}
        />
      </main>
    </>
  );
}
