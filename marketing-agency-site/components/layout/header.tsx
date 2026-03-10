"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

import { agency, navItems } from "@/lib/data";

const navPanels = [
  {
    href: "/",
    label: "Home",
    number: "01",
    summary: "Campaign-first homepage with proof, pressure points, and a measurable performance narrative.",
  },
  {
    href: "/about",
    label: "About",
    number: "02",
    summary: "Senior-led operating model, point of view, and why strategy stays close to execution.",
  },
  {
    href: "/services",
    label: "Services",
    number: "03",
    summary: "The full stack across media, creative systems, landing pages, and optimization loops.",
  },
  {
    href: "/contact",
    label: "Contact",
    number: "04",
    summary: "Start with the pressure point and route into the right sprint or retainer path.",
  },
];

const operatingNotes = [
  "Paid media, messaging, and conversion work reported inside one operating loop",
  "Creative systems designed for launch speed, not approval theater",
  "Working sessions built for operators, founders, and revenue leads",
];

const isActive = (pathname: string, href: string) => {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
};

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = isMenuOpen ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-white/10 bg-coal/92 shadow-[0_22px_48px_-40px_rgba(0,0,0,0.92)] backdrop-blur-2xl">
        <div className="border-b border-white/8">
          <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2 text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-white/50 sm:px-6">
            <div className="inline-flex items-center gap-3">
              <span className="inline-flex items-center gap-2 text-white/70">
                <span className="h-2 w-2 rounded-full bg-volt shadow-[0_0_18px_rgba(217,255,70,0.75)]" />
                Signal Room Live
              </span>
              <span className="hidden text-white/34 md:inline">Senior-led strategy + execution</span>
            </div>
            <p className="text-right text-white/40">Currently booking focused growth sprints</p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6">
          <div className="grid gap-4 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center">
            <Link href="/" className="inline-flex items-center gap-3 text-white" aria-label={`${agency.name} home`}>
              <span className="relative flex flex-col gap-1.5" aria-hidden="true">
                <span className="h-1.5 w-8 rounded-full bg-signal" />
                <span className="h-1.5 w-5 rounded-full bg-volt" />
                <span className="absolute -inset-2 rounded-full bg-signal/12 blur-xl" />
              </span>
              <span>
                <span className="block font-display text-[2.05rem] uppercase tracking-[-0.02em] sm:text-[2.15rem]">{agency.name}</span>
                <span className="mt-0.5 block text-[0.6rem] font-semibold uppercase tracking-[0.26em] text-white/52">
                  Performance Creative
                </span>
              </span>
            </Link>

            <div className="hidden lg:grid lg:gap-2 lg:px-4">
              <div className="flex items-center justify-between px-1 text-[0.56rem] font-semibold uppercase tracking-[0.22em] text-white/42">
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                  Strategy Paths
                </span>
                <span>Route 01-04</span>
              </div>
              <nav
                className="grid grid-cols-4 gap-2 rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-2"
                aria-label="Primary navigation"
              >
                {navItems.map((item, index) => {
                  const active = isActive(pathname, item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`group rounded-[1.15rem] border px-4 py-3 ${
                        active
                          ? "border-signal/40 bg-white text-coal shadow-[0_16px_34px_-24px_rgba(255,255,255,0.85)]"
                          : "border-white/8 bg-white/4 text-white/66 hover:border-white/24 hover:bg-white/8 hover:text-white"
                      }`}
                      aria-current={active ? "page" : undefined}
                    >
                      <span
                        className={`block text-[0.56rem] font-semibold uppercase tracking-[0.24em] ${
                          active ? "text-coal/48" : "text-white/34"
                        }`}
                      >
                        {`0${index + 1}`}
                      </span>
                      <span className="mt-2 block text-[0.68rem] font-semibold uppercase tracking-[0.2em]">{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="flex items-center justify-end gap-3">
              <Link href="/contact" className="button-primary hidden md:inline-flex">
                Start Brief
              </Link>

              <button
                type="button"
                className="inline-flex h-12 items-center justify-center gap-3 rounded-[1.2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-4 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-white hover:border-white/30 hover:bg-white/10"
                onClick={() => setIsMenuOpen((current) => !current)}
                aria-expanded={isMenuOpen}
                aria-controls="site-menu-overlay"
                aria-label={isMenuOpen ? "Close site menu" : "Open site menu"}
              >
                <span className="grid grid-cols-2 gap-1" aria-hidden="true">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/52" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/52" />
                  <span className="h-1.5 w-1.5 rounded-full bg-volt" />
                </span>
                <span>{isMenuOpen ? "Close" : "Menu"}</span>
                <span className="text-white/34">{`0${navItems.length}`}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen ? (
        <div
          id="site-menu-overlay"
          className="fixed inset-0 z-[60] overflow-y-auto bg-coal/95 backdrop-blur-2xl"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="pointer-events-none absolute inset-0 bg-hero-grid opacity-35" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 bg-radial-glow editorial-stripes opacity-90" aria-hidden="true" />

          <div className="relative mx-auto flex min-h-dvh w-full max-w-7xl flex-col px-4 pb-8 pt-5 sm:px-6">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-5">
              <div className="max-w-3xl">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-white/42">Strategy desk</p>
                <p className="mt-3 font-display text-4xl uppercase leading-[0.88] text-white sm:text-6xl">
                  Pick the operating track, then move.
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/66 sm:text-base">
                  The menu is built like the agency view: route first, pressure point second, execution path third.
                </p>
              </div>
              <button
                type="button"
                className="inline-flex h-11 items-center justify-center rounded-[1rem] border border-white/14 bg-white/5 px-4 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-white hover:border-white/34 hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Close
              </button>
            </div>

            <div className="grid flex-1 gap-6 py-8 xl:grid-cols-[1.06fr_0.94fr]">
              <nav aria-label="Expanded site navigation" className="grid gap-4 md:grid-cols-2">
                {navPanels.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`surface-panel group flex flex-col gap-5 p-6 sm:p-7 ${
                      isActive(pathname, item.href) ? "border-signal/42 bg-white/9" : ""
                    }`}
                    data-tilt
                    data-reveal="left"
                    style={{ "--reveal-delay": `${index * 70}ms` } as CSSProperties}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-display text-6xl uppercase leading-none text-white/18">{item.number}</span>
                      <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white/52">
                        {isActive(pathname, item.href) ? "Current route" : "Open route"}
                      </span>
                    </div>
                    <div>
                      <h2 className="font-display text-5xl uppercase leading-[0.9] text-white transition group-hover:text-volt sm:text-6xl">
                        {item.label}
                      </h2>
                      <p className="mt-3 max-w-xl text-sm leading-7 text-white/68 sm:text-base">{item.summary}</p>
                    </div>
                  </Link>
                ))}
              </nav>

              <div className="grid gap-6">
                <aside className="surface-panel p-6 sm:p-7" data-tilt data-reveal="right">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-volt">Command view</p>
                  <h2 className="mt-4 max-w-lg font-display text-5xl uppercase leading-[0.9] text-white sm:text-6xl">
                    Strategy pressure with measurable follow-through.
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
                    Signal & Stone keeps narrative, paid execution, page movement, and reporting inside one decision loop.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="button-primary">
                      Book Strategy Call
                    </Link>
                    <Link href="/services" onClick={() => setIsMenuOpen(false)} className="button-secondary">
                      Review Service Stack
                    </Link>
                  </div>
                </aside>

                <div className="grid gap-6 md:grid-cols-2">
                  <article className="surface-panel p-6" data-tilt data-reveal="right" style={{ "--reveal-delay": "80ms" } as CSSProperties}>
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-white/42">Operating notes</p>
                    <ul className="mt-5 space-y-3 text-sm leading-7 text-white/74">
                      {operatingNotes.map((note) => (
                        <li key={note} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-6 rounded-full bg-signal" aria-hidden="true" />
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </article>

                  <article className="paper-panel p-6" data-tilt data-reveal="right" style={{ "--reveal-delay": "140ms" } as CSSProperties}>
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-signal">Direct line</p>
                    <p className="mt-4 font-display text-4xl uppercase leading-none text-ink">Fastest way in</p>
                    <div className="mt-4 space-y-2 text-sm text-ink/76">
                      <a href={`mailto:${agency.email}`} className="block hover:text-ink">
                        {agency.email}
                      </a>
                      <a href={`tel:${agency.phone}`} className="block hover:text-ink">
                        {agency.phone}
                      </a>
                      <p>{agency.location}</p>
                    </div>
                    <p className="mt-6 text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-ink/44">
                      Response target: within one business day
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
