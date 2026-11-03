export function ApplicationTokenomicsContent() {
  return (
    <>
      <div
        className="mx-auto px-6 lg:px-12 pt-24 pb-16"
        style={{ maxWidth: "1200px" }}
      >
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 256 256"
                style={{ color: "var(--v2-accent-text)" }}
              >
                <path d="M143.38,17.85a8,8,0,0,0-12.63,3.41l-22,60.41L84.59,58.26a8,8,0,0,0-11.93.89C51,87.53,40,116.08,40,144a88,88,0,0,0,176,0C216,84.55,165.21,36,143.38,17.85Zm40.51,135.49a57.6,57.6,0,0,1-46.56,46.55A7.65,7.65,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68Z"></path>
              </svg>
              <h1
                className="font-heading font-semibold text-[24px] tracking-[-0.02em] m-0"
                style={{ color: "var(--v2-t-0)" }}
              >
                Your fees
              </h1>
            </div>
            <p className="text-[14px] m-0" style={{ color: "var(--v2-t-3)" }}>
              Where the 1% fee on your swaps goes
            </p>
          </div>
          <div
            className="flex gap-1 p-1 rounded-md"
            style={{
              background: "var(--v2-bg-1)",
              border: "1px solid var(--v2-line-2)",
            }}
          >
            <button
              className="px-3 py-1.5 rounded-sm font-mono text-[11px] tracking-[0.1em] uppercase transition-colors"
              style={{ background: "transparent", color: "var(--v2-t-3)" }}
            >
              24h
            </button>
            <button
              className="px-3 py-1.5 rounded-sm font-mono text-[11px] tracking-[0.1em] uppercase transition-colors"
              style={{ background: "var(--v2-accent)", color: "#ffffff" }}
            >
              7d
            </button>
            <button
              className="px-3 py-1.5 rounded-sm font-mono text-[11px] tracking-[0.1em] uppercase transition-colors"
              style={{ background: "transparent", color: "var(--v2-t-3)" }}
            >
              30d
            </button>
            <button
              className="px-3 py-1.5 rounded-sm font-mono text-[11px] tracking-[0.1em] uppercase transition-colors"
              style={{ background: "transparent", color: "var(--v2-t-3)" }}
            >
              All
            </button>
          </div>
        </div>
        <div
          className="mb-6 p-4 rounded-md text-[13px]"
          style={{
            background: "color-mix(in oklch, var(--v2-neg) 8%, var(--v2-bg-1))",
            color: "var(--v2-neg)",
          }}
        >
          Could not load fees (502). Try again in a moment.
        </div>
      </div>
    </>
  );
}
