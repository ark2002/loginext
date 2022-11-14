import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { userReducer } from "../reducer/userReducer";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, dispatchUsers] = useReducer(userReducer, []);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("https://randomuser.me/api/?results=10&nat=us,au,br");
      dispatchUsers({ type: "INITIALSET", payload: data.results });
      console.log(data.results);
    })();
  }, []);

  return (
    <UserContext.Provider value={{ users, dispatchUsers }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
