import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type Variant = "red" | "blue" | "yellow" | "ink" | "paper";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  className?: string;
  variant?: Variant;
};

const variantClasses: Record<Variant, string> = {
  red: "border-[var(--color-ink)] bg-[var(--color-red)] !text-[var(--color-paper)] hover:bg-[var(--color-red-deep)]",
  blue: "border-[var(--color-ink)] bg-[var(--color-blue)] !text-[var(--color-paper)] hover:bg-[var(--color-blue-deep)]",
  yellow:
    "border-[var(--color-ink)] bg-[var(--color-yellow)] !text-[var(--color-ink)] hover:bg-[var(--color-yellow-deep)]",
  ink: "border-[var(--color-ink)] bg-[var(--color-ink)] !text-[var(--color-paper)] hover:bg-[#26242f]",
  paper:
    "border-[var(--color-ink)] bg-[var(--color-paper)] !text-[var(--color-ink)] hover:bg-[var(--color-surface)]",
};

export function buttonClassName(variant: Variant = "red", className?: string) {
  return cn(
    "comic-heavy inline-flex min-h-12 items-center justify-center gap-2 border-[3px] px-6 py-3 text-[0.78rem] tracking-[0.12em] shadow-[5px_5px_0_0_var(--color-ink)] transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0_0_var(--color-ink)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[3px_3px_0_0_var(--color-ink)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2",
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
