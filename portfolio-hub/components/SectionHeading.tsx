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
        <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-emerald-100/80">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-4 max-w-3xl text-balance font-display text-3xl tracking-[-0.04em] text-white sm:text-4xl lg:text-[3rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
