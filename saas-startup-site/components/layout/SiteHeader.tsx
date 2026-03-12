import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { NavLinks } from "@/components/layout/NavLinks";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header sticky top-0 z-50 pointer-events-none">
      <Container className="relative pt-3 sm:pt-4">
        <div className="pointer-events-auto command-shell px-4 py-3 backdrop-blur-xl sm:px-5">
          <div className="relative z-[1] flex items-center gap-4">
            <Link href="/" className="inline-flex shrink-0 items-center gap-3" aria-label="OrbitOps home">
              <span className="relative flex h-11 w-11 items-center justify-center rounded-[0.95rem] border border-cyan-300/18 bg-[linear-gradient(160deg,rgba(103,232,249,0.18),rgba(8,18,35,0.98))] shadow-[0_20px_36px_-22px_rgba(13,191,255,0.62)]">
                <span className="font-mono text-[0.7rem] font-semibold tracking-[0.22em] text-sky-100">
                  OO
                </span>
              </span>
              <span>
                <span className="block font-display text-lg font-semibold tracking-[-0.04em] text-white">
                  {siteConfig.name}
                </span>
                <span className="data-label mt-0.5 hidden text-[0.64rem] text-slate-500 sm:block">
                  Command surface
                </span>
              </span>
            </Link>

            <div className="hidden min-w-0 flex-1 items-center gap-4 lg:flex">
              <nav className="min-w-0 flex-1" aria-label="Primary navigation">
                <NavLinks className="justify-center" />
              </nav>

              <div className="hidden items-center gap-2 xl:flex">
                <span className="command-chip-subtle">
                  <span className="signal-dot" />
                  prod / us-east
                </span>
                <span className="command-chip-subtle">328 flows live</span>
              </div>
            </div>

            <div className="relative z-[1] ml-auto flex items-center gap-3">
              <div className="hidden md:block">
                <ButtonLink href="/contact" className="px-4">
                  Start evaluation
                </ButtonLink>
              </div>

              <MobileMenu />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
