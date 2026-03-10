import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
};

export function PageHero({ eyebrow, title, description, aside }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 pb-12 pt-22 sm:pt-14 md:pb-16 md:pt-16 lg:pb-18 lg:pt-18">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-hero-grid opacity-55" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-glow editorial-stripes" aria-hidden="true" />

      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,0.68fr)_minmax(20rem,0.32fr)] xl:items-start xl:gap-10">
          <div className="space-y-6" data-reveal="left">
            <div className="flex flex-wrap items-center gap-3">
              <p className="eyebrow-label">{eyebrow}</p>
              <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/48">
                Operator-led
              </span>
            </div>

            <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(14rem,15.5rem)] lg:items-end">
              <h1 className="max-w-none font-display text-[clamp(3.15rem,7vw,6rem)] uppercase leading-[0.84] text-white">
                {title}
              </h1>
              <div className="hidden rounded-[1.15rem] border border-white/10 bg-white/5 px-4 py-4 lg:block">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/36">Operating mode</p>
                <p className="mt-2 text-sm leading-6 text-white/68">Sharper choices, faster launches, clearer reporting.</p>
              </div>
            </div>

            <p className="max-w-3xl text-lg leading-8 text-white/72 sm:text-[1.14rem]">{description}</p>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-[1.1rem] border border-white/10 bg-white/5 px-4 py-4">
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white/42">Strategy</p>
                <p className="mt-2 text-sm text-white/74">Senior-led guidance from the first decision through launch.</p>
              </div>
              <div className="rounded-[1.1rem] border border-white/10 bg-white/5 px-4 py-4">
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white/42">Velocity</p>
                <p className="mt-2 text-sm text-white/74">Weekly movement, tighter reviews, and less handoff drag.</p>
              </div>
              <div className="rounded-[1.1rem] border border-white/10 bg-white/5 px-4 py-4">
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white/42">Reporting</p>
                <p className="mt-2 text-sm text-white/74">Revenue accountability built into the working rhythm.</p>
              </div>
            </div>
          </div>

          {aside ? (
            <div className="surface-panel relative p-5 lg:p-7 xl:mt-1" data-tilt data-reveal="right">
              <div className="pointer-events-none absolute -right-10 top-0 h-24 w-24 rounded-full bg-signal/18 blur-2xl" aria-hidden="true" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/24 to-transparent" aria-hidden="true" />
              <div className="relative">{aside}</div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
