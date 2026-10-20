import { Shield, Truck, Award, RefreshCw } from 'lucide-react'

const PILLARS = [
  {
    Icon: Shield,
    title: '100% Authentic',
    desc: 'All products are sourced directly from authorised importers and distributors. Every batch is verified.',
    color: '#FFC107',
  },
  {
    Icon: Truck,
    title: 'Fast Delivery',
    desc: 'Quick 2-5 day delivery across India. Free shipping on orders above ₹999. Real-time tracking.',
    color: '#22C55E',
  },
  {
    Icon: Award,
    title: 'Certified Quality',
    desc: 'All products are batch-tested and certified. We maintain strict quality standards at every step.',
    color: '#6366F1',
  },
  {
    Icon: RefreshCw,
    title: 'Easy Returns',
    desc: 'Hassle-free 7-day return policy on sealed products. Customer satisfaction is our top priority.',
    color: '#EF4444',
  },
]

export default function WhyUs() {
  return (
    <section className="bg-bg-primary section-pad">
      <div className="section-wrapper">
        <div className="text-center mb-12">
          <h2 className="section-title">WHY CHOOSE THE GENUINE STORE</h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-3 rounded" />
          <p className="section-subtitle mt-3">Your trust is our biggest product</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map(({ Icon, title, desc, color }) => (
            <div
              key={title}
              className="group bg-bg-elevated border border-border rounded-2xl p-8 hover:border-gold/40 hover:shadow-[0_0_30px_rgba(255,193,7,0.06)] transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${color}18`, border: `1px solid ${color}40` }}
              >
                <Icon size={28} style={{ color }} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
