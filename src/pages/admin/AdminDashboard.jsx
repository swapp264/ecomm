import { Link, useNavigate } from 'react-router-dom'
import { BarChart3, Package, ShoppingCart, AlertTriangle, TrendingUp, Users, Zap } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import products from '../../data/products'

const METRICS = [
  { label: 'Total Revenue', value: '₹8,42,650', icon: TrendingUp, color: 'text-gold', bg: 'bg-gold/10', change: '+12% this month' },
  { label: 'Total Orders', value: '1,284', icon: ShoppingCart, color: 'text-blue-400', bg: 'bg-blue-400/10', change: '+8% this month' },
  { label: 'Products', value: products.length.toString(), icon: Package, color: 'text-purple-400', bg: 'bg-purple-400/10', change: `${products.filter(p => p.variants.some(v => v.stock < 5)).length} low stock` },
  { label: 'Customers', value: '3,421', icon: Users, color: 'text-success', bg: 'bg-success/10', change: '+24 new today' },
]

const RECENT_ORDERS = [
  { id: 'TGS001234', customer: 'Arjun Sharma', amount: 2999, status: 'delivered', date: '2024-11-20' },
  { id: 'TGS001235', customer: 'Priya Patel', amount: 5498, status: 'shipped', date: '2024-11-20' },
  { id: 'TGS001236', customer: 'Rahul Verma', amount: 1299, status: 'processing', date: '2024-11-19' },
  { id: 'TGS001237', customer: 'Sneha Kumar', amount: 8999, status: 'placed', date: '2024-11-19' },
  { id: 'TGS001238', customer: 'Vikram Singh', amount: 2499, status: 'out_for_delivery', date: '2024-11-18' },
]

const STATUS_BADGE = {
  placed: 'bg-blue-500/20 text-blue-400',
  processing: 'bg-yellow-500/20 text-yellow-400',
  shipped: 'bg-purple-500/20 text-purple-400',
  out_for_delivery: 'bg-orange-500/20 text-orange-400',
  delivered: 'bg-success/20 text-success',
}

export default function AdminDashboard() {
  const { user, isAdmin } = useAuth()
  const navigate = useNavigate()

  if (!user || !isAdmin) return (
    <div className="bg-bg-primary min-h-screen section-pad flex flex-col items-center justify-center gap-4 text-center">
      <AlertTriangle size={48} className="text-error" />
      <h2 className="text-white font-bold text-2xl">Access Denied</h2>
      <p className="text-text-secondary">Admin access only. Login as admin@genuinestore.com</p>
      <Link to="/login" className="btn-gold py-3 px-8">Login as Admin</Link>
    </div>
  )

  const lowStockProducts = products.filter(p => p.variants.some(v => v.stock < 10))
  const localOrders = JSON.parse(localStorage.getItem('tgs_orders') || '[]')
  const allOrders = [...localOrders.map(o => ({ id: o.id, customer: o.form?.name || 'Customer', amount: o.total, status: o.status || 'placed', date: o.date?.split('T')[0] })), ...RECENT_ORDERS].slice(0, 8)

  return (
    <div className="bg-bg-primary min-h-screen section-pad">
      <div className="section-wrapper">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Zap size={16} className="text-gold" />
              <span className="text-gold text-sm font-bold tracking-widest uppercase">Admin Panel</span>
            </div>
            <h1 className="font-display font-black text-3xl text-white">DASHBOARD</h1>
            <p className="text-text-muted text-sm mt-1">Welcome back, {user.name}</p>
          </div>
          <div className="flex gap-3">
            <Link to="/admin/products" className="btn-gold py-2.5 px-5 text-sm"><Package size={15} /> Manage Products</Link>
            <Link to="/admin/orders" className="btn-dark py-2.5 px-5 text-sm"><ShoppingCart size={15} /> View Orders</Link>
          </div>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {METRICS.map(({ label, value, icon: Icon, color, bg, change }) => (
            <div key={label} className="bg-bg-section border border-border rounded-2xl p-5 hover:border-gold/30 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-text-secondary text-sm font-semibold">{label}</span>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${bg}`}>
                  <Icon size={20} className={color} />
                </div>
              </div>
              <div className={`font-display font-black text-3xl ${color}`}>{value}</div>
              <div className="text-text-muted text-xs mt-1">{change}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent orders */}
          <div className="lg:col-span-2 bg-bg-section border border-border rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between p-5 border-b border-border">
              <h2 className="text-white font-bold flex items-center gap-2"><ShoppingCart size={16} className="text-gold" /> Recent Orders</h2>
              <Link to="/admin/orders" className="text-gold text-sm hover:underline">View All →</Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    {['Order ID', 'Customer', 'Amount', 'Status', 'Date'].map(h => (
                      <th key={h} className="text-left px-5 py-3 text-text-muted text-xs font-bold uppercase tracking-wide">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {allOrders.map(order => (
                    <tr key={order.id} className="border-b border-border/50 last:border-0 hover:bg-bg-elevated transition-colors">
                      <td className="px-5 py-3 text-gold font-mono font-bold text-xs">{order.id}</td>
                      <td className="px-5 py-3 text-text-secondary">{order.customer}</td>
                      <td className="px-5 py-3 text-white font-bold">₹{order.amount.toLocaleString()}</td>
                      <td className="px-5 py-3">
                        <span className={`text-xs font-bold px-2 py-1 rounded capitalize ${STATUS_BADGE[order.status] || STATUS_BADGE.placed}`}>
                          {order.status?.replace(/_/g, ' ') || 'Placed'}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-text-muted text-xs">{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Low stock */}
          <div className="bg-bg-section border border-border rounded-2xl overflow-hidden">
            <div className="p-5 border-b border-border">
              <h2 className="text-white font-bold flex items-center gap-2"><AlertTriangle size={16} className="text-error" /> Low Stock Alert</h2>
            </div>
            <div className="flex flex-col divide-y divide-border">
              {lowStockProducts.slice(0, 6).map(p => {
                const lowVar = p.variants.find(v => v.stock < 10)
                return (
                  <div key={p.id} className="flex items-center gap-3 px-5 py-3 hover:bg-bg-elevated transition-colors">
                    <img src={p.images[0]} alt={p.name} className="w-10 h-10 rounded-lg object-cover bg-bg-elevated flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-xs font-semibold truncate">{p.name}</div>
                      <div className="text-text-muted text-[11px]">{p.brand}</div>
                    </div>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded ${lowVar?.stock === 0 ? 'bg-error/20 text-error' : 'bg-warning/20 text-warning'}`}>
                      {lowVar?.stock} left
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
