import { defineConfig } from "vitest/config";

// Tiap file tes menyalakan Postgres embedded sendiri; dibatasi agar tidak kehabisan RAM/timeout.
export default defineConfig({
  test: { maxWorkers: 2, minWorkers: 1, hookTimeout: 180_000, testTimeout: 60_000 },
});
