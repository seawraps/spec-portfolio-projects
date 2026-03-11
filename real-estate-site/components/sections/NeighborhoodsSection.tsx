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
        <div className="grid gap-12 xl:grid-cols-[0.72fr_1.28fr] xl:items-start">
          <div className="xl:sticky xl:top-28 xl:self-start">
            <SectionHeading
              id="neighborhoods-heading"
              eyebrow="Neighborhood Edit"
              title={title}
              description={description}
              className="reveal-up"
            />
            <p className="mt-8 border-l border-[var(--color-line-strong)] pl-6 text-sm leading-7 text-[var(--color-muted-strong)]">
              The right house is only as strong as the life around it. Street
              character, club access, marina rhythm, school pull, and commute
              reality all shape where a move will still feel right a year later.
            </p>
          </div>

          <div className="border-t border-[var(--color-line-strong)]">
            {neighborhoods.map((neighborhood, index) => (
              <details
                key={neighborhood.name}
                open={index === 0}
                className="group border-b border-[var(--color-line)] py-5"
              >
                <summary className="cursor-pointer">
                  <div className="grid gap-3 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)_auto] md:items-end">
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
                    <span className="text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)] md:justify-self-end">
                      Expand
                    </span>
                  </div>
                </summary>

                <div className="grid gap-6 pt-6 lg:grid-cols-[0.92fr_1.08fr]">
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
