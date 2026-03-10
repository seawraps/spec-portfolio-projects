import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { bookingSignals, siteConfig } from "@/lib/data";

export function PartnershipCtaSection() {
  return (
    <section id="booking" className="section-shell">
      <Container>
        <div className="ink-panel overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[1.04fr_0.96fr] lg:items-stretch">
            <div className="order-2 px-6 py-8 sm:px-8 sm:py-10 lg:order-1 lg:px-10 lg:py-12">
              <span className="eyebrow border-white/12 bg-white/8 text-white/74">Partnerships and Booking</span>
              <h2 className="mt-5 max-w-3xl text-4xl text-white sm:text-5xl lg:text-[4rem]">
                Need a keynote, workshop, or media-ready partner presence that still feels human?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/80">
                I collaborate with founder-led brands, conference teams, and premium partners that care about clear
                ideas, strong rooms, and polished public-facing execution.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {bookingSignals.map((signal) => (
                  <div
                    key={signal}
                    className="rounded-[1.35rem] border border-white/12 bg-white/6 px-4 py-4 text-sm leading-7 text-white/76"
                  >
                    {signal}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink
                  href="/contact?type=speaking"
                  variant="secondary"
                  className="border-white bg-white text-ink hover:bg-paper-soft"
                  arrow
                >
                  Request availability
                </ButtonLink>
                <ButtonLink
                  href="/services"
                  variant="secondary"
                  arrow
                  className="border-white/20 bg-white/12 text-white hover:bg-white/18 hover:text-white"
                >
                  Review the offers
                </ButtonLink>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm leading-7 text-white/74">
                <span className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-white/56">
                  Direct contact
                </span>
                <a className="font-semibold text-white hover:text-gold" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
                <span className="hidden text-white/26 sm:inline">/</span>
                <span>{siteConfig.location}</span>
              </div>
            </div>

            <div className="order-1 relative min-h-[22rem] overflow-hidden lg:order-2 lg:min-h-full">
              <Image
                src="/images/nadia-workshop.jpg"
                alt="Nadia Vale leading a workshop for a group around a conference table."
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(18_12_10/0.76)] via-[rgb(18_12_10/0.18)] to-transparent lg:bg-gradient-to-l lg:from-[rgb(18_12_10/0.1)] lg:via-transparent lg:to-[rgb(18_12_10/0.52)]" />

              <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6 lg:p-8">
                <div className="max-w-md rounded-[1.7rem] border border-white/12 bg-[rgb(17_11_10/0.56)] p-5 text-white backdrop-blur-md">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-white/62">
                    Best in the room
                  </p>
                  <p className="mt-3 text-lg leading-8 text-white/84">
                    Strong for conferences, founder offsites, partnership launches, and premium community rooms that
                    need substance with polish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
