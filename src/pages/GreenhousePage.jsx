import { motion } from 'framer-motion'
import {
  Sun, Thermometer, Droplets, Snowflake, Leaf, CheckCircle2, AlertTriangle
} from 'lucide-react'

const plants = [
  {
    category: 'Cacti & Succulents',
    items: [
      { name: 'San Pedro Cactus (Trichocereus pachanoi)', care: 'Full sun, minimal water, well-draining cactus mix. Frost-sensitive.', notes: 'Fast-growing columnar cactus. Stunning ornamental. Propagate from cuttings easily.' },
      { name: 'Prickly Pear (Opuntia)', care: 'Full sun, very drought-tolerant. Some species cold-hardy to -20°F.', notes: 'Edible pads (nopales) and fruit (tunas). Some varieties survive Utah winters outdoors.' },
      { name: 'Aloe Vera', care: 'Bright indirect light, infrequent water. Min 50°F.', notes: 'Medicinal gel for burns/skin. Propagate from pups. Excellent for homemade skincare products.' },
      { name: 'Jade Plant (Crassula ovata)', care: 'Bright light, low water. Min 40°F.', notes: 'Long-lived succulent tree. Easy propagation from leaf or stem cuttings.' },
      { name: 'Echeveria / Sempervivum Collection', care: 'Full sun, well-draining, minimal water.', notes: 'Beautiful rosette forms. Sempervivum (hens & chicks) are cold-hardy; Echeveria need frost protection.' },
    ],
  },
  {
    category: 'Tropical / Frost-Sensitive',
    items: [
      { name: 'Fig Trees (potted)', care: 'Full sun, regular water in season. Dormancy in winter (40–50°F garage/greenhouse).', notes: 'Chicago Hardy and Brown Turkey. Keep in large pots, move into greenhouse before first frost.' },
      { name: 'Lemongrass', care: 'Full sun, regular water, rich soil. Min 40°F.', notes: 'Culinary herb for Thai/Vietnamese cooking. Propagate by division. Overwinter in greenhouse.' },
      { name: 'Ginger & Turmeric', care: 'Part shade, consistent moisture, rich soil. Min 50°F.', notes: 'Grow in containers. Start rhizomes in spring, harvest in fall. Incredible for elixirs and cooking.' },
      { name: 'Citrus (Dwarf Meyer Lemon, Lime)', care: 'Full sun, regular water, acidic soil. Min 45°F.', notes: 'Dwarf varieties in containers. Move outdoors in summer, greenhouse in winter. Fragrant blooms.' },
      { name: 'Moringa', care: 'Full sun, well-draining, moderate water. Min 50°F.', notes: 'Superfood tree. Fast-growing. Leaves, pods, seeds all edible and highly nutritious.' },
      { name: 'Stevia', care: 'Full sun to part shade, regular water. Frost-sensitive perennial.', notes: 'Natural sweetener. Propagate from cuttings. Dry leaves for sugar-free sweetening.' },
    ],
  },
  {
    category: 'Seedling Starts (Spring)',
    items: [
      { name: 'Tomato, Pepper, Eggplant starts', care: 'Start 6–8 weeks before last frost under grow lights.', notes: 'Harden off before transplanting outdoors. Greenhouse extends season by 4–6 weeks.' },
      { name: 'Hemp seedlings', care: 'Start in 4" pots 3–4 weeks before outdoor transplant.', notes: 'Gentle lighting, RO water, minimal nutrients. Transplant after last frost.' },
      { name: 'Melon, Squash, Cucumber starts', care: 'Start 3–4 weeks before transplant in peat pots (don\'t disturb roots).', notes: 'Warm soil required (70°F+). Use heat mats in greenhouse.' },
      { name: 'Herb starts (basil, holy basil, etc.)', care: 'Start 6–8 weeks before last frost. Pinch early for bushiness.', notes: 'Grow multiple successions for continuous harvest all season.' },
    ],
  },
]

export default function GreenhousePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-800/30 border border-orange-600/30 rounded-full text-sm text-orange-300 mb-6">
          <Sun className="w-4 h-4" />
          Climate-Controlled Growing Space
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-4">
          <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Greenhouse
          </span>
        </h1>
        <p className="text-lg text-orange-200/50 max-w-3xl">
          Year-round growing space for frost-sensitive plants, cacti, tropicals, seedling starts, and overwintering container trees. Extends the growing season by months.
        </p>
      </motion.div>

      {/* Greenhouse Specs */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
          <Thermometer className="w-7 h-7 text-orange-400" />
          <span className="text-white">Greenhouse Environment</span>
        </h2>
        <div className="p-6 bg-orange-900/15 border border-orange-700/20 rounded-2xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 bg-orange-950/40 rounded-xl">
              <Thermometer className="w-5 h-5 text-orange-400 mx-auto mb-1" />
              <div className="text-xs text-orange-400/50">Winter Min Temp</div>
              <div className="text-lg font-bold text-white">40–50°F</div>
              <div className="text-xs text-orange-400/40">Frost-free zone</div>
            </div>
            <div className="text-center p-4 bg-orange-950/40 rounded-xl">
              <Sun className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
              <div className="text-xs text-orange-400/50">Summer Ventilation</div>
              <div className="text-lg font-bold text-white">Shade cloth + fans</div>
              <div className="text-xs text-orange-400/40">Prevent 100°F+ buildup</div>
            </div>
            <div className="text-center p-4 bg-orange-950/40 rounded-xl">
              <Droplets className="w-5 h-5 text-blue-400 mx-auto mb-1" />
              <div className="text-xs text-orange-400/50">Irrigation</div>
              <div className="text-lg font-bold text-white">RO Water</div>
              <div className="text-xs text-orange-400/40">From 500-gal tank system</div>
            </div>
            <div className="text-center p-4 bg-orange-950/40 rounded-xl">
              <Snowflake className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
              <div className="text-xs text-orange-400/50">Heating</div>
              <div className="text-lg font-bold text-white">Small space heater</div>
              <div className="text-xs text-orange-400/40">Thermostat-controlled</div>
            </div>
          </div>
          <p className="text-sm text-orange-200/50">
            A basic hoop house or rigid-panel greenhouse (10×20 ft or larger) provides frost protection down to zone 8–9 equivalent inside. In Riverton's zone 6b–7a climate, this means overwintering figs, citrus, and tropicals that would otherwise die. Summer use: seedling starts, heat-loving crops, and propagation nursery.
          </p>
        </div>
      </motion.div>

      {/* Plant Categories */}
      {plants.map((cat, ci) => (
        <motion.div key={ci} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-2xl font-black mb-6 text-white">{cat.category}</h2>
          <div className="space-y-2">
            {cat.items.map((item, i) => (
              <div key={i} className="p-4 bg-orange-900/10 border border-orange-700/12 rounded-xl hover:border-orange-500/20 transition-all">
                <h4 className="font-bold text-white text-sm mb-1">{item.name}</h4>
                <p className="text-sm text-orange-200/50 mb-1"><strong className="text-orange-300/70">Care:</strong> {item.care}</p>
                <p className="text-xs text-orange-300/40">{item.notes}</p>
              </div>
            ))}
          </div>
        </motion.div>
      ))}

      <div className="p-5 bg-orange-900/15 border border-orange-700/20 rounded-xl">
        <p className="text-sm text-orange-300/80">
          <strong>Integration:</strong> The greenhouse connects to the main water system (<a href="/water" className="text-orange-400 hover:text-orange-300 underline">Water Plan</a> RO tank). It also serves as the propagation nursery for the <a href="/fruit-trees" className="text-orange-400 hover:text-orange-300 underline">Fruit Tree Nursery</a> — rooting cuttings and grafts need the controlled warmth and humidity a greenhouse provides.
        </p>
      </div>
    </div>
  )
}
