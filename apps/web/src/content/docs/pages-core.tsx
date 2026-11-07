import type { DocPageData } from "@/components/docs/doc-article";
import { PLAN_LIMITS, PRODUCTS } from "@corvid/shared";

// Halaman docs inti, ditulis dari perilaku sistem Corvid. Hal yang belum ada ditandai "(Soon)".
// Angka kuota dan harga diambil dari packages/shared/src/plans.ts supaya tidak berbeda dari sistem.

const f = PLAN_LIMITS.free;
const p = PLAN_LIMITS.pro;
const n = (x: number) => x.toLocaleString("en-US");

const NOT_ADVICE = "Corvid shows data and runs simulations. Nothing here is financial advice, and you are responsible for every trade you sign.";

export const CORE = {
  intro: {
    code: "DOC.INTRO.001",
    tag: "INTRODUCTION",
    title: "The manual",
    intro: "Corvid runs agents on Robinhood Chain that watch smart-money wallets and new tokens, read the risk, and alert you. Your wallet stays yours: Corvid never holds your keys.",
    sections: [
      {
        title: "What you can do",
        cards: [
          ["Build pipelines", "Three pipeline types: Follow Wallet, New Tokens and Token Trading. Each runs in signal mode (alerts) or trading mode (simulated trades)."],
          ["Follow agents", "Follow agents other people published and get their signals in your inbox. Following is free and never trades for you."],
          ["Get signals", "Matches land in your inbox, and in Telegram once you link it in Settings."],
          ["Read the market", "Paste a token address into the terminal for price, holders, a 0 to 100 risk score and recent trades. Alpha lists the smart wallets Corvid tracks."],
          ["Swap manually", "Swap on Uniswap v3 from your own wallet. You review the quote and sign every transaction yourself."],
          ["Ask the AI", "Chat and deep token analysis run on a monthly quota, plus credits when you use it up."],
        ],
      },
      {
        title: "From zero to your first signal",
        steps: [
          ["Create an account", "Sign in with email or a wallet. New accounts get welcome credits for AI answers."],
          ["Connect your wallet", "Use any EVM wallet such as MetaMask and switch to Robinhood Chain. Corvid asks you to sign, never for your seed phrase or private key."],
          ["Pick a pipeline", "Open Agents, choose New agent, pick a quick start (Careful, Balanced or Fast) and adjust the filters."],
          ["Link Telegram (optional)", "In Settings press Connect Telegram, send the code to the bot, then switch on Telegram alerts for the agent."],
          ["Wait for a match", "The agent checks about once a minute. Each run shows which of its five checks passed or stopped it, and why."],
        ],
      },
      {
        title: "Your wallet",
        text: [
          "Corvid is non-custodial. You connect a wallet you already own, and Corvid does not create one for you or store a private key. Swaps are signed in your wallet, one by one.",
          "Agents do not sign anything today. In trading mode they record simulated buys, so no funds can leave your wallet because of an agent.",
        ],
      },
      {
        title: "What is not live yet",
        rows: [
          ["Agent trading from your wallet (Soon)", "Agents simulate trades today. Real execution will only be switched on after it is built and tested."],
          ["Fees, cashback and revenue share (Soon)", "Corvid takes no swap commission today, so there is nothing to rebate or split."],
          ["The $CRVD token (Soon)", "Not launched. Official details will appear in this documentation first."],
          ["Backing and buyback (Soon)", "Not part of Corvid yet."],
        ],
      },
    ],
    note: { label: "Not advice", text: NOT_ADVICE },
    next: [
      { href: "/docs/quick-start", kicker: "NEXT →", label: "Quick Start" },
      { href: "/docs/agents", kicker: "DEEP DIVE →", label: "How Pipelines Work" },
    ],
  },

  quickStart: {
    code: "DOC.START.002",
    tag: "QUICK START",
    title: "Quick start",
    intro: "From a new account to your first agent alert in a few minutes.",
    sections: [
      {
        title: "Set up",
        steps: [
          ["Create your account", "Sign in with email or a wallet. Welcome credits are added for AI answers."],
          ["Connect a wallet", "Press the wallet button in the header, pick your EVM wallet and switch to Robinhood Chain."],
          ["Look around", "Open the terminal and paste a token address, or browse Alpha for smart wallets and Memescope for launches."],
        ],
      },
      {
        title: "Your first agent",
        steps: [
          ["Choose a pipeline", "Agents, New agent. Pick Follow Wallet, New Tokens or Token Trading, then a preset."],
          ["Set the filters", "Click a node to edit it. Token Trading needs a token address, Follow Wallet needs a wallet address."],
          ["Keep it in signal mode", "Signal mode only alerts you. Trading mode records simulated buys and needs a per-trade limit."],
          ["Deploy and resume", "Deploy creates the agent. Press Resume on its card to start it. You can edit it later without stopping it."],
          ["Link Telegram", "Settings, Connect Telegram. Then keep Telegram alerts on in the agent."],
        ],
      },
      {
        title: "Good to know",
        rows: [
          ["Cost", "Following agents, signals, creating agents and manual swaps have no Corvid fee. Only AI answers use quota and credits."],
          ["Checks", "Agents check about once a minute. A token is evaluated once per day or once per hour depending on the pipeline, so a quiet market means few runs."],
          ["No $CRVD needed", "The $CRVD token is not launched. You do not need it for anything."],
        ],
      },
    ],
    note: { label: "Not advice", text: NOT_ADVICE },
    next: [
      { href: "/docs/agents", kicker: "NEXT →", label: "How Pipelines Work" },
      { href: "/docs/signals/telegram", kicker: "RELATED →", label: "Telegram setup" },
    ],
  },

  agents: {
    code: "DOC.PIPE.001",
    tag: "PIPELINES",
    title: "How pipelines work",
    intro: "A pipeline is an agent that watches the chain on a schedule, checks what it finds against your rules, and tells you or records a simulated trade.",
    sections: [
      {
        title: "Three pipelines",
        cards: [
          ["Follow Wallet", "Reacts when a wallet you pick buys. See the Follow Wallet page."],
          ["New Tokens", "Scans fresh launches against your safety filters. See the New Tokens page."],
          ["Token Trading", "Watches one token for a trigger such as a price drop or volume spike. See the Token Trading page."],
        ],
      },
      {
        title: "Signal and trading mode",
        rows: [
          ["Signal", "A match sends a notification. Nothing is executed. This is the default."],
          ["Trading", "A match also records a simulated buy with its USD value. A per-trade limit is required, and the size is the smaller of your setting and that limit."],
          ["On-chain execution (Soon)", "No agent sends a transaction today. Slippage, take profit, stop loss and cancel-if-moved are saved with the agent for when execution exists."],
        ],
      },
      {
        title: "The five checks",
        steps: [
          ["Market", "Did the trigger or filter fire?"],
          ["Safety", "Honeypots and tokens with a risk score of 60 or more are blocked, plus your dev share and liquidity burn limits."],
          ["Position", "The agent will not buy a token it already holds from earlier simulated buys."],
          ["Decision", "A 0 to 100 conviction score from liquidity, activity, holders and risk. It must reach your floor, 70 by default. This is a fixed rule set, not an AI model."],
          ["Risk", "In trading mode, the position size is checked against your per-trade limit."],
        ],
      },
      {
        title: "Managing agents",
        rows: [
          ["Run log", "Open an agent to see each run and the check that stopped it, with the measured values."],
          ["Pause and resume", "Pause stops new runs. Resume starts them again. Your history is kept."],
          ["Edit", "Edit changes filters, limits, name and Telegram alerts while the agent keeps running. The change applies from its next check. The pipeline, mode and the token or wallet address are fixed."],
          ["Publish", "Add a short description to list an agent in the marketplace. Others can follow it for signals. Your settings and addresses stay private."],
          ["Limit", "Up to 20 agents per account."],
        ],
      },
      {
        title: "Common questions",
        cards: [
          ["Does an AI decide each trade?", "No. Checks and the conviction score are deterministic rules. The AI chat and deep analysis are separate and use your AI quota."],
          ["Can an agent spend my funds?", "No. Agents hold no keys and send no transactions today, so they cannot move your funds."],
          ["Do I pay when I follow an agent?", "No. Following is free and only delivers signals."],
          ["Why so few runs?", "Each token is checked once per hour (Token Trading) or once per day (New Tokens, Follow Wallet). A run is also logged every 15 minutes when there is nothing to evaluate."],
        ],
      },
    ],
    note: { label: "Not advice", text: NOT_ADVICE },
    next: [
      { href: "/docs/agents/follow-wallet", kicker: "NEXT →", label: "Follow Wallet" },
      { href: "/docs/agents/templates", kicker: "DEEP DIVE →", label: "Templates" },
    ],
  },

  templates: {
    code: "DOC.PIPE.040",
    tag: "TEMPLATES",
    title: "Templates",
    intro: "Quick starts fill a pipeline with sensible values. Pick Careful, Balanced or Fast in the builder, then adjust anything you like.",
    sections: [
      {
        title: "Presets",
        cards: [
          ["Careful", "Tighter filters and smaller trade sizes."],
          ["Balanced", "Moderate filters and sizes. A good start if you are unsure."],
          ["Fast", "Looser filters and larger sizes. For people who accept the risk of acting early."],
        ],
      },
      {
        title: "New Tokens (Careful / Balanced / Fast)",
        rows: [
          ["Min liquidity", "$20,000 / $5,000 / $2,000"],
          ["Max dev wallet", "5% / 10% / 25%"],
          ["Min LP burn", "95% / 80% / 0%"],
          ["Max ETH per trade", "0.05 / 0.1 / 0.2"],
        ],
      },
      {
        title: "Token Trading (Careful / Balanced / Fast)",
        rows: [
          ["Trigger threshold", "10% / 5% / 3%"],
          ["Volume multiplier", "10x / 5x / 3x"],
          ["Max ETH per trade", "0.05 / 0.1 / 0.25"],
        ],
      },
      {
        title: "Follow Wallet (Careful / Balanced / Fast)",
        rows: [
          ["Min source trade", "0.1 / 0.05 / 0.02 ETH"],
          ["Max ETH per copy", "0.02 / 0.05 / 0.2"],
          ["Only buys", "On in all three"],
        ],
      },
      {
        title: "What is applied today",
        text: ["Filters, triggers and the per-trade size are applied by the agent. Slippage, take profit, stop loss, cancel-if-moved and the minimum wallet win rate are saved with the preset but not applied yet, because agents simulate buys and do not send transactions (Soon)."],
      },
    ],
    note: { label: "Private by default", text: "Agents you create start private. Publish one from My agents when you want others to follow it. Followers get its signals for free." },
    next: [
      { href: "/docs/agents/marketplace", kicker: "NEXT →", label: "Browse & follow" },
      { href: "/docs/agents", kicker: "BACK →", label: "How pipelines work" },
    ],
  },

  signals: {
    code: "DOC.SIGNAL.040",
    tag: "SIGNALS",
    title: "Your inbox",
    intro: "Everything your agents and the agents you follow find lands in one inbox. Link Telegram in Settings to get the same alerts on your phone.",
    sections: [
      {
        title: "What shows up",
        cards: [
          ["Agent match", "A pipeline found a token or wallet move that passed its checks. Follow Wallet, New Tokens and Token Trading agents all send these, with the reason."],
          ["Simulated trade", "A trading-mode agent recorded a dry-run buy. It names the size and says it is a simulation. No transaction is sent."],
          ["Wallet signals", "A tracked top-tier wallet made a new buy shortly before. These come from Alpha, not from an agent."],
          ["Account notices", "Messages about your account, such as the welcome note."],
        ],
      },
      {
        title: "Using the inbox",
        rows: [
          ["Tabs and filters", "Switch between Signals, Tokens and Wallets, and narrow by category."],
          ["Followed agents", "Signals from agents you follow arrive here too. Telegram alerts go to an agent's owner only."],
          ["Position exits (Soon)", "Take-profit and stop-loss alerts need real positions, which simulated agents do not have."],
          ["Execution confirmations (Soon)", "Transaction links appear once agents can execute on-chain."],
        ],
      },
      {
        title: "How often",
        rows: [
          ["Per token", "An agent evaluates a given token once per hour (Token Trading) or once per day (New Tokens, Follow Wallet), so it does not repeat itself."],
          ["Telegram", "At most 20 messages per hour per account. The inbox keeps everything."],
          ["Idle runs", "Quiet agents log a run every 15 minutes, but only real matches create a signal."],
        ],
      },
    ],
    note: { label: "Not advice", text: NOT_ADVICE },
    next: [
      { href: "/docs/signals/telegram", kicker: "NEXT →", label: "Telegram setup" },
      { href: "/docs/portfolio", kicker: "DEEP DIVE →", label: "Portfolio" },
    ],
  },

  terminal: {
    code: "DOC.FEAT.030",
    tag: "TERMINAL",
    title: "Terminal",
    intro: "Paste a token address and see what matters on one screen: price, stats, risk and recent trades. Swap from your own wallet when you decide to.",
    sections: [
      {
        title: "What you see",
        cards: [
          ["Price and chart", "Live price from the main pool, a candle chart with selectable intervals, and the 24 hour change."],
          ["Token stats", "Market cap, liquidity, holder count and the share held by the top 10 wallets, when the data is available."],
          ["Risk", "A 0 to 100 score with the checks behind it. See Risk scoring. A token with no security data shows as unchecked."],
          ["Recent trades", "The latest buys and sells with size and wallet."],
        ],
      },
      {
        title: "Swapping",
        steps: [
          ["Open Swap", "Pick what to sell and buy, and an amount."],
          ["Review the quote", "Corvid asks Uniswap v3 for a quote and shows the pool fee, your slippage and the minimum you will receive."],
          ["Approve and sign", "If the token needs approval you approve it first. You sign each transaction in your own wallet."],
        ],
      },
      {
        title: "Good to know",
        rows: [
          ["Cost", "Corvid adds no fee. You pay the pool fee and gas in ETH."],
          ["Slippage", "Set in Settings. A larger value fills more often at a worse price."],
          ["Your wallet", "Corvid never holds your funds or keys. Nothing is signed for you."],
        ],
      },
    ],
    note: { label: "Not advice", text: NOT_ADVICE },
    next: [
      { href: "/docs/token-analysis", kicker: "NEXT →", label: "Token analysis" },
      { href: "/docs/wallet-tracking", kicker: "DEEP DIVE →", label: "Wallet tracking" },
    ],
  },

  walletTracking: {
    code: "DOC.WALLET.070",
    tag: "WALLET TRACKING",
    title: "Wallet tracking",
    intro: "Alpha lists the smart wallets Corvid tracks, so you can see who is profitable, star the ones you care about, and automate alerts.",
    sections: [
      {
        title: "How it works",
        steps: [
          ["Discover", "Alpha ranks tracked wallets by profit and recent activity. Each gets a tier (S, A, B or C) from its realized results."],
          ["Inspect", "Open a wallet to see how it has traded and its latest activity."],
          ["Star", "Star a wallet to add it to your list (Starred). Your list is yours and is private."],
          ["Automate", "Point a Follow Wallet agent at the address to be alerted, or to record simulated copies, when it buys."],
        ],
      },
      {
        title: "Where the data comes from",
        rows: [
          ["Source", "Wallets are scored from on-chain trades of the most active tokens over roughly the last 48 hours, not from anything the wallets report about themselves."],
          ["Refresh", "About every 10 minutes. A signal can lag the original trade by that long."],
          ["Coverage", "Only wallets in the tracked set are followed by agents. An address outside it produces no signals."],
          ["Wallet signals", "A new buy by an S or A tier wallet in the last 30 minutes creates a wallet signal."],
        ],
      },
    ],
    note: { label: "Tip", text: "One wallet moving alone is often just a rotation. Several unrelated strong wallets entering the same token at the same time is a better sign. Neither is a guarantee." },
    next: [
      { href: "/docs/agents/follow-wallet", kicker: "NEXT →", label: "Follow Wallet" },
      { href: "/docs/terminal", kicker: "DEEP DIVE →", label: "Terminal" },
    ],
  },

  tokenAnalysis: {
    code: "DOC.FEAT.040",
    tag: "TOKEN ANALYSIS",
    title: "Token analysis",
    intro: "Open any token to see its numbers, its security checks and a 0 to 100 risk score, and ask the AI about it.",
    sections: [
      {
        title: "On a token page",
        cards: [
          ["Market data", "Price, market cap, liquidity, volume and moves over several time frames."],
          ["Holders and liquidity", "Holder count, top 10 concentration, the share of liquidity burned or locked, and the creator's share, when known."],
          ["Security checks", "Contract permissions (mint, pause, blacklist, hidden owner), trading flags (honeypot, taxes) and holder checks, each marked pass, warn, fail or unknown."],
          ["Recent trades", "Latest buys and sells."],
        ],
      },
      {
        title: "Reading the score",
        rows: [
          ["0 to 30", "Low risk. No major red flags in the data."],
          ["31 to 60", "Caution. Something deserves a closer look."],
          ["Above 60", "Danger. Agents skip these."],
          ["Unchecked", "No security data yet. That is not the same as safe."],
        ],
      },
      {
        title: "Ask the AI",
        text: ["Chat and deep token analysis use your monthly AI quota, then credits. A deep analysis includes the token's data in the answer. See Credits & billing."],
      },
    ],
    note: { label: "Not a buy signal", text: "A low score means common traps are not visible in the data. Price action, timing and the story behind a token are still your call." },
    next: [
      { href: "/docs/risk-scoring", kicker: "NEXT →", label: "Risk scoring" },
      { href: "/docs/terminal", kicker: "DEEP DIVE →", label: "Terminal" },
    ],
  },

  marketplace: {
    code: "DOC.MKT.010",
    tag: "MARKETPLACE",
    title: "Browse & follow",
    intro: "The marketplace lists agents that other people published. Follow one to receive its signals. Following never copies trades or spends your funds.",
    sections: [
      {
        title: "Browsing",
        text: ["Each agent shows its name, pipeline type, description and activity: followers, checks, signals and trades. Sort and filter by pipeline type to compare. These are counts of what the agent did, not a promise of results."],
      },
      {
        title: "Following",
        steps: [
          ["Press Follow", "The agent's matches start arriving in your inbox. You can follow up to 200 agents."],
          ["Read the signal", "You see the same match its owner sees. Details of the owner's simulated trades are not shared."],
          ["Unfollow any time", "Press Unfollow and signals stop at once."],
        ],
      },
      {
        title: "Publishing your own",
        rows: [
          ["How", "My agents, Publish. A description of up to 280 characters is required."],
          ["Public", "Name, type, description and activity counts."],
          ["Private", "Your filters, limits, addresses and Telegram settings."],
          ["Unpublish", "Removes the listing. Followers stop receiving its signals."],
        ],
      },
      {
        title: "What is not available yet",
        rows: [
          ["Copying an agent's trades (Soon)", "Following delivers signals only."],
          ["Creator earnings and fee sharing (Soon)", "Creators are not paid by followers today, and followers pay nothing."],
          ["Automatic pausing on losses (Soon)", "There is no performance guard on published agents yet, so judge an agent by its run log and counts."],
        ],
      },
    ],
    note: { label: "Not advice", text: "A published agent is someone else's rules running on public data. A signal is information, not a recommendation." },
    next: [
      { href: "/docs/following", kicker: "NEXT →", label: "Following" },
      { href: "/docs/graduation", kicker: "DEEP DIVE →", label: "Graduation" },
    ],
  },

  credits: {
    code: "DOC.PLAN.001",
    tag: "PLAN & USAGE",
    title: "Credits & billing",
    intro: "Corvid is free to use. Only AI answers are metered: a monthly quota first, then credits. Trading, following and agents have no Corvid fee.",
    sections: [
      {
        title: "Monthly quota",
        rows: [
          ["Free", `${n(f.chat)} AI chat answers and ${n(f.deep)} deep token analyses per month.`],
          ["Pro", `${n(p.chat)} AI chat answers and ${n(p.deep)} deep token analyses per month.`],
          ["Resets", "At the start of each calendar month, UTC."],
          ["Deep analysis", "An AI answer about a specific token, using the token's data."],
        ],
      },
      {
        title: "Credits",
        text: ["When your monthly quota for a kind of answer is used up, each further answer costs 1 credit. Credits are an in-app counter, not a token, and they do not expire."],
        rows: [
          ["Welcome credits", "New accounts get 25. To stop farming, a limited number of new accounts per network get them each day."],
          ["Out of both", "The AI button asks you to add credits. Everything else keeps working."],
        ],
      },
      {
        title: "Buying",
        text: ["Paid options use USDG on Robinhood Chain, paid from your own wallet."],
        rows: [
          [PRODUCTS.credits_50.label, `$${PRODUCTS.credits_50.usd}`],
          [PRODUCTS.credits_300.label, `$${PRODUCTS.credits_300.usd}`],
          [PRODUCTS.pro_1m.label, `$${PRODUCTS.pro_1m.usd}`],
          [`${PRODUCTS.pro_3m.label} / ${PRODUCTS.pro_12m.label}`, `$${PRODUCTS.pro_3m.usd} / $${PRODUCTS.pro_12m.usd}`],
        ],
      },
      {
        title: "How paying works",
        steps: [
          ["Choose", "Open Plan & Usage and pick a pack or a Pro plan."],
          ["Get an exact amount", "Corvid creates an order with a slightly adjusted amount that is unique to it. Send exactly that amount of USDG, or the payment cannot be matched."],
          ["Send from your wallet", "You sign the transfer. Corvid never moves your funds."],
          ["Confirmed on-chain", "After a couple of block confirmations Corvid verifies the transfer and applies the credits or Pro. Unpaid orders expire."],
        ],
      },
      {
        title: "Free of charge",
        rows: [
          ["Agents", "Creating, running, pausing and editing agents."],
          ["Signals", "Inbox, Telegram alerts and following published agents."],
          ["Swapping", "Corvid adds no commission to swaps. The pool fee and network gas still apply."],
        ],
      },
    ],
    note: { label: "Not a token", text: "Credits and Pro are plain account balances. They are not the $CRVD token, which has not launched." },
    next: [
      { href: "/docs/agents", kicker: "NEXT →", label: "How Pipelines Work" },
      { href: "/docs/economy", kicker: "DEEP DIVE →", label: "Splits & Fees" },
    ],
  },

  economy: {
    code: "DOC.ECON.010",
    tag: "ECONOMY",
    title: "Splits & fees",
    intro: "What Corvid charges today is simple: nothing on trades. The fee splits, cashback and revenue share described in earlier drafts are not live.",
    sections: [
      {
        title: "Today",
        rows: [
          ["Corvid swap commission", "None. Swaps go to Uniswap v3 from your wallet with no Corvid fee added."],
          ["Costs you still pay", "The Uniswap pool fee shown in the quote, and gas in ETH."],
          ["AI answers", "Monthly quota, then credits. See Credits & billing."],
          ["Agents, signals, following", "Free."],
        ],
      },
      {
        title: "Not live yet",
        rows: [
          ["Platform commission (Soon)", "No commission is charged."],
          ["Cashback (Soon)", "Nothing to rebate without a commission."],
          ["Creator revenue share (Soon)", "Creators of published agents earn nothing from followers today."],
          ["Burn and reserve splits (Soon)", "These depend on a token and fees that do not exist yet."],
        ],
      },
    ],
    note: { label: "If this changes", text: "Any fee will be announced in this documentation before it takes effect, with the exact split." },
    next: [
      { href: "/docs/credits", kicker: "BACK →", label: "Credits & billing" },
      { href: "/docs/following", kicker: "RELATED →", label: "Following" },
    ],
  },

  token: {
    code: "DOC.TOKEN.080",
    tag: "$CRVD TOKEN",
    title: "$CRVD",
    intro: "The $CRVD token has not launched. There is no contract, no sale and no airdrop.",
    sections: [
      {
        title: "Status",
        rows: [
          ["Launched", "No."],
          ["Contract address", "None exists. Any address presented as $CRVD today is not from Corvid."],
          ["Needed to use Corvid", "No. Nothing in the app requires or accepts it."],
        ],
      },
      {
        title: "Planned",
        rows: [
          ["Payments with $CRVD (Soon)", "Today AI credits and Pro are paid in USDG."],
          ["Burns and buybacks (Soon)", "They need a token and fees first. See Buyback."],
          ["Backing agents (Soon)", "Not built."],
        ],
      },
    ],
    note: { label: "Stay safe", text: "Only trust the official contract address once it is published here, and compare it before you interact. Corvid will never DM you to buy or claim a token." },
    next: [
      { href: "/docs/burn-dashboard", kicker: "NEXT →", label: "Burn dashboard" },
      { href: "/docs/buyback", kicker: "RELATED →", label: "Buyback" },
    ],
  },

  burn: {
    code: "DOC.TOKEN.090",
    tag: "BURN DASHBOARD",
    title: "Burn dashboard",
    intro: "There are no burns to show yet. The dashboard comes with the token.",
    sections: [
      {
        title: "Status",
        rows: [
          ["Burns so far", "None. No token has launched."],
          ["Burn streams (Soon)", "Which fees would burn, and how much, will be published here before they start."],
          ["Buyback log (Soon)", "See Buyback."],
        ],
      },
    ],
    note: { label: "Verify", text: "When burns exist, every one will link to its on-chain transaction so you can check it on the explorer." },
    next: [
      { href: "/docs/token", kicker: "BACK →", label: "$CRVD" },
      { href: "/docs/buyback", kicker: "NEXT →", label: "Buyback" },
    ],
  },

  portfolio: {
    code: "DOC.FEAT.050",
    tag: "PORTFOLIO",
    title: "Portfolio",
    intro: "Your balances in one place, read straight from your own wallet on-chain.",
    sections: [
      {
        title: "What you see",
        cards: [
          ["ETH and tracked tokens", "Balances of ETH and the tokens Corvid tracks, read on-chain for the wallet you connected."],
          ["Prices and moves", "Value in USD and the 24 hour change, using Corvid's market data."],
          ["Allocation", "A bar showing how your value splits across holdings. Sort by value or by change."],
          ["Refresh and explorer", "Refresh balances any time, or open the wallet on the explorer."],
        ],
      },
      {
        title: "What is not shown",
        rows: [
          ["Profit and loss (Soon)", "PnL needs your trade history and cost basis, which Corvid does not keep yet."],
          ["Untracked tokens", "Tokens Corvid does not track are not listed. Your wallet or the explorer shows everything."],
          ["Agent positions (Soon)", "Agents simulate buys today, so there are no real agent positions. Their runs are in My agents."],
          ["Testnet value", "Testnet ETH has no market value, so no USD total is shown there."],
        ],
      },
      {
        title: "Your keys",
        text: ["Corvid is non-custodial. The portfolio reads a wallet you connected, so there is no Corvid wallet to fund and no private key to export. If Corvid went offline, your funds would be exactly where they are now, in your wallet."],
      },
    ],
    note: { label: "Not advice", text: NOT_ADVICE },
    next: [
      { href: "/docs/terminal", kicker: "NEXT →", label: "Terminal" },
      { href: "/docs/credits", kicker: "RELATED →", label: "Credits & billing" },
    ],
  },
} satisfies Record<string, DocPageData>;
