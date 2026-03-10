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
  const descriptionColor = theme === "dark" ? "text-[#d9c8b5]" : "text-[#5b4538]";
  const eyebrowColor = theme === "dark" ? "text-[#f1ddbf]" : "text-[#9a6435]";

  return (
    <header className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className={`mb-4 text-xs font-semibold uppercase tracking-[0.34em] ${eyebrowColor}`}>
          {eyebrow}
        </p>
      ) : null}
      <HeadingTag className={`font-display text-4xl leading-[0.95] sm:text-5xl ${headingColor}`}>
        {title}
      </HeadingTag>
      {description ? (
        <p className={`mt-5 text-lg leading-relaxed sm:text-[1.15rem] ${descriptionColor}`}>
          {description}
        </p>
      ) : null}
    </header>
  );
}
