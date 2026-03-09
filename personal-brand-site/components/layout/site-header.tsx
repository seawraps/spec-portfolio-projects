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
    <header className="sticky top-0 z-50 border-b border-white/35 bg-white/55 backdrop-blur-xl">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="group flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-sm font-extrabold tracking-[0.24em] text-white">
              NV
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold uppercase tracking-[0.2em] text-ink">
                {siteConfig.name}
              </p>
              <p className="truncate text-xs text-ink/62">{siteConfig.role}</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium text-ink/74 hover:bg-white/80 hover:text-ink",
                    active ? "bg-white text-ink shadow-[0_8px_24px_rgba(28,36,51,0.08)]" : "",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <ButtonLink href="/contact" variant="primary" arrow>
              Book an Intro Call
            </ButtonLink>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/12 bg-white/70 text-ink md:hidden"
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
            className="surface-card mt-4 space-y-2 p-4 md:hidden"
            aria-label="Mobile primary"
          >
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block rounded-2xl px-4 py-3 text-sm font-medium text-ink/74 hover:bg-sand hover:text-ink",
                    active ? "bg-ink text-white hover:bg-ink hover:text-white" : "",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <ButtonLink
              href="/contact"
              variant="secondary"
              className="mt-2 w-full justify-center"
              arrow
              onClick={() => setIsOpen(false)}
            >
              Book an Intro Call
            </ButtonLink>
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
