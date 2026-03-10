import { NeighborhoodCard } from "@/components/cards/NeighborhoodCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { neighborhoods } from "@/lib/data";

type NeighborhoodsSectionProps = {
  title?: string;
  description?: string;
};

export function NeighborhoodsSection({
  title = "Neighborhoods Served",
  description = "We focus on a tightly defined set of neighborhoods so our advice reflects real buyer behavior, pricing nuance, and block-by-block differences rather than generic market summaries.",
}: NeighborhoodsSectionProps) {
  return (
    <section className="py-12 md:py-16 lg:py-24" aria-labelledby="neighborhoods-heading">
      <Container>
        <SectionHeading
          id="neighborhoods-heading"
          align="center"
          eyebrow="Neighborhoods Served"
          title={title}
          description={description}
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {neighborhoods.map((neighborhood) => (
            <NeighborhoodCard
              key={neighborhood.name}
              neighborhood={neighborhood}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
