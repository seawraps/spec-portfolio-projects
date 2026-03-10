import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  className?: string;
  variant?: "primary" | "secondary" | "light" | "outline";
};

const variantClasses: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary:
    "bg-[var(--color-brand)] !text-white shadow-[0_18px_40px_-24px_rgba(23,54,77,0.8)] hover:-translate-y-0.5 hover:bg-[#1f4a68] hover:shadow-[0_24px_48px_-26px_rgba(23,54,77,0.9)] focus-visible:outline-[var(--color-brand)]",
  secondary:
    "bg-white !text-[var(--color-brand)] ring-1 ring-inset ring-[var(--color-brand)] shadow-[0_16px_34px_-28px_rgba(23,54,77,0.55)] hover:-translate-y-0.5 hover:bg-[var(--color-brand-soft)] hover:shadow-[0_22px_42px_-28px_rgba(23,54,77,0.65)] focus-visible:outline-[var(--color-brand)]",
  light:
    "bg-[var(--color-accent)] !text-[var(--color-ink)] shadow-[0_18px_40px_-26px_rgba(201,127,44,0.75)] hover:-translate-y-0.5 hover:bg-[#d9954a] hover:shadow-[0_24px_48px_-28px_rgba(201,127,44,0.82)] focus-visible:outline-[var(--color-accent)]",
  outline:
    "border border-[color:rgba(255,255,255,0.34)] bg-transparent !text-white hover:-translate-y-0.5 hover:bg-[color:rgba(255,255,255,0.1)] focus-visible:outline-white",
};

export function buttonClassName(
  variant: NonNullable<ButtonLinkProps["variant"]> = "primary",
  className?: string,
) {
  return cn(
    "inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold tracking-[0.02em] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    variantClasses[variant],
    className,
  );
}

export function ButtonLink({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return <Link className={buttonClassName(variant, className)} {...props}>{children}</Link>;
}
