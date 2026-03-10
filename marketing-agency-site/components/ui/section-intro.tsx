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
    <header className={`max-w-3xl space-y-5 ${isCentered ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p className={`eyebrow-label ${isLight ? "eyebrow-label-light" : ""}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-balance font-display text-[clamp(3.2rem,7vw,5.75rem)] uppercase leading-[0.86] ${
          isLight ? "text-ink" : "text-white"
        }`}
      >
        {title}
      </h2>
      <p className={`text-pretty text-base leading-7 sm:text-lg ${isLight ? "text-ink/70" : "text-white/70"}`}>
        {description}
      </p>
    </header>
  );
}
