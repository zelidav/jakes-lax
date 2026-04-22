import type { Metadata } from "next";
import { products } from "@/data/products";
import { ShopGrid } from "@/components/shop/ShopGrid";

export const metadata: Metadata = {
  title: "Shop",
  description: "All Jake's Lax tees. Drop 01 and core slogans. Heavyweight cotton, funny graphics, free US shipping over $75.",
};

export default function ShopPage() {
  return (
    <div className="bg-cream">
      <section className="container-x pt-12 md:pt-16 pb-8 md:pb-12">
        <p className="label mb-3">Shop</p>
        <h1 className="display text-giant leading-[0.9]">All The Balls.</h1>
        <p className="mt-4 max-w-xl text-ink/70">
          Every tee in one place. Use the filters on the left to find your slogan, size, and colorway.
        </p>
      </section>
      <section className="container-x pb-24">
        <ShopGrid products={products} />
      </section>
    </div>
  );
}
