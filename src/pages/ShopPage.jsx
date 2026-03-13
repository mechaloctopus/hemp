import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Store, ShoppingCart, Droplets, Leaf, FlaskConical, Heart,
  BookOpen, Shirt, UtensilsCrossed, Star, ExternalLink, Calendar,
  Users, ChefHat, GraduationCap, Sparkles, ArrowRight, CheckCircle2,
  Package, Award, Beaker, MessageCircle
} from 'lucide-react'

/* ═══════════════════════════════════════════════════════
   SHOP DATA
   ═══════════════════════════════════════════════════════ */

const oliveOils = [
  {
    name: 'Kyoord High-Polyphenol EVOO',
    origin: 'Spain (Picual varietal)',
    polyphenols: '500+ mg/kg',
    price: '$39.95 / 500mL',
    notes: 'One of the highest polyphenol counts commercially available. Robust, peppery finish — the "throat burn" is oleocanthal (natural COX-2 inhibitor, same mechanism as ibuprofen). Lab-tested and certified.',
    labTested: true,
  },
  {
    name: 'Gundry MD Polyphenol-Rich EVOO',
    origin: 'Morocco / Italy blend',
    polyphenols: '400+ mg/kg',
    price: '$49.95 / 500mL',
    notes: 'Dr. Steven Gundry\'s curated blend. High oleocanthal + oleacein. Cold-pressed within hours of harvest. Dark bottle preserves polyphenols.',
    labTested: true,
  },
  {
    name: 'Fresh-Pressed Olive Oil Club — Seasonal Selection',
    origin: 'Rotating single-estate (Chile, Italy, Spain, Greece)',
    polyphenols: '300–600+ mg/kg (varies by harvest)',
    price: '$35–$55 / 500mL',
    notes: 'Freshest possible — pressed and shipped within weeks of harvest. Southern hemisphere in spring, northern in fall. True fresh EVOO has a shelf life; use within 3–6 months. Subscription available.',
    labTested: true,
  },
]

const supplements = [
  { name: 'Lion\'s Mane Dual-Extract Powder', price: '$38 / 60g', desc: 'Farm-grown, dual-extracted (hot water + alcohol). NGF support, cognitive function, neuroprotection.', badge: 'Cognitive', color: 'violet' },
  { name: 'Mushroom Immunity Blend Powder', price: '$42 / 60g', desc: 'Shiitake + maitake + lion\'s mane + oyster. Broad-spectrum beta-glucan immune support.', badge: 'Immune', color: 'emerald' },
  { name: 'Holy Basil (Tulsi) Extract Capsules', price: '$24 / 60 caps', desc: 'Garden-grown Rama + Krishna tulsi. Adaptogen — cortisol, anxiety, blood sugar.', badge: 'Adaptogen', color: 'emerald' },
  { name: 'CBD + Turmeric + Black Pepper Capsules', price: '$35 / 30 caps', desc: '25mg CBD + 500mg turmeric + piperine. Triple anti-inflammatory. Lab-tested.', badge: 'Anti-Inflammatory', color: 'amber' },
  { name: 'Full-Spectrum CBD Oil Syringe (1g)', price: '$8 / syringe', desc: 'Cold ethanol-extracted crude CBD oil. Full entourage effect. Lab-tested for potency + purity.', badge: 'CBD', color: 'emerald' },
  { name: 'Hemp Seed Hearts', price: '$12 / lb', desc: 'Hulled hemp seeds from our Finola crop. Complete protein, omega-3, magnesium, zinc.', badge: 'Superfood', color: 'lime' },
]

const artisanFoods = [
  { name: 'The Pesto of Pestos (9-Basil Blend)', price: '$14 / 8oz', desc: '9 varieties of garden basil + high-polyphenol EVOO + pine nuts + aged Parmigiano. Therapeutic food.', badge: 'Signature', hot: true },
  { name: 'Crushed Garlic Oregano Butter', price: '$10 / 8oz', desc: 'Raw garlic + fresh oregano + thyme + rosemary in grass-fed butter. Allicin bomb.', badge: 'Artisan' },
  { name: 'Lacto-Fermented Dill Pickles', price: '$8 / quart', desc: 'Live-culture salt brine ferment. Probiotic-rich. Garden cucumbers + dill + garlic.', badge: 'Probiotic' },
  { name: 'Lazy K Hot Sauce', price: '$10 / 5oz', desc: 'Garden peppers lacto-fermented 4+ weeks. Complex, deep, probiotic heat.', badge: 'Fermented' },
  { name: 'Elderberry Syrup', price: '$18 / 8oz', desc: 'Farm elderberries + raw honey + ginger + cinnamon. Immune support. No refined sugar.', badge: 'Immune' },
  { name: 'Mushroom Bone Broth', price: '$14 / quart', desc: 'Shiitake + maitake slow-simmered 8 hours. Beta-glucans, umami, gut healing. Frozen.', badge: 'Medicinal' },
  { name: 'Seasonal Fruit Preserves', price: '$10 / 8oz', desc: 'Small-batch from our orchard. Fig, peach, or grape. Raw honey sweetened.', badge: 'Seasonal' },
]

const books = [
  { title: 'Holy Basil, Holy Food', author: 'Lazy K Farms', price: '$24.95', desc: 'Our book. A modern, scientifically-backed guide to whole food nutrition, metabolic therapy, and escaping the ultra-processed food trap. Covers cruciferous anti-cancer compounds, the ketogenic approach, seed oils, medicinal mushrooms, CBD, and building a regenerative micro-farm. With recipes, growing guides, and 200+ citations.', ours: true },
  { title: 'Eat to Live', author: 'Dr. Joel Fuhrman', price: '$16.99', desc: 'The nutrient-density bible. ANDI scores, nutritarian diet. Heavy on cruciferous vegetables — perfectly aligned with our philosophy.' },
  { title: 'The Metabolic Approach to Cancer', author: 'Dr. Nasha Winters & Jess Higgins Kelley', price: '$18.99', desc: 'The definitive guide to using nutrition, lifestyle, and metabolic therapies alongside conventional cancer treatment. Ketogenic protocols, lab testing, terrain analysis.' },
  { title: 'How Not to Die', author: 'Dr. Michael Greger', price: '$17.99', desc: 'Evidence-based guide to preventing and reversing disease with food. Plant-forward. Covers every major disease category with dietary interventions.' },
  { title: 'The Peace of Wild Things', author: 'Thich Nhat Hanh', price: '$14.99', desc: 'Mindful eating, mindful living. The spiritual dimension of food, presence, and gratitude. Pairs beautifully with our farm philosophy.' },
  { title: 'Being Peace', author: 'Thich Nhat Hanh', price: '$13.95', desc: 'The foundation of mindfulness practice. Simple, profound, transformative. Read this alongside your garden.' },
  { title: 'Radical Remission', author: 'Dr. Kelly Turner', price: '$16.99', desc: '9 key factors found in over 1,000 cases of radical cancer remission. Diet (whole foods, no sugar) is #1. Inspiring and evidence-based.' },
  { title: 'Mycelium Running', author: 'Paul Stamets', price: '$24.95', desc: 'The mycology bible. How mushrooms can help save the world. Medicinal mushrooms, permaculture, bioremediation. Essential for our mycology program.' },
]

const merch = [
  { name: 'Lazy K Farms T-Shirt', price: '$28', desc: 'Organic cotton. Emerald green with italic "K" logo. Unisex fit. Screenprinted locally.', sizes: 'S–3XL' },
  { name: 'Lazy K Farms Hoodie', price: '$48', desc: 'Heavyweight organic cotton fleece. Dark forest green. Embroidered "K" chest logo.', sizes: 'S–3XL' },
  { name: 'Lazy K Canvas Tote Bag', price: '$18', desc: 'Heavy-duty organic canvas. "Return to the Circle of Life" print. Great for farmers market runs.', sizes: 'One size' },
  { name: 'Lazy K Farm Apron', price: '$32', desc: 'Waxed canvas apron. Garden/kitchen crossover. Multiple pockets. Adjustable leather straps.', sizes: 'One size' },
  { name: 'Lazy K Seed Packet Collection', price: '$22', desc: 'Curated pack of 9 basil varieties (50+ seeds each) in beautiful branded packets. Grow your own pesto garden.', sizes: 'N/A' },
  { name: 'Lazy K Sticker Pack', price: '$8', desc: '6 vinyl stickers — farm logo, "Know Your Food", cruciferous veggies, mushroom, hemp leaf, "Eat Real Food".', sizes: 'N/A' },
]

const workshops = [
  {
    title: 'Keto Kitchen: Cruciferous Masterclass',
    duration: '3 hours',
    price: '$65 / person',
    groupSize: '6–12',
    description: 'Hands-on cooking workshop focused on preparing delicious cruciferous vegetable dishes within a ketogenic framework. Learn to roast Brussels sprouts to perfection, make cauliflower rice that actually tastes good, ferment sauerkraut and kimchi, and understand the science of sulforaphane activation.',
    includes: ['Cooking instruction with all ingredients provided', 'Printed recipe booklet', 'Take-home jar of sauerkraut you made', 'Discussion of anti-cancer compounds in every dish', 'Q&A with nutritionist referrals'],
    frequency: 'Monthly (2nd Saturday)',
  },
  {
    title: 'The 9-Basil Pesto Workshop',
    duration: '2 hours',
    price: '$55 / person',
    groupSize: '6–10',
    description: 'Learn to make the Lazy K signature 9-basil pesto from scratch. We\'ll harvest fresh basil from the garden, discuss each variety\'s flavor and health properties, select the right olive oil (polyphenol tasting!), and make pesto together. Everyone takes home a jar.',
    includes: ['Garden tour + basil harvest', 'Olive oil polyphenol tasting (3 oils)', 'Pesto making with all 9 basil varieties', 'Take-home 8oz jar of fresh pesto', 'Printed basil variety guide'],
    frequency: 'Bi-weekly (Jun–Sept, peak basil season)',
  },
  {
    title: 'Metabolic Therapy & Food as Medicine',
    duration: '4 hours',
    price: '$85 / person',
    groupSize: '8–15',
    description: 'A deep-dive workshop on metabolic health, ketosis, and using food as medicine. We review the scientific literature on the Warburg effect, seed oils, ultra-processed food, and anti-cancer nutrition. Then we cook a full anti-inflammatory meal together and eat as a group. Guest speakers (nutritionists, functional medicine practitioners) join periodically.',
    includes: ['Scientific literature review (printed packet)', 'Full keto-friendly meal preparation', 'Group dinner with discussion', 'Guest speaker Q&A (when available)', 'Resource list: nutritionists, functional medicine doctors in Utah', 'Copy of our recipe collection'],
    frequency: 'Monthly (last Saturday)',
  },
  {
    title: 'Fermentation 101: Pickles, Kimchi & Hot Sauce',
    duration: '2.5 hours',
    price: '$55 / person',
    groupSize: '6–10',
    description: 'Master the art of lacto-fermentation. We\'ll make dill pickles, kimchi, and hot sauce from garden-fresh ingredients. Learn the science of Lactobacillus, salt ratios, fermentation timing, and troubleshooting. Take home all three ferments to finish at home.',
    includes: ['All ingredients from the farm garden', 'Mason jars + fermentation weights to take home', 'Printed fermentation guide', 'Tasting of mature ferments (2–8 weeks old)', 'Discussion of gut health + probiotics'],
    frequency: 'Monthly (3rd Saturday, Jul–Oct)',
  },
  {
    title: 'Mushroom Elixirs & Tinctures',
    duration: '2 hours',
    price: '$60 / person',
    groupSize: '6–8',
    description: 'Learn to make dual-extract mushroom tinctures and medicinal broths. We\'ll discuss the science of beta-glucans, NGF, and immune modulation. Hands-on preparation of lion\'s mane tincture, immunity broth, and mushroom coffee blend. Tour of the fruiting chamber included.',
    includes: ['Fruiting chamber tour', 'Dual-extraction tincture making demo', 'Immunity broth cooking', 'Take-home 2oz tincture bottle', 'Take-home mushroom powder sample', 'Printed medicinal mushroom guide'],
    frequency: 'Monthly (1st Saturday)',
  },
]

/* ═══════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════ */

export default function ShopPage() {
  const [activeTab, setActiveTab] = useState('all')

  const tabs = [
    { id: 'all', label: 'Everything' },
    { id: 'olive-oil', label: 'Olive Oil' },
    { id: 'food', label: 'Artisan Foods' },
    { id: 'supplements', label: 'Supplements' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'books', label: 'Books' },
    { id: 'merch', label: 'Merch' },
  ]

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-800/30 border border-amber-600/30 rounded-full text-sm text-amber-300 mb-6">
          <Store className="w-4 h-4" />
          Lazy K Farms — Online Store
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-4">
          <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-emerald-400 bg-clip-text text-transparent">
            Farm Shop
          </span>
        </h1>
        <p className="text-lg text-amber-200/50 max-w-3xl">
          Everything we grow, make, and believe in — available online and at neighboring farmers market stands. High-polyphenol olive oil, artisan foods, medicinal supplements, cooking workshops, and curated books.
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-10 sticky top-0 z-20 bg-emerald-950/95 backdrop-blur-md py-3 -mx-6 px-6 lg:-mx-8 lg:px-8 border-b border-emerald-800/20">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                : 'bg-emerald-900/15 text-emerald-400/40 border border-emerald-700/10 hover:text-emerald-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ──── HIGH-POLYPHENOL OLIVE OIL ──── */}
      {(activeTab === 'all' || activeTab === 'olive-oil') && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-black mb-2 flex items-center gap-3">
            <Droplets className="w-7 h-7 text-amber-400" />
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">High-Polyphenol Olive Oil</span>
          </h2>
          <p className="text-sm text-amber-200/40 mb-6">The foundation of our kitchen. These are the 3 highest-polyphenol, lab-tested extra virgin olive oils available — fresh-pressed, cold-extracted, and brimming with oleocanthal (a natural anti-inflammatory as potent as ibuprofen).</p>

          <div className="grid lg:grid-cols-3 gap-4">
            {oliveOils.map((oil, i) => (
              <div key={i} className="p-6 bg-gradient-to-br from-amber-900/15 to-amber-800/5 border border-amber-600/20 rounded-2xl relative">
                {i === 0 && <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-amber-500 text-amber-950 text-[10px] font-black rounded-full">STAFF PICK</div>}
                <h3 className="text-lg font-bold text-white mb-1">{oil.name}</h3>
                <p className="text-xs text-amber-400/50 mb-3">{oil.origin}</p>
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-3 py-1 bg-emerald-800/30 rounded-full">
                    <span className="text-sm font-bold text-emerald-300">{oil.polyphenols}</span>
                  </div>
                  <div className="px-3 py-1 bg-amber-800/30 rounded-full">
                    <span className="text-sm font-bold text-amber-300">{oil.price}</span>
                  </div>
                </div>
                <p className="text-sm text-amber-200/50 mb-3">{oil.notes}</p>
                {oil.labTested && (
                  <div className="flex items-center gap-1 text-xs text-emerald-400/60">
                    <Beaker className="w-3 h-3" /> Lab-tested for polyphenol content
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 bg-amber-900/10 border border-amber-700/15 rounded-xl">
            <p className="text-sm text-amber-300/60">
              <strong className="text-amber-300">Why polyphenol count matters:</strong> Cheap supermarket olive oil averages 50–150 mg/kg polyphenols and is often rancid or adulterated. Our selections are 300–600+ mg/kg — meaning 3–10× the anti-inflammatory, cardioprotective, and anti-cancer compounds per tablespoon. Oleocanthal (the peppery burn) is a natural COX-2 inhibitor. EU health claims require &gt;250 mg/kg. We only stock oils that far exceed that.
            </p>
          </div>
        </motion.div>
      )}

      {/* ──── ARTISAN FOODS ──── */}
      {(activeTab === 'all' || activeTab === 'food') && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-black mb-2 flex items-center gap-3">
            <UtensilsCrossed className="w-7 h-7 text-emerald-400" />
            <span className="text-white">Artisan Foods</span>
          </h2>
          <p className="text-sm text-emerald-200/40 mb-6">Handcrafted from our garden. Every ingredient chosen for both flavor and therapeutic value. See <Link to="/artisan-foods" className="text-emerald-400 underline hover:text-emerald-300">full recipes & methods</Link>.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {artisanFoods.map((item, i) => (
              <div key={i} className={`p-5 bg-emerald-900/10 border rounded-xl transition-all hover:border-emerald-500/25 ${item.hot ? 'border-amber-500/30 ring-1 ring-amber-500/10' : 'border-emerald-700/12'}`}>
                {item.hot && <div className="text-[10px] font-bold text-amber-400 uppercase tracking-wider mb-1">Signature Product</div>}
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-white text-sm">{item.name}</h4>
                  <span className="text-xs px-2 py-0.5 bg-amber-800/30 rounded-full text-amber-300 shrink-0 ml-2">{item.price}</span>
                </div>
                <p className="text-xs text-emerald-200/40 mb-2">{item.desc}</p>
                <span className="text-[10px] px-2 py-0.5 bg-emerald-800/20 rounded-full text-emerald-400/60">{item.badge}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* ──── SUPPLEMENTS ──── */}
      {(activeTab === 'all' || activeTab === 'supplements') && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-black mb-2 flex items-center gap-3">
            <FlaskConical className="w-7 h-7 text-violet-400" />
            <span className="bg-gradient-to-r from-violet-300 to-violet-500 bg-clip-text text-transparent">Supplements & Extracts</span>
          </h2>
          <p className="text-sm text-violet-200/40 mb-6">Farm-grown, lab-processed, lab-tested. Every supplement made in our processing facility with professional-grade equipment. See <Link to="/lab" className="text-violet-400 underline hover:text-violet-300">Farm Lab</Link> for process details.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {supplements.map((sup, i) => (
              <div key={i} className="p-5 bg-violet-900/8 border border-violet-700/12 rounded-xl hover:border-violet-500/20 transition-all">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-white text-sm">{sup.name}</h4>
                  <span className="text-xs px-2 py-0.5 bg-amber-800/30 rounded-full text-amber-300 shrink-0 ml-2">{sup.price}</span>
                </div>
                <p className="text-xs text-violet-200/40 mb-2">{sup.desc}</p>
                <span className={`text-[10px] px-2 py-0.5 rounded-full bg-${sup.color}-800/20 text-${sup.color}-400/60`}>{sup.badge}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* ──── WORKSHOPS ──── */}
      {(activeTab === 'all' || activeTab === 'workshops') && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-black mb-2 flex items-center gap-3">
            <ChefHat className="w-7 h-7 text-orange-400" />
            <span className="bg-gradient-to-r from-orange-300 to-red-400 bg-clip-text text-transparent">Cooking Workshops</span>
          </h2>
          <p className="text-sm text-orange-200/40 mb-6">
            Small-group, hands-on cooking events at the farm. Every workshop includes scientific discussion, hands-on cooking, and a shared meal. We visit the studies, discuss the food, cook the food, and enjoy the food together.
          </p>

          <div className="space-y-4">
            {workshops.map((ws, i) => (
              <div key={i} className="p-6 bg-orange-900/8 border border-orange-700/12 rounded-2xl hover:border-orange-500/20 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                  <h3 className="text-lg font-bold text-white">{ws.title}</h3>
                  <div className="flex gap-2">
                    <span className="text-xs px-2 py-0.5 bg-amber-800/30 rounded-full text-amber-300">{ws.price}</span>
                    <span className="text-xs px-2 py-0.5 bg-orange-800/30 rounded-full text-orange-300">{ws.duration}</span>
                    <span className="text-xs px-2 py-0.5 bg-blue-800/20 rounded-full text-blue-300">{ws.groupSize} people</span>
                  </div>
                </div>
                <p className="text-sm text-orange-200/50 mb-4">{ws.description}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-semibold text-emerald-400/60 uppercase mb-2">What's Included</h4>
                    <ul className="space-y-1">
                      {ws.includes.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-emerald-200/50">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-end">
                    <div className="p-3 bg-orange-950/30 rounded-lg w-full">
                      <div className="flex items-center gap-2 text-xs text-orange-300/60">
                        <Calendar className="w-3 h-3" />
                        <span>{ws.frequency}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-5 bg-orange-900/10 border border-orange-700/15 rounded-xl">
            <h4 className="font-bold text-orange-300 text-sm mb-2 flex items-center gap-2"><Users className="w-4 h-4" /> Guest Speakers & Special Events</h4>
            <p className="text-sm text-orange-200/50">
              We periodically host guest speakers — nutritionists, functional medicine practitioners, local chefs, and mycologists — for special workshop events. These are announced on our mailing list and social media. Topics include ketogenic diet protocols, metabolic therapy for cancer patients, fermentation science, and mushroom cultivation. If you're a practitioner interested in speaking, <strong className="text-orange-300">contact us</strong>.
            </p>
          </div>
        </motion.div>
      )}

      {/* ──── BOOKS & LITERATURE ──── */}
      {(activeTab === 'all' || activeTab === 'books') && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-black mb-2 flex items-center gap-3">
            <BookOpen className="w-7 h-7 text-sky-400" />
            <span className="bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent">Books & Literature</span>
          </h2>
          <p className="text-sm text-sky-200/40 mb-6">Curated reading list + our own book. We also offer printed literature — our website content in professional booklet form with all citations and research backing.</p>

          {/* Our Book — Featured */}
          <div className="p-8 bg-gradient-to-br from-emerald-900/20 to-amber-900/10 border-2 border-emerald-500/25 rounded-2xl mb-6 relative overflow-hidden">
            <div className="absolute top-3 right-3 flex items-center gap-1 text-xs px-2 py-1 bg-amber-500/20 rounded-full text-amber-300">
              <Sparkles className="w-3 h-3" /> Our Book
            </div>
            <h3 className="text-2xl font-black text-white mb-1">Holy Basil, Holy Food</h3>
            <p className="text-sm text-emerald-400/60 italic mb-4">A Modern, Evidence-Based Guide to Whole Food Nutrition, Metabolic Health & the Art of Growing What Heals You</p>
            <p className="text-sm text-emerald-200/60 mb-4">
              The complete Lazy K philosophy in book form. Covering the science of cruciferous anti-cancer compounds (sulforaphane, I3C, DIM), the devastating truth about seed oils and ultra-processed food, practical ketogenic protocols, medicinal mushrooms, CBD therapeutics, and how to build a regenerative micro-farm that feeds your family clean food. With 200+ scientific citations, 50+ recipes, growing guides for every species, and practical meal plans.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-2xl font-black text-amber-400">$24.95</span>
              <span className="text-xs text-emerald-400/50">Paperback | ~280 pages | Full color</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-emerald-400/40">
              <span className="px-2 py-0.5 bg-emerald-800/20 rounded-full">Anti-Cancer Nutrition</span>
              <span className="px-2 py-0.5 bg-emerald-800/20 rounded-full">Ketogenic Protocols</span>
              <span className="px-2 py-0.5 bg-emerald-800/20 rounded-full">Seed Oil Science</span>
              <span className="px-2 py-0.5 bg-emerald-800/20 rounded-full">Medicinal Mushrooms</span>
              <span className="px-2 py-0.5 bg-emerald-800/20 rounded-full">CBD Therapeutics</span>
              <span className="px-2 py-0.5 bg-emerald-800/20 rounded-full">50+ Recipes</span>
              <span className="px-2 py-0.5 bg-emerald-800/20 rounded-full">200+ Citations</span>
              <span className="px-2 py-0.5 bg-emerald-800/20 rounded-full">Growing Guides</span>
            </div>
          </div>

          {/* Other Books */}
          <h3 className="text-lg font-bold text-sky-300 mb-4">Curated Reading List</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {books.filter(b => !b.ours).map((book, i) => (
              <div key={i} className="p-5 bg-sky-900/8 border border-sky-700/12 rounded-xl hover:border-sky-500/20 transition-all">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-white text-sm">{book.title}</h4>
                    <p className="text-xs text-sky-400/50">{book.author}</p>
                  </div>
                  <span className="text-xs px-2 py-0.5 bg-sky-800/30 rounded-full text-sky-300 shrink-0 ml-2">{book.price}</span>
                </div>
                <p className="text-xs text-sky-200/40">{book.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 bg-sky-900/10 border border-sky-700/15 rounded-xl">
            <p className="text-sm text-sky-300/60">
              <strong className="text-sky-300">Printed Literature:</strong> Our website content is available as a professionally printed booklet — all the research, citations, growing guides, and recipes in a physical format you can hold, mark up, and share. Available at the farm shop and farmers market. <strong className="text-white">$12.95</strong> per booklet.
            </p>
          </div>
        </motion.div>
      )}

      {/* ──── MERCHANDISE ──── */}
      {(activeTab === 'all' || activeTab === 'merch') && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-black mb-2 flex items-center gap-3">
            <Shirt className="w-7 h-7 text-emerald-400" />
            <span className="text-white">Merchandise</span>
          </h2>
          <p className="text-sm text-emerald-200/40 mb-6">Wear the mission. All organic materials where possible. Designed in-house, printed/sewn locally in Utah.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {merch.map((item, i) => (
              <div key={i} className="p-5 bg-emerald-900/10 border border-emerald-700/12 rounded-xl hover:border-emerald-500/20 transition-all">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-white text-sm">{item.name}</h4>
                  <span className="text-xs px-2 py-0.5 bg-amber-800/30 rounded-full text-amber-300 shrink-0 ml-2">{item.price}</span>
                </div>
                <p className="text-xs text-emerald-200/40 mb-2">{item.desc}</p>
                {item.sizes !== 'N/A' && <span className="text-[10px] text-emerald-400/40">Sizes: {item.sizes}</span>}
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* ──── SALES CHANNELS ──── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
          <Package className="w-7 h-7 text-emerald-400" />
          <span className="text-white">Where to Buy</span>
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="p-5 bg-emerald-900/15 border border-emerald-700/20 rounded-xl text-center">
            <Store className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
            <h4 className="font-bold text-white text-sm mb-1">Online Store</h4>
            <p className="text-xs text-emerald-300/40">Ships nationwide. Shopify-powered. Fresh products ship Mon–Wed with cold packs.</p>
          </div>
          <div className="p-5 bg-emerald-900/15 border border-emerald-700/20 rounded-xl text-center">
            <Users className="w-8 h-8 text-amber-400 mx-auto mb-2" />
            <h4 className="font-bold text-white text-sm mb-1">Farmers Markets</h4>
            <p className="text-xs text-emerald-300/40">Salt Lake City, Draper, and Riverton farmers markets. Saturdays in season. Full product lineup + samples.</p>
          </div>
          <div className="p-5 bg-emerald-900/15 border border-emerald-700/20 rounded-xl text-center">
            <MessageCircle className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <h4 className="font-bold text-white text-sm mb-1">Farm Direct</h4>
            <p className="text-xs text-emerald-300/40">Visit the farm by appointment. Workshop participants get 10% off all products. Bulk discounts for restaurants/stores.</p>
          </div>
        </div>
      </motion.div>

      {/* Footer CTA */}
      <div className="p-6 bg-gradient-to-br from-amber-500/10 to-emerald-500/5 border-2 border-amber-500/25 rounded-2xl text-center">
        <h3 className="text-xl font-bold text-white mb-2">Every Purchase Supports the Mission</h3>
        <p className="text-sm text-emerald-200/50 max-w-2xl mx-auto">
          100% of proceeds go back into the farm — better soil, more plants, more workshops, and expanding access to clean food education. When you buy from Lazy K, you're investing in a food system that heals instead of harms.
        </p>
      </div>
    </div>
  )
}
