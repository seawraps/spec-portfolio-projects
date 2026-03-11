"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { buttonClassName } from "@/components/ui/button-styles";
import { contactDetails, navLinks, restaurantName } from "@/lib/data";

function isActiveLink(currentPath: string, href: string, external?: boolean) {
  if (external) {
    return false;
  }

  return href === "/" ? currentPath === "/" : currentPath.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const phoneHref = `tel:${contactDetails.phone.replace(/[^\d+]/g, "")}`;

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={`transition-all duration-500 ${
            isScrolled
              ? "border-b border-[rgba(233,209,181,0.12)] bg-[rgba(10,8,7,0.88)] shadow-[0_22px_60px_-34px_rgba(0,0,0,0.82)] backdrop-blur-2xl"
              : "bg-[linear-gradient(180deg,rgba(10,8,7,0.72),rgba(10,8,7,0.36)_68%,transparent)]"
          }`}
        >
          <div className="mx-auto max-w-[96rem] px-5 sm:px-8 lg:px-10">
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 py-4 sm:py-5">
              <button
                type="button"
                onClick={() => setIsOpen((value) => !value)}
                aria-expanded={isOpen}
                aria-controls="primary-nav"
                aria-label={isOpen ? "Close host stand menu" : "Open host stand menu"}
                className="group inline-flex items-center gap-3 rounded-xl border border-[rgba(233,209,181,0.16)] bg-[rgba(20,15,12,0.54)] px-3 py-2.5 text-left text-[#f3e4d1] backdrop-blur-md transition-all duration-300 hover:border-[rgba(233,209,181,0.28)] hover:bg-[rgba(20,15,12,0.72)]"
              >
                <span className="flex h-4 w-4 flex-col justify-between" aria-hidden="true">
                  <span
                    className={`block h-px bg-current transition-transform duration-500 ${
                      isOpen ? "translate-y-[7px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`block h-px bg-current transition-opacity duration-300 ${
                      isOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`block h-px bg-current transition-transform duration-500 ${
                      isOpen ? "-translate-y-[7px] -rotate-45" : ""
                    }`}
                  />
                </span>
                <span className="hidden text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-[#f1ddbf] sm:block">
                  Host Stand
                </span>
              </button>

              <div className="justify-self-center text-center text-[#fff1df]">
                <Link href="/" aria-label={`${restaurantName} home`} className="inline-block">
                  <span className="block font-display text-[2.25rem] leading-none tracking-[-0.06em] sm:text-[2.8rem]">
                    Astera
                  </span>
                  <span className="mt-1 block text-[0.54rem] font-semibold uppercase tracking-[0.48em] text-[#d5ab77]">
                    Coastal Bistro
                  </span>
                </Link>
              </div>

              <div className="flex items-center justify-self-end gap-3">
                <a
                  href={phoneHref}
                  className="hidden text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-[#d8c3ac] transition-colors hover:text-[#fff1df] lg:inline-flex"
                >
                  {contactDetails.phone}
                </a>
                <a
                  href={contactDetails.reservationsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClassName("accent", "px-4 sm:px-5")}
                >
                  Reserve
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-[rgba(6,5,4,0.68)] backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <aside
        id="primary-nav"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-[42rem] flex-col border-l border-[rgba(233,209,181,0.12)] bg-[linear-gradient(180deg,rgba(17,13,10,0.98),rgba(9,8,7,0.98))] shadow-[0_40px_120px_-30px_rgba(0,0,0,0.92)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="still-life-grid absolute inset-0 opacity-30" />
        <div className="absolute inset-x-0 top-0 h-52 bg-[radial-gradient(circle_at_top,rgba(212,167,112,0.18),transparent_58%)]" />

        <div className="relative flex h-full flex-col overflow-y-auto px-6 pb-8 pt-24 sm:px-8 sm:pt-28">
          <div className="border-b border-[rgba(233,209,181,0.12)] pb-6">
            <p className="eyebrow">Host Stand</p>
            <h2 className="mt-4 max-w-md font-display text-[3.2rem] leading-[0.88] tracking-[-0.05em] text-[#fff1df] sm:text-[4rem]">
              Reservations first, details handled with quiet confidence.
            </h2>
            <p className="mt-4 max-w-lg text-[1rem] leading-relaxed text-[#d0bea8]">
              Use the menu as a reservation desk, not a sitemap. Navigate the room, the menu, and
              the visit details from one place.
            </p>
          </div>

          <nav className="mt-8 flex flex-col" aria-label="Primary navigation">
            {navLinks.map((link) => {
              const active = isActiveLink(pathname, link.href, link.external);
              const className =
                "group flex items-end justify-between gap-4 border-b border-[rgba(233,209,181,0.1)] py-4 text-[#f3e4d1] transition-colors duration-300 hover:text-[#ffffff]";
              const content = (
                <>
                  <div>
                    <span className="block text-[0.58rem] font-semibold uppercase tracking-[0.34em] text-[#af8a66]">
                      {active ? "Now Showing" : "Navigate"}
                    </span>
                    <span className="mt-2 block font-display text-[2.2rem] leading-[0.92] tracking-[-0.04em] sm:text-[2.7rem]">
                      {link.label}
                    </span>
                  </div>
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-[#d7aa75] transition-transform duration-300 group-hover:translate-x-1">
                    Enter
                  </span>
                </>
              );

              if (link.external) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className={className}
                  >
                    {content}
                  </a>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={className}
                >
                  {content}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto grid gap-5 border-t border-[rgba(233,209,181,0.12)] pt-8 sm:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-[#d7aa75]">
                Tonight
              </p>
              <p className="mt-3 max-w-sm text-[1rem] leading-relaxed text-[#d0bea8]">
                Terrace requests welcomed. Aperitivo from 5 PM. Last seating 10:30 PM Friday and
                Saturday.
              </p>
            </div>

            <div className="grid gap-3">
              <a
                href={contactDetails.reservationsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClassName("primary", "w-full")}
              >
                Book Online
              </a>
              <a
                href={phoneHref}
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[rgba(233,209,181,0.16)] px-4 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#f1ddbf] transition-colors hover:border-[rgba(233,209,181,0.28)] hover:text-[#fff1df]"
              >
                {contactDetails.phone}
              </a>
              <a
                href={contactDetails.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#d0bea8] transition-colors hover:text-[#fff1df]"
              >
                {contactDetails.addressLine1}
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
