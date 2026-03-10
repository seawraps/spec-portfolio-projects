import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { navItems, projectNote, siteConfig } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="pb-8 pt-10">
      <Container>
        <div className="paper-panel overflow-hidden">
          <div className="grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.08fr_0.92fr] lg:px-10">
            <div>
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-mocha/68">
                Studio Masthead
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-sm font-extrabold tracking-[0.24em] text-ink shadow-[0_14px_28px_-20px_rgba(35,24,20,0.34)]">
                  NV
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">{siteConfig.name}</p>
                  <p className="max-w-md text-xs leading-5 text-mocha/82">{siteConfig.tagline}</p>
                </div>
              </div>

              <p className="mt-6 max-w-xl text-sm leading-7 text-mocha/92">{siteConfig.shortBio}</p>

              <div className="mt-6 rounded-[1.6rem] border border-ink/8 bg-white/72 p-5">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-mocha/68">
                  Direct booking note
                </p>
                <p className="mt-3 text-sm leading-7 text-mocha/88">
                  Email the room, timing, and outcome you want. The fastest replies come when the brief is practical
                  and concise.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                  <a className="font-semibold text-ink hover:text-plum" href={`mailto:${siteConfig.email}`}>
                    {siteConfig.email}
                  </a>
                  <span className="text-mocha/42">/</span>
                  <span className="text-mocha/82">{siteConfig.location}</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact?type=advisory" arrow>
                  Request availability
                </ButtonLink>
                <ButtonLink href="/services" variant="ghost" arrow>
                  Review offers
                </ButtonLink>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="ink-panel p-6 sm:p-7">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-white/58">
                  Concept Note
                </p>
                <p className="mt-4 text-sm leading-7 text-white/78">{projectNote}</p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-[1.7rem] border border-ink/8 bg-white/74 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mocha/82">Navigate</p>
                  <ul className="mt-4 space-y-3 text-sm text-mocha/88">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        <Link className="hover:text-plum" href={item.href}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[1.7rem] border border-ink/8 bg-white/74 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mocha/82">Connect</p>
                  <ul className="mt-4 space-y-3 text-sm text-mocha/88">
                    {siteConfig.socialLinks.map((link) => (
                      <li key={link.label}>
                        <a
                          className="hover:text-plum"
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-ink/8 px-6 py-5 text-sm text-mocha/84 sm:px-8 lg:px-10">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p>{new Date().getFullYear()} Nadia Vale Studio. Concept portfolio work.</p>
              <p>Built as an editorial personal-brand concept in Next.js and Tailwind CSS.</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
