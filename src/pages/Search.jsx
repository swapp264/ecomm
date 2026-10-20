import { useSearchParams } from 'react-router-dom'
import products from '../data/products'
import ProductCard from '../components/product/ProductCard'
import { Search } from 'lucide-react'

export default function SearchPage() {
  const [searchParams] = useSearchParams()
  const q = searchParams.get('q') || ''

  const results = q.length >= 2
    ? products.filter(p =>
        p.name.toLowerCase().includes(q.toLowerCase()) ||
        p.brand.toLowerCase().includes(q.toLowerCase()) ||
        p.category.toLowerCase().includes(q.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(q.toLowerCase()))
      )
    : []

  return (
    <div className="bg-bg-primary min-h-screen section-pad">
      <div className="section-wrapper">
        <div className="mb-8">
          <h1 className="font-display font-black text-3xl text-white">
            {q ? `Results for "${q}"` : 'Search'}
          </h1>
          {q && <p className="text-text-muted mt-1">{results.length} products found</p>}
        </div>

        {!q && (
          <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
            <Search size={48} className="text-text-muted" />
            <h2 className="text-white font-bold text-xl">Search for supplements</h2>
            <p className="text-text-secondary">Try searching for whey protein, creatine, pre-workout...</p>
          </div>
        )}

        {q && results.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
            <div className="text-6xl">🔍</div>
            <h2 className="text-white font-bold text-xl">No results for "{q}"</h2>
            <p className="text-text-secondary">Try a different keyword or browse our categories</p>
          </div>
        )}

        {results.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {results.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </div>
    </div>
  )
}
