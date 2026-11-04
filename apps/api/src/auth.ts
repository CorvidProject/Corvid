import { createRemoteJWKSet, jwtVerify, type JWTVerifyGetKey, type KeyLike } from "jose";

export interface AuthUser {
  id: string;
  email: string | null;
}
/** Memverifikasi token Bearer dan mengembalikan pengguna; melempar bila tidak valid. */
export type Verifier = (token: string) => Promise<AuthUser>;

interface VerifierOptions {
  issuer: string;
  audience?: string;
  /** Kunci publik, JWKS, atau rahasia HS256. */
  key: KeyLike | Uint8Array | JWTVerifyGetKey;
}

export function createVerifier({ issuer, audience = "authenticated", key }: VerifierOptions): Verifier {
  return async (token) => {
    const { payload } = await jwtVerify(token, key as never, { issuer, audience, clockTolerance: 5 });
    if (typeof payload.sub !== "string" || !/^[0-9a-f-]{36}$/i.test(payload.sub)) throw new Error("sub tidak valid");
    return { id: payload.sub, email: typeof payload.email === "string" ? payload.email : null };
  };
}

/**
 * Verifier untuk Supabase Auth. Project baru memakai kunci tanda tangan asimetris (JWKS publik di
 * /auth/v1/.well-known/jwks.json); project lama memakai rahasia HS256 (SUPABASE_JWT_SECRET, opsional).
 * Service role key TIDAK dipakai.
 */
export function supabaseVerifier(supabaseUrl: string, jwtSecret?: string): Verifier {
  const base = supabaseUrl.replace(/\/$/, "");
  const jwks = createRemoteJWKSet(new URL(`${base}/auth/v1/.well-known/jwks.json`));
  const asym = createVerifier({ issuer: `${base}/auth/v1`, key: jwks });
  const sym = jwtSecret ? createVerifier({ issuer: `${base}/auth/v1`, key: new TextEncoder().encode(jwtSecret) }) : null;
  return (token) => {
    let alg = "";
    try {
      alg = JSON.parse(Buffer.from(token.split(".")[0] ?? "", "base64url").toString("utf8")).alg ?? "";
    } catch {
      /* token rusak: biarkan verifier menolak */
    }
    return alg === "HS256" && sym ? sym(token) : asym(token);
  };
}
