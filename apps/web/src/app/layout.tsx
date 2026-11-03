import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Corvid",
  description:
    "Corvid adalah agent AI yang mengamati dompet smart money, membaca risiko token sebelum Anda masuk, lalu bertransaksi dari wallet Anda sendiri.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-brand="corvid" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans" style={{ background: "var(--v2-bg-0)" }}>
        {children}
      </body>
    </html>
  );
}
