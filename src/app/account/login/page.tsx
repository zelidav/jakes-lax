"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { signInUser } from "@/lib/integrations";
import { useAuth } from "@/lib/auth-context";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState("");
  const { signIn } = useAuth();
  const router = useRouter();

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const res = await signInUser(email, password);
    if (!res.ok) {
      setError(res.message);
      setStatus("error");
      return;
    }
    signIn(email);
    router.push("/account");
  }

  return (
    <section className="bg-cream section-pad">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
        <div>
          <p className="label mb-3">Log In</p>
          <h1 className="display text-giant leading-[0.92]">Welcome Back.</h1>
          <p className="mt-6 text-ink/70 max-w-sm">
            Log in to see orders, saved sizes, and get first-look access to drops.
          </p>
          <p className="mt-8 text-sm text-ink/60">
            No account yet?{" "}
            <Link href="/account/signup" className="underline font-semibold">Create one</Link>.
          </p>
        </div>
        <form onSubmit={onSubmit} className="bg-bone p-6 md:p-8 border border-ink/10 space-y-5">
          <div>
            <label htmlFor="email" className="label">Email</label>
            <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="input" />
          </div>
          <div>
            <label htmlFor="password" className="label">Password</label>
            <input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="input" />
            <p className="mt-2 text-xs text-ink/50">Forgot? <button type="button" className="underline">Reset it</button>.</p>
          </div>
          <button type="submit" disabled={status === "loading"} className="btn-primary w-full">
            {status === "loading" ? "Signing in…" : "Sign In"}
          </button>
          {error && <p className="text-sm text-safety">{error}</p>}
          {/* Social login placeholders — wire to Supabase OAuth or NextAuth when ready */}
          <div className="pt-4 border-t border-ink/10 space-y-2">
            <p className="label text-center">Or continue with</p>
            <button type="button" disabled className="btn-ghost w-full text-sm">Google (coming soon)</button>
            <button type="button" disabled className="btn-ghost w-full text-sm">Apple (coming soon)</button>
          </div>
        </form>
      </div>
    </section>
  );
}
