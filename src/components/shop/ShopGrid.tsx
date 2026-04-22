"use client";

import { useMemo, useState } from "react";
import type { Product, Size } from "@/types";
import { ProductCard } from "@/components/product/ProductCard";
import { cn } from "@/lib/utils";

type Sort = "featured" | "newest" | "best";

const COLLECTIONS: { value: Product["collection"] | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "drop-01", label: "Drop 01" },
  { value: "core", label: "Core" },
];

const SIZES: Size[] = ["S", "M", "L", "XL", "XXL"];

const COLOR_OPTIONS = ["Locker Black", "Chalk White", "Bench Cream", "Athletic Gray", "Field Green", "Safety Orange"];

export function ShopGrid({ products }: { products: Product[] }) {
  const [sort, setSort] = useState<Sort>("featured");
  const [collection, setCollection] = useState<(Product["collection"] | "all")>("all");
  const [sizes, setSizes] = useState<Set<Size>>(new Set());
  const [colors, setColors] = useState<Set<string>>(new Set());
  const [query, setQuery] = useState("");

  const toggle = <T,>(set: Set<T>, v: T) => {
    const next = new Set(set);
    if (next.has(v)) next.delete(v);
    else next.add(v);
    return next;
  };

  const filtered = useMemo(() => {
    let list = [...products];
    if (collection !== "all") list = list.filter((p) => p.collection === collection);
    if (sizes.size) list = list.filter((p) => p.sizes.some((s) => sizes.has(s)));
    if (colors.size)
      list = list.filter((p) => p.colors.some((c) => colors.has(c.name)));
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (p) => p.name.toLowerCase().includes(q) || p.slogan.toLowerCase().includes(q),
      );
    }
    if (sort === "best") list = list.sort((a, b) => Number(b.bestSeller) - Number(a.bestSeller));
    if (sort === "newest") list = list.sort((a, b) => (a.collection === "drop-01" ? -1 : 1));
    if (sort === "featured") list = list.sort((a, b) => Number(b.featured) - Number(a.featured));
    return list;
  }, [products, sort, collection, sizes, colors, query]);

  return (
    <div className="grid lg:grid-cols-[260px_1fr] gap-10">
      <aside className="lg:sticky lg:top-32 lg:self-start">
        <p className="label mb-3">Search</p>
        <input
          type="search"
          placeholder="Slogan or name…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input mb-8"
        />

        <p className="label mb-3">Collection</p>
        <ul className="space-y-1 mb-8">
          {COLLECTIONS.map((c) => (
            <li key={c.value}>
              <button
                onClick={() => setCollection(c.value)}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2 text-sm border-l-2 transition-colors",
                  collection === c.value
                    ? "border-ink font-semibold bg-ink/5"
                    : "border-transparent text-ink/70 hover:border-ink/40",
                )}
              >
                <span>{c.label}</span>
                <span className="text-[10px] tracking-widest uppercase">
                  {c.value === "all" ? products.length : products.filter((p) => p.collection === c.value).length}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <p className="label mb-3">Size</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {SIZES.map((s) => (
            <button
              key={s}
              onClick={() => setSizes(toggle(sizes, s))}
              className={cn(
                "h-9 min-w-9 px-3 text-xs font-semibold border transition-colors",
                sizes.has(s)
                  ? "bg-ink text-cream border-ink"
                  : "border-ink/20 hover:border-ink",
              )}
            >
              {s}
            </button>
          ))}
        </div>

        <p className="label mb-3">Color</p>
        <ul className="space-y-2">
          {COLOR_OPTIONS.map((c) => (
            <li key={c}>
              <label className="inline-flex items-center gap-3 cursor-pointer text-sm">
                <input
                  type="checkbox"
                  checked={colors.has(c)}
                  onChange={() => setColors(toggle(colors, c))}
                  className="accent-ink h-4 w-4"
                />
                {c}
              </label>
            </li>
          ))}
        </ul>
      </aside>

      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-ink/10">
          <p className="text-sm text-ink/70">
            {filtered.length} product{filtered.length === 1 ? "" : "s"}
          </p>
          <div className="flex items-center gap-3">
            <label htmlFor="sort" className="text-xs uppercase tracking-widest text-ink/60">Sort</label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="border border-ink/20 bg-transparent px-3 py-2 text-sm focus:outline-none focus:border-ink"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="best">Best Selling</option>
            </select>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="display text-3xl mb-2">Nothing fits those filters.</p>
            <p className="text-ink/60">Try fewer constraints.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
