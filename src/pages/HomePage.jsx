import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Leaf, Droplets, Sprout, TreePine, FlaskConical, Warehouse, Heart, BookOpen,
  ScanLine, ShoppingBag, Layers, Sun, ArrowRight, MapPin, LayoutGrid,
  UtensilsCrossed, ShieldCheck, Sparkles, Store
} from 'lucide-react'

const sections = [
  {
    path: '/encyclopedia',
    icon: BookOpen,
    title: 'Farm Encyclopedia',
    description: 'Complete index of every plant, mushroom, and tree species on the farm with growing conditions, images, and quick-reference cards.',
    color: 'from-teal-500 to-teal-600',
    stats: ['60+ Species', 'Full Growing Guide'],
  },
  {
    path: '/health',
    icon: Heart,
    title: 'Health & Nutrition',
    description: 'Anti-cancer cruciferous vegetables, CBD for health, metabolic ketosis, anti-inflammatory foods, and navigating the ultra-processed food landscape.',
    color: 'from-red-500 to-rose-600',
    stats: ['Anti-Cancer Foods', 'Metabolic Health'],
  },
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
    description: 'Nine varieties of basil, holy basil, cruciferous vegetables, melons, gourds, heirloom corn, tomatoes, sunflowers, and companion planting.',
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
    path: '/artisan-foods',
    icon: UtensilsCrossed,
    title: 'Artisan Foods',
    description: 'The Pesto of Pestos (9-basil blend), crushed garlic oregano butter, lacto-fermented pickles, hot sauce, jellies, and herbal supplements.',
    color: 'from-amber-500 to-orange-600',
    stats: ['9-Basil Pesto', 'Herbal Supplements'],
  },
  {
    path: '/mushrooms',
    icon: Sprout,
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
    path: '/shop',
    icon: Store,
    title: 'Farm Shop',
    description: 'Online store — high-polyphenol olive oil, artisan foods, supplements, CBD, cooking workshops, curated books, and merch. Plus our book: Holy Basil, Holy Food.',
    color: 'from-amber-500 to-amber-600',
    stats: ['Online Store', 'Cooking Workshops'],
  },
  {
    path: '/products',
    icon: ShoppingBag,
    title: 'Revenue & Strategy',
    description: 'Full product lineup, pricing models, revenue projections, sales channels, and market strategy for all farm products.',
    color: 'from-pink-500 to-pink-600',
    stats: ['$90K–$255K Potential', 'Farm-to-Consumer'],
  },
]

export default function HomePage() {
  const logoSrc = `${import.meta.env.BASE_URL}lazyklogo_transparant_background.png`

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Raised_garden_beds_at_CSUCI.jpg/1200px-Raised_garden_beds_at_CSUCI.jpg" alt="Farm" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-950/90 to-emerald-950" />
        </div>
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
              <Sparkles className="w-4 h-4" />
              AI-Generated Master Overview — Riverton, Utah
            </div>

            <div className="mb-6">
              <motion.div
                className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-white/10 border border-emerald-500/20 mb-4 shadow-2xl shadow-emerald-950/40 backdrop-blur-sm"
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
              >
                <img
                  src={logoSrc}
                  alt="Lazy K Farms logo"
                  className="w-24 h-24 object-contain drop-shadow-[0_0_25px_rgba(16,185,129,0.2)]"
                />
              </motion.div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-4">
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-amber-400 bg-clip-text text-transparent">
                Lazy K Farms
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/40 font-light mb-6 italic">Return to the Circle of Life</p>

            <p className="text-base sm:text-lg text-emerald-200/60 max-w-3xl mx-auto mb-4">
              A 1-acre regenerative micro-farm dedicated to growing whole, nourishing food — from seed to table. Hemp CBD, medicinal mushrooms, heirloom vegetables, artisan pesto, herbal supplements, and a processing lab. Everything your body needs, nothing it doesn't.
            </p>

            <div className="flex flex-wrap justify-center gap-3 text-sm text-emerald-400/50 mb-8">
              <span className="px-3 py-1 bg-emerald-900/30 rounded-full">Hemp CBD</span>
              <span className="px-3 py-1 bg-emerald-900/30 rounded-full">9-Basil Pesto</span>
              <span className="px-3 py-1 bg-emerald-900/30 rounded-full">Medicinal Mushrooms</span>
              <span className="px-3 py-1 bg-emerald-900/30 rounded-full">Cruciferous Vegetables</span>
              <span className="px-3 py-1 bg-emerald-900/30 rounded-full">Herbal Supplements</span>
              <span className="px-3 py-1 bg-emerald-900/30 rounded-full">Fruit Orchard</span>
              <span className="px-3 py-1 bg-emerald-900/30 rounded-full">Anti-Cancer Nutrition</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12 px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <div className="p-8 bg-gradient-to-br from-emerald-900/30 to-amber-900/10 border border-emerald-600/20 rounded-2xl">
            <h2 className="text-2xl font-black text-emerald-300 mb-4 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6" /> Our Mission
            </h2>
            <div className="text-sm text-emerald-200/60 space-y-3 leading-relaxed">
              <p>
                <strong className="text-white">We believe food should heal, not harm.</strong> The modern food system is flooded with ultra-processed products laden with hydrogenated oils, inflammatory seed oils (omega-6), synthetic dyes, hormones, refined sugars, and industrial chemicals that are statistically shortening lives. Most people eat unconsciously — without understanding what these ingredients do to their bodies.
              </p>
              <p>
                <strong className="text-white">Lazy K Farms exists to break that cycle.</strong> We're building a farm where every crop, every product, and every meal is designed to nourish — not just fill. We grow cruciferous vegetables (the most powerful anti-cancer, anti-mutagenic foods on earth), nine varieties of basil for the world's most therapeutic pesto, medicinal mushrooms for cognitive and immune support, and high-CBD hemp for inflammation and pain management.
              </p>
              <p>
                <strong className="text-white">This is personal.</strong> We're centering our family's nutrition on vegetables, herbs, and plant-based whole foods — with clean fish, chicken breast, and eggs — to support metabolic health and a transition toward ketosis. Every product we make starts in our soil, is watered with reverse-osmosis purified water, and is processed in our own lab to the highest artisan standards.
              </p>
              <p className="text-emerald-300/70">
                <strong className="text-emerald-300">Know where your food comes from. Know what's in it. Know what it does to your body.</strong> That's the Lazy K way.
              </p>
            </div>
          </div>
        </motion.div>
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
          Lazy K Farms — AI-Generated Master Overview — Riverton, Utah — 2026. For informational and planning purposes.
        </p>
      </footer>
    </div>
  )
}
