export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white/80 px-6 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white font-bold shadow-md shadow-slate-900/10">
          A
        </span>
        <span className="text-xl font-bold tracking-tight text-slate-900">ArcLayout</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center rounded-lg bg-slate-100 px-3 py-1.5 text-sm text-slate-500 border border-slate-200">
          <span>Search documentation...</span>
        </div>
        <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition-all">
          Deploy
        </button>
      </div>
    </header>
  );
}