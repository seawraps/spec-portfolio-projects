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
    "bg-slate-900 text-white shadow-[0_18px_40px_-26px_rgba(15,23,42,0.44)] hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-[0_24px_46px_-26px_rgba(15,23,42,0.52)]",
  secondary:
    "bg-white text-slate-900 ring-1 ring-slate-200 shadow-[0_16px_34px_-28px_rgba(15,23,42,0.14)] hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-[0_20px_40px_-28px_rgba(15,23,42,0.2)]",
  ghost:
    "bg-white/80 text-slate-900 ring-1 ring-slate-300 hover:-translate-y-0.5 hover:bg-slate-100",
  light:
    "bg-white text-slate-900 shadow-[0_18px_40px_-26px_rgba(15,23,42,0.26)] hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-[0_24px_46px_-26px_rgba(15,23,42,0.34)]",
  inverse:
    "border border-slate-600 bg-transparent text-slate-100 hover:-translate-y-0.5 hover:bg-slate-800",
};

export function buttonClassName(
  variant: NonNullable<ButtonLinkProps["variant"]> = "primary",
  className?: string,
) {
  return cn(
    "inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 disabled:shadow-none disabled:hover:translate-y-0",
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
