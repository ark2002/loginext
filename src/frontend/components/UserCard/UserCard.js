import "./UserCard.css";

const UserCard = ({ user }) => {
  const { profileImg, fullname, email, phone, website, liked } = user;
  return (
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
        <span className="material-icons favorite">
          {liked ? "favorite" : "favorite_outline"}
        </span>
        <span className="material-icons-outlined icon edit">edit</span>
        <span className="material-icons-outlined icon delete">delete</span>
      </div>
    </div>
  );
};

export { UserCard };
