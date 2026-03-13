import { motion } from 'framer-motion'
import { Flower2, Wheat, Trees, Beaker, Star, Zap } from 'lucide-react'

const strains = [
  {
    category: 'High CBD/CBG — Max Oil Production',
    description: 'Your priority. High resin, terpenes, 15–20%+ total cannabinoids. Best for crude CBD oil.',
    icon: Flower2,
    accent: 'emerald',
    recommendation: '~70% of your growing area',
    varieties: [
      {
        name: 'Lifter',
        source: 'Oregon CBD Seeds',
        cbd: '15–20%+ CBD',
        thc: '<0.3%',
        highlights: 'Top performer. Great terps, reliable yields, early-finishing (perfect for Utah). Big frosty buds, solid oil output.',
        star: true,
      },
      {
        name: 'White CBG / Northstar',
        source: 'Oregon CBD / Fortuna Hemp',
        cbd: '13–20% CBG + CBD',
        thc: '<0.3%',
        highlights: 'Extra CBG (the "mother cannabinoid"). Frosty, passes compliance easily. Excellent full-spectrum profile.',
        star: true,
      },
      {
        name: 'Sour Space Candy',
        source: 'Various',
        cbd: '14–18% CBD',
        thc: '<0.3%',
        highlights: 'Citrus/fruity terpene profile. Heavy yielder. Popular in consumer market.',
      },
      {
        name: 'Hawaiian Haze',
        source: 'Various',
        cbd: '15–19% CBD',
        thc: '<0.3%',
        highlights: 'Tropical terps. Great flower bag appeal. Vigorous grower.',
      },
      {
        name: 'Remedy',
        source: 'Various',
        cbd: '14–16% CBD',
        thc: '<0.1%',
        highlights: 'Ultra-low THC — virtually zero. Excellent for compliance peace of mind.',
      },
      {
        name: 'Cherry Bubblegum / Titan',
        source: 'Fortuna Hemp',
        cbd: '15–18% CBD',
        thc: '<0.3%',
        highlights: 'Sweet aroma. High biomass. Bred for outdoor resilience.',
      },
    ],
  },
  {
    category: 'Seed Production',
    description: 'High seed yield for edible hemp seeds or seed oil byproduct.',
    icon: Wheat,
    accent: 'amber',
    recommendation: '~15% of your growing area',
    varieties: [
      {
        name: 'Finola',
        source: 'Multiple suppliers',
        cbd: 'Low',
        thc: '<0.3%',
        highlights: 'Classic high-seed yielder (300–700+ lbs seed/acre). Monoecious, reliable. Great for edible seeds/oil.',
        star: true,
      },
    ],
  },
  {
    category: 'Fiber Production',
    description: 'Tall stalks with great bast fiber for textiles, paper, building materials.',
    icon: Trees,
    accent: 'sky',
    recommendation: '~15% of your growing area',
    varieties: [
      {
        name: 'Futura 75',
        source: 'European genetics',
        cbd: 'Low',
        thc: '<0.3%',
        highlights: 'Tall stalks (6–12+ ft). Excellent bast fiber quality. Dual-purpose fiber + some seed. Low CBD.',
        star: true,
      },
      {
        name: 'USO 31 / Altair',
        source: 'Various',
        cbd: 'Low',
        thc: '<0.3%',
        highlights: 'Alternative fiber varieties. Good for rotation and diversity.',
      },
    ],
  },
]

const accentColors = {
  emerald: {
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    badge: 'bg-emerald-800/40 text-emerald-300',
    starBg: 'bg-emerald-500/20',
  },
  amber: {
    border: 'border-amber-500/30',
    bg: 'bg-amber-500/10',
    text: 'text-amber-400',
    badge: 'bg-amber-800/40 text-amber-300',
    starBg: 'bg-amber-500/20',
  },
  sky: {
    border: 'border-sky-500/30',
    bg: 'bg-sky-500/10',
    text: 'text-sky-400',
    badge: 'bg-sky-800/40 text-sky-300',
    starBg: 'bg-sky-500/20',
  },
}

export default function StrainGuide() {
  return (
    <section id="strains" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950 via-emerald-900/40 to-emerald-950" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
              Strain Guide
            </span>
          </h2>
          <p className="text-emerald-300/60 text-lg max-w-2xl mx-auto">
            2026-compliant varieties optimized for Utah's climate. Mix strains for best results — dedicate ~70% to high-CBD/CBG flower, ~15% each to fiber and seed.
          </p>
        </motion.div>

        <div className="p-5 bg-amber-900/15 border border-amber-700/20 rounded-xl mb-10">
          <p className="text-sm text-amber-300/80">
            <strong>⚡ Key Insight:</strong> No single strain maximizes oil + fiber + seed. Modern "tri-crop" varieties exist but cannabinoid levels drop vs. dedicated flower lines.
            Since your USDA license lets you grow <strong>multiple varieties on the same property</strong> (just report separate lots to FSA), the smartest move is mixing 2–3 types on your ¼ acre.
          </p>
        </div>

        <div className="space-y-10">
          {strains.map((cat, i) => {
            const colors = accentColors[cat.accent]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-5">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${colors.bg}`}>
                    <cat.icon className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{cat.category}</h3>
                    <p className="text-sm text-emerald-300/50">{cat.description}</p>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full ${colors.badge} sm:ml-auto shrink-0`}>
                    {cat.recommendation}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  {cat.varieties.map((v, j) => (
                    <div
                      key={j}
                      className={`p-5 bg-emerald-900/15 border ${v.star ? colors.border : 'border-emerald-700/15'} rounded-xl hover:border-emerald-500/25 transition-all relative`}
                    >
                      {v.star && (
                        <div className={`absolute top-3 right-3 p-1.5 rounded-lg ${colors.starBg}`}>
                          <Star className={`w-4 h-4 ${colors.text}`} />
                        </div>
                      )}
                      <div className="font-bold text-white text-lg mb-1">{v.name}</div>
                      <div className="text-xs text-emerald-400/50 mb-3">{v.source}</div>
                      <div className="flex gap-3 mb-3">
                        <span className="text-xs px-2 py-0.5 bg-emerald-800/30 rounded-full text-emerald-300">{v.cbd}</span>
                        <span className="text-xs px-2 py-0.5 bg-emerald-800/30 rounded-full text-emerald-400/60">THC: {v.thc}</span>
                      </div>
                      <p className="text-sm text-emerald-200/60">{v.highlights}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
