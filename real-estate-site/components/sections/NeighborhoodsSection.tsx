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
        <div className="grid gap-6 lg:grid-cols-[0.9fr_0.5fr] lg:items-end">
          <SectionHeading
            id="neighborhoods-heading"
            eyebrow="Neighborhood Guide"
            title={title}
            description={description}
            className="reveal-up"
          />
          <div className="soft-card reveal-up delay-1 rounded-[28px] p-6 sm:p-7">
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.32em] text-[var(--color-bronze)]">
              How we read the map
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
              The decision is rarely about price alone. We look at pace, street
              character, daily rituals, and whether the housing stock actually
              supports the life a client wants to live there.
            </p>
          </div>
        </div>
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
