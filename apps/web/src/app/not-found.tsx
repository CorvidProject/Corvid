import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Page not found | Corvid", robots: { index: false } };

// 404 bermerek: latar gelap Corvid, logo, pesan singkat, dan jalan kembali.
export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center px-6 py-24" style={{ background: "var(--v2-bg-0)", minHeight: "100vh" }}>
      <div className="max-w-md w-full text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/corvid-logo-512.png" alt="Corvid" width={44} height={44} className="mx-auto mb-8" style={{ width: 44, height: 44 }} />
        <p className="font-mono text-[11px] tracking-[0.12em] uppercase mb-3" style={{ color: "var(--v2-t-4)" }}>
          Error 404
        </p>
        <h1 className="font-heading font-extrabold tracking-[-0.02em] mb-3" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: "var(--v2-t-1)", textWrap: "balance" }}>
          This page does not exist
        </h1>
        <p className="text-[15px] leading-relaxed mb-8" style={{ color: "var(--v2-t-3)" }}>
          The link may be old or mistyped. Head back to the app or the home page.
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Link href="/application/terminal" className="btn-v2 btn-v2-primary h-10 px-5 inline-flex items-center text-[14px] font-semibold">
            Open the app
          </Link>
          <Link href="/" className="h-10 px-5 inline-flex items-center rounded-sm text-[14px] font-medium transition-colors hover:bg-[var(--v2-bg-2)]" style={{ color: "var(--v2-t-2)", border: "1px solid var(--v2-line-2)" }}>
            Home
          </Link>
        </div>
      </div>
    </main>
  );
}
