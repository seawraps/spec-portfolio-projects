import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { positioningPillars } from "@/lib/data";

export function PositioningSection() {
  return (
    <section className="section-shell">
      <Container>
        <SectionHeading
          eyebrow="Positioning"
          title="A personal brand should do more than look polished."
          description="It should carry a real point of view, create demand before you pitch, and give people a sharper way to introduce your work."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {positioningPillars.map((pillar, index) => (
            <article key={pillar.title} className="surface-card h-full p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-clay/18 text-sm font-bold uppercase tracking-[0.2em] text-rose">
                0{index + 1}
              </div>
              <h2 className="mt-6 text-3xl text-ink">{pillar.title}</h2>
              <p className="mt-4 text-sm leading-7 text-ink/72">{pillar.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
