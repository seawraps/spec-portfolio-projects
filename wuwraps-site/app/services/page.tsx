import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessSection } from "@/components/sections/process-section";
import { CtaSection } from "@/components/sections/cta-section";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/motion/reveal";
import { services } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Vinyl Wrap Services",
  description:
    "Full color-change wraps, commercial fleet graphics, partial wraps and accents, custom printed liveries, paint protection film, and wrap removal in Renton & Seattle.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="The Service Lineup"
        title="Every wrap, one obsessive standard."
        description="Whether it's a single accent or a whole fleet, every job gets premium cast film, meticulous prep, and a factory-grade finish."
        variant="blue"
      />

      <section className="border-b border-[var(--color-line)] py-16 lg:py-24">
        <Container>
          <div className="grid gap-8">
            {services.map((service, index) => (
              <Reveal key={service.id} delay={index * 50}>
                <article
                  id={service.id}
                  className="comic-panel comic-panel-hover grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_1.3fr] lg:gap-10"
                >
                  <div>
                    <span className="comic-heavy text-[0.72rem] tracking-[0.16em] text-[var(--color-red)]">
                      {service.issue}
                    </span>
                    <h2 className="comic-display mt-2 text-[2.4rem] leading-[0.92] text-[var(--color-ink)] sm:text-[2.9rem]">
                      {service.name}
                    </h2>
                    <p className="mt-4 text-[1rem] leading-8 text-[var(--color-ink-soft)]">
                      {service.fullDescription}
                    </p>
                    <p className="comic-heavy mt-5 inline-flex border border-[var(--color-line-strong)] bg-[var(--color-yellow)] px-3 py-1.5 text-[0.66rem] tracking-[0.1em] text-[var(--color-ink)]">
                      {service.turnaround}
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="border border-[var(--color-line-strong)] bg-[var(--color-surface)] p-5">
                      <h3 className="comic-heavy text-[0.7rem] tracking-[0.14em] text-[var(--color-blue)]">
                        What&apos;s Included
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--color-ink-soft)]">
                        {service.includes.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span aria-hidden="true" className="text-[var(--color-red)]">
                              ▸
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border border-[var(--color-line-strong)] bg-[var(--color-surface)] p-5">
                      <h3 className="comic-heavy text-[0.7rem] tracking-[0.14em] text-[var(--color-blue)]">
                        Best For
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[var(--color-ink-soft)]">
                        {service.idealFor}
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {service.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="comic-heavy border border-[var(--color-line-strong)] bg-[var(--color-yellow)] px-2 py-1 text-[0.58rem] tracking-[0.08em] text-[var(--color-ink)]"
                          >
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <ButtonLink href="/contact" variant="red">
              Get a Quote on Your Build →
            </ButtonLink>
          </Reveal>
        </Container>
      </section>

      <ProcessSection />
      <CtaSection />
    </>
  );
}
