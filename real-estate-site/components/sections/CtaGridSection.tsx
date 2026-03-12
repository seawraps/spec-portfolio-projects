import Image from "next/image";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const consultationNotes = [
  {
    title: "Valuation sessions",
    description:
      "A private read on pricing range, timing, and whether a launch now actually serves the move.",
  },
  {
    title: "Buyer briefs",
    description:
      "Search parameters refined around neighborhood fit, timing pressure, and what is worth touring in person.",
  },
  {
    title: "Launch planning",
    description:
      "Preparation, staging, production, and preview cadence mapped before the public listing ever appears.",
  },
];

export function CtaGridSection() {
  return (
    <section className="section-spacing">
      <Container>
        <div className="section-shell rounded-[40px] p-4 sm:p-6 lg:p-8">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] xl:items-start">
            <article className="image-frame image-reveal reveal-up relative self-start min-h-[380px] sm:min-h-[460px]">
              <Image
                src="/images/contact-consultation.jpg"
                alt="A refined consultation setting for Crescent Vale's private planning and valuation conversations."
                fill
                sizes="(min-width: 1280px) 52vw, (min-width: 1024px) 56vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111921]/82 via-[#111921]/24 to-transparent" />
              <div className="overlay-panel absolute inset-x-5 bottom-5 rounded-[24px] p-5 text-white sm:max-w-[32rem] sm:p-6">
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-bronze-soft)]">
                  Private consultation
                </p>
                <h2 className="mt-4 font-display text-[clamp(2.8rem,5vw,4.6rem)] leading-[0.92] text-white">
                  Start with a measured conversation, not a hard pitch.
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/72">
                  The first meeting is used to sort timing, readiness, and what
                  kind of strategy actually fits the move you are considering.
                </p>
              </div>
            </article>

            <div className="reveal-up delay-1 self-start">
              <SectionHeading
                eyebrow="Planning Note"
                title="Whether you are buying, selling, or quietly testing the market, clarity early changes outcomes."
                description="The strongest decisions usually come before the visible transaction begins: whether to wait, what to improve, where to focus the search, and how the launch should actually feel."
              />

              <div className="mt-8 grid gap-5 border-t border-[var(--color-line-strong)] pt-6">
                {consultationNotes.map((item) => (
                  <div key={item.title} className="border-b border-[var(--color-line)] pb-5">
                    <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-bronze)]">
                      {item.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact">Request Consultation</ButtonLink>
                <ButtonLink href="/services" variant="secondary">
                  Review Services
                </ButtonLink>
              </div>

              <p className="fine-print mt-6">
                Crescent Vale is an illustrative concept brand. All
                consultations, listings, and market details shown here are
                portfolio-demo content.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
