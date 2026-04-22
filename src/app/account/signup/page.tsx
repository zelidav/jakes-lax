"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { signUpUser } from "@/lib/integrations";
import { useAuth } from "@/lib/auth-context";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState("");
  const { signIn } = useAuth();
  const router = useRouter();

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!agree) return;
    setStatus("loading");
    const res = await signUpUser(email, password);
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
          <p className="label mb-3">Sign Up</p>
          <h1 className="display text-giant leading-[0.92]">Get In Early.</h1>
          <p className="mt-6 text-ink/70 max-w-md">
            Members see new drops first, get faster checkout, and unlock the occasional free-shipping
            code. Takes 30 seconds.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-ink/80">
            <li>— First-look drop access</li>
            <li>— Saved sizes + addresses</li>
            <li>— Order history + tracking</li>
            <li>— Birthday tee discount (yes, really)</li>
          </ul>
          <p className="mt-10 text-sm text-ink/60">
            Already have an account?{" "}
            <Link href="/account/login" className="underline font-semibold">Log in</Link>.
          </p>
        </div>
        <form onSubmit={onSubmit} className="bg-bone p-6 md:p-8 border border-ink/10 space-y-5">
          <div>
            <label htmlFor="email" className="label">Email</label>
            <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="input" />
          </div>
          <div>
            <label htmlFor="password" className="label">Password</label>
            <input id="password" type="password" required minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} className="input" />
            <p className="mt-2 text-xs text-ink/50">At least 8 characters.</p>
          </div>
          <label className="flex items-start gap-3 text-sm">
            <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-0.5 h-4 w-4 accent-ink" />
            <span className="text-ink/70">
              I want drop alerts and promo emails. Unsubscribe anytime. Privacy matters.
            </span>
          </label>
          <button type="submit" disabled={status === "loading" || !agree} className="btn-primary w-full">
            {status === "loading" ? "Creating…" : "Create Account"}
          </button>
          {error && <p className="text-sm text-safety">{error}</p>}
          <p className="text-[11px] text-ink/50 leading-relaxed">
            By creating an account you agree to our Terms of Service and Privacy Policy.
          </p>
        </form>
      </div>
    </section>
  );
}
