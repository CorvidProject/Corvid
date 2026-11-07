import type { ReactNode } from "react";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import "./reveal.css";
import "./corvid.css";
import { AuthModalProvider } from "@/components/auth/auth-modal";
import { CommandPaletteProvider } from "@/components/app/command-palette";
import { BootLoader } from "@/components/site/boot-loader";
import { CookieBanner } from "@/components/site/cookie-banner";

// Stylesheet hasil rebrand (palet Corvid) dari build di public/c. Halaman yang masih berupa
// HTML statis (public/c) membawa stylesheet-nya sendiri; halaman TypeScript memakai layout ini.
const CSS = ["26024aa7322dbbc3", "1a7689e1e9ca8bda", "8e56cc1227e22602"];
const FONT_VARS =
  "__variable_245d8d __variable_5f34dc __variable_1ae0f2 __variable_ae301a __variable_e8acdf __variable_de2cf6 __variable_353f1a __variable_b55a8d __variable_014e29 __variable_4e7f7d __variable_5875f5 __variable_1047a0";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Corvid | Trading agents on Robinhood Chain",
  description: site.description,
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "Corvid | Trading agents on Robinhood Chain",
    description: site.description,
    url: "/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Corvid" }],
  },
  twitter: {
    card: "summary_large_image",
    site: site.twitterHandle,
    creator: site.twitterHandle,
    title: "Corvid | Trading agents on Robinhood Chain",
    description: site.description,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-brand="corvid" className={`${FONT_VARS} h-full antialiased`}>
      <head>
        {CSS.map((h) => (
          <link key={h} rel="stylesheet" href={`/c/_next/static/css/${h}.css`} precedence="default" />
        ))}
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <AuthModalProvider>
          <CommandPaletteProvider>{children}</CommandPaletteProvider>
        </AuthModalProvider>
        <CookieBanner />
        <BootLoader />
      </body>
    </html>
  );
}
