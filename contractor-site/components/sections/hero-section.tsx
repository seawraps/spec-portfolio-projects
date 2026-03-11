import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { company, featuredStats } from "@/lib/data";

const heroPrinciples = [
  "Architectural planning before demolition starts",
  "Warm material palettes that settle into the house",
  "One lead team coordinating selections, schedule, and build",
];

export function HeroSection() {
  return (
    <section
      id="home-hero"
      className="architectural-section relative overflow-hidden pb-16 pt-10 sm:pb-18 sm:pt-12 lg:pb-20 lg:pt-14"
    >
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <Reveal className="lg:pr-8 lg:pt-6">
            <p className="architectural-eyebrow">Nashville Residential Remodeling</p>
            <h1 className="mt-6 max-w-[10ch] font-display text-[3rem] leading-[0.9] text-[var(--color-brand)] sm:text-[4.85rem] lg:text-[5.65rem]">
              Built rooms with quieter lines and longer life.
            </h1>
            <p className="mt-6 max-w-xl text-[1rem] leading-8 text-[var(--color-muted)] sm:text-[1.08rem]">
              {company.name} plans and builds premium kitchens, baths, millwork, and whole-home
              interior renovations for homeowners who want calm process, durable material choices,
              and workmanship that reads permanent instead of trendy.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/contact" variant="light">
                Request a Consultation
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                Review Services
              </ButtonLink>
            </div>

            <div className="architectural-grid mt-10 grid gap-4 py-5 sm:grid-cols-3">
              {featuredStats.map((stat) => (
                <dl key={stat.label}>
                  <dt className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 font-display text-[2.6rem] leading-none text-[var(--color-brand)]">
                    {stat.value}
                  </dd>
                </dl>
              ))}
            </div>

            <div className="line-list mt-8 border-y border-[color:rgba(31,35,39,0.12)]">
              {heroPrinciples.map((item) => (
                <p
                  key={item}
                  className="py-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base"
                >
                  {item}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr] sm:grid-rows-[minmax(0,1fr)_auto]">
            <div className="image-frame relative min-h-[420px] overflow-hidden rounded-[1rem] sm:row-span-2 sm:min-h-[650px]">
              <Image
                src="/images/hero-kitchen.jpg"
                alt="A premium remodeled kitchen with warm cabinetry, a central island, and restrained detailing."
                fill
                priority
                className="object-cover object-[58%_center]"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,35,45,0.02),rgba(23,35,45,0.2)_52%,rgba(23,35,45,0.74)_100%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-[var(--color-surface)] sm:p-7">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-accent-soft)]">
                  Featured kitchen study
                </p>
                <p className="mt-3 max-w-sm font-display text-[2rem] leading-[0.96] sm:text-[2.8rem]">
                  Better light, cleaner circulation, and cabinetry that feels fitted to the house.
                </p>
              </div>
            </div>

            <div className="image-frame relative min-h-[220px] overflow-hidden rounded-[1rem]">
              <Image
                src="/images/bathroom-vanity.jpg"
                alt="A refined bathroom vanity with warm oak tones and stone detailing."
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 24vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,35,45,0.04),rgba(23,35,45,0.34))]" />
            </div>

            <div className="surface-card-strong rounded-[1rem] p-5 sm:p-6">
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                Project cadence
              </p>
              <p className="mt-4 font-display text-[2rem] leading-[0.98] text-[var(--color-brand)] sm:text-[2.45rem]">
                Limited active-job load for closer supervision and calmer decisions.
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                Walkthroughs, approvals, and weekly updates stay close to the field team instead of
                getting filtered through a sales sequence.
              </p>
              <div className="editorial-rule mt-5" />
              <p className="mt-5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-brand)]">
                Consultation line {company.phoneDisplay}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
