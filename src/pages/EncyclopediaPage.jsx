import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  BookOpen, Search, Leaf, Sprout, Mushroom, TreePine, Flower2, Sun,
  Droplets, ThermometerSun, Ruler, ArrowRight, Filter, Clock, Snowflake, Layers
} from 'lucide-react'
import { allSpecies, categories } from '../data/species'

export default function EncyclopediaPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = allSpecies.filter(sp => {
    const matchesSearch = sp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sp.latin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sp.uses.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sp.health.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = activeCategory === 'All' || sp.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-800/30 border border-teal-600/30 rounded-full text-sm text-teal-300 mb-6">
          <BookOpen className="w-4 h-4" />
          Lazy K Farms — Living Index
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-4">
          <span className="bg-gradient-to-r from-teal-300 via-emerald-400 to-emerald-500 bg-clip-text text-transparent">
            Farm Encyclopedia
          </span>
        </h1>
        <p className="text-lg text-teal-200/50 max-w-3xl">
          Every plant, mushroom, and tree species on the farm — with growing conditions, health benefits, uses, and quick-reference cards. Your complete farm index.
        </p>
      </motion.div>

      {/* Search + Filter */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400/40" />
          <input
            type="text"
            placeholder="Search species, uses, health benefits..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-emerald-900/20 border border-emerald-700/20 rounded-xl text-white placeholder-emerald-500/30 focus:border-emerald-500/40 focus:outline-none focus:ring-1 focus:ring-emerald-500/20"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                activeCategory === cat
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'bg-emerald-900/15 text-emerald-400/40 border border-emerald-700/10 hover:text-emerald-300'
              }`}
            >
              {cat} {cat !== 'All' && <span className="ml-1 text-xs opacity-50">({allSpecies.filter(s => s.category === cat).length})</span>}
            </button>
          ))}
        </div>
        <div className="text-sm text-emerald-400/40">{filtered.length} species shown</div>
      </div>

      {/* Species Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((sp, i) => (
          <motion.div
            key={sp.name}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: Math.min(i * 0.03, 0.5) }}
            className="group bg-emerald-900/10 border border-emerald-700/12 rounded-2xl overflow-hidden hover:border-emerald-500/25 transition-all hover:-translate-y-0.5"
          >
            {/* Image */}
            <div className="relative h-40 overflow-hidden">
              <img
                src={sp.image}
                alt={sp.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <h3 className="text-base font-bold text-white leading-tight">{sp.name}</h3>
                <p className="text-xs text-emerald-300/50 italic">{sp.latin}</p>
              </div>
              <span className="absolute top-2 right-2 text-[10px] px-2 py-0.5 bg-black/40 backdrop-blur rounded-full text-emerald-300/80">{sp.category}</span>
            </div>

            {/* Card Body */}
            <div className="p-4">
              {/* Quick Stats Row 1 */}
              <div className="grid grid-cols-2 gap-1.5 mb-2 text-[11px]">
                <div className="flex items-center gap-1.5 text-yellow-300/60"><Sun className="w-3 h-3" /> {sp.sun}</div>
                <div className="flex items-center gap-1.5 text-blue-300/60"><Droplets className="w-3 h-3" /> {sp.water}</div>
                <div className="flex items-center gap-1.5 text-emerald-300/60"><Layers className="w-3 h-3" /> Soil pH {sp.ph}</div>
                <div className="flex items-center gap-1.5 text-cyan-300/60"><Droplets className="w-3 h-3" /> Water pH {sp.waterPh || sp.ph}</div>
              </div>
              {/* Quick Stats Row 2 */}
              <div className="grid grid-cols-2 gap-1.5 mb-2 text-[11px]">
                <div className="flex items-center gap-1.5 text-amber-300/60"><Ruler className="w-3 h-3" /> {sp.spacing}</div>
                <div className="flex items-center gap-1.5 text-purple-300/60"><Clock className="w-3 h-3" /> {sp.daysToHarvest ? `${sp.daysToHarvest} days` : sp.hardiness}</div>
                {sp.soilType && <div className="flex items-center gap-1.5 text-orange-300/50"><ThermometerSun className="w-3 h-3" /> {sp.soilType}</div>}
                {sp.frostTolerance && <div className="flex items-center gap-1.5 text-sky-300/50"><Snowflake className="w-3 h-3" /> {sp.frostTolerance}</div>}
              </div>

              <div className="text-xs text-emerald-400/40 mb-2"><strong className="text-emerald-400/60">Season:</strong> {sp.season} | {sp.hardiness}</div>
              <div className="text-xs text-amber-300/50 mb-2"><strong className="text-amber-300/70">Uses:</strong> {sp.uses}</div>

              {/* Health Benefits */}
              <div className="p-2.5 bg-red-900/10 border border-red-700/10 rounded-lg mb-3">
                <div className="text-[10px] text-red-400/50 font-semibold uppercase mb-1">Health Benefits</div>
                <p className="text-xs text-red-200/50 leading-relaxed">{sp.health}</p>
              </div>

              <Link to={sp.link} className="flex items-center gap-1 text-xs text-emerald-400/50 hover:text-emerald-300 transition-colors">
                View full section <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-emerald-400/30">
          <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p>No species match your search. Try different keywords.</p>
        </div>
      )}
    </div>
  )
}
