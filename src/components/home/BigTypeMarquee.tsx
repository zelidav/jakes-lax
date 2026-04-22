import { slogans } from "@/data/slogans";

// Between-section marquee for vibe + to keep the slogan catalog omnipresent.
export function BigTypeMarquee() {
  const line = slogans.map((s) => s.text.toUpperCase()).join(" · ");
  return (
    <div className="bg-ink text-cream py-10 overflow-hidden border-y border-cream/10">
      <div className="flex whitespace-nowrap animate-marquee gap-14 display text-[clamp(2rem,6vw,5rem)] leading-none tracking-tightest">
        <span className="inline-flex items-center gap-14">
          {line}
          <span className="text-field">●</span>
        </span>
        <span aria-hidden className="inline-flex items-center gap-14">
          {line}
          <span className="text-field">●</span>
        </span>
      </div>
    </div>
  );
}
