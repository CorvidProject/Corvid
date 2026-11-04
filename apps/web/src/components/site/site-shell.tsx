import type { ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { ScrollToTop } from "./scroll-to-top";

// Kerangka halaman publik: navbar tetap + isi + footer.
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <ScrollToTop />
    </>
  );
}
