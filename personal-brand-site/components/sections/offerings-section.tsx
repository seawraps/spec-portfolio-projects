import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { offerings } from "@/lib/data";

type OfferingsSectionProps = {
  compact?: boolean;
};

export function OfferingsSection({ compact = true }: OfferingsSectionProps) {
  const visibleOfferings = compact ? offerings.slice(0, 3) : offerings;

  return (
    <section className="section-shell">
      <Container className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            eyebrow="Offerings"
            title={compact ? "High-touch offers for people whose name is becoming part of the business." : "Four ways to work together."}
            description="Each engagement is built to sharpen the story, upgrade the visual and verbal rhythm, and make the public-facing version of the work easier to trust."
          />

          {compact ? (
            <ButtonLink href="/services" variant="secondary" arrow className="mt-8">
              View all offerings
            </ButtonLink>
          ) : null}
        </div>

        <div className="space-y-5">
          {visibleOfferings.map((offering, index) => (
            <article key={offering.title} className="paper-panel overflow-hidden p-6 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
                <div className="space-y-5">
                  <div className="flex items-center justify-between gap-3 lg:block">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-mocha/72">
                      Offer 0{index + 1}
                    </p>
                    <p className="rounded-full border border-ink/10 bg-paper-deep/55 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink">
                      {offering.investment}
                    </p>
                  </div>

                  <div className="editorial-divider" />

                  <div>
                    <p className="text-sm font-medium text-mocha/84">{offering.format}</p>
                    <p className="mt-4 text-sm leading-7 text-mocha/88">{offering.result}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-4xl text-ink sm:text-[3rem]">{offering.title}</h3>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-mocha/92">{offering.summary}</p>

                  <ul className="mt-6 grid gap-3 text-sm leading-7 text-mocha/88 sm:grid-cols-2">
                    {offering.deliverables.map((item) => (
                      <li key={item} className="flex gap-3 rounded-[1.25rem] border border-ink/8 bg-white/60 px-4 py-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-plum" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
