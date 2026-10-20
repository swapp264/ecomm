import { useState } from 'react'
import { X, ShoppingCart, Heart, Star, Shield, Minus, Plus } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'
import { Link } from 'react-router-dom'
import { StarRating } from './ProductCard'

export default function QuickView({ product, onClose }) {
  const { addItem } = useCart()
  const { toggle, isInWishlist } = useWishlist()
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0)
  const [qty, setQty] = useState(1)

  const variant = product.variants[selectedVariantIdx]
  const inWishlist = isInWishlist(product.id)

  const handleAddToCart = () => {
    addItem(product, variant, qty)
    onClose()
  }

  return (
    <div className="modal-overlay z-[600]" onClick={onClose}>
      <div
        className="bg-bg-section border border-border rounded-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto animate-fade-in"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border">
          <h2 className="text-white font-bold text-lg">Quick View</h2>
          <button onClick={onClose} className="p-2 text-text-muted hover:text-white rounded-lg hover:bg-bg-elevated transition-all">
            <X size={20} />
          </button>
        </div>

        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Image */}
          <div className="bg-bg-elevated rounded-xl overflow-hidden aspect-square">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-3">
            <div className="text-text-muted text-sm font-semibold uppercase tracking-wide">{product.brand}</div>
            <h3 className="text-white font-bold text-xl leading-snug">{product.name}</h3>

            <div className="flex items-center gap-2">
              <StarRating rating={product.rating} size={14} />
              <span className="text-text-muted text-sm">({product.numReviews.toLocaleString()} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-gold font-bold text-2xl">₹{variant.price.toLocaleString()}</span>
              <span className="text-text-muted line-through text-base">₹{variant.originalPrice.toLocaleString()}</span>
              <span className="badge-success">{product.discountPercent}% OFF</span>
            </div>

            {/* Variants */}
            <div>
              <div className="text-text-secondary text-sm font-semibold mb-2">Variant:</div>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedVariantIdx(i)}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all ${
                      i === selectedVariantIdx
                        ? 'border-gold bg-gold/10 text-gold'
                        : 'border-border text-text-muted hover:border-gold/50'
                    }`}
                  >
                    {v.flavor} / {v.size}
                  </button>
                ))}
              </div>
            </div>

            {/* Qty */}
            <div className="flex items-center gap-3">
              <div className="text-text-secondary text-sm font-semibold">Qty:</div>
              <div className="flex items-center border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  className="p-2 text-text-muted hover:text-white hover:bg-bg-elevated transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="px-4 text-white font-bold text-sm">{qty}</span>
                <button
                  onClick={() => setQty(q => Math.min(10, q + 1))}
                  className="p-2 text-text-muted hover:text-white hover:bg-bg-elevated transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
              <span className="text-text-muted text-xs">{variant.stock} in stock</span>
            </div>

            {/* Auth badge */}
            <div className="flex items-center gap-2 bg-success/10 border border-success/30 rounded-lg px-3 py-2">
              <Shield size={16} className="text-success" />
              <span className="text-success text-xs font-semibold">100% Authentic & Verified</span>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-auto">
              <button onClick={handleAddToCart} className="btn-gold flex-1 justify-center py-3">
                <ShoppingCart size={16} />
                Add to Cart
              </button>
              <button
                onClick={() => toggle(product)}
                className={`p-3 rounded-lg border transition-all ${
                  inWishlist ? 'border-red-500 text-red-400 bg-red-500/10' : 'border-border text-text-muted hover:border-red-500 hover:text-red-400'
                }`}
              >
                <Heart size={18} className={inWishlist ? 'fill-current' : ''} />
              </button>
            </div>

            <Link
              to={`/product/${product.slug}`}
              onClick={onClose}
              className="text-gold text-sm text-center hover:underline"
            >
              View Full Details →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
