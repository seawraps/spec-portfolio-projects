import type { Metadata } from "next";
import Image from "next/image";

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
  "Offerings",
  "Explore Nadia Vale's advisory, speaking, and partnership offerings for founders, executives, creators, and expert-led teams.",
  "/services",
);

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Offerings"
        title="Strategy, speaking, and packaging work for experts building public trust with intention."
        description="Whether you need an editorial repositioning sprint or a keynote that gives a room language it keeps repeating afterward, each engagement is designed to create clarity that lasts."
      />

      <OfferingsSection compact={false} />

      <section className="section-shell">
        <Container className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="media-frame relative aspect-[4/4.2] overflow-hidden rounded-[2.3rem]">
            <Image
              src="/images/nadia-workshop.jpg"
              alt="Nadia Vale facilitating a workshop in a meeting room."
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="paper-panel p-8 sm:p-10">
            <SectionHeading
              eyebrow="Who It Is For"
              title="The work adapts to the room, but the goal stays the same."
              description="A sharper, more human public-facing presence that can support the business behind it."
            />

            <div className="mt-8 space-y-5">
              {serviceFormats.map((format, index) => (
                <article key={format.title} className={index === 1 ? "rounded-[1.6rem] border border-ink/10 bg-paper-deep/55 p-6" : "rounded-[1.6rem] border border-ink/8 bg-white/70 p-6"}>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-plum">{format.label}</p>
                  <h3 className="mt-3 text-3xl text-ink">{format.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-mocha/88">{format.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <ProcessSection />
      <TestimonialsSection />
      <FaqSection items={serviceFaq} />
      <PartnershipCtaSection />
    </>
  );
}
