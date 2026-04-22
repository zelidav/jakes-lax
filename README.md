# Jake's Lax — Clean Balls Only

A launch-ready website for the Jake's Lax lacrosse lifestyle apparel brand. Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. Mock-data driven today, wired to plug into Shopify + Stripe + Supabase + Klaviyo + Instagram when you're ready.

## Quick start

```bash
cd jakes-lax
npm install
npm run dev
```

Open http://localhost:3000.

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server on :3000 |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run lint` | Next/ESLint checks |
| `npm run typecheck` | TypeScript strict-mode check |

## Project structure

```
src/
├─ app/                       Next.js routes (App Router)
│  ├─ layout.tsx              Root layout + metadata + providers + cart drawer
│  ├─ page.tsx                Home
│  ├─ shop/                   Shop index (filters, sort)
│  ├─ products/[slug]/        Product detail
│  ├─ about/                  Brand manifesto
│  ├─ faq/                    FAQ
│  ├─ contact/                Contact form
│  ├─ instagram/              Social page
│  ├─ cart/                   Full cart page
│  └─ account/                Login / Signup / Dashboard
├─ components/
│  ├─ layout/                 Header, Footer, MobileMenu, TickerBanner, Providers
│  ├─ home/                   Hero, FeaturedProducts, BestSellers, BrandStatement, …
│  ├─ product/                ProductCard, ProductDetail, ProductGallery
│  ├─ shop/                   ShopGrid (filters + sort)
│  ├─ cart/                   CartDrawer
│  ├─ forms/                  EmailSignup, SmsSignup, ContactForm
│  └─ ui/                     Button, Logo, Icons, Accordion, SloganCard, SocialTile, ProductImage
├─ data/
│  ├─ products.ts             Mock CMS — add/edit products here
│  ├─ slogans.ts              Slogan catalog + marquee lines
│  └─ faqs.ts                 FAQ copy
├─ lib/
│  ├─ cart-context.tsx        localStorage-backed cart state
│  ├─ auth-context.tsx        Simple auth state (wire to Supabase later)
│  ├─ integrations.ts         Stubs for email/SMS/contact/auth/IG/checkout
│  └─ utils.ts                Small helpers (cn, formatPrice)
└─ types/                     Shared TypeScript types
```

## Adding products

Edit `src/data/products.ts`. The file is shaped like a lightweight CMS: each entry includes `id`, `slug`, `name`, `slogan`, copy blocks, `price`, `sizes`, `colors`, `images`, `collection`, plus `featured` and `bestSeller` flags.

1. Copy an existing product.
2. Update fields.
3. Drop real photos into `/public/products/<slug>/` (any filenames work; reference them in `images[]`).
4. The homepage, shop, and PDP pull from this file automatically.

Until real photos land, the site shows branded placeholder tiles that render the slogan in our display typography.

## Adding slogans

Edit `src/data/slogans.ts`. Appears in the homepage slogan grid and marquee.

## Swapping in real integrations

All third-party calls live in **`src/lib/integrations.ts`** so the UI never has to care which backend is wired up. Every function already has the signature the UI calls — replace the mock body with a real API call.

| Feature | Function | Wire to |
| --- | --- | --- |
| Email capture | `subscribeEmail(email)` | Klaviyo client subscriptions endpoint |
| SMS capture | `subscribeSms(phone)` | Klaviyo SMS list (get TCPA consent) |
| Contact form | `sendContactMessage(payload)` | `/api/contact`, Resend, Postmark, Supabase edge fn |
| Auth (sign up / sign in) | `signUpUser` / `signInUser` | Supabase `auth.signUp` / `signInWithPassword` |
| Instagram feed | `fetchInstagramFeed()` | Instagram Graph API (or Behold / EmbedSocial) |
| Checkout | `createCheckout(lines)` | Shopify Storefront API or Stripe Checkout Sessions |

Env vars are listed in `.env.example` — copy to `.env.local` and fill in.

## Design system

- **Palette**: black (`#0A0A0A`), cream (`#F5F1E8`), bone (`#ECE6D6`), athletic grays, field-green accent (`#C8FF2C`), safety-orange accent (`#FF4D12`).
- **Type**: display face uses **Anton** (loaded via Google Fonts in `app/layout.tsx`) with Impact / Arial Black fallback. Body copy uses Inter with system fallback.
- **Motion**: subtle fade-ups on hero content and continuous horizontal marquees on the ticker banner and big-type section. No over-animation.
- **Responsiveness**: mobile-first throughout. Sticky ticker + nav on all breakpoints.

Tailwind config lives at `tailwind.config.ts`. Global component classes (`btn-primary`, `input`, `label`, `container-x`, `section-pad`, etc.) are defined in `src/app/globals.css`.

## Assets to replace before launch

Everything in this list is clearly marked with a comment in the relevant component:

1. **Logo** — `src/components/ui/Logo.tsx` (swap text mark for SVG/Image when designer delivers).
2. **Product images** — `/public/products/<slug>/...` (currently rendered by `ProductImagePlaceholder`).
3. **Hero image** — `/public/hero/` (currently a gradient + back-print mock).
4. **Favicon** — `/public/favicon.svg`.
5. **Instagram posts** — `fetchInstagramFeed()` in `src/lib/integrations.ts`.

## Pages included

- `/` Home
- `/shop` Shop
- `/products/[slug]` Product detail
- `/about` About
- `/faq` FAQ
- `/contact` Contact
- `/instagram` Social page
- `/cart` Cart
- `/account` Account dashboard
- `/account/login` Log in
- `/account/signup` Sign up
- `*` 404

## Deployment

Drop straight onto Vercel (`vercel --prod`) or any Node 18+ host. Set the env vars from `.env.example` in your host's dashboard.

## Contact placeholders

- Email: `info@jakeslax.com`
- Instagram: `@jakeslax`
- TikTok: `@jakeslax`

Swap in real handles in:
- `src/components/layout/Footer.tsx`
- `src/components/home/Hero.tsx`
- `src/components/home/InstagramStrip.tsx`
- `src/app/instagram/page.tsx`
- `src/app/contact/page.tsx`

—

Clean balls only.
