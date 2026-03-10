import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { NavLinks } from "@/components/layout/NavLinks";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-4 z-40">
      <Container className="relative">
        <div className="relative flex h-[4.7rem] items-center justify-between rounded-[1.9rem] border border-white/10 bg-[#07111d]/70 px-4 shadow-[0_26px_60px_-34px_rgba(0,8,18,0.82)] backdrop-blur-2xl sm:px-5">
          <div
            className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top_left,rgba(101,226,255,0.16),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(99,241,213,0.12),transparent_26%)]"
            aria-hidden="true"
          />
        <Link href="/" className="inline-flex items-center gap-3" aria-label="OrbitOps home">
          <span className="relative z-[1] flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(160deg,rgba(101,226,255,0.18),rgba(7,17,31,0.98))] shadow-[0_20px_36px_-22px_rgba(13,191,255,0.62)]">
            <span className="font-mono text-[0.7rem] font-semibold tracking-[0.22em] text-sky-100">
              OO
            </span>
          </span>
          <span className="relative z-[1]">
            <span className="block font-display text-lg font-semibold tracking-[-0.04em] text-white">
              {siteConfig.name}
            </span>
            <span className="data-label mt-0.5 hidden text-[0.66rem] text-slate-400 sm:block">
              Control plane
            </span>
          </span>
        </Link>

          <div className="relative z-[1] hidden items-center gap-3 lg:flex">
            <div className="glass-chip flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.8)]" />
              Live status:
              <span className="text-white">99.97% automation health</span>
            </div>
            <nav className="hidden md:flex" aria-label="Primary navigation">
              <NavLinks />
            </nav>
          </div>

          <div className="relative z-[1] flex items-center gap-3">
            <div className="hidden md:block">
              <ButtonLink href="/contact" className="px-4">
                Start evaluation
              </ButtonLink>
            </div>

            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}
