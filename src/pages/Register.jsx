import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  const { register } = useAuth()
  const navigate = useNavigate()

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.password) { toast.error('Fill all fields'); return }
    if (form.password.length < 6) { toast.error('Password must be at least 6 characters'); return }
    if (form.password !== form.confirm) { toast.error('Passwords do not match'); return }
    setLoading(true)
    try {
      await register(form.name, form.email, form.password)
      toast.success('Account created! Welcome aboard! 🎉')
      navigate('/')
    } catch {
      toast.error('Registration failed')
    }
    setLoading(false)
  }

  return (
    <div className="bg-bg-primary min-h-screen flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img src="/logo.png" alt="The Genuine Store" className="h-16 w-auto object-contain mx-auto mb-4" />
          <h1 className="font-display font-black text-3xl text-white">CREATE ACCOUNT</h1>
          <p className="text-text-secondary text-sm mt-1">Join The Genuine Community</p>
        </div>
        <div className="bg-bg-section border border-border rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {[
              { label: 'Full Name', id: 'reg-name', key: 'name', type: 'text', placeholder: 'Arjun Sharma' },
              { label: 'Email Address', id: 'reg-email', key: 'email', type: 'email', placeholder: 'arjun@email.com' },
            ].map(f => (
              <div key={f.key}>
                <label className="block text-text-secondary text-sm font-semibold mb-1.5">{f.label}</label>
                <input id={f.id} type={f.type} className="input-dark py-3" placeholder={f.placeholder} value={form[f.key]} onChange={e => set(f.key, e.target.value)} />
              </div>
            ))}
            <div>
              <label className="block text-text-secondary text-sm font-semibold mb-1.5">Password</label>
              <div className="relative">
                <input id="reg-password" type={showPw ? 'text' : 'password'} className="input-dark py-3 pr-12" placeholder="Min. 6 characters" value={form.password} onChange={e => set('password', e.target.value)} />
                <button type="button" onClick={() => setShowPw(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-white">
                  {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-text-secondary text-sm font-semibold mb-1.5">Confirm Password</label>
              <input id="reg-confirm" type="password" className="input-dark py-3" placeholder="Re-enter password" value={form.confirm} onChange={e => set('confirm', e.target.value)} />
            </div>
            <button type="submit" disabled={loading} className="btn-gold py-3.5 justify-center text-base font-bold mt-2">
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>
          <div className="text-center mt-5 text-text-muted text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-gold font-semibold hover:underline">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
