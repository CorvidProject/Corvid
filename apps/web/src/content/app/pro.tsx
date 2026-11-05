export function ApplicationProContent() {
  return (
    <>
      <div
        className="mx-auto px-6 lg:px-12 pt-24 pb-16"
        style={{ maxWidth: "1200px" }}
      >
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              viewBox="0 0 256 256"
              style={{ color: "var(--v2-accent-text)" }}
            >
              <path d="M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.27,47,25.53a8,8,0,0,0,4.2,0c1-.26,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm-37,87.43-30.31,12.12L158.4,163.2a8,8,0,1,1-12.8,9.6L128,149.33,110.4,172.8a8,8,0,1,1-12.8-9.6l17.74-23.65L85,127.43A8,8,0,1,1,91,112.57l29,11.61V96a8,8,0,0,1,16,0v28.18l29-11.61A8,8,0,1,1,171,127.43Z"></path>
            </svg>
            <h1
              className="font-heading font-semibold text-[24px] tracking-[-0.02em] m-0"
              style={{ color: "var(--v2-t-0)" }}
            >
              Plan & Usage
            </h1>
          </div>
          <p className="text-[15px] m-0" style={{ color: "var(--v2-t-3)" }}>
            Subscription, credits balance, and AI quota for the current period
            in one place
          </p>
        </div>
        <div className="py-5 px-1">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <div
              className="font-mono text-[11px] tracking-[0.06em] uppercase"
              style={{ color: "var(--v2-t-3)" }}
            >
              Free tier
            </div>
            <div className="flex items-baseline gap-2">
              <span
                className="num text-[15px] font-semibold"
                style={{ color: "var(--v2-t-1)" }}
              >
                0
              </span>
              <span className="text-[12px]" style={{ color: "var(--v2-t-3)" }}>
                Starter analyses left
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span
                className="num text-[15px] font-semibold"
                style={{ color: "var(--v2-t-1)" }}
              >
                0 / 5
              </span>
              <span className="text-[12px]" style={{ color: "var(--v2-t-3)" }}>
                Analyses this month
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span
                className="num text-[15px] font-semibold"
                style={{ color: "var(--v2-t-1)" }}
              >
                0 / 20
              </span>
              <span className="text-[12px]" style={{ color: "var(--v2-t-3)" }}>
                Chat this month
              </span>
            </div>
          </div>
        </div>
        <div
          id="buy-credits"
          className="py-5 px-1 flex items-center justify-between flex-wrap gap-4"
          style={{ borderBottom: "1px solid var(--v2-line-1)" }}
        >
          <div className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              viewBox="0 0 256 256"
              style={{ color: "var(--v2-accent-text)" }}
            >
              <path d="M213.85,125.46l-112,120a8,8,0,0,1-13.69-7l14.66-73.33L45.19,143.49a8,8,0,0,1-3-13l112-120a8,8,0,0,1,13.69,7L153.18,90.9l57.63,21.61a8,8,0,0,1,3,12.95Z"></path>
            </svg>
            <div>
              <div
                className="font-mono text-[11px] tracking-[0.2em] uppercase mb-1"
                style={{ color: "var(--v2-t-4)" }}
              >
                Credits balance
              </div>
              <div className="flex items-baseline gap-2">
                <span
                  className="font-heading font-bold text-[28px] num tabular-nums"
                  style={{ color: "var(--v2-t-0)" }}
                >
                  0
                </span>
                <span
                  className="text-[13px]"
                  style={{ color: "var(--v2-t-3)" }}
                >
                  cr
                </span>
              </div>
              <div
                className="text-[12px] mt-1"
                style={{ color: "var(--v2-t-4)" }}
              >
                Powers per-action AI calls when you don't want a Pro
                subscription
              </div>
            </div>
          </div>
          <a
            className="inline-flex items-center gap-2 px-4 py-2 rounded-sm font-mono text-[12px] tracking-[0.1em] uppercase font-semibold transition-colors hover:brightness-110"
            style={{ background: "var(--v2-accent)", color: "#ffffff" }}
            href="/application/credits"
          >
            Buy credits{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path>
            </svg>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div
            className="relative p-6 flex flex-col rounded-lg transition-colors hover:bg-[var(--v2-bg-3)]"
            style={{
              background: "var(--v2-bg-1)",
              border: "1px solid var(--v2-line-1)",
            }}
          >
            <div
              className="font-mono text-[12px] tracking-[0.06em] uppercase mb-2"
              style={{ color: "var(--v2-t-3)" }}
            >
              1 month
            </div>
            <div
              className="font-heading font-black text-[36px] tracking-tight mb-1"
              style={{ color: "var(--v2-t-0)" }}
            >
              $9
            </div>
            <div
              className="text-[14px] mb-5"
              style={{ color: "var(--v2-t-2)" }}
            >
              $9 / month
              <span className="ml-2" style={{ color: "var(--v2-t-3)" }}>
                · Try it
              </span>
            </div>
            <button
              disabled
              className="w-full py-3 px-4 font-mono text-[12px] tracking-[0.1em] uppercase font-semibold transition-opacity rounded-sm hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ background: "var(--v2-accent)", color: "#ffffff" }}
            >
              Activate
            </button>
          </div>
          <div
            className="relative p-6 flex flex-col rounded-lg transition-colors hover:bg-[var(--v2-bg-3)]"
            style={{
              background: "var(--v2-bg-2)",
              border: "1px solid var(--v2-accent)",
            }}
          >
            <span
              className="absolute -top-2.5 left-6 font-mono text-[10px] uppercase tracking-[0.06em] px-2 py-0.5 rounded-sm"
              style={{ background: "var(--v2-accent)", color: "#ffffff" }}
            >
              Default
            </span>
            <div
              className="font-mono text-[12px] tracking-[0.06em] uppercase mb-2"
              style={{ color: "var(--v2-t-3)" }}
            >
              3 months
            </div>
            <div
              className="font-heading font-black text-[36px] tracking-tight mb-1"
              style={{ color: "var(--v2-t-0)" }}
            >
              $27
            </div>
            <div
              className="text-[14px] mb-5"
              style={{ color: "var(--v2-t-2)" }}
            >
              $9 / month
              <span className="ml-2" style={{ color: "var(--v2-t-3)" }}>
                · One payment per quarter
              </span>
            </div>
            <button
              disabled
              className="w-full py-3 px-4 font-mono text-[12px] tracking-[0.1em] uppercase font-semibold transition-opacity rounded-sm hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ background: "var(--v2-accent)", color: "#ffffff" }}
            >
              Activate
            </button>
          </div>
          <div
            className="relative p-6 flex flex-col rounded-lg transition-colors hover:bg-[var(--v2-bg-3)]"
            style={{
              background: "var(--v2-bg-1)",
              border: "1px solid var(--v2-line-1)",
            }}
          >
            <div
              className="font-mono text-[12px] tracking-[0.06em] uppercase mb-2"
              style={{ color: "var(--v2-t-3)" }}
            >
              12 months
            </div>
            <div
              className="font-heading font-black text-[36px] tracking-tight mb-1"
              style={{ color: "var(--v2-t-0)" }}
            >
              $108
            </div>
            <div
              className="text-[14px] mb-5"
              style={{ color: "var(--v2-t-2)" }}
            >
              $9 / month
              <span className="ml-2" style={{ color: "var(--v2-t-3)" }}>
                · One payment per year
              </span>
            </div>
            <button
              disabled
              className="w-full py-3 px-4 font-mono text-[12px] tracking-[0.1em] uppercase font-semibold transition-opacity rounded-sm hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ background: "var(--v2-accent)", color: "#ffffff" }}
            >
              Activate
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6" style={{ background: "var(--v2-bg-1)" }}>
            <div className="flex items-center gap-2 mb-4">
              <span
                className="font-mono text-[11px] tracking-[0.2em] uppercase"
                style={{ color: "var(--v2-t-4)" }}
              >
                Free
              </span>
            </div>
            <ul className="m-0 p-0 list-none flex flex-col gap-2">
              <li
                className="flex items-start gap-2 text-[13px]"
                style={{ color: "var(--v2-t-2)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  style={{
                    color: "var(--v2-t-4)",
                    marginTop: "3px",
                    flexShrink: "0",
                  }}
                >
                  <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                </svg>
                25 starter analyses (one-time)
              </li>
              <li
                className="flex items-start gap-2 text-[13px]"
                style={{ color: "var(--v2-t-2)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  style={{
                    color: "var(--v2-t-4)",
                    marginTop: "3px",
                    flexShrink: "0",
                  }}
                >
                  <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                </svg>
                5 deep analyses / month
              </li>
              <li
                className="flex items-start gap-2 text-[13px]"
                style={{ color: "var(--v2-t-2)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  style={{
                    color: "var(--v2-t-4)",
                    marginTop: "3px",
                    flexShrink: "0",
                  }}
                >
                  <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                </svg>
                20 chat messages / month
              </li>
              <li
                className="flex items-start gap-2 text-[13px]"
                style={{ color: "var(--v2-t-2)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  style={{
                    color: "var(--v2-t-4)",
                    marginTop: "3px",
                    flexShrink: "0",
                  }}
                >
                  <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                </svg>
                Standard agent execution
              </li>
            </ul>
          </div>
          <div
            className="p-6"
            style={{
              borderLeft: "2px solid var(--v2-accent)",
              background:
                "color-mix(in oklch, var(--v2-accent) 4%, var(--v2-bg-1))",
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 256 256"
                style={{ color: "var(--v2-accent-text)" }}
              >
                <path d="M213.85,125.46l-112,120a8,8,0,0,1-13.69-7l14.66-73.33L45.19,143.49a8,8,0,0,1-3-13l112-120a8,8,0,0,1,13.69,7L153.18,90.9l57.63,21.61a8,8,0,0,1,3,12.95Z"></path>
              </svg>
              <span
                className="font-mono text-[11px] tracking-[0.2em] uppercase"
                style={{ color: "var(--v2-accent-text)" }}
              >
                Pro
              </span>
            </div>
            <ul className="m-0 p-0 list-none flex flex-col gap-2">
              <li
                className="flex items-start gap-2 text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  style={{
                    color: "var(--v2-accent-text)",
                    marginTop: "3px",
                    flexShrink: "0",
                  }}
                >
                  <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                </svg>
                500 deep analyses / month
              </li>
              <li
                className="flex items-start gap-2 text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  style={{
                    color: "var(--v2-accent-text)",
                    marginTop: "3px",
                    flexShrink: "0",
                  }}
                >
                  <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                </svg>
                2,000 chat messages / month
              </li>
              <li
                className="flex items-start gap-2 text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  style={{
                    color: "var(--v2-accent-text)",
                    marginTop: "3px",
                    flexShrink: "0",
                  }}
                >
                  <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                </svg>
                Priority agent execution
              </li>
              <li
                className="flex items-start gap-2 text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  style={{
                    color: "var(--v2-accent-text)",
                    marginTop: "3px",
                    flexShrink: "0",
                  }}
                >
                  <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                </svg>
                Premium signals access
              </li>
            </ul>
          </div>
        </div>
        <div
          className="mt-8 flex items-center gap-2 text-[12px]"
          style={{ color: "var(--v2-t-4)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
          </svg>
          <span>
            Need a wallet first?{" "}
            <a
              href="/application/portfolio"
              className="underline hover:opacity-80"
              style={{ color: "var(--v2-t-3)" }}
            >
              Set up your trading wallet
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
