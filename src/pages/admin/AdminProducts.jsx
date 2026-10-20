import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Search, Edit2, Trash2, AlertTriangle, Package, ArrowLeft } from 'lucide-react'
import products from '../../data/products'
import { useAuth } from '../../context/AuthContext'

export default function AdminProducts() {
  const { user, isAdmin } = useAuth()
  const [search, setSearch] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [localProducts, setLocalProducts] = useState(products)

  if (!user || !isAdmin) return (
    <div className="bg-bg-primary min-h-screen section-pad flex flex-col items-center justify-center gap-4 text-center">
      <AlertTriangle size={48} className="text-error" />
      <h2 className="text-white font-bold text-2xl">Admin Access Required</h2>
      <Link to="/login" className="btn-gold py-3 px-8">Login as Admin</Link>
    </div>
  )

  const categories = ['all', ...new Set(products.map(p => p.category))]

  const filtered = localProducts.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase())
    const matchCat = categoryFilter === 'all' || p.category === categoryFilter
    return matchSearch && matchCat
  })

  const handleDelete = (id) => {
    if (window.confirm('Delete this product?')) {
      setLocalProducts(ps => ps.filter(p => p.id !== id))
    }
  }

  const totalStock = (p) => p.variants.reduce((sum, v) => sum + v.stock, 0)

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
              <h1 className="font-display font-black text-3xl text-white">PRODUCTS</h1>
              <p className="text-text-muted text-sm">{filtered.length} of {localProducts.length} products</p>
            </div>
          </div>
          <button className="btn-gold py-2.5 px-5 text-sm">
            <Plus size={16} /> Add Product
          </button>
        </div>

        {/* Filters */}
        <div className="bg-bg-section border border-border rounded-2xl p-4 mb-6 flex flex-wrap gap-4">
          <div className="relative flex-1 min-w-48">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              placeholder="Search products..."
              className="input-dark pl-9 py-2.5 text-sm w-full"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-all capitalize ${categoryFilter === cat ? 'bg-gold text-black border-gold' : 'bg-bg-elevated border-border text-text-muted hover:border-gold/50 hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products table */}
        <div className="bg-bg-section border border-border rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-bg-elevated">
                  {['Product', 'Category', 'Brand', 'Price', 'Stock', 'Status', 'Actions'].map(h => (
                    <th key={h} className="text-left px-5 py-4 text-text-muted text-xs font-bold uppercase tracking-wide whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map(p => {
                  const stock = totalStock(p)
                  const stockStatus = stock === 0 ? { label: 'Out of Stock', cls: 'bg-error/20 text-error' }
                    : stock < 10 ? { label: 'Low Stock', cls: 'bg-warning/20 text-warning' }
                    : { label: 'In Stock', cls: 'bg-success/20 text-success' }
                  return (
                    <tr key={p.id} className="border-b border-border/50 last:border-0 hover:bg-bg-elevated/50 transition-colors">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <img src={p.images[0]} alt={p.name} className="w-12 h-12 rounded-xl object-cover bg-bg-elevated flex-shrink-0" />
                          <div>
                            <div className="text-white font-semibold text-sm line-clamp-1 max-w-[180px]">{p.name}</div>
                            <div className="text-text-muted text-xs">{p.variants.length} variant{p.variants.length !== 1 ? 's' : ''}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-text-secondary whitespace-nowrap">{p.category}</td>
                      <td className="px-5 py-4 text-text-secondary whitespace-nowrap">{p.brand}</td>
                      <td className="px-5 py-4">
                        <div className="text-white font-bold whitespace-nowrap">₹{p.variants[0]?.price.toLocaleString()}</div>
                        <div className="text-text-muted text-xs line-through">₹{p.variants[0]?.originalPrice.toLocaleString()}</div>
                      </td>
                      <td className="px-5 py-4 text-text-secondary font-bold">{stock}</td>
                      <td className="px-5 py-4">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${stockStatus.cls}`}>{stockStatus.label}</span>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex gap-2">
                          <Link to={`/product/${p.slug}`} className="p-2 text-text-muted hover:text-gold rounded-lg hover:bg-gold/10 transition-all" title="View">
                            <Package size={16} />
                          </Link>
                          <button className="p-2 text-text-muted hover:text-blue-400 rounded-lg hover:bg-blue-400/10 transition-all" title="Edit">
                            <Edit2 size={16} />
                          </button>
                          <button onClick={() => handleDelete(p.id)} className="p-2 text-text-muted hover:text-error rounded-lg hover:bg-error/10 transition-all" title="Delete">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          {filtered.length === 0 && (
            <div className="py-12 text-center text-text-muted">
              <Package size={32} className="mx-auto mb-2 opacity-30" />
              <p>No products match your filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
