import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/data";

export function FeaturedServices() {
  const [leadService] = services;

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <Container className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
        <div className="image-frame relative min-h-[520px] rounded-[2.4rem]">
          <Image
            src={leadService.image}
            alt={leadService.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 48vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,36,52,0.12),rgba(22,36,52,0.56))]" />
          <div className="absolute inset-x-0 bottom-0 p-7 text-[var(--color-surface)] sm:p-8">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-soft)]">
              Signature Work
            </p>
            <h3 className="mt-3 max-w-sm font-display text-4xl leading-tight sm:text-[3.2rem]">
              Kitchens that carry the tone of the whole house.
            </h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-[color:rgba(255,250,243,0.82)] sm:text-base">
              {leadService.shortDescription}
            </p>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Services"
            title="Thoughtful scopes for the rooms that matter most"
            description="We keep the mix focused on high-value residential work: kitchens, baths, full interior refreshes, and the millwork details that make those renovations feel finished."
          />

          <div className="mt-8 space-y-4">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="surface-card group block rounded-[1.8rem] p-4 sm:p-5"
              >
                <div className="grid gap-4 sm:grid-cols-[8.5rem_1fr] sm:items-center">
                  <div className="relative min-h-[8rem] overflow-hidden rounded-[1.2rem]">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-[1.03]"
                      sizes="160px"
                    />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="font-display text-3xl leading-tight text-[var(--color-brand)]">
                        {service.name}
                      </h3>
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                        {service.timeline}
                      </p>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                      {service.shortDescription}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-full bg-[var(--color-surface-strong)] px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href="/services"
              className="inline-flex items-center text-[0.74rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)] transition hover:text-[var(--color-accent)]"
            >
              View full service details
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
