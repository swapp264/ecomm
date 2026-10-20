import { Link } from 'react-router-dom'
import { X, Home, ShoppingBag, Dumbbell, Zap, Heart, User, ChevronRight } from 'lucide-react'

const MENU_SECTIONS = [
  {
    title: 'Categories',
    items: [
      { label: 'Whey Protein', to: '/shop/whey-protein', icon: '🥛' },
      { label: 'Mass Gainers', to: '/shop/mass-gainer', icon: '💪' },
      { label: 'Creatine', to: '/shop/creatine', icon: '⚡' },
      { label: 'Pre-Workout', to: '/shop/pre-workout', icon: '🔥' },
      { label: 'BCAA / Amino Acids', to: '/shop/bcaa', icon: '🧬' },
      { label: 'Vitamins & Minerals', to: '/shop/multivitamin', icon: '💊' },
      { label: 'Protein Bars', to: '/shop/protein-bars', icon: '🍫' },
      { label: 'All Products', to: '/shop', icon: '🛍️' },
    ],
  },
  {
    title: 'Quick Links',
    items: [
      { label: 'Home', to: '/', icon: '🏠' },
      { label: 'Track Order', to: '/track-order', icon: '📦' },
      { label: 'Wishlist', to: '/wishlist', icon: '❤️' },
      { label: 'My Account', to: '/account', icon: '👤' },
    ],
  },
]

export default function MobileNav({ isOpen, onClose }) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-50 lg:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-bg-secondary border-r border-border z-50 flex flex-col transition-transform duration-300 lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="The Genuine Store" className="h-10 w-auto object-contain" />
            <div>
              <div className="font-display font-black text-white text-sm tracking-wider">THE GENUINE STORE</div>
              <div className="text-gold text-[10px] tracking-widest">PURE QUALITY • UNCOMPROMISED</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-text-secondary hover:text-gold transition-colors rounded-lg"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav Content */}
        <div className="flex-1 overflow-y-auto py-4">
          {MENU_SECTIONS.map(section => (
            <div key={section.title} className="mb-6">
              <div className="px-5 py-2 text-text-muted text-xs font-bold uppercase tracking-widest">
                {section.title}
              </div>
              {section.items.map(item => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={onClose}
                  className="flex items-center justify-between px-5 py-3 text-text-secondary hover:text-gold hover:bg-bg-card transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium text-sm">{item.label}</span>
                  </span>
                  <ChevronRight size={14} className="text-text-muted" />
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom auth buttons */}
        <div className="p-4 border-t border-border flex gap-3">
          <Link
            to="/login"
            onClick={onClose}
            className="flex-1 btn-gold-outline text-sm py-2.5 justify-center"
          >
            Login
          </Link>
          <Link
            to="/register"
            onClick={onClose}
            className="flex-1 btn-gold text-sm py-2.5 justify-center"
          >
            Register
          </Link>
        </div>
      </div>
    </>
  )
}
