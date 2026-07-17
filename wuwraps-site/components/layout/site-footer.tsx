import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Formline } from "@/components/ui/formline";
import { BrandLogo } from "@/components/ui/brand-logo";
import { company, navLinks, serviceAreas } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="on-dark border-t border-[var(--line-darker)]">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.3fr_0.7fr_0.9fr] lg:py-20">
        <div>
          <div className="flex items-center gap-3">
            <BrandLogo size={44} />
            <p className="display text-2xl text-[var(--bone)]">Wu Wraps</p>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--mist)]">
            {company.tagline}
          </p>
          <Formline className="mt-6 h-3 w-32 opacity-80" />
          <p className="label mt-6 text-[0.64rem] text-[var(--mist)]">
            {company.appointmentNote}
          </p>
        </div>

        <div>
          <h2 className="label text-[0.66rem] text-[var(--mist)]">Studio</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-[var(--bone)]">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-[var(--cedar)]" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                className="transition hover:text-[var(--cedar)]"
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
          <h2 className="label text-[0.66rem] text-[var(--mist)]">Visit, by appointment</h2>
          <address className="mt-4 space-y-1.5 text-sm not-italic leading-7 text-[var(--bone)]">
            <p>
              {company.addressLine}, {company.cityStateZip}
            </p>
            <p>
              <a className="transition hover:text-[var(--cedar)]" href={`tel:${company.phoneRaw}`}>
                {company.phoneDisplay}
              </a>
            </p>
            <p>
              <a
                className="transition hover:text-[var(--cedar)]"
                href={`mailto:${company.email}`}
              >
                {company.email}
              </a>
            </p>
          </address>

          <ul className="mt-5 space-y-1 text-sm leading-6 text-[var(--mist)]">
            {company.hours.map((hours) => (
              <li key={hours}>{hours}</li>
            ))}
          </ul>

          <p className="mt-5 text-sm leading-7 text-[var(--mist)]">
            Serving {serviceAreas.slice(0, 6).join(", ")} and the greater Puget Sound.
          </p>
        </div>
      </Container>

      <div className="border-t border-[var(--line-darker)] py-5">
        <Container className="flex flex-col gap-2 text-xs text-[rgba(246,245,241,0.62)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>Wrapping the Pacific Northwest since {company.foundedYear}.</p>
        </Container>
      </div>
    </footer>
  );
}
