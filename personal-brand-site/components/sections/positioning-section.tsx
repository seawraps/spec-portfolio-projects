import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { positioningPillars } from "@/lib/data";

export function PositioningSection() {
  return (
    <section className="section-shell">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="paper-panel p-8 sm:p-10">
            <SectionHeading
              eyebrow="What Changes"
              title="A premium personal brand should feel authored, not assembled."
              description="The job is not to look more online. The job is to become easier to describe, easier to trust, and easier to book."
            />
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {positioningPillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className={index === 1 ? "ink-panel h-full p-8" : "paper-panel h-full p-8"}
              >
                <p
                  className={
                    index === 1
                      ? "text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-white/62"
                      : "text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-mocha/68"
                  }
                >
                  0{index + 1}
                </p>
                <h3 className={index === 1 ? "mt-5 text-3xl text-white" : "mt-5 text-3xl text-ink"}>
                  {pillar.title}
                </h3>
                <p className={index === 1 ? "mt-4 text-sm leading-7 text-white/76" : "mt-4 text-sm leading-7 text-mocha/88"}>
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
