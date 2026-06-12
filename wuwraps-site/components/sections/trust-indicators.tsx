import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { trustIndicators } from "@/lib/data";

const accents = ["comic-panel-red", "comic-panel-blue", "comic-panel-yellow", "comic-panel"];

export function TrustIndicators() {
  return (
    <section className="border-b border-[var(--color-line)] py-16 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why Wu Wraps"
            title="A Renton legend, earned one clean install at a time."
            description="No franchise gimmicks, no rushed jobs. Just 18 years of hands-on craftsmanship that made Wu Wraps the name Seattle gearheads trust."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustIndicators.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <div className={`${accents[index % accents.length]} comic-panel-hover h-full p-6`}>
                <p className="comic-display text-[2.4rem] leading-none opacity-90">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="comic-heavy mt-3 text-[1rem] leading-tight tracking-[0.04em]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
