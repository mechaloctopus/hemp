import { motion } from 'framer-motion'
import {
  FlaskConical, ShieldCheck, AlertTriangle,
  Leaf, Box, Sparkles,
  AirVent, Star, DollarSign, Ruler, Warehouse
} from 'lucide-react'

export default function LabPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-800/30 border border-cyan-600/30 rounded-full text-sm text-cyan-300 mb-6">
          <FlaskConical className="w-4 h-4" />
          Lazy K Farms — Processing Laboratory & Clean Room
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-4">
          <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Farm Laboratory
          </span>
        </h1>
        <p className="text-lg text-cyan-200/50 max-w-3xl">
          A dedicated clean room lab serving three purposes: CBD/CBG oil extraction, mycology sterile work, and sensitive farm operations. HEPA-filtered positive pressure, easily sanitized surfaces, and connected to the fruiting chamber.
        </p>
      </motion.div>

      {/* ──── CLEAN ROOM DESIGN ──── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-black mb-2 flex items-center gap-3">
          <Sparkles className="w-7 h-7 text-cyan-400" />
          <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">The Clean Room</span>
        </h2>
        <p className="text-sm text-cyan-200/40 mb-6">A purpose-built sterile environment where every critical farm operation happens — from mushroom inoculation to CBD extraction to culture work. Clean air, clean hands, clean results.</p>

        {/* Build Options */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="p-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/10 border-2 border-cyan-500/25 rounded-2xl relative">
            <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-cyan-500 text-cyan-950 text-[10px] font-black rounded-full">RECOMMENDED</div>
            <div className="flex items-center gap-3 mb-4">
              <Box className="w-8 h-8 text-cyan-400" />
              <div>
                <h3 className="text-lg font-bold text-white">Shipping Container Conversion</h3>
                <p className="text-xs text-cyan-400/50">20ft or 40ft steel container → clean room</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-cyan-200/50 mb-4">
              {[
                { pro: true, text: 'Steel construction — easy to sanitize, no organic materials to harbor mold' },
                { pro: true, text: 'Weatherproof, secure, lockable — protects expensive equipment' },
                { pro: true, text: 'Insulated (spray foam) — temperature controllable year-round' },
                { pro: true, text: 'Can be placed adjacent to fruiting chamber (short walk with sterile materials)' },
                { pro: true, text: '20ft container = ~160 sq ft — enough for dual-purpose lab' },
                { pro: true, text: 'Costs: $2,000–$4,000 delivered + $2,000–$5,000 buildout' },
                { pro: false, text: 'Needs electrical hookup (20A+ circuit for rotovap + freezer)' },
                { pro: false, text: 'Needs plumbing for sink (can run from house or use portable)' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className={`text-xs mt-0.5 ${item.pro ? 'text-emerald-400' : 'text-amber-400'}`}>{item.pro ? '✓' : '△'}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            <div className="p-3 bg-black/15 rounded-xl text-center">
              <div className="text-xs text-cyan-400/50">Estimated Total</div>
              <div className="text-2xl font-black text-cyan-300">$4,000–$9,000</div>
              <div className="text-xs text-cyan-400/30">Container + insulation + electrical + finishes + HEPA</div>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-amber-900/15 to-amber-800/5 border border-amber-500/20 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Warehouse className="w-8 h-8 text-amber-400" />
              <div>
                <h3 className="text-lg font-bold text-white">Custom Small Structure</h3>
                <p className="text-xs text-amber-400/50">Purpose-built 10×16 ft shed/outbuilding</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-amber-200/50 mb-4">
              {[
                { pro: true, text: 'Custom layout — design exactly to your needs' },
                { pro: true, text: 'Can integrate directly with fruiting chamber (shared wall/door)' },
                { pro: true, text: 'FRP (fiberglass reinforced panels) walls — food-grade, wipeable, mold-proof' },
                { pro: true, text: 'Poured concrete or epoxy floor — seamless, sanitizable' },
                { pro: true, text: 'Can add anteroom/gowning vestibule at entry' },
                { pro: true, text: 'More attractive and permanent than a container' },
                { pro: false, text: 'Higher cost: $8,000–$15,000+ depending on materials' },
                { pro: false, text: 'Permitting may be required (check Riverton city)' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className={`text-xs mt-0.5 ${item.pro ? 'text-emerald-400' : 'text-amber-400'}`}>{item.pro ? '✓' : '△'}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            <div className="p-3 bg-black/15 rounded-xl text-center">
              <div className="text-xs text-amber-400/50">Estimated Total</div>
              <div className="text-2xl font-black text-amber-300">$8,000–$15,000</div>
              <div className="text-xs text-amber-400/30">Frame + FRP walls + epoxy floor + HVAC + plumbing</div>
            </div>
          </div>
        </div>

        {/* Clean Room Layout */}
        <div className="p-6 bg-cyan-900/10 border border-cyan-700/15 rounded-2xl mb-8">
          <h3 className="text-lg font-bold text-cyan-300 mb-4 flex items-center gap-2"><Ruler className="w-5 h-5" /> Clean Room Layout</h3>
          <div className="grid sm:grid-cols-3 gap-4 mb-4">
            <div className="p-4 bg-black/15 rounded-xl">
              <h4 className="font-bold text-white text-sm mb-2">Zone 1 — Anteroom / Gowning</h4>
              <p className="text-xs text-cyan-200/40">Small entry vestibule (~4×8 ft). Hand wash sink, hand sanitizer dispenser, disposable gloves, lab coat hooks, shoe covers. The airlock — transition from dirty farm to clean lab. Door stays closed while inner door opens.</p>
            </div>
            <div className="p-4 bg-black/15 rounded-xl">
              <h4 className="font-bold text-white text-sm mb-2">Zone 2 — Sterile Work Area</h4>
              <p className="text-xs text-cyan-200/40">Main clean space (~8×12 ft). Laminar flow hood on one wall, stainless bench opposite. HEPA-filtered positive pressure pushes clean air out through any gaps — contaminants can't enter. All inoculations, agar work, tissue cloning, and LC prep happen here.</p>
            </div>
            <div className="p-4 bg-black/15 rounded-xl">
              <h4 className="font-bold text-white text-sm mb-2">Zone 3 — Extraction / Processing</h4>
              <p className="text-xs text-cyan-200/40">Separated area (~8×8 ft) with rotary evaporator, chest freezer, filtration station, decarb oven. Exhaust fan for ethanol fumes (vented outside). This zone handles all CBD/CBG extraction, winterization, and syringe filling.</p>
            </div>
          </div>

          <div className="p-4 bg-cyan-800/10 border border-cyan-700/10 rounded-xl">
            <h4 className="font-bold text-white text-sm mb-2 flex items-center gap-2"><AirVent className="w-4 h-4 text-cyan-400" /> HEPA Positive Pressure System</h4>
            <div className="text-sm text-cyan-200/50 space-y-2">
              <p><strong className="text-white">How it works:</strong> A HEPA blower fan continuously pushes filtered air INTO the clean room at slightly higher pressure than the outside. This means air only flows OUT through any cracks, doors, or gaps — contaminants (mold spores, bacteria, dust) cannot flow in. This is how hospital operating rooms and pharmaceutical clean rooms work.</p>
              <p><strong className="text-white">Setup:</strong> 12"×12" or 24"×24" HEPA fan-filter unit (FFU) mounted in ceiling or wall. These are available commercially for ~$200–$500 each. One FFU for a 20ft container provides ~200–300 CFM of HEPA-filtered air — more than enough for positive pressure in a small room.</p>
              <p><strong className="text-white">Why this matters:</strong> Without positive pressure, every time you open the door, mold spores rush in. With positive pressure, clean air rushes OUT when you open the door — the room stays clean. This is the single most important feature of the lab.</p>
            </div>
          </div>
        </div>

        {/* Proximity to Fruiting Chamber */}
        <div className="p-5 bg-violet-900/10 border border-violet-700/15 rounded-xl mb-8">
          <h4 className="font-bold text-violet-300 text-sm mb-2 flex items-center gap-2"><Leaf className="w-4 h-4" /> Connection to Fruiting Chamber</h4>
          <p className="text-sm text-violet-200/50">
            The clean room should sit immediately adjacent to the fruiting chamber. That means colonized bags, agar cultures, and liquid cultures move only a few steps between sterile prep and fruiting. Less walking, less handling, lower contamination risk.
          </p>
        </div>
      </motion.div>

      {/* ──── EQUIPMENT WISHLIST ──── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-black mb-2 flex items-center gap-3">
          <Star className="w-7 h-7 text-amber-400" />
          <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">Equipment Wishlist — Priority Order</span>
        </h2>
        <p className="text-sm text-amber-200/40 mb-6">Everything needed to outfit the clean room, in order of priority. Priced for real-world budget sourcing.</p>

        <div className="space-y-2 mb-6">
          {[
            { item: 'Rotary Evaporator (2L RE-201D)', cost: '$699', priority: 'CRITICAL', status: 'Buy', notes: 'Chinese-made 2L rotovap — excellent for small-batch. Reclaims 95% of ethanol (saves $hundreds/year). Vacuum + water bath + condenser. Available on eBay, Amazon, or lab supply. This IS the extraction lab.', color: 'red' },
            { item: 'Laminar Flow Hood (DIY Build)', cost: '$300', priority: 'CRITICAL', status: 'Build', notes: 'DIY from 24"×24" HEPA filter ($80–$120) + blower fan ($60–$100) + plywood box. Provides ISO 5 clean air for all inoculation work. Better than any still air box. Plan to build a larger, better one than current setup.', color: 'red' },
            { item: 'Lab Refrigerator / Culture Fridge', cost: '$150–$400', priority: 'HIGH', status: 'Buy', notes: 'Dedicated fridge for: agar plate storage, liquid culture storage, grain spawn holding, kefir cultures, probiotic strains, CBD oil storage. Do NOT share with food — cross-contamination risk. Small dorm-size fridge works. Thermostat: 36–40°F.', color: 'orange' },
            { item: 'HEPA Fan-Filter Unit (FFU)', cost: '$200–$500', priority: 'HIGH', status: 'Buy', notes: '24"×24" ceiling-mount HEPA FFU for positive pressure. 99.99% particle removal at 0.3 microns. Creates the positive pressure environment. Buy commercial unit or DIY from HEPA filter + box fan (less ideal but functional).', color: 'orange' },
            { item: 'Chest Freezer (-20°F capable)', cost: '$200–$400', priority: 'HIGH', status: 'Buy', notes: 'Cryo-ethanol wash (-40°F ideal), winterization, long-term culture storage. A standard chest freezer reaches -20°F. For colder: add dry ice to ethanol bath inside freezer.', color: 'orange' },
            { item: 'Pressure Cooker (All American 921 — 21.5 qt)', cost: '$300–$400', priority: 'HIGH', status: 'Buy', notes: 'All American = gold standard. Metal-to-metal seal (no gasket to fail). 15 PSI / 250°F sterilization. Handles grain jars, agar, liquid culture, substrate bags. Lasts a lifetime. Worth the investment over Presto.', color: 'orange' },
            { item: 'Stainless Steel Work Bench', cost: '$150–$300', priority: 'MEDIUM', status: 'Buy', notes: 'Restaurant-grade stainless table (48"×24" or 72"×30"). Easy to sanitize with ISO + bleach. Non-porous surface. Available used from restaurant supply stores for cheap.', color: 'amber' },
            { item: 'Buchner Funnel + Vacuum Pump', cost: '$80–$150', priority: 'MEDIUM', status: 'Buy', notes: '1000mL Buchner funnel + hand vacuum pump or electric aspirator. For filtering ethanol extracts through Whatman paper. Multiple passes = cleaner oil.', color: 'amber' },
            { item: 'Digital Scale (0.01g precision)', cost: '$25–$40', priority: 'MEDIUM', status: 'Buy', notes: 'For precise dosing of CBD oil into syringes, measuring nutrients, weighing spawn ratios. AWS or Ohaus brand.', color: 'amber' },
            { item: 'Magnetic Stir Plate + Stir Bars', cost: '$30–$60', priority: 'MEDIUM', status: 'Buy', notes: 'For liquid culture agitation — keeps mycelium suspended, prevents clumping, accelerates growth. Also useful for mixing ethanol wash evenly.', color: 'amber' },
            { item: 'Hand Wash Sink (Portable)', cost: '$100–$300', priority: 'MEDIUM', status: 'Buy/Build', notes: 'Portable hand wash station with foot pump or electric. Hot water preferred. Mount in anteroom. If plumbing available, install a proper sink.', color: 'amber' },
            { item: 'UV-C Sterilization Lamp', cost: '$30–$80', priority: 'LOW', status: 'Buy', notes: 'Mount in ceiling — run for 15–30 min before lab sessions to sterilize surfaces. NEVER use while people are in the room (UV-C damages eyes/skin). Timer switch recommended.', color: 'emerald' },
            { item: 'Food-Grade Ethanol (5 gallons)', cost: '$100–$200', priority: 'ONGOING', status: 'Buy', notes: '190-proof (95%) food-grade ethanol. Reusable via rotovap — one purchase lasts many extraction cycles. Extractohol or Culinary Solvent brands.', color: 'blue' },
            { item: 'Syringes + Labels + Packaging', cost: '$100–$200/batch', priority: 'ONGOING', status: 'Buy', notes: '1mL and 2mL luer-lock syringes, blunt tips, tamper-evident bags, custom Lazy K labels. Order in bulk (100+ units) for best pricing.', color: 'blue' },
          ].map((eq, i) => (
            <div key={i} className={`p-4 rounded-xl border transition-all hover:border-cyan-500/20 ${
              eq.color === 'red' ? 'bg-red-900/8 border-red-700/15' :
              eq.color === 'orange' ? 'bg-orange-900/8 border-orange-700/12' :
              eq.color === 'amber' ? 'bg-amber-900/8 border-amber-700/12' :
              eq.color === 'emerald' ? 'bg-emerald-900/8 border-emerald-700/12' :
              'bg-blue-900/8 border-blue-700/12'
            }`}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                <h4 className="font-bold text-white text-sm">{eq.item}</h4>
                <div className="flex gap-2">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    eq.priority === 'CRITICAL' ? 'bg-red-600/30 text-red-300' :
                    eq.priority === 'HIGH' ? 'bg-orange-600/30 text-orange-300' :
                    eq.priority === 'MEDIUM' ? 'bg-amber-600/30 text-amber-300' :
                    eq.priority === 'LOW' ? 'bg-emerald-600/30 text-emerald-300' :
                    'bg-blue-600/30 text-blue-300'
                  }`}>{eq.priority}</span>
                  <span className="text-xs px-2 py-0.5 bg-cyan-800/20 rounded-full text-cyan-300">{eq.status}</span>
                  <span className="text-xs px-2 py-0.5 bg-amber-800/30 rounded-full text-amber-300 font-bold">{eq.cost}</span>
                </div>
              </div>
              <p className="text-xs text-cyan-200/40">{eq.notes}</p>
            </div>
          ))}
        </div>

        {/* Cost Summary */}
        <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-amber-500/5 border-2 border-cyan-500/25 rounded-2xl">
          <h3 className="text-lg font-bold text-cyan-300 mb-4 flex items-center gap-2"><DollarSign className="w-5 h-5" /> Equipment Investment Summary</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
            <div className="p-3 bg-black/15 rounded-xl text-center">
              <div className="text-xs text-red-400/50 mb-1">Critical (Must-Have)</div>
              <div className="text-xl font-black text-red-300">~$999</div>
              <div className="text-[10px] text-red-400/30">Rotovap + flow hood</div>
            </div>
            <div className="p-3 bg-black/15 rounded-xl text-center">
              <div className="text-xs text-orange-400/50 mb-1">High Priority</div>
              <div className="text-xl font-black text-orange-300">~$1,150</div>
              <div className="text-[10px] text-orange-400/30">Fridge + HEPA + freezer + cooker</div>
            </div>
            <div className="p-3 bg-black/15 rounded-xl text-center">
              <div className="text-xs text-amber-400/50 mb-1">Medium Priority</div>
              <div className="text-xl font-black text-amber-300">~$585</div>
              <div className="text-[10px] text-amber-400/30">Bench, funnel, scale, stir plate, sink, UV</div>
            </div>
            <div className="p-3 bg-black/15 rounded-xl text-center">
              <div className="text-xs text-cyan-400/50 mb-1">Total Equipment</div>
              <div className="text-xl font-black text-cyan-300">~$2,734</div>
              <div className="text-[10px] text-cyan-400/30">All equipment (not including structure)</div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="p-3 bg-black/10 rounded-lg">
              <div className="flex justify-between text-sm"><span className="text-cyan-200/50">Equipment (all)</span><span className="text-white font-bold">~$2,734</span></div>
              <div className="flex justify-between text-sm"><span className="text-cyan-200/50">Container conversion</span><span className="text-white font-bold">$4,000–$9,000</span></div>
              <div className="flex justify-between text-sm pt-2 border-t border-cyan-800/20 mt-2"><span className="text-cyan-300 font-bold">Total (container option)</span><span className="text-cyan-300 font-bold">$6,734–$11,734</span></div>
            </div>
            <div className="p-3 bg-black/10 rounded-lg">
              <div className="flex justify-between text-sm"><span className="text-cyan-200/50">Equipment (all)</span><span className="text-white font-bold">~$2,734</span></div>
              <div className="flex justify-between text-sm"><span className="text-cyan-200/50">Custom structure</span><span className="text-white font-bold">$8,000–$15,000</span></div>
              <div className="flex justify-between text-sm pt-2 border-t border-cyan-800/20 mt-2"><span className="text-amber-300 font-bold">Total (custom build)</span><span className="text-amber-300 font-bold">$10,734–$17,734</span></div>
            </div>
          </div>
          <p className="mt-4 text-xs text-cyan-400/40">Phase this: Start with equipment only (use a cleaned room in the house/garage). Add the dedicated structure when budget allows. The rotovap ($699) and flow hood ($300 DIY) are the highest-ROI purchases — they pay for themselves in the first extraction batch.</p>
        </div>
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
                <Sparkles className="w-5 h-5 text-white" />
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
              <div className="text-xs text-emerald-400/50 mb-1">Equipment Only</div>
              <div className="text-2xl font-bold text-emerald-300">~$2,734</div>
            </div>
            <div className="p-4 bg-black/20 rounded-xl">
              <div className="text-xs text-violet-400/50 mb-1">With Container Clean Room</div>
              <div className="text-2xl font-bold text-violet-300">$6,734–$11,734</div>
            </div>
            <div className="p-4 bg-black/20 rounded-xl">
              <div className="text-xs text-cyan-400/50 mb-1">With Custom Build</div>
              <div className="text-2xl font-bold text-cyan-300">$10,734–$17,734</div>
            </div>
          </div>
          <p className="mt-4 text-xs text-cyan-400/40">Recommended build path: buy the rotovap, upgraded DIY laminar flow hood, culture fridge, and HEPA unit first. Start operations in a cleaned temporary room if needed. Then upgrade into a dedicated shipping-container clean room placed next to the fruiting chamber for the best balance of cost, sanitation, and workflow.</p>
        </div>
      </motion.div>
    </div>
  )
}
