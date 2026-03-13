import { motion } from 'framer-motion'
import {
  Mushroom, FlaskConical, Thermometer, Droplets, Wind, CheckCircle2,
  ExternalLink, AlertTriangle, TreePine, Beaker, ShoppingBag, Package
} from 'lucide-react'

const species = [
  {
    name: 'Shiitake (Lentinula edodes)',
    difficulty: 'Intermediate',
    substrate: 'Masters mix (50% hardwood sawdust + 50% soy hulls) or hardwood logs (oak preferred)',
    tempFruit: '55–75°F',
    humidity: '80–90%',
    timeline: 'Bags: 8–12 weeks. Logs: 6–18 months to first flush.',
    flushes: '3–5 flushes (bags), years of production (logs)',
    notes: 'The workhorse. Indoor bags for quick production, outdoor logs for long-term. Cold-shock logs in water for 24 hrs to trigger fruiting. Dry beautifully.',
    products: 'Fresh, dried, mushroom broth, elixirs, tinctures',
    star: true,
  },
  {
    name: "Lion's Mane (Hericium erinaceus)",
    difficulty: 'Intermediate',
    substrate: 'Masters mix or supplemented hardwood sawdust. Logs (beech, maple, oak).',
    tempFruit: '55–70°F',
    humidity: '90–95%',
    timeline: 'Bags: 4–6 weeks colonization + 1–2 weeks fruiting.',
    flushes: '2–3 flushes',
    notes: 'Medicinal powerhouse — nerve growth factor (NGF). Grow through X-cut in bags. Mist heavily. Very sensitive to CO₂ — needs excellent fresh air exchange.',
    products: 'Fresh (lobster-like), tincture (dual extract), elixir, capsules',
    star: true,
  },
  {
    name: "Bear's Tooth (Hericium americanum)",
    difficulty: 'Intermediate',
    substrate: 'Same as lion\'s mane — hardwood sawdust/logs.',
    tempFruit: '55–70°F',
    humidity: '90–95%',
    timeline: 'Similar to lion\'s mane.',
    flushes: '2–3 flushes',
    notes: 'Close relative of lion\'s mane with cascading icicle-like teeth. Same medicinal properties. Stunning appearance.',
    products: 'Fresh, tincture, dried',
  },
  {
    name: 'Maitake (Grifola frondosa)',
    difficulty: 'Advanced',
    substrate: 'Supplemented hardwood sawdust. Outdoor logs/stumps (oak).',
    tempFruit: '55–65°F',
    humidity: '85–95%',
    timeline: 'Bags: 8–16 weeks. Outdoor: 1–2 years.',
    flushes: '1–2 flushes (bags), annual (outdoor)',
    notes: 'Hen of the woods. Incredible umami. Medicinal (beta-glucans, immune support). Challenging indoors — better on outdoor stumps/logs.',
    products: 'Fresh, dried, broth, tincture, powder',
    star: true,
  },
  {
    name: 'Pioppino (Agrocybe aegerita)',
    difficulty: 'Intermediate',
    substrate: 'Masters mix, straw, or hardwood sawdust. Logs (poplar, elder).',
    tempFruit: '55–70°F',
    humidity: '85–95%',
    timeline: 'Bags: 4–8 weeks colonization.',
    flushes: '2–4 flushes',
    notes: 'Black poplar mushroom. Firm, crunchy texture. Excellent in stir-fry. Underrated gourmet species.',
    products: 'Fresh, sautéed, pickled',
  },
  {
    name: 'Chestnut (Pholiota adiposa)',
    difficulty: 'Easy–Intermediate',
    substrate: 'Masters mix, supplemented sawdust.',
    tempFruit: '55–70°F',
    humidity: '85–90%',
    timeline: 'Bags: 3–6 weeks colonization.',
    flushes: '2–3 flushes',
    notes: 'Nutty, rich flavor. Beautiful golden-brown caps. Excellent for broth and sautéing.',
    products: 'Fresh, broth, dried',
  },
  {
    name: 'Oyster Mushrooms (Pleurotus spp.)',
    difficulty: 'Easy (Beginner-friendly)',
    substrate: 'Masters mix, straw, cardboard, coffee grounds — very forgiving.',
    tempFruit: 'Blue: 45–65°F | Pink: 65–85°F | Yellow: 65–85°F | King: 55–65°F',
    humidity: '80–90%',
    timeline: 'Bags: 2–4 weeks colonization + 5–7 days fruiting.',
    flushes: '3–5 flushes',
    notes: 'Multiple varieties: Blue, Pearl, Pink, Yellow (Golden), King. Fastest colonizer. Great for beginners and bulk production. King oyster = gourmet.',
    products: 'Fresh, jerky, dried, broth',
    star: true,
  },
]

const labEquipment = [
  { item: 'Laminar Flow Hood', purpose: 'Sterile air for agar work, grain transfers, LC inoculation', have: true },
  { item: 'Pressure Cooker (23+ qt)', purpose: 'Sterilize grain spawn, agar, liquid culture at 15 PSI / 250°F', have: false },
  { item: 'Still Air Box (SAB)', purpose: 'Backup sterile work area. Plastic tub with arm holes.', have: false },
  { item: 'Agar Plates (MEA / PDA)', purpose: 'Clone tissue, isolate genetics, test for contamination', have: false },
  { item: 'Grain Spawn Jars', purpose: 'Rye, oat, or millet grain for colonization', have: false },
  { item: 'Liquid Culture (LC)', purpose: 'Nutrient-rich water inoculated with mycelium. Fast multiplication.', have: false },
  { item: 'Grow Bags (autoclavable)', purpose: 'Unicorn bags 0.2 micron filter patch for substrate', have: false },
  { item: 'Scalpel + Parafilm', purpose: 'Sterile tissue transfer, plate sealing', have: false },
  { item: 'Isopropyl Alcohol 70%', purpose: 'Surface sterilization, flame sterilization', have: false },
  { item: 'pH Meter', purpose: 'Check substrate pH (target 5.5–6.5)', have: false },
]

export default function MushroomPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-800/30 border border-violet-600/30 rounded-full text-sm text-violet-300 mb-6">
          <Mushroom className="w-4 h-4" />
          Mycology Lab & Fruiting Operations
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-4">
          <span className="bg-gradient-to-r from-violet-300 via-violet-400 to-purple-500 bg-clip-text text-transparent">
            Mycology Program
          </span>
        </h1>
        <p className="text-lg text-violet-200/50 max-w-3xl">
          Full mycology lab protocol: sterile inoculation, masters mix substrates, temperature/humidity-controlled fruiting chamber, log inoculation, and product development (elixirs, broths, tinctures).
        </p>
      </motion.div>

      {/* Species Guide */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
          <Mushroom className="w-7 h-7 text-violet-400" />
          <span className="bg-gradient-to-r from-violet-300 to-violet-500 bg-clip-text text-transparent">Species Portfolio</span>
        </h2>
        <div className="space-y-3">
          {species.map((sp, i) => (
            <div key={i} className={`p-5 bg-violet-900/10 border rounded-xl transition-all hover:border-violet-500/25 ${sp.star ? 'border-violet-500/20' : 'border-violet-700/12'}`}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                <h3 className="font-bold text-white">{sp.name}</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-0.5 bg-violet-800/30 rounded-full text-violet-300">{sp.difficulty}</span>
                  <span className="text-xs px-2 py-0.5 bg-blue-800/30 rounded-full text-blue-300">{sp.tempFruit}</span>
                  <span className="text-xs px-2 py-0.5 bg-cyan-800/30 rounded-full text-cyan-300">RH {sp.humidity}</span>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 text-sm mb-3">
                <div><span className="text-violet-400/50">Substrate: </span><span className="text-white/60">{sp.substrate}</span></div>
                <div><span className="text-violet-400/50">Timeline: </span><span className="text-white/60">{sp.timeline}</span></div>
                <div><span className="text-violet-400/50">Flushes: </span><span className="text-white/60">{sp.flushes}</span></div>
                <div><span className="text-violet-400/50">Products: </span><span className="text-amber-300/60">{sp.products}</span></div>
              </div>
              <p className="text-sm text-violet-200/40">{sp.notes}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Fruiting Chamber */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
          <Thermometer className="w-7 h-7 text-violet-400" />
          <span className="text-white">Fruiting Chamber Specs</span>
        </h2>
        <div className="p-6 bg-violet-900/15 border border-violet-700/20 rounded-2xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 bg-violet-950/40 rounded-xl">
              <Thermometer className="w-5 h-5 text-violet-400 mx-auto mb-1" />
              <div className="text-xs text-violet-400/50">Temperature</div>
              <div className="text-lg font-bold text-white">55–75°F</div>
              <div className="text-xs text-violet-400/40">Species-dependent</div>
            </div>
            <div className="text-center p-4 bg-violet-950/40 rounded-xl">
              <Droplets className="w-5 h-5 text-blue-400 mx-auto mb-1" />
              <div className="text-xs text-violet-400/50">Humidity</div>
              <div className="text-lg font-bold text-white">85–95% RH</div>
              <div className="text-xs text-violet-400/40">Ultrasonic humidifier</div>
            </div>
            <div className="text-center p-4 bg-violet-950/40 rounded-xl">
              <Wind className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
              <div className="text-xs text-violet-400/50">Fresh Air Exchange</div>
              <div className="text-lg font-bold text-white">4–8× / hour</div>
              <div className="text-xs text-violet-400/40">Inline fan + HEPA</div>
            </div>
            <div className="text-center p-4 bg-violet-950/40 rounded-xl">
              <Beaker className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
              <div className="text-xs text-violet-400/50">Misting Water</div>
              <div className="text-lg font-bold text-white">RO Only</div>
              <div className="text-xs text-violet-400/40">&lt;50 ppm TDS</div>
            </div>
          </div>
          <p className="text-sm text-violet-200/50">
            The fruiting chamber will be a dedicated insulated room or large tent with automated environmental controls. Temperature controlled via mini-split or portable AC/heater. Humidity via ultrasonic humidifier with RO water. Fresh air via inline fan with filter. Lighting: 12/12 indirect LED (triggers pinning). CO₂ monitoring recommended ({`<`}800 ppm for most species).
          </p>
        </div>
      </motion.div>

      {/* Outdoor Log Protocol */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
          <TreePine className="w-7 h-7 text-emerald-400" />
          <span className="text-white">Outdoor Log Inoculation</span>
        </h2>
        <div className="p-6 bg-emerald-900/15 border border-emerald-700/20 rounded-2xl">
          <div className="space-y-3">
            {[
              { step: '1. Source logs', desc: 'Fresh-cut hardwood (oak, maple, beech) — 3–8" diameter, 3–4 ft long. Cut in dormancy (winter). Use within 2–6 weeks of cutting.' },
              { step: '2. Drill holes', desc: 'Diamond pattern, 6" apart, 1" deep using 12mm bit. Stagger rows. ~30–50 holes per log.' },
              { step: '3. Inoculate', desc: 'Pack holes with sawdust spawn (lab-produced). Seal with food-grade cheese wax or beeswax to prevent contamination and moisture loss.' },
              { step: '4. Stack & incubate', desc: 'Crib-stack or lean against fence in shaded, wind-protected area. Keep moist. Colonization takes 6–18 months.' },
              { step: '5. Force fruit', desc: 'Soak colonized logs in cold RO water (or rain barrel) for 24 hours. Stand upright. Fruits in 5–10 days. Repeat every 6–8 weeks in season.' },
              { step: '6. Cover structure', desc: 'Build a simple shade structure (shade cloth, partial roof) for temperature control. Mist logs in dry Utah summers.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white text-sm">{item.step}</strong>
                  <p className="text-sm text-emerald-200/50">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Lab Equipment */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
          <FlaskConical className="w-7 h-7 text-violet-400" />
          <span className="text-white">Mycology Lab Equipment</span>
        </h2>
        <div className="space-y-2">
          {labEquipment.map((eq, i) => (
            <div key={i} className="flex items-center gap-4 p-4 bg-violet-900/10 border border-violet-700/12 rounded-xl">
              <div className={`w-3 h-3 rounded-full shrink-0 ${eq.have ? 'bg-emerald-400' : 'bg-violet-500/30'}`} />
              <div className="flex-1">
                <span className="font-semibold text-white text-sm">{eq.item}</span>
                <span className="text-violet-400/40 text-sm ml-2">— {eq.purpose}</span>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded-full ${eq.have ? 'bg-emerald-800/30 text-emerald-400' : 'bg-violet-800/30 text-violet-400'}`}>
                {eq.have ? 'READY' : 'NEEDED'}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Products */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
          <ShoppingBag className="w-7 h-7 text-amber-400" />
          <span className="text-white">Mycology Product Lines</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { name: 'Mushroom Elixirs', desc: 'Dual-extracted (hot water + alcohol) concentrated tinctures. Lion\'s mane for cognition, reishi for immunity, chaga for antioxidants.', price: '$25–$45/bottle' },
            { name: 'Bone/Mushroom Broth', desc: 'Slow-simmered shiitake, maitake, and chestnut mushroom broth. Rich umami, medicinal beta-glucans.', price: '$12–$18/quart' },
            { name: 'Dried Mushrooms', desc: 'Dehydrated whole or sliced. Shiitake, oyster, lion\'s mane. 10:1 weight ratio fresh:dried.', price: '$20–$40/oz dried' },
            { name: 'Fresh Gourmet', desc: 'Weekly harvest boxes. Oyster, shiitake, lion\'s mane, pioppino. Farmers market or local restaurant supply.', price: '$10–$16/lb' },
            { name: 'Mushroom Powder', desc: 'Dried and ground into fine powder for smoothies, coffee, capsules. Lion\'s mane and chaga most popular.', price: '$30–$60/4oz' },
            { name: 'Grow Kits', desc: 'Pre-colonized bags ready to fruit. Sell at farmers market. Blue oyster kits are most forgiving.', price: '$20–$35/kit' },
          ].map((prod, i) => (
            <div key={i} className="p-5 bg-violet-900/10 border border-violet-700/12 rounded-xl">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-white text-sm">{prod.name}</h4>
                <span className="text-xs px-2 py-0.5 bg-amber-800/30 text-amber-300 rounded-full shrink-0">{prod.price}</span>
              </div>
              <p className="text-sm text-violet-200/40">{prod.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Substrate Recipes */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 mb-12">
        <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
          <Beaker className="w-7 h-7 text-violet-400" />
          <span className="bg-gradient-to-r from-violet-300 to-violet-500 bg-clip-text text-transparent">Substrate Recipes</span>
        </h2>
        <div className="space-y-4">
          {[
            {
              name: 'Masters Mix (Industry Standard)',
              ingredients: '50% hardwood fuel pellets (HWFP) + 50% soy hull pellets by dry weight',
              hydration: '60–65% moisture content. Add ~1.2–1.4 L water per 1 kg dry substrate.',
              sterilization: 'Autoclave at 15 PSI / 250°F for 2.5 hours in Unicorn 14A bags. Or steam sterilize in barrel for 18+ hours.',
              bestFor: 'Shiitake, lion\'s mane, pioppino, chestnut, maitake',
              notes: 'The gold standard. Soy hulls provide nitrogen, hardwood provides carbon. Extremely consistent results. Source HWFP from Tractor Supply or local pellet supplier (~$5–$8/40lb bag).',
            },
            {
              name: 'Supplemented Sawdust (Hardwood Only)',
              ingredients: '80% hardwood sawdust (oak, maple, alder) + 15% wheat bran + 5% gypsum',
              hydration: '60–65% moisture. Squeeze test: few drops when squeezed hard.',
              sterilization: 'Autoclave 2.5 hours at 15 PSI.',
              bestFor: 'Shiitake, lion\'s mane, reishi, maitake',
              notes: 'Traditional Japanese shiitake method. Wheat bran is cheap nitrogen source. Avoid softwood (pine, cedar) — contains anti-fungal resins.',
            },
            {
              name: 'Straw (Pasteurized — No Autoclave Needed)',
              ingredients: '100% chopped wheat or oat straw. Chop to 2–4" pieces.',
              hydration: '70–75% moisture. Soak in hot water.',
              sterilization: 'Pasteurize only: soak in 160–180°F water for 1–2 hours. Drain and cool to room temp. No autoclave needed!',
              bestFor: 'Oyster mushrooms (all varieties), wine cap (outdoor beds)',
              notes: 'Easiest beginner substrate. Oysters are aggressive colonizers that outcompete contaminants on pasteurized straw. Cheap and fast. NOT suitable for shiitake or lion\'s mane.',
            },
            {
              name: 'Mushroom Fruiting Log Prep',
              ingredients: 'Fresh-cut hardwood logs — oak, maple, beech, birch. 3–8" diameter, 3–4 ft long.',
              hydration: '35–45% moisture content (natural). Soak dried logs 24 hrs before inoculation.',
              sterilization: 'None needed — the bark is the sterile barrier. Use only fresh-cut logs (within 2–6 weeks of felling).',
              bestFor: 'Shiitake, lion\'s mane, maitake, oyster (outdoor long-term production)',
              notes: 'Drill-and-fill method. Seal with wax. Takes 6–18 months to colonize but produces for 3–7+ years. Best started in late winter/early spring.',
            },
          ].map((recipe, i) => (
            <div key={i} className="p-6 bg-violet-900/10 border border-violet-700/15 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-3">{recipe.name}</h3>
              <div className="grid sm:grid-cols-2 gap-3 text-sm mb-3">
                <div><span className="text-violet-400/50">Ingredients: </span><span className="text-white/60">{recipe.ingredients}</span></div>
                <div><span className="text-violet-400/50">Hydration: </span><span className="text-white/60">{recipe.hydration}</span></div>
                <div><span className="text-violet-400/50">Sterilization: </span><span className="text-white/60">{recipe.sterilization}</span></div>
                <div><span className="text-violet-400/50">Best for: </span><span className="text-amber-300/60">{recipe.bestFor}</span></div>
              </div>
              <p className="text-sm text-violet-200/40">{recipe.notes}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Contamination Troubleshooting */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
          <AlertTriangle className="w-7 h-7 text-red-400" />
          <span className="bg-gradient-to-r from-red-300 to-orange-400 bg-clip-text text-transparent">Contamination Identification & Prevention</span>
        </h2>
        <div className="space-y-2">
          {[
            { contam: 'Trichoderma (Green Mold)', appearance: 'Bright green patches, fast-spreading', cause: 'Poor sterilization, dirty air, old spawn, excess moisture', action: 'ISOLATE immediately. Do NOT open indoors. Dispose outdoors. Clean area with 10% bleach. Review sterile technique.', prevention: 'Proper sterilization times, clean flow hood, quality spawn, correct moisture levels.' },
            { contam: 'Cobweb Mold (Dactylium)', appearance: 'Wispy, gray, cotton-candy-like growth. Spreads fast.', cause: 'Low air exchange, high humidity + stagnant air, contaminated casing', action: 'Spray directly with 3% hydrogen peroxide. Increase FAE (fresh air). Often salvageable if caught early.', prevention: 'Good FAE in fruiting chamber (4–8× per hour). Don\'t let humidity stagnate.' },
            { contam: 'Black Mold (Aspergillus niger)', appearance: 'Black or dark green-black spots', cause: 'Severe contamination. Usually poor sterilization or contaminated grain.', action: 'Dispose of entire bag/jar. Do NOT open indoors. Aspergillus is a health hazard.', prevention: 'Verify sterilization pressure and time. Inspect grain spawn before use.' },
            { contam: 'Bacterial Contamination ("Wet Spot")', appearance: 'Slimy, wet, sour-smelling spots on grain. Gray/yellow discoloration.', cause: 'Excess moisture in grain, inadequate sterilization, dirty needle/port', action: 'Dispose. Bacteria cannot be saved. Review grain prep — soak, simmer, dry surface before loading jars.', prevention: 'Dry grain surface before loading. No pooling water in jars. Full sterilization cycle.' },
            { contam: 'Lipstick Mold (Sporendonema)', appearance: 'Bright orange/pink/red spots', cause: 'Contaminated substrate or spawn, poor sterile environment', action: 'Dispose immediately. Rare but aggressive.', prevention: 'Quality spawn from trusted vendors. Proper sterilization.' },
            { contam: 'Penicillium (Blue-Green Mold)', appearance: 'Blue-green spots, powdery texture', cause: 'Airborne contamination, cracked filter patches, old spawn', action: 'Isolate and dispose. Review filter patch integrity and air quality.', prevention: 'Inspect bags for damage. HEPA filtration. Fresh spawn.' },
          ].map((item, i) => (
            <div key={i} className="p-4 bg-red-900/8 border border-red-700/12 rounded-xl">
              <h4 className="font-bold text-white text-sm mb-2">{item.contam}</h4>
              <div className="grid sm:grid-cols-2 gap-2 text-xs">
                <div><span className="text-red-400/50 block mb-0.5">Appearance</span><span className="text-red-200/50">{item.appearance}</span></div>
                <div><span className="text-orange-400/50 block mb-0.5">Cause</span><span className="text-orange-200/50">{item.cause}</span></div>
                <div><span className="text-amber-400/50 block mb-0.5">Action</span><span className="text-amber-200/50">{item.action}</span></div>
                <div><span className="text-emerald-400/50 block mb-0.5">Prevention</span><span className="text-emerald-200/50">{item.prevention}</span></div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Elixir & Tincture Formulas */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
          <Package className="w-7 h-7 text-amber-400" />
          <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">Elixir & Tincture Formulas</span>
        </h2>
        <div className="space-y-4">
          {[
            {
              name: "Lion's Mane Dual-Extract Tincture",
              method: 'Alcohol extraction (60 days) + hot water decoction, combined 1:1',
              ingredients: 'Dried lion\'s mane fruiting bodies, 190-proof ethanol, filtered RO water',
              process: [
                'Grind dried lion\'s mane to coarse powder',
                'Fill mason jar ½ full with powder, cover with 190-proof ethanol',
                'Shake daily for 60 days in dark, cool place',
                'Strain alcohol extract through cheesecloth — set aside',
                'Take remaining mushroom material, simmer in RO water (low boil) for 4–8 hours',
                'Strain hot water extract — let cool',
                'Combine 1:1 with alcohol extract. Final product ~25–30% alcohol.',
                'Bottle in amber dropper bottles. Label with date, species, batch #.',
              ],
              dosage: '1–2 mL (1–2 dropperfuls) 1–3× daily',
              benefits: 'Nerve growth factor (NGF), cognitive function, memory, mood',
            },
            {
              name: 'Immunity Mushroom Broth',
              method: 'Long simmer extraction — culinary and medicinal',
              ingredients: 'Dried shiitake (2 oz), maitake (1 oz), chestnut mushroom (1 oz), ginger (2"), turmeric (1"), garlic (4 cloves), onion, sea salt, black pepper, RO water (1 gallon)',
              process: [
                'Soak dried mushrooms in 1 gallon RO water for 1 hour',
                'Add ginger, turmeric, garlic, onion — bring to low simmer',
                'Simmer 4–8 hours (do NOT boil hard — destroys compounds)',
                'Strain through fine mesh. Press mushrooms to extract all liquid.',
                'Season with sea salt and black pepper (pepper activates turmeric curcumin).',
                'Yields ~3 quarts concentrated broth. Store in fridge (5 days) or freeze.',
              ],
              dosage: '1 cup daily as warm broth, or use as cooking stock',
              benefits: 'Beta-glucans (immune modulation), polysaccharides, umami depth, gut health',
            },
          ].map((formula, i) => (
            <div key={i} className="p-6 bg-amber-900/10 border border-amber-700/15 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-1">{formula.name}</h3>
              <p className="text-xs text-amber-400/50 mb-3">{formula.method}</p>
              <div className="text-sm mb-3"><span className="text-amber-400/50">Ingredients: </span><span className="text-white/60">{formula.ingredients}</span></div>
              <div className="mb-3">
                <span className="text-xs text-violet-400/60 font-semibold block mb-2">Process:</span>
                <ol className="space-y-1">
                  {formula.process.map((step, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-violet-200/50">
                      <span className="text-violet-400 font-bold text-xs mt-0.5">{j + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                <div><span className="text-emerald-400/50">Dosage: </span><span className="text-white/60">{formula.dosage}</span></div>
                <div><span className="text-emerald-400/50">Benefits: </span><span className="text-emerald-200/60">{formula.benefits}</span></div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Production Economics */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
          <ShoppingBag className="w-7 h-7 text-emerald-400" />
          <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">Production Economics</span>
        </h2>
        <div className="p-6 bg-gradient-to-br from-emerald-500/10 to-violet-500/5 border-2 border-emerald-500/30 rounded-2xl">
          <p className="text-sm text-emerald-200/50 mb-4">Estimated production capacity and revenue from a dedicated fruiting chamber + outdoor log operation:</p>
          <div className="space-y-2 mb-4">
            {[
              { item: 'Indoor fruiting (20 bags/cycle, 4 cycles/month)', yield: '80–160 lbs/month fresh', revenue: '$800–$2,400/month' },
              { item: 'Outdoor logs (50 inoculated logs, seasonal)', yield: '50–150 lbs/season', revenue: '$500–$2,250/season' },
              { item: 'Dried mushrooms (10:1 ratio)', yield: '8–16 lbs/month', revenue: '$1,200–$5,000/month' },
              { item: 'Tinctures/Elixirs (from dried stock)', yield: '50–100 bottles/month', revenue: '$1,500–$5,000/month' },
              { item: 'Grow kits (pre-colonized blocks)', yield: '20–40 kits/month', revenue: '$500–$1,400/month' },
            ].map((row, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-emerald-800/15 last:border-0 text-sm">
                <div className="flex-1"><span className="text-emerald-200/60">{row.item}</span></div>
                <div className="text-right shrink-0 ml-4">
                  <div className="text-xs text-white/50">{row.yield}</div>
                  <div className="font-bold text-emerald-300">{row.revenue}</div>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between pt-3 border-t-2 border-emerald-500/20">
              <span className="font-bold text-emerald-300">Total Potential (at scale)</span>
              <span className="text-xl font-black text-emerald-300">$10K–$40K/year</span>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="p-3 bg-black/15 rounded-xl">
              <div className="text-xs text-emerald-400/50 mb-1">Startup Cost</div>
              <div className="text-lg font-bold text-white">$500–$1,500</div>
              <div className="text-xs text-emerald-400/40">Flow hood (owned) + cooker + bags + spawn</div>
            </div>
            <div className="p-3 bg-black/15 rounded-xl">
              <div className="text-xs text-emerald-400/50 mb-1">Per-Bag Cost</div>
              <div className="text-lg font-bold text-white">$2–$4/bag</div>
              <div className="text-xs text-emerald-400/40">Substrate + bag + spawn + energy</div>
            </div>
          </div>
          <p className="mt-4 text-xs text-emerald-400/40">Economics improve dramatically at scale. 20 bags/cycle is conservative — a dedicated 10×10 ft fruiting room can hold 50–100 bags. Key constraint is fresh air exchange and humidity control capacity.</p>
        </div>
      </motion.div>
    </div>
  )
}
