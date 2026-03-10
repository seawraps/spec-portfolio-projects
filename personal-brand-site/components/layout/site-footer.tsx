import Link from "next/link";

import { Container } from "@/components/ui/container";
import { navItems, projectNote, siteConfig } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/8 bg-[rgb(255_250_244/0.64)] py-12">
      <Container className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-sm font-extrabold tracking-[0.24em] text-ink shadow-[0_14px_28px_-20px_rgba(35,24,20,0.34)]">
              NV
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">{siteConfig.name}</p>
              <p className="max-w-md text-xs leading-5 text-mocha/82">{siteConfig.tagline}</p>
            </div>
          </div>

          <p className="mt-6 max-w-xl text-sm leading-7 text-mocha/92">{siteConfig.shortBio}</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-mocha/84">{projectNote}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
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

          <div>
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
      </Container>

      <Container className="mt-10 border-t border-ink/8 pt-6 text-sm text-mocha/84">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>{new Date().getFullYear()} Nadia Vale Studio. Concept portfolio work.</p>
          <p>Built as an editorial personal-brand concept in Next.js and Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}
