import type { ReactNode } from "react";
import { SiteFx } from "@/components/fx/site-fx";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <noscript>
        <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
      </noscript>
      {children}
      <SiteFx />
    </>
  );
}
