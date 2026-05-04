import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './UI/components/Users/UserLayout'
import HomePage from './UI/pages/Users/HomePage'
import About from './UI/pages/Users/About'
import Category from './UI/pages/Users/Category'
import ProductDetails from './UI/pages/Users/ProductDetails'
import Cart from './UI/pages/Users/Cart'
import Checkout from './UI/pages/Users/Checkout'
import Login from './UI/pages/Users/Login'
import Register from './UI/pages/Users/Register'
import Account from './UI/pages/Users/Account'
import CompanyDetail from './UI/pages/Users/CompanyDetail'
import TrackOrder from './UI/pages/Users/TrackOrder'
import Rqf from './UI/pages/Users/Rqf'
import Contact from './UI/pages/Users/Contact'
import Support from './UI/pages/Users/Support'
import Privacy from './UI/pages/Users/Privacy'
import ReturnPolicy from './UI/pages/Users/ReturnPolicy'
import TermOfService from './UI/pages/Users/TermOfService'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <About /> },
      { path: 'category', element: <Category /> },
      { path: 'product-details', element: <ProductDetails /> },
      { path: 'cart', element: <Cart /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'account', element: <Account /> },
      { path: 'company-detail', element: <CompanyDetail /> },
      { path: 'track-order', element: <TrackOrder /> },
      { path: 'rfq', element: <Rqf /> },
      { path: 'contact', element: <Contact /> },
      { path: 'support', element: <Support /> },
      { path: 'privacy', element: <Privacy /> },
      { path: 'return-policy', element: <ReturnPolicy /> },
      { path: 'terms', element: <TermOfService /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
