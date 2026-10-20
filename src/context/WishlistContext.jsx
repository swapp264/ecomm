import { createContext, useContext, useState, useEffect } from 'react'
import toast from 'react-hot-toast'

const WishlistContext = createContext()

export function WishlistProvider({ children }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    const stored = localStorage.getItem('tgs_wishlist')
    if (stored) {
      try { setItems(JSON.parse(stored)) } catch {}
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tgs_wishlist', JSON.stringify(items))
  }, [items])

  const toggle = (product) => {
    setItems(prev => {
      const exists = prev.find(i => i.id === product.id)
      if (exists) {
        toast.success('Removed from wishlist')
        return prev.filter(i => i.id !== product.id)
      }
      toast.success('Added to wishlist ❤️')
      return [...prev, product]
    })
  }

  const isInWishlist = (id) => items.some(i => i.id === id)
  const count = items.length

  return (
    <WishlistContext.Provider value={{ items, toggle, isInWishlist, count }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  return useContext(WishlistContext)
}
