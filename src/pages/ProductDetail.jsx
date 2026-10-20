import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Star, ShoppingCart, Heart, Shield, Minus, Plus, ChevronLeft, ChevronRight, CheckCircle2, Truck, RefreshCw } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import products, { mockReviews } from '../data/products'
import ProductCard from '../components/product/ProductCard'

function TabContent({ tab, product }) {
  if (tab === 'overview') return (
    <div className="prose-invert text-text-secondary leading-relaxed">
      <p className="mb-4">{product.description}</p>
      <ul className="list-none flex flex-col gap-2">
        {[
          '100% Authentic — sourced from authorised importers',
          'Lab-tested and certified for purity and potency',
          'Premium quality ingredients with no fillers',
          'Batch tested for heavy metals and contaminants',
        ].map(f => (
          <li key={f} className="flex items-center gap-2 text-sm">
            <CheckCircle2 size={14} className="text-gold flex-shrink-0" /> {f}
          </li>
        ))}
      </ul>
    </div>
  )
  if (tab === 'nutrition') return (
    <div>
      <div className="bg-bg-elevated border border-border rounded-xl overflow-hidden">
        <div className="px-5 py-3 bg-gold text-black font-bold text-sm">Nutrition Facts</div>
        {Object.entries(product.nutritionFacts).map(([key, val]) => (
          <div key={key} className="flex justify-between px-5 py-2.5 border-b border-border/50 last:border-0">
            <span className="text-text-secondary text-sm capitalize">{key.replace(/_/g, ' ')}</span>
            <span className="text-white text-sm font-semibold">{val}</span>
          </div>
        ))}
      </div>
    </div>
  )
  if (tab === 'directions') return (
    <div className="bg-bg-elevated border border-border rounded-xl p-5">
      <p className="text-text-secondary text-sm leading-relaxed">{product.directions}</p>
    </div>
  )
  if (tab === 'reviews') {
    const productReviews = mockReviews.filter(r => r.product === product.slug).slice(0, 3)
    return (
      <div className="flex flex-col gap-4">
        {productReviews.length > 0 ? productReviews.map(review => (
          <div key={review.id} className="bg-bg-elevated border border-border rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-black font-bold text-xs">{review.avatar}</div>
              <div>
                <div className="text-white text-sm font-semibold">{review.user}</div>
                <div className="flex gap-0.5">{[1,2,3,4,5].map(i => <Star key={i} size={10} className={i <= review.rating ? 'text-gold fill-gold' : 'text-border-light'} />)}</div>
              </div>
              {review.verified && <div className="ml-auto flex items-center gap-1 text-success text-xs"><CheckCircle2 size={10} /> Verified</div>}
            </div>
            <div className="text-white text-sm font-semibold mb-1">{review.title}</div>
            <p className="text-text-secondary text-sm">{review.body}</p>
          </div>
        )) : (
          <div className="text-center py-10 text-text-muted">
            <Star size={32} className="mx-auto mb-2 opacity-30" />
            <p>No reviews yet. Be the first to review this product!</p>
          </div>
        )}
      </div>
    )
  }
  return null
}

export default function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const { toggle, isInWishlist } = useWishlist()
  const [activeImg, setActiveImg] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [qty, setQty] = useState(1)
  const [tab, setTab] = useState('overview')

  const product = products.find(p => p.slug === slug)

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!product) return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center">
      <div className="text-6xl">🔍</div>
      <h2 className="text-white font-bold text-2xl">Product not found</h2>
      <button onClick={() => navigate('/shop')} className="btn-gold py-2.5 px-6">Browse All Products</button>
    </div>
  )

  const variant = product.variants[selectedVariant]
  const inWishlist = isInWishlist(product.id)
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)

  const TABS = [
    { id: 'overview', label: 'Overview' },
    { id: 'nutrition', label: 'Nutrition Facts' },
    { id: 'directions', label: 'Directions' },
    { id: 'reviews', label: `Reviews (${product.numReviews})` },
  ]

  return (
    <div className="bg-bg-primary min-h-screen">
      <div className="section-wrapper py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-text-muted text-xs mb-6">
          <button onClick={() => navigate('/')} className="hover:text-gold transition-colors">Home</button>
          <span>/</span>
          <button onClick={() => navigate('/shop')} className="hover:text-gold transition-colors">Shop</button>
          <span>/</span>
          <button onClick={() => navigate(`/shop/${product.category.toLowerCase().replace(/\s+/g, '-')}`)} className="hover:text-gold transition-colors">{product.category}</button>
          <span>/</span>
          <span className="text-text-secondary truncate">{product.name}</span>
        </div>

        {/* Main product section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Image gallery */}
          <div className="flex flex-col gap-4">
            {/* Main image */}
            <div className="relative bg-bg-section border border-border rounded-2xl overflow-hidden aspect-square">
              <img
                src={product.images[activeImg]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {/* Nav arrows */}
              <button
                onClick={() => setActiveImg(i => (i - 1 + product.images.length) % product.images.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-bg-primary/80 rounded-full flex items-center justify-center text-white hover:bg-gold hover:text-black transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => setActiveImg(i => (i + 1) % product.images.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-bg-primary/80 rounded-full flex items-center justify-center text-white hover:bg-gold hover:text-black transition-all"
              >
                <ChevronRight size={18} />
              </button>
              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-1">
                {product.isBestSeller && <span className="badge-gold text-xs">BESTSELLER</span>}
                {product.isNew && <span className="bg-success text-white text-xs font-bold px-2 py-0.5 rounded">NEW</span>}
              </div>
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${i === activeImg ? 'border-gold' : 'border-border hover:border-gold/50'}`}
                >
                  <img src={img} alt={`${product.name} ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col gap-5">
            {/* Brand + name */}
            <div>
              <div className="text-text-muted text-sm font-bold uppercase tracking-widest mb-1">{product.brand}</div>
              <h1 className="text-white font-bold text-2xl md:text-3xl leading-snug">{product.name}</h1>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} className={i <= Math.round(product.rating) ? 'text-gold fill-gold' : 'text-border-light'} />)}
              </div>
              <span className="text-gold font-bold">{product.rating}</span>
              <span className="text-text-muted text-sm">({product.numReviews.toLocaleString()} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-gold font-black text-3xl">₹{variant.price.toLocaleString()}</span>
              <span className="text-text-muted line-through text-lg">₹{variant.originalPrice.toLocaleString()}</span>
              <span className="badge-success text-sm px-3 py-1">{product.discountPercent}% OFF</span>
            </div>
            <div className="text-success text-sm font-semibold">
              You save: ₹{(variant.originalPrice - variant.price).toLocaleString()}
            </div>

            {/* Variants */}
            <div>
              <div className="text-text-secondary text-sm font-bold mb-2">
                Flavor: <span className="text-white">{variant.flavor}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {[...new Set(product.variants.map(v => v.flavor))].map((flavor, i) => {
                  const idx = product.variants.findIndex(v => v.flavor === flavor)
                  return (
                    <button
                      key={flavor}
                      onClick={() => setSelectedVariant(idx)}
                      className={`px-4 py-2 rounded-lg border text-sm font-semibold transition-all ${
                        product.variants[selectedVariant].flavor === flavor
                          ? 'border-gold bg-gold/10 text-gold'
                          : 'border-border text-text-muted hover:border-gold/50 hover:text-white'
                      }`}
                    >
                      {flavor}
                    </button>
                  )
                })}
              </div>
              <div className="text-text-secondary text-sm font-bold mb-2">
                Size: <span className="text-white">{variant.size}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedVariant(i)}
                    className={`px-4 py-2 rounded-lg border text-sm font-semibold transition-all ${
                      i === selectedVariant
                        ? 'border-gold bg-gold/10 text-gold'
                        : 'border-border text-text-muted hover:border-gold/50 hover:text-white'
                    }`}
                  >
                    {v.size}
                  </button>
                ))}
              </div>
            </div>

            {/* Stock */}
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${variant.stock > 0 ? 'bg-success' : 'bg-error'}`} />
              <span className={`text-sm font-semibold ${variant.stock > 0 ? 'text-success' : 'text-error'}`}>
                {variant.stock > 0 ? `In Stock (${variant.stock} left)` : 'Out of Stock'}
              </span>
            </div>

            {/* Qty + add to cart */}
            <div className="flex gap-3 flex-wrap">
              <div className="flex items-center border border-border rounded-xl overflow-hidden">
                <button onClick={() => setQty(q => Math.max(1, q - 1))} className="px-4 py-3.5 text-text-muted hover:text-white hover:bg-bg-elevated transition-colors">
                  <Minus size={16} />
                </button>
                <span className="px-5 text-white font-bold text-lg">{qty}</span>
                <button onClick={() => setQty(q => Math.min(10, q + 1))} className="px-4 py-3.5 text-text-muted hover:text-white hover:bg-bg-elevated transition-colors">
                  <Plus size={16} />
                </button>
              </div>
              <button
                onClick={() => addItem(product, variant, qty)}
                disabled={variant.stock === 0}
                className="btn-gold flex-1 justify-center py-3.5 text-base font-bold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingCart size={18} /> Add to Cart
              </button>
              <button
                onClick={() => toggle(product)}
                className={`p-3.5 rounded-xl border transition-all ${inWishlist ? 'border-red-500 text-red-400 bg-red-500/10' : 'border-border text-text-muted hover:border-red-500 hover:text-red-400'}`}
              >
                <Heart size={20} className={inWishlist ? 'fill-current' : ''} />
              </button>
            </div>

            {/* Trust items */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { Icon: Shield, label: '100% Authentic', sub: 'Verified genuine' },
                { Icon: Truck, label: 'Fast Delivery', sub: '2-5 business days' },
                { Icon: RefreshCw, label: 'Easy Returns', sub: '7-day policy' },
              ].map(({ Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-3 bg-bg-elevated border border-border rounded-xl p-3">
                  <Icon size={18} className="text-gold flex-shrink-0" />
                  <div>
                    <div className="text-white text-xs font-bold">{label}</div>
                    <div className="text-text-muted text-[11px]">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product tabs */}
        <div className="bg-bg-section border border-border rounded-2xl overflow-hidden mb-16">
          <div className="flex overflow-x-auto border-b border-border">
            {TABS.map(t => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`tab-btn ${tab === t.id ? 'active' : ''}`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="p-6">
            <TabContent tab={tab} product={product} />
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div>
            <h2 className="section-title mb-6">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
