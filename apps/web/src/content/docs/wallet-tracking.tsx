export function DocsWalletTrackingContent() {
  return (
    <article>
      <div
        className="flex items-center justify-between border-y border-white/[0.08] py-2.5 mb-12 font-mono text-[11px] tracking-[0.2em] uppercase"
        style={{ color: "rgba(255,255,255, 0.65)" }}
      >
        <span>
          <span style={{ color: "var(--v2-accent-text)" }}>●</span>{" "}
          DOC.WALLET.070
        </span>
        <span>FEATURES</span>
      </div>
      <div className="mb-14">
        <span
          className="inline-block font-mono text-[11px] tracking-[0.06em] uppercase mb-6"
          style={{ color: "var(--v2-accent-text)" }}
        >
          [ WALLET TRACKING ]
        </span>
        <h1 className="font-heading font-black text-5xl sm:text-6xl tracking-[-0.04em] leading-[0.94] text-white mb-6">
          Follow smart money
        </h1>
        <p
          className="text-base sm:text-lg leading-relaxed max-w-xl"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          Find wallets with a track record, inspect their history, add them to
          your watchlist, and automate alerts when they move.
        </p>
      </div>
      <ol className="relative pl-0 list-none mb-16">
        <li
          className="relative pl-16 pb-7 m-0"
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
          <div
            className="font-mono text-[11px] tracking-[0.06em] uppercase mb-1.5"
            style={{ color: "var(--v2-accent-text)" }}
          >
            DISCOVER
          </div>
          <h3 className="font-heading font-semibold text-[17px] text-white m-0 mb-1.5 tracking-[-0.01em]">
            Discover
          </h3>
          <p
            className="text-[14px] leading-relaxed m-0"
            style={{ color: "rgba(255,255,255,0.60)" }}
          >
            Leaderboard of profitable wallets sorted by realized PnL, hit rate,
            or recent volume. Seeded from on-chain data, not self-reported
          </p>
        </li>
        <li
          className="relative pl-16 pb-7 m-0"
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
          <div
            className="font-mono text-[11px] tracking-[0.06em] uppercase mb-1.5"
            style={{ color: "var(--v2-accent-text)" }}
          >
            INSPECT
          </div>
          <h3 className="font-heading font-semibold text-[17px] text-white m-0 mb-1.5 tracking-[-0.01em]">
            Inspect
          </h3>
          <p
            className="text-[14px] leading-relaxed m-0"
            style={{ color: "rgba(255,255,255,0.60)" }}
          >
            Click any wallet for its full profile: tokens traded, entries,
            exits, PnL per token, net flow
          </p>
        </li>
        <li
          className="relative pl-16 pb-7 m-0"
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
          <div
            className="font-mono text-[11px] tracking-[0.06em] uppercase mb-1.5"
            style={{ color: "var(--v2-accent-text)" }}
          >
            FOLLOW
          </div>
          <h3 className="font-heading font-semibold text-[17px] text-white m-0 mb-1.5 tracking-[-0.01em]">
            Follow
          </h3>
          <p
            className="text-[14px] leading-relaxed m-0"
            style={{ color: "rgba(255,255,255,0.60)" }}
          >
            Add wallets to your personal watchlist. Their trades show up in the
            tracking feed
          </p>
        </li>
        <li
          className="relative pl-16 pb-7 m-0"
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
          <div
            className="font-mono text-[11px] tracking-[0.06em] uppercase mb-1.5"
            style={{ color: "var(--v2-accent-text)" }}
          >
            AUTOMATE
          </div>
          <h3 className="font-heading font-semibold text-[17px] text-white m-0 mb-1.5 tracking-[-0.01em]">
            Automate
          </h3>
          <p
            className="text-[14px] leading-relaxed m-0"
            style={{ color: "rgba(255,255,255,0.60)" }}
          >
            Use the wallet as input for a Follow Wallet pipeline. From passive
            watching to active copy-trading in one click
          </p>
        </li>
      </ol>
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
          The cleanest signal comes from several uncorrelated wallets all
          entering the same token at the same time. One whale moving alone is
          often just a rotation
        </p>
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
              Follow Wallet pipeline
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
          href="/docs/terminal"
        >
          <div>
            <div
              className="font-mono text-[11px] tracking-[0.2em] uppercase mb-1"
              style={{ color: "rgba(255,255,255, 0.65)" }}
            >
              DEEP DIVE →
            </div>
            <div className="font-heading font-semibold text-white">
              Terminal
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
