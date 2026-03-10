export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between">
        <p>&copy; {new Date().getFullYear()} Portfolio Hub</p>
        <p>Independent designer and front-end developer portfolio. All projects shown are live concept builds.</p>
      </div>
    </footer>
  );
}
