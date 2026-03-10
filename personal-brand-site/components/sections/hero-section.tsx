import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { heroStats, siteConfig } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="section-shell overflow-hidden pt-12 sm:pt-16 md:pt-20 lg:pt-24">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="reveal-up">
          <span className="eyebrow">Editorial Brand Studio</span>

          <div className="mt-6 flex flex-wrap gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-mocha/76">
            <span>{siteConfig.location}</span>
            <span className="h-1 w-1 self-center rounded-full bg-plum" />
            <span>Keynotes</span>
            <span className="h-1 w-1 self-center rounded-full bg-plum" />
            <span>Advisory</span>
            <span className="h-1 w-1 self-center rounded-full bg-plum" />
            <span>Media Partnerships</span>
          </div>

          <h1 className="mt-6 max-w-4xl text-balance text-[3.7rem] text-ink sm:text-[5rem] lg:text-[6.8rem]">
            Build a personal brand people want to quote, book, and pass around.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-mocha/92 sm:text-lg">
            I help founders, authors, and expert-led teams shape the public version of their expertise so it feels
            warmer, sharper, and more commercially useful across keynote rooms, podcasts, and flagship content.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" className="w-full sm:w-auto" arrow>
              Start an Inquiry
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary" className="w-full sm:w-auto" arrow>
              Explore Offerings
            </ButtonLink>
          </div>

          <div className="mt-10 grid gap-4 border-t border-ink/10 pt-6 sm:grid-cols-2">
            {heroStats.map((stat) => (
              <article key={stat.label} className="border-b border-ink/8 pb-4 last:border-b-0 sm:last:border-b">
                <p className="text-3xl leading-none text-ink sm:text-[2.15rem]">{stat.value}</p>
                <p className="mt-3 max-w-xs text-sm leading-6 text-mocha/84">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative reveal-up-delay lg:pl-10">
          <div className="absolute -top-6 left-10 hidden h-28 w-28 rounded-full bg-gold/18 blur-3xl md:block" />
          <div className="absolute bottom-16 right-0 hidden h-32 w-32 rounded-full bg-plum/15 blur-3xl md:block" />

          <div className="media-frame grain relative aspect-[4/4.8] overflow-hidden rounded-[2.4rem]">
            <Image
              src="/images/nadia-desk-portrait.jpg"
              alt="Nadia Vale seated at a desk in a bright editorial workspace."
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
              priority
            />

            <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-7">
              <div className="max-w-md rounded-[1.6rem] border border-white/14 bg-[rgb(31_20_17/0.62)] p-5 text-white backdrop-blur-md">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/72">
                  Signature Positioning
                </p>
                <p className="mt-3 text-xl leading-7 sm:text-2xl sm:leading-8">
                  Make expertise feel authored enough to travel from stage introduction to sales conversation.
                </p>
              </div>
            </div>
          </div>

          <div className="note-card drift absolute -top-5 right-0 z-10 hidden w-64 p-5 lg:block">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-mocha/72">
              Now Booking
            </p>
            <p className="mt-3 text-xl text-ink">Fall speaking dates and selective advisory partnerships.</p>
            <p className="mt-3 text-sm leading-6 text-mocha/84">
              Best fit for teams that want sharp ideas with editorial polish, not generic inspiration theater.
            </p>
          </div>

          <div className="paper-panel reveal-up-late relative z-10 -mt-10 ml-auto w-[82%] p-5 sm:p-6 lg:-mt-20 lg:mr-12 lg:w-[58%]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-mocha/72">
                  In the room
                </p>
                <h2 className="mt-2 text-2xl text-ink sm:text-[2.2rem]">Keynotes, workshops, and founder sessions.</h2>
              </div>
              <div className="hidden h-14 w-px bg-ink/10 sm:block" />
              <p className="hidden max-w-[10rem] text-sm leading-6 text-mocha/84 sm:block">
                Message work that holds up under real questions and real attention.
              </p>
            </div>

            <div className="mt-5 media-frame aspect-[4/2.7] rounded-[1.5rem]">
              <Image
                src="/images/nadia-workshop.jpg"
                alt="Nadia Vale facilitating a workshop in a conference room."
                fill
                sizes="(min-width: 1024px) 26vw, 80vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
