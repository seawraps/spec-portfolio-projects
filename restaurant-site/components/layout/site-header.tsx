"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/data";

function linkClasses(currentPath: string, href: string) {
  const isActive = href === "/" ? currentPath === "/" : currentPath.startsWith(href);

  return `transition-colors hover:text-amber-700 ${
    isActive ? "text-amber-700" : "text-stone-700"
  }`;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-stone-200/70 bg-[rgba(248,244,236,0.92)] backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-end gap-2" onClick={() => setIsOpen(false)}>
          <span className="font-display text-2xl font-semibold leading-none text-stone-900">
            Astera
          </span>
          <span className="pb-0.5 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
            Coastal Bistro
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-stone-300 p-2 text-stone-700 md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
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

        <nav className="hidden items-center gap-7 text-sm font-medium md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClasses(pathname, link.href)}>
              {link.label}
            </Link>
          ))}
          <Link
            href="/#reservations"
            className="rounded-full bg-stone-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-stone-50 transition-colors hover:bg-stone-700"
          >
            Book A Table
          </Link>
        </nav>
      </div>

      {isOpen ? (
        <nav
          id="mobile-nav"
          className="border-t border-stone-200 bg-[rgba(248,244,236,0.98)] px-4 py-4 md:hidden"
          aria-label="Mobile"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-4 text-base font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={linkClasses(pathname, link.href)}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#reservations"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full bg-stone-900 px-5 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-stone-50"
            >
              Book A Table
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
