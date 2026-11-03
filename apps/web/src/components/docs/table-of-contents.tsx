"use client";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

// Daftar isi "On this page": dibangun dari h2/h3 di <main>, sorotan mengikuti scroll (port dari komponen asli).
export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [active, setActive] = useState("");
  const pathname = usePathname();

  const collect = useCallback(() => {
    const main = document.querySelector("main");
    if (!main) return;
    const found: Heading[] = [];
    main.querySelectorAll<HTMLElement>("h2, h3").forEach((el) => {
      const text = el.textContent?.trim() ?? "";
      if (!text) return;
      if (!el.id) {
        el.id = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-")
          .trim();
      }
      found.push({ id: el.id, text, level: parseInt(el.tagName[1], 10) });
    });
    setHeadings(found);
  }, []);

  useEffect(() => {
    const t = setTimeout(collect, 100);
    return () => clearTimeout(t);
  }, [pathname, collect]);

  useEffect(() => {
    if (headings.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "0px 0px -65% 0px", threshold: 0 },
    );
    headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => !!el)
      .forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="flex flex-col gap-0.5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-text-disabled mb-2">
        On this page
      </p>
      {headings.map((h) => (
        <a
          key={h.id}
          href={`#${h.id}`}
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById(h.id)
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
            setActive(h.id);
          }}
          className={[
            "text-xs py-1 transition-colors duration-150 leading-snug",
            h.level === 3 ? "pl-3" : "",
            active === h.id ? "font-medium" : "hover:text-white/75",
          ].join(" ")}
          style={{
            color:
              active === h.id
                ? "var(--v2-accent-text)"
                : "rgba(255,255,255,0.45)",
          }}
        >
          {h.text}
        </a>
      ))}
    </nav>
  );
}
