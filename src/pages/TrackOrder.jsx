import { useState } from 'react'
import { Search, Package, CheckCircle2, Truck, MapPin, Clock } from 'lucide-react'
import toast from 'react-hot-toast'

const STATUS_STEPS = [
  { key: 'placed', label: 'Order Placed', icon: Package, desc: 'Your order has been placed successfully' },
  { key: 'processing', label: 'Processing', icon: Clock, desc: 'We are preparing your order' },
  { key: 'shipped', label: 'Shipped', icon: Truck, desc: 'Your order is on the way' },
  { key: 'out_for_delivery', label: 'Out for Delivery', icon: MapPin, desc: 'Your order is out for delivery' },
  { key: 'delivered', label: 'Delivered', icon: CheckCircle2, desc: 'Your order has been delivered' },
]

export default function TrackOrder() {
  const [orderId, setOrderId] = useState('')
  const [contact, setContact] = useState('')
  const [order, setOrder] = useState(null)
  const [notFound, setNotFound] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleTrack = async (e) => {
    e.preventDefault()
    if (!orderId.trim()) { toast.error('Enter your Order ID'); return }
    setLoading(true)
    await new Promise(r => setTimeout(r, 800))
    const orders = JSON.parse(localStorage.getItem('tgs_orders') || '[]')
    const found = orders.find(o => o.id === orderId.trim().toUpperCase())
    if (found) { setOrder(found); setNotFound(false) }
    else { setOrder(null); setNotFound(true) }
    setLoading(false)
  }

  const currentStepIdx = order ? STATUS_STEPS.findIndex(s => s.key === (order.status || 'placed')) : 0

  return (
    <div className="bg-bg-primary min-h-screen section-pad">
      <div className="section-wrapper max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="font-display font-black text-4xl text-white mb-2">TRACK YOUR ORDER</h1>
          <p className="text-text-secondary">Enter your order ID to get real-time updates</p>
        </div>

        {/* Search form */}
        <div className="bg-bg-section border border-border rounded-2xl p-6 mb-8">
          <form onSubmit={handleTrack} className="flex flex-col gap-4">
            <div>
              <label className="block text-text-secondary text-sm font-semibold mb-1.5">Order ID</label>
              <input
                type="text"
                placeholder="e.g. TGS123456"
                className="input-dark py-3 uppercase"
                value={orderId}
                onChange={e => setOrderId(e.target.value.toUpperCase())}
                id="track-order-id"
              />
            </div>
            <div>
              <label className="block text-text-secondary text-sm font-semibold mb-1.5">Email or Phone</label>
              <input
                type="text"
                placeholder="Email or phone used while ordering"
                className="input-dark py-3"
                value={contact}
                onChange={e => setContact(e.target.value)}
                id="track-contact"
              />
            </div>
            <button type="submit" disabled={loading} className="btn-gold py-3.5 justify-center">
              <Search size={18} />
              {loading ? 'Tracking...' : 'Track Order'}
            </button>
          </form>
          <div className="mt-4 text-text-muted text-xs text-center">
            💡 Test: Place an order first, then use the Order ID from the confirmation page
          </div>
        </div>

        {/* Not found */}
        {notFound && (
          <div className="bg-error/10 border border-error/30 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">🔍</div>
            <h3 className="text-white font-bold text-lg">Order Not Found</h3>
            <p className="text-text-secondary text-sm mt-1">Check your Order ID and try again</p>
          </div>
        )}

        {/* Order found */}
        {order && (
          <div className="bg-bg-section border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-text-muted text-xs">Order ID</div>
                <div className="text-gold font-bold font-mono text-lg">{order.id}</div>
              </div>
              <div className="text-right">
                <div className="text-text-muted text-xs">Order Date</div>
                <div className="text-white text-sm font-semibold">
                  {new Date(order.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                </div>
              </div>
            </div>

            {/* Status timeline */}
            <div className="flex flex-col gap-0 mb-8">
              {STATUS_STEPS.map(({ key, label, icon: Icon, desc }, i) => {
                const isDone = i <= currentStepIdx
                const isCurrent = i === currentStepIdx
                return (
                  <div key={key} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${isDone ? (isCurrent ? 'bg-gold border-gold text-black animate-pulse-gold' : 'bg-success border-success text-white') : 'bg-bg-elevated border-border text-text-muted'}`}>
                        {isDone && !isCurrent ? <CheckCircle2 size={20} /> : <Icon size={18} />}
                      </div>
                      {i < STATUS_STEPS.length - 1 && (
                        <div className={`w-0.5 flex-1 my-1 min-h-8 ${i < currentStepIdx ? 'bg-success' : 'bg-border'}`} />
                      )}
                    </div>
                    <div className={`pb-6 ${i === STATUS_STEPS.length - 1 ? '' : ''}`}>
                      <div className={`font-bold text-sm ${isCurrent ? 'text-gold' : isDone ? 'text-white' : 'text-text-muted'}`}>{label}</div>
                      <div className={`text-xs mt-0.5 ${isCurrent ? 'text-text-secondary' : 'text-text-muted'}`}>{desc}</div>
                      {isCurrent && <span className="inline-block mt-1 badge-gold text-[10px]">CURRENT STATUS</span>}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Order items */}
            <div className="border-t border-border pt-5">
              <div className="text-white font-bold text-sm mb-3">Items in this order</div>
              <div className="flex flex-col gap-2">
                {order.items.map(item => (
                  <div key={item.key} className="flex gap-3 items-center">
                    <img src={item.product.image} alt={item.product.name} className="w-10 h-10 rounded-lg object-cover bg-bg-elevated" />
                    <div className="flex-1">
                      <div className="text-white text-xs font-semibold">{item.product.name}</div>
                      <div className="text-text-muted text-[11px]">× {item.quantity}</div>
                    </div>
                    <div className="text-gold text-sm font-bold">₹{(item.variant.price * item.quantity).toLocaleString()}</div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-white font-bold mt-3 pt-3 border-t border-border">
                <span>Total</span>
                <span className="text-gold">₹{order.total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
