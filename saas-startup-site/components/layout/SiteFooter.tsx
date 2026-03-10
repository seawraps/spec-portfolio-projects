import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { navigationLinks } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const platformLinks = ["Workflow studio", "Command board", "AI briefings", "Integrations"];
  const trustItems = ["Policy-aware releases", "Role-based access", "Audit-ready timelines"];

  return (
    <footer className="border-t border-white/10 bg-[#040d18] text-slate-200">
      <Container className="py-14 md:py-20">
        <div className="surface-panel-dark grid gap-10 px-6 py-8 sm:px-8 lg:grid-cols-[1.15fr_0.65fr_0.65fr_0.75fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(160deg,rgba(101,226,255,0.18),rgba(7,17,31,0.98))]">
                <span className="font-mono text-[0.7rem] font-semibold tracking-[0.22em] text-sky-100">
                  OO
                </span>
              </span>
              <div>
                <p className="font-display text-lg font-semibold tracking-[-0.04em] text-white">
                  {siteConfig.name}
                </p>
                <p className="data-label mt-1 text-slate-400">Enterprise workflow orchestration</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-6 text-slate-300">{siteConfig.description}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {trustItems.map((item) => (
                <li
                  key={item}
                  className="glass-chip rounded-full px-3 py-1.5 text-xs font-medium text-slate-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="data-label text-slate-400">Explore</h2>
            <ul className="mt-3 space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-300 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="data-label text-slate-400">Platform</h2>
            <ul className="mt-3 space-y-2">
              {platformLinks.map((item) => (
                <li key={item} className="text-sm text-slate-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="data-label text-slate-400">Contact</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="transition hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li>San Francisco, CA</li>
              <li>Mon-Fri, 9am-6pm PT</li>
              <li className="text-slate-400">
                Security review support available for enterprise evaluations.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-xs text-slate-500 sm:flex sm:items-center sm:justify-between">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="mt-2 sm:mt-0">Concept/demo portfolio project. Not a live production company.</p>
        </div>
      </Container>
    </footer>
  );
}
