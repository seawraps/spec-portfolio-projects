import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { heroStats, siteConfig } from "@/lib/data";

const audienceNotes = [
  {
    label: "For founders",
    copy: "Clarify the point of view that should travel from homepage to intro to investor dinner.",
  },
  {
    label: "For event teams",
    copy: "Book keynote rooms and workshops that sound intelligent, human, and worth repeating afterward.",
  },
  {
    label: "For media brands",
    copy: "Package trust into sponsor stories and premium offers without losing the voice people showed up for.",
  },
];

export function HeroSection() {
  return (
    <section id="hero" className="anchor-section section-shell overflow-hidden pt-6 sm:pt-8 md:pt-10 lg:pt-12">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-start">
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

          <h1 className="mt-5 max-w-[10ch] text-[3.6rem] leading-[0.92] text-ink sm:text-[4.85rem] lg:text-[6.2rem] xl:text-[6.7rem]">
            Build the kind of personal brand people{" "}
            <span className="text-plum italic">quote in the room</span>{" "}
            and book after the room.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-8 text-mocha/92 sm:text-lg">
            I help founders, authors, and expert-led teams shape the public version of their expertise so it feels
            warmer, sharper, and more commercially useful across keynote rooms, podcasts, and flagship content.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact?type=speaking" className="w-full justify-center sm:w-auto" arrow>
              Request availability
            </ButtonLink>
            <ButtonLink
              href="/services"
              variant="secondary"
              className="w-full justify-center sm:w-auto"
              arrow
            >
              See speaking + advisory
            </ButtonLink>
          </div>

          <div className="mt-7 flex flex-wrap gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-mocha/80">
            <span className="rounded-full border border-ink/10 bg-white/72 px-4 py-2">Editorial positioning</span>
            <span className="rounded-full border border-ink/10 bg-white/72 px-4 py-2">Signature talks</span>
            <span className="rounded-full border border-ink/10 bg-white/72 px-4 py-2">Sponsor-ready packaging</span>
          </div>
        </div>

        <div className="relative reveal-up-delay lg:pl-4">
          <div className="absolute -top-4 left-10 hidden h-28 w-28 rounded-full bg-gold/18 blur-3xl md:block" />
          <div className="absolute bottom-16 right-8 hidden h-32 w-32 rounded-full bg-plum/15 blur-3xl md:block" />

          <div className="grid gap-4 md:grid-cols-[minmax(0,1.02fr)_minmax(16rem,0.98fr)]">
            <div className="media-frame portrait-reveal grain relative aspect-[4/4.95] overflow-hidden rounded-[2.8rem] md:row-span-2">
              <Image
                src="/images/nadia-desk-portrait.jpg"
                alt="Nadia Vale seated at a desk in a bright editorial workspace."
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
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

            <div className="note-card drift self-start p-5 sm:p-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-mocha/72">Now Booking</p>
              <p className="mt-3 text-xl leading-8 text-ink">
                Speaking dates, founder workshops, and selective advisory partnerships.
              </p>
              <p className="mt-3 text-sm leading-6 text-mocha/84">
                Best for teams that want sharp ideas with editorial taste, not generic inspiration theater.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-mocha/72">
                <span className="rounded-full border border-ink/10 bg-white/82 px-3 py-2">Founder offsites</span>
                <span className="rounded-full border border-ink/10 bg-white/82 px-3 py-2">Media hosts</span>
              </div>
            </div>

            <div className="paper-panel overflow-hidden p-5 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-mocha/72">
                    In the room
                  </p>
                  <h2 className="mt-2 text-2xl text-ink sm:text-[2.15rem]">Keynotes, workshops, and founder sessions.</h2>
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

            <div className="ink-panel reveal-up-late flex flex-col justify-between p-5 sm:p-6 md:col-span-2">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="max-w-xl">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/62">
                    Booking Desk
                  </p>
                  <p className="mt-4 text-lg leading-7 text-white/86">
                    Prefer events, launches, and partner moments where the message has to do real work after the
                    applause.
                  </p>
                </div>
                <ButtonLink
                  href="/contact?type=advisory"
                  variant="secondary"
                  className="border-white/16 bg-white/12 text-white hover:bg-white/18 hover:text-white"
                  arrow
                >
                  Start a booking note
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="paper-panel overflow-hidden p-6 sm:p-7 lg:p-8">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
              <div className="max-w-3xl">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-mocha/72">
                  Where the work lands
                </p>
                <h2 className="mt-4 text-3xl text-ink sm:text-[3.15rem]">
                  The site should read like one authored point of view, not a pile of services.
                </h2>
              </div>
              <p className="max-w-[30rem] text-sm leading-7 text-mocha/84">
                The cards below make the audience, the proof, and the commercial use clear without forcing the reader
                to hunt through disconnected modules.
              </p>
            </div>

            <div className="mt-7 grid gap-5 xl:grid-cols-[minmax(0,1.18fr)_minmax(0,0.82fr)] xl:items-start">
              <div className="grid auto-rows-fr gap-4 md:grid-cols-3">
                {audienceNotes.map((note) => (
                  <article key={note.label} className="note-card h-full p-5 sm:p-6">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-mocha/72">
                      {note.label}
                    </p>
                    <p className="mt-4 text-lg leading-7 text-ink">{note.copy}</p>
                  </article>
                ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {heroStats.map((stat) => (
                  <article key={stat.label} className="rounded-[1.45rem] border border-ink/8 bg-white/72 px-5 py-5">
                    <p className="text-3xl leading-none text-ink sm:text-[2.05rem]">{stat.value}</p>
                    <p className="mt-3 max-w-xs text-sm leading-6 text-mocha/84">{stat.label}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
