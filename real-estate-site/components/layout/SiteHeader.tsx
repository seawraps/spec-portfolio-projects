"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navigationLinks } from "@/lib/data";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

function isActiveLink(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

type BrandProps = {
  mobile?: boolean;
};

function Brand({ mobile = false }: BrandProps) {
  return (
    <Link
      href="/"
      aria-label="Crescent Vale Realty home"
      className={cn(
        "flex min-w-0 items-center gap-3 text-[var(--color-ink)]",
        mobile && "justify-self-center",
      )}
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[16px] border border-[var(--color-line-strong)] bg-white/78 font-display text-[1.1rem] tracking-[0.18em] text-[var(--color-ink)] shadow-[0_14px_28px_-22px_rgba(23,32,40,0.2)]">
        CV
      </span>
      <span className="min-w-0">
        <span
          className={cn(
            "block font-display leading-none text-[var(--color-ink)]",
            mobile ? "text-[1.7rem]" : "text-[2rem]",
          )}
        >
          Crescent Vale
        </span>
        <span className="mt-1 block text-[0.56rem] font-[450] uppercase tracking-[0.34em] text-[var(--color-muted)] sm:text-[0.6rem]">
          Private Brokerage
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [openPathname, setOpenPathname] = useState<string | null>(null);
  const isOpen = openPathname === pathname;

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[rgba(252,248,242,0.84)] backdrop-blur-xl">
      <div className="hidden border-b border-[var(--color-line)] lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <div className="flex flex-wrap items-center gap-4 text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">
            <span>Harbor City</span>
            <span className="h-1 w-1 rounded-full bg-[rgba(134,105,71,0.45)]" />
            <span>Private appointments</span>
            <span className="h-1 w-1 rounded-full bg-[rgba(134,105,71,0.45)]" />
            <span>Illustrative brokerage concept</span>
          </div>
          <div className="flex items-center gap-6 text-[0.62rem] uppercase tracking-[0.28em] text-[var(--color-muted)]">
            <a href={siteConfig.emailHref} className="hover:text-[var(--color-ink)]">
              {siteConfig.email}
            </a>
            <a href={siteConfig.phoneHref} className="hover:text-[var(--color-ink)]">
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="hidden min-h-[5.5rem] lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-10">
          <Brand />

          <nav
            aria-label="Primary navigation"
            className="flex items-center justify-center gap-7 xl:gap-9"
          >
            {navigationLinks.map((link) => {
              const active = isActiveLink(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative py-2 text-[0.64rem] font-[450] uppercase tracking-[0.34em] text-[var(--color-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-bronze)]",
                    active && "text-[var(--color-ink)]",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute inset-x-0 -bottom-[1rem] h-px bg-[var(--color-bronze)] transition-transform duration-200",
                      active ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex justify-end">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-white/72 px-5 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-ink)] hover:border-[rgba(134,105,71,0.42)] hover:text-[var(--color-bronze)]"
            >
              Private Consultation
            </Link>
          </div>
        </div>

        <div className="grid min-h-[5.25rem] grid-cols-[2.75rem_1fr_2.75rem] items-center gap-3 lg:hidden">
          <div aria-hidden="true" className="h-11 w-11" />
          <Brand mobile />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center justify-self-end rounded-full border border-[var(--color-line-strong)] bg-white/72 text-[var(--color-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-bronze)]"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() =>
              setOpenPathname((value) => (value === pathname ? null : pathname))
            }
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.65"
              strokeLinecap="round"
            >
              {isOpen ? (
                <path d="M6 6 18 18M18 6 6 18" />
              ) : (
                <path d="M4 8h16M4 12h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          "overflow-hidden border-t border-[var(--color-line)] transition-[max-height,opacity] duration-300 ease-out lg:hidden",
          isOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="mx-auto max-w-7xl px-6 py-5">
          <div className="mb-5 text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">
            By appointment in Harbor City
          </div>

          <nav aria-label="Mobile primary navigation" className="grid gap-1">
            {navigationLinks.map((link) => {
              const active = isActiveLink(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpenPathname(null)}
                  className={cn(
                    "flex items-center justify-between border-b border-[var(--color-line)] py-3 text-[0.72rem] font-[450] uppercase tracking-[0.34em] text-[var(--color-muted)]",
                    active && "text-[var(--color-ink)]",
                  )}
                >
                  <span>{link.label}</span>
                  <span className="font-display text-lg leading-none text-[var(--color-bronze)]">
                    /
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-5">
            <Link
              href="/contact"
              onClick={() => setOpenPathname(null)}
              className="inline-flex h-11 w-full items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-white/72 px-5 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-ink)]"
            >
              Private Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
