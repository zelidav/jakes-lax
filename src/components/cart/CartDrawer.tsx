"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/utils";
import { CloseIcon, MinusIcon, PlusIcon, ArrowRightIcon } from "@/components/ui/Icons";
import { ProductImagePlaceholder } from "@/components/ui/ProductImage";
import { createCheckout } from "@/lib/integrations";

export function CartDrawer() {
  const { isOpen, close, lines, itemCount, subtotal, update, remove } = useCart();

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  async function onCheckout() {
    const res = await createCheckout(lines);
    if (res.url && res.url !== "#checkout-placeholder") window.location.href = res.url;
    else alert("Checkout is not wired yet. See src/lib/integrations.ts → createCheckout.");
  }

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-50 transition ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <div
        onClick={close}
        className={`absolute inset-0 bg-ink/60 backdrop-blur-sm transition-opacity ${isOpen ? "opacity-100" : "opacity-0"}`}
      />
      <aside
        role="dialog"
        aria-label="Shopping cart"
        className={`absolute top-0 right-0 h-full w-full sm:w-[440px] bg-cream flex flex-col shadow-2xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-5 border-b border-ink/10">
          <div>
            <h2 className="display text-2xl leading-none">Your Bag</h2>
            <p className="text-xs text-ink/60 mt-1">{itemCount} item{itemCount === 1 ? "" : "s"}</p>
          </div>
          <button onClick={close} aria-label="Close cart" className="p-2 -mr-2">
            <CloseIcon />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {lines.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <p className="display text-3xl mb-3">Empty bag.</p>
              <p className="text-ink/60 mb-6 text-sm max-w-xs">
                Clean balls only. Go pick out a tee.
              </p>
              <Link href="/shop" onClick={close} className="btn-primary">
                Shop The Drop
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-ink/10">
              {lines.map((line) => (
                <li key={`${line.productId}-${line.size}-${line.color}`} className="py-5 flex gap-4">
                  <Link
                    href={`/products/${line.slug}`}
                    onClick={close}
                    className="shrink-0 w-20 h-20 overflow-hidden"
                  >
                    <ProductImagePlaceholder slogan={line.slogan} tone="dark" />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Link
                          href={`/products/${line.slug}`}
                          onClick={close}
                          className="font-semibold text-sm leading-tight hover:underline"
                        >
                          {line.name}
                        </Link>
                        <p className="text-xs text-ink/60 mt-0.5">
                          {line.size} · {line.color}
                        </p>
                      </div>
                      <span className="font-mono text-sm">{formatPrice(line.price * line.quantity)}</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-ink/20">
                        <button
                          type="button"
                          onClick={() =>
                            update(line.productId, line.size, line.color, line.quantity - 1)
                          }
                          aria-label="Decrease"
                          className="p-2 hover:bg-ink hover:text-cream"
                        >
                          <MinusIcon width={14} height={14} />
                        </button>
                        <span className="px-3 text-sm font-semibold min-w-[28px] text-center">
                          {line.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            update(line.productId, line.size, line.color, line.quantity + 1)
                          }
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
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <div className="border-t border-ink/10 p-5 space-y-4 bg-bone">
            <div className="flex items-center justify-between text-sm">
              <span className="text-ink/60">Subtotal</span>
              <span className="font-mono font-semibold">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-[11px] text-ink/50">
              Shipping and taxes calculated at checkout. Free US shipping over $75.
            </p>
            <button onClick={onCheckout} className="btn-primary w-full">
              Checkout <ArrowRightIcon width={16} height={16} />
            </button>
            <Link href="/cart" onClick={close} className="block text-center text-xs uppercase tracking-widest text-ink/60 hover:text-ink">
              View full cart
            </Link>
          </div>
        )}
      </aside>
    </div>
  );
}
