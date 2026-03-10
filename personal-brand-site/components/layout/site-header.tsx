"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { navItems, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  function renderBrand(compact = false) {
    return (
      <Link
        href="/"
        className="group flex min-w-0 items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum"
        aria-label="Nadia Vale home"
      >
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[1.15rem] border border-ink/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(250,244,237,0.94))] text-sm font-extrabold tracking-[0.24em] text-ink shadow-[0_16px_32px_-22px_rgba(35,24,20,0.38)]">
          NV
        </div>
        <div className="min-w-0">
          <p className={cn("truncate font-display leading-none text-ink", compact ? "text-[1.72rem]" : "text-[1.85rem]")}>
            {siteConfig.name}
          </p>
          <div
            className={cn(
              "mt-1 items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-mocha/72",
              compact ? "hidden sm:flex" : "flex",
            )}
          >
            <span>Editorial Advisor</span>
            <span className="h-1 w-1 rounded-full bg-plum/70" />
            <span className="truncate">Speaker and Media Host</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <header className="sticky top-0 z-50 px-3 pt-3">
      <Container>
        <div className="surface-card overflow-hidden bg-[rgb(249_244_238/0.88)]">
          <div className="grid gap-2 border-b border-ink/8 px-4 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-mocha/70 sm:px-6 lg:grid-cols-[auto_1fr_auto] lg:items-center">
            <div className="flex flex-wrap items-center gap-3">
              <span>{siteConfig.location}</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 lg:justify-center">
              <span>Editorial Brand Studio</span>
              <span className="hidden h-1 w-1 rounded-full bg-plum lg:block" />
              <span className="hidden lg:inline">Selective keynote, advisory, and media dates</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <a className="text-ink hover:text-plum" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </div>
          </div>

          <div className="hidden items-center gap-8 px-5 py-5 lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.8fr)_minmax(0,1fr)]">
            {renderBrand()}

            <div className="min-w-0 border-l border-r border-ink/8 px-6">
              <p className="text-center text-[0.58rem] font-semibold uppercase tracking-[0.32em] text-mocha/60">
                Desk Index
              </p>
              <nav className="mt-4 flex items-center justify-center gap-6" aria-label="Primary navigation">
                {navItems.map((item, index) => {
                  const active = isActivePath(pathname, item.href);

                  return (
                    <div key={item.href} className="flex items-center gap-6">
                      <Link
                        href={item.href}
                        className={cn(
                          "group relative inline-flex items-center gap-2 py-1 text-sm font-medium text-mocha/82 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum",
                          active ? "text-ink" : "",
                        )}
                        aria-current={active ? "page" : undefined}
                      >
                        <span
                          className={cn(
                            "h-1.5 w-1.5 rounded-full bg-plum/24 transition-colors group-hover:bg-plum",
                            active ? "bg-plum shadow-[0_0_0_4px_rgba(122,63,55,0.1)]" : "",
                          )}
                        />
                        <span>{item.label}</span>
                        <span
                          className={cn(
                            "absolute -bottom-2 left-0 right-0 h-px origin-left bg-[linear-gradient(90deg,rgba(122,63,55,0.9),transparent)] transition-transform duration-200",
                            active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                          )}
                        />
                      </Link>
                      {index < navItems.length - 1 ? <span className="h-4 w-px bg-ink/10" /> : null}
                    </div>
                  );
                })}
              </nav>
            </div>

            <div className="justify-self-end rounded-[1.7rem] border border-ink/8 bg-white/74 px-5 py-4 shadow-[0_20px_42px_-32px_rgba(35,24,20,0.24)]">
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-mocha/66">
                Booking Desk
              </p>
              <div className="mt-4 flex items-center gap-4">
                <p className="max-w-[16rem] text-sm leading-6 text-ink">
                  Keynotes, advisory, and media-ready workshop rooms with senior attention.
                </p>
                <ButtonLink href="/contact" variant="primary" className="shrink-0" arrow>
                  Request availability
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 px-4 py-4 lg:hidden sm:px-6">
            {renderBrand(true)}

            <button
              type="button"
              className="inline-flex h-11 items-center justify-center rounded-[1.15rem] border border-ink/12 bg-white/82 px-5 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-ink shadow-[0_16px_32px_-28px_rgba(35,24,20,0.24)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setIsOpen((value) => !value)}
            >
              {isOpen ? "Close" : "Menu"}
            </button>
          </div>

          {isOpen ? (
            <nav
              id="mobile-nav"
              className="border-t border-ink/8 bg-[rgb(255_250_244/0.94)] px-4 py-5 lg:hidden sm:px-6"
              aria-label="Mobile primary navigation"
            >
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-mocha/62">
                Desk Index
              </p>

              <div className="mt-4 grid gap-3">
                {navItems.map((item) => {
                  const active = isActivePath(pathname, item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center justify-between gap-4 rounded-[1.5rem] border border-ink/8 bg-white/76 px-4 py-4 text-sm font-medium text-mocha/88 hover:border-plum/15 hover:bg-paper-soft hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum",
                        active ? "border-plum/12 bg-paper-soft text-ink" : "",
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      <span className="flex items-center gap-3">
                        <span className={cn("h-1.5 w-1.5 rounded-full bg-plum/28", active ? "bg-plum" : "")} />
                        <span className="block text-lg text-inherit">{item.label}</span>
                      </span>
                      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-mocha/58">
                        {active ? "Current" : "Open"}
                      </span>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-4 rounded-[1.7rem] border border-ink/8 bg-white/76 p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-mocha/72">
                    Editorial Booking Desk
                  </p>
                  <a className="text-sm font-semibold text-ink hover:text-plum" href={`mailto:${siteConfig.email}`}>
                    {siteConfig.email}
                  </a>
                </div>
                <p className="mt-3 text-base leading-7 text-ink">
                  Keynotes, workshops, and advisory work shaped to feel sharp in the room and strong in the follow-up.
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <ButtonLink
                    href="/contact"
                    variant="primary"
                    className="w-full justify-center sm:w-auto"
                    arrow
                    onClick={() => setIsOpen(false)}
                  >
                    Request availability
                  </ButtonLink>
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-mocha/68">
                    Brooklyn-based. Selective calendar.
                  </span>
                </div>
              </div>
            </nav>
          ) : null}
        </div>
      </Container>
    </header>
  );
}
