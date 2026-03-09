import type { ServiceOffering } from "@/lib/data";

type ServiceCardProps = {
  service: ServiceOffering;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="soft-card h-full rounded-[28px] p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-muted)]">
        {service.emphasis}
      </p>
      <h3 className="mt-4 font-display text-4xl leading-none text-[var(--color-ink)]">
        {service.title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
        {service.summary}
      </p>
      <ul className="mt-5 space-y-3">
        {service.deliverables.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-7 text-[var(--color-ink)]">
            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-gold)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
