import Link from "next/link";
import { EmailSignup } from "@/components/forms/EmailSignup";
import { InstagramIcon, TiktokIcon } from "@/components/ui/Icons";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { href: "/shop", label: "All Tees" },
      { href: "/shop?collection=drop-01", label: "Drop 01" },
      { href: "/shop?collection=core", label: "Core" },
      { href: "/shop?sort=best", label: "Best Sellers" },
    ],
  },
  {
    title: "Brand",
    links: [
      { href: "/about", label: "About" },
      { href: "/instagram", label: "Instagram" },
      { href: "/contact", label: "Team Orders" },
      { href: "/contact", label: "Wholesale" },
    ],
  },
  {
    title: "Help",
    links: [
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
      { href: "/faq#shipping", label: "Shipping" },
      { href: "/faq#returns", label: "Returns" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="container-x pt-20 pb-10">
        <div className="grid lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-12 lg:gap-10">
          <div>
            <h2 className="display text-4xl md:text-5xl leading-[0.95] mb-4">
              Clean Balls<br />Only.
            </h2>
            <p className="text-cream/70 max-w-sm mb-6 text-sm leading-relaxed">
              Funny tees for lacrosse players, their siblings, and anyone who's ever scooped
              a filthy GB at 7am practice. New slogans every drop.
            </p>
            <p className="label text-cream/60">Join the list</p>
            <EmailSignup theme="dark" cta="Join" className="max-w-sm" />
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="label text-cream/60 mb-4">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label + l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-cream/90 hover:text-field transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <a
              href="https://instagram.com/jakeslax"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center gap-2 text-cream hover:text-field transition-colors"
            >
              <InstagramIcon /> <span className="text-sm">@jakeslax</span>
            </a>
            <a
              href="https://tiktok.com/@jakeslax"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="inline-flex items-center gap-2 text-cream hover:text-field transition-colors"
            >
              <TiktokIcon /> <span className="text-sm">@jakeslax</span>
            </a>
            <a
              href="mailto:info@jakeslax.com"
              className="text-sm text-cream/80 hover:text-field transition-colors"
            >
              info@jakeslax.com
            </a>
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-cream/60">
            <Link href="/faq" className="hover:text-cream">Shipping</Link>
            <Link href="/faq" className="hover:text-cream">Returns</Link>
            <span>Privacy</span>
            <span>Terms</span>
            <span>Accessibility</span>
          </div>
        </div>

        <p className="mt-10 text-[10px] tracking-[0.3em] uppercase text-cream/40">
          © {new Date().getFullYear()} Jake's Lax. All balls reserved. Not affiliated with any league, school, or governing body.
        </p>
      </div>
    </footer>
  );
}
