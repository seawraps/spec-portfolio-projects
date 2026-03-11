import Link from "next/link";

import { contactDetails, navLinks, restaurantName, socialLinks } from "@/lib/data";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-shell border-t border-[rgba(233,209,181,0.08)] bg-[#090807]">
      <div className="mx-auto max-w-[96rem] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 border-b border-[rgba(233,209,181,0.1)] pb-12 lg:grid-cols-[1.15fr_0.5fr_0.6fr_0.5fr]">
          <div>
            <p className="eyebrow">Santa Monica Harbor</p>
            <h2 className="mt-5 max-w-xl font-display text-[3.8rem] leading-[0.86] tracking-[-0.06em] text-[#fff1df] sm:text-[5rem]">
              Dinner with mood, ritual, and a final pour still ahead.
            </h2>
            <p className="mt-5 max-w-lg text-[1rem] leading-relaxed text-[#cfbda8]">
              Astera is a fictional restaurant brand created as a hospitality-first portfolio
              concept. Every screen is designed to feel like a reservation already in progress.
            </p>
          </div>

          <div>
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-[#d7aa75]">
              Navigate
            </p>
            <ul className="mt-5 space-y-3 text-sm uppercase tracking-[0.2em] text-[#cfbda8]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-[#fff1df]"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="transition-colors hover:text-[#fff1df]">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-[#d7aa75]">
              Reservations
            </p>
            <address className="mt-5 not-italic text-sm leading-relaxed text-[#cfbda8]">
              <p>{contactDetails.addressLine1}</p>
              <p>{contactDetails.addressLine2}</p>
              <p className="mt-4">{contactDetails.phone}</p>
              <p className="mt-1">
                <a
                  href={`mailto:${contactDetails.reservationEmail}`}
                  className="transition-colors hover:text-[#fff1df]"
                >
                  {contactDetails.reservationEmail}
                </a>
              </p>
            </address>
          </div>

          <div>
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-[#d7aa75]">
              Follow
            </p>
            <ul className="mt-5 space-y-3 text-sm uppercase tracking-[0.2em] text-[#cfbda8]">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[#fff1df]"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-5 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#8c7058] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {restaurantName}
          </p>
          <p>Concept site for portfolio demonstration.</p>
        </div>
      </div>
    </footer>
  );
}
