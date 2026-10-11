import { Outlet } from "react-router";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import "./Layout.css"
import { useState } from "react";
import Order from "../pages/order/Order.jsx";

export default function Layout() {

  const [isOrderOpen, setIsOrderOpen] = useState(false);

  return (
    <>
      <div className="layout-container">
        <Header onOpenOrder={() => setIsOrderOpen(true)} />

        <main className="layout-content">
          <Outlet />
        </main>

        <Footer />

        <Order isOpen={isOrderOpen} onClose={() => setIsOrderOpen(false)} />
      </div>
    </>
  )
}
