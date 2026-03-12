"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { navItems, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

function splitHref(href: string) {
  const [path, hash = ""] = href.split("#");

  return {
    path: path || "/",
    hash: hash ? `#${hash}` : "",
  };
}

function isActivePath(pathname: string, currentHash: string, href: string) {
  const { path, hash } = splitHref(href);

  if (hash) {
    return pathname === path && currentHash === hash;
  }

  return pathname === path;
}

function EditorialWordmark({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="min-w-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum"
      aria-label="Nadia Vale home"
    >
      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.34em] text-mocha/70">
        Nadia Vale Studio
      </p>
      <div className="mt-2 flex flex-wrap items-end gap-x-4 gap-y-1">
        <p
          className={cn(
            "font-display leading-none tracking-[-0.06em] text-ink",
            compact ? "text-[2.5rem]" : "text-[3.35rem] xl:text-[3.9rem]",
          )}
        >
          Nadia Vale
        </p>
        <p className="pb-1 text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-mocha/66">
          Speaker, advisor, editorial voice
        </p>
      </div>
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [openRoute, setOpenRoute] = useState<string | null>(null);
  const [currentHash, setCurrentHash] = useState("");
  const routeKey = `${pathname}${currentHash}`;
  const isOpen = openRoute === routeKey;

  useEffect(() => {
    function syncHash() {
      setCurrentHash(window.location.hash);
    }

    syncHash();
    window.addEventListener("hashchange", syncHash);

    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-[#fbf4ec]">
      <div className="border-b border-ink/10">
        <Container className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-3 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-mocha/72">
          <span>{siteConfig.location}</span>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={siteConfig.newsletterHref}
              className="hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-plum"
            >
              Newsletter
            </Link>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-plum"
            >
              Booking desk
            </a>
          </div>
        </Container>
      </div>

      <Container>
        <div className="flex items-start justify-between gap-6 py-5 lg:hidden">
          <EditorialWordmark compact />

          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-3 border border-ink/12 bg-white/72 px-4 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setOpenRoute((value) => (value === routeKey ? null : routeKey))}
          >
            <span>{isOpen ? "Close" : "Menu"}</span>
            <span className="relative block h-3.5 w-4" aria-hidden="true">
              <span
                className={cn(
                  "absolute left-0 top-0 block h-px w-full bg-current transition-transform duration-200",
                  isOpen ? "translate-y-[6px] rotate-45" : "",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[6px] block h-px w-full bg-current transition-opacity duration-200",
                  isOpen ? "opacity-0" : "",
                )}
              />
              <span
                className={cn(
                  "absolute bottom-0 left-0 block h-px w-full bg-current transition-transform duration-200",
                  isOpen ? "-translate-y-[6px] -rotate-45" : "",
                )}
              />
            </span>
          </button>
        </div>

        <div className="hidden grid-cols-[minmax(0,1fr)_auto_auto] items-end gap-8 py-6 lg:grid">
          <EditorialWordmark />

          <nav aria-label="Primary navigation" className="justify-self-end">
            <ul className="flex items-center gap-5 xl:gap-7">
              {navItems.map((item) => {
                const active = isActivePath(pathname, currentHash, item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "inline-flex border-b border-transparent pb-2 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-mocha/76 transition-colors hover:border-ink/30 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum",
                        active ? "border-ink text-ink" : "",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <ButtonLink
            href="/contact?type=speaking"
            className="h-12 px-6 text-[0.68rem] uppercase tracking-[0.2em]"
            arrow
          >
            Book Nadia
          </ButtonLink>
        </div>

        {isOpen ? (
          <div id="mobile-nav" className="border-t border-ink/10 py-5 lg:hidden">
            <nav aria-label="Mobile primary navigation">
              <div className="grid">
                {navItems.map((item) => {
                  const active = isActivePath(pathname, currentHash, item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between gap-4 border-b border-ink/10 py-4 text-left text-[0.95rem] text-ink last:border-b-0",
                        active ? "text-plum" : "text-ink",
                      )}
                    >
                      <span>{item.label}</span>
                      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-mocha/64">
                        {active ? "Current" : "Open"}
                      </span>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-6 grid gap-4 border-t border-ink/10 pt-5">
                <p className="max-w-xl text-sm leading-7 text-mocha/88">
                  Select keynote dates and a small advisory roster are shared directly once the room, timing, and brief are clear.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/contact?type=speaking" arrow className="justify-center">
                    Request availability
                  </ButtonLink>
                  <ButtonLink href="/services" variant="secondary" className="justify-center">
                    Review the offers
                  </ButtonLink>
                </div>
              </div>
            </nav>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
