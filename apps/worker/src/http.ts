export type FetchLike = (url: string, init?: RequestInit) => Promise<Response>;

export interface HttpOptions {
  fetch?: FetchLike;
  /** Jeda minimum antar request ke klien ini (ms). Dipakai untuk menghormati batas laju publik. */
  minIntervalMs: number;
  retries?: number;
  timeoutMs?: number;
  headers?: Record<string, string>;
  /** Untuk tes: ganti sleep nyata. */
  sleep?: (ms: number) => Promise<void>;
}

export class HttpError extends Error {
  constructor(public status: number, public url: string) {
    super(`HTTP ${status} untuk ${url}`);
  }
}

const realSleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

/** Klien GET JSON dengan antrean serial (jeda minimum) dan retry untuk 429/5xx. */
export function createHttp(opts: HttpOptions) {
  const doFetch: FetchLike = opts.fetch ?? ((u, i) => fetch(u, i));
  const sleep = opts.sleep ?? realSleep;
  const retries = opts.retries ?? 3;
  let chain: Promise<unknown> = Promise.resolve();
  let lastAt = 0;

  async function attempt(url: string): Promise<unknown> {
    for (let n = 0; ; n++) {
      const wait = lastAt + opts.minIntervalMs - Date.now();
      if (wait > 0) await sleep(wait);
      lastAt = Date.now();
      let res: Response | null = null;
      try {
        res = await doFetch(url, {
          headers: { accept: "application/json", ...opts.headers },
          signal: AbortSignal.timeout(opts.timeoutMs ?? 10_000),
        });
      } catch (e) {
        if (n >= retries) throw e;
        await sleep(500 * 2 ** n);
        continue;
      }
      if (res.ok) return res.json();
      const retryable = res.status === 429 || res.status >= 500;
      if (!retryable || n >= retries) throw new HttpError(res.status, url);
      const ra = Number(res.headers.get("retry-after"));
      await sleep(ra > 0 ? Math.min(ra * 1000, 60_000) : 1000 * 2 ** n);
    }
  }

  return {
    getJson(url: string): Promise<unknown> {
      const run = chain.then(() => attempt(url));
      chain = run.catch(() => undefined); // satu kegagalan tidak memutus antrean
      return run;
    },
  };
}
export type Http = ReturnType<typeof createHttp>;
