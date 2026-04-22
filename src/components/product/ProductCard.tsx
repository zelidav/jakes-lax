"use client";

import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/types";
import { formatPrice, cn } from "@/lib/utils";
import { ProductArt, ProductImagePlaceholder } from "@/components/ui/ProductImage";
import { useCart } from "@/lib/cart-context";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const [hoverSize, setHoverSize] = useState<string | null>(null);
  const { add } = useCart();
  const tone = product.artTone ?? (product.collection === "drop-01" ? "dark" : product.slogan.length > 25 ? "light" : "cream");

  const quickAdd = (size: string) => {
    add({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      slogan: product.slogan,
      price: product.price,
      size: size as any,
      color: product.colors[0].name,
      image: product.artImage || product.images[0],
      quantity: 1,
    });
  };

  return (
    <div className="group relative">
      <Link href={`/products/${product.slug}`} className="block relative overflow-hidden">
        {product.artImage ? (
          <ProductArt
            src={product.artImage}
            alt={`${product.name} — ${product.slogan}`}
            tone={tone}
            priority={priority}
          />
        ) : (
          <ProductImagePlaceholder slogan={product.slogan} tone={tone} />
        )}
        <div className="absolute top-3 left-3 flex gap-2">
          {product.bestSeller && <span className="tag bg-ink text-cream border-ink">Best Seller</span>}
          {product.collection === "drop-01" && (
            <span className="tag bg-field text-ink border-ink">Drop 01</span>
          )}
        </div>
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-ink text-cream p-3">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] uppercase tracking-widest">Quick Add</span>
            <div className="flex gap-1.5">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onMouseEnter={() => setHoverSize(s)}
                  onMouseLeave={() => setHoverSize(null)}
                  onClick={(e) => {
                    e.preventDefault();
                    quickAdd(s);
                  }}
                  className={cn(
                    "h-7 w-7 text-[11px] font-semibold border transition-colors",
                    hoverSize === s
                      ? "bg-cream text-ink border-cream"
                      : "border-cream/40 text-cream hover:border-cream",
                  )}
                  aria-label={`Add size ${s} to cart`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Link>
      <Link href={`/products/${product.slug}`} className="block mt-4 space-y-1">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-semibold text-ink leading-tight">{product.name}</h3>
          <span className="font-mono text-sm text-ink/80 shrink-0">{formatPrice(product.price)}</span>
        </div>
        <p className="text-xs text-ink/60 line-clamp-2">{product.shortDescription}</p>
        <div className="flex items-center gap-1.5 pt-1">
          {product.colors.map((c) => (
            <span
              key={c.name}
              title={c.name}
              className="h-3.5 w-3.5 rounded-full border border-ink/20"
              style={{ background: c.hex }}
            />
          ))}
        </div>
      </Link>
    </div>
  );
}
