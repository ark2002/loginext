import "./UserCard.css";

const UserCard = () => {
  return (
    <div className="user__card flex__column">
      <img
        className="user__img"
        src="https://picsum.photos/400/250"
        alt="user__img"
      />
      <div className="user__details-container flex__column">
        <p className="text__large">John Doe</p>
        <div className="user__details flex__row-center">
          <span className="material-icons-outlined icon">mail</span>
          <p className="text__small">abc&gmail.com</p>
        </div>
        <div className="user__details flex__row-center">
          <span className="material-icons-outlined icon">call</span>
          <p className="text__small">+91-8369910242</p>
        </div>
        <div className="user__details flex__row-center">
          <span className="material-icons-outlined icon">language</span>
          <p className="text__small">gmail.com</p>
        </div>
      </div>
      <div className="user__choices flex__row-center">
          <span className="material-icons favorite">favorite_outline</span>
          <span className="material-icons-outlined icon edit">edit</span>
          <span className="material-icons-outlined icon delete" >delete</span>
        </div>
    </div>
  );
};

export { UserCard };
