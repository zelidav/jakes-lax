import Link from "next/link";
import { cn } from "@/lib/utils";

// NOTE: When you have a real wordmark / icon from the designer, drop it in
// /public/brand/ and swap this SVG/text for an <Image />.
export function Logo({ className, theme = "dark" }: { className?: string; theme?: "dark" | "light" }) {
  const color = theme === "dark" ? "text-ink" : "text-cream";
  return (
    <Link href="/" aria-label="Jake's Lax — home" className={cn("group inline-flex items-center gap-2", color, className)}>
      <span className="display text-xl sm:text-2xl leading-none tracking-tightest">
        JAKE&apos;S LAX
      </span>
      <span aria-hidden className="hidden sm:inline-block h-1.5 w-1.5 rounded-full bg-current translate-y-[-6px] transition-transform group-hover:scale-150" />
    </Link>
  );
}
