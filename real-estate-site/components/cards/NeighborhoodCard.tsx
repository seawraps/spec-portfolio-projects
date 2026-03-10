import Image from "next/image";

import type { Neighborhood } from "@/lib/data";

type NeighborhoodCardProps = {
  neighborhood: Neighborhood;
  reverse?: boolean;
};

export function NeighborhoodCard({ neighborhood }: NeighborhoodCardProps) {
  return (
    <article className="section-shell reveal-up flex h-full flex-col rounded-[32px] border border-[var(--color-line)] p-3 shadow-[0_32px_72px_-46px_rgba(17,23,29,0.24)]">
      <div className="image-frame image-reveal relative min-h-[260px] rounded-[28px]">
        <Image
          src={neighborhood.imageSrc}
          alt={neighborhood.imageAlt}
          fill
          sizes="(min-width: 1024px) 32vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10171d]/78 via-[#10171d]/10 to-transparent" />
        <div className="absolute left-5 top-5 rounded-full bg-white/92 px-4 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-navy)]">
          {neighborhood.profile}
        </div>
        <div className="absolute inset-x-5 bottom-5 rounded-[24px] border border-white/12 bg-black/24 p-5 text-white backdrop-blur-md">
          <p className="font-display text-4xl leading-none">{neighborhood.name}</p>
          <p className="mt-2 text-sm leading-7 text-white/74">
            {neighborhood.story}
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-4 sm:p-5">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-bronze)]">
              Neighborhood note
            </p>
            <h3 className="mt-3 font-display text-4xl leading-[0.94] text-[var(--color-ink)]">
              {neighborhood.name}
            </h3>
          </div>
          <div className="max-w-[15rem] rounded-[20px] border border-[var(--color-line)] bg-white/82 px-4 py-3">
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze)]">
              Commute context
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--color-muted-strong)]">
              {neighborhood.commute}
            </p>
          </div>
        </div>

        <p className="text-sm leading-7 text-[var(--color-muted)]">
          {neighborhood.summary}
        </p>

        <div className="grid gap-4">
          <div className="rounded-[24px] border border-[var(--color-line)] bg-white/76 p-5">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze)]">
              Housing mix
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted-strong)]">
              {neighborhood.housing}
            </p>
          </div>
          <div className="rounded-[24px] border border-[var(--color-line)] bg-[var(--color-cream)] p-5">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze)]">
              Local rhythm
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted-strong)]">
              {neighborhood.story}
            </p>
          </div>
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {neighborhood.highlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-full border border-[var(--color-line)] bg-[var(--color-cream)] px-3 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]"
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
