import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
};

export function PageHero({ eyebrow, title, description, aside }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 pb-14 pt-16 md:pb-18 md:pt-20 lg:pb-20 lg:pt-24">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-hero-grid opacity-55" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-glow editorial-stripes" aria-hidden="true" />

      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 lg:grid-cols-[1.05fr_0.7fr] lg:gap-12">
        <div className="space-y-6">
          <p className="eyebrow-label">{eyebrow}</p>
          <h1 className="max-w-5xl font-display text-[clamp(3.6rem,9vw,7rem)] font-semibold uppercase leading-[0.88] text-white">
            {title}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-white/70">{description}</p>
        </div>

        {aside ? (
          <div className="surface-panel relative p-6 lg:p-8">
            <div className="pointer-events-none absolute -right-10 top-0 h-24 w-24 rounded-full bg-signal/18 blur-2xl" aria-hidden="true" />
            <div className="relative">{aside}</div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
