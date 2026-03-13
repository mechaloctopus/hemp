import { motion } from 'framer-motion'
import {
  TreePine, Scissors, Droplets, CheckCircle2, AlertTriangle,
  Thermometer, Calendar, Sprout, ExternalLink, Leaf
} from 'lucide-react'

const cloneableTrees = [
  { name: 'Apple', method: 'Grafting (preferred), softwood cuttings (harder)', rootability: 'Moderate — grafting onto rootstock is far more reliable', timing: 'Grafting: late winter/early spring (Feb–Mar). Cuttings: June (softwood).', notes: 'Most apple varieties do NOT root well from cuttings. Grafting onto M9, M26, or M111 rootstock is standard. Scion wood from dormant branches.', utahVariety: 'Honeycrisp, Fuji, Gala, Jonathan, Golden Delicious' },
  { name: 'Cherry (Sweet & Sour)', method: 'Softwood cuttings, grafting', rootability: 'Moderate — sour cherries easier than sweet', timing: 'Softwood cuttings: late June. Semi-hardwood: July–Aug.', notes: 'Sour cherry (Montmorency) roots better from cuttings. Sweet cherry usually grafted onto Mazzard or Gisela rootstock.', utahVariety: 'Bing, Rainier, Montmorency, Stella' },
  { name: 'Peach / Nectarine', method: 'Softwood cuttings, seed (true-ish), grafting', rootability: 'Good — one of the easier fruit trees to root from cuttings', timing: 'Softwood cuttings: June–July. Take 6–8" current-year growth.', notes: 'Peaches are relatively easy from cuttings with rooting hormone. Dip in IBA 3000–5000 ppm. Mist propagation or humidity dome. Seed also works (variable genetics).', utahVariety: 'Redhaven, Elberta, Contender, Reliance (cold-hardy)' },
  { name: 'Plum', method: 'Softwood/hardwood cuttings, grafting', rootability: 'Good — European plums root well from hardwood cuttings', timing: 'Hardwood: Dec–Feb. Softwood: June.', notes: 'European plums (Stanley, Italian) root readily from hardwood cuttings in winter. Japanese plums better grafted.', utahVariety: 'Stanley, Italian, Santa Rosa, Shiro' },
  { name: 'Fig', method: 'Hardwood cuttings (easiest fruit tree to clone)', rootability: 'Excellent — nearly 100% success', timing: 'Hardwood cuttings: late fall/winter (dormant). 8–12" pieces.', notes: 'The easiest fruit tree to propagate. Stick dormant cuttings in moist potting mix, keep warm. Roots in 3–6 weeks. Will need greenhouse protection in Riverton winters.', utahVariety: 'Chicago Hardy, Brown Turkey, Celeste' },
  { name: 'Grape', method: 'Hardwood cuttings', rootability: 'Excellent', timing: 'Hardwood: Jan–Mar. 3-node cuttings.', notes: 'Extremely easy from dormant cuttings. Take 3-node pieces, bury 2 nodes. Nearly 100% success. Table and wine varieties.', utahVariety: 'Concord, Flame Seedless, Mars, Himrod' },
  { name: 'Pear', method: 'Grafting (preferred), hardwood cuttings (slow)', rootability: 'Difficult from cuttings — grafting is standard', timing: 'Grafting: Feb–Mar. Cuttings: Dec (hardwood).', notes: 'Pears are notoriously difficult from cuttings — very low success rate. Always graft onto OHxF or Pyrus calleryana rootstock.', utahVariety: 'Bartlett, Anjou, Bosc, Moonglow' },
  { name: 'Pomegranate', method: 'Hardwood cuttings', rootability: 'Good to Excellent', timing: 'Hardwood: Feb–Mar. 8–10" cuttings.', notes: 'Roots well from dormant cuttings with rooting hormone. Needs greenhouse or protected south-facing wall in Riverton.', utahVariety: 'Wonderful, Russian varieties (cold-hardy)' },
  { name: 'Elderberry', method: 'Hardwood or softwood cuttings', rootability: 'Excellent', timing: 'Hardwood: late fall/winter. Softwood: June.', notes: 'Extremely easy. Take 8–12" cuttings, stick in ground or pots. Roots fast. Great for elderberry syrup and wine.', utahVariety: 'Adams, York, Bob Gordon' },
  { name: 'Mulberry', method: 'Hardwood or softwood cuttings', rootability: 'Good', timing: 'Softwood: June–July. Hardwood: Dec–Feb.', notes: 'Roots readily. Fast-growing tree. White mulberry (Morus alba) is more cold-hardy for Utah.', utahVariety: 'Illinois Everbearing, Pakistan, Shangri-La' },
]

const rootingProtocol = [
  { step: 'Select healthy mother tree', detail: 'Choose disease-free, productive trees with good fruit. Current-year growth for softwood; last-year for hardwood.' },
  { step: 'Take cuttings properly', detail: 'Use sharp, sterilized pruners. Softwood: 4–6" tip cuttings with 3–4 leaf nodes, early morning. Hardwood: 8–12" pencil-thick dormant wood. Cut just below a node at bottom, just above at top.' },
  { step: 'Prepare cuttings', detail: 'Remove lower leaves (keep top 2–3). Wound the base (scrape bark on one side, 1" long). This exposes cambium for rooting.' },
  { step: 'Apply rooting hormone', detail: 'Dip cut end 1" into IBA rooting hormone. Powder: Rootone or Garden Safe (0.1% IBA for easy species). Gel: Clonex (0.3% IBA). Liquid: Dip\'n Grow diluted (1:10 for softwood, 1:5 for hardwood).' },
  { step: 'Plant in propagation medium', detail: 'Use 50/50 perlite and peat moss (or coco coir). Pre-moisten. Insert cutting 2–3" deep. Firm around base. Use clean, small pots or propagation trays.' },
  { step: 'Create humidity dome', detail: 'Cover with clear plastic dome, bag, or upside-down bottle. Maintain 90%+ humidity. Mist daily with RO water. Place in bright indirect light — no direct sun (will cook them).' },
  { step: 'Bottom heat (optional but helpful)', detail: 'Seedling heat mat set to 70–75°F under the propagation tray. Speeds rooting significantly, especially for hardwood cuttings in winter.' },
  { step: 'Wait and check', detail: 'Softwood: roots in 3–6 weeks. Hardwood: 6–12 weeks. Tug gently — resistance means roots. Don\'t disturb until well-rooted.' },
  { step: 'Harden off and transplant', detail: 'Gradually remove humidity dome over 1–2 weeks. Move to larger pots with potting soil. Grow for one season before planting in ground.' },
]

export default function FruitTreePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-800/30 border border-rose-600/30 rounded-full text-sm text-rose-300 mb-6">
          <TreePine className="w-4 h-4" />
          Fruit Tree Nursery & Cloning Lab
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-4">
          <span className="bg-gradient-to-r from-rose-300 via-rose-400 to-orange-400 bg-clip-text text-transparent">
            Fruit Tree Nursery
          </span>
        </h1>
        <p className="text-lg text-rose-200/50 max-w-3xl">
          Complete guide to cloning fruit trees from orchard cuttings — rooting hormone protocols, grafting basics, and building a diverse perennial food forest on the property.
        </p>
      </motion.div>

      {/* Cloneable Species */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
          <Scissors className="w-7 h-7 text-rose-400" />
          <span className="bg-gradient-to-r from-rose-300 to-rose-500 bg-clip-text text-transparent">Cloneable Fruit Trees</span>
        </h2>
        <div className="space-y-3">
          {cloneableTrees.map((tree, i) => (
            <div key={i} className="p-5 bg-rose-900/10 border border-rose-700/12 rounded-xl hover:border-rose-500/20 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                <h3 className="font-bold text-white text-lg">{tree.name}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  tree.rootability.startsWith('Excellent') ? 'bg-emerald-800/30 text-emerald-300' :
                  tree.rootability.startsWith('Good') ? 'bg-blue-800/30 text-blue-300' :
                  tree.rootability.startsWith('Moderate') ? 'bg-amber-800/30 text-amber-300' :
                  'bg-red-800/30 text-red-300'
                }`}>{tree.rootability.split('—')[0].trim()}</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-2 text-sm mb-3">
                <div><span className="text-rose-400/50">Method: </span><span className="text-white/60">{tree.method}</span></div>
                <div><span className="text-rose-400/50">Timing: </span><span className="text-white/60">{tree.timing}</span></div>
                <div className="sm:col-span-2"><span className="text-rose-400/50">Utah varieties: </span><span className="text-amber-300/60">{tree.utahVariety}</span></div>
              </div>
              <p className="text-sm text-rose-200/40">{tree.notes}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Rooting Protocol */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
          <Sprout className="w-7 h-7 text-emerald-400" />
          <span className="text-white">Step-by-Step Rooting Protocol</span>
        </h2>
        <div className="p-6 bg-emerald-900/15 border border-emerald-700/20 rounded-2xl">
          <div className="space-y-4">
            {rootingProtocol.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-800/30 flex items-center justify-center shrink-0 text-emerald-400 font-bold text-sm">{i + 1}</div>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">{item.step}</h4>
                  <p className="text-sm text-emerald-200/50">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Grafting basics */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
          <Scissors className="w-7 h-7 text-amber-400" />
          <span className="text-white">Grafting Basics (For Apple, Pear, Cherry)</span>
        </h2>
        <div className="p-6 bg-amber-900/15 border border-amber-700/20 rounded-2xl">
          <p className="text-sm text-amber-200/50 mb-4">For species that don't root well from cuttings (apple, pear, sweet cherry), grafting onto rootstock is the professional approach. You buy inexpensive rootstock ($3–$8 each) and graft your desired variety's scion wood onto it.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { type: 'Whip & Tongue Graft', desc: 'Most common for fruit trees. Matching diagonal cuts on scion and rootstock with interlocking tongues. Best for similar-diameter wood.', when: 'Late winter (Feb–Mar) while dormant' },
              { type: 'Cleft Graft', desc: 'Split the rootstock, insert wedge-shaped scion. Good for top-working larger trees or mismatched diameters.', when: 'Early spring, just before bud break' },
              { type: 'Bud Graft (T-bud)', desc: 'Insert a single bud under the bark of rootstock. Minimal scion wood needed. Very efficient.', when: 'Late summer (Aug–Sept) when bark slips' },
              { type: 'Supplies Needed', desc: 'Sharp grafting knife, parafilm tape, grafting sealant, rootstock ($3–$8/pc from nurseries like Raintree or Cummins).', when: 'Order rootstock in fall for spring grafting' },
            ].map((g, i) => (
              <div key={i} className="p-4 bg-black/15 rounded-xl">
                <h4 className="font-bold text-amber-300 text-sm mb-1">{g.type}</h4>
                <p className="text-xs text-amber-200/50 mb-1">{g.desc}</p>
                <p className="text-xs text-amber-400/40">{g.when}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-amber-400/40">Sources: Penn State Extension, Oregon State Extension Fruit Tree Propagation, USDA NRCS Plant Materials</p>
        </div>
      </motion.div>

      <div className="p-5 bg-emerald-900/15 border border-emerald-700/20 rounded-xl">
        <p className="text-sm text-emerald-300/80">
          <strong>Strategy:</strong> Start with easy-rooters (fig, grape, elderberry, mulberry, peach) from cuttings this season. Order apple/pear/cherry rootstock for winter grafting practice. Within 2–3 years, you'll have a producing mini-orchard with zero nursery costs beyond the initial rootstock.
        </p>
      </div>
    </div>
  )
}
