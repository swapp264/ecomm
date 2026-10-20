import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import CartDrawer from '../cart/CartDrawer'
import { useCart } from '../../context/CartContext'

export default function Layout() {
  const { isOpen, setIsOpen } = useCart()

  return (
    <div className="min-h-screen flex flex-col bg-bg-primary">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  )
}
