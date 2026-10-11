import { NavLink } from "react-router"
import "./Footer.css"
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <footer>
      <div className="footer-brand">
        <NavLink to="/home">
          <img className="logo" src="https://res.cloudinary.com/ur7kfkyh/image/upload/v1790469126/logo_clea.png" alt="Logo de Clea Indumentaria" />
        </NavLink>
        <ul>
          <hr />
          <li>
            <FontAwesomeIcon icon={faInstagram} />
            <a className="social-link" href="https://www.instagram.com/cleaindumentaria_/" target="_blank"
            > CLEA INDUMENTARIA</a>
          </li>
        </ul>
      </div>
      <div className="footer-contact">
        <FontAwesomeIcon icon={faEnvelope} /><span> agosbfiguem15@gmail.com</span><br></br>
        <FontAwesomeIcon icon={faPhone} /><span> +54 3865 647726</span><br></br>
        <FontAwesomeIcon icon={faLocationDot} /><span> Concepción, Tucumán</span><br></br>
      </div>
      <div className="footer-social">
        <ul>
          <li>© 2026 Clea Indumentaria. Todos los derechos reservados.</li>
        </ul>
      </div>
    </footer>

  )
}
