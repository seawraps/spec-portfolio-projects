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
    <div className={cn(centered ? "text-center" : "text-left", className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
          {eyebrow}
        </p>
      ) : null}
      <HeadingTag className="mt-3 font-display text-3xl leading-tight text-[var(--color-brand)] sm:text-4xl">
        {title}
      </HeadingTag>
      {description ? (
        <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--color-muted)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
