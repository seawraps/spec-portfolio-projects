import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { serviceAreas } from "@/lib/data";

export function ServiceAreasSection() {
  return (
    <section className="border-b border-[var(--color-line)] py-16 lg:py-24">
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
              <span className="comic-heavy inline-flex items-center border border-[var(--color-line-strong)] bg-[var(--color-surface)] px-4 py-2 text-[0.74rem] tracking-[0.08em] text-[var(--color-ink)] shadow-[0_14px_30px_-18px_rgba(20,19,26,0.5)]">
                {area}
              </span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
