"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { buttonClassName } from "@/components/ui/ButtonLink";
import { navigationLinks } from "@/lib/data";

export function MobileMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        aria-label={isOpen ? "Close primary navigation" : "Open primary navigation"}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="sr-only">Menu</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d={isOpen ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"} />
        </svg>
      </button>

      {isOpen ? (
        <div
          id="mobile-nav"
          className="surface-card absolute inset-x-4 top-[4.5rem] z-50 p-4"
        >
          <nav aria-label="Mobile primary navigation">
            <ul className="flex flex-col gap-2">
              {navigationLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 ${
                        isActive
                          ? "bg-cyan-50 text-cyan-800"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={buttonClassName("primary", "mt-3 w-full px-4")}
          >
            Request a Demo
          </Link>
        </div>
      ) : null}
    </div>
  );
}
