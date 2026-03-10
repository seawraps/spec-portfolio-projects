import Link from "next/link";

type CtaSectionProps = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

const buyingSignals = [
  "Need a sharper paid media plan",
  "Need landing pages that convert faster",
  "Need one strategy across message, spend, and creative",
];

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
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="surface-panel relative overflow-hidden px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-70" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-10 top-10 h-32 w-32 rounded-full bg-volt/16 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-signal/18 blur-3xl" aria-hidden="true" />

          <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="space-y-5">
              <p className="eyebrow-label">Next Move</p>
              <h2 className="max-w-3xl font-display text-5xl font-semibold uppercase leading-[0.88] text-white sm:text-6xl">
                {title}
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-white/70">{description}</p>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[1.4rem] border border-white/10 bg-white/6 p-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/42">Best fit if you</p>
                <ul className="mt-4 space-y-3 text-sm text-white/74">
                  {buyingSignals.map((signal) => (
                    <li key={signal} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-6 rounded-full bg-signal" aria-hidden="true" />
                      <span>{signal}</span>
                    </li>
                  ))}
                </ul>
              </div>

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
      </div>
    </section>
  );
}
