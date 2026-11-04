export function DocsTokenContent() {
  return (
    <article>
      <div
        className="flex items-center justify-between border-y border-white/[0.08] py-2.5 mb-12 font-mono text-[11px] tracking-[0.2em] uppercase"
        style={{ color: "rgba(255,255,255, 0.65)" }}
      >
        <span>
          <span style={{ color: "var(--v2-accent-text)" }}>●</span>{" "}
          DOC.TOKEN.080
        </span>
        <span>TOKEN</span>
      </div>
      <div className="mb-14">
        <span
          className="inline-block font-mono text-[11px] tracking-[0.06em] uppercase mb-6"
          style={{ color: "var(--v2-accent-text)" }}
        >
          [ $CRVD TOKEN ]
        </span>
        <h1 className="font-heading font-black text-5xl sm:text-6xl tracking-[-0.04em] leading-[0.94] text-white mb-6">
          Fuel of the engine
        </h1>
        <div
          className="mb-6 rounded-md px-4 py-3 text-[13px] flex flex-wrap items-center gap-x-3 gap-y-1"
          style={{
            background: "rgba(var(--v2-accent-rgb),0.08)",
            border: "1px solid rgba(var(--v2-accent-rgb),0.35)",
            color: "rgba(255,255,255,0.75)",
          }}
        >
          <span
            className="font-mono text-[11px] uppercase tracking-[0.06em] px-1.5 py-0.5 rounded-sm"
            style={{ background: "var(--v2-accent)", color: "#ffffff" }}
          >
            $CRVD not launched
          </span>
          <span>
            Until the token exists, these balances are tracked in the platform
            ledger and settle on-chain after TGE. Swap commissions and cashback
            already move in SOL.
          </span>
        </div>
        <p
          className="text-base sm:text-lg leading-relaxed max-w-xl"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          $CRVD settles every action on Corvid — swaps, signals, graduations,
          agent backing. Every fee routes through the same splits (cashback,
          burn, reserve, creator), none of it disappears into a black box.
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
            Utilities
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
              01 · PAYMENT
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Pay for AI
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Subscriptions and per-action AI credits are paid in $CRVD. Every
              analysis, signal, or pipeline run settles in $CRVD under the hood
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
              02 · BURN
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Multi-stream burn
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Every swap fee burns a slice of $CRVD (5% on copy-trade, 30% on
              manual). Every signal fee burns 15%. Graduated agents can opt into
              weekly token-level buybacks. Supply only goes down
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
              03 · BACKING
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Back an agent
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Add $CRVD to a published agent's LP reserve before graduation.
              When the agent graduates into its own SPL token, your share
              mints pro-rata. Like dev-buy on Raydium, but for working
              strategies
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
              04 · POOL
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Graduation pool
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              When an agent graduates, the $CRVD accumulated in its reserve
              seeds a Raydium pool paired with the freshly minted SPL
              token. Pool LP fees flow back to the agent's wallet
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
          ※ Transparent splits
        </div>
        <p className="m-0" style={{ color: "rgba(255,255,255,0.70)" }}>
          The 1% swap fee and per-signal fee both split into named buckets:
          cashback to you, burn, reserve, creator share, treasury. Nothing is
          taken silently — see{" "}
          <a
            className="underline hover:opacity-80"
            style={{ color: "var(--v2-accent-text)" }}
            href="/docs/economy"
          >
            Economy & splits
          </a>{" "}
          for the exact percentages
        </p>
      </div>
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a
          className="group flex items-center justify-between p-5 border border-white/[0.08] transition-colors"
          style={{ background: "rgba(255,255,255,0.02)" }}
          href="/docs/economy"
        >
          <div>
            <div
              className="font-mono text-[11px] tracking-[0.2em] uppercase mb-1"
              style={{ color: "rgba(255,255,255, 0.65)" }}
            >
              NEXT →
            </div>
            <div className="font-heading font-semibold text-white">
              Economy & splits
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
          className="group flex items-center justify-between p-5 border border-white/[0.08] transition-colors"
          style={{ background: "rgba(255,255,255,0.02)" }}
          href="/docs/burn-dashboard"
        >
          <div>
            <div
              className="font-mono text-[11px] tracking-[0.2em] uppercase mb-1"
              style={{ color: "rgba(255,255,255, 0.65)" }}
            >
              DEEP DIVE →
            </div>
            <div className="font-heading font-semibold text-white">
              Burn dashboard
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
