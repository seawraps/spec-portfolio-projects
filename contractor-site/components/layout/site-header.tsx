import Link from "next/link";

import { Container } from "@/components/layout/container";
import { MainNav } from "@/components/layout/main-nav";
import { ButtonLink } from "@/components/ui/button-link";
import { company, navLinks } from "@/lib/data";

export function SiteHeader() {
  const desktopNavLinks = navLinks.filter((link) => link.href !== "/");

  return (
    <header className="sticky top-0 z-50 border-b border-[color:rgba(31,35,39,0.14)] bg-[color:rgba(247,242,234,0.92)] backdrop-blur-xl">
      <div className="border-b border-[color:rgba(31,35,39,0.12)] bg-[var(--color-brand-deep)] text-[color:rgba(247,242,234,0.78)]">
        <Container className="flex min-h-11 flex-col justify-center gap-1 py-2 text-center text-[0.56rem] font-semibold uppercase tracking-[0.24em] sm:min-h-12 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-0">
          <p>{company.license}</p>
          <p>Serving {company.primaryServiceArea}</p>
          <p>Walkthroughs typically scheduled within 7 to 10 business days</p>
        </Container>
      </div>

      <Container className="py-4">
        <div className="grid gap-4 border-y border-[color:rgba(31,35,39,0.12)] py-4 lg:grid-cols-[minmax(0,18rem)_1fr_auto] lg:items-center lg:gap-6">
          <div className="flex min-w-0 items-center justify-between gap-4 lg:justify-start">
            <Link
              href="/"
              className="inline-flex min-w-0 items-center gap-3 sm:gap-4"
              aria-label="Blue Oak Remodeling home"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[0.8rem] border border-[color:rgba(31,35,39,0.14)] bg-[color:rgba(247,242,234,0.72)] text-[0.78rem] font-semibold tracking-[0.18em] text-[var(--color-brand)] sm:h-12 sm:w-12 sm:text-[0.82rem]">
                BO
              </span>
              <span className="min-w-0">
                <span className="block truncate font-display text-[1.85rem] leading-none text-[var(--color-brand)] sm:text-[2.1rem]">
                  Blue Oak
                </span>
                <span className="mt-1 flex flex-wrap items-center gap-2 text-[0.56rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)] sm:text-[0.6rem]">
                  <span>Residential Design-Build</span>
                  <span className="hidden sm:inline">Est. {company.foundedYear}</span>
                </span>
              </span>
            </Link>

            <div className="lg:hidden">
              <MainNav
                links={navLinks}
                mode="mobile"
                phoneDisplay={company.phoneDisplay}
                phoneRaw={company.phoneRaw}
              />
            </div>
          </div>

          <div className="hidden lg:flex lg:justify-center">
            <MainNav links={desktopNavLinks} mode="desktop" />
          </div>

          <div className="hidden items-center justify-end gap-4 lg:flex">
            <a
              href={`tel:${company.phoneRaw}`}
              className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-brand)]"
            >
              {company.phoneDisplay}
            </a>
            <ButtonLink href="/contact" variant="light" className="px-4">
              Request Consultation
            </ButtonLink>
          </div>
        </div>
      </Container>
    </header>
  );
}
