import Image from "next/image";

import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/motion/reveal";
import { galleryBuilds, company } from "@/lib/data";

type GallerySectionProps = {
  limit?: number;
  showCta?: boolean;
  heading?: string;
  intro?: string;
};

export function GallerySection({
  limit,
  showCta = true,
  heading = "Recent work.",
  intro = "Every build below rolled out of the Renton studio. Fresh installs land on Instagram most weeks.",
}: GallerySectionProps) {
  const shown = typeof limit === "number" ? galleryBuilds.slice(0, limit) : galleryBuilds;

  return (
    <section id="gallery" className="on-dark py-20 lg:py-28">
      <Container>
        <Reveal>
          <p className="eyebrow text-[var(--mist)]">The gallery</p>
          <h2 className="display mt-5 max-w-3xl text-[2.4rem] text-[var(--bone)] sm:text-[3.2rem]">
            {heading}
          </h2>
          <p className="mt-5 max-w-xl text-[1rem] leading-8 text-[var(--mist)]">{intro}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((build, index) => (
            <Reveal key={build.title} delay={Math.min(index * 60, 240)}>
              <figure className="group">
                <div className="photo-frame">
                  <div className="relative aspect-[4/3] w-full">
                    {build.image ? (
                      <Image
                        src={build.image}
                        alt={build.imageAlt ?? `${build.vehicle} wrapped by Wu Wraps`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    ) : null}
                    <span className="photo-tone" aria-hidden="true" />
                  </div>
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                  <div>
                    <p className="display text-[1.05rem] text-[var(--bone)]">{build.vehicle}</p>
                    <p className="mt-1 text-sm text-[var(--mist)]">{build.film}</p>
                  </div>
                  <p className="label shrink-0 text-[0.6rem] text-[rgba(246,245,241,0.45)]">
                    {build.category}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {showCta ? (
          <Reveal className="mt-12 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/gallery" variant="bone">
              Full Gallery
            </ButtonLink>
            <ButtonLink
              href={company.instagramUrl}
              variant="ghost-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram {company.instagram}
            </ButtonLink>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
