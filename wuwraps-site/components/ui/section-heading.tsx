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
        <span className="comic-tag">{eyebrow}</span>
      ) : null}
      <HeadingTag className="comic-display mt-5 max-w-4xl text-[2.7rem] text-[var(--color-ink)] sm:text-[3.8rem] lg:text-[4.4rem]">
        {title}
      </HeadingTag>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-[1.02rem] leading-8 text-[var(--color-ink-soft)]",
            centered ? "mx-auto" : "",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
