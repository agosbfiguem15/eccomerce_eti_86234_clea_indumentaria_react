import axios from "axios";
import Swal from "sweetalert2";

const URL_BASE = "https://6a8b2f2f55d899aede9bad32.mockapi.io";

export async function getProducts() {
  try {
    const response = await axios.get(`${URL_BASE}/products`);
    const products = response.data;
    return products;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Hubo un error al obtener los productos",
      text: `Verifique nuevamente, ocurrió un error al obtener los productos: ${error}`,
    });
  }
}

export async function getProductById(id) {
  try {
    const response = await axios.get(`${URL_BASE}/products/${id}`);
    const product = response.data;
    return product;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Hubo un error al obtener los productos",
      text: `Verifique nuevamente, ocurrió un error al obtener los productos: ${error}`,
    });
  }
}

export async function createProduct(data) {
  try {
    const product = {
      ...data,
      createDate: new Date().toISOString(),
    };
    await axios.post(`${URL_BASE}/products`, product);
    Swal.fire({
      icon: "success",
      title: "Registro exitoso",
      text: "El producto se ha registrado correctamente",
    });
    return true;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error al registrar",
      text: `Verifique nuevamente, ocurrió un error al registrar el producto: ${error}`,
    });
    return false;
  }
}

export async function deleteProduct(id) {
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
    await axios.delete(`${URL_BASE}/products/${id}`);
    Swal.fire({
      icon: "success",
      title: "Producto eliminado",
      text: "El producto se ha eliminado correctamente",
    });
    return true;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error al eliminar",
      text: `Verifique nuevamente, ocurrió un error al eliminar el producto: ${error}`,
    });
    return false;
  }
}

export async function updateProduct(id, data) {
  try {
    await axios.put(`${URL_BASE}/products/${id}`, data);
    Swal.fire({
      icon: "success",
      title: "Producto editado",
      text: "El producto se editó correctamente",
    });
    return true;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error al editar el producto",
      text: `Verifique nuevamente, ocurrió un error al editar el producto: ${error}`,
    });
    return false;
  }
}