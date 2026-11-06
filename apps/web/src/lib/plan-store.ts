"use client";
// Plan pengguna yang dipakai bersama (header + halaman Plan & Usage) agar satu sumber dan satu pengambilan data.
import { useEffect, useSyncExternalStore } from "react";
import { USE_API } from "./api";
import { loadSession } from "./auth";
import { getPlan, type Plan } from "./pay";

type Snapshot = { plan: Plan | null; error: boolean };
let snap: Snapshot = { plan: null, error: false };
const subs = new Set<() => void>();
const set = (s: Snapshot) => {
  snap = s;
  subs.forEach((f) => f());
};
const SERVER: Snapshot = { plan: null, error: false };

/** Ambil ulang plan (mis. setelah pembayaran). Tanpa sesi atau mode fixture: kosongkan. */
export async function refreshPlan(): Promise<void> {
  if (!USE_API || !loadSession()) return set({ plan: null, error: false });
  try {
    set({ plan: await getPlan(), error: false });
  } catch {
    set({ plan: snap.plan, error: true });
  }
}

export function usePlan(signed: boolean): Snapshot {
  const s = useSyncExternalStore(
    (f) => {
      subs.add(f);
      return () => subs.delete(f);
    },
    () => snap,
    () => SERVER,
  );
  useEffect(() => {
    if (signed) void refreshPlan();
    else set({ plan: null, error: false });
  }, [signed]);
  return s;
}
