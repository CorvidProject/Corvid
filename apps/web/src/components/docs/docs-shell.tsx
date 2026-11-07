import type { ReactNode } from "react";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { ScrollToTop } from "@/components/site/scroll-to-top";
import { site } from "@/lib/site";
import { DocsNav } from "./docs-nav";
import { TableOfContents } from "./table-of-contents";

// Kerangka halaman dokumentasi: navbar, navigasi samping, artikel, daftar isi, footer.
export function DocsShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0"
        style={{
          opacity: 0.05,
          backgroundImage:
            "linear-gradient(to right, var(--v2-accent-text) 1px, transparent 1px), linear-gradient(to bottom, var(--v2-accent-text) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 0%, transparent 70%)",
        }}
      />
      <Navbar />
      <div className="h-[72px]" />
      <div className="lg:hidden px-4 sm:px-6 pt-4">
        <details className="group">
          <summary
            className="flex items-center justify-between px-4 py-3 font-mono text-[11px] tracking-[0.06em] uppercase cursor-pointer border"
            style={{
              color: "rgba(255,255,255,0.6)",
              background: "rgba(255,255,255,0.02)",
              borderColor: "rgba(255,255,255,0.08)",
              fontStyle: "normal",
            }}
          >
            <span>[ NAVIGATION ]</span>
            <span
              className="group-open:rotate-180 transition-transform"
              style={{ color: "var(--v2-accent-text)" }}
            >
              ▾
            </span>
          </summary>
          <div className="mt-3 px-2 pb-4">
            <DocsNav />
          </div>
        </details>
      </div>
      <div className="relative mx-auto max-w-7xl flex">
        <aside
          className="hidden lg:block w-64 shrink-0 border-r sticky top-[72px] h-[calc(100vh-72px)] overflow-y-auto py-10 px-4"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <DocsNav />
        </aside>
        <main className="flex-1 min-w-0 w-full px-4 sm:px-10 py-8 sm:py-14 max-w-3xl docs-prose overflow-x-hidden">
          {children}
          <footer
            className="mt-20 pt-8 border-t flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] tracking-[0.12em] uppercase"
            style={{
              color: "rgba(255,255,255,0.65)",
              borderColor: "rgba(255,255,255,0.08)",
              fontStyle: "normal",
            }}
          >
            <span className="inline-flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/corvid-logo-512.png" alt="Corvid" width={16} height={16} style={{ width: 16, height: 16 }} />
              {site.name.toUpperCase()} DOCS · v2026.04
            </span>
            <div className="flex gap-5">
              <a className="hover:text-white transition-colors" href="#top">
                ↑ TOP
              </a>
              <a className="hover:text-white transition-colors" href="/terms">
                TERMS ↗
              </a>
              <a className="hover:text-white transition-colors" href="/privacy">
                PRIVACY ↗
              </a>
            </div>
          </footer>
        </main>
        <aside
          className="hidden xl:block w-56 shrink-0 sticky top-[72px] h-[calc(100vh-72px)] overflow-y-auto py-10 px-4 border-l"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <div
            className="font-mono text-[11px] tracking-[0.06em] uppercase mb-4"
            style={{ color: "rgba(255,255,255,0.65)", fontStyle: "normal" }}
          >
            {"// ON THIS PAGE"}
          </div>
          <TableOfContents />
        </aside>
      </div>
      <Footer />
      <ScrollToTop />
      <style>{`
        .docs-prose { color: rgba(255,255,255,0.72); font-size: 15px; line-height: 1.75; word-wrap: break-word; overflow-wrap: break-word; }
        .docs-prose h1 { color: #fff; font-family: var(--font-heading, inherit); font-weight: 900; font-style: normal; letter-spacing: -0.04em; font-size: clamp(3rem, 8vw, 4.5rem); line-height: 0.92; word-break: break-word; }
        .docs-prose h2 { color: #fff; font-family: var(--font-heading, inherit); font-weight: 800; font-style: normal; letter-spacing: -0.02em; margin-top: 2.5rem; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid rgba(255,255,255,0.08); font-size: 30px; }
        .docs-prose h3 { color: #fff; font-weight: 600; font-size: 16px; margin-top: 1.75rem; margin-bottom: 0.5rem; }
        .docs-prose p { margin: 0 0 1rem; }
        .docs-prose a { color: var(--v2-accent-text); text-decoration: none; border-bottom: 1px dotted rgba(124,155,255,0.5); transition: color 120ms, border-color 120ms; }
        .docs-prose a:hover { color: #fff; border-bottom-color: #fff; }
        .docs-prose strong { color: #fff; font-weight: 600; }
        .docs-prose code { background: rgba(var(--v2-accent-rgb),0.14); color: #8fa8ff; padding: 2px 6px; border-radius: 2px; font-size: 13px; font-family: var(--font-jetbrains-mono), ui-monospace, monospace; }
        .docs-prose pre { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 1rem; overflow-x: auto; margin: 1.25rem 0; }
        .docs-prose pre code { background: transparent; padding: 0; color: rgba(255,255,255,0.85); }
        .docs-prose ul { margin: 0.5rem 0 1.25rem 0; padding: 0; list-style: none; }
        .docs-prose ul li { position: relative; padding: 0.2rem 0 0.2rem 1.5rem; }
        .docs-prose ul li::before { content: "-"; position: absolute; left: 0; color: var(--v2-accent-text); font-family: var(--font-jetbrains-mono), ui-monospace, monospace; }
      `}</style>
    </div>
  );
}
