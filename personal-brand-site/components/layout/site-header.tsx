"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

  return (
    <header className="sticky top-0 z-50 px-3 pt-3">
      <Container>
        <div className="surface-card overflow-hidden bg-[rgb(249_244_238/0.86)]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/8 px-4 py-3 text-[0.64rem] font-semibold uppercase tracking-[0.26em] text-mocha/72 sm:px-6">
            <div className="flex flex-wrap items-center gap-3">
              <span>{siteConfig.location}</span>
              <span className="hidden h-1 w-1 rounded-full bg-plum sm:block" />
              <span>Editorial Brand Studio</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-right">
              <span className="hidden sm:inline">Now booking keynote rooms and advisory partners</span>
              <a className="text-ink hover:text-plum" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
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

          <nav
            className="hidden items-center gap-1 rounded-full border border-ink/8 bg-white/72 p-1 shadow-[0_20px_42px_-32px_rgba(35,24,20,0.28)] lg:flex"
            aria-label="Primary navigation"
          >
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

            <div className="hidden items-center gap-4 lg:flex">
              <div className="text-right">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-mocha/72">
                  Availability
                </p>
                <p className="text-sm text-ink">Selective speaking, advisory, and partner work</p>
              </div>
              <ButtonLink href="/contact" variant="primary" arrow>
                Request availability
              </ButtonLink>
            </div>

            <button
              type="button"
              className="inline-flex h-11 items-center justify-center rounded-full border border-ink/12 bg-white/78 px-4 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum lg:hidden"
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
              className="border-t border-ink/8 bg-[rgb(255_250_244/0.92)] px-4 py-4 lg:hidden"
              aria-label="Mobile primary navigation"
            >
              <div className="space-y-2">
                {navItems.map((item) => {
                  const active = isActivePath(pathname, item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block rounded-[1.5rem] px-4 py-3 text-sm font-medium text-mocha/88 hover:bg-paper-deep/65 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum",
                        active ? "bg-ink text-white hover:bg-ink hover:text-white" : "",
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-4 rounded-[1.6rem] border border-ink/8 bg-white/72 p-4">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-mocha/72">
                  Now booking
                </p>
                <p className="mt-3 text-base leading-7 text-ink">
                  Keynotes, workshops, and advisory partnerships with clear story, strong taste, and commercial range.
                </p>
                <ButtonLink
                  href="/contact"
                  variant="primary"
                  className="mt-4 w-full justify-center"
                  arrow
                  onClick={() => setIsOpen(false)}
                >
                  Request availability
                </ButtonLink>
              </div>
            </nav>
          ) : null}
        </div>
      </Container>
    </header>
  );
}
