export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <p>&copy; {new Date().getFullYear()} Web Development Portfolio</p>
        <p>Portfolio projects shown here are concept and demo builds.</p>
      </div>
    </footer>
  );
}
