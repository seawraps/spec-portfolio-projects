import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
};

export function PageHero({ eyebrow, title, description, aside }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 pb-14 pt-18 sm:pb-16 sm:pt-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-60 bg-radial-glow" aria-hidden="true" />

      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.65fr] lg:gap-12 lg:px-8">
        <div className="space-y-6">
          <p className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-mint">
            {eyebrow}
          </p>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">{title}</h1>
          <p className="max-w-3xl text-pretty text-lg leading-8 text-slate-300">{description}</p>
        </div>

        {aside ? <div className="surface-panel p-6 sm:p-7">{aside}</div> : null}
      </div>
    </section>
  );
}
