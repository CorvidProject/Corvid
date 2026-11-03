// Konfigurasi brand Corvid (padanan `wk` di build referensi). Nilai PLACEHOLDER menunggu data dari pemilik.
export const site = {
  name: "Corvid",
  tagline: "Autonomous trading agents across EVM and Solana",
  tokenTicker: "$CRVD",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@corvid.example",
  operator: "Operated by the Corvid team",
  twitterHandle: "@PLACEHOLDER",
  socialLinks: {
    twitter: "https://x.com/PLACEHOLDER",
    telegram: "https://t.me/PLACEHOLDER",
    github: "",
  },
} as const;
