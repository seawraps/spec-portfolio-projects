import Link from "next/link";

import { Container } from "@/components/ui/container";
import { navItems, projectNote, siteConfig } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/8 bg-white/45 py-12">
      <Container className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-sm font-extrabold tracking-[0.24em] text-white">
              NV
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">{siteConfig.name}</p>
              <p className="text-xs text-ink/68">{siteConfig.tagline}</p>
            </div>
          </div>

          <p className="mt-6 max-w-xl text-sm leading-7 text-ink/70">{siteConfig.shortBio}</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-ink/72">{projectNote}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink/68">Navigate</p>
            <ul className="mt-4 space-y-3 text-sm text-ink/72">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link className="hover:text-rose" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink/68">Connect</p>
            <ul className="mt-4 space-y-3 text-sm text-ink/72">
              {siteConfig.socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    className="hover:text-rose"
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

      <Container className="mt-10 border-t border-ink/8 pt-6 text-sm text-ink/68">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>{new Date().getFullYear()} Nadia Vale Studio. Concept portfolio work.</p>
          <p>Built with Next.js, TypeScript, Tailwind CSS, and App Router.</p>
        </div>
      </Container>
    </footer>
  );
}
