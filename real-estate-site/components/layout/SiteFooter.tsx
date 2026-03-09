import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { navigationLinks, neighborhoods } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[rgba(255,252,247,0.65)]">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.9fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
              Crescent Vale Realty
            </p>
            <h2 className="mt-4 max-w-sm font-display text-4xl text-[var(--color-ink)]">
              Boutique real estate guidance for deliberate moves.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-[var(--color-muted)]">
              A concept agency serving Harbor City and surrounding residential
              enclaves with buyer representation, seller strategy, and refined
              market counsel.
            </p>
            <p className="fine-print mt-5 max-w-md">
              Concept/demo portfolio project. Agency identity, team members,
              listings, testimonials, and market figures are illustrative.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
              Navigate
            </p>
            <nav aria-label="Footer navigation" className="mt-4 space-y-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-[var(--color-ink)] hover:text-[var(--color-forest)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
              Contact
            </p>
            <div className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-muted)]">
              <a href={siteConfig.phoneHref} className="block hover:text-[var(--color-ink)]">
                {siteConfig.phone}
              </a>
              <a href={siteConfig.emailHref} className="block hover:text-[var(--color-ink)]">
                {siteConfig.email}
              </a>
              <p>{siteConfig.address}</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
              Service Area
            </p>
            <div className="mt-4 space-y-2 text-sm leading-7 text-[var(--color-muted)]">
              {neighborhoods.map((item) => (
                <p key={item.name}>{item.name}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--color-line)] pt-6 text-sm text-[var(--color-muted)]">
          <p>&copy; {new Date().getFullYear()} Crescent Vale Realty. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
