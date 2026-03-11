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
        className="inline-flex h-12 w-12 items-center justify-center rounded-[1.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-md transition hover:border-white/20 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
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
          className="surface-panel-dark absolute right-0 top-[calc(100%+0.85rem)] z-50 w-[min(22rem,calc(100vw-3rem))] overflow-hidden p-4"
        >
          <div className="rounded-[1.35rem] border border-white/10 bg-white/5 px-4 py-4">
            <p className="data-label text-sky-200">System snapshot</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                ["Health", "99.97%"],
                ["Live flows", "327"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-[1rem] border border-white/8 bg-[#091322] px-3 py-3"
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
                      className={`flex items-center rounded-[1.2rem] px-4 py-3 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${
                        isActive
                          ? "bg-[linear-gradient(135deg,rgba(101,226,255,0.2),rgba(22,184,255,0.12))] text-white ring-1 ring-white/10"
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
