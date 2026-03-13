import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Droplets, AlertTriangle, CheckCircle2, ExternalLink, Beaker, ThermometerSun,
  Filter, Waves, FlaskConical, Leaf, Sprout, Mushroom, TreePine, ArrowRight,
  ShieldAlert, ShieldCheck, Info, Gauge, Sun, Snowflake, Target
} from 'lucide-react'

/* ─────────── Riverton Water Data (EWG + City Report 2024) ─────────── */
const waterSource = {
  system: 'Riverton City Water System',
  pwsId: 'UTAH18025',
  population: '42,838',
  source: 'Purchased surface water',
  totalContaminants: 27,
  exceedGuidelines: 15,
  epaCompliant: true,
  reportUrl: 'https://issuu.com/rivertoncityutah/docs/riverton_city_annual_drinking_water_quality_report',
  ewgUrl: 'https://www.ewg.org/tapwater/system.php?pws=UTAH18025',
}

const contaminantsExceed = [
  { name: 'Arsenic', amount: '4.70 ppb', legal: '10 ppb', ewgGuideline: '0.004 ppb', timesAbove: '1,175×', effect: 'Cancer', sources: 'Agriculture, Industry, Naturally Occurring', filter: 'Reverse Osmosis, Ion Exchange', severity: 'critical', plantImpact: 'Toxic to roots at >50 ppb. At 4.7 ppb, low risk for plants but accumulates in edible tissue — especially leafy greens and root vegetables. Not ideal for artisan food crops.' },
  { name: 'Haloacetic acids (HAA9)', amount: '27.5 ppb', legal: 'No limit', ewgGuideline: '0.078 ppb', timesAbove: '354×', effect: 'Cancer', sources: 'Chlorine disinfection byproducts', filter: 'Carbon Filter, Reverse Osmosis', severity: 'critical', plantImpact: 'Chlorine byproducts. Not directly toxic to plants at these levels but present in all chlorinated tap water. RO removes completely.' },
  { name: 'Total Trihalomethanes (TTHMs)', amount: '44.1 ppb', legal: '80 ppb', ewgGuideline: '0.15 ppb', timesAbove: '294×', effect: 'Cancer', sources: 'Chlorine disinfection byproducts', filter: 'Carbon Filter, Reverse Osmosis', severity: 'critical', plantImpact: 'Includes chloroform (28.1 ppb). Chlorinated compounds kill beneficial soil microbes, harm mycorrhizal fungi, and degrade living soil. Major concern for organic growing.' },
  { name: 'Haloacetic acids (HAA5)', amount: '21.3 ppb', legal: '60 ppb', ewgGuideline: '0.1 ppb', timesAbove: '213×', effect: 'Cancer', sources: 'Chlorine disinfection byproducts', filter: 'Carbon Filter, Reverse Osmosis', severity: 'high', plantImpact: 'Another class of disinfection byproducts. Removed by carbon filtration or RO.' },
  { name: 'Bromodichloromethane', amount: '9.49 ppb', legal: 'No limit', ewgGuideline: '0.06 ppb', timesAbove: '158×', effect: 'Cancer', sources: 'Chlorine disinfection byproducts', filter: 'Carbon Filter, Reverse Osmosis', severity: 'high', plantImpact: 'THM compound. Harmful to soil biology at any concentration. RO removes >99%.' },
  { name: 'Trichloroacetic acid', amount: '10.3 ppb', legal: 'No limit', ewgGuideline: '0.1 ppb', timesAbove: '103×', effect: 'Cancer', sources: 'Chlorine disinfection byproducts', filter: 'Carbon Filter, Reverse Osmosis', severity: 'high', plantImpact: 'Can cause leaf burn in sensitive species at higher concentrations. RO removes completely.' },
  { name: 'Chromium (hexavalent)', amount: '1.77 ppb', legal: 'No limit', ewgGuideline: '0.02 ppb', timesAbove: '88×', effect: 'Cancer', sources: 'Industry, Naturally Occurring', filter: 'Reverse Osmosis, Ion Exchange', severity: 'high', plantImpact: 'Cr(VI) is toxic to plants at >100 ppb. At 1.77 ppb, minimal direct plant harm but accumulates in food crops — undesirable for artisan quality.' },
  { name: 'Chloroform', amount: '28.1 ppb', legal: 'No limit', ewgGuideline: '0.4 ppb', timesAbove: '70×', effect: 'Cancer', sources: 'Chlorine disinfection byproducts', filter: 'Carbon Filter, Reverse Osmosis', severity: 'high', plantImpact: 'Primary THM. Volatile — off-gases when water sits. Still harmful to soil microbiome. Carbon filter removes most; RO removes all.' },
  { name: 'Dichloroacetic acid', amount: '5.40 ppb', legal: 'No limit', ewgGuideline: '0.1 ppb', timesAbove: '54×', effect: 'Cancer', sources: 'Chlorine disinfection byproducts', filter: 'Carbon Filter, Reverse Osmosis', severity: 'moderate', plantImpact: 'Disinfection byproduct. Low direct plant toxicity. Removed by RO.' },
  { name: 'Dibromochloromethane', amount: '3.01 ppb', legal: 'No limit', ewgGuideline: '0.1 ppb', timesAbove: '30×', effect: 'Cancer', sources: 'Chlorine disinfection byproducts', filter: 'Carbon Filter, Reverse Osmosis', severity: 'moderate', plantImpact: 'THM compound. RO removes >99%.' },
  { name: 'Nitrate', amount: '0.686 ppm', legal: '10 ppm', ewgGuideline: '0.14 ppm', timesAbove: '4.9×', effect: 'Cancer', sources: 'Agricultural runoff, fertilizers, septic tanks', filter: 'Reverse Osmosis, Ion Exchange', severity: 'moderate', plantImpact: 'Actually a plant nutrient (nitrogen source). At 0.686 ppm, very low — not a concern for plants. RO removes if you want ultra-pure water for precise nutrient dosing.' },
  { name: 'Nitrate and Nitrite', amount: '0.701 ppm', legal: '10 ppm', ewgGuideline: '0.063 ppm', timesAbove: '11×', effect: 'Cancer', sources: 'Agricultural runoff', filter: 'Reverse Osmosis', severity: 'moderate', plantImpact: 'Combined nitrogen compounds. Low levels, not harmful to plants.' },
  { name: 'Uranium', amount: '2.04 pCi/L', legal: '20 pCi/L', ewgGuideline: '0.43 pCi/L', timesAbove: '4.8×', effect: 'Cancer', sources: 'Naturally Occurring', filter: 'Reverse Osmosis, Ion Exchange', severity: 'moderate', plantImpact: 'Radiological contaminant. Plants can uptake uranium from soil. For food crops, best to remove via RO.' },
  { name: 'Radium (-226 and -228)', amount: '0.22 pCi/L', legal: '5 pCi/L', ewgGuideline: '0.05 pCi/L', timesAbove: '4.3×', effect: 'Cancer', sources: 'Naturally Occurring', filter: 'Reverse Osmosis, Ion Exchange', severity: 'moderate', plantImpact: 'Radiological. Very low level. RO removes as precaution for food-grade crops.' },
  { name: 'Dibromoacetic acid', amount: '1.23 ppb', legal: 'No limit', ewgGuideline: '0.2 ppb', timesAbove: '6×', effect: 'Cancer', sources: 'Chlorine disinfection byproducts', filter: 'Carbon Filter, Reverse Osmosis', severity: 'low', plantImpact: 'Low concentration. Removed by carbon or RO.' },
]

const contaminantsOther = [
  { name: 'Fluoride', amount: '0.157 ppm', legal: '4 ppm', plantImpact: 'Can cause leaf tip burn in sensitive plants (spider plants, dracaena) at >1 ppm. At 0.157 ppm, very low. RO removes ~95%.' },
  { name: 'Barium', amount: '66.2 ppb', legal: '2,000 ppb', plantImpact: 'Not a plant concern at this level. Naturally occurring.' },
  { name: 'Chlorate', amount: '73.7 ppb', legal: 'No limit', plantImpact: 'Herbicide at high doses. At 73.7 ppb, negligible plant impact. RO removes.' },
  { name: 'Lithium', amount: '7.25 ppb', legal: 'No limit', plantImpact: 'Toxic to citrus at high levels. At 7.25 ppb, no concern for any crop.' },
  { name: 'Strontium', amount: '0.641 ppb', legal: 'No limit', plantImpact: 'Calcium analog. Very low. No plant concern.' },
  { name: 'Manganese', amount: 'Detected', legal: '—', plantImpact: 'Essential micronutrient for plants. Beneficial at trace levels.' },
  { name: 'Molybdenum', amount: 'Detected', legal: '—', plantImpact: 'Essential trace element for nitrogen fixation. Beneficial.' },
  { name: 'Selenium', amount: 'Detected', legal: '50 ppb', plantImpact: 'Micronutrient at trace levels. Can be toxic to plants at >5 ppm. Trace amounts fine.' },
  { name: 'Vanadium', amount: 'Detected', legal: 'No limit', plantImpact: 'Not essential for plants. Low levels not harmful.' },
]

const phGuide = [
  { crop: 'Hemp (CBD flower)', idealPh: '6.0–7.0', optimalPh: '6.3–6.8', notes: 'Slightly acidic preferred. Nutrient lockout below 5.5 or above 7.5.' },
  { crop: 'Basil / Holy Basil', idealPh: '5.5–6.5', optimalPh: '6.0–6.5', notes: 'Prefers slightly acidic. Iron deficiency above 7.0.' },
  { crop: 'Cruciferous Vegetables', idealPh: '6.0–7.5', optimalPh: '6.5–7.0', notes: 'Broccoli, kale, cabbage tolerate wider range. Club root worse in acidic soil.' },
  { crop: 'Tomatoes', idealPh: '6.0–6.8', optimalPh: '6.2–6.5', notes: 'Blossom end rot linked to calcium issues at wrong pH.' },
  { crop: 'Melons / Gourds', idealPh: '6.0–7.0', optimalPh: '6.0–6.5', notes: 'Good drainage critical. pH affects micronutrient availability.' },
  { crop: 'Heirloom Corn', idealPh: '5.8–7.0', optimalPh: '6.0–6.5', notes: 'Tolerant but happiest slightly acidic.' },
  { crop: 'Sunflowers', idealPh: '6.0–7.5', optimalPh: '6.0–7.0', notes: 'Very tolerant. Thrive in near-neutral.' },
  { crop: 'Mushroom Substrates', idealPh: '5.0–6.5', optimalPh: '5.5–6.0', notes: 'Slightly acidic. Masters mix and sawdust naturally buffer.' },
  { crop: 'Fruit Trees (general)', idealPh: '6.0–7.0', optimalPh: '6.0–6.5', notes: 'Most fruit trees prefer slightly acidic. Blueberries need 4.5–5.5.' },
  { crop: 'Cacti / Succulents', idealPh: '5.5–7.0', optimalPh: '6.0–6.5', notes: 'Good drainage more important than pH. Tolerate slightly alkaline.' },
]

const severityColor = {
  critical: 'bg-red-500/20 border-red-500/30 text-red-300',
  high: 'bg-orange-500/15 border-orange-500/25 text-orange-300',
  moderate: 'bg-amber-500/15 border-amber-500/25 text-amber-300',
  low: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300',
}

const severityBadge = {
  critical: 'bg-red-600/30 text-red-300',
  high: 'bg-orange-600/30 text-orange-300',
  moderate: 'bg-amber-600/30 text-amber-300',
  low: 'bg-emerald-600/30 text-emerald-300',
}

function Section({ id, icon: Icon, title, children, iconColor = 'text-blue-400' }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h2 className="text-2xl sm:text-3xl font-black mb-6 flex items-center gap-3">
        <Icon className={`w-7 h-7 ${iconColor}`} />
        <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">{title}</span>
      </h2>
      {children}
    </motion.section>
  )
}

export default function WaterPage() {
  const [expandedContaminant, setExpandedContaminant] = useState(null)

  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-800/30 border border-blue-600/30 rounded-full text-sm text-blue-300 mb-6">
          <Droplets className="w-4 h-4" />
          Water Analysis & Treatment Plan
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-4">
          <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Water Plan
          </span>
        </h1>
        <p className="text-lg text-blue-200/50 max-w-3xl">
          Complete analysis of Riverton City tap water for agricultural use. Why we need filtration, what system to build, and how to create perfect water for every crop on the property.
        </p>
      </motion.div>

      {/* Quick Nav */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-16">
        {[
          { href: '#report', label: 'Water Report', icon: Beaker },
          { href: '#contaminants', label: 'Contaminants', icon: AlertTriangle },
          { href: '#treatment', label: 'Treatment', icon: Filter },
          { href: '#ph', label: 'pH & Minerals', icon: Target },
        ].map(n => (
          <a key={n.href} href={n.href} className="flex items-center gap-2 p-3 bg-blue-900/15 border border-blue-700/15 rounded-xl text-sm text-blue-300/60 hover:text-white hover:border-blue-500/30 transition-all">
            <n.icon className="w-4 h-4" /> {n.label}
          </a>
        ))}
      </div>

      {/* ──── SECTION 1: Water Report Overview ──── */}
      <Section id="report" icon={Beaker} title="Riverton City Water Report — 2024">
        <div className="p-6 bg-blue-900/15 border border-blue-700/20 rounded-2xl mb-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 bg-blue-950/40 rounded-xl">
              <div className="text-xs text-blue-400/50 mb-1">Water System</div>
              <div className="text-sm font-bold text-white">{waterSource.system}</div>
            </div>
            <div className="text-center p-4 bg-blue-950/40 rounded-xl">
              <div className="text-xs text-blue-400/50 mb-1">Source</div>
              <div className="text-sm font-bold text-white">{waterSource.source}</div>
            </div>
            <div className="text-center p-4 bg-blue-950/40 rounded-xl">
              <div className="text-xs text-blue-400/50 mb-1">Contaminants Found</div>
              <div className="text-2xl font-black text-amber-400">{waterSource.totalContaminants}</div>
            </div>
            <div className="text-center p-4 bg-blue-950/40 rounded-xl">
              <div className="text-xs text-blue-400/50 mb-1">Exceed EWG Guidelines</div>
              <div className="text-2xl font-black text-red-400">{waterSource.exceedGuidelines}</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-800/20 border border-emerald-600/20 rounded-lg text-sm text-emerald-400">
              <ShieldCheck className="w-4 h-4" /> EPA Compliant (legal standards)
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-red-800/20 border border-red-600/20 rounded-lg text-sm text-red-400">
              <ShieldAlert className="w-4 h-4" /> 15 exceed EWG health guidelines
            </div>
          </div>

          <p className="text-sm text-blue-200/50 mb-4">
            Riverton's water passes federal EPA standards but <strong className="text-white">15 of 27 detected contaminants exceed the Environmental Working Group's more protective health guidelines</strong>. The water is legally safe for drinking — but for artisan-quality agriculture, we need to address chlorine/chloramine disinfection byproducts, trace metals, and radiological elements to protect soil biology and produce the cleanest possible crops.
          </p>

          <div className="flex flex-wrap gap-2">
            <a href={waterSource.reportUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300">
              Official City Report (Issuu) <ExternalLink className="w-3 h-3" />
            </a>
            <a href={waterSource.ewgUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300">
              EWG Tap Water Database <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="p-5 bg-amber-900/15 border border-amber-700/20 rounded-xl">
          <h4 className="font-bold text-amber-300 mb-2 flex items-center gap-2"><Info className="w-4 h-4" /> Why This Matters for Farming</h4>
          <div className="text-sm text-amber-200/60 space-y-2">
            <p><strong className="text-amber-300">Chlorine & byproducts</strong> — The #1 problem. Chlorinated water kills beneficial soil microbes, mycorrhizal fungi, and composting organisms. Every time you water with tap water, you're sterilizing your living soil. This is devastating for organic/regenerative growing.</p>
            <p><strong className="text-amber-300">Heavy metals (arsenic, chromium, uranium)</strong> — Even at trace levels, these accumulate in soil over seasons and get taken up into edible plant tissue (especially leafy greens, root vegetables). For food crops and artisan products, this is unacceptable.</p>
            <p><strong className="text-amber-300">Hard water minerals</strong> — Riverton's purchased surface water contains calcium, magnesium, and other dissolved minerals that raise pH and leave salt buildup in soil, clogging root systems and locking out nutrients over time.</p>
            <p><strong className="text-amber-300">Mushroom substrates</strong> — Chlorinated water used in substrate preparation or misting will inhibit mycelium growth and introduce contaminants that compete with your desired fungi.</p>
          </div>
        </div>
      </Section>

      {/* ──── SECTION 2: Contaminant Breakdown ──── */}
      <Section id="contaminants" icon={AlertTriangle} title="Full Contaminant Analysis" iconColor="text-red-400">
        <p className="text-sm text-blue-200/50 mb-6">
          Every contaminant detected in Riverton water, with its measured level, legal limit, EWG health guideline, and — critically — <strong className="text-white">what it means for your plants, soil, and mushrooms</strong>.
        </p>

        <h3 className="text-lg font-bold text-red-300 mb-4">15 Contaminants Exceeding EWG Health Guidelines</h3>
        <div className="space-y-2 mb-10">
          {contaminantsExceed.map((c, i) => (
            <div key={i} className={`p-4 rounded-xl border transition-all cursor-pointer ${severityColor[c.severity]} ${expandedContaminant === i ? 'ring-1 ring-white/10' : ''}`}
              onClick={() => setExpandedContaminant(expandedContaminant === i ? null : i)}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-3 flex-1">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${severityBadge[c.severity]}`}>{c.severity.toUpperCase()}</span>
                  <span className="font-bold text-white text-sm">{c.name}</span>
                </div>
                <div className="flex flex-wrap gap-3 text-xs">
                  <span>Detected: <strong className="text-white">{c.amount}</strong></span>
                  <span>Legal: {c.legal}</span>
                  <span className="text-red-300 font-bold">{c.timesAbove} above EWG</span>
                </div>
              </div>

              {expandedContaminant === i && (
                <div className="mt-4 pt-4 border-t border-white/10 space-y-3 text-sm">
                  <div><span className="text-white/50">EWG Health Guideline:</span> <span className="text-white">{c.ewgGuideline}</span></div>
                  <div><span className="text-white/50">Health Effect:</span> <span className="text-white">{c.effect}</span></div>
                  <div><span className="text-white/50">Sources:</span> <span className="text-white/70">{c.sources}</span></div>
                  <div><span className="text-white/50">Filtration:</span> <span className="text-blue-300">{c.filter}</span></div>
                  <div className="p-3 bg-black/20 rounded-lg">
                    <span className="text-emerald-400 font-semibold">🌱 Farm Impact: </span>
                    <span className="text-emerald-200/70">{c.plantImpact}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <h3 className="text-lg font-bold text-blue-300 mb-4">12 Other Detected Contaminants (Below Guidelines)</h3>
        <div className="grid sm:grid-cols-2 gap-2 mb-6">
          {contaminantsOther.map((c, i) => (
            <div key={i} className="p-4 bg-blue-900/10 border border-blue-700/15 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-white text-sm">{c.name}</span>
                <span className="text-xs text-blue-300/50">{c.amount}</span>
              </div>
              <p className="text-xs text-blue-200/40">{c.plantImpact}</p>
            </div>
          ))}
        </div>

        <div className="p-5 bg-red-900/15 border border-red-700/20 rounded-xl">
          <h4 className="font-bold text-red-300 mb-2">Bottom Line: Why Tap Water Fails for This Farm</h4>
          <ul className="text-sm text-red-200/60 space-y-1">
            <li className="flex items-start gap-2"><span className="text-red-400 mt-1">•</span> <strong className="text-red-300">9 chlorine disinfection byproducts</strong> — destroy soil biology, harm mycorrhizae, inhibit mushroom mycelium</li>
            <li className="flex items-start gap-2"><span className="text-red-400 mt-1">•</span> <strong className="text-red-300">Arsenic at 4.7 ppb</strong> — accumulates in food crops; 1,175× above EWG guideline</li>
            <li className="flex items-start gap-2"><span className="text-red-400 mt-1">•</span> <strong className="text-red-300">Chromium VI, uranium, radium</strong> — trace carcinogens that bioaccumulate in edible tissue</li>
            <li className="flex items-start gap-2"><span className="text-red-400 mt-1">•</span> <strong className="text-red-300">Hard water minerals</strong> — raise soil pH over time, cause salt buildup, nutrient lockout</li>
          </ul>
          <p className="mt-3 text-sm text-white/60"><strong className="text-white">Verdict: Reverse osmosis is essential.</strong> Simple carbon filtration handles chlorine byproducts but won't remove arsenic, chromium, uranium, radium, or dissolved minerals.</p>
        </div>
      </Section>

      {/* ──── SECTION 3: Treatment Systems ──── */}
      <Section id="treatment" icon={Filter} title="Water Treatment Solutions" iconColor="text-cyan-400">
        {/* Option Comparison */}
        <div className="grid lg:grid-cols-2 gap-4 mb-8">
          {/* RO System */}
          <div className="p-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/10 border-2 border-cyan-500/30 rounded-2xl">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs px-2 py-0.5 bg-cyan-600/30 text-cyan-300 rounded-full font-bold">RECOMMENDED</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Reverse Osmosis System</h3>
            <p className="text-sm text-cyan-300/50 mb-4">500-gallon storage tank for whole-farm use</p>

            <div className="space-y-2 mb-4">
              {[
                'Removes 95–99% of all dissolved solids, metals, radionuclides',
                'Eliminates all 15 contaminants exceeding EWG guidelines',
                'Produces near-distilled water (TDS ~10–30 ppm)',
                'You then re-mineralize to perfect specs for each crop',
                'Commercially available, reliable, relatively affordable',
                'Wastes ~2–4 gallons per 1 gallon produced (use waste for non-food irrigation)',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-cyan-200/60">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="p-4 bg-black/20 rounded-xl mb-4">
              <h4 className="font-semibold text-cyan-300 text-sm mb-2">Recommended Setup</h4>
              <ul className="text-xs text-cyan-200/50 space-y-1">
                <li><strong className="text-white">Stage 1:</strong> 5-micron sediment pre-filter</li>
                <li><strong className="text-white">Stage 2:</strong> Granular activated carbon (GAC) — removes chlorine, VOCs, THMs</li>
                <li><strong className="text-white">Stage 3:</strong> Carbon block — polishes remaining organics</li>
                <li><strong className="text-white">Stage 4:</strong> RO membrane (75–100 GPD or higher for farm scale)</li>
                <li><strong className="text-white">Stage 5:</strong> Post-carbon polishing filter</li>
                <li><strong className="text-white">Storage:</strong> 500-gallon food-grade polyethylene tank (IBC tote or dedicated tank)</li>
                <li><strong className="text-white">Pump:</strong> Demand/booster pump for garden-pressure delivery</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-3 bg-black/20 rounded-lg">
                <div className="text-xs text-cyan-400/50">Estimated Cost</div>
                <div className="text-lg font-bold text-white">$300–$800</div>
                <div className="text-xs text-cyan-400/40">RO unit + tank + pump</div>
              </div>
              <div className="text-center p-3 bg-black/20 rounded-lg">
                <div className="text-xs text-cyan-400/50">Annual Filters</div>
                <div className="text-lg font-bold text-white">$60–$150</div>
                <div className="text-xs text-cyan-400/40">Replace every 6–12 months</div>
              </div>
            </div>
          </div>

          {/* Solar Distillation */}
          <div className="p-6 bg-gradient-to-br from-amber-900/15 to-orange-900/10 border border-amber-500/20 rounded-2xl">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs px-2 py-0.5 bg-amber-600/30 text-amber-300 rounded-full font-bold">ALTERNATIVE</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Solar Water Distillation</h3>
            <p className="text-sm text-amber-300/50 mb-4">Sun-heated evaporation with underground condensation</p>

            <div className="space-y-2 mb-4">
              {[
                'Produces the purest water possible — 0 TDS, 0 contaminants',
                'Free energy (solar heated) — no electricity for heating',
                'Underground heat-sink tank condenses vapor efficiently',
                'Charcoal post-filter adds a final polish for taste/organics',
                'Beautiful off-grid system — no ongoing filter costs',
                'Much lower throughput — ~0.5–2 gallons/day per sq meter of collector',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-amber-200/60">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="p-4 bg-black/20 rounded-xl mb-4">
              <h4 className="font-semibold text-amber-300 text-sm mb-2">Solar Still Design Concept</h4>
              <ul className="text-xs text-amber-200/50 space-y-1">
                <li><strong className="text-white">Collector:</strong> Angled glass/polycarbonate panel over black-lined basin (4×8 ft+)</li>
                <li><strong className="text-white">Heating:</strong> Sun heats water in basin → evaporates → condenses on glass</li>
                <li><strong className="text-white">Collection:</strong> Condensate runs down glass angle into trough → pipe to underground</li>
                <li><strong className="text-white">Underground Tank:</strong> Buried insulated tank acts as heat sink — cools and stores distilled water</li>
                <li><strong className="text-white">Post-filter:</strong> Activated charcoal from hardwood (natural) for final polish</li>
                <li><strong className="text-white">Output:</strong> ~1–3 gallons/day per 32 sq ft panel (Utah summer sun)</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-3 bg-black/20 rounded-lg">
                <div className="text-xs text-amber-400/50">Build Cost</div>
                <div className="text-lg font-bold text-white">$200–$600</div>
                <div className="text-xs text-amber-400/40">DIY materials</div>
              </div>
              <div className="text-center p-3 bg-black/20 rounded-lg">
                <div className="text-xs text-amber-400/50">Annual Cost</div>
                <div className="text-lg font-bold text-white">~$0</div>
                <div className="text-xs text-amber-400/40">Solar powered, minimal parts</div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Recommendation */}
        <div className="p-6 bg-gradient-to-br from-emerald-500/10 to-cyan-500/5 border-2 border-emerald-500/30 rounded-2xl mb-8">
          <h3 className="text-lg font-bold text-emerald-300 mb-3 flex items-center gap-2">
            <Target className="w-5 h-5" /> The Optimal Hybrid Approach
          </h3>
          <div className="text-sm text-emerald-200/60 space-y-3">
            <p><strong className="text-white">Primary: RO system → 500-gallon tank.</strong> This handles 95%+ of farm water needs. A commercial 400+ GPD RO unit can fill 500 gallons in ~20 hours. Run it continuously — you'll always have clean water on demand. Use the RO waste water (still decent quality) for non-food ornamentals, lawn, or the corn field next door.</p>
            <p><strong className="text-white">Supplement: Solar still → smaller 50-gallon underground tank.</strong> Build one as a passion project. Use it for mushroom substrate prep, seedling starts, and the most sensitive applications where you want truly zero-TDS water. It's a beautiful, off-grid complement.</p>
            <p><strong className="text-white">Post-treatment: Re-mineralize the RO water</strong> before feeding plants. Pure RO water is "hungry" — it leaches minerals from soil. Add back calcium, magnesium, and trace minerals in precise amounts for each crop type (details below).</p>
          </div>
        </div>

        {/* Simple affordable solutions */}
        <div className="p-6 bg-blue-900/15 border border-blue-700/20 rounded-2xl">
          <h3 className="text-lg font-bold text-blue-300 mb-4 flex items-center gap-2">
            <Waves className="w-5 h-5" /> Budget-Friendly Options (If RO Is Too Much Initially)
          </h3>
          <div className="space-y-3">
            {[
              {
                title: 'Countertop RO (~$150–$300)',
                desc: 'Small units like APEC or iSpring produce 50–75 gallons/day. Fill 5-gallon buckets and transfer to a simple storage drum. Perfect starter system.',
              },
              {
                title: 'Whole-house carbon filter ($50–$150)',
                desc: 'Removes chlorine, THMs, and volatile organics. Does NOT remove arsenic, metals, or radiologicals. Good as a first step / RO pre-filter.',
              },
              {
                title: 'Let water sit 24+ hours in open container',
                desc: 'Free! Chlorine (not chloramine) off-gases. Reduces chloroform and volatile THMs. Does not remove metals or hard minerals. Emergency/temporary method only.',
              },
              {
                title: 'Vitamin C dechlorination ($10/year)',
                desc: 'Add a tiny pinch of ascorbic acid (vitamin C) per 5 gallons. Neutralizes chlorine and chloramine instantly. Cheap hack but doesn\'t remove metals.',
              },
              {
                title: 'Activated charcoal barrel filter (~$50 DIY)',
                desc: 'Run water through a food-grade barrel filled with granular activated carbon (coconut shell). Removes chlorine + organics. Pair with a sediment pre-filter.',
              },
            ].map((opt, i) => (
              <div key={i} className="p-4 bg-blue-950/30 rounded-xl">
                <h4 className="font-semibold text-white text-sm mb-1">{opt.title}</h4>
                <p className="text-xs text-blue-200/50">{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ──── SECTION 4: pH, Minerals, and Water Enrichment ──── */}
      <Section id="ph" icon={Target} title="pH, Minerals & Water Enrichment" iconColor="text-emerald-400">
        {/* Why pH Matters */}
        <div className="p-6 bg-emerald-900/15 border border-emerald-700/20 rounded-2xl mb-8">
          <h3 className="text-lg font-bold text-emerald-300 mb-3">Why pH Matters for Every Crop</h3>
          <div className="text-sm text-emerald-200/50 space-y-2 mb-4">
            <p>pH controls <strong className="text-white">nutrient availability</strong>. Even if nutrients are in the soil, plants can't absorb them if pH is wrong. Iron, manganese, zinc, and copper become locked out above pH 7.5. Calcium and magnesium lock out below pH 5.5.</p>
            <p><strong className="text-white">Riverton tap water pH is typically 7.5–8.2</strong> (moderately alkaline — common for Utah surface water). Over time, irrigating with alkaline water raises soil pH, locks out micronutrients, and creates hard white salt deposits on the surface.</p>
            <p><strong className="text-white">RO water pH: ~6.5–7.0</strong> (near neutral, slightly acidic from dissolved CO₂). This is the ideal starting point — you can precisely adjust from there.</p>
          </div>

          <div className="p-4 bg-emerald-800/20 rounded-xl">
            <h4 className="font-semibold text-emerald-400 text-sm mb-2">Award-Winning Garden Water Profile (Target)</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 bg-black/20 rounded-lg">
                <div className="text-xs text-emerald-400/50">pH</div>
                <div className="text-lg font-bold text-white">6.0–6.5</div>
                <div className="text-xs text-emerald-400/40">Slightly acidic</div>
              </div>
              <div className="p-3 bg-black/20 rounded-lg">
                <div className="text-xs text-emerald-400/50">TDS</div>
                <div className="text-lg font-bold text-white">150–300 ppm</div>
                <div className="text-xs text-emerald-400/40">After enrichment</div>
              </div>
              <div className="p-3 bg-black/20 rounded-lg">
                <div className="text-xs text-emerald-400/50">Calcium</div>
                <div className="text-lg font-bold text-white">40–80 ppm</div>
                <div className="text-xs text-emerald-400/40">CaSO₄ or CaCO₃</div>
              </div>
              <div className="p-3 bg-black/20 rounded-lg">
                <div className="text-xs text-emerald-400/50">Magnesium</div>
                <div className="text-lg font-bold text-white">15–30 ppm</div>
                <div className="text-xs text-emerald-400/40">Epsom salt</div>
              </div>
            </div>
          </div>
        </div>

        {/* pH Guide per Crop */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-emerald-300 mb-4 flex items-center gap-2">
            <Gauge className="w-5 h-5" /> Optimal pH by Crop
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="border-b border-emerald-700/20">
                  <th className="text-left py-3 px-4 text-emerald-400/60 font-semibold text-xs uppercase">Crop</th>
                  <th className="text-center py-3 px-4 text-emerald-400/60 font-semibold text-xs uppercase">Range</th>
                  <th className="text-center py-3 px-4 text-emerald-400/60 font-semibold text-xs uppercase">Sweet Spot</th>
                  <th className="text-left py-3 px-4 text-emerald-400/60 font-semibold text-xs uppercase">Notes</th>
                </tr>
              </thead>
              <tbody>
                {phGuide.map((row, i) => (
                  <tr key={i} className="border-b border-emerald-800/15 hover:bg-emerald-900/10">
                    <td className="py-3 px-4 font-medium text-white">{row.crop}</td>
                    <td className="py-3 px-4 text-center text-blue-300">{row.idealPh}</td>
                    <td className="py-3 px-4 text-center font-bold text-emerald-400">{row.optimalPh}</td>
                    <td className="py-3 px-4 text-emerald-200/40 text-xs">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-emerald-400/40">Sources: University of Utah Extension, Oregon State Extension, Cornell CALS soil guidelines, Cannabis Business Times</p>
        </div>

        {/* Hard Water vs Soft Water */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="p-5 bg-red-900/10 border border-red-700/15 rounded-xl">
            <h4 className="font-bold text-red-300 mb-2 flex items-center gap-2"><Snowflake className="w-4 h-4" /> Hard Water Problems</h4>
            <ul className="text-sm text-red-200/50 space-y-1.5">
              <li>• <strong className="text-red-200">High Ca/Mg carbonates</strong> — raises soil pH, locks out iron/zinc/manganese</li>
              <li>• <strong className="text-red-200">Scale/salt buildup</strong> — white crust on soil surface, clogs drip emitters</li>
              <li>• <strong className="text-red-200">Nutrient interference</strong> — excess calcium competes with potassium and magnesium uptake</li>
              <li>• <strong className="text-red-200">Alkaline drift</strong> — gradually raises soil pH above optimal range</li>
              <li>• Riverton tap is moderately hard (~150–250 ppm TDS typically)</li>
            </ul>
          </div>
          <div className="p-5 bg-blue-900/10 border border-blue-700/15 rounded-xl">
            <h4 className="font-bold text-blue-300 mb-2 flex items-center gap-2"><Droplets className="w-4 h-4" /> Why Softened Water Is Also Bad</h4>
            <ul className="text-sm text-blue-200/50 space-y-1.5">
              <li>• <strong className="text-blue-200">Salt-based softeners</strong> replace calcium/magnesium with sodium (Na+)</li>
              <li>• <strong className="text-blue-200">Sodium accumulation</strong> — toxic to most plants at &gt;70 ppm, destroys soil structure</li>
              <li>• <strong className="text-blue-200">SAR (Sodium Adsorption Ratio)</strong> goes up — soil becomes compacted, water-repellent</li>
              <li>• <strong className="text-blue-200">Never water food crops with softened water</strong></li>
              <li>• RO is the correct solution — removes minerals without replacing with sodium</li>
            </ul>
          </div>
        </div>

        {/* Water Enrichment */}
        <div className="p-6 bg-gradient-to-br from-emerald-900/20 to-cyan-900/10 border border-emerald-600/20 rounded-2xl mb-8">
          <h3 className="text-lg font-bold text-emerald-300 mb-4 flex items-center gap-2">
            <FlaskConical className="w-5 h-5" /> Water Enrichment Protocol (Post-RO)
          </h3>
          <p className="text-sm text-emerald-200/50 mb-4">
            RO water is a blank canvas. Add back exactly what your plants need — nothing more. This is how award-winning growers achieve consistent, artisan-quality results.
          </p>

          <div className="space-y-3">
            {[
              {
                step: '1. Cal-Mag Addition',
                what: 'Add calcium sulfate (gypsum) for Ca, Epsom salt (MgSO₄) for Mg',
                rate: 'Target 40–80 ppm Ca, 15–30 ppm Mg. ~1 tsp gypsum + ½ tsp Epsom per 5 gallons',
                cost: '~$15 for 5 lbs each (lasts months)',
                why: 'Replaces the beneficial minerals RO removed. Prevents blossom end rot (tomatoes), tip burn (lettuce).',
              },
              {
                step: '2. pH Adjustment',
                what: 'pH Down (phosphoric acid or citric acid) or pH Up (potassium bicarbonate)',
                rate: 'Adjust to 6.0–6.5 for most crops. Use a digital pH meter ($15–$40)',
                cost: '~$10–$20 for pH solutions',
                why: 'Precise pH control = maximum nutrient availability. Check pH after adding all amendments.',
              },
              {
                step: '3. Trace Minerals (Optional)',
                what: 'Kelp extract, humic/fulvic acid, or a complete micro-mix (Fe, Mn, Zn, Cu, B, Mo)',
                rate: 'Follow product instructions. Kelp: 1–2 ml per gallon. Humic: 1 ml per gallon.',
                cost: '~$15–$30 per bottle (lasts season)',
                why: 'Supercharges soil biology, feeds mycorrhizal networks, and provides trace elements plants can\'t get from RO water alone.',
              },
              {
                step: '4. Beneficial Microbes (Weekly)',
                what: 'Mycorrhizal inoculant, compost tea, or EM-1 (effective microorganisms)',
                rate: 'Brew compost tea (24–48 hrs aerated) or add commercial inoculant per label',
                cost: '~$20–$40 for inoculant (lasts season)',
                why: 'Since RO water won\'t kill your soil biology (unlike tap!), these microbes actually survive and colonize roots.',
              },
            ].map((item, i) => (
              <div key={i} className="p-4 bg-black/15 rounded-xl">
                <h4 className="font-bold text-emerald-300 text-sm mb-2">{item.step}</h4>
                <div className="grid sm:grid-cols-2 gap-2 text-xs">
                  <div><span className="text-white/40">What: </span><span className="text-white/70">{item.what}</span></div>
                  <div><span className="text-white/40">Rate: </span><span className="text-white/70">{item.rate}</span></div>
                  <div><span className="text-white/40">Cost: </span><span className="text-amber-400">{item.cost}</span></div>
                  <div><span className="text-white/40">Why: </span><span className="text-emerald-300/70">{item.why}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Crop-Specific Water Recipes */}
        <div className="p-6 bg-blue-900/15 border border-blue-700/20 rounded-2xl mb-8">
          <h3 className="text-lg font-bold text-blue-300 mb-4">Water Recipes by Crop Stage</h3>
          <div className="space-y-4">
            {[
              {
                icon: Leaf,
                crop: 'Hemp (CBD Flower)',
                stages: [
                  { stage: 'Seedling/Clone', ph: '6.3–6.5', tds: '150–250 ppm', notes: 'Light cal-mag, no heavy nutrients. Keep it gentle.' },
                  { stage: 'Vegetative', ph: '6.0–6.5', tds: '400–800 ppm', notes: 'Increase nitrogen-heavy nutrients. Full cal-mag. Kelp weekly.' },
                  { stage: 'Flower (weeks 1–4)', ph: '6.0–6.5', tds: '800–1200 ppm', notes: 'Shift to phosphorus/potassium. Maintain cal-mag. Reduce nitrogen.' },
                  { stage: 'Late Flower / Flush', ph: '6.0–6.3', tds: '50–150 ppm', notes: 'Final 1–2 weeks: near-pure RO water flush for clean flavor/profile.' },
                ],
              },
              {
                icon: Sprout,
                crop: 'Vegetables & Herbs',
                stages: [
                  { stage: 'Seedling', ph: '6.2–6.5', tds: '100–200 ppm', notes: 'Very light. Cal-mag only. Avoid burn.' },
                  { stage: 'Growth', ph: '6.0–6.5', tds: '300–600 ppm', notes: 'Balanced NPK + cal-mag + trace minerals.' },
                  { stage: 'Fruiting/Harvest', ph: '6.0–6.5', tds: '400–800 ppm', notes: 'Boost K for fruiting (tomatoes, melons, gourds). Maintain Ca for blossom end rot prevention.' },
                ],
              },
              {
                icon: Mushroom,
                crop: 'Mushroom Substrates & Misting',
                stages: [
                  { stage: 'Substrate Prep', ph: '5.5–6.5', tds: '<50 ppm', notes: 'Near-pure RO or distilled. No chlorine. Substrate naturally buffers pH.' },
                  { stage: 'Fruiting Chamber Mist', ph: '6.0–7.0', tds: '<50 ppm', notes: 'Ultra-clean misting water. Any minerals leave deposits on caps. RO essential.' },
                  { stage: 'Log Soaking', ph: '6.0–7.0', tds: '<100 ppm', notes: 'Soak logs in RO water. Chlorine in tap water kills mycelium in the bark.' },
                ],
              },
            ].map((recipe, i) => (
              <div key={i} className="p-4 bg-blue-950/30 rounded-xl">
                <h4 className="font-bold text-white text-sm mb-3 flex items-center gap-2">
                  <recipe.icon className="w-4 h-4 text-blue-400" /> {recipe.crop}
                </h4>
                <div className="space-y-1.5">
                  {recipe.stages.map((s, j) => (
                    <div key={j} className="grid grid-cols-12 gap-2 text-xs py-1.5 border-b border-white/5 last:border-0">
                      <div className="col-span-3 font-medium text-white/70">{s.stage}</div>
                      <div className="col-span-2 text-blue-300">pH {s.ph}</div>
                      <div className="col-span-2 text-amber-300">{s.tds}</div>
                      <div className="col-span-5 text-white/40">{s.notes}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Summary */}
        <div className="p-6 bg-gradient-to-br from-emerald-500/10 to-blue-500/5 border-2 border-emerald-500/30 rounded-2xl">
          <h3 className="text-lg font-bold text-emerald-300 mb-3">Water Plan Summary</h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="text-sm font-semibold text-white mb-2">What We're Building</h4>
              <ul className="text-sm text-emerald-200/60 space-y-1">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> 400+ GPD reverse osmosis system</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> 500-gallon food-grade storage tank</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> Booster pump for garden-pressure delivery</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> TDS meter + pH meter for monitoring</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> Cal-Mag + trace mineral enrichment station</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> Optional: Solar still for ultra-pure water</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-2">Total Investment</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm"><span className="text-emerald-200/50">RO System (400+ GPD)</span><span className="text-white font-medium">$300–$500</span></div>
                <div className="flex justify-between text-sm"><span className="text-emerald-200/50">500-gal Tank + Fittings</span><span className="text-white font-medium">$100–$200</span></div>
                <div className="flex justify-between text-sm"><span className="text-emerald-200/50">Booster Pump</span><span className="text-white font-medium">$50–$100</span></div>
                <div className="flex justify-between text-sm"><span className="text-emerald-200/50">TDS + pH Meters</span><span className="text-white font-medium">$30–$60</span></div>
                <div className="flex justify-between text-sm"><span className="text-emerald-200/50">Minerals / Amendments</span><span className="text-white font-medium">$40–$80</span></div>
                <div className="flex justify-between text-sm"><span className="text-emerald-200/50">Solar Still (optional)</span><span className="text-white font-medium">$200–$600</span></div>
                <div className="flex justify-between text-sm pt-2 border-t border-emerald-700/20"><span className="text-emerald-300 font-bold">Total (without solar)</span><span className="text-emerald-300 font-bold">$520–$940</span></div>
                <div className="flex justify-between text-sm"><span className="text-amber-300">Annual maintenance</span><span className="text-amber-300">$60–$150/year</span></div>
              </div>
            </div>
          </div>
          <p className="text-sm text-emerald-400/50">Sources: EWG Tap Water Database (UTAH18025), EPA SDWIS, University of California Davis Plant Sciences, Oregon State Extension Service, Cannabis Business Times nutrient guides, USDA NRCS irrigation water quality guidelines.</p>
        </div>
      </Section>
    </div>
  )
}
