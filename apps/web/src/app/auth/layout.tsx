import type { ReactNode } from "react";
import { SiteFx } from "@/components/fx/site-fx";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <SiteFx />
    </>
  );
}
