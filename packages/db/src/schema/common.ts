import { customType, timestamp } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

/** Harga/uang sebagai string desimal (tidak pernah float). */
export const money = (name: string, precision = 38, scale = 18) =>
  customType<{ data: string; driverData: string }>({
    dataType: () => `numeric(${precision},${scale})`,
  })(name);

export const ts = (name: string) => timestamp(name, { withTimezone: true, mode: "date" });

/** Ekspresi CHECK untuk alamat/mint Solana base58 (32-44 karakter). */
export const solAddr = (col: string) =>
  sql.raw(`${col} ~ '^[1-9A-HJ-NP-Za-km-z]{32,44}$'`);
