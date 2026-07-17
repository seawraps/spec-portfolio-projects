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
  title: "Vinyl Wrap, PPF & Tint Services",
  description:
    "Color change wraps, interior and trim wraps, rims and body kits, chrome deletes, racing stripes, light tinting, paint protection film and window tint in Renton, WA.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="If it can be wrapped, Wu wraps it."
        description="Exteriors, interiors, rims and body kits, plus PPF and window tint out of the new studio. Every job gets premium film and the same obsessive standard."
      />

      <section className="bg-[var(--fog)] py-16 lg:py-24">
        <Container>
          <div className="grid gap-6">
            {services.map((service, index) => (
              <Reveal key={service.id} delay={Math.min(index * 40, 160)}>
                <article
                  id={service.id}
                  className="grid gap-8 rounded-2xl bg-[var(--bone)] p-7 sm:p-9 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="display text-[1.7rem] text-[var(--ink)] sm:text-[2rem]">
                        {service.name}
                      </h2>
                      {service.tag ? (
                        <span className="label rounded-full bg-[var(--cedar)] px-3 py-1 text-[0.56rem] text-[var(--bone)]">
                          {service.tag}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-4 max-w-xl text-[1rem] leading-8 text-[var(--slate)]">
                      {service.fullDescription}
                    </p>
                    <p className="label mt-6 text-[0.64rem] text-[var(--cedar)]">
                      Typical turnaround: {service.turnaround}
                    </p>
                  </div>

                  <ul className="space-y-2.5 border-t border-[var(--line-lighter)] pt-6 text-sm leading-7 text-[var(--slate)] lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                    {service.includes.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-[3px] w-4 shrink-0 rounded-full bg-[var(--cedar)]"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <ButtonLink href="/contact" variant="ink">
              Talk Through Your Build
            </ButtonLink>
          </Reveal>
        </Container>
      </section>

      <ProcessSection />
      <CtaSection />
    </>
  );
}
