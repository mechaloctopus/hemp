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
    </div>
  )
}
