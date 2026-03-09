import type { Metadata } from "next";

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
        title="A boutique team built for thoughtful moves and stronger outcomes."
        description="Crescent Vale Realty blends neighborhood intelligence, design-led marketing, and direct partner-level service for buyers and sellers who want clear strategy from first conversation to final signature."
        primaryAction={{ href: "/contact", label: "Meet the team" }}
        secondaryAction={{ href: "/services", label: "View services", variant: "secondary" }}
        highlights={[
          "Hands-on guidance from principal-level advisors",
          "Editorial listing launches tailored to each property",
          "Calm, informed negotiation across premium price points",
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="soft-card rounded-[32px] p-8 sm:p-10">
              <SectionHeading
                eyebrow="Our Point Of View"
                title="Small by design, deliberate in execution."
                description="The team is structured to stay selective. That means tighter communication, sharper prep, and a better experience for clients navigating meaningful financial decisions."
              />
              <div className="mt-8 space-y-6 text-base leading-8 text-[var(--color-muted)]">
                <p>
                  Crescent Vale Realty was shaped around a simple belief: the
                  best real estate representation is highly personal, deeply
                  local, and backed by disciplined execution. We prefer fewer
                  clients at a time so every search, valuation, and launch plan
                  receives real attention.
                </p>
                <p>
                  For sellers, that means positioning homes with clarity and
                  polish, coordinating every prep detail, and knowing how to
                  price for momentum without leaving value behind. For buyers,
                  it means honest guidance, creative sourcing, and a negotiation
                  strategy built around the full picture, not just the headline
                  number.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {valuePoints.map((item) => (
                <article
                  key={item.title}
                  className="soft-card rounded-[28px] p-6"
                >
                  <h3 className="font-display text-3xl text-[var(--color-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    {item.description}
                  </p>
                </article>
              ))}
              <div className="soft-card rounded-[28px] p-6 sm:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  Market Snapshot
                </p>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {aboutStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[22px] border border-[var(--color-line)] bg-white/70 p-5"
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
        </Container>
      </section>

      <TeamSection
        title="The Advisors"
        description="Every client works directly with a senior advisor. The team combines pricing rigor, polished presentation, and grounded local counsel."
      />

      <NeighborhoodsSection
        title="Neighborhood Expertise"
        description="From walkable historic blocks to view-driven family neighborhoods, our guidance is shaped by block-level patterns and the buyer profiles that drive each micro-market."
      />

      <TestimonialsSection
        title="Why Clients Refer Us"
        description="The most valuable feedback is often about how the process felt: steady, well-run, and informed at every step."
      />
    </>
  );
}
