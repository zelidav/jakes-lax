import { cn } from "@/lib/utils";

// Placeholder tile that stands in for a real product photo.
// When real images land in /public/products/<slug>/... update ProductCard
// and PDP to use next/image with the `src` from the product record.
export function ProductImagePlaceholder({
  slogan,
  tone = "dark",
  className,
}: {
  slogan: string;
  tone?: "dark" | "light" | "cream";
  className?: string;
}) {
  const bg =
    tone === "dark"
      ? "bg-gradient-to-br from-athletic-700 via-ink to-athletic-800 text-cream"
      : tone === "cream"
        ? "bg-gradient-to-br from-cream to-bone text-ink"
        : "bg-gradient-to-br from-athletic-50 to-athletic-200 text-ink";
  return (
    <div className={cn("relative w-full aspect-square overflow-hidden", bg, className)}>
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_20%_20%,currentColor_1px,transparent_1px)] [background-size:10px_10px]" />
      <div className="absolute inset-5 border border-current/10" />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <span className="text-[10px] tracking-[0.3em] uppercase opacity-60 mb-4">
          Jake&apos;s Lax
        </span>
        <span className="display text-2xl sm:text-3xl md:text-4xl leading-[0.95] text-balance">
          {slogan}
        </span>
        <span className="mt-4 text-[10px] tracking-[0.3em] uppercase opacity-60">
          Back Print · Heavy Cotton
        </span>
      </div>
    </div>
  );
}
