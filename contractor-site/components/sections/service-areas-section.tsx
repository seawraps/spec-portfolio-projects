import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { serviceAreas } from "@/lib/data";

export function ServiceAreasSection() {
  return (
    <section className="py-14 sm:py-18">
      <Container className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Service Area"
            title="Local team, fast response throughout Middle Tennessee"
            description="We prioritize projects in and around Nashville so homeowners receive prompt site visits, dependable scheduling, and responsive project communication."
          />
          <ButtonLink href="/contact" className="mt-6">
            Confirm Your Address
          </ButtonLink>
        </div>

        <div className="rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
            Areas We Commonly Serve
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-[var(--color-muted)] sm:text-base">
            {serviceAreas.map((area) => (
              <li key={area} className="rounded-xl bg-[var(--color-brand-soft)] px-3 py-2">
                {area}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-6 text-[var(--color-muted)]">
            Outside these neighborhoods? Reach out and we can confirm travel availability for
            your project scope.
          </p>
        </div>
      </Container>
    </section>
  );
}
