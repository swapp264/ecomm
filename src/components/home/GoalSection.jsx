import { Link } from 'react-router-dom'
import { fitnessGoals } from '../../data/products'

export default function GoalSection() {
  return (
    <section className="bg-bg-section section-pad">
      <div className="section-wrapper">
        <div className="text-center mb-10">
          <h2 className="section-title">SHOP BY FITNESS GOAL</h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-3 rounded" />
          <p className="section-subtitle mt-3">Find the right supplements for your specific fitness objectives</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {fitnessGoals.map(goal => (
            <Link
              key={goal.id}
              to={`/shop?goal=${goal.id}`}
              className="group flex flex-col items-center text-center gap-3 bg-bg-elevated border border-border rounded-2xl p-6 transition-all duration-300 hover:border-gold/50 hover:shadow-[0_0_20px_rgba(255,193,7,0.12)] hover:-translate-y-1"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-3xl transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${goal.color}20`, border: `2px solid ${goal.color}40` }}
              >
                {goal.icon}
              </div>
              <div>
                <div className="text-white font-bold text-sm group-hover:text-gold transition-colors">{goal.title}</div>
                <div className="text-text-muted text-xs mt-1">{goal.description}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
