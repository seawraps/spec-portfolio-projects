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
    "bg-[linear-gradient(135deg,#67e8f9_0%,#0ea5e9_52%,#08203d_100%)] !text-white ring-1 ring-cyan-300/18 shadow-[0_28px_64px_-28px_rgba(11,55,97,0.82)] hover:-translate-y-0.5 hover:shadow-[0_36px_70px_-28px_rgba(11,55,97,0.92)]",
  secondary:
    "bg-[#e5f8ff] !text-slate-950 ring-1 ring-white/70 shadow-[0_24px_52px_-30px_rgba(11,27,47,0.34)] backdrop-blur-md hover:-translate-y-0.5 hover:bg-[#f2fbff] hover:shadow-[0_30px_56px_-28px_rgba(11,27,47,0.46)]",
  ghost:
    "bg-transparent !text-slate-700 ring-1 ring-slate-300/80 hover:-translate-y-0.5 hover:bg-white/60 hover:text-slate-950",
  light:
    "bg-white !text-slate-950 ring-1 ring-white/70 shadow-[0_24px_54px_-26px_rgba(8,15,31,0.4)] hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-[0_34px_58px_-26px_rgba(8,15,31,0.48)]",
  inverse:
    "bg-white/6 !text-slate-50 ring-1 ring-white/14 backdrop-blur-md hover:-translate-y-0.5 hover:bg-white/10 hover:text-white",
};

export function buttonClassName(
  variant: NonNullable<ButtonLinkProps["variant"]> = "primary",
  className?: string,
) {
  return cn(
    "inline-flex h-12 items-center justify-center rounded-[0.95rem] px-5 text-[0.95rem] font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 disabled:shadow-none disabled:hover:translate-y-0",
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
