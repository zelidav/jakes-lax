import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/layout/Providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";

export const metadata: Metadata = {
  metadataBase: new URL("https://jakeslax.com"),
  title: {
    default: "Jake's Lax — Clean Balls Only",
    template: "%s · Jake's Lax",
  },
  description:
    "Jake's Lax is a lacrosse lifestyle apparel brand. Heavyweight graphic tees, funny back-print slogans, built for the sideline and the locker room. Clean Balls Only.",
  keywords: [
    "lacrosse apparel",
    "lax shirts",
    "lacrosse streetwear",
    "Jake's Lax",
    "Clean Balls Only",
    "lax tees",
  ],
  openGraph: {
    title: "Jake's Lax — Clean Balls Only",
    description:
      "Heavyweight graphic tees for the lacrosse player who gets the joke. Drop 01 out now.",
    siteName: "Jake's Lax",
    type: "website",
    url: "https://jakeslax.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jake's Lax — Clean Balls Only",
    description: "Heavyweight lacrosse tees with funny back-print slogans. Drop 01 out now.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Optional: swap in Anton (Google Fonts) for the display face.
            Until then the stack falls back to Impact / Arial Black. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          :root {
            --font-display: "Anton", Impact, "Arial Black", sans-serif;
            --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
          }
        `}</style>
      </head>
      <body>
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-ink focus:text-cream focus:px-3 focus:py-2"
          >
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <CartDrawer />
        </Providers>
      </body>
    </html>
  );
}
