import { motion } from 'framer-motion'
import { Shield, AlertTriangle, FileCheck, MapPin, Calendar, Phone, Mail, Scale } from 'lucide-react'

const rules = [
  {
    icon: FileCheck,
    title: 'Crop Acreage Report (FSA-578)',
    when: 'Within 30 days of planting',
    details: 'File with your local Farm Service Agency office. Bring USDA license #, property address, GPS coordinates for each lot, and a simple map/photo.',
    link: 'https://www.farmers.gov/service-center-locator',
    linkText: 'Find Your FSA Office',
  },
  {
    icon: Calendar,
    title: 'Pre-Harvest THC Testing',
    when: '30+ days before harvest',
    details: 'Contact a USDA-certified sampling agent via HeMP portal. Agent visits your property (~$100+) and samples plant tops. Send to DEA-registered lab. Must test ≤0.3% THC.',
  },
  {
    icon: Shield,
    title: 'Harvest Window',
    when: 'Within 30 days of sampling',
    details: 'You must harvest within 30 days of the sampling date. If THC test fails (unlikely with zero-THC seeds), you must destroy plants legally and report to USDA.',
  },
  {
    icon: Scale,
    title: 'Record Keeping',
    when: 'Ongoing — 3 years minimum',
    details: 'Keep all records (license, FSA reports, test results, sales receipts) for at least 3 years. USDA can inspect anytime without notice.',
  },
  {
    icon: AlertTriangle,
    title: 'License Renewal',
    when: 'Every 3 years (expires Dec 31)',
    details: 'Your USDA license is valid through December 31 of the third year. Renew before expiration through the HeMP portal — same process, updated FBI check may be required.',
  },
]

const utahExtras = [
  'Your own biomass storage is covered by the USDA license — no extra permit needed.',
  'If you process or sell CBD products, you need a separate UDAF Cannabinoid Processor License (Tier 4 usually). Contact ag.utah.gov.',
  'No other state permits required for pure home cultivation under USDA license.',
  'Selling viable seeds to other growers: buyer must be USDA-licensed or state-approved. Document everything.',
  'Selling to unlicensed public: requires additional UDAF industrial hemp retailer permit.',
  'Residential/agricultural zoning in Riverton works for hemp — just report it properly.',
]

export default function Compliance() {
  return (
    <section id="compliance" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950 via-emerald-900/30 to-emerald-950" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
              Compliance & Ongoing Requirements
            </span>
          </h2>
          <p className="text-emerald-300/60 text-lg max-w-2xl mx-auto">
            Once licensed, follow these requirements to stay in good standing with USDA and avoid issues.
          </p>
        </motion.div>

        {/* Compliance Rules */}
        <div className="space-y-4 mb-16">
          {rules.map((rule, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 bg-emerald-900/20 border border-emerald-700/20 rounded-xl hover:border-emerald-500/25 transition-all"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-800/30 shrink-0">
                  <rule.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-white">{rule.title}</h3>
                    <span className="text-xs px-2 py-0.5 bg-amber-800/30 rounded-full text-amber-400">{rule.when}</span>
                  </div>
                  <p className="text-sm text-emerald-200/60">{rule.details}</p>
                  {rule.link && (
                    <a
                      href={rule.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-sm text-emerald-400 hover:text-emerald-300"
                    >
                      <MapPin className="w-3 h-3" /> {rule.linkText}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Utah-Specific */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-emerald-200 mb-6 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-emerald-400" />
            Utah-Specific Rules
          </h3>

          <div className="p-6 bg-emerald-900/15 border border-emerald-700/20 rounded-xl mb-8">
            <ul className="space-y-3">
              {utahExtras.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-emerald-200/60">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* FSA Office Info */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 bg-emerald-900/20 border border-emerald-700/20 rounded-xl">
              <h4 className="font-semibold text-emerald-200 mb-3">Utah State FSA Office</h4>
              <div className="space-y-2 text-sm text-emerald-300/60">
                <p>125 S State St, Room 3202</p>
                <p>Salt Lake City, UT 84138</p>
                <p className="flex items-center gap-2">
                  <Phone className="w-3 h-3 text-emerald-400" /> 801-524-4530
                </p>
              </div>
            </div>
            <div className="p-5 bg-emerald-900/20 border border-emerald-700/20 rounded-xl">
              <h4 className="font-semibold text-emerald-200 mb-3">USDA Hemp Support</h4>
              <div className="space-y-2 text-sm text-emerald-300/60">
                <p className="flex items-center gap-2">
                  <Mail className="w-3 h-3 text-emerald-400" /> farmbill.hemp@usda.gov
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-3 h-3 text-emerald-400" /> (888) 721-HEMP
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-3 h-3 text-emerald-400" /> (202) 720-2491
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
