export function DocsTerminalContent() {
  return (
    <article>
      <div
        className="flex items-center justify-between border-y border-white/[0.08] py-2.5 mb-12 font-mono text-[11px] tracking-[0.2em] uppercase"
        style={{ color: "#A9B5C2" }}
      >
        <span>
          <span style={{ color: "var(--v2-accent-text)" }}>●</span> DOC.TERM.050
        </span>
        <span>FEATURES</span>
      </div>
      <div className="mb-14">
        <span
          className="inline-block font-mono text-[11px] tracking-[0.06em] uppercase mb-6"
          style={{ color: "var(--v2-accent-text)" }}
        >
          [ TERMINAL ]
        </span>
        <h1 className="font-heading font-black text-5xl sm:text-6xl tracking-[-0.04em] leading-[0.94] text-white mb-6">
          One screen
        </h1>
        <p
          className="text-base sm:text-lg leading-relaxed max-w-xl"
          style={{ color: "#A9B5C2" }}
        >
          Paste any Solana token address. Price, holders, risk score, and live
          trades load on one screen. Trade right from here.
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
            What you see
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
              01 · PRICE
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Price and chart
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "#A9B5C2" }}
            >
              Live price from the deepest pool, TradingView-style chart, 24h
              change, market cap, FDV
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
              Holder breakdown
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "#A9B5C2" }}
            >
              Top wallets, concentration, fresh holders, exits. Updated on every
              block
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
              03 · RISK
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Risk score
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "#A9B5C2" }}
            >
              0 to 100 number with a full breakdown. One click to see which
              checks passed and which failed
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
              04 · TRADES
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Live trade tape
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "#A9B5C2" }}
            >
              Streaming buys and sells, sortable by size. Spot accumulation vs
              distribution in real time
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
              05 · METRICS
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Token metrics
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "#A9B5C2" }}
            >
              Supply, LP depth, contract permission flags, holder count, pool
              age
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
              06 · SWAP
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Swap panel
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "#A9B5C2" }}
            >
              Buy or sell directly from the terminal. Jupiter routing, no credit
              cost
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
            Smart search
          </h2>
        </div>
        <p className="mb-4" style={{ color: "#A9B5C2" }}>
          The search bar accepts token addresses, token symbols, and wallet
          addresses. Paste a wallet and you land on its profile with PnL, tokens
          held, and trade history.
        </p>
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
          ※ Free to use
        </div>
        <p className="m-0" style={{ color: "#A9B5C2" }}>
          The terminal and all manual trading are free. No credits required.
          Credits only apply to AI analysis and automated pipeline actions
        </p>
      </div>
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a
          className="group flex items-center justify-between p-5 border border-white/[0.08] hover:border-[var(--v2-accent)]/50 transition-colors"
          style={{ background: "rgba(255,255,255,0.02)" }}
          href="/docs/token-analysis"
        >
          <div>
            <div
              className="font-mono text-[11px] tracking-[0.2em] uppercase mb-1"
              style={{ color: "#A9B5C2" }}
            >
              NEXT →
            </div>
            <div className="font-heading font-semibold text-white">
              Token analysis
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
          href="/docs/wallet-tracking"
        >
          <div>
            <div
              className="font-mono text-[11px] tracking-[0.2em] uppercase mb-1"
              style={{ color: "#A9B5C2" }}
            >
              DEEP DIVE →
            </div>
            <div className="font-heading font-semibold text-white">
              Wallet tracking
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
