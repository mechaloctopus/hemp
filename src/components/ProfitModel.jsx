import { useState } from 'react'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { TrendingUp, ArrowRight, Minus } from 'lucide-react'

const startupCosts = [
  { item: 'FBI Background Check', cost: 35 },
  { item: 'Seeds (feminized, bulk 200+)', cost: 400 },
  { item: 'Soil / Amendments / Compost', cost: 300 },
  { item: 'Basic Irrigation / Drip Setup', cost: 250 },
  { item: 'Pots / Containers / Grow Bags (if not in-ground)', cost: 200 },
  { item: 'Nutrients / Fertilizer (organic)', cost: 150 },
  { item: 'Tools & Misc Supplies', cost: 150 },
  { item: 'Drying Racks / Space Setup', cost: 200 },
]

const operatingCosts = [
  { item: 'USDA Sampling Agent Visit', cost: 150 },
  { item: 'DEA-Registered Lab Testing', cost: 200 },
  { item: 'Extraction (toll processing, ~$5–$8/lb)', cost: 2200 },
  { item: '1g Syringes + Packaging (bulk)', cost: 600 },
  { item: 'Labels / Compliance Stickers', cost: 100 },
  { item: 'Water / Utilities', cost: 200 },
  { item: 'Misc / Contingency', cost: 300 },
]

export default function ProfitModel() {
  const [pricePerSyringe, setPricePerSyringe] = useState(5)
  const syringes = 23920

  const totalStartup = startupCosts.reduce((s, c) => s + c.cost, 0)
  const totalOperating = operatingCosts.reduce((s, c) => s + c.cost, 0)
  const totalCosts = totalStartup + totalOperating
  const grossRevenue = syringes * pricePerSyringe
  const netProfit = grossRevenue - totalCosts
  const margin = ((netProfit / grossRevenue) * 100).toFixed(1)
  const roi = ((netProfit / totalCosts) * 100).toFixed(0)

  const chartData = [
    { name: 'Startup', amount: totalStartup, fill: '#f59e0b' },
    { name: 'Operating', amount: totalOperating, fill: '#d97706' },
    { name: 'Total Costs', amount: totalCosts, fill: '#ef4444' },
    { name: 'Revenue', amount: grossRevenue, fill: '#10b981' },
    { name: 'Net Profit', amount: netProfit, fill: '#34d399' },
  ]

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-emerald-900 border border-emerald-600/30 rounded-lg p-3 shadow-xl">
          <p className="text-sm text-emerald-200 font-semibold">{payload[0].payload.name}</p>
          <p className="text-lg font-bold text-white">${payload[0].value.toLocaleString()}</p>
        </div>
      )
    }
    return null
  }

  return (
    <section id="profit" className="py-24 relative">
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
              Profit Model — ¼ Acre
            </span>
          </h2>
          <p className="text-emerald-300/60 text-lg max-w-2xl mx-auto">
            Full cost breakdown and profit projection for a home hemp operation selling 1g CBD syringes.
          </p>
        </motion.div>

        {/* Price Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <label className="text-sm text-emerald-300/70 block mb-3">Adjust Syringe Price Point</label>
          <div className="flex items-center justify-center gap-4">
            <input
              type="range"
              min="2"
              max="15"
              step="0.5"
              value={pricePerSyringe}
              onChange={(e) => setPricePerSyringe(parseFloat(e.target.value))}
              className="w-64 h-2 bg-emerald-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            />
            <span className="text-2xl font-black text-amber-400">${pricePerSyringe}/syringe</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* Cost Tables */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-6 bg-emerald-900/20 border border-emerald-700/20 rounded-2xl">
              <h3 className="text-lg font-bold text-amber-400 mb-4">Year 1 Startup Costs</h3>
              <div className="space-y-2">
                {startupCosts.map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-1.5 border-b border-emerald-800/30 last:border-0">
                    <span className="text-sm text-emerald-200/70">{item.item}</span>
                    <span className="text-sm font-semibold text-white">${item.cost}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-3 border-t-2 border-amber-600/30">
                  <span className="font-bold text-amber-400">Total Startup</span>
                  <span className="text-lg font-black text-amber-400">${totalStartup.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-emerald-900/20 border border-emerald-700/20 rounded-2xl">
              <h3 className="text-lg font-bold text-amber-400 mb-4">Per-Crop Operating Costs</h3>
              <div className="space-y-2">
                {operatingCosts.map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-1.5 border-b border-emerald-800/30 last:border-0">
                    <span className="text-sm text-emerald-200/70">{item.item}</span>
                    <span className="text-sm font-semibold text-white">${item.cost}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-3 border-t-2 border-amber-600/30">
                  <span className="font-bold text-amber-400">Total Operating</span>
                  <span className="text-lg font-black text-amber-400">${totalOperating.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Chart + Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-6 bg-emerald-900/20 border border-emerald-700/20 rounded-2xl">
              <h3 className="text-lg font-bold text-emerald-200 mb-4">Financial Overview</h3>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} barCategoryGap="20%">
                    <CartesianGrid strokeDasharray="3 3" stroke="#064e3b" />
                    <XAxis dataKey="name" tick={{ fill: '#6ee7b7', fontSize: 12 }} />
                    <YAxis tick={{ fill: '#6ee7b7', fontSize: 12 }} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="amount" radius={[6, 6, 0, 0]}>
                      {chartData.map((entry, idx) => (
                        <Cell key={idx} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-red-900/15 border border-red-700/20 rounded-xl text-center">
                <div className="text-xs text-red-400/60 mb-1">Total All-In Costs</div>
                <div className="text-2xl font-black text-red-400">${totalCosts.toLocaleString()}</div>
              </div>
              <div className="p-5 bg-emerald-900/30 border border-emerald-600/20 rounded-xl text-center">
                <div className="text-xs text-emerald-400/60 mb-1">Gross Revenue</div>
                <div className="text-2xl font-black text-emerald-300">${grossRevenue.toLocaleString()}</div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-emerald-500/15 to-emerald-400/5 border-2 border-emerald-500/40 rounded-2xl text-center">
              <div className="text-sm text-emerald-400/70 mb-1">Net Profit (First Crop)</div>
              <div className={`text-5xl font-black ${netProfit >= 0 ? 'text-emerald-300' : 'text-red-400'}`}>
                ${netProfit.toLocaleString()}
              </div>
              <div className="flex items-center justify-center gap-6 mt-3">
                <div className="text-sm">
                  <span className="text-emerald-400/60">Margin: </span>
                  <span className="font-bold text-emerald-300">{margin}%</span>
                </div>
                <div className="text-sm">
                  <span className="text-emerald-400/60">ROI: </span>
                  <span className="font-bold text-amber-400">{roi}%</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-amber-900/15 border border-amber-700/20 rounded-xl">
              <p className="text-sm text-amber-300/80">
                <strong>💡 Year 2+:</strong> Startup costs drop to ~$0 (reuse equipment). Operating costs stay ~${totalOperating.toLocaleString()}. That means <strong>~${(grossRevenue - totalOperating).toLocaleString()} profit</strong> per crop from year 2 onward. You can also save seeds to eliminate seed costs.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
