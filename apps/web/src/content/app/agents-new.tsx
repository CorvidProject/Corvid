"use client";
import { useEffect, useState } from "react";
import { AgentBuilder } from "@/components/app/agent-builder";
import { BUILDER_TOUR, SpotlightTour, TOUR_KEY } from "@/components/app/spotlight-tour";

// Halaman /application/agents/new: builder pipeline interaktif + panduan (tour) kunjungan pertama.
export function ApplicationAgentsNewContent() {
  const [tour, setTour] = useState(false);
  useEffect(() => {
    try {
      if (!localStorage.getItem(TOUR_KEY)) setTour(true);
    } catch {
      /* localStorage tidak tersedia */
    }
    const open = () => setTour(true);
    window.addEventListener("builder-open-tour", open);
    return () => window.removeEventListener("builder-open-tour", open);
  }, []);
  const close = () => {
    setTour(false);
    try {
      localStorage.setItem(TOUR_KEY, "1");
    } catch {
      /* abaikan */
    }
  };
  return (
    <>
      <AgentBuilder />
      <SpotlightTour steps={BUILDER_TOUR} active={tour} onComplete={close} onSkip={close} />
    </>
  );
}
