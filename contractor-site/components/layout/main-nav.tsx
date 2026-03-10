"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";
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

  return (
    <div className="flex shrink-0 items-center gap-3">
      <nav aria-label="Primary navigation" className="hidden xl:block">
        <ul className="flex items-center gap-7 border-b border-[color:rgba(36,54,75,0.12)] px-2 pb-2">
          {links.map((link) => {
            const isActive = isActiveRoute(pathname, link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "group relative inline-flex items-center py-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand)]",
                    isActive
                      ? "text-[var(--color-brand)]"
                      : "text-[var(--color-muted)] hover:text-[var(--color-brand)]",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute inset-x-0 -bottom-[0.55rem] h-px origin-left bg-[var(--color-accent)] transition-transform duration-200",
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="hidden xl:flex items-center gap-3">
        <a
          href={`tel:${phoneRaw}`}
          className="rounded-[1.3rem] border border-[color:rgba(36,54,75,0.12)] bg-[color:rgba(255,250,243,0.82)] px-4 py-3 text-right shadow-[0_24px_56px_-42px_rgba(18,29,40,0.5)]"
        >
          <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
            Consultation Line
          </span>
          <span className="mt-1 block text-sm font-semibold text-[var(--color-brand)]">
            {phoneDisplay}
          </span>
        </a>
        <ButtonLink href="/contact" variant="light">
          Request Consultation
        </ButtonLink>
      </div>

      <button
        type="button"
        className="inline-flex h-11 items-center rounded-full border border-[var(--color-border)] bg-[color:rgba(255,250,243,0.88)] px-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)] shadow-[0_18px_44px_-34px_rgba(18,29,40,0.4)] xl:hidden"
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
          className="surface-card-strong absolute inset-x-0 top-[calc(100%+0.9rem)] rounded-[1.8rem] p-5 shadow-[0_34px_88px_-40px_rgba(18,29,40,0.5)] xl:hidden"
        >
          <div className="rounded-[1.4rem] border border-[color:rgba(36,54,75,0.12)] bg-[var(--color-surface-strong)] px-4 py-4">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Consultation Line
            </p>
            <a
              href={`tel:${phoneRaw}`}
              className="mt-2 block text-lg font-semibold text-[var(--color-brand)]"
            >
              {phoneDisplay}
            </a>
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
                        "block rounded-[1.15rem] px-4 py-3 text-[0.74rem] font-semibold uppercase tracking-[0.2em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand)]",
                        isActive
                          ? "bg-[color:rgba(36,54,75,0.08)] text-[var(--color-brand)]"
                          : "text-[var(--color-muted)] hover:bg-[color:rgba(36,54,75,0.05)] hover:text-[var(--color-brand)]",
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

          <ButtonLink
            href="/contact"
            variant="light"
            className="mt-4 w-full"
            onClick={() => setIsMobileOpen(false)}
          >
            Request Consultation
          </ButtonLink>
        </div>
      ) : null}
    </div>
  );
}
