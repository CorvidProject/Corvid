// Pembatas laju sederhana di memori (satu instance API). Jendela geser per kunci, plus penanda "sedang diproses".
export interface Clock {
  now(): number;
}

export class RateLimiter {
  private hits = new Map<string, number[]>();
  private busy = new Set<string>();
  constructor(
    private readonly max: number,
    private readonly windowMs: number,
    private readonly clock: Clock = { now: () => Date.now() },
  ) {}

  /** true = boleh lanjut (dan dicatat). false = terlalu sering; `retryAfterSec` untuk header Retry-After. */
  take(key: string): { ok: true } | { ok: false; retryAfterSec: number } {
    const now = this.clock.now();
    const recent = (this.hits.get(key) ?? []).filter((t) => now - t < this.windowMs);
    if (recent.length >= this.max) {
      this.hits.set(key, recent);
      return { ok: false, retryAfterSec: Math.max(1, Math.ceil((recent[0] + this.windowMs - now) / 1000)) };
    }
    recent.push(now);
    this.hits.set(key, recent);
    if (this.hits.size > 10_000) this.prune(now);
    return { ok: true };
  }

  /** Satu permintaan per kunci pada satu waktu; false bila sudah ada yang berjalan. */
  begin(key: string): boolean {
    if (this.busy.has(key)) return false;
    this.busy.add(key);
    return true;
  }
  end(key: string) {
    this.busy.delete(key);
  }

  private prune(now: number) {
    for (const [k, v] of this.hits) if (v.every((t) => now - t >= this.windowMs)) this.hits.delete(k);
  }
}
