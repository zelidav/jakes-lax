export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatPrice(cents: number | undefined): string {
  if (cents === undefined) return "";
  // NOTE: prices in data are whole dollars; update this if you switch to cents.
  return `$${cents.toFixed(0)}`;
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
