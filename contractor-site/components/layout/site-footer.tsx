import Link from "next/link";

import { Container } from "@/components/layout/container";
import { company, navLinks, serviceAreas, services } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:rgba(255,250,243,0.08)] bg-[var(--color-brand-deep)] text-[color:rgba(255,250,243,0.82)]">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.2fr_0.9fr_0.9fr]">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-soft)]">
            Blue Oak Remodeling Co.
          </p>
          <h2 className="mt-3 max-w-sm font-display text-4xl leading-tight text-[var(--color-surface)]">
            Residential renovations with a calmer, more considered process.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-[color:rgba(255,250,243,0.7)]">
            {company.tagline} We partner with homeowners who want practical luxury, respectful
            crews, and a finished result that still feels like home.
          </p>
          <p className="mt-5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-soft)]">
            {company.license}
          </p>
        </div>

        <div>
          <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-soft)]">
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
          <h4 className="mt-7 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-soft)]">
            Core Services
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-[color:rgba(255,250,243,0.74)]">
            {services.map((service) => (
              <li key={service.id}>{service.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-soft)]">
            Contact
          </h3>
          <address className="mt-4 space-y-2 text-sm not-italic text-[color:rgba(255,250,243,0.74)]">
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
          <p className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-soft)]">
            Service Area
          </p>
          <p className="mt-2 text-sm leading-7 text-[color:rgba(255,250,243,0.74)]">
            {serviceAreas.slice(0, 4).join(" • ")} and nearby neighborhoods.
          </p>
        </div>
      </Container>

      <div className="border-t border-[color:rgba(255,250,243,0.08)] py-4">
        <Container className="flex flex-col gap-2 text-xs text-[color:rgba(255,250,243,0.56)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>
            Concept/demo portfolio website built to represent real client-style deliverables.
          </p>
        </Container>
      </div>
    </footer>
  );
}
