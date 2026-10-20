import { Link } from 'react-router-dom'
import { categories } from '../../data/products'

export default function CategoryCards() {
  return (
    <section className="bg-bg-section section-pad">
      <div className="section-wrapper">
        <div className="text-center mb-10">
          <h2 className="section-title">SHOP BY CATEGORY</h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-3 rounded" />
          <p className="section-subtitle mt-3">Explore our full range of sports nutrition categories</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop/${cat.slug}`}
              className="group flex flex-col items-center text-center gap-3 bg-bg-elevated border border-border rounded-2xl p-5 transition-all duration-300 hover:border-gold/50 hover:bg-gold/5 hover:-translate-y-1"
            >
              <div className="text-4xl transition-transform duration-300 group-hover:scale-125">{cat.icon}</div>
              <div className="text-white text-xs font-bold group-hover:text-gold transition-colors">{cat.name}</div>
              <div className="text-text-muted text-[11px]">{cat.productCount} products</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
