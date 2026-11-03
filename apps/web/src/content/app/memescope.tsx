export function ApplicationMemescopeContent() {
  return (
    <>
      <div className="max-w-[1700px] mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <div>
            <h1
              className="text-[22px] font-semibold leading-tight"
              style={{ color: "var(--v2-t-1)" }}
            >
              Memescope
            </h1>
            <p className="text-[13px]" style={{ color: "var(--v2-t-3)" }}>
              pump.fun launches on Solana, from first trade to the DEX
            </p>
          </div>
          <span
            className="ml-auto flex items-center gap-1.5 eyebrow"
            style={{ color: "var(--v2-pos)" }}
          >
            <span className="dot dot-pos dot-pulse"></span> LIVE
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <section
            className="rounded-2xl flex flex-col lg:h-[calc(100vh-180px)]"
            style={{
              background: "var(--v2-bg-1)",
              border: "1px solid var(--v2-line-1)",
            }}
          >
            <div
              className="flex items-center gap-2 px-4 h-12 shrink-0"
              style={{ borderBottom: "1px solid var(--v2-line-1)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 256 256"
                style={{ color: "var(--v2-accent-text)" }}
              >
                <path d="M208,144a15.78,15.78,0,0,1-10.42,14.94L146,178l-19,51.62a15.92,15.92,0,0,1-29.88,0L78,178l-51.62-19a15.92,15.92,0,0,1,0-29.88L78,110l19-51.62a15.92,15.92,0,0,1,29.88,0L146,110l51.62,19A15.78,15.78,0,0,1,208,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z"></path>
              </svg>
              <span
                className="text-[14px] font-semibold"
                style={{ color: "var(--v2-t-1)" }}
              >
                New
              </span>
              <span className="text-[12px]" style={{ color: "var(--v2-t-4)" }}>
                Just launched
              </span>
              <span
                className="ml-auto num text-[11px]"
                style={{ color: "var(--v2-t-4)" }}
              >
                16
              </span>
            </div>
            <div className="flex-1 min-h-0 overflow-y-auto token-col-scroll">
              <div className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]">
                <a
                  className="flex gap-3"
                  href="/application/tokens/5LLWCop7jWScMJQQf76pJ6p3itJH6pjBYCfBo7ktpump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/g759rt4bjj3bcphnp3vu1packw1l"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        A MIRACLE
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        A MIRACLE
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">1d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{
                            width: "2%",
                            background:
                              "linear-gradient(90deg, #0024a7, var(--v2-accent))",
                          }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-t-3)" }}
                      >
                        0%
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $348.96
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $A MIRACLE"
                    aria-label="Deploy an agent on $A MIRACLE"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/5LLWCop7jWScMJQQf76pJ6p3itJH6pjBYCfBo7ktpump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/HyYkzWKKDK86dHqNUgkDjgqW2p1mpQFU2xWWBjUsQpij?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/r6q0t8qbuvm9royueg9yypii0tyf"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        WDT
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        Willem Dafoe Template
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">1d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{
                            width: "4.07665%",
                            background:
                              "linear-gradient(90deg, #0024a7, var(--v2-accent))",
                          }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-t-3)" }}
                      >
                        4%
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $3.06K
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $WDT"
                    aria-label="Deploy an agent on $WDT"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/HyYkzWKKDK86dHqNUgkDjgqW2p1mpQFU2xWWBjUsQpij"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/Ar7y5VjX84pf7pHsTPiuM2PsYhHZy5SLXBg3oaXtpump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/accg2okbhoznnsc5weitwr4se57l"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        DEBT
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        GRAEBER
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">1d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{
                            width: "23.9476%",
                            background:
                              "linear-gradient(90deg, #0024a7, var(--v2-accent))",
                          }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-t-3)" }}
                      >
                        24%
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $17.96K
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $DEBT"
                    aria-label="Deploy an agent on $DEBT"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/Ar7y5VjX84pf7pHsTPiuM2PsYhHZy5SLXBg3oaXtpump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/Ed58DGTDfWAKnnpnkdehsudp4BRn5kahbSCV666qpump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/9rgn5m0ubeae5s3g4bk9y6jotwny"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        ULTRA
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        ULTRAPAID
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">1d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{
                            width: "2%",
                            background:
                              "linear-gradient(90deg, #0024a7, var(--v2-accent))",
                          }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-t-3)" }}
                      >
                        1%
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $973.38
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $ULTRA"
                    aria-label="Deploy an agent on $ULTRA"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/Ed58DGTDfWAKnnpnkdehsudp4BRn5kahbSCV666qpump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/7j4BSP6ukTBwafmZEVGDji56QVEsKPs7aA4Vi21dpump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/9rpfvpszzuao27nxzwiq7qfk0fa2"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        WDT
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        Willem Dafoe Template
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">1d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{
                            width: "10.0418%",
                            background:
                              "linear-gradient(90deg, #0024a7, var(--v2-accent))",
                          }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-t-3)" }}
                      >
                        10%
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $7.53K
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $WDT"
                    aria-label="Deploy an agent on $WDT"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/7j4BSP6ukTBwafmZEVGDji56QVEsKPs7aA4Vi21dpump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/BbNJdD5TC19GYKLk6RQikr3jtN9jsThWrvBe9bcBpump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/j04omdsej281yidxo2bo4myo3va9"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        DOOROC
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        Doomed Rocket
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">1d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{
                            width: "13.9072%",
                            background:
                              "linear-gradient(90deg, #0024a7, var(--v2-accent))",
                          }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-t-3)" }}
                      >
                        14%
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $10.43K
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $DOOROC"
                    aria-label="Deploy an agent on $DOOROC"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/BbNJdD5TC19GYKLk6RQikr3jtN9jsThWrvBe9bcBpump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/DtpW1GxU6H6qr8qWcpnbsuDmLt6KqqXKdr7rupD7pump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/nuxl3w6ibthatjwp0gvw5pz8egz2"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        Kabosu
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        KabosuCoin
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">1d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{
                            width: "7.06932%",
                            background:
                              "linear-gradient(90deg, #0024a7, var(--v2-accent))",
                          }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-t-3)" }}
                      >
                        7%
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $5.30K
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $Kabosu"
                    aria-label="Deploy an agent on $Kabosu"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/DtpW1GxU6H6qr8qWcpnbsuDmLt6KqqXKdr7rupD7pump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/3aWLmjFntPjmGjpmD2tUCYna1UmLAHZeHejMQ2dppump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/fsseh90ksv42ecqiarpi77n8jc4t"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        Rescue
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        Rescuecoin
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">1d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{
                            width: "4.13386%",
                            background:
                              "linear-gradient(90deg, #0024a7, var(--v2-accent))",
                          }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-t-3)" }}
                      >
                        4%
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $3.10K
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $Rescue"
                    aria-label="Deploy an agent on $Rescue"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/3aWLmjFntPjmGjpmD2tUCYna1UmLAHZeHejMQ2dppump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/CMjyrBiLz62xn4bd5WcRUWwFyXGMA5sHzPPQusxppump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/g1l2c10722bqpwhu44xssvb2kqee"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        MEMECAT
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        Meme Cat
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">1d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{
                            width: "3.79442%",
                            background:
                              "linear-gradient(90deg, #0024a7, var(--v2-accent))",
                          }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-t-3)" }}
                      >
                        4%
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $2.85K
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $MEMECAT"
                    aria-label="Deploy an agent on $MEMECAT"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/CMjyrBiLz62xn4bd5WcRUWwFyXGMA5sHzPPQusxppump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/2NA7oq6ahJGv6P9Wa8EWo3ktt8Y1fdN1mARBhBimpump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/5adddh40luw2b0ax9e8xjrg3i1uc"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        sloppy
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        sloppy_ai
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">1d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{
                            width: "3.71107%",
                            background:
                              "linear-gradient(90deg, #0024a7, var(--v2-accent))",
                          }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-t-3)" }}
                      >
                        4%
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $2.78K
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $sloppy"
                    aria-label="Deploy an agent on $sloppy"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/2NA7oq6ahJGv6P9Wa8EWo3ktt8Y1fdN1mARBhBimpump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/5YVR6F5a3AeMHn1oSo2yaoGdJA4jZcDU8VTnWAhxJu42?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/dmbbinl1vechjapz15fsi667x388"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        NOTWEAK
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        Not For The Weak
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">1d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{
                            width: "3.56153%",
                            background:
                              "linear-gradient(90deg, #0024a7, var(--v2-accent))",
                          }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-t-3)" }}
                      >
                        4%
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $2.67K
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $NOTWEAK"
                    aria-label="Deploy an agent on $NOTWEAK"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/5YVR6F5a3AeMHn1oSo2yaoGdJA4jZcDU8VTnWAhxJu42"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/28eNQDpHecc8dXkduX5gu5riWu1kYqiJqzkGAUofpump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/gjuyxl9tckzqd0l5z23k9o5xb49l"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        HOPE
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        Holding On Praying Everyday
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">1d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{
                            width: "4.46406%",
                            background:
                              "linear-gradient(90deg, #0024a7, var(--v2-accent))",
                          }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-t-3)" }}
                      >
                        4%
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $3.35K
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $HOPE"
                    aria-label="Deploy an agent on $HOPE"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/28eNQDpHecc8dXkduX5gu5riWu1kYqiJqzkGAUofpump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/9y6jSgYEr3yoEgYZWNvHBBcndcLw7YkwunWuEL2pump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/6wtj3c5fhxoxc3mxjz96djfqehac"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        ALPHABET
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">1d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{
                            width: "4.44705%",
                            background:
                              "linear-gradient(90deg, #0024a7, var(--v2-accent))",
                          }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-t-3)" }}
                      >
                        4%
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $3.34K
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $ALPHABET"
                    aria-label="Deploy an agent on $ALPHABET"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/9y6jSgYEr3yoEgYZWNvHBBcndcLw7YkwunWuEL2pump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/7T5vYGDg1ezkDxZwaAJJhkuPSFkXAmqaD3ESysXPpump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/iasuuac2838767f4bg9tnl7izwb6"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        Niggers
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        Buy if you ARE A NIGGER
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">1d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{
                            width: "3.83295%",
                            background:
                              "linear-gradient(90deg, #0024a7, var(--v2-accent))",
                          }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-t-3)" }}
                      >
                        4%
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $2.87K
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $Niggers"
                    aria-label="Deploy an agent on $Niggers"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/7T5vYGDg1ezkDxZwaAJJhkuPSFkXAmqaD3ESysXPpump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/Epim9jZmn19eYFMtVNmT1CfiSemmuiMmPtaw5phKpump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/w2dtu97tjgqj2w293p1c6ws5kv2s"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        ONSHORE
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        ONSHORE
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">1d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{
                            width: "3.56386%",
                            background:
                              "linear-gradient(90deg, #0024a7, var(--v2-accent))",
                          }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-t-3)" }}
                      >
                        4%
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $2.67K
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $ONSHORE"
                    aria-label="Deploy an agent on $ONSHORE"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/Epim9jZmn19eYFMtVNmT1CfiSemmuiMmPtaw5phKpump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/FTarbgHowS74dEjFuUAhDYUiyapbUGFsY5Fa5mD5pump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/ffinm53rk6uavtfm63441oj6hu1k"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        ULTRA
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        ULTRAPAID
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">1d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{
                            width: "18.3174%",
                            background:
                              "linear-gradient(90deg, #0024a7, var(--v2-accent))",
                          }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-t-3)" }}
                      >
                        18%
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $13.74K
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $ULTRA"
                    aria-label="Deploy an agent on $ULTRA"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/FTarbgHowS74dEjFuUAhDYUiyapbUGFsY5Fa5mD5pump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </section>
          <section
            className="rounded-2xl flex flex-col lg:h-[calc(100vh-180px)]"
            style={{
              background: "var(--v2-bg-1)",
              border: "1px solid var(--v2-line-1)",
            }}
          >
            <div
              className="flex items-center gap-2 px-4 h-12 shrink-0"
              style={{ borderBottom: "1px solid var(--v2-line-1)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 256 256"
                style={{ color: "var(--v2-accent-text)" }}
              >
                <path d="M173.79,51.48a221.25,221.25,0,0,0-41.67-34.34,8,8,0,0,0-8.24,0A221.25,221.25,0,0,0,82.21,51.48C54.59,80.48,40,112.47,40,144a88,88,0,0,0,176,0C216,112.47,201.41,80.48,173.79,51.48ZM96,184c0-27.67,22.53-47.28,32-54.3,9.48,7,32,26.63,32,54.3a32,32,0,0,1-64,0Z"></path>
              </svg>
              <span
                className="text-[14px] font-semibold"
                style={{ color: "var(--v2-t-1)" }}
              >
                Final Stretch
              </span>
              <span className="text-[12px]" style={{ color: "var(--v2-t-4)" }}>
                Curve 40% to 99% full
              </span>
              <span
                className="ml-auto num text-[11px]"
                style={{ color: "var(--v2-t-4)" }}
              >
                9
              </span>
            </div>
            <div className="flex-1 min-h-0 overflow-y-auto token-col-scroll">
              <div className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]">
                <a
                  className="flex gap-3"
                  href="/application/tokens/HainqLN4GpjVeExdq85ciRJBEW1Vsn7jwqUeqeYrPG76?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/1n6sd7wkqjowkoecyiskyf170jca"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        SA
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        Super Agent
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">2d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{
                            width: "60.8835%",
                            background:
                              "linear-gradient(90deg, #0024a7, var(--v2-accent))",
                          }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-t-3)" }}
                      >
                        61%
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $45.66K
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $SA"
                    aria-label="Deploy an agent on $SA"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/HainqLN4GpjVeExdq85ciRJBEW1Vsn7jwqUeqeYrPG76"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/E2Y6k3e6LauUoMS11vVz3k2toXmh77n8HGicZygRpump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/8xgcd73ynac09835pprl9qaz5xa9"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        BLOBBO
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        Blobbo
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">1d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{
                            width: "59.4589%",
                            background:
                              "linear-gradient(90deg, #0024a7, var(--v2-accent))",
                          }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-t-3)" }}
                      >
                        59%
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $44.59K
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $BLOBBO"
                    aria-label="Deploy an agent on $BLOBBO"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/E2Y6k3e6LauUoMS11vVz3k2toXmh77n8HGicZygRpump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/EQWzDRdFt6BTnKm3KEQ7ax16mEjpuoaoy4FEhWgmpump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/t7bqf878xaaaoombz38dupem7wm8"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        Wen
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        Wen
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">2d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{
                            width: "56.9937%",
                            background:
                              "linear-gradient(90deg, #0024a7, var(--v2-accent))",
                          }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-t-3)" }}
                      >
                        57%
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $42.75K
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $Wen"
                    aria-label="Deploy an agent on $Wen"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/EQWzDRdFt6BTnKm3KEQ7ax16mEjpuoaoy4FEhWgmpump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/BnkbF7fcJtrbWRqw3Rec8CBnkj2aRLR3Bs9WEfvVpump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/hhw5bzy0bsy0iooy3bps0h6cpwvm"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        Jcat
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        Jerking cat
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">2d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{
                            width: "51.4532%",
                            background:
                              "linear-gradient(90deg, #0024a7, var(--v2-accent))",
                          }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-t-3)" }}
                      >
                        51%
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $38.59K
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $Jcat"
                    aria-label="Deploy an agent on $Jcat"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/BnkbF7fcJtrbWRqw3Rec8CBnkj2aRLR3Bs9WEfvVpump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/8buabJcozHuvWi8PEwzPK8gQdNJSJ6A8cAqsoqhBxQfQ?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/zie6xa5cmk0hicv2j2l4mfes57xr"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        GOON
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        Gooncoin
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">2d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{
                            width: "51.3828%",
                            background:
                              "linear-gradient(90deg, #0024a7, var(--v2-accent))",
                          }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-t-3)" }}
                      >
                        51%
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $38.54K
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $GOON"
                    aria-label="Deploy an agent on $GOON"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/8buabJcozHuvWi8PEwzPK8gQdNJSJ6A8cAqsoqhBxQfQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/DTVcrMAEMwpSSBvu6W7P3BLZsRhFZb6bSzARFDqobfCT?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/x22thdeh3u31s8qduobp8111svy7"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        MOVEMBER
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        MOVEMBER
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">1d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{
                            width: "50.4196%",
                            background:
                              "linear-gradient(90deg, #0024a7, var(--v2-accent))",
                          }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-t-3)" }}
                      >
                        50%
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $37.81K
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $MOVEMBER"
                    aria-label="Deploy an agent on $MOVEMBER"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/DTVcrMAEMwpSSBvu6W7P3BLZsRhFZb6bSzARFDqobfCT"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/ETHgDzFEG9gqBrjpPyiLvi12LSN9m7aPSdvWWjyZpump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/abykvod0mkhre4pe8os3fatwz49j"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        PARITY
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        useparity.fun
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">2d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{
                            width: "49.1548%",
                            background:
                              "linear-gradient(90deg, #0024a7, var(--v2-accent))",
                          }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-t-3)" }}
                      >
                        49%
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $36.87K
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $PARITY"
                    aria-label="Deploy an agent on $PARITY"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/ETHgDzFEG9gqBrjpPyiLvi12LSN9m7aPSdvWWjyZpump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/ERXoTjSZ58XdAdeinR4Mp9b3aQr375FvHdE9W5L2pump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/qeqgldcpk97zq1j778d229fjktle"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        nut
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        nut
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">2d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{
                            width: "48.7508%",
                            background:
                              "linear-gradient(90deg, #0024a7, var(--v2-accent))",
                          }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-t-3)" }}
                      >
                        49%
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $36.56K
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $nut"
                    aria-label="Deploy an agent on $nut"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/ERXoTjSZ58XdAdeinR4Mp9b3aQr375FvHdE9W5L2pump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/AiiFM3GF77C1ry3B7N87TYjnNf7NDJiCpzefhZDrUkKs?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/w3cryiyexw3yu65cs1ysna47a33j"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        MARVIN
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        MarvinCoin
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">2d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{
                            width: "48.7226%",
                            background:
                              "linear-gradient(90deg, #0024a7, var(--v2-accent))",
                          }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-t-3)" }}
                      >
                        49%
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $36.54K
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $MARVIN"
                    aria-label="Deploy an agent on $MARVIN"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/AiiFM3GF77C1ry3B7N87TYjnNf7NDJiCpzefhZDrUkKs"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </section>
          <section
            className="rounded-2xl flex flex-col lg:h-[calc(100vh-180px)]"
            style={{
              background: "var(--v2-bg-1)",
              border: "1px solid var(--v2-line-1)",
            }}
          >
            <div
              className="flex items-center gap-2 px-4 h-12 shrink-0"
              style={{ borderBottom: "1px solid var(--v2-line-1)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 256 256"
                style={{ color: "var(--v2-accent-text)" }}
              >
                <path d="M101.85,191.14C97.34,201,82.29,224,40,224a8,8,0,0,1-8-8c0-42.29,23-57.34,32.86-61.85a8,8,0,0,1,6.64,14.56c-6.43,2.93-20.62,12.36-23.12,38.91,26.55-2.5,36-16.69,38.91-23.12a8,8,0,1,1,14.56,6.64Zm122-144a16,16,0,0,0-15-15c-12.58-.75-44.73.4-71.4,27.07h0L88,108.7A8,8,0,0,1,76.67,97.39l26.56-26.57A4,4,0,0,0,100.41,64H74.35A15.9,15.9,0,0,0,63,68.68L28.7,103a16,16,0,0,0,9.07,27.16l38.47,5.37,44.21,44.21,5.37,38.49a15.94,15.94,0,0,0,10.78,12.92,16.11,16.11,0,0,0,5.1.83A15.91,15.91,0,0,0,153,227.3L187.32,193A16,16,0,0,0,192,181.65V155.59a4,4,0,0,0-6.83-2.82l-26.57,26.56a8,8,0,0,1-11.71-.42,8.2,8.2,0,0,1,.6-11.1l49.27-49.27h0C223.45,91.86,224.6,59.71,223.85,47.12Z"></path>
              </svg>
              <span
                className="text-[14px] font-semibold"
                style={{ color: "var(--v2-t-1)" }}
              >
                Migrated
              </span>
              <span className="text-[12px]" style={{ color: "var(--v2-t-4)" }}>
                Now trading on a DEX
              </span>
              <span
                className="ml-auto num text-[11px]"
                style={{ color: "var(--v2-t-4)" }}
              >
                20
              </span>
            </div>
            <div className="flex-1 min-h-0 overflow-y-auto token-col-scroll">
              <div className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]">
                <a
                  className="flex gap-3"
                  href="/application/tokens/GYKnd6jGUSQoBUnj6LdGCBtCWYDgr2Zd6QwNPcy5pump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/29bqeky39ggwdsz02oayywvb9gbm"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        AAPLCAT
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        Apple Cat
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">2d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{ width: "100%", background: "var(--v2-pos)" }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-pos)" }}
                      >
                        DEX
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $2.48K
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $AAPLCAT"
                    aria-label="Deploy an agent on $AAPLCAT"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/GYKnd6jGUSQoBUnj6LdGCBtCWYDgr2Zd6QwNPcy5pump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/762ZqBCd5m2q3QJ5UPkFL5rqdEUeygNkfTZrpGEZpump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/5nuk80zfhni6carbslnz28dc44o8"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        PAWCAT
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        PAWCAT
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">2d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{ width: "100%", background: "var(--v2-pos)" }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-pos)" }}
                      >
                        DEX
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $2.53K
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $PAWCAT"
                    aria-label="Deploy an agent on $PAWCAT"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/762ZqBCd5m2q3QJ5UPkFL5rqdEUeygNkfTZrpGEZpump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/FdKdpz11GsTofLaNiddrhxrsE4APZYSSfLFqQ9YKpump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/4owkwdflg0xp74lm8sn3uo34zgkp"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        SIS
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        Super Intelligence Satellite
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">2d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{ width: "100%", background: "var(--v2-pos)" }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-pos)" }}
                      >
                        DEX
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $8.51K
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $SIS"
                    aria-label="Deploy an agent on $SIS"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/FdKdpz11GsTofLaNiddrhxrsE4APZYSSfLFqQ9YKpump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/jM9r9PJFyPaMEbhGZPbDeZJiysn2pfyz5TzdDs5pump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/s243hgueu4zr896io57u2hnk03dc"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        uni
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        uni
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">1d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{ width: "100%", background: "var(--v2-pos)" }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-pos)" }}
                      >
                        DEX
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $10.20M
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $uni"
                    aria-label="Deploy an agent on $uni"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/jM9r9PJFyPaMEbhGZPbDeZJiysn2pfyz5TzdDs5pump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/4AWLQqBBZxDYNJ872F9CP4t6kWF8RZ5nNuGknV6Zpump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/qbeiyztrsjwcucydhdesjdla3lt7"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        AODF
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        American Oil Dividend Fund
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">2d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{ width: "100%", background: "var(--v2-pos)" }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-pos)" }}
                      >
                        DEX
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $19.08M
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $AODF"
                    aria-label="Deploy an agent on $AODF"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/4AWLQqBBZxDYNJ872F9CP4t6kWF8RZ5nNuGknV6Zpump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/ADTgcwrrshcZsamrrnq7TDcP7WYTqYY7NRmJEYwWpump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/atqgd45xbedwgyspkd8dw6jryztk"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        UDTF
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        UDTF
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">2d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{ width: "100%", background: "var(--v2-pos)" }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-pos)" }}
                      >
                        DEX
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $2.84K
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $UDTF"
                    aria-label="Deploy an agent on $UDTF"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/ADTgcwrrshcZsamrrnq7TDcP7WYTqYY7NRmJEYwWpump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/tEr9nFS3mAU3YEzzeiX7HqYQtYTeCJpk14AhXoApump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/q2jkouuxcomefuyze370exo013sd"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        UDTF
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        UDTF
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">4d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{ width: "100%", background: "var(--v2-pos)" }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-pos)" }}
                      >
                        DEX
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $2.75B
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $UDTF"
                    aria-label="Deploy an agent on $UDTF"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/tEr9nFS3mAU3YEzzeiX7HqYQtYTeCJpk14AhXoApump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/XfNpEofiyPXoe3gX8KmMioW6PiKxVVJgNrQGE8Wpump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/mbhtebgvat3s0j10eavjay97eqrk"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        USOE
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        USOE
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">3d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{ width: "100%", background: "var(--v2-pos)" }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-pos)" }}
                      >
                        DEX
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $3.33B
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $USOE"
                    aria-label="Deploy an agent on $USOE"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/XfNpEofiyPXoe3gX8KmMioW6PiKxVVJgNrQGE8Wpump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/WoWVTqfQh1AWnmBxUnSUJ5DSFQUc8NdB3SkB4tCpump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/r1g5a6sjxshcor6aploicoy5n1g5"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        USDF
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        USDF
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">7d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{ width: "100%", background: "var(--v2-pos)" }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-pos)" }}
                      >
                        DEX
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $439.07M
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $USDF"
                    aria-label="Deploy an agent on $USDF"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/WoWVTqfQh1AWnmBxUnSUJ5DSFQUc8NdB3SkB4tCpump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/EZZ4WS7XXKgWP2btL2iTjHz4of9PT16tCDMd1LTCpump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/5z14jinal4wpt4qg9j08blx7afrd"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        ANAKINCORE
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        AnakinCore
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">1d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{ width: "100%", background: "var(--v2-pos)" }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-pos)" }}
                      >
                        DEX
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $1.89K
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $ANAKINCORE"
                    aria-label="Deploy an agent on $ANAKINCORE"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/EZZ4WS7XXKgWP2btL2iTjHz4of9PT16tCDMd1LTCpump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/8s4bNqEztH1JP7mkU747uMr7AckCQdiV47FDqYnDpump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/ogkaaak0l4kwul1bdbnpcpdxws0z"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        ANAKIN
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        Anakin Coin
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">1d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{ width: "100%", background: "var(--v2-pos)" }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-pos)" }}
                      >
                        DEX
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $3.00M
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $ANAKIN"
                    aria-label="Deploy an agent on $ANAKIN"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/8s4bNqEztH1JP7mkU747uMr7AckCQdiV47FDqYnDpump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/uvt8yph7Gw4eGZCQgfwLh6pduUovCEKDihubL4spump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/7a3tsaxpqrbcd3w4ssmzdxur7vas"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        NVIDIA
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        NVIDIA
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">2d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{ width: "100%", background: "var(--v2-pos)" }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-pos)" }}
                      >
                        DEX
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $1.76K
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $NVIDIA"
                    aria-label="Deploy an agent on $NVIDIA"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/uvt8yph7Gw4eGZCQgfwLh6pduUovCEKDihubL4spump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/5Jh9HgUtWV3xk1dhrSHaD8iNmhS633BxYVjorzapump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/xbyl7oqetvbmcz39f18kgkrys1iq"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        AI
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        Authentic Inu
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">1d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{ width: "100%", background: "var(--v2-pos)" }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-pos)" }}
                      >
                        DEX
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $1.83K
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $AI"
                    aria-label="Deploy an agent on $AI"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/5Jh9HgUtWV3xk1dhrSHaD8iNmhS633BxYVjorzapump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/GDeavmTiCYpAqDDwPsWC2JWvgBdAeUBE9DY76Kvopump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/urbanbhogs0q0u66eh02p0blat1b"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        FOMO
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        fomo
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">2d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{ width: "100%", background: "var(--v2-pos)" }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-pos)" }}
                      >
                        DEX
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $1.74K
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $FOMO"
                    aria-label="Deploy an agent on $FOMO"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/GDeavmTiCYpAqDDwPsWC2JWvgBdAeUBE9DY76Kvopump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/Q1K8ShKZdmXCTfCRtqXTs8Uqh36MCQx5eWwFea4pump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/ahtlrhguhivve98u9m2tyjdcgifg"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        Apple
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        Apple
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">2d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{ width: "100%", background: "var(--v2-pos)" }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-pos)" }}
                      >
                        DEX
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $1.81K
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $Apple"
                    aria-label="Deploy an agent on $Apple"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/Q1K8ShKZdmXCTfCRtqXTs8Uqh36MCQx5eWwFea4pump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/2pKpMwUQXNZeAf93LoomnZSworH3ezFzweCiuvrppump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/rwl24y42t1w5mztk7z0lagq4u4n6"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        Anakinius
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        Anakinius Maximus
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">1d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{ width: "100%", background: "var(--v2-pos)" }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-pos)" }}
                      >
                        DEX
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $1.94K
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $Anakinius"
                    aria-label="Deploy an agent on $Anakinius"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/2pKpMwUQXNZeAf93LoomnZSworH3ezFzweCiuvrppump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/5ZWTin4FBPJ2G572jCWCi59o4SdPsGSinENMcmKYApTo?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/vgq5heg4zywuz57nyyrnoy8cfl2k"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        STAVO
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        stavotoken
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">2d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{ width: "100%", background: "var(--v2-pos)" }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-pos)" }}
                      >
                        DEX
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $3.76M
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $STAVO"
                    aria-label="Deploy an agent on $STAVO"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/5ZWTin4FBPJ2G572jCWCi59o4SdPsGSinENMcmKYApTo"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/HsprHxBRgiVaQdRf3TnKNuZZtaX9JUSPgMFdAkk6pump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/cx4dx2gu5iebtp5et1z4psgney9g"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        GATO
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        GTA6CAT
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">70d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{ width: "100%", background: "var(--v2-pos)" }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-pos)" }}
                      >
                        DEX
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $9.39M
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $GATO"
                    aria-label="Deploy an agent on $GATO"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/HsprHxBRgiVaQdRf3TnKNuZZtaX9JUSPgMFdAkk6pump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/ExxzYBTt3jwU5MUxuw2F4toYbTLdFwThSjyaCn6Xpump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/kimcmj19e243kyfzf08ok98nxigq"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        Anakin
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        Anakin Skywalker
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">4d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{ width: "100%", background: "var(--v2-pos)" }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-pos)" }}
                      >
                        DEX
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $2.91M
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $Anakin"
                    aria-label="Deploy an agent on $Anakin"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/ExxzYBTt3jwU5MUxuw2F4toYbTLdFwThSjyaCn6Xpump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div
                className="group relative px-4 py-3 transition-colors hover:bg-[var(--v2-bg-2)]"
                style={{ borderTop: "1px solid var(--v2-line-1)" }}
              >
                <a
                  className="flex gap-3"
                  href="/application/tokens/EUhvWbCR6zkPL2xW2zfiTLdahsakXZFyxeYCiSCtpump?chain=solana"
                >
                  <span className="relative shrink-0">
                    <img
                      alt=""
                      width="48"
                      height="48"
                      className="rounded-sm object-cover shrink-0"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      fetchPriority="auto"
                      src="https://assets.geckoterminal.com/pactsvqb1gszq1vd7qcv97cu1pha"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "var(--v2-bg-2)",
                      }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2">
                      <span
                        className="text-[14px] font-semibold truncate"
                        style={{ color: "var(--v2-t-1)" }}
                      >
                        fomo
                      </span>
                      <span
                        className="text-[12px] truncate"
                        style={{ color: "var(--v2-t-4)" }}
                      >
                        fomo
                      </span>
                    </span>
                    <span
                      className="flex items-center gap-2.5 mt-0.5 text-[12px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      <span className="num">2d ago</span>
                    </span>
                    <span className="flex items-center gap-2 mt-2">
                      <span
                        className="flex-1 h-1.5 rounded-full overflow-hidden"
                        style={{
                          background: "var(--v2-bg-3, rgba(255,255,255,0.06))",
                        }}
                      >
                        <span
                          className="block h-full rounded-full"
                          style={{ width: "100%", background: "var(--v2-pos)" }}
                        ></span>
                      </span>
                      <span
                        className="num text-[11px] w-10 text-right"
                        style={{ color: "var(--v2-pos)" }}
                      >
                        DEX
                      </span>
                    </span>
                  </span>
                  <span className="text-right shrink-0">
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--v2-t-4)" }}
                    >
                      MC
                    </span>
                    <span
                      className="block num text-[14px] font-semibold"
                      style={{ color: "var(--v2-t-1)" }}
                    >
                      $1.79K
                    </span>
                  </span>
                </a>
                <span className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    title="Deploy an agent on $fomo"
                    aria-label="Deploy an agent on $fomo"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-[rgba(var(--v2-accent-rgb),0.15)] !w-6 !h-6"
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
                    href="https://pump.fun/coin/EUhvWbCR6zkPL2xW2zfiTLdahsakXZFyxeYCiSCtpump"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open on pump.fun"
                    className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/10"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
