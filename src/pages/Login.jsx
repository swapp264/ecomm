import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Zap } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !password) { toast.error('Fill all fields'); return }
    setLoading(true)
    try {
      await login(email, password)
      toast.success('Welcome back!')
      navigate('/')
    } catch {
      toast.error('Invalid credentials')
    }
    setLoading(false)
  }

  return (
    <div className="bg-bg-primary min-h-screen flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <img src="/logo.png" alt="The Genuine Store" className="h-16 w-auto object-contain mx-auto mb-4" />
          <h1 className="font-display font-black text-3xl text-white">WELCOME BACK</h1>
          <p className="text-text-secondary text-sm mt-1">Sign in to your account</p>
        </div>

        <div className="bg-bg-section border border-border rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-text-secondary text-sm font-semibold mb-1.5">Email Address</label>
              <input
                type="email"
                id="login-email"
                className="input-dark py-3"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-text-secondary text-sm font-semibold mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPw ? 'text' : 'password'}
                  id="login-password"
                  className="input-dark py-3 pr-12"
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPw(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-white transition-colors"
                >
                  {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div className="flex justify-end">
              <button type="button" className="text-gold text-sm hover:underline">Forgot password?</button>
            </div>
            <button type="submit" disabled={loading} className="btn-gold py-3.5 justify-center text-base font-bold mt-2">
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {/* Demo creds */}
          <div className="mt-5 p-4 bg-bg-elevated border border-border rounded-xl text-xs text-text-muted">
            <div className="font-bold text-text-secondary mb-2 flex items-center gap-1"><Zap size={12} className="text-gold" /> Demo Credentials:</div>
            <div>Admin: <span className="text-gold">admin@genuinestore.com</span> / <span className="text-gold">Admin@123</span></div>
            <div className="mt-1">User: <span className="text-gold">any email</span> / <span className="text-gold">any password</span></div>
          </div>

          <div className="text-center mt-5 text-text-muted text-sm">
            Don't have an account?{' '}
            <Link to="/register" className="text-gold font-semibold hover:underline">Create one</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
