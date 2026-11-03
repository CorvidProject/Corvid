import Link from "next/link";

export const metadata = { title: "Sign in | Corvid" };

export default function SignIn() {
  return (
    <main className="flex-1 flex items-center justify-center px-4" style={{ background: "var(--v2-bg-0)" }}>
      <section className="panel rounded-2xl p-6 w-full max-w-[380px]">
        <Link href="/" className="font-heading font-extrabold text-[20px]" data-placeholder="logo">Corvid</Link>
        <h1 className="text-[18px] font-semibold mt-4">Sign in</h1>
        <p className="text-[13px] mt-1" style={{ color: "var(--v2-t-4)" }}>A Solana wallet is created for you on first sign-in.</p>
        <form className="flex flex-col gap-3 mt-4 text-[13px]">
          <input className="input-v2" type="email" placeholder="you@example.com" />
          <button type="button" disabled className="btn-v2 btn-v2-primary">Continue with email (needs Supabase Auth)</button>
          <button type="button" disabled className="btn-v2 btn-v2-ghost">Continue with Google</button>
        </form>
      </section>
    </main>
  );
}
