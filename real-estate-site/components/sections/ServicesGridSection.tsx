import { ServiceCard } from "@/components/cards/ServiceCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceOfferings } from "@/lib/data";

type ServicesGridSectionProps = {
  title?: string;
  description?: string;
};

export function ServicesGridSection({
  title = "Services shaped around discretion, preparation, and timing.",
  description = "We advise across both sides of the move, but every engagement is built to feel personal, highly organized, and proportionate to the stakes.",
}: ServicesGridSectionProps) {
  return (
    <section
      className="py-12 md:py-16 lg:py-20"
      aria-labelledby="services-heading"
    >
      <Container>
        <div className="section-shell rounded-[40px] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
          <div className="grid gap-6 xl:grid-cols-[0.94fr_0.66fr] xl:items-end">
            <SectionHeading
              id="services-heading"
              eyebrow="How We Help"
              title={title}
              description={description}
              className="reveal-up"
            />
            <div className="soft-card reveal-up delay-1 rounded-[28px] p-6 sm:p-7">
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.32em] text-[var(--color-bronze)]">
                Engagement design
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                The work is scoped to stay calm and useful: senior oversight,
                clear decision points, and a measured pace that keeps the
                process from turning noisy.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {["Buyer representation", "Seller launches"].map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-[var(--color-line)] bg-[var(--color-cream)] px-4 py-4 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted-strong)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 reveal-up delay-2">
            {serviceOfferings.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
