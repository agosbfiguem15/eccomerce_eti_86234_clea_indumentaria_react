import "./Order.css";
import useOrder from "../../services/context/UseOrder.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Order({ isOpen, onClose }) {

  const { order, decreaseItemQuantity, addItemToOrder, handleDelete, totalItems } = useOrder();

  return (
    <div className={`order-container ${isOpen ? "open" : ""}`}>

      <div className="order-header">
        <h2>Mi carrito de compras</h2>
        <button type="button" onClick={onClose}>✕</button>
      </div>

      <div className="order-body">
        {
          order.length === 0 ? (<p className="order-empty">Tu carrito está vacío.</p>) :
            <table className="table order-table">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {order.map((producto) => (
                  <tr key={producto.id}>
                    <td>
                      <div className="order-product">
                        <img src={producto.image} alt={producto.name} className="order-product-image" />
                        {producto.name}
                      </div>
                    </td>

                    <td>
                      <div className="order-quantity">
                        <button className="icon-order-btn" type="button" onClick={() => decreaseItemQuantity(producto.id)} disabled={producto.quantity <= 1}>
                          <FontAwesomeIcon icon={faMinus} />
                        </button>

                        {producto.quantity}

                        <button className="icon-order-btn" type="button" onClick={() => addItemToOrder(producto)} disabled={producto.quantity >= Number(producto.stock)}>
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                    </td>

                    <td>${Number(producto.price * producto.quantity)}</td>
                    <td>
                      <button type="button" className="icon-order-btn" onClick={() => handleDelete(producto)}>
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        }
        <div className="order-total-card">
          <span className="total-card">Total de la compra</span>
          <strong>
            ${totalItems > 0 ? order.reduce((total, producto) => total + (Number(producto.price) * Number(producto.quantity)), 0) : 0}
          </strong>
        </div>
      </div>
    </div>
  )
}
