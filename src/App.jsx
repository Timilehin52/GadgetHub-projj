import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router"
import Login from "./Pages/AuthPages/Login"
import SignUp from "./Pages/AuthPages/SignUp"
import ForgotPassword from "./Pages/AuthPages/ForgotPassword"
import EmailConfirm from "./Pages/AuthPages/EmailConfirmation"
import ResetPassword from "./Pages/AuthPages/ResetPassword"
import HomePage from "./Pages/HomePage"
import ScrollToTop from "./Components/ScrollToTop"
import ProductPage from "./Pages/ProductPage"
import ProductDetailsPage from "./Pages/ProductDetailsPage"
import CartPage from "./Pages/CartPage"
import CheckoutPage from "./Pages/CheckoutPage"
import Profile from "./Pages/Profile"
import ProtectRoute from "./Components/ProtectRoute"
import Dashboard from "./Components/Admin/Pages/Dashboard"
import AdminLayout from "./Components/Admin/Layout/AdminLayout"
import Orders from "./Components/Admin/Pages/Orders"
import Products from "./Components/Admin/Pages/Products"

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/emailconfirmation" element={<EmailConfirm />} />
        <Route path="/resetPassword/:token" element={<ResetPassword />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/profile" element={<ProtectRoute><Profile /></ProtectRoute>} />

       <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="products" element={<Products />} />
        {/* <Route path="customers" element={<Customers />} />
        <Route path="payments" element={<Payments />} />
        <Route path="settings" element={<AdminSettings />} /> */}
        </Route>

      </Routes>
       <ScrollToTop />
    </Router>
    </>
  ) 
}

export default App
