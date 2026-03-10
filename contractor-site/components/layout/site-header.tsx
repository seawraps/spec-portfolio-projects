import Link from "next/link";

import { Container } from "@/components/layout/container";
import { MainNav } from "@/components/layout/main-nav";
import { company, navLinks } from "@/lib/data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:rgba(36,54,75,0.1)] bg-[color:rgba(247,240,230,0.9)] backdrop-blur-xl">
      <div className="border-b border-[color:rgba(255,255,255,0.08)] bg-[var(--color-brand-deep)] text-[color:rgba(255,250,243,0.82)]">
        <Container className="flex flex-col items-start gap-2 py-2 text-[0.65rem] uppercase tracking-[0.2em] sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <p className="max-w-[24rem] leading-relaxed sm:max-w-none sm:leading-normal">
            {company.license}
          </p>
          <p className="max-w-[24rem] leading-relaxed sm:max-w-none sm:leading-normal">
            Serving {company.primaryServiceArea}
          </p>
        </Container>
      </div>

      <Container className="py-4 lg:py-5">
        <div className="grid gap-4 xl:grid-cols-[auto_1fr_auto] xl:items-center">
          <Link
            href="/"
            className="inline-flex min-w-0 items-center gap-3"
            aria-label="Blue Oak Remodeling home"
          >
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[color:rgba(36,54,75,0.14)] bg-[var(--color-surface)] text-sm font-semibold tracking-[0.18em] text-[var(--color-brand)] shadow-[0_18px_40px_-28px_rgba(22,36,52,0.45)] sm:h-[3.25rem] sm:w-[3.25rem]">
              BO
            </span>
            <span className="min-w-0">
              <span className="block font-display text-[2rem] leading-none text-[var(--color-brand)] sm:text-[2.25rem]">
                Blue Oak
              </span>
              <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">
                Remodeling Co. | Est. {company.foundedYear}
              </span>
            </span>
          </Link>

          <div className="hidden xl:flex justify-center">
            <MainNav
              links={navLinks}
              phoneDisplay={company.phoneDisplay}
              phoneRaw={company.phoneRaw}
            />
          </div>

          <div className="flex justify-end xl:hidden">
            <MainNav
              links={navLinks}
              phoneDisplay={company.phoneDisplay}
              phoneRaw={company.phoneRaw}
            />
          </div>
        </div>
      </Container>
    </header>
  );
}
