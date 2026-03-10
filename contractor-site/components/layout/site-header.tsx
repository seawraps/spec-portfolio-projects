import Link from "next/link";

import { Container } from "@/components/layout/container";
import { MainNav } from "@/components/layout/main-nav";
import { company, navLinks } from "@/lib/data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 pb-2 pt-3 md:pb-3 md:pt-4">
      <Container className="space-y-3">
        <div className="rounded-[1.35rem] border border-[color:rgba(255,255,255,0.1)] bg-[color:rgba(22,36,52,0.92)] px-4 py-2 text-[color:rgba(255,250,243,0.82)] shadow-[0_18px_44px_-30px_rgba(18,29,40,0.82)] backdrop-blur-xl">
          <div className="flex flex-col items-start gap-2 text-[0.62rem] uppercase tracking-[0.22em] sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <p className="max-w-[26rem] leading-relaxed sm:max-w-none sm:leading-normal">
              {company.license}
            </p>
            <p className="max-w-[28rem] leading-relaxed text-[color:rgba(255,250,243,0.72)] sm:max-w-none sm:leading-normal">
              Serving {company.primaryServiceArea}
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[color:rgba(36,54,75,0.12)] bg-[color:rgba(255,250,243,0.86)] p-3 shadow-[0_28px_80px_-42px_rgba(18,29,40,0.34)] backdrop-blur-xl sm:p-4">
          <div className="grid gap-4 lg:grid-cols-[auto_1fr_auto] lg:items-center">
            <Link
              href="/"
              className="inline-flex min-w-0 items-center gap-3 pr-4"
              aria-label="Blue Oak Remodeling home"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[color:rgba(36,54,75,0.14)] bg-[var(--color-surface)] text-sm font-semibold tracking-[0.18em] text-[var(--color-brand)] shadow-[0_18px_40px_-28px_rgba(22,36,52,0.45)] sm:h-[3.25rem] sm:w-[3.25rem]">
                BO
              </span>
              <span className="min-w-0">
                <span className="block font-display text-[1.95rem] leading-none text-[var(--color-brand)] sm:text-[2.2rem]">
                  Blue Oak
                </span>
                <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">
                  Remodeling Co. | Est. {company.foundedYear}
                </span>
                <span className="mt-1 block text-xs text-[var(--color-muted)]">
                  Kitchens, baths, and lived-in residential interiors.
                </span>
              </span>
            </Link>

            <div className="hidden lg:flex justify-center">
              <MainNav
                links={navLinks}
                phoneDisplay={company.phoneDisplay}
                phoneRaw={company.phoneRaw}
              />
            </div>

            <div className="flex justify-end lg:hidden">
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
