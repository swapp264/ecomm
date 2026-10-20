import { useState, useEffect } from 'react'
import { Zap } from 'lucide-react'
import products from '../../data/products'
import ProductCard from '../product/ProductCard'

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({})
  useEffect(() => {
    const calc = () => {
      const diff = targetDate - Date.now()
      if (diff <= 0) return { hours: 0, minutes: 0, seconds: 0 }
      return {
        hours: Math.floor(diff / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      }
    }
    setTimeLeft(calc())
    const t = setInterval(() => setTimeLeft(calc()), 1000)
    return () => clearInterval(t)
  }, [targetDate])
  return timeLeft
}

export default function FlashSale() {
  const target = useState(() => Date.now() + 24 * 3600 * 1000)[0]
  const { hours = 0, minutes = 0, seconds = 0 } = useCountdown(target)
  const dealProducts = products.filter(p => p.discountPercent >= 25).slice(0, 4)

  const pad = n => String(n).padStart(2, '0')

  return (
    <section className="bg-bg-primary section-pad border-y border-border">
      <div className="section-wrapper">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Zap size={20} className="text-gold" />
              <span className="text-gold text-sm font-bold tracking-widest uppercase">Limited Time</span>
            </div>
            <h2 className="section-title text-white">⚡ FLASH DEALS</h2>
          </div>
          {/* Countdown */}
          <div className="flex items-center gap-3">
            <span className="text-text-secondary text-sm font-semibold">Ends in:</span>
            {[
              { label: 'HRS', val: pad(hours) },
              { label: 'MIN', val: pad(minutes) },
              { label: 'SEC', val: pad(seconds) },
            ].map(({ label, val }, i) => (
              <div key={label} className="flex items-center gap-1">
                <div className="bg-gold text-black font-display font-black text-2xl w-14 h-14 rounded-xl flex items-center justify-center">
                  {val}
                </div>
                {i < 2 && <span className="text-gold font-black text-xl">:</span>}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {dealProducts.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  )
}
