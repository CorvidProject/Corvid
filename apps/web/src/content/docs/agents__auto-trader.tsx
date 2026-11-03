export function DocsAgentsAutoTraderContent() {
  return (
    <article>
      <div
        className="flex items-center justify-between border-y border-white/[0.08] py-2.5 mb-12 font-mono text-[11px] tracking-[0.2em] uppercase"
        style={{ color: "rgba(255,255,255, 0.65)" }}
      >
        <span>
          <span style={{ color: "var(--v2-accent-text)" }}>●</span>{" "}
          DOC.AGENT.024
        </span>
        <span>AGENTS / AUTO TRADER</span>
      </div>
      <div className="mb-14">
        <span
          className="inline-block font-mono text-[11px] tracking-[0.06em] uppercase mb-6"
          style={{ color: "var(--v2-accent-text)" }}
        >
          [ AUTO TRADER ]
        </span>
        <h1 className="font-heading font-black text-5xl sm:text-6xl tracking-[-0.04em] leading-[0.94] text-white mb-6">
          Signals into swaps
        </h1>
        <p
          className="text-base sm:text-lg leading-relaxed max-w-xl"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          Attach an Auto Trader to any signal source, your own agent or one you
          follow. It converts signals into real swaps inside spending limits you
          set before the agent starts trading.
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
            Two modes
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div
            className="p-5 border border-white/[0.08]"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <div
              className="font-mono text-[11px] tracking-[0.06em] uppercase mb-3"
              style={{ color: "var(--v2-accent-text)" }}
            >
              01 · PAPER
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Paper mode (default)
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Every buy or sell is simulated with live prices. No real ETH
              moves. Use it to sanity-check a strategy before you risk capital
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
              02 · LIVE
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Live mode
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Real swaps execute immediately within the per-trade, rolling
              24-hour, and optional token limits configured on the agent
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
            [ 02 ]
          </span>
          <h2 className="font-heading font-bold text-[26px] tracking-[-0.02em] text-white m-0 p-0 border-0">
            The execution flow
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
                background: "#14191d",
                border: "1px solid rgba(var(--v2-accent-rgb),0.5)",
                color: "var(--v2-accent-text)",
              }}
            >
              01
            </span>
            <h3 className="font-heading font-semibold text-base text-white m-0 mb-1">
              Source agent fires a signal
            </h3>
            <p
              className="text-[14px] m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              The signal lands in your inbox like any other
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
                background: "#14191d",
                border: "1px solid rgba(var(--v2-accent-rgb),0.5)",
                color: "var(--v2-accent-text)",
              }}
            >
              02
            </span>
            <h3 className="font-heading font-semibold text-base text-white m-0 mb-1">
              Limits are reserved atomically
            </h3>
            <p
              className="text-[14px] m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              The agent checks its per-trade, rolling 24-hour, and optional
              token limits
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
                background: "#14191d",
                border: "1px solid rgba(var(--v2-accent-rgb),0.5)",
                color: "var(--v2-accent-text)",
              }}
            >
              03
            </span>
            <h3 className="font-heading font-semibold text-base text-white m-0 mb-1">
              The current quote executes
            </h3>
            <p
              className="text-[14px] m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              An allowed trade is signed immediately; an over-limit trade is
              denied with a reason
            </p>
          </li>
          <li
            className="relative pl-16 pb-6 m-0"
            style={{ borderLeft: "none", marginLeft: "1.5rem" }}
          >
            <span
              className="absolute -left-[1.1rem] top-0 w-9 h-9 flex items-center justify-center font-mono text-[11px] tracking-[0.1em]"
              style={{
                background: "#14191d",
                border: "1px solid rgba(var(--v2-accent-rgb),0.5)",
                color: "var(--v2-accent-text)",
              }}
            >
              04
            </span>
            <h3 className="font-heading font-semibold text-base text-white m-0 mb-1">
              Telegram reports the result
            </h3>
            <p
              className="text-[14px] m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              After execution, the notification includes the side, size, and
              transaction link
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
          ※ Note
        </div>
        <p className="m-0" style={{ color: "rgba(255,255,255,0.70)" }}>
          Live trading is automatic only inside the limits configured on the
          agent. Telegram is a post-trade notification, not an execution gate.
        </p>
      </div>
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a
          className="group flex items-center justify-between p-5 border border-white/[0.08] hover:border-[var(--v2-accent)]/50 transition-colors"
          style={{ background: "rgba(255,255,255,0.02)" }}
          href="/docs/signals/telegram"
        >
          <div>
            <div
              className="font-mono text-[11px] tracking-[0.2em] uppercase mb-1"
              style={{ color: "rgba(255,255,255, 0.65)" }}
            >
              NEXT →
            </div>
            <div className="font-heading font-semibold text-white">
              Telegram setup
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
