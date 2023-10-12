import { DataContext } from "./dataContext"
import { useState } from "react";

const GlobalState = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  return <DataContext.Provider value={{
    isLoggedIn: isLoggedIn,
    user: user,
    setIsLoggedIn: setIsLoggedIn,
    setUser: setUser
  }}>
    {props.children}
  </DataContext.Provider>
}

export default GlobalState;
