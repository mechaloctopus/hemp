import { motion } from 'framer-motion'
import { Fingerprint, UserPlus, FileText, Clock, Sprout, ExternalLink, CheckCircle2 } from 'lucide-react'

const phases = [
  {
    phase: 1,
    icon: Fingerprint,
    title: 'FBI Criminal History Report',
    time: '3–14 days',
    cost: '~$18–$50',
    color: 'from-amber-500 to-amber-600',
    details: [
      {
        method: 'Fastest: FBI eDO System (1–5 business days)',
        steps: [
          'Go to edo.cjis.gov — create account',
          'Pay $18 online (credit card)',
          'Take barcode to a participating U.S. Post Office for electronic fingerprinting',
          'Report arrives as downloadable PDF',
        ],
        link: 'https://www.edo.cjis.gov',
      },
      {
        method: 'FBI-Approved Channeler (1–3 days)',
        steps: [
          'Use Fieldprint, Inquiries Screening, or others listed on FBI site',
          'They handle fingerprints + submission — cost ~$30–$50 total',
        ],
      },
      {
        method: 'Mail (2–4 weeks)',
        steps: [
          'Download Identity History Summary Request form from fbi.gov',
          'Get fingerprinted on FD-258 card (~$20–$30)',
          'Mail form + fingerprints + $18 check to FBI CJIS Division, Clarksburg, WV 26306',
        ],
      },
    ],
    warning: 'Disqualifier: Felony related to a controlled substance in the last 10 years = automatic denial.',
    tip: 'If unsure, email farmbill.hemp@usda.gov first.',
  },
  {
    phase: 2,
    icon: UserPlus,
    title: 'Create Your HeMP Account',
    time: '5–10 minutes',
    cost: 'Free',
    color: 'from-emerald-400 to-emerald-500',
    details: [
      {
        method: 'Online at hemp.ams.usda.gov',
        steps: [
          'Go to hemp.ams.usda.gov/s/ — click "Sign Up"',
          'Log in / create with Login.gov (preferred) or USDA eAuth',
          'Review your name, address, phone, email on "Your Information" page',
          'Choose "Individual" (solo home grower)',
          'Fill "Account Details" and click Next',
          'Receive "USDA HeMP Account is Ready" email within 5 minutes',
        ],
        link: 'https://hemp.ams.usda.gov/s/',
      },
    ],
  },
  {
    phase: 3,
    icon: FileText,
    title: 'Submit USDA Application',
    time: '15–30 minutes',
    cost: 'Free — $0 application fee',
    color: 'from-emerald-500 to-emerald-600',
    details: [
      {
        method: 'Through HeMP Portal',
        steps: [
          'Click "Application and License" tab → "Applications" subtab',
          'Click "New" icon next to "My Applications"',
          'Select your account → Choose "Utah" in state dropdown → "Start Application"',
          'Fill all required fields (red asterisks) — primary contact auto-filled',
          'Add key participants if any (solo is fine for home project)',
          'Upload FBI PDF via "Add/Edit Criminal History Report" dropdown',
          'Click "Sign & Submit" → Check certification box → Submit',
          'Download PDF copy via "Generate PDF" for your records',
        ],
      },
    ],
    tip: 'You can also request a paper application: farmbill.hemp@usda.gov or (202) 720-2491',
  },
  {
    phase: 4,
    icon: Clock,
    title: 'USDA Review & Approval',
    time: '30–90 days (usually 4–8 weeks)',
    cost: 'Free',
    color: 'from-emerald-600 to-emerald-700',
    details: [
      {
        method: 'Rolling Review Process',
        steps: [
          'USDA reviews on a rolling basis',
          'If revisions needed: email notification → log back in, edit, re-submit',
          'When approved: receive email with USDA license number',
          'License valid through Dec 31 of the third year (renewable)',
          'You can now legally plant hemp!',
        ],
      },
    ],
  },
  {
    phase: 5,
    icon: Sprout,
    title: 'Plant & Ongoing Compliance',
    time: 'Ongoing after license',
    cost: '~$150–$350 for testing',
    color: 'from-emerald-700 to-emerald-800',
    details: [
      {
        method: 'After Planting (within 30 days)',
        steps: [
          'File crop acreage report with local Farm Service Agency (FSA)',
          'Use farmers.gov/service-center-locator to find your office',
          'Bring: USDA license #, property address, GPS coords, lot map',
          'They assign lot numbers and give you FSA-578 form (free)',
        ],
        link: 'https://www.farmers.gov/service-center-locator',
      },
      {
        method: 'Before Harvest (30+ days prior)',
        steps: [
          'Contact USDA-certified sampling agent via HeMP',
          'Agent visits property (~$100+ fee) and samples plant tops',
          'Send samples to DEA-registered lab (~$50–$250)',
          'Must test ≤0.3% THC — harvest within 30 days of sampling',
        ],
      },
    ],
    tip: 'Keep all records for 3 years. USDA can inspect anytime.',
  },
]

export default function LicensingTimeline() {
  return (
    <section id="licensing" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950 via-emerald-900/50 to-emerald-950" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
              5-Phase Licensing Process
            </span>
          </h2>
          <p className="text-emerald-300/60 text-lg max-w-2xl mx-auto">
            Utah does not issue its own grower licenses — you must use the federal USDA program.
            No residency requirement. No application fee. Shall-issue if you qualify.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-emerald-800/30 border border-emerald-700/30 rounded-full text-sm text-emerald-400">
            <Clock className="w-4 h-4" />
            Total timeline: 2–4 months from start to planting
          </div>
        </motion.div>

        <div className="space-y-6">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative p-6 sm:p-8 bg-emerald-900/20 border border-emerald-700/20 rounded-2xl hover:border-emerald-500/30 transition-all">
                {/* Phase header */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                  <div className={`flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${phase.color} text-white shrink-0`}>
                    <phase.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Phase {phase.phase}</span>
                      <span className="text-xs px-2 py-0.5 bg-emerald-800/50 rounded-full text-emerald-300">{phase.time}</span>
                      <span className="text-xs px-2 py-0.5 bg-amber-900/40 rounded-full text-amber-400">{phase.cost}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{phase.title}</h3>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-5">
                  {phase.details.map((detail, j) => (
                    <div key={j} className="pl-4 border-l-2 border-emerald-700/30">
                      <div className="flex items-center gap-2 mb-3">
                        <h4 className="font-semibold text-emerald-200">{detail.method}</h4>
                        {detail.link && (
                          <a href={detail.link} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <ul className="space-y-2">
                        {detail.steps.map((step, k) => (
                          <li key={k} className="flex items-start gap-2 text-sm text-emerald-200/70">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Warning / Tip */}
                {phase.warning && (
                  <div className="mt-4 p-3 bg-red-900/20 border border-red-700/30 rounded-lg text-sm text-red-300">
                    ⚠️ {phase.warning}
                  </div>
                )}
                {phase.tip && (
                  <div className="mt-4 p-3 bg-amber-900/20 border border-amber-700/30 rounded-lg text-sm text-amber-300">
                    💡 {phase.tip}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
