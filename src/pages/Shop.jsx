import { useState, useEffect, useMemo } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, LayoutGrid, List, X, ChevronDown, ChevronUp } from 'lucide-react'
import products, { categories } from '../data/products'
import ProductCard from '../components/product/ProductCard'

const BRANDS = ['Optimum Nutrition', 'MuscleBlaze', 'MyProtein', 'Dymatize', 'BSN', 'MuscleTech', 'Now Foods', 'AS-IT-IS', 'Nakpro', 'Health Veda Organics']
const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price_asc', label: 'Price: Low to High' },
  { value: 'price_desc', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'bestseller', label: 'Best Sellers' },
]
const PER_PAGE = 12

function FilterSection({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-border py-4">
      <button
        className="flex items-center justify-between w-full text-white font-bold text-sm mb-3"
        onClick={() => setOpen(v => !v)}
      >
        {title}
        {open ? <ChevronUp size={16} className="text-text-muted" /> : <ChevronDown size={16} className="text-text-muted" />}
      </button>
      {open && children}
    </div>
  )
}

function FilterPanel({ filters, setFilters, onClose }) {
  return (
    <div>
      {onClose && (
        <div className="flex items-center justify-between p-4 border-b border-border">
          <span className="text-white font-bold">Filters</span>
          <button onClick={onClose} className="p-1 text-text-muted hover:text-white"><X size={20} /></button>
        </div>
      )}
      <div className="p-4">
        {/* Category */}
        <FilterSection title="Category">
          <div className="flex flex-col gap-2">
            {categories.map(cat => (
              <label key={cat.id} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(cat.name)}
                  onChange={() => {
                    setFilters(f => ({
                      ...f,
                      categories: f.categories.includes(cat.name)
                        ? f.categories.filter(c => c !== cat.name)
                        : [...f.categories, cat.name],
                    }))
                  }}
                  className="accent-gold w-4 h-4 rounded"
                />
                <span className="text-text-secondary text-sm group-hover:text-gold transition-colors">{cat.name}</span>
                <span className="ml-auto text-text-muted text-xs">{cat.productCount}</span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Brand */}
        <FilterSection title="Brand">
          <div className="flex flex-col gap-2">
            {BRANDS.map(brand => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.brands.includes(brand)}
                  onChange={() => {
                    setFilters(f => ({
                      ...f,
                      brands: f.brands.includes(brand)
                        ? f.brands.filter(b => b !== brand)
                        : [...f.brands, brand],
                    }))
                  }}
                  className="accent-gold w-4 h-4 rounded"
                />
                <span className="text-text-secondary text-sm group-hover:text-gold transition-colors">{brand}</span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Price */}
        <FilterSection title="Price Range">
          <div className="flex items-center gap-2 mb-3">
            <input
              type="number"
              value={filters.priceMin}
              onChange={e => setFilters(f => ({ ...f, priceMin: Number(e.target.value) }))}
              className="input-dark py-2 px-3 text-sm w-24"
              placeholder="Min"
            />
            <span className="text-text-muted">—</span>
            <input
              type="number"
              value={filters.priceMax}
              onChange={e => setFilters(f => ({ ...f, priceMax: Number(e.target.value) }))}
              className="input-dark py-2 px-3 text-sm w-24"
              placeholder="Max"
            />
          </div>
          <div className="text-text-muted text-xs">₹{filters.priceMin.toLocaleString()} – ₹{filters.priceMax.toLocaleString()}</div>
        </FilterSection>

        {/* Rating */}
        <FilterSection title="Minimum Rating">
          <div className="flex flex-col gap-2">
            {[4.5, 4, 3.5, 0].map(r => (
              <label key={r} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="rating"
                  checked={filters.minRating === r}
                  onChange={() => setFilters(f => ({ ...f, minRating: r }))}
                  className="accent-gold"
                />
                <span className="text-text-secondary text-sm group-hover:text-gold transition-colors">
                  {r > 0 ? `${r}★ & above` : 'All ratings'}
                </span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* In Stock */}
        <FilterSection title="Availability" defaultOpen={false}>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              checked={filters.inStock}
              onChange={() => setFilters(f => ({ ...f, inStock: !f.inStock }))}
              className="accent-gold w-4 h-4 rounded"
            />
            <span className="text-text-secondary text-sm group-hover:text-gold transition-colors">In Stock Only</span>
          </label>
        </FilterSection>

        {/* Clear all */}
        <button
          onClick={() => setFilters({ categories: [], brands: [], priceMin: 0, priceMax: 15000, minRating: 0, inStock: false })}
          className="w-full mt-4 btn-dark py-2.5 text-sm"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  )
}

function SkeletonCard() {
  return (
    <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
      <div className="skeleton aspect-square w-full" />
      <div className="p-3 flex flex-col gap-2">
        <div className="skeleton h-3 w-2/3 rounded" />
        <div className="skeleton h-4 w-full rounded" />
        <div className="skeleton h-3 w-1/2 rounded" />
        <div className="skeleton h-8 w-full rounded" />
      </div>
    </div>
  )
}

export default function Shop() {
  const { category } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const [view, setView] = useState('grid')
  const [sort, setSort] = useState(searchParams.get('sort') || 'featured')
  const [page, setPage] = useState(1)
  const [filterOpen, setFilterOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    categories: category ? [categories.find(c => c.slug === category)?.name].filter(Boolean) : [],
    brands: [],
    priceMin: 0,
    priceMax: 15000,
    minRating: 0,
    inStock: false,
  })

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (category) {
      const cat = categories.find(c => c.slug === category)
      if (cat) setFilters(f => ({ ...f, categories: [cat.name] }))
    }
  }, [category])

  const filtered = useMemo(() => {
    let arr = [...products]
    if (filters.categories.length > 0) arr = arr.filter(p => filters.categories.includes(p.category))
    if (filters.brands.length > 0) arr = arr.filter(p => filters.brands.includes(p.brand))
    arr = arr.filter(p => {
      const price = p.variants[0]?.price || 0
      return price >= filters.priceMin && price <= filters.priceMax
    })
    if (filters.minRating > 0) arr = arr.filter(p => p.rating >= filters.minRating)
    if (filters.inStock) arr = arr.filter(p => p.variants.some(v => v.stock > 0))

    // Sort
    if (sort === 'price_asc') arr.sort((a, b) => (a.variants[0]?.price || 0) - (b.variants[0]?.price || 0))
    else if (sort === 'price_desc') arr.sort((a, b) => (b.variants[0]?.price || 0) - (a.variants[0]?.price || 0))
    else if (sort === 'rating') arr.sort((a, b) => b.rating - a.rating)
    else if (sort === 'newest') arr.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
    else if (sort === 'bestseller') arr.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0))
    else arr.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0))

    return arr
  }, [filters, sort])

  const totalPages = Math.ceil(filtered.length / PER_PAGE)
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  const activeFilterCount = filters.categories.length + filters.brands.length + (filters.inStock ? 1 : 0) + (filters.minRating > 0 ? 1 : 0)

  return (
    <div className="bg-bg-primary min-h-screen">
      {/* Page header */}
      <div className="bg-bg-section border-b border-border py-8">
        <div className="section-wrapper">
          <h1 className="font-display font-black text-3xl text-white">
            {category ? categories.find(c => c.slug === category)?.name || 'Shop' : 'ALL SUPPLEMENTS'}
          </h1>
          <p className="text-text-muted text-sm mt-1">{filtered.length} products</p>
        </div>
      </div>

      <div className="section-wrapper py-8">
        <div className="flex gap-8">
          {/* Sidebar - desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-bg-section border border-border rounded-xl sticky top-24">
              <div className="px-4 py-3 border-b border-border">
                <div className="flex items-center gap-2 text-white font-bold">
                  <SlidersHorizontal size={16} className="text-gold" />
                  Filters
                  {activeFilterCount > 0 && <span className="badge-gold ml-auto">{activeFilterCount}</span>}
                </div>
              </div>
              <FilterPanel filters={filters} setFilters={setFilters} />
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Sort & view bar */}
            <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
              <div className="flex items-center gap-3">
                {/* Mobile filter btn */}
                <button
                  className="lg:hidden flex items-center gap-2 btn-dark py-2 px-4 text-sm relative"
                  onClick={() => setFilterOpen(true)}
                >
                  <SlidersHorizontal size={15} /> Filters
                  {activeFilterCount > 0 && <span className="badge-gold">{activeFilterCount}</span>}
                </button>
                <span className="text-text-muted text-sm">{filtered.length} results</span>
              </div>
              <div className="flex items-center gap-3">
                <select
                  value={sort}
                  onChange={e => { setSort(e.target.value); setPage(1) }}
                  className="input-dark py-2 text-sm pr-8"
                  id="shop-sort-select"
                >
                  {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
                <div className="flex border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setView('grid')}
                    className={`p-2.5 transition-colors ${view === 'grid' ? 'bg-gold text-black' : 'text-text-muted hover:text-white'}`}
                  >
                    <LayoutGrid size={16} />
                  </button>
                  <button
                    onClick={() => setView('list')}
                    className={`p-2.5 transition-colors ${view === 'list' ? 'bg-gold text-black' : 'text-text-muted hover:text-white'}`}
                  >
                    <List size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Products */}
            {loading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {[...Array(8)].map((_, i) => <SkeletonCard key={i} />)}
              </div>
            ) : paginated.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
                <div className="text-6xl">🔍</div>
                <h3 className="text-white font-bold text-xl">No products found</h3>
                <p className="text-text-secondary">Try adjusting your filters</p>
                <button
                  onClick={() => setFilters({ categories: [], brands: [], priceMin: 0, priceMax: 15000, minRating: 0, inStock: false })}
                  className="btn-gold py-2.5 px-6"
                >
                  Clear Filters
                </button>
              </div>
            ) : view === 'grid' ? (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {paginated.map(p => <ProductCard key={p.id} product={p} />)}
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {paginated.map(p => <ProductCard key={p.id} product={p} view="list" />)}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-10">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="btn-dark py-2 px-4 text-sm disabled:opacity-40"
                >
                  Previous
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={`w-9 h-9 rounded-lg text-sm font-bold transition-all ${page === i + 1 ? 'bg-gold text-black' : 'bg-bg-elevated border border-border text-text-secondary hover:border-gold hover:text-gold'}`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="btn-dark py-2 px-4 text-sm disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setFilterOpen(false)} />
          <div className="filter-drawer open max-h-[85vh]">
            <FilterPanel filters={filters} setFilters={setFilters} onClose={() => setFilterOpen(false)} />
            <div className="p-4 border-t border-border">
              <button onClick={() => setFilterOpen(false)} className="btn-gold w-full justify-center py-3">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
