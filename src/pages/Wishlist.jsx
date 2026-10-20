import { Link } from 'react-router-dom'
import { useWishlist } from '../context/WishlistContext'
import ProductCard from '../components/product/ProductCard'
import { Heart } from 'lucide-react'

export default function Wishlist() {
  const { items, toggle } = useWishlist()

  if (items.length === 0) return (
    <div className="bg-bg-primary min-h-screen section-pad">
      <div className="section-wrapper flex flex-col items-center justify-center py-20 gap-6 text-center">
        <div className="w-24 h-24 rounded-full bg-bg-elevated border border-border flex items-center justify-center">
          <Heart size={40} className="text-text-muted" />
        </div>
        <div>
          <h2 className="text-white font-bold text-2xl mb-2">Your wishlist is empty</h2>
          <p className="text-text-secondary">Save products you love by clicking the heart icon on any product</p>
        </div>
        <Link to="/shop" className="btn-gold py-3 px-8">Browse Products</Link>
      </div>
    </div>
  )

  return (
    <div className="bg-bg-primary min-h-screen section-pad">
      <div className="section-wrapper">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display font-black text-3xl text-white">MY WISHLIST ({items.length})</h1>
          <button onClick={() => items.forEach(i => toggle(i))} className="text-error text-sm hover:underline">Clear All</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  )
}
