import { tickerLines } from "@/data/slogans";

export function TickerBanner() {
  const doubled = [...tickerLines, ...tickerLines];
  return (
    <div className="bg-ink text-cream overflow-hidden border-b border-cream/10">
      <div className="flex gap-10 py-2.5 whitespace-nowrap animate-marquee">
        {doubled.map((t, i) => (
          <span key={i} className="display text-xs tracking-[0.25em] flex items-center gap-10">
            {t}
            <span aria-hidden className="text-field">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
