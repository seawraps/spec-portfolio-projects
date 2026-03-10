import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const productPanels = [
  {
    label: "Command board",
    title: "Workload, queue health, and account priority in one live view.",
    detail:
      "Managers can monitor throughput, SLA risk, and ownership across every recurring process without stitching together internal trackers.",
  },
  {
    label: "Workflow studio",
    title: "Version-controlled process design that operators can actually use.",
    detail:
      "Ship changes with approvals, reusable modules, and deployment discipline instead of fragile one-off automations.",
  },
  {
    label: "Executive reporting",
    title: "Performance briefs leadership can trust.",
    detail:
      "Translate operational reality into clean dashboards, queue summaries, and improvement recommendations with context attached.",
  },
];

export function ProductPreviewSection() {
  return (
    <section className="bg-slate-950 py-14 text-white md:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Product walkthrough"
          title="A serious interface for teams running high-stakes business operations."
          description="OrbitOps combines command-board visibility, workflow design, and executive reporting in a single product system built for day-to-day operators."
          tone="dark"
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-[1.2fr_0.8fr] xl:items-start">
          <div className="surface-panel-dark overflow-hidden p-3 sm:p-4">
            <Image
              src="/product-dashboard.svg"
              alt="OrbitOps product dashboard showing workflow throughput, queue health, and live exception routing"
              width={1600}
              height={980}
              className="h-auto w-full rounded-[1.4rem]"
              priority
            />
          </div>

          <div className="space-y-4">
            {productPanels.map((panel) => (
              <article key={panel.label} className="surface-panel-dark px-5 py-5">
                <p className="data-label text-sky-300">{panel.label}</p>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-[-0.04em] text-white">
                  {panel.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{panel.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="rounded-[1.55rem] border border-white/10 bg-white/4 px-5 py-5">
            <p className="data-label text-slate-400">Role-specific views</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Managers, operators, and executives each get the level of detail they need without
              fragmenting workflow ownership.
            </p>
          </article>
          <article className="rounded-[1.55rem] border border-white/10 bg-white/4 px-5 py-5">
            <p className="data-label text-slate-400">Controlled change management</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Compare workflow versions, review impact, and push process updates with approval and
              audit history preserved.
            </p>
          </article>
          <article className="rounded-[1.55rem] border border-white/10 bg-white/4 px-5 py-5">
            <p className="data-label text-slate-400">Actionable AI</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Recommendations reference actual throughput, queue pressure, and exception patterns
              so teams can ship informed changes faster.
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}
