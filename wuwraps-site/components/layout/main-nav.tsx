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
        <ul className="flex items-center gap-2">
          {links.map((link) => {
            const isActive = isActiveRoute(pathname, link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "label relative inline-flex items-center px-3 py-2 text-[0.7rem] text-[var(--mist)] transition hover:text-[var(--bone)]",
                    isActive && "text-[var(--bone)]",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  {isActive ? (
                    <span
                      className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-[var(--cedar)]"
                      aria-hidden="true"
                    />
                  ) : null}
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
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line-dark)] text-[var(--bone)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cedar)]"
        onClick={() => setIsMobileOpen((current) => !current)}
        aria-expanded={isMobileOpen}
        aria-controls="mobile-menu"
        aria-label={isMobileOpen ? "Close primary navigation" : "Open primary navigation"}
      >
        <span className="relative block h-4 w-5">
          <span
            className={cn(
              "absolute left-0 top-0 h-[2px] w-5 bg-current transition-transform duration-200",
              isMobileOpen && "translate-y-[0.45rem] rotate-45",
            )}
          />
          <span
            className={cn(
              "absolute left-0 top-[0.45rem] h-[2px] w-5 bg-current transition-opacity duration-200",
              isMobileOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "absolute bottom-0 left-0 h-[2px] w-5 bg-current transition-transform duration-200",
              isMobileOpen && "-translate-y-[0.45rem] -rotate-45",
            )}
          />
        </span>
      </button>

      {isMobileOpen ? (
        <Fragment>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-[rgba(14,15,18,0.5)]"
            aria-label="Close primary navigation"
            onClick={() => setIsMobileOpen(false)}
          />
          <div
            id="mobile-menu"
            className="absolute right-0 top-[calc(100%+0.9rem)] z-50 w-[min(19rem,calc(100vw-1.5rem))] rounded-2xl border border-[var(--line-dark)] bg-[var(--graphite)] p-3 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.7)]"
          >
            <nav aria-label="Mobile primary navigation">
              <ul className="grid gap-1">
                {links.map((link) => {
                  const isActive = isActiveRoute(pathname, link.href);

                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "label flex items-center justify-between rounded-xl px-4 py-3 text-[0.74rem] transition",
                          isActive
                            ? "bg-[var(--cedar)] text-[var(--bone)]"
                            : "text-[var(--mist)] hover:bg-[rgba(246,245,241,0.06)] hover:text-[var(--bone)]",
                        )}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => setIsMobileOpen(false)}
                      >
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {phoneDisplay && phoneRaw ? (
              <div className="mt-2 border-t border-[var(--line-dark)] px-4 pb-2 pt-3">
                <p className="label text-[0.6rem] text-[var(--mist)]">Appointment only</p>
                <a
                  href={`tel:${phoneRaw}`}
                  className="display mt-1 block text-xl text-[var(--bone)]"
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
