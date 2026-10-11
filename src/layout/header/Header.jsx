import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Header.css"
import { NavLink, useLocation } from "react-router"
import { faCartShopping, faCircleUser, faHeart, faUser } from "@fortawesome/free-solid-svg-icons"
import Offcanvas from "bootstrap/js/dist/offcanvas";
import { useEffect } from "react";
import useOrder from "../../services/context/UseOrder";

export default function Header({ onOpenOrder }) {
  const isAdmin = true;
  const location = useLocation();
  const { totalItems } = useOrder();

  function cerrarMenu() {
    const menu = document.getElementById("navContainer");

    if (menu) {
      const offcanvas = Offcanvas.getInstance(menu);
      offcanvas?.hide();
    }
    document.querySelectorAll(".offcanvas-backdrop").forEach((backdrop) => { backdrop.remove(); });

    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  }

  useEffect(() => {
    cerrarMenu();
  }, [location.pathname]);

  return (
    <header className="body-header">
      <div className="nav-container">
        <nav className="navbar">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navContainer" aria-controls="navContainer">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="offcanvas offcanvas-start" tabIndex={-1} id="navContainer">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title">Clea Indumentaria</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/home" onClick={cerrarMenu}>Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/products" onClick={cerrarMenu}>Productos</NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <button className="nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Contacto
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink className="dropdown-item" to="/contact" onClick={cerrarMenu}>
                          ¿Cómo contactarnos?
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item" to="/about" onClick={cerrarMenu}>
                          Nuestra historia
                        </NavLink>
                      </li>

                    </ul>
                  </li>
                  <li className="nav-item">
                    {isAdmin && (
                      <NavLink className="nav-link" to="/admin" onClick={cerrarMenu}>Administrador</NavLink>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="logo-container">
        <NavLink to="/home">
          <img className="logo" src="https://res.cloudinary.com/ur7kfkyh/image/upload/v1790469126/logo_clea.png" alt="Logo de Clea Indumentaria" />
        </NavLink>
      </div>
      <div className="icon-container">
        <ul>
          <li>
            <NavLink className="icon-item" to="/*">
              <FontAwesomeIcon icon={faHeart} />
            </NavLink>
          </li>
          <li>
            <button className="icon-item" type="button" onClick={onOpenOrder}>
              <FontAwesomeIcon icon={faCartShopping} />
              {totalItems > 0 && (
                <span className="cart-count">
                  {totalItems}
                </span>
              )}
            </button>
          </li>
          <li className="dropdown-user">
            <button className="icon-item" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <FontAwesomeIcon icon={faUser} />
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <NavLink className="dropdown-item" to="/login">
                  Iniciar sesion
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/register">
                  Registro
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="user-desktop">
            <NavLink className="icon-item" to="/login"><FontAwesomeIcon icon={faCircleUser} />
              Iniciar sesion
            </NavLink>
          </li>
          <li className="user-desktop">
            <NavLink className="icon-item" to="/register">
              Registro
            </NavLink>
          </li>
        </ul>
      </div>
    </header>

  )
}
