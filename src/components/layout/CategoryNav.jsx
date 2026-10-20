import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

const NAV_ITEMS = [
  {
    label: 'Whey Protein',
    slug: 'whey-protein',
    sub: ['Whey Concentrate', 'Whey Isolate', 'Whey Blend', 'Casein'],
  },
  {
    label: 'Mass Gainers',
    slug: 'mass-gainer',
    sub: ['Weight Gainers', 'Lean Mass Gainers', 'Super Mass Gainers'],
  },
  {
    label: 'Creatine',
    slug: 'creatine',
    sub: ['Creatine Monohydrate', 'Creatine HCL', 'Creatine Blends'],
  },
  {
    label: 'Pre-Workout',
    slug: 'pre-workout',
    sub: ['Stimulant Pre-Workout', 'Stim-Free', 'Pump Boosters'],
  },
  {
    label: 'BCAA',
    slug: 'bcaa',
    sub: ['BCAA Powder', 'BCAA Tablets', 'EAA', 'Glutamine'],
  },
  {
    label: 'Vitamins',
    slug: 'multivitamin',
    sub: ['Multivitamins', 'Vitamin C', 'Vitamin D3', 'Omega-3', 'Zinc & Magnesium'],
  },
  {
    label: 'Protein Bars',
    slug: 'protein-bars',
    sub: ['Protein Bars', 'Energy Bars', 'Protein Cookies'],
  },
  {
    label: 'Shop All',
    slug: '',
    sub: [],
  },
]

export default function CategoryNav() {
  const [activeDropdown, setActiveDropdown] = useState(null)

  return (
    <nav
      className="hidden lg:block border-t border-border bg-bg-secondary"
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="section-wrapper">
        <ul className="flex items-center gap-0">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.slug}
              className="relative"
              onMouseEnter={() => item.sub.length > 0 && setActiveDropdown(item.slug)}
            >
              <Link
                to={item.slug ? `/shop/${item.slug}` : '/shop'}
                className={`flex items-center gap-1 px-4 py-3.5 text-sm font-semibold transition-colors hover:text-gold hover:bg-bg-card ${
                  activeDropdown === item.slug ? 'text-gold bg-bg-card' : 'text-text-secondary'
                }`}
              >
                {item.label}
                {item.sub.length > 0 && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${activeDropdown === item.slug ? 'rotate-180' : ''}`}
                  />
                )}
              </Link>

              {/* Dropdown */}
              {item.sub.length > 0 && activeDropdown === item.slug && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-bg-elevated border border-border rounded-b-xl shadow-2xl z-50 overflow-hidden animate-fade-in">
                  {item.sub.map(sub => (
                    <Link
                      key={sub}
                      to={`/shop/${item.slug}?sub=${encodeURIComponent(sub)}`}
                      className="block px-5 py-2.5 text-text-secondary hover:text-gold hover:bg-bg-card transition-colors text-sm border-b border-border/50 last:border-0"
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
