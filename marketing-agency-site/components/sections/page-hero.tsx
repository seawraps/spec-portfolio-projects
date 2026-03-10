import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
};

export function PageHero({ eyebrow, title, description, aside }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 pb-14 pt-14 md:pb-18 md:pt-18 lg:pb-22 lg:pt-22">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-hero-grid opacity-55" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-glow editorial-stripes" aria-hidden="true" />

      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-8 xl:grid-cols-[1.02fr_0.98fr] xl:items-end">
          <div className="space-y-6" data-reveal="left">
            <p className="eyebrow-label">{eyebrow}</p>
            <div className="grid gap-5 xl:grid-cols-[0.82fr_0.18fr] xl:items-end">
              <h1 className="max-w-5xl font-display text-[clamp(4rem,9vw,7.6rem)] uppercase leading-[0.82] text-white">
                {title}
              </h1>
              <div className="hidden xl:block">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/36">Operator-led</p>
                <p className="mt-2 text-sm leading-6 text-white/62">Sharper choices, faster launches, clearer reporting.</p>
              </div>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">{description}</p>

            <div className="flex flex-wrap gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/46">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Senior-led strategy</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Campaign velocity</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Revenue accountability</span>
            </div>
          </div>

          {aside ? (
            <div className="surface-panel relative p-6 lg:p-8" data-tilt data-reveal="right">
              <div className="pointer-events-none absolute -right-10 top-0 h-24 w-24 rounded-full bg-signal/18 blur-2xl" aria-hidden="true" />
              <div className="relative">{aside}</div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
