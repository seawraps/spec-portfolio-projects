import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/layout/container";
import { ButtonLink, buttonClassName } from "@/components/ui/button-link";
import { company, featuredStats } from "@/lib/data";

export function HeroSection() {
  return (
    <section id="home-hero" className="relative overflow-hidden pb-18 pt-3 sm:pt-5 md:pb-22 lg:pb-25">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[78%] bg-[linear-gradient(180deg,rgba(255,250,243,0.66),rgba(244,237,227,0))]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-24 h-64 w-64 rounded-full bg-[color:rgba(180,136,72,0.14)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-14 h-72 w-72 rounded-full bg-[color:rgba(36,54,75,0.1)] blur-3xl"
      />

      <Container className="relative">
        <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr] xl:items-start xl:gap-10">
          <Reveal className="relative z-10 max-w-[36rem] xl:pt-8">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Nashville Design-Build Contractor
            </p>
            <h1 className="mt-5 max-w-[11ch] font-display text-[2.75rem] leading-[0.95] text-[var(--color-brand)] sm:text-[4rem] lg:text-[4.85rem] xl:text-[5.1rem]">
              Renovations that feel calm, collected, and worth coming home to.
            </h1>
            <p className="mt-6 max-w-[33rem] text-[1rem] leading-8 text-[var(--color-muted)] sm:text-[1.07rem]">
              {company.name} plans and builds premium kitchens, bathrooms, and interior
              renovations for homeowners who want a warmer material palette, clearer communication,
              and a finish level that reads custom without feeling showy.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <ButtonLink href="/contact" variant="light">
                Start Your Renovation
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                Explore Signature Services
              </ButtonLink>
              <a
                href={`tel:${company.phoneRaw}`}
                className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-brand)] underline decoration-[color:rgba(180,136,72,0.68)] underline-offset-6 hover:text-[var(--color-accent-deep)]"
              >
                Consultation line {company.phoneDisplay}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {[
                "Licensed design-build oversight",
                "Occupied-home planning",
                "Material palettes that age well",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--color-border)] bg-[color:rgba(255,250,243,0.74)] px-4 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100} className="relative">
            <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-start xl:gap-6">
              <div className="space-y-4 sm:space-y-5">
                <div className="image-frame relative min-h-[420px] rounded-[2.45rem] sm:min-h-[540px] xl:min-h-[620px]">
                  <Image
                    src="/images/hero-kitchen.jpg"
                    alt="A premium renovated kitchen with wood cabinetry, a large island, and soft natural light."
                    fill
                    priority
                    className="object-cover object-[58%_center]"
                    sizes="(max-width: 1280px) 100vw, 46vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,36,52,0.02),rgba(22,36,52,0.24)_54%,rgba(22,36,52,0.62)_100%)]" />
                  <div className="absolute left-5 top-5 rounded-full border border-[color:rgba(255,255,255,0.18)] bg-[color:rgba(22,36,52,0.58)] px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-soft)] shadow-[0_20px_42px_-24px_rgba(0,0,0,0.38)] sm:left-7 sm:top-7">
                    Featured project
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 text-[var(--color-surface)] sm:p-8">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-soft)]">
                      Belle Meade kitchen renewal
                    </p>
                    <p className="mt-3 max-w-[18rem] font-display text-[1.8rem] leading-[1.06] sm:text-[2.2rem]">
                      Quieter detailing and better flow for the whole house.
                    </p>
                    <p className="mt-4 max-w-md text-sm leading-7 text-[color:rgba(255,250,243,0.84)] sm:text-base">
                      Opened sight lines, warmer cabinetry, and a plan that finally let the island
                      become the center of daily life.
                    </p>
                  </div>
                </div>

                <div className="surface-card rounded-[1.85rem] p-5 sm:p-6">
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                    Homeowner experience
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    Protected job sites, documented milestones, and one lead contact who surfaces
                    decisions early instead of letting them turn into surprises later.
                  </p>
                  <div className="editorial-rule mt-5" />
                  <ul className="mt-5 space-y-2 text-sm leading-7 text-[var(--color-muted)]">
                    <li>Occupied-home protection from demo through handoff</li>
                    <li>Weekly progress updates with clean decision tracking</li>
                    <li>Material guidance designed to age well with the house</li>
                  </ul>
                  <a
                    href={`tel:${company.phoneRaw}`}
                    className={buttonClassName("primary", "mt-5 w-full sm:w-auto")}
                  >
                    Call {company.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="grid gap-5 lg:pt-12">
                <div className="image-frame relative min-h-[240px] rounded-[2rem] sm:min-h-[300px]">
                  <Image
                    src="/images/cabinet-detail.jpg"
                    alt="A custom cabinet detail with rich wood grain and premium hardware."
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 24vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,36,52,0.02),rgba(22,36,52,0.2)_72%,rgba(22,36,52,0.34)_100%)]" />
                </div>

                <div className="surface-card rounded-[2rem] p-5 sm:p-6">
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                    Signature priorities
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-muted)]">
                    <li>Cabinetry and millwork with furniture-level detail</li>
                    <li>Warm stone, plaster tones, and finishes that age well</li>
                    <li>Weekly communication that keeps the entire house legible</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={180} className="xl:col-span-2">
            <div className="grid gap-4 lg:grid-cols-[1.15fr_0.95fr_0.95fr]">
              <div className="surface-card-strong rounded-[2.1rem] p-5 sm:p-6">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                  What clients notice first
                </p>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {featuredStats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-display text-[2.65rem] leading-none text-[var(--color-brand)]">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="surface-card rounded-[2.1rem] p-5 sm:p-6">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                  How we keep projects premium
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                  A focused project load, one lead contact, and material decisions made early
                  enough to keep the build clean.
                </p>
                <div className="editorial-rule mt-5" />
                <p className="mt-5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                  Occupied-home friendly from demo through handoff
                </p>
              </div>

              <div className="rounded-[2.1rem] bg-[linear-gradient(160deg,var(--color-brand-deep),var(--color-brand))] p-5 text-[var(--color-surface)] shadow-[0_34px_88px_-50px_rgba(18,29,40,0.84)] sm:p-6">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-soft)]">
                  Project cadence
                </p>
                <p className="mt-4 font-display text-[2rem] leading-[1.08] sm:text-[2.45rem]">
                  Limited active-job load for tighter supervision and cleaner finish work.
                </p>
                <p className="mt-4 text-sm leading-7 text-[color:rgba(255,250,243,0.82)] sm:text-base">
                  We keep the calendar disciplined so site visits, selections, and weekly updates
                  stay direct instead of filtered through layers of handoff.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
