import { useEffect, useState } from "react";
import "./ProductDetail.css"
import Swal from "sweetalert2";
import { getProductById } from "../../services/product.service";
import { Link, useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import useOrder from "../../services/context/UseOrder.jsx";

export default function ProductDetail() {

  const [producto, setProducto] = useState();
  const params = useParams();
  const id = params.id;
  const { addItemToOrder } = useOrder();

  useEffect(() => {
    async function obtenerElProducto() {
      try {
        const product = await getProductById(id);
        if (product) {
          setProducto(product);
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Hubo un error al cargar el producto",
          text: `Error al cargar el producto: ${error}`,
        });
      }
    }
    obtenerElProducto();
  }, [id]);

  return (
    <div className="product-container">
      <div className="product-image">
        <img src={producto?.image} alt={producto?.name} />
      </div>
      <div className="product-body">
        <Link to="/*" className="favorite-btn">
          <FontAwesomeIcon icon={faHeart} />
        </Link>
        <p className="product-category">
          <large className="text-body-secondary">{producto?.category}</large>
        </p>
        <h2 className="product-title">{producto?.name}</h2>
        <div className="product-price">Precio: <span className="highlight"> ${Number(producto?.price)}</span>
        </div>
        <p className="product-description">{producto?.description}</p>
        <div className="product-dimensions">
          <h4 className="dimensions-title">
            <span className="highlight">Dimensiones</span>
          </h4>
          <ul className="dimensions-list">
            <li>
              <strong>Altura:</strong> {producto?.height} cm
            </li>
            <li>
              <strong>Ancho:</strong> {producto?.width} cm
            </li>
            <li>
              <strong>Profundidad:</strong> {producto?.depth} cm
            </li>
          </ul>
        </div>
        <div className="product-button">
          <button className="btn btn-secondary" disabled={!producto || Number(producto.stock) <= 0} onClick={() => addItemToOrder(producto)}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  )
}
