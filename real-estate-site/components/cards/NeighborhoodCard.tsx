import Image from "next/image";

import type { Neighborhood } from "@/lib/data";
import { cn } from "@/lib/utils";

type NeighborhoodCardProps = {
  neighborhood: Neighborhood;
  reverse?: boolean;
};

export function NeighborhoodCard({
  neighborhood,
  reverse = false,
}: NeighborhoodCardProps) {
  return (
    <article className="section-shell reveal-up rounded-[34px] border border-[var(--color-line)] p-3 shadow-[0_32px_72px_-46px_rgba(17,23,29,0.24)]">
      <div className="grid gap-4 lg:grid-cols-[0.88fr_1.12fr]">
        <div
          className={cn(
            "image-frame image-reveal relative min-h-[320px] lg:min-h-[440px]",
            reverse && "lg:order-2",
          )}
        >
          <Image
            src={neighborhood.imageSrc}
            alt={neighborhood.imageAlt}
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10171d]/78 via-[#10171d]/8 to-transparent" />
          <div className="absolute left-5 top-5 rounded-full bg-white/92 px-4 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-navy)]">
            {neighborhood.profile}
          </div>
          <div className="absolute inset-x-5 bottom-5 rounded-[26px] border border-white/12 bg-black/24 p-5 text-white backdrop-blur-md">
            <p className="font-display text-4xl leading-none">{neighborhood.name}</p>
            <p className="mt-2 text-sm leading-7 text-white/74">
              {neighborhood.story}
            </p>
          </div>
        </div>

        <div className="grid gap-6 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-bronze)]">
                Neighborhood note
              </p>
              <h3 className="mt-4 font-display text-5xl leading-[0.92] text-[var(--color-ink)]">
                {neighborhood.name}
              </h3>
            </div>
            <div className="rounded-full border border-[var(--color-line)] bg-white/82 px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
              {neighborhood.commute}
            </div>
          </div>

          <p className="text-base leading-8 text-[var(--color-muted)]">
            {neighborhood.summary}
          </p>

          <div className="grid gap-4 md:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-[26px] border border-[var(--color-line)] bg-white/72 p-6">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze)]">
                Local rhythm
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted-strong)]">
                {neighborhood.story}
              </p>
            </div>
            <div className="rounded-[26px] border border-[var(--color-line)] bg-[var(--color-cream)] p-6">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze)]">
                Housing mix
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted-strong)]">
                {neighborhood.housing}
              </p>
            </div>
          </div>

          <div className="rounded-[28px] border border-[var(--color-line)] bg-white/74 p-6">
            <div className="grid gap-4 md:grid-cols-[0.78fr_1.22fr]">
              <div>
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze)]">
                  Buyer pull
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted-strong)]">
                  {neighborhood.profile}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
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
          </div>
        </div>
      </div>
    </article>
  );
}
