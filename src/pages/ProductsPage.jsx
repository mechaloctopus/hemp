import { motion } from 'framer-motion'
import {
  ShoppingBag, DollarSign, Leaf, FlaskConical,
  Droplets, Apple, Package, TrendingUp, ExternalLink
} from 'lucide-react'

const productLines = [
  {
    category: 'CBD Products',
    icon: Leaf,
    color: 'from-emerald-500 to-emerald-600',
    products: [
      { name: '1g CBD Crude Oil Syringes', price: '$5–$12 each', margin: 'High', desc: 'Full-spectrum crude CBD oil in luer-lock syringes. Main revenue product. ~23,000+ units from ¼ acre.', license: 'UDAF Cannabinoid Processor License (Tier 4)' },
      { name: 'CBD Tinctures (30mL)', price: '$25–$60/bottle', margin: 'Very High', desc: 'CBD oil dissolved in MCT oil with dropper. Various strengths (500mg–2000mg). Flavored or natural.', license: 'UDAF Processor + Food Handler' },
      { name: 'CBD Topical Salve', price: '$20–$45/tin', margin: 'High', desc: 'CBD-infused beeswax/coconut oil salve with lavender, calendula from garden. Pain relief and skin care.', license: 'UDAF Processor + Cosmetics compliance' },
      { name: 'Hemp Seed (Edible)', price: '$8–$15/lb', margin: 'Moderate', desc: 'Hulled hemp hearts from seed variety (Finola). Rich in omega-3, protein. Food-grade processing needed.', license: 'Food Handler Permit' },
    ],
  },
  {
    category: 'Mushroom Products',
    icon: Sprout,
    color: 'from-violet-500 to-violet-600',
    products: [
      { name: 'Lion\'s Mane Dual-Extract Tincture', price: '$30–$50/2oz', margin: 'Very High', desc: 'Hot water + alcohol dual extraction. Brain health, NGF support. Premium medicinal product.', license: 'Food Handler / Cottage Food' },
      { name: 'Mushroom Broth (Shiitake + Maitake)', price: '$12–$18/quart', margin: 'High', desc: 'Slow-simmered umami broth. Rich in beta-glucans. Sell fresh or frozen at farmers market.', license: 'Food Handler / Commercial Kitchen' },
      { name: 'Dried Gourmet Mushrooms', price: '$20–$40/oz', margin: 'High', desc: 'Dehydrated shiitake, lion\'s mane, oyster. Long shelf life. 10:1 fresh-to-dried ratio.', license: 'Food Handler' },
      { name: 'Fresh Mushroom Boxes (Weekly)', price: '$15–$25/lb', margin: 'Moderate', desc: 'Mixed gourmet box: oyster, shiitake, lion\'s mane. Restaurant supply or farmers market.', license: 'Food Handler' },
      { name: 'Mushroom Growing Kits', price: '$22–$35/kit', margin: 'High', desc: 'Pre-colonized blocks ready to fruit. Blue oyster for beginners. Great repeat customers.', license: 'None (non-food product)' },
      { name: 'Mushroom Coffee / Elixir Powder', price: '$30–$55/bag', margin: 'Very High', desc: 'Dried and ground lion\'s mane, chaga, reishi blend. Add to coffee or smoothies.', license: 'Food Handler' },
    ],
  },
  {
    category: 'Garden & Herbal Products',
    icon: Sprout,
    color: 'from-lime-500 to-lime-600',
    products: [
      { name: 'Fresh Pesto (Basil)', price: '$8–$14/jar', margin: 'High', desc: 'Garden-fresh Genovese basil pesto with pine nuts, parmesan, olive oil. Seasonal product.', license: 'Cottage Food / Food Handler' },
      { name: 'Pickles (Dill, Garlic, Spicy)', price: '$6–$10/jar', margin: 'High', desc: 'Lacto-fermented or vinegar pickles from garden cucumbers. Small-batch artisan.', license: 'Cottage Food License' },
      { name: 'Dried Herb Bundles', price: '$5–$12/bundle', margin: 'Very High', desc: 'Dried basil, oregano, thyme, lavender, rosemary. Beautiful packaging. Gift-worthy.', license: 'Cottage Food' },
      { name: 'Herbal Tea Blends', price: '$10–$18/tin', margin: 'Very High', desc: 'Holy basil (tulsi), chamomile, lavender, mint blends. Loose leaf in tins.', license: 'Food Handler' },
      { name: 'Elderberry Syrup', price: '$15–$25/bottle', margin: 'High', desc: 'Cooked elderberry with honey, ginger, cinnamon. Immune support. Huge demand.', license: 'Food Handler' },
      { name: 'Hot Sauce / Fermented Sauces', price: '$8–$14/bottle', margin: 'High', desc: 'Garden peppers lacto-fermented into artisan hot sauce.', license: 'Cottage Food / Commercial Kitchen' },
    ],
  },
  {
    category: 'Body Care & Soap',
    icon: Droplets,
    color: 'from-pink-500 to-pink-600',
    products: [
      { name: 'Handmade Soap (Cold Process)', price: '$6–$12/bar', margin: 'High', desc: 'Olive oil, coconut oil, lye soap with garden herbs (lavender, rosemary, calendula). Hemp oil optional.', license: 'Cosmetics labeling compliance (FDA)' },
      { name: 'Herbal Shampoo Bar', price: '$8–$14/bar', margin: 'High', desc: 'Solid shampoo with rosemary, peppermint, nettle. Zero-waste packaging appeal.', license: 'Cosmetics compliance' },
      { name: 'Calendula Healing Salve', price: '$12–$20/tin', margin: 'Very High', desc: 'Calendula-infused oil in beeswax base. Skin healing, diaper rash, minor cuts. Add CBD for premium version.', license: 'Cosmetics compliance' },
      { name: 'Lavender Sachets / Bath Bombs', price: '$5–$10 each', margin: 'Very High', desc: 'Dried garden lavender in sachets, or bath bombs with essential oils and herbs.', license: 'Cosmetics compliance' },
    ],
  },
  {
    category: 'Fruit & Specialty',
    icon: Apple,
    color: 'from-red-500 to-red-600',
    products: [
      { name: 'Fresh Seasonal Fruit', price: 'Market rate', margin: 'Moderate', desc: 'As fruit trees mature (years 2–5+): fresh peaches, cherries, figs, grapes, plums at farmers market.', license: 'None for fresh produce' },
      { name: 'Fruit Preserves / Jams', price: '$8–$14/jar', margin: 'High', desc: 'Small-batch jams from orchard fruit. Fig preserves, peach jam, grape jelly.', license: 'Cottage Food' },
      { name: 'Sunflower Seeds (Roasted)', price: '$5–$8/bag', margin: 'Moderate', desc: 'From garden sunflowers. Roasted and salted. Fun snack product.', license: 'Cottage Food' },
    ],
  },
]

export default function ProductsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-800/30 border border-pink-600/30 rounded-full text-sm text-pink-300 mb-6">
          <ShoppingBag className="w-4 h-4" />
          Farm-to-Consumer Product Lines
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-4">
          <span className="bg-gradient-to-r from-pink-300 via-pink-400 to-rose-500 bg-clip-text text-transparent">
            Products & Market
          </span>
        </h1>
        <p className="text-lg text-pink-200/50 max-w-3xl">
          Every product line derived from the 1-acre property — CBD, mushroom elixirs, handmade soap, pesto, pickles, and more. Vertically integrated, farm-to-consumer.
        </p>
      </motion.div>

      {/* Revenue Overview */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <div className="p-6 bg-gradient-to-br from-emerald-500/10 to-amber-500/5 border border-emerald-500/20 rounded-2xl">
          <h3 className="text-lg font-bold text-emerald-300 mb-4 flex items-center gap-2"><TrendingUp className="w-5 h-5" /> Revenue Potential Overview</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="text-center p-4 bg-black/20 rounded-xl">
              <div className="text-xs text-emerald-400/50 mb-1">CBD Products</div>
              <div className="text-xl font-black text-emerald-300">$72K–$190K</div>
              <div className="text-xs text-emerald-500/40">Primary revenue driver</div>
            </div>
            <div className="text-center p-4 bg-black/20 rounded-xl">
              <div className="text-xs text-violet-400/50 mb-1">Mushroom Products</div>
              <div className="text-xl font-black text-violet-300">$10K–$40K</div>
              <div className="text-xs text-violet-500/40">Year-round production</div>
            </div>
            <div className="text-center p-4 bg-black/20 rounded-xl">
              <div className="text-xs text-lime-400/50 mb-1">Garden / Herbal</div>
              <div className="text-xl font-black text-lime-300">$5K–$15K</div>
              <div className="text-xs text-lime-500/40">Seasonal, high margin</div>
            </div>
            <div className="text-center p-4 bg-black/20 rounded-xl">
              <div className="text-xs text-pink-400/50 mb-1">Soap / Body Care</div>
              <div className="text-xl font-black text-pink-300">$3K–$10K</div>
              <div className="text-xs text-pink-500/40">Gifts & online sales</div>
            </div>
          </div>
          <p className="text-sm text-emerald-400/40 text-center">Combined potential: <strong className="text-white">$90K–$255K+</strong> gross annual revenue at full production capacity from 1 acre</p>
        </div>
      </motion.div>

      {/* Product Lines */}
      {productLines.map((cat, ci) => (
        <motion.div key={ci} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center`}>
              <cat.icon className="w-4 h-4 text-white" />
            </div>
            <span className="text-white">{cat.category}</span>
          </h2>
          <div className="space-y-2">
            {cat.products.map((prod, i) => (
              <div key={i} className="p-4 bg-emerald-900/8 border border-emerald-700/10 rounded-xl hover:border-emerald-500/15 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h4 className="font-bold text-white text-sm">{prod.name}</h4>
                  <div className="flex gap-2">
                    <span className="text-xs px-2 py-0.5 bg-amber-800/30 rounded-full text-amber-300">{prod.price}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      prod.margin === 'Very High' ? 'bg-emerald-800/30 text-emerald-300' :
                      prod.margin === 'High' ? 'bg-blue-800/30 text-blue-300' :
                      'bg-gray-800/30 text-gray-300'
                    }`}>Margin: {prod.margin}</span>
                  </div>
                </div>
                <p className="text-sm text-emerald-200/40 mb-1">{prod.desc}</p>
                <p className="text-xs text-amber-400/40"><strong>License:</strong> {prod.license}</p>
              </div>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Sales Channels */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
          <Package className="w-7 h-7 text-pink-400" />
          <span className="text-white">Sales Channels</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { channel: 'Farmers Markets', desc: 'Salt Lake, Riverton, Draper farmers markets. Direct consumer interaction. Best for fresh produce, mushrooms, soap, pesto.', cost: '$25–$75/week booth fee' },
            { channel: 'Online (Shopify / Etsy)', desc: 'E-commerce for CBD syringes, mushroom tinctures, dried herbs, soap. Ship nationwide (CBD legal federally).', cost: 'Platform fees + shipping' },
            { channel: 'Local Restaurants & Chefs', desc: 'Supply fresh mushrooms, herbs, and specialty items to local restaurants. Consistent weekly orders.', cost: 'Delivery logistics' },
            { channel: 'CBD Dispensaries / Wellness Shops', desc: 'Wholesale CBD products to local shops. Lower margin but higher volume.', cost: 'Typically 40–50% wholesale discount' },
            { channel: 'CSA (Community Supported Agriculture)', desc: 'Weekly subscription boxes with seasonal mix of produce, mushrooms, herbs. Pre-paid, loyal customer base.', cost: 'Packaging + delivery' },
            { channel: 'Word of Mouth / Local Network', desc: 'Friends, family, neighbors, church groups. Especially for soap, elderberry syrup, CBD. Riverton community.', cost: 'Free — the best channel' },
          ].map((ch, i) => (
            <div key={i} className="p-4 bg-pink-900/8 border border-pink-700/12 rounded-xl">
              <h4 className="font-semibold text-white text-sm mb-1">{ch.channel}</h4>
              <p className="text-xs text-pink-200/40 mb-1">{ch.desc}</p>
              <p className="text-xs text-amber-400/40">{ch.cost}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
