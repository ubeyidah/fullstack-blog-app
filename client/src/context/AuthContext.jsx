import React, { createContext, useContext } from "react";
import { getSessionStorageItem } from "../utils/utils.js";

const authContext = createContext();
export const useAuthContext = () => useContext(authContext);
const AuthContext = (props) => {
  const [user, setUser] = React.useState(getSessionStorageItem());
  return (
    <authContext.Provider value={{ user, setUser }}>
      {props.children}
    </authContext.Provider>
  );
};

export default AuthContext;
