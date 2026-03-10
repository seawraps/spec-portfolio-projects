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
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-[rgb(249_244_238/0.82)] backdrop-blur-xl">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum"
            aria-label="Nadia Vale home"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-sm font-extrabold tracking-[0.24em] text-ink shadow-[0_16px_32px_-22px_rgba(35,24,20,0.38)]">
              NV
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold uppercase tracking-[0.22em] text-ink">
                {siteConfig.name}
              </p>
              <p className="truncate text-xs text-mocha/80">{siteConfig.role}</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium text-mocha/88 hover:bg-white/88 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum",
                    active ? "bg-white text-ink shadow-[0_12px_28px_-18px_rgba(35,24,20,0.3)]" : "",
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
                Now booking
              </p>
              <p className="text-sm text-ink">Q3 keynotes and advisory</p>
            </div>
            <ButtonLink href="/contact" variant="primary" arrow>
              Start an Inquiry
            </ButtonLink>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/12 bg-white/78 text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen((value) => !value)}
          >
            <span className="text-lg font-semibold">{isOpen ? "X" : "+"}</span>
          </button>
        </div>

        {isOpen ? (
          <nav
            id="mobile-nav"
            className="paper-panel mt-4 space-y-2 p-4 lg:hidden"
            aria-label="Mobile primary navigation"
          >
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block rounded-2xl px-4 py-3 text-sm font-medium text-mocha/88 hover:bg-paper-deep/65 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum",
                    active ? "bg-ink text-white hover:bg-ink hover:text-white" : "",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
            <ButtonLink
              href="/contact"
              variant="primary"
              className="mt-2 w-full justify-center"
              arrow
              onClick={() => setIsOpen(false)}
            >
              Start an Inquiry
            </ButtonLink>
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
