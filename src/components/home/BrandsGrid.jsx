import { brands } from '../../data/products'

const BRAND_NAMES = ['Optimum Nutrition', 'MuscleBlaze', 'MyProtein', 'Dymatize', 'BSN', 'MuscleTech', 'Now Foods', 'AS-IT-IS', 'Nakpro', 'Health Veda Organics']

export default function BrandsGrid() {
  return (
    <section className="bg-bg-primary section-pad overflow-hidden">
      <div className="section-wrapper">
        <div className="text-center mb-10">
          <h2 className="section-title">TOP BRANDS WE CARRY</h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-3 rounded" />
          <p className="section-subtitle mt-3">Authorised dealers for all major supplement brands</p>
        </div>

        {/* Ticker */}
        <div className="overflow-hidden mb-10 py-3 border-y border-border">
          <div className="marquee-inner">
            {[...BRAND_NAMES, ...BRAND_NAMES].map((brand, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 mx-6 bg-bg-elevated border border-border rounded-full px-5 py-2 text-text-secondary text-sm font-bold hover:border-gold hover:text-gold transition-colors cursor-default whitespace-nowrap"
              >
                <span className="text-gold text-xs">●</span> {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Brand grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {BRAND_NAMES.map(brand => (
            <div
              key={brand}
              className="group bg-bg-elevated border border-border rounded-xl p-4 flex flex-col items-center justify-center text-center gap-2 hover:border-gold/50 hover:bg-gold/5 transition-all cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-bg-card flex items-center justify-center text-gold font-display font-black text-lg">
                {brand[0]}
              </div>
              <div className="text-text-muted text-[11px] font-semibold group-hover:text-gold transition-colors leading-tight">
                {brand}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
