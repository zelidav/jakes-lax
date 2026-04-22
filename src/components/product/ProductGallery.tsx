"use client";

import { useState } from "react";
import { ProductImagePlaceholder } from "@/components/ui/ProductImage";
import { cn } from "@/lib/utils";

export function ProductGallery({ slogan, images }: { slogan: string; images: string[] }) {
  const [index, setIndex] = useState(0);
  // NOTE: `images` currently holds placeholder paths. When real product
  // photos land in /public/products/<slug>/, switch this to:
  //   <Image src={images[index]} width={1000} height={1000} alt={...} />
  const tones: ("dark" | "light" | "cream")[] = ["dark", "light", "cream", "dark"];
  return (
    <div>
      <div className="w-full">
        <ProductImagePlaceholder slogan={slogan} tone={tones[index % tones.length]} />
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2">
        {images.slice(0, 4).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`View image ${i + 1}`}
            className={cn(
              "aspect-square border overflow-hidden transition-all",
              i === index ? "border-ink" : "border-ink/10 hover:border-ink/40",
            )}
          >
            <ProductImagePlaceholder slogan={slogan} tone={tones[i % tones.length]} />
          </button>
        ))}
      </div>
    </div>
  );
}
