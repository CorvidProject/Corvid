export function DocsPortfolioContent() {
  return (
    <article>
      <div
        className="flex items-center justify-between border-y border-white/[0.08] py-2.5 mb-12 font-mono text-[11px] tracking-[0.2em] uppercase"
        style={{ color: "#A9B5C2" }}
      >
        <span>
          <span style={{ color: "var(--v2-accent-text)" }}>●</span> DOC.PORT.060
        </span>
        <span>FEATURES</span>
      </div>
      <div className="mb-14">
        <span
          className="inline-block font-mono text-[11px] tracking-[0.06em] uppercase mb-6"
          style={{ color: "var(--v2-accent-text)" }}
        >
          [ PORTFOLIO ]
        </span>
        <h1 className="font-heading font-black text-5xl sm:text-6xl tracking-[-0.04em] leading-[0.94] text-white mb-6">
          What you own
        </h1>
        <p
          className="text-base sm:text-lg leading-relaxed max-w-xl"
          style={{ color: "#A9B5C2" }}
        >
          Your Trading Wallet, open positions, agent activity, cashback, tokens,
          and running PnL in one dashboard. Keys are encrypted at rest and
          exportable.
        </p>
      </div>
      <div className="mb-16">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span
            className="font-mono text-[11px] tracking-[0.2em]"
            style={{ color: "var(--v2-accent-text)" }}
          >
            [ 01 ]
          </span>
          <h2 className="font-heading font-bold text-[26px] tracking-[-0.02em] text-white m-0 p-0 border-0">
            What you see
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div
            className="p-5 border border-white/[0.08]"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <div
              className="font-mono text-[11px] tracking-[0.06em] uppercase mb-3"
              style={{ color: "var(--v2-accent-text)" }}
            >
              01 · POSITIONS
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Open positions
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "#A9B5C2" }}
            >
              Active trades from your trading-mode pipelines. Entry price,
              current price, PnL, TP and SL status
            </p>
          </div>
          <div
            className="p-5 border border-white/[0.08]"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <div
              className="font-mono text-[11px] tracking-[0.06em] uppercase mb-3"
              style={{ color: "var(--v2-accent-text)" }}
            >
              02 · AGENTS
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Agent positions
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "#A9B5C2" }}
            >
              Open trades, PnL, execution history, configured limits, and pause
              state for each agent
            </p>
          </div>
          <div
            className="p-5 border border-white/[0.08]"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <div
              className="font-mono text-[11px] tracking-[0.06em] uppercase mb-3"
              style={{ color: "var(--v2-accent-text)" }}
            >
              03 · CASHBACK
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Cashback ledger
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "#A9B5C2" }}
            >
              The 25% that comes back per signal, shown as a running total with
              per-agent breakdown and anti-farm gate status
            </p>
          </div>
          <div
            className="p-5 border border-white/[0.08]"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <div
              className="font-mono text-[11px] tracking-[0.06em] uppercase mb-3"
              style={{ color: "var(--v2-accent-text)" }}
            >
              04 · TOKENS
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              SPL tokens
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "#A9B5C2" }}
            >
              Real Solana tokens you received when agents graduated. These sit
              in your main platform wallet
            </p>
          </div>
          <div
            className="p-5 border border-white/[0.08]"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <div
              className="font-mono text-[11px] tracking-[0.06em] uppercase mb-3"
              style={{ color: "var(--v2-accent-text)" }}
            >
              05 · PNL
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Profit and loss
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "#A9B5C2" }}
            >
              Net credits spent on signals, plus trade PnL, plus token market
              value. Updated on every block
            </p>
          </div>
          <div
            className="p-5 border border-white/[0.08]"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <div
              className="font-mono text-[11px] tracking-[0.06em] uppercase mb-3"
              style={{ color: "var(--v2-accent-text)" }}
            >
              06 · KEYS
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5 tracking-[-0.01em]">
              Export your key
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "#A9B5C2" }}
            >
              Hit Export in Settings to pull the 32-byte private key (hex).
              Import it into Phantom or Rabby and you own the wallet outright
            </p>
          </div>
        </div>
      </div>
      <div className="mb-16">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span
            className="font-mono text-[11px] tracking-[0.2em]"
            style={{ color: "var(--v2-accent-text)" }}
          >
            [ 02 ]
          </span>
          <h2 className="font-heading font-bold text-[26px] tracking-[-0.02em] text-white m-0 p-0 border-0">
            Custody, explained honestly
          </h2>
        </div>
        <p className="mb-5" style={{ color: "#A9B5C2" }}>
          The platform is custodial: when you sign up we generate A Solana
          wallet for you and store the private key encrypted at rest in our
          infrastructure. That's what lets autonomous agents and copy-trade fire
          while you're offline — without it the whole product premise doesn't
          work. We're upfront about the trade-off: you can export the raw key to
          Phantom at any moment and take full self-custody if that matters more
          than automation.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div
            className="p-5 border border-white/[0.08]"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <div
              className="font-mono text-[11px] tracking-[0.06em] uppercase mb-3"
              style={{ color: "var(--v2-accent-text)" }}
            >
              01 · KEYGEN
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5">
              Generated server-side, encrypted at rest
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "#A9B5C2" }}
            >
              The private key is created on our backend and immediately
              encrypted with AES-256-GCM. The master encryption key lives in
              SOPS-managed secrets, separate from the application code path
            </p>
          </div>
          <div
            className="p-5 border border-white/[0.08]"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <div
              className="font-mono text-[11px] tracking-[0.06em] uppercase mb-3"
              style={{ color: "var(--v2-accent-text)" }}
            >
              02 · SIGNING
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5">
              Platform signs on your behalf
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "#A9B5C2" }}
            >
              For every trade we decrypt your key in memory just long enough to
              sign the transaction, then zero the buffer. This is what lets a
              Copy Trader react to a whale move in 200ms without you being
              online
            </p>
          </div>
          <div
            className="p-5 border border-white/[0.08]"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <div
              className="font-mono text-[11px] tracking-[0.06em] uppercase mb-3"
              style={{ color: "var(--v2-accent-text)" }}
            >
              03 · EXPORT
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5">
              You can leave with the key
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "#A9B5C2" }}
            >
              Settings → Export Private Key returns the 32-byte key as hex.
              Import it into Phantom or Rabby. Your wallet now exists outside
              the platform, fully self-custodial
            </p>
          </div>
          <div
            className="p-5 border border-white/[0.08]"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <div
              className="font-mono text-[11px] tracking-[0.06em] uppercase mb-3"
              style={{ color: "var(--v2-accent-text)" }}
            >
              04 · SURVIVAL
            </div>
            <h3 className="font-heading font-semibold text-[15px] text-white mb-1.5">
              If we go dark, your funds remain
            </h3>
            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "#A9B5C2" }}
            >
              Export your key while the platform is up. Once you have the raw
              bytes, your wallet exists on-chain forever — independent of our
              infrastructure, no migration needed
            </p>
          </div>
        </div>
      </div>
      <div className="mb-16">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span
            className="font-mono text-[11px] tracking-[0.2em]"
            style={{ color: "var(--v2-accent-text)" }}
          >
            [ 03 ]
          </span>
          <h2 className="font-heading font-bold text-[26px] tracking-[-0.02em] text-white m-0 p-0 border-0">
            Common questions
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          <details
            className="group border border-white/[0.08] px-4 py-3"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <summary className="cursor-pointer font-heading font-semibold text-[14px] text-white list-none flex items-start justify-between gap-3">
              <span className="break-words">Can Corvid take my funds?</span>
              <span className="font-mono text-[var(--v2-accent)] group-open:rotate-45 transition-transform shrink-0">
                +
              </span>
            </summary>
            <p
              className="mt-3 text-[13px] leading-relaxed m-0"
              style={{ color: "#A9B5C2" }}
            >
              We're a custodial platform — technically yes, the keys we encrypt
              could be decrypted by us. The defenses are operational, not
              cryptographic: master encryption key kept in SOPS-managed secrets,
              withdrawals require your in-app authorization, and most
              importantly, you can export the key to Phantom at any moment to
              get out of the trust relationship entirely. If you're holding
              meaningful size, export and self-custody is the right move.
            </p>
          </details>
          <details
            className="group border border-white/[0.08] px-4 py-3"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <summary className="cursor-pointer font-heading font-semibold text-[14px] text-white list-none flex items-start justify-between gap-3">
              <span className="break-words">
                What happens if the platform shuts down?
              </span>
              <span className="font-mono text-[var(--v2-accent)] group-open:rotate-45 transition-transform shrink-0">
                +
              </span>
            </summary>
            <p
              className="mt-3 text-[13px] leading-relaxed m-0"
              style={{ color: "#A9B5C2" }}
            >
              Export your private key while we're up — Settings → Export Private
              Key. Once you have the raw 64-byte key in Phantom, your wallet is
              independent of our infrastructure. The SOL, the $CRVD, and any SPL
              tokens earned through graduation all live on-chain forever. No
              migration sprint needed if you've already exported.
            </p>
          </details>
          <details
            className="group border border-white/[0.08] px-4 py-3"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <summary className="cursor-pointer font-heading font-semibold text-[14px] text-white list-none flex items-start justify-between gap-3">
              <span className="break-words">
                Why not just use Phantom directly?
              </span>
              <span className="font-mono text-[var(--v2-accent)] group-open:rotate-45 transition-transform shrink-0">
                +
              </span>
            </summary>
            <p
              className="mt-3 text-[13px] leading-relaxed m-0"
              style={{ color: "#A9B5C2" }}
            >
              Because autonomous agents need to sign transactions while you
              sleep. Phantom requires a manual click each time. A custodial
              wallet lets the platform sign on your behalf so a Copy Trader can
              react to a whale move in 200ms without you being at the keyboard.
              If you prefer manual, connect Phantom for the main trading UI — we
              support both, and you can run agents on the platform wallet while
              doing manual swaps from Phantom.
            </p>
          </details>
          <details
            className="group border border-white/[0.08] px-4 py-3"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <summary className="cursor-pointer font-heading font-semibold text-[14px] text-white list-none flex items-start justify-between gap-3">
              <span className="break-words">
                Do agents have separate trading wallets?
              </span>
              <span className="font-mono text-[var(--v2-accent)] group-open:rotate-45 transition-transform shrink-0">
                +
              </span>
            </summary>
            <p
              className="mt-3 text-[13px] leading-relaxed m-0"
              style={{ color: "#A9B5C2" }}
            >
              No. Agents execute from your shared Trading Wallet on their
              selected network. Each trading agent stays locked until you set
              its per-trade and rolling 24-hour limits. Keep only funds you are
              prepared to automate in that wallet.
            </p>
          </details>
          <details
            className="group border border-white/[0.08] px-4 py-3"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <summary className="cursor-pointer font-heading font-semibold text-[14px] text-white list-none flex items-start justify-between gap-3">
              <span className="break-words">Is my email the weakest link?</span>
              <span className="font-mono text-[var(--v2-accent)] group-open:rotate-45 transition-transform shrink-0">
                +
              </span>
            </summary>
            <p
              className="mt-3 text-[13px] leading-relaxed m-0"
              style={{ color: "#A9B5C2" }}
            >
              Enable a passkey or 2FA on the email itself — that's the
              meaningful upgrade. If your inbox is compromised, an attacker can
              reset your platform password and authorize withdrawals from your
              wallet. Hardware-key 2FA on the email blocks that path. The
              platform itself does not store the email password and cannot
              bypass your auth provider.
            </p>
          </details>
        </div>
      </div>
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a
          className="group flex items-center justify-between p-5 border border-white/[0.08] hover:border-[var(--v2-accent)]/50 transition-colors"
          style={{ background: "rgba(255,255,255,0.02)" }}
          href="/docs/terminal"
        >
          <div>
            <div
              className="font-mono text-[11px] tracking-[0.2em] uppercase mb-1"
              style={{ color: "#A9B5C2" }}
            >
              NEXT →
            </div>
            <div className="font-heading font-semibold text-white">
              Terminal
            </div>
          </div>
          <span
            style={{ color: "var(--v2-accent-text)" }}
            className="text-xl group-hover:translate-x-1 transition-transform"
          >
            →
          </span>
        </a>
        <a
          className="group flex items-center justify-between p-5 border border-white/[0.08] hover:border-[var(--v2-accent)]/50 transition-colors"
          style={{ background: "rgba(255,255,255,0.02)" }}
          href="/docs/graduation"
        >
          <div>
            <div
              className="font-mono text-[11px] tracking-[0.2em] uppercase mb-1"
              style={{ color: "#A9B5C2" }}
            >
              DEEP DIVE →
            </div>
            <div className="font-heading font-semibold text-white">
              Graduation
            </div>
          </div>
          <span
            style={{ color: "var(--v2-accent-text)" }}
            className="text-xl group-hover:translate-x-1 transition-transform"
          >
            →
          </span>
        </a>
      </div>
    </article>
  );
}
