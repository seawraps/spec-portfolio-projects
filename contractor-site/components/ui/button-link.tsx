import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  className?: string;
  variant?: "primary" | "secondary" | "light";
};

const variantClasses: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary:
    "bg-[var(--color-brand)] text-white hover:bg-[#1f4a68] focus-visible:outline-[var(--color-brand)]",
  secondary:
    "bg-white text-[var(--color-brand)] ring-1 ring-inset ring-[var(--color-brand)] hover:bg-[var(--color-brand-soft)] focus-visible:outline-[var(--color-brand)]",
  light:
    "bg-[var(--color-accent)] text-white hover:bg-[#aa6720] focus-visible:outline-[var(--color-accent)]",
};

export function ButtonLink({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
