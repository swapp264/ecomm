import { Link } from 'react-router-dom'
import { Link2, PlayCircle, Mail, Phone, MapPin, Shield, Truck, Award, RefreshCw, ExternalLink, Share2 } from 'lucide-react'

const TRUST_BADGES = [
  { icon: Shield, label: '100% Authentic' },
  { icon: Truck, label: 'Free Shipping ₹999+' },
  { icon: Award, label: 'Certified Quality' },
  { icon: RefreshCw, label: 'Easy Returns' },
]

const FOOTER_LINKS = {
  'Quick Links': [
    { label: 'Home', to: '/' },
    { label: 'Shop All', to: '/shop' },
    { label: 'Best Sellers', to: '/shop?sort=bestseller' },
    { label: 'New Arrivals', to: '/shop?sort=newest' },
    { label: 'Track Order', to: '/track-order' },
  ],
  'Categories': [
    { label: 'Whey Protein', to: '/shop/whey-protein' },
    { label: 'Mass Gainers', to: '/shop/mass-gainer' },
    { label: 'Creatine', to: '/shop/creatine' },
    { label: 'Pre-Workout', to: '/shop/pre-workout' },
    { label: 'BCAA & Amino Acids', to: '/shop/bcaa' },
    { label: 'Vitamins', to: '/shop/multivitamin' },
  ],
  'Support': [
    { label: 'FAQ', to: '#' },
    { label: 'Shipping Policy', to: '#' },
    { label: 'Return Policy', to: '#' },
    { label: 'Privacy Policy', to: '#' },
    { label: 'Terms of Service', to: '#' },
    { label: 'Contact Us', to: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border">
      {/* Trust badges */}
      <div className="bg-bg-section border-b border-border">
        <div className="section-wrapper py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-gold" />
                </div>
                <span className="text-text-secondary text-sm font-semibold">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="section-wrapper py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <img src="/logo.png" alt="The Genuine Store" className="h-16 w-auto object-contain mb-4" />
            <p className="text-text-secondary text-sm leading-relaxed mb-5 max-w-xs">
              India's most trusted sports nutrition store. We source 100% authentic supplements directly from importers and authorised distributors.
            </p>
            <div className="flex flex-col gap-2 text-sm text-text-muted">
              <a href="mailto:info@genuinestore.in" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Mail size={14} /> info@genuinestore.in
              </a>
              <a href="tel:+911234567890" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Phone size={14} /> +91 12345 67890
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} /> Mumbai, Maharashtra, India
              </span>
            </div>
            <div className="flex gap-3 mt-5">
              {[
                { Icon: Link2, href: '#', label: 'Instagram' },
                { Icon: PlayCircle, href: '#', label: 'YouTube' },
                { Icon: Share2, href: '#', label: 'Facebook' },
                { Icon: ExternalLink, href: '#', label: 'Twitter' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-bg-elevated border border-border flex items-center justify-center text-text-muted hover:text-gold hover:border-gold transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-bold mb-4 text-sm tracking-wide">{title}</h3>
              <ul className="flex flex-col gap-2">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-text-muted text-sm hover:text-gold transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border bg-bg-primary">
        <div className="section-wrapper py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} The Genuine Store. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-text-muted">
            <span>PURE QUALITY • UNCOMPROMISED</span>
            <span className="text-gold">●</span>
            <span>Made with 💪 for athletes</span>
          </div>
          {/* Payment icons */}
          <div className="flex items-center gap-2">
            {['VISA', 'MC', 'UPI', 'COD'].map(p => (
              <div key={p} className="px-2 py-1 border border-border rounded text-text-muted text-[10px] font-bold">
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
