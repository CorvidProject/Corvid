import type { DocPageData } from "@/components/docs/doc-article";

// Isi halaman docs yang ditulis dari perilaku sistem Corvid (runner agent, skor risiko GoPlus, launchpad, marketplace).
// Jika perilaku sistem berubah, perbarui di sini.

const STEPS_COMMON: [string, string] = [
  "Five checks, in order",
  "Market (does the trigger fire), Safety (risk checks), Position (is it already held), Decision (a 0 to 100 conviction score against your floor, 70 by default), Risk (position size against your per-trade limit). The agent stops at the first check that fails, and each run shows which one and why.",
];

const TRADING_NOTE =
  "Trading mode is a simulation today. A passing run records a dry-run buy with its USD value and sends you a notification, and nothing is sent on-chain. Slippage, take profit, stop loss and cancel-if-moved are saved with the agent but not applied yet, because simulated agents only record buys.";

export const PAGES = {
  followWallet: {
    code: "DOC.PIPE.010",
    tag: "PIPELINES",
    title: "Follow Wallet",
    intro: "Watch one wallet and react when it buys. You get a signal in your inbox, or in trading mode a simulated copy trade, after the token passes your checks.",
    sections: [
      {
        title: "How it works",
        steps: [
          ["Pick a wallet", "Paste an EVM address (0x…). It is required and cannot be changed after the agent is created. Wallets listed in Alpha and Wallet Tracking are the ones Corvid reads activity for."],
          ["Corvid sees its trades", "The wallet's recent buys and sells are refreshed about every 10 minutes, so a copy signal can lag the original trade by that long."],
          ["Your filters", "Only buys (on by default) drops sells. Min trade size skips dust below the ETH amount you set."],
          STEPS_COMMON,
        ],
      },
      {
        title: "Settings",
        cards: [
          ["Wallet address", "The wallet to follow. Locked after creation."],
          ["Only buys", "On by default. Turn it off to also react to sells."],
          ["Min trade size (ETH)", "Ignores source trades smaller than this."],
          ["Min wallet win rate %", "Saved with the agent but not applied yet."],
          ["Max ETH per trade", "Trading mode. The simulated size is the smaller of this and your per-trade limit. A per-trade limit is required in trading mode."],
          ["Telegram alerts", "Sends the result to your Telegram once you link it in Settings."],
        ],
      },
      {
        title: "Timing and limits",
        rows: [
          ["Check rate", "About once a minute."],
          ["Look-back", "Only trades by the wallet in the last 15 minutes are considered."],
          ["Repeats", "Each token is evaluated once per 24 hours per agent."],
          ["Batch", "At most 3 tokens per check."],
          ["Not indexed", "If Corvid has not indexed the token yet, the run stops with that reason."],
        ],
      },
    ],
    note: { label: "Trading mode", text: TRADING_NOTE },
    next: [
      { href: "/docs/wallet-tracking", kicker: "DEEP DIVE →", label: "Wallet Tracking" },
      { href: "/docs/agents/new-tokens", kicker: "NEXT →", label: "New Tokens" },
    ],
  },

  newTokens: {
    code: "DOC.PIPE.020",
    tag: "PIPELINES",
    title: "New Tokens",
    intro: "Scan fresh launches on Robinhood Chain and only pass the ones that clear your safety filters. Because nothing is chosen for it, this pipeline is the strictest about missing data.",
    sections: [
      {
        title: "How it works",
        steps: [
          ["Scan", "Automatic. Tokens created on-chain in the last hour that Corvid saw in the last 30 minutes are candidates."],
          ["Filter", "Minimum liquidity, maximum developer share, and minimum liquidity burned or locked."],
          ["Safety", "A token marked as a honeypot, or with a risk score of 60 or more, is blocked. A token with no security data yet is also blocked here, because it cannot be verified. Other pipelines let that pass with a warning."],
          STEPS_COMMON,
        ],
      },
      {
        title: "Settings",
        cards: [
          ["Min liquidity (USD)", "Pools with less liquidity stop at the first check."],
          ["Max dev wallet %", "Blocks tokens where the creator holds more than this share, when that data is known."],
          ["Min LP burn %", "Blocks tokens where less than this share of liquidity is burned or locked, when that data is known."],
          ["Careful, Balanced, Fast", "Quick-start presets that fill these values. Careful is tighter and smaller, Fast is looser and larger."],
        ],
      },
      {
        title: "Timing and limits",
        rows: [
          ["Check rate", "About once a minute."],
          ["Batch", "At most 3 new tokens per check."],
          ["Repeats", "Each token is evaluated once per 24 hours per agent."],
          ["Idle runs", "When nothing new appears, one idle run is logged every 15 minutes so you can see the agent is alive."],
        ],
      },
    ],
    note: { label: "Trading mode", text: TRADING_NOTE },
    next: [
      { href: "/docs/risk-scoring", kicker: "DEEP DIVE →", label: "Risk Scoring" },
      { href: "/docs/agents/token-trading", kicker: "NEXT →", label: "Token Trading" },
    ],
  },

  tokenTrading: {
    code: "DOC.PIPE.030",
    tag: "PIPELINES",
    title: "Token Trading",
    intro: "Pick one token and a trigger. The agent checks it and acts when the trigger fires: a price move, a volume spike, or a liquidity drop.",
    sections: [
      {
        title: "Triggers",
        text: ["All price moves use the last hour. The threshold is a percentage."],
        cards: [
          ["Price drop", "Fires when the price fell by at least the threshold."],
          ["Price surge", "Fires when the price rose by at least the threshold."],
          ["Percent change", "Fires on a move of at least the threshold in either direction."],
          ["Volume spike", "Fires when the last hour of volume is at least the multiplier times the hourly average (24 hour volume divided by 24)."],
          ["LP drop", "Fires when liquidity is down at least the threshold since this agent's previous check. The first check only records a starting point."],
        ],
      },
      {
        title: "How it works",
        steps: [
          ["Watch", "Paste the token address (0x…). It is required and locked after creation. The token must already be indexed by Corvid."],
          ["Trigger", "The market check compares the live numbers with your trigger. If it does not fire, the run stops there and tells you the measured value, for example that the price moved 0.06% and has not dropped 0.1%."],
          STEPS_COMMON,
        ],
      },
      {
        title: "Timing and limits",
        rows: [
          ["Check rate", "Each token is evaluated once per hour per agent, so a trigger can take up to an hour to be noticed."],
          ["Already held", "If the agent already holds the token (from earlier simulated buys), it will not buy again."],
          ["Entry condition", "The optional entry condition fields are saved but not applied yet."],
          ["Editing", "You can change the trigger and thresholds on a running agent from My agents, Edit. The change applies from its next check."],
        ],
      },
    ],
    note: { label: "Trading mode", text: TRADING_NOTE },
    next: [
      { href: "/docs/agents/templates", kicker: "NEXT →", label: "Templates" },
      { href: "/docs/agents/follow-wallet", kicker: "RELATED →", label: "Follow Wallet" },
    ],
  },

  riskScoring: {
    code: "DOC.RISK.010",
    tag: "RISK",
    title: "Risk scoring",
    intro: "Every token with security data gets a score from 0 (low risk) to 100 (dangerous). It is built from contract, trading and holder checks, and agents use it to skip risky tokens.",
    sections: [
      {
        title: "Reading the score",
        rows: [
          ["0 to 30", "Low. Shown green."],
          ["31 to 60", "Caution. Shown amber."],
          ["Above 60", "Danger. Shown red."],
          ["Honeypot", "Buyers cannot sell. The score is forced to 100."],
          ["No data", "Shown as unchecked, never as safe. A missing check adds nothing to the score and is not treated as a pass."],
        ],
      },
      {
        title: "What adds to the score",
        text: ["Each failed or warned check adds points, and the total is capped at 100. The weights are Corvid's own judgment. The underlying flags come from GoPlus security data for Robinhood Chain."],
        cards: [
          ["Trading", "Buying blocked +40. Cannot sell full balance +40. Buy or sell tax of 20% or more +30 (above 5% +10). Transfers can be paused +15. Blacklist function +10. Slippage modifiable +10."],
          ["Contract", "Hidden owner +25. Owner can reclaim ownership +25. Owner can change balances +25. Self-destruct +20. Source not verified +15. Mintable +15. Upgradeable proxy +10. External calls +5."],
          ["Holders and liquidity", "Top 10 holders own 80% or more +20 (50% or more +10). Creator holds 10% or more +10. Under 20% of liquidity locked or burned +10 (under 50% +5)."],
          ["Freshness", "Security data is refreshed in batches for the most active tokens, about every 10 minutes. A brand-new token can show unchecked for a short while."],
        ],
      },
      {
        title: "How agents use it",
        rows: [
          ["Blocked", "A honeypot, or a score of 60 or more, stops the run at the Safety check."],
          ["Your limits", "Max dev wallet % and Min LP burn % add their own blocks when that data is known."],
          ["Conviction", "A low score raises the decision score and an elevated one lowers it, so risk also affects whether a token clears your floor."],
          ["Unchecked tokens", "New Tokens agents block them. Follow Wallet and Token Trading agents continue and note that no security data exists yet."],
        ],
      },
    ],
    note: { label: "Not a guarantee", text: "A low score means no known red flags in the data we have. It is not a safety guarantee, and it is not financial advice. Always check a token yourself before risking money." },
    next: [
      { href: "/docs/token-analysis", kicker: "DEEP DIVE →", label: "Token Analysis" },
      { href: "/docs/agents/new-tokens", kicker: "RELATED →", label: "New Tokens" },
    ],
  },

  following: {
    code: "DOC.ECON.020",
    tag: "FOLLOWING",
    title: "Following",
    intro: "You can follow agents that other people published, and wallets you want to keep an eye on. Following delivers signals. It never trades for you.",
    sections: [
      {
        title: "Follow an agent",
        steps: [
          ["Browse the marketplace", "Open Marketplace and look at a published agent. You see its name, type, description and activity counts. The owner's settings, limits and addresses stay private."],
          ["Press Follow", "From then on, each time that agent finds a match, the signal lands in your inbox."],
          ["Unfollow any time", "Unfollowing stops new signals immediately. You can follow up to 200 agents."],
        ],
      },
      {
        title: "What followers get",
        rows: [
          ["Signals", "The same match the owner sees, in your inbox. Details of the owner's simulated trades are not shared."],
          ["Telegram", "Not for followers. Telegram alerts go to the owner of an agent only."],
          ["Trades", "Following never places a trade from your wallet."],
        ],
      },
      {
        title: "Follow a wallet",
        text: ["To keep an eye on a wallet yourself, star it in Alpha to add it to your list, or point a Follow Wallet agent at it to be alerted when it buys."],
      },
    ],
    note: { label: "Cashback", text: "Cashback is not live. Corvid does not charge a swap commission today, so there is nothing to rebate. If that changes it will be announced here." },
    next: [
      { href: "/docs/agents/marketplace", kicker: "BACK →", label: "Browse & Follow" },
      { href: "/docs/graduation", kicker: "DEEP DIVE →", label: "Graduation" },
    ],
  },

  graduation: {
    code: "DOC.ECON.030",
    tag: "GRADUATION",
    title: "Graduation",
    intro: "Some launchpads sell a new token along a bonding curve and move it to a regular trading pool once the curve fills. That move is graduation, and Corvid shows how close each token is.",
    sections: [
      {
        title: "Launchpads Corvid tracks",
        rows: [
          ["Pons", "A curve in ETH. Graduation is at 4.2 ETH collected. That figure is backed by on-chain evidence and secondary sources, because Pons has no official documentation we could find."],
          ["Virtuals", "A curve quoted in VIRTUAL. Graduation is at 42,000 VIRTUAL, from Virtuals' own materials."],
          ["Others", "Launchpads that create a Uniswap pool directly have no curve and no progress bar. Their tokens still appear under Latest."],
        ],
      },
      {
        title: "Stages",
        cards: [
          ["New", "A fresh curve with little or nothing collected."],
          ["Final stretch", "The curve is 50% or more of the way to graduation."],
          ["Migrated", "The curve is complete and the token moved to a regular pool."],
          ["Where to see it", "The Memescope screen groups tokens by these stages. Progress is read from the chain about every 5 minutes."],
        ],
      },
    ],
    note: { label: "About agents", text: "Graduation here means tokens leaving a launchpad curve. Corvid agents do not issue tokens of their own, and there is no agent graduation. A New Tokens agent can pick up a token after it migrates like any other new pool." },
    next: [
      { href: "/docs/agents/new-tokens", kicker: "RELATED →", label: "New Tokens" },
      { href: "/docs/risk-scoring", kicker: "RELATED →", label: "Risk Scoring" },
    ],
  },

  backing: {
    code: "DOC.ECON.040",
    tag: "BACKING",
    title: "Backing agents",
    intro: "Backing an agent, meaning putting funds behind it, is not part of Corvid today. There is nothing to set up and no funds are accepted for it.",
    sections: [
      {
        title: "Status",
        rows: [
          ["Available", "No."],
          ["What exists instead", "You can publish an agent to the marketplace and other people can follow it for signals. Following is free and does not move money."],
          ["Your funds", "Corvid is non-custodial. Your wallet stays yours, and no Corvid screen asks you to send funds to an agent."],
        ],
      },
    ],
    note: { label: "Stay safe", text: "If anyone offers a Corvid backing program, treat it as a scam and do not send funds. The only official places to read about Corvid are this documentation and the app." },
    next: [
      { href: "/docs/agents/marketplace", kicker: "BACK →", label: "Browse & Follow" },
      { href: "/docs/following", kicker: "RELATED →", label: "Following" },
    ],
  },

  buyback: {
    code: "DOC.ECON.050",
    tag: "BUYBACK",
    title: "Buyback",
    intro: "There is no buyback program running on Corvid today.",
    sections: [
      {
        title: "Status",
        rows: [
          ["Available", "No. Nothing is bought back or burned on a schedule."],
          ["Why", "A buyback needs a token and fees to fund it. The $CRVD token has not been launched and Corvid charges no swap commission."],
          ["Burn dashboard", "Shows burns only once a token and a burn program exist. Until then there is nothing live to report."],
        ],
      },
    ],
    note: { label: "Announcements", text: "If a token launches, its official details, contract address and any buyback rules will be published in this documentation first. Verify any contract address against it before interacting." },
    next: [
      { href: "/docs/burn-dashboard", kicker: "BACK →", label: "Burn Dashboard" },
      { href: "/docs/token", kicker: "RELATED →", label: "Token" },
    ],
  },
} satisfies Record<string, DocPageData>;
