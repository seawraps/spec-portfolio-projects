import type { Metadata } from "next";

import { FaqSection } from "@/components/sections/faq-section";
import { OfferingsSection } from "@/components/sections/offerings-section";
import { PageIntro } from "@/components/sections/page-intro";
import { PartnershipCtaSection } from "@/components/sections/partnership-cta-section";
import { ProcessSection } from "@/components/sections/process-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { serviceFaq, serviceFormats } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Services",
  "Explore Nadia Vale's advisory, speaking, and partnership offerings for founders, executives, creators, and expert-led teams.",
  "/services",
);

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Offerings"
        title="Strategy and speaking engagements designed to strengthen authority, demand, and trust."
        description="Whether you need a high-touch brand repositioning sprint or a keynote that gives the room language they keep quoting later, every engagement is designed to create clarity that sticks."
      />

      <OfferingsSection compact={false} />

      <ProcessSection />

      <section className="section-shell">
        <Container>
          <SectionHeading
            eyebrow="Formats"
            title="Common ways clients engage."
            description="The same core thinking can be adapted for a founder brand, an executive team, or a sponsor-facing creator business."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {serviceFormats.map((format) => (
              <article key={format.title} className="surface-card h-full p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose">
                  {format.label}
                </p>
                <h2 className="mt-4 text-3xl text-ink">{format.title}</h2>
                <p className="mt-4 text-sm leading-7 text-ink/72">{format.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <TestimonialsSection />
      <FaqSection items={serviceFaq} />
      <PartnershipCtaSection />
    </>
  );
}
