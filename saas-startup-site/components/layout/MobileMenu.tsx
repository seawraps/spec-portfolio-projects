"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navigationLinks } from "@/lib/data";

export function MobileMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        aria-label="Toggle navigation menu"
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
          className="absolute inset-x-4 top-[4.5rem] z-50 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/10"
        >
          <ul className="flex flex-col gap-2" aria-label="Mobile navigation">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-lg px-3 py-2 text-sm font-medium transition ${
                      isActive
                        ? "bg-cyan-50 text-cyan-800"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Request a Demo
          </Link>
        </div>
      ) : null}
    </div>
  );
}
