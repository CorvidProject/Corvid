"use client";
import { useEffect, useState } from "react";
import { getAccessToken } from "./auth";

// Mode fixture (default): panggilan ke /api/* dilayani rute Next lokal (src/app/api, data contoh).
// NEXT_PUBLIC_USE_FIXTURES=false: panggilan diarahkan ke backend Fastify di NEXT_PUBLIC_API_URL.
export const USE_API = process.env.NEXT_PUBLIC_USE_FIXTURES === "false";
// NEXT_PUBLIC_API_PROXY=true: panggilan memakai alamat situs sendiri (/api/*) dan diteruskan ke backend oleh Next (API_PROXY_TARGET),
// supaya tidak bergantung pada browser yang bisa menjangkau domain Railway.
const PROXIED = process.env.NEXT_PUBLIC_API_PROXY === "true";
const BASE = USE_API && !PROXIED ? (process.env.NEXT_PUBLIC_API_URL ?? "").replace(/\/$/, "") : "";

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

async function request<T>(method: string, path: string, body?: unknown, signal?: AbortSignal): Promise<T> {
  const headers: Record<string, string> = { accept: "application/json" };
  if (body !== undefined) headers["content-type"] = "application/json";
  // Token hanya dikirim ke backend Corvid (mode API), tidak ke rute fixture lokal.
  const token = USE_API ? await getAccessToken() : null;
  if (token) headers.authorization = `Bearer ${token}`;
  const res = await fetch(BASE + path, { method, signal, headers, body: body === undefined ? undefined : JSON.stringify(body) });
  if (!res.ok) {
    let msg = res.statusText;
    try {
      msg = ((await res.json()) as { error?: string }).error ?? msg;
    } catch {}
    throw new ApiError(res.status, msg);
  }
  return (await res.json()) as T;
}

export const apiGet = <T>(path: string, signal?: AbortSignal) => request<T>("GET", path, undefined, signal);
export const apiSend = <T>(method: "POST" | "PUT" | "DELETE", path: string, body?: unknown) => request<T>(method, path, body ?? {});

/** Catat login ke backend (maksimal 1x/menit di sisi server). Gagal diabaikan. */
export async function logLogin(): Promise<void> {
  if (!USE_API) return;
  try {
    await apiSend("POST", "/api/auth/log-login");
  } catch {
    /* tidak kritis */
  }
}

export type ApiState<T> = { data: T | null; loading: boolean; error: string | null };

const apiMemoryCache = new Map<string, { data: unknown; ts: number }>();

/**
 * Ambil data per `path` (null = tidak mengambil). Dengan `refreshMs`, data diambil ulang berkala secara diam-diam:
 * data lama tetap tampil selama pengambilan ulang dan bila ia gagal; jeda saat tab tersembunyi.
 * Menggunakan memori cache lokal (SWR) agar navigasi halaman terasa instan tanpa layar kosong berulang.
 */
export function useApi<T>(path: string | null, refreshMs?: number): ApiState<T> {
  const [state, setState] = useState<ApiState<T>>(() => {
    if (!path) return { data: null, loading: false, error: null };
    const cached = apiMemoryCache.get(path);
    if (cached) {
      return { data: cached.data as T, loading: false, error: null };
    }
    return { data: null, loading: true, error: null };
  });

  useEffect(() => {
    if (path === null) return;
    const ctl = new AbortController();
    const cached = apiMemoryCache.get(path);
    if (!cached) {
      setState((s) => ({ ...s, loading: true, error: null }));
    }
    apiGet<T>(path, ctl.signal)
      .then((data) => {
        apiMemoryCache.set(path, { data, ts: Date.now() });
        setState({ data, loading: false, error: null });
      })
      .catch((e: unknown) => {
        if (ctl.signal.aborted) return;
        setState((s) => ({
          data: s.data,
          loading: false,
          error: s.data ? null : (e instanceof Error ? e.message : "request_failed"),
        }));
      });
    let timer: ReturnType<typeof setInterval> | undefined;
    if (refreshMs) {
      timer = setInterval(() => {
        if (typeof document !== "undefined" && document.hidden) return;
        apiGet<T>(path, ctl.signal)
          .then((data) => {
            apiMemoryCache.set(path, { data, ts: Date.now() });
            setState({ data, loading: false, error: null });
          })
          .catch(() => {});
      }, refreshMs);
    }
    return () => {
      ctl.abort();
      if (timer) clearInterval(timer);
    };
  }, [path, refreshMs]);
  return state;
}
