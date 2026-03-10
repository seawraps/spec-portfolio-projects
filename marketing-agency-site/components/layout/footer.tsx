import Link from "next/link";

import { agency, navItems } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-coal">
      <div className="mx-auto w-full max-w-7xl px-6 py-12">
        <div className="surface-panel px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.4fr_0.55fr]">
            <div className="space-y-5">
              <p className="eyebrow-label">{agency.name}</p>
              <h2 className="max-w-2xl font-display text-[clamp(3.8rem,7vw,6.5rem)] uppercase leading-[0.82] text-white">
                Campaign-first growth systems with real commercial pressure behind them.
              </h2>
              <p className="max-w-xl text-sm leading-7 text-white/68">{agency.description}</p>
              <p className="text-sm text-white/42">{agency.location}</p>
            </div>

            <nav aria-label="Footer" className="space-y-3">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/46">Navigate</p>
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

            <div className="space-y-3 text-sm text-white/66">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/46">Direct line</p>
              <a href={`mailto:${agency.email}`} className="block transition hover:text-white">
                {agency.email}
              </a>
              <a href={`tel:${agency.phone}`} className="block transition hover:text-white">
                {agency.phone}
              </a>
              <p className="pt-4 text-xs leading-6 text-white/36">
                Portfolio concept project. Brand, numbers, and client names are realistic placeholders built for demo-safe use.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 px-1 pt-5 text-xs text-white/32">
          <p>{`Copyright ${year} ${agency.name}. All rights reserved.`}</p>
          <p>Performance creative / campaign systems / conversion pressure</p>
        </div>
      </div>
    </footer>
  );
}
