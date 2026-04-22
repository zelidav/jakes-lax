"use client";

import Link from "next/link";
import { useEffect } from "react";
import { CloseIcon, InstagramIcon } from "@/components/ui/Icons";

type Props = {
  open: boolean;
  onClose: () => void;
};

const NAV = [
  { href: "/shop", label: "Shop" },
  { href: "/generator", label: "Jake's Lax It Up" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/instagram", label: "Instagram" },
  { href: "/contact", label: "Contact" },
];

const ACCOUNT = [
  { href: "/account/login", label: "Log In" },
  { href: "/account/signup", label: "Create Account" },
];

export function MobileMenu({ open, onClose }: Props) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
      />
      <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-cream flex flex-col">
        <div className="flex items-center justify-between p-5 border-b border-ink/10">
          <span className="display text-xl">Menu</span>
          <button onClick={onClose} className="p-2 -mr-2" aria-label="Close">
            <CloseIcon />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto">
          <ul className="divide-y divide-ink/10">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={onClose}
                  className="flex items-center justify-between p-5 display text-3xl hover:bg-ink hover:text-cream transition-colors"
                >
                  {n.label}
                  <span aria-hidden>→</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="p-5 pt-8">
            <p className="label mb-3">Account</p>
            <div className="space-y-2">
              {ACCOUNT.map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  onClick={onClose}
                  className="block text-sm font-semibold text-ink/80 hover:text-ink"
                >
                  {a.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <div className="p-5 border-t border-ink/10 flex items-center justify-between">
          <a
            href="https://instagram.com/jakeslax"
            className="inline-flex items-center gap-2 text-sm font-semibold"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon /> @jakeslax
          </a>
          <span className="display text-sm text-ink/60">Clean Balls Only</span>
        </div>
      </div>
    </div>
  );
}
