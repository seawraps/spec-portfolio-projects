import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { navItems, projectNote, siteConfig } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="pb-8 pt-16 sm:pt-20">
      <Container>
        <div className="border-t border-ink/12">
          <div className="grid gap-10 py-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.7fr)_minmax(0,0.7fr)] lg:py-10">
            <div>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-mocha/66">
                Nadia Vale Studio
              </p>
              <h2 className="mt-3 font-display text-[3.4rem] leading-none tracking-[-0.06em] text-ink sm:text-[4.2rem]">
                Nadia Vale
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-mocha/90">
                {siteConfig.shortBio}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact?type=speaking" arrow>
                  Request availability
                </ButtonLink>
                <ButtonLink href={`mailto:${siteConfig.email}`} variant="secondary">
                  {siteConfig.email}
                </ButtonLink>
              </div>
            </div>

            <div>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-mocha/66">
                Navigate
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-mocha/88">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-ink">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/services" className="hover:text-ink">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-ink">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-mocha/66">
                Booking note
              </p>
              <p className="mt-5 text-sm leading-7 text-mocha/88">
                Send the room, the audience, and what should feel different after the engagement. Nadia replies with fit, timing, and the strongest next step.
              </p>
              <div className="mt-5 space-y-2 text-sm leading-7 text-mocha/88">
                <p>{siteConfig.location}</p>
                <a href={`mailto:${siteConfig.email}`} className="font-semibold text-ink hover:text-plum">
                  {siteConfig.email}
                </a>
              </div>
              <p className="mt-6 text-xs leading-6 text-mocha/72">{projectNote}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-ink/12 py-4 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-mocha/62 sm:flex-row sm:items-center sm:justify-between">
          <p>{new Date().getFullYear()} Nadia Vale Studio</p>
          <p>Editorial personal-brand concept in Next.js</p>
        </div>
      </Container>
    </footer>
  );
}
