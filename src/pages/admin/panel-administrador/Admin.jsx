import { Link } from "react-router"
import "./Admin.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGear, faUserPen } from "@fortawesome/free-solid-svg-icons"

export default function Admin() {
  return (
    <section className="section-admin">
      <div className="admin-profile">
        <div className="admin-icon">
          <i className="fa-regular fa-circle-user fa-2xl" />
        </div>
        <div className="admin-information">
          <h2>Agostina Belen Figueroa Maidana</h2>
          <p>agosbfiguem15@gmail.com</p>
          <p>
            <large className="text-body-secondary">Administradora</large>
          </p>
        </div>
      </div>
      <div className="admin-cards">
        <div className="card-admin-card">
          <div className="card-body">
            <div className="card-icon">
              <FontAwesomeIcon icon={faUserPen} size="xl" />
            </div>
            <h5 className="card-title">Gestión de usuarios</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Administra usuarios y administradores
            </h6>
            <Link to="/admin/users" className="card-link">
              Gestionar
            </Link>
          </div>
        </div>
        <div className="card-admin-card">
          <div className="card-body">
            <div className="card-icon">
              <FontAwesomeIcon icon={faGear} size="xl" />
            </div>
            <h5 className="card-title">Gestión de productos</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Consulta, crea y administra los productos
            </h6>
            <Link to="/admin/products" className="card-link">
              Gestionar
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
