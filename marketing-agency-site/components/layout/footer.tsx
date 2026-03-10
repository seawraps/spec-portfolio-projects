import Link from "next/link";

import { agency, navItems } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-coal">
      <div className="mx-auto w-full max-w-7xl px-6 py-12">
        <div className="surface-panel px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-10 xl:grid-cols-[minmax(0,1.05fr)_minmax(14rem,0.38fr)_minmax(16rem,0.52fr)]">
            <div className="space-y-5">
              <p className="eyebrow-label">{agency.name}</p>
              <h2 className="max-w-3xl font-display text-[clamp(3.6rem,6vw,6rem)] uppercase leading-[0.82] text-white">
                Campaign-first growth systems with real commercial pressure behind them.
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-white/68">{agency.description}</p>
              <div className="flex flex-wrap gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/42">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Paid media</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Creative systems</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Conversion pressure</span>
              </div>
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

            <div className="grid gap-4">
              <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5 text-sm text-white/68">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-volt">Direct line</p>
                <a href={`mailto:${agency.email}`} className="mt-4 block transition hover:text-white">
                  {agency.email}
                </a>
                <a href={`tel:${agency.phone}`} className="mt-2 block transition hover:text-white">
                  {agency.phone}
                </a>
                <p className="mt-2">{agency.location}</p>
              </div>

              <div className="rounded-[1.4rem] border border-white/10 bg-coal/72 p-5 text-xs leading-6 text-white/42">
                Portfolio concept project. Brand, numbers, and client names are realistic placeholders built for demo-safe use.
              </div>
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
