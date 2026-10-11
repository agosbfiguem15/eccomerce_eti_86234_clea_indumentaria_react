import "./Register.css";
import UserForm from "../../components/user-form/UserForm";
import { createUser } from "../../services/user.service";

export default function Register() {

  return (
    <section className="register-section">
      <div className="register-content">
        <h1>Registrate aqui</h1>
        <h3>Creá tu cuenta y disfrutá de una experiencia de compra más rápida y
          personalizada.</h3>
      </div>
      <div className="register-container">
        <UserForm onSubmit={createUser} />
      </div>
    </section>

  )
}
