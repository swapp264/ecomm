import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext'
import { LoaderProvider } from './context/LoaderContext'
import Layout from './components/layout/Layout'
import WeightliftingLoader from './components/loader/WeightliftingLoader'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import OrderConfirmation from './pages/OrderConfirmation'
import TrackOrder from './pages/TrackOrder'
import Login from './pages/Login'
import Register from './pages/Register'
import Account from './pages/Account'
import Wishlist from './pages/Wishlist'
import Search from './pages/Search'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminProducts from './pages/admin/AdminProducts'
import AdminOrders from './pages/admin/AdminOrders'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <LoaderProvider>
              <WeightliftingLoader />
              <Toaster
                position="top-right"
                toastOptions={{
                  style: {
                    background: '#1A1A1A',
                    color: '#FFFFFF',
                    border: '1px solid #303030',
                  },
                  success: {
                    iconTheme: { primary: '#FFC107', secondary: '#000' },
                  },
                  error: {
                    iconTheme: { primary: '#EF4444', secondary: '#fff' },
                  },
                }}
              />
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="shop" element={<Shop />} />
                  <Route path="shop/:category" element={<Shop />} />
                  <Route path="product/:slug" element={<ProductDetail />} />
                  <Route path="cart" element={<Cart />} />
                  <Route path="checkout" element={<Checkout />} />
                  <Route path="order-confirmation/:id" element={<OrderConfirmation />} />
                  <Route path="track-order" element={<TrackOrder />} />
                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<Register />} />
                  <Route path="account" element={<Account />} />
                  <Route path="wishlist" element={<Wishlist />} />
                  <Route path="search" element={<Search />} />
                  <Route path="admin" element={<AdminDashboard />} />
                  <Route path="admin/products" element={<AdminProducts />} />
                  <Route path="admin/orders" element={<AdminOrders />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </LoaderProvider>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
