import type { Metadata } from "next";
import "./globals.css";
import "./app-utils.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Corvid",
  description:
    "Corvid adalah agent AI yang mengamati dompet smart money, membaca risiko token sebelum Anda masuk, lalu bertransaksi dari wallet Anda sendiri.",
  openGraph: { title: "Corvid", siteName: "Corvid", images: [{ url: "/og-image.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Corvid",
  slogan: "Agents that watch smart money, read the risk, then trade from your wallet.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  logo: "/logo.png", // PLACEHOLDER: logo belum diberikan
  email: process.env.CONTACT_EMAIL,
  tokenTicker: "CRVD",
  tokenName: "Corvid",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-brand="corvid" className="__variable_245d8d __variable_5f34dc __variable_1ae0f2 __variable_ae301a __variable_e8acdf __variable_de2cf6 __variable_353f1a __variable_b55a8d __variable_014e29 __variable_4e7f7d __variable_5875f5 __variable_1047a0 h-full antialiased">
      <body className="min-h-full flex flex-col font-sans" style={{ background: "var(--v2-bg-0)" }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
