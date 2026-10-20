import { Star, CheckCircle2 } from 'lucide-react'
import { mockReviews } from '../../data/products'

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <Star key={i} size={14} className={i <= rating ? 'text-gold fill-gold' : 'text-border-light'} />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-bg-section section-pad">
      <div className="section-wrapper">
        <div className="text-center mb-10">
          <h2 className="section-title">WHAT OUR CUSTOMERS SAY</h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-3 rounded" />
          <p className="section-subtitle mt-3">Real reviews from verified buyers</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {mockReviews.map(review => (
            <div key={review.id} className="bg-bg-elevated border border-border rounded-2xl p-6 flex flex-col gap-3 hover:border-gold/30 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{review.user}</div>
                    <div className="text-text-muted text-[11px]">{review.date}</div>
                  </div>
                </div>
                {review.verified && (
                  <div className="flex items-center gap-1 text-success text-[11px] font-semibold">
                    <CheckCircle2 size={12} /> Verified
                  </div>
                )}
              </div>
              <StarRating rating={review.rating} />
              <div>
                <div className="text-white font-bold text-sm mb-1">"{review.title}"</div>
                <p className="text-text-secondary text-sm leading-relaxed">{review.body}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Overall rating summary */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 bg-bg-elevated border border-border rounded-2xl p-6">
          <div className="text-center">
            <div className="font-display font-black text-6xl text-gold">4.7</div>
            <div className="flex justify-center gap-0.5 my-1">
              {[1,2,3,4,5].map(i => <Star key={i} size={18} className="text-gold fill-gold" />)}
            </div>
            <div className="text-text-muted text-sm">Average Rating</div>
          </div>
          <div className="h-12 w-px bg-border hidden sm:block" />
          <div className="text-center sm:text-left">
            <div className="text-white font-bold text-2xl">12,000+</div>
            <div className="text-text-muted text-sm">Verified Reviews</div>
          </div>
          <div className="h-12 w-px bg-border hidden sm:block" />
          <div className="text-center sm:text-left">
            <div className="text-white font-bold text-2xl">98%</div>
            <div className="text-text-muted text-sm">Would Recommend</div>
          </div>
        </div>
      </div>
    </section>
  )
}
