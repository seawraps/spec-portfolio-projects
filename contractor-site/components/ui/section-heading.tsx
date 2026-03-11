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
            "architectural-eyebrow",
            centered ? "justify-center" : "justify-start",
          )}
        >
          <p>{eyebrow}</p>
        </div>
      ) : null}
      <HeadingTag className="mt-4 max-w-4xl font-display text-[2.35rem] leading-[0.96] text-[var(--color-brand)] sm:text-[3.35rem] lg:text-[3.8rem]">
        {title}
      </HeadingTag>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-3xl text-[0.98rem] leading-8 text-[var(--color-muted)] sm:text-[1.02rem]",
            centered ? "mx-auto" : "",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
