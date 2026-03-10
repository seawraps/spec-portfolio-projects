import { ServiceCard } from "@/components/cards/ServiceCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceOfferings } from "@/lib/data";

type ServicesGridSectionProps = {
  title?: string;
  description?: string;
};

export function ServicesGridSection({
  title = "Services",
  description = "From discreet buyer searches to launch-ready seller campaigns, our work is built around thoughtful preparation, market timing, and steady execution.",
}: ServicesGridSectionProps) {
  return (
    <section className="py-12 md:py-16 lg:py-24" aria-labelledby="services-heading">
      <Container>
        <SectionHeading
          id="services-heading"
          align="center"
          eyebrow="How We Help"
          title={title}
          description={description}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {serviceOfferings.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
