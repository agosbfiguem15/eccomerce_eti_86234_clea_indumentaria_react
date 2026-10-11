import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "../../utils/dateUtils.js";

export default function ProductRow({ prod, handleDelete, handleEdit }) {

  return (
    <tr>
      <td>{prod.name}</td>
      <td>${Number(prod.price)}</td>
      <td>{prod.description}</td>
      <td><img src={prod.image} alt={prod.name} className="table-img"/></td>
      <td>{prod.category.toUpperCase()}</td>
      <td>{formatDate(prod.date)}</td>
      <td>
        <div className="action-buttons">
        <button type="button" className="btn btn-secondary action-btn" onClick={() => handleEdit(prod.id)}>
          <FontAwesomeIcon icon={faPencil} />
        </button>
        <button type="button" className="btn btn-danger action-btn" onClick={() => handleDelete(prod.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
        </div>
      </td>
    </tr>
  );
}