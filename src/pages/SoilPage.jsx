import { motion } from 'framer-motion'
import {
  Layers, Beaker, Sprout, Droplets, Bug, Leaf, CheckCircle2,
  AlertTriangle, ExternalLink, ThermometerSun
} from 'lucide-react'

const soilTests = [
  { test: 'Basic Soil Test (pH, NPK, organic matter)', lab: 'USU Extension Soil Lab', cost: '$15–$30', turnaround: '1–2 weeks', notes: 'Start here. Send samples from each zone (hemp field, garden beds, fruit tree area).' },
  { test: 'Complete Soil Analysis (micro/macronutrients)', lab: 'Logan Labs, Brookside Labs', cost: '$25–$50', turnaround: '1–2 weeks', notes: 'Includes Ca, Mg, S, Fe, Mn, Zn, Cu, B, Mo, CEC, base saturation.' },
  { test: 'Heavy Metals Panel', lab: 'Various', cost: '$50–$100', turnaround: '1–3 weeks', notes: 'Test for lead, arsenic, cadmium, mercury. Critical if property was ever agricultural (pesticide residues) or near roads (lead).' },
  { test: 'Biological Soil Assessment', lab: 'Earthfort (OR), Soil Food Web', cost: '$60–$120', turnaround: '2–3 weeks', notes: 'Microscopy of bacteria, fungi, protozoa. Shows biological health of your living soil.' },
]

const amendments = [
  {
    category: 'pH Adjustment',
    items: [
      { name: 'Elemental Sulfur', rate: '1–5 lbs per 100 sq ft', purpose: 'Lower pH (make more acidic). Slow-acting (months). For alkaline Utah soil.', cost: '$10–$20/bag' },
      { name: 'Garden Lime (CaCO₃)', rate: '5–10 lbs per 100 sq ft', purpose: 'Raise pH (make more alkaline). Also adds calcium.', cost: '$8–$15/bag' },
      { name: 'Gypsum (CaSO₄)', rate: '2–5 lbs per 100 sq ft', purpose: 'Adds calcium WITHOUT changing pH. Breaks up clay. Improves drainage.', cost: '$10–$20/bag' },
    ],
  },
  {
    category: 'Organic Matter & Structure',
    items: [
      { name: 'Compost (finished)', rate: '2–4" layer, tilled in', purpose: 'Feeds soil biology, improves structure, adds nutrients, increases water retention.', cost: '$30–$60/cubic yard' },
      { name: 'Aged Manure (cow/horse)', rate: '1–2" layer', purpose: 'Nitrogen-rich organic matter. Must be aged 6+ months to avoid burning plants.', cost: '$20–$40/yard or free from local farms' },
      { name: 'Worm Castings (Vermicompost)', rate: '1/4" top dress or mixed in', purpose: 'Premium biology-rich amendment. Humic acids, beneficial microbes, gentle NPK.', cost: '$20–$40/bag' },
      { name: 'Peat Moss / Coco Coir', rate: 'Mix 20–30% into beds', purpose: 'Improves drainage, lowers pH slightly, holds moisture. Coir is more sustainable.', cost: '$15–$30/bale' },
      { name: 'Perlite / Pumice', rate: 'Mix 10–20% into heavy soil', purpose: 'Drainage and aeration. Pumice is local to Utah (volcanic) and permanent.', cost: '$15–$30/bag' },
    ],
  },
  {
    category: 'Nutrients',
    items: [
      { name: 'Blood Meal (N)', rate: '1–2 lbs per 100 sq ft', purpose: 'Fast-release nitrogen for leafy growth. 12-0-0.', cost: '$15–$25/bag' },
      { name: 'Bone Meal (P)', rate: '2–3 lbs per 100 sq ft', purpose: 'Slow-release phosphorus for roots and flowers. 3-15-0.', cost: '$12–$20/bag' },
      { name: 'Kelp Meal (K + trace)', rate: '1–2 lbs per 100 sq ft', purpose: 'Potassium, trace minerals, growth hormones. Feeds soil biology.', cost: '$15–$30/bag' },
      { name: 'Azomite (trace minerals)', rate: '1–2 lbs per 100 sq ft', purpose: 'Volcanic rock dust. 70+ trace minerals. Mined in Utah! Long-lasting.', cost: '$15–$30/bag' },
      { name: 'Fish Bone Meal', rate: '1–2 lbs per 100 sq ft', purpose: 'Balanced NPK (4-12-0) + calcium. Great for tomatoes and fruiting crops.', cost: '$15–$25/bag' },
    ],
  },
  {
    category: 'Biology Boosters',
    items: [
      { name: 'Mycorrhizal Inoculant', rate: 'Per product label (at planting)', purpose: 'Colonizes roots, extends nutrient reach 100–1000×. Endo- for most crops, ecto- for trees.', cost: '$15–$30/bag' },
      { name: 'Compost Tea (brewed)', rate: '1 gal per 10 sq ft, weekly', purpose: 'Aerated 24–48 hrs. Explodes beneficial bacteria and fungi populations in soil.', cost: '$0–$10/batch (DIY with compost + molasses)' },
      { name: 'EM-1 (Effective Microorganisms)', rate: '1:1000 dilution', purpose: 'Lactic acid bacteria, yeasts, photosynthetic bacteria. Suppresses pathogens.', cost: '$25–$35/bottle' },
      { name: 'Biochar', rate: '5–10% mix into soil', purpose: 'Charcoal that holds nutrients and water, houses microbes. "Charge" with compost tea before applying.', cost: '$15–$40/bag' },
    ],
  },
]

const coverCrops = [
  { name: 'Crimson Clover', type: 'Nitrogen fixer', season: 'Fall/Spring', notes: 'Fixes 80–150 lbs N/acre. Beautiful red flowers. Mow and incorporate before seed set.' },
  { name: 'Winter Rye', type: 'Erosion control, biomass', season: 'Fall (Sept–Oct)', notes: 'Grows through winter. Massive root system breaks up compaction. Allelopathic — till in 2 weeks before planting.' },
  { name: 'Daikon Radish', type: 'Compaction breaker', season: 'Late summer/fall', notes: 'Huge taproot (12–24") breaks hardpan. Winter-kills and decomposes, leaving channels in soil.' },
  { name: 'Buckwheat', type: 'Pollinator, quick cover', season: 'Summer', notes: 'Grows to maturity in 30 days. Attracts pollinators. Mines phosphorus from soil.' },
  { name: 'Austrian Winter Peas', type: 'Nitrogen fixer', season: 'Fall', notes: 'Fixes N, good biomass. Combine with rye for a powerful mix.' },
]

export default function SoilPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-800/30 border border-amber-600/30 rounded-full text-sm text-amber-300 mb-6">
          <Layers className="w-4 h-4" />
          Soil Testing, Amendments & Living Soil
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-4">
          <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-orange-500 bg-clip-text text-transparent">
            Soil Plan
          </span>
        </h1>
        <p className="text-lg text-amber-200/50 max-w-3xl">
          Building living, biologically-active soil is the foundation of everything. Test first, amend strategically, and feed the soil food web — your plants will thrive.
        </p>
      </motion.div>

      {/* Utah Soil Context */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <div className="p-6 bg-amber-900/15 border border-amber-700/20 rounded-2xl">
          <h3 className="text-lg font-bold text-amber-300 mb-3">Riverton / Salt Lake Valley Soil Profile</h3>
          <div className="text-sm text-amber-200/60 space-y-2">
            <p><strong className="text-white">Typical characteristics:</strong> Alkaline (pH 7.5–8.5), clay-heavy or silty-clay loam, moderate organic matter, high in calcium carbonate. Well-drained in gravelly areas, poorly drained in heavy clay zones.</p>
            <p><strong className="text-white">Common challenges:</strong> High pH locks out iron, zinc, manganese (chlorosis in plants). Compaction from clay. Low organic matter compared to eastern soils. Saline patches near old lake bed deposits.</p>
            <p><strong className="text-white">Advantages:</strong> Mineral-rich from ancient Lake Bonneville deposits. Good base of calcium and magnesium. Azomite (volcanic trace mineral deposit) is mined locally in Utah — cheap and available.</p>
            <p><strong className="text-white">Strategy:</strong> Lower pH with sulfur and organic matter, build structure with compost and pumice, inoculate with biology, and irrigate with RO water (to stop adding more minerals and salts).</p>
          </div>
        </div>
      </motion.div>

      {/* Soil Testing */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
          <Beaker className="w-7 h-7 text-amber-400" />
          <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">Step 1: Test Your Soil</span>
        </h2>
        <p className="text-sm text-amber-200/50 mb-4">Before amending anything, test. Take samples from 6–8" depth in each zone (hemp field, garden beds, fruit tree area, greenhouse). Mix into one composite sample per zone.</p>
        <div className="space-y-2">
          {soilTests.map((t, i) => (
            <div key={i} className="p-4 bg-amber-900/10 border border-amber-700/12 rounded-xl">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                <h4 className="font-bold text-white text-sm">{t.test}</h4>
                <span className="text-xs px-2 py-0.5 bg-amber-800/30 rounded-full text-amber-300">{t.cost}</span>
                <span className="text-xs px-2 py-0.5 bg-blue-800/30 rounded-full text-blue-300">{t.turnaround}</span>
              </div>
              <p className="text-sm text-amber-200/40 mb-1"><strong>Lab:</strong> {t.lab}</p>
              <p className="text-xs text-amber-400/40">{t.notes}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-amber-400/40">USU Extension Soil Lab: <a href="https://extension.usu.edu/files/publications/publication/AG_Soils_2008-01pr.pdf" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300">extension.usu.edu</a> | Logan Labs: <a href="https://loganlabs.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300">loganlabs.com</a></p>
      </motion.div>

      {/* Amendments */}
      {amendments.map((cat, ci) => (
        <motion.div key={ci} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-2xl font-black mb-6 text-white">{cat.category}</h2>
          <div className="space-y-2">
            {cat.items.map((item, i) => (
              <div key={i} className="p-4 bg-amber-900/8 border border-amber-700/10 rounded-xl">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h4 className="font-bold text-white text-sm">{item.name}</h4>
                  <span className="text-xs px-2 py-0.5 bg-emerald-800/30 rounded-full text-emerald-300">{item.rate}</span>
                  <span className="text-xs px-2 py-0.5 bg-amber-800/30 rounded-full text-amber-300">{item.cost}</span>
                </div>
                <p className="text-sm text-amber-200/40">{item.purpose}</p>
              </div>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Cover Crops */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
          <Sprout className="w-7 h-7 text-emerald-400" />
          <span className="text-white">Cover Crops & Green Manure</span>
        </h2>
        <div className="space-y-2">
          {coverCrops.map((crop, i) => (
            <div key={i} className="p-4 bg-emerald-900/10 border border-emerald-700/12 rounded-xl">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                <h4 className="font-bold text-white text-sm">{crop.name}</h4>
                <span className="text-xs px-2 py-0.5 bg-emerald-800/30 rounded-full text-emerald-300">{crop.type}</span>
                <span className="text-xs px-2 py-0.5 bg-blue-800/30 rounded-full text-blue-300">{crop.season}</span>
              </div>
              <p className="text-sm text-emerald-200/40">{crop.notes}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Composting & Vermicomposting */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
          <ThermometerSun className="w-7 h-7 text-amber-400" />
          <span className="bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent">Composting & Vermicomposting</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-6 bg-amber-900/10 border border-amber-700/15 rounded-2xl">
            <h3 className="text-lg font-bold text-amber-300 mb-3">Hot Compost (Thermophilic)</h3>
            <div className="space-y-2 text-sm text-amber-200/50">
              <p><strong className="text-white">Ratio:</strong> 25–30:1 Carbon to Nitrogen. ~3 parts brown (leaves, straw, cardboard) to 1 part green (kitchen scraps, grass, manure).</p>
              <p><strong className="text-white">Pile size:</strong> Minimum 3×3×3 ft to generate heat. Use a 3-bin system for continuous production.</p>
              <p><strong className="text-white">Process:</strong> Layer greens and browns, moisten to damp sponge. Internal temp should reach 130–160°F within days. Turn every 3–5 days. Finished in 4–8 weeks.</p>
              <p><strong className="text-white">Inputs from the farm:</strong> Hemp stalks/leaves, mushroom spent substrate (excellent!), kitchen scraps, garden waste, straw mulch, cardboard.</p>
              <p><strong className="text-white">Tools:</strong> Compost thermometer ($15), pitchfork, 3-bin pallet system (free from pallets).</p>
            </div>
          </div>
          <div className="p-6 bg-emerald-900/10 border border-emerald-700/15 rounded-2xl">
            <h3 className="text-lg font-bold text-emerald-300 mb-3">Vermicomposting (Worm Bin)</h3>
            <div className="space-y-2 text-sm text-emerald-200/50">
              <p><strong className="text-white">Species:</strong> Red wigglers (Eisenia fetida). 1 lb worms (~1,000) processes ~½ lb food scraps/day.</p>
              <p><strong className="text-white">Bin:</strong> Stacking tray system (Worm Factory 360, ~$100) or DIY from Rubbermaid totes. Keep in garage/shed (60–80°F).</p>
              <p><strong className="text-white">Feed:</strong> Fruit/veggie scraps, coffee grounds, shredded paper, cardboard. Avoid citrus, onion, meat, dairy.</p>
              <p><strong className="text-white">Harvest:</strong> Every 3–4 months. Worm castings are the single best soil amendment — rich in humic acid, beneficial microbes, plant-available nutrients.</p>
              <p><strong className="text-white">Worm tea:</strong> Steep castings in RO water with molasses + air pump for 24–48 hrs. Spray as foliar feed or soil drench. Incredible biology booster.</p>
              <p><strong className="text-white">Cost:</strong> ~$50–$120 setup + $30 for 1 lb worms. Self-sustaining after that.</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Seasonal Soil Care Calendar */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
          <Sprout className="w-7 h-7 text-emerald-400" />
          <span className="text-white">Seasonal Soil Care Schedule</span>
        </h2>
        <div className="space-y-3">
          {[
            { season: 'Early Spring (Mar)', tasks: ['Send soil samples to lab for testing (every zone)', 'Apply elemental sulfur if pH too high (results-based)', 'Top-dress all beds with 1–2" finished compost', 'Add mycorrhizal inoculant to planting holes', 'Turn compost piles, start new batch'] },
            { season: 'Spring (Apr–May)', tasks: ['Mulch all beds 2–4" with straw after planting', 'Begin weekly compost tea applications', 'Side-dress heavy feeders (tomatoes, corn) with worm castings', 'Plant cover crops in any fallow beds', 'Monitor soil moisture — start irrigation from RO tank'] },
            { season: 'Summer (Jun–Aug)', tasks: ['Maintain mulch layer — replenish as needed', 'Continue compost tea every 1–2 weeks', 'Add kelp meal mid-season for potassium boost', 'Monitor for salt buildup (white crust) — flush with extra RO water if needed', 'Feed worm bin consistently for fall castings harvest'] },
            { season: 'Fall (Sep–Oct)', tasks: ['Plant cover crops (rye + crimson clover mix) in all empty beds', 'Harvest worm castings — top-dress perennial beds', 'Chop and drop spent plants as green mulch (not diseased ones)', 'Add spent mushroom substrate to compost pile', 'Spread 1" layer of aged compost on all beds before winter'] },
            { season: 'Winter (Nov–Feb)', tasks: ['Leave cover crops growing — roots feed soil biology through winter', 'Plan next season amendments based on fall soil test', 'Maintain worm bin indoors (garage)', 'Build/repair compost bins', 'Order amendments for spring (sulfur, azomite, kelp meal, etc.)'] },
          ].map((item, i) => (
            <div key={i} className="p-5 bg-emerald-900/10 border border-emerald-700/12 rounded-xl">
              <h4 className="font-bold text-emerald-300 text-sm mb-2">{item.season}</h4>
              <ul className="space-y-1">
                {item.tasks.map((task, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-emerald-200/50">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Living Soil Summary */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="p-6 bg-gradient-to-br from-amber-500/10 to-emerald-500/5 border-2 border-amber-500/30 rounded-2xl">
          <h3 className="text-lg font-bold text-amber-300 mb-3">The Living Soil Approach</h3>
          <div className="text-sm text-amber-200/60 space-y-2">
            <p><strong className="text-white">Feed the soil, not the plant.</strong> In living soil systems, you build a thriving microbial ecosystem (bacteria, fungi, protozoa, nematodes, earthworms) that naturally converts organic matter into plant-available nutrients.</p>
            <p><strong className="text-white">Why RO water is critical:</strong> Chlorinated tap water kills these microbes on contact. Every time you water with tap, you're undoing your soil-building work. RO water lets your biology thrive — this is the single biggest advantage of our water system.</p>
            <p><strong className="text-white">No-till when possible:</strong> After initial bed preparation, minimize soil disturbance. Top-dress with compost and mulch. Let the biology do the mixing. Tilling destroys fungal networks.</p>
            <p><strong className="text-white">Closed-loop system:</strong> Hemp waste + mushroom spent substrate + kitchen scraps + garden debris → compost pile → back to beds. The farm feeds itself.</p>
            <p><strong className="text-white">Estimated soil amendment budget (year 1):</strong> $200–$500 for compost, amendments, and inoculants. Year 2+ drops significantly as biology builds, cover crops contribute, and your own compost/castings supply the bulk of fertility.</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
