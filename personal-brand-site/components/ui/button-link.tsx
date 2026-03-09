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
    "bg-ink text-white shadow-[0_18px_40px_rgba(28,36,51,0.18)] hover:-translate-y-0.5 hover:bg-ink-soft",
  secondary:
    "border border-ink/12 bg-white/72 text-ink hover:-translate-y-0.5 hover:bg-white",
  ghost: "text-ink hover:text-rose",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  arrow = false,
  onClick,
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
    variants[variant],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {arrow ? <span aria-hidden="true">-&gt;</span> : null}
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
