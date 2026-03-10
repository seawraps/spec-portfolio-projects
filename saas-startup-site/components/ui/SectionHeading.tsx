import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
  centered?: boolean;
  className?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  className,
  tone = "light",
}: SectionHeadingProps) {
  return (
    <div className={cn(centered ? "mx-auto max-w-4xl text-center" : "max-w-4xl", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "mb-4",
            tone === "dark" ? "data-label text-sky-300" : "eyebrow-label",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl md:text-[2.9rem]",
          tone === "dark" ? "text-white" : "text-slate-950",
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "mt-5 max-w-3xl text-base leading-7 sm:text-lg",
          centered ? "mx-auto" : "",
          tone === "dark" ? "text-slate-300" : "text-slate-600",
        )}
      >
        {description}
      </p>
    </div>
  );
}
