export function DocsTokenAnalysisContent() {
  return (
    <article>
      <div
        className="flex items-center justify-between border-y border-white/[0.08] py-2.5 mb-12 font-mono text-[11px] tracking-[0.2em] uppercase"
        style={{ color: "rgba(255,255,255, 0.65)" }}
      >
        <span>
          <span style={{ color: "var(--v2-accent-text)" }}>●</span> DOC.SCAN.010
        </span>
        <span>FEATURES</span>
      </div>
      <div className="mb-14">
        <span
          className="inline-block font-mono text-[11px] tracking-[0.06em] uppercase mb-6"
          style={{ color: "var(--v2-accent-text)" }}
        >
          [ TOKEN ANALYSIS ]
        </span>
        <h1 className="font-heading font-black text-5xl sm:text-6xl tracking-[-0.04em] leading-[0.94] text-white mb-6">
          X-ray any token
        </h1>
        <p
          className="text-base sm:text-lg leading-relaxed max-w-xl"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          Paste a token address. Six on-chain checks run automatically. You get
          a 0 to 100 risk score and a line-by-line breakdown of what passed and
          what failed.
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
            What it checks
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
              01 · LIQUIDITY
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Liquidity depth
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              How much real ETH or stablecoin is paired against the token. Thin
              liquidity means one seller can crash the chart
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
              02 · HOLDERS
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Holder concentration
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Top-10 wallet share. If ten wallets hold 80%, price is at their
              mercy
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
              03 · LP
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              LP burned or locked
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Share of the pool tokens sent to a burn address or a known locker.
              Unlocked LP can be pulled at any time
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
              04 · CONTRACT
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Contract permissions
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              GoPlus flags: can the owner mint supply, pause transfers,
              blacklist wallets, change balances, or reclaim ownership
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
              05 · AGE
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Age and trade history
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Brand-new tokens with no trade history score lower. Survival is a
              signal
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
              06 · TAX
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Buy and sell tax
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Tax taken by the contract on each side. 10% or more is flagged; a
              sell tax that high is a warning sign
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
            Reading the score
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div
            className="p-5 border border-white/[0.08]"
            style={{ background: "rgba(var(--v2-accent-rgb),0.03)" }}
          >
            <div className="font-heading font-black text-3xl tracking-[-0.03em] text-white mb-1">
              0-30
            </div>
            <div
              className="font-mono text-[11px] tracking-[0.06em] uppercase"
              style={{ color: "rgba(255,255,255,0.50)" }}
            >
              Low risk
            </div>
          </div>
          <div
            className="p-5 border border-white/[0.08]"
            style={{ background: "rgba(var(--v2-accent-rgb),0.03)" }}
          >
            <div className="font-heading font-black text-3xl tracking-[-0.03em] text-white mb-1">
              31-70
            </div>
            <div
              className="font-mono text-[11px] tracking-[0.06em] uppercase"
              style={{ color: "rgba(255,255,255,0.50)" }}
            >
              Watch closely
            </div>
          </div>
          <div
            className="p-5 border border-white/[0.08]"
            style={{ background: "rgba(var(--v2-accent-rgb),0.03)" }}
          >
            <div className="font-heading font-black text-3xl tracking-[-0.03em] text-white mb-1">
              71-100
            </div>
            <div
              className="font-mono text-[11px] tracking-[0.06em] uppercase"
              style={{ color: "rgba(255,255,255,0.50)" }}
            >
              Danger zone
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
          ※ Not a buy signal
        </div>
        <p className="m-0" style={{ color: "rgba(255,255,255,0.70)" }}>
          A low risk score means common rug traps are absent. Price action,
          narrative, and timing are still your job
        </p>
      </div>
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a
          className="group flex items-center justify-between p-5 border border-white/[0.08] hover:border-[var(--v2-accent)]/50 transition-colors"
          style={{ background: "rgba(255,255,255,0.02)" }}
          href="/docs/risk-scoring"
        >
          <div>
            <div
              className="font-mono text-[11px] tracking-[0.2em] uppercase mb-1"
              style={{ color: "rgba(255,255,255, 0.65)" }}
            >
              NEXT →
            </div>
            <div className="font-heading font-semibold text-white">
              Risk scoring weights
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
