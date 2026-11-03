export function ApplicationSwapContent() {
  return (
    <>
      <canvas
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
        width="1365"
        height="770"
      ></canvas>
      <div className="relative z-10 mx-auto w-full max-w-[480px]">
        <div className="flex items-center justify-between mb-3">
          <h1
            className="text-[22px] font-semibold"
            style={{ color: "var(--v2-t-1)" }}
          >
            Swap
          </h1>
          <div className="flex items-center gap-2">
            <div className="relative"></div>
            <button
              aria-label="Settings"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-[var(--v2-bg-2)]"
              style={{
                color: "var(--v2-t-3)",
                border: "1px solid var(--v2-line-1)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A112.1,112.1,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.62a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.08,8.08,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8.08,8.08,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          className="relative rounded-[28px] p-2"
          style={{
            background: "var(--v2-bg-1)",
            border: "1px solid var(--v2-line-1)",
            boxShadow: "rgba(12, 14, 17, 0.9) 0px 30px 80px -40px",
          }}
        >
          <div
            className="rounded-[22px] px-5 pt-4 pb-4"
            style={{
              background: "var(--v2-bg-0)",
              border: "1px solid var(--v2-line-1)",
            }}
          >
            <div className="flex items-center justify-between mb-1.5 text-[13px]">
              <span style={{ color: "var(--v2-t-3)" }}>Selling</span>
            </div>
            <div className="flex items-center gap-3">
              <input
                inputMode="decimal"
                placeholder="0.0"
                className="flex-1 min-w-0 bg-transparent outline-none num text-[38px] font-medium"
                value=""
                style={{ color: "var(--v2-t-1)" }}
              />
              <span
                className="shrink-0 flex items-center gap-2 h-11 pl-1.5 pr-4 rounded-full"
                style={{ background: "var(--v2-bg-2)" }}
              >
                <img
                  alt=""
                  width="28"
                  height="28"
                  className="w-7 h-7 rounded-full object-cover"
                  src="/chains/ethereum.png"
                  style={{ background: "var(--v2-bg-2)" }}
                />
                <span
                  className="text-[16px] font-semibold max-w-[110px] truncate"
                  style={{ color: "var(--v2-t-1)" }}
                >
                  ETH
                </span>
              </span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span
                className="num text-[13px]"
                style={{ color: "var(--v2-t-4)" }}
              >
                ~$0
              </span>
              <div className="flex gap-3">
                <button
                  className="num text-[13px] transition-colors hover:text-[var(--v2-t-1)] disabled:opacity-40"
                  style={{ color: "var(--v2-t-3)" }}
                >
                  25%
                </button>
                <button
                  className="num text-[13px] transition-colors hover:text-[var(--v2-t-1)] disabled:opacity-40"
                  style={{ color: "var(--v2-t-3)" }}
                >
                  50%
                </button>
                <button
                  className="num text-[13px] transition-colors hover:text-[var(--v2-t-1)] disabled:opacity-40"
                  style={{ color: "var(--v2-t-3)" }}
                >
                  75%
                </button>
                <button
                  className="num text-[13px] transition-colors hover:text-[var(--v2-t-1)] disabled:opacity-40"
                  style={{ color: "var(--v2-t-3)" }}
                >
                  Max
                </button>
              </div>
            </div>
          </div>
          <div className="relative h-2 z-10">
            <button
              aria-label="Flip direction"
              className="crv-swap-flip absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M208.49,152.49l-72,72a12,12,0,0,1-17,0l-72-72a12,12,0,0,1,17-17L116,187V40a12,12,0,0,1,24,0V187l51.51-51.52a12,12,0,0,1,17,17Z"></path>
              </svg>
            </button>
          </div>
          <div
            className="rounded-[22px] px-5 pt-4 pb-4"
            style={{
              background: "var(--v2-bg-0)",
              border: "1px solid var(--v2-line-1)",
            }}
          >
            <div className="flex items-center justify-between mb-1.5 text-[13px]">
              <span style={{ color: "var(--v2-t-3)" }}>Buying</span>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="flex-1 min-w-0 num text-[38px] font-medium truncate"
                style={{ color: "var(--v2-t-4)" }}
              >
                0.0
              </div>
              <button
                className="shrink-0 flex items-center gap-2 h-11 pl-1.5 pr-3 rounded-full transition-colors hover:brightness-110"
                style={{ background: "var(--v2-accent)" }}
              >
                <span
                  className="text-[15px] font-semibold px-1"
                  style={{ color: "rgb(20, 25, 29)" }}
                >
                  Select token
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  style={{ color: "rgb(20, 25, 29)" }}
                >
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span
                className="num text-[13px]"
                style={{ color: "var(--v2-t-4)" }}
              >
                ~$0
              </span>
            </div>
          </div>
          <button className="crv-swap-cta mt-2 w-full h-14 rounded-[20px] text-[16px] font-semibold flex items-center justify-center gap-2 disabled:cursor-not-allowed">
            Sign in to swap
          </button>
        </div>
      </div>
    </>
  );
}
