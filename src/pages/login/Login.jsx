import { NavLink, useNavigate } from "react-router";
import "./Login.css"

export default function Login() {

  const navigate = useNavigate();

  function envioFormulario(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log("Datos del login:", data);
    navigate("/home");
  }

  return (
    <section className="login-section">
      <div className="login-container">
        <div className="login-image">
          <img src="https://res.cloudinary.com/ur7kfkyh/image/upload/v1791597976/minibag_valentino_2.jpg" alt="Login Clea Indumentaria"></img>
        </div>
        <div className="login-content">
          <div className="login-title">
            <h2 className="title">¡Bienvenidos!</h2>
            <hr className="login-line" />
            <p>Ingresá tus datos para continuar.</p>
          </div>
          <div className="login-form">
            <form onSubmit={envioFormulario}>
              <label htmlFor="email">
                Correo electronico
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Escribe tu correo electronico"
              />

              <label htmlFor="password">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Escribe tu contraseña"
              />
              <button type="submit">Iniciar sesión</button>
            </form>
            <p>
              ¿Todavía no tenés cuenta?{" "}
              <NavLink className="login-link" to="/register">
                Registrate
              </NavLink>
            </p>
          </div>

        </div>
      </div>

    </section>
  )
}
