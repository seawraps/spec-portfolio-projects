import Link from "next/link";

type CtaSectionProps = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

export function CtaSection({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CtaSectionProps) {
  return (
    <section className="section-spacing">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="surface-panel relative overflow-hidden p-8 sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-mint/20 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-sun/20 blur-3xl" aria-hidden="true" />

          <div className="relative space-y-6">
            <h2 className="max-w-3xl text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
            <p className="max-w-2xl text-pretty text-lg leading-8 text-slate-300">{description}</p>
            <div className="flex flex-wrap gap-3">
              <Link href={primaryHref} className="button-primary">
                {primaryLabel}
              </Link>
              <Link href={secondaryHref} className="button-secondary">
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
