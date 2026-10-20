import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, ShoppingCart, Eye, Star, Zap } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'
import QuickView from './QuickView'

function StarRating({ rating, size = 12 }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          size={size}
          className={i <= Math.round(rating) ? 'text-gold fill-gold' : 'text-border-light'}
        />
      ))}
    </div>
  )
}

export default function ProductCard({ product, view = 'grid' }) {
  const { addItem } = useCart()
  const { toggle, isInWishlist } = useWishlist()
  const [quickViewOpen, setQuickViewOpen] = useState(false)
  const [imgError, setImgError] = useState(false)

  const defaultVariant = product.variants[0]
  const inWishlist = isInWishlist(product.id)

  const handleAddToCart = (e) => {
    e.preventDefault()
    addItem(product, defaultVariant)
  }

  const handleWishlist = (e) => {
    e.preventDefault()
    toggle(product)
  }

  if (view === 'list') {
    return (
      <div className="card flex gap-4 p-4 group">
        <Link to={`/product/${product.slug}`} className="flex-shrink-0">
          <img
            src={imgError ? 'https://via.placeholder.com/120x120/1A1A1A/FFC107?text=Product' : product.images[0]}
            alt={product.name}
            className="w-28 h-28 object-cover rounded-lg bg-bg-elevated"
            onError={() => setImgError(true)}
          />
        </Link>
        <div className="flex-1 min-w-0">
          <div className="text-text-muted text-xs mb-1">{product.brand}</div>
          <Link to={`/product/${product.slug}`}>
            <h3 className="text-white font-semibold text-sm leading-snug hover:text-gold transition-colors line-clamp-2">{product.name}</h3>
          </Link>
          <div className="flex items-center gap-2 mt-1">
            <StarRating rating={product.rating} />
            <span className="text-text-muted text-xs">({product.numReviews})</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="price-current">₹{defaultVariant.price.toLocaleString()}</span>
            <span className="price-original">₹{defaultVariant.originalPrice.toLocaleString()}</span>
            <span className="badge-success">{product.discountPercent}% OFF</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <button onClick={handleWishlist} className={`p-2 rounded-lg border transition-all ${inWishlist ? 'border-red-500 text-red-500' : 'border-border text-text-muted hover:border-red-500 hover:text-red-500'}`}>
            <Heart size={16} className={inWishlist ? 'fill-current' : ''} />
          </button>
          <button onClick={handleAddToCart} className="btn-gold py-2 px-3 text-xs">
            <ShoppingCart size={14} />
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="card group relative flex flex-col">
        {/* Badges */}
        <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
          {product.isBestSeller && (
            <span className="badge-gold text-[10px] px-2 py-0.5">BESTSELLER</span>
          )}
          {product.isNew && (
            <span className="bg-success text-white text-[10px] font-bold px-2 py-0.5 rounded">NEW</span>
          )}
          <span className="bg-error text-white text-[10px] font-bold px-2 py-0.5 rounded">
            -{product.discountPercent}%
          </span>
        </div>

        {/* Wishlist button */}
        <button
          onClick={handleWishlist}
          className={`absolute top-2 right-2 z-10 p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 ${
            inWishlist
              ? 'bg-red-500/20 text-red-400 opacity-100'
              : 'bg-bg-primary/80 text-text-muted hover:text-red-400'
          }`}
          aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart size={16} className={inWishlist ? 'fill-current' : ''} />
        </button>

        {/* Product Image */}
        <Link to={`/product/${product.slug}`} className="relative overflow-hidden block bg-bg-elevated aspect-square">
          <img
            src={imgError ? 'https://via.placeholder.com/300x300/1A1A1A/FFC107?text=Product' : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onError={() => setImgError(true)}
          />
          {/* Quick view overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button
              onClick={(e) => { e.preventDefault(); setQuickViewOpen(true) }}
              className="flex items-center gap-2 bg-bg-elevated text-white text-xs font-semibold px-4 py-2 rounded-full border border-border hover:border-gold hover:text-gold transition-all"
            >
              <Eye size={14} /> Quick View
            </button>
          </div>
        </Link>

        {/* Product Info */}
        <div className="p-3 flex flex-col gap-1.5 flex-1">
          <div className="text-text-muted text-[11px] font-semibold uppercase tracking-wide">{product.brand}</div>
          <Link to={`/product/${product.slug}`}>
            <h3 className="text-white text-sm font-semibold leading-snug line-clamp-2 hover:text-gold transition-colors">
              {product.name}
            </h3>
          </Link>

          {/* Flavors preview */}
          {product.variants.length > 1 && (
            <div className="text-text-muted text-[11px]">
              {product.variants.length} variants available
            </div>
          )}

          {/* Rating */}
          <div className="flex items-center gap-1.5">
            <StarRating rating={product.rating} />
            <span className="text-text-muted text-[11px]">({product.numReviews.toLocaleString()})</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 flex-wrap mt-auto pt-1">
            <span className="price-current">₹{defaultVariant.price.toLocaleString()}</span>
            <span className="price-original">₹{defaultVariant.originalPrice.toLocaleString()}</span>
          </div>

          {/* Size hint */}
          <div className="text-text-muted text-[11px]">{defaultVariant.size}</div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="btn-gold w-full justify-center mt-2 py-2.5 text-sm"
          >
            <ShoppingCart size={15} />
            Add to Cart
          </button>
        </div>
      </div>

      {quickViewOpen && (
        <QuickView
          product={product}
          onClose={() => setQuickViewOpen(false)}
        />
      )}
    </>
  )
}

export { StarRating }
