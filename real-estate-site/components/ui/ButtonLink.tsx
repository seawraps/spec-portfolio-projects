import type { ReactNode } from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

const buttonVariants = {
  primary:
    "bg-[var(--color-navy)] text-white shadow-[0_22px_54px_-30px_rgba(19,26,33,0.8)] hover:-translate-y-0.5 hover:bg-[var(--color-navy-soft)] hover:shadow-[0_28px_60px_-30px_rgba(19,26,33,0.88)]",
  secondary:
    "border border-[var(--color-line-strong)] bg-white/82 text-[var(--color-ink)] shadow-[0_18px_42px_-30px_rgba(19,26,33,0.24)] hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_24px_50px_-30px_rgba(19,26,33,0.28)]",
  light:
    "bg-white text-[var(--color-navy)] shadow-[0_18px_40px_-24px_rgba(255,255,255,0.35)] hover:-translate-y-0.5 hover:bg-[var(--color-paper-strong)]",
  ghost: "text-[var(--color-ink)] hover:-translate-y-0.5 hover:bg-white/65",
} as const;

export type ButtonVariant = keyof typeof buttonVariants;

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

export function buttonClassName(
  variant: ButtonVariant = "primary",
  className?: string,
) {
  return cn(
    "inline-flex h-11 items-center justify-center gap-2 rounded-[14px] px-5 text-[0.72rem] font-semibold uppercase tracking-[0.22em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(158,107,61,0.28)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:cursor-not-allowed disabled:bg-[rgba(19,26,33,0.68)] disabled:text-white disabled:shadow-none disabled:hover:translate-y-0",
    buttonVariants[variant],
    className,
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  return (
    <Link href={href} className={buttonClassName(variant, className)}>
      {children}
    </Link>
  );
}
