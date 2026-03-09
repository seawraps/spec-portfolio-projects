import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
  centered?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl", className)}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
    </div>
  );
}
