"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { buttonClassName } from "@/components/ui/button-styles";
import { navLinks } from "@/lib/data";

function isActiveLink(currentPath: string, href: string) {
  return href === "/" ? currentPath === "/" : currentPath.startsWith(href);
}

function linkClasses(currentPath: string, href: string) {
  const active = isActiveLink(currentPath, href);

  return `relative px-1 py-2 text-sm font-medium tracking-[0.14em] uppercase transition-colors ${
    active ? "text-[#f6ecdf]" : "text-[#d4c3b0]"
  } hover:text-[#f6ecdf]`;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[rgba(255,233,204,0.12)] bg-[rgba(11,8,6,0.68)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-end gap-3"
          onClick={() => setIsOpen(false)}
          aria-label="Astera Coastal Bistro home"
        >
          <span className="font-display text-3xl leading-none text-[#f8efe4]">Astera</span>
          <span className="pb-1 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-[#d1a364]">
            Coastal Bistro
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(255,233,204,0.18)] text-[#f6ecdf] md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Close primary navigation" : "Open primary navigation"}
        >
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

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const active = isActiveLink(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={linkClasses(pathname, link.href)}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-0.5 h-px transition-opacity ${
                    active ? "bg-[#d1a364] opacity-100" : "bg-[#d1a364] opacity-0"
                  }`}
                />
              </Link>
            );
          })}
          <Link href="/#reservations" className={buttonClassName("primary")}>
            Reserve
          </Link>
        </nav>
      </div>

      {isOpen ? (
        <nav
          id="mobile-nav"
          className="border-t border-[rgba(255,233,204,0.12)] bg-[rgba(11,8,6,0.96)] px-6 py-5 md:hidden"
          aria-label="Mobile primary navigation"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {navLinks.map((link) => {
              const active = isActiveLink(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium uppercase tracking-[0.18em] ${
                    active ? "text-[#f6ecdf]" : "text-[#d4c3b0]"
                  }`}
                  onClick={() => setIsOpen(false)}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/#reservations"
              onClick={() => setIsOpen(false)}
              className={buttonClassName("primary", "mt-2 w-full")}
            >
              Reserve
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
