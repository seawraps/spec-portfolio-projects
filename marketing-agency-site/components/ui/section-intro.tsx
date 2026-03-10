type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: SectionIntroProps) {
  const isCentered = align === "center";
  const isLight = tone === "light";

  return (
    <header className={`max-w-4xl space-y-5 ${isCentered ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p className={`eyebrow-label ${isLight ? "eyebrow-label-light" : ""}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-balance font-display text-[clamp(2.95rem,6vw,5.1rem)] uppercase leading-[0.88] ${
          isLight ? "text-ink" : "text-white"
        }`}
      >
        {title}
      </h2>
      <p className={`max-w-3xl text-pretty text-base leading-7 sm:text-lg ${isLight ? "text-ink/70" : "text-white/70"}`}>
        {description}
      </p>
    </header>
  );
}
