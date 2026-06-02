import PrivateRoute from './components/PrivateRoute'
import { AuthProvider } from './context/AuthContext'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
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
import UserView from './UI/pages/Admin/UserView'
import SAAdminLayout from './UI/components/Admin/SAAdminLayout'
import SuperAdminDashboard from './UI/pages/Admin/SuperAdminDashboard'
import SuperAdminAccountManagement from './UI/pages/Admin/SuperAdminAccountManagement'
import SuperAdminCatalog from './UI/pages/Admin/SuperAdminCatalog'
import SuperAdminIndustryProducts from './UI/pages/Admin/SuperAdminIndustryProducts'
import SuperAdminLogin from './UI/pages/Admin/SuperAdminLogin'
import SellerStaffProductDetail from './UI/pages/Admin/SellerStaffProductDetail'
import SellerStaffProducts from './UI/pages/Admin/SellerStaffProducts'
import SellerStaffProductsUpload from './UI/pages/Admin/SellerStaffProductUpload'

// Industrial Park Admin Imports
import IPAdminLayout from './UI/components/Admin/IPAdminLayout'
import IPADashboard from './UI/pages/Admin/IPADashboard'
import IPACompanyManagement from './UI/pages/Admin/IPACompanyManagement'
import IPAAccountManager from './UI/pages/Admin/IPAAccountManager'
import IPAVerification from './UI/pages/Admin/IPAVerification'

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
      { path: 'users-list', element: <UserList /> },
      { path: 'users-view/:id', element: <UserView /> },
      { path: 'users-edit/:id', element: <UserEdit /> },
      { path: 'users-profile', element: <UserProfile /> },
      { path: 'approval-orders', element: <ApprovalOrders /> },
      { path: 'buyer-staff-orders', element: <BuyerStaffOrder /> },
      { path: 'seller-staff-orders', element: <SellerStaffOrder /> },
      { path: 'seller-products', element: <SellerStaffProducts /> },
      { path: 'seller-product-upload', element: <SellerStaffProductsUpload /> },
      { path: 'seller-product-details', element: <SellerStaffProductDetail /> },
      { path: 'buyer-staff-order-details', element: <BuyerStaffOrderDetails /> },
      { path: 'invoice-of-seller-order', element: <InvoiceOfSellerOrder /> },
      { path: 'return-orders', element: <ReturnOrder /> },
      { path: 'return-order-details', element: <ReturnOrderDetails /> }
    ],
  },
  // Super Admin  
  {
    path: '/saadmin',
    element: (
      <PrivateRoute roles={['SUPER_ADMIN']}>
        <SAAdminLayout />
      </PrivateRoute>
    ),
    children: [
      { path: 'sa-dashboard', element: <SuperAdminDashboard /> },
      { path: 'sa-accounts', element: < SuperAdminAccountManagement /> },
      { path: 'sa-catalog', element: <SuperAdminCatalog /> },
      { path: 'sa-catalog/:id/products', element: <SuperAdminIndustryProducts /> },
    ],
  },
  {
    path: '/saadmin/sa-login',
    element: <SuperAdminLogin />
  },
  // Industrial Park Admin
  {
    path: '/ipadmin',
    element: <IPAdminLayout />,
    children: [
      { index: true, element: <Navigate to="/ipadmin/dashboard" replace /> },
      { path: 'dashboard', element: <IPADashboard /> },
      { path: 'companies', element: <IPACompanyManagement /> },
      { path: 'accounts', element: <IPAAccountManager /> },
      { path: 'verification', element: <IPAVerification /> },

    ],
  },
  {
    path: '/saadmin/sa-login',
    element: <SuperAdminLogin />
  }
])

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
