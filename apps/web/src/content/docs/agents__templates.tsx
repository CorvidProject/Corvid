export function DocsAgentsTemplatesContent() {
  return (
    <article>
      <div
        className="flex items-center justify-between border-y border-white/[0.08] py-2.5 mb-12 font-mono text-[11px] tracking-[0.2em] uppercase"
        style={{ color: "rgba(255,255,255, 0.65)" }}
      >
        <span>
          <span style={{ color: "var(--v2-accent-text)" }}>●</span> DOC.PIPE.025
        </span>
        <span>PIPELINES / TEMPLATES</span>
      </div>
      <div className="mb-14">
        <span
          className="inline-block font-mono text-[11px] tracking-[0.06em] uppercase mb-6"
          style={{ color: "var(--v2-accent-text)" }}
        >
          [ TEMPLATES ]
        </span>
        <h1 className="font-heading font-black text-5xl sm:text-6xl tracking-[-0.04em] leading-[0.94] text-white mb-6">
          Skip the blank page
        </h1>
        <p
          className="text-base sm:text-lg leading-relaxed max-w-xl"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          Templates are preconfigured pipelines. Pick one, adjust a few fields,
          hit Deploy. Every template comes in three risk levels.
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
            Risk presets
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div
            className="p-5 border border-white/[0.08]"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <div
              className="font-mono text-[11px] tracking-[0.06em] uppercase mb-3"
              style={{ color: "var(--v2-accent-text)" }}
            >
              01 · CONSERVATIVE
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Conservative
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Low risk across all three pipeline types. Small trade sizes,
              strict safety filters, tight stop losses
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
              02 · BALANCED
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Balanced
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Middle ground. Moderate filters, standard trade sizes. Good
              starting point if you're unsure
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
              03 · AGGRESSIVE
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Aggressive
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Looser filters, larger positions, wider slippage. For experienced
              traders who know the risks
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
            What each preset sets
          </h2>
        </div>
        <p className="mb-4" style={{ color: "rgba(255,255,255,0.70)" }}>
          Presets fill in all the pipeline fields for you. Here's what changes
          between levels:
        </p>
        <div className="flex flex-col gap-3">
          <div
            className="grid grid-cols-4 gap-3 p-3 border border-white/[0.08]"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <span className="text-[13px] font-medium text-white">
              Trade size
            </span>
            <span
              className="text-[13px]"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              0.01 SOL
            </span>
            <span
              className="text-[13px]"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              0.05 SOL
            </span>
            <span
              className="text-[13px]"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              0.15 SOL
            </span>
          </div>
          <div
            className="grid grid-cols-4 gap-3 p-3 border border-white/[0.08]"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <span className="text-[13px] font-medium text-white">Slippage</span>
            <span
              className="text-[13px]"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              1%
            </span>
            <span
              className="text-[13px]"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              2%
            </span>
            <span
              className="text-[13px]"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              5%
            </span>
          </div>
          <div
            className="grid grid-cols-4 gap-3 p-3 border border-white/[0.08]"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <span className="text-[13px] font-medium text-white">
              Min LP (USD)
            </span>
            <span
              className="text-[13px]"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              $50,000
            </span>
            <span
              className="text-[13px]"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              $10,000
            </span>
            <span
              className="text-[13px]"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              $1,000
            </span>
          </div>
          <div
            className="grid grid-cols-4 gap-3 p-3 border border-white/[0.08]"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <span className="text-[13px] font-medium text-white">
              Stop loss
            </span>
            <span
              className="text-[13px]"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              5%
            </span>
            <span
              className="text-[13px]"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              15%
            </span>
            <span
              className="text-[13px]"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              30%
            </span>
          </div>
          <div
            className="grid grid-cols-4 gap-3 p-3 border border-white/[0.08]"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <span className="text-[13px] font-medium text-white">
              Take profit
            </span>
            <span
              className="text-[13px]"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              10%
            </span>
            <span
              className="text-[13px]"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              30%
            </span>
            <span
              className="text-[13px]"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              100%
            </span>
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
          Templates you deploy start private. Flip the Public switch in Settings
          once you trust the output. Subscribers follow for free while the
          signal fee is switched off
        </p>
      </div>
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a
          className="group flex items-center justify-between p-5 border border-white/[0.08] hover:border-[var(--v2-accent)]/50 transition-colors"
          style={{ background: "rgba(255,255,255,0.02)" }}
          href="/docs/agents/marketplace"
        >
          <div>
            <div
              className="font-mono text-[11px] tracking-[0.2em] uppercase mb-1"
              style={{ color: "rgba(255,255,255, 0.65)" }}
            >
              NEXT →
            </div>
            <div className="font-heading font-semibold text-white">
              Marketplace
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
              Pipeline types
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
