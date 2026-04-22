"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function AccordionItem({
  question,
  children,
  defaultOpen = false,
}: {
  question: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-ink/10">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="display text-lg sm:text-xl leading-tight pr-6">{question}</span>
        <span
          aria-hidden
          className={cn(
            "inline-flex shrink-0 h-8 w-8 items-center justify-center border border-ink transition-transform",
            open ? "rotate-45" : "rotate-0",
          )}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </span>
      </button>
      <div
        className={cn(
          "grid transition-all duration-300",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="pb-6 pr-10 text-ink/70 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function Accordion({ children }: { children: ReactNode }) {
  return <div className="border-t border-ink/10">{children}</div>;
}
