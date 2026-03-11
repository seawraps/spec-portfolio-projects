import type { Metadata } from "next";
import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/layout/container";
import { CtaSection } from "@/components/sections/cta-section";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutHighlights, aboutStats, company, differentiators } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Learn how Blue Oak Remodeling Co. approaches premium residential renovations with material-first guidance, clean communication, and local craftsmanship.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section id="about-overview" className="py-10 md:py-12 lg:py-14">
        <Container className="architectural-grid grid gap-8 py-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="About Blue Oak"
              title="A local remodeling studio built around trust, taste, and residential permanence."
              description="Founded in 2012, Blue Oak Remodeling Co. was created for homeowners who want a more thoughtful renovation experience: stronger material guidance, clearer expectations, and craftsmanship that feels settled rather than showy."
              as="h1"
            />
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              We are not chasing volume. We take on a disciplined number of kitchen, bath,
              interior, and millwork-led projects so our team can stay close to layout decisions,
              finish transitions, scheduling, and the way your home feels after the dust is gone.
            </p>
            <p className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              {company.license}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="border border-[color:rgba(31,35,39,0.12)] bg-[color:rgba(247,242,234,0.72)] p-5"
                >
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                    {stat.label}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-brand)] sm:text-base">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100} className="grid gap-4 sm:grid-cols-[1.08fr_0.92fr]">
            <div className="image-frame relative min-h-[420px] overflow-hidden rounded-[1rem] sm:min-h-[560px]">
              <Image
                src="/images/dining-room.jpg"
                alt="A refined residential dining room with warm wood detailing and natural light."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,35,45,0.04),rgba(23,35,45,0.28))]" />
            </div>
            <div className="grid gap-4">
              <div className="image-frame relative min-h-[200px] overflow-hidden rounded-[1rem]">
                <Image
                  src="/images/cabinet-detail.jpg"
                  alt="Premium cabinetry and millwork detail."
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 24vw"
                />
              </div>
              <div className="border border-[color:rgba(31,35,39,0.12)] bg-[color:rgba(247,242,234,0.72)] p-5">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                  What we protect
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                  Renovation should improve how a home lives without turning the process into a
                  black box. That means dependable scheduling, respectful crews, and choices made
                  with both aesthetics and daily use in mind.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="about-approach" className="py-16 md:py-20 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="How We Work"
                title="Good renovation work is equal parts judgment, craft, and communication."
                description="Our clients are often balancing family schedules, work, budgets, and a hundred product choices at once. Our job is to make that complexity feel manageable."
              />
              <ButtonLink href="/contact" variant="secondary" className="mt-7">
                Talk Through Your Project
              </ButtonLink>
            </div>
          </Reveal>

          <div className="line-list border-y border-[color:rgba(31,35,39,0.12)]">
            {aboutHighlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <article className="py-6">
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                    0{index + 1}
                  </p>
                  <h2 className="mt-3 font-display text-[2rem] leading-[0.96] text-[var(--color-brand)] sm:text-[2.5rem]">
                    {item.title}
                  </h2>
                  <p className="mt-4 max-w-3xl text-sm leading-8 text-[var(--color-muted)] sm:text-base">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="about-referrals" className="py-16 md:py-20 lg:py-24">
        <Container className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Reveal>
            <div className="image-frame relative min-h-[420px] overflow-hidden rounded-[1rem] sm:min-h-[540px]">
              <Image
                src="/images/stair-detail.jpg"
                alt="Warm stair detailing and residential millwork inside a renovated home."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,35,45,0.04),rgba(23,35,45,0.34))]" />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="architectural-eyebrow">Why Clients Refer Us</p>
            <h2 className="mt-5 max-w-lg font-display text-[2.7rem] leading-[0.94] text-[var(--color-brand)] sm:text-[3.45rem]">
              A process built for confidence instead of confusion.
            </h2>

            <div className="line-list mt-8 border-y border-[color:rgba(31,35,39,0.12)]">
              {differentiators.map((item) => (
                <p
                  key={item}
                  className="py-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base"
                >
                  {item}
                </p>
              ))}
            </div>

            <div className="mt-8 border border-[color:rgba(31,35,39,0.12)] bg-[color:rgba(247,242,234,0.72)] p-5">
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                Portfolio note
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                This website is a portfolio concept designed to represent a premium local
                contractor brand. Names, testimonials, and contact details are fictional but
                intentionally realistic.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaSection
        title="If you want a renovation partner who can balance taste with practicality, start here"
        description="We will talk through the rooms involved, your timing, and what level of transformation makes sense before pushing you toward a scope."
      />
    </>
  );
}
