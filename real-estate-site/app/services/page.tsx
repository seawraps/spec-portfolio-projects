import type { Metadata } from "next";

import { CtaGridSection } from "@/components/sections/CtaGridSection";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesGridSection } from "@/components/sections/ServicesGridSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceStandards } from "@/lib/data";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Explore buyer representation, seller marketing, valuation strategy, and consultation services from Crescent Vale Realty.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Representation that balances aesthetics, analytics, and timing."
        description="Whether you are preparing to sell, searching discreetly, or planning your next move six months out, we build a strategy around the realities of your price point, timeline, and market segment."
        primaryAction={{ href: "/contact", label: "Book a consultation" }}
        secondaryAction={{ href: "/", label: "See featured listings", variant: "secondary" }}
        highlights={[
          "Private buyer representation and off-market outreach",
          "Listing prep, staging direction, and launch planning",
          "Valuation sessions for owners preparing future moves",
        ]}
      />

      <ServicesGridSection
        title="Signature Services"
        description="Each engagement is tailored, but every client receives direct communication, disciplined planning, and a clear point of view."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="What Every Engagement Includes"
            title="Consistent service standards, regardless of transaction type."
            description="The difference between a smooth transaction and a reactive one usually comes down to prep. These standards shape how we manage every search, launch, and negotiation."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {serviceStandards.map((item) => (
              <article key={item.title} className="soft-card rounded-[28px] p-6">
                <h3 className="font-display text-3xl text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <ProcessSection
        title="A Process Built To Remove Guesswork"
        description="Our workflows are meant to feel calm and decisive. Buyers know exactly where they stand. Sellers know what happens next, when, and why."
      />

      <CtaGridSection />
    </>
  );
}
