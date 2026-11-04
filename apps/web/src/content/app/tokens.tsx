import { DotBackdrop } from "@/components/app/dot-backdrop";
export function ApplicationTokensContent() {
  return (
    <>
      <aside
        className="hidden md:flex flex-col w-72 shrink-0"
        style={{
          borderRight: "1px solid var(--v2-line-1)",
          background: "var(--v2-bg-0)",
        }}
      >
        <div
          className="flex items-center justify-between px-4 py-3.5"
          style={{ borderBottom: "1px solid var(--v2-line-1)" }}
        >
          <span
            className="text-[13px] font-semibold tracking-wide uppercase"
            style={{ color: "var(--v2-t-2)" }}
          >
            Sessions
          </span>
          <div className="flex items-center gap-1">
            <button
              className="flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wide px-2.5 py-1.5 rounded-sm transition-colors hover:bg-[var(--v2-bg-1)]"
              style={{ color: "var(--v2-accent-text)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
              </svg>{" "}
              New
            </button>
            <button
              className="md:hidden p-1"
              style={{ color: "var(--v2-t-4)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto py-2">
          <div style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
            <button className="w-full flex items-center gap-2.5 px-4 py-3 transition-colors hover:bg-[var(--v2-bg-1)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                fill="currentColor"
                viewBox="0 0 256 256"
                style={{ color: "var(--v2-t-4)" }}
              >
                <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 256 256"
                style={{ color: "var(--v2-t-3)" }}
              >
                <path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"></path>
              </svg>
              <span
                className="text-[13px] font-semibold flex-1 text-left"
                style={{ color: "var(--v2-t-2)" }}
              >
                Chats
              </span>
              <span
                className="num tabular-nums text-[11px]"
                style={{ color: "var(--v2-t-4)" }}
              >
                0
              </span>
            </button>
            <div className="pb-1">
              <p
                className="text-[12px] px-10 py-2"
                style={{ color: "var(--v2-t-4)" }}
              >
                No chats yet
              </p>
            </div>
          </div>
          <div style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
            <button className="w-full flex items-center gap-2.5 px-4 py-3 transition-colors hover:bg-[var(--v2-bg-1)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                fill="currentColor"
                viewBox="0 0 256 256"
                style={{ color: "var(--v2-t-4)" }}
              >
                <path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 256 256"
                style={{ color: "var(--v2-t-3)" }}
              >
                <path d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-24,16v24H116V152ZM80,164a12,12,0,0,1,12-12h8v24H92A12,12,0,0,1,80,164Zm84,12h-8V152h8a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z"></path>
              </svg>
              <span
                className="text-[13px] font-semibold flex-1 text-left"
                style={{ color: "var(--v2-t-2)" }}
              >
                Agents
              </span>
              <span
                className="num tabular-nums text-[11px]"
                style={{ color: "var(--v2-t-4)" }}
              >
                0
              </span>
            </button>
          </div>
          <div style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
            <button className="w-full flex items-center gap-2.5 px-4 py-3 transition-colors hover:bg-[var(--v2-bg-1)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                fill="currentColor"
                viewBox="0 0 256 256"
                style={{ color: "var(--v2-t-4)" }}
              >
                <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 256 256"
                style={{ color: "var(--v2-t-3)" }}
              >
                <path d="M184,89.57V84c0-25.08-37.83-44-88-44S8,58.92,8,84v40c0,20.89,26.25,37.49,64,42.46V172c0,25.08,37.83,44,88,44s88-18.92,88-44V132C248,111.3,222.58,94.68,184,89.57ZM232,132c0,13.22-30.79,28-72,28-3.73,0-7.43-.13-11.08-.37C170.49,151.77,184,139,184,124V105.74C213.87,110.19,232,122.27,232,132ZM72,150.25V126.46A183.74,183.74,0,0,0,96,128a183.74,183.74,0,0,0,24-1.54v23.79A163,163,0,0,1,96,152,163,163,0,0,1,72,150.25Zm96-40.32V124c0,8.39-12.41,17.4-32,22.87V123.5C148.91,120.37,159.84,115.71,168,109.93ZM96,56c41.21,0,72,14.78,72,28s-30.79,28-72,28S24,97.22,24,84,54.79,56,96,56ZM24,124V109.93c8.16,5.78,19.09,10.44,32,13.57v23.37C36.41,141.4,24,132.39,24,124Zm64,48v-4.17c2.63.1,5.29.17,8,.17,3.88,0,7.67-.13,11.39-.35A121.92,121.92,0,0,0,120,171.41v23.46C100.41,189.4,88,180.39,88,172Zm48,26.25V174.4a179.48,179.48,0,0,0,24,1.6,183.74,183.74,0,0,0,24-1.54v23.79a165.45,165.45,0,0,1-48,0Zm64-3.38V171.5c12.91-3.13,23.84-7.79,32-13.57V172C232,180.39,219.59,189.4,200,194.87Z"></path>
              </svg>
              <span
                className="text-[13px] font-semibold flex-1 text-left"
                style={{ color: "var(--v2-t-2)" }}
              >
                Tokens
              </span>
              <span
                className="num tabular-nums text-[11px]"
                style={{ color: "var(--v2-t-4)" }}
              >
                0
              </span>
            </button>
            <div className="pb-1">
              <p
                className="text-[12px] px-10 py-2"
                style={{ color: "var(--v2-t-4)" }}
              >
                No token threads yet
              </p>
            </div>
          </div>
        </div>
      </aside>
      <div className="flex-1 flex flex-col overflow-hidden">
        <div
          className="md:hidden flex items-center gap-2 px-4 py-2"
          style={{ borderBottom: "1px solid var(--v2-line-1)" }}
        >
          <button
            className="p-1.5 rounded-sm"
            style={{ color: "var(--v2-t-3)" }}
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
          <span
            className="text-xs font-medium truncate"
            style={{ color: "var(--v2-t-2)" }}
          >
            New chat
          </span>
        </div>
        <div className="relative flex-1 overflow-y-auto">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <DotBackdrop variant="rings" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, transparent 35%, var(--v2-bg-0) 85%)",
              }}
            ></div>
          </div>
          <div className="relative z-10 min-h-full flex flex-col items-center justify-center px-4 py-10">
            <div className="w-full max-w-2xl flex flex-col items-center">
              <h1
                className="hero-rise text-[28px] sm:text-[36px] font-semibold tracking-tight text-center"
                style={{ color: "var(--v2-t-1)", animationDelay: "0ms" }}
              >
                Ask about any token, wallet or agent
              </h1>
              <div
                className="hero-rise w-full mt-8"
                style={{ animationDelay: "200ms" }}
              >
                <div className="flex items-end gap-2">
                  <button
                    className="h-11 w-11 shrink-0 flex items-center justify-center rounded-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    title="Paste from clipboard"
                    style={{
                      border: "1px solid var(--v2-line-1)",
                      color: "var(--v2-t-3)",
                      background: "transparent",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M168,152a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,152Zm-8-40H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm56-64V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V48A16,16,0,0,1,56,32H92.26a47.92,47.92,0,0,1,71.48,0H200A16,16,0,0,1,216,48ZM96,64h64a32,32,0,0,0-64,0ZM200,48H173.25A47.93,47.93,0,0,1,176,64v8a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V64a47.93,47.93,0,0,1,2.75-16H56V216H200Z"></path>
                    </svg>
                  </button>
                  <textarea
                    placeholder="Paste token / wallet or ask anything about the market"
                    rows={1}
                    className="input-v2 composer-shell flex-1 resize-none max-h-32 overflow-y-auto"
                    style={{ minHeight: "44px" }}
                    defaultValue=""
                  />
                  <button
                    disabled
                    className="btn-v2 btn-v2-primary h-11 w-11 shrink-0 justify-center disabled:opacity-40 disabled:cursor-not-allowed"
                    title="Send (Cmd / Ctrl + Enter)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M231.87,114l-168-95.89A16,16,0,0,0,40.92,37.34L71.55,128,40.92,218.67A16,16,0,0,0,56,240a16.15,16.15,0,0,0,7.93-2.1l167.92-96.05a16,16,0,0,0,.05-27.89ZM56,224a.56.56,0,0,0,0-.12L85.74,136H144a8,8,0,0,0,0-16H85.74L56.06,32.16A.46.46,0,0,0,56,32l168,95.83Z"></path>
                    </svg>
                  </button>
                </div>
                <div className="flex items-center justify-between gap-3 mt-2">
                  <div className="flex-1 min-w-0">
                    <p className="eyebrow" style={{ color: "var(--v2-t-3)" }}>
                      Ctrl+Enter
                    </p>
                  </div>
                  <span
                    className="inline-flex items-center gap-1.5 shrink-0"
                    title="0 credits · ~0 analyses available"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="11"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      style={{ color: "var(--v2-accent-text)" }}
                    >
                      <path d="M208,144a15.78,15.78,0,0,1-10.42,14.94L146,178l-19,51.62a15.92,15.92,0,0,1-29.88,0L78,178l-51.62-19a15.92,15.92,0,0,1,0-29.88L78,110l19-51.62a15.92,15.92,0,0,1,29.88,0L146,110l51.62,19A15.78,15.78,0,0,1,208,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z"></path>
                    </svg>
                    <span
                      className="eyebrow num"
                      style={{ color: "var(--v2-t-2)" }}
                    >
                      0 cr
                    </span>
                  </span>
                </div>
              </div>
              <div
                className="hero-rise w-full mt-6 flex flex-wrap items-center justify-center gap-3"
                style={{ animationDelay: "260ms" }}
              >
                <button
                  type="button"
                  className="hero-chip group relative inline-flex items-center gap-2 px-4 py-2.5 disabled:opacity-50"
                  style={{
                    borderRadius: "999px",
                    color: "var(--v2-t-1)",
                    fontSize: "13px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    className="opacity-75 group-hover:opacity-100 relative z-10"
                  >
                    <path d="M184,89.57V84c0-25.08-37.83-44-88-44S8,58.92,8,84v40c0,20.89,26.25,37.49,64,42.46V172c0,25.08,37.83,44,88,44s88-18.92,88-44V132C248,111.3,222.58,94.68,184,89.57ZM232,132c0,13.22-30.79,28-72,28-3.73,0-7.43-.13-11.08-.37C170.49,151.77,184,139,184,124V105.74C213.87,110.19,232,122.27,232,132ZM72,150.25V126.46A183.74,183.74,0,0,0,96,128a183.74,183.74,0,0,0,24-1.54v23.79A163,163,0,0,1,96,152,163,163,0,0,1,72,150.25Zm96-40.32V124c0,8.39-12.41,17.4-32,22.87V123.5C148.91,120.37,159.84,115.71,168,109.93ZM96,56c41.21,0,72,14.78,72,28s-30.79,28-72,28S24,97.22,24,84,54.79,56,96,56ZM24,124V109.93c8.16,5.78,19.09,10.44,32,13.57v23.37C36.41,141.4,24,132.39,24,124Zm64,48v-4.17c2.63.1,5.29.17,8,.17,3.88,0,7.67-.13,11.39-.35A121.92,121.92,0,0,0,120,171.41v23.46C100.41,189.4,88,180.39,88,172Zm48,26.25V174.4a179.48,179.48,0,0,0,24,1.6,183.74,183.74,0,0,0,24-1.54v23.79a165.45,165.45,0,0,1-48,0Zm64-3.38V171.5c12.91-3.13,23.84-7.79,32-13.57V172C232,180.39,219.59,189.4,200,194.87Z"></path>
                  </svg>
                  <span className="relative z-10">Analyze $BONK</span>
                </button>
                <button
                  type="button"
                  className="hero-chip group relative inline-flex items-center gap-2 px-4 py-2.5 disabled:opacity-50"
                  style={{
                    borderRadius: "999px",
                    color: "var(--v2-t-1)",
                    fontSize: "13px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    className="opacity-75 group-hover:opacity-100 relative z-10"
                  >
                    <path d="M216,64H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24,24,0,0,0,32,56V184a24,24,0,0,0,24,24H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64Zm0,128H56a8,8,0,0,1-8-8V78.63A23.84,23.84,0,0,0,56,80H216Zm-48-60a12,12,0,1,1,12,12A12,12,0,0,1,168,132Z"></path>
                  </svg>
                  <span className="relative z-10">Audit toly.sol</span>
                </button>
                <button
                  type="button"
                  className="hero-chip group relative inline-flex items-center gap-2 px-4 py-2.5 disabled:opacity-50"
                  style={{
                    borderRadius: "999px",
                    color: "var(--v2-t-1)",
                    fontSize: "13px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    className="opacity-75 group-hover:opacity-100 relative z-10"
                  >
                    <path d="M240,56v64a8,8,0,0,1-16,0V75.31l-82.34,82.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,212.69,64H168a8,8,0,0,1,0-16h64A8,8,0,0,1,240,56Z"></path>
                  </svg>
                  <span className="relative z-10">Smart money today</span>
                </button>
                <button
                  type="button"
                  className="hero-chip group relative inline-flex items-center gap-2 px-4 py-2.5 disabled:opacity-50"
                  style={{
                    borderRadius: "999px",
                    color: "var(--v2-t-1)",
                    fontSize: "13px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    className="opacity-75 group-hover:opacity-100 relative z-10"
                  >
                    <path d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-24,16v24H116V152ZM80,164a12,12,0,0,1,12-12h8v24H92A12,12,0,0,1,80,164Zm84,12h-8V152h8a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z"></path>
                  </svg>
                  <span className="relative z-10">Agent for new pairs</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
