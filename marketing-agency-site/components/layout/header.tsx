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
    summary: "Campaign-first homepage with proof, pressure points, and performance narrative.",
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
  "Paid media and conversion work reported in one loop",
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
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = isMenuOpen ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-white/10 bg-coal/88 backdrop-blur-2xl">
        <div className="border-b border-white/8">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/54">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 text-white/68">
                <span className="h-2 w-2 rounded-full bg-volt shadow-[0_0_18px_rgba(217,255,70,0.7)]" />
                Signal Room Live
              </span>
              <span className="hidden sm:inline text-white/34">Senior-led strategy + execution</span>
            </div>
            <p className="hidden md:block text-right text-white/42">Currently booking focused growth sprints</p>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <Link href="/" className="inline-flex items-center gap-3 text-white" aria-label={`${agency.name} home`}>
            <span className="relative flex flex-col gap-1.5" aria-hidden="true">
              <span className="h-1.5 w-8 rounded-full bg-signal" />
              <span className="h-1.5 w-5 rounded-full bg-volt" />
              <span className="absolute -inset-2 rounded-full bg-signal/12 blur-xl" />
            </span>
            <span>
              <span className="block font-display text-[2.15rem] uppercase tracking-[-0.02em]">{agency.name}</span>
              <span className="mt-0.5 block text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-white/52">
                Performance Creative
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/4 p-1 lg:flex" aria-label="Primary navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] ${
                    isActive(pathname, item.href)
                      ? "bg-white text-coal"
                      : "text-white/64 hover:bg-white/8 hover:text-white"
                  }`}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link href="/contact" className="button-primary hidden md:inline-flex">
              Start Brief
            </Link>

            <button
              type="button"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-white/16 bg-white/4 px-4 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white hover:border-white/36 hover:bg-white/10"
              onClick={() => setIsMenuOpen((current) => !current)}
              aria-expanded={isMenuOpen}
              aria-controls="site-menu-overlay"
              aria-label={isMenuOpen ? "Close site menu" : "Open site menu"}
            >
              <span>{isMenuOpen ? "Close" : "Menu"}</span>
              <span className="text-white/36">{`0${navItems.length}`}</span>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen ? (
        <div
          id="site-menu-overlay"
          className="fixed inset-0 z-[60] overflow-y-auto bg-coal/94 backdrop-blur-2xl"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="pointer-events-none absolute inset-0 bg-hero-grid opacity-35" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 bg-radial-glow editorial-stripes opacity-90" aria-hidden="true" />

          <div className="relative mx-auto flex min-h-dvh w-full max-w-7xl flex-col px-6 pb-8 pt-6">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/44">Navigation</p>
                <p className="mt-2 font-display text-4xl uppercase text-white sm:text-5xl">Choose The Right Entry Point</p>
              </div>
              <button
                type="button"
                className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/16 bg-white/5 px-4 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white hover:border-white/36 hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Close
              </button>
            </div>

            <div className="grid flex-1 gap-6 py-8 xl:grid-cols-[1.02fr_0.98fr]">
              <nav aria-label="Expanded site navigation" className="grid gap-4">
                {navPanels.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`surface-panel group flex flex-col gap-4 p-6 sm:p-7 ${
                      isActive(pathname, item.href) ? "border-signal/40 bg-white/8" : ""
                    }`}
                    data-tilt
                    data-reveal="left"
                    style={{ "--reveal-delay": `${index * 70}ms` } as CSSProperties}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-display text-6xl uppercase leading-none text-white/22">{item.number}</span>
                      <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/52">
                        {isActive(pathname, item.href) ? "Current page" : "Open section"}
                      </span>
                    </div>
                    <div>
                      <h2 className="font-display text-5xl uppercase text-white transition group-hover:text-volt sm:text-6xl">
                        {item.label}
                      </h2>
                      <p className="mt-3 max-w-xl text-sm leading-7 text-white/68 sm:text-base">{item.summary}</p>
                    </div>
                  </Link>
                ))}
              </nav>

              <div className="grid gap-6">
                <aside className="surface-panel p-6 sm:p-7" data-tilt data-reveal="right">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-volt">Signal & Stone</p>
                  <h2 className="mt-4 max-w-lg font-display text-5xl uppercase text-white sm:text-6xl">
                    Strategic pressure with measurable follow-through.
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
                    The site is built like the agency: senior-led, fast-moving, and designed to connect narrative, campaigns,
                    and conversion performance in one system.
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
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/42">Operating notes</p>
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
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-signal">Direct line</p>
                    <p className="mt-4 font-display text-4xl uppercase text-ink">Fastest way in</p>
                    <div className="mt-4 space-y-2 text-sm text-ink/74">
                      <a href={`mailto:${agency.email}`} className="block hover:text-ink">
                        {agency.email}
                      </a>
                      <a href={`tel:${agency.phone}`} className="block hover:text-ink">
                        {agency.phone}
                      </a>
                      <p>{agency.location}</p>
                    </div>
                    <p className="mt-6 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink/44">
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
