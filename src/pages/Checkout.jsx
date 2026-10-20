import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPin, Phone, User, Mail, CreditCard, Truck, CheckCircle2, Lock } from 'lucide-react'
import { useCart } from '../context/CartContext'
import toast from 'react-hot-toast'

const STATES = ['Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu', 'Telangana', 'Gujarat', 'Rajasthan', 'West Bengal', 'Uttar Pradesh', 'Madhya Pradesh', 'Other']

export default function Checkout() {
  const { items, subtotal, discount, shipping, total, coupon, clearCart } = useCart()
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [placing, setPlacing] = useState(false)
  const [payMethod, setPayMethod] = useState('cod')
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    address: '', city: '', state: '', pincode: '',
  })

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const validateStep1 = () => {
    if (!form.name || !form.email || !form.phone) { toast.error('Fill all required fields'); return false }
    if (!/^\d{10}$/.test(form.phone)) { toast.error('Enter a valid 10-digit phone number'); return false }
    if (!form.email.includes('@')) { toast.error('Enter a valid email'); return false }
    return true
  }
  const validateStep2 = () => {
    if (!form.address || !form.city || !form.state || !form.pincode) { toast.error('Fill all address fields'); return false }
    if (!/^\d{6}$/.test(form.pincode)) { toast.error('Enter a valid 6-digit pincode'); return false }
    return true
  }

  const placeOrder = async () => {
    setPlacing(true)
    await new Promise(r => setTimeout(r, 1500))
    const orderId = 'TGS' + Math.floor(100000 + Math.random() * 900000)
    const order = {
      id: orderId, items, total, form, payMethod, coupon,
      status: 'placed', date: new Date().toISOString(),
    }
    const orders = JSON.parse(localStorage.getItem('tgs_orders') || '[]')
    orders.unshift(order)
    localStorage.setItem('tgs_orders', JSON.stringify(orders))
    clearCart()
    navigate(`/order-confirmation/${orderId}`)
  }

  const InputField = ({ label, id, type = 'text', ...props }) => (
    <div>
      <label htmlFor={id} className="block text-text-secondary text-sm font-semibold mb-1.5">{label}</label>
      <input id={id} type={type} className="input-dark py-3" {...props} />
    </div>
  )

  return (
    <div className="bg-bg-primary min-h-screen section-pad">
      <div className="section-wrapper">
        <h1 className="font-display font-black text-3xl text-white mb-8">CHECKOUT</h1>

        {/* Steps */}
        <div className="flex items-center gap-4 mb-8">
          {[{ n: 1, label: 'Contact' }, { n: 2, label: 'Address' }, { n: 3, label: 'Payment' }].map(({ n, label }) => (
            <div key={n} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${step >= n ? 'bg-gold text-black' : 'bg-bg-elevated border border-border text-text-muted'}`}>{step > n ? '✓' : n}</div>
              <span className={`text-sm font-semibold hidden sm:block ${step >= n ? 'text-white' : 'text-text-muted'}`}>{label}</span>
              {n < 3 && <div className={`w-8 sm:w-16 h-0.5 ${step > n ? 'bg-gold' : 'bg-border'}`} />}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <div className="bg-bg-section border border-border rounded-2xl p-6">
                <h2 className="text-white font-bold text-lg mb-5 flex items-center gap-2"><User size={18} className="text-gold" /> Contact Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField label="Full Name *" id="name" value={form.name} onChange={e => set('name', e.target.value)} placeholder="Arjun Sharma" />
                  <InputField label="Email Address *" id="email" type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="arjun@example.com" />
                  <InputField label="Phone Number *" id="phone" type="tel" value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="9876543210" />
                </div>
                <button onClick={() => validateStep1() && setStep(2)} className="btn-gold mt-6 py-3.5 px-8">Continue to Address →</button>
              </div>
            )}

            {step === 2 && (
              <div className="bg-bg-section border border-border rounded-2xl p-6">
                <h2 className="text-white font-bold text-lg mb-5 flex items-center gap-2"><MapPin size={18} className="text-gold" /> Shipping Address</h2>
                <div className="grid grid-cols-1 gap-4">
                  <InputField label="Street Address *" id="address" value={form.address} onChange={e => set('address', e.target.value)} placeholder="Flat no., Street, Area" />
                  <div className="grid grid-cols-2 gap-4">
                    <InputField label="City *" id="city" value={form.city} onChange={e => set('city', e.target.value)} placeholder="Mumbai" />
                    <div>
                      <label className="block text-text-secondary text-sm font-semibold mb-1.5">State *</label>
                      <select id="state" className="input-dark py-3" value={form.state} onChange={e => set('state', e.target.value)}>
                        <option value="">Select State</option>
                        {STATES.map(s => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                  <InputField label="Pincode *" id="pincode" value={form.pincode} onChange={e => set('pincode', e.target.value)} placeholder="400001" />
                </div>
                <div className="flex gap-3 mt-6">
                  <button onClick={() => setStep(1)} className="btn-dark py-3.5 px-6">← Back</button>
                  <button onClick={() => validateStep2() && setStep(3)} className="btn-gold py-3.5 px-8">Continue to Payment →</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="bg-bg-section border border-border rounded-2xl p-6">
                <h2 className="text-white font-bold text-lg mb-5 flex items-center gap-2"><CreditCard size={18} className="text-gold" /> Payment Method</h2>
                <div className="flex flex-col gap-3 mb-6">
                  {[
                    { id: 'cod', label: 'Cash on Delivery', icon: Truck, sub: 'Pay when your order arrives' },
                    { id: 'online', label: 'Pay Online (Razorpay)', icon: CreditCard, sub: 'UPI, Card, Net Banking — Test mode' },
                  ].map(({ id, label, icon: Icon, sub }) => (
                    <label
                      key={id}
                      className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${payMethod === id ? 'border-gold bg-gold/10' : 'border-border hover:border-gold/40'}`}
                    >
                      <input type="radio" name="pay" value={id} checked={payMethod === id} onChange={() => setPayMethod(id)} className="accent-gold" />
                      <Icon size={20} className={payMethod === id ? 'text-gold' : 'text-text-muted'} />
                      <div>
                        <div className={`font-semibold text-sm ${payMethod === id ? 'text-white' : 'text-text-secondary'}`}>{label}</div>
                        <div className="text-text-muted text-xs">{sub}</div>
                      </div>
                    </label>
                  ))}
                </div>

                {payMethod === 'online' && (
                  <div className="bg-gold/10 border border-gold/30 rounded-xl p-4 mb-5 text-sm text-gold">
                    💡 Razorpay is in test mode. Use test card: 4111 1111 1111 1111, CVV: 123, Expiry: any future date.
                  </div>
                )}

                <div className="flex gap-3">
                  <button onClick={() => setStep(2)} className="btn-dark py-3.5 px-6">← Back</button>
                  <button
                    onClick={placeOrder}
                    disabled={placing}
                    className="btn-gold py-3.5 px-8 flex-1 justify-center font-bold text-base"
                  >
                    <Lock size={16} />
                    {placing ? 'Placing Order...' : `Place Order — ₹${total.toLocaleString()}`}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order summary */}
          <div className="bg-bg-section border border-border rounded-2xl p-6 h-fit sticky top-24">
            <h2 className="text-white font-bold text-lg mb-4">Order Summary</h2>
            <div className="flex flex-col gap-3 mb-4 max-h-48 overflow-y-auto">
              {items.map(item => (
                <div key={item.key} className="flex gap-3 items-center">
                  <img src={item.product.image} alt={item.product.name} className="w-12 h-12 object-cover rounded-lg bg-bg-elevated flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-xs font-semibold truncate">{item.product.name}</div>
                    <div className="text-text-muted text-[11px]">Qty: {item.quantity}</div>
                  </div>
                  <div className="text-gold font-bold text-sm">₹{(item.variant.price * item.quantity).toLocaleString()}</div>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-4 flex flex-col gap-2 text-sm">
              <div className="flex justify-between text-text-secondary"><span>Subtotal</span><span>₹{subtotal.toLocaleString()}</span></div>
              {discount > 0 && <div className="flex justify-between text-success"><span>Discount</span><span>-₹{discount.toLocaleString()}</span></div>}
              <div className="flex justify-between text-text-secondary"><span>Shipping</span><span>{shipping === 0 ? <span className="text-success">FREE</span> : `₹${shipping}`}</span></div>
              <div className="flex justify-between text-white font-bold text-base pt-2 border-t border-border">
                <span>Total</span><span className="text-gold">₹{total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
