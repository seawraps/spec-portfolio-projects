import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { navigationLinks, neighborhoods } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-[var(--color-navy)] text-white">
      <Container className="py-14 sm:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr_0.95fr_0.95fr]">
          <div>
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.34em] text-[var(--color-bronze-soft)]">
              Crescent Vale Realty
            </p>
            <h2 className="mt-4 max-w-md font-display text-[clamp(2.8rem,5vw,4.6rem)] leading-[0.94] text-white">
              Quiet representation for homes with presence and clients who value discretion.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/68">
              Crescent Vale is positioned as a boutique private brokerage for
              Harbor City and its most established residential enclaves,
              balancing editorial launch strategy with direct client counsel.
            </p>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/48">
              Concept/demo portfolio project. Agency identity, team members,
              listings, testimonials, and market figures are illustrative.
            </p>
          </div>

          <div>
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.34em] text-[var(--color-bronze-soft)]">
              Navigate
            </p>
            <nav aria-label="Footer navigation" className="mt-4 space-y-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/74 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.34em] text-[var(--color-bronze-soft)]">
              Contact
            </p>
            <div className="mt-4 space-y-3 text-sm leading-7 text-white/68">
              <a href={siteConfig.phoneHref} className="block hover:text-white">
                {siteConfig.phone}
              </a>
              <a href={siteConfig.emailHref} className="block hover:text-white">
                {siteConfig.email}
              </a>
              <p>{siteConfig.address}</p>
            </div>
          </div>

          <div>
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.34em] text-[var(--color-bronze-soft)]">
              Service Area
            </p>
            <div className="mt-4 space-y-2 text-sm leading-7 text-white/68">
              {neighborhoods.map((item) => (
                <p key={item.name}>{item.name}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/48">
          <p>&copy; {new Date().getFullYear()} Crescent Vale Realty. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
