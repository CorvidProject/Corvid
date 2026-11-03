export function SiteNav() {
  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
        data-reveal
        style={{
          background: "rgba(20,25,29,0.92)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          transform: "none",
        }}
      >
        <div className="mx-auto px-6 lg:px-16" style={{ maxWidth: "1440px" }}>
          <div className="flex h-[72px] items-center">
            <a
              className="flex items-center gap-2.5 transition-opacity hover:opacity-70 shrink-0 mr-3"
              href="/"
            >
              <span
                className="font-heading font-extrabold tracking-[-0.04em] leading-none"
                style={{ fontSize: "1.25rem", color: "#fff" }}
              >
                CORVID
              </span>
            </a>
            <div className="hidden lg:flex flex-1 items-center justify-start gap-1 ml-6">
              <div className="relative">
                <button
                  type="button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  className="inline-flex items-center gap-1.5 rounded-full font-medium transition-colors duration-150 px-3.5 py-2 text-[15px] text-white/60 hover:text-white"
                >
                  Trading
                  <span className="inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
                    </svg>
                  </span>
                </button>
              </div>
              <div className="relative">
                <button
                  type="button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  className="inline-flex items-center gap-1.5 rounded-full font-medium transition-colors duration-150 px-3.5 py-2 text-[15px] text-white/60 hover:text-white"
                >
                  Agents
                  <span className="inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
                    </svg>
                  </span>
                </button>
              </div>
              <div className="relative">
                <button
                  type="button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  className="inline-flex items-center gap-1.5 rounded-full font-medium transition-colors duration-150 px-3.5 py-2 text-[15px] text-white/60 hover:text-white"
                >
                  Tools
                  <span className="inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
                    </svg>
                  </span>
                </button>
              </div>
              <div className="relative">
                <button
                  type="button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  className="inline-flex items-center gap-1.5 rounded-full font-medium transition-colors duration-150 px-3.5 py-2 text-[15px] text-white/60 hover:text-white"
                >
                  Developers
                  <span className="inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-5">
              <div className="flex items-center gap-2">
                <a
                  className="hidden xl:inline-flex items-center gap-2.5 h-11 w-[260px] pl-4 pr-2 rounded-full text-[14px] text-white/45 hover:text-white/70 transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                  href="/application/tokens"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"></path>
                  </svg>
                  <span className="flex-1">Search tokens, wallets…</span>
                  <kbd
                    className="font-mono text-[11px] px-1.5 py-0.5 rounded-md text-white/45"
                    style={{ background: "rgba(255,255,255,0.07)" }}
                  >
                    ⌘K
                  </kbd>
                </a>
                <a
                  aria-label="X"
                  title="X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full transition-colors duration-150 w-9 h-11 text-white/55 hover:text-white"
                  href="https://x.com/PLACEHOLDER"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M218.12,209.56l-61-95.8,59.72-65.69a12,12,0,0,0-17.76-16.14L143.81,92.77,106.12,33.56A12,12,0,0,0,96,28H48A12,12,0,0,0,37.88,46.44l61,95.8L39.12,207.93a12,12,0,1,0,17.76,16.14l55.31-60.84,37.69,59.21A12,12,0,0,0,160,228h48a12,12,0,0,0,10.12-18.44ZM166.59,204,69.86,52H89.41l96.73,152Z"></path>
                  </svg>
                </a>
                <a
                  aria-label="Telegram"
                  title="Telegram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full transition-colors duration-150 w-9 h-11 text-white/55 hover:text-white"
                  href="https://t.me/PLACEHOLDER"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M228.88,26.19a9,9,0,0,0-9.16-1.57L17.06,103.93a14.22,14.22,0,0,0,2.43,27.21L72,141.45V200a15.92,15.92,0,0,0,10,14.83,15.91,15.91,0,0,0,17.51-3.73l25.32-26.26L165,220a15.88,15.88,0,0,0,10.51,4,16.3,16.3,0,0,0,5-.79,15.85,15.85,0,0,0,10.67-11.63L231.77,35A9,9,0,0,0,228.88,26.19ZM175.53,208,92.85,135.5l119-85.29Z"></path>
                  </svg>
                </a>
                <a
                  aria-label="Wallet"
                  title="Wallet"
                  className="inline-flex items-center justify-center rounded-full transition-colors duration-150 w-11 h-11 text-white/75 hover:text-white bg-white/[0.06] hover:bg-white/[0.11]"
                  href="/application/portfolio"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M196,136a16,16,0,1,1-16-16A16,16,0,0,1,196,136Zm40-36v80a32,32,0,0,1-32,32H60a32,32,0,0,1-32-32V60.92A32,32,0,0,1,60,28H192a12,12,0,0,1,0,24H60a8,8,0,0,0-8,8.26v.08A8.32,8.32,0,0,0,60.48,68H204A32,32,0,0,1,236,100Zm-24,0a8,8,0,0,0-8-8H60.48A33.72,33.72,0,0,1,52,90.92V180a8,8,0,0,0,8,8H204a8,8,0,0,0,8-8Z"></path>
                  </svg>
                </a>
                <a
                  className="crv-chrome-btn inline-flex items-center gap-2 font-sans text-[15px] font-semibold px-6 h-11"
                  href="/application"
                >
                  Launch App
                  <span aria-hidden="true" style={{ fontSize: "10px" }}>
                    ▶
                  </span>
                </a>
              </div>
            </div>
            <a
              className="lg:hidden ml-auto mr-2 inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.12em] uppercase font-bold px-4 py-2.5 rounded-full shrink-0 transition-transform active:scale-[0.97] crv-chrome-btn"
              href="/application"
            >
              Launch App
              <span aria-hidden="true" style={{ fontSize: "9px" }}>
                ▶
              </span>
            </a>
            <button
              className="lg:hidden p-2 transition-opacity hover:opacity-60 shrink-0"
              style={{ color: "#fff" }}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="h-5 w-5"
              >
                <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
