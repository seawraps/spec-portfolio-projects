import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { integrationGroups } from "@/lib/data";

const architectureLanes = [
  {
    label: "Signals in",
    items: ["CRM changes", "Billing events", "Customer health shifts", "Support urgency"],
  },
  {
    label: "OrbitOps core",
    items: ["Policy engine", "Queue logic", "AI optimizer", "Audit stream"],
  },
  {
    label: "Actions out",
    items: ["Route work", "Notify stakeholders", "Update systems", "Brief leadership"],
  },
];

export function IntegrationsSection() {
  return (
    <section className="bg-[#edf2f8] py-16 md:py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 xl:grid-cols-[0.84fr_1.16fr] xl:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Integrations and trust"
              title="The control plane sits on top of your stack instead of asking you to replace it."
              description="OrbitOps plugs into the systems already generating work, then returns clean actions, data updates, and executive visibility without breaking the architecture teams depend on."
            />

            <div className="surface-panel mt-7 px-6 py-6">
              <p className="data-label text-slate-500">Enterprise implementation posture</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.2rem] border border-slate-200 bg-white px-4 py-4 text-sm leading-6 text-slate-700">
                  Native connectors for the standard B2B stack with API and webhook escape hatches
                  for internal tooling.
                </div>
                <div className="rounded-[1.2rem] border border-slate-200 bg-white px-4 py-4 text-sm leading-6 text-slate-700">
                  Security review, architecture guidance, and procurement-friendly documentation for
                  larger evaluations.
                </div>
              </div>
              <ButtonLink href="/contact" variant="secondary" className="mt-5">
                Talk to an integration architect
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="surface-panel-dark animated-grid overflow-hidden p-5 sm:p-6">
              <div className="grid gap-4 lg:grid-cols-3">
                {architectureLanes.map((lane, index) => (
                  <article
                    key={lane.label}
                    className={`rounded-[1.55rem] border px-4 py-4 ${
                      index === 1
                        ? "border-sky-400/18 bg-sky-400/8"
                        : "border-white/10 bg-white/5"
                    }`}
                  >
                    <p className="data-label text-slate-300">{lane.label}</p>
                    <ul className="mt-4 space-y-2.5">
                      {lane.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-[1rem] border border-white/8 bg-[#0a1524] px-3 py-2.5 text-sm text-slate-200"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {integrationGroups.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.05}>
              <article className="surface-panel h-full px-5 py-5">
                <p className="data-label text-slate-500">{group.category}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
