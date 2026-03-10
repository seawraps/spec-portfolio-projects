import Link from "next/link";

import { agency, navItems } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-coal">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.15fr_0.75fr_0.9fr]">
        <div className="space-y-4">
          <p className="eyebrow-label">{agency.name}</p>
          <h2 className="max-w-lg font-display text-4xl font-semibold uppercase leading-[0.92] text-white sm:text-5xl">
            Paid media, creative systems, and sharper conversion pressure.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-white/66">{agency.description}</p>
          <p className="text-sm text-white/42">{agency.location}</p>
        </div>

        <nav aria-label="Footer" className="space-y-2">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/52">Navigate</p>
          <ul className="space-y-2 text-sm text-white/66">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-2 text-sm text-white/66">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/52">Contact</p>
          <a href={`mailto:${agency.email}`} className="block transition hover:text-white">
            {agency.email}
          </a>
          <a href={`tel:${agency.phone}`} className="block transition hover:text-white">
            {agency.phone}
          </a>
          <p className="pt-4 text-xs text-white/36">
            Portfolio concept project. Brand, numbers, and client names are realistic placeholders for demo purposes.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/32">
        <p>{`Copyright ${year} ${agency.name}. All rights reserved.`}</p>
      </div>
    </footer>
  );
}
