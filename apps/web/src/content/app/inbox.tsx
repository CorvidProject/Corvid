export function ApplicationInboxContent() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-3 sm:px-5">
        <div className="flex items-end justify-between gap-3 flex-wrap mt-4">
          <div className="flex gap-5 shrink-0">
            <button
              className="relative flex items-center gap-2 pb-2.5 text-[12px] transition-colors whitespace-nowrap"
              style={{ color: "var(--v2-t-1)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M224,71.1a8,8,0,0,1-10.78-3.42,94.13,94.13,0,0,0-33.46-36.91,8,8,0,1,1,8.54-13.54,111.46,111.46,0,0,1,39.12,43.09A8,8,0,0,1,224,71.1ZM35.71,72a8,8,0,0,0,7.1-4.32A94.13,94.13,0,0,1,76.27,30.77a8,8,0,1,0-8.54-13.54A111.46,111.46,0,0,0,28.61,60.32,8,8,0,0,0,35.71,72Zm186.1,103.94A16,16,0,0,1,208,200H167.2a40,40,0,0,1-78.4,0H48a16,16,0,0,1-13.79-24.06C43.22,160.39,48,138.28,48,112a80,80,0,0,1,160,0C208,138.27,212.78,160.38,221.81,175.94ZM150.62,200H105.38a24,24,0,0,0,45.24,0ZM208,184c-10.64-18.27-16-42.49-16-72a64,64,0,0,0-128,0c0,29.52-5.38,53.74-16,72Z"></path>
              </svg>
              <span className="eyebrow">Signals</span>
              <span
                className="absolute bottom-[-1px] left-0 right-0 h-px"
                style={{ background: "var(--v2-accent)" }}
              ></span>
            </button>
            <button
              className="relative flex items-center gap-2 pb-2.5 text-[12px] transition-colors whitespace-nowrap"
              style={{ color: "var(--v2-t-4)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M184,89.57V84c0-25.08-37.83-44-88-44S8,58.92,8,84v40c0,20.89,26.25,37.49,64,42.46V172c0,25.08,37.83,44,88,44s88-18.92,88-44V132C248,111.3,222.58,94.68,184,89.57ZM232,132c0,13.22-30.79,28-72,28-3.73,0-7.43-.13-11.08-.37C170.49,151.77,184,139,184,124V105.74C213.87,110.19,232,122.27,232,132ZM72,150.25V126.46A183.74,183.74,0,0,0,96,128a183.74,183.74,0,0,0,24-1.54v23.79A163,163,0,0,1,96,152,163,163,0,0,1,72,150.25Zm96-40.32V124c0,8.39-12.41,17.4-32,22.87V123.5C148.91,120.37,159.84,115.71,168,109.93ZM96,56c41.21,0,72,14.78,72,28s-30.79,28-72,28S24,97.22,24,84,54.79,56,96,56ZM24,124V109.93c8.16,5.78,19.09,10.44,32,13.57v23.37C36.41,141.4,24,132.39,24,124Zm64,48v-4.17c2.63.1,5.29.17,8,.17,3.88,0,7.67-.13,11.39-.35A121.92,121.92,0,0,0,120,171.41v23.46C100.41,189.4,88,180.39,88,172Zm48,26.25V174.4a179.48,179.48,0,0,0,24,1.6,183.74,183.74,0,0,0,24-1.54v23.79a165.45,165.45,0,0,1-48,0Zm64-3.38V171.5c12.91-3.13,23.84-7.79,32-13.57V172C232,180.39,219.59,189.4,200,194.87Z"></path>
              </svg>
              <span className="eyebrow">Tokens</span>
            </button>
            <button
              className="relative flex items-center gap-2 pb-2.5 text-[12px] transition-colors whitespace-nowrap"
              style={{ color: "var(--v2-t-4)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M216,64H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24,24,0,0,0,32,56V184a24,24,0,0,0,24,24H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64Zm0,128H56a8,8,0,0,1-8-8V78.63A23.84,23.84,0,0,0,56,80H216Zm-48-60a12,12,0,1,1,12,12A12,12,0,0,1,168,132Z"></path>
              </svg>
              <span className="eyebrow">Wallets</span>
            </button>
          </div>
        </div>
        <div className="mt-1">
          <div className="flex items-center gap-3 flex-wrap py-3">
            <div className="flex items-center gap-1.5 flex-wrap flex-1 min-w-0">
              <button
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm transition-colors text-[11px]"
                style={{
                  border: "1px solid var(--v2-accent)",
                  background:
                    "var(--v2-accent-bg, rgba(var(--v2-accent-rgb),0.08))",
                  color: "var(--v2-t-1)",
                }}
              >
                <span className="eyebrow">All</span>
              </button>
              <button
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm transition-colors text-[11px]"
                style={{
                  border: "1px solid var(--v2-line-1)",
                  background: "transparent",
                  color: "var(--v2-t-3)",
                }}
              >
                <span className="eyebrow">Trades</span>
              </button>
              <button
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm transition-colors text-[11px]"
                style={{
                  border: "1px solid var(--v2-line-1)",
                  background: "transparent",
                  color: "var(--v2-t-3)",
                }}
              >
                <span className="eyebrow">Wallets</span>
              </button>
              <button
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm transition-colors text-[11px]"
                style={{
                  border: "1px solid var(--v2-line-1)",
                  background: "transparent",
                  color: "var(--v2-t-3)",
                }}
              >
                <span className="eyebrow">Clusters</span>
              </button>
              <button
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm transition-colors text-[11px]"
                style={{
                  border: "1px solid var(--v2-line-1)",
                  background: "transparent",
                  color: "var(--v2-t-3)",
                }}
              >
                <span className="eyebrow">AI</span>
              </button>
              <button
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm transition-colors text-[11px]"
                style={{
                  border: "1px solid var(--v2-line-1)",
                  background: "transparent",
                  color: "var(--v2-t-3)",
                }}
              >
                <span className="eyebrow">Alerts</span>
              </button>
              <button
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm transition-colors text-[11px]"
                style={{
                  border: "1px solid var(--v2-line-1)",
                  background: "transparent",
                  color: "var(--v2-t-3)",
                }}
              >
                <span className="eyebrow">System</span>
              </button>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span
                className="inline-flex items-center gap-2 px-2.5 h-7 rounded-sm shrink-0"
                title="Listening for activity — signals appear when sources are connected"
                style={{
                  border: "1px solid var(--v2-line-1)",
                  background: "var(--v2-bg-0)",
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: "var(--v2-t-4)" }}
                ></span>
                <span
                  className="num text-[11px] tracking-wider"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  LISTENING
                </span>
              </span>
              <button
                className="btn-v2 btn-v2-ghost btn-v2-sm"
                style={{ opacity: "0.7" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h28.69L182.06,73.37a79.56,79.56,0,0,0-56.13-23.43h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27a96,96,0,0,1,135,.79L208,76.69V48a8,8,0,0,1,16,0ZM186.41,183.29a80,80,0,0,1-112.47-.66L59.31,168H88a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V179.31l14.63,14.63A95.43,95.43,0,0,0,130,222.06h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="pt-4">
            <div className="text-center pb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="mx-auto mb-3"
                style={{ color: "var(--v2-t-4)" }}
              >
                <path d="M224,71.1a8,8,0,0,1-10.78-3.42,94.13,94.13,0,0,0-33.46-36.91,8,8,0,1,1,8.54-13.54,111.46,111.46,0,0,1,39.12,43.09A8,8,0,0,1,224,71.1ZM35.71,72a8,8,0,0,0,7.1-4.32A94.13,94.13,0,0,1,76.27,30.77a8,8,0,1,0-8.54-13.54A111.46,111.46,0,0,0,28.61,60.32,8,8,0,0,0,35.71,72Zm186.1,103.94A16,16,0,0,1,208,200H167.2a40,40,0,0,1-78.4,0H48a16,16,0,0,1-13.79-24.06C43.22,160.39,48,138.28,48,112a80,80,0,0,1,160,0C208,138.27,212.78,160.38,221.81,175.94ZM150.62,200H105.38a24,24,0,0,0,45.24,0ZM208,184c-10.64-18.27-16-42.49-16-72a64,64,0,0,0-128,0c0,29.52-5.38,53.74-16,72Z"></path>
              </svg>
              <p
                className="text-sm font-semibold mb-1.5"
                style={{ color: "var(--v2-t-2)" }}
              >
                No signals yet
              </p>
              <p
                className="text-[12px] max-w-md mx-auto"
                style={{ color: "var(--v2-t-3)" }}
              >
                Start tracking wallets, tokens or agents to receive real-time
                alpha
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                className="group block p-5 rounded-sm transition-colors hover:bg-[var(--v2-bg-1)]"
                href="/application/alpha"
                style={{ border: "1px solid var(--v2-accent)" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    style={{ color: "var(--v2-accent-text)" }}
                  >
                    <path d="M222.16,177.25a8,8,0,0,1-1,11.25c-17.36,14.39-32.86,19.5-47,19.5-18.58,0-34.82-8.82-49.93-17-25.35-13.76-47.24-25.64-79.07.74a8,8,0,1,1-10.22-12.31c40.17-33.28,70.32-16.92,96.93-2.48,25.35,13.75,47.24,25.63,79.07-.74A8,8,0,0,1,222.16,177.25Zm-11.27-57c-31.83,26.38-53.72,14.5-79.07.74-26.61-14.43-56.76-30.79-96.93,2.49a8,8,0,0,0,10.22,12.31c31.83-26.38,53.72-14.5,79.07-.74,15.11,8.19,31.35,17,49.93,17,14.14,0,29.64-5.11,47-19.5a8,8,0,1,0-10.22-12.31ZM45.11,79.8c31.83-26.37,53.72-14.49,79.07-.74,15.11,8.2,31.35,17,49.93,17,14.14,0,29.64-5.12,47-19.5a8,8,0,1,0-10.22-12.31c-31.83,26.38-53.72,14.5-79.07.74C105.21,50.58,75.06,34.22,34.89,67.5A8,8,0,1,0,45.11,79.8Z"></path>
                  </svg>
                </div>
                <p
                  className="text-[14px] font-medium"
                  style={{ color: "var(--v2-t-1)" }}
                >
                  Wallet signals
                </p>
                <p
                  className="text-[12px] mt-1.5 leading-relaxed"
                  style={{ color: "var(--v2-t-3)" }}
                >
                  Track whales and get real-time trades and accumulation
                  patterns
                </p>
                <span
                  className="text-[11px] eyebrow inline-flex items-center gap-1.5 mt-4 transition-colors group-hover:text-[var(--v2-accent)]"
                  style={{ color: "var(--v2-accent-text)" }}
                >
                  Track a wallet{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                  </svg>
                </span>
              </a>
              <a
                className="group block p-5 rounded-sm transition-colors hover:bg-[var(--v2-bg-1)]"
                href="/application/terminal"
                style={{ border: "1px solid var(--v2-line-1)" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    style={{ color: "var(--v2-t-3)" }}
                  >
                    <path d="M184,89.57V84c0-25.08-37.83-44-88-44S8,58.92,8,84v40c0,20.89,26.25,37.49,64,42.46V172c0,25.08,37.83,44,88,44s88-18.92,88-44V132C248,111.3,222.58,94.68,184,89.57ZM232,132c0,13.22-30.79,28-72,28-3.73,0-7.43-.13-11.08-.37C170.49,151.77,184,139,184,124V105.74C213.87,110.19,232,122.27,232,132ZM72,150.25V126.46A183.74,183.74,0,0,0,96,128a183.74,183.74,0,0,0,24-1.54v23.79A163,163,0,0,1,96,152,163,163,0,0,1,72,150.25Zm96-40.32V124c0,8.39-12.41,17.4-32,22.87V123.5C148.91,120.37,159.84,115.71,168,109.93ZM96,56c41.21,0,72,14.78,72,28s-30.79,28-72,28S24,97.22,24,84,54.79,56,96,56ZM24,124V109.93c8.16,5.78,19.09,10.44,32,13.57v23.37C36.41,141.4,24,132.39,24,124Zm64,48v-4.17c2.63.1,5.29.17,8,.17,3.88,0,7.67-.13,11.39-.35A121.92,121.92,0,0,0,120,171.41v23.46C100.41,189.4,88,180.39,88,172Zm48,26.25V174.4a179.48,179.48,0,0,0,24,1.6,183.74,183.74,0,0,0,24-1.54v23.79a165.45,165.45,0,0,1-48,0Zm64-3.38V171.5c12.91-3.13,23.84-7.79,32-13.57V172C232,180.39,219.59,189.4,200,194.87Z"></path>
                  </svg>
                </div>
                <p
                  className="text-[14px] font-medium"
                  style={{ color: "var(--v2-t-1)" }}
                >
                  Token alerts
                </p>
                <p
                  className="text-[12px] mt-1.5 leading-relaxed"
                  style={{ color: "var(--v2-t-3)" }}
                >
                  Price moves, liquidity shifts and risk flips for tokens you
                  watch
                </p>
                <span
                  className="text-[11px] eyebrow inline-flex items-center gap-1.5 mt-4 transition-colors group-hover:text-[var(--v2-accent)]"
                  style={{ color: "var(--v2-t-3)" }}
                >
                  Watch a token{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                  </svg>
                </span>
              </a>
              <a
                className="group block p-5 rounded-sm transition-colors hover:bg-[var(--v2-bg-1)]"
                href="/application/agents/new"
                style={{ border: "1px solid var(--v2-line-1)" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    style={{ color: "var(--v2-t-4)" }}
                  >
                    <path d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-24,16v24H116V152ZM80,164a12,12,0,0,1,12-12h8v24H92A12,12,0,0,1,80,164Zm84,12h-8V152h8a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z"></path>
                  </svg>
                </div>
                <p
                  className="text-[14px] font-medium"
                  style={{ color: "var(--v2-t-1)" }}
                >
                  Agent signals
                </p>
                <p
                  className="text-[12px] mt-1.5 leading-relaxed"
                  style={{ color: "var(--v2-t-3)" }}
                >
                  Let agents monitor markets and notify you when something
                  matters
                </p>
                <span
                  className="text-[11px] eyebrow inline-flex items-center gap-1.5 mt-4 transition-colors group-hover:text-[var(--v2-accent)]"
                  style={{ color: "var(--v2-t-3)" }}
                >
                  Create agent{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function ApplicationInboxContentExtra() {
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
            Your Inbox — one step away
          </h3>
          <p
            className="text-[14px] leading-relaxed mb-8 max-w-[340px]"
            style={{ color: "var(--v2-t-3)" }}
          >
            Sign in to stream signals, watch tokens and track smart wallets in
            real time
          </p>
          <button className="btn-v2 btn-v2-primary h-11 px-7 text-[14px] font-semibold">
            Create account
          </button>
        </div>
      </div>
    </>
  );
}
