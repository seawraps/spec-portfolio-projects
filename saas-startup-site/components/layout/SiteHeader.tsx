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
        <div className="surface-panel-dark relative overflow-hidden rounded-[2rem] px-4 py-3 sm:px-5">
          <div
            className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top_left,rgba(101,226,255,0.16),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(99,241,213,0.12),transparent_26%)]"
            aria-hidden="true"
          />
          <div className="relative z-[1] flex items-center gap-4">
            <Link href="/" className="inline-flex shrink-0 items-center gap-3" aria-label="OrbitOps home">
              <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(160deg,rgba(101,226,255,0.18),rgba(7,17,31,0.98))] shadow-[0_20px_36px_-22px_rgba(13,191,255,0.62)]">
                <span className="font-mono text-[0.7rem] font-semibold tracking-[0.22em] text-sky-100">
                  OO
                </span>
              </span>
              <span>
                <span className="block font-display text-lg font-semibold tracking-[-0.04em] text-white">
                  {siteConfig.name}
                </span>
                <span className="data-label mt-0.5 hidden text-[0.66rem] text-slate-400 sm:block">
                  Control plane
                </span>
              </span>
            </Link>

            <div className="hidden min-w-0 flex-1 items-center gap-3 lg:flex">
              <div className="min-w-[12rem] rounded-[1.25rem] border border-white/10 bg-white/5 px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <p className="data-label text-slate-500">System sync</p>
                <div className="mt-2 flex items-center gap-2 text-xs text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.8)]" />
                  <span className="text-white">99.97% healthy</span>
                </div>
              </div>

              <nav className="min-w-0 flex-1" aria-label="Primary navigation">
                <NavLinks className="justify-center" />
              </nav>
            </div>

            <div className="ml-auto hidden items-center gap-3 xl:flex">
              <div className="rounded-[1.25rem] border border-white/10 bg-white/5 px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <p className="data-label text-slate-500">Control loop</p>
                <p className="mt-2 text-sm font-semibold text-white">28ms orchestration latency</p>
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
