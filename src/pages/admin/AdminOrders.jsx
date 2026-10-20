import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, AlertTriangle, ShoppingCart, ArrowLeft, Eye } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

const MOCK_ORDERS = [
  { id: 'TGS001234', customer: 'Arjun Sharma', email: 'arjun@email.com', amount: 2999, status: 'delivered', date: '2024-11-20', items: 2 },
  { id: 'TGS001235', customer: 'Priya Patel', email: 'priya@email.com', amount: 5498, status: 'shipped', date: '2024-11-20', items: 3 },
  { id: 'TGS001236', customer: 'Rahul Verma', email: 'rahul@email.com', amount: 1299, status: 'processing', date: '2024-11-19', items: 1 },
  { id: 'TGS001237', customer: 'Sneha Kumar', email: 'sneha@email.com', amount: 8999, status: 'placed', date: '2024-11-19', items: 5 },
  { id: 'TGS001238', customer: 'Vikram Singh', email: 'vikram@email.com', amount: 2499, status: 'out_for_delivery', date: '2024-11-18', items: 2 },
  { id: 'TGS001239', customer: 'Ananya Mehta', email: 'ananya@email.com', amount: 3799, status: 'delivered', date: '2024-11-18', items: 2 },
  { id: 'TGS001240', customer: 'Ravi Kumar', email: 'ravi@email.com', amount: 6299, status: 'processing', date: '2024-11-17', items: 4 },
]

const STATUS_CONFIG = {
  placed: { label: 'Placed', cls: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
  processing: { cls: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30', label: 'Processing' },
  shipped: { label: 'Shipped', cls: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
  out_for_delivery: { label: 'Out for Delivery', cls: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
  delivered: { label: 'Delivered', cls: 'bg-success/20 text-success border-success/30' },
}

export default function AdminOrders() {
  const { user, isAdmin } = useAuth()
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  if (!user || !isAdmin) return (
    <div className="bg-bg-primary min-h-screen section-pad flex flex-col items-center justify-center gap-4 text-center">
      <AlertTriangle size={48} className="text-error" />
      <h2 className="text-white font-bold text-2xl">Admin Access Required</h2>
      <Link to="/login" className="btn-gold py-3 px-8">Login as Admin</Link>
    </div>
  )

  const localOrders = JSON.parse(localStorage.getItem('tgs_orders') || '[]').map(o => ({
    id: o.id,
    customer: o.form?.name || 'Customer',
    email: o.form?.email || '',
    amount: o.total,
    status: o.status || 'placed',
    date: o.date?.split('T')[0] || '',
    items: o.items?.length || 0,
  }))

  const allOrders = [...localOrders, ...MOCK_ORDERS]

  const filtered = allOrders.filter(o => {
    const matchSearch = o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.customer.toLowerCase().includes(search.toLowerCase()) ||
      o.email.toLowerCase().includes(search.toLowerCase())
    const matchStatus = statusFilter === 'all' || o.status === statusFilter
    return matchSearch && matchStatus
  })

  const totalRevenue = filtered.reduce((sum, o) => sum + o.amount, 0)

  return (
    <div className="bg-bg-primary min-h-screen section-pad">
      <div className="section-wrapper">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <Link to="/admin" className="p-2 text-text-muted hover:text-white rounded-lg hover:bg-bg-elevated transition-all">
              <ArrowLeft size={20} />
            </Link>
            <div>
              <h1 className="font-display font-black text-3xl text-white">ORDERS</h1>
              <p className="text-text-muted text-sm">{filtered.length} orders · ₹{totalRevenue.toLocaleString()} revenue</p>
            </div>
          </div>
          <button className="btn-gold-outline py-2.5 px-5 text-sm">
            Export CSV
          </button>
        </div>

        {/* Filters */}
        <div className="bg-bg-section border border-border rounded-2xl p-4 mb-6 flex flex-wrap gap-4">
          <div className="relative flex-1 min-w-48">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              placeholder="Search by order ID, customer..."
              className="input-dark pl-9 py-2.5 text-sm w-full"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {['all', 'placed', 'processing', 'shipped', 'out_for_delivery', 'delivered'].map(s => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-all capitalize ${statusFilter === s ? 'bg-gold text-black border-gold' : 'bg-bg-elevated border-border text-text-muted hover:border-gold/50 hover:text-white'}`}
              >
                {s === 'out_for_delivery' ? 'Out for Del.' : s}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="bg-bg-section border border-border rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-bg-elevated">
                  {['Order ID', 'Customer', 'Items', 'Amount', 'Status', 'Date', 'Action'].map(h => (
                    <th key={h} className="text-left px-5 py-4 text-text-muted text-xs font-bold uppercase tracking-wide whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map(order => {
                  const status = STATUS_CONFIG[order.status] || STATUS_CONFIG.placed
                  return (
                    <tr key={order.id} className="border-b border-border/50 last:border-0 hover:bg-bg-elevated/50 transition-colors">
                      <td className="px-5 py-4 text-gold font-mono font-bold text-xs whitespace-nowrap">{order.id}</td>
                      <td className="px-5 py-4">
                        <div className="text-white font-semibold text-sm">{order.customer}</div>
                        <div className="text-text-muted text-xs">{order.email}</div>
                      </td>
                      <td className="px-5 py-4 text-text-secondary">{order.items} item{order.items !== 1 ? 's' : ''}</td>
                      <td className="px-5 py-4 text-white font-bold whitespace-nowrap">₹{order.amount.toLocaleString()}</td>
                      <td className="px-5 py-4">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${status.cls}`}>{status.label}</span>
                      </td>
                      <td className="px-5 py-4 text-text-muted text-xs whitespace-nowrap">{order.date}</td>
                      <td className="px-5 py-4">
                        <Link to={`/order-confirmation/${order.id}`} className="p-2 text-text-muted hover:text-gold rounded-lg hover:bg-gold/10 transition-all inline-flex">
                          <Eye size={16} />
                        </Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          {filtered.length === 0 && (
            <div className="py-12 text-center text-text-muted">
              <ShoppingCart size={32} className="mx-auto mb-2 opacity-30" />
              <p>No orders match your filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
