"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { BallRating, GeneratedDesign } from "@/data/generator";
import { jakesLaxItUp, RATING_LABELS } from "@/data/generator";
import { BallRatingDial } from "@/components/ui/BallRating";
import { ArrowRightIcon, CheckIcon, ShareIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

const RATING_COLOR: Record<BallRating, { bg: string; text: string; accent: string }> = {
  1: { bg: "bg-bone", text: "text-ink", accent: "bg-ink text-cream" },
  2: { bg: "bg-cream", text: "text-ink", accent: "bg-ink text-cream" },
  3: { bg: "bg-ink", text: "text-cream", accent: "bg-field text-ink" },
  4: { bg: "bg-ink", text: "text-cream", accent: "bg-field text-ink" },
  5: { bg: "bg-ink", text: "text-cream", accent: "bg-safety text-cream" },
};

export function JakesLaxGenerator() {
  const [rating, setRating] = useState<BallRating>(3);
  const [name, setName] = useState("");
  const [history, setHistory] = useState<GeneratedDesign[]>([]);
  const [current, setCurrent] = useState<GeneratedDesign | null>(null);
  const [copiedMj, setCopiedMj] = useState(false);

  // Helpful when rating changes without a generate click — we keep current
  // result but mark whether it's still "fresh" for the selected rating.
  const isStaleRating = current && current.rating !== rating;

  function roll() {
    const next = jakesLaxItUp({ rating, name });
    setCurrent(next);
    setHistory((h) => [next, ...h].slice(0, 6));
  }

  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedMj(true);
      setTimeout(() => setCopiedMj(false), 1500);
    } catch {}
  }

  const shareText = useMemo(() => {
    if (!current) return "";
    return `Jake's Lax It Up → "${current.back}" (front: ${current.front}). ${current.rating}/5 balls. jakeslax.com`;
  }, [current]);

  async function onShare() {
    if (!current) return;
    const url = typeof window !== "undefined" ? window.location.href : "https://jakeslax.com";
    try {
      if (navigator.share) {
        await navigator.share({ title: "Jake's Lax It Up", text: shareText, url });
      } else {
        await navigator.clipboard.writeText(`${shareText}\n${url}`);
      }
    } catch {}
  }

  const rc = RATING_COLOR[rating];

  return (
    <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-14">
      {/* Control panel */}
      <div className="bg-bone border border-ink/10 p-6 md:p-8 self-start">
        <p className="label mb-3">Step 01</p>
        <label htmlFor="jl-name" className="block">
          <span className="display text-2xl leading-none mb-2 block">Your Name</span>
          <span className="text-sm text-ink/60 leading-snug mb-3 block">
            Optional. If you drop one in, we&apos;ll bake it into the slogan. Works with teammates, siblings, your dog, your rival.
          </span>
        </label>
        <input
          id="jl-name"
          type="text"
          placeholder="Adrian, Jake, Coach, etc."
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={24}
          className="input mb-8"
          autoComplete="off"
        />

        <p className="label mb-3">Step 02</p>
        <span className="display text-2xl leading-none mb-4 block">How Dirty?</span>
        <BallRatingDial value={rating} onChange={setRating} />
        <p className="mt-6 text-xs text-ink/60 leading-relaxed">
          <span className="font-semibold text-ink">1</span> is squeaky clean collegiate.{" "}
          <span className="font-semibold text-ink">3</span> is the house standard.{" "}
          <span className="font-semibold text-ink">5</span> is locker-room raw — won&apos;t clear a middle school dress code.
        </p>

        <button
          type="button"
          onClick={roll}
          className="mt-8 btn-primary w-full text-base py-4"
        >
          {current ? "Jake's Lax It Up Again" : "Jake's Lax It Up"}{" "}
          <ArrowRightIcon width={18} height={18} />
        </button>
        <p className="mt-3 text-center text-[10px] uppercase tracking-widest text-ink/50">
          Predone · Randomized · Bucketed by Rating
        </p>
      </div>

      {/* Output */}
      <div className="space-y-6">
        {!current ? (
          <div className="bg-cream border border-dashed border-ink/20 p-10 md:p-14 text-center">
            <p className="display text-4xl md:text-6xl leading-[0.92] text-ink/20 mb-4">
              Ready When You Are.
            </p>
            <p className="text-ink/60 max-w-md mx-auto">
              Pick a ball rating, drop a name if you want, hit the button. You&apos;ll get a
              front chest hit + back slogan + design concept + Midjourney prompt.
            </p>
          </div>
        ) : (
          <>
            <article
              className={cn(
                "relative overflow-hidden p-6 md:p-10 transition-colors",
                rc.bg,
                rc.text,
                isStaleRating && "opacity-60",
              )}
            >
              <div className="flex items-center justify-between mb-8">
                <span className={cn("tag border-current", rating >= 3 ? "border-cream/30" : "border-ink/30")}>
                  {current.rating}/5 · {current.ratingLabel}
                </span>
                {current.personalizedFor && (
                  <span className={cn("tag border-current", rating >= 3 ? "border-cream/30" : "border-ink/30")}>
                    For {current.personalizedFor}
                  </span>
                )}
              </div>

              <p className="label mb-2 opacity-70">Front — chest hit</p>
              <p className="display text-2xl md:text-4xl leading-none mb-10">
                {current.front}
              </p>

              <p className="label mb-2 opacity-70">Back — main graphic</p>
              <p className="display text-4xl md:text-6xl lg:text-7xl leading-[0.92] text-balance">
                {current.back}
              </p>

              <div className="mt-10 grid sm:grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="label mb-1 opacity-70">Design concept</p>
                  <p className="leading-relaxed opacity-90">{current.concept}</p>
                </div>
                <div>
                  <p className="label mb-1 opacity-70">Suggested palette</p>
                  <p className="leading-relaxed opacity-90">{current.palette}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => copy(current.midjourneyPrompt)}
                  className={cn("btn px-4 py-3 text-xs", rc.accent)}
                >
                  {copiedMj ? (
                    <>
                      <CheckIcon width={14} height={14} /> Copied
                    </>
                  ) : (
                    <>Copy Midjourney Prompt</>
                  )}
                </button>
                <button
                  type="button"
                  onClick={onShare}
                  className={cn(
                    "btn px-4 py-3 text-xs border",
                    rating >= 3 ? "border-cream/40 text-cream hover:bg-cream hover:text-ink" : "border-ink/40 text-ink hover:bg-ink hover:text-cream",
                  )}
                >
                  <ShareIcon width={14} height={14} /> Share
                </button>
                <Link
                  href="/contact"
                  className={cn(
                    "btn px-4 py-3 text-xs border",
                    rating >= 3 ? "border-cream/40 text-cream hover:bg-cream hover:text-ink" : "border-ink/40 text-ink hover:bg-ink hover:text-cream",
                  )}
                >
                  Print This For My Team →
                </Link>
              </div>

              {isStaleRating && (
                <p className="mt-6 text-xs opacity-70">
                  You changed the rating. Hit the button again to generate fresh at {rating}/5.
                </p>
              )}
            </article>

            <details className="bg-cream border border-ink/10 p-5">
              <summary className="cursor-pointer font-mono text-xs uppercase tracking-widest text-ink/70">
                Midjourney prompt · {current.stylize}s stylize
              </summary>
              <p className="mt-4 font-mono text-xs leading-relaxed text-ink/80 whitespace-pre-wrap break-words">
                {current.midjourneyPrompt}
              </p>
            </details>

            {history.length > 1 && (
              <div>
                <p className="label mb-3">Recent rolls</p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {history.slice(1).map((h, i) => (
                    <li
                      key={i}
                      className="bg-cream border border-ink/10 p-4 hover:border-ink cursor-pointer transition-colors"
                      onClick={() => setCurrent(h)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="tag">{h.rating}/5 {h.ratingLabel}</span>
                        {h.personalizedFor && <span className="tag">{h.personalizedFor}</span>}
                      </div>
                      <p className="text-xs font-semibold text-ink/60">{h.front}</p>
                      <p className="display text-lg leading-tight mt-1">{h.back}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
