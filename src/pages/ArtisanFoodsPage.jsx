import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  UtensilsCrossed, Leaf, CheckCircle2, Sprout, FlaskConical, ShoppingBag,
  Star, Droplets, Beaker, Heart, ExternalLink, Pill, Apple
} from 'lucide-react'

const basilVarieties = [
  { name: 'Genovese (Sweet Basil)', flavor: 'Classic sweet, peppery, clove', role: 'Foundation — 40% of blend. The backbone.', health: 'Anti-inflammatory, antibacterial (eugenol)' },
  { name: 'Holy Basil (Tulsi — Rama)', flavor: 'Peppery, clove, slightly bitter', role: '15% — adaptogenic depth, medicinal power', health: 'Adaptogen, reduces cortisol, anti-anxiety, immune modulator' },
  { name: 'Purple Basil (Dark Opal)', flavor: 'Slightly spicy, mild anise', role: '10% — anthocyanin antioxidants, dramatic color', health: 'Anthocyanins (antioxidant), higher ORAC than green basil' },
  { name: 'Thai Basil', flavor: 'Licorice, anise, slight spice', role: '8% — complex anise note, aromatic lift', health: 'Eugenol (anti-inflammatory), beta-carotene' },
  { name: 'Lemon Basil', flavor: 'Bright citrus, light herbal', role: '7% — brightens the blend, citrus zing', health: 'Citral (calming, antimicrobial), vitamin A' },
  { name: 'Cinnamon Basil', flavor: 'Warm cinnamon, sweet spice', role: '5% — warming spice note, unique depth', health: 'Methyl cinnamate (digestive, warming)' },
  { name: 'Greek Basil', flavor: 'Intense, concentrated sweet basil', role: '5% — concentrated essential oil punch', health: 'High essential oil concentration per leaf' },
  { name: 'Lettuce Leaf Basil', flavor: 'Mild, sweet, large-leaf', role: '5% — bulk/volume, mild sweetness', health: 'Highest yield per plant. Mild, accessible flavor.' },
  { name: 'African Blue Basil', flavor: 'Camphor, spicy, complex', role: '5% — unique camphor top note, pollinator support', health: 'Camphor compounds, insect repellent properties' },
]

const otherProducts = [
  {
    name: 'Crushed Garlic Oregano Butter',
    tagline: 'Raw garlic power meets fresh oregano in grass-fed butter',
    ingredients: ['Grass-fed butter (softened, 1 lb)', 'Fresh garlic (8–10 cloves, crushed and finely chopped — RAW)', 'Fresh oregano (¼ cup, minced)', 'Fresh thyme (1 tbsp, minced)', 'Fresh rosemary (1 tsp, very finely minced)', 'Flaky sea salt (½ tsp)', 'Black pepper (freshly cracked, ¼ tsp)', 'Pinch of red pepper flakes (optional)'],
    method: 'Mix all ingredients into softened butter. Roll into a log in parchment paper. Refrigerate 2+ hours. Slice rounds to serve. The raw garlic is the key — allicin (the active compound) is destroyed by cooking. Crushing and letting it sit 10 minutes before mixing maximizes allicin formation.',
    health: 'Allicin (raw garlic) — potent antimicrobial, antiviral, anti-cancer. Carvacrol (oregano) — one of the most powerful natural antimicrobials. Thyme — thymol antiseptic. Together: a therapeutic compound butter.',
    price: '$8–$14 / 8oz roll',
    shelfLife: '2 weeks refrigerated, 3 months frozen',
  },
  {
    name: 'Lacto-Fermented Dill Pickles',
    tagline: 'Salt-brine fermented, probiotic-rich, no vinegar',
    ingredients: ['Fresh garden cucumbers (pickling variety)', 'Sea salt brine (3.5% — 2 tbsp per quart)', 'Fresh dill (generous)', 'Garlic cloves (4–6 per jar, smashed)', 'Black peppercorns', 'Mustard seed', 'Grape leaf or oak leaf (tannins keep pickles crunchy)', 'RO water only (chlorine kills fermentation bacteria)'],
    method: 'Pack cucumbers tightly in wide-mouth mason jars. Add spices. Cover with salt brine. Weigh down to keep submerged. Ferment at room temp (68–75°F) for 3–7 days. Taste daily. Transfer to fridge when desired sourness reached. The key is NO vinegar — this is a live-culture ferment.',
    health: 'Lactobacillus probiotics — gut health, immune support, B-vitamin synthesis. Live enzymes aid digestion. Significantly more beneficial than vinegar pickles (which are dead).',
    price: '$6–$10 / quart jar',
    shelfLife: '6+ months refrigerated (improves with age)',
  },
  {
    name: 'Lazy K Hot Sauce',
    tagline: 'Garden-grown peppers, lacto-fermented for depth',
    ingredients: ['Mixed garden peppers (cayenne, habanero, jalapeño, serrano)', 'Garlic (6+ cloves)', 'Sea salt (2–3%)', 'Optional: garden carrots, onion for sweetness/body', 'RO water'],
    method: 'Chop peppers and garlic, mix with salt. Pack in jar, submerge in brine. Ferment 1–4 weeks (longer = more complex, more sour). Blend smooth. Strain if desired. Bottle in woozy bottles. The fermentation creates a depth that fresh hot sauce cannot match — like a fine wine vs. grape juice.',
    health: 'Capsaicin — metabolic booster, endorphin release, anti-inflammatory. Probiotics from fermentation. Raw garlic allicin.',
    price: '$8–$14 / 5oz bottle',
    shelfLife: '1 year+ refrigerated',
  },
  {
    name: 'Elderberry Syrup',
    tagline: 'Immune powerhouse from our own elderberry bushes',
    ingredients: ['Fresh or dried elderberries (1 cup)', 'RO water (3 cups)', 'Cinnamon stick', 'Fresh ginger (2" piece)', 'Whole cloves (5)', 'Raw honey (1 cup — added after cooling below 110°F to preserve enzymes)'],
    method: 'Simmer elderberries, ginger, cinnamon, cloves in water for 45–60 min until reduced by half. Strain, press berries to extract all liquid. Cool to below 110°F. Stir in raw honey. Bottle in amber glass. Never add honey to hot liquid — destroys beneficial enzymes.',
    health: 'Anthocyanins — antiviral (studied against influenza). Immune stimulant. Vitamin C. Raw honey: antibacterial, prebiotic. Ginger: anti-nausea, anti-inflammatory.',
    price: '$15–$25 / 8oz bottle',
    shelfLife: '2–3 months refrigerated',
  },
  {
    name: 'Fruit Preserves & Jellies',
    tagline: 'Small-batch from orchard fruit — no refined sugar',
    ingredients: ['Fresh fruit (fig, peach, grape, elderberry — from our orchard)', 'Raw honey or maple syrup (minimal — let fruit sweetness shine)', 'Lemon juice (natural pectin activator)', 'Optional: low-sugar pectin (Pomona\'s Universal Pectin)'],
    method: 'Cook fruit with sweetener and lemon juice. Mash to desired texture. Can in sterilized jars using water bath method (15 min). Process in our commercial kitchen for proper food safety compliance.',
    health: 'Whole fruit polyphenols preserved. No refined sugar. Fig: prebiotic fiber, calcium. Peach: vitamins A, C. Grape: resveratrol. Elderberry: immune support.',
    price: '$8–$14 / 8oz jar',
    shelfLife: '1 year shelf-stable (properly canned)',
  },
]

const supplements = [
  {
    name: 'Holy Basil (Tulsi) Extract Capsules',
    form: '500mg vegetarian capsules',
    source: 'Our garden-grown holy basil (Rama, Krishna, Vana varieties), dried and concentrated',
    process: 'Harvest leaves at peak, air dry at 95–105°F (dehydrator), grind to fine powder, encapsulate in plant-based cellulose capsules using manual capsule filler. Lab-tested for potency.',
    benefits: 'Adaptogen — reduces cortisol, anti-anxiety, anti-inflammatory, blood sugar regulation, immune modulation. Studied for stress, metabolic syndrome.',
    dosage: '1–2 capsules daily with food',
    price: '$18–$30 / 60 capsules',
  },
  {
    name: "Lion's Mane Mushroom Powder",
    form: 'Fine powder (dual-extracted)',
    source: 'Our fruiting chamber-grown lion\'s mane, dual-extracted (hot water + alcohol), then spray-dried',
    process: 'Harvest mature fruiting bodies → dry at 130°F → hot water extraction (8 hrs simmer) → alcohol extraction (60 days) → combine extracts → evaporate to concentrate → grind to powder. This dual-extraction captures both water-soluble beta-glucans AND alcohol-soluble hericenones/erinacines.',
    benefits: 'Nerve Growth Factor (NGF) stimulation, cognitive function, memory, mood, neuroprotection. Studied for mild cognitive impairment, depression, nerve injury recovery.',
    dosage: '1–2g daily in coffee, smoothie, or capsule',
    price: '$30–$55 / 60g (1-month supply)',
  },
  {
    name: 'Mushroom Immunity Blend Powder',
    form: 'Fine powder blend',
    source: 'Our farm-grown shiitake, maitake, lion\'s mane, oyster — dual-extracted and blended',
    process: 'Same dual-extraction process for each species. Blend in equal parts. Each species contributes different beta-glucans and bioactive compounds for broad-spectrum immune support.',
    benefits: 'Lentinan (shiitake) + D-fraction (maitake) + NGF (lion\'s mane) + pleuran (oyster) = comprehensive immune modulation, anti-tumor, cardiovascular, cognitive.',
    dosage: '1–2g daily',
    price: '$35–$60 / 60g',
  },
  {
    name: 'CBD + Turmeric + Black Pepper Capsules',
    form: '25mg CBD + 500mg turmeric + 5mg piperine per capsule',
    source: 'Our hemp CBD crude oil + organic turmeric powder + black pepper extract (piperine)',
    process: 'Decarboxylated CBD oil measured and combined with turmeric and piperine in plant-based capsules. Piperine increases curcumin bioavailability by 2,000% (Planta Medica, 1998).',
    benefits: 'Triple anti-inflammatory: CBD (ECS modulation) + curcumin (NF-κB inhibition) + piperine (bioavailability enhancer). Pain, inflammation, joint health, neuroprotection.',
    dosage: '1–2 capsules daily with food (fat improves absorption)',
    price: '$25–$45 / 30 capsules',
  },
]

export default function ArtisanFoodsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-800/30 border border-amber-600/30 rounded-full text-sm text-amber-300 mb-6">
          <UtensilsCrossed className="w-4 h-4" />
          Lazy K Farms — From Garden to Table
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-4">
          <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-red-500 bg-clip-text text-transparent">
            Artisan Foods
          </span>
        </h1>
        <p className="text-lg text-amber-200/50 max-w-3xl">
          Handcrafted products from our farm — the 9-basil Pesto of Pestos, raw garlic oregano butter, lacto-fermented pickles, hot sauce, elderberry syrup, and concentrated herbal supplements.
        </p>
      </motion.div>

      {/* ──── The Pesto of Pestos ──── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-black mb-2 flex items-center gap-3">
          <Star className="w-7 h-7 text-amber-400" />
          <span className="bg-gradient-to-r from-amber-300 to-emerald-400 bg-clip-text text-transparent">The Pesto of Pestos</span>
        </h2>
        <p className="text-sm text-amber-300/50 mb-6 italic">9 varieties of basil. High-polyphenol olive oil. Pine nuts. Aged Parmigiano-Reggiano. Nothing else.</p>

        <div className="p-6 bg-gradient-to-br from-emerald-900/20 to-amber-900/10 border border-emerald-600/20 rounded-2xl mb-6">
          <h3 className="text-lg font-bold text-emerald-300 mb-4">The 9-Basil Blend</h3>
          <p className="text-sm text-emerald-200/50 mb-4">
            Each basil variety contributes a unique flavor compound AND a unique health benefit. The blend is greater than the sum of its parts — like a symphony of therapeutic plant compounds in one spoonful.
          </p>
          <div className="space-y-2">
            {basilVarieties.map((b, i) => (
              <div key={i} className="grid grid-cols-12 gap-3 p-3 bg-black/15 rounded-xl items-start text-sm">
                <div className="col-span-3 sm:col-span-2 font-bold text-white">{b.name}</div>
                <div className="col-span-3 sm:col-span-3 text-emerald-300/50">{b.flavor}</div>
                <div className="col-span-3 sm:col-span-3 text-amber-300/50">{b.role}</div>
                <div className="col-span-3 sm:col-span-4 text-red-300/40 text-xs">{b.health}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-amber-900/10 border border-amber-700/15 rounded-xl">
            <h4 className="font-bold text-amber-300 text-sm mb-3">Full Recipe</h4>
            <ul className="text-sm text-amber-200/50 space-y-1.5">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" /> 4 packed cups fresh 9-basil blend (harvested morning, washed, patted dry)</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" /> ½ cup pine nuts (lightly toasted 2 min in dry pan)</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" /> ¾ cup high-polyphenol EVOO (the best you can afford — harvest date on label)</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" /> 1 cup aged Parmigiano-Reggiano (finely grated, 24+ month aged)</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" /> 4 cloves fresh garlic (raw — allicin power)</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" /> ½ tsp flaky sea salt + fresh black pepper</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" /> Squeeze of fresh lemon juice (preserves color + adds brightness)</li>
            </ul>
          </div>
          <div className="p-5 bg-emerald-900/10 border border-emerald-700/15 rounded-xl">
            <h4 className="font-bold text-emerald-300 text-sm mb-3">Method</h4>
            <ol className="text-sm text-emerald-200/50 space-y-1.5">
              <li>1. Crush garlic, let sit 10 min (activates allicin)</li>
              <li>2. Pulse pine nuts + garlic in food processor until coarse</li>
              <li>3. Add basil blend in batches — pulse (don't purée — you want texture)</li>
              <li>4. Drizzle in EVOO while pulsing — emulsify</li>
              <li>5. Transfer to bowl, fold in Parmigiano by hand</li>
              <li>6. Season with salt, pepper, lemon juice</li>
              <li>7. Jar in sterilized glass. Top with thin layer of olive oil (oxygen barrier)</li>
              <li>8. Refrigerate immediately. Best within 5–7 days.</li>
              <li>9. For selling: freeze in portions (3–6 month shelf life frozen)</li>
            </ol>
            <div className="mt-3 p-2 bg-black/15 rounded-lg text-center">
              <span className="text-amber-300 font-bold text-lg">$12–$18</span>
              <span className="text-amber-400/50 text-xs ml-2">per 8oz jar</span>
            </div>
          </div>
        </div>

        <div className="mt-4 p-4 bg-amber-800/15 border border-amber-600/15 rounded-xl">
          <p className="text-sm text-amber-300/60">
            <strong className="text-amber-300">Why this pesto is different:</strong> Commercial pesto uses one type of basil, cheap vegetable oil (often soybean), cashews instead of pine nuts, and pre-grated cheese with cellulose filler. Our 9-basil blend with high-polyphenol EVOO and raw garlic creates a <strong className="text-white">therapeutically active food</strong> — every ingredient is chosen for both flavor AND health benefit. The olive oil's polyphenols (oleocanthal) are a natural COX-2 inhibitor (same mechanism as ibuprofen).
          </p>
        </div>
      </motion.div>

      {/* ──── Other Artisan Products ──── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-black mb-6 flex items-center gap-3">
          <Apple className="w-7 h-7 text-amber-400" />
          <span className="text-white">Artisan Product Line</span>
        </h2>
        <div className="space-y-4">
          {otherProducts.map((prod, i) => (
            <div key={i} className="p-6 bg-amber-900/8 border border-amber-700/12 rounded-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                <h3 className="text-lg font-bold text-white">{prod.name}</h3>
                <span className="text-xs px-3 py-1 bg-amber-800/30 rounded-full text-amber-300">{prod.price}</span>
                <span className="text-xs px-3 py-1 bg-blue-800/20 rounded-full text-blue-300">{prod.shelfLife}</span>
              </div>
              <p className="text-sm text-amber-300/50 italic mb-3">{prod.tagline}</p>
              <div className="grid sm:grid-cols-2 gap-4 mb-3">
                <div>
                  <h4 className="text-xs text-emerald-400/60 font-semibold mb-1">Ingredients</h4>
                  <ul className="text-sm text-emerald-200/50 space-y-0.5">
                    {prod.ingredients.map((ing, j) => (
                      <li key={j} className="flex items-start gap-1.5"><span className="text-emerald-400 text-xs mt-1">•</span> {ing}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs text-amber-400/60 font-semibold mb-1">Method</h4>
                  <p className="text-sm text-amber-200/50">{prod.method}</p>
                </div>
              </div>
              <div className="p-3 bg-red-900/10 border border-red-700/10 rounded-lg">
                <h4 className="text-[10px] text-red-400/50 font-semibold uppercase mb-1">Health Benefits</h4>
                <p className="text-xs text-red-200/50">{prod.health}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ──── Hemp Sprouts & Essene Bread ──── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-black mb-2 flex items-center gap-3">
          <Sprout className="w-7 h-7 text-lime-400" />
          <span className="bg-gradient-to-r from-lime-300 to-emerald-500 bg-clip-text text-transparent">Hemp Sprouts & Essene Bread</span>
        </h2>
        <p className="text-sm text-lime-200/40 mb-6">Viable hemp seeds sprouted for raw nutrition and baked into ancient Essene-style sprouted bread — the ultimate whole-food use of the hemp plant.</p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="p-6 bg-lime-900/10 border border-lime-700/15 rounded-2xl">
            <h3 className="text-lg font-bold text-lime-300 mb-3">Hemp Sprouts</h3>
            <div className="text-sm text-lime-200/50 space-y-2">
              <p><strong className="text-white">What:</strong> Viable (unshelled, raw) hemp seeds soaked and sprouted for 2–5 days. The sprouting process activates enzymes, multiplies vitamins (especially C and B), breaks down anti-nutrients (phytic acid), and converts proteins into more bioavailable forms.</p>
              <p><strong className="text-white">Seed source:</strong> <a href="https://bulkhempwarehouse.com/yuma-by-the-pound/" target="_blank" rel="noopener noreferrer" className="text-lime-400 underline hover:text-lime-300">Bulk Hemp Warehouse — Yuma 8 strain</a> ($12–$20/lb, ~14,400 seeds/lb). Open-source genetics, no licensing restrictions for food use. Dioecious fiber/grain variety — viable and sprout-ready.</p>
              <p><strong className="text-white">How to sprout:</strong> Soak seeds 8–12 hours in RO water. Drain. Rinse 2–3× daily in sprouting jar or tray. Sprout tails emerge in 24–48 hours. Ready to eat at 2–5 days when tails are ¼–½" long. Eat raw on salads, in smoothies, or on sandwiches.</p>
              <p><strong className="text-white">Nutrition:</strong> Complete protein (all 9 essential amino acids). Optimal 3:1 omega-6:omega-3 ratio. High in GLA (gamma-linolenic acid) — anti-inflammatory. Magnesium, iron, zinc. Sprouting increases vitamin C by 300–600%.</p>
            </div>
            <div className="mt-3 p-3 bg-black/10 rounded-lg">
              <span className="text-xs text-lime-400/50">Cost: </span><span className="text-sm font-bold text-lime-300">~$0.80/lb sprouted</span>
              <span className="text-xs text-lime-400/30 ml-2">(1 lb dry → ~3 lbs sprouted)</span>
            </div>
          </div>

          <div className="p-6 bg-amber-900/10 border border-amber-700/15 rounded-2xl">
            <h3 className="text-lg font-bold text-amber-300 mb-3">Essene Sprouted Hemp Bread</h3>
            <div className="text-sm text-amber-200/50 space-y-2">
              <p><strong className="text-white">What:</strong> Essene bread is the most ancient form of bread — made from sprouted grains mashed into a dough and baked at low temperature. No flour, no yeast, no added sugar. The sprouting IS the leavening — enzymes break down starches into natural sugars and create a dense, sweet, incredibly nutritious loaf.</p>
              <p><strong className="text-white">Hemp Essene recipe:</strong> Sprout hemp seeds + wheat berries (or spelt) for 2–3 days until tails are ¼". Grind together in food processor into a sticky dough. Shape into small loaves. Bake at 250°F for 2.5–3 hours (low and slow — preserves enzymes). The result is a dense, moist, sweet bread with no additives whatsoever.</p>
              <p><strong className="text-white">Variations:</strong> Add sprouted flax, sunflower seeds, sesame seeds, dried fruit (figs, dates), or our farm honey. Each addition brings more nutrition. A hemp + flax + sunflower Essene loaf is essentially a complete food.</p>
              <p><strong className="text-white">History:</strong> Essene bread dates to the Essenes (Jewish sect, ~200 BC). Also called "Manna bread." Mentioned in biblical texts. The simplest, most ancient bread — just sprouted grain and fire.</p>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="p-3 bg-black/10 rounded-lg text-center">
                <span className="text-xs text-amber-400/50">Sell at market</span>
                <div className="text-sm font-bold text-amber-300">$8–$14 / loaf</div>
              </div>
              <div className="p-3 bg-black/10 rounded-lg text-center">
                <span className="text-xs text-amber-400/50">Cost to make</span>
                <div className="text-sm font-bold text-amber-300">~$1.50 / loaf</div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 bg-emerald-800/15 border border-emerald-600/15 rounded-xl">
          <p className="text-sm text-emerald-300/60">
            <strong className="text-emerald-300">The vision:</strong> Buy Yuma 8 hemp seeds in bulk ($12–$20/lb), sprout them year-round in the kitchen, eat raw sprouts daily for complete protein + omega-3, and bake Essene bread weekly for the ultimate whole-food hemp product. This is the <strong className="text-white">simplest, cheapest, most nutritious thing you can do with hemp</strong> — no extraction, no lab, no license needed. Just seeds, water, and a low oven.
          </p>
        </div>
      </motion.div>

      {/* ──── Herbal Supplements ──── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-black mb-6 flex items-center gap-3">
          <Pill className="w-7 h-7 text-violet-400" />
          <span className="bg-gradient-to-r from-violet-300 to-violet-500 bg-clip-text text-transparent">Herbal & Mushroom Supplements</span>
        </h2>
        <p className="text-sm text-violet-200/40 mb-6">
          Concentrated extracts from our farm-grown herbs and mushrooms. Prepared in our processing lab with professional-grade equipment. Every batch tested for potency and purity.
        </p>
        <div className="space-y-4">
          {supplements.map((sup, i) => (
            <div key={i} className="p-6 bg-violet-900/8 border border-violet-700/12 rounded-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                <h3 className="text-lg font-bold text-white">{sup.name}</h3>
                <span className="text-xs px-3 py-1 bg-violet-800/30 rounded-full text-violet-300">{sup.form}</span>
                <span className="text-xs px-3 py-1 bg-amber-800/30 rounded-full text-amber-300">{sup.price}</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 text-sm mb-3">
                <div><span className="text-violet-400/50 text-xs block mb-1">Source</span><span className="text-white/60">{sup.source}</span></div>
                <div><span className="text-violet-400/50 text-xs block mb-1">Dosage</span><span className="text-white/60">{sup.dosage}</span></div>
              </div>
              <div className="text-sm mb-3"><span className="text-violet-400/50 text-xs block mb-1">Processing</span><span className="text-white/50">{sup.process}</span></div>
              <div className="p-3 bg-emerald-900/10 border border-emerald-700/10 rounded-lg">
                <h4 className="text-[10px] text-emerald-400/50 font-semibold uppercase mb-1">Benefits</h4>
                <p className="text-xs text-emerald-200/50">{sup.benefits}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ──── Kefir & Probiotic Fermentation ──── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-black mb-2 flex items-center gap-3">
          <Beaker className="w-7 h-7 text-cyan-400" />
          <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">Probiotic Kefir Program</span>
        </h2>
        <p className="text-sm text-cyan-200/40 mb-6">The ultimate probiotic: a multi-strain symbiotic kefir combining the most scientifically-studied beneficial bacteria and yeasts into one living culture. This is functional food as medicine.</p>

        <div className="p-6 bg-gradient-to-br from-cyan-900/15 to-blue-900/10 border border-cyan-600/20 rounded-2xl mb-6">
          <h3 className="text-lg font-bold text-cyan-300 mb-4">The Lazy K Super-Kefir Vision</h3>
          <div className="text-sm text-cyan-200/50 space-y-2 mb-4">
            <p><strong className="text-white">Goal:</strong> Combine traditional kefir grains with specific, scientifically-validated probiotic strains to create the most diverse, potent, evidence-backed kefir possible — a living probiotic food that addresses gut health, immune function, inflammation, and mental health via the gut-brain axis.</p>
            <p><strong className="text-white">Method:</strong> Start with traditional kefir grains (SCOBY containing 30–50+ species). Then culture additional targeted strains in separate batches. Combine at serving/bottling to create a super-diverse symbiotic product.</p>
          </div>

          <h4 className="font-bold text-white text-sm mb-3">Target Strains (Most-Studied Probiotics)</h4>
          <div className="space-y-2">
            {[
              { strain: 'Lactobacillus reuteri', benefit: 'Gut lining repair, oxytocin production (social bonding, wound healing), testosterone in males, bone density. One of the most studied probiotics — 200+ clinical trials.', source: 'BioGaia Gastrus tablets or L. reuteri kefir grains (Amazon/specialty)', key: true },
              { strain: 'Lactobacillus rhamnosus GG', benefit: 'Gold standard for diarrhea prevention, immune modulation, eczema reduction in infants. Most-studied probiotic strain globally (1,000+ papers).', source: 'Culturelle capsules (open into milk)' },
              { strain: 'Lactobacillus acidophilus', benefit: 'Lactose digestion, vaginal health, cholesterol reduction. Native to healthy human gut. Found in traditional kefir grains.', source: 'Traditional kefir grains (included naturally)' },
              { strain: 'Bifidobacterium longum', benefit: 'Anti-anxiety (gut-brain axis), IBS relief, immune regulation, pathogen inhibition. Dominant species in healthy infant gut.', source: 'Align probiotic capsules or Cultures for Health starter' },
              { strain: 'Saccharomyces boulardii', benefit: 'Probiotic yeast (not bacteria). Prevents C. diff, traveler\'s diarrhea, antibiotic-associated diarrhea. Survives antibiotics. The only probiotic yeast with clinical evidence.', source: 'Florastor capsules (open into ferment)' },
              { strain: 'Lactobacillus plantarum', benefit: 'Anti-inflammatory, strengthens gut barrier (tight junctions), reduces bloating, studied for IBS and IBD. Found in fermented vegetables.', source: 'Traditional kefir grains + sauerkraut brine' },
              { strain: 'Streptococcus thermophilus', benefit: 'Yogurt-making workhorse. Produces lactase (helps lactose intolerance). Anti-inflammatory. Found in traditional kefir grains.', source: 'Traditional kefir grains (included naturally)' },
              { strain: 'Lactobacillus helveticus', benefit: 'ACE-inhibitor peptides (blood pressure reduction). Calcium absorption. Studied for anxiety/depression reduction in combination with B. longum.', source: 'Cultures for Health kefir starter or cheese cultures' },
            ].map((s, i) => (
              <div key={i} className={`p-4 rounded-xl ${s.key ? 'bg-cyan-800/15 border border-cyan-600/20' : 'bg-black/10 border border-cyan-800/10'}`}>
                <div className="flex items-start gap-2 mb-1">
                  {s.key && <span className="text-[10px] px-1.5 py-0.5 bg-cyan-500/20 text-cyan-300 rounded shrink-0 mt-0.5">KEY</span>}
                  <h5 className="font-bold text-white text-sm italic">{s.strain}</h5>
                </div>
                <p className="text-xs text-cyan-200/50 mb-1">{s.benefit}</p>
                <p className="text-[10px] text-cyan-400/30"><strong>Source:</strong> {s.source}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Culture Sources */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="p-5 bg-cyan-900/10 border border-cyan-700/12 rounded-xl">
            <h4 className="font-bold text-cyan-300 text-sm mb-2">Culture Sources</h4>
            <ul className="text-sm text-cyan-200/50 space-y-2">
              <li className="flex items-start gap-2">
                <Heart className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span><a href="https://culturesforhealth.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline hover:text-cyan-300">Cultures for Health</a> — Traditional kefir grains, yogurt starters, kombucha SCOBYs, sourdough starters. Widest selection of live cultures.</span>
              </li>
              <li className="flex items-start gap-2">
                <Heart className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">L. reuteri kefir grains</strong> — Available on Amazon (Coolinario Cultures) or specialty probiotic suppliers. Specifically cultured for high L. reuteri count. The star of the program.</span>
              </li>
              <li className="flex items-start gap-2">
                <Heart className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">BioGaia Gastrus tablets</strong> — Pharmaceutical-grade L. reuteri. Crush and culture in milk at 97°F for 36 hours to create L. reuteri yogurt/kefir. Dr. William Davis protocol.</span>
              </li>
            </ul>
          </div>
          <div className="p-5 bg-cyan-900/10 border border-cyan-700/12 rounded-xl">
            <h4 className="font-bold text-cyan-300 text-sm mb-2">Production Method</h4>
            <ol className="text-sm text-cyan-200/50 space-y-1.5">
              <li><strong className="text-white">1.</strong> Culture traditional kefir grains in whole milk (24 hrs, room temp)</li>
              <li><strong className="text-white">2.</strong> Culture L. reuteri separately (36 hrs, 97°F, with prebiotic fiber)</li>
              <li><strong className="text-white">3.</strong> Culture additional strains from capsules in milk (24–48 hrs)</li>
              <li><strong className="text-white">4.</strong> Combine all cultures at bottling — strain grains from #1, blend liquids</li>
              <li><strong className="text-white">5.</strong> Second ferment 12–24 hrs sealed (carbonation + flavor development)</li>
              <li><strong className="text-white">6.</strong> Bottle in glass, refrigerate. Shelf life: 2–3 weeks refrigerated.</li>
              <li><strong className="text-white">7.</strong> Optional: flavor with elderberry syrup, turmeric, vanilla, or farm fruit</li>
            </ol>
          </div>
        </div>

        <div className="p-5 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border-2 border-cyan-500/25 rounded-xl">
          <h4 className="font-bold text-cyan-300 text-sm mb-2">Kefir Products for Sale</h4>
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="p-3 bg-black/15 rounded-lg text-center">
              <div className="text-sm font-bold text-white">Lazy K Super-Kefir</div>
              <div className="text-xs text-cyan-300/50">8+ strain symbiotic kefir</div>
              <div className="text-lg font-black text-cyan-300 mt-1">$8–$12 / 16oz</div>
            </div>
            <div className="p-3 bg-black/15 rounded-lg text-center">
              <div className="text-sm font-bold text-white">L. Reuteri Yogurt</div>
              <div className="text-xs text-cyan-300/50">36-hour cultured, thick</div>
              <div className="text-lg font-black text-cyan-300 mt-1">$10–$14 / 16oz</div>
            </div>
            <div className="p-3 bg-black/15 rounded-lg text-center">
              <div className="text-sm font-bold text-white">Kefir Grain Starter Kit</div>
              <div className="text-xs text-cyan-300/50">Live grains + instructions</div>
              <div className="text-lg font-black text-cyan-300 mt-1">$18–$25 / kit</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Licensing Note */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="p-5 bg-amber-900/15 border border-amber-700/20 rounded-xl">
          <h3 className="font-bold text-amber-300 text-sm mb-2">Licensing & Compliance</h3>
          <div className="text-sm text-amber-200/50 space-y-1">
            <p><strong className="text-white">Utah Cottage Food Act:</strong> Allows direct sale of non-potentially-hazardous foods (jams, dried herbs, pickles in vinegar, baked goods) from home without a commercial kitchen. Annual sales limit: $5,000 (as of 2024 — check for updates).</p>
            <p><strong className="text-white">Fermented foods (sauerkraut, fermented pickles, hot sauce):</strong> May require food handler permit and/or commercial kitchen depending on sales volume and Utah UDAF interpretation. Contact ag.utah.gov.</p>
            <p><strong className="text-white">CBD products:</strong> Require UDAF Cannabinoid Processor License (Tier 4). See <Link to="/lab" className="text-amber-400 underline hover:text-amber-300">Farm Lab</Link>.</p>
            <p><strong className="text-white">Dietary supplements (capsules, powders):</strong> FDA-regulated under DSHEA. Requires GMP compliance, proper labeling (supplement facts panel), and no health claims (only structure/function claims). Consider working with a co-packer initially.</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
