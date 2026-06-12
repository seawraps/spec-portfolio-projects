import Link from "next/link";

import { Container } from "@/components/layout/container";
import { ButtonLink, buttonClassName } from "@/components/ui/button-link";
import { BrandLogo } from "@/components/ui/brand-logo";
import { company, navLinks, serviceAreas, services } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="halftone-ink border-t-[4px] border-[var(--color-ink)] text-[var(--color-paper)]">
      <Container className="grid gap-10 py-16 lg:grid-cols-[1.3fr_0.8fr_0.9fr] lg:gap-12 lg:py-20">
        <div>
          <div className="flex items-center gap-3">
            <BrandLogo size={54} />
            <p className="comic-display text-4xl text-[var(--color-paper)]">Wu Wraps</p>
          </div>
          <h2 className="comic-display mt-6 max-w-md text-[2.6rem] leading-[0.95] text-[var(--color-yellow)]">
            Seattle&apos;s most trusted vinyl wrap shop.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-[rgba(251,244,226,0.82)] sm:text-base">
            {company.tagline}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/contact" variant="red">
              Get a Quote
            </ButtonLink>
            <a href={`tel:${company.phoneRaw}`} className={buttonClassName("yellow")}>
              Call {company.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="grid gap-8 border-t-[2.5px] border-dashed border-[rgba(251,244,226,0.3)] pt-8 sm:grid-cols-2 lg:border-t-0 lg:pt-0">
          <div>
            <h3 className="comic-heavy text-[0.72rem] tracking-[0.18em] text-[var(--color-yellow)]">
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[rgba(251,244,226,0.84)]">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link className="transition hover:text-[var(--color-yellow)]" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  className="transition hover:text-[var(--color-yellow)]"
                  href={company.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram {company.instagram}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="comic-heavy text-[0.72rem] tracking-[0.18em] text-[var(--color-yellow)]">
              Services
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-[rgba(251,244,226,0.84)]">
              {services.map((service) => (
                <li key={service.id}>{service.name}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t-[2.5px] border-dashed border-[rgba(251,244,226,0.3)] pt-8 lg:border-l lg:border-t-0 lg:border-dashed lg:border-l-[rgba(251,244,226,0.3)] lg:pl-8 lg:pt-0">
          <h3 className="comic-heavy text-[0.72rem] tracking-[0.18em] text-[var(--color-yellow)]">
            Visit / Call
          </h3>
          <address className="mt-4 space-y-2 text-sm not-italic text-[rgba(251,244,226,0.84)] sm:text-base">
            <p>{company.addressLine}</p>
            <p>{company.cityStateZip}</p>
            <p>
              <a className="transition hover:text-[var(--color-yellow)]" href={`tel:${company.phoneRaw}`}>
                {company.phoneDisplay}
              </a>
            </p>
            <p>
              <a className="transition hover:text-[var(--color-yellow)]" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </p>
          </address>

          <p className="comic-heavy mt-6 text-[0.72rem] tracking-[0.18em] text-[var(--color-yellow)]">
            Shop Hours
          </p>
          <ul className="mt-3 space-y-1.5 text-sm leading-6 text-[rgba(251,244,226,0.84)]">
            {company.hours.map((hours) => (
              <li key={hours}>{hours}</li>
            ))}
          </ul>

          <p className="comic-heavy mt-6 text-[0.72rem] tracking-[0.18em] text-[var(--color-yellow)]">
            Service Area
          </p>
          <p className="mt-3 text-sm leading-7 text-[rgba(251,244,226,0.84)]">
            {serviceAreas.slice(0, 6).join(" · ")} and the greater Puget Sound.
          </p>
        </div>
      </Container>

      <div className="border-t-[2.5px] border-[rgba(251,244,226,0.2)] py-4">
        <Container className="flex flex-col gap-2 text-xs text-[rgba(251,244,226,0.6)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>Wrapping the Pacific Northwest since {company.foundedYear}.</p>
        </Container>
      </div>
    </footer>
  );
}
