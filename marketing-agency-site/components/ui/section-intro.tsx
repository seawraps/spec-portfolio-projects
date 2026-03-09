type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionIntroProps) {
  const isCentered = align === "center";

  return (
    <header
      className={`max-w-3xl space-y-4 ${isCentered ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <p className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-mint">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="text-pretty text-base leading-7 text-slate-300 sm:text-lg">
        {description}
      </p>
    </header>
  );
}
