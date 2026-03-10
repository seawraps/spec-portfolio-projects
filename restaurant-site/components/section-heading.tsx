import type { ElementType } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: ElementType;
  theme?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: HeadingTag = "h2",
  theme = "light",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const headingColor = theme === "dark" ? "text-[#f8efe4]" : "text-[#201511]";
  const descriptionColor = theme === "dark" ? "text-[#d1bfaa]" : "text-[#5b4538]";
  const eyebrowColor = theme === "dark" ? "text-[#f1ddbf]" : "text-[#9a6435]";

  return (
    <header className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className={`mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.36em] ${eyebrowColor}`}>
          {eyebrow}
        </p>
      ) : null}
      <HeadingTag
        className={`font-display text-4xl leading-[0.92] tracking-[-0.02em] sm:text-5xl lg:text-[3.65rem] ${headingColor}`}
      >
        {title}
      </HeadingTag>
      {description ? (
        <p className={`mt-5 max-w-2xl text-lg leading-relaxed sm:text-[1.16rem] ${descriptionColor}`}>
          {description}
        </p>
      ) : null}
    </header>
  );
}
