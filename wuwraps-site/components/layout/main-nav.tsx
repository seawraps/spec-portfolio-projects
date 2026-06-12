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
        <ul className="flex items-center gap-1">
          {links.map((link) => {
            const isActive = isActiveRoute(pathname, link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "comic-heavy relative inline-flex items-center rounded-full px-4 py-2 text-[0.7rem] tracking-[0.12em] text-[var(--color-ink-soft)] transition hover:bg-[var(--color-paper-deep)] hover:text-[var(--color-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue)]",
                    isActive && "bg-[var(--color-ink)] text-[var(--color-paper)] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]",
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
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center border border-[var(--color-line-strong)] bg-[var(--color-yellow)] text-[var(--color-ink)] shadow-[0_14px_30px_-18px_rgba(20,19,26,0.5)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue)]"
        onClick={() => setIsMobileOpen((current) => !current)}
        aria-expanded={isMobileOpen}
        aria-controls="mobile-menu"
        aria-label={isMobileOpen ? "Close primary navigation" : "Open primary navigation"}
      >
        <span className="relative block h-4 w-5">
          <span
            className={cn(
              "absolute left-0 top-0 h-[2.5px] w-5 bg-current transition-transform duration-200",
              isMobileOpen && "translate-y-[0.45rem] rotate-45",
            )}
          />
          <span
            className={cn(
              "absolute left-0 top-[0.45rem] h-[2.5px] w-5 bg-current transition-opacity duration-200",
              isMobileOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "absolute bottom-0 left-0 h-[2.5px] w-5 bg-current transition-transform duration-200",
              isMobileOpen && "-translate-y-[0.45rem] -rotate-45",
            )}
          />
        </span>
      </button>

      {isMobileOpen ? (
        <Fragment>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-[rgba(20,19,26,0.2)]"
            aria-label="Close primary navigation"
            onClick={() => setIsMobileOpen(false)}
          />
          <div
            id="mobile-menu"
            className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-[min(20rem,calc(100vw-1.5rem))] border border-[var(--color-line-strong)] bg-[var(--color-paper)] p-3 shadow-[0_14px_30px_-18px_rgba(20,19,26,0.5)]"
          >
            <nav aria-label="Mobile primary navigation">
              <ul className="grid gap-2">
                {links.map((link) => {
                  const isActive = isActiveRoute(pathname, link.href);

                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "comic-heavy flex items-center justify-between border border-[var(--color-line-strong)] px-4 py-3 text-[0.78rem] tracking-[0.08em] transition",
                          isActive
                            ? "bg-[var(--color-red)] text-[var(--color-paper)]"
                            : "bg-[var(--color-surface)] text-[var(--color-ink)] hover:bg-[var(--color-yellow)]",
                        )}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => setIsMobileOpen(false)}
                      >
                        <span>{link.label}</span>
                        <span aria-hidden="true">→</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {phoneDisplay && phoneRaw ? (
              <div className="mt-3 border-t-[2.5px] border-dashed border-[var(--color-line-strong)] pt-3">
                <p className="comic-heavy text-[0.62rem] tracking-[0.14em] text-[var(--color-muted)]">
                  Call the shop
                </p>
                <a
                  href={`tel:${phoneRaw}`}
                  className="comic-display mt-1 block text-2xl text-[var(--color-red)]"
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
