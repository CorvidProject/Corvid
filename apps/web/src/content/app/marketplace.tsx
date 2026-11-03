export function ApplicationMarketplaceContent() {
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
                Marketplace
              </h2>
              <p className="text-sm mt-0.5" style={{ color: "var(--v2-t-3)" }}>
                Public agents, ranked by what their closed trades made
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
          <div className="flex gap-5">
            <aside className="hidden lg:block w-[220px] shrink-0 space-y-5">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Search agents"
                  className="w-full pl-8 pr-3 py-2.5 rounded-sm text-sm"
                  style={{
                    background: "var(--v2-bg-1)",
                    border: "1px solid var(--v2-line-1)",
                    color: "var(--v2-t-1)",
                  }}
                  value=""
                />
              </div>
              <div>
                <h4
                  className="text-[11px] font-semibold uppercase tracking-wider mb-2"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  Agent Type
                </h4>
                <div className="space-y-0.5">
                  <button
                    className="w-full text-left px-3 py-2 rounded-sm text-[13px] transition-colors"
                    style={{
                      background: "var(--v2-bg-2)",
                      color: "var(--v2-t-1)",
                    }}
                  >
                    All
                  </button>
                  <button
                    className="w-full text-left px-3 py-2 rounded-sm text-[13px] transition-colors"
                    style={{
                      background: "transparent",
                      color: "var(--v2-t-3)",
                    }}
                  >
                    Follow Wallet
                  </button>
                  <button
                    className="w-full text-left px-3 py-2 rounded-sm text-[13px] transition-colors"
                    style={{
                      background: "transparent",
                      color: "var(--v2-t-3)",
                    }}
                  >
                    New Tokens
                  </button>
                  <button
                    className="w-full text-left px-3 py-2 rounded-sm text-[13px] transition-colors"
                    style={{
                      background: "transparent",
                      color: "var(--v2-t-3)",
                    }}
                  >
                    Token Trading
                  </button>
                </div>
              </div>
              <div>
                <h4
                  className="text-[11px] font-semibold uppercase tracking-wider mb-2"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  Mode
                </h4>
                <div className="space-y-0.5">
                  <button
                    className="w-full text-left px-3 py-2 rounded-sm text-[13px] transition-colors"
                    style={{
                      background: "var(--v2-bg-2)",
                      color: "var(--v2-t-1)",
                    }}
                  >
                    All
                  </button>
                  <button
                    className="w-full text-left px-3 py-2 rounded-sm text-[13px] transition-colors"
                    style={{
                      background: "transparent",
                      color: "var(--v2-t-3)",
                    }}
                  >
                    Signal
                  </button>
                  <button
                    className="w-full text-left px-3 py-2 rounded-sm text-[13px] transition-colors"
                    style={{
                      background: "transparent",
                      color: "var(--v2-t-3)",
                    }}
                  >
                    Trading
                  </button>
                </div>
              </div>
            </aside>
            <div className="flex-1 min-w-0 space-y-4">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div
                  className="flex items-center gap-0"
                  style={{ borderBottom: "1px solid var(--v2-line-1)" }}
                >
                  <button
                    className="px-5 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px capitalize"
                    style={{
                      color: "var(--v2-t-1)",
                      borderColor: "var(--v2-accent)",
                    }}
                  >
                    top
                  </button>
                  <button
                    className="px-5 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px capitalize"
                    style={{
                      color: "var(--v2-t-4)",
                      borderColor: "transparent",
                    }}
                  >
                    trending
                  </button>
                  <button
                    className="px-5 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px capitalize"
                    style={{
                      color: "var(--v2-t-4)",
                      borderColor: "transparent",
                    }}
                  >
                    following
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <button
                      className="px-3 py-1.5 text-xs font-medium rounded-sm transition-colors uppercase"
                      style={{
                        background: "transparent",
                        color: "var(--v2-t-4)",
                      }}
                    >
                      1d
                    </button>
                    <button
                      className="px-3 py-1.5 text-xs font-medium rounded-sm transition-colors uppercase"
                      style={{
                        background: "transparent",
                        color: "var(--v2-t-4)",
                      }}
                    >
                      7d
                    </button>
                    <button
                      className="px-3 py-1.5 text-xs font-medium rounded-sm transition-colors uppercase"
                      style={{
                        background: "transparent",
                        color: "var(--v2-t-4)",
                      }}
                    >
                      30d
                    </button>
                    <button
                      className="px-3 py-1.5 text-xs font-medium rounded-sm transition-colors uppercase"
                      style={{
                        background: "var(--v2-bg-2)",
                        color: "var(--v2-t-1)",
                      }}
                    >
                      all
                    </button>
                  </div>
                  <div
                    className="flex rounded-sm overflow-hidden"
                    style={{ border: "1px solid var(--v2-line-1)" }}
                  >
                    <button
                      className="p-2 transition-colors"
                      style={{
                        background: "var(--v2-bg-2)",
                        color: "var(--v2-t-1)",
                      }}
                      title="Grid view"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M120,56v48a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40h48A16,16,0,0,1,120,56Zm80-16H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm-96,96H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm96,0H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Z"></path>
                      </svg>
                    </button>
                    <button
                      className="p-2 transition-colors"
                      style={{
                        background: "var(--v2-bg-1)",
                        color: "var(--v2-t-4)",
                        borderLeft: "1px solid var(--v2-line-1)",
                      }}
                      title="List view"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Search agents"
                  className="w-full pl-8 pr-3 py-2 rounded-sm text-[13px]"
                  style={{
                    background: "var(--v2-bg-1)",
                    border: "1px solid var(--v2-line-1)",
                    color: "var(--v2-t-1)",
                  }}
                  value=""
                />
              </div>
              <div
                className="rounded-sm p-10 text-center"
                style={{
                  background: "var(--v2-bg-1)",
                  border: "1px solid var(--v2-line-1)",
                }}
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-sm mx-auto mb-4"
                  style={{ background: "var(--v2-bg-2)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    style={{ color: "var(--v2-t-4)" }}
                  >
                    <path d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-24,16v24H116V152ZM80,164a12,12,0,0,1,12-12h8v24H92A12,12,0,0,1,80,164Zm84,12h-8V152h8a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z"></path>
                  </svg>
                </div>
                <h3
                  className="font-heading font-semibold text-[16px]"
                  style={{ color: "var(--v2-t-1)" }}
                >
                  No agents published yet
                </h3>
                <p
                  className="text-[13px] mt-1 max-w-md mx-auto"
                  style={{ color: "var(--v2-t-3)" }}
                >
                  Be the first — build an agent, run it, then publish to the
                  marketplace
                </p>
                <a
                  className="btn-v2 btn-v2-primary btn-v2-sm inline-block mt-4"
                  href="/application/agents/new"
                >
                  Create an agent
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
