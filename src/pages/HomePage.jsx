import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Leaf, Droplets, Sprout, TreePine, FlaskConical, Warehouse,
  ScanLine, ShoppingBag, Layers, Mushroom, Sun, ArrowRight, MapPin, LayoutGrid
} from 'lucide-react'

const sections = [
  {
    path: '/hemp',
    icon: Leaf,
    title: 'Hemp Production',
    description: 'USDA licensing, CBD oil extraction, strain genetics, yield projections, and profit modeling for ¼ acre of high-CBD hemp.',
    color: 'from-emerald-500 to-emerald-600',
    stats: ['26L CBD Oil / ¼ Acre', '$78K+ Revenue Potential'],
  },
  {
    path: '/water',
    icon: Droplets,
    title: 'Water Plan',
    description: 'Complete Riverton water report analysis, contaminant breakdown, RO filtration, solar distillation, pH optimization, and mineral enrichment for all crops.',
    color: 'from-blue-500 to-blue-600',
    stats: ['27 Contaminants Analyzed', 'RO + Enrichment System'],
  },
  {
    path: '/soil',
    icon: Layers,
    title: 'Soil Plan',
    description: 'Soil testing, amendments, composting, cover crops, and building living soil for organic artisan-quality production.',
    color: 'from-amber-600 to-amber-700',
    stats: ['Living Soil Protocol', 'Organic Amendments'],
  },
  {
    path: '/garden',
    icon: Sprout,
    title: 'Herb & Vegetable Garden',
    description: 'Basil, holy basil, cruciferous vegetables, melons, gourds, heirloom corn, tomatoes, sunflowers, and companion planting strategies.',
    color: 'from-lime-500 to-lime-600',
    stats: ['20+ Crop Varieties', 'Companion Planting'],
  },
  {
    path: '/raised-beds',
    icon: LayoutGrid,
    title: 'Raised Garden Beds',
    description: 'Bed designs, materials comparison, soil recipes, layout strategies, cost estimates, and an inspiration photo gallery.',
    color: 'from-green-500 to-lime-600',
    stats: ['8 Bed Types', 'Photo Gallery'],
  },
  {
    path: '/mushrooms',
    icon: Mushroom,
    title: 'Mycology Lab',
    description: 'Shiitake, maitake, lion\'s mane, pioppino, chestnut, oysters — fruiting chamber protocols, masters mix, log inoculation, and elixir production.',
    color: 'from-violet-500 to-violet-600',
    stats: ['8+ Species', 'Indoor + Outdoor'],
  },
  {
    path: '/fruit-trees',
    icon: TreePine,
    title: 'Fruit Tree Nursery',
    description: 'Orchard cloning from cuttings, rooting hormone protocols, grafting techniques, and building a diverse fruit tree collection.',
    color: 'from-rose-500 to-rose-600',
    stats: ['Cloning Protocols', 'Multi-Species Orchard'],
  },
  {
    path: '/greenhouse',
    icon: Sun,
    title: 'Greenhouse',
    description: 'Climate-controlled space for cacti, tropicals, and frost-sensitive plants. Year-round growing and seedling starts.',
    color: 'from-orange-500 to-orange-600',
    stats: ['Cactus & Tropicals', 'Year-Round Growing'],
  },
  {
    path: '/lab',
    icon: FlaskConical,
    title: 'Farm Laboratory',
    description: 'Dual-purpose lab: CBD ethanol extraction with rotary evaporator + mycology sterile room with laminar flow hood for inoculation.',
    color: 'from-cyan-500 to-cyan-600',
    stats: ['Rotary Evaporator', 'Laminar Flow Hood'],
  },
  {
    path: '/property-scan',
    icon: ScanLine,
    title: '3D Property Scan',
    description: 'Aerial drone NeRF scanning to create a full 3D model of the entire 1-acre landscape for planning and visualization.',
    color: 'from-indigo-500 to-indigo-600',
    stats: ['NeRF 3D Model', 'Drone Aerial Mapping'],
  },
  {
    path: '/products',
    icon: ShoppingBag,
    title: 'Products & Market',
    description: 'CBD syringes, mushroom elixirs & broths, handmade soap, shampoo, pesto, pickles, hemp seed foods, and market strategy.',
    color: 'from-pink-500 to-pink-600',
    stats: ['12+ Product Lines', 'Farm-to-Consumer'],
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-400/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(16,185,129,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-800/40 border border-emerald-600/30 rounded-full text-sm text-emerald-300 mb-8">
              <MapPin className="w-4 h-4" />
              Riverton, Utah — 1 Acre Master Plan
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-6">
              <span className="text-white">The</span>{' '}
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-amber-400 bg-clip-text text-transparent">
                Riverton Acre
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-emerald-200/60 max-w-2xl mx-auto mb-6">
              A comprehensive master plan for transforming one acre into an artisan-quality regenerative micro-farm — hemp, herbs, mushrooms, fruit trees, and a full processing laboratory.
            </p>

            <div className="flex flex-wrap justify-center gap-3 text-sm text-emerald-400/50 mb-12">
              <span className="px-3 py-1 bg-emerald-900/30 rounded-full">Hemp CBD</span>
              <span className="px-3 py-1 bg-emerald-900/30 rounded-full">Gourmet Mushrooms</span>
              <span className="px-3 py-1 bg-emerald-900/30 rounded-full">Herb Garden</span>
              <span className="px-3 py-1 bg-emerald-900/30 rounded-full">Fruit Nursery</span>
              <span className="px-3 py-1 bg-emerald-900/30 rounded-full">Farm Lab</span>
              <span className="px-3 py-1 bg-emerald-900/30 rounded-full">Greenhouse</span>
              <span className="px-3 py-1 bg-emerald-900/30 rounded-full">Artisan Products</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Grid */}
      <section className="py-12 px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-4">
          {sections.map((section, i) => (
            <motion.div
              key={section.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                to={section.path}
                className="group block p-6 bg-emerald-900/15 border border-emerald-700/15 rounded-2xl hover:border-emerald-500/30 transition-all hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">{section.title}</h3>
                      <ArrowRight className="w-4 h-4 text-emerald-500/40 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-sm text-emerald-300/50 mb-3 line-clamp-2">{section.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {section.stats.map((stat, j) => (
                        <span key={j} className="text-xs px-2 py-0.5 bg-emerald-800/30 rounded-full text-emerald-400/60">{stat}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-emerald-800/20 text-center">
        <p className="text-xs text-emerald-500/30">
          Riverton Acre — Private Master Farm Plan — 2026. For informational purposes. Always verify regulations before acting.
        </p>
      </footer>
    </div>
  )
}
