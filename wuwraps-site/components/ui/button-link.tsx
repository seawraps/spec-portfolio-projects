import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type Variant = "red" | "blue" | "yellow" | "ink" | "paper";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  className?: string;
  variant?: Variant;
};

const variantClasses: Record<Variant, string> = {
  red: "bg-[var(--color-red)] !text-[var(--color-paper)] hover:bg-[var(--color-red-deep)]",
  blue: "bg-[var(--color-blue)] !text-[var(--color-paper)] hover:bg-[var(--color-blue-deep)]",
  yellow:
    "bg-[var(--color-yellow)] !text-[var(--color-ink)] hover:bg-[var(--color-yellow-deep)]",
  ink: "bg-[var(--color-ink)] !text-[var(--color-paper)] hover:bg-[#272530]",
  paper:
    "border border-[var(--color-line-strong)] bg-[var(--color-surface)] !text-[var(--color-ink)] hover:bg-[var(--color-paper-deep)]",
};

export function buttonClassName(variant: Variant = "red", className?: string) {
  return cn(
    "comic-heavy inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 py-3 text-[0.72rem] tracking-[0.1em] shadow-[0_12px_26px_-14px_rgba(20,19,26,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_-14px_rgba(20,19,26,0.6)] active:translate-y-0 active:shadow-[0_8px_18px_-12px_rgba(20,19,26,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    variantClasses[variant],
    className,
  );
}

export function ButtonLink({
  children,
  className,
  variant = "red",
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={buttonClassName(variant, className)} {...props}>
      {children}
    </Link>
  );
}
