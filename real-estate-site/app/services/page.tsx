import type { Metadata } from "next";
import Image from "next/image";

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
        title="Representation that balances presentation, analytics, and timing."
        description="Whether you are preparing to sell, searching discreetly, or planning your next move several months out, we shape a strategy around your price point, calendar, and the realities of the segment you are entering."
        imageSrc="/images/services-interior.jpg"
        imageAlt="A polished luxury interior styled for premium residential marketing."
        imageCaption="Launch strategy, buyer representation, and valuation advice delivered with restraint."
        primaryAction={{ href: "/contact", label: "Book a consultation" }}
        secondaryAction={{ href: "/", label: "See featured listings", variant: "secondary" }}
        highlights={[
          "Private buyer representation and off-market outreach",
          "Listing prep, staging direction, and launch planning",
          "Valuation sessions for owners preparing future moves",
        ]}
      />

      <section className="pt-8 pb-12 md:pt-10 md:pb-16 lg:pt-12 lg:pb-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="soft-card rounded-[32px] p-8 sm:p-10">
              <SectionHeading
                eyebrow="Service Standards"
                title="What every engagement includes."
                description="The difference between a smooth transaction and a reactive one is usually preparation. These standards shape how we manage every search, launch, and negotiation."
              />
              <div className="mt-8 grid gap-4">
                {serviceStandards.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[24px] border border-[var(--color-line)] bg-[var(--color-cream)] p-6"
                  >
                    <h3 className="font-display text-3xl text-[var(--color-ink)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="image-frame relative min-h-[360px] lg:min-h-[640px]">
              <Image
                src="/images/listing-penthouse.jpg"
                alt="A premium penthouse living room staged for a luxury real estate marketing campaign."
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10171d]/72 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-[24px] border border-white/12 bg-black/24 p-5 text-white backdrop-blur-md">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-white/68">
                  Launch Discipline
                </p>
                <p className="mt-3 font-display text-4xl leading-[0.94] text-white">
                  Strong presentation only works when the pricing, timing, and
                  outreach strategy are just as considered.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ServicesGridSection
        title="Signature services for buyers, sellers, and owners planning ahead."
        description="Each engagement is tailored, but every client receives direct communication, disciplined planning, and a clear point of view on what matters most."
      />

      <ProcessSection
        title="A process designed to remove guesswork and protect momentum."
        description="Our workflows are meant to feel calm and decisive. Buyers know where they stand. Sellers know what happens next, when, and why."
      />

      <CtaGridSection />
    </>
  );
}
