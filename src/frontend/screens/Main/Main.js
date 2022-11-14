import { UserCard } from "../../components";
import { useUser } from "../../context/UserContext";
import "./Main.css";

const Main = () => {
  const { users } = useUser();

  return (
    <div className="main flex__row-center">
      {users.map((user) => (
        <UserCard key={user.id.value} user={user} />
      ))}
    </div>
  );
};

export { Main };
