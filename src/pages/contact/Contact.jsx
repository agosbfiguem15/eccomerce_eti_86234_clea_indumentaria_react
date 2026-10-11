import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Contact.css"
import { faClock } from "@fortawesome/free-solid-svg-icons"

export default function Contact() {
  return (
    <div className="contact">
      <section className="contact-section">
        <div className="contact-content">
          <h1>Comunícate con nosotras</h1>
          <h3>¿Tienes alguna pregunta? Estamos aquí para ayudarte.</h3>
        </div>
        <div className="contact-container">
          <form action="" className="contact-form">
            <label htmlFor="name">
              Nombre completo <span className="required">*</span>
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required=""
              placeholder="Escriba su nombre completo"
              maxLength={50}
            />
            <label htmlFor="email">
              Correo electronico <span className="required">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required=""
              placeholder="Escriba su correo electronico"
              maxLength={100}
            />
            <label htmlFor="subject">
              Asunto <span className="required">*</span>
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              required=""
              placeholder="¿Sobre que tema deseas ayuda?"
              maxLength={100}
            />
            <label htmlFor="message">
              Mensaje <span className="required">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Escribe los detalles de tus observaciones aquí"
              required=""
              minLength={20}
              maxLength={1000}
              rows={5}
              defaultValue={""}
            />
            <button type="submit" className="form-button">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>
      <section className="contact-location">
        <div className="contact-content">
          <h1>Visitanos</h1>
          <h3>Ubicá nuestro local y vení a conocernos</h3>
        </div>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3543.3973571622296!2d-65.59592911587865!3d-27.363303165289864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1780705912457!5m2!1ses!2sar"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
      <section className="contact-information">
        <div className="store-schedule">
          <div className="store-icon">
            <FontAwesomeIcon icon={faClock} size="2xl"/>
          </div>
          <h3>Horarios de atencion</h3>
          <p>08:00 am a 12:00 pm - 17:00 pm a 21:00 pm</p>
        </div>
        <div className="store-contact">
          <div className="store-icon">
            <FontAwesomeIcon icon={faClock} size="2xl"/>
          </div>
          <h3>Atención personalizada</h3>
          <p>Estamos disponibles para ayudarte y responder todas tus consultas</p>
        </div>
      </section>
    </div>
  )
}
