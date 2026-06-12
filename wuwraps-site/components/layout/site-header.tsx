import Link from "next/link";

import { Container } from "@/components/layout/container";
import { MainNav } from "@/components/layout/main-nav";
import { ButtonLink } from "@/components/ui/button-link";
import { BrandLogo } from "@/components/ui/brand-logo";
import { company, navLinks } from "@/lib/data";

export function SiteHeader() {
  const desktopNavLinks = navLinks;

  return (
    <header className="sticky top-0 z-50">
      {/* Top ticker bar */}
      <div className="halftone-ink text-[var(--color-paper)]">
        <Container className="flex min-h-9 flex-col items-center justify-center gap-1 py-1.5 text-center sm:flex-row sm:justify-between">
          <p className="comic-heavy text-[0.6rem] tracking-[0.16em] text-[var(--color-yellow)]">
            {company.badge}
          </p>
          <p className="comic-heavy text-[0.6rem] tracking-[0.16em]">
            New, bigger shop now open in {company.addressLine} · {company.cityStateZip}
          </p>
        </Container>
      </div>

      <div className="border-y border-[var(--color-line)] bg-[var(--color-paper)]">
        <Container className="flex items-center justify-between gap-4 py-3">
          <Link
            href="/"
            className="inline-flex min-w-0 items-center gap-3"
            aria-label="Wu Wraps home"
          >
            <BrandLogo size={50} />
            <span className="min-w-0">
              <span className="comic-display block text-[1.9rem] leading-none text-[var(--color-ink)] sm:text-[2.2rem]">
                Wu Wraps
              </span>
              <span className="comic-heavy mt-0.5 block text-[0.56rem] tracking-[0.18em] text-[var(--color-red)] sm:text-[0.62rem]">
                Renton · Seattle Vinyl Wraps
              </span>
            </span>
          </Link>

          <div className="hidden lg:block">
            <MainNav links={desktopNavLinks} mode="desktop" />
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${company.phoneRaw}`}
              className="comic-heavy text-[0.78rem] tracking-[0.08em] text-[var(--color-ink)] hover:text-[var(--color-red)]"
            >
              {company.phoneDisplay}
            </a>
            <ButtonLink href="/contact" variant="red" className="px-4">
              Get a Quote
            </ButtonLink>
          </div>

          <div className="lg:hidden">
            <MainNav
              links={navLinks}
              mode="mobile"
              phoneDisplay={company.phoneDisplay}
              phoneRaw={company.phoneRaw}
            />
          </div>
        </Container>
      </div>
    </header>
  );
}
