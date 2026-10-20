import { X, ShoppingCart, Minus, Plus, Trash2, Tag, Truck, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../../context/CartContext'

export default function CartDrawer({ isOpen, onClose }) {
  const {
    items, removeItem, updateQuantity,
    coupon, applyCoupon, removeCoupon,
    subtotal, discount, shipping, total, itemCount,
  } = useCart()
  const [couponCode, setCouponCode] = useState('')
  const [couponLoading, setCouponLoading] = useState(false)

  const handleApplyCoupon = async () => {
    if (!couponCode.trim()) return
    setCouponLoading(true)
    await new Promise(r => setTimeout(r, 500))
    applyCoupon(couponCode)
    setCouponCode('')
    setCouponLoading(false)
  }

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[90] backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`} style={{ zIndex: 100 }}>
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border flex-shrink-0">
          <div className="flex items-center gap-2">
            <ShoppingCart size={20} className="text-gold" />
            <h2 className="text-white font-bold text-lg">Cart</h2>
            {itemCount > 0 && (
              <span className="badge-gold ml-1">{itemCount}</span>
            )}
          </div>
          <button onClick={onClose} className="p-2 text-text-muted hover:text-white rounded-lg hover:bg-bg-elevated transition-all">
            <X size={20} />
          </button>
        </div>

        {/* Free shipping bar */}
        {subtotal < 999 && (
          <div className="px-5 py-3 bg-bg-elevated border-b border-border flex-shrink-0">
            <div className="flex items-center gap-2 text-sm text-text-secondary mb-2">
              <Truck size={14} className="text-gold" />
              <span>Add <span className="text-gold font-bold">₹{(999 - subtotal).toLocaleString()}</span> more for free shipping!</span>
            </div>
            <div className="h-1 bg-bg-primary rounded-full overflow-hidden">
              <div
                className="h-full bg-gold rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, (subtotal / 999) * 100)}%` }}
              />
            </div>
          </div>
        )}
        {subtotal >= 999 && (
          <div className="px-5 py-2 bg-success/10 border-b border-success/30 flex-shrink-0">
            <div className="flex items-center gap-2 text-success text-sm font-semibold">
              <Truck size={14} /> You get FREE shipping! 🎉
            </div>
          </div>
        )}

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-4">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center py-12 gap-4">
              <div className="w-20 h-20 rounded-full bg-bg-elevated flex items-center justify-center">
                <ShoppingCart size={32} className="text-text-muted" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Your cart is empty</h3>
                <p className="text-text-muted text-sm mt-1">Add some supplements to get started!</p>
              </div>
              <Link
                to="/shop"
                onClick={onClose}
                className="btn-gold py-2.5 px-5 text-sm"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            items.map(item => (
              <CartItem
                key={item.key}
                item={item}
                onRemove={() => removeItem(item.key)}
                onQtyChange={qty => updateQuantity(item.key, qty)}
              />
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border flex-shrink-0 px-5 py-4 flex flex-col gap-3">
            {/* Coupon */}
            {!coupon ? (
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Tag size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                  <input
                    type="text"
                    placeholder="Coupon code"
                    className="input-dark pl-8 py-2.5 text-sm"
                    value={couponCode}
                    onChange={e => setCouponCode(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleApplyCoupon()}
                  />
                </div>
                <button
                  onClick={handleApplyCoupon}
                  disabled={couponLoading}
                  className="btn-gold-outline py-2.5 px-4 text-sm"
                >
                  {couponLoading ? '...' : 'Apply'}
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between bg-success/10 border border-success/30 rounded-lg px-3 py-2">
                <div className="flex items-center gap-2 text-success text-sm font-semibold">
                  <Tag size={14} /> {coupon.label}
                </div>
                <button onClick={removeCoupon} className="text-text-muted hover:text-error text-xs">Remove</button>
              </div>
            )}

            {/* Price breakdown */}
            <div className="flex flex-col gap-1.5 text-sm">
              <div className="flex justify-between text-text-secondary">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-success">
                  <span>Discount</span>
                  <span>-₹{discount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between text-text-secondary">
                <span>Shipping</span>
                <span>{shipping === 0 ? <span className="text-success font-semibold">FREE</span> : `₹${shipping}`}</span>
              </div>
              <div className="flex justify-between text-white font-bold text-base pt-2 border-t border-border">
                <span>Total</span>
                <span className="text-gold">₹{total.toLocaleString()}</span>
              </div>
            </div>

            {/* Checkout button */}
            <Link
              to="/checkout"
              onClick={onClose}
              className="btn-gold w-full justify-center py-3.5 text-base font-bold"
            >
              Checkout <ArrowRight size={18} />
            </Link>

            <Link
              to="/cart"
              onClick={onClose}
              className="text-gold text-center text-sm hover:underline"
            >
              View Full Cart
            </Link>
          </div>
        )}
      </div>
    </>
  )
}

function CartItem({ item, onRemove, onQtyChange }) {
  return (
    <div className="flex gap-3 bg-bg-elevated rounded-xl p-3 border border-border/50">
      <Link to={`/product/${item.product.slug}`}>
        <img
          src={item.product.image}
          alt={item.product.name}
          className="w-16 h-16 object-cover rounded-lg bg-bg-card flex-shrink-0"
        />
      </Link>
      <div className="flex-1 min-w-0">
        <div className="text-text-muted text-[11px]">{item.product.brand}</div>
        <div className="text-white text-sm font-semibold line-clamp-1">{item.product.name}</div>
        <div className="text-text-muted text-[11px] mt-0.5">{item.variant.flavor} / {item.variant.size}</div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => onQtyChange(item.quantity - 1)}
              className="p-1.5 text-text-muted hover:text-white hover:bg-bg-card transition-colors"
            >
              <Minus size={12} />
            </button>
            <span className="px-3 text-white text-sm font-bold">{item.quantity}</span>
            <button
              onClick={() => onQtyChange(item.quantity + 1)}
              className="p-1.5 text-text-muted hover:text-white hover:bg-bg-card transition-colors"
            >
              <Plus size={12} />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gold font-bold text-sm">₹{(item.variant.price * item.quantity).toLocaleString()}</span>
            <button onClick={onRemove} className="text-text-muted hover:text-error transition-colors p-1">
              <Trash2 size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
