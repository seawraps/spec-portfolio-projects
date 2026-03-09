import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/data";

export function PartnershipCtaSection() {
  return (
    <section className="section-shell">
      <Container>
        <div className="surface-card relative overflow-hidden px-6 py-10 sm:px-8 sm:py-12 lg:px-12">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-clay/22 blur-3xl" />
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="eyebrow">Partnerships and Booking</span>
              <h2 className="mt-5 text-4xl leading-none text-ink sm:text-5xl">
                Need a keynote, advisory partner, or sponsor-friendly creator presence?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-ink/72">
                I collaborate with conferences, founder-led brands, and premium partners that care about clear ideas,
                audience trust, and polished execution.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-start">
              <ButtonLink href="/contact" arrow>
                Start an Inquiry
              </ButtonLink>
              <ButtonLink href={`mailto:${siteConfig.email}`} variant="secondary" arrow>
                Email {siteConfig.email}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
