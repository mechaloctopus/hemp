import { motion } from 'framer-motion'
import {
  FlaskConical, Beaker, Thermometer, Wind, ShieldCheck, AlertTriangle,
  CheckCircle2, Droplets, Leaf, Mushroom, Gauge
} from 'lucide-react'

export default function LabPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-800/30 border border-cyan-600/30 rounded-full text-sm text-cyan-300 mb-6">
          <FlaskConical className="w-4 h-4" />
          Dual-Purpose Processing Laboratory
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-4">
          <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Farm Laboratory
          </span>
        </h1>
        <p className="text-lg text-cyan-200/50 max-w-3xl">
          A single lab space serving two purposes: CBD oil extraction and purification + mycology sterile work. Shared infrastructure, separate protocols.
        </p>
      </motion.div>

      {/* Lab Overview */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <div className="grid md:grid-cols-2 gap-6">
          {/* CBD Extraction Side */}
          <div className="p-6 bg-gradient-to-br from-emerald-900/20 to-emerald-800/10 border border-emerald-600/20 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">CBD Extraction Lab</h3>
                <p className="text-xs text-emerald-400/50">Hemp oil processing & purification</p>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <h4 className="font-semibold text-emerald-300 text-sm">Ethanol Extraction Process</h4>
              {[
                { step: '1. Decarboxylation', desc: 'Heat dried hemp flower at 240°F for 40 min. Converts CBDA → CBD. Use oven or dedicated decarb unit.' },
                { step: '2. Cryo-Ethanol Wash', desc: 'Submerge decarbed flower in food-grade ethanol (190+ proof) at -40°F or colder. Quick wash (3–5 min) pulls cannabinoids while leaving waxes/chlorophyll behind.' },
                { step: '3. Filtration', desc: 'Strain through cheesecloth, then Buchner funnel with filter paper. Multiple passes for clarity.' },
                { step: '4. Rotary Evaporation', desc: 'Rotovap reclaims ~95% of ethanol for reuse. Gentle heat (100–130°F) under vacuum evaporates solvent, leaving crude CBD oil.' },
                { step: '5. Winterization (Optional)', desc: 'Dissolve crude in ethanol, freeze overnight (-20°F). Filter out precipitated waxes/lipids. Re-evaporate. Produces cleaner, golden oil.' },
                { step: '6. Fill Syringes', desc: 'Warm crude oil gently, fill 1g luer-lock syringes. Label with strain, batch #, COA reference. Package for sale.' },
              ].map((item, i) => (
                <div key={i} className="p-3 bg-black/15 rounded-lg">
                  <strong className="text-white text-xs">{item.step}</strong>
                  <p className="text-xs text-emerald-200/50 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>

            <h4 className="font-semibold text-emerald-300 text-sm mb-2">Equipment</h4>
            <div className="space-y-1.5">
              {[
                { item: 'Rotary Evaporator (2L–5L)', cost: '$500–$2,000', note: 'Reclaims ethanol. Essential.' },
                { item: 'Chest Freezer (-20°F)', cost: '$200–$400', note: 'For cryo-wash and winterization.' },
                { item: 'Food-Grade Ethanol (5 gal)', cost: '$100–$200', note: '190-proof. Reusable via rotovap.' },
                { item: 'Buchner Funnel + Vacuum Pump', cost: '$50–$150', note: 'Filtration system.' },
                { item: 'Digital Scale (0.01g)', cost: '$20–$40', note: 'Precision dosing.' },
                { item: 'Syringes + Labels', cost: '$100–$200/batch', note: 'Luer-lock 1mL, tamper-evident.' },
                { item: 'Decarboxylation Oven', cost: '$50–$200', note: 'Dedicated or standard kitchen oven.' },
              ].map((eq, i) => (
                <div key={i} className="flex items-center justify-between text-xs p-2 bg-black/10 rounded-lg">
                  <span className="text-white/70">{eq.item}</span>
                  <span className="text-amber-400">{eq.cost}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mycology Side */}
          <div className="p-6 bg-gradient-to-br from-violet-900/20 to-violet-800/10 border border-violet-600/20 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center">
                <Mushroom className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Mycology Lab</h3>
                <p className="text-xs text-violet-400/50">Sterile inoculation & culture work</p>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <h4 className="font-semibold text-violet-300 text-sm">Sterile Workflow</h4>
              {[
                { step: '1. Agar Preparation', desc: 'Pour MEA (malt extract agar) or PDA (potato dextrose agar) plates under laminar flow. Stack, parafilm, label.' },
                { step: '2. Tissue Cloning', desc: 'Take inner tissue from fresh mushroom fruit body. Transfer to agar plate with scalpel under flow hood. Isolate clean mycelium.' },
                { step: '3. Liquid Culture', desc: 'Inoculate sterilized nutrient broth (4% honey water or LME) with clean agar wedge. Grow on magnetic stirrer 7–14 days.' },
                { step: '4. Grain Spawn', desc: 'Sterilize grain (rye, oat, millet) in jars at 15 PSI for 90 min. Inoculate with LC syringe under flow hood. Colonize 14–21 days.' },
                { step: '5. Substrate Inoculation', desc: 'Mix masters mix (50/50 hardwood pellets + soy hulls) at 60% moisture. Bag in Unicorn bags. Sterilize. Inoculate with grain spawn.' },
                { step: '6. Fruiting', desc: 'Move colonized bags to fruiting chamber. Cut X in bag. Maintain temp/humidity/FAE per species requirements.' },
              ].map((item, i) => (
                <div key={i} className="p-3 bg-black/15 rounded-lg">
                  <strong className="text-white text-xs">{item.step}</strong>
                  <p className="text-xs text-violet-200/50 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>

            <h4 className="font-semibold text-violet-300 text-sm mb-2">Key Equipment</h4>
            <div className="space-y-1.5">
              {[
                { item: 'Laminar Flow Hood', cost: 'READY', note: 'HEPA-filtered clean air. Already owned.' },
                { item: 'Pressure Cooker (23 qt+)', cost: '$80–$200', note: 'All American or Presto. 15 PSI sterilization.' },
                { item: 'Agar / Petri Dishes', cost: '$30–$50', note: 'Pre-poured or DIY with MEA powder.' },
                { item: 'Grain Spawn Jars (widemouth)', cost: '$20–$40', note: 'Modified lids with injection ports + filter.' },
                { item: 'Unicorn Grow Bags (14A)', cost: '$50–$80/100', note: '0.2 micron filter patch. Industry standard.' },
                { item: 'Scalpel + Parafilm + ISO', cost: '$20–$30', note: 'Sterile transfer tools.' },
                { item: 'Magnetic Stir Plate', cost: '$30–$60', note: 'For liquid culture agitation.' },
              ].map((eq, i) => (
                <div key={i} className="flex items-center justify-between text-xs p-2 bg-black/10 rounded-lg">
                  <span className="text-white/70">{eq.item}</span>
                  <span className={eq.cost === 'READY' ? 'text-emerald-400 font-bold' : 'text-amber-400'}>{eq.cost}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Safety & Compliance */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
          <ShieldCheck className="w-7 h-7 text-cyan-400" />
          <span className="text-white">Lab Safety & Compliance</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-5 bg-red-900/10 border border-red-700/15 rounded-xl">
            <h4 className="font-bold text-red-300 mb-2 flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> Ethanol Safety</h4>
            <ul className="text-sm text-red-200/50 space-y-1">
              <li>• Ethanol is <strong className="text-red-200">flammable</strong> — no open flames, sparks, or static discharge</li>
              <li>• Ventilate work area (exhaust fan or open windows)</li>
              <li>• Store ethanol in approved flammable-liquid cabinet</li>
              <li>• Fire extinguisher (Class B) within reach</li>
              <li>• Eye wash station recommended</li>
            </ul>
          </div>
          <div className="p-5 bg-amber-900/10 border border-amber-700/15 rounded-xl">
            <h4 className="font-bold text-amber-300 mb-2 flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Processing License</h4>
            <ul className="text-sm text-amber-200/50 space-y-1">
              <li>• USDA hemp license covers growing and storing biomass</li>
              <li>• To <strong className="text-amber-200">process and sell CBD products</strong>, you need a separate <strong className="text-amber-200">UDAF Cannabinoid Processor License</strong> (Tier 4)</li>
              <li>• Contact ag.utah.gov for application</li>
              <li>• Must meet food-safety standards if selling edible/topical products</li>
              <li>• Mycology products: standard Utah cottage food / food handler permits apply</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Lab Cost Summary */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border-2 border-cyan-500/30 rounded-2xl">
          <h3 className="text-lg font-bold text-cyan-300 mb-4">Total Lab Investment</h3>
          <div className="grid sm:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-black/20 rounded-xl">
              <div className="text-xs text-emerald-400/50 mb-1">CBD Extraction Setup</div>
              <div className="text-2xl font-bold text-emerald-300">$1,020–$3,190</div>
            </div>
            <div className="p-4 bg-black/20 rounded-xl">
              <div className="text-xs text-violet-400/50 mb-1">Mycology Lab Setup</div>
              <div className="text-2xl font-bold text-violet-300">$250–$510</div>
            </div>
            <div className="p-4 bg-black/20 rounded-xl">
              <div className="text-xs text-cyan-400/50 mb-1">Combined Total</div>
              <div className="text-2xl font-bold text-cyan-300">$1,270–$3,700</div>
            </div>
          </div>
          <p className="mt-4 text-xs text-cyan-400/40">Both labs share the same physical room — one clean bench area for mycology (flow hood side), one extraction area (ventilated side). The pressure cooker serves both (sterilize substrates + decarb). The chest freezer serves both (cryo-wash + storing cultures).</p>
        </div>
      </motion.div>
    </div>
  )
}
