"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import type { NavLink } from "@/lib/data";
import { cn } from "@/lib/utils";

type MainNavProps = {
  links: NavLink[];
};

function isActiveRoute(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function MainNav({ links }: MainNavProps) {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex shrink-0 items-center gap-3">
      <nav aria-label="Primary navigation" className="hidden lg:block">
        <ul className="flex items-center gap-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand)]",
                  isActiveRoute(pathname, link.href)
                    ? "bg-[var(--color-brand-soft)] text-[var(--color-brand)]"
                    : "text-[var(--color-muted)] hover:bg-[var(--color-brand-soft)] hover:text-[var(--color-brand)]",
                )}
                aria-current={isActiveRoute(pathname, link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="hidden lg:block">
        <ButtonLink href="/contact" variant="light">
          Request Estimate
        </ButtonLink>
      </div>

      <button
        type="button"
        className="inline-flex h-10 items-center rounded-full border border-[var(--color-border)] px-4 text-sm font-semibold text-[var(--color-brand)] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand)] lg:hidden"
        onClick={() => setIsMobileOpen((current) => !current)}
        aria-expanded={isMobileOpen}
        aria-controls="mobile-menu"
        aria-label={isMobileOpen ? "Close primary navigation" : "Open primary navigation"}
      >
        {isMobileOpen ? "Close" : "Menu"}
      </button>

      {isMobileOpen ? (
        <div
          id="mobile-menu"
          className="surface-card-strong absolute inset-x-0 top-[4.25rem] rounded-2xl p-6 lg:hidden"
        >
          <nav aria-label="Mobile primary navigation">
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block rounded-xl px-3 py-2.5 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand)]",
                      isActiveRoute(pathname, link.href)
                        ? "bg-[var(--color-brand-soft)] text-[var(--color-brand)]"
                        : "text-[var(--color-muted)] hover:bg-[var(--color-brand-soft)] hover:text-[var(--color-brand)]",
                    )}
                    aria-current={
                      isActiveRoute(pathname, link.href) ? "page" : undefined
                    }
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ButtonLink
            href="/contact"
            variant="light"
            className="mt-4 w-full"
            onClick={() => setIsMobileOpen(false)}
          >
            Request Estimate
          </ButtonLink>
        </div>
      ) : null}
    </div>
  );
}
