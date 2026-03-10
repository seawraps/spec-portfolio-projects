import Image from "next/image";
import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featurePillars, teamUseCases } from "@/lib/data";
import { cn } from "@/lib/utils";

const pillarSignals = [
  ["Reusable workflow modules", "Version-controlled process updates", "Approval-aware releases"],
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
      <section className="border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.12),transparent_28%),linear-gradient(180deg,#f8fbff_0%,#eef5fb_100%)] py-14 md:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 xl:grid-cols-[0.88fr_1.12fr] xl:items-center">
            <div>
              <p className="eyebrow-label">Platform features</p>
              <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-[4rem] lg:leading-[0.96]">
                Workflow design, live execution, and improvement tooling in one product system.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                OrbitOps helps operators build controlled workflows, manage active queues, and ship
                process improvements with the governance leaders need to trust the rollout.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/contact">Book a tailored walkthrough</ButtonLink>
                <ButtonLink href="/#pricing" variant="secondary">
                  Review pricing
                </ButtonLink>
              </div>
            </div>

            <div className="surface-panel-dark overflow-hidden p-3 sm:p-4">
              <Image
                src="/workflow-studio.svg"
                alt="OrbitOps workflow studio showing orchestration nodes, deployment states, and approval rules"
                width={1600}
                height={1080}
                className="h-auto w-full rounded-[1.4rem]"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Core pillars"
            title="Capabilities designed for real operational complexity."
            description="Each OrbitOps layer is meant to support live execution, safer process change management, and more credible reporting across teams."
          />

          <div className="mt-12 space-y-6">
            {featurePillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className={cn(
                  "grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_28px_64px_-46px_rgba(8,15,31,0.2)] lg:p-8",
                  "xl:grid-cols-[0.9fr_1.1fr]",
                  index % 2 === 1 ? "xl:grid-cols-[1.1fr_0.9fr]" : "",
                )}
              >
                <div className={cn(index % 2 === 1 ? "xl:order-2" : "")}>
                  <p className="data-label text-slate-500">Pillar 0{index + 1}</p>
                  <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                    {pillar.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">{pillar.summary}</p>
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

                <div className={cn(index % 2 === 1 ? "xl:order-1" : "")}>
                  <div className="surface-panel-dark surface-grid h-full px-5 py-5">
                    <p className="data-label text-sky-300">In practice</p>
                    <div className="mt-5 space-y-3">
                      {pillarSignals[index].map((signal) => (
                        <div
                          key={signal}
                          className="rounded-2xl border border-white/10 bg-white/4 px-4 py-3 text-sm text-slate-200"
                        >
                          {signal}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f4f8fd] py-14 md:py-20 lg:py-24">
        <Container>
          <div className="grid gap-8 xl:grid-cols-[0.82fr_1.18fr] xl:items-start">
            <SectionHeading
              eyebrow="By team"
              title="Designed for cross-functional operators, not a single narrow use case."
              description="OrbitOps becomes more valuable as revenue, onboarding, support, finance, and systems teams share the same operating model."
            />

            <div className="grid gap-6 lg:grid-cols-3">
              {teamUseCases.map((useCase) => (
                <article key={useCase.team} className="surface-panel px-6 py-6">
                  <p className="data-label text-slate-500">{useCase.team}</p>
                  <ul className="mt-4 space-y-3">
                    {useCase.outcomes.map((outcome) => (
                      <li key={outcome} className="text-sm leading-6 text-slate-700">
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-20 lg:py-24">
        <Container>
          <div className="surface-panel-dark grid gap-8 px-6 py-8 sm:px-8 xl:grid-cols-[0.92fr_1.08fr] xl:items-center">
            <div>
              <p className="data-label text-sky-300">Governance and rollout readiness</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.05em] text-white">
                Built to satisfy operators, systems teams, and procurement stakeholders at the same time.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {governanceItems.map((item) => (
                <div key={item} className="rounded-[1.4rem] border border-white/10 bg-white/4 px-4 py-4 text-sm leading-6 text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
