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
    <div className={cn(centered ? "mx-auto text-center" : "text-left", className)}>
      {eyebrow ? (
        <div
          className={cn(
            "inline-flex items-center gap-3 text-[0.69rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]",
            centered ? "justify-center" : "justify-start",
          )}
        >
          <span className="h-px w-10 bg-[color:rgba(180,136,72,0.72)]" />
          <p>{eyebrow}</p>
        </div>
      ) : null}
      <HeadingTag className="mt-4 max-w-4xl font-display text-[2.55rem] leading-[1.01] text-[var(--color-brand)] sm:text-[3.4rem]">
        {title}
      </HeadingTag>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-3xl text-base leading-8 text-[var(--color-muted)] sm:text-[1.05rem]",
            centered ? "mx-auto" : "",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
