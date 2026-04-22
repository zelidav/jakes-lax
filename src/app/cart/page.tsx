"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/utils";
import { MinusIcon, PlusIcon, ArrowRightIcon } from "@/components/ui/Icons";
import { ProductArt, ProductImagePlaceholder } from "@/components/ui/ProductImage";
import { createCheckout } from "@/lib/integrations";

export default function CartPage() {
  const { lines, update, remove, subtotal, itemCount } = useCart();

  async function onCheckout() {
    const res = await createCheckout(lines);
    if (res.url && res.url !== "#checkout-placeholder") window.location.href = res.url;
    else alert("Checkout is not wired yet. See src/lib/integrations.ts → createCheckout.");
  }

  return (
    <section className="bg-cream section-pad">
      <div className="container-x">
        <p className="label mb-3">Cart</p>
        <h1 className="display text-giant leading-[0.92] mb-10">Your Bag.</h1>

        {lines.length === 0 ? (
          <div className="text-center py-20 border-y border-ink/10">
            <p className="display text-4xl mb-4">Empty.</p>
            <p className="text-ink/60 mb-8">Nothing to check out. Go grab a tee.</p>
            <Link href="/shop" className="btn-primary">Shop The Drop</Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_380px] gap-12">
            <ul className="divide-y divide-ink/10 border-y border-ink/10">
              {lines.map((line) => (
                <li
                  key={`${line.productId}-${line.size}-${line.color}`}
                  className="py-6 grid grid-cols-[80px_1fr_auto] sm:grid-cols-[120px_1fr_auto] gap-4 sm:gap-6"
                >
                  <Link href={`/products/${line.slug}`} className="block aspect-square overflow-hidden">
                    {line.image && line.image.startsWith("/") && !line.image.endsWith("/front.jpg") ? (
                      <ProductArt src={line.image} alt={line.name} tone="dark" />
                    ) : (
                      <ProductImagePlaceholder slogan={line.slogan} tone="dark" />
                    )}
                  </Link>
                  <div className="min-w-0">
                    <Link href={`/products/${line.slug}`} className="font-semibold hover:underline">
                      {line.name}
                    </Link>
                    <p className="text-sm text-ink/60 mt-1">{line.size} · {line.color}</p>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="inline-flex items-center border border-ink/20">
                        <button
                          onClick={() => update(line.productId, line.size, line.color, line.quantity - 1)}
                          aria-label="Decrease"
                          className="p-2 hover:bg-ink hover:text-cream"
                        >
                          <MinusIcon width={14} height={14} />
                        </button>
                        <span className="px-3 text-sm font-semibold min-w-[28px] text-center">
                          {line.quantity}
                        </span>
                        <button
                          onClick={() => update(line.productId, line.size, line.color, line.quantity + 1)}
                          aria-label="Increase"
                          className="p-2 hover:bg-ink hover:text-cream"
                        >
                          <PlusIcon width={14} height={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => remove(line.productId, line.size, line.color)}
                        className="text-xs uppercase tracking-wider text-ink/60 hover:text-safety"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="font-mono text-right shrink-0">
                    {formatPrice(line.price * line.quantity)}
                  </div>
                </li>
              ))}
            </ul>
            <aside className="lg:sticky lg:top-32 lg:self-start bg-bone p-6 md:p-8 border border-ink/10">
              <h2 className="display text-2xl mb-6">Order Summary</h2>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-ink/70">Items</dt>
                  <dd>{itemCount}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-ink/70">Subtotal</dt>
                  <dd className="font-mono">{formatPrice(subtotal)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-ink/70">Shipping</dt>
                  <dd>Calculated at checkout</dd>
                </div>
              </dl>
              <div className="mt-6 border-t border-ink/10 pt-4 flex justify-between font-semibold">
                <span>Total</span>
                <span className="font-mono">{formatPrice(subtotal)}</span>
              </div>
              <button onClick={onCheckout} className="btn-primary w-full mt-6">
                Checkout <ArrowRightIcon width={16} height={16} />
              </button>
              <Link href="/shop" className="block text-center text-sm text-ink/60 mt-4 hover:text-ink">
                Keep shopping
              </Link>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
