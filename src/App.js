import React, { useState, createContext } from "react";
import Main from './Main';
import "./styles.css";

export const UserContext = createContext();

const App = () => {

  const [firstName, setFirstName] = useState("Dave");
  const [lastName, setLastName] = useState("Thomas");

  return (
    <UserContext.Provider value={{firstName, lastName}}>
      <Main />
    </UserContext.Provider>
  );
};

export default App;