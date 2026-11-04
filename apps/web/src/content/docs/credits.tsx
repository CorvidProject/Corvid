export function DocsCreditsContent() {
  return (
    <article>
      <div
        className="flex items-center justify-between border-y border-white/[0.08] py-2.5 mb-12 font-mono text-[11px] tracking-[0.2em] uppercase"
        style={{ color: "rgba(255,255,255, 0.65)" }}
      >
        <span>
          <span style={{ color: "var(--v2-accent-text)" }}>●</span> DOC.AI.003
        </span>
        <span>GETTING STARTED</span>
      </div>
      <div className="mb-14">
        <span
          className="inline-block font-mono text-[11px] tracking-[0.06em] uppercase mb-6"
          style={{ color: "var(--v2-accent-text)" }}
        >
          [ AI QUOTA ]
        </span>
        <h1 className="font-heading font-black text-5xl sm:text-6xl tracking-[-0.04em] leading-[0.94] text-white mb-6">
          Pay as you analyze
        </h1>
        <p
          className="text-base sm:text-lg leading-relaxed max-w-xl"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          The old credit system is gone. Trading now runs on a 1% swap
          commission with cashback — no monthly bills, no credit packs, nothing
          to top up. The only thing you still pay per-action is AI deep
          analysis, and you get 25 of those free on signup.
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
            How the quota works
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
              01 · FREE
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              25 free on signup
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Every new account gets 25 free AI token analyses. No credit card,
              no crypto upfront
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
              02 · SCOPE
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              AI analyses only
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              The quota covers LLM-powered token and wallet deep-dives. Trading
              itself is never gated by this
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
              03 · PRICE
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              $0.10 per extra analysis
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Once the 25 starter runs are used, each new analysis costs $0.10
              in SOL. Pay only what you use
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
              04 · NOEXPIRY
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Never expires
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Unused starter analyses and top-ups sit on your account
              indefinitely. No resets, no tiers
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
            What costs what
          </h2>
        </div>
        <p className="mb-4" style={{ color: "rgba(255,255,255,0.70)" }}>
          Most things are free. The only billed items are actual AI compute
          (deep analysis) and token swaps (1% via Jupiter, taken atomically).
        </p>
        <div className="flex flex-col gap-3">
          <div
            className="p-4 border border-white/[0.08] flex flex-col sm:flex-row items-start gap-2 sm:gap-4"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <h3 className="font-heading font-semibold text-[14px] text-white mb-0 shrink-0 sm:w-[220px]">
              AI token analysis
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0 break-words"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              $0.10 per deep-dive after the 25 free starter analyses. Only
              counts on-demand scans you trigger
            </p>
          </div>
          <div
            className="p-4 border border-white/[0.08] flex flex-col sm:flex-row items-start gap-2 sm:gap-4"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <h3 className="font-heading font-semibold text-[14px] text-white mb-0 shrink-0 sm:w-[220px]">
              Manual trade in terminal
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0 break-words"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              1% platform fee on swap (0.6% effective after cashback). No
              separate per-action charge
            </p>
          </div>
          <div
            className="p-4 border border-white/[0.08] flex flex-col sm:flex-row items-start gap-2 sm:gap-4"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <h3 className="font-heading font-semibold text-[14px] text-white mb-0 shrink-0 sm:w-[220px]">
              Agent-driven trade (copy)
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0 break-words"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              1% platform fee on swap (0.8% effective after cashback). Half the
              fee pays the agent's creator
            </p>
          </div>
          <div
            className="p-4 border border-white/[0.08] flex flex-col sm:flex-row items-start gap-2 sm:gap-4"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <h3 className="font-heading font-semibold text-[14px] text-white mb-0 shrink-0 sm:w-[220px]">
              Receiving signals
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0 break-words"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Free. You follow an agent, signals come in, no per-signal debit
            </p>
          </div>
          <div
            className="p-4 border border-white/[0.08] flex flex-col sm:flex-row items-start gap-2 sm:gap-4"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <h3 className="font-heading font-semibold text-[14px] text-white mb-0 shrink-0 sm:w-[220px]">
              Creating an agent
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0 break-words"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Free. You pay nothing to spin up, configure, pause, or delete an
              agent
            </p>
          </div>
          <div
            className="p-4 border border-white/[0.08] flex flex-col sm:flex-row items-start gap-2 sm:gap-4"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <h3 className="font-heading font-semibold text-[14px] text-white mb-0 shrink-0 sm:w-[220px]">
              Beta token launch
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0 break-words"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              $0.40 in SOL (one-time) to mint your own experimental SPL.
              Anti-spam + mint cost recovery
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
            [ 03 ]
          </span>
          <h2 className="font-heading font-bold text-[26px] tracking-[-0.02em] text-white m-0 p-0 border-0">
            Topping up AI analyses
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
            <div
              className="font-mono text-[11px] tracking-[0.06em] uppercase mb-1.5"
              style={{ color: "var(--v2-accent-text)" }}
            >
              OPEN
            </div>
            <h3 className="font-heading font-semibold text-[17px] text-white m-0 mb-1.5 tracking-[-0.01em]">
              Open top-up
            </h3>
            <p
              className="text-[14px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.60)" }}
            >
              Click the + next to your AI quota in the topbar
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
            <div
              className="font-mono text-[11px] tracking-[0.06em] uppercase mb-1.5"
              style={{ color: "var(--v2-accent-text)" }}
            >
              PICK
            </div>
            <h3 className="font-heading font-semibold text-[17px] text-white m-0 mb-1.5 tracking-[-0.01em]">
              Pick a pack
            </h3>
            <p
              className="text-[14px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.60)" }}
            >
              50 analyses for $5, 250 for $20, 1,000 for $60. The bigger the
              pack the better the per-analysis rate
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
              03
            </span>
            <div
              className="font-mono text-[11px] tracking-[0.06em] uppercase mb-1.5"
              style={{ color: "var(--v2-accent-text)" }}
            >
              CONFIRM
            </div>
            <h3 className="font-heading font-semibold text-[17px] text-white m-0 mb-1.5 tracking-[-0.01em]">
              Pay with SOL
            </h3>
            <p
              className="text-[14px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.60)" }}
            >
              SOL is debited from your platform wallet. Top-up lands on your
              quota instantly
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
          ※ Running low
        </div>
        <p className="m-0" style={{ color: "rgba(255,255,255,0.70)" }}>
          When you hit zero quota, the AI analysis button turns into a top-up
          prompt. Trading is untouched — you keep swapping, following agents,
          and receiving signals without interruption. Only the deep-dive AI
          feature gates
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
            Common questions
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          <details
            className="group border border-white/[0.08] px-4 py-3"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <summary className="cursor-pointer font-heading font-semibold text-[14px] text-white list-none flex items-start justify-between gap-3">
              <span className="break-words">
                What happened to the old credit system?
              </span>
              <span className="font-mono text-[var(--v2-accent)] group-open:rotate-45 transition-transform shrink-0">
                +
              </span>
            </summary>
            <p
              className="mt-3 text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              We replaced it. Credits were an artificial token you had to buy
              before using anything. The new model: trading charges a 1% swap
              commission with cashback (you end up paying 0.6-0.8% effective),
              AI analysis has a free starter quota and then $0.10 per extra run.
              No prepaid balance to manage.
            </p>
          </details>
          <details
            className="group border border-white/[0.08] px-4 py-3"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <summary className="cursor-pointer font-heading font-semibold text-[14px] text-white list-none flex items-start justify-between gap-3">
              <span className="break-words">
                Do I have to pay to follow an agent?
              </span>
              <span className="font-mono text-[var(--v2-accent)] group-open:rotate-45 transition-transform shrink-0">
                +
              </span>
            </summary>
            <p
              className="mt-3 text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              No. Following and receiving signals is free. You only pay the 1%
              swap commission when a copy-trade actually executes, and half of
              that fee goes to the agent's creator as revenue share.
            </p>
          </details>
          <details
            className="group border border-white/[0.08] px-4 py-3"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <summary className="cursor-pointer font-heading font-semibold text-[14px] text-white list-none flex items-start justify-between gap-3">
              <span className="break-words">
                Can I run an agent without holding AI quota?
              </span>
              <span className="font-mono text-[var(--v2-accent)] group-open:rotate-45 transition-transform shrink-0">
                +
              </span>
            </summary>
            <p
              className="mt-3 text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Yes. Agents emitting signals and executing trades do not consume
              your AI quota — the quota is specifically for on-demand
              token/wallet deep-dives that you trigger yourself. If your agent
              has an LLM filter node inside its pipeline, that node uses a
              shared compute budget paid from the 1% trade fee, not your starter
              quota.
            </p>
          </details>
          <details
            className="group border border-white/[0.08] px-4 py-3"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <summary className="cursor-pointer font-heading font-semibold text-[14px] text-white list-none flex items-start justify-between gap-3">
              <span className="break-words">
                What's the difference between this and $CRVD?
              </span>
              <span className="font-mono text-[var(--v2-accent)] group-open:rotate-45 transition-transform shrink-0">
                +
              </span>
            </summary>
            <p
              className="mt-3 text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              AI quota is just a counter — 25 free analyses on signup, top up
              with SOL if you need more. It's not a token, not tradable, not
              transferable. <strong>$CRVD</strong> is the platform token,
              accumulated passively when you earn cashback-to-$CRVD or when agents
              you follow graduate and airdrop you. Holding $CRVD is optional and
              has nothing to do with running analyses or trading.
            </p>
          </details>
          <details
            className="group border border-white/[0.08] px-4 py-3"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <summary className="cursor-pointer font-heading font-semibold text-[14px] text-white list-none flex items-start justify-between gap-3">
              <span className="break-words">
                Will the starter quota ever shrink?
              </span>
              <span className="font-mono text-[var(--v2-accent)] group-open:rotate-45 transition-transform shrink-0">
                +
              </span>
            </summary>
            <p
              className="mt-3 text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              We may reduce the 25-on-signup number if abuse becomes material
              (someone farming throwaway accounts to do AI analyses for free).
              Any change would be announced and wouldn't affect existing
              balances. Current policy: 25 is the floor for real signups.
            </p>
          </details>
        </div>
      </div>
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-3">
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
              NEXT →
            </div>
            <div className="font-heading font-semibold text-white">
              Pipelines
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
          href="/docs/economy"
        >
          <div>
            <div
              className="font-mono text-[11px] tracking-[0.2em] uppercase mb-1"
              style={{ color: "rgba(255,255,255, 0.65)" }}
            >
              DEEP DIVE →
            </div>
            <div className="font-heading font-semibold text-white">
              Economy & Splits
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
