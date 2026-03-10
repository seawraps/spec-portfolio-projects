import Image from "next/image";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function CtaGridSection() {
  return (
    <section className="py-14 md:py-18 lg:py-24">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="image-reveal reveal-up relative min-h-[320px] overflow-hidden rounded-[34px] delay-1">
            <Image
              src="/images/listing-estate.jpg"
              alt="A premium estate exterior used as the backdrop for the valuation call to action."
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
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

          <article className="image-reveal reveal-up relative min-h-[320px] overflow-hidden rounded-[34px] delay-2">
            <Image
              src="/images/contact-consultation.jpg"
              alt="A refined luxury interior used as the backdrop for the consultation call to action."
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
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
                timing, and what kind of representation would actually support
                your next step.
              </p>
              <div className="mt-6">
                <ButtonLink href="/contact" variant="light">
                  Book A Consultation
                </ButtonLink>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
