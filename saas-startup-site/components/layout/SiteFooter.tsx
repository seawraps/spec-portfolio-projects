import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { navigationLinks } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-10 sm:py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold text-slate-900">{siteConfig.name}</p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">{siteConfig.description}</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
              Explore
            </h2>
            <ul className="mt-3 space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition hover:text-slate-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
              Contact
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="transition hover:text-slate-900">
                  {siteConfig.email}
                </a>
              </li>
              <li>San Francisco, CA</li>
              <li>Mon-Fri, 9am-6pm PT</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-5 text-xs text-slate-500 sm:flex sm:items-center sm:justify-between">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Concept/demo portfolio project. Not a live production company.</p>
        </div>
      </Container>
    </footer>
  );
}
