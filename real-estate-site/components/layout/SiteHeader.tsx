"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { buttonClassName } from "@/components/ui/ButtonLink";
import { navigationLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

function isActiveLink(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[rgba(248,243,236,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-forest)] font-display text-xl text-white">
            CV
          </span>
          <span>
            <span className="block font-display text-3xl leading-none text-[var(--color-ink)]">
              Crescent Vale
            </span>
            <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)]">
              Realty
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          <nav aria-label="Primary" className="flex items-center gap-2">
            {navigationLinks.map((link) => {
              const active = isActiveLink(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium",
                    active
                      ? "bg-[var(--color-forest)] text-white"
                      : "text-[var(--color-muted)] hover:bg-white/70 hover:text-[var(--color-ink)]",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <Link
            href="/contact"
            className={buttonClassName("primary")}
          >
            Book A Consultation
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-white/70 text-[var(--color-ink)] md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((value) => !value)}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            {isOpen ? (
              <path d="M6 6 18 18M18 6 6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-[var(--color-line)] bg-[rgba(248,243,236,0.94)] px-5 py-5 md:hidden"
        >
          <nav aria-label="Mobile primary" className="flex flex-col gap-2">
            {navigationLinks.map((link) => {
              const active = isActiveLink(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "rounded-[18px] px-4 py-3 text-sm font-medium",
                    active
                      ? "bg-[var(--color-forest)] text-white"
                      : "bg-white/65 text-[var(--color-ink)]",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={buttonClassName("primary", "mt-2 w-full")}
            >
              Book A Consultation
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
