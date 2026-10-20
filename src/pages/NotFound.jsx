import { Link } from 'react-router-dom'
import { Home, ShoppingBag } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="bg-bg-primary min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
      {/* Animated barbell */}
      <div className="mb-8 animate-float">
        <svg width="120" height="40" viewBox="0 0 120 40">
          <rect x="50" y="17" width="20" height="6" rx="2" fill="#303030" />
          <rect x="18" y="12" width="32" height="16" rx="3" fill="#FFC107" />
          <rect x="70" y="12" width="32" height="16" rx="3" fill="#FFC107" />
          <rect x="8" y="8" width="12" height="24" rx="3" fill="#E5A900" />
          <rect x="100" y="8" width="12" height="24" rx="3" fill="#E5A900" />
        </svg>
      </div>

      <div className="font-display font-black text-[10rem] leading-none text-gold opacity-20 select-none">
        404
      </div>
      <div className="-mt-16">
        <h1 className="font-display font-black text-4xl text-white mb-3">PAGE NOT FOUND</h1>
        <p className="text-text-secondary text-base max-w-md mb-8">
          Looks like this page skipped leg day and ran away. Let's get you back on track!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn-gold py-3 px-8"><Home size={18} /> Go Home</Link>
          <Link to="/shop" className="btn-gold-outline py-3 px-8"><ShoppingBag size={18} /> Browse Supplements</Link>
        </div>
      </div>
    </div>
  )
}
