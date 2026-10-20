import { useParams, Link } from 'react-router-dom'
import { CheckCircle2, Package, Truck, MapPin, Copy } from 'lucide-react'
import toast from 'react-hot-toast'

const STATUS_STEPS = ['Order Placed', 'Processing', 'Shipped', 'Out for Delivery', 'Delivered']

export default function OrderConfirmation() {
  const { id } = useParams()
  const orders = JSON.parse(localStorage.getItem('tgs_orders') || '[]')
  const order = orders.find(o => o.id === id)

  const copyOrderId = () => { navigator.clipboard.writeText(id); toast.success('Order ID copied!') }

  if (!order) return (
    <div className="bg-bg-primary min-h-screen section-pad flex flex-col items-center justify-center gap-4 text-center">
      <div className="text-6xl">❌</div>
      <h2 className="text-white font-bold text-2xl">Order not found</h2>
      <Link to="/" className="btn-gold py-3 px-8">Go Home</Link>
    </div>
  )

  return (
    <div className="bg-bg-primary min-h-screen section-pad">
      <div className="section-wrapper max-w-3xl mx-auto">
        {/* Success header */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 rounded-full bg-success/20 border-2 border-success flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 size={40} className="text-success" />
          </div>
          <h1 className="font-display font-black text-4xl text-white mb-2">ORDER CONFIRMED! 🎉</h1>
          <p className="text-text-secondary">Thank you for your order! We'll deliver your supplements soon.</p>
          <div className="flex items-center justify-center gap-2 mt-4 bg-bg-elevated border border-border rounded-xl px-5 py-3 inline-flex mx-auto">
            <span className="text-text-muted text-sm">Order ID:</span>
            <span className="text-gold font-bold font-mono">{id}</span>
            <button onClick={copyOrderId} className="text-text-muted hover:text-gold transition-colors p-1">
              <Copy size={14} />
            </button>
          </div>
        </div>

        {/* Order status stepper */}
        <div className="bg-bg-section border border-border rounded-2xl p-6 mb-6">
          <h2 className="text-white font-bold mb-6 flex items-center gap-2"><Package size={18} className="text-gold" /> Order Status</h2>
          <div className="flex items-start gap-0 overflow-x-auto pb-2">
            {STATUS_STEPS.map((s, i) => (
              <div key={s} className="flex flex-col items-center flex-1 min-w-0">
                <div className="flex items-center w-full">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 z-10 ${i === 0 ? 'bg-gold text-black' : 'bg-bg-elevated border-2 border-border text-text-muted'}`}>
                    {i === 0 ? '✓' : i + 1}
                  </div>
                  {i < STATUS_STEPS.length - 1 && (
                    <div className={`flex-1 h-0.5 ${i === 0 ? 'bg-gold' : 'bg-border'}`} />
                  )}
                </div>
                <div className={`text-center mt-2 text-[11px] font-semibold ${i === 0 ? 'text-gold' : 'text-text-muted'}`}>{s}</div>
                {i === 0 && <div className="text-text-muted text-[10px] mt-0.5">{new Date().toLocaleDateString('en-IN')}</div>}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Items */}
          <div className="bg-bg-section border border-border rounded-2xl p-5">
            <h2 className="text-white font-bold mb-4">Items Ordered</h2>
            <div className="flex flex-col gap-3">
              {order.items.map(item => (
                <div key={item.key} className="flex gap-3 items-center">
                  <img src={item.product.image} alt={item.product.name} className="w-12 h-12 object-cover rounded-lg bg-bg-elevated" />
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-xs font-semibold truncate">{item.product.name}</div>
                    <div className="text-text-muted text-[11px]">{item.variant.flavor} / {item.variant.size} × {item.quantity}</div>
                  </div>
                  <div className="text-gold font-bold text-sm">₹{(item.variant.price * item.quantity).toLocaleString()}</div>
                </div>
              ))}
            </div>
            <div className="border-t border-border mt-4 pt-4">
              <div className="flex justify-between text-white font-bold">
                <span>Total Paid</span>
                <span className="text-gold">₹{order.total.toLocaleString()}</span>
              </div>
              <div className="text-text-muted text-xs mt-1">Payment: {order.payMethod === 'cod' ? 'Cash on Delivery' : 'Online (Razorpay)'}</div>
            </div>
          </div>

          {/* Delivery address */}
          <div className="bg-bg-section border border-border rounded-2xl p-5">
            <h2 className="text-white font-bold mb-4 flex items-center gap-2"><MapPin size={16} className="text-gold" /> Delivery Address</h2>
            <div className="text-text-secondary text-sm leading-relaxed">
              <div className="font-semibold text-white">{order.form.name}</div>
              <div>{order.form.address}</div>
              <div>{order.form.city}, {order.form.state} — {order.form.pincode}</div>
              <div className="mt-2">{order.form.phone}</div>
              <div>{order.form.email}</div>
            </div>
            <div className="flex items-center gap-2 mt-4 bg-gold/10 border border-gold/30 rounded-lg px-3 py-2">
              <Truck size={14} className="text-gold" />
              <span className="text-gold text-xs font-semibold">Expected delivery: 2-5 business days</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link to="/" className="btn-gold flex-1 justify-center py-3.5">Continue Shopping</Link>
          <Link to="/track-order" className="btn-dark flex-1 justify-center py-3.5">Track Order</Link>
          <Link to="/account" className="btn-dark flex-1 justify-center py-3.5">My Orders</Link>
        </div>
      </div>
    </div>
  )
}
