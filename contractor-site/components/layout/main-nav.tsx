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
    <div className="flex items-center gap-3">
      <nav aria-label="Primary" className="hidden md:block">
        <ul className="flex items-center gap-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition",
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

      <ButtonLink href="/contact" variant="light" className="hidden md:inline-flex">
        Request Estimate
      </ButtonLink>

      <button
        type="button"
        className="inline-flex h-10 items-center rounded-full border border-[var(--color-border)] px-4 text-sm font-semibold text-[var(--color-brand)] transition hover:bg-white md:hidden"
        onClick={() => setIsMobileOpen((current) => !current)}
        aria-expanded={isMobileOpen}
        aria-controls="mobile-menu"
      >
        {isMobileOpen ? "Close" : "Menu"}
      </button>

      {isMobileOpen ? (
        <div
          id="mobile-menu"
          className="absolute inset-x-4 top-[4.75rem] rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-xl md:hidden"
        >
          <nav aria-label="Mobile primary navigation">
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block rounded-xl px-3 py-2.5 text-sm font-medium transition",
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
