import { useState } from 'react'
import { Outlet, NavLink, useLocation } from 'react-router-dom'
import {
  Leaf, Droplets, Sprout, TreePine, FlaskConical, Warehouse, Heart,
  ScanLine, ShoppingBag, Layers, Menu, X, Home, Mushroom, Sun, LayoutGrid,
  BookOpen, UtensilsCrossed, Pill, Store
} from 'lucide-react'

const navSections = [
  {
    title: 'Farm Operations',
    items: [
      { path: '/', label: 'Overview', icon: Home, description: 'Master Plan' },
      { path: '/encyclopedia', label: 'Encyclopedia', icon: BookOpen, description: 'Plant & Species Index' },
      { path: '/water', label: 'Water Plan', icon: Droplets, description: 'Analysis & Treatment' },
      { path: '/soil', label: 'Soil Plan', icon: Layers, description: 'Amendments & Testing' },
    ],
  },
  {
    title: 'Growing',
    items: [
      { path: '/hemp', label: 'Hemp', icon: Leaf, description: 'CBD & Fiber' },
      { path: '/garden', label: 'Garden', icon: Sprout, description: 'Herbs & Vegetables' },
      { path: '/raised-beds', label: 'Raised Beds', icon: LayoutGrid, description: 'Designs & Gallery' },
      { path: '/mushrooms', label: 'Mycology', icon: Mushroom, description: 'Fruiting & Lab' },
      { path: '/fruit-trees', label: 'Fruit Trees', icon: TreePine, description: 'Nursery & Cloning' },
      { path: '/greenhouse', label: 'Greenhouse', icon: Sun, description: 'Cactus & Tropicals' },
    ],
  },
  {
    title: 'Processing & Products',
    items: [
      { path: '/lab', label: 'Farm Lab', icon: FlaskConical, description: 'Extraction & Mycology' },
      { path: '/artisan-foods', label: 'Artisan Foods', icon: UtensilsCrossed, description: 'Pesto, Pickles & More' },
      { path: '/shop', label: 'Farm Shop', icon: Store, description: 'Store & Workshops' },
      { path: '/products', label: 'Products', icon: ShoppingBag, description: 'Revenue & Strategy' },
    ],
  },
  {
    title: 'Health & Planning',
    items: [
      { path: '/health', label: 'Health & Nutrition', icon: Heart, description: 'Anti-Cancer & Metabolic' },
      { path: '/property-scan', label: '3D Property', icon: ScanLine, description: 'NeRF Drone Scan' },
    ],
  },
]

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="bg-emerald-950 text-white font-sans min-h-screen flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-72 bg-emerald-950/98 backdrop-blur-xl border-r border-emerald-800/30 z-50 transform transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto`}>
        <div className="p-5 border-b border-emerald-800/30">
          <NavLink to="/" className="flex items-center gap-3 group" onClick={() => setSidebarOpen(false)}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-amber-500 flex items-center justify-center text-xl font-black text-white italic">
              K
            </div>
            <div>
              <div className="font-bold text-lg leading-tight">
                <span className="text-emerald-400">Lazy K</span> Farms
              </div>
              <div className="text-xs text-emerald-500/50">AI Master Overview — Riverton, UT</div>
            </div>
          </NavLink>
        </div>

        <nav className="p-3 space-y-4">
          {navSections.map((section) => (
            <div key={section.title}>
              <div className="px-3 mb-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-600/50">{section.title}</div>
              <div className="space-y-0.5">
                {section.items.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === '/'}
                    onClick={() => setSidebarOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2 rounded-xl transition-all group ${
                        isActive
                          ? 'bg-emerald-800/40 text-white border border-emerald-600/30'
                          : 'text-emerald-300/60 hover:text-white hover:bg-emerald-800/20 border border-transparent'
                      }`
                    }
                  >
                    <item.icon className="w-4.5 h-4.5 shrink-0 group-hover:scale-110 transition-transform" />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium leading-tight">{item.label}</div>
                      <div className="text-[10px] text-emerald-500/40 truncate">{item.description}</div>
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="p-4 mt-4 mx-3 mb-3 bg-emerald-900/30 rounded-xl border border-emerald-800/20">
          <div className="text-xs text-emerald-400/50 mb-1">Location</div>
          <div className="text-sm font-medium text-emerald-200">Riverton, Utah</div>
          <div className="text-xs text-emerald-400/40">1 Acre — Residential/Agricultural</div>
        </div>
      </aside>

      {/* Main content area */}
      <div className="flex-1 lg:ml-72">
        {/* Top bar for mobile */}
        <header className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-emerald-950/95 backdrop-blur-md border-b border-emerald-800/30 z-30 flex items-center px-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 text-emerald-300 hover:text-white mr-3"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2">
            <span className="text-lg font-black italic text-emerald-400">K</span>
            <span className="font-bold text-sm">
              <span className="text-emerald-400">Lazy K</span> Farms
            </span>
          </div>
        </header>

        <main className="lg:pt-0 pt-14 min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
