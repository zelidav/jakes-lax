"use client";

import { useState } from "react";
import type { Product, Size } from "@/types";
import { ProductGallery } from "./ProductGallery";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { MinusIcon, PlusIcon, ShareIcon, CheckIcon } from "@/components/ui/Icons";
import { formatPrice, cn } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";
import { ProductCard } from "@/components/product/ProductCard";
import Link from "next/link";

export function ProductDetail({ product, related }: { product: Product; related: Product[] }) {
  const [size, setSize] = useState<Size | null>(null);
  const [color, setColor] = useState(product.colors[0].name);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { add, open } = useCart();

  const onAdd = () => {
    if (!size) return;
    add({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      slogan: product.slogan,
      price: product.price,
      size,
      color,
      image: product.images[0],
      quantity: qty,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const onShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: product.name, text: product.slogan, url: shareUrl });
      } else {
        await navigator.clipboard?.writeText(shareUrl);
      }
    } catch {}
  };

  return (
    <div className="bg-cream">
      <div className="container-x pt-10 md:pt-14 pb-20">
        <nav className="text-xs uppercase tracking-widest text-ink/50 mb-8">
          <Link href="/shop" className="hover:text-ink">Shop</Link>
          <span className="mx-2">/</span>
          <span>{product.name}</span>
        </nav>
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16">
          <ProductGallery slogan={product.slogan} images={product.images} />

          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="flex items-center gap-2 mb-4">
              {product.bestSeller && <span className="tag">Best Seller</span>}
              {product.collection === "drop-01" && <span className="tag bg-field">Drop 01</span>}
            </div>
            <h1 className="display text-4xl md:text-5xl lg:text-6xl leading-[0.92] text-balance">
              {product.name}
            </h1>
            <p className="mt-3 text-ink/70 italic">"{product.slogan}"</p>
            <p className="mt-6 font-mono text-2xl">{formatPrice(product.price)}</p>

            <p className="mt-6 text-ink/80 leading-relaxed">{product.description}</p>

            <div className="mt-8">
              <div className="flex items-center justify-between mb-2">
                <p className="label mb-0">Color</p>
                <p className="text-sm font-semibold">{color}</p>
              </div>
              <div className="flex gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setColor(c.name)}
                    aria-label={c.name}
                    title={c.name}
                    className={cn(
                      "h-10 w-10 rounded-full border-2 transition-all",
                      color === c.name ? "border-ink scale-110" : "border-ink/20",
                    )}
                    style={{ background: c.hex }}
                  />
                ))}
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <p className="label mb-0">Size</p>
                <button className="text-xs uppercase tracking-widest text-ink/60 underline">
                  Size guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={cn(
                      "h-11 min-w-11 px-3 text-sm font-semibold border transition-all",
                      size === s
                        ? "bg-ink text-cream border-ink"
                        : "border-ink/20 hover:border-ink",
                    )}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="inline-flex items-center border border-ink/20">
                <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease" className="p-3 hover:bg-ink hover:text-cream">
                  <MinusIcon width={14} height={14} />
                </button>
                <span className="px-4 font-semibold">{qty}</span>
                <button onClick={() => setQty(qty + 1)} aria-label="Increase" className="p-3 hover:bg-ink hover:text-cream">
                  <PlusIcon width={14} height={14} />
                </button>
              </div>
              <button
                onClick={onAdd}
                disabled={!size}
                className="btn-primary flex-1 disabled:bg-athletic-400"
              >
                {added ? (
                  <>
                    <CheckIcon width={16} height={16} /> Added
                  </>
                ) : !size ? (
                  "Select a size"
                ) : (
                  "Add to bag"
                )}
              </button>
              <button
                onClick={onShare}
                aria-label="Share"
                className="p-3 border border-ink/20 hover:border-ink hover:bg-ink hover:text-cream transition-colors"
              >
                <ShareIcon />
              </button>
            </div>
            {added && (
              <button onClick={open} className="mt-3 text-sm underline text-ink/70">
                View your bag →
              </button>
            )}

            <div className="mt-10 bg-ink text-cream p-6">
              <p className="label text-cream/60 mb-2">The Story</p>
              <p className="text-cream/90 leading-relaxed">{product.story}</p>
            </div>

            <div className="mt-8">
              <Accordion>
                <AccordionItem question="Fabric + Fit" defaultOpen>
                  6.5oz heavyweight 100% ring-spun cotton. Boxy, modern cut with a dropped shoulder.
                  Pre-shrunk and garment-dyed — feels broken in from day one.
                </AccordionItem>
                <AccordionItem question="Shipping">
                  Ships from LA within 48 hours. US domestic: 3–5 business days. International:
                  7–14 business days. Free US shipping on orders $75+.
                </AccordionItem>
                <AccordionItem question="Returns">
                  Unworn, unwashed, tags attached: full refund within 30 days. Just reply to
                  your order confirmation. Custom team orders are final sale.
                </AccordionItem>
                <AccordionItem question="Care">
                  Cold wash inside out. Tumble dry low or hang dry. No bleach. Real graphics last
                  longer if you treat them right.
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="bg-bone section-pad border-t border-ink/10">
          <div className="container-x">
            <h2 className="display text-3xl md:text-5xl mb-10">More From The Drop</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
