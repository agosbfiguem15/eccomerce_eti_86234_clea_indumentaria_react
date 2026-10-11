import "./Home.css"
import ProductContainer from "../../components/product-container/ProductContainer"
import { NavLink } from "react-router"

export default function Home() {
  return (
    <>
      <section className="body-banner">
        <div className="banner-img">
          <img className="banner-img" src="https://res.cloudinary.com/ur7kfkyh/image/upload/v1790541800/banner.png" alt="Colección Primavera Verano 2026" />
        </div>
        <div className="banner-text">
          <h5>Colección Primavera/Verano 2026</h5>
          <p>Descubre todos nuestros nuevos ingresos para esta temporada.</p>
        </div>
      </section>
      <section className="body-hero">
        <div className="hero-content">
          <h2>
            <span className="highlighted-home">¡Bienvenidos a Clea Indumentaria!</span>
          </h2>
          <p className="highlighted-home-paragraph">
            En Clea Indumentaria, nos apasiona la moda y la calidad. Descubre
            nuestra amplia gama de productos, desde elegantes carteras hasta cómoda
            indumentaria, diseñadas para complementar tu estilo único. ¡Explora
            nuestra colección y encuentra el accesorio perfecto para cada ocasión!
          </p>
        </div>
        <div className="hero-image">
          <img
            src="https://res.cloudinary.com/ur7kfkyh/image/upload/v1790544711/body_isometrico.jpg"
            alt="Imagen de bienvenida a Clea Indumentaria"
          />
        </div>
      </section>
      <section className="featured-products">
        <div className="products-content">
          <h2>Productos</h2>
          <h2>
            <NavLink className="products-link" to="/products">
              Ver todos los productos
            </NavLink>
          </h2>
        </div>
        <ProductContainer />
      </section>
      <section className="store-benefits">
        <div className="store-payment">
          <div className="store-icon">
            <i className="fa-solid fa-wallet fa-2xl" />
          </div>
          <h3>Elegí cómo pagar</h3>
          <p>Podés pagar con efectivo, débito o en cuotas sin tarjeta</p>
        </div>
        <div className="store-shipping">
          <div className="store-icon">
            <i className="fa-solid fa-truck-fast fa-2xl" />
          </div>
          <h3>Envío gratis desde $50.000</h3>
          <p>Envios en distintas zonas del sur tucumano</p>
        </div>
        <div className="store-warranty">
          <div className="store-icon">
            <i className="fa-solid fa-shield-heart fa-2xl" />
          </div>
          <h3>Seguridad, de principio a fin</h3>
          <p>En Clea Indumentaria, estás siempre protegido</p>
        </div>
      </section>
    </>
  )
}
