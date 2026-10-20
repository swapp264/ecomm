import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { User, Package, Heart, MapPin, LogOut, Settings } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useWishlist } from '../context/WishlistContext'
import ProductCard from '../components/product/ProductCard'

const STATUS_COLOR = { placed: 'text-gold', processing: 'text-blue-400', shipped: 'text-purple-400', out_for_delivery: 'text-orange-400', delivered: 'text-success' }
const STATUS_LABEL = { placed: 'Order Placed', processing: 'Processing', shipped: 'Shipped', out_for_delivery: 'Out for Delivery', delivered: 'Delivered' }

export default function Account() {
  const { user, logout } = useAuth()
  const { items: wishlistItems } = useWishlist()
  const navigate = useNavigate()
  const [tab, setTab] = useState('orders')

  const orders = JSON.parse(localStorage.getItem('tgs_orders') || '[]')

  if (!user) return (
    <div className="bg-bg-primary min-h-screen section-pad flex flex-col items-center justify-center gap-4 text-center">
      <User size={48} className="text-text-muted" />
      <h2 className="text-white font-bold text-2xl">Please login to view your account</h2>
      <div className="flex gap-3">
        <Link to="/login" className="btn-gold py-3 px-8">Login</Link>
        <Link to="/register" className="btn-dark py-3 px-8">Register</Link>
      </div>
    </div>
  )

  const handleLogout = () => { logout(); navigate('/') }

  const TABS = [
    { id: 'orders', label: 'My Orders', icon: Package },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'profile', label: 'Profile', icon: Settings },
  ]

  return (
    <div className="bg-bg-primary min-h-screen section-pad">
      <div className="section-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-bg-section border border-border rounded-2xl p-6 sticky top-24">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center text-black font-bold text-2xl mb-3">
                  {user.name[0].toUpperCase()}
                </div>
                <div className="text-white font-bold">{user.name}</div>
                <div className="text-text-muted text-xs mt-0.5">{user.email}</div>
                {user.role === 'admin' && <span className="badge-gold mt-2">ADMIN</span>}
              </div>
              <div className="flex flex-col gap-1">
                {TABS.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setTab(id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all text-left ${tab === id ? 'bg-gold/10 text-gold border border-gold/30' : 'text-text-secondary hover:text-white hover:bg-bg-elevated'}`}
                  >
                    <Icon size={16} /> {label}
                  </button>
                ))}
                {user.role === 'admin' && (
                  <Link to="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-gold hover:bg-gold/10 transition-all mt-1">
                    <Settings size={16} /> Admin Dashboard
                  </Link>
                )}
                <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-error hover:bg-error/10 transition-all mt-2 border-t border-border pt-4">
                  <LogOut size={16} /> Logout
                </button>
              </div>
            </div>
          </aside>

          {/* Main */}
          <div className="lg:col-span-3">
            {tab === 'orders' && (
              <div>
                <h2 className="text-white font-bold text-xl mb-5 flex items-center gap-2"><Package size={20} className="text-gold" /> My Orders ({orders.length})</h2>
                {orders.length === 0 ? (
                  <div className="bg-bg-section border border-border rounded-2xl p-12 text-center">
                    <Package size={40} className="text-text-muted mx-auto mb-3" />
                    <h3 className="text-white font-bold text-lg">No orders yet</h3>
                    <p className="text-text-secondary text-sm mt-1">Start shopping to see your orders here</p>
                    <Link to="/shop" className="btn-gold mt-4 inline-flex py-2.5 px-6">Browse Products</Link>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4">
                    {orders.map(order => (
                      <div key={order.id} className="bg-bg-section border border-border rounded-2xl p-5">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                          <div>
                            <div className="text-text-muted text-xs">Order ID</div>
                            <div className="text-gold font-bold font-mono">{order.id}</div>
                          </div>
                          <div className="text-right">
                            <div className={`font-bold text-sm ${STATUS_COLOR[order.status || 'placed']}`}>
                              {STATUS_LABEL[order.status || 'placed']}
                            </div>
                            <div className="text-text-muted text-xs">{new Date(order.date).toLocaleDateString('en-IN')}</div>
                          </div>
                        </div>
                        <div className="flex gap-2 mb-3 overflow-x-auto">
                          {order.items.slice(0, 3).map(item => (
                            <img key={item.key} src={item.product.image} alt={item.product.name} className="w-12 h-12 rounded-lg object-cover bg-bg-elevated flex-shrink-0" />
                          ))}
                          {order.items.length > 3 && (
                            <div className="w-12 h-12 rounded-lg bg-bg-elevated flex items-center justify-center text-text-muted text-xs font-bold flex-shrink-0">
                              +{order.items.length - 3}
                            </div>
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gold font-bold">₹{order.total.toLocaleString()}</span>
                          <div className="flex gap-2">
                            <Link to={`/order-confirmation/${order.id}`} className="btn-dark py-1.5 px-4 text-xs">View Details</Link>
                            <Link to="/track-order" className="btn-gold-outline py-1.5 px-4 text-xs">Track</Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {tab === 'wishlist' && (
              <div>
                <h2 className="text-white font-bold text-xl mb-5 flex items-center gap-2"><Heart size={20} className="text-gold" /> Wishlist ({wishlistItems.length})</h2>
                {wishlistItems.length === 0 ? (
                  <div className="bg-bg-section border border-border rounded-2xl p-12 text-center">
                    <Heart size={40} className="text-text-muted mx-auto mb-3" />
                    <h3 className="text-white font-bold text-lg">Wishlist is empty</h3>
                    <p className="text-text-secondary text-sm mt-1">Save products you love by clicking the heart icon</p>
                    <Link to="/shop" className="btn-gold mt-4 inline-flex py-2.5 px-6">Browse Products</Link>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {wishlistItems.map(p => <ProductCard key={p.id} product={p} />)}
                  </div>
                )}
              </div>
            )}

            {tab === 'profile' && (
              <div>
                <h2 className="text-white font-bold text-xl mb-5">Profile Settings</h2>
                <div className="bg-bg-section border border-border rounded-2xl p-6 flex flex-col gap-4">
                  {[{ label: 'Full Name', val: user.name }, { label: 'Email', val: user.email }, { label: 'Role', val: user.role }].map(({ label, val }) => (
                    <div key={label} className="flex justify-between items-center py-3 border-b border-border/50 last:border-0">
                      <span className="text-text-secondary text-sm">{label}</span>
                      <span className="text-white font-semibold text-sm capitalize">{val}</span>
                    </div>
                  ))}
                  <div className="mt-2">
                    <button className="btn-gold py-3 px-6 text-sm">Edit Profile</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
