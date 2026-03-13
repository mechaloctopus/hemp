import { ArrowDown, MapPin, Shield, DollarSign, Sprout } from 'lucide-react'
import { motion } from 'framer-motion'

const stats = [
  { icon: Sprout, value: '26L', label: 'CBD Oil per ¼ Acre' },
  { icon: DollarSign, value: '$78K+', label: 'Revenue Potential' },
  { icon: Shield, value: '$0', label: 'Application Fee' },
  { icon: MapPin, value: 'Utah', label: 'USDA Federal License' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-400/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(16,185,129,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-800/40 border border-emerald-600/30 rounded-full text-sm text-emerald-300 mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            2026 Complete Guide — USDA Federal Program
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6">
            <span className="text-white">Grow Hemp</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-amber-400 bg-clip-text text-transparent">
              in Utah
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-emerald-200/70 max-w-2xl mx-auto mb-4">
            The definitive guide to obtaining your USDA hemp production license, maximizing CBD oil yield, and building a profitable home operation.
          </p>
          <p className="text-sm text-emerald-400/60 max-w-xl mx-auto mb-12">
            No state license needed — Utah switched fully to USDA in May 2022. No residency requirement. No application fee. Shall-issue if you qualify.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <a
              href="#licensing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
            >
              Start Licensing Process
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="#profit"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-emerald-500/30 hover:bg-emerald-800/30 text-emerald-300 font-semibold rounded-xl transition-all"
            >
              See Profit Potential
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group relative p-6 bg-emerald-900/30 border border-emerald-700/20 rounded-2xl hover:border-emerald-500/40 transition-all hover:-translate-y-1"
            >
              <stat.icon className="w-8 h-8 text-emerald-400 mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl sm:text-4xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-sm text-emerald-300/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
