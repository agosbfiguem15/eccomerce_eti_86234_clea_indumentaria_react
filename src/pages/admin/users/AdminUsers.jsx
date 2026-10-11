import { useEffect, useState } from "react";
import UserRow from "../../../components/user-row/UserRow";
import "./AdminUsers.css";
import { createUser, getUsers, deleteUser, updateUser } from "../../../services/user.service";
import UserForm from "../../../components/user-form/UserForm";
import Swal from "sweetalert2";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  async function obtenerUsuarios() {
    try {
      const users = await getUsers();
      if (users) {
        setUsers(users);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al cargar los usuarios",
        text: `Error al cargar los usuarios: ${error}`,
      });
    }
  }

  async function envioFormulario(data) {
    let resultado;
    if (editingUser) {
      const user = {
        ...data,
        createDate: editingUser.createDate,
      };
      resultado = await updateUser(editingUser.id, user);
    } else {
      resultado = await createUser(data);
    }
    if (resultado) {
      setEditingUser(null);
      await obtenerUsuarios();
    }
    return resultado;
  }

  async function handleDelete(id) {
    const resultado = await deleteUser(id);
    if (resultado) {
      await obtenerUsuarios();
    }
  }

  function handleEdit(id) {
    try {
      const editUser = users.find((user) => user.id === id);
      if (editUser) {
        setEditingUser(editUser);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al editar el usuario",
        text: `Verifique nuevamente, ocurrió un error al editar el usuario: ${error}`,
      });
    }
  }

  return (
    <section className="admin-users-section">
      <section className="section-users">
        <div className="title-table">
          <h2>
            <span className="highlight">Listado de usuarios</span>
          </h2>
        </div>
        <div className="users-table">
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Fecha de registro</th>
                <th>Fecha de nacimiento</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((user) =>
                  <UserRow key={user.id} user={user} handleDelete={handleDelete} handleEdit={handleEdit} />)
              }
            </tbody>
          </table>
        </div>
      </section>

      <section className="create-user">
        <div className="create-title">
          <h2>
            <span className="highlight">
              Crear usuario
            </span>
          </h2>
        </div>
        <div className="create-container">
          <UserForm
            key={editingUser ? editingUser.id : "nuevo"}
            onSubmit={envioFormulario}
            editingUser={editingUser}
          />
        </div>
      </section>
    </section>
  )
}
