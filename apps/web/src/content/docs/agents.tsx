export function DocsAgentsContent() {
  return (
    <article>
      <div
        className="flex items-center justify-between border-y border-white/[0.08] py-2.5 mb-12 font-mono text-[11px] tracking-[0.2em] uppercase"
        style={{ color: "rgba(255,255,255, 0.65)" }}
      >
        <span>
          <span style={{ color: "var(--v2-accent-text)" }}>●</span> DOC.PIPE.020
        </span>
        <span>PIPELINES</span>
      </div>
      <div className="mb-14">
        <span
          className="inline-block font-mono text-[11px] tracking-[0.06em] uppercase mb-6"
          style={{ color: "var(--v2-accent-text)" }}
        >
          [ PIPELINES ]
        </span>
        <h1 className="font-heading font-black text-5xl sm:text-6xl tracking-[-0.04em] leading-[0.94] text-white mb-6">
          Three types, two modes
        </h1>
        <p
          className="text-base sm:text-lg leading-relaxed max-w-xl"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          Every agent is a pipeline: a chain of steps that watches the chain,
          filters noise, and either alerts you or trades for you. You build them
          visually in the pipeline builder. No code.
        </p>
        <p
          className="mt-5 text-sm leading-relaxed max-w-xl px-3.5 py-2.5 border border-white/[0.10]"
          style={{
            color: "rgba(255,255,255,0.65)",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <span
            className="font-mono text-[11px] uppercase tracking-[0.08em] mr-2"
            style={{ color: "var(--v2-accent-text)" }}
          >
            Beta
          </span>
          Agents are in active development. What is described here runs today;
          details change as we ship. Start with small amounts and set trade
          limits.
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
            Pick your pipeline
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-3">
          <a
            className="group relative p-5 border border-white/[0.08] hover:border-[var(--v2-accent)]/50 transition-all"
            style={{ background: "rgba(255,255,255,0.02)" }}
            href="/docs/agents/follow-wallet"
          >
            <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[var(--v2-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[var(--v2-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-[var(--v2-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[var(--v2-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <div className="flex items-center justify-between mb-3 font-mono text-[11px] tracking-[0.06em] uppercase">
              <span style={{ color: "var(--v2-accent-text)" }}>
                01 · WALLET
              </span>
              <span
                style={{ color: "rgba(255,255,255, 0.65)" }}
                className="group-hover:text-white transition-colors"
              >
                ↗
              </span>
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Follow Wallet
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Watch a wallet. When it buys or sells, your agent copies the trade
              or sends you a signal
            </p>
          </a>
          <a
            className="group relative p-5 border border-white/[0.08] hover:border-[var(--v2-accent)]/50 transition-all"
            style={{ background: "rgba(255,255,255,0.02)" }}
            href="/docs/agents/new-tokens"
          >
            <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[var(--v2-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[var(--v2-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-[var(--v2-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[var(--v2-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <div className="flex items-center justify-between mb-3 font-mono text-[11px] tracking-[0.06em] uppercase">
              <span style={{ color: "var(--v2-accent-text)" }}>
                02 · TOKENS
              </span>
              <span
                style={{ color: "rgba(255,255,255, 0.65)" }}
                className="group-hover:text-white transition-colors"
              >
                ↗
              </span>
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              New Tokens
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Scan every new Raydium and Raydium pool. Filter by safety checks,
              snipe the ones that pass
            </p>
          </a>
          <a
            className="group relative p-5 border border-white/[0.08] hover:border-[var(--v2-accent)]/50 transition-all"
            style={{ background: "rgba(255,255,255,0.02)" }}
            href="/docs/agents/token-trading"
          >
            <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[var(--v2-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[var(--v2-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-[var(--v2-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[var(--v2-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <div className="flex items-center justify-between mb-3 font-mono text-[11px] tracking-[0.06em] uppercase">
              <span style={{ color: "var(--v2-accent-text)" }}>
                03 · TRADING
              </span>
              <span
                style={{ color: "rgba(255,255,255, 0.65)" }}
                className="group-hover:text-white transition-colors"
              >
                ↗
              </span>
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Token Trading
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Watch a specific token. Set triggers for price drops, volume
              spikes, or market cap thresholds. Trade or alert
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
            Signal vs Trading mode
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          <div
            className="p-5 border border-white/[0.08]"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <div
              className="font-mono text-[11px] tracking-[0.06em] uppercase mb-3"
              style={{ color: "var(--v2-accent-text)" }}
            >
              01 · SIGNAL
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Signal mode
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Alerts only. No SOL moves. You get notified when conditions match
              and decide what to do yourself
            </p>
          </div>
          <div
            className="p-5 border border-white/[0.08]"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <div
              className="font-mono text-[11px] tracking-[0.06em] uppercase mb-3"
              style={{ color: "var(--v2-accent-text)" }}
            >
              02 · TRADING
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Trading mode
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Real execution. Approved swaps happen automatically on the agent's
              selected network using funds from your Trading Wallet
            </p>
          </div>
        </div>
        <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.50)" }}>
          You can switch modes at any time from the agent page. Trading mode
          requires a funded platform wallet.
        </p>
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
            The four steps
          </h2>
        </div>
        <p className="mb-5" style={{ color: "rgba(255,255,255,0.70)" }}>
          Every pipeline is four connected nodes. You configure each one in the
          builder:
        </p>
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
                background: "#0A0A0F",
                border: "1px solid rgba(var(--v2-accent-rgb),0.5)",
                color: "var(--v2-accent-text)",
              }}
            >
              01
            </span>
            <div
              className="font-mono text-[11px] tracking-[0.06em] uppercase mb-1.5"
              style={{ color: "var(--v2-accent-text)" }}
            >
              SOURCE
            </div>
            <h3 className="font-heading font-semibold text-[17px] text-white m-0 mb-1.5 tracking-[-0.01em]">
              Source
            </h3>
            <p
              className="text-[14px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.60)" }}
            >
              Where the data comes from. A wallet address, a pool scanner, or a
              token address
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
                background: "#0A0A0F",
                border: "1px solid rgba(var(--v2-accent-rgb),0.5)",
                color: "var(--v2-accent-text)",
              }}
            >
              02
            </span>
            <div
              className="font-mono text-[11px] tracking-[0.06em] uppercase mb-1.5"
              style={{ color: "var(--v2-accent-text)" }}
            >
              FILTER
            </div>
            <h3 className="font-heading font-semibold text-[17px] text-white m-0 mb-1.5 tracking-[-0.01em]">
              Filter
            </h3>
            <p
              className="text-[14px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.60)" }}
            >
              Rules that decide what gets through. Trade size, LP depth,
              contract flags, win rate, and more
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
                background: "#0A0A0F",
                border: "1px solid rgba(var(--v2-accent-rgb),0.5)",
                color: "var(--v2-accent-text)",
              }}
            >
              03
            </span>
            <div
              className="font-mono text-[11px] tracking-[0.06em] uppercase mb-1.5"
              style={{ color: "var(--v2-accent-text)" }}
            >
              EXECUTE
            </div>
            <h3 className="font-heading font-semibold text-[17px] text-white m-0 mb-1.5 tracking-[-0.01em]">
              Execute
            </h3>
            <p
              className="text-[14px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.60)" }}
            >
              In signal mode, the alert goes straight to notify. In trading
              mode, the shared executor routes the swap through Jupiter or
              Jupiter on Solana
            </p>
          </li>
          <li
            className="relative pl-16 pb-6 m-0"
            style={{ borderLeft: "none", marginLeft: "1.5rem" }}
          >
            <span
              className="absolute -left-[1.1rem] top-0 w-9 h-9 flex items-center justify-center font-mono text-[11px] tracking-[0.1em]"
              style={{
                background: "#0A0A0F",
                border: "1px solid rgba(var(--v2-accent-rgb),0.5)",
                color: "var(--v2-accent-text)",
              }}
            >
              04
            </span>
            <div
              className="font-mono text-[11px] tracking-[0.06em] uppercase mb-1.5"
              style={{ color: "var(--v2-accent-text)" }}
            >
              NOTIFY
            </div>
            <h3 className="font-heading font-semibold text-[17px] text-white m-0 mb-1.5 tracking-[-0.01em]">
              Notify
            </h3>
            <p
              className="text-[14px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.60)" }}
            >
              Signal lands in your inbox. If Telegram is connected, it pushes to
              your phone too
            </p>
          </li>
        </ol>
      </div>
      <div
        className="mb-12 relative pl-4 py-3"
        style={{
          borderLeft: "2px solid var(--v2-accent)",
          background: "rgba(var(--v2-accent-rgb),0.05)",
        }}
      >
        <div
          className="font-mono text-[11px] tracking-[0.2em] uppercase mb-1.5"
          style={{ color: "var(--v2-accent-text)" }}
        >
          ※ Safety
        </div>
        <p className="m-0" style={{ color: "rgba(255,255,255,0.70)" }}>
          Every trade goes through an 11-rule safety gate before execution:
          daily caps, duplicate checks, slippage limits, liquidity depth, and
          more. If any rule fails, the trade is blocked and you get a
          notification explaining why
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
            Trading Wallet and limits
          </h2>
        </div>
        <p className="mb-5" style={{ color: "rgba(255,255,255,0.70)" }}>
          Trading agents use your shared Trading Wallet on their selected
          network. They cannot trade until you explicitly set both a per-trade
          limit and a rolling 24-hour limit for that agent.
        </p>
        <div className="flex flex-col gap-2.5">
          <div
            className="p-4 border border-white/[0.08] flex flex-col sm:flex-row items-start gap-2 sm:gap-4"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <h3 className="font-heading font-semibold text-[13px] text-white shrink-0 sm:w-[200px] m-0">
              One wallet per network
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.60)" }}
            >
              Agents use the Solana side of your Trading Wallet. They use its Solana
              side. You fund and withdraw from the same Portfolio surface.
            </p>
          </div>
          <div
            className="p-4 border border-white/[0.08] flex flex-col sm:flex-row items-start gap-2 sm:gap-4"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <h3 className="font-heading font-semibold text-[13px] text-white shrink-0 sm:w-[200px] m-0">
              You set the limits
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.60)" }}
            >
              The per-trade and rolling 24-hour limits start empty. Until you
              set both, execution is locked. An optional token allowlist can
              narrow what the agent may buy.
            </p>
          </div>
          <div
            className="p-4 border border-white/[0.08] flex flex-col sm:flex-row items-start gap-2 sm:gap-4"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <h3 className="font-heading font-semibold text-[13px] text-white shrink-0 sm:w-[200px] m-0">
              Atomic authorization
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.60)" }}
            >
              Limit checks and spend reservations happen together before the
              signer is loaded. Two simultaneous trades cannot both claim the
              same remaining daily allowance.
            </p>
          </div>
          <div
            className="p-4 border border-white/[0.08] flex flex-col sm:flex-row items-start gap-2 sm:gap-4"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <h3 className="font-heading font-semibold text-[13px] text-white shrink-0 sm:w-[200px] m-0">
              Visible decisions
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.60)" }}
            >
              The agent page records executions and denials with the network,
              stage, reason, and transaction signature when one exists. A
              blocked trade is shown as blocked, not as an empty log.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-16">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span
            className="font-mono text-[11px] tracking-[0.2em]"
            style={{ color: "var(--v2-accent-text)" }}
          >
            [ 05 ]
          </span>
          <h2 className="font-heading font-bold text-[26px] tracking-[-0.02em] text-white m-0 p-0 border-0">
            Common questions
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          <details
            className="group border border-white/[0.08] px-4 py-3"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <summary className="cursor-pointer font-heading font-semibold text-[14px] text-white list-none flex items-start justify-between gap-3">
              <span className="break-words">Can an agent steal my funds?</span>
              <span className="font-mono text-[var(--v2-accent)] group-open:rotate-45 transition-transform shrink-0">
                +
              </span>
            </summary>
            <p
              className="mt-3 text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Trading agents share your custodial Trading Wallet, so a separate
              sub-wallet does not isolate the balance. The protection is
              explicit authorization: trading starts locked, every agent has its
              own per-trade and rolling 24-hour limits, and all swaps pass
              through the same guarded executor. Keep only the amount you are
              prepared to automate in the Trading Wallet.
            </p>
          </details>
          <details
            className="group border border-white/[0.08] px-4 py-3"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <summary className="cursor-pointer font-heading font-semibold text-[14px] text-white list-none flex items-start justify-between gap-3">
              <span className="break-words">
                Does an LLM decide every trade?
              </span>
              <span className="font-mono text-[var(--v2-accent)] group-open:rotate-45 transition-transform shrink-0">
                +
              </span>
            </summary>
            <p
              className="mt-3 text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Only the ones you configure that way. Filter nodes are
              deterministic code: if a wallet buys more than 0.5 SOL of a pool
              with $10k+ liquidity and no mint authority, the trade fires. No AI
              in that path. Separately, a Token Analyst node can ask an LLM for
              a qualitative take on a mint before the trade fires. That is the
              only place credits burn per-run and the only place latency creeps
              up.
            </p>
          </details>
          <details
            className="group border border-white/[0.08] px-4 py-3"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <summary className="cursor-pointer font-heading font-semibold text-[14px] text-white list-none flex items-start justify-between gap-3">
              <span className="break-words">
                How do I know what an agent just did?
              </span>
              <span className="font-mono text-[var(--v2-accent)] group-open:rotate-45 transition-transform shrink-0">
                +
              </span>
            </summary>
            <p
              className="mt-3 text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Every agent has a Decisions log on its page. Every signal it
              emitted, every trade it fired, every rule that blocked a trade,
              every credit it burned, timestamped and linked to the source event
              on-chain. Nothing happens invisibly. If something looks wrong, the
              log tells you which filter approved it.
            </p>
          </details>
          <details
            className="group border border-white/[0.08] px-4 py-3"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <summary className="cursor-pointer font-heading font-semibold text-[14px] text-white list-none flex items-start justify-between gap-3">
              <span className="break-words">
                What stops an agent from draining my allocation in a night?
              </span>
              <span className="font-mono text-[var(--v2-accent)] group-open:rotate-45 transition-transform shrink-0">
                +
              </span>
            </summary>
            <p
              className="mt-3 text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              You set a per-trade limit and a rolling 24-hour spend limit in the
              network's native coin. The server reserves that allowance
              atomically before signing, so parallel requests cannot overspend
              it. A denial is recorded with its reason and does not take the
              execution tool fee.
            </p>
          </details>
          <details
            className="group border border-white/[0.08] px-4 py-3"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <summary className="cursor-pointer font-heading font-semibold text-[14px] text-white list-none flex items-start justify-between gap-3">
              <span className="break-words">
                Do I pay the creator when I follow their agent?
              </span>
              <span className="font-mono text-[var(--v2-accent)] group-open:rotate-45 transition-transform shrink-0">
                +
              </span>
            </summary>
            <p
              className="mt-3 text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Following is free: subscribers receive every signal at no credit
              cost. The agent's owner pays the inference credits it burns (0.1
              for a signal, 0.5 for a trade), 25% comes back to you as cashback
              credits. Your trading profit on the actual swap belongs to you in
              full.
            </p>
          </details>
          <details
            className="group border border-white/[0.08] px-4 py-3"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <summary className="cursor-pointer font-heading font-semibold text-[14px] text-white list-none flex items-start justify-between gap-3">
              <span className="break-words">
                What happens when an agent dies or I pause it?
              </span>
              <span className="font-mono text-[var(--v2-accent)] group-open:rotate-45 transition-transform shrink-0">
                +
              </span>
            </summary>
            <p
              className="mt-3 text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Scheduler stops opening new trades for that agent immediately.
              Open positions stay in your Trading Wallet, and take-profit or
              stop-loss protection may still close them. Resume the agent to
              allow new entries again.
            </p>
          </details>
        </div>
      </div>
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a
          className="group flex items-center justify-between p-5 border border-white/[0.08] hover:border-[var(--v2-accent)]/50 transition-colors"
          style={{ background: "rgba(255,255,255,0.02)" }}
          href="/docs/agents/follow-wallet"
        >
          <div>
            <div
              className="font-mono text-[11px] tracking-[0.2em] uppercase mb-1"
              style={{ color: "rgba(255,255,255, 0.65)" }}
            >
              NEXT →
            </div>
            <div className="font-heading font-semibold text-white">
              Follow Wallet
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
          href="/docs/agents/templates"
        >
          <div>
            <div
              className="font-mono text-[11px] tracking-[0.2em] uppercase mb-1"
              style={{ color: "rgba(255,255,255, 0.65)" }}
            >
              DEEP DIVE →
            </div>
            <div className="font-heading font-semibold text-white">
              Templates
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
