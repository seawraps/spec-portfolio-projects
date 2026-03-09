import type { Neighborhood } from "@/lib/data";

type NeighborhoodCardProps = {
  neighborhood: Neighborhood;
};

export function NeighborhoodCard({ neighborhood }: NeighborhoodCardProps) {
  return (
    <article className="soft-card rounded-[28px] p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-4xl leading-none text-[var(--color-ink)]">
            {neighborhood.name}
          </h3>
          <p className="mt-2 text-sm font-medium text-[var(--color-gold)]">
            {neighborhood.profile}
          </p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-[var(--color-muted)]">
        {neighborhood.summary}
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-[22px] border border-[var(--color-line)] bg-white/74 p-4">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
            Commute
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--color-ink)]">
            {neighborhood.commute}
          </p>
        </div>
        <div className="rounded-[22px] border border-[var(--color-line)] bg-white/74 p-4">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
            Housing
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--color-ink)]">
            {neighborhood.housing}
          </p>
        </div>
      </div>

      <ul className="mt-5 space-y-2">
        {neighborhood.highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex items-center gap-3 text-sm text-[var(--color-muted)]"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-gold)]" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
