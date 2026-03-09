import Link from "next/link";

import { agency, navItems } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-deep-2">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">{agency.name}</p>
          <p className="max-w-md text-sm leading-7 text-slate-300">{agency.description}</p>
          <p className="text-sm text-slate-400">{agency.location}</p>
        </div>

        <nav aria-label="Footer" className="space-y-2">
          <p className="text-sm font-semibold text-white">Navigate</p>
          <ul className="space-y-2 text-sm text-slate-300">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-2 text-sm text-slate-300">
          <p className="font-semibold text-white">Contact</p>
          <a href={`mailto:${agency.email}`} className="block transition hover:text-white">
            {agency.email}
          </a>
          <a href={`tel:${agency.phone}`} className="block transition hover:text-white">
            {agency.phone}
          </a>
          <p className="pt-4 text-xs text-slate-500">
            Portfolio concept project. Brand, numbers, and client names are realistic placeholders for demo purposes.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-500 sm:px-6 lg:px-8">
        <p>{`Copyright ${year} ${agency.name}. All rights reserved.`}</p>
      </div>
    </footer>
  );
}
