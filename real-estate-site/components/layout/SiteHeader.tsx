"use client";

import Image from "next/image";
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
    "Harbor City and close-in enclaves",
    "Private appointments available",
    "Illustrative luxury concept",
  ];

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4">
      <div className="mx-auto max-w-7xl rounded-[30px] border border-[rgba(255,255,255,0.56)] bg-[rgba(248,242,233,0.78)] shadow-[0_26px_60px_-42px_rgba(17,23,29,0.34)] backdrop-blur-2xl">
        <div className="hidden items-center justify-between border-b border-[var(--color-line)] px-6 py-3 lg:flex">
          <div className="flex flex-wrap items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
            {marketNotes.map((note, index) => (
              <span key={note} className="flex items-center gap-3">
                {index > 0 ? (
                  <span className="h-1 w-1 rounded-full bg-[var(--color-bronze)]/60" />
                ) : null}
                <span>{note}</span>
              </span>
            ))}
          </div>
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze)]">
            Quiet luxury. Direct counsel. Property-led presentation.
          </p>
        </div>

        <div className="flex items-center gap-4 px-4 py-4 sm:px-6">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-bronze)]"
            onClick={() => setIsOpen(false)}
            aria-label="Crescent Vale Realty home"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-[18px] border border-white/10 bg-[var(--color-navy)] font-display text-xl text-white shadow-[0_18px_42px_-28px_rgba(17,23,29,0.82)]">
              C
            </span>
            <span className="min-w-0">
              <span className="block font-display text-[1.8rem] leading-none text-[var(--color-ink)] sm:text-[2rem]">
                Crescent Vale
              </span>
              <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.42em] text-[var(--color-bronze)]">
                Private Real Estate Advisory
              </span>
            </span>
          </Link>

          <div className="hidden flex-1 items-center justify-center lg:flex">
            <nav
              aria-label="Primary navigation"
              className="flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/74 px-3 py-2 shadow-[0_18px_42px_-34px_rgba(17,23,29,0.24)]"
            >
              {navigationLinks.map((link) => {
                const active = isActiveLink(pathname, link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "rounded-full px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.24em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-bronze)]",
                      active
                        ? "bg-[var(--color-navy)] text-white shadow-[0_18px_32px_-22px_rgba(17,23,29,0.82)]"
                        : "text-[var(--color-muted)] hover:bg-white hover:text-[var(--color-ink)]",
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="ml-auto hidden items-center gap-4 lg:flex">
            <div className="text-right">
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.32em] text-[var(--color-bronze)]">
                Private Tours
              </p>
              <p className="mt-1 text-xs leading-5 text-[var(--color-muted)]">
                Seller launches, valuation sessions, and discreet buyer searches.
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
              <div className="image-frame image-reveal relative min-h-[220px]">
                <Image
                  src="/images/hero-estate.jpg"
                  alt="A modern hillside estate shown within the mobile navigation experience."
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10171d]/82 via-[#10171d]/18 to-transparent" />
                <div className="absolute inset-x-5 bottom-5 rounded-[22px] border border-white/12 bg-black/26 p-5 text-white backdrop-blur-md">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-white/70">
                    Harbor City market edit
                  </p>
                  <p className="mt-3 max-w-[18rem] font-display text-3xl leading-[0.94]">
                    Private representation for homes that deserve a slower, stronger reveal.
                  </p>
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
                          ? "border-transparent bg-[var(--color-navy)] text-white shadow-[0_20px_36px_-26px_rgba(17,23,29,0.82)]"
                          : "border-[var(--color-line)] bg-white/74 text-[var(--color-ink)]",
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
