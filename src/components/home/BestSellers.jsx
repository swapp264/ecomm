import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { bestSellers } from '../../data/products';
import products from '../../data/products';
import ProductCard from '../product/ProductCard';

const TABS = [
  { id: 'all', label: 'All' },
  { id: 'Whey Protein', label: 'Whey Protein' },
  { id: 'Creatine', label: 'Creatine' },
  { id: 'Pre-Workout', label: 'Pre-Workout' },
];

export default function BestSellers() {
  const [activeTab, setActiveTab] = useState('all');

  const displayProducts =
    activeTab === 'all'
      ? bestSellers
      : products.filter(
          (p) =>
            p.category === activeTab &&
            (p.isBestSeller || p.rating >= 4.4)
        );

  // Ensure we always have products to show
  const shown =
    displayProducts.length > 0
      ? displayProducts
      : products.filter((p) => p.category === activeTab).slice(0, 4);

  return (
    <section id="best-sellers" className="bg-[#0A0A0A] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <p className="text-[#FFC107] text-xs font-bold tracking-widest uppercase mb-2">
              Top Rated
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
              BEST SELLERS
            </h2>
          </div>
          <Link
            to="/shop?sort=bestseller"
            className="inline-flex items-center gap-2 text-[#FFC107] hover:text-white text-sm font-bold tracking-wide transition-colors group shrink-0"
          >
            View All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`shrink-0 px-5 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-200 border ${
                activeTab === tab.id
                  ? 'bg-[#FFC107] text-black border-[#FFC107] shadow-lg shadow-[#FFC107]/20'
                  : 'bg-[#1A1A1A] text-[#B3B3B3] border-[#2a2a2a] hover:border-[#FFC107]/50 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products — Horizontal scroll on mobile, grid on md+ */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none -mx-4 px-4">
          {shown.map((product) => (
            <div key={product.id} className="shrink-0 w-56 snap-start">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5">
          {shown.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {shown.length === 0 && (
          <div className="text-center py-16 text-[#B3B3B3]">
            <p className="text-4xl mb-3">😔</p>
            <p className="font-medium">No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
