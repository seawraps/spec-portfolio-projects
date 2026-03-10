import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  className?: string;
  variant?: "primary" | "secondary" | "light" | "outline";
};

const variantClasses: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary:
    "bg-[var(--color-brand)] !text-[var(--color-surface)] ring-1 ring-inset ring-[color:rgba(255,250,243,0.08)] shadow-[0_22px_48px_-28px_rgba(22,36,52,0.82)] hover:-translate-y-0.5 hover:bg-[#31465f] hover:shadow-[0_30px_60px_-30px_rgba(22,36,52,0.88)] focus-visible:outline-[var(--color-brand)]",
  secondary:
    "bg-[color:rgba(255,250,243,0.94)] !text-[var(--color-brand)] ring-1 ring-inset ring-[var(--color-line-strong)] shadow-[0_18px_40px_-30px_rgba(36,54,75,0.46)] hover:-translate-y-0.5 hover:bg-[var(--color-surface-strong)] hover:shadow-[0_24px_48px_-30px_rgba(36,54,75,0.6)] focus-visible:outline-[var(--color-brand)]",
  light:
    "bg-[var(--color-accent)] !text-[var(--color-brand-deep)] ring-1 ring-inset ring-[color:rgba(22,36,52,0.06)] shadow-[0_20px_44px_-24px_rgba(180,136,72,0.82)] hover:-translate-y-0.5 hover:bg-[#c29453] hover:shadow-[0_30px_56px_-28px_rgba(180,136,72,0.88)] focus-visible:outline-[var(--color-accent)]",
  outline:
    "border border-[color:rgba(255,250,243,0.34)] bg-[color:rgba(255,250,243,0.06)] !text-[var(--color-surface)] shadow-[0_18px_36px_-30px_rgba(0,0,0,0.42)] hover:-translate-y-0.5 hover:bg-[color:rgba(255,250,243,0.12)] focus-visible:outline-[var(--color-surface)]",
};

export function buttonClassName(
  variant: NonNullable<ButtonLinkProps["variant"]> = "primary",
  className?: string,
) {
  return cn(
    "inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3.5 text-[0.71rem] font-semibold uppercase tracking-[0.2em] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
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
