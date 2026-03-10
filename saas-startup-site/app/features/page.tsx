import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featurePillars, teamUseCases } from "@/lib/data";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore OrbitOps capabilities for workflow automation, exception management, analytics, and AI-guided process optimization.",
};

export default function FeaturesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-cyan-50 to-white py-16 md:py-20 lg:py-24">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">
            Product Features
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            One platform for automation, visibility, and continuous operations improvement.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            OrbitOps unifies process design, execution, and analytics so operators can scale
            confidently while maintaining SLA quality and accountability.
          </p>
        </Container>
      </section>

      <section className="bg-white py-12 md:py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Core Pillars"
            title="Capabilities built for modern B2B operations"
            description="Each OrbitOps feature is designed to reduce manual overhead while preserving clear ownership across teams."
          />

          <div className="mt-8 space-y-6">
            {featurePillars.map((pillar) => (
              <article
                key={pillar.title}
                className="surface-card-muted p-6 sm:p-8"
              >
                <h3 className="font-display text-2xl font-semibold tracking-tight text-slate-900">
                  {pillar.title}
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">{pillar.summary}</p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {pillar.bulletPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                      <span className="mt-1 text-cyan-700" aria-hidden="true">
                        •
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-12 md:py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="By Team"
            title="Designed for cross-functional execution"
            description="OrbitOps helps every operations stakeholder collaborate through a shared system of record."
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {teamUseCases.map((useCase) => (
              <article key={useCase.team} className="surface-card p-6">
                <h3 className="font-display text-xl font-semibold tracking-tight text-slate-900">
                  {useCase.team}
                </h3>
                <ul className="mt-4 space-y-2">
                  {useCase.outcomes.map((outcome) => (
                    <li key={outcome} className="text-sm leading-6 text-slate-600">
                      {outcome}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 md:py-16 lg:py-24">
        <Container>
          <div className="surface-card-inverse p-8 text-white sm:p-10">
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              Want a tailored feature walkthrough?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-200">
              We can map OrbitOps to your existing process architecture and show what deployment
              would look like for your team.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="light">
                Talk to Product
              </ButtonLink>
              <ButtonLink href="/#pricing" variant="inverse">
                Review Pricing
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
