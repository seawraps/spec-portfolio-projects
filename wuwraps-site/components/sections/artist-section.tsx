import Image from "next/image";

import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/motion/reveal";
import { artistPoints } from "@/lib/data";

export function ArtistSection() {
  return (
    <section className="bg-[var(--fog)] py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal>
          <figure className="comic-frame comic-frame-light lg:sticky lg:top-28">
            <div className="comic-frame-media relative aspect-[4/3] w-full lg:aspect-[3/4]">
              <Image
                src="/images/gallery/mclaren-750s-spyder.jpg"
                alt="McLaren 750S Spyder in the Wu Wraps studio, in front of the painted WU! WRAPS mural"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <span className="photo-tone" aria-hidden="true" />
            </div>
            <figcaption className="caption-tag absolute -bottom-3 left-4">
              The studio, Renton WA
            </figcaption>
          </figure>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow text-[var(--slate)]">Mark Wu</p>
            <h2 className="display mt-5 text-[2.4rem] text-[var(--ink)] sm:text-[3.2rem]">
              Not an installer.
              <br />
              An artist.
            </h2>
          </Reveal>

          <div className="mt-10 space-y-8">
            {artistPoints.map((point, index) => (
              <Reveal key={point.title} delay={index * 80}>
                <div
                  className="border-l-2 pl-6"
                  style={{ borderColor: ["var(--cedar)", "var(--sea)", "var(--spark)"][index % 3] }}
                >
                  <h3 className="display text-[1.1rem] text-[var(--ink)]">{point.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-8 text-[var(--slate)]">
                    {point.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={260} className="mt-10">
            <ButtonLink href="/about" variant="ghost-light">
              The Full Story
            </ButtonLink>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
