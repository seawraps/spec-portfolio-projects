import type { ElementType } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: ElementType;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: HeadingTag = "h2",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <header className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">
          {eyebrow}
        </p>
      ) : null}
      <HeadingTag className="text-3xl font-semibold leading-tight text-stone-900 sm:text-4xl">
        {title}
      </HeadingTag>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-stone-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
