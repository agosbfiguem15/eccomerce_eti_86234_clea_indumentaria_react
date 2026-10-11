import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDate } from "../../utils/dateUtils.js";

export default function UserRow({user, handleDelete, handleEdit}) {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{formatDate(user.createDate)}</td>
      <td>{formatDate(user.date)}</td>
      <td>
        <div className="action-buttons">
          <button type="button" className="btn btn-secondary action-btn" onClick={() => handleEdit(user.id)}>
            <FontAwesomeIcon icon={faPencil} />
          </button>
          <button type="button" className="btn btn-danger action-btn" onClick={() => handleDelete(user.id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </td>
    </tr>
  )
}
