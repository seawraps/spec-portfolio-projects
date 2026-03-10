import Link from "next/link";
import { contactDetails, navLinks, restaurantName, socialLinks } from "@/lib/data";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgba(255,233,204,0.1)] bg-[#0d0907] text-[#d7c5b1]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#d1a364]">
            Santa Monica Harbor
          </p>
          <h2 className="mt-4 font-display text-4xl leading-none text-[#f8efe4]">
            {restaurantName}
          </h2>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-[#cdb8a3]">
            A portfolio concept restaurant built to feel like a real candlelit coastal destination,
            from first cocktail to final course.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.26em] text-[#f1ddbf]">
            Navigate
          </h3>
          <ul className="mt-5 space-y-3 text-sm uppercase tracking-[0.16em]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-[#f6ecdf]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.26em] text-[#f1ddbf]">
            Reservations
          </h3>
          <address className="mt-5 not-italic text-sm leading-relaxed text-[#cdb8a3]">
            <p>{contactDetails.addressLine1}</p>
            <p>{contactDetails.addressLine2}</p>
            <p className="mt-3">{contactDetails.phone}</p>
            <p>
              <a
                href={`mailto:${contactDetails.email}`}
                className="transition-colors hover:text-[#f6ecdf]"
              >
                {contactDetails.email}
              </a>
            </p>
          </address>
          <ul className="mt-5 flex gap-5 text-sm">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#f6ecdf]"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-[rgba(255,233,204,0.08)] px-6 py-5 text-center text-xs uppercase tracking-[0.18em] text-[#8d7460]">
        <p>
          © {year} {restaurantName}. Concept site for portfolio demonstration.
        </p>
      </div>
    </footer>
  );
}
