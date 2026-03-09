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
      <section className="bg-gradient-to-b from-cyan-50 to-white py-16 sm:py-20">
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

      <section className="bg-white py-14 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Core Pillars"
            title="Capabilities built for modern B2B operations"
            description="Each OrbitOps feature is designed to reduce manual overhead while preserving clear ownership across teams."
          />

          <div className="mt-8 space-y-4">
            {featurePillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7"
              >
                <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900">
                  {pillar.title}
                </h2>
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

      <section className="bg-slate-50 py-14 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="By Team"
            title="Designed for cross-functional execution"
            description="OrbitOps helps every operations stakeholder collaborate through a shared system of record."
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {teamUseCases.map((useCase) => (
              <article key={useCase.team} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="font-display text-xl font-semibold tracking-tight text-slate-900">
                  {useCase.team}
                </h2>
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

      <section className="bg-white py-14 sm:py-16">
        <Container>
          <div className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white sm:p-10">
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              Want a tailored feature walkthrough?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-200">
              We can map OrbitOps to your existing process architecture and show what deployment
              would look like for your team.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/contact" className="bg-white text-slate-900 hover:bg-slate-100">
                Talk to Product
              </ButtonLink>
              <ButtonLink
                href="/#pricing"
                variant="ghost"
                className="border border-slate-600 text-slate-100 hover:bg-slate-800"
              >
                Review Pricing
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
