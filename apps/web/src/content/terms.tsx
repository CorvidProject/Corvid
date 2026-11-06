export function TermsContent() {
  return (
    <>
      <section id="acceptance" className="scroll-mt-28 mb-14">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span
            className="font-mono text-[11px] tracking-[0.2em]"
            style={{ color: "#0030cf" }}
          >
            [ 01 ]
          </span>
          <h2 className="font-heading text-[28px] sm:text-[34px] tracking-[-0.01em] text-white leading-tight">
            Acceptance of Terms
          </h2>
        </div>
        <div className="max-w-[70ch]">
          <p>
            By accessing Corvid at corvidagent.com, you agree to be bound by
            these Terms. If you do not agree, stop using the platform.
          </p>
          <p>
            We may update these Terms at any time. Continued use means
            acceptance of the revision.
          </p>
        </div>
      </section>
      <section id="service" className="scroll-mt-28 mb-14">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span
            className="font-mono text-[11px] tracking-[0.2em]"
            style={{ color: "#0030cf" }}
          >
            [ 02 ]
          </span>
          <h2 className="font-heading text-[28px] sm:text-[34px] tracking-[-0.01em] text-white leading-tight">
            Description of Service
          </h2>
        </div>
        <div className="max-w-[70ch]">
          <p>Corvid is an Ethereum-native trading platform that provides:</p>
          <ul>
            <li>On-chain token analysis and risk scoring</li>
            <li>Smart-money tracking across a curated set of wallets</li>
            <li>
              Autonomous trading agents: copy traders, token scanners, auto
              traders, signal publishers
            </li>
            <li>
              A platform wallet for on-chain execution (keys encrypted on our
              servers, exportable at any time)
            </li>
            <li>Signal delivery to Telegram</li>
            <li>
              An agent marketplace for publishing, cloning, and subscribing to
              strategies
            </li>
            <li>
              A credit and $CRVD economy for AI analysis, automation, and
              marketplace revenue share
            </li>
          </ul>
        </div>
      </section>
      <section id="no-advice" className="scroll-mt-28 mb-14">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span
            className="font-mono text-[11px] tracking-[0.2em]"
            style={{ color: "#0030cf" }}
          >
            [ 03 ]
          </span>
          <h2 className="font-heading text-[28px] sm:text-[34px] tracking-[-0.01em] text-white leading-tight">
            Not Financial Advice
          </h2>
        </div>
        <div className="max-w-[70ch]">
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
              ※ Disclaimer
            </div>
            <div style={{ color: "rgba(255,255,255,0.85)" }}>
              Nothing on Corvid is financial, investment, legal, or tax advice.
              All AI output is informational only.
            </div>
          </div>
          <p>
            Risk scores, agent suggestions, smart-money feeds, and signals are
            tools. Corvid does not recommend buying, selling, or holding any
            asset.
          </p>
          <p>
            Crypto markets are volatile. You can lose everything you put in.
            Past agent or strategy performance is not a forecast. Always do your
            own research.
          </p>
        </div>
      </section>
      <section id="eligibility" className="scroll-mt-28 mb-14">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span
            className="font-mono text-[11px] tracking-[0.2em]"
            style={{ color: "#0030cf" }}
          >
            [ 04 ]
          </span>
          <h2 className="font-heading text-[28px] sm:text-[34px] tracking-[-0.01em] text-white leading-tight">
            Eligibility
          </h2>
        </div>
        <div className="max-w-[70ch]">
          <p>
            You must be 18 or older. By using Corvid you confirm you have the
            legal capacity to agree to these Terms.
          </p>
          <p>
            You are responsible for compliance with local laws. Corvid is not
            available where prohibited.
          </p>
        </div>
      </section>
      <section id="wallet" className="scroll-mt-28 mb-14">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span
            className="font-mono text-[11px] tracking-[0.2em]"
            style={{ color: "#0030cf" }}
          >
            [ 05 ]
          </span>
          <h2 className="font-heading text-[28px] sm:text-[34px] tracking-[-0.01em] text-white leading-tight">
            Platform Wallet
          </h2>
        </div>
        <div className="max-w-[70ch]">
          <p>
            The platform wallet is generated and stored on our servers in
            encrypted form.
          </p>
          <ul>
            <li>
              Private keys are encrypted with AES-256-GCM. Transactions are
              signed only on your instruction or by agents you configured
            </li>
            <li>
              You are responsible for sign-in credentials and for protecting the
              connected wallet that authenticates you
            </li>
            <li>Export your key from Settings and back it up independently</li>
            <li>
              We are not liable for losses from unauthorised access, phishing,
              or lost credentials
            </li>
            <li>Do not store large balances in the platform wallet</li>
          </ul>
        </div>
      </section>
      <section id="agents" className="scroll-mt-28 mb-14">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span
            className="font-mono text-[11px] tracking-[0.2em]"
            style={{ color: "#0030cf" }}
          >
            [ 06 ]
          </span>
          <h2 className="font-heading text-[28px] sm:text-[34px] tracking-[-0.01em] text-white leading-tight">
            Autonomous Trading Agents
          </h2>
        </div>
        <div className="max-w-[70ch]">
          <p>
            Agents (auto traders, copy traders, token scanners, signal
            publishers) can execute on-chain transactions when you enable
            auto-execute. By enabling this you:
          </p>
          <ul>
            <li>
              Authorise Corvid to initiate transactions from your platform
              wallet inside the parameters you set
            </li>
            <li>
              Accept the risks of automated trading: bad triggers, slippage,
              network congestion, failed transactions, market losses
            </li>
            <li>
              Take responsibility for the trades that result from your
              configuration, including misconfigurations and unexpected strategy
              behaviour
            </li>
          </ul>
          <p>
            Auto Trader executes inside the caps you set (daily ETH spend,
            per-trade size, max trades per day). Swaps proposed by the AI agent
            require your approval in Telegram.
          </p>
        </div>
      </section>
      <section id="credits" className="scroll-mt-28 mb-14">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span
            className="font-mono text-[11px] tracking-[0.2em]"
            style={{ color: "#0030cf" }}
          >
            [ 07 ]
          </span>
          <h2 className="font-heading text-[28px] sm:text-[34px] tracking-[-0.01em] text-white leading-tight">
            Credits and Payments
          </h2>
        </div>
        <div className="max-w-[70ch]">
          <ul>
            <li>
              Credits are an in-app allowance used to gate AI analysis and
              automation actions
            </li>
            <li>Credits are purchased with ETH, USDC or USDT</li>
            <li>Credits are non-refundable once spent</li>
            <li>
              Unused credits do not expire. Any policy change requires 30 days
              notice
            </li>
            <li>
              We may adjust the cost of specific actions with reasonable notice
            </li>
            <li>
              A share of every spend flows into the platform fee pool, which is
              distributed to the burn sink, the treasury, and $CRVD stakers per
              the published split
            </li>
          </ul>
          <p>
            Free starter credits are a trial allocation and are
            non-transferable.
          </p>
        </div>
      </section>
      <section id="marketplace" className="scroll-mt-28 mb-14">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span
            className="font-mono text-[11px] tracking-[0.2em]"
            style={{ color: "#0030cf" }}
          >
            [ 08 ]
          </span>
          <h2 className="font-heading text-[28px] sm:text-[34px] tracking-[-0.01em] text-white leading-tight">
            Agent Marketplace
          </h2>
        </div>
        <div className="max-w-[70ch]">
          <p>When you publish an agent to the marketplace you:</p>
          <ul>
            <li>
              License Corvid to display the agent name, description,
              configuration, and performance metrics
            </li>
            <li>
              Warrant that the strategy violates no third-party rights or laws
            </li>
            <li>
              Allow other users to clone or subscribe to the configuration on
              the terms shown in the marketplace
            </li>
            <li>
              Earn a share of the per-action fees generated by subscribers and
              cloners, paid into your $CRVD balance per the published split
            </li>
          </ul>
          <p>
            We may remove or de-list any agent without notice if it breaks these
            Terms. Marketplace performance metrics are as-is and are not
            investment advice.
          </p>
        </div>
      </section>
      <section id="prohibited" className="scroll-mt-28 mb-14">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span
            className="font-mono text-[11px] tracking-[0.2em]"
            style={{ color: "#0030cf" }}
          >
            [ 09 ]
          </span>
          <h2 className="font-heading text-[28px] sm:text-[34px] tracking-[-0.01em] text-white leading-tight">
            Prohibited Uses
          </h2>
        </div>
        <div className="max-w-[70ch]">
          <ul>
            <li>
              Market manipulation, wash trading, or coordinated pump-and-dump
              schemes
            </li>
            <li>
              Violation of any applicable law, including securities and
              sanctions law
            </li>
            <li>Reverse engineering or circumventing platform security</li>
            <li>Money laundering or financing of illegal activity</li>
            <li>
              Mass scraping, bulk extraction, or abuse of public endpoints
            </li>
            <li>Impersonation of users, agents, or the team</li>
            <li>
              Multi-account abuse of plan limits, free credits, or marketplace
              metrics
            </li>
          </ul>
        </div>
      </section>
      <section id="ip" className="scroll-mt-28 mb-14">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span
            className="font-mono text-[11px] tracking-[0.2em]"
            style={{ color: "#0030cf" }}
          >
            [ 10 ]
          </span>
          <h2 className="font-heading text-[28px] sm:text-[34px] tracking-[-0.01em] text-white leading-tight">
            Intellectual Property
          </h2>
        </div>
        <div className="max-w-[70ch]">
          <p>
            Platform code, models, designs, and content belong to Corvid. No
            reproduction or derivative works without written permission.
          </p>
          <p>
            Your agent configurations remain yours, subject to the marketplace
            license above.
          </p>
        </div>
      </section>
      <section id="liability" className="scroll-mt-28 mb-14">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span
            className="font-mono text-[11px] tracking-[0.2em]"
            style={{ color: "#0030cf" }}
          >
            [ 11 ]
          </span>
          <h2 className="font-heading text-[28px] sm:text-[34px] tracking-[-0.01em] text-white leading-tight">
            Limitation of Liability
          </h2>
        </div>
        <div className="max-w-[70ch]">
          <p className="legal-caps">
            To the maximum extent permitted by law, Corvid is not liable for:
          </p>
          <ul>
            <li>Trading losses, manual or automated</li>
            <li>
              Losses from contract bugs, network issues, or market conditions
            </li>
            <li>Inaccurate AI analysis, signals, or smart-money feeds</li>
            <li>
              Downtime, maintenance, or technical failure of any upstream
              service
            </li>
            <li>Lost wallet access due to lost credentials</li>
            <li>Indirect, incidental, consequential, or punitive damages</li>
          </ul>
          <p>
            In jurisdictions that limit this cap, liability is limited to the
            maximum the law allows.
          </p>
        </div>
      </section>
      <section id="indemnity" className="scroll-mt-28 mb-14">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span
            className="font-mono text-[11px] tracking-[0.2em]"
            style={{ color: "#0030cf" }}
          >
            [ 12 ]
          </span>
          <h2 className="font-heading text-[28px] sm:text-[34px] tracking-[-0.01em] text-white leading-tight">
            Indemnification
          </h2>
        </div>
        <div className="max-w-[70ch]">
          <p>
            You agree to indemnify Corvid, its operators, affiliates, and
            service providers against claims arising from:
          </p>
          <ul>
            <li>Your use of the platform</li>
            <li>Your violation of these Terms</li>
            <li>Your trading activity and agent configurations</li>
            <li>Content you submit, including published agent metadata</li>
          </ul>
        </div>
      </section>
      <section id="termination" className="scroll-mt-28 mb-14">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span
            className="font-mono text-[11px] tracking-[0.2em]"
            style={{ color: "#0030cf" }}
          >
            [ 13 ]
          </span>
          <h2 className="font-heading text-[28px] sm:text-[34px] tracking-[-0.01em] text-white leading-tight">
            Termination
          </h2>
        </div>
        <div className="max-w-[70ch]">
          <p>
            We may suspend or terminate accounts at our discretion, with or
            without notice, for violations or any reason.
          </p>
          <p>
            You may delete your account at any time from Settings. Withdraw
            funds from your platform wallet first.
          </p>
        </div>
      </section>
      <section id="contact" className="scroll-mt-28 mb-14">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span
            className="font-mono text-[11px] tracking-[0.2em]"
            style={{ color: "#0030cf" }}
          >
            [ 14 ]
          </span>
          <h2 className="font-heading text-[28px] sm:text-[34px] tracking-[-0.01em] text-white leading-tight">
            Contact
          </h2>
        </div>
        <div className="max-w-[70ch]">
          <p>
            Operated by the Corvid team. The service is operated at
            corvidagent.com.
          </p>
          <p>
            Questions about these Terms, or anything else:{" "}
            <a href="mailto:contact@corvidagent.com">contact@corvidagent.com</a>
          </p>
          <p>
            Our official accounts are listed on the <a href="/about">About</a>{" "}
            page. No other account or address speaks for Corvid.
          </p>
        </div>
      </section>
    </>
  );
}
