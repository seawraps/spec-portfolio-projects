const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Stack", href: "#tech-stack" },
  { label: "Approach", href: "#about" },
  { label: "Availability", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <a
          href="#hero"
          className="transition hover:text-emerald-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
          aria-label="Portfolio Hub home"
        >
          <span className="block font-display text-lg tracking-tight text-white">
            Portfolio Hub
          </span>
          <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.34em] text-slate-400">
            Selected live work
          </span>
        </a>
        <nav aria-label="Primary navigation" className="w-full sm:w-auto">
          <ul className="grid grid-cols-2 gap-2 text-xs text-slate-300 sm:flex sm:items-center sm:gap-3 sm:text-sm">
            {navLinks.map((link) => (
              <li key={link.href} className="min-w-0">
                <a
                  href={link.href}
                  className="nav-pill w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
