import { useUser } from "../../context/UserContext";
import "./DeleteModal.css";

const DeleteModal = ({ value, setModal }) => {
  const { dispatchUsers } = useUser();
  return (
    <div
      className="delete__modal flex__column-center"
      onClick={(e) => e.stopPropagation()}
    >
      <p className="text__large">Confirm Delete ?</p>
      <div className="delete__choices flex__row-center">
        <p
          className="delete__btn btn"
          onClick={() => dispatchUsers({ type: "DELETEUSER", payload: value })}
        >
          Delete
        </p>
        <p className="cancel__btn btn" onClick={() => setModal("")}>
          Cancel
        </p>
      </div>
    </div>
  );
};

export { DeleteModal };
