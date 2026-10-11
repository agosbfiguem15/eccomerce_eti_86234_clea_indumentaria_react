import "./About.css"

export default function About() {
  return (
    <div className="about-container">
      <section className="section-ecommerce">
        <h2><span className="outstanding">CLEA INDUMENTARIA</span></h2>
        <p>Estilo, calidad y ese detalle que hace la diferencia</p>
      </section>
      <section className="section-proyect">
        <div className="information-proyect">
          <h2>
            <span className="outstanding">Proyecto Ecommerce</span>
          </h2>
          <p>
            Este proyecto fue desarrollado como trabajo integrador final del curso Full Stack Engineer. Consiste en un ecommerce orientado a la venta de indumentaria y marroquinería, diseñado para ofrecer una experiencia de navegación intuitiva, atractiva y adaptable a diferentes dispositivos.
          </p>
          <p>
            El sitio actualmente está desarrollado con React y cuenta con distintas secciones, como inicio, catálogo y detalle de productos, registro de usuarios, contacto e información sobre la marca. Además, incorpora un panel de administración para gestionar productos y usuarios mediante operaciones de creación, consulta, edición y eliminación.
          </p>
          <p>
            Para el desarrollo se utilizaron herramientas y tecnologías como React, React Router, JavaScript, CSS, Bootstrap, Axios y MockAPI, aplicando conceptos de componentes reutilizables, diseño responsive, validación de formularios, consumo de APIs y gestión dinámica de datos.
          </p>
        </div>
      </section>
      <section className="section-user">
        <div className="member">
          <div className="user-title">
            <h2>
              <span className="outstanding">
                Developer - Agostina Belen Figueroa Maidana
              </span>
            </h2>
          </div>
          <div className="card-about">
            <div className="card-body">
              <div className="card-user">
                <img
                  src="https://res.cloudinary.com/ur7kfkyh/image/upload/v1791072267/developer-agostina-figueroa.jpg"
                  alt="Developer Agostina Figueroa Maidana"
                />
              </div>
              <div className="card-description">
                <h3 className="card-title">Developer</h3>
                <h5>
                  Mi nombre es Agostina Belen Figueroa Maidana, soy Ingeniera en
                  Informatica y estudiante apasionada por el desarrollo de software
                  y las nuevas tecnologías.
                </h5>
                <h5>
                  Este proyecto representa la aplicación práctica de conocimientos
                  adquiridos en diseño web, experiencia de usuario y desarrollo
                  frontend. Mi objetivo es seguir creciendo profesionalmente en el
                  área tecnológica, creando soluciones innovadoras que combinen
                  funcionalidad, rendimiento y una experiencia de usuario de
                  calidad.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="member">
          <div className="user-title">
            <h2>
              <span className="outstanding">Propietaria - Katya Maria Drube</span>
            </h2>
          </div>
          <div className="card-about">
            <div className="card-body">
              <div className="card-user">
                <img
                  src="https://res.cloudinary.com/ur7kfkyh/image/upload/v1791244391/propietaria-katya-drube.jpg"
                  alt="Propietaria - Katya Maria Drube"
                />
              </div>
              <div className="card-description">
                <h3 className="card-title">Propietaria</h3>
                <h5>
                  Mi nombre es Katya Maria Drube y soy la fundadora de Clea
                  Indumentaria. Desde el inicio de este emprendimiento, mi objetivo
                  ha sido ofrecer productos de calidad que permitan a cada cliente
                  expresar su estilo con confianza y autenticidad.
                </h5>
                <h5>
                  Clea Indumentaria nació de mi pasión por la moda y el deseo de
                  brindar una experiencia de compra cercana, confiable y
                  personalizada. Cada producto es seleccionado con dedicación,
                  buscando combinar diseño, tendencia y calidad.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
