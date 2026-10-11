import axios from "axios";
import Swal from "sweetalert2";

const URL_BASE = "https://6a8b2f2f55d899aede9bad32.mockapi.io";

export async function getUsers() {
  try {
    const response = await axios.get(`${URL_BASE}/users`);
    const users = response.data;
    return users;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Hubo un error al obtener los usuarios",
      text: `Verifique nuevamente, ocurrió un error al obtener los usuarios: ${error}`,
    });
  }
}

export async function getUserById(id) {
  try {
    const response = await axios.get(`${URL_BASE}/users/${id}`);
    const user = response.data;
    return user;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Hubo un error al obtener los usuarios",
      text: `Verifique nuevamente, ocurrió un error al obtener los usuarios: ${error}`,
    });
  }
}

export async function createUser(data) {
  try {
    const user = {
      ...data,
      createDate: new Date().toISOString(),
    };
    await axios.post(`${URL_BASE}/users`, user);
    Swal.fire({
      icon: "success",
      title: "Registro exitoso",
      text: "El usuario se ha registrado correctamente",
    });
    return true;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error al registrar",
      text: `Verifique nuevamente, ocurrió un error al registrar el usuario: ${error}`,
    });
    return false;
  }
}

export async function deleteUser(id) {
  try {
    const confirmResult = await Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });
    if (!confirmResult.isConfirmed) {
      return false;
    }
    await axios.delete(`${URL_BASE}/users/${id}`);
    Swal.fire({
      icon: "success",
      title: "Usuario eliminado",
      text: "El usuario se ha eliminado correctamente",
    });
    return true;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error al eliminar",
      text: `Verifique nuevamente, ocurrió un error al eliminar el usuario: ${error}`,
    });
    return false;
  }
}

export async function updateUser(id, data) {
  try {
    await axios.put(`${URL_BASE}/users/${id}`, data);
    Swal.fire({
      icon: "success",
      title: "Usuario editado",
      text: "El usuario se editó correctamente",
    });
    return true;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error al editar el usuario",
      text: `Verifique nuevamente, ocurrió un error al editar el usuario: ${error}`,
    });
    return false;
  }
}
