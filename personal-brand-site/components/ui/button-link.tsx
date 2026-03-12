import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  arrow?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const variants = {
  primary:
    "border border-[#2d211d] bg-[#2d211d] text-[#fff8f1] shadow-[0_22px_48px_-30px_rgba(45,33,29,0.52)] hover:-translate-y-0.5 hover:bg-[#4b322d] hover:border-[#4b322d] hover:shadow-[0_28px_56px_-34px_rgba(45,33,29,0.58)]",
  secondary:
    "border border-ink/14 bg-[rgb(255_251_246/0.82)] text-ink shadow-[0_18px_40px_-30px_rgba(35,24,20,0.2)] hover:-translate-y-0.5 hover:border-ink/20 hover:bg-white hover:shadow-[0_24px_46px_-34px_rgba(35,24,20,0.26)]",
  ghost: "text-ink/88 hover:-translate-y-0.5 hover:text-plum",
} as const;

export function buttonClassName(
  variant: keyof typeof variants = "primary",
  className?: string,
) {
  return cn(
    "inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold tracking-[0.01em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
    variants[variant],
    className,
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  arrow = false,
  onClick,
}: ButtonLinkProps) {
  const classes = buttonClassName(variant, className);

  const content = (
    <>
      <span>{children}</span>
      {arrow ? <span aria-hidden="true" className="translate-y-[-1px] text-base leading-none">-&gt;</span> : null}
    </>
  );

  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        className={classes}
        href={href}
        onClick={onClick}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {content}
    </Link>
  );
}
