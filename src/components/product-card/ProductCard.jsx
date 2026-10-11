import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProductCard.css"
import { Link } from "react-router";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import useOrder from "../../services/context/UseOrder";

export default function ProductCard({ product }) {

  const { addItemToOrder } = useOrder();

  return (
    <div className="card">
      <div className="card-image">
        <img src={product.image} alt={product.name} />
        <Link to="/*" className="favorite-btn">
          <FontAwesomeIcon icon={faHeart} />
        </Link>
        <Link to={`/products/products-detail/${product.id}`} className="card-view">
          <FontAwesomeIcon icon={faEye} />
        </Link>
      </div>
      <div className="card-body">
        <h4 className="card-title">{product.name}</h4>
        <p className="card-text">Precio: ${product.price}</p>
        <p className="card-text">
          <small className="text-body-secondary">{product.category}</small>
        </p>
        <button className="btn btn-secondary" onClick={() => addItemToOrder(product)}>
          Comprar
        </button>
      </div>
    </div>
  )
}
