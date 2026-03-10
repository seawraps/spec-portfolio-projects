import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { NavLinks } from "@/components/layout/NavLinks";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <Container className="relative flex h-16 items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-3" aria-label="OrbitOps home">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-xs font-bold text-white">
            OO
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-slate-900">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden md:flex" aria-label="Primary navigation">
          <NavLinks />
        </nav>

        <div className="hidden md:block">
          <ButtonLink href="/contact">
            Request a Demo
          </ButtonLink>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}
