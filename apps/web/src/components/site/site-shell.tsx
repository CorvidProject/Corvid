import type { ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

// Kerangka halaman publik: navbar tetap + isi + footer.
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
