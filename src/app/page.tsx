import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Container with Sidebar and Content */}
      <div className="flex flex-1">
        <Sidebar />

        {/* Main Content Area */}
        <main className="flex-1 p-6 md:p-10">
          <div className="mx-auto max-w-6xl space-y-8">
            
            {/* Welcome Banner */}
            <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 p-8 text-white shadow-xl shadow-slate-900/10">
              <span className="inline-block rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-300 border border-slate-700">
                DecodeLabs Project 1
              </span>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
                ArcLayout Dashboard
              </h1>
              <p className="mt-2 text-slate-300 max-w-2xl text-sm md:text-base leading-relaxed">
                A modern, mobile-first responsive architecture built with Next.js, Tailwind CSS, and strict semantic layout pillars.
              </p>
            </div>

            {/* Grid Metrics Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <p className="text-sm font-medium text-slate-500">Total Architecture</p>
                <h3 className="mt-2 text-3xl font-bold text-slate-900">12.4K</h3>
                <span className="mt-2 inline-flex items-center text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                  +14% from last week
                </span>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <p className="text-sm font-medium text-slate-500">Responsive Breakpoints</p>
                <h3 className="mt-2 text-3xl font-bold text-slate-900">3 Active</h3>
                <span className="mt-2 inline-flex items-center text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                  Mobile, Tablet, Desktop
                </span>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md sm:col-span-2 lg:col-span-1">
                <p className="text-sm font-medium text-slate-500">System Performance</p>
                <h3 className="mt-2 text-3xl font-bold text-slate-900">99.9%</h3>
                <span className="mt-2 inline-flex items-center text-xs font-semibold text-purple-600 bg-purple-50 px-2.5 py-0.5 rounded-full">
                  Optimized LCP & CLS
                </span>
              </div>
            </div>

            {/* Recent Section Table / Cards */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">Project Execution Roadmap Status</h3>
              <p className="text-sm text-slate-500 mt-1">Tracking milestones according to DecodeLabs project specifications.</p>
              
              <div className="mt-6 divide-y divide-slate-100">
                <div className="py-3 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-700">1. Discovery & Wireframing</span>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">Completed</span>
                </div>
                <div className="py-3 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-700">2. Semantic HTML5 Landmarks</span>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">Completed</span>
                </div>
                <div className="py-3 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-700">3. CSS Grid & Flexbox Framework</span>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">Completed</span>
                </div>
                <div className="py-3 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-700">4. Final Accessibility & Audit</span>
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">In Progress</span>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}