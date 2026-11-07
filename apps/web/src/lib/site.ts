// Konfigurasi brand Corvid (padanan `wk` di build referensi). Telegram masih PLACEHOLDER (menunggu data dari pemilik).
export const site = {
  name: "Corvid",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://corvidagent.com").replace(/\/$/, ""),
  description: "Autonomous trading agents on Robinhood Chain. Check token risk, follow smart money, and trade from your own wallet.",
  tagline: "Agents that watch smart money, read the risk, then trade from your wallet.",
  tokenTicker: "$CRVD",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@corvidagent.com",
  operator: "Operated by the Corvid team",
  twitterHandle: "@CorvidAgentX",
  socialLinks: {
    twitter: "https://x.com/CorvidAgentX",
    telegram: "" as string, // belum ada akun resmi: kosong, tautan Telegram disembunyikan
    github: "",
  },
} as const;
