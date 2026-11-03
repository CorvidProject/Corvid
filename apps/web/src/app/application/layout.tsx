import type { ReactNode } from "react";
import { SiteFx } from "@/components/fx/site-fx";

// Header, ticker, dan footer sudah ada di tiap halaman (snapshot layar aplikasi referensi).
export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <SiteFx />
    </>
  );
}
