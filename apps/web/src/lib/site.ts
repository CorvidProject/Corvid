// Konfigurasi brand Corvid (padanan `wk` di build referensi). Telegram masih PLACEHOLDER (menunggu data dari pemilik).
export const site = {
  name: "Corvid",
  tagline: "Agents that watch smart money, read the risk, then trade from your wallet.",
  tokenTicker: "$CRVD",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@corvidagent.com",
  operator: "Operated by the Corvid team",
  twitterHandle: "@CorvidAgentX",
  socialLinks: {
    twitter: "https://x.com/CorvidAgentX",
    telegram: "https://t.me/PLACEHOLDER",
    github: "",
  },
} as const;
