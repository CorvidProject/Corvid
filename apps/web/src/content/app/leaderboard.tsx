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
            href="/application/alpha/wallet/JCuvKvqT5kz2KDPDtHmwWPpDdF11MMyMt2DD7DNHVAfi"
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
                  JCuv...VAfi
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
            href="/application/alpha/wallet/EpMooWca3h6mB1gL2YC8SKkLB19H14JcVWxHuXAn7VSy"
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
                  EpMo...7VSy
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
            href="/application/alpha/wallet/Ey5XBPrVTj6aixNGSDcd5DcAemGj4Yy1Apr2CHwMhsKR"
            style={{ borderTop: "1px solid var(--v2-line-1)" }}
          >
            <span
              className="num text-[14px] font-bold w-8 h-8 rounded-full flex items-center justify-center"
              style={{
                color: "#ffffff",
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
                  Ey5X...hsKR
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
            href="/application/alpha/wallet/VFB7KktqFhR6mfea8ogbRt7dhcgeHr7rToDfLfkiGLjb"
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
                  VFB7...GLjb
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
            href="/application/alpha/wallet/phEMQYe2FR1ixbeugm5WRy2VxkBxcXnGvvuw8rKmKE8r"
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
                  phEM...KE8r
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
            href="/application/alpha/wallet/kMcZYuarYRbVMCpTpEAfFk3zbMoYa1uZPYRUDGujwtas"
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
                  kMcZ...wtas
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
            href="/application/alpha/wallet/r1apWbFcLqjrUh37Z7NU9pzoby1wrHgQ5B6vmyQLhTGq"
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
                  r1ap...hTGq
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
