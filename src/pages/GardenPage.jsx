import { motion } from 'framer-motion'
import {
  Sprout, Leaf, Sun, Droplets, Bug, ArrowRight, ExternalLink,
  CheckCircle2, Calendar, ThermometerSun, Flower2, Apple
} from 'lucide-react'

const crops = [
  {
    category: 'Herbs',
    color: 'from-emerald-500 to-emerald-600',
    items: [
      { name: 'Sweet Basil (Genovese)', spacing: '12–18"', sun: 'Full sun', water: 'Regular', season: 'May–Sept', notes: 'King of pesto. Pinch flowers for bushier growth. Companion: tomatoes.', uses: 'Pesto, fresh, dried, oils' },
      { name: 'Holy Basil (Tulsi)', spacing: '12–18"', sun: 'Full sun', water: 'Moderate', season: 'May–Sept', notes: 'Adaptogenic herb. Three varieties: Rama, Krishna, Vana. Medicinal teas.', uses: 'Tea, tinctures, elixirs' },
      { name: 'Thai Basil', spacing: '12–18"', sun: 'Full sun', water: 'Regular', season: 'May–Sept', notes: 'Licorice-anise flavor. Beautiful purple stems. Heat-tolerant.', uses: 'Stir-fry, soups, garnish' },
      { name: 'Cilantro / Coriander', spacing: '6–8"', sun: 'Part shade OK', water: 'Regular', season: 'Mar–May, Aug–Oct', notes: 'Bolts fast in heat. Succession plant every 2–3 weeks. Seeds = coriander.', uses: 'Fresh herb, seed spice' },
      { name: 'Dill', spacing: '12"', sun: 'Full sun', water: 'Moderate', season: 'Apr–Sept', notes: 'Great for pickles. Self-seeds. Companion: cucumbers, cabbage.', uses: 'Pickles, fish, salads' },
      { name: 'Oregano', spacing: '12–18"', sun: 'Full sun', water: 'Low', season: 'Perennial (Zone 5+)', notes: 'Hardy perennial. Spreads vigorously. Dry for concentrated flavor.', uses: 'Italian, Mexican, dried' },
      { name: 'Rosemary', spacing: '24–36"', sun: 'Full sun', water: 'Low', season: 'Perennial (Zone 7+, protect in UT)', notes: 'May need winter protection in Riverton. Container option for moving indoors.', uses: 'Roasts, oils, soap' },
      { name: 'Thyme', spacing: '12–18"', sun: 'Full sun', water: 'Low', season: 'Perennial', notes: 'Dozens of varieties. Lemon thyme excellent. Ground cover in paths.', uses: 'Cooking, tea, medicinal' },
      { name: 'Mint (Spearmint, Peppermint)', spacing: '18–24" (contained!)', sun: 'Part shade OK', water: 'Regular', season: 'Perennial', notes: 'ALWAYS plant in containers — invasive. Multiple varieties for teas and products.', uses: 'Tea, mojitos, soap, shampoo' },
      { name: 'Lavender', spacing: '18–24"', sun: 'Full sun', water: 'Low', season: 'Perennial', notes: 'English lavender (Munstead, Hidcote) best for Utah. Well-drained soil essential.', uses: 'Soap, sachets, oils, tea' },
    ],
  },
  {
    category: 'Cruciferous Vegetables',
    color: 'from-green-500 to-green-600',
    items: [
      { name: 'Broccoli', spacing: '18–24"', sun: 'Full sun', water: 'Regular', season: 'Mar–May, Aug–Sept', notes: 'Cool-season. Start indoors 6 weeks before last frost. Side shoots after main head.', uses: 'Fresh, roasted, fermented' },
      { name: 'Kale (Lacinato / Curly)', spacing: '18–24"', sun: 'Full sun to part shade', water: 'Regular', season: 'Mar–May, Aug–Nov', notes: 'Frost improves flavor. Lacinato (dinosaur) kale is premium. Harvest outer leaves.', uses: 'Salads, chips, smoothies' },
      { name: 'Cabbage (Red & Green)', spacing: '18–24"', sun: 'Full sun', water: 'Regular', season: 'Mar–May, Aug–Sept', notes: 'Long season. Red cabbage = higher antioxidants. Great for fermentation.', uses: 'Sauerkraut, kimchi, coleslaw' },
      { name: 'Cauliflower', spacing: '18–24"', sun: 'Full sun', water: 'Regular', season: 'Mar–Apr, Aug–Sept', notes: 'Blanch heads by tying leaves. Romanesco variety is stunning.', uses: 'Roasted, rice substitute, pickled' },
      { name: 'Brussels Sprouts', spacing: '24"', sun: 'Full sun', water: 'Regular', season: 'May–Jun start, fall harvest', notes: 'Long season (80–100 days). Frost sweetens them. Top plant 3 weeks before harvest.', uses: 'Roasted, shaved salads' },
      { name: 'Arugula', spacing: '6"', sun: 'Part shade OK', water: 'Regular', season: 'Mar–May, Sept–Nov', notes: 'Fast grower (21 days baby). Succession plant biweekly. Bolts in heat.', uses: 'Salads, pesto, pizza topping' },
    ],
  },
  {
    category: 'Fruiting Vegetables & Vines',
    color: 'from-red-500 to-red-600',
    items: [
      { name: 'Tomatoes (Heirloom)', spacing: '24–36"', sun: 'Full sun', water: 'Regular, deep', season: 'May–Sept', notes: 'Brandywine, Cherokee Purple, San Marzano. Stake/cage. Calcium prevents blossom end rot.', uses: 'Fresh, sauce, canning, dried' },
      { name: 'Melons (Cantaloupe, Honeydew)', spacing: '36–60"', sun: 'Full sun', water: 'Regular', season: 'May–Aug', notes: 'Need heat + long season. Black plastic mulch warms soil. Trellis for space saving.', uses: 'Fresh, desserts' },
      { name: 'Watermelon', spacing: '60–96"', sun: 'Full sun', water: 'Regular', season: 'May–Aug', notes: 'Sugar Baby (small) or Crimson Sweet. Need warm soil 70°F+. Stop watering 1 week before harvest.', uses: 'Fresh, rind pickles' },
      { name: 'Gourds (Decorative & Edible)', spacing: '48–72"', sun: 'Full sun', water: 'Regular', season: 'May–Oct', notes: 'Butternut, acorn squash (edible). Birdhouse/luffa gourds (decorative/functional).', uses: 'Cooking, crafts, sponges' },
      { name: 'Heirloom Corn', spacing: '12" rows 30"', sun: 'Full sun', water: 'Regular', season: 'May–Sept', notes: 'Plant in blocks (not single rows) for wind pollination. Glass Gem for beauty. Three Sisters planting.', uses: 'Fresh, cornmeal, flour, decoration' },
      { name: 'Cucumbers', spacing: '12–18"', sun: 'Full sun', water: 'Regular', season: 'May–Aug', notes: 'Trellis for straight fruit. Pick daily for production. Pickling varieties for preserves.', uses: 'Fresh, pickles!' },
    ],
  },
  {
    category: 'Flowers',
    color: 'from-yellow-500 to-yellow-600',
    items: [
      { name: 'Sunflowers', spacing: '18–24"', sun: 'Full sun', water: 'Moderate', season: 'May–Sept', notes: 'Mammoth for seeds, Teddy Bear for bouquets. Attract pollinators. Edible seeds.', uses: 'Seeds, oil, bouquets, bee habitat' },
      { name: 'Marigolds', spacing: '8–12"', sun: 'Full sun', water: 'Moderate', season: 'May–Oct', notes: 'Best companion plant. Repels nematodes, aphids. Plant borders around every bed.', uses: 'Companion planting, dye, tea' },
      { name: 'Calendula', spacing: '12"', sun: 'Full sun', water: 'Moderate', season: 'Apr–Oct', notes: 'Edible petals. Medicinal (anti-inflammatory). Self-seeds. Attracts beneficial insects.', uses: 'Salves, soap, edible garnish' },
      { name: 'Borage', spacing: '18"', sun: 'Full sun to part shade', water: 'Moderate', season: 'Apr–Sept', notes: 'Edible blue flowers. Excellent bee plant. Companion to tomatoes and strawberries.', uses: 'Edible flowers, bee habitat' },
    ],
  },
]

const companionChart = [
  { plant: 'Tomatoes', goodCompanions: 'Basil, marigolds, carrots, borage', badCompanions: 'Fennel, cabbage family, corn' },
  { plant: 'Hemp', goodCompanions: 'Sunflowers, marigolds, basil, lavender', badCompanions: 'None significant (allelopathic to some weeds — beneficial)' },
  { plant: 'Corn', goodCompanions: 'Beans, squash (Three Sisters), sunflowers', badCompanions: 'Tomatoes, celery' },
  { plant: 'Cucumbers', goodCompanions: 'Dill, sunflowers, beans, corn', badCompanions: 'Potatoes, aromatic herbs (sage)' },
  { plant: 'Cabbage Family', goodCompanions: 'Dill, celery, onions, thyme', badCompanions: 'Strawberries, tomatoes' },
  { plant: 'Melons', goodCompanions: 'Corn, sunflowers, marigolds', badCompanions: 'Potatoes' },
]

export default function GardenPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-800/30 border border-lime-600/30 rounded-full text-sm text-lime-300 mb-6">
          <Sprout className="w-4 h-4" />
          Herb & Vegetable Master Plan
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-4">
          <span className="bg-gradient-to-r from-lime-300 via-emerald-400 to-emerald-500 bg-clip-text text-transparent">
            Garden Plan
          </span>
        </h1>
        <p className="text-lg text-emerald-200/50 max-w-3xl">
          Complete planting guide for herbs, cruciferous vegetables, melons, gourds, heirloom corn, sunflowers, and companion flowers. Optimized for Riverton, Utah (USDA Zone 6b–7a).
        </p>
      </motion.div>

      {/* Growing Season */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 bg-emerald-900/15 border border-emerald-700/20 rounded-2xl mb-12">
        <h3 className="text-lg font-bold text-emerald-300 mb-3 flex items-center gap-2"><Calendar className="w-5 h-5" /> Riverton Growing Season</h3>
        <div className="grid sm:grid-cols-3 gap-4 mb-4">
          <div className="text-center p-4 bg-emerald-950/40 rounded-xl">
            <div className="text-xs text-emerald-400/50 mb-1">Last Frost (avg)</div>
            <div className="text-lg font-bold text-white">May 1–10</div>
          </div>
          <div className="text-center p-4 bg-emerald-950/40 rounded-xl">
            <div className="text-xs text-emerald-400/50 mb-1">First Frost (avg)</div>
            <div className="text-lg font-bold text-white">Oct 10–20</div>
          </div>
          <div className="text-center p-4 bg-emerald-950/40 rounded-xl">
            <div className="text-xs text-emerald-400/50 mb-1">Growing Season</div>
            <div className="text-lg font-bold text-white">~150–170 days</div>
          </div>
        </div>
        <p className="text-xs text-emerald-400/40">Source: NOAA Climate Data, USU Extension. USDA Hardiness Zone 6b–7a. Elevation ~4,500 ft.</p>
      </motion.div>

      {/* Crop Categories */}
      {crops.map((cat, ci) => (
        <motion.div key={ci} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center`}>
              <Sprout className="w-4 h-4 text-white" />
            </div>
            <span className="text-white">{cat.category}</span>
          </h2>
          <div className="space-y-2">
            {cat.items.map((item, i) => (
              <div key={i} className="p-4 bg-emerald-900/10 border border-emerald-700/12 rounded-xl hover:border-emerald-500/20 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h4 className="font-bold text-white text-sm">{item.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-0.5 bg-yellow-800/30 rounded-full text-yellow-300">{item.sun}</span>
                    <span className="text-xs px-2 py-0.5 bg-blue-800/30 rounded-full text-blue-300">{item.water}</span>
                    <span className="text-xs px-2 py-0.5 bg-emerald-800/30 rounded-full text-emerald-300">{item.season}</span>
                    <span className="text-xs px-2 py-0.5 bg-purple-800/30 rounded-full text-purple-300">Spacing: {item.spacing}</span>
                  </div>
                </div>
                <p className="text-sm text-emerald-200/50 mb-1">{item.notes}</p>
                <p className="text-xs text-emerald-400/40"><strong>Uses:</strong> {item.uses}</p>
              </div>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Companion Planting */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
          <Bug className="w-7 h-7 text-emerald-400" />
          <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">Companion Planting Guide</span>
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[500px]">
            <thead>
              <tr className="border-b border-emerald-700/20">
                <th className="text-left py-3 px-4 text-emerald-400/60 font-semibold text-xs uppercase">Plant</th>
                <th className="text-left py-3 px-4 text-emerald-400/60 font-semibold text-xs uppercase">Good Companions</th>
                <th className="text-left py-3 px-4 text-red-400/60 font-semibold text-xs uppercase">Avoid Near</th>
              </tr>
            </thead>
            <tbody>
              {companionChart.map((row, i) => (
                <tr key={i} className="border-b border-emerald-800/15">
                  <td className="py-3 px-4 font-medium text-white">{row.plant}</td>
                  <td className="py-3 px-4 text-emerald-300/60">{row.goodCompanions}</td>
                  <td className="py-3 px-4 text-red-300/50">{row.badCompanions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-emerald-400/40">Sources: University of California Davis Companion Planting Guide, Rodale's Organic Gardening, Utah State University Extension</p>
      </motion.div>

      <div className="p-5 bg-amber-900/15 border border-amber-700/20 rounded-xl">
        <p className="text-sm text-amber-300/80">
          <strong>Key Principle:</strong> All garden beds will be irrigated with <strong>RO-filtered, pH-adjusted, mineral-enriched water</strong> from the 500-gallon tank system (see <a href="/water" className="text-amber-400 hover:text-amber-300 underline">Water Plan</a>). Combined with living soil amendments (see <a href="/soil" className="text-amber-400 hover:text-amber-300 underline">Soil Plan</a>), this produces artisan-quality crops that are cleaner than any commercial organic produce.
        </p>
      </div>
    </div>
  )
}
