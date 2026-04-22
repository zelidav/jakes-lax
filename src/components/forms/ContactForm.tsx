"use client";

import { useState, type FormEvent } from "react";
import { sendContactMessage } from "@/lib/integrations";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "General", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const res = await sendContactMessage(form);
    setFeedback(res.message);
    setStatus(res.ok ? "ok" : "error");
    if (res.ok) setForm({ name: "", email: "", subject: "General", message: "" });
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="label">Name</label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="input"
          />
        </div>
        <div>
          <label htmlFor="email" className="label">Email</label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="input"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="label">Subject</label>
        <select
          id="subject"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className="input"
        >
          <option>General</option>
          <option>Order Question</option>
          <option>Returns &amp; Exchanges</option>
          <option>Team Orders / Wholesale</option>
          <option>Press / Partnerships</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="label">Message</label>
        <textarea
          id="message"
          required
          rows={6}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="input resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full sm:w-auto"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
      {feedback && (
        <p className={status === "ok" ? "text-sm text-ink" : "text-sm text-safety"}>{feedback}</p>
      )}
    </form>
  );
}
