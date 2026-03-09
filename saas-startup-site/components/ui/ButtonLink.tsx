import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variantClasses: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary:
    "bg-slate-900 text-white shadow-lg shadow-slate-900/20 hover:-translate-y-0.5 hover:bg-slate-700",
  secondary:
    "bg-white text-slate-900 ring-1 ring-slate-200 hover:-translate-y-0.5 hover:bg-slate-100",
  ghost: "text-slate-700 ring-1 ring-slate-300 hover:bg-slate-100",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold tracking-tight transition-all duration-200",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
