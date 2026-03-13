import { useState, useEffect } from 'react'
import { Menu, X, Leaf } from 'lucide-react'

const navLinks = [
  { label: 'Licensing', href: '#licensing' },
  { label: 'Yield Calculator', href: '#yield' },
  { label: 'CBD Economics', href: '#economics' },
  { label: 'Profit Model', href: '#profit' },
  { label: 'Strains', href: '#strains' },
  { label: 'Costs', href: '#costs' },
  { label: 'Suppliers', href: '#suppliers' },
  { label: 'Compliance', href: '#compliance' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-emerald-950/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 group">
            <Leaf className="w-7 h-7 text-emerald-400 group-hover:rotate-12 transition-transform" />
            <span className="text-lg font-bold tracking-tight">
              <span className="text-emerald-400">Utah</span> Hemp Mastery
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-emerald-200/80 hover:text-white hover:bg-emerald-800/40 rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-emerald-300 hover:text-white"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-emerald-950/98 backdrop-blur-md border-t border-emerald-800/50">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 text-emerald-200/80 hover:text-white hover:bg-emerald-800/40 rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
