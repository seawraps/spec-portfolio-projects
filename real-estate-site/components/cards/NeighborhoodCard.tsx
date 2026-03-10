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
    <article className="overflow-hidden rounded-[32px] border border-[var(--color-line)] bg-[var(--color-surface-strong)] shadow-[0_28px_70px_-44px_rgba(19,26,33,0.32)]">
      <div className="grid lg:grid-cols-[0.94fr_1.06fr]">
        <div className={cn("relative min-h-[320px] lg:min-h-[420px]", reverse && "lg:order-2")}>
          <Image
            src={neighborhood.imageSrc}
            alt={neighborhood.imageAlt}
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10171d]/70 via-transparent to-transparent" />
          <div className="absolute left-5 top-5 rounded-full bg-white/88 px-4 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-navy)]">
            {neighborhood.profile}
          </div>
          <div className="absolute inset-x-5 bottom-5 rounded-[24px] border border-white/12 bg-black/24 p-5 text-white backdrop-blur-md">
            <p className="font-display text-4xl leading-none">{neighborhood.name}</p>
            <p className="mt-2 text-sm leading-7 text-white/74">
              {neighborhood.story}
            </p>
          </div>
        </div>

        <div className="p-8 sm:p-10">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-bronze)]">
            Neighborhood note
          </p>
          <h3 className="mt-4 font-display text-5xl leading-[0.94] text-[var(--color-ink)]">
            {neighborhood.name}
          </h3>
          <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
            {neighborhood.summary}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[22px] border border-[var(--color-line)] bg-[var(--color-cream)] p-5">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze)]">
                Commute
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted-strong)]">
                {neighborhood.commute}
              </p>
            </div>
            <div className="rounded-[22px] border border-[var(--color-line)] bg-[var(--color-cream)] p-5">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze)]">
                Housing
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted-strong)]">
                {neighborhood.housing}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {neighborhood.highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full border border-[var(--color-line)] bg-white px-3 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
