import type { Metadata } from "next";
import Image from "next/image";

import { PartnershipCtaSection } from "@/components/sections/partnership-cta-section";
import { PageIntro } from "@/components/sections/page-intro";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  aboutValues,
  careerTimeline,
  heroStats,
  projectNote,
  speakingTopics,
  siteConfig,
} from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "About",
  "Meet Nadia Vale, an editorial advisor, speaker, and media host helping expert-led brands make their public presence feel sharper and more human.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Nadia"
        title="Editorial instincts, live-room experience, and strategy built for people whose reputation is part of the product."
        description="I built this studio around one belief: expertise should look and sound as considered as the work behind it. My job is to close the gap between what someone knows and how clearly the market can feel it."
        stats={heroStats}
      />

      <section className="section-shell">
        <Container className="grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
          <div className="space-y-5">
            <div className="media-frame relative aspect-[4/4.5] overflow-hidden rounded-[2.3rem]">
              <Image
                src="/images/nadia-whiteboard-portrait.jpg"
                alt="Nadia Vale standing in front of a whiteboard in an editorial workspace."
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="paper-panel p-6">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-mocha/72">
                Based in Brooklyn
              </p>
              <p className="mt-3 text-sm leading-7 text-mocha/88">
                Advising founder-led brands, expert businesses, and conference teams that want more authority without
                losing the humanity in the message.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <SectionHeading
              eyebrow="My Story"
              title="From editorial rooms to founder brands to keynote stages."
              description="My background sits at the intersection of media production, messaging strategy, and public-facing leadership. That combination is why the work tends to feel both polished and grounded."
            />

            <div className="space-y-5 text-base leading-8 text-mocha/92">
              <p>
                I started in environments where attention had to be earned quickly and weak phrasing got exposed fast.
                That editorial training shaped how I think about public presence now: strong ideas need rhythm, structure,
                and a voice people can actually remember.
              </p>
              <p>
                Later, I brought those instincts into founder and executive storytelling, where the personal brand often
                carries more than visibility. It carries trust, context for the company, recruiting signal, partner fit,
                and sometimes the entire emotional tone of a category.
              </p>
              <p>
                Today, I work with clients who do not need more noise. They need a clearer thesis, stronger visual and
                verbal rhythm, and a presence that feels credible in live rooms, media formats, and the quiet moments
                when a buyer is deciding whether to lean in.
              </p>
            </div>

            <div className="paper-panel p-6 sm:p-8">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-mocha/72">
                What clients usually feel
              </p>
              <p className="mt-4 text-xl leading-8 text-ink sm:text-2xl">
                “We finally sound like ourselves, just sharper and easier for other people to carry.”
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container>
          <SectionHeading
            eyebrow="Working Style"
            title="Three things I bring into every room."
            description="The studio sits somewhere between editorial direction, strategy partner, and rehearsal coach."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {aboutValues.map((value, index) => (
              <article key={value.title} className={index === 1 ? "ink-panel h-full p-8" : "paper-panel h-full p-8"}>
                <p
                  className={
                    index === 1
                      ? "text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/62"
                      : "text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-mocha/72"
                  }
                >
                  Signature Principle
                </p>
                <h3 className={index === 1 ? "mt-4 text-3xl text-white" : "mt-4 text-3xl text-ink"}>{value.title}</h3>
                <p className={index === 1 ? "mt-4 text-sm leading-7 text-white/78" : "mt-4 text-sm leading-7 text-mocha/88"}>
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <SectionHeading
              eyebrow="Timeline"
              title="A career shaped by editorial discipline and founder proximity."
              description="Each chapter sharpened the same through-line: turning sharp thinking into stories people can repeat and rooms can trust."
            />

            <div className="mt-8 space-y-4">
              {careerTimeline.map((item) => (
                <article key={item.year} className="paper-panel p-6">
                  <p className="text-sm font-semibold tracking-[0.2em] text-plum">{item.year}</p>
                  <h3 className="mt-3 text-3xl text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-mocha/88">{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="media-frame relative aspect-[4/3.1] overflow-hidden rounded-[2.1rem]">
              <Image
                src="/images/nadia-workshop.jpg"
                alt="Nadia Vale facilitating a leadership workshop around a conference table."
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="ink-panel p-8">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/62">
                Speaking Topics
              </p>
              <ul className="mt-5 space-y-4 text-base leading-8 text-white/82">
                {speakingTopics.map((topic) => (
                  <li key={topic} className="flex gap-3">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-gold" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="paper-panel p-8">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-mocha/72">
                Concept Note
              </p>
              <p className="mt-4 text-sm leading-7 text-mocha/88">{projectNote}</p>
              <p className="mt-4 text-sm leading-7 text-mocha/88">
                All names, companies, and metrics are fictionalized for presentation, but the positioning is grounded in
                real personal-brand, media, and speaker market patterns.
              </p>
            </div>

            <div className="paper-panel p-8">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-mocha/72">
                Direct Contact
              </p>
              <h3 className="mt-4 text-4xl text-ink">Need a strategist, speaker, or moderator?</h3>
              <p className="mt-4 text-sm leading-7 text-mocha/88">
                The fastest path is a concise note with the audience, timing, and the shift you want the room or brand
                to make.
              </p>
              <ButtonLink href={`mailto:${siteConfig.email}`} className="mt-6">
                {siteConfig.email}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <PartnershipCtaSection />
    </>
  );
}
