import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, ShoppingCart, Heart, User, Menu, X, ChevronDown, Zap } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'
import { useAuth } from '../../context/AuthContext'
import { useLoader } from '../../context/LoaderContext'
import CategoryNav from './CategoryNav'
import MobileNav from './MobileNav'
import products from '../../data/products'
import logoImage from '../../assets/genuine-store-logo.jpeg'

const ANNOUNCEMENTS = [
  '🚀 Free Shipping on orders above ₹999',
  '🏆 100% Authentic Products — Direct from Importers',
  '💪 Use code GENUINE10 for 10% off your first order',
  '⚡ New Arrivals: MyProtein Impact Whey & ON Gold Standard',
  '🔥 Flash Sale: Up to 40% off on Mass Gainers',
]

export default function Header() {
  const { itemCount, setIsOpen: openCart } = useCart()
  const { count: wishlistCount } = useWishlist()
  const { user, logout, isAdmin } = useAuth()
  const { triggerLoader } = useLoader()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [showSearch, setShowSearch] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [announcementIdx, setAnnouncementIdx] = useState(0)
  const searchRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncementIdx(i => (i + 1) % ANNOUNCEMENTS.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  // Search suggestions
  useEffect(() => {
    if (searchQuery.length < 2) { setSearchResults([]); return }
    const q = searchQuery.toLowerCase()
    const results = products
      .filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      )
      .slice(0, 6)
    setSearchResults(results)
  }, [searchQuery])

  const handleSearch = (e) => {
    e.preventDefault()
    if (!searchQuery.trim()) return
    navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    setSearchQuery('')
    setSearchResults([])
    setShowSearch(false)
  }

  const handleClickOutside = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setSearchResults([])
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-gold text-black text-xs font-semibold py-2 overflow-hidden">
        <div className="section-wrapper flex items-center justify-center">
          <span
            key={announcementIdx}
            className="animate-fade-in text-center"
          >
            {ANNOUNCEMENTS[announcementIdx]}
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg-primary/95 backdrop-blur-md border-b border-border shadow-lg shadow-black/50'
            : 'bg-bg-primary border-b border-border'
        }`}
      >
        <div className="section-wrapper py-3">
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-btn"
              className="lg:hidden text-text-secondary hover:text-gold transition-colors p-1"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>

            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                src="/logo.png"
                alt="The Genuine Store"
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              {/* Fallback logo text */}
              <div className="hidden items-center gap-2">
                <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                  <span className="font-display font-black text-black text-xl">G</span>
                </div>
                <div className="hidden sm:block">
                  <div className="font-display font-black text-white text-base leading-tight tracking-wider">
                    THE GENUINE
                  </div>
                  <div className="font-display font-bold text-gold text-xs tracking-[0.3em]">
                    STORE
                  </div>
                </div>
              </div>
            </Link>

            {/* Search Bar — desktop */}
            <div className="hidden md:flex flex-1 items-center gap-3 relative" ref={searchRef}>
              {/* Logo */}
              <img
                src={logoImage}
                alt="THE GENUINE STORE"
                className="h-10 w-auto object-contain flex-shrink-0"
              />
              <form onSubmit={handleSearch} className="flex w-full">
                <input
                  type="text"
                  placeholder="Search supplements, brands, categories..."
                  className="input-dark rounded-r-none flex-1 text-sm"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  onFocus={() => setShowSearch(true)}
                  id="header-search"
                />
                <button
                  type="submit"
                  className="bg-gold hover:bg-gold-dark text-black px-4 rounded-r-lg transition-colors flex items-center"
                  aria-label="Search"
                >
                  <Search size={18} />
                </button>
              </form>

              {/* Search dropdown */}
              {searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-bg-elevated border border-border rounded-xl shadow-2xl z-50 overflow-hidden animate-fade-in">
                  {searchResults.map(p => (
                    <Link
                      key={p.id}
                      to={`/product/${p.slug}`}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-bg-card transition-colors border-b border-border last:border-0"
                      onClick={() => { setSearchQuery(''); setSearchResults([]) }}
                    >
                      <img
                        src={p.images[0]}
                        alt={p.name}
                        className="w-10 h-10 object-cover rounded-lg bg-bg-card"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-text-primary text-sm font-medium truncate">{p.name}</div>
                        <div className="text-text-muted text-xs">{p.brand} · {p.category}</div>
                      </div>
                      <div className="text-gold text-sm font-bold">
                        ₹{p.variants[0]?.price?.toLocaleString()}
                      </div>
                    </Link>
                  ))}
                  <button
                    className="w-full py-2 text-gold text-sm text-center hover:bg-bg-card"
                    onClick={handleSearch}
                  >
                    See all results for "{searchQuery}"
                  </button>
                </div>
              )}
            </div>

            {/* Header Icons */}
            <div className="flex items-center gap-1 ml-auto lg:ml-0">
              {/* Mobile Search */}
              <button
                className="md:hidden p-2 text-text-secondary hover:text-gold transition-colors"
                onClick={() => navigate('/search')}
                aria-label="Search"
              >
                <Search size={22} />
              </button>

              {/* Loader trigger */}
              <button
                id="trigger-loader-btn"
                className="hidden lg:flex p-2 text-text-muted hover:text-gold transition-colors"
                onClick={triggerLoader}
                title="Re-play loading animation"
              >
                <Zap size={18} />
              </button>

              {/* Wishlist */}
              <Link to="/wishlist" className="relative p-2 text-text-secondary hover:text-gold transition-colors" aria-label="Wishlist">
                <Heart size={22} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-gold text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {wishlistCount > 9 ? '9+' : wishlistCount}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <button
                id="cart-btn"
                className="relative p-2 text-text-secondary hover:text-gold transition-colors"
                onClick={() => openCart(true)}
                aria-label="Cart"
              >
                <ShoppingCart size={22} />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-gold text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {itemCount > 9 ? '9+' : itemCount}
                  </span>
                )}
              </button>

              {/* User menu */}
              <div className="relative">
                <button
                  id="user-menu-btn"
                  className="p-2 text-text-secondary hover:text-gold transition-colors flex items-center gap-1"
                  onClick={() => setShowUserMenu(v => !v)}
                  aria-label="Account"
                >
                  <User size={22} />
                  {user && <ChevronDown size={14} className={`transition-transform ${showUserMenu ? 'rotate-180' : ''}`} />}
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 top-full mt-1 w-52 bg-bg-elevated border border-border rounded-xl shadow-2xl z-50 overflow-hidden animate-fade-in">
                    {user ? (
                      <>
                        <div className="px-4 py-3 border-b border-border">
                          <div className="text-white font-semibold text-sm truncate">{user.name}</div>
                          <div className="text-text-muted text-xs truncate">{user.email}</div>
                        </div>
                        <Link to="/account" className="flex items-center gap-2 px-4 py-2.5 text-text-secondary hover:text-gold hover:bg-bg-card transition-colors text-sm" onClick={() => setShowUserMenu(false)}>
                          <User size={14} /> My Account
                        </Link>
                        {isAdmin && (
                          <Link to="/admin" className="flex items-center gap-2 px-4 py-2.5 text-gold hover:bg-bg-card transition-colors text-sm" onClick={() => setShowUserMenu(false)}>
                            <Zap size={14} /> Admin Dashboard
                          </Link>
                        )}
                        <Link to="/account" className="flex items-center gap-2 px-4 py-2.5 text-text-secondary hover:text-gold hover:bg-bg-card transition-colors text-sm" onClick={() => setShowUserMenu(false)}>
                          <ShoppingCart size={14} /> My Orders
                        </Link>
                        <Link to="/wishlist" className="flex items-center gap-2 px-4 py-2.5 text-text-secondary hover:text-gold hover:bg-bg-card transition-colors text-sm" onClick={() => setShowUserMenu(false)}>
                          <Heart size={14} /> Wishlist
                        </Link>
                        <div className="border-t border-border">
                          <button
                            className="w-full flex items-center gap-2 px-4 py-2.5 text-error hover:bg-bg-card transition-colors text-sm"
                            onClick={() => { logout(); setShowUserMenu(false) }}
                          >
                            <X size={14} /> Logout
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <Link to="/login" className="flex items-center gap-2 px-4 py-3 text-text-secondary hover:text-gold hover:bg-bg-card transition-colors text-sm font-semibold" onClick={() => setShowUserMenu(false)}>
                          <User size={14} /> Login
                        </Link>
                        <Link to="/register" className="flex items-center gap-2 px-4 py-3 text-text-secondary hover:text-gold hover:bg-bg-card transition-colors text-sm" onClick={() => setShowUserMenu(false)}>
                          Create Account
                        </Link>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <CategoryNav />
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Overlay when user menu open */}
      {showUserMenu && (
        <div className="fixed inset-0 z-40" onClick={() => setShowUserMenu(false)} />
      )}
    </>
  )
}
