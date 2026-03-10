import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light" | "inverse";
  className?: string;
};

const variantClasses: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary:
    "bg-slate-950 !text-white ring-1 ring-slate-950 shadow-[0_22px_44px_-22px_rgba(8,15,31,0.46)] hover:-translate-y-0.5 hover:bg-slate-900 hover:shadow-[0_28px_52px_-22px_rgba(8,15,31,0.58)]",
  secondary:
    "bg-white/92 !text-slate-950 ring-1 ring-slate-300 shadow-[0_20px_38px_-28px_rgba(15,23,42,0.16)] hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_24px_44px_-28px_rgba(15,23,42,0.24)]",
  ghost:
    "bg-transparent !text-slate-700 ring-1 ring-slate-300 hover:-translate-y-0.5 hover:bg-white/70 hover:text-slate-950",
  light:
    "bg-white !text-slate-950 ring-1 ring-white/70 shadow-[0_22px_44px_-24px_rgba(8,15,31,0.34)] hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-[0_28px_50px_-24px_rgba(8,15,31,0.42)]",
  inverse:
    "bg-white/6 !text-slate-50 ring-1 ring-white/16 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white",
};

export function buttonClassName(
  variant: NonNullable<ButtonLinkProps["variant"]> = "primary",
  className?: string,
) {
  return cn(
    "inline-flex h-12 items-center justify-center rounded-2xl px-5 text-[0.95rem] font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 disabled:shadow-none disabled:hover:translate-y-0",
    variantClasses[variant],
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
