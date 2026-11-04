export function ApplicationPortfolioContent() {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-20 text-center max-w-md mx-auto">
        <div
          className="flex h-16 w-16 items-center justify-center rounded-full mb-5"
          style={{ background: "var(--v2-bg-2)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            viewBox="0 0 256 256"
            style={{ color: "var(--v2-t-4)" }}
          >
            <path d="M216,64H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24,24,0,0,0,32,56V184a24,24,0,0,0,24,24H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64Zm0,128H56a8,8,0,0,1-8-8V78.63A23.84,23.84,0,0,0,56,80H216Zm-48-60a12,12,0,1,1,12,12A12,12,0,0,1,168,132Z"></path>
          </svg>
        </div>
        <h3
          className="text-lg font-semibold mb-1"
          style={{ color: "var(--v2-t-2)" }}
        >
          Your portfolio lives here
        </h3>
        <p className="text-[13px] mb-5" style={{ color: "var(--v2-t-4)" }}>
          Sign in and a wallet is set up for you: balances, positions and every
          trade in one place.
        </p>
        <button className="btn-v2 btn-v2-primary">Sign in</button>
      </div>
    </>
  );
}

export function ApplicationPortfolioContentExtra() {
  return (
    <>
      <div
        className="fixed inset-x-0 bottom-0 top-14 z-20 flex items-center justify-center px-4"
        style={{
          background: "rgba(20, 25, 29, 0.35)",
          backdropFilter: "blur(14px) saturate(140%)",
        }}
      >
        <div
          className="relative flex flex-col items-center text-center w-full max-w-[440px]"
          style={{
            background: "var(--v2-panel-grad)",
            border: "1px solid var(--v2-line-1)",
            borderRadius: "16px",
            boxShadow: "var(--v2-panel-inset)",
            padding: "48px 40px",
          }}
        >
          <div
            className="absolute top-0 left-8 right-8 h-px pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--v2-accent) 50%, transparent)",
            }}
          ></div>
          <span
            className="font-mono font-semibold text-[11px] tracking-[0.06em] uppercase mb-5"
            style={{ color: "var(--v2-accent-text)" }}
          >
            [ Sign-in required ]
          </span>
          <h3
            className="text-[22px] font-bold leading-tight mb-3"
            style={{ color: "var(--v2-t-1)" }}
          >
            Your Portfolio — one step away
          </h3>
          <p
            className="text-[14px] leading-relaxed mb-8 max-w-[340px]"
            style={{ color: "var(--v2-t-3)" }}
          >
            Sign in to see balances, agents and PnL across your wallet
          </p>
          <button data-auth-open="signup" className="btn-v2 btn-v2-primary h-11 px-7 text-[14px] font-semibold">
            Create account
          </button>
        </div>
      </div>
    </>
  );
}
