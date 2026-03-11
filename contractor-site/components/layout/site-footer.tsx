import Link from "next/link";

import { Container } from "@/components/layout/container";
import { ButtonLink, buttonClassName } from "@/components/ui/button-link";
import { company, navLinks, serviceAreas, services } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:rgba(255,255,255,0.08)] bg-[var(--color-brand-deep)] text-[color:rgba(247,242,234,0.82)]">
      <Container className="grid gap-10 py-16 lg:grid-cols-[1.25fr_0.85fr_0.9fr] lg:gap-12 lg:py-20">
        <div>
          <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent-soft)]">
            Blue Oak Remodeling Co.
          </p>
          <h2 className="mt-4 max-w-sm font-display text-[2.8rem] leading-[0.96] text-[var(--color-surface)]">
            Residential renovations shaped by proportion, material restraint, and dependable execution.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-[color:rgba(255,250,243,0.72)] sm:text-base">
            {company.tagline} We partner with homeowners who want practical luxury, dependable
            process, and rooms that feel tailored to real life.
          </p>
          <div className="editorial-rule mt-6 max-w-xs bg-[linear-gradient(90deg,rgba(234,219,193,0.88),rgba(234,219,193,0))]" />
          <p className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-soft)]">
            {company.license}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/contact" variant="light">
              Request Consultation
            </ButtonLink>
            <a href={`tel:${company.phoneRaw}`} className={buttonClassName("outline")}>
              Call {company.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="grid gap-8 border-t border-[color:rgba(255,255,255,0.08)] pt-8 sm:grid-cols-2 lg:border-t-0 lg:pt-0">
          <div>
            <h3 className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-soft)]">
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[color:rgba(255,250,243,0.74)]">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link className="transition hover:text-white" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-soft)]">
              Core Services
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-[color:rgba(255,250,243,0.74)]">
              {services.map((service) => (
                <li key={service.id}>{service.name}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[color:rgba(255,255,255,0.08)] pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <h3 className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-soft)]">
            Contact
          </h3>
          <address className="mt-4 space-y-2 text-sm not-italic text-[color:rgba(255,250,243,0.74)] sm:text-base">
            <p>{company.addressLine}</p>
            <p>{company.cityStateZip}</p>
            <p>
              <a className="transition hover:text-white" href={`tel:${company.phoneRaw}`}>
                {company.phoneDisplay}
              </a>
            </p>
            <p>
              <a className="transition hover:text-white" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </p>
          </address>

          <p className="mt-6 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-soft)]">
            Studio Hours
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-[color:rgba(255,250,243,0.74)]">
            {company.hours.map((hours) => (
              <li key={hours}>{hours}</li>
            ))}
          </ul>

          <p className="mt-6 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-soft)]">
            Service Area
          </p>
          <p className="mt-3 text-sm leading-7 text-[color:rgba(255,250,243,0.74)] sm:text-base">
            {serviceAreas.slice(0, 4).join(" • ")} and nearby neighborhoods.
          </p>
        </div>
      </Container>

      <div className="border-t border-[color:rgba(255,255,255,0.08)] py-4">
        <Container className="flex flex-col gap-2 text-xs text-[color:rgba(255,250,243,0.56)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>Concept/demo portfolio website built to represent real client-style deliverables.</p>
        </Container>
      </div>
    </footer>
  );
}
