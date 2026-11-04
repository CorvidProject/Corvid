"use client";
import { useEffect, useState } from "react";

// Mode fixture (default): panggilan ke /api/* dilayani rute Next lokal (src/app/api, data contoh).
// NEXT_PUBLIC_USE_FIXTURES=false: panggilan diarahkan ke backend Fastify di NEXT_PUBLIC_API_URL.
const USE_API = process.env.NEXT_PUBLIC_USE_FIXTURES === "false";
const BASE = USE_API ? (process.env.NEXT_PUBLIC_API_URL ?? "").replace(/\/$/, "") : "";

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

export async function apiGet<T>(path: string, signal?: AbortSignal): Promise<T> {
  const res = await fetch(BASE + path, { signal, headers: { accept: "application/json" } });
  if (!res.ok) {
    let msg = res.statusText;
    try {
      msg = ((await res.json()) as { error?: string }).error ?? msg;
    } catch {}
    throw new ApiError(res.status, msg);
  }
  return (await res.json()) as T;
}

export type ApiState<T> = { data: T | null; loading: boolean; error: string | null };

/** Ambil data sekali per `path` (null = tidak mengambil). */
export function useApi<T>(path: string | null): ApiState<T> {
  const [state, setState] = useState<ApiState<T>>({ data: null, loading: path !== null, error: null });
  useEffect(() => {
    if (path === null) return;
    const ctl = new AbortController();
    setState((s) => ({ ...s, loading: true, error: null }));
    apiGet<T>(path, ctl.signal)
      .then((data) => setState({ data, loading: false, error: null }))
      .catch((e: unknown) => {
        if (ctl.signal.aborted) return;
        setState({ data: null, loading: false, error: e instanceof Error ? e.message : "request_failed" });
      });
    return () => ctl.abort();
  }, [path]);
  return state;
}
