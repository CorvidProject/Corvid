"use client";
import { useEffect } from "react";

// Menandai elemen [data-reveal] sebagai terlihat saat masuk viewport (sekali jalan).
// Elemen yang disembunyikan oleh induk overflow:hidden (mis. kata judul yang naik dari bawah)
// tidak pernah "berpotongan" dengan viewport, jadi yang diamati adalah induknya.
export function RevealObserver() {
  useEffect(() => {
    const targets = new Map<Element, HTMLElement[]>();
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    els.forEach((el) => {
      const parent = el.parentElement;
      const clipped = parent && getComputedStyle(parent).overflow === "hidden";
      const target = clipped && parent ? parent : el;
      targets.set(target, [...(targets.get(target) ?? []), el]);
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          targets.get(e.target)?.forEach((el) => el.classList.add("is-in"));
          io.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    targets.forEach((_, t) => io.observe(t));
    return () => io.disconnect();
  }, []);
  return null;
}
