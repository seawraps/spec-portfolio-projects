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
    "bg-[linear-gradient(135deg,#65e2ff_0%,#0ea5e9_52%,#07111f_100%)] !text-white ring-1 ring-white/10 shadow-[0_28px_60px_-24px_rgba(10,27,52,0.72)] hover:-translate-y-0.5 hover:shadow-[0_36px_66px_-24px_rgba(10,27,52,0.82)]",
  secondary:
    "bg-white/82 !text-slate-950 ring-1 ring-white/60 shadow-[0_24px_48px_-30px_rgba(11,27,47,0.32)] backdrop-blur-md hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_28px_54px_-30px_rgba(11,27,47,0.42)]",
  ghost:
    "bg-transparent !text-slate-700 ring-1 ring-slate-300/80 hover:-translate-y-0.5 hover:bg-white/60 hover:text-slate-950",
  light:
    "bg-white !text-slate-950 ring-1 ring-white/70 shadow-[0_24px_54px_-26px_rgba(8,15,31,0.4)] hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-[0_34px_58px_-26px_rgba(8,15,31,0.48)]",
  inverse:
    "bg-white/6 !text-slate-50 ring-1 ring-white/16 backdrop-blur-md hover:-translate-y-0.5 hover:bg-white/10 hover:text-white",
};

export function buttonClassName(
  variant: NonNullable<ButtonLinkProps["variant"]> = "primary",
  className?: string,
) {
  return cn(
    "inline-flex h-12 items-center justify-center rounded-[1.15rem] px-5 text-[0.95rem] font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 disabled:shadow-none disabled:hover:translate-y-0",
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
