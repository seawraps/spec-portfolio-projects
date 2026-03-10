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

  function renderBrand() {
    return (
      <Link
        href="/"
        className="group flex min-w-0 items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum"
        aria-label="Nadia Vale home"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-sm font-extrabold tracking-[0.24em] text-ink shadow-[0_16px_32px_-22px_rgba(35,24,20,0.38)]">
          NV
        </div>
        <div className="min-w-0">
          <p className="truncate font-display text-[1.55rem] leading-none text-ink sm:text-[1.75rem]">
            {siteConfig.name}
          </p>
          <p className="truncate text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-mocha/76">
            {siteConfig.role}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <header className="sticky top-0 z-50 px-3 pt-3">
      <Container>
        <div className="surface-card overflow-hidden bg-[rgb(249_244_238/0.86)]">
          <div className="grid gap-2 border-b border-ink/8 px-4 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-mocha/72 sm:grid-cols-[1fr_auto] sm:items-center sm:px-6">
            <div className="flex flex-wrap items-center gap-3">
              <span>{siteConfig.location}</span>
              <span className="hidden h-1 w-1 rounded-full bg-plum sm:block" />
              <span>Editorial Brand Studio</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:justify-end">
              <span className="hidden sm:inline">Now booking keynote rooms and advisory partners</span>
              <a className="text-ink hover:text-plum" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </div>
          </div>

          <div className="hidden items-center gap-6 px-4 py-4 lg:grid lg:grid-cols-[minmax(0,0.9fr)_auto_minmax(0,1.1fr)] lg:px-6">
            {renderBrand()}

            <div className="flex justify-center">
              <div className="rounded-[1.55rem] border border-ink/8 bg-white/76 px-3 py-2 shadow-[0_20px_42px_-32px_rgba(35,24,20,0.28)]">
                <p className="px-2 text-[0.55rem] font-semibold uppercase tracking-[0.3em] text-mocha/62">
                  Browse the studio
                </p>
                <nav className="mt-2 flex items-center gap-1" aria-label="Primary navigation">
                  {navItems.map((item) => {
                    const active = isActivePath(pathname, item.href);

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "rounded-full px-4 py-2 text-sm font-medium text-mocha/88 hover:bg-paper-soft hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum",
                          active ? "bg-ink text-white hover:bg-ink hover:text-white" : "",
                        )}
                        aria-current={active ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="flex items-center gap-4 rounded-[1.7rem] border border-ink/8 bg-white/70 px-4 py-3 shadow-[0_20px_42px_-32px_rgba(35,24,20,0.24)]">
                <div className="text-right">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-mocha/68">
                    Booking Desk
                  </p>
                  <p className="mt-1 max-w-[15rem] text-sm leading-6 text-ink">
                    Keynotes, advisory, and media-ready workshop rooms with senior attention.
                  </p>
                </div>
                <ButtonLink href="/contact" variant="primary" className="shrink-0" arrow>
                  Request availability
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 px-4 py-4 lg:hidden sm:px-6">
            {renderBrand()}

            <div className="flex items-center gap-3">
              <a
                className="hidden rounded-full border border-ink/10 bg-white/78 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-ink hover:text-plum sm:inline-flex"
                href={`mailto:${siteConfig.email}`}
              >
                Email
              </a>
              <button
                type="button"
                className="inline-flex h-11 items-center justify-center rounded-full border border-ink/12 bg-white/78 px-4 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum"
                aria-expanded={isOpen}
                aria-controls="mobile-nav"
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                onClick={() => setIsOpen((value) => !value)}
              >
                {isOpen ? "Close" : "Menu"}
              </button>
            </div>
          </div>

          {isOpen ? (
            <nav
              id="mobile-nav"
              className="border-t border-ink/8 bg-[rgb(255_250_244/0.92)] px-4 py-5 lg:hidden sm:px-6"
              aria-label="Mobile primary navigation"
            >
              <div className="grid gap-3 sm:grid-cols-2">
                {navItems.map((item) => {
                  const active = isActivePath(pathname, item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block rounded-[1.5rem] border border-ink/8 bg-white/74 px-4 py-4 text-sm font-medium text-mocha/88 hover:bg-paper-deep/65 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum",
                        active ? "bg-ink text-white hover:bg-ink hover:text-white" : "",
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-mocha/58">
                        Studio
                      </span>
                      <span className="mt-2 block text-lg text-inherit">{item.label}</span>
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
