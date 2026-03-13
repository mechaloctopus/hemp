import { motion } from 'framer-motion'
import { DollarSign, TrendingUp, BarChart3, Syringe, Package, Store } from 'lucide-react'

const marketRates = [
  {
    product: 'Crude CBD Oil (Wholesale)',
    price: '$3–$6 / gram',
    pricePerLiter: '$2,800–$5,500 / liter',
    notes: 'Bulk sales to processors/distributors',
    icon: Package,
  },
  {
    product: '1g CBD Syringe (Retail)',
    price: '$5–$15 / syringe',
    pricePerLiter: '$4,600–$13,800 / liter equiv.',
    notes: 'Direct-to-consumer, dispensary, or online',
    icon: Syringe,
  },
  {
    product: 'CBD Distillate (Refined)',
    price: '$8–$15 / gram',
    pricePerLiter: '$7,400–$13,800 / liter',
    notes: 'After winterization + distillation',
    icon: TrendingUp,
  },
  {
    product: 'CBD Isolate (99%+ Pure)',
    price: '$2–$5 / gram',
    pricePerLiter: 'N/A (powder)',
    notes: 'Commodity pricing — high volume needed',
    icon: BarChart3,
  },
  {
    product: 'Finished CBD Products (Tinctures, Topicals)',
    price: '$0.05–$0.15 / mg CBD',
    pricePerLiter: 'Varies by formulation',
    notes: 'Highest margins but requires processing license + branding',
    icon: Store,
  },
]

const syringePricing = [
  { label: 'Budget / Wholesale', price: 3, color: 'text-emerald-400' },
  { label: 'Mid-Market', price: 5, color: 'text-emerald-300' },
  { label: 'Premium Retail', price: 8, color: 'text-amber-400' },
  { label: 'High-End / Specialty', price: 12, color: 'text-amber-300' },
]

export default function CbdEconomics() {
  const syringesFrom025Acre = 23920

  return (
    <section id="economics" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950 via-emerald-900/40 to-emerald-950" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-amber-300 to-emerald-400 bg-clip-text text-transparent">
              CBD Market Economics
            </span>
          </h2>
          <p className="text-emerald-300/60 text-lg max-w-2xl mx-auto">
            Current 2026 market rates for CBD products. The 1-gram syringe model is the sweet spot for small growers — low overhead, high margins.
          </p>
        </motion.div>

        {/* Market Rates Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xl font-bold text-emerald-200 mb-6 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-emerald-400" />
            Going Rates for CBD Products (2026)
          </h3>

          <div className="space-y-3">
            {marketRates.map((item, i) => (
              <div
                key={i}
                className="group p-5 bg-emerald-900/20 border border-emerald-700/20 rounded-xl hover:border-emerald-500/30 transition-all grid grid-cols-1 sm:grid-cols-12 gap-4 items-center"
              >
                <div className="sm:col-span-4 flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="font-semibold text-white">{item.product}</span>
                </div>
                <div className="sm:col-span-3">
                  <span className="text-lg font-bold text-amber-400">{item.price}</span>
                </div>
                <div className="sm:col-span-3 text-sm text-emerald-300/60">{item.pricePerLiter}</div>
                <div className="sm:col-span-2 text-xs text-emerald-400/50">{item.notes}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Syringe Revenue Model */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-emerald-200 mb-6 flex items-center gap-2">
            <Syringe className="w-5 h-5 text-amber-400" />
            1-Gram CBD Syringe Revenue Model (from ¼ acre)
          </h3>

          <div className="p-8 bg-gradient-to-br from-emerald-900/30 to-amber-900/10 border border-emerald-600/20 rounded-2xl">
            <div className="text-center mb-8">
              <div className="text-sm text-emerald-400/60 mb-2">Estimated Syringes from ¼ Acre</div>
              <div className="text-6xl font-black text-white mb-2">~{syringesFrom025Acre.toLocaleString()}</div>
              <div className="text-sm text-emerald-400/50">based on 26L crude oil × 920 g/L density</div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {syringePricing.map((tier) => (
                <div key={tier.label} className="text-center p-5 bg-emerald-950/50 rounded-xl border border-emerald-700/15">
                  <div className="text-xs text-emerald-400/60 mb-1">{tier.label}</div>
                  <div className="text-sm text-emerald-300/70 mb-2">${tier.price}/syringe</div>
                  <div className={`text-3xl font-black ${tier.color}`}>
                    ${(syringesFrom025Acre * tier.price).toLocaleString()}
                  </div>
                  <div className="text-xs text-emerald-500/40 mt-1">gross revenue</div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-amber-900/15 border border-amber-700/20 rounded-xl">
              <p className="text-sm text-amber-300/80">
                <strong>💡 The Play:</strong> Selling 1g CBD syringes at $5–$8 retail (online, farmers markets, local shops) yields <strong>$120K–$190K gross revenue</strong> from just ¼ acre. Even at $3 wholesale, you're looking at <strong>$72K+</strong>. The syringe model minimizes packaging costs and maximizes per-unit margin vs. tinctures or edibles.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
