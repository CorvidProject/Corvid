import { customType, timestamp } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

/** Harga/uang sebagai string desimal (tidak pernah float). */
export const money = (name: string, precision = 38, scale = 18) =>
  customType<{ data: string; driverData: string }>({
    dataType: () => `numeric(${precision},${scale})`,
  })(name);

export const ts = (name: string) => timestamp(name, { withTimezone: true, mode: "date" });

/**
 * Ekspresi CHECK untuk alamat on-chain. Transisi Solana → Robinhood Chain (EVM): menerima base58 (data lama)
 * ATAU 0x + 40 hex huruf kecil (EVM, disimpan lowercase). Cabang base58 dibuang setelah data Solana hilang (M3).
 */
export const chainAddr = (col: string) =>
  sql.raw(`(${col} ~ '^[1-9A-HJ-NP-Za-km-z]{32,44}$' OR ${col} ~ '^0x[0-9a-f]{40}$')`);
/** @deprecated gunakan chainAddr */
