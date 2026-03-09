import Link from "next/link";

import { Container } from "@/components/layout/container";
import { company, navLinks, serviceAreas } from "@/lib/data";

const footerServices = [
  "Kitchen Remodeling",
  "Bathroom Renovation",
  "Whole-Home Refresh",
  "Outdoor Living Upgrades",
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-white">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <h2 className="font-display text-3xl text-[var(--color-brand)]">{company.name}</h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-[var(--color-muted)]">
            {company.tagline} We build thoughtful renovations with dependable communication,
            clean project execution, and durable craftsmanship.
          </p>
          <p className="mt-4 text-sm font-medium text-[var(--color-brand)]">{company.license}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]">
            Explore
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-[var(--color-muted)]">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-[var(--color-brand)]" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <h4 className="mt-7 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]">
            Core Services
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-[var(--color-muted)]">
            {footerServices.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]">
            Contact
          </h3>
          <address className="mt-4 space-y-2 text-sm not-italic text-[var(--color-muted)]">
            <p>{company.addressLine}</p>
            <p>{company.cityStateZip}</p>
            <p>
              <a className="transition hover:text-[var(--color-brand)]" href={`tel:${company.phoneRaw}`}>
                {company.phoneDisplay}
              </a>
            </p>
            <p>
              <a className="transition hover:text-[var(--color-brand)]" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </p>
          </address>
          <p className="mt-6 text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-accent)]">
            Service Area
          </p>
          <p className="mt-2 text-sm text-[var(--color-muted)]">
            {serviceAreas.slice(0, 4).join(" • ")} and nearby neighborhoods.
          </p>
        </div>
      </Container>

      <div className="border-t border-[var(--color-border)] bg-[var(--color-brand-soft)] py-4">
        <Container className="flex flex-col gap-2 text-xs text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
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
