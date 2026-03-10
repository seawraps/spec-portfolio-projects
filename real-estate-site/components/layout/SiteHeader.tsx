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
  const marketNotes = [
    "Harbor City private brokerage",
    "Northpoint, Lakemont, Old Harbor, Cedar Heights",
    "By-appointment guidance for buyers and sellers",
  ];

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[30px] border border-[rgba(255,255,255,0.58)] bg-[rgba(249,244,237,0.9)] shadow-[0_30px_74px_-46px_rgba(17,23,29,0.34)] backdrop-blur-2xl">
        <div className="hidden items-center justify-between gap-6 border-b border-white/8 bg-[var(--color-navy)] px-6 py-3 lg:flex">
          <div className="flex flex-wrap items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-white/72">
            {marketNotes.map((note, index) => (
              <span key={note} className="flex items-center gap-3">
                {index > 0 ? (
                  <span className="h-1 w-1 rounded-full bg-[var(--color-bronze-soft)]/70" />
                ) : null}
                <span>{note}</span>
              </span>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-white/52">
              Quiet luxury. Direct counsel. Property-led presentation.
            </p>
            <a
              href="tel:+12065550148"
              className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze-soft)] hover:text-white"
            >
              (206) 555-0148
            </a>
          </div>
        </div>

        <div className="grid gap-4 px-4 py-4 sm:px-6 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-bronze)]"
            onClick={() => setIsOpen(false)}
            aria-label="Crescent Vale Realty home"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(145deg,#1d2832,#11171d)] font-display text-[1.15rem] tracking-[0.14em] text-white shadow-[0_18px_42px_-28px_rgba(17,23,29,0.82)]">
              CV
            </span>
            <span className="min-w-0">
              <span className="block font-display text-[1.75rem] leading-none text-[var(--color-ink)] sm:text-[2rem]">
                Crescent Vale
              </span>
              <span className="block text-[0.58rem] font-semibold uppercase tracking-[0.42em] text-[var(--color-bronze)]">
                Private Brokerage And Advisory
              </span>
            </span>
          </Link>

          <div className="hidden lg:flex lg:items-center lg:justify-center">
            <nav
              aria-label="Primary navigation"
              className="flex items-center gap-7 border-x border-[var(--color-line)] px-8"
            >
              {navigationLinks.map((link) => {
                const active = isActiveLink(pathname, link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "group relative py-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-bronze)]",
                      active
                        ? "text-[var(--color-ink)]"
                        : "text-[var(--color-muted)] hover:text-[var(--color-bronze)]",
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute inset-x-0 bottom-0 h-px origin-center bg-[var(--color-bronze)] transition-transform duration-200",
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                      )}
                    />
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="hidden items-center gap-5 lg:flex lg:justify-self-end">
            <div className="text-right">
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.32em] text-[var(--color-bronze)]">
                Concierge Line
              </p>
              <a
                href="tel:+12065550148"
                className="mt-1 block font-display text-[1.4rem] leading-none text-[var(--color-ink)] hover:text-[var(--color-bronze)]"
              >
                (206) 555-0148
              </a>
              <p className="mt-2 max-w-[17rem] text-xs leading-5 text-[var(--color-muted)]">
                Valuations, private tours, and seller launch planning.
              </p>
            </div>
            <Link href="/contact" className={buttonClassName("primary")}>
              Book A Consultation
            </Link>
          </div>

          <button
            type="button"
            className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-white/82 text-[var(--color-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-bronze)] lg:hidden"
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
          <div id="mobile-navigation" className="border-t border-[var(--color-line)] p-4 lg:hidden">
            <div className="grid gap-4">
              <div className="dark-panel rounded-[28px] p-5 text-white">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-bronze-soft)]">
                  Private advisory
                </p>
                <p className="mt-3 max-w-[20rem] font-display text-3xl leading-[0.94]">
                  Harbor City brokerage guidance with an appointment-first pace.
                </p>
                <p className="mt-4 max-w-[22rem] text-sm leading-6 text-white/70">
                  Direct access for valuations, discreet buyer searches, and seller launches that need calm handling.
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <a
                    href="tel:+12065550148"
                    className="rounded-[20px] border border-white/10 bg-white/6 px-4 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white"
                  >
                    Call (206) 555-0148
                  </a>
                  <a
                    href="mailto:hello@crescentvalerealty.com"
                    className="rounded-[20px] border border-white/10 bg-white/6 px-4 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/78"
                  >
                    hello@crescentvalerealty.com
                  </a>
                </div>
              </div>

              <nav aria-label="Mobile primary navigation" className="grid gap-2">
                {navigationLinks.map((link) => {
                  const active = isActiveLink(pathname, link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "rounded-[22px] border px-4 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.24em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-bronze)]",
                        active
                          ? "border-[rgba(154,106,62,0.2)] bg-[var(--color-cream)] text-[var(--color-ink)] shadow-[0_20px_36px_-26px_rgba(17,23,29,0.18)]"
                          : "border-[var(--color-line)] bg-white/74 text-[var(--color-muted-strong)]",
                      )}
                      aria-current={active ? "page" : undefined}
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
          </div>
        ) : null}
      </div>
    </header>
  );
}
