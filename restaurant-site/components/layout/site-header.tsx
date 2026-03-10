"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { buttonClassName } from "@/components/ui/button-styles";
import { navLinks } from "@/lib/data";

function linkClasses(currentPath: string, href: string) {
  const isActive = href === "/" ? currentPath === "/" : currentPath.startsWith(href);

  return `transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700 hover:text-amber-700 ${
    isActive ? "text-amber-700" : "text-stone-700"
  }`;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-stone-200/70 bg-[rgba(248,244,236,0.92)] backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-end gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
          onClick={() => setIsOpen(false)}
          aria-label="Astera Coastal Bistro home"
        >
          <span className="font-display text-2xl font-semibold leading-none text-stone-900">
            Astera
          </span>
          <span className="pb-0.5 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
            Coastal Bistro
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 text-stone-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700 md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Close primary navigation" : "Open primary navigation"}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M4 7H20M4 12H20M4 17H20"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <nav className="hidden items-center gap-7 text-sm font-medium md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClasses(pathname, link.href)}
              aria-current={
                (link.href === "/" ? pathname === "/" : pathname.startsWith(link.href))
                  ? "page"
                  : undefined
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#reservations"
            className={buttonClassName("primary")}
          >
            Book A Table
          </Link>
        </nav>
      </div>

      {isOpen ? (
        <nav
          id="mobile-nav"
          className="border-t border-stone-200 bg-[rgba(248,244,236,0.98)] px-4 py-4 md:hidden"
          aria-label="Mobile primary navigation"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-base font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={linkClasses(pathname, link.href)}
                onClick={() => setIsOpen(false)}
                aria-current={
                  (link.href === "/" ? pathname === "/" : pathname.startsWith(link.href))
                    ? "page"
                    : undefined
                }
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#reservations"
              onClick={() => setIsOpen(false)}
              className={buttonClassName("primary", "mt-2 w-full")}
            >
              Book A Table
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
