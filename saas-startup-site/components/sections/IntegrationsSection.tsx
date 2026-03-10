import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { integrationGroups } from "@/lib/data";

const architectureLanes = [
  {
    label: "Systems in",
    items: ["CRM events", "Support tickets", "Billing triggers", "Warehouse signals"],
  },
  {
    label: "OrbitOps core",
    items: ["Workflow engine", "Policy rules", "AI brief generator", "Audit history"],
  },
  {
    label: "Systems out",
    items: ["Task routing", "Stakeholder alerts", "Data updates", "Executive reports"],
  },
];

export function IntegrationsSection() {
  return (
    <section className="bg-white py-14 md:py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 xl:grid-cols-[0.84fr_1.16fr] xl:items-start">
          <div>
            <SectionHeading
              eyebrow="Integrations"
              title="Connect the operational systems your team already depends on."
              description="OrbitOps sits between the systems that generate work and the teams accountable for execution, so you can automate orchestration without ripping out your stack."
            />
            <div className="surface-panel-muted mt-7 px-6 py-6">
              <p className="data-label text-slate-500">Enterprise deployment</p>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Native connectors cover the common B2B stack. Custom APIs and webhooks support
                internal systems, event buses, or procurement-specific review flows.
              </p>
              <ButtonLink href="/contact" variant="secondary" className="mt-5">
                Talk to an integration architect
              </ButtonLink>
            </div>
          </div>

          <div className="surface-panel-dark surface-grid overflow-hidden p-5 sm:p-6">
            <div className="grid gap-4 lg:grid-cols-3">
              {architectureLanes.map((lane, index) => (
                <article
                  key={lane.label}
                  className={`rounded-[1.55rem] border px-4 py-4 ${
                    index === 1
                      ? "border-sky-400/25 bg-sky-400/10"
                      : "border-white/10 bg-white/4"
                  }`}
                >
                  <p className="data-label text-slate-300">{lane.label}</p>
                  <ul className="mt-4 space-y-2">
                    {lane.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-xl border border-white/8 bg-[#091221] px-3 py-2 text-sm text-slate-200"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {integrationGroups.map((group) => (
            <article key={group.category} className="surface-panel px-5 py-5">
              <p className="data-label text-slate-500">{group.category}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
