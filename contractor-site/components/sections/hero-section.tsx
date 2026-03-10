import Image from "next/image";

import { Container } from "@/components/layout/container";
import { ButtonLink, buttonClassName } from "@/components/ui/button-link";
import { company, featuredStats } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-16 pt-10 md:pb-20 md:pt-14 lg:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[82%] bg-[linear-gradient(180deg,rgba(255,250,243,0.75),rgba(244,237,227,0))]"
      />

      <Container className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div className="surface-card-strong rounded-[2rem] p-7 sm:p-9 lg:rounded-[2.4rem]">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
            Nashville Renovation Studio
          </p>
          <h1 className="mt-4 max-w-xl font-display text-5xl leading-[0.97] text-[var(--color-brand)] sm:text-6xl lg:text-[4.5rem]">
            Premium remodeling that feels warm, grounded, and beautifully lived in.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
            {company.name} renovates kitchens, bathrooms, and full interiors for homeowners who
            want better materials, calmer execution, and results that do not feel pulled from a
            template.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/contact" variant="light">
              Start Your Project
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              Explore Services
            </ButtonLink>
          </div>

          <ul className="mt-9 grid gap-4 sm:grid-cols-3">
            {featuredStats.map((stat) => (
              <li
                key={stat.label}
                className="rounded-[1.6rem] border border-[var(--color-border)] bg-[color:rgba(255,250,243,0.76)] px-5 py-5"
              >
                <p className="font-display text-4xl leading-none text-[var(--color-brand)]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{stat.label}</p>
              </li>
            ))}
          </ul>

          <div className="mt-9 border-t border-[var(--color-border)] pt-6">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Recent Client Feedback
            </p>
            <p className="mt-3 text-base leading-8 text-[var(--color-muted)]">
              “Blue Oak brought a level of calm and detail to our renovation that we had not seen
              from any other contractor.”
            </p>
            <p className="mt-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
              Green Hills kitchen renovation
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-[1.12fr_0.88fr]">
          <div className="image-frame relative min-h-[440px] rounded-[2.3rem]">
            <Image
              src="/images/hero-kitchen.jpg"
              alt="A premium renovated kitchen with wood cabinetry, a large island, and soft natural light."
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,36,52,0.05),rgba(22,36,52,0.42))]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-[var(--color-surface)] sm:p-7">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-soft)]">
                Featured Project
              </p>
              <p className="mt-3 max-w-xs font-display text-3xl leading-tight">
                Kitchen-centered renovation in Belle Meade
              </p>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="image-frame relative min-h-[208px] rounded-[2rem]">
              <Image
                src="/images/cabinet-detail.jpg"
                alt="A custom dark cabinet detail with refined woodwork and premium hardware."
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 28vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,36,52,0.02),rgba(22,36,52,0.34))]" />
            </div>

            <div className="surface-card rounded-[2rem] p-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                Why Homeowners Choose Us
              </p>
              <h2 className="mt-3 font-display text-3xl leading-tight text-[var(--color-brand)]">
                Cabinetry, materials, and communication held to the same standard.
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--color-muted)]">
                <li>Clear weekly communication once work is underway</li>
                <li>Design guidance rooted in durability and resale-aware choices</li>
                <li>Jobsite protection for occupied, family-used homes</li>
              </ul>
              <a href={`tel:${company.phoneRaw}`} className={buttonClassName("primary", "mt-6 w-full")}>
                Call {company.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
