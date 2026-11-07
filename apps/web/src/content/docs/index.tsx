export function DocsContent() {
  return (
    <article>
      <div
        className="flex items-center justify-between border-y border-white/[0.08] py-2.5 mb-12 font-mono text-[11px] tracking-[0.2em] uppercase"
        style={{ color: "rgba(255,255,255, 0.65)" }}
      >
        <span>
          <span style={{ color: "var(--v2-accent-text)" }}>●</span>{" "}
          DOC.INTRO.001
        </span>
        <span>GETTING STARTED</span>
      </div>
      <div className="mb-14">
        <span
          className="inline-block font-mono text-[11px] tracking-[0.06em] uppercase mb-6"
          style={{ color: "var(--v2-accent-text)" }}
        >
          [ INTRODUCTION ]
        </span>
        <h1 className="font-heading font-black text-5xl sm:text-6xl tracking-[-0.04em] leading-[0.94] text-white mb-6">
          The manual
        </h1>
        <p
          className="text-base sm:text-lg leading-relaxed max-w-xl"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          Corvid runs autonomous trading agents on Robinhood Chain. You build pipelines
          that watch the chain, filter noise, and either alert you or trade for
          you. Every swap pays a 1% platform fee via Uniswap; 20-40% of that fee
          comes right back to you as ETH cashback.
        </p>
      </div>
      <div className="mb-16">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span
            className="font-mono text-[11px] tracking-[0.2em]"
            style={{ color: "var(--v2-accent-text)" }}
          >
            [ 01 ]
          </span>
          <h2 className="font-heading font-bold text-[26px] tracking-[-0.02em] text-white m-0 p-0 border-0">
            What you can do
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            className="group relative p-5 border border-white/[0.08] hover:border-[var(--v2-accent)]/50 transition-all"
            style={{ background: "rgba(255,255,255,0.02)" }}
            href="/docs/agents"
          >
            <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[var(--v2-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[var(--v2-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-[var(--v2-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[var(--v2-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <div className="flex items-center justify-between mb-3 font-mono text-[11px] tracking-[0.06em] uppercase">
              <span style={{ color: "var(--v2-accent-text)" }}>
                01 · PIPELINES
              </span>
              <span
                style={{ color: "rgba(255,255,255, 0.65)" }}
                className="group-hover:text-white transition-colors"
              >
                ↗
              </span>
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Visual pipeline builder
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Three pipeline types: Follow Wallet, New Tokens, Token Trading.
              Each one runs in signal or trading mode
            </p>
          </a>
          <a
            className="group relative p-5 border border-white/[0.08] hover:border-[var(--v2-accent)]/50 transition-all"
            style={{ background: "rgba(255,255,255,0.02)" }}
            href="/docs/following"
          >
            <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[var(--v2-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[var(--v2-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-[var(--v2-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[var(--v2-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <div className="flex items-center justify-between mb-3 font-mono text-[11px] tracking-[0.06em] uppercase">
              <span style={{ color: "var(--v2-accent-text)" }}>
                02 · FOLLOW
              </span>
              <span
                style={{ color: "rgba(255,255,255, 0.65)" }}
                className="group-hover:text-white transition-colors"
              >
                ↗
              </span>
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Follow and earn cashback
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Follow any agent for free. Pay a 1% swap fee only when a
              copy-trade actually fires, get 20% of it back as ETH
            </p>
          </a>
          <a
            className="group relative p-5 border border-white/[0.08] hover:border-[var(--v2-accent)]/50 transition-all"
            style={{ background: "rgba(255,255,255,0.02)" }}
            href="/docs/signals"
          >
            <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[var(--v2-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[var(--v2-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-[var(--v2-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[var(--v2-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <div className="flex items-center justify-between mb-3 font-mono text-[11px] tracking-[0.06em] uppercase">
              <span style={{ color: "var(--v2-accent-text)" }}>
                03 · SIGNALS
              </span>
              <span
                style={{ color: "rgba(255,255,255, 0.65)" }}
                className="group-hover:text-white transition-colors"
              >
                ↗
              </span>
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Real-time signals
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Whale moves, new pools, price triggers, copy trades. Pushed to
              your inbox, and to Telegram once you link it
            </p>
          </a>
          <a
            className="group relative p-5 border border-white/[0.08] hover:border-[var(--v2-accent)]/50 transition-all"
            style={{ background: "rgba(255,255,255,0.02)" }}
            href="/docs/graduation"
          >
            <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[var(--v2-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[var(--v2-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-[var(--v2-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[var(--v2-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <div className="flex items-center justify-between mb-3 font-mono text-[11px] tracking-[0.06em] uppercase">
              <span style={{ color: "var(--v2-accent-text)" }}>
                04 · GRADUATE
              </span>
              <span
                style={{ color: "rgba(255,255,255, 0.65)" }}
                className="group-hover:text-white transition-colors"
              >
                ↗
              </span>
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Graduation to ERC-20
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Top agents launch their own ERC-20 token with a Uniswap liquidity
              pool funded by the agent's own copy-trade reserve
            </p>
          </a>
          <a
            className="group relative p-5 border border-white/[0.08] hover:border-[var(--v2-accent)]/50 transition-all"
            style={{ background: "rgba(255,255,255,0.02)" }}
            href="/docs/terminal"
          >
            <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[var(--v2-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[var(--v2-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-[var(--v2-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[var(--v2-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <div className="flex items-center justify-between mb-3 font-mono text-[11px] tracking-[0.06em] uppercase">
              <span style={{ color: "var(--v2-accent-text)" }}>
                05 · TERMINAL
              </span>
              <span
                style={{ color: "rgba(255,255,255, 0.65)" }}
                className="group-hover:text-white transition-colors"
              >
                ↗
              </span>
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              On-chain terminal
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Paste any token contract address. Price, holders, risk score, live
              trades on one screen
            </p>
          </a>
          <a
            className="group relative p-5 border border-white/[0.08] hover:border-[var(--v2-accent)]/50 transition-all"
            style={{ background: "rgba(255,255,255,0.02)" }}
            href="/docs/portfolio"
          >
            <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[var(--v2-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[var(--v2-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-[var(--v2-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[var(--v2-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <div className="flex items-center justify-between mb-3 font-mono text-[11px] tracking-[0.06em] uppercase">
              <span style={{ color: "var(--v2-accent-text)" }}>
                06 · CUSTODY
              </span>
              <span
                style={{ color: "rgba(255,255,255, 0.65)" }}
                className="group-hover:text-white transition-colors"
              >
                ↗
              </span>
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Custodial today, exportable always
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Keys encrypted at rest in our infrastructure. The platform signs
              trades for you so agents can run autonomously. Export to MetaMask
              anytime for full self-custody
            </p>
          </a>
        </div>
      </div>
      <div className="mb-16">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span
            className="font-mono text-[11px] tracking-[0.2em]"
            style={{ color: "var(--v2-accent-text)" }}
          >
            [ 02 ]
          </span>
          <h2 className="font-heading font-bold text-[26px] tracking-[-0.02em] text-white m-0 p-0 border-0">
            From zero to your first signal
          </h2>
        </div>
        <ol className="relative pl-0 list-none">
          <li
            className="relative pl-16 pb-6 m-0"
            style={{
              borderLeft: "1px solid rgba(255,255,255,0.08)",
              marginLeft: "1.5rem",
            }}
          >
            <span
              className="absolute -left-[1.1rem] top-0 w-9 h-9 flex items-center justify-center font-mono text-[11px] tracking-[0.1em]"
              style={{
                background: "var(--v2-bg-0)",
                border: "1px solid var(--v2-accent-dim)",
                color: "var(--v2-accent-text)",
              }}
            >
              01
            </span>
            <h3 className="font-heading font-semibold text-base text-white m-0 mb-1">
              Create account
            </h3>
            <p
              className="text-[14px] m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Email or Google. A wallet is generated for you and 25
              free AI analyses land on your account
            </p>
          </li>
          <li
            className="relative pl-16 pb-6 m-0"
            style={{
              borderLeft: "1px solid rgba(255,255,255,0.08)",
              marginLeft: "1.5rem",
            }}
          >
            <span
              className="absolute -left-[1.1rem] top-0 w-9 h-9 flex items-center justify-center font-mono text-[11px] tracking-[0.1em]"
              style={{
                background: "var(--v2-bg-0)",
                border: "1px solid var(--v2-accent-dim)",
                color: "var(--v2-accent-text)",
              }}
            >
              02
            </span>
            <h3 className="font-heading font-semibold text-base text-white m-0 mb-1">
              Browse the marketplace
            </h3>
            <p
              className="text-[14px] m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Public agents with live stats, strategy descriptions, and win
              rates. Follow any of them for free
            </p>
          </li>
          <li
            className="relative pl-16 pb-6 m-0"
            style={{
              borderLeft: "1px solid rgba(255,255,255,0.08)",
              marginLeft: "1.5rem",
            }}
          >
            <span
              className="absolute -left-[1.1rem] top-0 w-9 h-9 flex items-center justify-center font-mono text-[11px] tracking-[0.1em]"
              style={{
                background: "var(--v2-bg-0)",
                border: "1px solid var(--v2-accent-dim)",
                color: "var(--v2-accent-text)",
              }}
            >
              03
            </span>
            <h3 className="font-heading font-semibold text-base text-white m-0 mb-1">
              Follow or build
            </h3>
            <p
              className="text-[14px] m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Follow someone else's agent to get their signals. Or open the
              pipeline builder and create your own from scratch
            </p>
          </li>
          <li
            className="relative pl-16 pb-6 m-0"
            style={{ borderLeft: "none", marginLeft: "1.5rem" }}
          >
            <span
              className="absolute -left-[1.1rem] top-0 w-9 h-9 flex items-center justify-center font-mono text-[11px] tracking-[0.1em]"
              style={{
                background: "var(--v2-bg-0)",
                border: "1px solid var(--v2-accent-dim)",
                color: "var(--v2-accent-text)",
              }}
            >
              04
            </span>
            <h3 className="font-heading font-semibold text-base text-white m-0 mb-1">
              Trade with cashback
            </h3>
            <p
              className="text-[14px] m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              1% swap commission is taken on-chain; 20-40% comes right back to you
              in ETH. No subscriptions, no prepaid balance
            </p>
          </li>
        </ol>
      </div>
      <div className="mb-16">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span
            className="font-mono text-[11px] tracking-[0.2em]"
            style={{ color: "var(--v2-accent-text)" }}
          >
            [ 03 ]
          </span>
          <h2 className="font-heading font-bold text-[26px] tracking-[-0.02em] text-white m-0 p-0 border-0">
            The economy in one picture
          </h2>
        </div>
        <p className="mb-5" style={{ color: "rgba(255,255,255,0.70)" }}>
          1% commission on every swap via Uniswap. Split depends on whether the trade
          was manual or triggered by an agent.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          <div
            className="p-5 border border-white/[0.08]"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <div
              className="font-mono text-[11px] tracking-[0.06em] uppercase mb-3"
              style={{ color: "var(--v2-accent-text)" }}
            >
              MANUAL SWAP
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center">
                <div className="font-heading font-black text-2xl tracking-[-0.02em] text-white">
                  40%
                </div>
                <div
                  className="font-mono text-[11px] tracking-[0.1em] uppercase"
                  style={{ color: "rgba(255,255,255,0.50)" }}
                >
                  Cashback
                </div>
              </div>
              <div className="text-center">
                <div className="font-heading font-black text-2xl tracking-[-0.02em] text-white">
                  30%
                </div>
                <div
                  className="font-mono text-[11px] tracking-[0.1em] uppercase"
                  style={{ color: "rgba(255,255,255,0.50)" }}
                >
                  Burn $CRVD
                </div>
              </div>
              <div className="text-center">
                <div className="font-heading font-black text-2xl tracking-[-0.02em] text-white">
                  30%
                </div>
                <div
                  className="font-mono text-[11px] tracking-[0.1em] uppercase"
                  style={{ color: "rgba(255,255,255,0.50)" }}
                >
                  Treasury
                </div>
              </div>
            </div>
          </div>
          <div
            className="p-5 border border-white/[0.08]"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <div
              className="font-mono text-[11px] tracking-[0.06em] uppercase mb-3"
              style={{ color: "var(--v2-accent-text)" }}
            >
              COPY-TRADE
            </div>
            <div className="grid grid-cols-5 gap-1.5">
              <div className="text-center">
                <div className="font-heading font-black text-xl tracking-[-0.02em] text-white">
                  50%
                </div>
                <div
                  className="font-mono text-[11px] tracking-[0.08em] uppercase"
                  style={{ color: "rgba(255,255,255,0.50)" }}
                >
                  Creator
                </div>
              </div>
              <div className="text-center">
                <div className="font-heading font-black text-xl tracking-[-0.02em] text-white">
                  20%
                </div>
                <div
                  className="font-mono text-[11px] tracking-[0.08em] uppercase"
                  style={{ color: "rgba(255,255,255,0.50)" }}
                >
                  Cashback
                </div>
              </div>
              <div className="text-center">
                <div className="font-heading font-black text-xl tracking-[-0.02em] text-white">
                  15%
                </div>
                <div
                  className="font-mono text-[11px] tracking-[0.08em] uppercase"
                  style={{ color: "rgba(255,255,255,0.50)" }}
                >
                  Reserve
                </div>
              </div>
              <div className="text-center">
                <div className="font-heading font-black text-xl tracking-[-0.02em] text-white">
                  5%
                </div>
                <div
                  className="font-mono text-[11px] tracking-[0.08em] uppercase"
                  style={{ color: "rgba(255,255,255,0.50)" }}
                >
                  Burn
                </div>
              </div>
              <div className="text-center">
                <div className="font-heading font-black text-xl tracking-[-0.02em] text-white">
                  10%
                </div>
                <div
                  className="font-mono text-[11px] tracking-[0.08em] uppercase"
                  style={{ color: "rgba(255,255,255,0.50)" }}
                >
                  Treasury
                </div>
              </div>
            </div>
          </div>
        </div>
        <p style={{ color: "rgba(255,255,255,0.55)" }} className="text-sm">
          Cashback is paid in ETH instantly in the same transaction. Your
          effective fee:{" "}
          <strong className="text-white">0.6% manual / 0.8% copy-trade</strong>,
          20-40% cheaper than Axiom. See{" "}
          <a
            className="text-[var(--v2-accent)] hover:underline"
            href="/docs/economy"
          >
            Economy & Splits
          </a>{" "}
          for the full breakdown.
        </p>
      </div>
      <div className="mb-16">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span
            className="font-mono text-[11px] tracking-[0.2em]"
            style={{ color: "var(--v2-accent-text)" }}
          >
            [ 04 ]
          </span>
          <h2 className="font-heading font-bold text-[26px] tracking-[-0.02em] text-white m-0 p-0 border-0">
            Platform wallet
          </h2>
        </div>
        <div
          className="relative pl-4 py-3"
          style={{
            borderLeft: "2px solid var(--v2-accent)",
            background: "var(--v2-accent-bg)",
          }}
        >
          <div
            className="font-mono text-[11px] tracking-[0.2em] uppercase mb-1.5"
            style={{ color: "var(--v2-accent-text)" }}
          >
            ※ Custodial with encryption + export
          </div>
          <p className="m-0" style={{ color: "rgba(255,255,255,0.70)" }}>
            A wallet is generated the moment you sign up. It holds ETH,
            $CRVD, and any tokens earned via graduation. The private key is
            encrypted at rest in our infrastructure (AES-256-GCM, master key
            never exposed to application code). The platform signs trades on
            your behalf — that's what lets autonomous agents work while you're
            offline. You can export the raw key to MetaMask at any time and take
            full self-custody. If we go dark tomorrow, your funds remain
            accessible directly on-chain via the exported key — no platform
            dependency
          </p>
        </div>
      </div>
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a
          className="group flex items-center justify-between p-5 border border-white/[0.08] hover:border-[var(--v2-accent)]/50 transition-colors"
          style={{ background: "rgba(255,255,255,0.02)" }}
          href="/docs/quick-start"
        >
          <div>
            <div
              className="font-mono text-[11px] tracking-[0.2em] uppercase mb-1"
              style={{ color: "rgba(255,255,255, 0.65)" }}
            >
              NEXT →
            </div>
            <div className="font-heading font-semibold text-white">
              Quick Start
            </div>
          </div>
          <span
            style={{ color: "var(--v2-accent-text)" }}
            className="text-xl group-hover:translate-x-1 transition-transform"
          >
            →
          </span>
        </a>
        <a
          className="group flex items-center justify-between p-5 border border-white/[0.08] hover:border-[var(--v2-accent)]/50 transition-colors"
          style={{ background: "rgba(255,255,255,0.02)" }}
          href="/docs/agents"
        >
          <div>
            <div
              className="font-mono text-[11px] tracking-[0.2em] uppercase mb-1"
              style={{ color: "rgba(255,255,255, 0.65)" }}
            >
              DEEP DIVE →
            </div>
            <div className="font-heading font-semibold text-white">
              How Pipelines Work
            </div>
          </div>
          <span
            style={{ color: "var(--v2-accent-text)" }}
            className="text-xl group-hover:translate-x-1 transition-transform"
          >
            →
          </span>
        </a>
      </div>
    </article>
  );
}
