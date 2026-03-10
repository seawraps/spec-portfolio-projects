import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/layout/container";
import { ButtonLink, buttonClassName } from "@/components/ui/button-link";
import { company, featuredStats } from "@/lib/data";

export function HeroSection() {
  return (
    <section id="home-hero" className="relative overflow-hidden pb-16 pt-8 md:pb-20 md:pt-10 lg:pb-24">
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
        <div className="grid gap-8 xl:grid-cols-[0.84fr_1.16fr] xl:items-start">
          <Reveal className="relative z-10 xl:pt-10">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Nashville Design-Build Contractor
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-[2.9rem] leading-[0.95] text-[var(--color-brand)] sm:text-[4.8rem] lg:text-[5.7rem]">
              Renovations that feel calm, collected, and worth coming home to.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-[1.08rem]">
              {company.name} plans and builds premium kitchens, bathrooms, and interior
              renovations for homeowners who want a warmer material palette, clearer communication,
              and a finish level that reads custom without feeling showy.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
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

            <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
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
            </div>
          </Reveal>

          <Reveal delay={120} className="relative xl:pl-4">
            <div className="grid gap-4 md:grid-cols-[0.34fr_0.66fr]">
              <div className="order-2 grid gap-4 md:order-1 md:pt-14">
                <div className="image-frame relative min-h-[240px] rounded-[2rem]">
                  <Image
                    src="/images/cabinet-detail.jpg"
                    alt="A custom cabinet detail with rich wood grain and premium hardware."
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 24vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,36,52,0.04),rgba(22,36,52,0.4))]" />
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

              <div className="order-1">
                <div className="image-frame relative min-h-[540px] rounded-[2.6rem] sm:min-h-[620px]">
                  <Image
                    src="/images/hero-kitchen.jpg"
                    alt="A premium renovated kitchen with wood cabinetry, a large island, and soft natural light."
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 46vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,36,52,0.02),rgba(22,36,52,0.46))]" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-[var(--color-surface)] sm:p-8">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-soft)]">
                      Featured project
                    </p>
                    <p className="mt-3 max-w-sm font-display text-[2.2rem] leading-[1.02] sm:text-[2.85rem]">
                      Belle Meade kitchen renewal with quieter detailing and better flow.
                    </p>
                    <p className="mt-4 max-w-md text-sm leading-7 text-[color:rgba(255,250,243,0.82)] sm:text-base">
                      Opened sight lines, warmer cabinetry, and a plan that finally let the island
                      become the center of daily life.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute left-6 top-6 hidden rounded-full border border-[color:rgba(255,250,243,0.22)] bg-[color:rgba(22,36,52,0.72)] px-4 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-soft)] shadow-[0_20px_42px_-24px_rgba(0,0,0,0.45)] md:block">
              Est. {company.foundedYear} | Design-build
            </div>

            <div className="absolute -bottom-5 right-6 hidden rounded-[1.6rem] border border-[color:rgba(36,54,75,0.1)] bg-[color:rgba(255,250,243,0.94)] p-5 shadow-[0_28px_68px_-38px_rgba(18,29,40,0.48)] lg:block">
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                Homeowner experience
              </p>
              <p className="mt-3 max-w-[15rem] text-sm leading-7 text-[var(--color-muted)]">
                Protected job sites, documented milestones, and decisions surfaced early instead of
                becoming surprises later.
              </p>
              <a href={`tel:${company.phoneRaw}`} className={buttonClassName("primary", "mt-5 w-full")}>
                Call {company.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
