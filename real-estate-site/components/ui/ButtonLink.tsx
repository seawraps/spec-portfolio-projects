import type { ReactNode } from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

const buttonVariants = {
  primary:
    "border border-[rgba(23,32,40,0.14)] bg-[var(--color-navy)] text-[var(--color-surface-strong)] shadow-[0_18px_36px_-24px_rgba(23,32,40,0.42)] hover:-translate-y-0.5 hover:bg-[var(--color-ink-soft)] hover:shadow-[0_24px_40px_-24px_rgba(23,32,40,0.48)]",
  secondary:
    "border border-[var(--color-line-strong)] bg-[rgba(255,255,255,0.56)] text-[var(--color-ink)] shadow-[0_14px_30px_-24px_rgba(23,32,40,0.16)] hover:-translate-y-0.5 hover:bg-white/82 hover:shadow-[0_20px_36px_-26px_rgba(23,32,40,0.2)]",
  light:
    "border border-white/16 bg-white text-[var(--color-navy)] shadow-[0_14px_32px_-24px_rgba(255,255,255,0.26)] hover:-translate-y-0.5 hover:bg-[var(--color-paper-strong)]",
  ghost:
    "border border-transparent bg-transparent text-[var(--color-ink)] hover:-translate-y-0.5 hover:border-[var(--color-line)] hover:bg-white/54 hover:text-[var(--color-bronze)]",
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
    "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-[0.66rem] font-semibold uppercase tracking-[0.28em] whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(134,105,71,0.24)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:cursor-not-allowed disabled:bg-[rgba(23,32,40,0.68)] disabled:text-white disabled:shadow-none disabled:hover:translate-y-0",
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
