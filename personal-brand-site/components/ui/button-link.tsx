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
    "bg-ink text-white shadow-[0_18px_40px_-24px_rgba(28,36,51,0.65)] hover:-translate-y-0.5 hover:bg-ink-soft hover:shadow-[0_24px_50px_-26px_rgba(28,36,51,0.72)]",
  secondary:
    "border border-ink/12 bg-white/78 text-ink shadow-[0_16px_36px_-28px_rgba(28,36,51,0.2)] hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_22px_44px_-30px_rgba(28,36,51,0.24)]",
  ghost: "text-ink hover:-translate-y-0.5 hover:text-rose",
} as const;

export function buttonClassName(
  variant: keyof typeof variants = "primary",
  className?: string,
) {
  return cn(
    "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
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
      {arrow ? <span aria-hidden="true" className="text-base leading-none">-&gt;</span> : null}
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
