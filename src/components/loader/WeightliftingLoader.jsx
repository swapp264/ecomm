import { useEffect, useState } from 'react'
import { useLoader } from '../../context/LoaderContext'
import animationGif from '../../assets/animation.gif'

export default function WeightliftingLoader() {
  const { isLoading, hideLoader } = useLoader()
  const [fading, setFading] = useState(false)

  useEffect(() => {
    if (isLoading) {
      setFading(false)
      const timer = setTimeout(() => {
        setFading(true)
        setTimeout(hideLoader, 700)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isLoading, hideLoader])

  if (!isLoading) return null

  return (
    <div
      className="loader-overlay"
      style={{ opacity: fading ? 0 : 1, transition: 'opacity 0.7s ease' }}
    >
      {/* Animation */}
      <div className="flex flex-col items-center gap-6">
        <img
          src={animationGif}
          alt="Loading animation"
          className="w-64 h-64 object-contain"
        />

        {/* Loading text */}
        <div className="text-center">
          <h1
            className="font-display text-3xl font-black tracking-widest text-white"
            style={{ letterSpacing: '0.15em' }}
          >
            THE GENUINE STORE
          </h1>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="text-gold font-display text-base tracking-widest uppercase">
              Lifting Your Performance
            </div>
            <span className="flex gap-1">
              {[0, 1, 2].map(i => (
                <span
                  key={i}
                  className="block w-1.5 h-1.5 rounded-full bg-gold"
                  style={{ animation: `bounce 1s ease-in-out infinite ${i * 0.2}s` }}
                />
              ))}
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-bg-elevated rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-gold to-gold-dark rounded-full"
            style={{ animation: 'progressFill 3s ease-in-out forwards' }}
          />
        </div>

        <style>{`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); opacity: 1; }
            50% { transform: translateY(-6px); opacity: 0.5; }
          }
          @keyframes progressFill {
            0% { width: 0%; }
            60% { width: 75%; }
            90% { width: 90%; }
            100% { width: 100%; }
          }
        `}</style>
      </div>

      {/* Bottom brand tagline */}
      <p className="text-text-muted text-sm tracking-widest uppercase">
        PURE QUALITY • UNCOMPROMISED
      </p>
    </div>
  )
}
