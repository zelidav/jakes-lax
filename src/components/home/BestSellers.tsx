import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";
import { getBestSellers } from "@/data/products";

export function BestSellers() {
  const best = getBestSellers();
  return (
    <section className="bg-bone section-pad border-y border-ink/10">
      <div className="container-x">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <p className="label mb-3">Best Sellers</p>
            <h2 className="display text-giant leading-[0.9] mb-5">
              What&apos;s Going<br />Out The Door.
            </h2>
            <p className="text-ink/70 leading-relaxed max-w-sm">
              These are the ones restocks sell out in a week. Players wear them to practice,
              siblings steal them, coaches pretend to disapprove. Classic.
            </p>
            <Link
              href="/shop?sort=best"
              className="mt-6 inline-flex btn-ghost"
            >
              See all best sellers
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5 md:gap-8">
            {best.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
