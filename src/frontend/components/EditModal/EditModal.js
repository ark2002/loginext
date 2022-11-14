import { useState } from "react";
import { useUser } from "../../context/UserContext";
import "./EditModal.css";

const EditModal = ({ setModal, user }) => {
  const [editUser, setEditUser] = useState(user);

  const { dispatchUsers } = useUser();

  const { fullname, email, phone, website } = editUser;

  return (
    <form
      className="edit__modal-container flex__column-center"
      onClick={(e) => e.stopPropagation()}
      onSubmit={(e) => {
        e.preventDefault();
        setModal("");
        dispatchUsers({ type: "EDITUSER", payload: editUser });
      }}
    >
      <div className="edit__modal-top flex__row-center">
        <p className="text__large modal__title">Edit User</p>
        <span
          className="material-icons-outlined icon close"
          onClick={() => setModal("")}
        >
          close
        </span>
      </div>
      <div className="edit__modal flex__row-center">
        <div className="modal__labels-container flex__column">
          <div className="modal__label flex__row">
            <span className="required">*</span>
            <p className="text__large label">Name:</p>
          </div>
          <div className="modal__label flex__row">
            <span className="required">*</span>
            <p className="text__large label">Email:</p>
          </div>
          <div className="modal__label flex__row">
            <span className="required">*</span>
            <p className="text__large label">Phone:</p>
          </div>
          <div className="modal__label flex__row">
            <span className="required">*</span>
            <p className="text__large label">Website:</p>
          </div>
        </div>
        <div className="modal__inputs-container flex__column">
          <input
            type="text"
            className="modal__input"
            required
            value={fullname}
            onChange={(e) =>
              setEditUser({ ...editUser, fullname: e.target.value })
            }
          />
          <input
            type="text"
            className="modal__input"
            required
            value={email}
            onChange={(e) =>
              setEditUser({ ...editUser, email: e.target.value })
            }
          />
          <input
            type="text"
            className="modal__input"
            required
            value={phone}
            onChange={(e) =>
              setEditUser({ ...editUser, phone: e.target.value })
            }
          />
          <input
            type="text"
            className="modal__input"
            required
            value={website}
            onChange={(e) =>
              setEditUser({ ...editUser, website: e.target.value })
            }
          />
        </div>
      </div>
      <div className="edit__modal-choices flex__row-center">
        <p className="btn cancel__btn" onClick={() => setModal("")}>
          Cancel
        </p>
        <button className="btn submit__btn" type="submit">
          OK
        </button>
      </div>
    </form>
  );
};

export { EditModal };
