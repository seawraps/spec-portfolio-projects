import Link from "next/link";

import { Container } from "@/components/layout/container";
import { MainNav } from "@/components/layout/main-nav";
import { ButtonLink } from "@/components/ui/button-link";
import { BrandLogo } from "@/components/ui/brand-logo";
import { company, navLinks } from "@/lib/data";

export function SiteHeader() {
  return (
    <header className="on-dark sticky top-0 z-50 border-b border-[var(--line-darker)] bg-[color-mix(in_srgb,var(--ink)_88%,transparent)] backdrop-blur-md">
      <Container className="flex items-center justify-between gap-4 py-4">
        <Link
          href="/"
          className="inline-flex min-w-0 items-center gap-3"
          aria-label="Wu Wraps home"
        >
          <BrandLogo size={40} />
          <span className="min-w-0">
            <span className="display block text-[1.35rem] leading-none text-[var(--bone)]">
              Wu Wraps
            </span>
            <span className="label mt-1 block text-[0.56rem] tracking-[0.24em] text-[var(--mist)]">
              Renton, Washington
            </span>
          </span>
        </Link>

        <div className="hidden lg:block">
          <MainNav links={navLinks} mode="desktop" />
        </div>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={`tel:${company.phoneRaw}`}
            className="label text-[0.72rem] text-[var(--mist)] hover:text-[var(--bone)]"
          >
            {company.phoneDisplay}
          </a>
          <ButtonLink href="/contact" variant="cedar" className="min-h-10 px-5">
            Book a Consult
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
    </header>
  );
}
