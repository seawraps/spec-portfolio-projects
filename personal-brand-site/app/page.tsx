import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";

import { EngagementDetailReveal } from "@/components/home/engagement-detail-reveal";
import { FeaturedIdeasSlider } from "@/components/home/featured-ideas-slider";
import { NewsletterSignup } from "@/components/forms/newsletter-signup";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/data";
import {
  editorialStats,
  essayPreviews,
  mediaAppearances,
  signatureFrameworks,
  trustedBy,
} from "@/lib/home-data";
import { buildMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata(
  "Speaker, Advisor, and Editorial Voice",
  "Nadia Vale is a keynote speaker and editorial advisor helping founders and expert-led brands build a more authored public presence.",
  "/",
);

type SectionIntroProps = {
  label: string;
  title: ReactNode;
  copy: ReactNode;
  className?: string;
  titleClassName?: string;
  copyClassName?: string;
};

function SectionIntro({
  label,
  title,
  copy,
  className,
  titleClassName,
  copyClassName,
}: SectionIntroProps) {
  return (
    <div className={cn("section-intro-grid", className)}>
      <div className="section-intro-label min-w-0">
        <span className="editorial-label">{label}</span>
      </div>

      <div className="section-intro-title min-w-0">
        <h2
          className={cn(
            "text-[3.05rem] leading-[0.92] text-ink sm:text-[4rem] lg:text-[4.85rem]",
            titleClassName,
          )}
        >
          {title}
        </h2>
      </div>

      <div className={cn("section-intro-copy min-w-0", copyClassName)}>
        <p className="text-base leading-8 text-mocha/90 sm:text-lg">{copy}</p>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden pb-8 pt-8 sm:pb-10 sm:pt-10 lg:pb-12 lg:pt-12">
        <Container className="grid gap-10 min-[900px]:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] min-[900px]:items-start">
          <div className="reveal-up min-w-0 max-w-2xl min-[900px]:pt-6 xl:pt-8">
            <span className="editorial-label">Speaker, advisor, editorial voice</span>

            <h1 className="mt-6 max-w-[10ch] text-[4.2rem] leading-[0.9] text-ink sm:text-[5.35rem] lg:text-[6.7rem]">
              Authority that sounds like a person in the room.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-mocha/92 sm:text-lg">
              Nadia Vale helps founders, authors, and expert-led teams shape the words, frameworks, and room presence
              that make expertise easier to trust, repeat, and book.
            </p>
            <p className="mt-4 max-w-xl text-base leading-8 text-mocha/86">
              The work sits between keynote development, editorial advisory, and premium media positioning, with a
              steady focus on clarity, cadence, and a public point of view that feels unmistakably human.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact?type=speaking" arrow>
                Request keynote availability
              </ButtonLink>
              <ButtonLink href="/contact?type=advisory" variant="secondary">
                Start an advisory note
              </ButtonLink>
            </div>

            <div className="mt-10 grid gap-5 border-t border-ink/10 pt-6 sm:grid-cols-3">
              {editorialStats.map((stat) => (
                <article key={stat.label} className="border-b border-ink/10 pb-5 sm:border-b-0 sm:pb-0">
                  <p className="text-[2.5rem] leading-none text-ink sm:text-[2.9rem]">{stat.value}</p>
                  <p className="mt-3 max-w-[16rem] text-sm leading-7 text-mocha/82">{stat.label}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="reveal-up-delay min-w-0 grid gap-5 min-[900px]:pl-3 xl:pl-6">
            <figure className="editorial-frame overflow-hidden">
              <div className="relative aspect-[4/5.05] bg-[#eadfd2] sm:aspect-[4/4.35] min-[900px]:aspect-[4/4.65] xl:aspect-[4/4.55]">
                <Image
                  src="/images/nadia-desk-portrait.jpg"
                  alt="Nadia Vale seated at a desk in a bright editorial workspace."
                  fill
                  priority
                  sizes="(min-width: 1280px) 40vw, 100vw"
                  className="object-cover object-[56%_24%] image-clarify"
                />
              </div>

              <figcaption className="grid gap-5 border-t border-ink/10 px-5 py-5 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
                <div>
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-mocha/68">
                    Editorial booking desk
                  </p>
                  <p className="mt-3 max-w-xl text-lg leading-8 text-ink sm:text-[1.75rem] sm:leading-9">
                    Speaking, selective advisory, and media-facing strategy for people whose name is now part of the
                    trust equation.
                  </p>
                </div>

                <div className="border-t border-ink/10 pt-4 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-mocha/68">
                    Booking clarity
                  </p>
                  <p className="mt-3 text-sm leading-7 text-mocha/86">
                    Nadia shares speaking fit, advisory openings, and topic direction once the audience, timing, and
                    desired shift are clear.
                  </p>
                </div>
              </figcaption>
            </figure>

            <div className="grid items-start gap-5 min-[900px]:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
              <div className="min-w-0 border-t border-ink/10 pt-4">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-mocha/68">Based in Brooklyn</p>
                <p className="mt-3 max-w-md text-sm leading-7 text-mocha/84">
                  Keynotes, workshops, leadership offsites, and editorial strategy engagements shaped with the same
                  care as a premium byline or a well-run room.
                </p>
              </div>

              <aside className="min-w-0 bg-[#6e433d] px-5 py-5 text-white shadow-[0_28px_60px_-40px_rgba(72,31,27,0.66)] sm:px-6 sm:py-6">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-white/68">A line Nadia repeats</p>
                <p className="mt-4 font-display text-[2.15rem] italic leading-[1.02] text-white sm:text-[2.75rem]">
                  The room remembers the sentence before it remembers the slide.
                </p>
              </aside>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-8 sm:pb-10">
        <Container>
          <div className="border-y border-ink/10 py-5">
            <div className="grid gap-5 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1.58fr)] lg:items-center">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-mocha/66">
                Trusted by rooms, leadership teams, and media brands that want substance with poise
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm uppercase tracking-[0.18em] text-mocha/82">
                {trustedBy.map((name) => (
                  <span key={name}>{name}</span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell pt-6 sm:pt-8 lg:pt-10">
        <Container className="grid gap-10 min-[900px]:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] min-[900px]:items-start">
          <div className="min-w-0">
            <span className="editorial-label">A more authored presence</span>
            <h2 className="mt-6 max-w-[11ch] text-[3.1rem] leading-[0.93] text-ink sm:text-[4.1rem] lg:text-[5rem]">
              A personal platform should read like a body of work, not a brochure.
            </h2>
            <div className="mt-6 max-w-xl space-y-4 text-base leading-8 text-mocha/90">
              <p>
                Nadia&apos;s approach starts with the thesis. The strongest public brands are easier to introduce because
                the idea at the center is already clear, already shaped, and already grounded in lived work.
              </p>
              <p>
                From there, the site, the keynote, the interview, and the follow-up conversation can finally sound like
                one mind rather than four disconnected channels dressed in the same palette.
              </p>
            </div>
          </div>

          <div className="min-w-0 grid gap-5">
            <figure className="editorial-frame overflow-hidden">
              <div className="relative aspect-[4/3.15] bg-[#e9ddd0]">
                <Image
                  src="/images/nadia-whiteboard-portrait.jpg"
                  alt="Nadia Vale standing in front of a whiteboard in an editorial workspace."
                  fill
                  sizes="(min-width: 1280px) 44vw, 100vw"
                  className="object-cover object-[58%_34%]"
                />
              </div>
              <figcaption className="grid gap-4 border-t border-ink/10 px-5 py-5 sm:px-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-mocha/68">
                  Nadia works where messaging, delivery, and business context overlap.
                </p>
                <p className="text-sm leading-7 text-mocha/86">
                  The framing is editorial, but the standard is operational. The work has to hold on stage, in a
                  leadership meeting, in a press conversation, and in the quiet moment when a serious buyer decides
                  whether to lean in.
                </p>
              </figcaption>
            </figure>

            <div className="grid gap-5 md:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)]">
              <div className="border-t border-ink/10 pt-5">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-mocha/66">
                  What clients usually need
                </p>
                <p className="mt-3 text-lg leading-8 text-ink">
                  Fewer borrowed phrases. More language the market can carry forward without diluting.
                </p>
              </div>

              <div className="border-t border-ink/10 pt-5">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-mocha/66">What changes</p>
                <p className="mt-3 text-sm leading-7 text-mocha/86">
                  Introductions get easier. Interviews get sharper. The homepage starts sounding like the same person
                  people meet in the room. Visibility stops feeling decorative and starts feeling like leverage.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="speaking" className="anchor-section section-shell pt-0">
        <Container>
          <SectionIntro
            label="Recent rooms and signature ideas"
            title="Talks, interviews, and workshops built to leave a sentence behind."
            copy="Nadia's speaking work is designed to feel elegant in the room, quotable in the recap, and genuinely useful to the conversation that follows."
            titleClassName="max-w-[14ch]"
          />

          <div className="mt-10 min-[1100px]:mt-12">
            <FeaturedIdeasSlider />
          </div>
        </Container>
      </section>

      <section id="advisory" className="anchor-section section-shell pt-0">
        <Container>
          <SectionIntro
            label="Ways to work together"
            title="Advisory, speaking, and media support with one editorial center."
            copy="The format changes depending on the room. The through-line does not: sharper language, steadier presence, and a public story that makes serious introductions easier."
            titleClassName="max-w-[14ch]"
          />

          <div className="mt-10 min-[1100px]:mt-12">
            <EngagementDetailReveal />
          </div>

          <div className="mt-10 border-y border-ink/10">
            <div className="grid gap-6 py-7 md:grid-cols-3 md:gap-8">
              {signatureFrameworks.map((framework, index) => (
                <article
                  key={framework.title}
                  className={index < signatureFrameworks.length - 1 ? "md:border-r md:border-ink/10 md:pr-8" : ""}
                >
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-plum">
                    {framework.index}
                  </p>
                  <h3 className="mt-4 text-[2rem] leading-8 text-ink">{framework.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-mocha/88">{framework.description}</p>
                  <p className="mt-5 border-t border-ink/10 pt-4 text-sm leading-7 text-mocha/78">{framework.signal}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="media" className="anchor-section section-shell pt-0">
        <Container className="grid gap-10 min-[900px]:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)] min-[900px]:items-start">
          <div className="min-w-0">
            <span className="editorial-label">Media and appearances</span>
            <h2 className="mt-6 max-w-[9ch] text-[3.05rem] leading-[0.92] text-ink sm:text-[4rem] lg:text-[4.85rem]">
              A presence that can travel across bylines, interviews, and live rooms.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-mocha/90 sm:text-lg">
              Nadia moves between keynote stages, editorial notes, podcast microphones, and workshop rooms without
              losing the thread of the argument or the humanity in the delivery.
            </p>

            <div className="mt-8 bg-[#2d211d] px-6 py-6 text-white shadow-[0_32px_70px_-42px_rgba(23,14,11,0.78)] sm:px-7 sm:py-7">
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-white/64">
                From producers and hosts
              </p>
              <p className="mt-4 font-display text-[2rem] italic leading-[1.02] text-white sm:text-[2.55rem]">
                Nadia gives a room one line to carry home and one reason to keep the conversation going after the room.
              </p>
            </div>
          </div>

          <div className="min-w-0 border-t border-ink/10">
            {mediaAppearances.map((appearance) => (
              <article
                key={appearance.title}
                className="grid gap-4 border-b border-ink/10 py-6 min-[900px]:grid-cols-[minmax(0,0.28fr)_minmax(0,1fr)]"
              >
                <div>
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-plum">
                    {appearance.format}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-mocha/72">{appearance.outlet}</p>
                </div>
                <div>
                  <h3 className="text-[1.75rem] leading-8 text-ink sm:text-[2rem]">{appearance.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-mocha/86">{appearance.note}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="newsletter" className="anchor-section section-shell pt-0">
        <Container className="grid gap-10 min-[900px]:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] min-[900px]:items-start">
          <div className="min-w-0">
            <span className="editorial-label">Newsletter and essay preview</span>
            <h2 className="mt-6 max-w-[11ch] text-[3.05rem] leading-[0.92] text-ink sm:text-[4rem] lg:text-[4.85rem]">
              Notes on authority, cadence, and how expert brands become legible.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-mocha/90 sm:text-lg">
              {siteConfig.newsletterName} is where Nadia publishes short editorial notes on messaging, public presence,
              and the kind of small decisions that make a premium brand feel fully authored.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {essayPreviews.map((essay) => (
                <article key={essay.title} className="editorial-frame flex h-full flex-col gap-4 px-5 py-5 sm:px-6">
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-mocha/68">{essay.label}</p>
                  <h3 className="text-[1.85rem] leading-8 text-ink">{essay.title}</h3>
                  <p className="text-sm leading-7 text-mocha/86">{essay.summary}</p>
                  <p className="mt-2 pt-2 text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-plum">
                    Editorial preview
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="min-w-0 self-start bg-[#2d211d] px-6 py-7 text-white shadow-[0_36px_80px_-48px_rgba(22,12,10,0.82)] sm:px-8 sm:py-9">
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-white/64">Join the note</p>
            <h3 className="mt-4 font-display text-[3rem] leading-[0.94] text-white sm:text-[3.8rem]">
              {siteConfig.newsletterName}
            </h3>
            <p className="mt-4 max-w-xl text-base leading-8 text-white/80">{siteConfig.newsletterBlurb}</p>

            <div className="mt-8 border-t border-white/12 pt-6">
              <NewsletterSignup />
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-white/12 pt-6 sm:flex-row">
              <ButtonLink
                href="/contact?type=partnership"
                variant="secondary"
                className="border-white/14 bg-white text-ink hover:bg-paper-soft"
                arrow
              >
                Invite Nadia for a conversation
              </ButtonLink>
              <ButtonLink
                href="/about"
                variant="secondary"
                className="border-white/16 bg-white/8 text-white hover:bg-white/14 hover:text-white"
              >
                Read the background
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
