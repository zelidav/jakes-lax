import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug, getRelatedProducts, products } from "@/data/products";
import { ProductDetail } from "@/components/product/ProductDetail";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProductBySlug(params.slug);
  if (!p) return { title: "Not found" };
  return {
    title: p.name,
    description: p.shortDescription,
    openGraph: {
      title: `${p.name} — Jake's Lax`,
      description: p.shortDescription,
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();
  const related = getRelatedProducts(product.slug, 3);
  return <ProductDetail product={product} related={related} />;
}
