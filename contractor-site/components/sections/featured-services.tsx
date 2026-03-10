import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/data";

export function FeaturedServices() {
  return (
    <section id="services-preview" className="py-18 md:py-22 lg:py-26">
      <Container>
        <div className="grid gap-6 xl:grid-cols-[0.82fr_1.18fr] xl:items-start">
          <Reveal>
            <div className="overflow-hidden rounded-[2.8rem] bg-[linear-gradient(160deg,var(--color-brand-deep),var(--color-brand))] p-6 text-[var(--color-surface)] shadow-[0_46px_110px_-56px_rgba(18,29,40,0.92)] sm:p-8 xl:sticky xl:top-28">
              <SectionHeading
                eyebrow="Services"
                title="Focused scopes with craftsmanship heavy enough to feel tailor-made"
                description="We stay disciplined about what we take on: kitchens, baths, full interior updates, and the millwork details that make those rooms feel settled."
                className="[&_h2]:text-[var(--color-surface)] [&_p]:text-[color:rgba(255,250,243,0.8)] [&_div]:text-[var(--color-accent-soft)]"
              />

              <div className="image-frame relative mt-8 min-h-[280px] rounded-[2rem]">
                <Image
                  src="/images/cabinet-detail.jpg"
                  alt="A close-up of refined custom cabinetry and premium hardware."
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 34vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,36,52,0.02),rgba(22,36,52,0.44))]" />
              </div>

              <div className="mt-6 rounded-[1.8rem] border border-[color:rgba(255,250,243,0.12)] bg-[color:rgba(255,250,243,0.06)] p-5">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-soft)]">
                  Common thread across every scope
                </p>
                <p className="mt-4 text-sm leading-7 text-[color:rgba(255,250,243,0.8)] sm:text-base">
                  Better room flow, warmer materials, and details that keep the house feeling
                  cohesive instead of newly patched together.
                </p>
              </div>

              <ButtonLink href="/services" variant="light" className="mt-6">
                View Full Service Details
              </ButtonLink>
            </div>
          </Reveal>

          <div className="grid gap-4 lg:gap-5">
            {services.map((service, index) => (
              <Reveal key={service.id} delay={index * 80}>
                <Link
                  href={`/services#${service.id}`}
                  className="group surface-card block rounded-[1.9rem] p-4 sm:p-5 lg:p-6"
                >
                  <div className="grid gap-4 lg:grid-cols-[auto_1fr_auto] lg:items-start">
                    <div className="flex items-center justify-between gap-4 sm:justify-start">
                      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-surface-strong)] text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                        0{index + 1}
                      </span>
                      <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)] lg:hidden">
                        {service.timeline}
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-start">
                      <div className="image-frame relative hidden h-28 w-28 rounded-[1.3rem] sm:block">
                        <Image
                          src={service.image}
                          alt={service.imageAlt}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-[1.05]"
                          sizes="112px"
                        />
                      </div>

                      <div>
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div>
                            <h3 className="font-display text-[1.75rem] leading-[1.05] text-[var(--color-brand)] sm:text-[2.15rem] lg:text-[2.3rem]">
                              {service.name}
                            </h3>
                            <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                              {service.shortDescription}
                            </p>
                          </div>

                          <p className="hidden text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)] lg:block">
                            {service.timeline}
                          </p>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {service.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="rounded-full border border-[var(--color-border)] bg-[color:rgba(255,250,243,0.7)] px-3 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.15em] text-[var(--color-brand)]"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="hidden lg:block">
                      <span className="inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                        See scope
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] transition group-hover:translate-x-0.5">
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
