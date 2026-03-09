import Link from "next/link";
import { contactDetails, navLinks, restaurantName, socialLinks } from "@/lib/data";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-stone-200 bg-stone-950 text-stone-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h2 className="font-display text-3xl text-stone-50">{restaurantName}</h2>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-300">
            Wood-fired Mediterranean dining by the harbor, crafted for long evenings and
            memorable tables.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.16em] text-stone-400">
            Concept demo project for portfolio use.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-100">
            Navigate
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-stone-300">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-amber-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-100">
            Visit
          </h3>
          <address className="mt-4 not-italic text-sm leading-relaxed text-stone-300">
            <p>{contactDetails.addressLine1}</p>
            <p>{contactDetails.addressLine2}</p>
            <p className="mt-3">{contactDetails.phone}</p>
            <p>
              <a
                href={`mailto:${contactDetails.email}`}
                className="transition-colors hover:text-amber-300"
              >
                {contactDetails.email}
              </a>
            </p>
          </address>
          <ul className="mt-5 flex gap-4 text-sm">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 transition-colors hover:text-amber-300"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-stone-800 px-4 py-5 text-center text-xs text-stone-400">
        <p>
          © {year} {restaurantName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
