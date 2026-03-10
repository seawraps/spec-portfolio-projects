"use client";

import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { ButtonLink, buttonClassName } from "@/components/ui/button-link";
import type { NavLink } from "@/lib/data";
import { cn } from "@/lib/utils";

type MainNavProps = {
  links: NavLink[];
  phoneDisplay: string;
  phoneRaw: string;
};

function isActiveRoute(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function MainNav({ links, phoneDisplay, phoneRaw }: MainNavProps) {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <div className="relative flex w-full shrink-0 items-center justify-end lg:w-auto">
      <nav aria-label="Primary navigation" className="hidden lg:block">
        <ul className="flex items-center gap-2 border-y border-[color:rgba(36,54,75,0.12)] px-4 py-2.5">
          {links.map((link) => {
            const isActive = isActiveRoute(pathname, link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "inline-flex items-center rounded-full px-4 py-2.5 text-[0.69rem] font-semibold uppercase tracking-[0.22em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand)]",
                    isActive
                      ? "bg-[var(--color-brand)] text-[var(--color-surface)] shadow-[0_18px_34px_-24px_rgba(22,36,52,0.76)]"
                      : "text-[color:rgba(36,54,75,0.78)] hover:bg-[color:rgba(36,54,75,0.06)] hover:text-[var(--color-brand)]",
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

      <button
        type="button"
        className="inline-flex min-h-11 w-full items-center justify-between gap-3 rounded-[1.2rem] border border-[color:rgba(36,54,75,0.1)] bg-[color:rgba(255,250,243,0.92)] px-3.5 py-3 text-left shadow-[0_18px_42px_-34px_rgba(18,29,40,0.34)] lg:hidden"
        onClick={() => setIsMobileOpen((current) => !current)}
        aria-expanded={isMobileOpen}
        aria-controls="mobile-menu"
        aria-label={isMobileOpen ? "Close primary navigation" : "Open primary navigation"}
      >
        <span className="inline-flex items-center gap-3">
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-brand)]">
            <span
              className={cn(
                "absolute h-px w-4 bg-[var(--color-surface)] transition-transform duration-200",
                isMobileOpen ? "rotate-45" : "-translate-y-1.5",
              )}
            />
            <span
              className={cn(
                "absolute h-px w-4 bg-[var(--color-surface)] transition-opacity duration-200",
                isMobileOpen ? "opacity-0" : "opacity-100",
              )}
            />
            <span
              className={cn(
                "absolute h-px w-4 bg-[var(--color-surface)] transition-transform duration-200",
                isMobileOpen ? "-rotate-45" : "translate-y-1.5",
              )}
            />
          </span>
          <span className="min-w-0">
            <span className="block text-[0.58rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-muted)]">
              Navigation
            </span>
            <span className="mt-1 block text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
              {isMobileOpen ? "Close menu" : "Open menu"}
            </span>
          </span>
        </span>
      </button>

      {isMobileOpen ? (
        <Fragment>
          <button
            type="button"
            className="fixed inset-0 z-10 bg-[color:rgba(29,37,48,0.16)] backdrop-blur-[3px] lg:hidden"
            aria-label="Close primary navigation"
            onClick={() => setIsMobileOpen(false)}
          />
          <div
            id="mobile-menu"
            className="absolute left-0 right-0 top-[calc(100%+0.8rem)] z-20 w-full rounded-[1.85rem] border border-[color:rgba(29,37,48,0.12)] bg-[linear-gradient(180deg,#fffaf3_0%,#f4ecdf_100%)] p-4 shadow-[0_34px_88px_-40px_rgba(18,29,40,0.5)] lg:hidden"
          >
            <div className="rounded-[1.45rem] border border-[color:rgba(36,54,75,0.1)] bg-[color:rgba(255,250,243,0.82)] px-4 py-4">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Consultation Line
              </p>
              <a
                href={`tel:${phoneRaw}`}
                className="mt-2 block text-lg font-semibold text-[var(--color-brand)]"
              >
                {phoneDisplay}
              </a>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                Local remodeling guidance for Nashville, Brentwood, Franklin, and Belle Meade homes.
              </p>
            </div>

            <nav aria-label="Mobile primary navigation" className="mt-4">
              <ul className="space-y-2">
                {links.map((link, index) => {
                  const isActive = isActiveRoute(pathname, link.href);

                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center justify-between rounded-[1.2rem] border px-4 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand)]",
                          isActive
                            ? "border-[color:rgba(36,54,75,0.08)] bg-[var(--color-brand)] text-[var(--color-surface)]"
                            : "border-[color:rgba(36,54,75,0.08)] bg-[color:rgba(255,250,243,0.56)] text-[color:rgba(36,54,75,0.78)] hover:bg-[color:rgba(36,54,75,0.05)] hover:text-[var(--color-brand)]",
                        )}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => setIsMobileOpen(false)}
                      >
                        <span>{link.label}</span>
                        <span
                          className={cn(
                            "text-[0.62rem] tracking-[0.2em]",
                            isActive ? "text-[color:rgba(255,250,243,0.72)]" : "text-[var(--color-accent)]",
                          )}
                        >
                          0{index + 1}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-4 grid gap-3 min-[430px]:grid-cols-2">
              <ButtonLink
                href="/contact"
                variant="light"
                className="w-full"
                onClick={() => setIsMobileOpen(false)}
              >
                Request Consultation
              </ButtonLink>
              <a href={`tel:${phoneRaw}`} className={buttonClassName("secondary", "w-full")}>
                Call Office
              </a>
            </div>
          </div>
        </Fragment>
      ) : null}
    </div>
  );
}
