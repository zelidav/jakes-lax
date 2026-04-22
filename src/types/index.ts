export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL";

export type Color = {
  name: string;
  hex: string;
};

export type Collection = "core" | "drop-01" | "team" | "accessories";

export type Product = {
  id: string;
  slug: string;
  name: string;
  slogan: string;
  shortDescription: string;
  description: string;
  story: string;
  price: number;
  compareAtPrice?: number;
  sizes: Size[];
  colors: Color[];
  images: string[];
  /** Primary art/graphic that would print on the back of the tee. */
  artImage?: string;
  /** Visual tone behind the art — affects framing color. */
  artTone?: "dark" | "light" | "cream";
  collection: Collection;
  tags: string[];
  featured: boolean;
  bestSeller: boolean;
  inStock: boolean;
};

export type CartLine = {
  productId: string;
  slug: string;
  name: string;
  slogan: string;
  price: number;
  size: Size;
  color: string;
  image: string;
  quantity: number;
};

export type Slogan = {
  id: string;
  text: string;
  attribution?: string;
};

export type Faq = {
  question: string;
  answer: string;
};
