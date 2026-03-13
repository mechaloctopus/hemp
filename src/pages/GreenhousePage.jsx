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

      {/* Build Options */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
          <Sun className="w-7 h-7 text-orange-400" />
          <span className="bg-gradient-to-r from-orange-300 to-yellow-400 bg-clip-text text-transparent">Greenhouse Build Options</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { type: 'Gothic Arch Hoop House (14×24 ft)', cost: '$800–$2,000 DIY / $2,000–$5,000 kit', pros: 'Excellent snow shedding (critical for Utah), good headroom, easy to build from EMT conduit + greenhouse poly. 336 sq ft of growing space.', cons: 'Poly covering lasts 4–6 years before replacement (~$100–$200). Not as insulated as rigid panels.' },
            { type: 'Polycarbonate Panel Greenhouse (10×20 ft)', cost: '$1,500–$4,000 kit', pros: 'Twin-wall polycarbonate insulates far better than poly film. 10+ year lifespan. Better winter heat retention. Looks professional.', cons: 'Higher upfront cost. Heavier framework needed. Can overheat in summer without good ventilation.' },
            { type: 'Lean-To / Attached Greenhouse', cost: '$500–$2,000 DIY', pros: 'Shares wall with house/garage — captures radiant heat. Shortest plumbing run to RO water. Easy to access in winter.', cons: 'Limited size. South-facing wall required. May need permits if attached to structure.' },
            { type: 'Walipini / Underground Greenhouse', cost: '$500–$1,500 DIY', pros: 'Earth-sheltered — uses ground temperature (55°F year-round in Utah) as natural insulation. Incredibly efficient heating. Can grow tropicals in winter with minimal energy.', cons: 'Excavation required (check water table). Drainage critical. Permitting may vary. More complex build.' },
          ].map((opt, i) => (
            <div key={i} className="p-5 bg-orange-900/10 border border-orange-700/12 rounded-xl">
              <h4 className="font-bold text-white text-sm mb-1">{opt.type}</h4>
              <span className="text-xs px-2 py-0.5 bg-amber-800/30 rounded-full text-amber-300 inline-block mb-3">{opt.cost}</span>
              <p className="text-sm text-emerald-200/50 mb-2"><strong className="text-emerald-300/70">Pros:</strong> {opt.pros}</p>
              <p className="text-sm text-red-200/40"><strong className="text-red-300/70">Cons:</strong> {opt.cons}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Seasonal Schedule */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h2 className="text-2xl font-black mb-6 text-white">Greenhouse Seasonal Schedule</h2>
        <div className="space-y-3">
          {[
            { season: 'Winter (Nov–Feb)', activity: 'Overwinter figs, citrus, tender herbs. Start earliest seeds (onions, leeks) under lights. Maintain cacti collection (minimal water). Propagation station for fruit tree cuttings. Heat to 40–50°F minimum with thermostat-controlled heater.' },
            { season: 'Early Spring (Mar–Apr)', activity: 'Peak seed-starting season. All tomato, pepper, basil, hemp, melon, squash starts under grow lights. Harden off seedlings by opening vents/doors during warm days. Begin moving overwintered plants outdoors on warm days.' },
            { season: 'Late Spring (May)', activity: 'Transplant starts to outdoor beds after last frost. Move citrus/figs outdoors. Greenhouse transitions to heat-loving crops that benefit from extra warmth (peppers, eggplant, basil succession starts).' },
            { season: 'Summer (Jun–Aug)', activity: 'Shade cloth (50–60%) to prevent overheating. Ventilation fans running. Grow heat-lovers (peppers, basil). Propagate fruit tree softwood cuttings in humidity dome. Start fall/winter crop seeds in late August.' },
            { season: 'Fall (Sep–Oct)', activity: 'Remove shade cloth. Move frost-sensitive plants back inside before first freeze. Start cool-season crops inside (lettuce, spinach, kale for winter harvest). Clean and organize for winter.' },
          ].map((item, i) => (
            <div key={i} className="p-4 bg-orange-900/10 border border-orange-700/12 rounded-xl">
              <h4 className="font-bold text-orange-300 text-sm mb-1">{item.season}</h4>
              <p className="text-sm text-orange-200/50">{item.activity}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Heating/Cooling Calculations */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h2 className="text-2xl font-black mb-6 text-white">Climate Control Essentials</h2>
        <div className="p-6 bg-orange-900/15 border border-orange-700/20 rounded-2xl">
          <div className="space-y-4">
            {[
              { system: 'Winter Heating', detail: 'Small electric space heater (1,500W) with thermostat set to 40°F minimum. For a 10×20 ft greenhouse with twin-wall poly, heating cost ~$30–$60/month in Utah winter. Add thermal mass (black water barrels) to absorb solar heat during day and release at night — dramatically reduces heating needs.' },
              { system: 'Summer Cooling', detail: 'Shade cloth (50–60% shade rating) + exhaust fan + intake louver. Automated vent openers ($20–$40 each, wax cylinder, no electricity) on roof vents. Target: keep below 90°F. Utah summer sun can push unshaded greenhouse to 120°F+.' },
              { system: 'Humidity Control', detail: 'Misting system with RO water for tropical plants and propagation. In winter, greenhouse naturally stays humid from plant transpiration. In summer, good ventilation prevents excess humidity and fungal issues.' },
              { system: 'Lighting', detail: 'Supplemental LED grow lights for seed starting and overwintering (Dec–Feb when days are short). Full-spectrum bar lights or quantum board LEDs, 14–16 hrs/day on timer. ~$50–$150 for adequate coverage.' },
            ].map((item, i) => (
              <div key={i} className="p-4 bg-black/15 rounded-xl">
                <h4 className="font-bold text-white text-sm mb-1">{item.system}</h4>
                <p className="text-sm text-orange-200/50">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 grid sm:grid-cols-3 gap-3 text-center">
            <div className="p-3 bg-black/20 rounded-lg">
              <div className="text-xs text-orange-400/50">Build Cost</div>
              <div className="text-lg font-bold text-white">$1,500–$4,000</div>
            </div>
            <div className="p-3 bg-black/20 rounded-lg">
              <div className="text-xs text-orange-400/50">Annual Operating</div>
              <div className="text-lg font-bold text-white">$200–$500</div>
            </div>
            <div className="p-3 bg-black/20 rounded-lg">
              <div className="text-xs text-orange-400/50">Extends Season By</div>
              <div className="text-lg font-bold text-emerald-300">4–8 weeks</div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="p-5 bg-orange-900/15 border border-orange-700/20 rounded-xl">
        <p className="text-sm text-orange-300/80">
          <strong>Integration:</strong> The greenhouse connects to the main water system (<a href="/water" className="text-orange-400 hover:text-orange-300 underline">Water Plan</a> RO tank). It also serves as the propagation nursery for the <a href="/fruit-trees" className="text-orange-400 hover:text-orange-300 underline">Fruit Tree Nursery</a> — rooting cuttings and grafts need the controlled warmth and humidity a greenhouse provides. Spent mushroom substrate from the <a href="/mushrooms" className="text-orange-400 hover:text-orange-300 underline">Mycology Lab</a> makes excellent potting mix amendment.
        </p>
      </div>
    </div>
  )
}
