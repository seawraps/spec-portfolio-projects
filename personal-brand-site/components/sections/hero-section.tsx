import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { heroStats, siteConfig } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="section-shell overflow-hidden pt-10 sm:pt-14 md:pt-16 lg:pt-18">
      <Container className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
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

          <h1 className="mt-6 max-w-5xl text-balance text-[3.9rem] text-ink sm:text-[5.2rem] lg:text-[7rem]">
            Build the kind of personal brand people
            {" "}
            <span className="text-plum italic">quote in the room</span>
            {" "}
            and book after the room.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-mocha/92 sm:text-lg">
            I help founders, authors, and expert-led teams shape the public version of their expertise so it feels
            warmer, sharper, and more commercially useful across keynote rooms, podcasts, and flagship content.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-mocha/80">
            <span className="rounded-full border border-ink/10 bg-white/72 px-4 py-2">Editorial positioning</span>
            <span className="rounded-full border border-ink/10 bg-white/72 px-4 py-2">Signature talks</span>
            <span className="rounded-full border border-ink/10 bg-white/72 px-4 py-2">Sponsor-ready packaging</span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact?type=speaking" className="w-full sm:w-auto" arrow>
              Request availability
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary" className="w-full sm:w-auto" arrow>
              See speaking + advisory
            </ButtonLink>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <article className="note-card p-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-mocha/72">For founders</p>
              <p className="mt-3 text-lg leading-7 text-ink">
                Clarify the point of view that should travel from homepage to intro to investor dinner.
              </p>
            </article>

            <article className="note-card p-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-mocha/72">For event teams</p>
              <p className="mt-3 text-lg leading-7 text-ink">
                Book keynote rooms and workshops that sound intelligent, human, and worth repeating afterward.
              </p>
            </article>

            <article className="note-card p-5 md:col-span-1">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-mocha/72">For media brands</p>
              <p className="mt-3 text-lg leading-7 text-ink">
                Package trust into sponsor stories and premium offers without losing the voice people showed up for.
              </p>
            </article>
          </div>

          <div className="mt-10 grid gap-4 border-t border-ink/10 pt-6 sm:grid-cols-2">
            {heroStats.map((stat) => (
              <article key={stat.label} className="rounded-[1.4rem] border border-ink/8 bg-white/54 px-5 py-5">
                <p className="text-3xl leading-none text-ink sm:text-[2.15rem]">{stat.value}</p>
                <p className="mt-3 max-w-xs text-sm leading-6 text-mocha/84">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative reveal-up-delay lg:pl-10">
          <div className="absolute -top-6 left-10 hidden h-28 w-28 rounded-full bg-gold/18 blur-3xl md:block" />
          <div className="absolute bottom-16 right-0 hidden h-32 w-32 rounded-full bg-plum/15 blur-3xl md:block" />

          <div className="grid gap-5 lg:grid-cols-[0.64fr_0.36fr]">
            <div className="media-frame portrait-reveal grain relative aspect-[4/5.15] overflow-hidden rounded-[2.8rem]">
              <Image
                src="/images/nadia-desk-portrait.jpg"
                alt="Nadia Vale seated at a desk in a bright editorial workspace."
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover object-center"
                priority
              />

              <div className="absolute left-5 top-5 z-10 rounded-full border border-white/18 bg-[rgb(17_11_10/0.56)] px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-md">
                Fall keynote dates open
              </div>

              <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-7">
                <div className="max-w-lg rounded-[1.7rem] border border-white/14 bg-[rgb(31_20_17/0.62)] p-5 text-white backdrop-blur-md">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/72">
                    Signature Positioning
                  </p>
                  <p className="mt-3 text-xl leading-7 sm:text-2xl sm:leading-8">
                    Make expertise feel authored enough to travel from stage introduction to sales conversation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute right-0 top-8 z-10 hidden w-64 lg:block">
            <div className="note-card drift p-5">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-mocha/72">
                Now Booking
              </p>
              <p className="mt-3 text-xl text-ink">Speaking dates, founder workshops, and selective advisory partnerships.</p>
              <p className="mt-3 text-sm leading-6 text-mocha/84">
                Best fit for teams that want sharp ideas with editorial polish, not generic inspiration theater.
              </p>
            </div>
          </div>

          <div className="reveal-up-late relative z-10 mt-5 grid gap-5 sm:grid-cols-[0.78fr_0.22fr] lg:-mt-14 lg:ml-14">
            <div className="paper-panel overflow-hidden p-5 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-mocha/72">
                    In the room
                  </p>
                  <h2 className="mt-2 text-2xl text-ink sm:text-[2.2rem]">Keynotes, workshops, and founder sessions.</h2>
                </div>
                <p className="max-w-[13rem] text-sm leading-6 text-mocha/84">
                  Message work that holds up under real questions, real scrutiny, and real buying moments.
                </p>
              </div>

              <div className="mt-5 media-frame image-lift aspect-[4/2.55] rounded-[1.6rem]">
                <Image
                  src="/images/nadia-workshop.jpg"
                  alt="Nadia Vale facilitating a workshop in a conference room."
                  fill
                  sizes="(min-width: 1024px) 32vw, 86vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="ink-panel flex flex-col justify-between p-5 sm:p-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/62">
                Booking Desk
              </p>
              <p className="mt-4 text-lg leading-7 text-white/86">
                Prefer events, launches, and partner moments where the message has to do real work after the applause.
              </p>
              <ButtonLink href="/contact?type=advisory" variant="secondary" className="mt-6 border-white/16 bg-white/12 text-white hover:bg-white/18 hover:text-white" arrow>
                Start a booking note
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
