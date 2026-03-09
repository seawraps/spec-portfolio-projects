const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "About", href: "#about" },
  { label: "Availability", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-12">
        <a
          href="#hero"
          className="font-display text-lg tracking-tight text-white transition hover:text-emerald-200"
        >
          Portfolio Hub
        </a>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center justify-end gap-2 text-sm text-slate-300 sm:gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex rounded-full border border-white/10 px-3 py-2 transition hover:border-emerald-300/60 hover:text-white"
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
