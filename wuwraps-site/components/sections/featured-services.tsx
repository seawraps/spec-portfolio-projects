import Link from "next/link";

import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { SpraySwipe } from "@/components/ui/spray-swipe";
import { Reveal } from "@/components/motion/reveal";
import { services } from "@/lib/data";

type FeaturedServicesProps = {
  limit?: number;
  showCta?: boolean;
};

/**
 * Services as a clean index list rather than a wall of cards. Each row links
 * to the services page.
 */
export function FeaturedServices({ limit, showCta = true }: FeaturedServicesProps) {
  const shown = typeof limit === "number" ? services.slice(0, limit) : services;

  return (
    <section id="services" className="bg-[var(--fog)] py-20 lg:py-28">
      <Container>
        <Reveal>
          <p className="eyebrow text-[var(--slate)]">What Wu wraps</p>
          <h2 className="display mt-5 max-w-3xl text-[2.4rem] text-[var(--ink)] sm:text-[3.2rem]">
            Exteriors, interiors, rims, kits.
            <span className="text-[var(--cedar)]"> All of it.</span>
          </h2>
          <SpraySwipe className="mt-3" />
        </Reveal>

        <div className="mt-14 border-t border-[var(--line-light)]">
          {shown.map((service, index) => (
            <Reveal key={service.id} delay={Math.min(index * 40, 200)}>
              <Link
                href={`/services#${service.id}`}
                className="group grid gap-2 border-b border-[var(--line-light)] py-6 transition-colors hover:bg-white sm:grid-cols-[auto_2fr_3fr_auto] sm:items-baseline sm:gap-8 sm:px-4"
              >
                <span
                  className="pow hidden text-[1.1rem] sm:block"
                  style={{ color: ["var(--cedar)", "var(--sea)", "var(--spark)"][index % 3] }}
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="display text-[1.15rem] text-[var(--ink)] transition-colors group-hover:text-[var(--cedar)]">
                  {service.name}
                  {service.tag ? (
                    <span className="label ml-3 inline-block rounded-full bg-[var(--cedar)] px-2.5 py-0.5 align-middle text-[0.54rem] text-[var(--bone)]">
                      New
                    </span>
                  ) : null}
                </h3>
                <p className="text-sm leading-7 text-[var(--slate)]">
                  {service.shortDescription}
                </p>
                <p className="label hidden text-[0.62rem] text-[var(--slate)] sm:block">
                  {service.turnaround}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        {showCta ? (
          <Reveal className="mt-10">
            <ButtonLink href="/services" variant="ink">
              Every Service in Detail
            </ButtonLink>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
