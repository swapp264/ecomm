import { useState } from 'react'
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react'
import toast from 'react-hot-toast'

const PERKS = [
  'Exclusive member-only discounts',
  'Weekly nutrition tips & workout guides',
  'Early access to new product launches',
]

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) { toast.error('Please enter a valid email'); return }
    setLoading(true)
    await new Promise(r => setTimeout(r, 800))
    setDone(true)
    setLoading(false)
    toast.success('Subscribed! Welcome to The Genuine Community 🎉')
  }

  return (
    <section className="bg-bg-section section-pad border-t border-border">
      <div className="section-wrapper">
        <div className="bg-gradient-to-br from-bg-elevated to-bg-card border border-gold/20 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-5">
              <Mail size={14} className="text-gold" />
              <span className="text-gold text-sm font-bold tracking-wide">JOIN OUR COMMUNITY</span>
            </div>

            <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-3 tracking-wide">
              JOIN THE GENUINE<br />
              <span className="text-gold">COMMUNITY</span>
            </h2>
            <p className="text-text-secondary text-base max-w-md mx-auto mb-8">
              Get exclusive deals, nutrition tips, and early access to new products delivered to your inbox.
            </p>

            {!done ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="input-dark flex-1 py-3.5"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  id="newsletter-email"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold py-3.5 px-6 whitespace-nowrap"
                >
                  {loading ? 'Joining...' : 'Subscribe'} {!loading && <ArrowRight size={16} />}
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-3 bg-success/10 border border-success/30 rounded-xl px-6 py-4 max-w-md mx-auto mb-8">
                <CheckCircle2 size={20} className="text-success" />
                <span className="text-success font-semibold">You're subscribed! Welcome aboard 🎉</span>
              </div>
            )}

            {/* Perks */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-text-secondary">
              {PERKS.map(perk => (
                <div key={perk} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-gold flex-shrink-0" />
                  {perk}
                </div>
              ))}
            </div>

            <p className="text-text-muted text-xs mt-4">No spam, ever. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
