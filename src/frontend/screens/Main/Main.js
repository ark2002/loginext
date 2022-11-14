import { Loader, UserCard } from "../../components";
import { useUser } from "../../context/UserContext";
import "./Main.css";

const Main = () => {
  const {
    users: { userList, loading },
  } = useUser();

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="main flex__row-center">
          {userList.map((user) => (
            <UserCard key={user.id.value} user={user} />
          ))}
        </div>
      )}
    </>
  );
};

export { Main };
