import { motion } from 'framer-motion'
import { FlaskConical, DollarSign, ClipboardList, Building2, Truck } from 'lucide-react'

const testingCosts = [
  {
    test: 'Cannabinoid Potency Panel (CBD, THC, CBG, etc.)',
    price: '$50–$100',
    frequency: 'Per lot, before harvest (required by USDA)',
    notes: 'Must be DEA-registered lab. Tests for total THC ≤0.3%.',
    required: true,
  },
  {
    test: 'USDA Sampling Agent Visit',
    price: '$100–$200',
    frequency: 'Per harvest (required)',
    notes: 'Agent collects samples from plant tops. Must be 30+ days before harvest.',
    required: true,
  },
  {
    test: 'Full Compliance Panel (Potency + Moisture + Foreign Matter)',
    price: '$100–$200',
    frequency: 'Optional — recommended for selling',
    notes: 'Gives you a full Certificate of Analysis (COA) for buyers.',
  },
  {
    test: 'Heavy Metals Panel',
    price: '$50–$100',
    frequency: 'Optional — recommended',
    notes: 'Required by many CBD buyers and retailers.',
  },
  {
    test: 'Pesticide Residue Screen',
    price: '$100–$250',
    frequency: 'Optional — recommended',
    notes: 'Essential if selling to consumers. 60+ compound panel typical.',
  },
  {
    test: 'Microbial / Mycotoxin Panel',
    price: '$50–$150',
    frequency: 'Optional — recommended',
    notes: 'Tests for mold, yeast, bacteria, E. coli, Salmonella.',
  },
  {
    test: 'Terpene Profile',
    price: '$50–$100',
    frequency: 'Optional',
    notes: 'Helps differentiate and market your product.',
  },
  {
    test: 'Residual Solvents (post-extraction)',
    price: '$50–$100',
    frequency: 'Required if selling extracted oil',
    notes: 'Tests for butane, ethanol, CO₂ residuals in final product.',
  },
]

const labs = [
  { name: 'ACS Laboratory', location: 'Sun City, FL (ships nationwide)', notes: 'Major hemp lab, fast turnaround' },
  { name: 'ProVerde Laboratories', location: 'Milford, MA', notes: 'ISO 17025, DEA-registered' },
  { name: 'Kaycha Labs', location: 'Multiple locations', notes: 'Wide presence, hemp specialty' },
  { name: 'Columbia Food Laboratories', location: 'Corbett, OR', notes: 'Popular with small growers' },
  { name: 'Local Utah Options', location: 'Check with UDAF', notes: 'Ask farmbill.hemp@usda.gov for current approved list' },
]

export default function CostBreakdown() {
  const requiredMin = 150
  const requiredMax = 400
  const fullPanelMin = 450
  const fullPanelMax = 1100

  return (
    <section id="costs" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950 via-emerald-900/30 to-emerald-950" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-amber-300 to-emerald-400 bg-clip-text text-transparent">
              Testing & Lab Costs
            </span>
          </h2>
          <p className="text-emerald-300/60 text-lg max-w-2xl mx-auto">
            Every crop must be tested for THC compliance before harvest. Additional panels are needed if you plan to sell CBD products to consumers.
          </p>
        </motion.div>

        {/* Testing Cost Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl font-bold text-emerald-200 mb-6 flex items-center gap-2">
            <FlaskConical className="w-5 h-5 text-emerald-400" />
            Cannabinoid & Compliance Testing Costs
          </h3>

          <div className="overflow-x-auto">
            <div className="space-y-2 min-w-[600px]">
              {/* Header */}
              <div className="grid grid-cols-12 gap-4 px-5 py-3 bg-emerald-800/20 rounded-lg text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                <div className="col-span-4">Test</div>
                <div className="col-span-2">Cost</div>
                <div className="col-span-3">When</div>
                <div className="col-span-3">Notes</div>
              </div>

              {testingCosts.map((t, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-12 gap-4 px-5 py-4 rounded-lg border transition-all hover:border-emerald-500/20 ${
                    t.required
                      ? 'bg-amber-900/10 border-amber-700/20'
                      : 'bg-emerald-900/15 border-emerald-700/15'
                  }`}
                >
                  <div className="col-span-4 flex items-start gap-2">
                    {t.required && <span className="text-xs px-1.5 py-0.5 bg-amber-600/30 text-amber-300 rounded shrink-0 mt-0.5">REQ</span>}
                    <span className="text-sm font-medium text-white">{t.test}</span>
                  </div>
                  <div className="col-span-2 text-sm font-bold text-amber-400">{t.price}</div>
                  <div className="col-span-3 text-sm text-emerald-300/60">{t.frequency}</div>
                  <div className="col-span-3 text-xs text-emerald-400/50">{t.notes}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <div className="p-5 bg-amber-900/15 border border-amber-600/20 rounded-xl text-center">
              <div className="text-xs text-amber-400/60 mb-1">Required Testing Only</div>
              <div className="text-2xl font-black text-amber-400">${requiredMin}–${requiredMax}</div>
              <div className="text-xs text-amber-500/40 mt-1">Sampling agent + THC potency</div>
            </div>
            <div className="p-5 bg-emerald-900/20 border border-emerald-600/20 rounded-xl text-center">
              <div className="text-xs text-emerald-400/60 mb-1">Full Panel (for Selling)</div>
              <div className="text-2xl font-black text-emerald-300">${fullPanelMin}–${fullPanelMax}</div>
              <div className="text-xs text-emerald-500/40 mt-1">All tests including COA</div>
            </div>
          </div>
        </motion.div>

        {/* Labs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-emerald-200 mb-6 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-emerald-400" />
            DEA-Registered Labs (Ship Samples Nationwide)
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {labs.map((lab, i) => (
              <div key={i} className="p-4 bg-emerald-900/15 border border-emerald-700/15 rounded-xl hover:border-emerald-500/20 transition-all">
                <div className="font-semibold text-white text-sm mb-1">{lab.name}</div>
                <div className="text-xs text-emerald-400/50 mb-2">{lab.location}</div>
                <div className="text-xs text-emerald-300/40">{lab.notes}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-emerald-800/15 border border-emerald-700/20 rounded-xl">
            <p className="text-sm text-emerald-300/60">
              <strong className="text-emerald-300">💡 Pro Tip:</strong> Many labs offer "grower packages" with potency + heavy metals + pesticides bundled for $200–$400. Ask about first-time grower discounts. Ship dried flower samples via USPS priority mail (legal under your USDA license).
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
