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
import SuperAdminDashboard from './UI/pages/Admin/SuperAdminDashboard'
import SuperAdminAccountManagement from './UI/pages/Admin/SuperAdminAccountManagement'
import SuperAdminCatalog from './UI/pages/Admin/SuperAdminCatalog'
import SuperAdminIndustryProducts from './UI/pages/Admin/SuperAdminIndustryProducts'
import SellerStaffProductDetail from './UI/pages/Admin/SellerStaffProductDetail'
import SellerStaffProducts from './UI/pages/Admin/SellerStaffProducts'
import SellerStaffProductsUpload from './UI/pages/Admin/SellerStaffProductUpload'
import ProductList from './UI/pages/Admin/ProductList'
import ProductEdit from './UI/pages/Admin/ProductEdit'
import ShowcaseManager from './UI/pages/Admin/ShowcaseManager'
import CompanyProfile from './UI/pages/Admin/CompanyProfile'

// Industrial Park Admin page imports
import IPADashboard from './UI/pages/Admin/IPADashboard'
import IPACompanyManagement from './UI/pages/Admin/IPACompanyManagement'
import IPAAccountManager from './UI/pages/Admin/IPAAccountManager'
import IPAVerification from './UI/pages/Admin/IPAVerification'

// Unified admin login
import AdminLogin from './UI/pages/Admin/CompanyAdminLogin'
import IPAStatistics from './UI/pages/Admin/IPAStatistics'

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
  // Unified admin login — public
  {
    path: '/admin/login',
    element: <AdminLogin />,
  },
  // All admin routes — protected, all 3 roles allowed
  {
    path: '/admin',
    element: (
      <PrivateRoute roles={['COMPANY_ADMIN', 'IP_ADMIN', 'SUPER_ADMIN', 'SELLER_STAFF', 'BUYER_STAFF']}>
        <AdminLayout />
      </PrivateRoute>
    ),
    children: [
      // ── Company Admin pages ──
      { path: 'dashboard', element: <CompanyAdminDashboard /> },
      { path: 'company-profile', element: <CompanyProfile /> },
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
      { path: 'return-order-details', element: <ReturnOrderDetails /> },

      // ── Product Management pages ──
      { path: 'products-list', element: <ProductList /> },
      { path: 'products-add', element: <ProductList /> },
      { path: 'products-edit/:id', element: <ProductEdit /> },

      // ── Super Admin pages ──
      { path: 'sa-dashboard', element: <SuperAdminDashboard /> },
      { path: 'sa-accounts', element: <SuperAdminAccountManagement /> },
      { path: 'sa-catalog', element: <SuperAdminCatalog /> },
      { path: 'sa-catalog/:id/products', element: <SuperAdminIndustryProducts /> },

      // ── IP Admin pages ──
      { path: 'ip-dashboard', element: <IPADashboard /> },
      { path: 'ip-showcase', element: <ShowcaseManager /> },
      { path: 'ip-companies', element: <IPACompanyManagement /> },
      { path: 'ip-accounts', element: <IPAAccountManager /> },
      { path: 'ip-verification', element: <IPAVerification /> },
      { path: 'ip-statistics', element: <IPAStatistics /> },
    ],
  },
])

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
