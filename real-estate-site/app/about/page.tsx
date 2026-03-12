import type { Metadata } from "next";
import Image from "next/image";

import { NeighborhoodsSection } from "@/components/sections/NeighborhoodsSection";
import { PageHero } from "@/components/sections/PageHero";
import { TeamSection } from "@/components/sections/TeamSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutStats, valuePoints } from "@/lib/data";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Meet the Crescent Vale Realty team and learn how the agency approaches boutique representation across the Harbor City market.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About The Agency"
        title="A boutique advisory built for thoughtful moves, stronger launches, and quieter confidence."
        description="Crescent Vale Realty blends neighborhood intelligence, editorial presentation, and direct senior-level service for buyers and sellers who want counsel that feels steady from first strategy session to final signature."
        imageSrc="/images/hero-estate.jpg"
        imageAlt="A modern hillside estate that reflects the agency's architecture-led point of view."
        imageCaption="A calm, design-aware perspective on how premium homes should be positioned."
        primaryAction={{ href: "/contact", label: "Meet the team" }}
        secondaryAction={{ href: "/services", label: "View services", variant: "secondary" }}
        highlights={[
          "Direct access to principal-level advisors from start to close",
          "Editorial listing launches tailored to the property and buyer profile",
          "Measured negotiation across premium price points and timing-sensitive moves",
        ]}
      />

      <section className="pt-8 pb-12 md:pt-10 md:pb-16 lg:pt-12 lg:pb-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="image-frame relative min-h-[380px] lg:min-h-[680px]">
              <Image
                src="/images/contact-consultation.jpg"
                alt="A refined residential interior used to reinforce the agency's calm, considered approach."
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10171d]/72 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-[24px] border border-white/12 bg-black/24 p-5 text-white backdrop-blur-md">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-white/68">
                  Our Philosophy
                </p>
                <p className="mt-3 font-display text-4xl leading-[0.94] text-white">
                  Small by design so the advice can stay personal, specific,
                  and well prepared.
                </p>
              </div>
            </div>

            <div className="soft-card rounded-[32px] p-8 sm:p-10">
              <SectionHeading
                eyebrow="Our Point Of View"
                title="Selective by design, deliberate in execution."
                description="The team is structured to keep the client roster narrow. That means faster answers, more thoughtful prep, and the kind of continuity that matters when transactions involve meaningful financial and lifestyle decisions."
              />
              <div className="mt-8 space-y-6 text-base leading-8 text-[var(--color-muted)]">
                <p>
                  Crescent Vale Realty was built around a simple belief: premium
                  real estate work should feel composed, highly personal, and
                  grounded in actual market nuance. We prefer fewer clients at a
                  time so each search, valuation, and launch receives close
                  attention.
                </p>
                <p>
                  For sellers, that means positioning homes with restraint,
                  polish, and a launch sequence that makes the property feel
                  memorable before buyers even walk through the door. For buyers,
                  it means a clear search brief, honest review of every
                  opportunity, and negotiation advice calibrated to the full
                  picture rather than just the headline number.
                </p>
              </div>

              <div className="mt-8 rounded-[28px] border border-[var(--color-line)] bg-[var(--color-cream)] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  Market Snapshot
                </p>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {aboutStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[22px] border border-[var(--color-line)] bg-white p-6"
                    >
                      <p className="font-display text-4xl text-[var(--color-ink)]">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="fine-print mt-5">
                  This is a concept/demo portfolio project. All market figures
                  and client details are illustrative.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {valuePoints.map((item) => (
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

      <TeamSection
        title="The advisors behind every search, launch, and negotiation."
        description="Every client works directly with a senior advisor. The team combines pricing rigor, polished presentation, and grounded local counsel."
      />

      <NeighborhoodsSection
        title="Neighborhood expertise shaped by real buyer behavior."
        description="From walkable historic districts to view-driven family neighborhoods, our recommendations are informed by buyer patterns, pricing nuance, and the subtleties that do not show up in generic market summaries."
      />

      <TestimonialsSection
        title="Why referral clients continue to send people our way."
        description="The strongest feedback is usually about the process itself: steady advice, thoughtful preparation, and decisions that never feel rushed or theatrical."
      />
    </>
  );
}
