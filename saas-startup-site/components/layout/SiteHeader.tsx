import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { NavLinks } from "@/components/layout/NavLinks";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[#f8fbff]/84 backdrop-blur-xl">
      <Container className="relative flex h-[4.5rem] items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-3" aria-label="OrbitOps home">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 shadow-[0_18px_32px_-20px_rgba(8,15,31,0.52)]">
            <span className="font-mono text-[0.7rem] font-semibold tracking-[0.22em] text-sky-300">
              OO
            </span>
          </span>
          <span>
            <span className="block font-display text-lg font-semibold tracking-[-0.04em] text-slate-950">
              {siteConfig.name}
            </span>
            <span className="data-label mt-0.5 hidden text-[0.66rem] text-slate-500 sm:block">
              Operations orchestration
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex" aria-label="Primary navigation">
          <NavLinks />
        </nav>

        <div className="hidden md:block">
          <ButtonLink href="/contact" className="px-4">
            Book a demo
          </ButtonLink>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}
