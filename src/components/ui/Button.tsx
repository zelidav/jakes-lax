import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "accent";

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "btn-ghost",
  accent: "btn-accent",
};

type CommonProps = { variant?: Variant; className?: string; children: ReactNode };

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ variant = "primary", className, children, ...rest }: ButtonProps) {
  return (
    <button className={cn(variantClass[variant], className)} {...rest}>
      {children}
    </button>
  );
}

type LinkProps = CommonProps & { href: string; prefetch?: boolean };
export function ButtonLink({ variant = "primary", className, children, href, prefetch }: LinkProps) {
  return (
    <Link href={href} prefetch={prefetch} className={cn(variantClass[variant], className)}>
      {children}
    </Link>
  );
}
