import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { integrationGroups } from "@/lib/data";

export function IntegrationsSection() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <SectionHeading
            eyebrow="Integrations"
            title="Connect your existing stack in minutes"
            description="OrbitOps integrates with the systems your teams already use so you can automate workflows without introducing operational friction."
          />

          <div className="surface-card-muted p-6">
            <p className="text-sm leading-6 text-slate-700">
              Need a custom integration? OrbitOps includes API and webhook tooling for
              enterprise-specific workflows.
            </p>
            <ButtonLink href="/contact" variant="secondary" className="mt-5">
              Talk to an Integration Expert
            </ButtonLink>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {integrationGroups.map((group) => (
            <article key={group.category} className="surface-card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700"
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
