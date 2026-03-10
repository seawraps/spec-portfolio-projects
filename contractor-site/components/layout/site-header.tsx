import Link from "next/link";

import { Container } from "@/components/layout/container";
import { MainNav } from "@/components/layout/main-nav";
import { company, navLinks } from "@/lib/data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 pt-4 md:pt-5">
      <Container>
        <div className="rounded-[2.2rem] border border-[color:rgba(36,54,75,0.08)] bg-[color:rgba(255,250,243,0.9)] shadow-[0_26px_72px_-42px_rgba(18,29,40,0.34)] backdrop-blur-xl">
          <div className="px-5 py-4 sm:px-6 sm:py-5">
            <div className="flex flex-col gap-2 border-b border-[color:rgba(36,54,75,0.08)] pb-3 text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)] sm:text-[0.61rem] md:flex-row md:items-center md:justify-between">
              <p className="max-w-[29rem] leading-6 text-[color:rgba(36,54,75,0.8)]">
                {company.license}
              </p>
              <p className="max-w-[36rem] leading-6 md:text-right">
                Serving {company.primaryServiceArea}
              </p>
            </div>

            <div className="mt-4 hidden lg:grid lg:grid-cols-[minmax(0,21rem)_1fr_auto] lg:items-center lg:gap-8">
              <Link
                href="/"
                className="inline-flex min-w-0 items-start gap-4"
                aria-label="Blue Oak Remodeling home"
              >
                <span className="inline-flex h-[3.15rem] w-[3.15rem] shrink-0 items-center justify-center rounded-full border border-[color:rgba(36,54,75,0.12)] bg-[color:rgba(255,250,243,0.82)] text-sm font-semibold tracking-[0.18em] text-[var(--color-brand)]">
                  BO
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-[2.2rem] leading-none text-[var(--color-brand)]">
                    Blue Oak
                  </span>
                  <span className="mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)]">
                    Remodeling Co. | Est. {company.foundedYear}
                  </span>
                  <span className="mt-2 block max-w-[17rem] text-sm leading-6 text-[var(--color-muted)]">
                    Kitchens, baths, and lived-in residential interiors.
                  </span>
                </span>
              </Link>

              <div className="flex justify-center">
                <MainNav
                  links={navLinks}
                  phoneDisplay={company.phoneDisplay}
                  phoneRaw={company.phoneRaw}
                />
              </div>

              <div className="flex items-center gap-6">
                <a href={`tel:${company.phoneRaw}`} className="text-right">
                  <span className="block text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                    Consultation Line
                  </span>
                  <span className="mt-2 block text-lg font-semibold text-[var(--color-brand)]">
                    {company.phoneDisplay}
                  </span>
                  <span className="mt-1 block text-[0.74rem] text-[var(--color-muted)]">
                    Weekday walkthrough scheduling
                  </span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-deep)] shadow-[0_20px_48px_-28px_rgba(180,136,72,0.76)] transition hover:-translate-y-0.5 hover:bg-[#c49657] hover:shadow-[0_28px_56px_-30px_rgba(180,136,72,0.84)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                >
                  Request Consultation
                </Link>
              </div>
            </div>

            <div className="mt-4 space-y-3 lg:hidden">
              <Link
                href="/"
                className="inline-flex min-w-0 items-center gap-3"
                aria-label="Blue Oak Remodeling home"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[color:rgba(36,54,75,0.12)] bg-[color:rgba(255,250,243,0.82)] text-[0.92rem] font-semibold tracking-[0.18em] text-[var(--color-brand)]">
                  BO
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-[2.1rem] leading-none text-[var(--color-brand)]">
                    Blue Oak
                  </span>
                  <span className="mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
                    Remodeling Co. | Est. {company.foundedYear}
                  </span>
                  <span className="mt-2 block max-w-[17rem] text-sm leading-6 text-[var(--color-muted)]">
                    Kitchens, baths, and premium residential interiors.
                  </span>
                </span>
              </Link>

              <MainNav
                links={navLinks}
                phoneDisplay={company.phoneDisplay}
                phoneRaw={company.phoneRaw}
              />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
