import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, Droplets, Weight, Ruler, TrendingUp } from 'lucide-react'

const defaults = {
  acres: 0.25,
  biomassPerAcre: 1757,
  lbsPerLiterOil: 17,
  cbdPercent: 18,
  extractionEff: 70,
}

export default function YieldCalculator() {
  const [acres, setAcres] = useState(defaults.acres)
  const [biomassPerAcre, setBiomassPerAcre] = useState(defaults.biomassPerAcre)
  const [lbsPerLiter, setLbsPerLiter] = useState(defaults.lbsPerLiterOil)

  const totalBiomass = acres * biomassPerAcre
  const litersOil = totalBiomass / lbsPerLiter
  const gallonsOil = litersOil * 0.264172
  const gramsOil = litersOil * 920
  const syringes1g = Math.floor(gramsOil)

  return (
    <section id="yield" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950 via-emerald-900/30 to-emerald-950" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-emerald-300 to-amber-400 bg-clip-text text-transparent">
              Yield Calculator
            </span>
          </h2>
          <p className="text-emerald-300/60 text-lg max-w-2xl mx-auto">
            Adjust the sliders to see realistic yield projections based on 2026 USDA national averages and standard CO₂/ethanol extraction.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Sliders */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 p-8 bg-emerald-900/20 border border-emerald-700/20 rounded-2xl"
          >
            <h3 className="text-xl font-bold text-emerald-200 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-emerald-400" />
              Input Parameters
            </h3>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm text-emerald-300/70 flex items-center gap-1">
                  <Ruler className="w-4 h-4" /> Growing Area
                </label>
                <span className="text-sm font-bold text-emerald-300">{acres} acres</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="5"
                step="0.05"
                value={acres}
                onChange={(e) => setAcres(parseFloat(e.target.value))}
                className="w-full h-2 bg-emerald-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-xs text-emerald-500/50 mt-1">
                <span>0.1 acre</span>
                <span>5 acres</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm text-emerald-300/70 flex items-center gap-1">
                  <Weight className="w-4 h-4" /> Dry Biomass / Acre
                </label>
                <span className="text-sm font-bold text-emerald-300">{biomassPerAcre} lbs</span>
              </div>
              <input
                type="range"
                min="800"
                max="3000"
                step="50"
                value={biomassPerAcre}
                onChange={(e) => setBiomassPerAcre(parseInt(e.target.value))}
                className="w-full h-2 bg-emerald-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-xs text-emerald-500/50 mt-1">
                <span>800 lbs (low)</span>
                <span>USDA avg: 1,757</span>
                <span>3,000 lbs (high)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm text-emerald-300/70 flex items-center gap-1">
                  <Droplets className="w-4 h-4" /> Lbs Biomass per 1L Oil
                </label>
                <span className="text-sm font-bold text-emerald-300">{lbsPerLiter} lbs</span>
              </div>
              <input
                type="range"
                min="10"
                max="25"
                step="1"
                value={lbsPerLiter}
                onChange={(e) => setLbsPerLiter(parseInt(e.target.value))}
                className="w-full h-2 bg-emerald-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-xs text-emerald-500/50 mt-1">
                <span>10 lbs (efficient)</span>
                <span>Avg: 17</span>
                <span>25 lbs (conservative)</span>
              </div>
            </div>

            <div className="p-4 bg-emerald-800/20 rounded-xl border border-emerald-700/20">
              <p className="text-xs text-emerald-400/60">
                Based on USDA NASS 2024 data: ~1,757 lbs dry floral biomass/acre for open-field CBD hemp.
                Full-spectrum crude oil via CO₂ or ethanol extraction typically needs ~17 lbs dry biomass per liter.
                Oil density ≈ 0.92 g/mL.
              </p>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-emerald-200 flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              Projected Yield
            </h3>

            <div className="p-6 bg-gradient-to-br from-emerald-800/30 to-emerald-900/30 border border-emerald-600/20 rounded-2xl">
              <div className="text-sm text-emerald-400/70 mb-1">Total Dry Biomass</div>
              <div className="text-4xl font-black text-white">{totalBiomass.toLocaleString()} <span className="text-lg text-emerald-400">lbs</span></div>
              <div className="text-xs text-emerald-500/50 mt-1">{acres} acre(s) × {biomassPerAcre} lbs/acre</div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-gradient-to-br from-amber-900/20 to-amber-800/10 border border-amber-600/20 rounded-2xl">
                <div className="text-sm text-amber-400/70 mb-1">Crude CBD Oil</div>
                <div className="text-3xl font-black text-white">{litersOil.toFixed(1)} <span className="text-lg text-amber-400">L</span></div>
                <div className="text-xs text-amber-500/50 mt-1">{gallonsOil.toFixed(1)} gallons</div>
              </div>

              <div className="p-6 bg-gradient-to-br from-amber-900/20 to-amber-800/10 border border-amber-600/20 rounded-2xl">
                <div className="text-sm text-amber-400/70 mb-1">Oil by Weight</div>
                <div className="text-3xl font-black text-white">{(gramsOil / 1000).toFixed(1)} <span className="text-lg text-amber-400">kg</span></div>
                <div className="text-xs text-amber-500/50 mt-1">{gramsOil.toLocaleString(undefined, {maximumFractionDigits: 0})} grams</div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-emerald-500/10 to-emerald-400/5 border-2 border-emerald-500/30 rounded-2xl">
              <div className="text-sm text-emerald-400/70 mb-1">1-Gram CBD Syringes</div>
              <div className="text-5xl font-black text-emerald-300">{syringes1g.toLocaleString()}</div>
              <div className="text-xs text-emerald-500/50 mt-1">sellable units from this harvest</div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="text-center p-4 bg-emerald-900/20 rounded-xl border border-emerald-700/15">
                <div className="text-xs text-emerald-400/60 mb-1">@ $3/syringe</div>
                <div className="text-xl font-bold text-white">${(syringes1g * 3).toLocaleString()}</div>
              </div>
              <div className="text-center p-4 bg-emerald-900/20 rounded-xl border border-emerald-700/15">
                <div className="text-xs text-emerald-400/60 mb-1">@ $5/syringe</div>
                <div className="text-xl font-bold text-emerald-300">${(syringes1g * 5).toLocaleString()}</div>
              </div>
              <div className="text-center p-4 bg-emerald-900/20 rounded-xl border border-emerald-700/15">
                <div className="text-xs text-emerald-400/60 mb-1">@ $8/syringe</div>
                <div className="text-xl font-bold text-amber-400">${(syringes1g * 8).toLocaleString()}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
