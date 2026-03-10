import type { ElementType } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
  as?: ElementType;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered,
  className,
  as: HeadingTag = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(centered ? "mx-auto text-center" : "text-left", className)}
    >
      {eyebrow ? (
        <div
          className={cn(
            "inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]",
            centered ? "justify-center" : "justify-start",
          )}
        >
          <span className="h-px w-10 bg-[color:rgba(180,136,72,0.7)]" />
          <p>{eyebrow}</p>
        </div>
      ) : null}
      <HeadingTag className="mt-4 font-display text-4xl leading-[1.04] text-[var(--color-brand)] sm:text-5xl">
        {title}
      </HeadingTag>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-3xl text-base leading-8 text-[var(--color-muted)] sm:text-lg",
            centered ? "mx-auto" : "",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
