import type { CSSProperties } from "react";

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
    <section id="offerings" className={compact ? "section-shell" : "section-shell pt-4 md:pt-6 lg:pt-8"}>
      {compact ? (
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Offerings"
              title="High-touch offers for people whose name is becoming part of the business."
              description="Each engagement is built to sharpen the story, upgrade the visual and verbal rhythm, and make the public-facing version of the work easier to trust."
            />
            <ButtonLink href="/services" variant="secondary" arrow className="shrink-0">
              View all offerings
            </ButtonLink>
          </div>

          <div className="mt-10 grid gap-5 xl:grid-cols-3">
            {visibleOfferings.map((offering, index) => {
              const featured = index === 1;

              return (
                <article
                  key={offering.title}
                  className={featured ? "ink-panel sequence-card p-7 sm:p-8" : "paper-panel sequence-card p-7 sm:p-8"}
                  style={{ "--sequence-index": index + 1 } as CSSProperties}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <p
                      className={
                        featured
                          ? "text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/62"
                          : "text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-mocha/72"
                      }
                    >
                      Offer 0{index + 1}
                    </p>
                    <span
                      className={
                        featured
                          ? "rounded-full border border-white/12 bg-white/10 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-white/84"
                          : "rounded-full border border-ink/10 bg-paper-deep/55 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-ink"
                      }
                    >
                      {offering.investment}
                    </span>
                  </div>

                  <h3 className={featured ? "mt-5 text-4xl text-white" : "mt-5 text-4xl text-ink"}>
                    {offering.title}
                  </h3>
                  <p className={featured ? "mt-4 text-base leading-8 text-white/78" : "mt-4 text-base leading-8 text-mocha/92"}>
                    {offering.summary}
                  </p>

                  <div
                    className={
                      featured
                        ? "mt-5 rounded-[1.45rem] border border-white/12 bg-white/8 px-4 py-4 text-sm leading-7 text-white/76"
                        : "mt-5 rounded-[1.45rem] border border-ink/8 bg-white/70 px-4 py-4 text-sm leading-7 text-mocha/86"
                    }
                  >
                    <p
                      className={
                        featured
                          ? "text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-gold"
                          : "text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-mocha/68"
                      }
                    >
                      Best Fit
                    </p>
                    <p className="mt-3">{offering.bestFit}</p>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {offering.deliverables.slice(0, 3).map((item) => (
                      <li
                        key={item}
                        className={
                          featured
                            ? "flex gap-3 rounded-[1.25rem] border border-white/10 bg-white/6 px-4 py-3 text-sm leading-7 text-white/76"
                            : "flex gap-3 rounded-[1.25rem] border border-ink/8 bg-white/60 px-4 py-3 text-sm leading-7 text-mocha/88"
                        }
                      >
                        <span className={featured ? "mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" : "mt-2 h-2 w-2 shrink-0 rounded-full bg-plum"} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={featured ? "mt-6 editorial-divider-dark" : "mt-6 editorial-divider"} />

                  <p className={featured ? "mt-5 text-sm leading-7 text-white/76" : "mt-5 text-sm leading-7 text-mocha/84"}>
                    {offering.spotlight}
                  </p>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <ButtonLink
                      href={`/contact?type=${offering.inquiryType}`}
                      variant={featured ? "secondary" : "primary"}
                      className={featured ? "border-white/16 bg-white text-ink hover:bg-paper-soft" : undefined}
                      arrow
                    >
                      Ask about this offer
                    </ButtonLink>
                    <ButtonLink
                      href="/contact"
                      variant="ghost"
                      className={featured ? "text-white hover:text-white" : undefined}
                      arrow
                    >
                      Request a custom scope
                    </ButtonLink>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      ) : (
        <Container className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="space-y-6 lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Offerings"
              title="Four ways to work together."
              description="Each engagement is built to sharpen the story, upgrade the visual and verbal rhythm, and make the public-facing version of the work easier to trust."
            />

            <div className="ink-panel p-6 sm:p-7">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/62">
                Scope Signals
              </p>
              <div className="mt-4 space-y-3 text-sm leading-7 text-white/76">
                <p>Clear recommendations and narrative direction, not decorative copy polish.</p>
                <p>Designed for leaders, brands, and rooms where reputation has commercial weight.</p>
                <p>Each scope can flex into workshop, advisory, or speaker-support formats as needed.</p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {visibleOfferings.map((offering, index) => (
              <article
                key={offering.title}
                className="paper-panel sequence-card overflow-hidden p-6 sm:p-8"
                style={{ "--sequence-index": index + 1 } as CSSProperties}
              >
                <div className="grid gap-7 xl:grid-cols-[0.58fr_1.42fr]">
                  <div className="space-y-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-mocha/72">
                        Offer 0{index + 1}
                      </p>
                      <p className="rounded-full border border-ink/10 bg-paper-deep/55 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink">
                        {offering.investment}
                      </p>
                    </div>

                    <div className="rounded-[1.45rem] border border-ink/8 bg-white/72 p-5">
                      <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-mocha/68">
                        Format
                      </p>
                      <p className="mt-3 text-base text-ink">{offering.format}</p>
                    </div>

                    <div className="rounded-[1.45rem] border border-ink/8 bg-paper-deep/48 p-5">
                      <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-mocha/68">
                        When it lands best
                      </p>
                      <p className="mt-3 text-sm leading-7 text-mocha/88">{offering.result}</p>
                    </div>

                    <p className="rounded-[1.35rem] border border-ink/8 bg-white/70 px-4 py-4 text-sm leading-7 text-mocha/86">
                      {offering.spotlight}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-4xl text-ink sm:text-[3rem]">{offering.title}</h3>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-mocha/92">{offering.summary}</p>
                    <p className="mt-5 text-sm leading-7 text-mocha/84">
                      Best fit:
                      {" "}
                      {offering.bestFit}
                    </p>

                    <ul className="mt-6 grid gap-3 text-sm leading-7 text-mocha/88 sm:grid-cols-2">
                      {offering.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 rounded-[1.25rem] border border-ink/8 bg-white/60 px-4 py-3"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-plum" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                      <ButtonLink href={`/contact?type=${offering.inquiryType}`} arrow>
                        Ask about this offer
                      </ButtonLink>
                      <ButtonLink href="/contact" variant="ghost" arrow>
                        Request a custom scope
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      )}
    </section>
  );
}
