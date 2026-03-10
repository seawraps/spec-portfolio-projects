import Link from "next/link";
import type { CSSProperties } from "react";

type CtaSectionProps = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

const buyingSignals = [
  "Need the strategy, creative, and performance teams pulling in one direction",
  "Need campaigns and landing pages to ship on a tighter weekly rhythm",
  "Need reporting that makes the next budget decision easier, not harder",
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
        <div className="surface-panel relative overflow-hidden px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12" data-tilt data-reveal="up">
          <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-70" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-8 top-10 h-32 w-32 rounded-full bg-volt/18 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -left-8 bottom-0 h-40 w-40 rounded-full bg-signal/18 blur-3xl" aria-hidden="true" />

          <div className="campaign-ticker mb-8 border-b border-white/10 pb-5 text-white/42">
            {["Strategy", "Creative", "Launch", "Optimization", "Reporting", "Pipeline"].concat(["Strategy", "Creative", "Launch", "Optimization", "Reporting", "Pipeline"]).map((item, index) => (
              <span key={`${item}-${index}`} className="campaign-ticker-item">
                {item}
              </span>
            ))}
          </div>

          <div className="relative grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
            <div className="space-y-5">
              <p className="eyebrow-label">Next Move</p>
              <h2 className="max-w-4xl font-display text-[clamp(4rem,9vw,7rem)] uppercase leading-[0.82] text-white">
                {title}
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-white/70">{description}</p>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/42">Best fit when</p>
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/34">Decision stage</p>
                </div>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-white/74">
                  {buyingSignals.map((signal, index) => (
                    <li
                      key={signal}
                      className="flex gap-3"
                      style={{ "--reveal-delay": `${index * 60}ms` } as CSSProperties}
                    >
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
