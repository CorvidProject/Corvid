export function ApplicationVolumeContent() {
  return (
    <>
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <div className="min-w-0">
            <h1
              className="text-[22px] font-semibold leading-tight"
              style={{ color: "var(--v2-t-1)" }}
            >
              High Volume
            </h1>
            <p className="text-[13px]" style={{ color: "var(--v2-t-3)" }}>
              Most traded in 24 hours · Solana
            </p>
          </div>
          <span
            className="ml-auto flex items-center gap-1.5 eyebrow"
            style={{ color: "var(--v2-pos)" }}
          >
            <span className="dot dot-pos dot-pulse"></span> LIVE
          </span>
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
              href="/application/tokens/jM9r9PJFyPaMEbhGZPbDeZJiysn2pfyz5TzdDs5pump?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/J-lAvZgWkhX1Jqw3?width=800&height=800&quality=95&format=auto"
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
                    uni
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  uni
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.010133
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -60.62%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.010133
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.05%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -60.62%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $10.16M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $265.60K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $7.63M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $uni"
                aria-label="Deploy an agent on $uni"
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
                href="/application/swap?mint=jM9r9PJFyPaMEbhGZPbDeZJiysn2pfyz5TzdDs5pump&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/8s4bNqEztH1JP7mkU747uMr7AckCQdiV47FDqYnDpump?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/Zk6dEjByl_6wfO5d?width=800&height=800&quality=95&format=auto"
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
                    ANAKIN
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  ANAKIN
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.003023
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +5818.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.003023
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +9.73%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +5818.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.02M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $152.95K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $4.27M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $ANAKIN"
                aria-label="Deploy an agent on $ANAKIN"
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
                href="/application/swap?mint=8s4bNqEztH1JP7mkU747uMr7AckCQdiV47FDqYnDpump&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/762ZqBCd5m2q3QJ5UPkFL5rqdEUeygNkfTZrpGEZpump?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/orbtChFd_f47QHon?width=800&height=800&quality=95&format=auto"
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
                    PAWCAT
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  PAWCAT
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
                -99.92%
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
              +8.03%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -99.92%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.62K
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
              $3.65M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              2d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $PAWCAT"
                aria-label="Deploy an agent on $PAWCAT"
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
                href="/application/swap?mint=762ZqBCd5m2q3QJ5UPkFL5rqdEUeygNkfTZrpGEZpump&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/98sMhvDwXj1RQi5c5Mndm3vPe9cBqPrbLaufMXFNMh5g?chain=solana"
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
                HY
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    HYPE
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  HYPE
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $87.93
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +0.45%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $87.93
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.52%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.45%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $63.79M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $570.62K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.53M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              373d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $HYPE"
                aria-label="Deploy an agent on $HYPE"
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
                href="/application/swap?mint=98sMhvDwXj1RQi5c5Mndm3vPe9cBqPrbLaufMXFNMh5g&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/a0d07b12d0c34be414b8ac98a827ff862cfd684554c8da4c63fa647eef0af501?width=800&height=800&quality=95&format=auto"
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
                    PUMP
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  PUMP
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.004249
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -0.27%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.004249
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.01%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.27%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.95B
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.39M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.20M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              11d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $PUMP"
                aria-label="Deploy an agent on $PUMP"
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
                href="/application/swap?mint=pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/ExxzYBTt3jwU5MUxuw2F4toYbTLdFwThSjyaCn6Xpump?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/tcNNtgqabCEqyXgM?width=800&height=800&quality=95&format=auto"
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
                    Anakin
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  Anakin
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.002947
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +319.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.002947
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -3.88%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +319.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.79M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $166.29K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.19M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              4d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $Anakin"
                aria-label="Deploy an agent on $Anakin"
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
                href="/application/swap?mint=ExxzYBTt3jwU5MUxuw2F4toYbTLdFwThSjyaCn6Xpump&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/A7bdiYdS5GjqGFtxf17ppRHtDKPkkRqbKtR27dxvQXaS?chain=solana"
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
                ZE
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    ZEC
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  ZEC
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $1.27K
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +2.35%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $1.27K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +1.19%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +2.35%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $31.38K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $4.05M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.89M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              50d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $ZEC"
                aria-label="Deploy an agent on $ZEC"
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
                href="/application/swap?mint=A7bdiYdS5GjqGFtxf17ppRHtDKPkkRqbKtR27dxvQXaS&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/KMNo3nJsBXfcpJTVhZcXLW7RmTwTt4GVFE7suUBo9sS?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/b3b9a0026bec75db0e4ecb6e023901a812dad85d3ffa1d2ec8b3a53ca498da31?width=800&height=800&quality=95&format=auto"
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
                    KMNO
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  KMNO
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.032195
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -0.20%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.032195
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.39%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.20%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $192.17M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.90M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.84M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              754d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $KMNO"
                aria-label="Deploy an agent on $KMNO"
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
                href="/application/swap?mint=KMNo3nJsBXfcpJTVhZcXLW7RmTwTt4GVFE7suUBo9sS&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/4AWLQqBBZxDYNJ872F9CP4t6kWF8RZ5nNuGknV6Zpump?chain=solana"
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
                AO
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    AODF
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  AODF
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.019133
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -91.44%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.019133
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +3.58%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -91.44%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $19.24M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $358.52K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.83M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              2d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $AODF"
                aria-label="Deploy an agent on $AODF"
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
                href="/application/swap?mint=4AWLQqBBZxDYNJ872F9CP4t6kWF8RZ5nNuGknV6Zpump&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/14LCiSb7CKDjvxcsbLfzyAA4EobVJwSBLNNzEuGUP8w8?chain=solana"
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
                ST
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    STEALTH
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  STEALTH
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
                style={{ color: "var(--v2-pos)" }}
              >
                +102.00%
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
              style={{ color: "var(--v2-pos)" }}
            >
              +103.45%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +102.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $105.08K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $152.25K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.11M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $STEALTH"
                aria-label="Deploy an agent on $STEALTH"
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
                href="/application/swap?mint=14LCiSb7CKDjvxcsbLfzyAA4EobVJwSBLNNzEuGUP8w8&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/Dbyy9LSMVHjxw2ZnPPRrCheSLVeuHq2GMkpxUs3t5xeT?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/-5iq-otW4LTPq3lc?width=800&height=800&quality=95&format=auto"
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
                    REGRETAMINE
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  REGRETAMINE
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₄71
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +88.22%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₄71
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -1.37%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +88.22%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $69.71K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $23.01K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.03M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              2d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $REGRETAMINE"
                aria-label="Deploy an agent on $REGRETAMINE"
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
                href="/application/swap?mint=Dbyy9LSMVHjxw2ZnPPRrCheSLVeuHq2GMkpxUs3t5xeT&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/CARDSccUMFKoPRZxt5vt3ksUbxEFEcnZ3H2pd3dKxYjp?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/3277f5f414a940e7d009f9cbc9147c6ab25eae6a6cda10e682319f7b6394e328?width=800&height=800&quality=95&format=auto"
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
                    CARDS
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  CARDS
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.210673
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -13.05%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.210673
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -3.73%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -13.05%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $187.97M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.45M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.01M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              430d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $CARDS"
                aria-label="Deploy an agent on $CARDS"
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
                href="/application/swap?mint=CARDSccUMFKoPRZxt5vt3ksUbxEFEcnZ3H2pd3dKxYjp&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb?chain=solana"
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
                SP
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    SPCX
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  SPCX
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $137.83
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +1.07%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $137.83
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.44%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +1.07%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $0
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.62M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.01M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              144d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $SPCX"
                aria-label="Deploy an agent on $SPCX"
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
                href="/application/swap?mint=SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/D4BPL1zvhhJbxUdgi2qVUtjx4jeQWyUr2PAUjKc9rN5x?chain=solana"
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
                MU
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    MUSK
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  MUSK
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $1.56
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
              $1.56
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.02%
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
              $330.19M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $134.57K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.90M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              310d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $MUSK"
                aria-label="Deploy an agent on $MUSK"
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
                href="/application/swap?mint=D4BPL1zvhhJbxUdgi2qVUtjx4jeQWyUr2PAUjKc9rN5x&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/6pGyajBJsvKWLvgDZPNebH5uZcHXc7hVQAJ3y1uuVXNd?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/dBghRkIG02iRCNM9?width=800&height=800&quality=95&format=auto"
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
                    uni
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  uni
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₄26
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -33.83%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₄26
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +19.60%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -33.83%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $25.03K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $13.26K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.89M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $uni"
                aria-label="Deploy an agent on $uni"
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
                href="/application/swap?mint=6pGyajBJsvKWLvgDZPNebH5uZcHXc7hVQAJ3y1uuVXNd&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/DJTu7vi8norVzdVAffgvb39VP7wjKeTsgaMBJrzfxvoF?chain=solana"
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
                DJ
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    DJT
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  DJT
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $5.68
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +0.89%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $5.68
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.15%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.89%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $109.86K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $397.13K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.85M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              54d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $DJT"
                aria-label="Deploy an agent on $DJT"
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
                href="/application/swap?mint=DJTu7vi8norVzdVAffgvb39VP7wjKeTsgaMBJrzfxvoF&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/npz2FhoufQ7pKqhGpaipYWacrAkidyW2yDpVWSvpump?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/HmECRYytNn0hGid_?width=800&height=800&quality=95&format=auto"
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
                    DESSA
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  DESSA
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.015016
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -42.96%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.015016
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -7.63%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -42.96%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $14.69M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $358.07K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.84M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              8d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $DESSA"
                aria-label="Deploy an agent on $DESSA"
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
                href="/application/swap?mint=npz2FhoufQ7pKqhGpaipYWacrAkidyW2yDpVWSvpump&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/FdKdpz11GsTofLaNiddrhxrsE4APZYSSfLFqQ9YKpump?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/_5-pfDCkuSKh0bIC?width=800&height=800&quality=95&format=auto"
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
                    SIS
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  SIS
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₅9
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -98.84%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₅9
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -6.53%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -98.84%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $8.41K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $7.26K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.83M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              2d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $SIS"
                aria-label="Deploy an agent on $SIS"
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
                href="/application/swap?mint=FdKdpz11GsTofLaNiddrhxrsE4APZYSSfLFqQ9YKpump&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA?chain=solana"
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
                EU
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    EUROP
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  EUROP
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $1.10
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +0.08%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $1.10
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.02%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.08%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $16.46M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.16M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.82M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              63d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $EUROP"
                aria-label="Deploy an agent on $EUROP"
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
                href="/application/swap?mint=euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/GoDSW31bTxfkoup9yA1qcGGx9RMXdTEWgApv3xzBmoA?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/WgIWKD4nq1lJjxYB?width=800&height=800&quality=95&format=auto"
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
                    STEALTH
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  STEALTH
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.000418
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +945.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.000418
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +81.57%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +945.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $402.90K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $56.54K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.72M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $STEALTH"
                aria-label="Deploy an agent on $STEALTH"
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
                href="/application/swap?mint=GoDSW31bTxfkoup9yA1qcGGx9RMXdTEWgApv3xzBmoA&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/CvRJ8MrnB1AwjrgX25uyeLJiXNSugTo2ZHh8UXDTpump?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/pNxd1YDkfo9jVIoX?width=800&height=800&quality=95&format=auto"
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
                    ANSEM
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  ANSEM
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.000255
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -14.23%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.000255
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -7.85%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -14.23%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $249.84K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $46.42K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.71M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              3d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $ANSEM"
                aria-label="Deploy an agent on $ANSEM"
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
                href="/application/swap?mint=CvRJ8MrnB1AwjrgX25uyeLJiXNSugTo2ZHh8UXDTpump&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3?chain=solana"
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
                SK
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    SKHY
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  SKHY
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $156.32
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +4.86%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $156.32
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +1.06%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +4.86%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.71K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.56M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.70M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              115d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $SKHY"
                aria-label="Deploy an agent on $SKHY"
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
                href="/application/swap?mint=SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/93VGqXL76voGxc43apJTDJoKkqnxTht1BKWoEmUypump?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/xIZSwvfNUyZthlS-?width=800&height=800&quality=95&format=auto"
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
                    PI
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  PI
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.000166
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +334.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.000166
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +6.58%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +334.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $160.87K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $35.23K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.69M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $PI"
                aria-label="Deploy an agent on $PI"
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
                href="/application/swap?mint=93VGqXL76voGxc43apJTDJoKkqnxTht1BKWoEmUypump&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/HsprHxBRgiVaQdRf3TnKNuZZtaX9JUSPgMFdAkk6pump?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/-8CCNt5h1g4Fnvqj?width=800&height=800&quality=95&format=auto"
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
                    GATO
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  GATO
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.009781
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +60.99%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.009781
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +6.80%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +60.99%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $9.69M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $316.28K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.68M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              70d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $GATO"
                aria-label="Deploy an agent on $GATO"
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
                href="/application/swap?mint=HsprHxBRgiVaQdRf3TnKNuZZtaX9JUSPgMFdAkk6pump&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/4kjruqGHDsSqkMdFfCjV7Vb62HPFhtXyWc2t6JpQzDnz?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/lwZpiYOTcTq51oKH?width=800&height=800&quality=95&format=auto"
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
                    GTA6
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  GTA6
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.012819
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +27.67%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.012819
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +4.89%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +27.67%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $13.00M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $162.36K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.66M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              67d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $GTA6"
                aria-label="Deploy an agent on $GTA6"
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
                href="/application/swap?mint=4kjruqGHDsSqkMdFfCjV7Vb62HPFhtXyWc2t6JpQzDnz&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/nxPqZ4F7ux8Vph5NFu25rEP6Kx9Gr1U6Fmj36Rjpump?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/J9vFU4NzZG9CNbM5?width=800&height=800&quality=95&format=auto"
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
                    Dacity
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  Dacity
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.007936
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -8.31%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.007936
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -1.18%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -8.31%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $7.75M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $381.53K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.57M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              23d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $Dacity"
                aria-label="Deploy an agent on $Dacity"
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
                href="/application/swap?mint=nxPqZ4F7ux8Vph5NFu25rEP6Kx9Gr1U6Fmj36Rjpump&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/CPoGSmcjprCvzA2MFYLJMpQkGjmgVzKg4RVwMdrzpump?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/e9egfkS1HBqj_-06?width=800&height=800&quality=95&format=auto"
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
                    BLUE
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  BLUE
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.000103
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -71.30%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.000103
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -2.18%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -71.30%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $98.85K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $28.91K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.50M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              2d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $BLUE"
                aria-label="Deploy an agent on $BLUE"
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
                href="/application/swap?mint=CPoGSmcjprCvzA2MFYLJMpQkGjmgVzKg4RVwMdrzpump&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/METAewgxyPbgwsseH8T16a39CQ5VyVxZi9zXiDPY18m?chain=solana"
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
                MP
              </div>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold truncate"
                    style={{ color: "var(--v2-t-1)" }}
                  >
                    MPLX
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  MPLX
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.07342
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +0.46%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.07342
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +2.46%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.46%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $34.86M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $946.75K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.46M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              378d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $MPLX"
                aria-label="Deploy an agent on $MPLX"
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
                href="/application/swap?mint=METAewgxyPbgwsseH8T16a39CQ5VyVxZi9zXiDPY18m&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/CWZ6BsdnjkDVTGkmL6bGbJXXig6ceef12KvyGQW14cMt?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/oQXx0tMOagTpnNjt?width=800&height=800&quality=95&format=auto"
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
                    ANTFUN
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  ANTFUN
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.017778
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +3.08%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.017778
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.98%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +3.08%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $33.57M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $17.67M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.39M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              116d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $ANTFUN"
                aria-label="Deploy an agent on $ANTFUN"
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
                href="/application/swap?mint=CWZ6BsdnjkDVTGkmL6bGbJXXig6ceef12KvyGQW14cMt&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/EJAxERvKU4kEVXn3NarjvRtgaMaJyP9ZuMeKA7JJpump?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/mzA62X_uenf4s4Df?width=800&height=800&quality=95&format=auto"
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
                    CHOO
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  CHOO
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.001884
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +104.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.001884
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -3.37%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +104.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.86M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $132.66K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.34M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              12d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $CHOO"
                aria-label="Deploy an agent on $CHOO"
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
                href="/application/swap?mint=EJAxERvKU4kEVXn3NarjvRtgaMaJyP9ZuMeKA7JJpump&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/654ec0cee3ecf3fd5d55c56302d82300ee114ee1ff91e52897798b486993f6c8?width=800&height=800&quality=95&format=auto"
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
                    RAY
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  RAY
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $1.63
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -0.05%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $1.63
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.76%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -0.05%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $439.96M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.05M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.31M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              999d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $RAY"
                aria-label="Deploy an agent on $RAY"
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
                href="/application/swap?mint=4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/3kRQDKPGqMWwBdGjiVPpPqVzFsnYG5PDqvrVz1D2pump?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/0xwNc5Wag6YRs0WW?width=800&height=800&quality=95&format=auto"
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
                    tipr
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  tipr
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.001128
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +1232.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.001128
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +9082.61%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +1232.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.08M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $523.63K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.30M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              2d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $tipr"
                aria-label="Deploy an agent on $tipr"
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
                href="/application/swap?mint=3kRQDKPGqMWwBdGjiVPpPqVzFsnYG5PDqvrVz1D2pump&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/HNxyGpz8AkLqmfBBKMzmugkPE5Bahj2bGPPTNgWGpump?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/2kvF2A6vaiXO7tqX?width=800&height=800&quality=95&format=auto"
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
                    AI
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  AI
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₄14
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -61.23%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₄14
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +3.44%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -61.23%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $13.46K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $8.78K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.22M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              1d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $AI"
                aria-label="Deploy an agent on $AI"
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
                href="/application/swap?mint=HNxyGpz8AkLqmfBBKMzmugkPE5Bahj2bGPPTNgWGpump&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/85a2613c51c8ded8e51b1b3910487ab66691cb60fecec7d0905481a603bba899?width=800&height=800&quality=95&format=auto"
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
                $1.75
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +9.38%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $1.75
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +1.16%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +9.38%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $487.51M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $220.35K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.13M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              654d ago
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
                href="/application/swap?mint=6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/8pjfN5Ayb4rucGpYE3tZWN6v3EysizjPx1v62zx1pump?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/7QMRqlO7WeS5MyOV?width=800&height=800&quality=95&format=auto"
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
                    KIM
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  KIM
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.000104
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -62.72%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.000104
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +3.41%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -62.72%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $103.95K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $32.47K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.11M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              2d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $KIM"
                aria-label="Deploy an agent on $KIM"
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
                href="/application/swap?mint=8pjfN5Ayb4rucGpYE3tZWN6v3EysizjPx1v62zx1pump&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/qhbbjGBKJxW3AZGqngWM5tHcrENR3pVoRB9MCf1pump?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/xmRNLXLbxYP96gaR?width=800&height=800&quality=95&format=auto"
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
                    Kim
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  Kim
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.000182
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +185.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.000182
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -2.13%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +185.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $177.06K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $41.38K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.05M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              4d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $Kim"
                aria-label="Deploy an agent on $Kim"
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
                href="/application/swap?mint=qhbbjGBKJxW3AZGqngWM5tHcrENR3pVoRB9MCf1pump&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/FWatMYieKhRuJ1yuTcmVG1njRhZWwqHwjR11pBympump?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/qXUaaXTEwOsl-xed?width=800&height=800&quality=95&format=auto"
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
                    Leverhedge
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  Leverhedge
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.000871
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -5.43%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.000871
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -2.47%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -5.43%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $858.15K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $82.15K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.01M
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              3d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $Leverhedge"
                aria-label="Deploy an agent on $Leverhedge"
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
                href="/application/swap?mint=FWatMYieKhRuJ1yuTcmVG1njRhZWwqHwjR11pBympump&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/G7vQWurMkMMm2dU3iZpXYFTHT9Biio4F4gZCrwFpKNwG?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/634081eec8ea5f649b6b8454c58682e840735bf9516d6bc13f7e9a11499f1400?width=800&height=800&quality=95&format=auto"
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
                    BIRB
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  BIRB
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.082515
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +3.23%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.082515
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.99%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +3.23%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $23.42M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $799.20K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $994.88K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              279d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $BIRB"
                aria-label="Deploy an agent on $BIRB"
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
                href="/application/swap?mint=G7vQWurMkMMm2dU3iZpXYFTHT9Biio4F4gZCrwFpKNwG&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/APLPiTjBWzwfZ5U1TBeqLF9XJ7dV7XKGe7j4BZhkDray?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/9Q-pX5iQ4-yAbN_o?width=800&height=800&quality=95&format=auto"
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
                    PEAK
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  PEAK
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.001358
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +243.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.001358
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +8.40%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +243.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.38M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $109.84K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $982.30K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              7d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $PEAK"
                aria-label="Deploy an agent on $PEAK"
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
                href="/application/swap?mint=APLPiTjBWzwfZ5U1TBeqLF9XJ7dV7XKGe7j4BZhkDray&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/Dz9mQ9NzkBcCsuGPFJ3r1bS4wgqKMHBPiVuniW8Mbonk?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/4f8af59f26d45252fb4379d4b1a1e61d0b419fd34dab2ec9f3ba77585d1783cb?width=800&height=800&quality=95&format=auto"
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
                    USELESS
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  USELESS
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.130549
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +0.74%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.130549
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.63%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.74%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $128.73M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $3.58M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $973.92K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              542d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $USELESS"
                aria-label="Deploy an agent on $USELESS"
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
                href="/application/swap?mint=Dz9mQ9NzkBcCsuGPFJ3r1bS4wgqKMHBPiVuniW8Mbonk&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/6QUHcqYuiPRHxhnYZoygewXtNQr9kUrhc9Tmwgtbpump?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/NyF80jZDYsbdm_Xf?width=800&height=800&quality=95&format=auto"
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
                    RAM
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  RAM
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.000131
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +360.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.000131
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +5.42%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +360.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $126.04K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $31.65K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $961.97K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              3d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $RAM"
                aria-label="Deploy an agent on $RAM"
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
                href="/application/swap?mint=6QUHcqYuiPRHxhnYZoygewXtNQr9kUrhc9Tmwgtbpump&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/6GmAFSYs4gk3FDao5FzzySQpPZaWsa4rUJHacpMpUNgx?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/bJ1wrZe7IYIknT9a?width=800&height=800&quality=95&format=auto"
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
                    STONK
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  STONK
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.126308
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -2.08%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.126308
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.58%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -2.08%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $98.38M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.53M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $961.44K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              83d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $STONK"
                aria-label="Deploy an agent on $STONK"
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
                href="/application/swap?mint=6GmAFSYs4gk3FDao5FzzySQpPZaWsa4rUJHacpMpUNgx&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/DKYcjobF7HPtL9RyQBRdeRQ2iWvizpfbgWwPWNXdpump?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/EeFgwNnTiEIktyct?width=800&height=800&quality=95&format=auto"
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
                    DacityCoin
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  DacityCoin
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.001195
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +94.86%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.001195
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +13.08%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +94.86%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.15M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $129.25K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $945.77K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              19d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $DacityCoin"
                aria-label="Deploy an agent on $DacityCoin"
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
                href="/application/swap?mint=DKYcjobF7HPtL9RyQBRdeRQ2iWvizpfbgWwPWNXdpump&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/wMHBD2B8KbDagvXUEapginhtJdrH4QSvSezBM8Tpump?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/US6CpluFuWt8sjTD?width=800&height=800&quality=95&format=auto"
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
                    ANTS
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  ANTS
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.002532
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +81.86%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.002532
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -11.82%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +81.86%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $2.50M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $135.00K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $939.76K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              3d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $ANTS"
                aria-label="Deploy an agent on $ANTS"
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
                href="/application/swap?mint=wMHBD2B8KbDagvXUEapginhtJdrH4QSvSezBM8Tpump&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/FjPKUGnF5zBpdEv18gT8FJCtxh3MKrFkoeYekgYr1win?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/TnRgOJHMjT2jYp5f?width=800&height=800&quality=95&format=auto"
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
                    1WIN
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  1WIN
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.059252
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +15.87%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.059252
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -1.57%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +15.87%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $15.90M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $164.15K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $901.86K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              3d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $1WIN"
                aria-label="Deploy an agent on $1WIN"
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
                href="/application/swap?mint=FjPKUGnF5zBpdEv18gT8FJCtxh3MKrFkoeYekgYr1win&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/6jFcYpa95qnzX3Kui4TTyPCEzQorHRCHXhoCAg5tpump?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/Iwf7qSfie_TGF613?width=800&height=800&quality=95&format=auto"
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
                    白いヤク
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  白いヤク
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.0₄34
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -11.87%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.0₄34
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -9.48%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -11.87%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $32.71K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $14.25K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $783.21K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              2d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $白いヤク"
                aria-label="Deploy an agent on $白いヤク"
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
                href="/application/swap?mint=6jFcYpa95qnzX3Kui4TTyPCEzQorHRCHXhoCAg5tpump&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/7ttfwuBSnbNTgf32gUAT7v9bjdDWsn6pYpp7nmGmpump?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/3nqDAJqjFmylM2Of?width=800&height=800&quality=95&format=auto"
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
                    FOCO
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  FOCO
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.000441
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -34.76%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.000441
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +0.67%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -34.76%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $442.76K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $64.91K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $746.27K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              10d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $FOCO"
                aria-label="Deploy an agent on $FOCO"
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
                href="/application/swap?mint=7ttfwuBSnbNTgf32gUAT7v9bjdDWsn6pYpp7nmGmpump&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/Bv1a7cEj5aRnJQhMw4kRQqAFesMSd5LwcDnUzq52BMmr?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/GcjeczTah2v57O9h?width=800&height=800&quality=95&format=auto"
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
                    FLOAT
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  FLOAT
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.001627
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +175.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.001627
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-neg)" }}
            >
              -7.82%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +175.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $1.63M
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $254.11K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $742.91K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              5d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $FLOAT"
                aria-label="Deploy an agent on $FLOAT"
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
                href="/application/swap?mint=Bv1a7cEj5aRnJQhMw4kRQqAFesMSd5LwcDnUzq52BMmr&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/GexThZHgaswpAQ7Fi8QrHFubjPimUNSYhJiAA7XZpump?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/eyoaU-MPZ9AFW1cY?width=800&height=800&quality=95&format=auto"
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
                    WASTED
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  WASTED
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.000737
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-pos)" }}
              >
                +414.00%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.000737
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +24.45%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-pos)" }}
            >
              +414.00%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $732.24K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $80.11K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $732.09K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              3d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $WASTED"
                aria-label="Deploy an agent on $WASTED"
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
                href="/application/swap?mint=GexThZHgaswpAQ7Fi8QrHFubjPimUNSYhJiAA7XZpump&chain=solana"
                style={{
                  color: "#ffffff",
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
              href="/application/tokens/Fp4JkqEcKYKBKhb9iMu9NSDeo71HWgq2q9QtXaaKpump?chain=solana"
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
                src="https://cdn.dexscreener.com/cms/images/Yr7Gf_TzVVbroMC3?width=800&height=800&quality=95&format=auto"
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
                    paws
                  </span>
                </span>
                <span
                  className="block text-[12px] truncate"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  paws
                </span>
              </span>
            </a>
            <span className="md:hidden text-right">
              <span
                className="block num text-[13px]"
                style={{ color: "var(--v2-t-1)" }}
              >
                $0.000317
              </span>
              <span
                className="block num text-[12px]"
                style={{ color: "var(--v2-neg)" }}
              >
                -54.97%
              </span>
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-1)" }}
            >
              $0.000317
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-pos)" }}
            >
              +1.83%
            </span>
            <span
              className="hidden md:block text-right num text-[13px] font-semibold"
              style={{ color: "var(--v2-neg)" }}
            >
              -54.97%
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $306.51K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $56.44K
            </span>
            <span
              className="hidden md:block text-right num text-[13px]"
              style={{ color: "var(--v2-t-2)" }}
            >
              $665.55K
            </span>
            <span
              className="hidden md:block text-right num text-[12px]"
              style={{ color: "var(--v2-t-3)" }}
            >
              7d ago
            </span>
            <span className="hidden md:flex justify-end gap-1.5 items-center">
              <button
                title="Deploy an agent on $paws"
                aria-label="Deploy an agent on $paws"
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
                href="/application/swap?mint=Fp4JkqEcKYKBKhb9iMu9NSDeo71HWgq2q9QtXaaKpump&chain=solana"
                style={{
                  color: "#ffffff",
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
