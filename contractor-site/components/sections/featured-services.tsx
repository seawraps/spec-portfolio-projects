import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/data";

export function FeaturedServices() {
  return (
    <section className="py-12 md:py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Core Services"
          title="Renovation services tailored to how you actually live"
          description="From focused room upgrades to whole-home refreshes, every project is scoped with clear timelines, quality materials, and accountable project management."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.id}
              className="surface-card group rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[0_26px_54px_-30px_rgba(24,37,49,0.34)]"
            >
              <h3 className="font-display text-3xl text-[var(--color-brand)]">{service.name}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                {service.shortDescription}
              </p>
              <p className="mt-4 text-sm font-medium text-[var(--color-brand)]">{service.timeline}</p>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/services"
            className="inline-flex items-center text-sm font-semibold text-[var(--color-brand)] transition hover:text-[var(--color-accent)]"
          >
            View full service breakdown →
          </Link>
        </div>
      </Container>
    </section>
  );
}
