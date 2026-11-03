"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { MENUS } from "./menu-panels";

// Menambahkan dropdown hover/klik ke tombol navbar hasil SSR (Trading, Agents, Tools, Developers).
export function NavMenus() {
  const [targets, setTargets] = useState<Record<string, HTMLElement>>({});
  const [open, setOpen] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const found: Record<string, HTMLElement> = {};
    const cleanups: Array<() => void> = [];
    const keep = () => {
      if (timer.current) clearTimeout(timer.current);
    };
    document.querySelectorAll<HTMLButtonElement>("nav button, header button").forEach((btn) => {
      const key = Object.keys(MENUS).find((k) => btn.textContent?.trim() === k);
      const wrap = btn.parentElement;
      if (!key || !wrap || found[key]) return;
      found[key] = wrap;
      wrap.style.position = "relative";
      const enter = () => {
        keep();
        setOpen(key);
      };
      const leave = () => {
        keep();
        timer.current = setTimeout(() => setOpen(null), 140);
      };
      const click = () => setOpen((o) => (o === key ? null : key));
      wrap.addEventListener("mouseenter", enter);
      wrap.addEventListener("mouseleave", leave);
      btn.addEventListener("click", click);
      cleanups.push(() => {
        wrap.removeEventListener("mouseenter", enter);
        wrap.removeEventListener("mouseleave", leave);
        btn.removeEventListener("click", click);
      });
    });
    setTargets(found);
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", esc);
    return () => {
      cleanups.forEach((c) => c());
      window.removeEventListener("keydown", esc);
    };
  }, []);

  return open && targets[open] ? createPortal(MENUS[open], targets[open]) : null;
}
