"use client";

import { useState, type FormEvent } from "react";
import { subscribeSms } from "@/lib/integrations";
import { cn } from "@/lib/utils";

export function SmsSignup({ className, theme = "light" }: { className?: string; theme?: "light" | "dark" }) {
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const res = await subscribeSms(phone);
    setMessage(res.message);
    setStatus(res.ok ? "ok" : "error");
    if (res.ok) setPhone("");
  }

  const dark = theme === "dark";
  return (
    <form onSubmit={onSubmit} className={cn("w-full", className)}>
      <label htmlFor="jl-phone" className="sr-only">Phone number</label>
      <div className={cn("flex items-stretch border", dark ? "border-cream/30" : "border-ink/30")}>
        <input
          id="jl-phone"
          type="tel"
          placeholder="(555) 123-4567"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
            dark ? "bg-field text-ink hover:bg-cream" : "bg-ink text-cream hover:bg-athletic-700",
          )}
        >
          {status === "loading" ? "..." : "Text Me"}
        </button>
      </div>
      <p className={cn("mt-2 text-[11px]", dark ? "text-cream/60" : "text-ink/50")}>
        By subscribing you agree to receive recurring promo texts. Msg &amp; data rates may apply. Text STOP to opt out.
      </p>
      {message && (
        <p className={cn("mt-1 text-xs", status === "ok" ? (dark ? "text-field" : "text-ink") : "text-safety")}>
          {message}
        </p>
      )}
    </form>
  );
}
