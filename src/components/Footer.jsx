import { Leaf, ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-emerald-800/30">
      <div className="absolute inset-0 bg-emerald-950" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-emerald-400" />
              <span className="text-lg font-bold">
                <span className="text-emerald-400">Utah</span> Hemp Mastery
              </span>
            </div>
            <p className="text-sm text-emerald-300/40 leading-relaxed">
              The definitive guide to growing hemp in Utah under the USDA Domestic Hemp Production Program. All information current as of 2026.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-emerald-300 uppercase tracking-wider mb-4">Sections</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Licensing', href: '#licensing' },
                { label: 'Yield Calculator', href: '#yield' },
                { label: 'CBD Economics', href: '#economics' },
                { label: 'Profit Model', href: '#profit' },
                { label: 'Strains', href: '#strains' },
                { label: 'Testing Costs', href: '#costs' },
                { label: 'Suppliers', href: '#suppliers' },
                { label: 'Compliance', href: '#compliance' },
              ].map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-emerald-400/50 hover:text-emerald-300 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-emerald-300 uppercase tracking-wider mb-4">Official Resources</h4>
            <div className="space-y-2">
              {[
                { label: 'USDA HeMP Portal', url: 'https://hemp.ams.usda.gov/s/' },
                { label: 'FBI eDO Fingerprints', url: 'https://www.edo.cjis.gov' },
                { label: 'FSA Office Locator', url: 'https://www.farmers.gov/service-center-locator' },
                { label: 'Utah UDAF', url: 'https://ag.utah.gov' },
              ].map(link => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-emerald-400/50 hover:text-emerald-300 transition-colors"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-emerald-800/30">
          <p className="text-xs text-emerald-500/30 mb-4 sm:mb-0">
            This guide is for informational purposes. Always verify current regulations with USDA and UDAF before acting.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-800/30 hover:bg-emerald-700/30 border border-emerald-700/20 rounded-lg text-sm text-emerald-300 transition-all"
          >
            <ArrowUp className="w-4 h-4" /> Back to Top
          </button>
        </div>
      </div>
    </footer>
  )
}
