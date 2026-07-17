import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type Variant = "cedar" | "ink" | "bone" | "ghost-dark" | "ghost-light";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  className?: string;
  variant?: Variant;
};

const variantClasses: Record<Variant, string> = {
  cedar: "bg-[var(--cedar)] !text-[var(--bone)] hover:bg-[var(--cedar-deep)]",
  ink: "bg-[var(--ink)] !text-[var(--bone)] hover:bg-[var(--graphite)]",
  bone: "bg-[var(--bone)] !text-[var(--ink)] hover:bg-white",
  "ghost-dark":
    "border border-[var(--line-dark)] !text-[var(--bone)] hover:border-[var(--bone)]",
  "ghost-light":
    "border border-[var(--line-light)] !text-[var(--ink)] hover:border-[var(--ink)]",
};

export function buttonClassName(variant: Variant = "cedar", className?: string) {
  return cn(
    "label inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    variantClasses[variant],
    className,
  );
}

export function ButtonLink({
  children,
  className,
  variant = "cedar",
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={buttonClassName(variant, className)} {...props}>
      {children}
    </Link>
  );
}
