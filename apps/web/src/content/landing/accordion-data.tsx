import type { AccordionItem } from "@/components/landing/accordion-list";

export const faqItems: AccordionItem[] = [
  {
    label: "What is Corvid?",
    content: (
      <p
        className="font-mono leading-relaxed"
        style={{
          fontSize: "clamp(0.78rem, 1.2vw, 0.88rem)",
          color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.60)",
          wordBreak: "break-word",
        }}
      >
        Corvid is a trading terminal with autonomous agents, on Robinhood Chain. Check any token with an on-chain risk report,
        deploy no-code agents that watch wallets and signals, and swap through Uniswap · all from one platform.
      </p>
    ),
  },
  {
    label: "How do AI agents work?",
    content: (
      <p
        className="font-mono leading-relaxed"
        style={{
          fontSize: "clamp(0.78rem, 1.2vw, 0.88rem)",
          color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.60)",
          wordBreak: "break-word",
        }}
      >
        Agents run every minute on Corvid servers. Four types: Signal Bot
        monitors price/volume/LP; Wallet Monitor tracks addresses on-chain;
        Token Analyst runs scheduled AI risk reports; Auto Trader executes
        on-chain swaps when conditions are met. Signals can also be sent to
        your Telegram once you link it.
      </p>
    ),
  },
  {
    label: "How does the platform wallet work?",
    content: (
      <p
        className="font-mono leading-relaxed"
        style={{
          fontSize: "clamp(0.78rem, 1.2vw, 0.88rem)",
          color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.60)",
          wordBreak: "break-word",
        }}
      >
        Every user gets a platform wallet on signup, with an EVM address. Keys are encrypted
        at rest in our infrastructure so the platform can sign trades for you,
        which is what lets agents trade while you are offline. Export your
        private key at any time to take full self-custody.
      </p>
    ),
  },
  {
    label: "What is $CRVD?",
    content: (
      <p
        className="font-mono leading-relaxed"
        style={{
          fontSize: "clamp(0.78rem, 1.2vw, 0.88rem)",
          color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.60)",
          wordBreak: "break-word",
        }}
      >
        $CRVD is the platform token. Every swap fee routes a slice into $CRVD
        buyback + burn. Credits are paid in the native coin, USDC or USDT; the
        Pro subscription is priced in USD and settled in $CRVD. Backing agents
        before graduation is not live yet.
      </p>
    ),
  },
  {
    label: "What's the fee structure?",
    content: (
      <p
        className="font-mono leading-relaxed"
        style={{
          fontSize: "clamp(0.78rem, 1.2vw, 0.88rem)",
          color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.60)",
          wordBreak: "break-word",
        }}
      >
        1% flat commission on swaps. Manual trades get 40% back as cashback (0.6% effective) and copy-trades 20%
        (0.8% effective), half the fee paying the agent's creator. Cashback on
        swaps is coming: those fees are recorded now and paid out once
        the on-chain distributor is live.
      </p>
    ),
  },
  {
    label: "Do I need to hold $CRVD to trade?",
    content: (
      <p
        className="font-mono leading-relaxed"
        style={{
          fontSize: "clamp(0.78rem, 1.2vw, 0.88rem)",
          color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.60)",
          wordBreak: "break-word",
        }}
      >
        No. You trade with ETH like on any DEX. $CRVD accumulates
        passively under the hood (burn + reserve slots). Cashback comes back in the coin you traded with, not $CRVD. Holding
        $CRVD is optional.
      </p>
    ),
  },
  {
    label: "Can I publish my agents?",
    content: (
      <p
        className="font-mono leading-relaxed"
        style={{
          fontSize: "clamp(0.78rem, 1.2vw, 0.88rem)",
          color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.60)",
          wordBreak: "break-word",
        }}
      >
        Yes. Publish to the marketplace · followers subscribe for free and you
        earn 50% of the 1% swap fee when they copy-trade. Agent tokens
        (graduation) are not live yet.
      </p>
    ),
  },
  {
    label: "What data sources do you use?",
    content: (
      <p
        className="font-mono leading-relaxed"
        style={{
          fontSize: "clamp(0.78rem, 1.2vw, 0.88rem)",
          color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.60)",
          wordBreak: "break-word",
        }}
      >
        DexScreener, GeckoTerminal, GoPlus and public RPC nodes. An OpenAI model writes the risk reports and signal summaries
        from that on-chain data. TradingView-style charts with custom indicators
        built in.
      </p>
    ),
  },
  {
    label: "Do agents trade automatically?",
    content: (
      <p
        className="font-mono leading-relaxed"
        style={{
          fontSize: "clamp(0.78rem, 1.2vw, 0.88rem)",
          color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.60)",
          wordBreak: "break-word",
        }}
      >
        Auto Trader executes on its own once its conditions are met, inside the
        caps you set: daily spend, per-trade size, max trades per day. Telegram only
        reports results; it never approves or executes a trade.
      </p>
    ),
  },
];

export const roadmapItems: AccordionItem[] = [
  {
    label: "Foundation",
    badge: (
      <span
        className="font-mono text-[11px] tracking-[0.12em] uppercase px-2.5 py-1 inline-flex items-center gap-1.5"
        style={{
          color: "var(--v2-section-accent, var(--v2-accent))",
          background:
            "rgba(var(--v2-section-accent-rgb, var(--v2-accent-rgb)),0.08)",
          border:
            "1px solid rgba(var(--v2-section-accent-rgb, var(--v2-accent-rgb)),0.20)",
        }}
      >
        <span
          className="h-1.5 w-1.5 rounded-full inline-block"
          style={{ background: "var(--v2-section-accent, var(--v2-accent))" }}
        ></span>
        Completed
      </span>
    ),
    content: (
      <ul className="flex flex-col gap-2.5">
        <li
          className="flex items-start gap-3"
          style={{ opacity: "1", transform: "none" }}
        >
          <span
            className="mt-[6px] h-1.5 w-1.5 rounded-full shrink-0"
            style={{ background: "var(--v2-section-accent, var(--v2-accent))" }}
          ></span>
          <span
            className="font-mono text-sm leading-relaxed"
            style={{ color: "rgba(var(--v2-section-fg-rgb, 10,10,15),0.55)" }}
          >
            AI token analysis with on-chain risk scoring
          </span>
        </li>
        <li
          className="flex items-start gap-3"
          style={{ opacity: "1", transform: "none" }}
        >
          <span
            className="mt-[6px] h-1.5 w-1.5 rounded-full shrink-0"
            style={{ background: "var(--v2-section-accent, var(--v2-accent))" }}
          ></span>
          <span
            className="font-mono text-sm leading-relaxed"
            style={{ color: "rgba(var(--v2-section-fg-rgb, 10,10,15),0.55)" }}
          >
            No-code agent builder with 4 agent types
          </span>
        </li>
        <li
          className="flex items-start gap-3"
          style={{ opacity: "1", transform: "none" }}
        >
          <span
            className="mt-[6px] h-1.5 w-1.5 rounded-full shrink-0"
            style={{ background: "var(--v2-section-accent, var(--v2-accent))" }}
          ></span>
          <span
            className="font-mono text-sm leading-relaxed"
            style={{ color: "rgba(var(--v2-section-fg-rgb, 10,10,15),0.55)" }}
          >
            Token terminal with trending, volume, top performing
          </span>
        </li>
        <li
          className="flex items-start gap-3"
          style={{ opacity: "1", transform: "none" }}
        >
          <span
            className="mt-[6px] h-1.5 w-1.5 rounded-full shrink-0"
            style={{ background: "var(--v2-section-accent, var(--v2-accent))" }}
          ></span>
          <span
            className="font-mono text-sm leading-relaxed"
            style={{ color: "rgba(var(--v2-section-fg-rgb, 10,10,15),0.55)" }}
          >
            Portfolio tracking and wallet analysis
          </span>
        </li>
        <li
          className="flex items-start gap-3"
          style={{ opacity: "1", transform: "none" }}
        >
          <span
            className="mt-[6px] h-1.5 w-1.5 rounded-full shrink-0"
            style={{ background: "var(--v2-section-accent, var(--v2-accent))" }}
          ></span>
          <span
            className="font-mono text-sm leading-relaxed"
            style={{ color: "rgba(var(--v2-section-fg-rgb, 10,10,15),0.55)" }}
          >
            Credit system and platform wallets on Robinhood Chain
          </span>
        </li>
      </ul>
    ),
  },
  {
    label: "Trading Infrastructure",
    badge: (
      <span
        className="font-mono text-[11px] tracking-[0.12em] uppercase px-2.5 py-1 inline-flex items-center gap-1.5"
        style={{
          color: "var(--v2-section-accent, var(--v2-accent))",
          background:
            "rgba(var(--v2-section-accent-rgb, var(--v2-accent-rgb)),0.08)",
          border:
            "1px solid rgba(var(--v2-section-accent-rgb, var(--v2-accent-rgb)),0.20)",
        }}
      >
        <span
          className="h-1.5 w-1.5 rounded-full inline-block"
          style={{ background: "var(--v2-section-accent, var(--v2-accent))" }}
        ></span>
        Completed
      </span>
    ),
    content: (
      <ul className="flex flex-col gap-2.5">
        <li
          className="flex items-start gap-3"
          style={{ opacity: "1", transform: "none" }}
        >
          <span
            className="mt-[6px] h-1.5 w-1.5 rounded-full shrink-0"
            style={{ background: "var(--v2-section-accent, var(--v2-accent))" }}
          ></span>
          <span
            className="font-mono text-sm leading-relaxed"
            style={{ color: "rgba(var(--v2-section-fg-rgb, 10,10,15),0.55)" }}
          >
            TradingView-style charts with SMA, EMA, Bollinger
          </span>
        </li>
        <li
          className="flex items-start gap-3"
          style={{ opacity: "1", transform: "none" }}
        >
          <span
            className="mt-[6px] h-1.5 w-1.5 rounded-full shrink-0"
            style={{ background: "var(--v2-section-accent, var(--v2-accent))" }}
          ></span>
          <span
            className="font-mono text-sm leading-relaxed"
            style={{ color: "rgba(var(--v2-section-fg-rgb, 10,10,15),0.55)" }}
          >
            On-chain swap integration on token pages
          </span>
        </li>
        <li
          className="flex items-start gap-3"
          style={{ opacity: "1", transform: "none" }}
        >
          <span
            className="mt-[6px] h-1.5 w-1.5 rounded-full shrink-0"
            style={{ background: "var(--v2-section-accent, var(--v2-accent))" }}
          ></span>
          <span
            className="font-mono text-sm leading-relaxed"
            style={{ color: "rgba(var(--v2-section-fg-rgb, 10,10,15),0.55)" }}
          >
            8 pre-built agent templates
          </span>
        </li>
        <li
          className="flex items-start gap-3"
          style={{ opacity: "1", transform: "none" }}
        >
          <span
            className="mt-[6px] h-1.5 w-1.5 rounded-full shrink-0"
            style={{ background: "var(--v2-section-accent, var(--v2-accent))" }}
          ></span>
          <span
            className="font-mono text-sm leading-relaxed"
            style={{ color: "rgba(var(--v2-section-fg-rgb, 10,10,15),0.55)" }}
          >
            Agent marketplace to publish and clone
          </span>
        </li>
        <li
          className="flex items-start gap-3"
          style={{ opacity: "1", transform: "none" }}
        >
          <span
            className="mt-[6px] h-1.5 w-1.5 rounded-full shrink-0"
            style={{ background: "var(--v2-section-accent, var(--v2-accent))" }}
          ></span>
          <span
            className="font-mono text-sm leading-relaxed"
            style={{ color: "rgba(var(--v2-section-fg-rgb, 10,10,15),0.55)" }}
          >
            Token search and $CRVD burn tracking
          </span>
        </li>
      </ul>
    ),
  },
  {
    label: "Automation",
    badge: (
      <span
        className="font-mono text-[11px] tracking-[0.12em] uppercase px-2.5 py-1 inline-flex items-center gap-1.5"
        style={{
          color: "rgba(var(--v2-section-fg-rgb, 10,10,15),0.75)",
          background: "rgba(var(--v2-section-fg-rgb, 10,10,15),0.06)",
          border: "1px solid rgba(var(--v2-section-fg-rgb, 10,10,15),0.15)",
        }}
      >
        <span
          className="h-1.5 w-1.5 rounded-full animate-pulse inline-block"
          style={{
            background: "rgba(var(--v2-section-fg-rgb, 10,10,15),0.60)",
          }}
        ></span>
        In Progress
      </span>
    ),
    content: (
      <ul className="flex flex-col gap-2.5">
        <li
          className="flex items-start gap-3"
          style={{ opacity: "1", transform: "none" }}
        >
          <span
            className="mt-[6px] h-1.5 w-1.5 rounded-full shrink-0"
            style={{
              background: "rgba(var(--v2-section-fg-rgb, 10,10,15),0.45)",
            }}
          ></span>
          <span
            className="font-mono text-sm leading-relaxed"
            style={{ color: "rgba(var(--v2-section-fg-rgb, 10,10,15),0.55)" }}
          >
            Telegram signal delivery for all agent types
          </span>
        </li>
        <li
          className="flex items-start gap-3"
          style={{ opacity: "1", transform: "none" }}
        >
          <span
            className="mt-[6px] h-1.5 w-1.5 rounded-full shrink-0"
            style={{
              background: "rgba(var(--v2-section-fg-rgb, 10,10,15),0.45)",
            }}
          ></span>
          <span
            className="font-mono text-sm leading-relaxed"
            style={{ color: "rgba(var(--v2-section-fg-rgb, 10,10,15),0.55)" }}
          >
            Auto Trader with on-chain swaps and approval mode
          </span>
        </li>
        <li
          className="flex items-start gap-3"
          style={{ opacity: "1", transform: "none" }}
        >
          <span
            className="mt-[6px] h-1.5 w-1.5 rounded-full shrink-0"
            style={{
              background: "rgba(var(--v2-section-fg-rgb, 10,10,15),0.45)",
            }}
          ></span>
          <span
            className="font-mono text-sm leading-relaxed"
            style={{ color: "rgba(var(--v2-section-fg-rgb, 10,10,15),0.55)" }}
          >
            Memescope, Rugcheck and Swap on Robinhood Chain
          </span>
        </li>
        <li
          className="flex items-start gap-3"
          style={{ opacity: "1", transform: "none" }}
        >
          <span
            className="mt-[6px] h-1.5 w-1.5 rounded-full shrink-0"
            style={{
              background: "rgba(var(--v2-section-fg-rgb, 10,10,15),0.45)",
            }}
          ></span>
          <span
            className="font-mono text-sm leading-relaxed"
            style={{ color: "rgba(var(--v2-section-fg-rgb, 10,10,15),0.55)" }}
          >
            $CRVD credit packs and burn tracking live
          </span>
        </li>
      </ul>
    ),
  },
  {
    label: "Integrations",
    badge: (
      <span
        className="font-mono text-[11px] tracking-[0.12em] uppercase px-2.5 py-1 inline-flex items-center gap-1.5"
        style={{
          color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.65)",
          background: "rgba(var(--v2-section-fg-rgb, 10,10,15),0.03)",
          border: "1px solid rgba(var(--v2-section-fg-rgb, 10,10,15),0.08)",
        }}
      >
        Upcoming
      </span>
    ),
    content: (
      <ul className="flex flex-col gap-2.5">
        <li
          className="flex items-start gap-3"
          style={{ opacity: "1", transform: "none" }}
        >
          <span
            className="mt-[6px] h-1.5 w-1.5 rounded-full shrink-0"
            style={{
              background: "rgba(var(--v2-section-fg-rgb, 10,10,15),0.20)",
            }}
          ></span>
          <span
            className="font-mono text-sm leading-relaxed"
            style={{ color: "rgba(var(--v2-section-fg-rgb, 10,10,15),0.55)" }}
          >
            Discord and X signal delivery alongside Telegram
          </span>
        </li>
        <li
          className="flex items-start gap-3"
          style={{ opacity: "1", transform: "none" }}
        >
          <span
            className="mt-[6px] h-1.5 w-1.5 rounded-full shrink-0"
            style={{
              background: "rgba(var(--v2-section-fg-rgb, 10,10,15),0.20)",
            }}
          ></span>
          <span
            className="font-mono text-sm leading-relaxed"
            style={{ color: "rgba(var(--v2-section-fg-rgb, 10,10,15),0.55)" }}
          >
            GeckoTerminal and DexScreener data feeds in agent nodes
          </span>
        </li>
        <li
          className="flex items-start gap-3"
          style={{ opacity: "1", transform: "none" }}
        >
          <span
            className="mt-[6px] h-1.5 w-1.5 rounded-full shrink-0"
            style={{
              background: "rgba(var(--v2-section-fg-rgb, 10,10,15),0.20)",
            }}
          ></span>
          <span
            className="font-mono text-sm leading-relaxed"
            style={{ color: "rgba(var(--v2-section-fg-rgb, 10,10,15),0.55)" }}
          >
            MetaMask and other EVM wallets for non-custodial users
          </span>
        </li>
        <li
          className="flex items-start gap-3"
          style={{ opacity: "1", transform: "none" }}
        >
          <span
            className="mt-[6px] h-1.5 w-1.5 rounded-full shrink-0"
            style={{
              background: "rgba(var(--v2-section-fg-rgb, 10,10,15),0.20)",
            }}
          ></span>
          <span
            className="font-mono text-sm leading-relaxed"
            style={{ color: "rgba(var(--v2-section-fg-rgb, 10,10,15),0.55)" }}
          >
            Webhook outputs to Zapier, n8n, and custom endpoints
          </span>
        </li>
        <li
          className="flex items-start gap-3"
          style={{ opacity: "1", transform: "none" }}
        >
          <span
            className="mt-[6px] h-1.5 w-1.5 rounded-full shrink-0"
            style={{
              background: "rgba(var(--v2-section-fg-rgb, 10,10,15),0.20)",
            }}
          ></span>
          <span
            className="font-mono text-sm leading-relaxed"
            style={{ color: "rgba(var(--v2-section-fg-rgb, 10,10,15),0.55)" }}
          >
            Multi-step trading strategies with conditional branches
          </span>
        </li>
      </ul>
    ),
  },
];

export const tokenItems: AccordionItem[] = [
  {
    label: "Continuous Buyback + Burn",
    content: (
      <p
        className="font-mono text-sm leading-relaxed"
        style={{ color: "rgba(255, 255, 255, 0.55)", maxWidth: "580px" }}
      >
        From launch, every swap on the platform routes part of its 1% fee into
        $CRVD buyback through Uniswap. The bought tokens are burned
        on-chain · supply shrinks, every holder benefits. Until buyback switches
        on, that share is recorded and held for it.
      </p>
    ),
  },
  {
    label: "Your agent becomes a tradeable token",
    badge: (
      <span
        className="font-mono text-[11px] tracking-[0.18em] uppercase px-2 py-0.5 rounded-sm"
        style={{
          color: "var(--v2-accent-hover)",
          background: "rgba(var(--v2-accent-rgb),0.10)",
          border: "1px solid rgba(var(--v2-accent-rgb),0.25)",
          letterSpacing: "0.12em",
        }}
      >
        Coming Soon
      </span>
    ),
    content: (
      <p
        className="font-mono text-sm leading-relaxed"
        style={{ color: "rgba(255, 255, 255, 0.55)", maxWidth: "580px" }}
      >
        Publish a strategy, hit graduation gates, and your agent mints its own
        ERC-20 token on Robinhood Chain, paired with the $CRVD reserve in a Uniswap pool.
        Subscribers who copy-traded through it get airdrop pro-rata. Bot →
        on-chain asset.
      </p>
    ),
  },
  {
    label: "Back an agent before it graduates",
    badge: (
      <span
        className="font-mono text-[11px] tracking-[0.18em] uppercase px-2 py-0.5 rounded-sm"
        style={{
          color: "var(--v2-accent-hover)",
          background: "rgba(var(--v2-accent-rgb),0.10)",
          border: "1px solid rgba(var(--v2-accent-rgb),0.25)",
          letterSpacing: "0.12em",
        }}
      >
        Coming Soon
      </span>
    ),
    content: (
      <p
        className="font-mono text-sm leading-relaxed"
        style={{ color: "rgba(255, 255, 255, 0.55)", maxWidth: "580px" }}
      >
        Add $CRVD to a published agent's LP reserve before it launches its token.
        When graduation triggers, your share of the freshly minted token arrives
        pro-rata. A dev-buy, except you back a working strategy with verifiable
        PnL, not a meme.
      </p>
    ),
  },
  {
    label: "Governance",
    badge: (
      <span
        className="font-mono text-[11px] tracking-[0.18em] uppercase px-2 py-0.5 rounded-sm"
        style={{
          color: "var(--v2-accent-hover)",
          background: "rgba(var(--v2-accent-rgb),0.10)",
          border: "1px solid rgba(var(--v2-accent-rgb),0.25)",
          letterSpacing: "0.12em",
        }}
      >
        Coming Soon
      </span>
    ),
    content: (
      <p
        className="font-mono text-sm leading-relaxed"
        style={{ color: "rgba(255, 255, 255, 0.55)", maxWidth: "580px" }}
      >
        Token holders vote on platform features, new agent types, fee policy
        tuning, and treasury allocation. Voting weight scales with your $CRVD
        balance.
      </p>
    ),
  },
];
