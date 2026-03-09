import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { company, featuredStats } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 right-0 h-72 w-72 rounded-full bg-[color:rgba(23,54,77,0.15)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[-3rem] h-64 w-64 rounded-full bg-[color:rgba(201,127,44,0.16)] blur-3xl"
      />

      <Container className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Nashville Remodeling Specialists
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-[var(--color-brand)] sm:text-5xl lg:text-6xl">
            Premium home renovations that feel built for you.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--color-muted)] sm:text-lg">
            {company.name} helps homeowners upgrade kitchens, bathrooms, and living spaces
            with a process that is organized, transparent, and detail-driven from start to
            finish.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/contact">Book a Consultation</ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              Explore Services
            </ButtonLink>
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {featuredStats.map((stat) => (
              <li
                key={stat.label}
                className="rounded-2xl border border-[var(--color-border)] bg-white px-4 py-4 shadow-sm"
              >
                <p className="font-display text-3xl leading-none text-[var(--color-brand)]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-[var(--color-muted)]">{stat.label}</p>
              </li>
            ))}
          </ul>
        </div>

        <aside className="rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-xl sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Why Homeowners Choose Blue Oak
          </p>
          <h2 className="mt-3 font-display text-3xl text-[var(--color-brand)]">
            Local expertise. Predictable execution.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
            We combine thoughtful design, in-house project leadership, and premium build
            standards to deliver renovations that hold their value for years.
          </p>

          <div className="mt-6 rounded-2xl bg-[var(--color-brand-soft)] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]">
              Next Consultation Opening
            </p>
            <p className="mt-2 text-lg font-semibold text-[var(--color-brand)]">
              Within 10 business days
            </p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              Serving {company.primaryServiceArea}
            </p>
          </div>

          <a
            href={`tel:${company.phoneRaw}`}
            className="mt-6 inline-flex rounded-full bg-[var(--color-brand)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1f4a68]"
          >
            Call {company.phoneDisplay}
          </a>
        </aside>
      </Container>
    </section>
  );
}
