import { MarketplaceBoard } from "@/components/app/marketplace-board";

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
          <MarketplaceBoard />
        </div>
      </div>
    </>
  );
}
