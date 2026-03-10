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
    <section className="py-14 md:py-18 lg:py-24" aria-labelledby="services-heading">
      <Container>
        <SectionHeading
          id="services-heading"
          eyebrow="How We Help"
          title={title}
          description={description}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 reveal-up delay-1">
          {serviceOfferings.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
