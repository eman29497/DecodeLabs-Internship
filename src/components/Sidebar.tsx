export default function Sidebar() {
  const menuItems = [
    { name: "Overview", active: true },
    { name: "Analytics", active: false },
    { name: "Projects", active: false },
    { name: "Architecture", active: false },
    { name: "Settings", active: false },
  ];

  return (
    <aside className="hidden lg:block w-64 border-r border-slate-200 bg-white p-6 min-h-[calc(100vh-4rem)]">
      <div className="space-y-6">
        <div>
          <h3 className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Platform</h3>
          <nav className="mt-3 space-y-1">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`flex items-center rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                  item.active
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}