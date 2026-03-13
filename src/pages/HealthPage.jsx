import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Heart, ShieldCheck, Leaf, Sprout, AlertTriangle, CheckCircle2,
  ExternalLink, Beaker, Apple, Flame, Droplets, Brain, Dna, Ban
} from 'lucide-react'

const cruciferousCompounds = [
  { compound: 'Sulforaphane', source: 'Broccoli (sprouts 100×), kale, cabbage, Brussels sprouts', mechanism: 'Activates Nrf2 pathway → upregulates Phase II detox enzymes (glutathione, SOD). Induces apoptosis in cancer cells while protecting healthy cells.', studies: 'Over 3,000+ published studies. Johns Hopkins found broccoli sprouts contain 20–100× more sulforaphane than mature broccoli.', dose: '40–60 mg/day (or 100g broccoli sprouts). Chewing raw activates myrosinase enzyme for conversion.' },
  { compound: 'Indole-3-Carbinol (I3C)', source: 'All cruciferous vegetables', mechanism: 'Modulates estrogen metabolism — shifts toward protective 2-OH estrone. Anti-proliferative in hormone-sensitive cancers (breast, prostate, ovarian).', studies: 'Memorial Sloan Kettering: I3C shown to inhibit growth of breast and prostate cancer cells in vitro.', dose: 'Found in 1–2 servings of cruciferous vegetables daily.' },
  { compound: 'DIM (Diindolylmethane)', source: 'Formed from I3C during digestion of cruciferous vegetables', mechanism: 'Potent estrogen modulator. Promotes beneficial estrogen metabolites. Anti-androgen in prostate cancer models.', studies: 'Clinical trials for cervical dysplasia, breast cancer prevention. Available as supplement.', dose: '100–200 mg/day supplement or 2+ servings cruciferous vegetables.' },
  { compound: 'Glucosinolates → Isothiocyanates', source: 'All cruciferous vegetables (activated by chewing/chopping)', mechanism: 'Broad-spectrum anti-cancer: inhibit tumor growth, induce cancer cell death, reduce inflammation, enhance DNA repair.', studies: 'Meta-analyses show 15–30% reduced cancer risk with regular cruciferous vegetable consumption across multiple cancer types.', dose: '3–5 servings per week minimum. Raw or lightly steamed preserves more compounds than boiling.' },
  { compound: 'Kaempferol', source: 'Kale, broccoli, Brussels sprouts, cabbage', mechanism: 'Flavonoid antioxidant. Anti-inflammatory (inhibits NF-κB). Induces apoptosis in cancer cells. Cardioprotective.', studies: 'Associated with reduced risk of chronic diseases in epidemiological studies.', dose: 'Abundant in kale — 1 cup provides significant amounts.' },
]

const avoidList = [
  { item: 'Hydrogenated / Partially Hydrogenated Oils', why: 'Trans fats. Directly linked to heart disease, inflammation, insulin resistance. Banned by FDA in 2018 but still in some products via loopholes.', found: 'Margarine, shortening, packaged baked goods, microwave popcorn, non-dairy creamers', alternative: 'Butter (grass-fed), olive oil, coconut oil, avocado oil' },
  { item: 'Seed Oils (Soybean, Canola, Corn, Sunflower, Safflower)', why: 'Extremely high omega-6 (inflammatory). Oxidize easily when heated → lipid peroxides → cellular damage. Drive chronic inflammation. 20:1 omega-6:omega-3 ratio in Standard American Diet (should be 1:1).', found: 'Almost every restaurant, packaged food, salad dressing, fried food', alternative: 'Extra virgin olive oil (high polyphenol), avocado oil, coconut oil, butter, tallow, ghee' },
  { item: 'Refined Sugar / High Fructose Corn Syrup', why: 'Feeds cancer cells directly (Warburg effect). Drives insulin resistance, fatty liver, obesity, type 2 diabetes, chronic inflammation. Average American consumes 77g/day (WHO recommends <25g).', found: 'Soda, juice, cereal, bread, sauces, condiments — hidden in 74% of packaged foods', alternative: 'Stevia (grow your own!), monk fruit, raw honey (small amounts), whole fruit' },
  { item: 'Artificial Dyes (Red 40, Yellow 5, Blue 1, etc.)', why: 'Derived from petroleum. Linked to hyperactivity in children, potential carcinogens. Banned in many European countries.', found: 'Candy, sports drinks, cereal, snack foods, medications', alternative: 'Beet juice (red), turmeric (yellow), spirulina (blue), butterfly pea flower' },
  { item: 'Sodium Nitrite / Nitrate (in processed meats)', why: 'Forms nitrosamines (carcinogenic) when heated. WHO classifies processed meat as Group 1 carcinogen.', found: 'Hot dogs, bacon, deli meats, sausages, jerky', alternative: 'Fresh meat, celery-salt cured options, homemade jerky without nitrites' },
  { item: 'BHA/BHT Preservatives', why: 'Endocrine disruptors. Classified as "reasonably anticipated to be a human carcinogen" by NTP.', found: 'Cereal, chips, butter, chewing gum, some cosmetics', alternative: 'Fresh food, rosemary extract (natural preservative), vitamin E (tocopherols)' },
  { item: 'Glyphosate (Roundup) Residues', why: 'WHO classified as "probably carcinogenic." Disrupts gut microbiome (kills beneficial bacteria). Found on non-organic wheat, oats, soy, corn.', found: 'Non-organic grains, bread, cereal, oatmeal, soy products', alternative: 'Organic or homegrown. Lazy K grows everything without herbicides or pesticides.' },
]

const ketosisGuide = [
  { phase: 'Phase 1: Eliminate', items: ['All refined sugar and HFCS', 'All seed oils', 'White flour / processed grains', 'Soda, juice, sweetened drinks', 'Ultra-processed packaged foods', 'Fast food'] },
  { phase: 'Phase 2: Foundation Foods', items: ['Cruciferous vegetables at every meal (broccoli, kale, cabbage, cauliflower)', 'Leafy greens (arugula, spinach, Swiss chard)', 'Fresh herbs (basil, oregano, thyme, rosemary)', 'Wild-caught fish (salmon, sardines — omega-3)', 'Pasture-raised chicken breast', 'Pasture-raised eggs (2–3/day max)', 'High-polyphenol olive oil (liberal use)', 'Avocado, nuts, seeds'] },
  { phase: 'Phase 3: Therapeutic Additions', items: ['CBD oil (anti-inflammatory, anti-anxiety, pain management)', 'Lion\'s mane mushroom (NGF, cognitive support)', 'Shiitake/maitake mushroom broth (beta-glucans, immune)', 'Holy basil (tulsi) tea daily (adaptogen, cortisol reduction)', 'Turmeric + black pepper (curcumin bioavailability)', 'Fermented foods: sauerkraut, kimchi (probiotic)', 'Bone broth or mushroom broth (gut healing)'] },
  { phase: 'Phase 4: Metabolic Ketosis', items: ['Keep net carbs under 20–30g/day (cruciferous veggies are very low carb)', 'Healthy fats: 60–75% of calories (olive oil, avocado, coconut, nuts)', 'Moderate protein: 15–25% (fish, chicken, eggs)', 'Low carb from vegetables: 5–10%', 'Track with blood ketone meter (target 0.5–3.0 mmol/L)', 'Intermittent fasting (16:8 or 18:6) synergizes with ketosis', 'Cancer cells cannot efficiently use ketones for fuel — metabolic advantage'] },
]

const cbdBenefits = [
  { benefit: 'Anti-Inflammatory', detail: 'CBD modulates the endocannabinoid system (ECS) — reduces TNF-α, IL-6, and other pro-inflammatory cytokines. Comparable to NSAIDs without GI side effects.', studies: 'Journal of Experimental Medicine (2012): CBD significantly suppressed chronic inflammatory and neuropathic pain.' },
  { benefit: 'Anti-Tumor Properties', detail: 'CBD induces apoptosis (programmed cell death) in cancer cells via multiple pathways: ROS generation, ceramide accumulation, ER stress. Does NOT harm healthy cells.', studies: 'British Journal of Pharmacology (2012): CBD exhibits anti-proliferative effects in breast, lung, colon, prostate, and glioblastoma cancer models.' },
  { benefit: 'Anti-Anxiety / Sleep', detail: 'Modulates serotonin 5-HT1A receptors. Reduces cortisol. Improves sleep quality without sedation hangover.', studies: 'The Permanente Journal (2019): 79% of patients reported decreased anxiety, 67% improved sleep with CBD.' },
  { benefit: 'Neuroprotective', detail: 'Antioxidant properties protect neurons from oxidative damage. Modulates glutamate toxicity. Promotes neurogenesis.', studies: 'FDA approved Epidiolex (CBD) for epilepsy. Ongoing trials for Parkinson\'s, Alzheimer\'s, MS.' },
  { benefit: 'Pain Management', detail: 'Activates TRPV1 receptors (vanilloid/capsaicin receptors) for pain modulation. Allosteric modulator of opioid receptors without addiction potential.', studies: 'European Journal of Pain (2016): Topical CBD reduced arthritis pain and inflammation in animal models.' },
]

export default function HealthPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-800/30 border border-red-600/30 rounded-full text-sm text-red-300 mb-6">
          <Heart className="w-4 h-4" />
          Lazy K Farms — Nutrition & Healing
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-4">
          <span className="bg-gradient-to-r from-red-300 via-rose-400 to-pink-500 bg-clip-text text-transparent">
            Health & Nutrition
          </span>
        </h1>
        <p className="text-lg text-red-200/50 max-w-3xl">
          The science behind why we grow what we grow. Anti-cancer cruciferous vegetables, CBD for health, metabolic ketosis, and navigating away from ultra-processed food toward whole-food nourishment.
        </p>
      </motion.div>

      {/* ──── Cruciferous Vegetables: The Anti-Cancer Powerhouse ──── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-black mb-6 flex items-center gap-3">
          <Dna className="w-7 h-7 text-emerald-400" />
          <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">Cruciferous Vegetables: Nature's Anti-Cancer Medicine</span>
        </h2>
        <div className="p-6 bg-emerald-900/15 border border-emerald-700/20 rounded-2xl mb-6">
          <p className="text-sm text-emerald-200/60 mb-4">
            Cruciferous vegetables (broccoli, kale, cabbage, cauliflower, Brussels sprouts, arugula, bok choy, radish, watercress) contain a class of sulfur compounds called <strong className="text-white">glucosinolates</strong> that, when chewed or chopped, are converted by the enzyme <strong className="text-white">myrosinase</strong> into <strong className="text-emerald-300">isothiocyanates</strong> — the most potent natural anti-cancer compounds ever discovered. Here's what the science says:
          </p>
        </div>

        <div className="space-y-3">
          {cruciferousCompounds.map((c, i) => (
            <div key={i} className="p-5 bg-emerald-900/10 border border-emerald-700/12 rounded-xl">
              <h3 className="font-bold text-emerald-300 text-base mb-2">{c.compound}</h3>
              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                <div><span className="text-emerald-400/50 text-xs block mb-1">Source</span><span className="text-white/60">{c.source}</span></div>
                <div><span className="text-emerald-400/50 text-xs block mb-1">How It Works</span><span className="text-white/60">{c.mechanism}</span></div>
                <div><span className="text-blue-400/50 text-xs block mb-1">Research</span><span className="text-blue-200/50">{c.studies}</span></div>
                <div><span className="text-amber-400/50 text-xs block mb-1">Effective Dose</span><span className="text-amber-200/50">{c.dose}</span></div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 bg-emerald-800/15 border border-emerald-600/15 rounded-xl">
          <p className="text-sm text-emerald-300/60">
            <strong className="text-emerald-300">The Lazy K approach:</strong> We grow broccoli, kale, cabbage, cauliflower, Brussels sprouts, and arugula in our raised beds year-round (spring and fall plantings). We eat cruciferous vegetables <strong className="text-white">at every single meal</strong> — as the constant companion and sidekick on the plate. Raw or lightly steamed preserves the most sulforaphane. See our <Link to="/garden" className="text-emerald-400 underline hover:text-emerald-300">Garden Plan</Link> for growing details.
          </p>
        </div>
      </motion.div>

      {/* ──── What to Avoid ──── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-black mb-6 flex items-center gap-3">
          <Ban className="w-7 h-7 text-red-400" />
          <span className="bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent">What We Avoid & Why</span>
        </h2>
        <p className="text-sm text-red-200/40 mb-6">The modern food system is designed for shelf life and profit — not for human health. Here's what we eliminate and why, with evidence.</p>
        <div className="space-y-3">
          {avoidList.map((item, i) => (
            <div key={i} className="p-5 bg-red-900/8 border border-red-700/12 rounded-xl">
              <h3 className="font-bold text-red-300 text-sm mb-2 flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> {item.item}</h3>
              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                <div><span className="text-red-400/50 text-xs block mb-1">Why It's Harmful</span><span className="text-red-200/50">{item.why}</span></div>
                <div><span className="text-amber-400/50 text-xs block mb-1">Found In</span><span className="text-amber-200/50">{item.found}</span></div>
              </div>
              <div className="mt-2 p-2 bg-emerald-900/15 rounded-lg">
                <span className="text-emerald-400/50 text-xs">Lazy K Alternative: </span>
                <span className="text-emerald-200/60 text-sm">{item.alternative}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ──── CBD for Health ──── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-black mb-6 flex items-center gap-3">
          <Leaf className="w-7 h-7 text-emerald-400" />
          <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">CBD & Hemp Oil for Health</span>
        </h2>
        <div className="space-y-3">
          {cbdBenefits.map((b, i) => (
            <div key={i} className="p-5 bg-emerald-900/10 border border-emerald-700/12 rounded-xl">
              <h3 className="font-bold text-emerald-300 text-sm mb-2">{b.benefit}</h3>
              <p className="text-sm text-emerald-200/50 mb-2">{b.detail}</p>
              <p className="text-xs text-blue-300/40"><strong className="text-blue-300/60">Research:</strong> {b.studies}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 bg-emerald-800/15 border border-emerald-600/15 rounded-xl">
          <p className="text-sm text-emerald-300/60">
            Lazy K grows high-CBD hemp (15–20% CBD, {`<`}0.3% THC) and extracts full-spectrum crude oil via cold ethanol wash. Our 1g CBD syringes contain the full entourage of cannabinoids, terpenes, and flavonoids. See <Link to="/hemp" className="text-emerald-400 underline hover:text-emerald-300">Hemp Production</Link> and <Link to="/lab" className="text-emerald-400 underline hover:text-emerald-300">Farm Lab</Link>.
          </p>
        </div>
      </motion.div>

      {/* ──── Metabolic Ketosis Protocol ──── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-black mb-6 flex items-center gap-3">
          <Flame className="w-7 h-7 text-amber-400" />
          <span className="bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent">Metabolic Ketosis Protocol</span>
        </h2>
        <div className="p-6 bg-amber-900/15 border border-amber-700/20 rounded-2xl mb-6">
          <p className="text-sm text-amber-200/60">
            <strong className="text-white">Cancer cells rely almost exclusively on glucose for energy</strong> (the Warburg effect, discovered 1924). They have dysfunctional mitochondria and cannot efficiently metabolize ketone bodies. By transitioning to a ketogenic state — burning fat/ketones instead of glucose — you create a metabolic environment that starves cancer cells while nourishing healthy cells. This is not a cure-all, but a powerful complementary metabolic strategy used alongside conventional treatment.
          </p>
        </div>
        <div className="space-y-4">
          {ketosisGuide.map((phase, i) => (
            <div key={i} className="p-5 bg-amber-900/8 border border-amber-700/12 rounded-xl">
              <h3 className="font-bold text-amber-300 text-sm mb-3">{phase.phase}</h3>
              <ul className="space-y-1.5">
                {phase.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-amber-200/50">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 bg-amber-800/15 border border-amber-600/15 rounded-xl">
          <p className="text-xs text-amber-300/50">
            <strong>Disclaimer:</strong> This is for informational purposes and reflects our family's nutritional approach. Always consult with healthcare providers, especially regarding cancer treatment. Metabolic therapy is complementary, not a replacement for medical care. Sources: Dr. Thomas Seyfried (Boston College), Dr. Dominic D'Agostino (USF), Warburg O. (1956), Journal of Lipid Research.
          </p>
        </div>
      </motion.div>

      {/* ──── Summary ──── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="p-6 bg-gradient-to-br from-red-500/10 to-emerald-500/5 border-2 border-red-500/20 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-3">The Lazy K Nutritional Philosophy</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-semibold text-emerald-300 mb-2">What We Eat</h4>
              <ul className="text-sm text-emerald-200/50 space-y-1">
                <li>• Cruciferous vegetables at every meal</li>
                <li>• 9 varieties of basil (fresh, as pesto, as supplements)</li>
                <li>• Medicinal mushrooms (shiitake broth, lion's mane tincture)</li>
                <li>• High-polyphenol olive oil (liberal)</li>
                <li>• Wild-caught fish, pasture-raised chicken & eggs</li>
                <li>• Fermented foods (sauerkraut, kimchi, pickles)</li>
                <li>• Herbs as medicine (holy basil tea, turmeric, garlic)</li>
                <li>• CBD oil daily</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-red-300 mb-2">What We Eliminate</h4>
              <ul className="text-sm text-red-200/50 space-y-1">
                <li>• All seed oils / hydrogenated oils</li>
                <li>• Refined sugar / HFCS</li>
                <li>• Artificial dyes, preservatives (BHA/BHT)</li>
                <li>• Processed meats (nitrites)</li>
                <li>• Ultra-processed packaged foods</li>
                <li>• Non-organic glyphosate-sprayed grains</li>
                <li>• Tap water (chlorine — see Water Plan)</li>
                <li>• Anything we can't identify the ingredients of</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
