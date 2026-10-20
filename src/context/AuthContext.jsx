import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

const MOCK_ADMIN = {
  _id: 'admin001',
  name: 'Admin User',
  email: 'admin@genuinestore.com',
  role: 'admin',
}

const MOCK_USER = {
  _id: 'user001',
  name: 'Demo User',
  email: 'user@example.com',
  role: 'user',
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('tgs_user')
    if (stored) {
      try { setUser(JSON.parse(stored)) } catch {}
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    // Mock auth - in real app this calls /api/auth/login
    await new Promise(r => setTimeout(r, 800))
    let loggedIn = null
    if (email === 'admin@genuinestore.com' && password === 'Admin@123') {
      loggedIn = MOCK_ADMIN
    } else if (email && password) {
      loggedIn = { ...MOCK_USER, email, name: email.split('@')[0] }
    } else {
      throw new Error('Invalid credentials')
    }
    setUser(loggedIn)
    localStorage.setItem('tgs_user', JSON.stringify(loggedIn))
    return loggedIn
  }

  const register = async (name, email, password) => {
    await new Promise(r => setTimeout(r, 800))
    const newUser = { _id: Date.now().toString(), name, email, role: 'user' }
    setUser(newUser)
    localStorage.setItem('tgs_user', JSON.stringify(newUser))
    return newUser
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('tgs_user')
  }

  const isAdmin = user?.role === 'admin'

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
