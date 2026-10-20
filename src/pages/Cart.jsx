import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Trash2, ShoppingBag, Tag, Truck, ArrowRight, Minus, Plus } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { items, removeItem, updateQuantity, coupon, applyCoupon, removeCoupon, subtotal, discount, shipping, total, itemCount } = useCart()
  const [couponCode, setCouponCode] = useState('')

  const handleApply = () => { if (couponCode) applyCoupon(couponCode); setCouponCode('') }

  if (items.length === 0) return (
    <div className="bg-bg-primary min-h-screen section-pad">
      <div className="section-wrapper flex flex-col items-center justify-center py-20 gap-6 text-center">
        <div className="w-24 h-24 rounded-full bg-bg-elevated border border-border flex items-center justify-center">
          <ShoppingBag size={40} className="text-text-muted" />
        </div>
        <div>
          <h2 className="text-white font-bold text-2xl mb-2">Your cart is empty</h2>
          <p className="text-text-secondary">Add some supplements to start your fitness journey!</p>
        </div>
        <div className="flex gap-3">
          <Link to="/shop" className="btn-gold py-3 px-8">Browse Products</Link>
          <Link to="/" className="btn-dark py-3 px-8">Go Home</Link>
        </div>
        <div className="mt-4 p-4 bg-bg-elevated border border-border rounded-xl text-sm text-text-muted">
          💡 Try coupon codes: <span className="text-gold font-bold">GENUINE10</span> or <span className="text-gold font-bold">FIRST20</span>
        </div>
      </div>
    </div>
  )

  return (
    <div className="bg-bg-primary min-h-screen section-pad">
      <div className="section-wrapper">
        <h1 className="font-display font-black text-3xl text-white mb-8">YOUR CART ({itemCount} items)</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {items.map(item => (
              <div key={item.key} className="bg-bg-section border border-border rounded-2xl p-5 flex gap-4">
                <Link to={`/product/${item.product.slug}`} className="flex-shrink-0">
                  <img src={item.product.image} alt={item.product.name} className="w-24 h-24 object-cover rounded-xl bg-bg-elevated" />
                </Link>
                <div className="flex-1 min-w-0">
                  <div className="text-text-muted text-xs mb-1">{item.product.brand}</div>
                  <Link to={`/product/${item.product.slug}`} className="text-white font-semibold text-sm hover:text-gold transition-colors line-clamp-2">{item.product.name}</Link>
                  <div className="text-text-muted text-xs mt-1">{item.variant.flavor} / {item.variant.size}</div>
                  <div className="flex items-center justify-between mt-3 flex-wrap gap-3">
                    <div className="flex items-center border border-border rounded-lg overflow-hidden">
                      <button onClick={() => updateQuantity(item.key, item.quantity - 1)} className="p-2 text-text-muted hover:text-white hover:bg-bg-elevated transition-colors"><Minus size={14} /></button>
                      <span className="px-4 text-white font-bold">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.key, item.quantity + 1)} className="p-2 text-text-muted hover:text-white hover:bg-bg-elevated transition-colors"><Plus size={14} /></button>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-gold font-bold">₹{(item.variant.price * item.quantity).toLocaleString()}</span>
                      <button onClick={() => removeItem(item.key)} className="p-2 text-text-muted hover:text-error transition-colors rounded-lg hover:bg-error/10">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Link to="/shop" className="flex items-center gap-2 text-gold text-sm hover:underline mt-2">
              ← Continue Shopping
            </Link>
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-bg-section border border-border rounded-2xl p-6 sticky top-24">
              <h2 className="text-white font-bold text-lg mb-5">Order Summary</h2>

              {/* Coupon */}
              {!coupon ? (
                <div className="flex gap-2 mb-5">
                  <div className="relative flex-1">
                    <Tag size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                    <input type="text" placeholder="Coupon code" className="input-dark pl-8 py-2.5 text-sm" value={couponCode} onChange={e => setCouponCode(e.target.value.toUpperCase())} onKeyDown={e => e.key === 'Enter' && handleApply()} />
                  </div>
                  <button onClick={handleApply} className="btn-gold-outline py-2.5 px-4 text-sm">Apply</button>
                </div>
              ) : (
                <div className="flex items-center justify-between bg-success/10 border border-success/30 rounded-xl px-4 py-3 mb-5">
                  <div className="flex items-center gap-2 text-success text-sm font-semibold"><Tag size={14} /> {coupon.code}</div>
                  <button onClick={removeCoupon} className="text-text-muted hover:text-error text-xs">Remove</button>
                </div>
              )}

              {/* Price breakdown */}
              <div className="flex flex-col gap-3 pb-4 border-b border-border">
                <div className="flex justify-between text-text-secondary text-sm">
                  <span>Subtotal ({itemCount} items)</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-success text-sm">
                    <span>Coupon Discount</span>
                    <span>-₹{discount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-text-secondary text-sm">
                  <span className="flex items-center gap-1"><Truck size={13} /> Shipping</span>
                  <span>{shipping === 0 ? <span className="text-success font-semibold">FREE</span> : `₹${shipping}`}</span>
                </div>
              </div>
              <div className="flex justify-between text-white font-bold text-xl mt-4 mb-5">
                <span>Total</span>
                <span className="text-gold">₹{total.toLocaleString()}</span>
              </div>

              <Link to="/checkout" className="btn-gold w-full justify-center py-4 text-base font-bold">
                Proceed to Checkout <ArrowRight size={18} />
              </Link>

              <div className="mt-4 flex flex-col gap-2 text-text-muted text-xs">
                <div className="flex items-center gap-2">✅ Secure SSL encrypted payment</div>
                <div className="flex items-center gap-2">✅ 100% authentic products guaranteed</div>
                <div className="flex items-center gap-2">✅ Free returns within 7 days</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
