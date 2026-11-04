export function ApplicationLeaderboardContent() {
  return (
    <>
      <div className="max-w-[1000px] mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <div>
            <h1
              className="text-[22px] font-semibold leading-tight"
              style={{ color: "var(--v2-t-1)" }}
            >
              PnL Leaderboard
            </h1>
            <p className="text-[13px]" style={{ color: "var(--v2-t-3)" }}>
              Tracked wallets by realized profit, last 30 days · updated 2d ago
            </p>
          </div>
        </div>
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "var(--v2-bg-1)",
            border: "1px solid var(--v2-line-1)",
          }}
        >
          <div
            className="hidden sm:grid grid-cols-[56px_1fr_120px_90px_90px] gap-3 px-4 h-10 items-center eyebrow"
            style={{ borderBottom: "1px solid var(--v2-line-1)" }}
          >
            <span>Rank</span>
            <span>Wallet</span>
            <span className="text-right">Realized PnL</span>
            <span className="text-right">Win rate</span>
            <span className="text-right">Closed</span>
          </div>
          <a
            className="grid grid-cols-[44px_1fr_auto] sm:grid-cols-[56px_1fr_120px_90px_90px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            href="/application/alpha/wallet/0x9f861dd584cfde90eb5dc1d34c385b49a2be0360"
          >
            <span
              className="num text-[14px] font-bold w-8 h-8 rounded-full flex items-center justify-center"
              style={{
                color: "rgb(20, 25, 29)",
                background: "rgb(245, 196, 81)",
              }}
            >
              1
            </span>
            <span className="min-w-0">
              <span className="flex items-center gap-2">
                <span
                  className="num text-[14px]"
                  style={{ color: "var(--v2-t-1)" }}
                >
                  0x9f8...e0360
                </span>
                <span
                  className="font-mono text-[10px] px-1.5 py-0.5 rounded"
                  style={{
                    color: "var(--v2-accent-text)",
                    background: "rgba(var(--v2-accent-rgb),0.12)",
                  }}
                >
                  Tier B
                </span>
              </span>
              <span
                className="block text-[12px] capitalize"
                style={{ color: "var(--v2-t-4)" }}
              >
                smart
              </span>
            </span>
            <span
              className="text-right num text-[14px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +17.72 SOL
            </span>
            <span
              className="hidden sm:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              49%
            </span>
            <span
              className="hidden sm:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              49
            </span>
          </a>
          <a
            className="grid grid-cols-[44px_1fr_auto] sm:grid-cols-[56px_1fr_120px_90px_90px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            href="/application/alpha/wallet/0x8b65363a01510490fba03cea97b14c73b7ee8f75"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[14px] font-bold w-8 h-8 rounded-full flex items-center justify-center"
              style={{
                color: "rgb(20, 25, 29)",
                background: "rgb(201, 209, 217)",
              }}
            >
              2
            </span>
            <span className="min-w-0">
              <span className="flex items-center gap-2">
                <span
                  className="num text-[14px]"
                  style={{ color: "var(--v2-t-1)" }}
                >
                  0x8b6...e8f75
                </span>
                <span
                  className="font-mono text-[10px] px-1.5 py-0.5 rounded"
                  style={{
                    color: "var(--v2-accent-text)",
                    background: "rgba(var(--v2-accent-rgb),0.12)",
                  }}
                >
                  Tier A
                </span>
              </span>
            </span>
            <span
              className="text-right num text-[14px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +13.97 SOL
            </span>
            <span
              className="hidden sm:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              44%
            </span>
            <span
              className="hidden sm:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              8
            </span>
          </a>
          <a
            className="grid grid-cols-[44px_1fr_auto] sm:grid-cols-[56px_1fr_120px_90px_90px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            href="/application/alpha/wallet/0xda215f40f590368d72bf13960e9ab9cc231ee12f"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[14px] font-bold w-8 h-8 rounded-full flex items-center justify-center"
              style={{
                color: "rgb(20, 25, 29)",
                background: "rgb(0, 52, 240)",
              }}
            >
              3
            </span>
            <span className="min-w-0">
              <span className="flex items-center gap-2">
                <span
                  className="num text-[14px]"
                  style={{ color: "var(--v2-t-1)" }}
                >
                  0xda2...ee12f
                </span>
                <span
                  className="font-mono text-[10px] px-1.5 py-0.5 rounded"
                  style={{
                    color: "var(--v2-accent-text)",
                    background: "rgba(var(--v2-accent-rgb),0.12)",
                  }}
                >
                  Tier A
                </span>
              </span>
            </span>
            <span
              className="text-right num text-[14px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +10.79 SOL
            </span>
            <span
              className="hidden sm:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              100%
            </span>
            <span
              className="hidden sm:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              5
            </span>
          </a>
          <a
            className="grid grid-cols-[44px_1fr_auto] sm:grid-cols-[56px_1fr_120px_90px_90px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            href="/application/alpha/wallet/0x71cee8571bd349571bcebb47a4bff57a427dd72c"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[14px] font-bold w-8 h-8 rounded-full flex items-center justify-center"
              style={{ color: "var(--v2-t-4)" }}
            >
              4
            </span>
            <span className="min-w-0">
              <span className="flex items-center gap-2">
                <span
                  className="num text-[14px]"
                  style={{ color: "var(--v2-t-1)" }}
                >
                  0x71c...dd72c
                </span>
                <span
                  className="font-mono text-[10px] px-1.5 py-0.5 rounded"
                  style={{
                    color: "var(--v2-accent-text)",
                    background: "rgba(var(--v2-accent-rgb),0.12)",
                  }}
                >
                  Tier A
                </span>
              </span>
              <span
                className="block text-[12px] capitalize"
                style={{ color: "var(--v2-t-4)" }}
              >
                smart
              </span>
            </span>
            <span
              className="text-right num text-[14px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +7.50 SOL
            </span>
            <span
              className="hidden sm:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              80%
            </span>
            <span
              className="hidden sm:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              10
            </span>
          </a>
          <a
            className="grid grid-cols-[44px_1fr_auto] sm:grid-cols-[56px_1fr_120px_90px_90px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            href="/application/alpha/wallet/0x3a4d8d4c346aac1b911521b6683e62bf6167f598"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[14px] font-bold w-8 h-8 rounded-full flex items-center justify-center"
              style={{ color: "var(--v2-t-4)" }}
            >
              5
            </span>
            <span className="min-w-0">
              <span className="flex items-center gap-2">
                <span
                  className="num text-[14px]"
                  style={{ color: "var(--v2-t-1)" }}
                >
                  0x3a4...7f598
                </span>
                <span
                  className="font-mono text-[10px] px-1.5 py-0.5 rounded"
                  style={{
                    color: "var(--v2-accent-text)",
                    background: "rgba(var(--v2-accent-rgb),0.12)",
                  }}
                >
                  Tier A
                </span>
              </span>
            </span>
            <span
              className="text-right num text-[14px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +5.72 SOL
            </span>
            <span
              className="hidden sm:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              66%
            </span>
            <span
              className="hidden sm:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              32
            </span>
          </a>
          <a
            className="grid grid-cols-[44px_1fr_auto] sm:grid-cols-[56px_1fr_120px_90px_90px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            href="/application/alpha/wallet/0x4823adf49b282415061585c2e17ff31775e65950"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[14px] font-bold w-8 h-8 rounded-full flex items-center justify-center"
              style={{ color: "var(--v2-t-4)" }}
            >
              6
            </span>
            <span className="min-w-0">
              <span className="flex items-center gap-2">
                <span
                  className="num text-[14px]"
                  style={{ color: "var(--v2-t-1)" }}
                >
                  0x482...65950
                </span>
                <span
                  className="font-mono text-[10px] px-1.5 py-0.5 rounded"
                  style={{
                    color: "var(--v2-accent-text)",
                    background: "rgba(var(--v2-accent-rgb),0.12)",
                  }}
                >
                  Tier A
                </span>
              </span>
              <span
                className="block text-[12px] capitalize"
                style={{ color: "var(--v2-t-4)" }}
              >
                smart
              </span>
            </span>
            <span
              className="text-right num text-[14px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +5.67 SOL
            </span>
            <span
              className="hidden sm:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              69%
            </span>
            <span
              className="hidden sm:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              13
            </span>
          </a>
          <a
            className="grid grid-cols-[44px_1fr_auto] sm:grid-cols-[56px_1fr_120px_90px_90px] gap-3 px-4 py-3 items-center transition-colors hover:bg-[var(--v2-bg-2)]"
            href="/application/alpha/wallet/0x59c26d4ae5b89a5b5844011fee22dd41c0a50cfa"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[14px] font-bold w-8 h-8 rounded-full flex items-center justify-center"
              style={{ color: "var(--v2-t-4)" }}
            >
              7
            </span>
            <span className="min-w-0">
              <span className="flex items-center gap-2">
                <span
                  className="num text-[14px]"
                  style={{ color: "var(--v2-t-1)" }}
                >
                  0x59c...50cfa
                </span>
                <span
                  className="font-mono text-[10px] px-1.5 py-0.5 rounded"
                  style={{
                    color: "var(--v2-accent-text)",
                    background: "rgba(var(--v2-accent-rgb),0.12)",
                  }}
                >
                  Tier B
                </span>
              </span>
            </span>
            <span
              className="text-right num text-[14px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +1.77 SOL
            </span>
            <span
              className="hidden sm:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              52%
            </span>
            <span
              className="hidden sm:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              52
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
