"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { agency, navItems } from "@/lib/data";

const isActive = (pathname: string, href: string) => {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
};

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-coal/88 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="inline-flex items-center gap-3 text-white"
          aria-label={`${agency.name} home`}
        >
          <span className="flex flex-col gap-1" aria-hidden="true">
            <span className="h-1.5 w-8 rounded-full bg-signal" />
            <span className="h-1.5 w-5 rounded-full bg-volt" />
          </span>
          <span>
            <span className="block font-display text-2xl font-semibold uppercase leading-none tracking-[-0.04em]">
              {agency.name}
            </span>
            <span className="mt-1 block text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-white/55">
              Performance Creative
            </span>
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/16 px-4 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white/40 hover:bg-white/10 md:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close primary navigation" : "Open primary navigation"}
        >
          Menu
        </button>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[0.7rem] font-semibold uppercase tracking-[0.18em] transition ${
                isActive(pathname, item.href)
                  ? "text-white"
                  : "text-white/62 hover:text-white"
              }`}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="button-primary">
            Book Strategy Call
          </Link>
        </nav>
      </div>

      {isMenuOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile primary navigation"
          className="border-t border-white/10 bg-coal/95 px-4 py-4 md:hidden sm:px-6"
        >
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block rounded-2xl px-4 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition ${
                    isActive(pathname, item.href)
                      ? "bg-white/10 text-white"
                      : "text-white/66 hover:bg-white/10 hover:text-white"
                  }`}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="button-primary mt-2 w-full justify-center"
              >
                Book Strategy Call
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
