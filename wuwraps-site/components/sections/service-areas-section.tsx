import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { serviceAreas } from "@/lib/data";

export function ServiceAreasSection() {
  return (
    <section className="border-b-[4px] border-[var(--color-ink)] py-16 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Where We Wrap"
            title="Serving Renton, Seattle & the Puget Sound."
            description="Based in the Renton Highlands and wrapping vehicles for drivers and businesses all across the greater Seattle area."
          />
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-3">
          {serviceAreas.map((area, index) => (
            <Reveal key={area} delay={index * 30}>
              <span className="comic-heavy inline-flex items-center border-[2.5px] border-[var(--color-ink)] bg-[var(--color-surface)] px-4 py-2 text-[0.74rem] tracking-[0.08em] text-[var(--color-ink)] shadow-[3px_3px_0_0_var(--color-ink)]">
                {area}
              </span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
