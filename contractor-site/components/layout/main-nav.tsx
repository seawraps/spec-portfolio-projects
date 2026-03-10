"use client";

import Link from "next/link";
import { Fragment } from "react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
    <div className="relative flex shrink-0 items-center gap-3">
      <nav aria-label="Primary navigation" className="hidden lg:block">
        <div className="flex items-center gap-4 rounded-full border border-[color:rgba(36,54,75,0.11)] bg-[color:rgba(255,250,243,0.78)] px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
          <p className="pl-2 text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent-deep)]">
            Project guide
          </p>
          <ul className="flex items-center gap-1 border-l border-[color:rgba(36,54,75,0.1)] pl-4">
          {links.map((link) => {
            const isActive = isActiveRoute(pathname, link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "inline-flex items-center rounded-full px-4 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand)]",
                    isActive
                      ? "bg-[var(--color-brand)] text-[var(--color-surface)] shadow-[0_18px_36px_-24px_rgba(22,36,52,0.82)]"
                      : "text-[var(--color-muted)] hover:bg-[color:rgba(36,54,75,0.06)] hover:text-[var(--color-brand)]",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          </ul>
        </div>
      </nav>

      <div className="hidden lg:flex items-center gap-3">
        <a
          href={`tel:${phoneRaw}`}
          className="rounded-[1.5rem] border border-[color:rgba(36,54,75,0.12)] bg-[color:rgba(255,250,243,0.82)] px-4 py-3 text-right shadow-[0_24px_56px_-42px_rgba(18,29,40,0.5)]"
        >
          <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
            Consultation Line
          </span>
          <span className="mt-1 block text-sm font-semibold text-[var(--color-brand)]">
            {phoneDisplay}
          </span>
          <span className="mt-1 block text-[0.62rem] text-[var(--color-muted)]">
            Weekday walkthrough scheduling
          </span>
        </a>
        <ButtonLink href="/contact" variant="light">
          Request Consultation
        </ButtonLink>
      </div>

      <button
        type="button"
        className="inline-flex min-h-12 items-center rounded-[1.35rem] border border-[var(--color-border)] bg-[color:rgba(255,250,243,0.9)] px-3 py-2.5 text-left shadow-[0_18px_44px_-34px_rgba(18,29,40,0.4)] lg:hidden"
        onClick={() => setIsMobileOpen((current) => !current)}
        aria-expanded={isMobileOpen}
        aria-controls="mobile-menu"
        aria-label={isMobileOpen ? "Close primary navigation" : "Open primary navigation"}
      >
        <span className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-brand)] text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-surface)]">
            BO
          </span>
          <span className="min-w-0">
            <span className="block text-[0.58rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-accent-deep)]">
              Project guide
            </span>
            <span className="mt-1 block text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]">
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
            className="absolute right-0 top-[calc(100%+0.9rem)] z-20 w-[min(100vw-3rem,24rem)] rounded-[1.9rem] border border-[color:rgba(29,37,48,0.12)] bg-[linear-gradient(180deg,#fffaf3_0%,#f6ede0_100%)] p-5 shadow-[0_34px_88px_-40px_rgba(18,29,40,0.5)] lg:hidden"
          >
            <div className="rounded-[1.5rem] border border-[color:rgba(36,54,75,0.12)] bg-[linear-gradient(180deg,#efe3d4_0%,#ebddcc_100%)] px-4 py-4">
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
                {links.map((link) => {
                  const isActive = isActiveRoute(pathname, link.href);

                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "block rounded-[1.25rem] border border-transparent px-4 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.2em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand)]",
                          isActive
                            ? "border-[color:rgba(36,54,75,0.08)] bg-[var(--color-brand)] text-[var(--color-surface)]"
                            : "text-[var(--color-muted)] hover:border-[color:rgba(36,54,75,0.08)] hover:bg-[color:rgba(36,54,75,0.05)] hover:text-[var(--color-brand)]",
                        )}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {link.label}
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
