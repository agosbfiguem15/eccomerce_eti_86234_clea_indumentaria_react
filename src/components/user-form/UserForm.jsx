import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


export default function UserForm({ onSubmit, editingUser }) {

  const { register, handleSubmit, getValues, watch, reset, formState: { errors, isValid, isDirty } } = useForm({ mode: "onBlur", reValidateMode: "onChange",   defaultValues: { message: "Usuario registrado en Clea Indumentaria." }});
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  async function envioFormulario(data) {
    const resultado = await onSubmit(data);
    if (resultado === true && !editingUser) {
      reset();
    }
  }

  useEffect(() => {
    if (editingUser) {
      reset({
        name: editingUser.name ?? "",
        email: editingUser.email ?? "",
        password: editingUser.password ?? "",
        passwordConfirm: editingUser.password ?? "",
        date: editingUser.date ?? "",
        country: editingUser.country ?? "",
        province: editingUser.province ?? "",
        message: editingUser.message || "Usuario registrado en Clea Indumentaria."
      });
    } else {
      reset();
    }
  }, [editingUser, reset]);

  watch();

  return (
    <form action="" className="register-form" onSubmit={handleSubmit(envioFormulario)} noValidate>
      <label htmlFor="name">
        Nombre completo <span className="required">*</span>
      </label>
      <input
        id="name"
        type="text"
        {...register("name", {
          required: "El nombre completo es obligatorio",
          minLength: {
            value: 3,
            message: "El nombre completo debe tener al menos 3 caracteres"
          },
          maxLength: {
            value: 50,
            message: "El nombre completo no puede tener más de 50 caracteres"
          },
        })}
        placeholder="Escribe tu nombre completo"
      />
      {errors.name && <p className="error">{errors.name.message}</p>}

      <label htmlFor="email">
        Correo electronico <span className="required">*</span>
      </label>
      <input
        id="email"
        type="email"
        {...register("email", {
          required: "El correo electronico es obligatorio",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "El correo electronico no es valido"
          }
        })}
        placeholder="Escribe tu correo electronico"
      />
      {errors.email && <p className="error">{errors.email.message}</p>}

      <label htmlFor="password">
        Contraseña <span className="required">*</span>
      </label>
      <div className="password-container">
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          {...register("password", {
            required: "La contraseña es obligatoria",
            minLength: {
              value: 6,
              message: "La contraseña debe tener al menos 6 caracteres"
            },
            maxLength: {
              value: 100,
              message: "La contraseña no puede tener más de 100 caracteres"
            },
            pattern: {
              value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]{6,}$/,
              message: "La contraseña debe tener al menos 6 caracteres, una mayúscula, una minúscula y un número"
            }
          })}

          placeholder="Escribe tu contraseña"
          maxLength={100}
        />
        <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}>
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </button>
      </div>
      {errors.password && <p className="error">{errors.password.message}</p>}

      <label htmlFor="passwordConfirm">
        Repetir contraseña <span className="required">*</span>
      </label>
      <div className="password-container">
        <input
          id="passwordConfirm"
          type={showPasswordConfirm ? "text" : "password"}
          {...register("passwordConfirm", {
            required: "Es necesario confirmar la contraseña",
            validate: (value) => value === getValues("password") || "Las contraseñas no coinciden"
          })}

          placeholder="Repite tu contraseña"
          maxLength={100}
        />
        <button type="button" className="password-toggle" onClick={() => setShowPasswordConfirm(!showPasswordConfirm)} aria-label={showPasswordConfirm ? "Ocultar contraseña" : "Mostrar contraseña"}>
          <FontAwesomeIcon icon={showPasswordConfirm ? faEyeSlash : faEye} />
        </button>
      </div>
      {errors.passwordConfirm && <p className="error">{errors.passwordConfirm.message}</p>}

      <label htmlFor="date">
        Fecha de nacimiento <span className="required">*</span>
      </label>
      <input
        id="date"
        type="date"
        {...register("date", {
          required: "La fecha de nacimiento es obligatoria",
        })}
      />
      {errors.date && <p className="error">{errors.date.message}</p>}

      <label htmlFor="country">
        País <span className="required">*</span>
      </label>
      <select
        id="country"
        {...register("country", {
          required: "El país es obligatorio",
        })}
      >
        <option value="">Selecciona tu país</option>
        <option value="argentina">Argentina</option>
        <option value="chile">Chile</option>
        <option value="uruguay">Uruguay</option>
        <option value="paraguay">Paraguay</option>
        <option value="brasil">Brasil</option>
      </select>
      {errors.country && <p className="error">{errors.country.message}</p>}

      <label htmlFor="province">
        Provincia <span className="required">*</span>
      </label>
      <select
        id="province"
        {...register("province", {
          required: "La provincia es obligatoria",
        })}
      >
        <option value="">Selecciona tu provincia</option>
        <option value="tucuman">Tucumán</option>
        <option value="salta">Salta</option>
        <option value="cordoba">Córdoba</option>
        <option value="buenos_aires">Buenos Aires</option>
        <option value="mendoza">Mendoza</option>
      </select>
      {errors.province && <p className="error">{errors.province.message}</p>}

      <label htmlFor="message">Observacion</label>
      <textarea
        id="message"
        {...register("message")}
        placeholder="Escribe los detalles de tus observaciones aquí"
        minLength={20}
        maxLength={1000}
      />

      <button disabled={!isValid || (!editingUser && !isDirty)} type="submit" className="register-button">
        {editingUser ? "Editar usuario" : "Registrar usuario"}
      </button>
    </form>
  )
}
