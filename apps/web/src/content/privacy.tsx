export function PrivacyContent() {
  return (
    <>
      <section id="intro" className="scroll-mt-28 mb-14">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span
            className="font-mono text-[11px] tracking-[0.2em]"
            style={{ color: "#0030cf" }}
          >
            [ 01 ]
          </span>
          <h2 className="font-heading text-[28px] sm:text-[34px] tracking-[-0.01em] text-white leading-tight">
            Introduction
          </h2>
        </div>
        <div className="max-w-[70ch]">
          <p>
            Corvid operates the platform at corvid.example. This policy explains
            what we collect, why, and how it is handled.
          </p>
          <p>
            Using Corvid constitutes acceptance. If you disagree, discontinue
            use.
          </p>
        </div>
      </section>
      <section id="collect" className="scroll-mt-28 mb-14">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span
            className="font-mono text-[11px] tracking-[0.2em]"
            style={{ color: "#0030cf" }}
          >
            [ 02 ]
          </span>
          <h2 className="font-heading text-[28px] sm:text-[34px] tracking-[-0.01em] text-white leading-tight">
            What We Collect
          </h2>
        </div>
        <div className="max-w-[70ch]">
          <p className="legal-caps">Account</p>
          <ul>
            <li>
              Wallet address, or email address and password hash if you sign up
              with email
            </li>
            <li>
              Signed authentication message (ephemeral, discarded after
              verification)
            </li>
            <li>Display name, avatar, bio (optional, set by you)</li>
            <li>Trading preferences and notification settings</li>
          </ul>
          <p className="legal-caps">Platform wallet</p>
          <ul>
            <li>Public key, stored for display and on-chain calls</li>
            <li>
              Private key, encrypted with AES-256-GCM using a server-side key.
              It is used to sign only on your instruction or by agents you
              configured
            </li>
            <li>
              Connected external wallets (Phantom, Rabby): public key only,
              never the private key
            </li>
          </ul>
          <p className="legal-caps">Usage</p>
          <ul>
            <li>Agent configurations, pipelines, and run history</li>
            <li>Token analysis requests and verdicts returned by the AI</li>
            <li>Smart-money watchlists and alerts</li>
            <li>Signal subscriptions and outcomes</li>
            <li>
              Credit and $CRVD ledger entries (balance, top-ups, fees,
              distributions)
            </li>
            <li>
              Marketplace activity: published agents, clones, subscribers,
              revenue share
            </li>
            <li>Server logs: IP, user agent, pages visited, request ids</li>
          </ul>
          <p className="legal-caps">Optional integrations</p>
          <ul>
            <li>Telegram chat id for signal delivery (you provide it)</li>
            <li>
              X (Twitter) OAuth tokens when you enable auto-posting on an agent.
              Stored encrypted. Used only for the posts you authorise
            </li>
          </ul>
        </div>
      </section>
      <section id="use" className="scroll-mt-28 mb-14">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span
            className="font-mono text-[11px] tracking-[0.2em]"
            style={{ color: "#0030cf" }}
          >
            [ 03 ]
          </span>
          <h2 className="font-heading text-[28px] sm:text-[34px] tracking-[-0.01em] text-white leading-tight">
            How We Use Your Information
          </h2>
        </div>
        <div className="max-w-[70ch]">
          <ul>
            <li>
              <strong>Platform functionality</strong>: run agents, deliver
              signals, execute trades, manage your account
            </li>
            <li>
              <strong>AI analysis</strong>: on-chain metrics and aggregate stats
              are sent to OpenAI. Not personally identifiable
            </li>
            <li>
              <strong>Billing</strong>: track credit and $CRVD balances,
              distribute marketplace revenue to agent creators, route fees to
              the platform fee pool
            </li>
            <li>
              <strong>Security</strong>: detect fraud, abuse, bot traffic, and
              unauthorised access
            </li>
            <li>
              <strong>Communication</strong>: transactional messages only
              (alerts, signal delivery, critical account events). No marketing
              without consent
            </li>
            <li>
              <strong>Improvement</strong>: aggregated, anonymised usage
              patterns to tune features and model quality
            </li>
          </ul>
        </div>
      </section>
      <section id="ai" className="scroll-mt-28 mb-14">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span
            className="font-mono text-[11px] tracking-[0.2em]"
            style={{ color: "#0030cf" }}
          >
            [ 04 ]
          </span>
          <h2 className="font-heading text-[28px] sm:text-[34px] tracking-[-0.01em] text-white leading-tight">
            AI Analysis Disclaimer
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
              ※ Notice
            </div>
            <div style={{ color: "#A9B5C2" }}>
              AI-generated analysis is not financial advice. Outputs are
              informational only.
            </div>
          </div>
          <p>
            You are responsible for your trading decisions. Crypto trading
            carries substantial risk. Past agent or signal performance does not
            predict future results.
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
            Non-Custodial Wallet Statement
          </h2>
        </div>
        <div className="max-w-[70ch]">
          <p>
            The platform wallet is custodial: the encrypted private key is
            stored on our infrastructure so agents can sign while you are
            offline. You can export the key at any time. Treat your Corvid
            credentials like a hardware wallet seed.
          </p>
          <p>We strongly recommend:</p>
          <ul>
            <li>Export and back up your private key from Settings</li>
            <li>Use a strong, unique sign-in wallet</li>
            <li>Enable 2FA on the linked wallet when available</li>
            <li>Do not hold large balances on the platform wallet</li>
          </ul>
        </div>
      </section>
      <section id="share" className="scroll-mt-28 mb-14">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span
            className="font-mono text-[11px] tracking-[0.2em]"
            style={{ color: "#0030cf" }}
          >
            [ 06 ]
          </span>
          <h2 className="font-heading text-[28px] sm:text-[34px] tracking-[-0.01em] text-white leading-tight">
            Data Sharing
          </h2>
        </div>
        <div className="max-w-[70ch]">
          <p>We do not sell your data. We share only with:</p>
          <ul>
            <li>
              <strong>Supabase</strong>: database and session auth
            </li>
            <li>
              <strong>Helius</strong>: Solana RPC and wallet data
            </li>
            <li>
              <strong>GeckoTerminal, DexScreener, GoPlus</strong>: token price,
              holder, trade history, and contract risk lookups
            </li>
            <li>
              <strong>Jupiter</strong>: DEX routing and swap quotes
            </li>
            <li>
              <strong>Jito</strong>: transaction bundle submission for priority
              execution
            </li>
            <li>
              <strong>OpenAI</strong>: receives token on-chain metrics for
              analysis. No personal identifiers
            </li>
            <li>
              <strong>Telegram / X</strong>: only when you explicitly connect
              the integration, and only for the specific actions you authorise
            </li>
            <li>
              <strong>Hosting</strong>: VPS provider running the application and
              edge cache in front of it
            </li>
            <li>
              <strong>Law enforcement</strong>: when compelled by valid legal
              process
            </li>
          </ul>
        </div>
      </section>
      <section id="retention" className="scroll-mt-28 mb-14">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span
            className="font-mono text-[11px] tracking-[0.2em]"
            style={{ color: "#0030cf" }}
          >
            [ 07 ]
          </span>
          <h2 className="font-heading text-[28px] sm:text-[34px] tracking-[-0.01em] text-white leading-tight">
            Data Retention
          </h2>
        </div>
        <div className="max-w-[70ch]">
          <p>Data is retained while your account is active. On deletion:</p>
          <ul>
            <li>Profile and preference data: removed within 30 days</li>
            <li>
              Agent configs, pipelines, and subscriptions: deleted immediately
            </li>
            <li>
              Ledger and outcome history: retained up to 90 days for security,
              accounting, and dispute resolution, then anonymised or deleted
            </li>
            <li>
              Encrypted private keys: deleted with the account. Withdraw funds
              first
            </li>
          </ul>
        </div>
      </section>
      <section id="rights" className="scroll-mt-28 mb-14">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span
            className="font-mono text-[11px] tracking-[0.2em]"
            style={{ color: "#0030cf" }}
          >
            [ 08 ]
          </span>
          <h2 className="font-heading text-[28px] sm:text-[34px] tracking-[-0.01em] text-white leading-tight">
            Your Rights
          </h2>
        </div>
        <div className="max-w-[70ch]">
          <p>Depending on your jurisdiction you may have rights to:</p>
          <ul>
            <li>Access the data we hold about you</li>
            <li>Correct inaccurate records</li>
            <li>Request deletion of your account</li>
            <li>Export your data in a portable format</li>
            <li>Object to certain processing</li>
          </ul>
          <p>
            All of these requests are handled through the Settings page inside
            the application.
          </p>
        </div>
      </section>
      <section id="cookies" className="scroll-mt-28 mb-14">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span
            className="font-mono text-[11px] tracking-[0.2em]"
            style={{ color: "#0030cf" }}
          >
            [ 09 ]
          </span>
          <h2 className="font-heading text-[28px] sm:text-[34px] tracking-[-0.01em] text-white leading-tight">
            Cookies
          </h2>
        </div>
        <div className="max-w-[70ch]">
          <p>
            Session cookies only, for authentication. No tracking, no ad
            cookies. Disabling cookies blocks sign-in.
          </p>
        </div>
      </section>
      <section id="children" className="scroll-mt-28 mb-14">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span
            className="font-mono text-[11px] tracking-[0.2em]"
            style={{ color: "#0030cf" }}
          >
            [ 10 ]
          </span>
          <h2 className="font-heading text-[28px] sm:text-[34px] tracking-[-0.01em] text-white leading-tight">
            Children
          </h2>
        </div>
        <div className="max-w-[70ch]">
          <p>
            Corvid is not for users under 18. We do not knowingly collect data
            from minors. If you believe we have, raise it from inside the app
            and the account will be removed.
          </p>
        </div>
      </section>
      <section id="changes" className="scroll-mt-28 mb-14">
        <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08]">
          <span
            className="font-mono text-[11px] tracking-[0.2em]"
            style={{ color: "#0030cf" }}
          >
            [ 11 ]
          </span>
          <h2 className="font-heading text-[28px] sm:text-[34px] tracking-[-0.01em] text-white leading-tight">
            Changes to This Policy
          </h2>
        </div>
        <div className="max-w-[70ch]">
          <p>
            Policy updates are announced on-platform and in transactional email
            where available. Continued use after the change constitutes
            acceptance.
          </p>
        </div>
      </section>
    </>
  );
}
