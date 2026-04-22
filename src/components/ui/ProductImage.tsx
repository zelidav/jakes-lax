import Image from "next/image";
import { cn } from "@/lib/utils";

type Tone = "dark" | "light" | "cream";

const toneBg: Record<Tone, string> = {
  dark: "bg-gradient-to-br from-athletic-700 via-ink to-athletic-800 text-cream",
  light: "bg-gradient-to-br from-athletic-50 to-athletic-200 text-ink",
  cream: "bg-gradient-to-br from-cream to-bone text-ink",
};

// Text-only branded tile for products that don't yet have artwork.
export function ProductImagePlaceholder({
  slogan,
  tone = "dark",
  className,
}: {
  slogan: string;
  tone?: Tone;
  className?: string;
}) {
  return (
    <div className={cn("relative w-full aspect-square overflow-hidden", toneBg[tone], className)}>
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

// Real artwork tile — shows the back-print graphic framed like a product photo.
// Uses `unoptimized` because the site builds as a static export.
export function ProductArt({
  src,
  alt,
  tone = "dark",
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  tone?: Tone;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative w-full aspect-square overflow-hidden", toneBg[tone], className)}>
      <div className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover"
          priority={priority}
          unoptimized
        />
      </div>
      <div className="absolute inset-x-0 top-0 flex justify-between items-center p-3 text-[10px] tracking-[0.3em] uppercase">
        <span className={cn("px-2 py-1", tone === "dark" ? "bg-ink/60 text-cream" : "bg-cream/70 text-ink")}>
          Jake&apos;s Lax
        </span>
        <span className={cn("px-2 py-1", tone === "dark" ? "bg-ink/60 text-cream" : "bg-cream/70 text-ink")}>
          Back Print
        </span>
      </div>
    </div>
  );
}
