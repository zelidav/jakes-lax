"use client";

import type { BallRating } from "@/data/generator";
import { RATING_LABELS } from "@/data/generator";
import { cn } from "@/lib/utils";

// A dial of 1–5 balls. Clicking a ball sets the rating.
// Size scales up as rating increases for visual signal.
export function BallRatingDial({
  value,
  onChange,
  theme = "light",
}: {
  value: BallRating;
  onChange: (v: BallRating) => void;
  theme?: "light" | "dark";
}) {
  const dark = theme === "dark";
  const ratings: BallRating[] = [1, 2, 3, 4, 5];
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <p className={cn("label mb-0", dark && "text-cream/60")}>Balls Rating</p>
        <p className={cn("text-xs uppercase tracking-widest font-semibold", dark ? "text-field" : "text-ink")}>
          {value} / 5 — {RATING_LABELS[value].short}
        </p>
      </div>
      <div role="radiogroup" aria-label="Ball rating" className="flex items-end gap-3 sm:gap-4">
        {ratings.map((r) => {
          const active = r === value;
          const selected = r <= value;
          // Ball size escalates with rating (1 is smallest, 5 is largest)
          const size = 24 + r * 8;
          return (
            <button
              key={r}
              type="button"
              role="radio"
              aria-checked={active}
              aria-label={`${r} ball${r === 1 ? "" : "s"} — ${RATING_LABELS[r].long}`}
              onClick={() => onChange(r)}
              className={cn(
                "group relative flex flex-col items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                dark ? "focus-visible:ring-field" : "focus-visible:ring-ink",
              )}
            >
              <span
                style={{ width: size, height: size }}
                className={cn(
                  "rounded-full border-2 transition-all duration-200",
                  selected
                    ? r === 5
                      ? "bg-safety border-safety shadow-[inset_0_-4px_8px_rgba(0,0,0,0.3)]"
                      : r === 4
                        ? "bg-field border-field shadow-[inset_0_-4px_8px_rgba(0,0,0,0.2)]"
                        : dark
                          ? "bg-cream border-cream"
                          : "bg-ink border-ink"
                    : dark
                      ? "bg-transparent border-cream/30"
                      : "bg-transparent border-ink/25",
                  active && "ring-4 ring-offset-2",
                  active && (dark ? "ring-field ring-offset-ink" : "ring-ink ring-offset-cream"),
                  "group-hover:scale-110",
                )}
              />
              <span
                className={cn(
                  "text-[10px] font-bold uppercase tracking-widest transition-colors",
                  active ? (dark ? "text-cream" : "text-ink") : dark ? "text-cream/40" : "text-ink/40",
                )}
              >
                {r}
              </span>
            </button>
          );
        })}
      </div>
      <div className={cn("mt-3 flex items-center justify-between text-[10px] tracking-[0.3em] uppercase", dark ? "text-cream/50" : "text-ink/50")}>
        <span>← Clean</span>
        <span className="font-mono">{RATING_LABELS[value].long}</span>
        <span>Dirty →</span>
      </div>
    </div>
  );
}
