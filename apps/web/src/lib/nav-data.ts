import {
  ArrowsLeftRight,
  BookOpen,
  Brain,
  ChartBar,
  ChartLineUp,
  Clock,
  Code,
  Coins,
  Crosshair,
  Fire,
  Planet,
  Recycle,
  Robot,
  Rocket,
  ShieldCheck,
  ShieldStar,
  Storefront,
  TrendUp,
  Trophy,
  Users,
  Wallet,
  type Icon,
} from "@phosphor-icons/react";

export interface NavItem {
  icon: Icon;
  label: string;
  desc: string;
  href: string;
  soon?: boolean;
  beta?: boolean;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export interface NavSection {
  label: string;
  columns: NavGroup[][];
}

export const NAV_SECTIONS: NavSection[] = [
  {
    label: "Trading",
    columns: [
      [
        {
          title: "Trade",
          items: [
            { icon: ChartLineUp, label: "Terminal", desc: "Live tokens and charts on six chains", href: "/application/terminal" },
            { icon: ArrowsLeftRight, label: "Swap", desc: "Trade any token in one card", href: "/application/swap" },
            { icon: Clock, label: "Latest Tokens", desc: "Pools opened in the last minutes", href: "/application/latest" },
            { icon: TrendUp, label: "Top Gainers", desc: "What is up the most today", href: "/application/gainers" },
            { icon: ChartBar, label: "High Volume", desc: "Where the money is trading", href: "/application/volume" },
            { icon: Planet, label: "Memescope", desc: "pump.fun launches, live by stage", href: "/application/memescope" },
          ],
        },
      ],
      [
        {
          title: "Wallets",
          items: [
            { icon: Fire, label: "Smart Wallets", desc: "Wallets that buy early", href: "/application/alpha" },
            { icon: Crosshair, label: "KOL Tracker", desc: "Live trades from tracked wallets", href: "/application/kol", soon: true },
            { icon: Trophy, label: "PnL Leaderboard", desc: "Top traders by realized profit", href: "/application/leaderboard" },
            { icon: Wallet, label: "My Positions", desc: "Your holdings and PnL", href: "/application/portfolio" },
          ],
        },
      ],
    ],
  },
  {
    label: "Agents",
    columns: [
      [
        {
          title: "Agents",
          items: [
            { icon: Users, label: "My agents", desc: "Your agents, their trades and results", href: "/application/agents", beta: true },
            { icon: Storefront, label: "Marketplace", desc: "Public agents ranked by what they made", href: "/application/marketplace", beta: true },
            { icon: Robot, label: "Builder", desc: "Make an agent on one screen", href: "/application/agents/new", beta: true },
            { icon: Brain, label: "Chat", desc: "Ask about any token or wallet", href: "/application/chat" },
          ],
        },
      ],
    ],
  },
  {
    label: "Tools",
    columns: [
      [
        {
          title: "Tools",
          items: [
            { icon: ShieldCheck, label: "Rugcheck", desc: "Check a token's contract and risks", href: "/application/rugcheck" },
            { icon: Rocket, label: "Token Creator", desc: "Launch a token", href: "/application/create", soon: true },
            { icon: Recycle, label: "Refund SOL", desc: "Close empty accounts, reclaim rent", href: "/application/refund" },
          ],
        },
      ],
      [
        {
          title: "Economy",
          items: [
            { icon: ShieldStar, label: "Plan & Usage", desc: "Credits, plans and what you used", href: "/application/pro" },
            { icon: Coins, label: "Tokenomics", desc: "The $CRVD token", href: "/application/tokenomics" },
          ],
        },
      ],
    ],
  },
  {
    label: "Developers",
    columns: [
      [
        {
          title: "Build",
          items: [
            { icon: Code, label: "Data API", desc: "Our token, wallet and risk data over REST", href: "/developers" },
            { icon: BookOpen, label: "Docs", desc: "How the agents and the API work", href: "/docs" },
          ],
        },
      ],
    ],
  },
];
