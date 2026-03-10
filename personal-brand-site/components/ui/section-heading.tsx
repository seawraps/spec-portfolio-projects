import type { ElementType } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: ElementType;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: HeadingTag = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "",
        className,
      )}
      >
      <span className="eyebrow">{eyebrow}</span>
      <HeadingTag className="mt-5 max-w-4xl text-4xl leading-[0.94] text-ink sm:text-5xl lg:text-[3.7rem]">
        {title}
      </HeadingTag>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-8 text-mocha/92 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
