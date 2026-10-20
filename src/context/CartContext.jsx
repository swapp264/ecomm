import { createContext, useContext, useState, useEffect } from 'react'
import toast from 'react-hot-toast'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [coupon, setCoupon] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('tgs_cart')
    if (stored) {
      try { setItems(JSON.parse(stored)) } catch {}
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tgs_cart', JSON.stringify(items))
  }, [items])

  const addItem = (product, variant, quantity = 1) => {
    const key = `${product.id}_${variant.flavor}_${variant.size}`
    setItems(prev => {
      const existing = prev.find(i => i.key === key)
      if (existing) {
        toast.success(`${product.name} quantity updated!`)
        return prev.map(i =>
          i.key === key
            ? { ...i, quantity: Math.min(i.quantity + quantity, 10) }
            : i
        )
      }
      toast.success(`${product.name} added to cart!`)
      return [
        ...prev,
        {
          key,
          product: {
            id: product.id,
            name: product.name,
            brand: product.brand,
            slug: product.slug,
            image: product.images[0],
          },
          variant,
          quantity,
        },
      ]
    })
    setIsOpen(true)
  }

  const removeItem = (key) => {
    setItems(prev => prev.filter(i => i.key !== key))
    toast.success('Item removed from cart')
  }

  const updateQuantity = (key, qty) => {
    if (qty < 1) { removeItem(key); return }
    setItems(prev => prev.map(i => i.key === key ? { ...i, quantity: Math.min(qty, 10) } : i))
  }

  const clearCart = () => {
    setItems([])
    setCoupon(null)
  }

  const applyCoupon = (code) => {
    const coupons = {
      GENUINE10: { type: 'percent', value: 10, label: 'GENUINE10 (10% OFF)' },
      FIRST20: { type: 'fixed', value: 200, label: 'FIRST20 (₹200 OFF)' },
      SAVE15: { type: 'percent', value: 15, label: 'SAVE15 (15% OFF)' },
    }
    const found = coupons[code.toUpperCase()]
    if (found) {
      setCoupon({ ...found, code: code.toUpperCase() })
      toast.success(`Coupon applied: ${found.label}`)
      return true
    }
    toast.error('Invalid coupon code')
    return false
  }

  const removeCoupon = () => setCoupon(null)

  const subtotal = items.reduce((sum, i) => sum + i.variant.price * i.quantity, 0)
  const discount = coupon
    ? coupon.type === 'percent'
      ? Math.round(subtotal * coupon.value / 100)
      : Math.min(coupon.value, subtotal)
    : 0
  const shipping = subtotal >= 999 ? 0 : 79
  const total = subtotal - discount + shipping
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <CartContext.Provider value={{
      items, addItem, removeItem, updateQuantity, clearCart,
      coupon, applyCoupon, removeCoupon,
      subtotal, discount, shipping, total, itemCount,
      isOpen, setIsOpen,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
