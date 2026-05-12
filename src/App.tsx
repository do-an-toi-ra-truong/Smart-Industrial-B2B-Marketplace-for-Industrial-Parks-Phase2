import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import MainLayout from './UI/components/Users/UserLayout'
import HomePage from './UI/pages/Users/HomePage'
import About from './UI/pages/Users/About'
import Category from './UI/pages/Users/Category'
import ProductDetails from './UI/pages/Users/ProductDetails'
import Cart from './UI/pages/Users/Cart'
import Checkout from './UI/pages/Users/Checkout'
import Login from './UI/pages/Users/Login'
import ForgotPassword from './UI/pages/Users/ForgotPassword'
import Register from './UI/pages/Users/Register'
import Account from './UI/pages/Users/Account'
import CompanyDetail from './UI/pages/Users/CompanyDetail'
import Rqf from './UI/pages/Users/Rqf'
import Contact from './UI/pages/Users/Contact'
import Support from './UI/pages/Users/Support'
import Privacy from './UI/pages/Users/Privacy'
import ReturnPolicy from './UI/pages/Users/ReturnPolicy'
import TermOfService from './UI/pages/Users/TermOfService'
import AdminLayout from './UI/components/Admin/AdminLayout'
import UserEdit from './UI/pages/Admin/UserEdit'
import UserList from './UI/pages/Admin/UserList'
import UserProfile from './UI/pages/Admin/UserProfile'
import CompanyAdminDashboard from './UI/pages/Admin/CompanyAdminDashboard'
import ApprovalOrders from './UI/pages/Admin/ApprovalOrders'
import BuyerStaffOrder from './UI/pages/Admin/BuyerStaffOrder'
import BuyerStaffOrderDetails from './UI/pages/Admin/BuyerStaffOrderDetails'
import SellerStaffOrder from './UI/pages/Admin/SellerStaffOrder'
import InvoiceOfSellerOrder from './UI/pages/Admin/InvoiceOfSellerOrder'
import ReturnOrder from './UI/pages/Admin/ReturnOrder'
import ReturnOrderDetails from './UI/pages/Admin/ReturnOrderDetails'
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
      { path: 'forgot-password', element: <ForgotPassword /> },
      { path: 'register', element: <Register /> },
      { path: 'account', element: <Account /> },
      { path: 'company-detail', element: <CompanyDetail /> },
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
      { path: 'dashboard', element: <CompanyAdminDashboard /> },
      { path: 'users-edit', element: <UserEdit /> },
      { path: 'users-list', element: <UserList /> },
      { path: 'users-profile', element: <UserProfile /> },
      { path: 'approval-orders', element: <ApprovalOrders /> },
      { path: 'buyer-staff-orders', element: <BuyerStaffOrder /> },
      { path: 'seller-staff-orders', element: <SellerStaffOrder /> },
      { path: 'buyer-staff-order-details', element: <BuyerStaffOrderDetails /> },
      { path: 'invoice-of-seller-order', element: <InvoiceOfSellerOrder /> },
      { path: 'return-orders', element: <ReturnOrder /> },
      { path: 'return-order-details', element: <ReturnOrderDetails /> }
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { path: 'dashboard', element: <CompanyAdminDashboard /> },
      { path: 'users-edit', element: <UserEdit /> },
      { path: 'users-list', element: <UserList /> },
      { path: 'users-profile', element: <UserProfile /> },
      { path: 'approval-orders', element: <ApprovalOrders /> },
      { path: 'buyer-staff-orders', element: <BuyerStaffOrder /> },
      { path: 'seller-staff-orders', element: <SellerStaffOrder /> },
      { path: 'buyer-staff-order-details', element: <BuyerStaffOrderDetails /> },
      { path: 'invoice-of-seller-order', element: <InvoiceOfSellerOrder /> },
      { path: 'return-orders', element: <ReturnOrder /> },
      { path: 'return-order-details', element: <ReturnOrderDetails /> }
    ],
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
