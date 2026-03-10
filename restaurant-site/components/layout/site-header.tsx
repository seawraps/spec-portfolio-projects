"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useEffectEvent, useState } from "react";

import { buttonClassName } from "@/components/ui/button-styles";
import { contactDetails, navLinks, serviceMoments } from "@/lib/data";

function isActiveLink(currentPath: string, href: string) {
  return href === "/" ? currentPath === "/" : currentPath.startsWith(href);
}

function desktopLinkClasses(currentPath: string, href: string) {
  const active = isActiveLink(currentPath, href);

  return `group relative inline-flex items-center gap-2 py-1 pl-4 pr-1 text-[0.68rem] font-semibold uppercase tracking-[0.28em] transition-all ${
    active
      ? "text-[#fff2df]"
      : "text-[#cdb8a0] hover:text-[#fff2df]"
  }`;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const syncScrollState = useEffectEvent(() => {
    setIsScrolled(window.scrollY > 24);
  });

  useEffect(() => {
    syncScrollState();

    const onScroll = () => syncScrollState();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <div
        className={`mx-auto max-w-7xl overflow-hidden rounded-[2rem] border transition-all duration-500 ${
          isScrolled
            ? "border-[rgba(255,233,204,0.18)] bg-[linear-gradient(135deg,rgba(12,8,6,0.96),rgba(26,16,11,0.9))] shadow-[0_28px_80px_-36px_rgba(0,0,0,0.72)] backdrop-blur-2xl"
            : "border-[rgba(255,233,204,0.12)] bg-[linear-gradient(135deg,rgba(10,7,5,0.84),rgba(23,15,10,0.72))] shadow-[0_24px_70px_-40px_rgba(0,0,0,0.62)] backdrop-blur-xl"
        }`}
      >
        <div className="hidden items-center justify-between border-b border-[rgba(255,233,204,0.1)] px-6 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#bda78f] md:flex">
          <p>Santa Monica Harbor</p>
          <p className="text-center text-[#ddc9b2]">Dinner service from 5 PM • Terrace on request</p>
          <a href={`tel:${contactDetails.phone}`} className="transition-colors hover:text-[#fff2df]">
            {contactDetails.phone}
          </a>
        </div>

        <div className="flex items-center gap-3 px-4 py-4 md:px-6">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3"
            onClick={() => setIsOpen(false)}
            aria-label="Astera Coastal Bistro home"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(255,233,204,0.18)] bg-[rgba(255,255,255,0.04)] font-display text-2xl text-[#f8efe4] shadow-[inset_0_1px_0_rgba(255,245,234,0.12)]">
              A
            </span>
            <span>
              <span className="block font-display text-[2rem] leading-none tracking-[-0.04em] text-[#f8efe4]">
                Astera
              </span>
              <span className="block pl-0.5 text-[0.56rem] font-semibold uppercase tracking-[0.4em] text-[#d8af79]">
                Coastal Bistro
              </span>
            </span>
          </Link>

          <nav className="hidden flex-1 justify-center lg:flex" aria-label="Primary navigation">
            <div className="flex items-center gap-4 rounded-[1.5rem] border border-[rgba(255,233,204,0.14)] bg-[rgba(255,255,255,0.03)] px-5 py-3 shadow-[inset_0_1px_0_rgba(255,245,234,0.08)]">
              <span className="text-[0.58rem] font-semibold uppercase tracking-[0.34em] text-[#8f7057]">
                Tonight
              </span>
              <span className="h-5 w-px bg-[rgba(255,233,204,0.12)]" />
              {navLinks.map((link, index) => {
                const active = isActiveLink(pathname, link.href);

                return (
                  <div key={link.href} className="flex items-center gap-4">
                    <Link
                      href={link.href}
                      className={desktopLinkClasses(pathname, link.href)}
                      aria-current={active ? "page" : undefined}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full transition-all ${
                          active
                            ? "bg-[#d8af79] shadow-[0_0_0_4px_rgba(216,175,121,0.12)]"
                            : "bg-[rgba(255,233,204,0.16)] group-hover:bg-[#d8af79]"
                        }`}
                      />
                      <span>{link.label}</span>
                      <span
                        className={`absolute -bottom-2 left-4 h-px w-[calc(100%-1rem)] origin-left bg-[linear-gradient(90deg,rgba(216,175,121,0.92),transparent)] transition-transform duration-300 ${
                          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </Link>
                    {index < navLinks.length - 1 ? (
                      <span className="h-4 w-px bg-[rgba(255,233,204,0.1)]" />
                    ) : null}
                  </div>
                );
              })}
            </div>
          </nav>

          <div className="ml-auto hidden items-center gap-3 sm:flex">
            <a
              href={contactDetails.reservationsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClassName("primary", "rounded-[1.15rem] px-5")}
            >
              Reserve
            </a>
          </div>

          <button
            type="button"
            className="ml-auto inline-flex h-12 w-12 items-center justify-center rounded-[1.15rem] border border-[rgba(255,233,204,0.18)] bg-[rgba(255,255,255,0.04)] text-[#f6ecdf] md:ml-0 lg:hidden"
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
              {isOpen ? (
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7H20M7 12H20M10 17H20"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen ? (
        <div
          id="mobile-nav"
          className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-[1.9rem] border border-[rgba(255,233,204,0.14)] bg-[linear-gradient(180deg,rgba(10,7,5,0.98),rgba(20,13,9,0.98))] p-5 shadow-[0_28px_90px_-28px_rgba(0,0,0,0.82)] backdrop-blur-2xl lg:hidden"
        >
          <div className="grid gap-8">
            <div className="rounded-[1.5rem] border border-[rgba(255,233,204,0.1)] bg-[rgba(255,255,255,0.03)] p-4">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-[#c99558]">
                Host Stand
              </p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#d6c2ab]">
                Reservations, terrace requests, and private dining all start here.
              </p>
            </div>

            <div className="grid gap-3">
              {navLinks.map((link, index) => {
                const active = isActiveLink(pathname, link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`group flex items-center justify-between rounded-[1.45rem] border px-4 py-4 ${
                      active
                        ? "border-[rgba(216,175,121,0.4)] bg-[rgba(255,255,255,0.06)] text-[#fff2df]"
                        : "border-[rgba(255,233,204,0.08)] bg-[rgba(255,255,255,0.02)] text-[#dbc7b0]"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    <div>
                      <p className="text-[0.58rem] font-semibold uppercase tracking-[0.34em] text-[#8e6d53]">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-2 font-display text-[2.4rem] leading-none">{link.label}</p>
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d8af79] transition-transform duration-300 group-hover:translate-x-1">
                      Enter
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="grid gap-3 rounded-[1.7rem] border border-[rgba(255,233,204,0.1)] bg-[rgba(255,255,255,0.03)] p-4">
              {serviceMoments.slice(0, 2).map((moment) => (
                <div key={moment.label}>
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-[#c99558]">
                    {moment.label}
                  </p>
                  <p className="mt-2 text-base text-[#f4e6d5]">{moment.value}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[#cdb9a2]">{moment.note}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={contactDetails.reservationsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className={buttonClassName("primary", "w-full rounded-[1.15rem]")}
              >
                Reserve
              </a>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className={buttonClassName("secondaryInverse", "w-full rounded-[1.15rem]")}
              >
                Concierge
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
