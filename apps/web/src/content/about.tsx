export function AboutContent() {
  return (
    <>
      <section id="company" className="scroll-mt-28 mb-14">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span
            className="font-mono text-[11px] tracking-[0.2em]"
            style={{ color: "#0030cf" }}
          >
            [ 01 ]
          </span>
          <h2 className="font-heading text-[28px] sm:text-[34px] tracking-[-0.01em] text-white leading-tight">
            Company
          </h2>
        </div>
        <div className="max-w-[70ch]">
          <p>
            Corvid is a trading technology platform. Operated by the Corvid
            team, which operates the service at corvid.example.
          </p>
          <p>
            We are a small engineering team. The product is built and run by the
            people who write it, and the address below reaches them rather than
            a queue.
          </p>
        </div>
      </section>
      <section id="product" className="scroll-mt-28 mb-14">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span
            className="font-mono text-[11px] tracking-[0.2em]"
            style={{ color: "#0030cf" }}
          >
            [ 02 ]
          </span>
          <h2 className="font-heading text-[28px] sm:text-[34px] tracking-[-0.01em] text-white leading-tight">
            What We Build
          </h2>
        </div>
        <div className="max-w-[70ch]">
          <p>
            Autonomous on-chain trading agents and analysis tools for Ethereum,
            Base, Arbitrum, BNB Chain and Solana. The platform lets you assess a
            token before touching it, follow wallets that trade well, and run
            automated strategies from a wallet you control.
          </p>
          <p>
            Agents execute from their own wallets, funded by you and
            withdrawable by you at any time. We do not take custody of funds
            beyond what you deliberately move into an agent.
          </p>
        </div>
      </section>
      <section id="contact" className="scroll-mt-28 mb-14">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span
            className="font-mono text-[11px] tracking-[0.2em]"
            style={{ color: "#0030cf" }}
          >
            [ 03 ]
          </span>
          <h2 className="font-heading text-[28px] sm:text-[34px] tracking-[-0.01em] text-white leading-tight">
            Contact
          </h2>
        </div>
        <div className="max-w-[70ch]">
          <p>
            General and business enquiries:{" "}
            <a href="mailto:contact@corvid.example">contact@corvid.example</a>
          </p>
          <p>
            Account or trading support:{" "}
            <a href="mailto:contact@corvid.example">contact@corvid.example</a>
          </p>
          <p>
            We answer email. It is the fastest way to reach us about anything
            that involves your account, and the only channel where we will
            discuss it.
          </p>
        </div>
      </section>
      <section id="official" className="scroll-mt-28 mb-14">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span
            className="font-mono text-[11px] tracking-[0.2em]"
            style={{ color: "#0030cf" }}
          >
            [ 04 ]
          </span>
          <h2 className="font-heading text-[28px] sm:text-[34px] tracking-[-0.01em] text-white leading-tight">
            Official Accounts
          </h2>
        </div>
        <div className="max-w-[70ch]">
          <p>
            These are the only accounts that speak for Corvid. Anything else
            claiming to be us is not.
          </p>
          <ul>
            <li>
              Website: <a href="https://corvid.example">corvid.example</a>
            </li>
            <li>
              X:{" "}
              <a
                href="https://x.com/PLACEHOLDER"
                rel="noopener noreferrer"
                target="_blank"
              >
                @PLACEHOLDER
              </a>
            </li>
            <li>
              Telegram:{" "}
              <a
                href="https://t.me/PLACEHOLDER"
                rel="noopener noreferrer"
                target="_blank"
              >
                t.me/PLACEHOLDER
              </a>
            </li>
            <li>
              Email:{" "}
              <a href="mailto:contact@corvid.example">contact@corvid.example</a>
            </li>
          </ul>
          <div
            className="my-5 pl-4 py-3 pr-4 relative"
            style={{
              background: "rgba(0,48,207,0.05)",
              borderLeft: "2px solid #0030cf",
            }}
          >
            <div
              className="font-mono text-[10px] tracking-[0.2em] uppercase mb-1.5"
              style={{ color: "#0030cf" }}
            >
              ※ We will never ask for a seed phrase
            </div>
            <div style={{ color: "rgba(255,255,255,0.85)" }}>
              No member of our team will ever ask for your seed phrase, private
              key, or to send funds to an address for any reason. Anyone who
              does is impersonating us, whatever account they are writing from.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
