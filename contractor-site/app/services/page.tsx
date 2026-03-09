import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { CtaSection } from "@/components/sections/cta-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Explore kitchen, bathroom, whole-home, and outdoor remodeling services from Blue Oak Remodeling Co. in Nashville.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Comprehensive remodeling services for modern Tennessee homes"
            description="We scope every project with transparent pricing guidance, schedule clarity, and craftsmanship standards built for long-term value."
          />

          <div className="mt-10 grid gap-6">
            {services.map((service) => (
              <article
                key={service.id}
                className="rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                  <div>
                    <h2 className="font-display text-4xl leading-tight text-[var(--color-brand)]">
                      {service.name}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                      {service.fullDescription}
                    </p>
                    <p className="mt-4 text-sm font-medium text-[var(--color-brand)]">
                      {service.timeline}
                    </p>
                    <p className="mt-2 text-sm text-[var(--color-muted)]">Ideal for: {service.idealFor}</p>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                      Typical Scope Includes
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {service.includes.map((item) => (
                        <li
                          key={item}
                          className="rounded-xl bg-[var(--color-brand-soft)] px-4 py-2.5 text-sm text-[var(--color-muted)]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-18">
        <Container>
          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-brand-soft)] p-6 sm:p-8">
            <h2 className="font-display text-4xl text-[var(--color-brand)]">Need a custom scope?</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              Some homeowners combine multiple service categories into one phased renovation
              strategy. We can build a tailored scope and sequencing plan around your priorities.
            </p>
          </div>
        </Container>
      </section>

      <CtaSection
        title="Get a clear service recommendation for your home"
        description="We can walk through your goals, prioritize improvements, and suggest the right renovation approach for your timeline and budget."
      />
    </>
  );
}
