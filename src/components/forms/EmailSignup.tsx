"use client";

import { useState, type FormEvent } from "react";
import { subscribeEmail } from "@/lib/integrations";
import { cn } from "@/lib/utils";

type Props = {
  placeholder?: string;
  cta?: string;
  className?: string;
  theme?: "light" | "dark";
};

export function EmailSignup({
  placeholder = "your@email.com",
  cta = "Sign Me Up",
  className,
  theme = "light",
}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const res = await subscribeEmail(email);
    setMessage(res.message);
    setStatus(res.ok ? "ok" : "error");
    if (res.ok) setEmail("");
  }

  const dark = theme === "dark";
  return (
    <form onSubmit={onSubmit} className={cn("w-full", className)}>
      <label htmlFor="jl-email" className="sr-only">Email address</label>
      <div
        className={cn(
          "flex items-stretch border",
          dark ? "border-cream/30 bg-transparent" : "border-ink/30 bg-transparent",
        )}
      >
        <input
          id="jl-email"
          type="email"
          required
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={cn(
            "flex-1 bg-transparent px-4 py-3 text-sm focus:outline-none",
            dark ? "text-cream placeholder:text-cream/50" : "text-ink placeholder:text-ink/40",
          )}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={cn(
            "px-5 text-xs font-semibold uppercase tracking-widest transition-colors disabled:opacity-60",
            dark ? "bg-cream text-ink hover:bg-field" : "bg-ink text-cream hover:bg-athletic-700",
          )}
        >
          {status === "loading" ? "..." : cta}
        </button>
      </div>
      {message && (
        <p
          className={cn(
            "mt-2 text-xs",
            status === "ok" ? (dark ? "text-field" : "text-ink") : "text-safety",
          )}
        >
          {message}
        </p>
      )}
    </form>
  );
}
