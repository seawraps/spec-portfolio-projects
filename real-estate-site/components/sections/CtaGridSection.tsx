import Image from "next/image";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function CtaGridSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <Container>
        <div className="section-shell rounded-[40px] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
          <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
            <article className="image-reveal reveal-up relative min-h-[360px] overflow-hidden rounded-[34px] delay-1">
              <Image
                src="/images/listing-estate.jpg"
                alt="A premium estate exterior used as the backdrop for the valuation call to action."
                fill
                sizes="(min-width: 1280px) 52vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10171d]/84 via-[#10171d]/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-white sm:p-10">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[var(--color-bronze-soft)]">
                  Home Valuation
                </p>
                <h2 className="mt-4 max-w-md font-display text-5xl leading-[0.94] text-white">
                  Curious what your home could command in this market?
                </h2>
                <p className="mt-4 max-w-xl text-base leading-8 text-white/72">
                  Request a private valuation session to review pricing range,
                  timing, and the updates most likely to strengthen your launch.
                </p>
                <div className="mt-6">
                  <ButtonLink href="/contact" variant="light">
                    Request A Valuation
                  </ButtonLink>
                </div>
              </div>
            </article>

            <div className="grid gap-6">
              <article className="image-reveal reveal-up relative min-h-[260px] overflow-hidden rounded-[34px] delay-2">
                <Image
                  src="/images/contact-consultation.jpg"
                  alt="A refined luxury interior used as the backdrop for the consultation call to action."
                  fill
                  sizes="(min-width: 1280px) 38vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10171d]/84 via-[#10171d]/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-white sm:p-10">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[var(--color-bronze-soft)]">
                    Consultation
                  </p>
                  <h2 className="mt-4 max-w-md font-display text-5xl leading-[0.94] text-white">
                    Planning a move in the next year?
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-8 text-white/72">
                    Book a conversation to talk through neighborhoods, pricing,
                    timing, and what kind of representation would actually
                    support your next step.
                  </p>
                  <div className="mt-6">
                    <ButtonLink href="/contact" variant="light">
                      Book A Consultation
                    </ButtonLink>
                  </div>
                </div>
              </article>

              <div className="soft-card reveal-up delay-3 rounded-[30px] p-6 sm:p-7">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-bronze)]">
                  Planning note
                </p>
                <h2 className="mt-4 font-display text-4xl leading-[0.94] text-[var(--color-ink)]">
                  Start early enough to make better decisions.
                </h2>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  The best outcomes usually come from better sequencing:
                  valuation first, improvement decisions second, then launch or
                  acquisition strategy once the timing is clear.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {["Pricing review", "Launch timing"].map((item) => (
                    <div
                      key={item}
                      className="rounded-[22px] border border-[var(--color-line)] bg-[var(--color-cream)] px-4 py-4 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted-strong)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
