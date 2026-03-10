import type { Metadata } from "next";
import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/layout/container";
import { CtaSection } from "@/components/sections/cta-section";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  aboutHighlights,
  aboutStats,
  company,
  differentiators,
} from "@/lib/data";
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
      <section id="about-overview" className="pb-16 pt-8 md:pb-20 md:pt-10 lg:pb-24">
        <Container className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <Reveal>
            <div className="surface-card-strong rounded-[2.4rem] p-7 sm:p-9">
            <SectionHeading
              eyebrow="About Blue Oak"
              title="A local remodeling studio built around trust, taste, and homes people actually live in"
              description="Founded in 2012, Blue Oak Remodeling Co. was created for homeowners who want a more thoughtful renovation experience: strong material guidance, clear expectations, and craftsmanship that feels settled rather than flashy."
              as="h1"
            />
            <p className="mt-6 text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              We are not chasing volume. We take on a focused number of kitchen, bath, interior,
              and millwork-led projects so our team can stay present on the details that matter:
              layout, finish transitions, schedule clarity, and the way your home feels after the
              dust is gone.
            </p>
            <p className="mt-5 text-[0.74rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              {company.license}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.5rem] border border-[var(--color-border)] bg-[color:rgba(255,250,243,0.7)] p-5"
                >
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    {stat.label}
                  </p>
                  <p className="mt-3 text-base leading-7 text-[var(--color-brand)]">{stat.value}</p>
                </div>
              ))}
            </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="grid gap-5 md:grid-cols-[1.12fr_0.88fr]">
            <div className="image-frame relative min-h-[500px] rounded-[2.4rem]">
              <Image
                src="/images/dining-room.jpg"
                alt="A refined residential dining room with warm wood details and natural light."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 44vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,36,52,0.08),rgba(22,36,52,0.46))]" />
            </div>
            <div className="grid gap-5">
              <div className="image-frame relative min-h-[240px] rounded-[2rem]">
                <Image
                  src="/images/cabinet-detail.jpg"
                  alt="A cabinetry detail showing premium finish carpentry and warm woodwork."
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 28vw"
                />
              </div>
              <div className="surface-card rounded-[2rem] p-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  What We Protect
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                  Renovation should improve how your home lives without turning the process into a
                  black box. That means dependable scheduling, respectful crews, and decisions made
                  with both aesthetics and daily use in mind.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="about-approach" className="py-16 md:py-20 lg:py-24">
        <Container className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal>
            <div>
            <SectionHeading
              eyebrow="How We Work"
              title="Good renovation work is equal parts judgment, craft, and communication"
              description="Our clients are often balancing family schedules, work, budgets, and a hundred product choices at once. Our job is to make that complexity feel manageable."
            />
            <ButtonLink href="/contact" variant="secondary" className="mt-7">
              Talk Through Your Project
            </ButtonLink>
            </div>
          </Reveal>

          <div className="space-y-4">
            {aboutHighlights.map((item) => (
              <Reveal
                key={item.title}
                className="surface-card rounded-[1.8rem] p-6"
              >
                <h2 className="font-display text-3xl leading-tight text-[var(--color-brand)]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-8 text-[var(--color-muted)] sm:text-base">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="about-referrals" className="py-16 md:py-20 lg:py-24">
        <Container className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <div className="image-frame relative min-h-[440px] rounded-[2.4rem]">
            <Image
              src="/images/stair-detail.jpg"
              alt="Warm stair detailing and residential millwork inside a renovated home."
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,36,52,0.06),rgba(22,36,52,0.36))]" />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="surface-card-strong rounded-[2.4rem] p-6 sm:p-8">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Why Clients Refer Us
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-[var(--color-brand)]">
              A process built for confidence instead of confusion
            </h2>
            <ul className="mt-7 space-y-3">
              {differentiators.map((item) => (
                <li
                  key={item}
                  className="rounded-[1.3rem] border border-[var(--color-border)] bg-[color:rgba(255,250,243,0.74)] px-4 py-3 text-sm leading-7 text-[var(--color-muted)]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-7 rounded-[1.5rem] bg-[var(--color-surface-strong)] p-5">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                Portfolio note
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                This website is a portfolio concept designed to represent a premium local
                contractor brand. Names, testimonials, and contact details are fictional but
                intentionally realistic.
              </p>
            </div>
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
