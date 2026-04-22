"use client";

import { useState } from "react";
import { ProductArt, ProductImagePlaceholder } from "@/components/ui/ProductImage";
import { cn } from "@/lib/utils";

type Tone = "dark" | "light" | "cream";

export function ProductGallery({
  slogan,
  alt,
  artImage,
  artTone = "dark",
}: {
  slogan: string;
  alt: string;
  artImage?: string;
  artTone?: Tone;
}) {
  const [index, setIndex] = useState(0);
  // Primary view = real artwork; thumbs 2–4 are branded placeholder tiles
  // so players can preview "chest hit", "lifestyle", "detail" context before
  // real tee-on-body photos exist. Swap these for extra Image entries once
  // the photographer delivers.
  const placeholderTones: Tone[] = [artTone, "light", "cream"];
  const thumbs = [
    { kind: "art" as const },
    { kind: "placeholder" as const, tone: placeholderTones[0], label: `Chest Hit · ${slogan}` },
    { kind: "placeholder" as const, tone: placeholderTones[1], label: "Lifestyle — Coming Soon" },
    { kind: "placeholder" as const, tone: placeholderTones[2], label: "Detail — Heavyweight Cotton" },
  ];

  return (
    <div>
      <div className="w-full">
        {index === 0 && artImage ? (
          <ProductArt src={artImage} alt={alt} tone={artTone} priority />
        ) : (
          <ProductImagePlaceholder
            slogan={thumbs[index].kind === "placeholder" ? thumbs[index].label! : slogan}
            tone={index === 0 ? artTone : placeholderTones[index - 1]}
          />
        )}
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2">
        {thumbs.map((t, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`View image ${i + 1}`}
            className={cn(
              "aspect-square border overflow-hidden transition-all",
              i === index ? "border-ink" : "border-ink/10 hover:border-ink/40",
            )}
          >
            {t.kind === "art" && artImage ? (
              <ProductArt src={artImage} alt={alt} tone={artTone} />
            ) : (
              <ProductImagePlaceholder slogan={slogan} tone={"tone" in t ? t.tone : artTone} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
