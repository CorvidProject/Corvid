export function ApplicationGainersContent() {
  return (
    <>
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <div className="min-w-0">
            <h1
              className="text-[22px] font-semibold leading-tight"
              style={{ color: "var(--v2-t-1)" }}
            >
              Top Gainers
            </h1>
            <p className="text-[13px]" style={{ color: "var(--v2-t-3)" }}>
              Up the most in 24 hours, with real liquidity · all chains
            </p>
          </div>
          <span
            className="ml-auto flex items-center gap-1.5 eyebrow"
            style={{ color: "var(--v2-pos)" }}
          >
            <span className="dot dot-pos dot-pulse"></span> LIVE
          </span>
        </div>
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "var(--v2-bg-1)",
            border: "1px solid var(--v2-line-1)",
          }}
        >
          <div
            className="hidden md:grid grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 h-10 items-center eyebrow"
            style={{ borderBottom: "1px solid var(--v2-line-1)" }}
          >
            <span>#</span>
            <span>Token</span>
            <span className="text-right">Price</span>
            <span className="text-right">1h</span>
            <span className="text-right">24h</span>
            <span className="text-right">Market cap</span>
            <span className="text-right">Liquidity</span>
            <span className="text-right">Volume</span>
            <span className="text-right">Age</span>
            <span></span>
          </div>
          <div className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]">
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              1
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/3kRQDKPGqMWwBdGjiVPpPqVzFsnYG5PDqvrVz1D2pump?chain=solana"
            >
              <img
                alt=""
                width="36"
                height="36"
                className="rounded-full object-cover shrink-0"
                decoding="async"
                referrerPolicy="no-referrer"
                loading="eager"
                fetchPriority="high"
                src="https://cdn.dexscreener.com/cms/images/0xwNc5Wag6YRs0WW?width=800&height=800&quality=95&format=auto"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                }}
              />
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    tipr
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  tipr
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.001124
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +1232.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.001124
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +9116.19%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +1232.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.08M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $523.63K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.27M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              2d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $tipr"
                aria-label="Deploy an agent on $tipr"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=3kRQDKPGqMWwBdGjiVPpPqVzFsnYG5PDqvrVz1D2pump&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              2
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/GoDSW31bTxfkoup9yA1qcGGx9RMXdTEWgApv3xzBmoA?chain=solana"
            >
              <img
                alt=""
                width="36"
                height="36"
                className="rounded-full object-cover shrink-0"
                decoding="async"
                referrerPolicy="no-referrer"
                loading="eager"
                fetchPriority="high"
                src="https://cdn.dexscreener.com/cms/images/WgIWKD4nq1lJjxYB?width=800&height=800&quality=95&format=auto"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                }}
              />
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    STEALTH
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  STEALTH
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.000412
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +945.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.000412
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +81.48%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +945.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $401.57K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $56.54K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.77M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $STEALTH"
                aria-label="Deploy an agent on $STEALTH"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=GoDSW31bTxfkoup9yA1qcGGx9RMXdTEWgApv3xzBmoA&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              3
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/GexThZHgaswpAQ7Fi8QrHFubjPimUNSYhJiAA7XZpump?chain=solana"
            >
              <img
                alt=""
                width="36"
                height="36"
                className="rounded-full object-cover shrink-0"
                decoding="async"
                referrerPolicy="no-referrer"
                loading="eager"
                fetchPriority="high"
                src="https://cdn.dexscreener.com/cms/images/eyoaU-MPZ9AFW1cY?width=800&height=800&quality=95&format=auto"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                }}
              />
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    WASTED
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  WASTED
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.000744
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +414.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.000744
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +23.91%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +414.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $721.94K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $80.11K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $744.53K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              3d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $WASTED"
                aria-label="Deploy an agent on $WASTED"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=GexThZHgaswpAQ7Fi8QrHFubjPimUNSYhJiAA7XZpump&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              4
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/6QUHcqYuiPRHxhnYZoygewXtNQr9kUrhc9Tmwgtbpump?chain=solana"
            >
              <img
                alt=""
                width="36"
                height="36"
                className="rounded-full object-cover shrink-0"
                decoding="async"
                referrerPolicy="no-referrer"
                loading="eager"
                fetchPriority="high"
                src="https://cdn.dexscreener.com/cms/images/NyF80jZDYsbdm_Xf?width=800&height=800&quality=95&format=auto"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                }}
              />
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    RAM
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  RAM
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.000131
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +360.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.000131
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +5.80%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +360.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $126.66K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $31.65K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $937.47K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              3d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $RAM"
                aria-label="Deploy an agent on $RAM"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=6QUHcqYuiPRHxhnYZoygewXtNQr9kUrhc9Tmwgtbpump&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              5
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/93VGqXL76voGxc43apJTDJoKkqnxTht1BKWoEmUypump?chain=solana"
            >
              <img
                alt=""
                width="36"
                height="36"
                className="rounded-full object-cover shrink-0"
                decoding="async"
                referrerPolicy="no-referrer"
                loading="eager"
                fetchPriority="high"
                src="https://cdn.dexscreener.com/cms/images/xIZSwvfNUyZthlS-?width=800&height=800&quality=95&format=auto"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                }}
              />
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    PI
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  PI
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.000165
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +334.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.000165
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +6.70%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +334.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $161.12K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $35.23K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.69M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $PI"
                aria-label="Deploy an agent on $PI"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=93VGqXL76voGxc43apJTDJoKkqnxTht1BKWoEmUypump&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              6
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/ExxzYBTt3jwU5MUxuw2F4toYbTLdFwThSjyaCn6Xpump?chain=solana"
            >
              <img
                alt=""
                width="36"
                height="36"
                className="rounded-full object-cover shrink-0"
                decoding="async"
                referrerPolicy="no-referrer"
                loading="eager"
                fetchPriority="high"
                src="https://cdn.dexscreener.com/cms/images/tcNNtgqabCEqyXgM?width=800&height=800&quality=95&format=auto"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                }}
              />
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    Anakin
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  Anakin
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.002945
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +319.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.002945
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -3.85%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +319.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.82M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $166.29K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.18M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              4d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $Anakin"
                aria-label="Deploy an agent on $Anakin"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=ExxzYBTt3jwU5MUxuw2F4toYbTLdFwThSjyaCn6Xpump&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              7
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/APLPiTjBWzwfZ5U1TBeqLF9XJ7dV7XKGe7j4BZhkDray?chain=solana"
            >
              <img
                alt=""
                width="36"
                height="36"
                className="rounded-full object-cover shrink-0"
                decoding="async"
                referrerPolicy="no-referrer"
                loading="eager"
                fetchPriority="high"
                src="https://cdn.dexscreener.com/cms/images/9Q-pX5iQ4-yAbN_o?width=800&height=800&quality=95&format=auto"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                }}
              />
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    PEAK
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  PEAK
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.001365
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +243.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.001365
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +8.79%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +243.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.38M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $109.84K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.01M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              7d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $PEAK"
                aria-label="Deploy an agent on $PEAK"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=APLPiTjBWzwfZ5U1TBeqLF9XJ7dV7XKGe7j4BZhkDray&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              8
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/qhbbjGBKJxW3AZGqngWM5tHcrENR3pVoRB9MCf1pump?chain=solana"
            >
              <img
                alt=""
                width="36"
                height="36"
                className="rounded-full object-cover shrink-0"
                decoding="async"
                referrerPolicy="no-referrer"
                loading="eager"
                fetchPriority="high"
                src="https://cdn.dexscreener.com/cms/images/xmRNLXLbxYP96gaR?width=800&height=800&quality=95&format=auto"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                }}
              />
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    Kim
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  Kim
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.000182
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +185.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.000182
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -2.03%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +185.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $175.31K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $41.38K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.01M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              4d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $Kim"
                aria-label="Deploy an agent on $Kim"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=qhbbjGBKJxW3AZGqngWM5tHcrENR3pVoRB9MCf1pump&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              9
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/Bv1a7cEj5aRnJQhMw4kRQqAFesMSd5LwcDnUzq52BMmr?chain=solana"
            >
              <img
                alt=""
                width="36"
                height="36"
                className="rounded-full object-cover shrink-0"
                decoding="async"
                referrerPolicy="no-referrer"
                loading="lazy"
                fetchPriority="auto"
                src="https://cdn.dexscreener.com/cms/images/GcjeczTah2v57O9h?width=800&height=800&quality=95&format=auto"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                }}
              />
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    FLOAT
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  FLOAT
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.001615
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +175.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.001615
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -7.84%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +175.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.63M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $254.11K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $760.43K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              5d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $FLOAT"
                aria-label="Deploy an agent on $FLOAT"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=Bv1a7cEj5aRnJQhMw4kRQqAFesMSd5LwcDnUzq52BMmr&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              10
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/EJAxERvKU4kEVXn3NarjvRtgaMaJyP9ZuMeKA7JJpump?chain=solana"
            >
              <img
                alt=""
                width="36"
                height="36"
                className="rounded-full object-cover shrink-0"
                decoding="async"
                referrerPolicy="no-referrer"
                loading="lazy"
                fetchPriority="auto"
                src="https://cdn.dexscreener.com/cms/images/mzA62X_uenf4s4Df?width=800&height=800&quality=95&format=auto"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                }}
              />
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    CHOO
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  CHOO
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.001885
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +104.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.001885
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -3.48%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +104.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.86M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $132.66K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.35M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              12d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $CHOO"
                aria-label="Deploy an agent on $CHOO"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=EJAxERvKU4kEVXn3NarjvRtgaMaJyP9ZuMeKA7JJpump&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              11
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/14LCiSb7CKDjvxcsbLfzyAA4EobVJwSBLNNzEuGUP8w8?chain=solana"
            >
              <div
                className="rounded-full flex items-center justify-center num font-semibold shrink-0"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                  border: "1px solid var(--v2-line-1)",
                  color: "var(--v2-t-1)",
                  fontSize: "10px",
                }}
              >
                ST
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    STEALTH
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  STEALTH
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅1
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +102.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅1
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +106.57%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +102.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $105.39K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $152.25K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.14M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $STEALTH"
                aria-label="Deploy an agent on $STEALTH"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=14LCiSb7CKDjvxcsbLfzyAA4EobVJwSBLNNzEuGUP8w8&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              12
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/DKYcjobF7HPtL9RyQBRdeRQ2iWvizpfbgWwPWNXdpump?chain=solana"
            >
              <img
                alt=""
                width="36"
                height="36"
                className="rounded-full object-cover shrink-0"
                decoding="async"
                referrerPolicy="no-referrer"
                loading="lazy"
                fetchPriority="auto"
                src="https://cdn.dexscreener.com/cms/images/EeFgwNnTiEIktyct?width=800&height=800&quality=95&format=auto"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                }}
              />
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    DacityCoin
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  DacityCoin
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.001191
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +94.86%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.001191
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +12.60%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +94.86%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.15M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $129.25K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $956.33K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              19d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $DacityCoin"
                aria-label="Deploy an agent on $DacityCoin"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=DKYcjobF7HPtL9RyQBRdeRQ2iWvizpfbgWwPWNXdpump&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              13
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/wMHBD2B8KbDagvXUEapginhtJdrH4QSvSezBM8Tpump?chain=solana"
            >
              <img
                alt=""
                width="36"
                height="36"
                className="rounded-full object-cover shrink-0"
                decoding="async"
                referrerPolicy="no-referrer"
                loading="lazy"
                fetchPriority="auto"
                src="https://cdn.dexscreener.com/cms/images/US6CpluFuWt8sjTD?width=800&height=800&quality=95&format=auto"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                }}
              />
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    ANTS
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  ANTS
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.002544
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +81.86%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.002544
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -11.78%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +81.86%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.50M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $135.00K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $947.66K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              3d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $ANTS"
                aria-label="Deploy an agent on $ANTS"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=wMHBD2B8KbDagvXUEapginhtJdrH4QSvSezBM8Tpump&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              14
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/HsprHxBRgiVaQdRf3TnKNuZZtaX9JUSPgMFdAkk6pump?chain=solana"
            >
              <img
                alt=""
                width="36"
                height="36"
                className="rounded-full object-cover shrink-0"
                decoding="async"
                referrerPolicy="no-referrer"
                loading="lazy"
                fetchPriority="auto"
                src="https://cdn.dexscreener.com/cms/images/-8CCNt5h1g4Fnvqj?width=800&height=800&quality=95&format=auto"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                }}
              />
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    GATO
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  GATO
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.009793
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +60.99%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.009793
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +6.38%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +60.99%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $9.68M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $316.28K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.70M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              70d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $GATO"
                aria-label="Deploy an agent on $GATO"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=HsprHxBRgiVaQdRf3TnKNuZZtaX9JUSPgMFdAkk6pump&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              15
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/Pmfm2RprxQRKZH1XWVsBUc2KgCTyzeDTSFbT1vJmogz?chain=solana"
            >
              <img
                alt=""
                width="36"
                height="36"
                className="rounded-full object-cover shrink-0"
                decoding="async"
                referrerPolicy="no-referrer"
                loading="lazy"
                fetchPriority="auto"
                src="https://cdn.dexscreener.com/cms/images/kOP94Lh1xNl9phyr?width=800&height=800&quality=95&format=auto"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                }}
              />
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    MOGZ
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  MOGZ
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.000491
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +60.60%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.000491
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -2.06%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +60.60%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $484.41K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $57.49K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $428.13K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              7d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $MOGZ"
                aria-label="Deploy an agent on $MOGZ"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=Pmfm2RprxQRKZH1XWVsBUc2KgCTyzeDTSFbT1vJmogz&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              16
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/CTPoyCwkjMvoJwU4xvZZqoD8tiYk6yDchySiN5gGpump?chain=solana"
            >
              <img
                alt=""
                width="36"
                height="36"
                className="rounded-full object-cover shrink-0"
                decoding="async"
                referrerPolicy="no-referrer"
                loading="lazy"
                fetchPriority="auto"
                src="https://cdn.dexscreener.com/cms/images/fgomV20_6LJtdS5w?width=800&height=800&quality=95&format=auto"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                }}
              />
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    fone
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  fone
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0022
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +41.35%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0022
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +1.57%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +41.35%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.20M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $345.29K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $278.06K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              68d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $fone"
                aria-label="Deploy an agent on $fone"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=CTPoyCwkjMvoJwU4xvZZqoD8tiYk6yDchySiN5gGpump&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              17
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/3w2TvVmTrtq4kSkoFVrTFQgz6MX7ThzDVrx9r5c3pump?chain=solana"
            >
              <img
                alt=""
                width="36"
                height="36"
                className="rounded-full object-cover shrink-0"
                decoding="async"
                referrerPolicy="no-referrer"
                loading="lazy"
                fetchPriority="auto"
                src="https://cdn.dexscreener.com/cms/images/hPCRJ6BpEEjR7OSB?width=800&height=800&quality=95&format=auto"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                }}
              />
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    HI
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  HI
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.000442
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +36.76%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.000442
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -10.22%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +36.76%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $434.53K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $67.06K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $422.64K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              5d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $HI"
                aria-label="Deploy an agent on $HI"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=3w2TvVmTrtq4kSkoFVrTFQgz6MX7ThzDVrx9r5c3pump&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              18
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/2gTbp2gwH46rqExzabSyrdR3294SLwCp2rSqWDS6Sim1?chain=solana"
            >
              <img
                alt=""
                width="36"
                height="36"
                className="rounded-full object-cover shrink-0"
                decoding="async"
                referrerPolicy="no-referrer"
                loading="lazy"
                fetchPriority="auto"
                src="https://cdn.dexscreener.com/cms/images/m77rUuvJ5NXElvxd?width=800&height=800&quality=95&format=auto"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                }}
              />
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    CATPAD
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  CATPAD
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.000181
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +33.71%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.000181
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +6.87%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +33.71%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $172.70K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $34.91K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $52.44K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              4d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $CATPAD"
                aria-label="Deploy an agent on $CATPAD"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=2gTbp2gwH46rqExzabSyrdR3294SLwCp2rSqWDS6Sim1&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              19
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/4kjruqGHDsSqkMdFfCjV7Vb62HPFhtXyWc2t6JpQzDnz?chain=solana"
            >
              <img
                alt=""
                width="36"
                height="36"
                className="rounded-full object-cover shrink-0"
                decoding="async"
                referrerPolicy="no-referrer"
                loading="lazy"
                fetchPriority="auto"
                src="https://cdn.dexscreener.com/cms/images/lwZpiYOTcTq51oKH?width=800&height=800&quality=95&format=auto"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                }}
              />
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    GTA6
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  GTA6
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.013001
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +27.67%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.013001
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +5.20%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +27.67%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $12.94M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $162.36K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.60M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              67d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $GTA6"
                aria-label="Deploy an agent on $GTA6"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=4kjruqGHDsSqkMdFfCjV7Vb62HPFhtXyWc2t6JpQzDnz&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              20
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/5yC9BM8KUsJTPbWPLfA2N8qH1s9V8DQ3Vcw1G6Jdpump?chain=solana"
            >
              <img
                alt=""
                width="36"
                height="36"
                className="rounded-full object-cover shrink-0"
                decoding="async"
                referrerPolicy="no-referrer"
                loading="lazy"
                fetchPriority="auto"
                src="https://cdn.dexscreener.com/cms/images/CosLgfKcR4zLMl2Q?width=800&height=800&quality=95&format=auto"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                }}
              />
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    AgenC
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  AgenC
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.001986
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +25.89%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.001986
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -4.73%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +25.89%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.99M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $204.94K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $111.28K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              251d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $AgenC"
                aria-label="Deploy an agent on $AgenC"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=5yC9BM8KUsJTPbWPLfA2N8qH1s9V8DQ3Vcw1G6Jdpump&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              21
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/ApZuxdpzMrbEYTGEzeY9afh5pj9d6qPRJCTgQYiipbKg?chain=solana"
            >
              <img
                alt=""
                width="36"
                height="36"
                className="rounded-full object-cover shrink-0"
                decoding="async"
                referrerPolicy="no-referrer"
                loading="lazy"
                fetchPriority="auto"
                src="https://cdn.dexscreener.com/cms/images/EvHO-m_bFJ_TjSs4?width=800&height=800&quality=95&format=auto"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                }}
              />
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    CYBERLEEK
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  CYBERLEEK
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0017
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +25.50%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0017
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -7.21%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +25.50%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.71M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $404.94K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $214.11K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              79d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $CYBERLEEK"
                aria-label="Deploy an agent on $CYBERLEEK"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=ApZuxdpzMrbEYTGEzeY9afh5pj9d6qPRJCTgQYiipbKg&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              22
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/DtcicPCKTKeAh7TDEzTym3hXeoHAoMiBdYJhMYxZpump?chain=solana"
            >
              <img
                alt=""
                width="36"
                height="36"
                className="rounded-full object-cover shrink-0"
                decoding="async"
                referrerPolicy="no-referrer"
                loading="lazy"
                fetchPriority="auto"
                src="https://cdn.dexscreener.com/cms/images/2bajn2a05AdQGV-4?width=800&height=800&quality=95&format=auto"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                }}
              />
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    CBUCKS
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  CBUCKS
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.001809
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +21.64%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.001809
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.89%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +21.64%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.68M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $141.46K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $204.74K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              27d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $CBUCKS"
                aria-label="Deploy an agent on $CBUCKS"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=DtcicPCKTKeAh7TDEzTym3hXeoHAoMiBdYJhMYxZpump&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              23
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/FjPKUGnF5zBpdEv18gT8FJCtxh3MKrFkoeYekgYr1win?chain=solana"
            >
              <img
                alt=""
                width="36"
                height="36"
                className="rounded-full object-cover shrink-0"
                decoding="async"
                referrerPolicy="no-referrer"
                loading="lazy"
                fetchPriority="auto"
                src="https://cdn.dexscreener.com/cms/images/TnRgOJHMjT2jYp5f?width=800&height=800&quality=95&format=auto"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                }}
              />
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    1WIN
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  1WIN
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.059247
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +15.87%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.059247
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -1.59%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +15.87%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $15.96M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $164.15K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $935.21K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              3d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $1WIN"
                aria-label="Deploy an agent on $1WIN"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=FjPKUGnF5zBpdEv18gT8FJCtxh3MKrFkoeYekgYr1win&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              24
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/GTBxUiw6wJdmmkCGZgRHLyYxqu1vG4KtRpeox6yDpump?chain=solana"
            >
              <img
                alt=""
                width="36"
                height="36"
                className="rounded-full object-cover shrink-0"
                decoding="async"
                referrerPolicy="no-referrer"
                loading="lazy"
                fetchPriority="auto"
                src="https://cdn.dexscreener.com/cms/images/BqiLLFPFrRoiHTBQ?width=800&height=800&quality=95&format=auto"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                }}
              />
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    JEANPHIL
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  JEANPHIL
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.00358
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +11.21%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.00358
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +2.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +11.21%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.45M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $291.83K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $238.61K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              44d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $JEANPHIL"
                aria-label="Deploy an agent on $JEANPHIL"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=GTBxUiw6wJdmmkCGZgRHLyYxqu1vG4KtRpeox6yDpump&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              25
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN?chain=solana"
            >
              <img
                alt=""
                width="36"
                height="36"
                className="rounded-full object-cover shrink-0"
                decoding="async"
                referrerPolicy="no-referrer"
                loading="lazy"
                fetchPriority="auto"
                src="https://cdn.dexscreener.com/cms/images/85a2613c51c8ded8e51b1b3910487ab66691cb60fecec7d0905481a603bba899?width=800&height=800&quality=95&format=auto"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                }}
              />
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    TRUMP
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  TRUMP
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $1.74
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +9.38%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $1.74
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +1.13%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +9.38%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $490.58M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $220.35K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.13M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              654d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $TRUMP"
                aria-label="Deploy an agent on $TRUMP"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              26
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/5tCju6YNxHq5zrA6tGndr6F7TK42mpUFmeE31cSFpump?chain=solana"
            >
              <img
                alt=""
                width="36"
                height="36"
                className="rounded-full object-cover shrink-0"
                decoding="async"
                referrerPolicy="no-referrer"
                loading="lazy"
                fetchPriority="auto"
                src="https://cdn.dexscreener.com/cms/images/PzfKUkWe7jkX85Sq?width=800&height=800&quality=95&format=auto"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                }}
              />
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    swordcat
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  swordcat
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.001784
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +8.85%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.001784
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +1.34%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +8.85%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.70M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $179.79K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $165.27K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              36d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $swordcat"
                aria-label="Deploy an agent on $swordcat"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=5tCju6YNxHq5zrA6tGndr6F7TK42mpUFmeE31cSFpump&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              27
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/Ce2gx9KGXJ6C9Mp5b5x1sn9Mg87JwEbrQby4Zqo3pump?chain=solana"
            >
              <img
                alt=""
                width="36"
                height="36"
                className="rounded-full object-cover shrink-0"
                decoding="async"
                referrerPolicy="no-referrer"
                loading="lazy"
                fetchPriority="auto"
                src="https://cdn.dexscreener.com/cms/images/d5d7bfff13c5cc762c020b4414e4493a8eb19d4bdcfb51957da58e9c471d43dd?width=800&height=800&quality=95&format=auto"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                }}
              />
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    neet
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  neet
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.027927
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +5.63%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.027927
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.75%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +5.63%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $28.40M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.66M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $169.71K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              555d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $neet"
                aria-label="Deploy an agent on $neet"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=Ce2gx9KGXJ6C9Mp5b5x1sn9Mg87JwEbrQby4Zqo3pump&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              28
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/HcRLc9VDgjLeK154xDawfb1dmVJ98DoSqcwTHGqiDeJR?chain=solana"
            >
              <img
                alt=""
                width="36"
                height="36"
                className="rounded-full object-cover shrink-0"
                decoding="async"
                referrerPolicy="no-referrer"
                loading="lazy"
                fetchPriority="auto"
                src="https://cdn.dexscreener.com/cms/images/-DNNIYh0wlMsd_v4?width=800&height=800&quality=95&format=auto"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                }}
              />
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    ZCAT
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  ZCAT
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.038814
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +3.81%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.038814
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.65%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +3.81%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $38.72M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.06M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $328.46K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              58d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $ZCAT"
                aria-label="Deploy an agent on $ZCAT"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=HcRLc9VDgjLeK154xDawfb1dmVJ98DoSqcwTHGqiDeJR&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              29
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/G7vQWurMkMMm2dU3iZpXYFTHT9Biio4F4gZCrwFpKNwG?chain=solana"
            >
              <img
                alt=""
                width="36"
                height="36"
                className="rounded-full object-cover shrink-0"
                decoding="async"
                referrerPolicy="no-referrer"
                loading="lazy"
                fetchPriority="auto"
                src="https://cdn.dexscreener.com/cms/images/634081eec8ea5f649b6b8454c58682e840735bf9516d6bc13f7e9a11499f1400?width=800&height=800&quality=95&format=auto"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                }}
              />
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    BIRB
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  BIRB
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.083385
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +3.23%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.083385
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.95%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +3.23%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $23.57M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $799.20K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.04M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              279d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $BIRB"
                aria-label="Deploy an agent on $BIRB"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=G7vQWurMkMMm2dU3iZpXYFTHT9Biio4F4gZCrwFpKNwG&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              30
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/CWZ6BsdnjkDVTGkmL6bGbJXXig6ceef12KvyGQW14cMt?chain=solana"
            >
              <img
                alt=""
                width="36"
                height="36"
                className="rounded-full object-cover shrink-0"
                decoding="async"
                referrerPolicy="no-referrer"
                loading="lazy"
                fetchPriority="auto"
                src="https://cdn.dexscreener.com/cms/images/oQXx0tMOagTpnNjt?width=800&height=800&quality=95&format=auto"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                }}
              />
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    ANTFUN
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  ANTFUN
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.017717
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +3.08%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.017717
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.98%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +3.08%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $33.43M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $17.67M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.40M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              116d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $ANTFUN"
                aria-label="Deploy an agent on $ANTFUN"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=CWZ6BsdnjkDVTGkmL6bGbJXXig6ceef12KvyGQW14cMt&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              31
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump?chain=solana"
            >
              <img
                alt=""
                width="36"
                height="36"
                className="rounded-full object-cover shrink-0"
                decoding="async"
                referrerPolicy="no-referrer"
                loading="lazy"
                fetchPriority="auto"
                src="https://cdn.dexscreener.com/cms/images/9af5672845c89585e9ff1e3b26a640090324aa4d92222052d1043e60ef8182de?width=800&height=800&quality=95&format=auto"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                }}
              />
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    Fartcoin{" "}
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  Fartcoin{" "}
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.122204
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +1.90%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.122204
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.30%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +1.90%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $122.73M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $6.62M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $153.32K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              746d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $Fartcoin "
                aria-label="Deploy an agent on $Fartcoin "
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              32
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/5UUH9RTDiSpq6HKS6bp4NdU9PNJpXRXuiw6ShBTBhgH2?chain=solana"
            >
              <img
                alt=""
                width="36"
                height="36"
                className="rounded-full object-cover shrink-0"
                decoding="async"
                referrerPolicy="no-referrer"
                loading="lazy"
                fetchPriority="auto"
                src="https://cdn.dexscreener.com/cms/images/tLIgpz8Fa_O1THOX?width=800&height=800&quality=95&format=auto"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                }}
              />
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    TROLL
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  TROLL
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.029804
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +1.90%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.029804
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.65%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +1.90%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $29.77M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.48M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $105.16K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              561d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $TROLL"
                aria-label="Deploy an agent on $TROLL"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=5UUH9RTDiSpq6HKS6bp4NdU9PNJpXRXuiw6ShBTBhgH2&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              33
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/2j5SaS7xy776qCBpyPQbZjyQSAtKiFgrwjfErthnW2ZM?chain=solana"
            >
              <img
                alt=""
                width="36"
                height="36"
                className="rounded-full object-cover shrink-0"
                decoding="async"
                referrerPolicy="no-referrer"
                loading="lazy"
                fetchPriority="auto"
                src="https://cdn.dexscreener.com/cms/images/qF2ypYau95TgBZR8?width=800&height=800&quality=95&format=auto"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                }}
              />
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    CLAUDIA
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  CLAUDIA
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.002064
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +1.18%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.002064
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +9.08%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +1.18%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.92M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $198.10K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $226.42K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              27d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $CLAUDIA"
                aria-label="Deploy an agent on $CLAUDIA"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=2j5SaS7xy776qCBpyPQbZjyQSAtKiFgrwjfErthnW2ZM&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              34
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/DJTu7vi8norVzdVAffgvb39VP7wjKeTsgaMBJrzfxvoF?chain=solana"
            >
              <div
                className="rounded-full flex items-center justify-center num font-semibold shrink-0"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                  border: "1px solid var(--v2-line-1)",
                  color: "var(--v2-t-1)",
                  fontSize: "10px",
                }}
              >
                DJ
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    DJT
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  DJT
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $5.67
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +0.89%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $5.67
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.16%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.89%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $109.11K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $397.13K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.87M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              54d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $DJT"
                aria-label="Deploy an agent on $DJT"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=DJTu7vi8norVzdVAffgvb39VP7wjKeTsgaMBJrzfxvoF&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              35
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/Dz9mQ9NzkBcCsuGPFJ3r1bS4wgqKMHBPiVuniW8Mbonk?chain=solana"
            >
              <img
                alt=""
                width="36"
                height="36"
                className="rounded-full object-cover shrink-0"
                decoding="async"
                referrerPolicy="no-referrer"
                loading="lazy"
                fetchPriority="auto"
                src="https://cdn.dexscreener.com/cms/images/4f8af59f26d45252fb4379d4b1a1e61d0b419fd34dab2ec9f3ba77585d1783cb?width=800&height=800&quality=95&format=auto"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                }}
              />
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    USELESS
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  USELESS
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.129908
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +0.74%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.129908
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.60%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.74%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $130.24M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.58M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $964.31K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              542d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $USELESS"
                aria-label="Deploy an agent on $USELESS"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=Dz9mQ9NzkBcCsuGPFJ3r1bS4wgqKMHBPiVuniW8Mbonk&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              36
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/METAewgxyPbgwsseH8T16a39CQ5VyVxZi9zXiDPY18m?chain=solana"
            >
              <div
                className="rounded-full flex items-center justify-center num font-semibold shrink-0"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                  border: "1px solid var(--v2-line-1)",
                  color: "var(--v2-t-1)",
                  fontSize: "10px",
                }}
              >
                MP
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    MPLX
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  MPLX
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.073831
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +0.46%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.073831
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +2.45%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.46%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $34.62M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $946.75K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.45M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              378d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $MPLX"
                aria-label="Deploy an agent on $MPLX"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=METAewgxyPbgwsseH8T16a39CQ5VyVxZi9zXiDPY18m&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              37
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/98sMhvDwXj1RQi5c5Mndm3vPe9cBqPrbLaufMXFNMh5g?chain=solana"
            >
              <div
                className="rounded-full flex items-center justify-center num font-semibold shrink-0"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                  border: "1px solid var(--v2-line-1)",
                  color: "var(--v2-t-1)",
                  fontSize: "10px",
                }}
              >
                HY
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    HYPE
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  HYPE
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $87.91
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +0.45%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $87.91
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.54%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.45%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $63.96M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $570.62K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.53M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              373d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $HYPE"
                aria-label="Deploy an agent on $HYPE"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=98sMhvDwXj1RQi5c5Mndm3vPe9cBqPrbLaufMXFNMh5g&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              38
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH?chain=solana"
            >
              <div
                className="rounded-full flex items-center justify-center num font-semibold shrink-0"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                  border: "1px solid var(--v2-line-1)",
                  color: "var(--v2-t-1)",
                  fontSize: "10px",
                }}
              >
                CA
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    CASH
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  CASH
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $1.00
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +0.14%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $1.00
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.04%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.14%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $103.88K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $37.29K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $258.68K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              202d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $CASH"
                aria-label="Deploy an agent on $CASH"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
          <div
            className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_minmax(200px,2fr)_1fr_90px_90px_1fr_1fr_1fr_80px_132px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              39
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA?chain=solana"
            >
              <div
                className="rounded-full flex items-center justify-center num font-semibold shrink-0"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--v2-bg-2)",
                  border: "1px solid var(--v2-line-1)",
                  color: "var(--v2-t-1)",
                  fontSize: "10px",
                }}
              >
                EU
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    EUROP
                  </span>
                  <span
                    className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--v2-t-3)",
                      background: "var(--v2-bg-2)",
                    }}
                  >
                    Solana
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  EUROP
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $1.11
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +0.08%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $1.11
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.02%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.08%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $16.44M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.16M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.85M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              63d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $EUROP"
                aria-label="Deploy an agent on $EUROP"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] opacity-60 group-hover:opacity-100"
                style={{
                  color: "var(--v2-accent-text)",
                  border: "1px solid rgba(var(--v2-accent-rgb),0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"></path>
                </svg>
              </button>
              <a
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-all"
                href="/application/swap?mint=euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA&chain=solana"
                style={{
                  color: "rgb(20, 25, 29)",
                  background:
                    "linear-gradient(180deg, #0037fd 0%, var(--v2-accent) 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
                </svg>{" "}
                Swap
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
