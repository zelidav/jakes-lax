import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  href?: string;
  variant?: "light" | "dark" | "accent";
  className?: string;
};

const variants = {
  light: "bg-cream text-ink border border-ink/10",
  dark: "bg-ink text-cream",
  accent: "bg-field text-ink",
};

export function SloganCard({ text, href, variant = "light", className }: Props) {
  const body = (
    <div
      className={cn(
        "aspect-square sm:aspect-[4/5] flex flex-col justify-between p-6 md:p-8 transition-transform duration-300 hover:-translate-y-1",
        variants[variant],
        className,
      )}
    >
      <div className="flex items-center justify-between text-[10px] uppercase tracking-widest opacity-70">
        <span>Jake&apos;s Lax</span>
        <span>Slogan</span>
      </div>
      <h3 className="display text-2xl sm:text-3xl md:text-4xl leading-[0.95] text-balance">
        {text}
      </h3>
      <div className="flex items-center justify-between text-[10px] uppercase tracking-widest opacity-70">
        <span>Clean Balls Only</span>
        <span aria-hidden>→</span>
      </div>
    </div>
  );
  if (href) return <Link href={href} className="block">{body}</Link>;
  return body;
}
