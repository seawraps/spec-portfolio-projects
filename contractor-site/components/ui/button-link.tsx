import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  className?: string;
  variant?: "primary" | "secondary" | "light" | "outline";
};

const variantClasses: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary:
    "border border-[var(--color-brand)] bg-[var(--color-brand)] !text-[var(--color-surface)] shadow-[0_18px_34px_-28px_rgba(22,36,52,0.82)] hover:-translate-y-0.5 hover:bg-[#2c3e4c] focus-visible:outline-[var(--color-brand)]",
  secondary:
    "border border-[color:rgba(31,35,39,0.16)] bg-[color:rgba(247,242,234,0.84)] !text-[var(--color-brand)] hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:bg-[var(--color-surface)] focus-visible:outline-[var(--color-brand)]",
  light:
    "border border-[color:rgba(154,116,68,0.3)] bg-[var(--color-accent)] !text-[var(--color-brand-deep)] hover:-translate-y-0.5 hover:bg-[#a7814f] focus-visible:outline-[var(--color-accent)]",
  outline:
    "border border-[color:rgba(247,242,234,0.28)] bg-[color:rgba(247,242,234,0.06)] !text-[var(--color-surface)] hover:-translate-y-0.5 hover:bg-[color:rgba(247,242,234,0.12)] focus-visible:outline-[var(--color-surface)]",
};

export function buttonClassName(
  variant: NonNullable<ButtonLinkProps["variant"]> = "primary",
  className?: string,
) {
  return cn(
    "inline-flex min-h-11 items-center justify-center rounded-[0.78rem] px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
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
