"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { CartIcon, MenuIcon, UserIcon, SearchIcon } from "@/components/ui/Icons";
import { MobileMenu } from "./MobileMenu";
import { TickerBanner } from "./TickerBanner";
import { useCart } from "@/lib/cart-context";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/instagram", label: "Instagram" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { itemCount, open: openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="sticky top-0 z-40">
        <TickerBanner />
        <header
          className={cn(
            "bg-cream/95 backdrop-blur-md transition-shadow",
            scrolled ? "shadow-[0_1px_0_rgba(0,0,0,0.08)]" : "",
          )}
        >
          <div className="container-x flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-10">
              <Logo />
              <nav className="hidden lg:flex items-center gap-8">
                {NAV.map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    className="text-sm font-semibold uppercase tracking-wider text-ink/80 hover:text-ink transition-colors relative group"
                  >
                    {n.label}
                    <span className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full bg-ink transition-all" />
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-1 sm:gap-3">
              <Link
                href="/shop"
                aria-label="Search"
                className="hidden sm:inline-flex p-2 hover:bg-ink/5 transition-colors"
              >
                <SearchIcon />
              </Link>
              <Link
                href="/account/login"
                aria-label="Account"
                className="hidden sm:inline-flex p-2 hover:bg-ink/5 transition-colors"
              >
                <UserIcon />
              </Link>
              <button
                type="button"
                onClick={openCart}
                aria-label={`Cart — ${itemCount} item${itemCount === 1 ? "" : "s"}`}
                className="relative p-2 hover:bg-ink/5 transition-colors"
              >
                <CartIcon />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-ink text-cream text-[10px] font-bold flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                className="lg:hidden p-2 hover:bg-ink/5 transition-colors"
              >
                <MenuIcon />
              </button>
            </div>
          </div>
        </header>
      </div>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
