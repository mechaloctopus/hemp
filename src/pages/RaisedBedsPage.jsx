import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutGrid, Ruler, TreePine, Droplets, Layers, CheckCircle2,
  ChevronLeft, ChevronRight, X, Maximize2, DollarSign, Hammer,
  ExternalLink, Sprout, ShieldCheck, Leaf
} from 'lucide-react'

const gardenBedImages = [
  '13aafdd4ac5af83f107da27ccbd70344.jpg',
  '30740e1b1957f24a10e76e8c18f0b7ec.jpg',
  '8867dc45705d9edb748b3cc15850db4c.jpg',
  '89ff76baaced76344bb6ca69eb2ca004.jpg',
  '91aRki7PLVL._SX425_.jpg',
  '9bead08ec9de8ed28a9e1408e48e409d.jpg',
  'a7fe6f6cb96c7a29a34e330849d5af61.jpg',
  'b9951491cfb2021126b1bf8a96abb9a5.jpg',
  'c272a08c658ce8b914fd6e16a7a2fc41.jpg',
  'd8057ac3101eea7da54cef6e1e51af68.jpg',
  'e337f2aaed20fc0ebad0ff894614a8d8.jpg',
  'ea0c276be5b61c77f54f48f077404c6c.jpg',
  'f3e67195ca9568e845d155c36b792344.jpg',
  'f4ec8f5007f92737bc33c7d3c982ab18.jpg',
  'f8f6a30d6f524ba9de773b2546998fa5.jpg',
]

const bedTypes = [
  {
    name: 'Standard Wood Raised Bed (4×8 ft)',
    material: 'Cedar, redwood, or Douglas fir — rot-resistant',
    height: '10–12 inches',
    cost: '$50–$150 DIY / $100–$300 pre-built',
    pros: ['Most versatile size', 'Easy to reach center from both sides', 'Standard lumber dimensions = no waste', 'Deep enough for most vegetables'],
    cons: ['Wood rots in 5–10 years (cedar lasts longest)', 'Needs re-building eventually'],
    bestFor: 'Vegetables, herbs, salad greens, peppers, beans',
    fillCost: '~$80–$150 for quality soil mix (32 cu ft)',
  },
  {
    name: 'Tall / Deep Raised Bed (4×8 ft × 24")',
    material: 'Cedar, galvanized steel, or block',
    height: '18–24 inches',
    cost: '$100–$300 DIY / $200–$500 pre-built',
    pros: ['No bending — ergonomic', 'Great for root vegetables (carrots, parsnips, potatoes)', 'Can garden over concrete/gravel', 'Warms up faster in spring'],
    cons: ['Much more soil needed (64 cu ft for 4×8×24")', 'More expensive to fill', 'Can dry out faster — needs more watering'],
    bestFor: 'Root vegetables, deep-rooted herbs, tomatoes, disabled/elderly access',
    fillCost: '~$150–$300 for quality soil mix',
  },
  {
    name: 'Galvanized Steel / Metal Beds',
    material: 'Corrugated galvanized steel, Corten steel, or powder-coated aluminum',
    height: '12–24 inches',
    cost: '$80–$250 per bed',
    pros: ['Extremely durable (20+ years)', 'Modern aesthetic', 'No rot, no termites', 'Quick assembly (bolt together)'],
    cons: ['Can heat up in Utah summer sun (mulch heavily)', 'Galvanized zinc safe for soil but debated by some organic purists', 'Sharp edges if not rolled/capped'],
    bestFor: 'Long-term permanent beds, modern farm aesthetic, all crops',
    fillCost: 'Same as wood equivalent',
  },
  {
    name: 'Concrete Block / Cinder Block Beds',
    material: 'Standard 8×8×16" CMU blocks',
    height: '8–24 inches (1–3 courses)',
    cost: '$1.50–$2.50 per block (~$50–$120 per 4×8 bed)',
    pros: ['Cheapest permanent option', 'Thermal mass (warms soil, extends season)', 'Holes can be planted with herbs', 'Will last forever'],
    cons: ['Heavy — permanent placement', 'Can leach lime (raises pH slightly)', 'Not the prettiest (but can be stuccoed/painted)'],
    bestFor: 'Budget builds, permanent installation, thermal mass for season extension',
    fillCost: 'Same as wood equivalent',
  },
  {
    name: 'Hugelkultur Raised Beds',
    material: 'Logs, branches, leaves, compost, soil — layered',
    height: '18–36+ inches (mounded)',
    cost: '$0–$50 (free if you have wood/compost)',
    pros: ['Self-watering (decomposing wood acts as sponge)', 'Incredibly fertile as wood breaks down', 'Uses waste wood and brush', 'No purchased frame materials needed'],
    cons: ['Takes 1–2 years to hit peak performance', 'Nitrogen tie-up in year 1 (add extra nitrogen)', 'Settles over time — needs topping up', 'Looks messy initially'],
    bestFor: 'Permaculture, drought areas (perfect for Utah), long-term soil building, squash/melons',
    fillCost: '$0–$30 (compost to top)',
  },
  {
    name: 'Fabric / Grow Bag Beds',
    material: 'Heavy-duty geotextile fabric (200+ GSM)',
    height: '12–18 inches',
    cost: '$15–$60 per bed',
    pros: ['Air-prunes roots (no root circling)', 'Excellent drainage', 'Portable — rearrange anytime', 'Folds for storage', 'Cheap to try'],
    cons: ['Fabric degrades in UV (2–5 years)', 'Can dry out quickly in Utah heat', 'Looks less permanent'],
    bestFor: 'Temporary setups, renters, testing layouts, potatoes, herbs',
    fillCost: 'Same as equivalent volume',
  },
  {
    name: 'Keyhole Garden',
    material: 'Stone, brick, galvanized steel, or reclaimed materials',
    height: '24–36 inches',
    cost: '$50–$200 DIY',
    pros: ['Built-in composting basket in center', 'Self-fertilizing — add kitchen scraps to center', 'Efficient shape (reach entire bed from keyhole notch)', 'Beautiful permaculture design'],
    cons: ['Unusual shape — harder to cover with row cover', 'Center basket needs ongoing feeding', 'Takes more skill to build well'],
    bestFor: 'Permaculture design, kitchen gardens, composting integration',
    fillCost: '~$100–$200 for quality soil',
  },
  {
    name: 'Wicking Bed (Self-Watering)',
    material: 'Any frame + waterproof liner + gravel reservoir underneath',
    height: '18–24 inches total (6" reservoir + 12–18" soil)',
    cost: '$100–$250 DIY',
    pros: ['Drastically reduces watering (perfect for Utah drought)', 'Bottom-up watering = no wet foliage (less disease)', 'Consistent moisture = happy plants', 'Water reservoir lasts days'],
    cons: ['More complex to build (liner, overflow, fill tube)', 'Heavy when full of water', 'Can become anaerobic if poorly designed'],
    bestFor: 'Water conservation, Utah summers, leafy greens, consistent moisture-lovers (celery, lettuce)',
    fillCost: '~$50 gravel + $100–$200 soil',
  },
]

const soilRecipe = [
  { ingredient: 'Quality Compost', ratio: '33–40%', purpose: 'Nutrients, biology, water retention', source: 'Local landscape supply or DIY compost pile' },
  { ingredient: 'Topsoil / Garden Soil', ratio: '33–40%', purpose: 'Bulk, mineral content, structure', source: 'Local landscape supply (screened)' },
  { ingredient: 'Perlite or Pumice', ratio: '10–15%', purpose: 'Drainage, aeration, prevents compaction', source: 'Garden center. Pumice is local to Utah.' },
  { ingredient: 'Peat Moss or Coco Coir', ratio: '10–15%', purpose: 'Moisture retention, slight acidity, lightens mix', source: 'Garden center. Coir is more sustainable.' },
  { ingredient: 'Worm Castings', ratio: '5–10%', purpose: 'Premium biology, humic acids, gentle nutrients', source: 'Garden center or vermicompost bin' },
  { ingredient: 'Azomite / Rock Dust', ratio: '1–2 cups per bed', purpose: '70+ trace minerals. Mined in Utah!', source: 'Garden center or online' },
  { ingredient: 'Mycorrhizal Inoculant', ratio: 'Per label (at planting)', purpose: 'Colonizes roots, extends nutrient reach', source: 'Garden center (Great White, MycoApply)' },
]

const layoutTips = [
  { tip: 'Orient beds North-South', reason: 'Maximizes sun exposure on both sides throughout the day. Tall plants on north end, short on south.' },
  { tip: 'Leave 2–3 ft paths between beds', reason: 'Wheelbarrow access, comfortable kneeling, room for hoses and tools. Can mulch paths with wood chips.' },
  { tip: 'Standard 4 ft wide maximum', reason: 'You can reach the center from either side without stepping into the bed (compacting soil). 3 ft wide if only accessible from one side.' },
  { tip: 'Group by water needs', reason: 'Drought-tolerant herbs together, thirsty vegetables together. Makes irrigation zoning simple.' },
  { tip: 'Add drip irrigation to every bed', reason: '½" mainline along the bed, ¼" drip emitters every 6–12". Connect to RO tank with timer. Consistent, efficient, hands-off.' },
  { tip: 'Mulch 2–4 inches on top', reason: 'Straw, wood chips, or shredded leaves. Retains moisture (huge in Utah), suppresses weeds, feeds soil biology, moderates temperature.' },
  { tip: 'Consider Succession Planting', reason: 'When one crop finishes, immediately replant the space. Lettuce → beans → fall kale. Maximizes yield per square foot.' },
  { tip: 'Use Square Foot Gardening spacing', reason: 'Intensive planting in a grid. More yield per bed. Reference: Mel Bartholomew\'s "Square Foot Gardening" book.' },
]

export default function RaisedBedsPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const nextImage = () => setLightboxIndex((prev) => (prev + 1) % gardenBedImages.length)
  const prevImage = () => setLightboxIndex((prev) => (prev - 1 + gardenBedImages.length) % gardenBedImages.length)

  useEffect(() => {
    const handleKey = (e) => {
      if (!lightboxOpen) return
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'Escape') setLightboxOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxOpen])

  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-800/30 border border-lime-600/30 rounded-full text-sm text-lime-300 mb-6">
          <LayoutGrid className="w-4 h-4" />
          Raised Bed Design & Inspiration
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-4">
          <span className="bg-gradient-to-r from-lime-300 via-green-400 to-emerald-500 bg-clip-text text-transparent">
            Raised Garden Beds
          </span>
        </h1>
        <p className="text-lg text-lime-200/50 max-w-3xl">
          Design options, build materials, soil recipes, and layout strategies for raised bed gardening on the Riverton property. Plus an inspiration gallery of bed designs and configurations.
        </p>
      </motion.div>

      {/* ──── Inspiration Gallery ──── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-black mb-6 flex items-center gap-3">
          <Maximize2 className="w-7 h-7 text-lime-400" />
          <span className="bg-gradient-to-r from-lime-300 to-emerald-500 bg-clip-text text-transparent">Inspiration Gallery</span>
        </h2>
        <p className="text-sm text-lime-200/40 mb-6">Click any image to view full size. Use arrow keys to navigate.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {gardenBedImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer border border-emerald-700/15 hover:border-lime-500/40 transition-all hover:shadow-lg hover:shadow-lime-500/10"
              onClick={() => openLightbox(i)}
            >
              <img
                src={`/gardenbeds/${img}`}
                alt={`Garden bed idea ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-white/80" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxOpen(false) }}
              className="absolute top-4 right-4 p-2 text-white/60 hover:text-white z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prevImage() }}
              className="absolute left-4 p-3 text-white/60 hover:text-white z-10 bg-white/5 rounded-full hover:bg-white/10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage() }}
              className="absolute right-4 p-3 text-white/60 hover:text-white z-10 bg-white/5 rounded-full hover:bg-white/10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={`/gardenbeds/${gardenBedImages[lightboxIndex]}`}
              alt={`Garden bed ${lightboxIndex + 1}`}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-4 text-center text-white/40 text-sm">
              {lightboxIndex + 1} / {gardenBedImages.length} — Arrow keys to navigate, Esc to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ──── Bed Types ──── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-black mb-6 flex items-center gap-3">
          <Hammer className="w-7 h-7 text-amber-400" />
          <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">Bed Types & Materials</span>
        </h2>
        <div className="space-y-4">
          {bedTypes.map((bed, i) => (
            <div key={i} className="p-6 bg-emerald-900/10 border border-emerald-700/12 rounded-2xl hover:border-emerald-500/20 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                <h3 className="text-lg font-bold text-white">{bed.name}</h3>
                <span className="text-xs px-3 py-1 bg-amber-800/30 rounded-full text-amber-300">{bed.cost}</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div className="text-sm">
                  <span className="text-emerald-400/50">Material: </span>
                  <span className="text-white/60">{bed.material}</span>
                </div>
                <div className="text-sm">
                  <span className="text-emerald-400/50">Height: </span>
                  <span className="text-white/60">{bed.height}</span>
                </div>
                <div className="text-sm">
                  <span className="text-emerald-400/50">Best for: </span>
                  <span className="text-lime-300/60">{bed.bestFor}</span>
                </div>
                <div className="text-sm">
                  <span className="text-emerald-400/50">Fill cost: </span>
                  <span className="text-amber-300/60">{bed.fillCost}</span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">Pros</h4>
                  <ul className="space-y-1">
                    {bed.pros.map((p, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-emerald-200/50">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-red-400/60 uppercase tracking-wider mb-2">Cons</h4>
                  <ul className="space-y-1">
                    {bed.cons.map((c, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-red-200/40">
                        <span className="text-red-400 mt-1">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ──── Soil Recipe ──── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-black mb-6 flex items-center gap-3">
          <Layers className="w-7 h-7 text-amber-400" />
          <span className="bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent">Raised Bed Soil Recipe</span>
        </h2>
        <div className="p-6 bg-gradient-to-br from-amber-900/15 to-orange-900/10 border border-amber-600/20 rounded-2xl">
          <p className="text-sm text-amber-200/60 mb-6">
            Don't use native Riverton clay alone — it compacts in beds. This mix gives you perfect drainage, fertility, and biology from day one. Fill cost for a 4×8×12" bed: ~$80–$150.
          </p>
          <div className="space-y-2 mb-6">
            {soilRecipe.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-3 bg-black/15 rounded-xl">
                <div className="w-16 text-center shrink-0">
                  <div className="text-lg font-black text-amber-400">{item.ratio}</div>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white text-sm">{item.ingredient}</div>
                  <div className="text-xs text-amber-200/40">{item.purpose}</div>
                </div>
                <div className="text-xs text-amber-400/40 hidden sm:block max-w-48">{item.source}</div>
              </div>
            ))}
          </div>
          <div className="p-4 bg-emerald-900/20 border border-emerald-600/15 rounded-xl">
            <p className="text-sm text-emerald-300/60">
              <strong className="text-emerald-300">Pro tip:</strong> After initial fill, <strong>never dig or till the bed again</strong>. Top-dress with 1–2" of compost each season. The biology does the mixing. Water only with <a href="/water" className="text-emerald-400 underline hover:text-emerald-300">RO-filtered, pH-adjusted water</a> to protect your soil life.
            </p>
          </div>
        </div>
      </motion.div>

      {/* ──── Layout Tips ──── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-black mb-6 flex items-center gap-3">
          <Ruler className="w-7 h-7 text-lime-400" />
          <span className="bg-gradient-to-r from-lime-300 to-emerald-500 bg-clip-text text-transparent">Layout & Design Tips</span>
        </h2>
        <div className="space-y-3">
          {layoutTips.map((item, i) => (
            <div key={i} className="p-4 bg-emerald-900/10 border border-emerald-700/12 rounded-xl">
              <h4 className="font-bold text-white text-sm mb-1">{item.tip}</h4>
              <p className="text-sm text-emerald-200/40">{item.reason}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ──── Cost Estimator ──── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-black mb-6 flex items-center gap-3">
          <DollarSign className="w-7 h-7 text-amber-400" />
          <span className="text-white">Cost Estimates — Full Bed Setup</span>
        </h2>
        <div className="p-6 bg-emerald-900/15 border border-emerald-700/20 rounded-2xl">
          <p className="text-sm text-emerald-200/50 mb-4">Assuming 6–10 raised beds (4×8 ft) for the garden area:</p>
          <div className="space-y-2 mb-4">
            {[
              { item: 'Bed frames (cedar, 6–10 beds)', low: 300, high: 1500 },
              { item: 'Soil fill (all beds)', low: 500, high: 1500 },
              { item: 'Drip irrigation system', low: 100, high: 300 },
              { item: 'Mulch (straw/wood chips)', low: 50, high: 150 },
              { item: 'Seeds & starts', low: 50, high: 200 },
              { item: 'Worm castings, amendments, inoculant', low: 50, high: 150 },
              { item: 'Tools (if needed)', low: 50, high: 200 },
            ].map((row, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-emerald-800/15 last:border-0 text-sm">
                <span className="text-emerald-200/60">{row.item}</span>
                <span className="text-white font-medium">${row.low}–${row.high}</span>
              </div>
            ))}
            <div className="flex items-center justify-between pt-3 border-t-2 border-emerald-500/20">
              <span className="font-bold text-emerald-300">Total Estimated Range</span>
              <span className="text-xl font-black text-emerald-300">$1,100–$4,000</span>
            </div>
          </div>
          <p className="text-xs text-emerald-400/40">This is a one-time investment. Beds last 5–20+ years depending on material. Annual costs drop to $100–$300 (soil top-dress, seeds, mulch).</p>
        </div>
      </motion.div>

      {/* ──── Our Recommendation ──── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="p-6 bg-gradient-to-br from-lime-500/10 to-emerald-500/5 border-2 border-lime-500/30 rounded-2xl">
          <h3 className="text-lg font-bold text-lime-300 mb-3 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5" /> Our Recommended Setup for the Riverton Acre
          </h3>
          <div className="text-sm text-lime-200/60 space-y-2">
            <p><strong className="text-white">6–8 cedar raised beds (4×8×12")</strong> for the main vegetable and herb garden. Cedar resists rot naturally — no chemicals, no liners needed. Standard lumber dimensions (2×12 cedar boards) = easy build.</p>
            <p><strong className="text-white">2 tall galvanized steel beds (4×8×24")</strong> for root vegetables (carrots, potatoes, parsnips) and deep-rooted plants. Permanent, modern look, zero maintenance.</p>
            <p><strong className="text-white">1 hugelkultur mound</strong> near the fruit tree area for squash, melons, and gourds. Free to build, self-watering, builds incredible soil over time.</p>
            <p><strong className="text-white">1 wicking bed</strong> for lettuce/greens — reduces watering dramatically in Utah summers.</p>
            <p><strong className="text-white">All beds connected to the RO water system</strong> via drip irrigation on a timer. Mulched with straw. Filled with the soil recipe above. Inoculated with mycorrhizae at planting.</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <a href="/water" className="text-xs px-3 py-1.5 bg-blue-800/20 border border-blue-600/20 rounded-full text-blue-300 hover:text-blue-200">Water Plan →</a>
            <a href="/soil" className="text-xs px-3 py-1.5 bg-amber-800/20 border border-amber-600/20 rounded-full text-amber-300 hover:text-amber-200">Soil Plan →</a>
            <a href="/garden" className="text-xs px-3 py-1.5 bg-emerald-800/20 border border-emerald-600/20 rounded-full text-emerald-300 hover:text-emerald-200">Crop Plan →</a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
