import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { CtaSection } from "@/components/sections/cta-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutHighlights, company, differentiators } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Learn how Blue Oak Remodeling Co. delivers premium local renovation projects through disciplined planning and craftsmanship.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="py-12 md:py-16 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="About Us"
              title="A Nashville remodeling partner focused on quality, clarity, and trust"
              description="Founded in 2012, Blue Oak Remodeling Co. was built to give homeowners a better renovation experience: clean communication, accountable project management, and work that holds up for years."
              as="h1"
            />
            <p className="mt-5 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
              We are a local contractor serving homeowners who want thoughtful updates without
              uncertainty. Every project starts with careful planning and ends with a documented
              closeout process, warranty support, and a home you are proud to live in.
            </p>
            <p className="mt-5 text-sm font-medium text-[var(--color-brand)]">{company.license}</p>
          </div>

          <aside className="surface-card rounded-3xl p-7">
            <h2 className="font-display text-3xl text-[var(--color-brand)]">At a Glance</h2>
            <dl className="mt-5 space-y-4 text-sm text-[var(--color-muted)]">
              <div className="flex items-center justify-between gap-4 border-b border-[var(--color-border)] pb-3">
                <dt>Founded</dt>
                <dd className="font-semibold text-[var(--color-brand)]">{company.foundedYear}</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-[var(--color-border)] pb-3">
                <dt>Primary Office</dt>
                <dd className="font-semibold text-[var(--color-brand)]">Nashville, TN</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-[var(--color-border)] pb-3">
                <dt>Focus</dt>
                <dd className="font-semibold text-[var(--color-brand)]">Residential Remodeling</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt>Average Client Rating</dt>
                <dd className="font-semibold text-[var(--color-brand)]">4.9 / 5.0</dd>
              </div>
            </dl>
          </aside>
        </Container>
      </section>

      <section className="bg-white py-12 md:py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="What Guides Our Work"
            title="Standards that shape every project"
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {aboutHighlights.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-brand-soft)] p-6"
              >
                <h3 className="text-lg font-semibold text-[var(--color-brand)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Why Clients Recommend Us"
              title="A process designed for confidence"
              description="From kickoff through closeout, we center communication and quality control so clients always know where the project stands."
            />
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              {differentiators.map((item) => (
                <li key={item} className="rounded-xl border border-[var(--color-border)] bg-white px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="surface-card rounded-3xl p-7">
            <h2 className="font-display text-3xl text-[var(--color-brand)]">Portfolio Note</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              This website is a concept/demo project created for portfolio presentation and
              productized service demonstrations. Brand names, testimonials, and contact details
              are fictional but intentionally realistic.
            </p>
          </aside>
        </Container>
      </section>

      <CtaSection
        title="Want to see what your renovation could become?"
        description="Share your goals, timeline, and priorities. We will follow up with a practical plan for getting your project started."
      />
    </>
  );
}
