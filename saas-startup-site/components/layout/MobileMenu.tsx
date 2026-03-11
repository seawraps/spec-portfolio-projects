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
    <div className="relative md:hidden">
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-[0.95rem] border border-white/8 bg-[#07111f]/90 text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-md transition hover:border-white/18 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
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
          className="command-shell absolute right-0 top-[calc(100%+0.85rem)] z-50 w-[min(22rem,calc(100vw-3rem))] p-4"
        >
          <div className="command-panel px-4 py-4">
            <p className="data-label text-sky-200">Control snapshot</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                ["Health", "99.97%"],
                ["Live flows", "327"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="command-panel-soft px-3 py-3"
                >
                  <p className="data-label text-slate-500">{label}</p>
                  <p className="mt-2 text-sm font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <nav aria-label="Mobile primary navigation" className="mt-4">
            <ul className="flex flex-col gap-2">
              {navigationLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center rounded-[0.95rem] px-4 py-3 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${
                        isActive
                          ? "bg-[linear-gradient(135deg,rgba(103,232,249,0.2),rgba(14,165,233,0.08))] text-white ring-1 ring-cyan-300/18"
                          : "text-slate-300 hover:bg-white/8 hover:text-white"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span>{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={buttonClassName("primary", "mt-4 w-full px-4")}
          >
            Start evaluation
          </Link>
        </div>
      ) : null}
    </div>
  );
}
