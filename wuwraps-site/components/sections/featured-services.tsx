import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/motion/reveal";
import { services } from "@/lib/data";

type FeaturedServicesProps = {
  /** Limit the number of services shown. */
  limit?: number;
  showCta?: boolean;
};

export function FeaturedServices({ limit, showCta = true }: FeaturedServicesProps) {
  const shown = typeof limit === "number" ? services.slice(0, limit) : services;

  return (
    <section
      id="services"
      className="halftone-blue border-b-[4px] border-[var(--color-ink)] py-16 text-[var(--color-paper)] lg:py-24"
    >
      <Container>
        <Reveal>
          <span className="comic-tag">What We Do</span>
          <h2 className="comic-display mt-5 max-w-4xl text-[2.7rem] leading-[0.92] text-[var(--color-paper)] sm:text-[3.8rem] lg:text-[4.4rem]">
            Pick your <span className="text-[var(--color-yellow)]">superpower.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-[1.02rem] leading-8 text-[rgba(251,244,226,0.88)]">
            From a full color change to a fleet of work vans, every job gets the same obsessive
            prep and factory-grade finish.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((service, index) => (
            <Reveal key={service.id} delay={index * 60}>
              <article className="comic-panel comic-panel-hover flex h-full flex-col p-6 text-[var(--color-ink)]">
                <span className="comic-heavy text-[0.7rem] tracking-[0.16em] text-[var(--color-red)]">
                  {service.issue}
                </span>
                <h3 className="comic-display mt-2 text-[1.9rem] leading-none text-[var(--color-ink)]">
                  {service.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-[var(--color-ink-soft)]">
                  {service.shortDescription}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {service.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="comic-heavy border-[2px] border-[var(--color-ink)] bg-[var(--color-yellow)] px-2 py-1 text-[0.6rem] tracking-[0.08em] text-[var(--color-ink)]"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
                <p className="comic-heavy mt-4 border-t-[2px] border-dashed border-[var(--color-ink)] pt-3 text-[0.66rem] tracking-[0.1em] text-[var(--color-blue)]">
                  {service.turnaround}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {showCta ? (
          <Reveal className="mt-12 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/services" variant="yellow">
              Full Service Lineup
            </ButtonLink>
            <ButtonLink href="/contact" variant="red">
              Get a Quote
            </ButtonLink>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
