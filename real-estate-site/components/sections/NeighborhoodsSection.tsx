import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { neighborhoods } from "@/lib/data";

type NeighborhoodsSectionProps = {
  title?: string;
  description?: string;
};

export function NeighborhoodsSection({
  title = "A neighborhood edit built around daily life, not broad-market clichés.",
  description = "Every enclave is assessed through pace, architecture, commute, and the rituals buyers actually care about once they live there. Expand each area for the full local framing.",
}: NeighborhoodsSectionProps) {
  return (
    <section className="section-spacing" aria-labelledby="neighborhoods-heading">
      <Container>
        <div className="section-shell rounded-[40px] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
          <div className="grid gap-8 border-b border-[var(--color-line-strong)] pb-8 xl:grid-cols-[minmax(0,1.08fr)_minmax(18rem,0.92fr)] xl:items-end">
            <SectionHeading
              id="neighborhoods-heading"
              eyebrow="Neighborhood Edit"
              title={title}
              description={description}
              className="reveal-up max-w-4xl"
            />
            <p className="xl:max-w-[31rem] xl:justify-self-end xl:border-l xl:border-[var(--color-line-strong)] xl:pl-6 text-sm leading-7 text-[var(--color-muted-strong)]">
              The right house is only as strong as the life around it. Street
              character, club access, marina rhythm, school pull, and commute
              reality all shape where a move will still feel right a year later.
            </p>
          </div>

          <div className="mt-8 grid gap-4">
            {neighborhoods.map((neighborhood, index) => (
              <details
                key={neighborhood.name}
                open={index === 0}
                className="group soft-card overflow-hidden rounded-[30px] px-5 py-5 sm:px-6 sm:py-6"
              >
                <summary className="cursor-pointer">
                  <div className="grid gap-4 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)_auto] lg:items-end">
                    <div>
                      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-bronze)]">
                        Neighborhood {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-3 font-display text-[2.5rem] leading-[0.92] text-[var(--color-ink)] sm:text-[3rem]">
                        {neighborhood.name}
                      </h3>
                    </div>
                    <p className="max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
                      {neighborhood.profile}
                    </p>
                    <span className="text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)] lg:justify-self-end">
                      Expand
                    </span>
                  </div>
                </summary>

                <div className="mt-6 grid gap-6 border-t border-[var(--color-line)] pt-6 lg:grid-cols-[0.92fr_1.08fr]">
                  <div className="image-frame image-reveal relative min-h-[280px] sm:min-h-[360px]">
                    <Image
                      src={neighborhood.imageSrc}
                      alt={neighborhood.imageAlt}
                      fill
                      sizes="(min-width: 1280px) 34vw, (min-width: 1024px) 40vw, 100vw"
                      className={`object-cover ${neighborhood.imagePosition ?? ""}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111921]/76 via-transparent to-transparent" />
                    <div className="overlay-panel absolute inset-x-4 bottom-4 rounded-[22px] p-4 text-white sm:inset-x-5 sm:bottom-5 sm:p-5">
                      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-white/68">
                        Local rhythm
                      </p>
                      <p className="mt-3 font-display text-[2rem] leading-[0.92] text-white">
                        {neighborhood.story}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-5">
                    <p className="text-base leading-8 text-[var(--color-muted-strong)]">
                      {neighborhood.summary}
                    </p>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="border-l border-[var(--color-line-strong)] pl-4">
                        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-bronze)]">
                          Commute context
                        </p>
                        <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                          {neighborhood.commute}
                        </p>
                      </div>
                      <div className="border-l border-[var(--color-line-strong)] pl-4">
                        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-bronze)]">
                          Housing mix
                        </p>
                        <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                          {neighborhood.housing}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {neighborhood.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-full border border-[var(--color-line)] bg-white/72 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted-strong)]"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
