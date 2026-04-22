import { cn } from "@/lib/utils";

// Drop-in placeholder for an Instagram post.
// Wire to fetchInstagramFeed() (see src/lib/integrations.ts) when ready.
export function SocialTile({
  index,
  caption = "CLEAN BALLS ONLY",
  href = "https://instagram.com/jakeslax",
  className,
}: {
  index: number;
  caption?: string;
  href?: string;
  className?: string;
}) {
  const tones = [
    "from-athletic-800 to-ink",
    "from-athletic-700 to-athletic-900",
    "from-bone to-athletic-200",
    "from-field/40 to-ink",
    "from-safety/30 to-ink",
    "from-cream to-athletic-100",
  ];
  const tone = tones[index % tones.length];
  const dark = index % 2 === 0;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn("group relative block aspect-square overflow-hidden", className)}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br", tone)} />
      <div className="absolute inset-0 flex items-end p-4">
        <span
          className={cn(
            "display text-xl leading-tight tracking-tight text-balance",
            dark ? "text-cream" : "text-ink",
          )}
        >
          {caption}
        </span>
      </div>
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M7 17L17 7M17 7H9M17 7v8" stroke={dark ? "#F5F1E8" : "#0A0A0A"} strokeWidth="2" />
        </svg>
      </div>
      <span className="sr-only">View post on Instagram</span>
    </a>
  );
}
