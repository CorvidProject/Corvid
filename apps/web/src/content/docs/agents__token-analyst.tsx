export function DocsAgentsTokenAnalystContent() {
  return (
    <article>
      <div
        className="flex items-center justify-between border-y border-white/[0.08] py-2.5 mb-12 font-mono text-[11px] tracking-[0.2em] uppercase"
        style={{ color: "rgba(255,255,255, 0.65)" }}
      >
        <span>
          <span style={{ color: "var(--v2-accent-text)" }}>●</span>{" "}
          DOC.AGENT.023
        </span>
        <span>AGENTS / TOKEN ANALYST</span>
      </div>
      <div className="mb-14">
        <span
          className="inline-block font-mono text-[11px] tracking-[0.06em] uppercase mb-6"
          style={{ color: "var(--v2-accent-text)" }}
        >
          [ TOKEN ANALYST ]
        </span>
        <h1 className="font-heading font-black text-5xl sm:text-6xl tracking-[-0.04em] leading-[0.94] text-white mb-6">
          AI with context
        </h1>
        <p
          className="text-base sm:text-lg leading-relaxed max-w-xl"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          Upload your knowledge base. The agent retrieves the relevant chunks,
          combines them with live on-chain data, and writes a short verdict:
          bullish, neutral, or bearish with reasons.
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
            How a signal is produced
          </h2>
        </div>
        <ol className="relative pl-0 list-none">
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
              KNOWLEDGE
            </div>
            <h3 className="font-heading font-semibold text-[17px] text-white m-0 mb-1.5 tracking-[-0.01em]">
              Upload what the AI should know
            </h3>
            <p
              className="text-[14px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.60)" }}
            >
              Paste text, docs, tweets, or URLs. Everything gets chunked and
              embedded via OpenAI text-embedding-3-small (1536-dim) into the
              pgvector store
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
              TRIGGER
            </div>
            <h3 className="font-heading font-semibold text-[17px] text-white m-0 mb-1.5 tracking-[-0.01em]">
              Set a trigger
            </h3>
            <p
              className="text-[14px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.60)" }}
            >
              New token crossing liquidity, watchlist entry, or tag match
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
              RETRIEVE
            </div>
            <h3 className="font-heading font-semibold text-[17px] text-white m-0 mb-1.5 tracking-[-0.01em]">
              Retrieval into prompt
            </h3>
            <p
              className="text-[14px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.60)" }}
            >
              On fire, the agent pulls the most relevant knowledge chunks and
              injects them into the LLM prompt alongside live on-chain stats
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
              VERDICT
            </div>
            <h3 className="font-heading font-semibold text-[17px] text-white m-0 mb-1.5 tracking-[-0.01em]">
              Written verdict
            </h3>
            <p
              className="text-[14px] leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.60)" }}
            >
              Output: bullish, neutral, or bearish, plus three to five bullet
              reasons and a confidence number
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
          RAG (retrieval-augmented generation) is currently wired for Token
          Analyst agents. Other agent types run without custom knowledge
          injection for now.
        </p>
      </div>
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a
          className="group flex items-center justify-between p-5 border border-white/[0.08] hover:border-[var(--v2-accent)]/50 transition-colors"
          style={{ background: "rgba(255,255,255,0.02)" }}
          href="/docs/agents/auto-trader"
        >
          <div>
            <div
              className="font-mono text-[11px] tracking-[0.2em] uppercase mb-1"
              style={{ color: "rgba(255,255,255, 0.65)" }}
            >
              NEXT →
            </div>
            <div className="font-heading font-semibold text-white">
              Auto Trader
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
          href="/docs/risk-scoring"
        >
          <div>
            <div
              className="font-mono text-[11px] tracking-[0.2em] uppercase mb-1"
              style={{ color: "rgba(255,255,255, 0.65)" }}
            >
              DEEP DIVE →
            </div>
            <div className="font-heading font-semibold text-white">
              Risk scoring
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
