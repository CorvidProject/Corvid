// Adapter autentikasi (Supabase Auth lewat REST/GoTrue, tanpa dependensi tambahan).
// Aktif hanya jika NEXT_PUBLIC_SUPABASE_URL dan NEXT_PUBLIC_SUPABASE_ANON_KEY diisi (Supabase milik
// Corvid, dibuat saat "siapkan testnet"). Jangan pernah memakai URL/kunci Supabase apevisor lama.
// Service role key tidak dipakai di sini.

export type AuthResult = { error: string | null; code?: "user_exists" | "confirm_email" };
export type AuthSession = { access_token: string; refresh_token?: string; user?: { id: string; email?: string } };

const SESSION_KEY = "corvid.auth.session";
const url = () => (process.env.NEXT_PUBLIC_SUPABASE_URL ?? "").replace(/\/$/, "");
const anon = () => process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
export const authConfigured = () => !!url() && !!anon();

const NOT_CONFIGURED = "Authentication is not configured yet";

// Penyedia email sekali pakai yang ditolak saat daftar (padanan perilaku referensi).
const DISPOSABLE = new Set([
  "mailinator.com", "guerrillamail.com", "10minutemail.com", "tempmail.com", "temp-mail.org", "yopmail.com",
  "trashmail.com", "getnada.com", "sharklasers.com", "throwawaymail.com", "maildrop.cc", "dispostable.com",
  "fakeinbox.com", "mailnesia.com", "moakt.com", "tempail.com",
]);
export function isDisposable(email: string) {
  const e = email.trim().toLowerCase();
  const at = e.lastIndexOf("@");
  return at !== -1 && DISPOSABLE.has(e.slice(at + 1));
}

async function call(path: string, body: unknown, query = "") {
  const res = await fetch(`${url()}/auth/v1/${path}${query}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", apikey: anon() },
    body: JSON.stringify(body),
  });
  let data: Record<string, unknown> = {};
  try {
    data = await res.json();
  } catch {
    /* tubuh kosong */
  }
  return { res, data };
}
const msg = (d: Record<string, unknown>, fallback: string) =>
  String(d.error_description ?? d.msg ?? d.message ?? d.error ?? fallback);

export function saveSession(s: AuthSession | null) {
  try {
    if (s) localStorage.setItem(SESSION_KEY, JSON.stringify(s));
    else localStorage.removeItem(SESSION_KEY);
  } catch {
    /* penyimpanan tidak tersedia */
  }
  if (typeof window !== "undefined") window.dispatchEvent(new Event("corvid-auth"));
}
export function loadSession(): AuthSession | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as AuthSession) : null;
  } catch {
    return null;
  }
}

/** Keluar: sesi lokal dihapus lebih dulu, lalu sesi ini dicabut di Supabase (scope=local; perangkat lain tidak ikut). */
export async function signOut(): Promise<void> {
  const token = loadSession()?.access_token;
  saveSession(null);
  if (!token || !authConfigured()) return;
  try {
    await fetch(`${url()}/auth/v1/logout?scope=local`, { method: "POST", headers: { apikey: anon(), Authorization: `Bearer ${token}` } });
  } catch {
    /* gagal jaringan: sesi lokal sudah terhapus, token kedaluwarsa sendiri */
  }
}

function jwtExp(t: string): number {
  try {
    return (JSON.parse(atob(t.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"))) as { exp?: number }).exp ?? 0;
  } catch {
    return 0;
  }
}

/** Access token yang masih berlaku; diperbarui lewat refresh token bila hampir/sudah kedaluwarsa. */
export async function getAccessToken(): Promise<string | null> {
  const s = loadSession();
  if (!s?.access_token) return null;
  const expMs = jwtExp(s.access_token) * 1000;
  if (expMs - Date.now() > 60_000) return s.access_token;
  if (s.refresh_token && authConfigured()) {
    try {
      const { res, data } = await call("token", { refresh_token: s.refresh_token }, "?grant_type=refresh_token");
      if (res.ok && typeof data.access_token === "string") {
        saveSession(data as unknown as AuthSession);
        return data.access_token;
      }
    } catch {
      /* jaringan: jatuh ke token lama bila belum kedaluwarsa */
    }
  }
  return expMs > Date.now() ? s.access_token : null;
}

export async function signInWithEmail(email: string, password: string): Promise<AuthResult & { session?: AuthSession }> {
  if (!authConfigured()) return { error: NOT_CONFIGURED };
  try {
    const { res, data } = await call("token", { email, password }, "?grant_type=password");
    if (!res.ok) return { error: msg(data, "Invalid login credentials") };
    const session = data as unknown as AuthSession;
    saveSession(session);
    void import("./api").then((m) => m.logLogin()); // catat login ke backend (abaikan bila gagal)
    return { error: null, session };
  } catch {
    return { error: "Network error. Try again" };
  }
}

export async function signUpWithEmail(email: string, password: string, fullName: string): Promise<AuthResult & { session?: AuthSession }> {
  if (isDisposable(email)) return { error: "We don't accept disposable email providers. Please use a real inbox you can check." };
  if (!authConfigured()) return { error: NOT_CONFIGURED };
  try {
    const { res, data } = await call("signup", { email, password, data: { full_name: fullName } });
    const exists = { error: "This email is already registered. Log in with your password", code: "user_exists" as const };
    if (!res.ok) {
      const m = msg(data, "Sign up failed").toLowerCase();
      return m.includes("already") || m.includes("registered") || m.includes("exists") ? exists : { error: msg(data, "Sign up failed") };
    }
    const user = (data.user ?? data) as { identities?: unknown[] };
    if (Array.isArray(user.identities) && user.identities.length === 0) return exists;
    if (typeof data.access_token === "string") {
      const session = data as unknown as AuthSession;
      saveSession(session);
      return { error: null, session };
    }
    return { error: null, code: "confirm_email" };
  } catch {
    return { error: "Network error. Try again" };
  }
}

export async function resetPassword(email: string): Promise<AuthResult> {
  if (!authConfigured()) return { error: NOT_CONFIGURED };
  try {
    const redirect = encodeURIComponent(`${window.location.origin}/auth/reset`);
    const { res, data } = await call("recover", { email }, `?redirect_to=${redirect}`);
    return res.ok ? { error: null } : { error: msg(data, "Failed to send reset email") };
  } catch {
    return { error: "Network error. Try again" };
  }
}
