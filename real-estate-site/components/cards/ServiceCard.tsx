import type { ServiceOffering } from "@/lib/data";

type ServiceCardProps = {
  service: ServiceOffering;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="soft-card reveal-up delay-2 h-full rounded-[30px] p-7 sm:p-8">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[var(--color-bronze)]">
        {service.emphasis}
      </p>
      <h3 className="mt-4 font-display text-4xl leading-[0.94] text-[var(--color-ink)]">
        {service.title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
        {service.summary}
      </p>
      <ul className="mt-6 space-y-4 border-t border-[var(--color-line)] pt-6">
        {service.deliverables.map((item, index) => (
          <li key={item} className="grid grid-cols-[auto_1fr] gap-4">
            <span className="font-display text-3xl leading-none text-[var(--color-bronze)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-sm leading-7 text-[var(--color-muted-strong)]">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
