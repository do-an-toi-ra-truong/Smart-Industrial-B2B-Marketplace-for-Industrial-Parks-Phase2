import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
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
import AdminLayout from './UI/components/Admin/AdminLayout'
import UserView from './UI/pages/Admin/UserView'
import UserEdit from './UI/pages/Admin/UserEdit'
import UserList from './UI/pages/Admin/UserList'
import UserProfile from './UI/pages/Admin/UserProfile'
import CompanyAdminDashboard from './UI/pages/Admin/CompanyAdminDashboard'
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
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { path: 'cadashboard', element: <CompanyAdminDashboard /> },
      { path: 'users-view', element: <UserView /> },
      { path: 'users-edit', element: <UserEdit /> },
      { path: 'users-list', element: <UserList /> },
      {path: 'users-profile', element: <UserProfile /> },
       
    ],
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
