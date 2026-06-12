import Image from "next/image";

import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { ComicCar } from "@/components/ui/comic-car";
import { Reveal } from "@/components/motion/reveal";
import { galleryBuilds } from "@/lib/data";

type GallerySectionProps = {
  limit?: number;
  showCta?: boolean;
  heading?: string;
  intro?: string;
};

export function GallerySection({
  limit,
  showCta = true,
  heading = "Builds straight off the splash page.",
  intro = "A look at the color changes, fleets, and custom liveries rolling out of the Renton shop.",
}: GallerySectionProps) {
  const shown = typeof limit === "number" ? galleryBuilds.slice(0, limit) : galleryBuilds;

  return (
    <section id="gallery" className="border-b-[4px] border-[var(--color-ink)] py-16 lg:py-24">
      <Container>
        <Reveal>
          <span className="comic-tag">The Gallery</span>
          <h2 className="comic-display mt-5 max-w-4xl text-[2.7rem] leading-[0.92] text-[var(--color-ink)] sm:text-[3.8rem] lg:text-[4.4rem]">
            {heading}
          </h2>
          <p className="mt-5 max-w-2xl text-[1.02rem] leading-8 text-[var(--color-ink-soft)]">
            {intro}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((build, index) => (
            <Reveal key={build.title} delay={index * 60}>
              <article className="comic-panel comic-panel-hover group flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[5/4] w-full overflow-hidden border-b-[3px] border-[var(--color-ink)]">
                  {build.image ? (
                    <>
                      <Image
                        src={build.image}
                        alt={build.imageAlt ?? `${build.vehicle} wrapped by Wu Wraps`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="comic-halftone pointer-events-none absolute inset-0" aria-hidden="true" />
                    </>
                  ) : (
                    <ComicCar accent={build.accent} />
                  )}
                  <span className="comic-heavy absolute left-2 top-2 border-[2.5px] border-[var(--color-ink)] bg-[var(--color-paper)] px-2 py-1 text-[0.58rem] tracking-[0.1em] text-[var(--color-ink)]">
                    {build.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="comic-display text-[1.7rem] leading-none text-[var(--color-ink)]">
                    {build.title}
                  </h3>
                  <p className="comic-heavy mt-1 text-[0.66rem] tracking-[0.12em] text-[var(--color-red)]">
                    {build.vehicle} · {build.film}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-7 text-[var(--color-ink-soft)]">
                    {build.summary}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {build.scope.map((item) => (
                      <li
                        key={item}
                        className="comic-heavy border-[2px] border-[var(--color-ink)] bg-[var(--color-surface)] px-2 py-1 text-[0.58rem] tracking-[0.08em] text-[var(--color-ink)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {showCta ? (
          <Reveal className="mt-12">
            <ButtonLink href="/gallery" variant="blue">
              See the Full Gallery
            </ButtonLink>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
