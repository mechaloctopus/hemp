import LicensingTimeline from '../components/LicensingTimeline'
import YieldCalculator from '../components/YieldCalculator'
import CbdEconomics from '../components/CbdEconomics'
import ProfitModel from '../components/ProfitModel'
import StrainGuide from '../components/StrainGuide'
import CostBreakdown from '../components/CostBreakdown'
import SeedSuppliers from '../components/SeedSuppliers'
import Compliance from '../components/Compliance'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Leaf, ArrowDown, ExternalLink, CheckCircle2, Droplets, Layers,
  FlaskConical, DollarSign, Sprout, Bug, Target, Beaker, Star, ShieldCheck
} from 'lucide-react'

const cbdStrains = [
  { name: 'Lifter', cbd: '16–20%', thc: '<0.3%', ratio: '27:1', days: '62–70', type: 'Photoperiod', price: 'From $39 / 5 seeds', notes: 'Industry workhorse. Reliable, early-finishing, huge yields. Funky cheese + fuel terpene profile. Oregon CBD genetics. Best all-around CBD strain.', source: 'GTR Seeds', url: 'https://gtrseeds.com/products/lifter-organic' },
  { name: 'Sour Space Candy', cbd: '15–19%', thc: '<0.3%', ratio: '27:1', days: '63–70', type: 'Photoperiod', price: 'From $35 / 5 seeds', notes: 'Citrus-fruity terpene bomb. Heavy yielder. Very popular in consumer CBD market. Excellent for extraction — high terpene retention in oil.', source: 'GTR Seeds', url: 'https://gtrseeds.com/products/sour-space-candy' },
  { name: 'Hawaiian Haze', cbd: '15–19%', thc: '<0.3%', ratio: '27:1', days: '65–72', type: 'Photoperiod', price: 'From $39 / 5 seeds', notes: 'Tropical pineapple terps. Great flower bag appeal. Vigorous outdoor grower. Beautiful purple hues in cool temps.', source: 'GTR Seeds', url: 'https://gtrseeds.com/products/hawaiian-haze' },
  { name: 'Suver Haze', cbd: '16–20%', thc: '<0.3%', ratio: '27:1', days: '62–68', type: 'Photoperiod', price: 'From $39 / 5 seeds', notes: 'Creamy, peppery, slightly sweet. One of the highest CBD producers. Excellent oil extraction yields. Very resinous.', source: 'GTR Seeds', url: 'https://gtrseeds.com/products/suver-haze' },
  { name: 'Elektra', cbd: '15–19%', thc: '<0.3%', ratio: '27:1', days: '60–68', type: 'Photoperiod', price: 'From $39 / 5 seeds', notes: 'Chocolate + citrus + wine terps. Dense nugs. One of the original Oregon CBD varieties. Early finisher — good for Utah shorter season.', source: 'GTR Seeds', url: 'https://gtrseeds.com/products/elektra' },
]

const cbgStrains = [
  { name: 'White CBG', cbd: '<1%', cbg: '14–20%', thc: '<0.2%', days: '60–68', type: 'Photoperiod', price: 'From $49 / 5 seeds', notes: 'The original CBG strain. "Mother of all cannabinoids." Extremely low THC — almost always under 0.2%. White, frosty, dense buds. Industry standard for CBG production.', source: 'GTR Seeds', url: 'https://gtrseeds.com/products/white-cbg' },
  { name: 'Stem Cell CBG', cbd: '<1%', cbg: '15–20%', thc: '<0.2%', days: '58–65', type: 'Photoperiod', price: 'From $49 / 5 seeds', notes: 'Faster finishing than White CBG. Higher yields. Slightly citrus terps. Bred specifically for biomass/oil production. Great for extraction.', source: 'GTR Seeds', url: 'https://gtrseeds.com/products/stem-cell-cbg' },
  { name: 'Sour G CBG', cbd: '<1%', cbg: '14–18%', thc: '<0.2%', days: '62–70', type: 'Photoperiod', price: 'From $49 / 5 seeds', notes: 'Sour diesel-like terpene profile in a CBG. Unique flavor for CBG — most are bland. Better terpene retention in oil extraction.', source: 'GTR Seeds' },
  { name: 'Auto CBG', cbd: '<1%', cbg: '12–16%', thc: '<0.2%', days: '70–80 from seed', type: 'Autoflower', price: 'From $35 / 5 seeds', notes: 'Autoflower — no light deprivation needed. Plant anytime May–July. Smaller plants but zero schedule hassle. Good for succession planting.', source: 'GTR Seeds', url: 'https://gtrseeds.com/products/auto-cbg' },
]

const soilProtocol = [
  { layer: 'Base Soil', recipe: '1/3 quality compost + 1/3 peat moss or coco coir + 1/3 perlite/pumice (aeration)', purpose: 'Light, airy, well-draining base that holds moisture without waterlogging. Hemp roots hate standing water.' },
  { layer: 'Dry Amendments (mixed in)', recipe: 'Per cubic foot: 1/2 cup blood meal (N), 1/2 cup bone meal (P), 1/2 cup kelp meal (K), 1/4 cup gypsum (Ca + S), 2 tbsp Azomite (trace minerals), 1/4 cup worm castings', purpose: 'Slow-release organic NPK + calcium + trace minerals. Feeds for 30–60 days. Re-amend or top-dress at flip to flower.' },
  { layer: 'Mycorrhizal Inoculant', recipe: 'Great White, MycoApply, or Dynomyco — apply directly to root zone at transplant (1 tsp per hole)', purpose: 'Endo-mycorrhizal fungi colonize roots and extend nutrient reach 100–1000×. Dramatically improves phosphorus uptake (= bigger flowers = more oil). CRITICAL: do NOT use synthetic phosphorus fertilizers — they kill mycorrhizae.' },
  { layer: 'Bacterial Inoculant', recipe: 'Mammoth P, SLF-100, or compost tea (brewed 24–48 hrs with molasses + compost)', purpose: 'Beneficial bacteria (Bacillus, Pseudomonas, Trichoderma) protect roots from pathogens, break down organic matter into plant-available nutrients, and produce plant growth hormones.' },
  { layer: 'Mulch Layer', recipe: '2–4" straw or wood chip mulch on top of soil after transplant', purpose: 'Retains moisture (critical in Utah summer), feeds soil biology as it decomposes, suppresses weeds, moderates soil temperature (keeps roots cool in 95°F+ days).' },
  { layer: 'Cover Crop (pre-season)', recipe: 'Crimson clover + winter rye planted fall before hemp season → chop and incorporate in spring', purpose: 'Fixes nitrogen (clover), builds soil structure (rye roots), adds organic matter. The best possible preparation for a hemp field.' },
]

const waterProtocol = [
  { stage: 'Source', detail: 'RO-filtered water from 500-gallon tank. Starting TDS: 10–30 ppm. This is a blank canvas — you control everything.' },
  { stage: 'Base pH Target', detail: 'pH 6.0–6.5 for soil grows (slightly acidic). Use pH Down (phosphoric acid) to adjust. ALWAYS check pH after adding all nutrients. Digital pH meter essential ($15–$40).' },
  { stage: 'Cal-Mag (Every Watering)', detail: '1–2 ml/gal Cal-Mag supplement (or 1 tsp gypsum + 1/2 tsp Epsom salt per 5 gal). RO water has zero calcium/magnesium — hemp needs a lot of both. Calcium prevents bud rot; magnesium is the center of chlorophyll.' },
  { stage: 'Vegetative Nutrients', detail: 'Compost tea weekly (brewed 24–48 hrs). Optional: fish hydrolysate 2 ml/gal every other watering. High nitrogen drives leaf/stem growth. Target TDS after amendments: 400–800 ppm.' },
  { stage: 'Flower Nutrients', detail: 'Switch to high-P/K: top-dress bone meal + kelp meal at flip. Compost tea continues weekly. Reduce nitrogen. Bloom-specific compost tea (add high-P bat guano to brew). Target TDS: 800–1200 ppm.' },
  { stage: 'Late Flower / Flush', detail: 'Last 10–14 days before harvest: straight RO water only, pH 6.0–6.3. No nutrients. This "flush" forces the plant to use up stored nutrients, producing cleaner, smoother oil with less chlorophyll.' },
  { stage: 'Watering Frequency', detail: 'In-ground/raised bed: deep water every 2–3 days (less if mulched well). Pots: water when top 1–2" dry. Never let soil stay soggy. Hemp prefers wet-dry cycles — this stresses roots into growing deeper and accessing more nutrients.' },
]

const budgetBreakdown = [
  { category: 'Seeds', items: [
    { item: 'CBD seeds — 3 varieties × ~17 seeds each (50 total)', cost: 250, notes: 'Lifter, Sour Space Candy, Suver Haze from GTR Seeds. Bulk pricing at 50+ seeds.' },
    { item: 'CBG seeds — 2 varieties × ~25 seeds each (50 total)', cost: 250, notes: 'White CBG + Stem Cell CBG from GTR Seeds. Bulk pricing at 50+ seeds.' },
  ]},
  { category: 'Licensing & Compliance', items: [
    { item: 'FBI background check', cost: 35, notes: 'eDO system — fastest method' },
    { item: 'USDA HeMP application', cost: 0, notes: 'Free — no application fee' },
    { item: 'USDA sampling agent visit', cost: 150, notes: 'Pre-harvest THC testing' },
    { item: 'DEA-registered lab testing', cost: 200, notes: 'Potency + compliance panel' },
    { item: 'UDAF Cannabinoid Processor License (Tier 4)', cost: 500, notes: 'Required to sell extracted oil products' },
    { item: 'Additional lab testing (full COA for selling)', cost: 300, notes: 'Heavy metals, pesticides, microbial, terpenes' },
  ]},
  { category: 'Soil & Amendments', items: [
    { item: 'Bulk compost (2 cubic yards)', cost: 100, notes: 'Local landscape supply' },
    { item: 'Peat moss / coco coir (4 bales)', cost: 120, notes: 'Moisture retention + aeration' },
    { item: 'Perlite / pumice (4 bags)', cost: 80, notes: 'Drainage — pumice is local to Utah' },
    { item: 'Dry amendments (blood, bone, kelp, Azomite, gypsum)', cost: 150, notes: 'Organic slow-release NPK + trace minerals' },
    { item: 'Worm castings (40 lbs)', cost: 40, notes: 'Premium biology' },
    { item: 'Mycorrhizal inoculant (Great White or Dynomyco)', cost: 35, notes: 'Root colonization — dramatic yield improvement' },
    { item: 'Bacterial inoculant (Mammoth P)', cost: 45, notes: 'Phosphorus solubilizer for bigger flowers' },
    { item: 'Compost tea brewing supplies', cost: 30, notes: 'Bucket, air pump, molasses, mesh bag' },
  ]},
  { category: 'Irrigation', items: [
    { item: 'Drip irrigation system (from RO tank)', cost: 100, notes: '1/2" mainline + 1/4" emitters + timer' },
  ]},
  { category: 'Greenhouse & Light Dep', items: [
    { item: 'Hoop house / greenhouse frame (14×24 ft)', cost: 600, notes: 'EMT conduit or cattle panel frame' },
    { item: 'Greenhouse poly film (6 mil)', cost: 100, notes: '4–6 year lifespan' },
    { item: 'Light deprivation shade cloth (blackout)', cost: 200, notes: 'Automate flower timing — critical for photoperiod strains in Utah' },
    { item: 'Shade cloth pull system (manual or auto)', cost: 100, notes: 'Manual pulleys or motorized track' },
  ]},
]

export default function HempPage() {
  const totalBudget = budgetBreakdown.reduce((sum, cat) => sum + cat.items.reduce((s, i) => s + i.cost, 0), 0)

  return (
    <div>
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Hemp_field.jpg/1200px-Hemp_field.jpg" alt="Hemp field" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-950/90 to-emerald-950" />
        </div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-800/40 border border-emerald-600/30 rounded-full text-sm text-emerald-300 mb-6">
              <Leaf className="w-4 h-4" />
              Lazy K Farms — USDA Hemp Program 2026
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-4">
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-amber-400 bg-clip-text text-transparent">
                Hemp Production
              </span>
            </h1>
            <p className="text-lg text-emerald-200/50 max-w-2xl mx-auto mb-6">
              Multi-strain CBD + CBG oil production plan. GTR Seeds genetics, living soil protocol, RO water optimization, light deprivation greenhouse, and combined full-spectrum oil blending into 1g syringes.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-emerald-400/50 mb-8">
              <span className="px-3 py-1 bg-emerald-900/30 rounded-full">CBD + CBG Blend</span>
              <span className="px-3 py-1 bg-emerald-900/30 rounded-full">GTR Seeds</span>
              <span className="px-3 py-1 bg-emerald-900/30 rounded-full">Living Soil</span>
              <span className="px-3 py-1 bg-emerald-900/30 rounded-full">Light Dep Greenhouse</span>
              <span className="px-3 py-1 bg-emerald-900/30 rounded-full">Syringe Oil</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──── SEED SOURCING: GTR Seeds ──── */}
      <section className="py-16 max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-black mb-2 flex items-center gap-3">
            <Sprout className="w-7 h-7 text-emerald-400" />
            <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">Seed Plan — GTR Seeds</span>
          </h2>
          <p className="text-sm text-emerald-200/40 mb-2">
            Source: <a href="https://gtrseeds.com/collections/type-iii-cbd" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 underline">gtrseeds.com <ExternalLink className="w-3 h-3 inline" /></a> — Feminized F1 hybrid seeds, 27:1 CBD:THC ratio, USDA compliant. All seeds contain {'<'}0.3% total THC.
          </p>
          <p className="text-sm text-emerald-300/50 mb-8">
            <strong className="text-white">Strategy:</strong> 50 CBD seeds (3 varieties) + 50 CBG seeds (2 varieties). Grow all varieties, harvest, extract oil separately, then <strong className="text-emerald-300">blend all oils into one combined CBD+CBG full-spectrum syringe product</strong>. Multiple strains = broader terpene profile + entourage effect.
          </p>

          {/* CBD Strains */}
          <h3 className="text-xl font-bold text-emerald-300 mb-4 flex items-center gap-2"><Leaf className="w-5 h-5" /> CBD Strains (50 seeds — ~$250)</h3>
          <div className="space-y-3 mb-10">
            {cbdStrains.map((s, i) => (
              <div key={i} className="p-5 bg-emerald-900/10 border border-emerald-700/12 rounded-xl hover:border-emerald-500/20 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                  <h4 className="text-lg font-bold text-white">{s.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-0.5 bg-emerald-800/30 rounded-full text-emerald-300">CBD {s.cbd}</span>
                    <span className="text-xs px-2 py-0.5 bg-emerald-800/30 rounded-full text-emerald-400/60">THC {s.thc}</span>
                    <span className="text-xs px-2 py-0.5 bg-blue-800/20 rounded-full text-blue-300">{s.days} days</span>
                    <span className="text-xs px-2 py-0.5 bg-amber-800/30 rounded-full text-amber-300">{s.price}</span>
                  </div>
                </div>
                <p className="text-sm text-emerald-200/50 mb-2">{s.notes}</p>
                <div className="flex items-center gap-3 text-xs text-emerald-400/40">
                  <span>{s.source}</span>
                  {s.url && <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1">View seed <ExternalLink className="w-3 h-3" /></a>}
                </div>
              </div>
            ))}
          </div>

          {/* CBG Strains */}
          <h3 className="text-xl font-bold text-amber-300 mb-4 flex items-center gap-2"><Star className="w-5 h-5" /> CBG Strains (50 seeds — ~$250)</h3>
          <p className="text-sm text-amber-200/40 mb-4">CBG = cannabigerol, the "mother cannabinoid." Precursor to CBD, THC, and CBC. Anti-inflammatory, neuroprotective, antibacterial. Extremely low THC — always under 0.2%. Blending CBG into CBD oil creates a superior entourage effect.</p>
          <div className="space-y-3 mb-10">
            {cbgStrains.map((s, i) => (
              <div key={i} className="p-5 bg-amber-900/8 border border-amber-700/12 rounded-xl hover:border-amber-500/20 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                  <h4 className="text-lg font-bold text-white">{s.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-0.5 bg-amber-800/30 rounded-full text-amber-300">CBG {s.cbg}</span>
                    <span className="text-xs px-2 py-0.5 bg-amber-800/30 rounded-full text-amber-400/60">THC {s.thc}</span>
                    <span className="text-xs px-2 py-0.5 bg-blue-800/20 rounded-full text-blue-300">{s.days} days</span>
                    <span className="text-xs px-2 py-0.5 bg-emerald-800/20 rounded-full text-emerald-300">{s.price}</span>
                  </div>
                </div>
                <p className="text-sm text-amber-200/50 mb-2">{s.notes}</p>
                <div className="flex items-center gap-3 text-xs text-amber-400/40">
                  <span>{s.source}</span>
                  {s.url && <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 flex items-center gap-1">View seed <ExternalLink className="w-3 h-3" /></a>}
                </div>
              </div>
            ))}
          </div>

          {/* Blending Strategy */}
          <div className="p-6 bg-gradient-to-br from-emerald-500/10 to-amber-500/5 border-2 border-emerald-500/25 rounded-2xl mb-10">
            <h3 className="text-lg font-bold text-emerald-300 mb-3 flex items-center gap-2"><FlaskConical className="w-5 h-5" /> The Combined Oil Blend</h3>
            <div className="text-sm text-emerald-200/60 space-y-2">
              <p><strong className="text-white">Harvest all varieties separately.</strong> Extract each strain's oil via cold ethanol wash (see <Link to="/lab" className="text-emerald-400 underline">Farm Lab</Link>). Lab-test each batch for potency.</p>
              <p><strong className="text-white">Blend into one final oil.</strong> Target ratio: ~60% CBD strains + ~40% CBG strains. This creates a <strong className="text-emerald-300">full-spectrum CBD+CBG oil</strong> with diverse terpene profiles from 5+ strains — far superior entourage effect vs. single-strain oil.</p>
              <p><strong className="text-white">Decarboxylate the blend</strong> (240°F for 40 min) to convert CBDA→CBD and CBGA→CBG. Fill into 1g luer-lock syringes. Label with combined cannabinoid profile from lab test.</p>
              <p><strong className="text-white">Final product:</strong> A thick, golden, full-spectrum CBD+CBG crude oil syringe — raw, decarbed, lab-tested, USDA-licensed. Sold at farmers market, online shop, and direct.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ──── YIELD MATH & PRICING ──── */}
      <section className="py-16 max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-black mb-2 flex items-center gap-3">
            <Beaker className="w-7 h-7 text-emerald-400" />
            <span className="bg-gradient-to-r from-emerald-300 to-amber-400 bg-clip-text text-transparent">Yield Math — Seed to Syringe</span>
          </h2>
          <p className="text-sm text-emerald-200/40 mb-8">Here's the complete numbers breakdown: how much oil you actually get from 100 plants on ¼ acre, how long it takes, and what it's worth.</p>

          {/* Timeline */}
          <div className="p-6 bg-emerald-900/15 border border-emerald-700/20 rounded-2xl mb-8">
            <h3 className="text-lg font-bold text-emerald-300 mb-4">Timeline: Seed to Sellable Syringe</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center mb-4">
              {[
                { phase: 'Germination', time: 'Week 1–2', detail: 'Seed → seedling in starter pots' },
                { phase: 'Vegetative', time: 'Week 3–10', detail: '6–8 weeks of growth under 18hr light' },
                { phase: 'Flower', time: 'Week 11–19', detail: '8–10 weeks flowering under 12hr light (light dep)' },
                { phase: 'Dry & Cure', time: 'Week 20–22', detail: '7–14 days hang dry, 2 weeks cure' },
                { phase: 'Extract & Fill', time: 'Week 23–24', detail: 'Ethanol wash, rotovap, decarb, fill syringes' },
              ].map((p, i) => (
                <div key={i} className="p-3 bg-black/15 rounded-xl">
                  <div className="text-xs text-emerald-400 font-bold mb-1">{p.phase}</div>
                  <div className="text-sm font-bold text-white">{p.time}</div>
                  <div className="text-[10px] text-emerald-400/40 mt-1">{p.detail}</div>
                </div>
              ))}
            </div>
            <div className="text-center p-3 bg-emerald-800/20 rounded-xl">
              <span className="text-emerald-400/60 text-sm">Total time from seed to sellable oil: </span>
              <span className="text-xl font-black text-emerald-300">~6 months</span>
              <span className="text-emerald-400/40 text-xs block">(Plant mid-May → sellable product by mid-November)</span>
            </div>
          </div>

          {/* Per-Plant Yield Math */}
          <div className="p-6 bg-gradient-to-br from-emerald-900/20 to-amber-900/10 border border-emerald-600/20 rounded-2xl mb-8">
            <h3 className="text-lg font-bold text-white mb-4">Oil Yield Math — Per Plant → Per 100 Plants</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr className="border-b border-emerald-700/20">
                    <th className="text-left py-2 px-3 text-emerald-400/60 font-semibold text-xs uppercase">Metric</th>
                    <th className="text-center py-2 px-3 text-emerald-400/60 font-semibold text-xs uppercase">Per Plant</th>
                    <th className="text-center py-2 px-3 text-emerald-400/60 font-semibold text-xs uppercase">×100 Plants</th>
                    <th className="text-left py-2 px-3 text-emerald-400/60 font-semibold text-xs uppercase">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { metric: 'Wet flower at harvest', per: '1–3 lbs', total: '100–300 lbs', note: 'Outdoor/greenhouse, well-grown in living soil' },
                    { metric: 'Dry flower (after 50% moisture loss)', per: '0.5–1.5 lbs', total: '50–150 lbs', note: 'Hang dry 7–14 days at 60°F / 60% RH' },
                    { metric: 'Average dry flower (realistic)', per: '~1 lb', total: '~100 lbs', note: 'Conservative estimate for first-year grow' },
                    { metric: 'CBD/CBG content in flower', per: '15–20%', total: '—', note: 'GTR Seeds strains tested at 15–20% cannabinoid' },
                    { metric: 'Crude oil from ethanol extraction', per: '~40–60g', total: '4,000–6,000g', note: '~8–12% crude oil yield from dry flower (includes waxes, terpenes)' },
                    { metric: 'Realistic crude oil yield', per: '~50g', total: '~5,000g (5 kg)', note: 'Middle estimate: 100 lbs flower × ~10% extraction yield × 454g/lb' },
                    { metric: '1-gram syringes', per: '~50', total: '~5,000', note: 'Each gram of crude oil = 1 syringe' },
                    { metric: '2-gram syringes', per: '~25', total: '~2,500', note: 'Or package as 2g syringes for premium pricing' },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b border-emerald-800/10 ${i >= 5 ? 'bg-emerald-800/5' : ''}`}>
                      <td className="py-2.5 px-3 font-medium text-white/80">{row.metric}</td>
                      <td className="py-2.5 px-3 text-center text-emerald-300 font-semibold">{row.per}</td>
                      <td className="py-2.5 px-3 text-center text-amber-300 font-bold">{row.total}</td>
                      <td className="py-2.5 px-3 text-emerald-400/40 text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-emerald-800/15 rounded-xl">
              <p className="text-xs text-emerald-300/50">
                <strong className="text-emerald-300">How the extraction math works:</strong> 100 lbs of dry flower × 454 g/lb = 45,400g total biomass. At ~10% crude oil extraction rate (typical for ethanol wash of high-cannabinoid flower) = ~4,500–5,500g of thick, dark crude oil. After decarboxylation (which reduces weight ~10–15% from CO₂ off-gassing), you get ~4,000–5,000g of activated, syringe-ready oil. Conservative estimate: <strong className="text-white">5,000 one-gram syringes from 100 plants</strong>.
              </p>
            </div>
          </div>

          {/* Market Pricing */}
          <div className="p-6 bg-gradient-to-br from-amber-900/15 to-amber-800/5 border border-amber-600/20 rounded-2xl mb-8">
            <h3 className="text-lg font-bold text-amber-300 mb-4">Market Pricing — Artisan CBD/CBG Oil Syringes (2026)</h3>
            <p className="text-sm text-amber-200/40 mb-4">Artisan, small-batch, lab-tested, full-spectrum CBD+CBG oil (Rick Simpson Oil style) commands premium pricing — especially with beautiful packaging, strain-specific or blended options, and full COA (Certificate of Analysis).</p>

            <div className="space-y-4 mb-6">
              {/* 1g Syringe Pricing */}
              <div>
                <h4 className="font-bold text-white text-sm mb-3">1-Gram Syringe — Full Spectrum CBD+CBG Oil</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { tier: 'Wholesale / Bulk', price: '$5–$8', desc: 'B2B to dispensaries, health shops. 50+ units.', color: 'text-emerald-300' },
                    { tier: 'Farmers Market', price: '$10–$15', desc: 'Direct-to-consumer. Nice label + COA handout.', color: 'text-emerald-200' },
                    { tier: 'Online Retail', price: '$15–$25', desc: 'Shopify store. Premium packaging + insert card.', color: 'text-amber-300' },
                    { tier: 'Premium / Strain-Specific', price: '$20–$35', desc: 'Single-strain, terpene-rich, beautiful box packaging.', color: 'text-amber-400' },
                  ].map((t, i) => (
                    <div key={i} className="p-4 bg-black/15 rounded-xl text-center">
                      <div className="text-xs text-amber-400/50 mb-1">{t.tier}</div>
                      <div className={`text-2xl font-black ${t.color}`}>{t.price}</div>
                      <div className="text-[10px] text-amber-300/30 mt-1">{t.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2g Syringe Pricing */}
              <div>
                <h4 className="font-bold text-white text-sm mb-3">2-Gram Syringe — Double Size (Premium Offering)</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { tier: 'Wholesale', price: '$9–$14', desc: 'Slight per-gram discount in larger syringe', color: 'text-emerald-300' },
                    { tier: 'Farmers Market', price: '$18–$28', desc: 'Popular size — customers prefer value', color: 'text-emerald-200' },
                    { tier: 'Online Retail', price: '$28–$45', desc: 'Best seller online — perceived value', color: 'text-amber-300' },
                    { tier: 'Premium', price: '$35–$60', desc: 'Gift-box, strain-specific, lab booklet', color: 'text-amber-400' },
                  ].map((t, i) => (
                    <div key={i} className="p-4 bg-black/15 rounded-xl text-center">
                      <div className="text-xs text-amber-400/50 mb-1">{t.tier}</div>
                      <div className={`text-2xl font-black ${t.color}`}>{t.price}</div>
                      <div className="text-[10px] text-amber-300/30 mt-1">{t.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 bg-amber-800/10 border border-amber-700/15 rounded-xl mb-4">
              <p className="text-sm text-amber-300/60">
                <strong className="text-amber-300">Why artisan commands premium:</strong> Mass-market CBD syringes (Amazon, gas station) sell for $3–$5 but are often isolate-based, poorly tested, or mislabeled. <strong className="text-white">Our product is different:</strong> full-spectrum crude (not isolate), multi-strain blend (5+ varieties for entourage), farm-grown in living soil, cold ethanol-extracted, decarboxylated, lab-tested with full COA, USDA-licensed. That's a $15–$25 product all day.
              </p>
            </div>
          </div>

          {/* Revenue Projections */}
          <div className="p-6 bg-gradient-to-br from-emerald-500/10 to-amber-500/5 border-2 border-emerald-500/30 rounded-2xl mb-8">
            <h3 className="text-lg font-bold text-emerald-300 mb-4">Revenue Projections — 100 Plants (¼ Acre)</h3>
            <p className="text-sm text-emerald-200/40 mb-4">Based on ~5,000g crude oil yield, sold as 1g and 2g syringes at various price points:</p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm min-w-[500px]">
                <thead>
                  <tr className="border-b border-emerald-700/20">
                    <th className="text-left py-2 px-3 text-emerald-400/60 font-semibold text-xs uppercase">Scenario</th>
                    <th className="text-center py-2 px-3 text-emerald-400/60 font-semibold text-xs uppercase">Price/g</th>
                    <th className="text-center py-2 px-3 text-emerald-400/60 font-semibold text-xs uppercase">Units Sold</th>
                    <th className="text-center py-2 px-3 text-amber-400/60 font-semibold text-xs uppercase">Gross Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { scenario: 'Conservative (all wholesale)', price: '$5', units: '5,000 × 1g', rev: '$25,000', color: '' },
                    { scenario: 'Mixed (50% market, 50% online)', price: '$12 avg', units: '5,000 × 1g', rev: '$60,000', color: '' },
                    { scenario: 'Mostly Retail (farmers market + online)', price: '$18 avg', units: '5,000 × 1g', rev: '$90,000', color: 'bg-emerald-800/5' },
                    { scenario: 'Premium (strain-specific, beautiful packaging)', price: '$25 avg', units: '5,000 × 1g', rev: '$125,000', color: 'bg-emerald-800/10' },
                    { scenario: '2g Premium Syringes', price: '$40/2g', units: '2,500 × 2g', rev: '$100,000', color: 'bg-amber-800/5' },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b border-emerald-800/10 ${row.color}`}>
                      <td className="py-2.5 px-3 text-white/70">{row.scenario}</td>
                      <td className="py-2.5 px-3 text-center text-emerald-300">{row.price}</td>
                      <td className="py-2.5 px-3 text-center text-white/50">{row.units}</td>
                      <td className="py-2.5 px-3 text-center text-amber-300 font-bold">{row.rev}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid sm:grid-cols-3 gap-3 mb-4">
              <div className="p-4 bg-black/15 rounded-xl text-center">
                <div className="text-xs text-emerald-400/50 mb-1">Total Investment (Year 1)</div>
                <div className="text-xl font-black text-red-400">~$3,285</div>
              </div>
              <div className="p-4 bg-black/15 rounded-xl text-center">
                <div className="text-xs text-emerald-400/50 mb-1">Realistic Revenue (mixed pricing)</div>
                <div className="text-xl font-black text-emerald-300">$60,000–$90,000</div>
              </div>
              <div className="p-4 bg-black/15 rounded-xl text-center">
                <div className="text-xs text-emerald-400/50 mb-1">Net Profit (after costs)</div>
                <div className="text-xl font-black text-amber-400">$57,000–$87,000</div>
              </div>
            </div>

            <p className="text-xs text-emerald-400/40">These are gross revenue numbers. Subtract ~$3,285 year-1 costs + ~$600 extraction supplies (ethanol, syringes, labels) + ~$300 packaging. Still extremely profitable. Year 2 costs drop to ~$800 total (no seeds, no greenhouse build, just amendments + ethanol + syringes).</p>
          </div>

          {/* Packaging */}
          <div className="p-6 bg-emerald-900/10 border border-emerald-700/12 rounded-2xl">
            <h3 className="text-lg font-bold text-white mb-4">Packaging & Product Options</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-black/10 rounded-xl">
                <h4 className="font-bold text-emerald-300 text-sm mb-2">By-Strain Syringes</h4>
                <ul className="text-sm text-emerald-200/50 space-y-1">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" /> Each strain extracted and packaged separately</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" /> Label: strain name, CBD/CBG %, terpene profile, batch #</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" /> Premium pricing — enthusiasts want specific strains</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" /> e.g., "Lifter RSO — 18% CBD" or "White CBG RSO — 19% CBG"</li>
                </ul>
              </div>
              <div className="p-4 bg-black/10 rounded-xl">
                <h4 className="font-bold text-amber-300 text-sm mb-2">Lazy K Signature Blend</h4>
                <ul className="text-sm text-amber-200/50 space-y-1">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" /> All strains blended: ~60% CBD + ~40% CBG</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" /> Label: "Full Spectrum CBD+CBG — 5-Strain Blend"</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" /> Maximum entourage effect — broadest terpene diversity</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" /> This is the flagship product — the "Lazy K RSO"</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 grid sm:grid-cols-3 gap-3">
              {[
                { product: '1g Syringe (luer-lock)', packaging: 'Syringe in mylar bag + COA insert + Lazy K sticker', cost: '$0.50–$1.00/unit' },
                { product: '2g Syringe (luer-lock)', packaging: 'Syringe in small box + COA card + strain info card', cost: '$0.75–$1.50/unit' },
                { product: '3-Pack Gift Box', packaging: '3 × 1g different strains in branded box + full COA booklet', cost: '$2.00–$3.50/box' },
              ].map((p, i) => (
                <div key={i} className="p-3 bg-emerald-800/10 rounded-lg">
                  <h5 className="font-semibold text-white text-xs mb-1">{p.product}</h5>
                  <p className="text-[10px] text-emerald-200/40 mb-1">{p.packaging}</p>
                  <span className="text-xs text-amber-300">{p.cost}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ──── SOIL PROTOCOL FOR MAX OIL ──── */}
      <section className="py-16 max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-black mb-2 flex items-center gap-3">
            <Layers className="w-7 h-7 text-amber-400" />
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">Soil Protocol — Maximum Oil Production</span>
          </h2>
          <p className="text-sm text-amber-200/40 mb-6">Living soil is the foundation. Hemp grown in biologically-active soil with mycorrhizal colonization produces 20–40% more cannabinoids than synthetically fed plants. The mycorrhizal network delivers phosphorus directly to flowers — the #1 driver of resin/oil production.</p>

          <div className="space-y-3 mb-8">
            {soilProtocol.map((item, i) => (
              <div key={i} className="p-5 bg-amber-900/8 border border-amber-700/12 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-full bg-amber-800/30 flex items-center justify-center text-amber-400 font-bold text-xs">{i + 1}</div>
                  <h4 className="font-bold text-white text-sm">{item.layer}</h4>
                </div>
                <div className="text-sm text-amber-200/50 mb-1"><strong className="text-amber-300/70">Recipe:</strong> {item.recipe}</div>
                <div className="text-xs text-amber-300/40">{item.purpose}</div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-emerald-800/15 border border-emerald-600/15 rounded-xl">
            <p className="text-sm text-emerald-300/60">
              <strong className="text-emerald-300">Key insight:</strong> The mycorrhizal fungi + bacterial inoculants are NOT optional for maximum oil production. Studies show mycorrhizal-colonized cannabis/hemp produces significantly higher cannabinoid concentrations. The fungi trade phosphorus and micronutrients for plant sugars — a symbiotic relationship that <strong className="text-white">directly feeds flower/resin production</strong>. Use <Link to="/water" className="text-emerald-400 underline">RO water</Link> to protect these organisms (chlorine kills them instantly).
            </p>
          </div>
        </motion.div>
      </section>

      {/* ──── WATER & NUTRIENTS PROTOCOL ──── */}
      <section className="py-16 max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-black mb-2 flex items-center gap-3">
            <Droplets className="w-7 h-7 text-blue-400" />
            <span className="bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent">Water & Nutrient Protocol</span>
          </h2>
          <p className="text-sm text-blue-200/40 mb-6">All water from the <Link to="/water" className="text-blue-400 underline">500-gallon RO tank</Link>. Pure water + precise amendments = total control over what your plants receive.</p>

          <div className="space-y-3 mb-8">
            {waterProtocol.map((item, i) => (
              <div key={i} className="p-4 bg-blue-900/8 border border-blue-700/12 rounded-xl">
                <h4 className="font-bold text-blue-300 text-sm mb-1">{item.stage}</h4>
                <p className="text-sm text-blue-200/50">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="p-5 bg-blue-900/10 border border-blue-700/15 rounded-xl">
            <h4 className="font-bold text-blue-300 text-sm mb-2 flex items-center gap-2"><Target className="w-4 h-4" /> pH Cheat Sheet for Hemp Oil Production</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 bg-black/15 rounded-lg"><div className="text-xs text-blue-400/50">Soil pH</div><div className="text-lg font-bold text-white">6.0–6.5</div></div>
              <div className="p-3 bg-black/15 rounded-lg"><div className="text-xs text-blue-400/50">Water pH</div><div className="text-lg font-bold text-white">6.0–6.5</div></div>
              <div className="p-3 bg-black/15 rounded-lg"><div className="text-xs text-blue-400/50">Veg TDS</div><div className="text-lg font-bold text-white">400–800</div></div>
              <div className="p-3 bg-black/15 rounded-lg"><div className="text-xs text-blue-400/50">Flower TDS</div><div className="text-lg font-bold text-white">800–1200</div></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ──── BUDGET BREAKDOWN ──── */}
      <section className="py-16 max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
            <DollarSign className="w-7 h-7 text-amber-400" />
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">Complete Budget — Year 1</span>
          </h2>

          <div className="space-y-6 mb-8">
            {budgetBreakdown.map((cat, ci) => (
              <div key={ci} className="p-5 bg-emerald-900/10 border border-emerald-700/12 rounded-xl">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-bold text-white">{cat.category}</h3>
                  <span className="text-sm font-bold text-amber-400">${cat.items.reduce((s, i) => s + i.cost, 0).toLocaleString()}</span>
                </div>
                <div className="space-y-1.5">
                  {cat.items.map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-1.5 border-b border-emerald-800/15 last:border-0 text-sm">
                      <div className="flex-1">
                        <span className="text-emerald-200/60">{item.item}</span>
                        <span className="text-emerald-400/30 text-xs ml-2">— {item.notes}</span>
                      </div>
                      <span className="text-white font-medium shrink-0 ml-3">{item.cost === 0 ? 'Free' : `$${item.cost}`}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-gradient-to-br from-emerald-500/10 to-amber-500/5 border-2 border-emerald-500/25 rounded-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-emerald-300">Total Year 1 Investment</h3>
              <span className="text-3xl font-black text-emerald-300">${totalBudget.toLocaleString()}</span>
            </div>
            <div className="grid sm:grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-black/15 rounded-lg">
                <div className="text-xs text-emerald-400/50">Seeds</div>
                <div className="text-lg font-bold text-white">$500</div>
              </div>
              <div className="p-3 bg-black/15 rounded-lg">
                <div className="text-xs text-emerald-400/50">Licensing + Testing</div>
                <div className="text-lg font-bold text-white">$1,185</div>
              </div>
              <div className="p-3 bg-black/15 rounded-lg">
                <div className="text-xs text-emerald-400/50">Infrastructure + Soil</div>
                <div className="text-lg font-bold text-white">${(totalBudget - 500 - 1185).toLocaleString()}</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-emerald-400/40">Year 2+ costs drop dramatically: seeds $0 (save your own), licensing renewal only, soil top-dress $100–$200, filter replacements. Estimated year 2 cost: $500–$800 total.</p>
          </div>
        </motion.div>
      </section>

      {/* Original components below */}
      <LicensingTimeline />
      <YieldCalculator />
      <CbdEconomics />
      <ProfitModel />
      <StrainGuide />
      <CostBreakdown />
      <SeedSuppliers />
      <Compliance />
    </div>
  )
}
