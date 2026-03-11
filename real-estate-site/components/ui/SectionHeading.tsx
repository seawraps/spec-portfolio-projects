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
        "max-w-3xl reveal-up",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-[0.64rem] font-semibold uppercase tracking-[0.34em]",
            inverse ? "text-white/70" : "text-[var(--color-bronze)]",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={cn(
          "mt-4 font-display text-[clamp(2.8rem,5vw,4.8rem)] leading-[0.92]",
          inverse ? "text-white" : "text-[var(--color-ink)]",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-8 sm:text-[1.05rem]",
            inverse ? "text-white/74" : "text-[var(--color-muted)]",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
