import Image from "next/image";
import type { CSSProperties } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { bookingSignals, expertiseLanes } from "@/lib/data";

export function ExpertiseSection() {
  return (
    <section id="expertise" className="anchor-section section-shell">
      <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="space-y-6 lg:sticky lg:top-28">
          <SectionHeading
            eyebrow="Why People Book"
            title="The best personal brands read like one clear author across stage, screen, and sales."
            description="The work sits between editorial direction, strategic positioning, and live delivery support so the public version of the expertise feels coherent wherever someone meets it."
          />

          <div className="paper-panel overflow-hidden p-5 sm:p-6">
            <div className="grid gap-5 sm:grid-cols-[0.9fr_1.1fr] sm:items-center">
              <div className="media-frame image-lift aspect-[4/5] rounded-[1.8rem]">
                <Image
                  src="/images/nadia-whiteboard-portrait.jpg"
                  alt="Nadia Vale standing in front of a whiteboard in an editorial workspace."
                  fill
                  sizes="(min-width: 1024px) 24vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-mocha/72">
                  Editorial Lens
                </p>
                <p className="mt-4 text-xl leading-8 text-ink sm:text-2xl">
                  The message has to survive the intro, the keynote, the clip, and the buyer&apos;s follow-up question.
                </p>
                <p className="mt-4 text-sm leading-7 text-mocha/86">
                  That is why the studio focuses on voice, rhythm, and commercial clarity at the same time.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          {expertiseLanes.map((lane, index) => (
            <article
              key={lane.title}
              className={index === 1 ? "ink-panel sequence-card p-7 sm:p-8" : "paper-panel sequence-card p-7 sm:p-8"}
              style={{ "--sequence-index": index + 1 } as CSSProperties}
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <p
                    className={
                      index === 1
                        ? "text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/62"
                        : "text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-plum"
                    }
                  >
                    {lane.label}
                  </p>
                  <h3 className={index === 1 ? "mt-4 text-4xl text-white" : "mt-4 text-4xl text-ink"}>
                    {lane.title}
                  </h3>
                  <p className={index === 1 ? "mt-4 text-base leading-8 text-white/78" : "mt-4 text-base leading-8 text-mocha/92"}>
                    {lane.description}
                  </p>
                </div>

                <div
                  className={
                    index === 1
                      ? "rounded-[1.5rem] border border-white/10 bg-white/6 px-5 py-4 text-sm leading-7 text-white/76 lg:max-w-xs"
                      : "rounded-[1.5rem] border border-ink/8 bg-white/72 px-5 py-4 text-sm leading-7 text-mocha/86 lg:max-w-xs"
                  }
                >
                  <p className={index === 1 ? "font-semibold uppercase tracking-[0.2em] text-gold" : "font-semibold uppercase tracking-[0.2em] text-mocha/68"}>
                    Signature Move
                  </p>
                  <p className="mt-3">{lane.signatureMove}</p>
                </div>
              </div>

              <div className={index === 1 ? "mt-6 editorial-divider-dark" : "mt-6 editorial-divider"} />

              <p className={index === 1 ? "mt-6 text-sm leading-7 text-white/82" : "mt-6 text-sm leading-7 text-mocha/88"}>
                {lane.result}
              </p>
            </article>
          ))}

          <div className="paper-panel p-7 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-mocha/72">
                  Booking Signals
                </p>
                <h3 className="mt-4 text-4xl text-ink">Built for people who need a real yes, not casual interest.</h3>
              </div>
              <ButtonLink href="/contact" arrow>
                Request availability
              </ButtonLink>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {bookingSignals.map((signal) => (
                <div key={signal} className="rounded-[1.5rem] border border-ink/8 bg-white/70 px-4 py-4 text-sm leading-7 text-mocha/86">
                  {signal}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
