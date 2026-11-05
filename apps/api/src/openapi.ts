// Menulis openapi.json ke docs/api/openapi.json tanpa koneksi database.
import fs from "node:fs";
import path from "node:path";
import { buildApp, type Db } from "./app";

const app = await buildApp({ db: {} as Db });
await app.ready();
const out = path.resolve(process.cwd(), "../../docs/api/openapi.json");
fs.writeFileSync(out, JSON.stringify(app.swagger(), null, 2) + "\n");
console.log("ditulis:", out);
await app.close();
