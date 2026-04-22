import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";
import { getFeaturedProducts } from "@/data/products";
import { ArrowRightIcon } from "@/components/ui/Icons";

export function FeaturedProducts() {
  const featured = getFeaturedProducts();
  return (
    <section className="bg-cream section-pad">
      <div className="container-x">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="label mb-3">The Drop</p>
            <h2 className="display text-giant leading-[0.9]">
              New + Featured
            </h2>
          </div>
          <Link
            href="/shop"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider hover:text-ink/60"
          >
            Shop All <ArrowRightIcon width={16} height={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} priority={i < 2} />
          ))}
        </div>
        <div className="md:hidden mt-10 flex justify-center">
          <Link href="/shop" className="btn-secondary w-full">
            Shop All <ArrowRightIcon width={16} height={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
