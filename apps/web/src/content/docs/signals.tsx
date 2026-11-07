export function DocsSignalsContent() {
  return (
    <article>
      <div
        className="flex items-center justify-between border-y border-white/[0.08] py-2.5 mb-12 font-mono text-[11px] tracking-[0.2em] uppercase"
        style={{ color: "rgba(255,255,255, 0.65)" }}
      >
        <span>
          <span style={{ color: "var(--v2-accent-text)" }}>●</span>{" "}
          DOC.SIGNAL.040
        </span>
        <span>SIGNALS</span>
      </div>
      <div className="mb-14">
        <span
          className="inline-block font-mono text-[11px] tracking-[0.06em] uppercase mb-6"
          style={{ color: "var(--v2-accent-text)" }}
        >
          [ SIGNALS ]
        </span>
        <h1 className="font-heading font-black text-5xl sm:text-6xl tracking-[-0.04em] leading-[0.94] text-white mb-6">
          Your inbox
        </h1>
        <p
          className="text-base sm:text-lg leading-relaxed max-w-xl"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          Every pipeline funnels output into one place. Filter by agent, token,
          type, or read status. Link Telegram in Settings for push notifications.
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
            Signal types
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
              01 · COPY
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Copy trade
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Fired by Follow Wallet pipelines. Shows the wallet, token,
              direction, and trade size
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
              02 · POOL
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              New pool
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Fired by New Tokens pipelines. Shows the token, market
              (Uniswap v3/v4), LP depth, and safety status
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
              03 · TRIGGER
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Trigger hit
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Fired by Token Trading pipelines. Shows which trigger (price drop,
              volume spike, etc.) and the current value
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
              04 · TRADE
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Trade executed
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Confirmation that a trading-mode pipeline bought or sold. Includes
              ETH amount and transaction link
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
              05 · EXIT
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Position exit
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              TP or SL hit. Shows entry price, exit price, PnL percentage, and
              transaction link
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
              06 · SYSTEM
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              System
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Low credits, execution errors, pipeline paused. Things you need to
              act on
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
            Inbox features
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
              01 · INBOX
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Signals inbox
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Every signal from every agent you follow and own, newest first
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
              02 · REALTIME
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Realtime delivery
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Supabase Realtime pushes new signals straight into the page. No
              refresh, no polling
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
              03 · FILTERS
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Filter and search
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              By agent, by signal type, by token, by read/unread. Search cuts
              through noisy days
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
              04 · STATE
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Read / unread
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Mark individually or clear the inbox in one click
            </p>
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
          ※ Rate limits
        </div>
        <p className="m-0" style={{ color: "rgba(255,255,255,0.70)" }}>
          Every agent has a 5-minute cooldown between signals and a hard cap of
          50 signals per 24 hours. You can't spam yourself or your subscribers
          into bankruptcy
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
          href="/docs/portfolio"
        >
          <div>
            <div
              className="font-mono text-[11px] tracking-[0.2em] uppercase mb-1"
              style={{ color: "rgba(255,255,255, 0.65)" }}
            >
              DEEP DIVE →
            </div>
            <div className="font-heading font-semibold text-white">
              Portfolio
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
