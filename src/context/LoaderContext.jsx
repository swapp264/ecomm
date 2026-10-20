import { createContext, useContext, useState, useCallback, useEffect } from 'react'

const LoaderContext = createContext()

export function LoaderProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true)

  // Auto-hide loader on mount after 3.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3500)
    return () => clearTimeout(timer)
  }, [])

  const triggerLoader = useCallback(() => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 3200)
  }, [])

  const hideLoader = useCallback(() => setIsLoading(false), [])

  return (
    <LoaderContext.Provider value={{ isLoading, triggerLoader, hideLoader }}>
      {children}
    </LoaderContext.Provider>
  )
}

export function useLoader() {
  return useContext(LoaderContext)
}
