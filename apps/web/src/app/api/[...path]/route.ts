import { handleMockApi } from "@/server/mock-api.cjs";
import { NextRequest } from "next/server";

// Backend sementara (Tahap 1): data contoh dari src/server/data. Rute yang belum ada -> 401/404 bersih,
// tidak diteruskan ke situs lama. Diganti Fastify + Postgres di Tahap 2.
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function run(pathname: string, params: URLSearchParams): Promise<Response | null> {
  return new Promise((resolve) => {
    let status = 200;
    let headers: Record<string, string> = {};
    const res = {
      writeHead(s: number, h: Record<string, string> = {}) {
        status = s;
        headers = h;
      },
      end(body?: string | Buffer) {
        resolve(new Response(body ? new Uint8Array(typeof body === "string" ? Buffer.from(body) : body) : null, { status, headers }));
      },
    };
    const handled = handleMockApi({}, res, pathname, params);
    if (!handled) resolve(null);
  });
}

async function handle(req: NextRequest) {
  const { pathname, searchParams } = new URL(req.url);
  const r = await run(pathname, searchParams);
  if (r) return r;
  const authed = /^\/api\/(auth|profile|user|wallets|trade|portfolio|agents|chats|broadcast|marketplace)/.test(pathname);
  return Response.json({ error: authed ? "unauthorized" : "not_found" }, { status: authed ? 401 : 404 });
}

export const GET = handle;
export const POST = handle;
export const PUT = handle;
export const DELETE = handle;
