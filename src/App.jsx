import './App.css'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Home from './pages/home/Home'
import AdminUsers from './pages/admin/users/AdminUsers'
import AdminProduct from './pages/admin/products/AdminProduct'
import { Route, Routes } from 'react-router'
import Products from './pages/admin/products/Products'
import ProductDetail from './pages/product-detail/ProductDetail'
import Admin from './pages/admin/panel-administrador/Admin'
import Register from './pages/register/Register'
import Layout from './layout/Layout'
import Login from './pages/login/Login'

export default function App() {

  return (
    <>
      <main className="main-container">
        <Routes>

          <Route path="/login" element={<Login />} />

          <Route element={ <Layout /> } >  
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/products" element={<AdminProduct />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/products-detail/:id" element={<ProductDetail />} />

          <Route path="*" element={<div className="not-found"><h1>404 - Page Not Found</h1></div>} />
          </Route>
        </Routes>
      </main>
      
    </>
  )
}
