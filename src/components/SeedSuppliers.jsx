import { motion } from 'framer-motion'
import { ShoppingBag, ExternalLink, Star, Truck, Tag } from 'lucide-react'

const suppliers = [
  {
    name: 'Fortuna Hemp',
    url: 'fortunahemp.com',
    speciality: 'Bulk feminized seeds, Utah-specific varieties',
    pricing: '$0.30–$0.40/seed for popular strains',
    varieties: 'Northstar, Titan, more',
    highlights: 'Great for low-THC projects. Utah page/info available.',
    star: true,
  },
  {
    name: 'Oregon CBD Seeds',
    url: 'oregoncbdseeds.com',
    speciality: 'High-CBD/CBG feminized genetics',
    pricing: '$1–$3/seed retail, bulk pricing available',
    varieties: 'Lifter, White CBG, Sour Space Candy, Hawaiian Haze',
    highlights: 'Industry leader for CBD flower genetics. Best for oil production.',
    star: true,
  },
  {
    name: 'Cheyenne Mountain Seed Co.',
    url: 'cheyennemountainseedcompany.com',
    speciality: 'High-CBD strains in bulk packs',
    pricing: 'Starters (20–100): $100–$350 | Farmer (1,000+): ~$1,000+',
    varieties: 'Multiple CBD/CBG varieties',
    highlights: 'Bulk discounts for larger orders. Great customer service.',
  },
  {
    name: 'Hemp Traders',
    url: 'hemptraders.com',
    speciality: 'Fiber/grain varieties with low THC',
    pricing: 'Call for 2026 pricing (pre-order for season)',
    varieties: 'Fiber and grain focused',
    highlights: 'Seeding rate info provided (25–35 lbs/acre for grain).',
  },
  {
    name: 'Bulk Hemp Warehouse',
    url: 'bulkhempwarehouse.com',
    speciality: 'Raw viable planting seeds in certified bags',
    pricing: '$20–$359 depending on quantity/variety',
    varieties: 'Anka (fiber), others',
    highlights: 'Great for large-scale fiber/seed operations.',
  },
  {
    name: 'Kind Seed Co.',
    url: 'kindseed.com',
    speciality: 'Affordable bulk hemp seeds',
    pricing: 'Competitive pricing for all scales',
    varieties: 'Multiple CBD varieties',
    highlights: 'Good budget option for beginners.',
  },
]

const pricingTiers = [
  { tier: 'Retail / Small Packs', quantity: '20–100 seeds', price: '$1–$3.50/seed', total: '$100–$350' },
  { tier: 'Bulk / Farmer Packs', quantity: '1,000+ seeds', price: '$0.30–$1/seed', total: '$300–$1,000' },
  { tier: 'Wholesale / Large Volume', quantity: '10,000+ seeds', price: '$0.20–$0.50/seed', total: '$2,000+' },
  { tier: 'By Weight (Basic)', quantity: 'Per pound', price: '$2–$20/lb', total: 'Varies by variety' },
]

export default function SeedSuppliers() {
  return (
    <section id="suppliers" className="py-24 relative">
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
              Seed Suppliers
            </span>
          </h2>
          <p className="text-emerald-300/60 text-lg max-w-2xl mx-auto">
            Reputable U.S. suppliers offering certified, low-THC (&lt;0.3%) varieties. Always request documentation (COA, germination rates) with your order.
          </p>
        </motion.div>

        {/* Pricing Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl font-bold text-emerald-200 mb-6 flex items-center gap-2">
            <Tag className="w-5 h-5 text-amber-400" />
            2026 Seed Pricing Guide
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {pricingTiers.map((tier, i) => (
              <div key={i} className="p-5 bg-emerald-900/20 border border-emerald-700/15 rounded-xl text-center">
                <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">{tier.tier}</div>
                <div className="text-sm text-emerald-300/50 mb-1">{tier.quantity}</div>
                <div className="text-lg font-bold text-amber-400">{tier.price}</div>
                <div className="text-xs text-emerald-500/40 mt-1">{tier.total}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Supplier Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-emerald-200 mb-6 flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-emerald-400" />
            Recommended Suppliers
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {suppliers.map((s, i) => (
              <div
                key={i}
                className={`p-6 bg-emerald-900/15 border rounded-xl hover:border-emerald-500/30 transition-all relative ${
                  s.star ? 'border-emerald-500/25' : 'border-emerald-700/15'
                }`}
              >
                {s.star && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 text-xs px-2 py-1 bg-emerald-500/15 rounded-full text-emerald-400">
                    <Star className="w-3 h-3" /> Recommended
                  </div>
                )}
                <h4 className="text-lg font-bold text-white mb-1">{s.name}</h4>
                <a
                  href={`https://${s.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 mb-3"
                >
                  {s.url} <ExternalLink className="w-3 h-3" />
                </a>
                <p className="text-sm text-emerald-200/60 mb-2">{s.speciality}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs px-2 py-0.5 bg-amber-800/30 rounded-full text-amber-300">{s.pricing}</span>
                </div>
                <p className="text-xs text-emerald-300/40">
                  <strong>Varieties:</strong> {s.varieties}
                </p>
                <p className="text-xs text-emerald-400/50 mt-2">{s.highlights}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 bg-amber-900/15 border border-amber-700/20 rounded-xl">
            <p className="text-sm text-amber-300/80">
              <strong>💡 Buying Tips:</strong> Email suppliers with your USDA license number for quotes/bulk discounts. For your "many seeds" goal, expect <strong>$500–$2,000+</strong> for thousands of quality seeds depending on strain. Interstate transport of seeds is legal for licensed growers under federal law. These are photoperiod varieties — timing matters for Utah planting (spring after last frost).
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
