import Link from "next/link";

import { Container } from "@/components/layout/container";
import { MainNav } from "@/components/layout/main-nav";
import { company, navLinks } from "@/lib/data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[color:rgba(246,244,239,0.95)] backdrop-blur">
      <div className="bg-[var(--color-brand)] text-white">
        <Container className="flex flex-col items-start gap-1 py-2 text-xs sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:text-sm">
          <p className="max-w-[18rem] font-medium leading-relaxed sm:max-w-none sm:leading-normal">
            Serving {company.primaryServiceArea}
          </p>
          <a
            href={`tel:${company.phoneRaw}`}
            className="whitespace-nowrap font-semibold text-[var(--color-accent-soft)] transition hover:text-white"
          >
            Call {company.phoneDisplay}
          </a>
        </Container>
      </div>

      <Container className="relative flex items-center justify-between gap-3 py-3 sm:py-4">
        <Link
          href="/"
          className="inline-flex min-w-0 items-center gap-3"
          aria-label="Blue Oak Remodeling home"
        >
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)] text-sm font-bold tracking-wide text-white sm:h-10 sm:w-10">
            BO
          </span>
          <span className="min-w-0">
            <span className="block text-xl leading-none text-[var(--color-brand)] sm:text-2xl">
              Blue Oak
            </span>
            <span className="hidden text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-muted)] sm:block">
              Remodeling Co.
            </span>
          </span>
        </Link>

        <MainNav links={navLinks} />
      </Container>
    </header>
  );
}
