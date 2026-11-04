export function DocsAgentsSignalBotContent() {
  return (
    <article>
      <div
        className="flex items-center justify-between border-y border-white/[0.08] py-2.5 mb-12 font-mono text-[11px] tracking-[0.2em] uppercase"
        style={{ color: "rgba(255,255,255, 0.65)" }}
      >
        <span>
          <span style={{ color: "var(--v2-accent-text)" }}>●</span>{" "}
          DOC.AGENT.021
        </span>
        <span>AGENTS / SIGNAL BOT</span>
      </div>
      <div className="mb-14">
        <span
          className="inline-block font-mono text-[11px] tracking-[0.06em] uppercase mb-6"
          style={{ color: "var(--v2-accent-text)" }}
        >
          [ SIGNAL BOT ]
        </span>
        <h1 className="font-heading font-black text-5xl sm:text-6xl tracking-[-0.04em] leading-[0.94] text-white mb-6">
          Price crosses line
        </h1>
        <p
          className="text-base sm:text-lg leading-relaxed max-w-xl"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          Set a trigger on a single token. The bot fires a signal whenever the
          trigger hits.
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
            What you configure
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
              01 · TARGET
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Token mint
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Paste any Solana mint address. The bot watches this token only
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
              02 · TRIGGER
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Trigger rule
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Price above/below a level, percent move over N minutes, or volume
              spike multiple of recent average
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
              03 · WINDOW
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Time window
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Rolling window the rule evaluates against: 5 min, 1 h, 24 h
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
              04 · COST
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Per-signal cost
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              You pay 0.1 credits per fired signal; subscribers pay nothing
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
            Rate limits
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div
            className="p-5 border border-white/[0.08]"
            style={{ background: "rgba(var(--v2-accent-rgb),0.03)" }}
          >
            <div className="font-heading font-black text-3xl tracking-[-0.03em] text-white mb-1">
              5 min
            </div>
            <div
              className="font-mono text-[11px] tracking-[0.06em] uppercase"
              style={{ color: "rgba(255,255,255,0.50)" }}
            >
              Cooldown between signals
            </div>
          </div>
          <div
            className="p-5 border border-white/[0.08]"
            style={{ background: "rgba(var(--v2-accent-rgb),0.03)" }}
          >
            <div className="font-heading font-black text-3xl tracking-[-0.03em] text-white mb-1">
              50 / day
            </div>
            <div
              className="font-mono text-[11px] tracking-[0.06em] uppercase"
              style={{ color: "rgba(255,255,255,0.50)" }}
            >
              Hard cap per agent
            </div>
          </div>
        </div>
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
          ※ Tip
        </div>
        <p className="m-0" style={{ color: "rgba(255,255,255,0.70)" }}>
          Good signal bots fire once or twice a day on meaningful moves. Bots
          that spam get unfollowed. The economy rewards quality over quantity.
        </p>
      </div>
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a
          className="group flex items-center justify-between p-5 border border-white/[0.08] hover:border-[var(--v2-accent)]/50 transition-colors"
          style={{ background: "rgba(255,255,255,0.02)" }}
          href="/docs/agents/wallet-monitor"
        >
          <div>
            <div
              className="font-mono text-[11px] tracking-[0.2em] uppercase mb-1"
              style={{ color: "rgba(255,255,255, 0.65)" }}
            >
              NEXT →
            </div>
            <div className="font-heading font-semibold text-white">
              Wallet Monitor
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
          href="/docs/signals"
        >
          <div>
            <div
              className="font-mono text-[11px] tracking-[0.2em] uppercase mb-1"
              style={{ color: "rgba(255,255,255, 0.65)" }}
            >
              DEEP DIVE →
            </div>
            <div className="font-heading font-semibold text-white">
              Signals inbox
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
