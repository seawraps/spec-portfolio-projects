import { NeighborhoodCard } from "@/components/cards/NeighborhoodCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { neighborhoods } from "@/lib/data";

type NeighborhoodsSectionProps = {
  title?: string;
  description?: string;
};

export function NeighborhoodsSection({
  title = "Neighborhoods worth knowing block by block.",
  description = "Our market advice is strongest where we stay focused. That means a tighter map, sharper neighborhood pattern recognition, and better guidance on where each client will actually feel at home.",
}: NeighborhoodsSectionProps) {
  return (
    <section className="py-14 md:py-18 lg:py-24" aria-labelledby="neighborhoods-heading">
      <Container>
        <SectionHeading
          id="neighborhoods-heading"
          eyebrow="Neighborhood Guide"
          title={title}
          description={description}
        />
        <div className="mt-10 space-y-6">
          {neighborhoods.map((neighborhood, index) => (
            <NeighborhoodCard
              key={neighborhood.name}
              neighborhood={neighborhood}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
