import { describe, expect, it } from "vitest";
import { RateLimiter } from "../src/ratelimit";

describe("RateLimiter", () => {
  it("jendela geser: batas per kunci, Retry-After, dan pulih setelah jendela lewat", () => {
    let t = 1_000_000;
    const rl = new RateLimiter(2, 60_000, { now: () => t });
    expect(rl.take("a")).toEqual({ ok: true });
    t += 10_000;
    expect(rl.take("a")).toEqual({ ok: true });
    t += 10_000;
    const blocked = rl.take("a");
    expect(blocked).toEqual({ ok: false, retryAfterSec: 40 });
    expect(rl.take("b")).toEqual({ ok: true }); // kunci lain tidak terpengaruh
    t += 40_001; // entri pertama keluar dari jendela
    expect(rl.take("a")).toEqual({ ok: true });
  });

  it("begin/end: satu permintaan berjalan per kunci", () => {
    const rl = new RateLimiter(10, 60_000);
    expect(rl.begin("u")).toBe(true);
    expect(rl.begin("u")).toBe(false);
    expect(rl.begin("v")).toBe(true);
    rl.end("u");
    expect(rl.begin("u")).toBe(true);
  });
});
