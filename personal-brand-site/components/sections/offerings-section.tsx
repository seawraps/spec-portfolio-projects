import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { offerings } from "@/lib/data";

type OfferingsSectionProps = {
  compact?: boolean;
};

export function OfferingsSection({ compact = true }: OfferingsSectionProps) {
  const visibleOfferings = compact ? offerings.slice(0, 3) : offerings;

  return (
    <section className="section-shell">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Offerings"
            title={compact ? "High-touch offers for experts building authority with intent." : "Four ways to work together."}
            description="Each engagement is designed to strengthen message clarity, audience trust, and the commercial usefulness of your visibility."
          />
          {compact ? (
            <ButtonLink href="/services" variant="secondary" arrow className="shrink-0">
              View All Services
            </ButtonLink>
          ) : null}
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          {visibleOfferings.map((offering) => (
            <article key={offering.title} className="surface-card flex h-full flex-col p-7 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose">{offering.format}</p>
                <p className="rounded-full bg-sand px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-ink/62">
                  {offering.investment}
                </p>
              </div>

              <h2 className="mt-5 text-4xl leading-none text-ink">{offering.title}</h2>
              <p className="mt-4 text-base leading-8 text-ink/72">{offering.summary}</p>

              <ul className="mt-6 space-y-3 text-sm leading-7 text-ink/72">
                {offering.deliverables.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-rose" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 border-t border-ink/8 pt-5 text-sm leading-7 text-ink/62">{offering.result}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
