import type { ReactNode } from "react";

// Halaman publik disajikan dari build frontend Corvid (public/c, lihat next.config.mjs).
// Layout ini hanya diperlukan agar App Router (API route) valid.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
