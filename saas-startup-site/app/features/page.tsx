import Image from "next/image";
import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { InteractiveCard } from "@/components/ui/InteractiveCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featurePillars, teamUseCases } from "@/lib/data";

const pillarSignals = [
  ["Reusable workflow modules", "Version-controlled releases", "Approval-aware launches"],
  ["Queue health views", "Escalation policies", "Owner accountability signals"],
  ["AI change briefs", "Root-cause analysis", "Scenario planning before rollout"],
];

const governanceItems = [
  "Role-based access and ownership controls",
  "Approval layers for process changes",
  "Audit exports and activity history",
  "Architecture guidance for enterprise rollouts",
];

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore OrbitOps features for workflow design, live operational visibility, analytics, and enterprise governance.",
};

export default function FeaturesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#04101b] py-14 md:py-20 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(22,184,255,0.18),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(99,241,213,0.1),transparent_24%)]"
          aria-hidden="true"
        />
        <Container className="relative">
          <div className="grid gap-10 xl:grid-cols-[0.88fr_1.12fr] xl:items-center">
            <Reveal>
              <p className="data-label text-sky-200">Platform features</p>
              <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold tracking-[-0.08em] text-white sm:text-5xl lg:text-[4.4rem] lg:leading-[0.92]">
                Workflow design, live execution, and improvement tooling in one operating system.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                OrbitOps helps operators build controlled workflows, manage active queues, and ship
                process improvements with the governance leaders need to trust the rollout.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/contact">Book a tailored walkthrough</ButtonLink>
                <ButtonLink href="/#pricing" variant="inverse">
                  Review pricing
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="surface-panel-dark animated-grid overflow-hidden p-3 sm:p-4">
                <Image
                  src="/workflow-studio.svg"
                  alt="OrbitOps workflow studio showing orchestration nodes, deployment states, and approval rules"
                  width={1600}
                  height={1080}
                  className="h-auto w-full rounded-[1.5rem]"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[#edf2f8] py-16 md:py-20 lg:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Core pillars"
              title="Capabilities designed for operational depth, not just dashboard decoration."
              description="Each OrbitOps layer is meant to support live execution, safer process change management, and more credible reporting across teams."
            />
          </Reveal>

          <div className="mt-12 space-y-6">
            {featurePillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.05}>
                <InteractiveCard className="surface-panel p-6 lg:p-8">
                  <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
                    <div>
                      <p className="data-label text-slate-500">Pillar 0{index + 1}</p>
                      <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.05em] text-slate-950">
                        {pillar.title}
                      </h2>
                      <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                        {pillar.summary}
                      </p>
                      <ul className="mt-5 space-y-3">
                        {pillar.bulletPoints.map((point) => (
                          <li key={point} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                            <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-950 text-[0.65rem] font-semibold text-white">
                              +
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="surface-panel-dark h-full px-5 py-5">
                      <p className="data-label text-sky-200">In practice</p>
                      <div className="mt-5 space-y-3">
                        {pillarSignals[index].map((signal) => (
                          <div
                            key={signal}
                            className="rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                          >
                            {signal}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </InteractiveCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20 lg:py-24">
        <Container>
          <div className="grid gap-8 xl:grid-cols-[0.82fr_1.18fr] xl:items-start">
            <Reveal>
              <SectionHeading
                eyebrow="By team"
                title="Designed for cross-functional operators, not a single narrow use case."
                description="OrbitOps becomes more valuable as revenue, onboarding, support, finance, and systems teams share the same operating model."
              />
            </Reveal>

            <div className="grid gap-6 lg:grid-cols-3">
              {teamUseCases.map((useCase, index) => (
                <Reveal key={useCase.team} delay={index * 0.05}>
                  <InteractiveCard className="surface-panel h-full px-6 py-6">
                    <p className="data-label text-slate-500">{useCase.team}</p>
                    <ul className="mt-4 space-y-3">
                      {useCase.outcomes.map((outcome) => (
                        <li key={outcome} className="text-sm leading-6 text-slate-700">
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </InteractiveCard>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell-dark py-16 md:py-20 lg:py-24">
        <Container>
          <Reveal>
            <div className="surface-panel-dark grid gap-8 px-6 py-8 sm:px-8 xl:grid-cols-[0.92fr_1.08fr] xl:items-center">
              <div>
                <p className="data-label text-sky-200">Governance and rollout readiness</p>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.06em] text-white">
                  Built to satisfy operators, systems teams, and procurement stakeholders at the
                  same time.
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {governanceItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.4rem] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
