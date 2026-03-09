import Link from "next/link";

import { Container } from "@/components/layout/container";
import { MainNav } from "@/components/layout/main-nav";
import { company, navLinks } from "@/lib/data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[color:rgba(246,244,239,0.95)] backdrop-blur">
      <div className="bg-[var(--color-brand)] text-white">
        <Container className="flex items-center justify-between gap-4 py-2 text-xs sm:text-sm">
          <p className="font-medium">Serving {company.primaryServiceArea}</p>
          <a
            href={`tel:${company.phoneRaw}`}
            className="font-semibold text-[var(--color-accent-soft)] transition hover:text-white"
          >
            Call {company.phoneDisplay}
          </a>
        </Container>
      </div>

      <Container className="relative flex items-center justify-between py-4">
        <Link href="/" className="inline-flex items-center gap-3" aria-label="Blue Oak Remodeling home">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-brand)] text-sm font-bold tracking-wide text-white">
            BO
          </span>
          <span>
            <span className="block font-display text-2xl leading-none text-[var(--color-brand)]">
              Blue Oak
            </span>
            <span className="block text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
              Remodeling Co.
            </span>
          </span>
        </Link>

        <MainNav links={navLinks} />
      </Container>
    </header>
  );
}
