"use client";

import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import type { NavLink } from "@/lib/data";
import { cn } from "@/lib/utils";

type MainNavProps = {
  links: NavLink[];
  mode: "desktop" | "mobile";
  phoneDisplay?: string;
  phoneRaw?: string;
};

function isActiveRoute(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function MainNav({ links, mode, phoneDisplay, phoneRaw }: MainNavProps) {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  if (mode === "desktop") {
    return (
      <nav aria-label="Primary navigation">
        <ul className="flex items-center gap-6 xl:gap-8">
          {links.map((link) => {
            const isActive = isActiveRoute(pathname, link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative inline-flex items-center px-1 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)] transition hover:text-[var(--color-brand)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand)] xl:text-[0.7rem]",
                    isActive &&
                      "text-[var(--color-brand)] after:absolute after:inset-x-0 after:-bottom-[1.05rem] after:h-px after:bg-[var(--color-accent)]",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        <Link
          href="/contact"
          className="inline-flex min-h-10 items-center justify-center rounded-[0.75rem] border border-[color:rgba(31,35,39,0.14)] px-3 py-2 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]"
        >
          Consult
        </Link>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-[0.8rem] border border-[color:rgba(31,35,39,0.14)] bg-[color:rgba(247,242,234,0.74)] text-[var(--color-brand)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand)] sm:h-11 sm:w-11"
          onClick={() => setIsMobileOpen((current) => !current)}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileOpen ? "Close primary navigation" : "Open primary navigation"}
        >
          <span className="relative block h-4 w-4">
            <span
              className={cn(
                "absolute left-0 top-0.5 h-px w-4 bg-current transition-transform duration-200",
                isMobileOpen && "translate-y-[0.35rem] rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[0.45rem] h-px w-4 bg-current transition-opacity duration-200",
                isMobileOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute bottom-0.5 left-0 h-px w-4 bg-current transition-transform duration-200",
                isMobileOpen && "-translate-y-[0.35rem] -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      {isMobileOpen ? (
        <Fragment>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-transparent"
            aria-label="Close primary navigation"
            onClick={() => setIsMobileOpen(false)}
          />
          <div
            id="mobile-menu"
            className="absolute right-0 top-[calc(100%+0.9rem)] z-50 w-[min(24rem,calc(100vw-1.25rem))] border border-[color:rgba(31,35,39,0.14)] bg-[linear-gradient(180deg,rgba(247,242,234,0.98),rgba(233,226,215,0.98))] p-4 shadow-[0_28px_70px_-44px_rgba(18,29,40,0.4)]"
          >
            <nav aria-label="Mobile primary navigation">
              <ul className="line-list grid">
                {links.map((link) => {
                  const isActive = isActiveRoute(pathname, link.href);

                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center justify-between px-0 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.22em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand)]",
                          isActive
                            ? "text-[var(--color-brand)]"
                            : "text-[var(--color-brand)] hover:text-[var(--color-accent-deep)]",
                        )}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => setIsMobileOpen(false)}
                        >
                          <span>{link.label}</span>
                          <span
                            className={cn(
                              "text-[0.62rem]",
                              isActive ? "text-[var(--color-accent)]" : "text-[var(--color-accent)]",
                            )}
                          >
                            →
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {phoneDisplay && phoneRaw ? (
              <div className="mt-5 border-t border-[color:rgba(31,35,39,0.12)] pt-5">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  Consultation line
                </p>
                <a
                  href={`tel:${phoneRaw}`}
                  className="mt-2 block text-base font-semibold text-[var(--color-brand)]"
                >
                  {phoneDisplay}
                </a>
              </div>
            ) : null}
          </div>
        </Fragment>
      ) : null}
    </div>
  );
}
