export function BuiltOn() {
  return (
    <>
      <section
        className="relative overflow-hidden"
        style={{ background: "#14191d" }}
      >
        <div
          className="flex items-center justify-between px-6 lg:px-16 py-5"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
        >
          <span
            className="font-mono font-semibold text-[12px] tracking-[0.12em] uppercase"
            style={{ color: "rgba(255,255,255,0.92)" }}
          >
            [ BUILT ON ]
          </span>
          <span
            className="font-mono font-medium text-[12px] tracking-[0.12em] uppercase"
            style={{ color: "rgba(255,255,255,0.70)" }}
          >
            10 INTEGRATIONS
          </span>
        </div>
        <div
          className="grid grid-cols-2 lg:grid-cols-5"
          style={{ background: "#14191d" }}
        >
          <a
            href="https://solana.com"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Solana (opens in new tab)"
            className="integration-cell group relative flex flex-col items-center justify-center gap-3 py-10 px-4 cursor-pointer"
            data-reveal
            style={{
              background: "#14191d",
              borderRight: "1px solid rgba(255,255,255,0.07)",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div
              className="absolute top-0 left-6 right-6 h-px pointer-events-none"
              data-reveal
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--v2-accent) 50%, transparent)",
                transition: "opacity 0.25s ease",
              }}
            ></div>
            <img
              alt="Solana"
              loading="lazy"
              width="256"
              height="256"
              decoding="async"
              data-nimg="1"
              className="integration-logo"
              style={{
                color: "transparent",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                objectFit: "cover",
                filter: "grayscale(1)",
                opacity: "0.8",
                transition: "opacity 0.25s ease, filter 0.25s ease",
              }}
              srcSet="/shared/solana.png 1x, /shared/solana.png 2x"
              src="/shared/solana.png"
            />
            <span
              className="integration-name font-mono font-medium text-[11px] tracking-[0.14em] uppercase"
              style={{
                color: "rgba(255,255,255,0.78)",
                transition: "color 0.25s ease",
              }}
            >
              Solana
            </span>
          </a>
          <a
            href="https://ethereum.org"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Ethereum (opens in new tab)"
            className="integration-cell group relative flex flex-col items-center justify-center gap-3 py-10 px-4 cursor-pointer"
            data-reveal
            style={{
              background: "#14191d",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div
              className="absolute top-0 left-6 right-6 h-px pointer-events-none"
              data-reveal
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--v2-accent) 50%, transparent)",
                transition: "opacity 0.25s ease",
              }}
            ></div>
            <img
              alt="Ethereum"
              loading="lazy"
              width="192"
              height="192"
              decoding="async"
              data-nimg="1"
              className="integration-logo"
              style={{
                color: "transparent",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                objectFit: "cover",
                filter: "grayscale(1)",
                opacity: "0.8",
                transition: "opacity 0.25s ease, filter 0.25s ease",
              }}
              srcSet="/chains/ethereum.png 1x, /chains/ethereum.png 2x"
              src="/chains/ethereum.png"
            />
            <span
              className="integration-name font-mono font-medium text-[11px] tracking-[0.14em] uppercase"
              style={{
                color: "rgba(255,255,255,0.78)",
                transition: "color 0.25s ease",
              }}
            >
              Ethereum
            </span>
          </a>
          <a
            href="https://base.org"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Base (opens in new tab)"
            className="integration-cell group relative flex flex-col items-center justify-center gap-3 py-10 px-4 cursor-pointer"
            data-reveal
            style={{
              background: "#14191d",
              borderRight: "1px solid rgba(255,255,255,0.07)",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div
              className="absolute top-0 left-6 right-6 h-px pointer-events-none"
              data-reveal
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--v2-accent) 50%, transparent)",
                transition: "opacity 0.25s ease",
              }}
            ></div>
            <img
              alt="Base"
              loading="lazy"
              width="256"
              height="256"
              decoding="async"
              data-nimg="1"
              className="integration-logo"
              style={{
                color: "transparent",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                objectFit: "cover",
                filter: "grayscale(1)",
                opacity: "0.8",
                transition: "opacity 0.25s ease, filter 0.25s ease",
              }}
              srcSet="/chains/base.png 1x, /chains/base.png 2x"
              src="/chains/base.png"
            />
            <span
              className="integration-name font-mono font-medium text-[11px] tracking-[0.14em] uppercase"
              style={{
                color: "rgba(255,255,255,0.78)",
                transition: "color 0.25s ease",
              }}
            >
              Base
            </span>
          </a>
          <a
            href="https://jup.ag"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Jupiter (opens in new tab)"
            className="integration-cell group relative flex flex-col items-center justify-center gap-3 py-10 px-4 cursor-pointer"
            data-reveal
            style={{
              background: "#14191d",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div
              className="absolute top-0 left-6 right-6 h-px pointer-events-none"
              data-reveal
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--v2-accent) 50%, transparent)",
                transition: "opacity 0.25s ease",
              }}
            ></div>
            <img
              alt="Jupiter"
              loading="lazy"
              width="256"
              height="256"
              decoding="async"
              data-nimg="1"
              className="integration-logo"
              style={{
                color: "transparent",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                objectFit: "cover",
                filter: "grayscale(1)",
                opacity: "0.8",
                transition: "opacity 0.25s ease, filter 0.25s ease",
              }}
              srcSet="/shared/jupiter.png 1x, /shared/jupiter.png 2x"
              src="/shared/jupiter.png"
            />
            <span
              className="integration-name font-mono font-medium text-[11px] tracking-[0.14em] uppercase"
              style={{
                color: "rgba(255,255,255,0.78)",
                transition: "color 0.25s ease",
              }}
            >
              Jupiter
            </span>
          </a>
          <a
            href="https://0x.org"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="0x (opens in new tab)"
            className="integration-cell group relative flex flex-col items-center justify-center gap-3 py-10 px-4 cursor-pointer"
            data-reveal
            style={{
              background: "#14191d",
              borderRight: "1px solid rgba(255,255,255,0.07)",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div
              className="absolute top-0 left-6 right-6 h-px pointer-events-none"
              data-reveal
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--v2-accent) 50%, transparent)",
                transition: "opacity 0.25s ease",
              }}
            ></div>
            <img
              alt="0x"
              loading="lazy"
              width="256"
              height="256"
              decoding="async"
              data-nimg="1"
              className="integration-logo"
              style={{
                color: "transparent",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                objectFit: "cover",
                filter: "grayscale(1)",
                opacity: "0.8",
                transition: "opacity 0.25s ease, filter 0.25s ease",
              }}
              srcSet="/shared/0x.png 1x, /shared/0x.png 2x"
              src="/shared/0x.png"
            />
            <span
              className="integration-name font-mono font-medium text-[11px] tracking-[0.14em] uppercase"
              style={{
                color: "rgba(255,255,255,0.78)",
                transition: "color 0.25s ease",
              }}
            >
              0x
            </span>
          </a>
          <a
            href="https://flashbots.net"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Flashbots (opens in new tab)"
            className="integration-cell group relative flex flex-col items-center justify-center gap-3 py-10 px-4 cursor-pointer"
            data-reveal
            style={{
              background: "#14191d",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div
              className="absolute top-0 left-6 right-6 h-px pointer-events-none"
              data-reveal
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--v2-accent) 50%, transparent)",
                transition: "opacity 0.25s ease",
              }}
            ></div>
            <img
              alt="Flashbots"
              loading="lazy"
              width="256"
              height="256"
              decoding="async"
              data-nimg="1"
              className="integration-logo"
              style={{
                color: "transparent",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                objectFit: "cover",
                filter: "grayscale(1)",
                opacity: "0.8",
                transition: "opacity 0.25s ease, filter 0.25s ease",
              }}
              srcSet="/shared/flashbots.png 1x, /shared/flashbots.png 2x"
              src="/shared/flashbots.png"
            />
            <span
              className="integration-name font-mono font-medium text-[11px] tracking-[0.14em] uppercase"
              style={{
                color: "rgba(255,255,255,0.78)",
                transition: "color 0.25s ease",
              }}
            >
              Flashbots
            </span>
          </a>
          <a
            href="https://helius.dev"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Helius (opens in new tab)"
            className="integration-cell group relative flex flex-col items-center justify-center gap-3 py-10 px-4 cursor-pointer"
            data-reveal
            style={{
              background: "#14191d",
              borderRight: "1px solid rgba(255,255,255,0.07)",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div
              className="absolute top-0 left-6 right-6 h-px pointer-events-none"
              data-reveal
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--v2-accent) 50%, transparent)",
                transition: "opacity 0.25s ease",
              }}
            ></div>
            <img
              alt="Helius"
              loading="lazy"
              width="256"
              height="256"
              decoding="async"
              data-nimg="1"
              className="integration-logo"
              style={{
                color: "transparent",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                objectFit: "cover",
                filter: "grayscale(1)",
                opacity: "0.8",
                transition: "opacity 0.25s ease, filter 0.25s ease",
              }}
              srcSet="/shared/helius.png 1x, /shared/helius.png 2x"
              src="/shared/helius.png"
            />
            <span
              className="integration-name font-mono font-medium text-[11px] tracking-[0.14em] uppercase"
              style={{
                color: "rgba(255,255,255,0.78)",
                transition: "color 0.25s ease",
              }}
            >
              Helius
            </span>
          </a>
          <a
            href="https://alchemy.com"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Alchemy (opens in new tab)"
            className="integration-cell group relative flex flex-col items-center justify-center gap-3 py-10 px-4 cursor-pointer"
            data-reveal
            style={{
              background: "#14191d",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div
              className="absolute top-0 left-6 right-6 h-px pointer-events-none"
              data-reveal
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--v2-accent) 50%, transparent)",
                transition: "opacity 0.25s ease",
              }}
            ></div>
            <img
              alt="Alchemy"
              loading="lazy"
              width="256"
              height="256"
              decoding="async"
              data-nimg="1"
              className="integration-logo"
              style={{
                color: "transparent",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                objectFit: "cover",
                filter: "grayscale(1)",
                opacity: "0.8",
                transition: "opacity 0.25s ease, filter 0.25s ease",
              }}
              srcSet="/shared/alchemy.png 1x, /shared/alchemy.png 2x"
              src="/shared/alchemy.png"
            />
            <span
              className="integration-name font-mono font-medium text-[11px] tracking-[0.14em] uppercase"
              style={{
                color: "rgba(255,255,255,0.78)",
                transition: "color 0.25s ease",
              }}
            >
              Alchemy
            </span>
          </a>
          <a
            href="https://dexscreener.com"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="DexScreener (opens in new tab)"
            className="integration-cell group relative flex flex-col items-center justify-center gap-3 py-10 px-4 cursor-pointer"
            data-reveal
            style={{
              background: "#14191d",
              borderRight: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div
              className="absolute top-0 left-6 right-6 h-px pointer-events-none"
              data-reveal
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--v2-accent) 50%, transparent)",
                transition: "opacity 0.25s ease",
              }}
            ></div>
            <img
              alt="DexScreener"
              loading="lazy"
              width="512"
              height="512"
              decoding="async"
              data-nimg="1"
              className="integration-logo"
              style={{
                color: "transparent",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                objectFit: "cover",
                filter: "grayscale(1)",
                opacity: "0.8",
                transition: "opacity 0.25s ease, filter 0.25s ease",
              }}
              srcSet="/shared/dexscreenerlogo.png 1x, /shared/dexscreenerlogo.png 2x"
              src="/shared/dexscreenerlogo.png"
            />
            <span
              className="integration-name font-mono font-medium text-[11px] tracking-[0.14em] uppercase"
              style={{
                color: "rgba(255,255,255,0.78)",
                transition: "color 0.25s ease",
              }}
            >
              DexScreener
            </span>
          </a>
          <a
            href="https://geckoterminal.com"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GeckoTerminal (opens in new tab)"
            className="integration-cell group relative flex flex-col items-center justify-center gap-3 py-10 px-4 cursor-pointer"
            data-reveal
            style={{ background: "#14191d" }}
          >
            <div
              className="absolute top-0 left-6 right-6 h-px pointer-events-none"
              data-reveal
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--v2-accent) 50%, transparent)",
                transition: "opacity 0.25s ease",
              }}
            ></div>
            <img
              alt="GeckoTerminal"
              loading="lazy"
              width="256"
              height="256"
              decoding="async"
              data-nimg="1"
              className="integration-logo"
              style={{
                color: "transparent",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                objectFit: "cover",
                filter: "grayscale(1)",
                opacity: "0.8",
                transition: "opacity 0.25s ease, filter 0.25s ease",
              }}
              srcSet="/shared/coingecko.png 1x, /shared/coingecko.png 2x"
              src="/shared/coingecko.png"
            />
            <span
              className="integration-name font-mono font-medium text-[11px] tracking-[0.14em] uppercase"
              style={{
                color: "rgba(255,255,255,0.78)",
                transition: "color 0.25s ease",
              }}
            >
              GeckoTerminal
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
