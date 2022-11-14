import { useState } from "react";
import { useUser } from "../../context/UserContext";
import { DeleteModal } from "../DeleteModal/DeleteModal";
import "./UserCard.css";

const UserCard = ({ user }) => {
  const {
    profileImg,
    fullname,
    email,
    phone,
    website,
    liked,
    id: { value },
  } = user;
  const { dispatchUsers } = useUser();

  const [modal, setModal] = useState("");

  return (
    <>
      {modal && (
        <div
          className="modal__wrapper flex__column-center"
          onClick={() => setModal("")}
        >
          {modal === "delete" ? (
            <DeleteModal value={value} setModal={setModal} />
          ) : (
            <></>
          )}
        </div>
      )}
      <div className="user__card flex__column">
        <img className="user__img" src={profileImg} alt="user__img" />
        <div className="user__details-container flex__column">
          <p className="text__large">{fullname}</p>
          <div className="user__details flex__row-center">
            <span className="material-icons-outlined icon">mail</span>
            <p className="text__small">{email}</p>
          </div>
          <div className="user__details flex__row-center">
            <span className="material-icons-outlined icon">call</span>
            <p className="text__small">{phone}</p>
          </div>
          <div className="user__details flex__row-center">
            <span className="material-icons-outlined icon">language</span>
            <p className="text__small">{website}</p>
          </div>
        </div>
        <div className="user__choices flex__row-center">
          <span
            className="material-icons favorite"
            onClick={() =>
              dispatchUsers({ type: "LIKETOGGLE", payload: value })
            }
          >
            {liked ? "favorite" : "favorite_outline"}
          </span>
          <span className="material-icons-outlined icon edit">edit</span>
          <span
            className="material-icons-outlined icon delete"
            onClick={() => setModal("delete")}
          >
            delete
          </span>
        </div>
      </div>
    </>
  );
};

export { UserCard };
