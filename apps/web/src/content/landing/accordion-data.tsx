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
        Corvid is a trading terminal with agents, on Robinhood Chain. Check any token with an on-chain risk report, set up no-code agents that watch wallets and new tokens, and swap through Uniswap, all from your own wallet.
      </p>
    ),
  },
  {
    label: "How do agents work?",
    content: (
      <p
        className="font-mono leading-relaxed"
        style={{
          fontSize: "clamp(0.78rem, 1.2vw, 0.88rem)",
          color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.60)",
          wordBreak: "break-word",
        }}
      >
        Agents run about once a minute on Corvid servers. Three pipelines: Follow Wallet reacts when a wallet you pick buys, New Tokens scans fresh launches against your safety filters, and Token Trading watches one token for a trigger. Each runs in signal mode (alerts) or trading mode (simulated trades). Alerts reach your inbox, and Telegram once you link it.
      </p>
    ),
  },
  {
    label: "Does Corvid hold my funds?",
    content: (
      <p
        className="font-mono leading-relaxed"
        style={{
          fontSize: "clamp(0.78rem, 1.2vw, 0.88rem)",
          color: "rgba(var(--v2-section-fg-rgb, 10,10,15), 0.60)",
          wordBreak: "break-word",
        }}
      >
        No. Corvid is non-custodial. You connect your own wallet, such as MetaMask, and sign every swap yourself. Corvid does not create a wallet for you or store a private key. Agents do not sign anything today: in trading mode they record simulated buys.
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
        $CRVD is the planned Corvid token. It has not launched and nothing in the app needs it. Official details and the contract address will be published in the docs first. Credits and Pro are paid in USDG for now.
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
        Corvid adds no commission to swaps today. You pay the Uniswap pool fee and gas. AI answers use a monthly quota, then credits, and Pro raises the quota. Cashback, revenue sharing and any future fees are not live yet and will be announced in the docs first.
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
        No. You swap with ETH like on any DEX. $CRVD has not launched, and holding it is not required for anything.
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
        Yes. Publish an agent to the marketplace with a short description and followers receive its signals for free. Creator earnings and agent tokens (graduation) are not live yet.
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
        DexScreener, GeckoTerminal, GoPlus and public RPC nodes. AI chat and token analyses are written by a language model from that data and use your AI quota. Token pages show candle charts from market data.
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
        Not yet. In trading mode agents record simulated buys within the per-trade limit you set and send no transactions. On-chain execution is not live yet. Manual swaps are always signed by you in your wallet.
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
            No-code agent builder with 3 pipeline types
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
            Credit system and wallet connection on Robinhood Chain
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
            Candle charts on token pages
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
            Agent marketplace to publish and follow
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
            Token search across Robinhood Chain
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
            Telegram alerts for agents
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
            Agent on-chain execution with approval mode (planned)
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
            Credit packs and Pro plan, paid in USDG
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
    badge: (
      <span
        className="font-mono uppercase"
        style={{ fontSize: "0.62rem", padding: "2px 7px", color: "var(--v2-accent-text)", background: "rgba(var(--v2-accent-rgb),0.10)", border: "1px solid rgba(var(--v2-accent-rgb),0.25)", letterSpacing: "0.12em" }}
      >
        Coming Soon
      </span>
    ),
    content: (
      <p
        className="font-mono text-sm leading-relaxed"
        style={{ color: "rgba(255, 255, 255, 0.55)", maxWidth: "580px" }}
      >
        A share of future swap fees is planned to buy back and burn $CRVD. Neither the token nor any swap fee exists yet.
      </p>
    ),
  },
  {
    label: "Your agent becomes a tradeable token",
    badge: (
      <span
        className="font-mono text-[11px] tracking-[0.12em] uppercase px-2 py-0.5 rounded-sm"
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
        className="font-mono text-[11px] tracking-[0.12em] uppercase px-2 py-0.5 rounded-sm"
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
        className="font-mono text-[11px] tracking-[0.12em] uppercase px-2 py-0.5 rounded-sm"
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
