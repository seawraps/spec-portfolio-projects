type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  const wrapperClassName = centered
    ? "mx-auto max-w-3xl text-center"
    : "max-w-3xl";

  return (
    <div className={wrapperClassName}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-200/85">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-display text-3xl tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
