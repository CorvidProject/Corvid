export function ApplicationAgentsContent() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div
          className="mb-4 flex items-start gap-2.5 rounded-lg px-3.5 py-2.5 text-[13px] leading-relaxed"
          style={{
            color: "var(--v2-t-2, rgba(255,255,255,0.7))",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.10)",
          }}
        >
          <span
            className="shrink-0 font-mono text-[9.5px] uppercase tracking-[0.08em] px-1.5 py-0.5 mt-0.5 rounded-md"
            style={{
              color: "var(--v2-accent-text)",
              background: "rgba(var(--v2-accent-rgb),0.10)",
              border: "1px solid rgba(var(--v2-accent-rgb),0.25)",
            }}
          >
            Beta
          </span>
          <span>
            Agents are in beta. They run today and change every week as we build
            them out. Trade small and set limits you are comfortable with.
          </span>
        </div>
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="eyebrow">Automation</div>
              <h2
                className="font-heading font-semibold text-[24px] tracking-[-0.02em]"
                style={{ color: "var(--v2-t-1)" }}
              >
                My agents
              </h2>
              <p className="text-sm mt-0.5" style={{ color: "var(--v2-t-3)" }}>
                0 agents
              </p>
            </div>
            <a className="btn-v2 btn-v2-primary" href="/application/agents/new">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
              </svg>{" "}
              New Agent
            </a>
          </div>
          <div className="panel rounded-sm p-10 max-w-2xl mx-auto">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-sm mb-4"
              style={{ background: "var(--v2-bg-2)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 256 256"
                style={{ color: "var(--v2-t-2)" }}
              >
                <path d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-24,16v24H116V152ZM80,164a12,12,0,0,1,12-12h8v24H92A12,12,0,0,1,80,164Zm84,12h-8V152h8a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z"></path>
              </svg>
            </div>
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: "var(--v2-t-1)" }}
            >
              Your AI agents will live here
            </h3>
            <p className="text-sm mb-5" style={{ color: "var(--v2-t-3)" }}>
              Create autonomous agents that:
            </p>
            <ul
              className="space-y-2 mb-6 text-sm"
              style={{ color: "var(--v2-t-2)" }}
            >
              <li className="flex gap-2">
                <span style={{ color: "var(--v2-accent-text)" }}>→</span>
                <span>Copy any wallet's trades automatically</span>
              </li>
              <li className="flex gap-2">
                <span style={{ color: "var(--v2-accent-text)" }}>→</span>
                <span>Snipe new token launches based on safety filters</span>
              </li>
              <li className="flex gap-2">
                <span style={{ color: "var(--v2-accent-text)" }}>→</span>
                <span>Auto-trade on price, volume, or liquidity triggers</span>
              </li>
              <li className="flex gap-2">
                <span style={{ color: "var(--v2-accent-text)" }}>→</span>
                <span>Send signals to your inbox and your Telegram bot</span>
              </li>
            </ul>
            <div className="flex gap-3 flex-wrap">
              <a
                className="btn-v2 btn-v2-primary"
                href="/application/agents/new"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
                </svg>{" "}
                Create your first agent
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
