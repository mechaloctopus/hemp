import LicensingTimeline from '../components/LicensingTimeline'
import YieldCalculator from '../components/YieldCalculator'
import CbdEconomics from '../components/CbdEconomics'
import ProfitModel from '../components/ProfitModel'
import StrainGuide from '../components/StrainGuide'
import CostBreakdown from '../components/CostBreakdown'
import SeedSuppliers from '../components/SeedSuppliers'
import Compliance from '../components/Compliance'
import { motion } from 'framer-motion'
import { Leaf, ArrowDown } from 'lucide-react'

export default function HempPage() {
  return (
    <div>
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-800/40 border border-emerald-600/30 rounded-full text-sm text-emerald-300 mb-6">
              <Leaf className="w-4 h-4" />
              USDA Federal Program — 2026 Guide
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-4">
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-amber-400 bg-clip-text text-transparent">
                Hemp Production
              </span>
            </h1>
            <p className="text-lg text-emerald-200/50 max-w-2xl mx-auto mb-6">
              Complete guide to USDA licensing, CBD oil yield projections, profit modeling, strain genetics, and compliance for ¼ acre of high-CBD hemp in Riverton, Utah.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-emerald-400/50 mb-8">
              <span className="px-3 py-1 bg-emerald-900/30 rounded-full">Licensing</span>
              <span className="px-3 py-1 bg-emerald-900/30 rounded-full">Genetics</span>
              <span className="px-3 py-1 bg-emerald-900/30 rounded-full">Yield & Profit</span>
              <span className="px-3 py-1 bg-emerald-900/30 rounded-full">Testing</span>
              <span className="px-3 py-1 bg-emerald-900/30 rounded-full">Compliance</span>
            </div>
            <a href="#licensing" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm">
              Scroll to explore <ArrowDown className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <LicensingTimeline />
      <YieldCalculator />
      <CbdEconomics />
      <ProfitModel />
      <StrainGuide />
      <CostBreakdown />
      <SeedSuppliers />
      <Compliance />
    </div>
  )
}
