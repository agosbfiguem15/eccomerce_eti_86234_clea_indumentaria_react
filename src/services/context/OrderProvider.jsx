import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const OrderContext = createContext();

export default function OrderProvider({ children }) {

  const [order, setOrder] = useState([]);
  
  const totalItems = order.reduce((acumulador, producto) => {
    return acumulador + producto.quantity;
  }, 0);

  function addItemToOrder(producto) {

    const indiceProductoExiste = order.findIndex(
      (item) => item.id === producto.id
    );

    if (indiceProductoExiste >= 0) {
      const copiaOrder = structuredClone(order);
      const cantidadActual = copiaOrder[indiceProductoExiste].quantity;
      if (cantidadActual >= Number(producto.stock)) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No hay suficiente stock disponible para agregar más unidades de este producto.',
        });
        return;
      }
      copiaOrder[indiceProductoExiste].quantity += 1;
      setOrder(copiaOrder);
    } else {
      if (Number(producto.stock) <= 0) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No hay stock disponible para este producto.',
        });
        return;
      }
      setOrder((prevOrder) => [
        ...prevOrder,
        { ...producto, quantity: 1 }
      ]);
    }
  }

  function decreaseItemQuantity(productoId) {
    const copiaOrder = structuredClone(order);
    const indiceProducto = copiaOrder.findIndex((item) => item.id === productoId
    );
    if (indiceProducto >= 0) {
      if (copiaOrder[indiceProducto].quantity > 1) {
        copiaOrder[indiceProducto].quantity -= 1;
        setOrder(copiaOrder);
      }
    }
  }

  function removeItemFromOrder(productoId) {
    const filteredOrder = order.filter(
      (item) => item.id !== productoId
    );
    setOrder(filteredOrder);
  }

  async function handleDelete(producto) {
  const result = await Swal.fire({
    title: "¿Eliminar producto?",
    text: `¿Querés eliminar ${producto.name} del carrito?`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
  });
  if (result.isConfirmed) {
    removeItemFromOrder(producto.id);
    Swal.fire({
      icon: "success",
      title: "Producto eliminado",
      text: "El producto se eliminó correctamente del carrito.",
    });
  }
}

  return (
    <OrderContext.Provider value={{ order, setOrder, addItemToOrder, totalItems, decreaseItemQuantity, handleDelete, removeItemFromOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

