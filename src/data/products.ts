import type { Product } from "@/types";

// ===================================================================
// MOCK PRODUCT CATALOG
// ===================================================================
// This file behaves like a lightweight CMS. To add a new product:
//   1. Copy an existing entry.
//   2. Update id, slug, name, slogan, copy, sizes, colors, images.
//   3. Drop the actual product photos into /public/products/<slug>/...
//      (we currently reference placeholder paths).
//
// Later, swap this file for a Shopify / Sanity / Supabase fetch
// (see src/lib/integrations.ts).
// ===================================================================

const STANDARD_SIZES = ["S", "M", "L", "XL", "XXL"] as const;

const COLORS = {
  black: { name: "Locker Black", hex: "#0A0A0A" },
  white: { name: "Chalk White", hex: "#FAFAFA" },
  cream: { name: "Bench Cream", hex: "#F5F1E8" },
  gray: { name: "Athletic Gray", hex: "#A1A1AA" },
  field: { name: "Field Green", hex: "#C8FF2C" },
  safety: { name: "Safety Orange", hex: "#FF4D12" },
};

export const products: Product[] = [
  {
    id: "tee-dirty-balls-001",
    slug: "dirty-balls-dont-fly-straight-tee",
    name: "Dirty Balls Don't Fly Straight Tee",
    slogan: "DIRTY BALLS DON'T FLY STRAIGHT",
    shortDescription: "Heavyweight cotton tee. Small chest hit, big back graphic. Say it with your shoulders.",
    description:
      "A premium 6.5oz heavyweight cotton tee with a boxy, modern fit. Small Jake's Lax chest hit on the front. Oversized back print for maximum sideline impact. Pre-shrunk, garment-dyed, built to take reps.",
    story:
      "Every lax player learns this the hard way. Doesn't matter how clean your release is — if the ball's caked in turf pellets and god-knows-what, it's going wide. Wear the reminder.",
    price: 42,
    sizes: [...STANDARD_SIZES],
    colors: [COLORS.black, COLORS.cream, COLORS.gray],
    images: [
      "/products/dirty-balls/front.jpg",
      "/products/dirty-balls/back.jpg",
      "/products/dirty-balls/detail.jpg",
      "/products/dirty-balls/lifestyle.jpg",
    ],
    artImage: "/hero/scene-dirty-helmet.png",
    artTone: "dark",
    collection: "drop-01",
    tags: ["tee", "graphic", "heavyweight"],
    featured: true,
    bestSeller: true,
    inStock: true,
  },
  {
    id: "tee-clean-balls-002",
    slug: "clean-balls-only-tee",
    name: "Clean Balls Only Tee",
    slogan: "CLEAN BALLS ONLY",
    shortDescription: "The flagship. The mission statement. Three words. One dress code.",
    description:
      "The tee that started it all. Heavyweight cotton, boxy cut, Jake's Lax chest hit, three-word back print. If you know, you know.",
    story:
      "We didn't set out to start a movement. We just noticed nobody else would say it out loud. Clean balls only. Non-negotiable. On the field. In the basement tournaments. In life.",
    price: 42,
    sizes: [...STANDARD_SIZES],
    colors: [COLORS.black, COLORS.white, COLORS.cream],
    images: [
      "/products/clean-balls/front.jpg",
      "/products/clean-balls/back.jpg",
      "/products/clean-balls/detail.jpg",
      "/products/clean-balls/lifestyle.jpg",
    ],
    artImage: "/brand/concept-monochrome-apparel.webp",
    artTone: "light",
    collection: "core",
    tags: ["tee", "graphic", "flagship"],
    featured: true,
    bestSeller: true,
    inStock: true,
  },
  {
    id: "tee-long-sticks-003",
    slug: "long-sticks-dont-matter-tee",
    name: "Long Sticks Don't Matter Tee",
    slogan: "LONG STICKS DON'T MATTER WITHOUT CLEAN BALLS",
    shortDescription: "For the defense. For the poles. For anyone who needed to hear it.",
    description:
      "Heavyweight cotton tee with a longer back print to fit the full slogan. Small chest hit. Reinforced collar. Cut for athletic frames without being a skin suit.",
    story:
      "Shoutout to every D-pole out there pushing a 6-foot stick. Your reach is wasted if the pill's filthy. Handle it.",
    price: 44,
    sizes: [...STANDARD_SIZES],
    colors: [COLORS.black, COLORS.gray, COLORS.white],
    images: [
      "/products/long-sticks/front.jpg",
      "/products/long-sticks/back.jpg",
      "/products/long-sticks/detail.jpg",
      "/products/long-sticks/lifestyle.jpg",
    ],
    artImage: "/hero/scene-college-player.png",
    artTone: "dark",
    collection: "drop-01",
    tags: ["tee", "graphic", "defense"],
    featured: true,
    bestSeller: false,
    inStock: true,
  },
  {
    id: "tee-loose-balls-004",
    slug: "loose-balls-matter-tee",
    name: "Loose Balls Matter Tee",
    slogan: "LOOSE BALLS MATTER",
    shortDescription: "Ground ball culture, bottled. For the dirty-work players.",
    description:
      "Heavyweight cotton tee. Small chest hit. Bold back print that reads from across the sideline. Built for players who scrap for every GB.",
    story:
      "Midfielders know. FOGOs know. Wing guys who do the work nobody claps for — this one's for you. Ground balls win games. Loose balls matter.",
    price: 42,
    sizes: [...STANDARD_SIZES],
    colors: [COLORS.black, COLORS.cream, COLORS.field],
    images: [
      "/products/loose-balls/front.jpg",
      "/products/loose-balls/back.jpg",
      "/products/loose-balls/detail.jpg",
      "/products/loose-balls/lifestyle.jpg",
    ],
    artImage: "/hero/scene-shanking.png",
    artTone: "dark",
    collection: "core",
    tags: ["tee", "graphic", "midfield"],
    featured: true,
    bestSeller: true,
    inStock: true,
  },
  {
    id: "tee-respect-005",
    slug: "respect-the-balls-tee",
    name: "Respect The Balls Tee",
    slogan: "RESPECT THE BALLS",
    shortDescription: "A quiet reminder in a loud sport.",
    description:
      "Heavyweight cotton. Minimal front. Understated back graphic in tonal print. For the veterans who don't need to shout.",
    story:
      "You don't slam sticks after a goal. You don't dangle a freshman. You don't leave practice balls in the rain. Respect the balls. Respect the game.",
    price: 42,
    sizes: [...STANDARD_SIZES],
    colors: [COLORS.black, COLORS.cream],
    images: [
      "/products/respect/front.jpg",
      "/products/respect/back.jpg",
      "/products/respect/detail.jpg",
    ],
    artImage: "/brand/concept-stick-balls.webp",
    artTone: "light",
    collection: "core",
    tags: ["tee", "graphic", "tonal"],
    featured: false,
    bestSeller: false,
    inStock: true,
  },
  {
    id: "tee-keep-clean-006",
    slug: "keep-your-balls-clean-tee",
    name: "Keep Your Balls Clean Tee",
    slogan: "KEEP YOUR BALLS CLEAN",
    shortDescription: "Part PSA, part locker room rule.",
    description:
      "Heavyweight cotton tee with a bold type-driven back graphic. Small chest hit. Pair with shorts, sweats, or a pinnie, doesn't matter.",
    story:
      "Coach said it every pre-season. Now you can wear it. Keep your balls clean. Pass it down.",
    price: 42,
    sizes: [...STANDARD_SIZES],
    colors: [COLORS.black, COLORS.white, COLORS.safety],
    images: [
      "/products/keep-clean/front.jpg",
      "/products/keep-clean/back.jpg",
      "/products/keep-clean/detail.jpg",
    ],
    artImage: "/brand/concept-chest-logo.webp",
    artTone: "light",
    collection: "drop-01",
    tags: ["tee", "graphic", "psa"],
    featured: false,
    bestSeller: true,
    inStock: true,
  },
];

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const getFeaturedProducts = (): Product[] =>
  products.filter((p) => p.featured);

export const getBestSellers = (): Product[] =>
  products.filter((p) => p.bestSeller);

export const getRelatedProducts = (slug: string, limit = 3): Product[] =>
  products.filter((p) => p.slug !== slug).slice(0, limit);
