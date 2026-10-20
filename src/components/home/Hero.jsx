import { Link } from 'react-router-dom'
import { ShoppingBag, ArrowRight, Zap, Shield, Truck } from 'lucide-react'

const STATS = [
  { value: '50K+', label: 'Orders Delivered' },
  { value: '100%', label: 'Authentic Products' },
  { value: '500+', label: 'Supplements' },
  { value: '4.8★', label: 'Average Rating' },
]

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden bg-bg-primary">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80"
          alt="Gym background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-bg-primary/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent" />
      </div>
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold to-transparent" />

      <div className="relative section-wrapper py-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Zap size={16} className="text-gold" />
            <span className="text-gold text-sm font-bold tracking-widest uppercase">The Genuine Store</span>
          </div>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white leading-none tracking-tight mb-4">
            BUILT FOR<br />
            <span className="text-gold">YOUR NEXT</span><br />
            LEVEL
          </h1>
          <p className="text-text-secondary text-lg md:text-xl mb-8 max-w-md leading-relaxed">
            Premium, 100% authentic sports nutrition supplements sourced directly from authorised importers.
            <span className="text-gold font-semibold"> Pure Quality. Uncompromised.</span>
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link to="/shop" id="hero-shop-btn" className="btn-gold text-base px-8 py-4 rounded-lg">
              <ShoppingBag size={20} /> SHOP SUPPLEMENTS
            </Link>
            <Link to="/shop?sort=bestseller" id="hero-bestseller-btn" className="btn-gold-outline text-base px-8 py-4 rounded-lg">
              BEST SELLERS <ArrowRight size={20} />
            </Link>
          </div>
          <div className="flex flex-wrap gap-4">
            {[{ Icon: Shield, label: '100% Authentic' }, { Icon: Truck, label: 'Free Shipping ₹999+' }].map(({ Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-text-secondary text-sm">
                <Icon size={16} className="text-gold" /> {label}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-border/50">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center md:text-left">
              <div className="font-display font-black text-3xl md:text-4xl text-gold">{value}</div>
              <div className="text-text-muted text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative bg-black/60 border-t border-border py-3 overflow-hidden">
        <div className="marquee-inner">
          {[...Array(4)].flatMap((_, ri) =>
            ['Optimum Nutrition', 'MuscleBlaze', 'MyProtein', 'Dymatize', 'BSN', 'MuscleTech', 'Now Foods', 'AS-IT-IS', 'Nakpro', 'Health Veda'].map(brand => (
              <span key={`${ri}-${brand}`} className="text-text-muted text-xs font-bold tracking-widest uppercase mx-8">
                ⭐ {brand}
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
