import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  id?: string;
  align?: "left" | "center";
  inverse?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  align = "left",
  inverse = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.28em]",
            inverse ? "text-white/70" : "text-[var(--color-muted)]",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={cn(
          "mt-4 font-display text-4xl leading-none sm:text-5xl",
          inverse ? "text-white" : "text-[var(--color-ink)]",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-8 sm:text-lg",
            inverse ? "text-white/74" : "text-[var(--color-muted)]",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
