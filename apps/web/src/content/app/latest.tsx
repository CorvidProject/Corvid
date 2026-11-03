export function ApplicationLatestContent() {
  return (
    <>
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <div className="min-w-0">
            <h1
              className="text-[22px] font-semibold leading-tight"
              style={{ color: "var(--v2-t-1)" }}
            >
              Latest Tokens
            </h1>
            <p className="text-[13px]" style={{ color: "var(--v2-t-3)" }}>
              New pools and pump.fun launches, newest first · all chains
            </p>
          </div>
          <span
            className="ml-auto flex items-center gap-1.5 eyebrow"
            style={{ color: "var(--v2-pos)" }}
          >
            <span className="dot dot-pos dot-pulse"></span> LIVE
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-3">
          <button
            className="h-8 px-3 rounded-full text-[13px] flex items-center gap-1.5 transition-colors"
            style={{
              background: "rgba(var(--v2-accent-rgb),0.12)",
              color: "var(--v2-accent-text)",
              border: "1px solid rgba(var(--v2-accent-rgb),0.45)",
            }}
          >
            All chains<span className="num text-[11px] opacity-70">120</span>
          </button>
          <button
            className="h-8 px-3 rounded-full text-[13px] flex items-center gap-1.5 transition-colors"
            style={{
              background: "var(--v2-bg-1)",
              color: "var(--v2-t-3)",
              border: "1px solid var(--v2-line-1)",
            }}
          >
            Robinhood<span className="num text-[11px] opacity-70">0</span>
          </button>
          <button
            className="h-8 px-3 rounded-full text-[13px] flex items-center gap-1.5 transition-colors"
            style={{
              background: "var(--v2-bg-1)",
              color: "var(--v2-t-3)",
              border: "1px solid var(--v2-line-1)",
            }}
          >
            Solana<span className="num text-[11px] opacity-70">120</span>
          </button>
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
              href="/application/tokens/5LLWCop7jWScMJQQf76pJ6p3itJH6pjBYCfBo7ktpump?chain=solana"
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
                src="https://assets.geckoterminal.com/g759rt4bjj3bcphnp3vu1packw1l"
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
                    A MIRACLE
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
                  A MIRACLE
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₆3489
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-accent-text)" }}
              >
                curve 0%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₆3489
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-t-4)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $348.96
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-accent-text)" }}
            >
              curve 0%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $A MIRACLE"
                aria-label="Deploy an agent on $A MIRACLE"
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
                href="/application/swap?mint=5LLWCop7jWScMJQQf76pJ6p3itJH6pjBYCfBo7ktpump&chain=solana"
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
              href="/application/tokens/HyYkzWKKDK86dHqNUgkDjgqW2p1mpQFU2xWWBjUsQpij?chain=solana"
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
                src="https://assets.geckoterminal.com/r6q0t8qbuvm9royueg9yypii0tyf"
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
                    WDT
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
                  Willem Dafoe Template
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3057
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-accent-text)" }}
              >
                curve 4%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3057
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-t-4)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.06K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-accent-text)" }}
            >
              curve 4%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $WDT"
                aria-label="Deploy an agent on $WDT"
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
                href="/application/swap?mint=HyYkzWKKDK86dHqNUgkDjgqW2p1mpQFU2xWWBjUsQpij&chain=solana"
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
              href="/application/tokens/Ar7y5VjX84pf7pHsTPiuM2PsYhHZy5SLXBg3oaXtpump?chain=solana"
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
                src="https://assets.geckoterminal.com/accg2okbhoznnsc5weitwr4se57l"
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
                    DEBT
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
                  GRAEBER
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₄1796
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-accent-text)" }}
              >
                curve 24%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₄1796
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-t-4)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $17.96K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-accent-text)" }}
            >
              curve 24%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $DEBT"
                aria-label="Deploy an agent on $DEBT"
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
                href="/application/swap?mint=Ar7y5VjX84pf7pHsTPiuM2PsYhHZy5SLXBg3oaXtpump&chain=solana"
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
              href="/application/tokens/Ed58DGTDfWAKnnpnkdehsudp4BRn5kahbSCV666qpump?chain=solana"
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
                src="https://assets.geckoterminal.com/9rgn5m0ubeae5s3g4bk9y6jotwny"
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
                    ULTRA
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
                  ULTRAPAID
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₆9733
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-accent-text)" }}
              >
                curve 1%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₆9733
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-t-4)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $973.38
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-accent-text)" }}
            >
              curve 1%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $ULTRA"
                aria-label="Deploy an agent on $ULTRA"
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
                href="/application/swap?mint=Ed58DGTDfWAKnnpnkdehsudp4BRn5kahbSCV666qpump&chain=solana"
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
              href="/application/tokens/7j4BSP6ukTBwafmZEVGDji56QVEsKPs7aA4Vi21dpump?chain=solana"
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
                src="https://assets.geckoterminal.com/9rpfvpszzuao27nxzwiq7qfk0fa2"
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
                    WDT
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
                  Willem Dafoe Template
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅7531
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-accent-text)" }}
              >
                curve 10%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅7531
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-t-4)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $7.53K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-accent-text)" }}
            >
              curve 10%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $WDT"
                aria-label="Deploy an agent on $WDT"
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
                href="/application/swap?mint=7j4BSP6ukTBwafmZEVGDji56QVEsKPs7aA4Vi21dpump&chain=solana"
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
              href="/application/tokens/BbNJdD5TC19GYKLk6RQikr3jtN9jsThWrvBe9bcBpump?chain=solana"
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
                src="https://assets.geckoterminal.com/j04omdsej281yidxo2bo4myo3va9"
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
                    DOOROC
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
                  Doomed Rocket
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₄1043
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-accent-text)" }}
              >
                curve 14%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₄1043
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-t-4)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $10.43K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-accent-text)" }}
            >
              curve 14%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $DOOROC"
                aria-label="Deploy an agent on $DOOROC"
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
                href="/application/swap?mint=BbNJdD5TC19GYKLk6RQikr3jtN9jsThWrvBe9bcBpump&chain=solana"
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
              href="/application/tokens/DtpW1GxU6H6qr8qWcpnbsuDmLt6KqqXKdr7rupD7pump?chain=solana"
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
                src="https://assets.geckoterminal.com/nuxl3w6ibthatjwp0gvw5pz8egz2"
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
                    Kabosu
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
                  KabosuCoin
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅5301
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-accent-text)" }}
              >
                curve 7%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅5301
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-t-4)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $5.30K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-accent-text)" }}
            >
              curve 7%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $Kabosu"
                aria-label="Deploy an agent on $Kabosu"
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
                href="/application/swap?mint=DtpW1GxU6H6qr8qWcpnbsuDmLt6KqqXKdr7rupD7pump&chain=solana"
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
              href="/application/tokens/3aWLmjFntPjmGjpmD2tUCYna1UmLAHZeHejMQ2dppump?chain=solana"
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
                src="https://assets.geckoterminal.com/fsseh90ksv42ecqiarpi77n8jc4t"
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
                    Rescue
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
                  Rescuecoin
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3100
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-accent-text)" }}
              >
                curve 4%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3100
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-t-4)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.10K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-accent-text)" }}
            >
              curve 4%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $Rescue"
                aria-label="Deploy an agent on $Rescue"
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
                href="/application/swap?mint=3aWLmjFntPjmGjpmD2tUCYna1UmLAHZeHejMQ2dppump&chain=solana"
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
              href="/application/tokens/CMjyrBiLz62xn4bd5WcRUWwFyXGMA5sHzPPQusxppump?chain=solana"
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
                src="https://assets.geckoterminal.com/g1l2c10722bqpwhu44xssvb2kqee"
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
                    MEMECAT
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
                  Meme Cat
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅2845
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-accent-text)" }}
              >
                curve 4%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅2845
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-t-4)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.85K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-accent-text)" }}
            >
              curve 4%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $MEMECAT"
                aria-label="Deploy an agent on $MEMECAT"
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
                href="/application/swap?mint=CMjyrBiLz62xn4bd5WcRUWwFyXGMA5sHzPPQusxppump&chain=solana"
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
              href="/application/tokens/2NA7oq6ahJGv6P9Wa8EWo3ktt8Y1fdN1mARBhBimpump?chain=solana"
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
                src="https://assets.geckoterminal.com/5adddh40luw2b0ax9e8xjrg3i1uc"
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
                    sloppy
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
                  sloppy_ai
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅2783
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-accent-text)" }}
              >
                curve 4%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅2783
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-t-4)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.78K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-accent-text)" }}
            >
              curve 4%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $sloppy"
                aria-label="Deploy an agent on $sloppy"
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
                href="/application/swap?mint=2NA7oq6ahJGv6P9Wa8EWo3ktt8Y1fdN1mARBhBimpump&chain=solana"
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
              href="/application/tokens/5YVR6F5a3AeMHn1oSo2yaoGdJA4jZcDU8VTnWAhxJu42?chain=solana"
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
                src="https://assets.geckoterminal.com/dmbbinl1vechjapz15fsi667x388"
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
                    NOTWEAK
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
                  Not For The Weak
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅2671
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-accent-text)" }}
              >
                curve 4%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅2671
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-t-4)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.67K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-accent-text)" }}
            >
              curve 4%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $NOTWEAK"
                aria-label="Deploy an agent on $NOTWEAK"
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
                href="/application/swap?mint=5YVR6F5a3AeMHn1oSo2yaoGdJA4jZcDU8VTnWAhxJu42&chain=solana"
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
              href="/application/tokens/28eNQDpHecc8dXkduX5gu5riWu1kYqiJqzkGAUofpump?chain=solana"
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
                src="https://assets.geckoterminal.com/gjuyxl9tckzqd0l5z23k9o5xb49l"
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
                    HOPE
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
                  Holding On Praying Everyday
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3348
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-accent-text)" }}
              >
                curve 4%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3348
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-t-4)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.35K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-accent-text)" }}
            >
              curve 4%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $HOPE"
                aria-label="Deploy an agent on $HOPE"
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
                href="/application/swap?mint=28eNQDpHecc8dXkduX5gu5riWu1kYqiJqzkGAUofpump&chain=solana"
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
              href="/application/tokens/9y6jSgYEr3yoEgYZWNvHBBcndcLw7YkwunWuEL2pump?chain=solana"
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
                src="https://assets.geckoterminal.com/6wtj3c5fhxoxc3mxjz96djfqehac"
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
                    ALPHABET
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
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3335
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-accent-text)" }}
              >
                curve 4%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3335
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-t-4)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.34K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-accent-text)" }}
            >
              curve 4%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $ALPHABET"
                aria-label="Deploy an agent on $ALPHABET"
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
                href="/application/swap?mint=9y6jSgYEr3yoEgYZWNvHBBcndcLw7YkwunWuEL2pump&chain=solana"
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
              href="/application/tokens/7T5vYGDg1ezkDxZwaAJJhkuPSFkXAmqaD3ESysXPpump?chain=solana"
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
                src="https://assets.geckoterminal.com/iasuuac2838767f4bg9tnl7izwb6"
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
                    Niggers
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
                  Buy if you ARE A NIGGER
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅2874
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-accent-text)" }}
              >
                curve 4%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅2874
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-t-4)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.87K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-accent-text)" }}
            >
              curve 4%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $Niggers"
                aria-label="Deploy an agent on $Niggers"
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
                href="/application/swap?mint=7T5vYGDg1ezkDxZwaAJJhkuPSFkXAmqaD3ESysXPpump&chain=solana"
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
              href="/application/tokens/Epim9jZmn19eYFMtVNmT1CfiSemmuiMmPtaw5phKpump?chain=solana"
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
                src="https://assets.geckoterminal.com/w2dtu97tjgqj2w293p1c6ws5kv2s"
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
                    ONSHORE
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
                  ONSHORE
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅2672
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-accent-text)" }}
              >
                curve 4%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅2672
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-t-4)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.67K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-accent-text)" }}
            >
              curve 4%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $ONSHORE"
                aria-label="Deploy an agent on $ONSHORE"
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
                href="/application/swap?mint=Epim9jZmn19eYFMtVNmT1CfiSemmuiMmPtaw5phKpump&chain=solana"
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
              href="/application/tokens/FTarbgHowS74dEjFuUAhDYUiyapbUGFsY5Fa5mD5pump?chain=solana"
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
                src="https://assets.geckoterminal.com/ffinm53rk6uavtfm63441oj6hu1k"
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
                    ULTRA
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
                  ULTRAPAID
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₄1373
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-accent-text)" }}
              >
                curve 18%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₄1373
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-4)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-t-4)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $13.74K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-accent-text)" }}
            >
              curve 18%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              ·
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $ULTRA"
                aria-label="Deploy an agent on $ULTRA"
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
                href="/application/swap?mint=FTarbgHowS74dEjFuUAhDYUiyapbUGFsY5Fa5mD5pump&chain=solana"
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
              href="/application/tokens/3PjsaQKi2uLYAxXwMW7pDAtyxAp1aKHwZMRWCsu7pump?chain=solana"
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
                IN
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    INVR{" "}
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
                  INVR{" "}
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -3.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -2.94%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -3.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.68K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.19K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $638.44
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $INVR "
                aria-label="Deploy an agent on $INVR "
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
                href="/application/swap?mint=3PjsaQKi2uLYAxXwMW7pDAtyxAp1aKHwZMRWCsu7pump&chain=solana"
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
              href="/application/tokens/3PjsaQKi2uLYAxXwMW7pDAtyxAp1aKHwZMRWCsu7pump?chain=solana"
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
                IN
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    INVR{" "}
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
                  INVR{" "}
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -3.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -3.04%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -3.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.63K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.19K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $609.96
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $INVR "
                aria-label="Deploy an agent on $INVR "
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
                href="/application/swap?mint=3PjsaQKi2uLYAxXwMW7pDAtyxAp1aKHwZMRWCsu7pump&chain=solana"
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
              href="/application/tokens/3PjsaQKi2uLYAxXwMW7pDAtyxAp1aKHwZMRWCsu7pump?chain=solana"
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
                IN
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    INVR{" "}
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
                  INVR{" "}
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -3.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -2.99%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -3.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.66K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.19K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $638.60
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $INVR "
                aria-label="Deploy an agent on $INVR "
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
                href="/application/swap?mint=3PjsaQKi2uLYAxXwMW7pDAtyxAp1aKHwZMRWCsu7pump&chain=solana"
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
              href="/application/tokens/3PjsaQKi2uLYAxXwMW7pDAtyxAp1aKHwZMRWCsu7pump?chain=solana"
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
                IN
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    INVR{" "}
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
                  INVR{" "}
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -3.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -2.86%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -3.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.63K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.19K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $621.37
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $INVR "
                aria-label="Deploy an agent on $INVR "
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
                href="/application/swap?mint=3PjsaQKi2uLYAxXwMW7pDAtyxAp1aKHwZMRWCsu7pump&chain=solana"
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
              href="/application/tokens/3PjsaQKi2uLYAxXwMW7pDAtyxAp1aKHwZMRWCsu7pump?chain=solana"
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
                IN
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    INVR{" "}
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
                  INVR{" "}
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -3.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -3.11%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -3.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.64K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.19K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $641.92
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $INVR "
                aria-label="Deploy an agent on $INVR "
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
                href="/application/swap?mint=3PjsaQKi2uLYAxXwMW7pDAtyxAp1aKHwZMRWCsu7pump&chain=solana"
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
              href="/application/tokens/3PjsaQKi2uLYAxXwMW7pDAtyxAp1aKHwZMRWCsu7pump?chain=solana"
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
                IN
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    INVR{" "}
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
                  INVR{" "}
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -3.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -2.94%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -3.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.65K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.19K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $626.27
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $INVR "
                aria-label="Deploy an agent on $INVR "
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
                href="/application/swap?mint=3PjsaQKi2uLYAxXwMW7pDAtyxAp1aKHwZMRWCsu7pump&chain=solana"
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
              href="/application/tokens/A7qnb9144Efh6dTiikV8hfcMSSANSi6npEAmpC5Upump?chain=solana"
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
                $C
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    $CORNY
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
                  $CORNY
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.00
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -99.50%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.00
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -95.16%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -99.50%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $21.92
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.35K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.64K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $$CORNY"
                aria-label="Deploy an agent on $$CORNY"
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
                href="/application/swap?mint=A7qnb9144Efh6dTiikV8hfcMSSANSi6npEAmpC5Upump&chain=solana"
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
              href="/application/tokens/A7qnb9144Efh6dTiikV8hfcMSSANSi6npEAmpC5Upump?chain=solana"
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
                $C
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    $CORNY
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
                  $CORNY
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.00
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -99.50%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.00
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -103.28%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -99.50%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $21.87
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.35K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.75K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $$CORNY"
                aria-label="Deploy an agent on $$CORNY"
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
                href="/application/swap?mint=A7qnb9144Efh6dTiikV8hfcMSSANSi6npEAmpC5Upump&chain=solana"
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
              href="/application/tokens/A7qnb9144Efh6dTiikV8hfcMSSANSi6npEAmpC5Upump?chain=solana"
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
                $C
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    $CORNY
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
                  $CORNY
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.00
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -99.50%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.00
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -103.22%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -99.50%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $22.28
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.35K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.72K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $$CORNY"
                aria-label="Deploy an agent on $$CORNY"
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
                href="/application/swap?mint=A7qnb9144Efh6dTiikV8hfcMSSANSi6npEAmpC5Upump&chain=solana"
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
              href="/application/tokens/A7qnb9144Efh6dTiikV8hfcMSSANSi6npEAmpC5Upump?chain=solana"
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
                $C
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    $CORNY
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
                  $CORNY
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.00
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -99.50%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.00
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -104.20%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -99.50%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $22.25
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.35K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.67K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $$CORNY"
                aria-label="Deploy an agent on $$CORNY"
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
                href="/application/swap?mint=A7qnb9144Efh6dTiikV8hfcMSSANSi6npEAmpC5Upump&chain=solana"
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
              href="/application/tokens/A7qnb9144Efh6dTiikV8hfcMSSANSi6npEAmpC5Upump?chain=solana"
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
                $C
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    $CORNY
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
                  $CORNY
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.00
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -99.50%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.00
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -95.61%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -99.50%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $21.93
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.35K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.71K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $$CORNY"
                aria-label="Deploy an agent on $$CORNY"
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
                href="/application/swap?mint=A7qnb9144Efh6dTiikV8hfcMSSANSi6npEAmpC5Upump&chain=solana"
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
              href="/application/tokens/A7qnb9144Efh6dTiikV8hfcMSSANSi6npEAmpC5Upump?chain=solana"
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
                $C
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    $CORNY
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
                  $CORNY
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.00
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -99.50%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.00
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -95.79%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -99.50%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $22.27
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.35K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.79K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $$CORNY"
                aria-label="Deploy an agent on $$CORNY"
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
                href="/application/swap?mint=A7qnb9144Efh6dTiikV8hfcMSSANSi6npEAmpC5Upump&chain=solana"
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
              href="/application/tokens/85E6sHyNb7djy5xs5nf6CiEUV1xCAxSPBJY5V4X4pump?chain=solana"
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
                P1
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    P1C4
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
                  P1C4
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.00
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -84.80%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.00
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -84.01%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -84.80%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $433.29
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.25K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $254.74
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $P1C4"
                aria-label="Deploy an agent on $P1C4"
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
                href="/application/swap?mint=85E6sHyNb7djy5xs5nf6CiEUV1xCAxSPBJY5V4X4pump&chain=solana"
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
              href="/application/tokens/85E6sHyNb7djy5xs5nf6CiEUV1xCAxSPBJY5V4X4pump?chain=solana"
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
                P1
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    P1C4
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
                  P1C4
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.00
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -84.80%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.00
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -88.61%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -84.80%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $433.67
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.25K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $247.94
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $P1C4"
                aria-label="Deploy an agent on $P1C4"
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
                href="/application/swap?mint=85E6sHyNb7djy5xs5nf6CiEUV1xCAxSPBJY5V4X4pump&chain=solana"
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
              href="/application/tokens/85E6sHyNb7djy5xs5nf6CiEUV1xCAxSPBJY5V4X4pump?chain=solana"
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
                P1
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    P1C4
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
                  P1C4
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.00
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -84.80%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.00
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -84.46%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -84.80%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $428.47
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.25K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $253.74
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $P1C4"
                aria-label="Deploy an agent on $P1C4"
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
                href="/application/swap?mint=85E6sHyNb7djy5xs5nf6CiEUV1xCAxSPBJY5V4X4pump&chain=solana"
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
              href="/application/tokens/85E6sHyNb7djy5xs5nf6CiEUV1xCAxSPBJY5V4X4pump?chain=solana"
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
                P1
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    P1C4
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
                  P1C4
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.00
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -84.80%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.00
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -86.42%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -84.80%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $430.95
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.25K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $256.59
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $P1C4"
                aria-label="Deploy an agent on $P1C4"
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
                href="/application/swap?mint=85E6sHyNb7djy5xs5nf6CiEUV1xCAxSPBJY5V4X4pump&chain=solana"
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
              href="/application/tokens/85E6sHyNb7djy5xs5nf6CiEUV1xCAxSPBJY5V4X4pump?chain=solana"
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
                P1
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    P1C4
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
                  P1C4
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.00
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -84.80%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.00
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -85.52%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -84.80%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $426.85
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.25K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $249.44
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $P1C4"
                aria-label="Deploy an agent on $P1C4"
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
                href="/application/swap?mint=85E6sHyNb7djy5xs5nf6CiEUV1xCAxSPBJY5V4X4pump&chain=solana"
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
              href="/application/tokens/85E6sHyNb7djy5xs5nf6CiEUV1xCAxSPBJY5V4X4pump?chain=solana"
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
                P1
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    P1C4
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
                  P1C4
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.00
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -84.80%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.00
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -87.52%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -84.80%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $429.24
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.25K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $253.04
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $P1C4"
                aria-label="Deploy an agent on $P1C4"
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
                href="/application/swap?mint=85E6sHyNb7djy5xs5nf6CiEUV1xCAxSPBJY5V4X4pump&chain=solana"
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
              href="/application/tokens/FMK1hxUfeAhXprhtpgCXG7WY5kbhG6rV9pu2ijwMpump?chain=solana"
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
                Sw
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    SwordPepe
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
                  SwordPepe
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
                style={{ color: "var(--v2-neg)" }}
              >
                -48.60%
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
              style={{ color: "var(--v2-neg)" }}
            >
              -47.82%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -48.60%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.38K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.96K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.27K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $SwordPepe"
                aria-label="Deploy an agent on $SwordPepe"
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
                href="/application/swap?mint=FMK1hxUfeAhXprhtpgCXG7WY5kbhG6rV9pu2ijwMpump&chain=solana"
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
              href="/application/tokens/FMK1hxUfeAhXprhtpgCXG7WY5kbhG6rV9pu2ijwMpump?chain=solana"
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
                Sw
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    SwordPepe
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
                  SwordPepe
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
                style={{ color: "var(--v2-neg)" }}
              >
                -48.60%
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
              style={{ color: "var(--v2-neg)" }}
            >
              -46.46%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -48.60%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.39K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.96K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.35K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $SwordPepe"
                aria-label="Deploy an agent on $SwordPepe"
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
                href="/application/swap?mint=FMK1hxUfeAhXprhtpgCXG7WY5kbhG6rV9pu2ijwMpump&chain=solana"
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
              href="/application/tokens/FMK1hxUfeAhXprhtpgCXG7WY5kbhG6rV9pu2ijwMpump?chain=solana"
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
                Sw
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    SwordPepe
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
                  SwordPepe
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
                style={{ color: "var(--v2-neg)" }}
              >
                -48.60%
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
              style={{ color: "var(--v2-neg)" }}
            >
              -46.82%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -48.60%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.38K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.96K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.29K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $SwordPepe"
                aria-label="Deploy an agent on $SwordPepe"
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
                href="/application/swap?mint=FMK1hxUfeAhXprhtpgCXG7WY5kbhG6rV9pu2ijwMpump&chain=solana"
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
              href="/application/tokens/FMK1hxUfeAhXprhtpgCXG7WY5kbhG6rV9pu2ijwMpump?chain=solana"
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
                Sw
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    SwordPepe
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
                  SwordPepe
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
                style={{ color: "var(--v2-neg)" }}
              >
                -48.60%
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
              style={{ color: "var(--v2-neg)" }}
            >
              -46.24%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -48.60%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.39K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.96K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.39K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $SwordPepe"
                aria-label="Deploy an agent on $SwordPepe"
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
                href="/application/swap?mint=FMK1hxUfeAhXprhtpgCXG7WY5kbhG6rV9pu2ijwMpump&chain=solana"
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
              href="/application/tokens/FMK1hxUfeAhXprhtpgCXG7WY5kbhG6rV9pu2ijwMpump?chain=solana"
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
                Sw
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    SwordPepe
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
                  SwordPepe
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
                style={{ color: "var(--v2-neg)" }}
              >
                -48.60%
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
              style={{ color: "var(--v2-neg)" }}
            >
              -50.28%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -48.60%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.39K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.96K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.36K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $SwordPepe"
                aria-label="Deploy an agent on $SwordPepe"
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
                href="/application/swap?mint=FMK1hxUfeAhXprhtpgCXG7WY5kbhG6rV9pu2ijwMpump&chain=solana"
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
              40
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/FMK1hxUfeAhXprhtpgCXG7WY5kbhG6rV9pu2ijwMpump?chain=solana"
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
                Sw
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    SwordPepe
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
                  SwordPepe
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
                style={{ color: "var(--v2-neg)" }}
              >
                -48.60%
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
              style={{ color: "var(--v2-neg)" }}
            >
              -46.82%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -48.60%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.37K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.96K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.37K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $SwordPepe"
                aria-label="Deploy an agent on $SwordPepe"
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
                href="/application/swap?mint=FMK1hxUfeAhXprhtpgCXG7WY5kbhG6rV9pu2ijwMpump&chain=solana"
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
              41
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/3E889xvRN5vGLBxjowAeV3xmHcXrjry2WwYNcaYvpump?chain=solana"
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
                in
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    income
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
                  income
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅2
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -18.19%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅2
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -17.60%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -18.19%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.19K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $18.59K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $4.95K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $income"
                aria-label="Deploy an agent on $income"
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
                href="/application/swap?mint=3E889xvRN5vGLBxjowAeV3xmHcXrjry2WwYNcaYvpump&chain=solana"
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
              42
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/3E889xvRN5vGLBxjowAeV3xmHcXrjry2WwYNcaYvpump?chain=solana"
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
                in
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    income
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
                  income
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅2
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -18.19%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅2
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -17.87%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -18.19%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.18K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $18.59K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $4.69K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $income"
                aria-label="Deploy an agent on $income"
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
                href="/application/swap?mint=3E889xvRN5vGLBxjowAeV3xmHcXrjry2WwYNcaYvpump&chain=solana"
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
              43
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/3E889xvRN5vGLBxjowAeV3xmHcXrjry2WwYNcaYvpump?chain=solana"
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
                in
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    income
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
                  income
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅2
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -18.19%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅2
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -18.28%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -18.19%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.17K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $18.59K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $4.70K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $income"
                aria-label="Deploy an agent on $income"
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
                href="/application/swap?mint=3E889xvRN5vGLBxjowAeV3xmHcXrjry2WwYNcaYvpump&chain=solana"
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
              44
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/3E889xvRN5vGLBxjowAeV3xmHcXrjry2WwYNcaYvpump?chain=solana"
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
                in
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    income
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
                  income
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅2
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -18.19%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅2
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -17.90%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -18.19%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.20K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $18.59K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $4.78K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $income"
                aria-label="Deploy an agent on $income"
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
                href="/application/swap?mint=3E889xvRN5vGLBxjowAeV3xmHcXrjry2WwYNcaYvpump&chain=solana"
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
              45
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/3E889xvRN5vGLBxjowAeV3xmHcXrjry2WwYNcaYvpump?chain=solana"
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
                in
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    income
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
                  income
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅2
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -18.19%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅2
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -18.87%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -18.19%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.18K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $18.59K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $4.69K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $income"
                aria-label="Deploy an agent on $income"
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
                href="/application/swap?mint=3E889xvRN5vGLBxjowAeV3xmHcXrjry2WwYNcaYvpump&chain=solana"
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
              46
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/3E889xvRN5vGLBxjowAeV3xmHcXrjry2WwYNcaYvpump?chain=solana"
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
                in
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    income
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
                  income
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅2
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -18.19%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅2
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -17.93%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -18.19%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.19K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $18.59K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $4.95K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $income"
                aria-label="Deploy an agent on $income"
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
                href="/application/swap?mint=3E889xvRN5vGLBxjowAeV3xmHcXrjry2WwYNcaYvpump&chain=solana"
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
              47
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/9n34ueBvnxGSeeFyTVqG18inx3qjom2KRp1rYjgopump?chain=solana"
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
                DC
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    DCAR
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
                  DCAR
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +0.38%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.39%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.38%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.66K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.97K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.27K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $DCAR"
                aria-label="Deploy an agent on $DCAR"
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
                href="/application/swap?mint=9n34ueBvnxGSeeFyTVqG18inx3qjom2KRp1rYjgopump&chain=solana"
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
              48
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/9n34ueBvnxGSeeFyTVqG18inx3qjom2KRp1rYjgopump?chain=solana"
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
                DC
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    DCAR
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
                  DCAR
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +0.38%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.36%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.38%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.66K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.97K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.37K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $DCAR"
                aria-label="Deploy an agent on $DCAR"
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
                href="/application/swap?mint=9n34ueBvnxGSeeFyTVqG18inx3qjom2KRp1rYjgopump&chain=solana"
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
              49
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/9n34ueBvnxGSeeFyTVqG18inx3qjom2KRp1rYjgopump?chain=solana"
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
                DC
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    DCAR
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
                  DCAR
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +0.38%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.37%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.38%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.66K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.97K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.35K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $DCAR"
                aria-label="Deploy an agent on $DCAR"
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
                href="/application/swap?mint=9n34ueBvnxGSeeFyTVqG18inx3qjom2KRp1rYjgopump&chain=solana"
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
              50
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/9n34ueBvnxGSeeFyTVqG18inx3qjom2KRp1rYjgopump?chain=solana"
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
                DC
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    DCAR
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
                  DCAR
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +0.38%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.38%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.38%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.65K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.97K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.26K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $DCAR"
                aria-label="Deploy an agent on $DCAR"
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
                href="/application/swap?mint=9n34ueBvnxGSeeFyTVqG18inx3qjom2KRp1rYjgopump&chain=solana"
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
              51
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/9n34ueBvnxGSeeFyTVqG18inx3qjom2KRp1rYjgopump?chain=solana"
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
                DC
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    DCAR
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
                  DCAR
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +0.38%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.37%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.38%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.66K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.97K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.38K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $DCAR"
                aria-label="Deploy an agent on $DCAR"
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
                href="/application/swap?mint=9n34ueBvnxGSeeFyTVqG18inx3qjom2KRp1rYjgopump&chain=solana"
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
              52
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/9n34ueBvnxGSeeFyTVqG18inx3qjom2KRp1rYjgopump?chain=solana"
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
                DC
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    DCAR
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
                  DCAR
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +0.38%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.39%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.38%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.66K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.97K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.33K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $DCAR"
                aria-label="Deploy an agent on $DCAR"
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
                href="/application/swap?mint=9n34ueBvnxGSeeFyTVqG18inx3qjom2KRp1rYjgopump&chain=solana"
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
              53
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/3DP6c6tGf1YcwHQ2FUZBFCS5RLJ89jc5yP3BT13qpump?chain=solana"
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
                sl
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    sludge
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
                  sludge
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -25.94%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -24.91%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -25.94%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.66K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $4.03K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $9.55K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $sludge"
                aria-label="Deploy an agent on $sludge"
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
                href="/application/swap?mint=3DP6c6tGf1YcwHQ2FUZBFCS5RLJ89jc5yP3BT13qpump&chain=solana"
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
              54
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/GgSbYN5vAH68rPNyvHU9nYVB8ko64u1VwQCPjCw5xu24?chain=solana"
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
                Ca
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    Capybara
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
                  Capybara
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₄77
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +291.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₄77
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +282.88%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +291.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $77.17K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $39.76K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $240.54K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $Capybara"
                aria-label="Deploy an agent on $Capybara"
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
                href="/application/swap?mint=GgSbYN5vAH68rPNyvHU9nYVB8ko64u1VwQCPjCw5xu24&chain=solana"
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
              55
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/3DP6c6tGf1YcwHQ2FUZBFCS5RLJ89jc5yP3BT13qpump?chain=solana"
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
                sl
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    sludge
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
                  sludge
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -25.94%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -26.73%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -25.94%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.64K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $4.03K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $9.63K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $sludge"
                aria-label="Deploy an agent on $sludge"
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
                href="/application/swap?mint=3DP6c6tGf1YcwHQ2FUZBFCS5RLJ89jc5yP3BT13qpump&chain=solana"
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
              56
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/GgSbYN5vAH68rPNyvHU9nYVB8ko64u1VwQCPjCw5xu24?chain=solana"
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
                Ca
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    Capybara
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
                  Capybara
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₄78
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +291.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₄78
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +282.83%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +291.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $77.24K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $39.76K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $245.17K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $Capybara"
                aria-label="Deploy an agent on $Capybara"
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
                href="/application/swap?mint=GgSbYN5vAH68rPNyvHU9nYVB8ko64u1VwQCPjCw5xu24&chain=solana"
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
              57
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/3DP6c6tGf1YcwHQ2FUZBFCS5RLJ89jc5yP3BT13qpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/3DP6c6tGf1YcwHQ2FUZBFCS5RLJ89jc5yP3BT13qpump.png"
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
                    sludge
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
                  sludge
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -25.94%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -24.81%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -25.94%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.65K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $4.03K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $9.24K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $sludge"
                aria-label="Deploy an agent on $sludge"
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
                href="/application/swap?mint=3DP6c6tGf1YcwHQ2FUZBFCS5RLJ89jc5yP3BT13qpump&chain=solana"
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
              58
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/GgSbYN5vAH68rPNyvHU9nYVB8ko64u1VwQCPjCw5xu24?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/GgSbYN5vAH68rPNyvHU9nYVB8ko64u1VwQCPjCw5xu24.png"
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
                    Capybara
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
                  Capybara
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₄77
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +291.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₄77
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +290.04%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +291.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $77.34K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $39.76K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $238.03K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $Capybara"
                aria-label="Deploy an agent on $Capybara"
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
                href="/application/swap?mint=GgSbYN5vAH68rPNyvHU9nYVB8ko64u1VwQCPjCw5xu24&chain=solana"
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
              59
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/3DP6c6tGf1YcwHQ2FUZBFCS5RLJ89jc5yP3BT13qpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/3DP6c6tGf1YcwHQ2FUZBFCS5RLJ89jc5yP3BT13qpump.png"
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
                    sludge
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
                  sludge
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -25.94%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -26.80%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -25.94%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.66K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $4.03K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $9.64K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $sludge"
                aria-label="Deploy an agent on $sludge"
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
                href="/application/swap?mint=3DP6c6tGf1YcwHQ2FUZBFCS5RLJ89jc5yP3BT13qpump&chain=solana"
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
              60
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/GgSbYN5vAH68rPNyvHU9nYVB8ko64u1VwQCPjCw5xu24?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/GgSbYN5vAH68rPNyvHU9nYVB8ko64u1VwQCPjCw5xu24.png"
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
                    Capybara
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
                  Capybara
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₄77
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +291.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₄77
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +303.24%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +291.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $77.97K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $39.76K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $245.32K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $Capybara"
                aria-label="Deploy an agent on $Capybara"
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
                href="/application/swap?mint=GgSbYN5vAH68rPNyvHU9nYVB8ko64u1VwQCPjCw5xu24&chain=solana"
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
              61
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/3DP6c6tGf1YcwHQ2FUZBFCS5RLJ89jc5yP3BT13qpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/3DP6c6tGf1YcwHQ2FUZBFCS5RLJ89jc5yP3BT13qpump.png"
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
                    sludge
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
                  sludge
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -25.94%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -25.22%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -25.94%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.66K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $4.03K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $9.74K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $sludge"
                aria-label="Deploy an agent on $sludge"
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
                href="/application/swap?mint=3DP6c6tGf1YcwHQ2FUZBFCS5RLJ89jc5yP3BT13qpump&chain=solana"
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
              62
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/GgSbYN5vAH68rPNyvHU9nYVB8ko64u1VwQCPjCw5xu24?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/GgSbYN5vAH68rPNyvHU9nYVB8ko64u1VwQCPjCw5xu24.png"
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
                    Capybara
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
                  Capybara
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₄78
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +291.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₄78
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +291.01%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +291.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $77.46K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $39.76K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $250.83K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $Capybara"
                aria-label="Deploy an agent on $Capybara"
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
                href="/application/swap?mint=GgSbYN5vAH68rPNyvHU9nYVB8ko64u1VwQCPjCw5xu24&chain=solana"
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
              63
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/3DP6c6tGf1YcwHQ2FUZBFCS5RLJ89jc5yP3BT13qpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/3DP6c6tGf1YcwHQ2FUZBFCS5RLJ89jc5yP3BT13qpump.png"
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
                    sludge
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
                  sludge
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -25.94%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -26.49%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -25.94%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.68K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $4.03K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $9.62K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $sludge"
                aria-label="Deploy an agent on $sludge"
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
                href="/application/swap?mint=3DP6c6tGf1YcwHQ2FUZBFCS5RLJ89jc5yP3BT13qpump&chain=solana"
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
              64
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/GgSbYN5vAH68rPNyvHU9nYVB8ko64u1VwQCPjCw5xu24?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/GgSbYN5vAH68rPNyvHU9nYVB8ko64u1VwQCPjCw5xu24.png"
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
                    Capybara
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
                  Capybara
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₄77
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +291.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₄77
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +302.13%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +291.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $77.55K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $39.76K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $237.66K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $Capybara"
                aria-label="Deploy an agent on $Capybara"
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
                href="/application/swap?mint=GgSbYN5vAH68rPNyvHU9nYVB8ko64u1VwQCPjCw5xu24&chain=solana"
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
              65
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/Hfjvj18YU45DjurqLXxTiN8yajDv2pQrU2idoMtvpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/Hfjvj18YU45DjurqLXxTiN8yajDv2pQrU2idoMtvpump.png"
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
                    orangie
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
                  orangie
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -0.04%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.04%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.04%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.65K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.11K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $6.25
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $orangie"
                aria-label="Deploy an agent on $orangie"
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
                href="/application/swap?mint=Hfjvj18YU45DjurqLXxTiN8yajDv2pQrU2idoMtvpump&chain=solana"
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
              66
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/Hfjvj18YU45DjurqLXxTiN8yajDv2pQrU2idoMtvpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/Hfjvj18YU45DjurqLXxTiN8yajDv2pQrU2idoMtvpump.png"
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
                    orangie
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
                  orangie
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -0.04%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.04%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.04%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.63K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.11K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $6.11
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $orangie"
                aria-label="Deploy an agent on $orangie"
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
                href="/application/swap?mint=Hfjvj18YU45DjurqLXxTiN8yajDv2pQrU2idoMtvpump&chain=solana"
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
              67
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/Hfjvj18YU45DjurqLXxTiN8yajDv2pQrU2idoMtvpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/Hfjvj18YU45DjurqLXxTiN8yajDv2pQrU2idoMtvpump.png"
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
                    orangie
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
                  orangie
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -0.04%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.04%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.04%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.65K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.11K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $6.24
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $orangie"
                aria-label="Deploy an agent on $orangie"
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
                href="/application/swap?mint=Hfjvj18YU45DjurqLXxTiN8yajDv2pQrU2idoMtvpump&chain=solana"
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
              68
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/Hfjvj18YU45DjurqLXxTiN8yajDv2pQrU2idoMtvpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/Hfjvj18YU45DjurqLXxTiN8yajDv2pQrU2idoMtvpump.png"
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
                    orangie
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
                  orangie
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -0.04%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.04%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.04%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.63K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.11K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $6.05
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $orangie"
                aria-label="Deploy an agent on $orangie"
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
                href="/application/swap?mint=Hfjvj18YU45DjurqLXxTiN8yajDv2pQrU2idoMtvpump&chain=solana"
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
              69
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/Hfjvj18YU45DjurqLXxTiN8yajDv2pQrU2idoMtvpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/Hfjvj18YU45DjurqLXxTiN8yajDv2pQrU2idoMtvpump.png"
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
                    orangie
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
                  orangie
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -0.04%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.04%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.04%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.67K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.11K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $6.06
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $orangie"
                aria-label="Deploy an agent on $orangie"
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
                href="/application/swap?mint=Hfjvj18YU45DjurqLXxTiN8yajDv2pQrU2idoMtvpump&chain=solana"
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
              70
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/Hfjvj18YU45DjurqLXxTiN8yajDv2pQrU2idoMtvpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/Hfjvj18YU45DjurqLXxTiN8yajDv2pQrU2idoMtvpump.png"
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
                    orangie
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
                  orangie
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -0.04%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.04%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.04%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.66K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.11K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $6.02
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $orangie"
                aria-label="Deploy an agent on $orangie"
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
                href="/application/swap?mint=Hfjvj18YU45DjurqLXxTiN8yajDv2pQrU2idoMtvpump&chain=solana"
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
              71
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/46N9yr6Nv2ZhVyBuLywTqQV9A4tztAWxieXhxtbNswrm?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/46N9yr6Nv2ZhVyBuLywTqQV9A4tztAWxieXhxtbNswrm.png"
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
                    GGPT
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
                  GGPT
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₄25
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +449.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₄25
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +450.86%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +449.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $24.90K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $7.02K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $67.95K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $GGPT"
                aria-label="Deploy an agent on $GGPT"
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
                href="/application/swap?mint=46N9yr6Nv2ZhVyBuLywTqQV9A4tztAWxieXhxtbNswrm&chain=solana"
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
              72
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/46N9yr6Nv2ZhVyBuLywTqQV9A4tztAWxieXhxtbNswrm?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/46N9yr6Nv2ZhVyBuLywTqQV9A4tztAWxieXhxtbNswrm.png"
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
                    GGPT
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
                  GGPT
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₄25
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +449.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₄25
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +443.13%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +449.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $24.93K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $7.02K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $66.06K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $GGPT"
                aria-label="Deploy an agent on $GGPT"
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
                href="/application/swap?mint=46N9yr6Nv2ZhVyBuLywTqQV9A4tztAWxieXhxtbNswrm&chain=solana"
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
              73
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/46N9yr6Nv2ZhVyBuLywTqQV9A4tztAWxieXhxtbNswrm?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/46N9yr6Nv2ZhVyBuLywTqQV9A4tztAWxieXhxtbNswrm.png"
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
                    GGPT
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
                  GGPT
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₄25
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +449.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₄25
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +449.85%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +449.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $25.01K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $7.02K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $67.05K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $GGPT"
                aria-label="Deploy an agent on $GGPT"
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
                href="/application/swap?mint=46N9yr6Nv2ZhVyBuLywTqQV9A4tztAWxieXhxtbNswrm&chain=solana"
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
              74
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/46N9yr6Nv2ZhVyBuLywTqQV9A4tztAWxieXhxtbNswrm?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/46N9yr6Nv2ZhVyBuLywTqQV9A4tztAWxieXhxtbNswrm.png"
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
                    GGPT
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
                  GGPT
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₄25
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +449.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₄25
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +429.31%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +449.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $24.95K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $7.02K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $66.19K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $GGPT"
                aria-label="Deploy an agent on $GGPT"
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
                href="/application/swap?mint=46N9yr6Nv2ZhVyBuLywTqQV9A4tztAWxieXhxtbNswrm&chain=solana"
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
              75
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/46N9yr6Nv2ZhVyBuLywTqQV9A4tztAWxieXhxtbNswrm?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/46N9yr6Nv2ZhVyBuLywTqQV9A4tztAWxieXhxtbNswrm.png"
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
                    GGPT
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
                  GGPT
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₄25
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +449.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₄25
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +467.98%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +449.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $24.90K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $7.02K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $66.71K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $GGPT"
                aria-label="Deploy an agent on $GGPT"
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
                href="/application/swap?mint=46N9yr6Nv2ZhVyBuLywTqQV9A4tztAWxieXhxtbNswrm&chain=solana"
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
              76
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/46N9yr6Nv2ZhVyBuLywTqQV9A4tztAWxieXhxtbNswrm?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/46N9yr6Nv2ZhVyBuLywTqQV9A4tztAWxieXhxtbNswrm.png"
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
                    GGPT
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
                  GGPT
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₄25
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +449.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₄25
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +437.91%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +449.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $24.92K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $7.02K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $66.06K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $GGPT"
                aria-label="Deploy an agent on $GGPT"
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
                href="/application/swap?mint=46N9yr6Nv2ZhVyBuLywTqQV9A4tztAWxieXhxtbNswrm&chain=solana"
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
              77
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/DDpPxxHWGSSiMFkmkFV4Fd6yUy3ujBWy6a9LodqYpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/DDpPxxHWGSSiMFkmkFV4Fd6yUy3ujBWy6a9LodqYpump.png"
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
                    test
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
                  test
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -0.01%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.01%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.01%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.64K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.11K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $0.7407
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $test"
                aria-label="Deploy an agent on $test"
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
                href="/application/swap?mint=DDpPxxHWGSSiMFkmkFV4Fd6yUy3ujBWy6a9LodqYpump&chain=solana"
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
              78
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/DDpPxxHWGSSiMFkmkFV4Fd6yUy3ujBWy6a9LodqYpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/DDpPxxHWGSSiMFkmkFV4Fd6yUy3ujBWy6a9LodqYpump.png"
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
                    test
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
                  test
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -0.01%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.01%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.01%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.64K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.11K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $0.7712
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $test"
                aria-label="Deploy an agent on $test"
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
                href="/application/swap?mint=DDpPxxHWGSSiMFkmkFV4Fd6yUy3ujBWy6a9LodqYpump&chain=solana"
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
              79
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/DDpPxxHWGSSiMFkmkFV4Fd6yUy3ujBWy6a9LodqYpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/DDpPxxHWGSSiMFkmkFV4Fd6yUy3ujBWy6a9LodqYpump.png"
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
                    test
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
                  test
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -0.01%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.01%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.01%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.65K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.11K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $0.7304
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $test"
                aria-label="Deploy an agent on $test"
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
                href="/application/swap?mint=DDpPxxHWGSSiMFkmkFV4Fd6yUy3ujBWy6a9LodqYpump&chain=solana"
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
              80
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/DDpPxxHWGSSiMFkmkFV4Fd6yUy3ujBWy6a9LodqYpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/DDpPxxHWGSSiMFkmkFV4Fd6yUy3ujBWy6a9LodqYpump.png"
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
                    test
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
                  test
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -0.01%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.01%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.01%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.66K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.11K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $0.7339
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $test"
                aria-label="Deploy an agent on $test"
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
                href="/application/swap?mint=DDpPxxHWGSSiMFkmkFV4Fd6yUy3ujBWy6a9LodqYpump&chain=solana"
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
              81
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/DDpPxxHWGSSiMFkmkFV4Fd6yUy3ujBWy6a9LodqYpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/DDpPxxHWGSSiMFkmkFV4Fd6yUy3ujBWy6a9LodqYpump.png"
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
                    test
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
                  test
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -0.01%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.01%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.01%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.65K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.11K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $0.7594
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $test"
                aria-label="Deploy an agent on $test"
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
                href="/application/swap?mint=DDpPxxHWGSSiMFkmkFV4Fd6yUy3ujBWy6a9LodqYpump&chain=solana"
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
              82
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/DDpPxxHWGSSiMFkmkFV4Fd6yUy3ujBWy6a9LodqYpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/DDpPxxHWGSSiMFkmkFV4Fd6yUy3ujBWy6a9LodqYpump.png"
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
                    test
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
                  test
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -0.01%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.01%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.01%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.66K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.11K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $0.7421
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $test"
                aria-label="Deploy an agent on $test"
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
                href="/application/swap?mint=DDpPxxHWGSSiMFkmkFV4Fd6yUy3ujBWy6a9LodqYpump&chain=solana"
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
              83
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/7CyyBHHYANh3eqrJ5rjRRmXHc1TYbkF7uFSsJbaVpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/7CyyBHHYANh3eqrJ5rjRRmXHc1TYbkF7uFSsJbaVpump.png"
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
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                0.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              0.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              0.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.08K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.46K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $0.0885
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
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
                href="/application/swap?mint=7CyyBHHYANh3eqrJ5rjRRmXHc1TYbkF7uFSsJbaVpump&chain=solana"
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
              84
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/7Cv31hSrUdFjnS8HWaDHS33Zdd1DiUVuAB7CMf21pump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/7Cv31hSrUdFjnS8HWaDHS33Zdd1DiUVuAB7CMf21pump.png"
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
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -0.73%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.70%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.73%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.09K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.45K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $24.87
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
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
                href="/application/swap?mint=7Cv31hSrUdFjnS8HWaDHS33Zdd1DiUVuAB7CMf21pump&chain=solana"
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
              85
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/7CwFJ8uHFHsSfZduEYAfRWjbrV3jUanHvbjzhDXwpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/7CwFJ8uHFHsSfZduEYAfRWjbrV3jUanHvbjzhDXwpump.png"
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
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                0.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              0.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              0.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.07K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.46K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $0.0889
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
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
                href="/application/swap?mint=7CwFJ8uHFHsSfZduEYAfRWjbrV3jUanHvbjzhDXwpump&chain=solana"
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
              86
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/7CyyBHHYANh3eqrJ5rjRRmXHc1TYbkF7uFSsJbaVpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/7CyyBHHYANh3eqrJ5rjRRmXHc1TYbkF7uFSsJbaVpump.png"
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
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                0.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              0.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              0.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.09K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.46K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $0.0893
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
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
                href="/application/swap?mint=7CyyBHHYANh3eqrJ5rjRRmXHc1TYbkF7uFSsJbaVpump&chain=solana"
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
              87
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/7Cv31hSrUdFjnS8HWaDHS33Zdd1DiUVuAB7CMf21pump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/7Cv31hSrUdFjnS8HWaDHS33Zdd1DiUVuAB7CMf21pump.png"
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
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -0.73%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.74%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.73%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.07K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.45K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $24.66
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
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
                href="/application/swap?mint=7Cv31hSrUdFjnS8HWaDHS33Zdd1DiUVuAB7CMf21pump&chain=solana"
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
              88
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/7CwFJ8uHFHsSfZduEYAfRWjbrV3jUanHvbjzhDXwpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/7CwFJ8uHFHsSfZduEYAfRWjbrV3jUanHvbjzhDXwpump.png"
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
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                0.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              0.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              0.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.07K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.46K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $0.0879
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
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
                href="/application/swap?mint=7CwFJ8uHFHsSfZduEYAfRWjbrV3jUanHvbjzhDXwpump&chain=solana"
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
              89
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/7CyyBHHYANh3eqrJ5rjRRmXHc1TYbkF7uFSsJbaVpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/7CyyBHHYANh3eqrJ5rjRRmXHc1TYbkF7uFSsJbaVpump.png"
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
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                0.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              0.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              0.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.09K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.46K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $0.0894
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
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
                href="/application/swap?mint=7CyyBHHYANh3eqrJ5rjRRmXHc1TYbkF7uFSsJbaVpump&chain=solana"
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
              90
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/7Cv31hSrUdFjnS8HWaDHS33Zdd1DiUVuAB7CMf21pump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/7Cv31hSrUdFjnS8HWaDHS33Zdd1DiUVuAB7CMf21pump.png"
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
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -0.73%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.71%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.73%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.10K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.45K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $24.85
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
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
                href="/application/swap?mint=7Cv31hSrUdFjnS8HWaDHS33Zdd1DiUVuAB7CMf21pump&chain=solana"
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
              91
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/7CwFJ8uHFHsSfZduEYAfRWjbrV3jUanHvbjzhDXwpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/7CwFJ8uHFHsSfZduEYAfRWjbrV3jUanHvbjzhDXwpump.png"
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
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                0.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              0.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              0.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.07K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.46K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $0.0914
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
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
                href="/application/swap?mint=7CwFJ8uHFHsSfZduEYAfRWjbrV3jUanHvbjzhDXwpump&chain=solana"
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
              92
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/7CyyBHHYANh3eqrJ5rjRRmXHc1TYbkF7uFSsJbaVpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/7CyyBHHYANh3eqrJ5rjRRmXHc1TYbkF7uFSsJbaVpump.png"
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
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                0.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              0.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              0.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.09K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.46K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $0.0923
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
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
                href="/application/swap?mint=7CyyBHHYANh3eqrJ5rjRRmXHc1TYbkF7uFSsJbaVpump&chain=solana"
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
              93
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/7Cv31hSrUdFjnS8HWaDHS33Zdd1DiUVuAB7CMf21pump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/7Cv31hSrUdFjnS8HWaDHS33Zdd1DiUVuAB7CMf21pump.png"
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
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -0.73%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.74%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.73%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.06K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.45K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $24.51
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
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
                href="/application/swap?mint=7Cv31hSrUdFjnS8HWaDHS33Zdd1DiUVuAB7CMf21pump&chain=solana"
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
              94
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/7CwFJ8uHFHsSfZduEYAfRWjbrV3jUanHvbjzhDXwpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/7CwFJ8uHFHsSfZduEYAfRWjbrV3jUanHvbjzhDXwpump.png"
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
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                0.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              0.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              0.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.09K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.46K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $0.0911
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
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
                href="/application/swap?mint=7CwFJ8uHFHsSfZduEYAfRWjbrV3jUanHvbjzhDXwpump&chain=solana"
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
              95
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/7CyyBHHYANh3eqrJ5rjRRmXHc1TYbkF7uFSsJbaVpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/7CyyBHHYANh3eqrJ5rjRRmXHc1TYbkF7uFSsJbaVpump.png"
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
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                0.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              0.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              0.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.07K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.46K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $0.0887
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
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
                href="/application/swap?mint=7CyyBHHYANh3eqrJ5rjRRmXHc1TYbkF7uFSsJbaVpump&chain=solana"
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
              96
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/7Cv31hSrUdFjnS8HWaDHS33Zdd1DiUVuAB7CMf21pump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/7Cv31hSrUdFjnS8HWaDHS33Zdd1DiUVuAB7CMf21pump.png"
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
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -0.73%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.70%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.73%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.07K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.45K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $24.17
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
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
                href="/application/swap?mint=7Cv31hSrUdFjnS8HWaDHS33Zdd1DiUVuAB7CMf21pump&chain=solana"
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
              97
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/7CwFJ8uHFHsSfZduEYAfRWjbrV3jUanHvbjzhDXwpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/7CwFJ8uHFHsSfZduEYAfRWjbrV3jUanHvbjzhDXwpump.png"
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
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                0.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              0.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              0.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.07K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.46K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $0.0896
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
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
                href="/application/swap?mint=7CwFJ8uHFHsSfZduEYAfRWjbrV3jUanHvbjzhDXwpump&chain=solana"
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
              98
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/7CyyBHHYANh3eqrJ5rjRRmXHc1TYbkF7uFSsJbaVpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/7CyyBHHYANh3eqrJ5rjRRmXHc1TYbkF7uFSsJbaVpump.png"
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
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                0.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              0.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              0.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.09K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.46K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $0.0875
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
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
                href="/application/swap?mint=7CyyBHHYANh3eqrJ5rjRRmXHc1TYbkF7uFSsJbaVpump&chain=solana"
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
              99
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/7Cv31hSrUdFjnS8HWaDHS33Zdd1DiUVuAB7CMf21pump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/7Cv31hSrUdFjnS8HWaDHS33Zdd1DiUVuAB7CMf21pump.png"
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
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -0.73%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.70%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.73%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.07K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.45K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $23.93
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
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
                href="/application/swap?mint=7Cv31hSrUdFjnS8HWaDHS33Zdd1DiUVuAB7CMf21pump&chain=solana"
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
              100
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/7CwFJ8uHFHsSfZduEYAfRWjbrV3jUanHvbjzhDXwpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/7CwFJ8uHFHsSfZduEYAfRWjbrV3jUanHvbjzhDXwpump.png"
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
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                0.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              0.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              0.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.11K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.46K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $0.0920
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
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
                href="/application/swap?mint=7CwFJ8uHFHsSfZduEYAfRWjbrV3jUanHvbjzhDXwpump&chain=solana"
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
              101
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/9tJRkaFiLud7mYHziohB3CXGAKq1UdotZZNrVYVEpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/9tJRkaFiLud7mYHziohB3CXGAKq1UdotZZNrVYVEpump.png"
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
                    MOOD
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
                  MOOD
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -11.21%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -11.35%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -11.21%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.66K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.79K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $6.57K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $MOOD"
                aria-label="Deploy an agent on $MOOD"
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
                href="/application/swap?mint=9tJRkaFiLud7mYHziohB3CXGAKq1UdotZZNrVYVEpump&chain=solana"
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
              102
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/9tJRkaFiLud7mYHziohB3CXGAKq1UdotZZNrVYVEpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/9tJRkaFiLud7mYHziohB3CXGAKq1UdotZZNrVYVEpump.png"
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
                    MOOD
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
                  MOOD
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -11.21%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -10.99%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -11.21%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.65K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.79K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $6.26K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $MOOD"
                aria-label="Deploy an agent on $MOOD"
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
                href="/application/swap?mint=9tJRkaFiLud7mYHziohB3CXGAKq1UdotZZNrVYVEpump&chain=solana"
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
              103
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/9tJRkaFiLud7mYHziohB3CXGAKq1UdotZZNrVYVEpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/9tJRkaFiLud7mYHziohB3CXGAKq1UdotZZNrVYVEpump.png"
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
                    MOOD
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
                  MOOD
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -11.21%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -10.90%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -11.21%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.64K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.79K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $6.52K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $MOOD"
                aria-label="Deploy an agent on $MOOD"
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
                href="/application/swap?mint=9tJRkaFiLud7mYHziohB3CXGAKq1UdotZZNrVYVEpump&chain=solana"
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
              104
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/9tJRkaFiLud7mYHziohB3CXGAKq1UdotZZNrVYVEpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/9tJRkaFiLud7mYHziohB3CXGAKq1UdotZZNrVYVEpump.png"
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
                    MOOD
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
                  MOOD
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -11.21%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -11.38%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -11.21%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.63K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.79K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $6.20K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $MOOD"
                aria-label="Deploy an agent on $MOOD"
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
                href="/application/swap?mint=9tJRkaFiLud7mYHziohB3CXGAKq1UdotZZNrVYVEpump&chain=solana"
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
              105
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/9tJRkaFiLud7mYHziohB3CXGAKq1UdotZZNrVYVEpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/9tJRkaFiLud7mYHziohB3CXGAKq1UdotZZNrVYVEpump.png"
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
                    MOOD
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
                  MOOD
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -11.21%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -11.58%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -11.21%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.64K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.79K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $6.31K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $MOOD"
                aria-label="Deploy an agent on $MOOD"
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
                href="/application/swap?mint=9tJRkaFiLud7mYHziohB3CXGAKq1UdotZZNrVYVEpump&chain=solana"
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
              106
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/9tJRkaFiLud7mYHziohB3CXGAKq1UdotZZNrVYVEpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/9tJRkaFiLud7mYHziohB3CXGAKq1UdotZZNrVYVEpump.png"
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
                    MOOD
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
                  MOOD
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅3
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -11.21%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅3
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -11.32%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -11.21%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.63K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.79K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $6.35K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $MOOD"
                aria-label="Deploy an agent on $MOOD"
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
                href="/application/swap?mint=9tJRkaFiLud7mYHziohB3CXGAKq1UdotZZNrVYVEpump&chain=solana"
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
              107
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/6QMiyQJPta1R9c7LpyRrgkmgLDQvuduCSXjANgWCpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/6QMiyQJPta1R9c7LpyRrgkmgLDQvuduCSXjANgWCpump.png"
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
                    $ANIMX
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
                  $ANIMX
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅5
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +68.44%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅5
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +67.37%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +68.44%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $4.46K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $4.35K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $668.53
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $$ANIMX"
                aria-label="Deploy an agent on $$ANIMX"
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
                href="/application/swap?mint=6QMiyQJPta1R9c7LpyRrgkmgLDQvuduCSXjANgWCpump&chain=solana"
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
              108
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/6QMiyQJPta1R9c7LpyRrgkmgLDQvuduCSXjANgWCpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/6QMiyQJPta1R9c7LpyRrgkmgLDQvuduCSXjANgWCpump.png"
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
                    $ANIMX
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
                  $ANIMX
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅4
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +68.44%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅4
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +66.42%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +68.44%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $4.48K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $4.35K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $695.94
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $$ANIMX"
                aria-label="Deploy an agent on $$ANIMX"
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
                href="/application/swap?mint=6QMiyQJPta1R9c7LpyRrgkmgLDQvuduCSXjANgWCpump&chain=solana"
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
              109
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/6QMiyQJPta1R9c7LpyRrgkmgLDQvuduCSXjANgWCpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/6QMiyQJPta1R9c7LpyRrgkmgLDQvuduCSXjANgWCpump.png"
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
                    $ANIMX
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
                  $ANIMX
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅4
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +68.44%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅4
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +70.50%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +68.44%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $4.49K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $4.35K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $687.04
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $$ANIMX"
                aria-label="Deploy an agent on $$ANIMX"
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
                href="/application/swap?mint=6QMiyQJPta1R9c7LpyRrgkmgLDQvuduCSXjANgWCpump&chain=solana"
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
              110
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/6QMiyQJPta1R9c7LpyRrgkmgLDQvuduCSXjANgWCpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/6QMiyQJPta1R9c7LpyRrgkmgLDQvuduCSXjANgWCpump.png"
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
                    $ANIMX
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
                  $ANIMX
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅4
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +68.44%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅4
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +67.60%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +68.44%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $4.53K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $4.35K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $697.46
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $$ANIMX"
                aria-label="Deploy an agent on $$ANIMX"
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
                href="/application/swap?mint=6QMiyQJPta1R9c7LpyRrgkmgLDQvuduCSXjANgWCpump&chain=solana"
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
              111
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/6QMiyQJPta1R9c7LpyRrgkmgLDQvuduCSXjANgWCpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/6QMiyQJPta1R9c7LpyRrgkmgLDQvuduCSXjANgWCpump.png"
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
                    $ANIMX
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
                  $ANIMX
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅4
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +68.44%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅4
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +66.43%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +68.44%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $4.51K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $4.35K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $697.58
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $$ANIMX"
                aria-label="Deploy an agent on $$ANIMX"
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
                href="/application/swap?mint=6QMiyQJPta1R9c7LpyRrgkmgLDQvuduCSXjANgWCpump&chain=solana"
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
              112
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/6QMiyQJPta1R9c7LpyRrgkmgLDQvuduCSXjANgWCpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/6QMiyQJPta1R9c7LpyRrgkmgLDQvuduCSXjANgWCpump.png"
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
                    $ANIMX
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
                  $ANIMX
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅4
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +68.44%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅4
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +71.37%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +68.44%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $4.53K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $4.35K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $699.34
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $$ANIMX"
                aria-label="Deploy an agent on $$ANIMX"
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
                href="/application/swap?mint=6QMiyQJPta1R9c7LpyRrgkmgLDQvuduCSXjANgWCpump&chain=solana"
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
              113
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/GsaLffxtA97gmLBFwPnmRVzTcsmECr6Knt9Wi3szpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/GsaLffxtA97gmLBFwPnmRVzTcsmECr6Knt9Wi3szpump.png"
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
                    SwordPepe
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
                  SwordPepe
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅8
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +181.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅8
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +175.39%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +181.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $7.49K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $5.51K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $241.25
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $SwordPepe"
                aria-label="Deploy an agent on $SwordPepe"
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
                href="/application/swap?mint=GsaLffxtA97gmLBFwPnmRVzTcsmECr6Knt9Wi3szpump&chain=solana"
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
              114
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/GsaLffxtA97gmLBFwPnmRVzTcsmECr6Knt9Wi3szpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/GsaLffxtA97gmLBFwPnmRVzTcsmECr6Knt9Wi3szpump.png"
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
                    SwordPepe
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
                  SwordPepe
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅8
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +181.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅8
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +185.98%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +181.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $7.62K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $5.51K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $231.64
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $SwordPepe"
                aria-label="Deploy an agent on $SwordPepe"
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
                href="/application/swap?mint=GsaLffxtA97gmLBFwPnmRVzTcsmECr6Knt9Wi3szpump&chain=solana"
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
              115
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/GsaLffxtA97gmLBFwPnmRVzTcsmECr6Knt9Wi3szpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/GsaLffxtA97gmLBFwPnmRVzTcsmECr6Knt9Wi3szpump.png"
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
                    SwordPepe
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
                  SwordPepe
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅8
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +181.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅8
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +173.15%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +181.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $7.56K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $5.51K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $244.17
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $SwordPepe"
                aria-label="Deploy an agent on $SwordPepe"
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
                href="/application/swap?mint=GsaLffxtA97gmLBFwPnmRVzTcsmECr6Knt9Wi3szpump&chain=solana"
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
              116
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/GsaLffxtA97gmLBFwPnmRVzTcsmECr6Knt9Wi3szpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/GsaLffxtA97gmLBFwPnmRVzTcsmECr6Knt9Wi3szpump.png"
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
                    SwordPepe
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
                  SwordPepe
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅8
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +181.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅8
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +181.64%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +181.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $7.63K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $5.51K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $243.81
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $SwordPepe"
                aria-label="Deploy an agent on $SwordPepe"
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
                href="/application/swap?mint=GsaLffxtA97gmLBFwPnmRVzTcsmECr6Knt9Wi3szpump&chain=solana"
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
              117
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/GsaLffxtA97gmLBFwPnmRVzTcsmECr6Knt9Wi3szpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/GsaLffxtA97gmLBFwPnmRVzTcsmECr6Knt9Wi3szpump.png"
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
                    SwordPepe
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
                  SwordPepe
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅8
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +181.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅8
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +189.02%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +181.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $7.55K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $5.51K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $232.37
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $SwordPepe"
                aria-label="Deploy an agent on $SwordPepe"
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
                href="/application/swap?mint=GsaLffxtA97gmLBFwPnmRVzTcsmECr6Knt9Wi3szpump&chain=solana"
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
              118
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/GsaLffxtA97gmLBFwPnmRVzTcsmECr6Knt9Wi3szpump?chain=solana"
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
                src="https://dd.dexscreener.com/ds-data/tokens/solana/GsaLffxtA97gmLBFwPnmRVzTcsmECr6Knt9Wi3szpump.png"
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
                    SwordPepe
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
                  SwordPepe
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅8
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +181.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅8
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +188.83%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +181.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $7.52K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $5.51K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $235.11
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $SwordPepe"
                aria-label="Deploy an agent on $SwordPepe"
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
                href="/application/swap?mint=GsaLffxtA97gmLBFwPnmRVzTcsmECr6Knt9Wi3szpump&chain=solana"
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
              119
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/Er8sRVFaGBicA6jnYrEX91Gcwp1aCaYZsVHtFMA3pump?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/h8uLCJG-Fxdseapr?width=800&height=800&quality=95&format=auto"
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
                    Cryptocrat
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
                  Cryptocrat
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₄72
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +84.94%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₄72
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +86.24%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +84.94%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $68.80K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $21.53K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $415.50K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $Cryptocrat"
                aria-label="Deploy an agent on $Cryptocrat"
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
                href="/application/swap?mint=Er8sRVFaGBicA6jnYrEX91Gcwp1aCaYZsVHtFMA3pump&chain=solana"
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
              120
            </span>
            <a
              className="flex items-center gap-3 min-w-0"
              href="/application/tokens/Er8sRVFaGBicA6jnYrEX91Gcwp1aCaYZsVHtFMA3pump?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/h8uLCJG-Fxdseapr?width=800&height=800&quality=95&format=auto"
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
                    Cryptocrat
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
                  Cryptocrat
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₄72
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +84.94%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₄72
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +86.78%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +84.94%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $68.75K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $21.53K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $424.36K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $Cryptocrat"
                aria-label="Deploy an agent on $Cryptocrat"
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
                href="/application/swap?mint=Er8sRVFaGBicA6jnYrEX91Gcwp1aCaYZsVHtFMA3pump&chain=solana"
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
