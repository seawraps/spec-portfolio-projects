import Image from "next/image";

import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { serviceAreas } from "@/lib/data";

export function ServiceAreasSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <Container className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
        <div className="image-frame relative min-h-[420px] rounded-[2.4rem]">
          <Image
            src="/images/stair-detail.jpg"
            alt="Warm wooden stair detailing in a refined residential interior."
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,36,52,0.12),rgba(22,36,52,0.58))]" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-[var(--color-surface)] sm:p-8">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-soft)]">
              Local Coverage
            </p>
            <h2 className="mt-3 max-w-sm font-display text-4xl leading-tight">
              Based in Nashville and focused on nearby homes we can serve well.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-[color:rgba(255,250,243,0.82)] sm:text-base">
              We intentionally stay concentrated around Middle Tennessee neighborhoods where site
              visits, project supervision, and vendor coordination can stay tight.
            </p>
          </div>
        </div>

        <div className="surface-card-strong rounded-[2.4rem] p-6 sm:p-8">
          <SectionHeading
            eyebrow="Service Area"
            title="Fast response times across our core neighborhoods"
            description="Most of our work happens in central Nashville, Brentwood, Franklin, and the surrounding residential pockets where homeowners want a renovation partner they can actually reach."
          />
          <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-[var(--color-muted)] sm:grid-cols-3 sm:text-base">
            {serviceAreas.map((area) => (
              <li
                key={area}
                className="rounded-[1rem] bg-[var(--color-surface-strong)] px-4 py-3 text-center"
              >
                {area}
              </li>
            ))}
          </ul>
          <ButtonLink href="/contact" className="mt-8">
            Confirm Your Address
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
