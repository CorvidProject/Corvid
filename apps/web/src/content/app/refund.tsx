export function ApplicationRefundContent() {
  return (
    <>
      <canvas
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
        width="1365"
        height="770"
      ></canvas>
      <div className="relative z-10 mx-auto w-full max-w-[520px]">
        <h1
          className="font-heading font-extrabold tracking-[-0.04em] leading-none text-center"
          style={{ color: "#ffffff", fontSize: "clamp(2.4rem, 6vw, 4rem)" }}
        >
          Refund SOL
        </h1>
        <p
          className="text-center mt-3 mb-6 text-[15px]"
          style={{ color: "var(--v2-t-3)" }}
        >
          Every token you sold left an empty account holding about 0.002 SOL.
          Close them and take it back.
        </p>
        <div
          className="rounded-2xl p-5"
          style={{
            background: "rgba(26,32,37,0.92)",
            border: "1px solid var(--v2-line-1)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            className="text-[12px] uppercase tracking-[0.08em]"
            style={{ color: "var(--v2-t-4)" }}
          >
            Reclaimable
          </div>
          <div className="flex items-baseline gap-2 mt-1">
            <span
              className="num font-bold leading-none"
              style={{ fontSize: "44px", color: "var(--v2-t-2)" }}
            >
              0
            </span>
            <span
              className="text-[18px] font-semibold"
              style={{ color: "var(--v2-t-3)" }}
            >
              SOL
            </span>
          </div>
          <div className="text-[13px] mt-1" style={{ color: "var(--v2-t-4)" }}>
            Sign in to check your wallet, or check any address below.
          </div>
          <button className="crv-swap-cta w-full h-12 rounded-xl mt-4 text-[15px] font-semibold">
            Sign in to refund
          </button>
        </div>
        <form className="mt-3 flex gap-2">
          <div className="relative flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              viewBox="0 0 256 256"
              className="absolute left-3 top-1/2 -translate-y-1/2"
              style={{ color: "var(--v2-t-4)" }}
            >
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
            </svg>
            <input
              placeholder="Check any Solana wallet"
              className="w-full h-11 pl-9 pr-3 rounded-xl text-[13px] outline-none num"
              style={{
                background: "rgba(26,32,37,0.92)",
                border: "1px solid var(--v2-line-1)",
                color: "var(--v2-t-1)",
              }}
              value=""
            />
          </div>
          <button
            type="submit"
            className="h-11 px-4 rounded-xl text-[13px] font-semibold"
            style={{
              border: "1px solid var(--v2-line-1)",
              color: "var(--v2-t-2)",
              background: "rgba(26,32,37,0.92)",
            }}
          >
            Check
          </button>
        </form>
        <p
          className="text-center text-[12px] mt-3"
          style={{ color: "var(--v2-t-4)" }}
        >
          Free. Only empty accounts are closed; tokens you still hold are never
          touched.
        </p>
      </div>
    </>
  );
}
