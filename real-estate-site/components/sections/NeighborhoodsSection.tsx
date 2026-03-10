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
    <section
      className="py-12 md:py-16 lg:py-20"
      aria-labelledby="neighborhoods-heading"
    >
      <Container>
        <div className="section-shell rounded-[40px] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
          <div className="grid gap-6 xl:grid-cols-[0.92fr_0.64fr] xl:items-end">
            <SectionHeading
              id="neighborhoods-heading"
              eyebrow="Neighborhood Guide"
              title={title}
              description={description}
              className="reveal-up"
            />
            <div className="grid gap-4 reveal-up delay-1 sm:grid-cols-2 xl:grid-cols-1">
              <div className="soft-card rounded-[28px] p-6 sm:p-7">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.32em] text-[var(--color-bronze)]">
                  How we read the map
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  The decision is rarely about price alone. We look at pace,
                  street character, daily rituals, and whether the housing
                  stock actually supports the life a client wants to live there.
                </p>
              </div>
              <div className="dark-panel rounded-[28px] p-6 text-white sm:p-7">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.32em] text-[var(--color-bronze-soft)]">
                  Search lens
                </p>
                <div className="mt-5 grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
                  {[
                    ["4", "core enclaves tracked with block-level attention"],
                    ["Lifestyle", "fit reviewed before pricing nuances"],
                    ["Daily use", "commute, pace, and rituals weighed early"],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      className="stat-tile rounded-[22px] border border-white/10 bg-white/6 p-4"
                    >
                      <p className="font-display text-3xl leading-none text-white">
                        {value}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/68">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {neighborhoods.map((neighborhood, index) => (
              <NeighborhoodCard
                key={neighborhood.name}
                neighborhood={neighborhood}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
